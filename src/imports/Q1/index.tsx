import { useState } from "react";
import svgPaths from "./svg-1lvcntyi6t";
import imgQ1 from "./cf1a9b09158389e5eac655a596f996e6e9051fc2.png";
import imgFrame2 from "./01f8d9addedb8fca6b0f20172e243ab3e7ca9ff2.png";
import imgEllipse1 from "./91ad18783542ba7ab3f47ff88c79596a47f62e6d.png";

const options = [
  "Fog that hasn't decided anything yet",
  "Cold, blue, and very clear ",
  "Patches of sun moving across open water",
  "Warm pressure somewhere under the ground",
  "Thin, bright air, you can see very far",
];

function Option({ text, selected, onClick }: { text: string; selected: boolean; onClick: () => void }) {
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
          <div className="relative shrink-0 size-[64px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" height="64" src={imgEllipse1} width="64" />
          </div>
          <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#392c68] text-[15px] text-left w-[222px]">{text}</p>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute h-[83.896px] left-[328.39px] top-[-268.33px] w-[25.186px]">
      <div className="absolute inset-[-0.86%_-2.64%_-0.46%_-0.71%]">
        <svg className="block size-full" fill="none" height="85.0032" preserveAspectRatio="none" viewBox="0 0 26.0306 85.0032" width="26.0306">
          <g id="Frame 18">
            <path d={svgPaths.p18de8ab0} fill="black" id="Vector 4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default function Q({ onNext }: { onNext?: (index: number) => void }) {
  const [selected, setSelected] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    setSelected(index);
    setTimeout(() => onNext?.(index), 400);
  };

  return (
    <div className="block relative size-full" data-name="Q1">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-white inset-0" />
        <img alt="" className="absolute max-w-none object-cover opacity-50 size-full" src={imgQ1} />
      </div>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Serafina:Regular',sans-serif] leading-[63px] left-[194.5px] not-italic text-[#392c68] text-[52px] text-center top-[63px] w-[341px]">Q1</p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Poppins:Regular',sans-serif] leading-[normal] left-[195px] not-italic text-[#392c68] text-[18px] text-center top-[141px] w-[302px]">{`It's early morning inside you. What's the weather?`}</p>
      <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[25px] top-[239px] w-[340px]">
        {options.map((text, i) => (
          <Option key={i} text={text} selected={selected === i} onClick={() => handleSelect(i)} />
        ))}
      </div>
      <Frame6 />
    </div>
  );
}
