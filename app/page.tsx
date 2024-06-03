"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollPointReached, setScrollPointReached] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollPoint1 = 500;
      const scrollPoint2 = 1200;
      const scrollPoint3 = 1900;
      if (scrollPointReached !== 0 && scrollPoint1 >= scrollPosition) {
        setScrollPointReached(0);
      }
      if (scrollPosition >= scrollPoint1) {
        setScrollPointReached(1);
      }
      if (scrollPosition >= scrollPoint2) {
        setScrollPointReached(2);
      }
      if (scrollPosition >= scrollPoint3) {
        setScrollPointReached(3);
      }
    };

    window.addEventListener("scroll", handleScroll);
  });
  const ParentVariants = {
    expanded: { padding: "20px" },
    closed: { padding: "0px" },
  };
  const HeroWrapperVariants = {
    expanded: {
      border: "1px solid rgba(255,255,255,0.15)",
      borderRadius: "20px",
    },
    closed: {
      border: "none",
      borderRadius: "0px",
    },
  };
  const AboutMeVariants = {
    expanded: { width: "400px", display: "flex" },
    closed: { width: "0px", display: "none" },
  };
  const StackVariants = {
    expanded: { height: "400px" },
    closed: { height: "0px" },
  };
  const TitleVariants = {
    expanded: {},
    closed: {},
  };
  const DescriptionVariants = {
    expanded: { opacity: 1, translateY: "0px" },
    closed: { opacity: 0, translateY: "50px" },
  };

  return (
    <>
      <div className="w-screen h-full text-white">
        <div className="h-[400vh] w-full relative">
          <motion.div
            variants={ParentVariants}
            transition={{ duration: 1, easings: "ease-out" }}
            animate={1 <= scrollPointReached ? "expanded" : "closed"}
            className="h-screen sticky top-0 flex md:flex-row flex-col gap-[20px] left-0 w-full"
          >
            <div className="w-full h-full flex flex-col gap-[20px]">
              <motion.div
                variants={HeroWrapperVariants}
                transition={{ duration: 0.2, easings: "ease-out" }}
                layout
                animate={1 <= scrollPointReached ? "expanded" : "closed"}
                className=" border flex items-center relative justify-center flex-col w-full h-full"
              >
                <motion.div
                  variants={TitleVariants}
                  transition={{ duration: 1, easings: "ease-out" }}
                  layout
                  animate={1 <= scrollPointReached ? "expanded" : "closed"}
                  className="text-[76px]   font-bold"
                >
                  Kisuyo
                </motion.div>
                <motion.div
                  variants={DescriptionVariants}
                  transition={{ duration: 1, easings: "ease-out" }}
                  layout
                  animate={1 <= scrollPointReached ? "expanded" : "closed"}
                  className="text-[20px] font-normal text-white/50 w-[50%] text-center"
                >
                  I am a front-end developer skilled in React and Tailwind.
                </motion.div>
              </motion.div>
              <motion.div
                variants={StackVariants}
                layout
                transition={{ duration: 0.8, easings: "ease-out" }}
                animate={3 <= scrollPointReached ? "expanded" : "closed"}
                className="w-full h-full flex gap-[20px] overflow-hidden"
              >
                <div className="w-full h-full flex flex-col gap-[20px]">
                  <div className="bg-[#0e0e0e] rounded-[20px] h-1/2"></div>
                  <div className="bg-[#0e0e0e] rounded-[20px] h-1/2 font-bold text-white/30  flex items-center justify-evenly">
                    <a
                      href="https://github.com/Kisuyo"
                      target="_blank"
                      className="hover:text-white/40 cursor-pointer transition-all"
                    >
                      Github
                    </a>
                    <a
                      href="https://www.instagram.com/kisuyot_t/"
                      target="_blank"
                      className="hover:text-white/40 cursor-pointer transition-all"
                    >
                      Instagram
                    </a>
                    <a
                      href="https://x.com/KisuyoTT"
                      target="_blank"
                      className="hover:text-white/40 cursor-pointer transition-all"
                    >
                      Twitter
                    </a>
                  </div>
                </div>
                <div className="w-full h-full bg-[#0e0e0e] p-2 rounded-[20px] flex justify-between flex-col">
                  <a
                    href="https://github.com/learn-anything/learn-anything.xyz"
                    target="_blank"
                    className="flex items-center font-light w-full gap-4 hover:bg-[#121212] transition-all p-2 rounded-md cursor-pointer"
                  >
                    <div className="min-w-[100px] h-[100px] bg-[#171717] rounded-md"></div>
                    <div className="text-white/60 pr-[50px] ">
                      <div className="text-[20px] font-bold text-white">
                        Learn Anything
                      </div>
                      It is a app to track your links and learn new topics fast.
                    </div>
                  </a>
                  <a
                    href="https://github.com/kuskusapp/kuskus"
                    target="_black"
                    className="flex items-center w-full gap-4 p-2 rounded-md cursor-pointer hover:bg-[#121212] transition-all"
                  >
                    <div className="text-white/60 pl-[50px] text-end">
                      <div className="text-[20px] font-bold text-white">
                        Kuskus
                      </div>
                      It is a app to track your links and learn new topics fast.
                    </div>
                    <div className="min-w-[100px] h-[100px] bg-[#171717] rounded-md"></div>
                  </a>
                </div>
              </motion.div>
            </div>
            <motion.div
              variants={AboutMeVariants}
              layout
              transition={{ duration: 0.8, easings: "ease-out" }}
              animate={2 <= scrollPointReached ? "expanded" : "closed"}
              className="text-white text-[14px] rounded-[20px] bg-[#0e0e0e] overflow-hidden"
            >
              <div className="min-w-[300px] w-full">
                <img
                  src="/pfp.jpg"
                  className="w-full h-fit rounded-[20px]"
                  alt="pfp"
                />
                <div className="p-5 text-[14px] flex flex-col gap-3 font-light">
                  <div className="text-white/60 pr-[20px]">
                    <div className="text-white font-bold">
                      My name is Igor Voloboev.
                    </div>
                    i make all kinds of Websites using React and SolidJs
                  </div>
                  <div className="pt-[10px]">
                    🎨 <span className="text-white/60">- I like Drawing.</span>
                  </div>
                  <div>
                    🎮{" "}
                    <span className="text-white/60">- I play Video games.</span>
                  </div>
                  <div>
                    🍳 <span className="text-white/60">- I like cooking.</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <div className=""></div>
      </div>
    </>
  );
}
