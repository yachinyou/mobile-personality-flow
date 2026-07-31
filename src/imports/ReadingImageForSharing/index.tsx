import imgMoon012 from "./803a4b3e0dc3e1b4424e59798b34f78c8987c361.png";
import imgRectangle5 from "./cf1a9b09158389e5eac655a596f996e6e9051fc2.png";

function Frame({ archetypeName }: { archetypeName: string }) {
  const mainPart = archetypeName.slice(0, -1);
  const lastChar = archetypeName.slice(-1);
  return (
    <div className="[word-break:break-word] absolute content-stretch flex flex-col gap-[16px] items-center left-[66px] not-italic text-[#392c68] text-center top-[85px] w-[258px]">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] relative shrink-0 text-[16px] uppercase w-full">for Ariana</p>
      <p className="font-['Serafina:Regular',sans-serif] leading-[0] relative shrink-0 text-[0px] w-full">
        <span className="leading-[56px] text-[64px]">{mainPart}</span>
        <span className="font-['Serafina:Swash',sans-serif] leading-[56px] text-[64px]">{lastChar}</span>
      </p>
    </div>
  );
}

export default function ReadingImageForSharing({ archetypeName = "The Iceberg" }: { archetypeName?: string }) {
  return (
    <a className="bg-white block cursor-pointer relative size-full" data-name="Reading Image for Sharing">
      <div className="absolute h-[844px] left-[-85px] top-0 w-[475px]" data-name="moon-01 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMoon012} />
      </div>
      <div className="absolute h-[729px] left-[36px] shadow-[0px_2px_2px_2px_rgba(0,0,0,0.15)] top-[48px] w-[319px]">
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute bg-white inset-0" />
          <div className="absolute inset-0 opacity-60 overflow-hidden">
            <img alt="" className="absolute h-full left-[-31.62%] max-w-none top-0 w-[163.25%]" src={imgRectangle5} />
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] absolute font-['Poppins:Regular',sans-serif] leading-[0] left-[66px] not-italic text-[#392c68] text-[15px] text-left top-[259px] w-[258px] whitespace-pre-wrap">
        <p className="leading-[22px] mb-0">{`Most of what's happening in you is below the waterline, and that isn't hiding, it's depth. `}</p>
        <p className="leading-[22px] mb-0">​</p>
        <p className="leading-[22px] mb-0">{`People see the calm tip and think that's the whole story. You know better. `}</p>
        <p className="leading-[22px] mb-0">​</p>
        <p className="leading-[22px] mb-0">{`The cold isn't coldness; it's the temperature of thinking things all the way through. `}</p>
        <p className="leading-[22px] mb-0">​</p>
        <p className="leading-[22px] mb-0">{`Whatever you're carrying under the surface doesn't need to be explained to anyone yet.`}</p>
        <p className="leading-[22px] mb-0">​</p>
        <p className="leading-[22px]">{`It's allowed to just be yours for a while. This landscape has room for all of it, and it will still be here tomorrow.`}</p>
      </div>
      <p className="-translate-x-full [word-break:break-word] absolute font-['Poppins:Regular',sans-serif] leading-[22px] left-[324px] not-italic text-[15px] text-[rgba(57,44,104,0.6)] text-right top-[731px] w-[258px]">Art by @yachinyou.art</p>
      <Frame archetypeName={archetypeName} />
    </a>
  );
}