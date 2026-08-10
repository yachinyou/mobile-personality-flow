import { useState } from "react";
import svgPaths from "./svg-cb5w627u7f";
import imgQ4 from "./cf1a9b09158389e5eac655a596f996e6e9051fc2.png";
import imgFrame2 from "./01f8d9addedb8fca6b0f20172e243ab3e7ca9ff2.png";
import imgOption1 from "./Q4-option1.svg";
import imgOption2 from "./Q4-option2.svg";
import imgOption3 from "./Q4-option3.svg";
import imgOption4 from "./Q4-option4.svg";
import imgOption5 from "./Q4-option5.svg";

const options = [
  { text: "They think calm means simple", icon: imgOption1 },
  { text: "They think scattered means broken ", icon: imgOption2 },
  { text: "They think distant means cold", icon: imgOption3 },
  { text: "They think quiet means empty", icon: imgOption4 },
  { text: "They think intense means angry", icon: imgOption5 },
];

function Option({ text, icon, selected, onClick }: { text: string; icon: string; selected: boolean; onClick: () => void }) {
  return (
    <div onClick={onClick} className="relative rounded-[16px] shrink-0 w-full cursor-pointer">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[16px]">
        <img alt="" className="absolute max-w-none object-cover rounded-[16px] size-full" src={imgFrame2} />
        <div className="absolute bg-[rgba(255,255,255,0.4)] inset-0 rounded-[16px]" />
      </div>
      {selected && (
        <div aria-hidden className="absolute border-4 border-[#ffe590] border-solid inset-0 pointer-events-none rounded-[16px]" />
      )}
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[22px] items-center p-[16px] relative size-full">
          <div className="relative shrink-0 size-[64px] rounded-full bg-[#eeeeee]">
            <img alt="" className="absolute inset-0 m-auto max-w-[65%] max-h-[65%] object-contain" src={icon} />
          </div>
          <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#392c68] text-[15px] text-left w-[222px]">{text}</p>
        </div>
      </div>
    </div>
  );
}

function BackButton({ onClick }: { onClick?: () => void }) {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[25px] top-[30px] w-[342px]">
      <div onClick={onClick} className="flex items-center justify-center relative shrink-0 cursor-pointer">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[22px] relative w-[36px]">
            <div className="absolute inset-[0_0_-14.39%_-0.18%]">
              <svg className="block size-full" fill="none" height="25.1658" preserveAspectRatio="none" viewBox="0 0 36.0657 25.1658" width="36.0657">
                <g id="Frame 16">
                  <path d={svgPaths.p12f27800} fill="#392C68" id="Vector 1" />
                  <path d={svgPaths.p1afd5e80} fill="#392C68" id="Vector 2" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Q({ onNext, onBack }: { onNext?: (index: number) => void; onBack?: () => void }) {
  const [selected, setSelected] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    setSelected(index);
    setTimeout(() => onNext?.(index), 400);
  };

  return (
    <div className="block relative size-full" data-name="Q4">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-white inset-0" />
        <img alt="" className="absolute max-w-none object-cover opacity-60 size-full" src={imgQ4} />
      </div>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Serafina:Regular',sans-serif] leading-[63px] left-[194.5px] not-italic text-[#392c68] text-[52px] text-center top-[63px] w-[341px]">Q4</p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[195px] not-italic text-[#392c68] text-[18px] text-center top-[141px] w-[302px]">What do people most often get wrong about you?</p>
      <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[25px] top-[239px] w-[340px]">
        {options.map(({ text, icon }, i) => (
          <Option key={i} text={text} icon={icon} selected={selected === i} onClick={() => handleSelect(i)} />
        ))}
      </div>
      <BackButton onClick={onBack} />
    </div>
  );
}
