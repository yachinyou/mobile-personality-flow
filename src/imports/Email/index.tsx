import imgRectangle1 from "./803a4b3e0dc3e1b4424e59798b34f78c8987c361.png";

function Frame() {
  return (
    <div className="bg-[#392c68] relative rounded-[99px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[10px] py-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-left text-white whitespace-nowrap">Download Full Reading</p>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#392c68] relative rounded-[99px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[10px] py-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-left text-white whitespace-nowrap">Download Printable Art</p>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame />
      <Frame3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#392c68] relative rounded-[99px] shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[10px] py-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-left text-white whitespace-nowrap">Share This Quiz</p>
        </div>
      </div>
    </div>
  );
}

function Frame1({ archetypeName }: { archetypeName: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <div className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-black text-left w-full whitespace-pre-wrap">
        <p className="leading-[normal] mb-0">Hi Ariana,</p>
        <p className="leading-[normal] mb-0">​</p>
        <p className="leading-[normal]">{`You stopped today to ask which landscape you're standing in. I love that you did.`}</p>
      </div>
      <Frame4 />
      <div className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-black text-left w-full whitespace-pre-wrap">
        <p className="mb-0">
          <span className="leading-[normal]">{`You're `}</span>
          <span className="[word-break:break-word] font-['Poppins:SemiBold',sans-serif] leading-[normal] not-italic">{archetypeName}</span>
          <span className="leading-[normal]">{` today.`}</span>
        </p>
        <p className="leading-[normal] mb-0">​</p>
        <p className="leading-[normal] mb-0">{`Most of what's happening in you is below the waterline, and that isn't hiding, it's depth. `}</p>
        <p className="leading-[normal] mb-0">​</p>
        <p className="leading-[normal] mb-0">{`People see the calm tip and think that's the whole story. You know better. `}</p>
        <p className="leading-[normal] mb-0">​</p>
        <p className="leading-[normal] mb-0">{`The cold isn't coldness; it's the temperature of thinking things all the way through. `}</p>
        <p className="leading-[normal] mb-0">​</p>
        <p className="leading-[normal] mb-0">{`Whatever you're carrying under the surface doesn't need to be explained to anyone yet.`}</p>
        <p className="leading-[normal] mb-0">​</p>
        <p className="leading-[normal]">{`It's allowed to just be yours for a while. This landscape has room for all of it, and it will still be here tomorrow.`}</p>
      </div>
      <Frame5 />
      <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-black text-left w-full">Hi, I’m Yachin, a collage artist from Taiwan. I made this landscape by hand in my studio. If you look closely, you can see the ink breathing.</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[16px] text-black text-left w-full whitespace-pre-wrap">
        <p className="leading-[normal] mb-0">{`Once in a while I'll send a letter from the studio, and when a new small edition leaves my hands, you'll hear it here first.`}</p>
        <p className="leading-[normal] mb-0">​</p>
        <p className="leading-[normal] mb-0">{`I'm glad you found your landscape. `}</p>
        <p className="leading-[normal] mb-0">​</p>
        <p className="leading-[normal] mb-0">XOXO</p>
        <p className="leading-[normal] mb-0">{`Yachin `}</p>
        <p className="leading-[normal]">@yachinyou.art</p>
      </div>
    </div>
  );
}

function Frame2({ archetypeName }: { archetypeName: string }) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-[23px] top-[37px] w-[345px]">
      <div className="h-[100px] relative shrink-0 w-full">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgRectangle1} />
      </div>
      <Frame1 archetypeName={archetypeName} />
      <Frame6 />
    </div>
  );
}

export default function Email({ archetypeName = "The Iceberg" }: { archetypeName?: string }) {
  return (
    <a className="bg-white block cursor-pointer relative size-full" data-name="Email">
      <Frame2 archetypeName={archetypeName} />
    </a>
  );
}