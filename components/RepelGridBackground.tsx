"use client";

import { ReactNode, useEffect, useMemo, useRef, useState } from "react";

type TileMeta = {
  x: number;
  y: number;
  left: number;
  top: number;
};

type TileOffset = {
  x: number;
  y: number;
};

const MOBILE_TILE_SIZE = 44;
const DESKTOP_TILE_SIZE = 56;
const RADIUS = 220;
const STRENGTH = 42;
const RETURN_SPEED = 0.14;

interface RepelGridBackgroundProps {
  children: ReactNode;
}

export default function RepelGridBackground({
  children,
}: RepelGridBackgroundProps) {
  const [viewport, setViewport] = useState({ width: 0, height: 0 });
  const reducedMotionRef = useRef(false);
  const tileRefs = useRef<HTMLDivElement[]>([]);
  const glowRefs = useRef<HTMLDivElement[]>([]);
  const pointerRef = useRef({ x: 0, y: 0, active: false });
  const offsetsRef = useRef<TileOffset[]>([]);
  const frameRef = useRef<number | null>(null);

  const tileSize =
    viewport.width > 0 && viewport.width < 768 ? MOBILE_TILE_SIZE : DESKTOP_TILE_SIZE;

  const tiles = useMemo(() => {
    if (!viewport.width || !viewport.height) return [] as TileMeta[];

    const cols = Math.ceil(viewport.width / tileSize);
    const rows = Math.ceil(viewport.height / tileSize);
    const all: TileMeta[] = [];

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const left = col * tileSize;
        const top = row * tileSize;

        all.push({
          x: left + tileSize / 2,
          y: top + tileSize / 2,
          left,
          top,
        });
      }
    }

    return all;
  }, [tileSize, viewport.height, viewport.width]);

  useEffect(() => {
    offsetsRef.current = tiles.map(() => ({ x: 0, y: 0 }));
    tileRefs.current = tileRefs.current.slice(0, tiles.length);
    glowRefs.current = glowRefs.current.slice(0, tiles.length);
  }, [tiles]);

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const updateViewport = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateViewport();
    window.addEventListener("resize", updateViewport);

    return () => {
      window.removeEventListener("resize", updateViewport);
    };
  }, []);

  useEffect(() => {
    if (reducedMotionRef.current) return;

    const onPointerMove = (event: PointerEvent) => {
      pointerRef.current.x = event.clientX;
      pointerRef.current.y = event.clientY;
      pointerRef.current.active = true;
    };

    const deactivate = () => {
      pointerRef.current.active = false;
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", deactivate, { passive: true });
    window.addEventListener("pointercancel", deactivate, { passive: true });
    window.addEventListener("blur", deactivate);

    const tick = () => {
      const pointer = pointerRef.current;

      for (let i = 0; i < tiles.length; i++) {
        const tile = tiles[i];
        const element = tileRefs.current[i];
        const glow = glowRefs.current[i];
        const offset = offsetsRef.current[i];

        if (!element || !glow || !offset) continue;

        let targetX = 0;
        let targetY = 0;
        let influence = 0;

        if (pointer.active) {
          const dx = tile.x - pointer.x;
          const dy = tile.y - pointer.y;
          const distance = Math.hypot(dx, dy);

          if (distance < RADIUS && distance > 0.001) {
            influence = 1 - distance / RADIUS;
            const force = STRENGTH * influence * influence;
            targetX = (dx / distance) * force;
            targetY = (dy / distance) * force;
          }
        }

        offset.x += (targetX - offset.x) * RETURN_SPEED;
        offset.y += (targetY - offset.y) * RETURN_SPEED;

        const motion = Math.hypot(offset.x, offset.y);
        const highlight = Math.min(0.24, motion * 0.012);

        element.style.transform = `translate3d(${offset.x.toFixed(2)}px, ${offset.y.toFixed(2)}px, 0)`;
        glow.style.opacity = highlight.toFixed(3);
      }

      frameRef.current = window.requestAnimationFrame(tick);
    };

    frameRef.current = window.requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", deactivate);
      window.removeEventListener("pointercancel", deactivate);
      window.removeEventListener("blur", deactivate);

      if (frameRef.current) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [tiles]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#090a12] pointer-events-none select-none">
      {tiles.map((tile, index) => (
        <div
          key={index}
          ref={(element) => {
            if (element) tileRefs.current[index] = element;
          }}
          className="absolute overflow-hidden"
          style={{
            width: `${tileSize + 1}px`,
            height: `${tileSize + 1}px`,
            left: `${tile.left}px`,
            top: `${tile.top}px`,
            willChange: "transform",
          }}
        >
          <div
            ref={(element) => {
              if (element) glowRefs.current[index] = element;
            }}
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 40% 40%, rgba(255,255,255,0.45), rgba(255,255,255,0.2))",
              opacity: 0,
              transition: "opacity 90ms linear",
            }}
          />

          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              left: `${-tile.left}px`,
              top: `${-tile.top}px`,
              width: `${viewport.width}px`,
              height: `${viewport.height}px`,
            }}
          >
            {children}
          </div>
        </div>
      ))}
    </div>
  );
}
