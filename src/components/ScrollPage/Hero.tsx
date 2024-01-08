import TextAnim from "../TextAnim";

export default function Hero() {
  return (
    <div class="flex items-center absolute top-0 left-0 justify-center gap-16 w-full h-full">
      <div class="text-[128px] text-[#f6b092] font-bold">
        <TextAnim text="Hello!" phase="Hero"></TextAnim>
      </div>
    </div>
  );
}
