import { useState } from "react";
import imgThankYouPage from "./cf1a9b09158389e5eac655a596f996e6e9051fc2.png";

function Frame2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Poppins:Regular',sans-serif] gap-[24px] items-start not-italic relative shrink-0 text-[#392c68] text-left w-full">
      <p className="leading-[36px] relative shrink-0 text-[28px] w-full">Your reading is on its way.</p>
      <p className="leading-[normal] relative shrink-0 text-[16px] w-full">Check your inbox in the next few minutes (and the spam folder, just in case, then rescue it).</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#392c68] text-[18px] text-left w-full">
        {`If you never received it, give me a shout out here `}
        <a
          href="https://www.instagram.com/yachinyou.art/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(event) => event.stopPropagation()}
          className="underline"
        >
          @yachinyou.art
        </a>
        {` and I'll be right with you!`}
      </p>
    </div>
  );
}

function Frame4({ archetypeName }: { archetypeName: string }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#392c68] text-[18px] text-left w-full">
        <span className="leading-[normal]">{`Know someone who’s also `}</span>
        <span className="font-['Poppins:SemiBold',sans-serif] leading-[normal]">{archetypeName}</span>
        <span className="leading-[normal]">?</span>
      </p>
    </div>
  );
}

function Frame({ onClick, copied }: { onClick: (event: React.MouseEvent) => void; copied: boolean }) {
  return (
    <div onClick={onClick} className="bg-[#392c68] relative rounded-[99px] shrink-0 w-full cursor-pointer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[10px] py-[16px] relative size-full">
          <p className="[word-break:break-word] font-['Serafina:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[32px] text-center text-white whitespace-nowrap">
            {copied ? "Link copied!" : "Share Quiz"}
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame1({
  archetypeName,
  onShare,
  copied,
}: {
  archetypeName: string;
  onShare: (event: React.MouseEvent) => void;
  copied: boolean;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame5 />
      <Frame4 archetypeName={archetypeName} />
      <Frame onClick={onShare} copied={copied} />
    </div>
  );
}

function Frame3({
  archetypeName,
  onShare,
  copied,
}: {
  archetypeName: string;
  onShare: (event: React.MouseEvent) => void;
  copied: boolean;
}) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-[32px] top-[119px] w-[326px]">
      <Frame2 />
      <Frame1 archetypeName={archetypeName} onShare={onShare} copied={copied} />
    </div>
  );
}

export default function ThankYouPage({ archetypeName = "The Iceberg" }: { archetypeName?: string }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async (event: React.MouseEvent) => {
    event.stopPropagation();
    try {
      await navigator.clipboard.writeText(window.location.origin);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // best-effort — clipboard access can be denied by the browser
    }
  };

  return (
    <a className="block cursor-pointer relative size-full" data-name="thank you page">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-white inset-0" />
        <img alt="" className="absolute max-w-none object-cover opacity-60 size-full" src={imgThankYouPage} />
      </div>
      <Frame3 archetypeName={archetypeName} onShare={handleShare} copied={copied} />
    </a>
  );
}