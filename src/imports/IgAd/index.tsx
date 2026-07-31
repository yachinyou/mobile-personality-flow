import imgIgAd from "./cf1a9b09158389e5eac655a596f996e6e9051fc2.png";
import imgRectangle1 from "./803a4b3e0dc3e1b4424e59798b34f78c8987c361.png";

function Frame({ onClick }: { onClick?: () => void }) {
  return (
    <div onClick={onClick} className="absolute bg-[#392c68] content-stretch flex items-center justify-center left-[79px] px-[10px] py-[12px] rounded-[99px] top-[523px] w-[232px] cursor-pointer">
      <p className="[word-break:break-word] font-['Serafina:Regular',sans-serif] leading-[63px] not-italic relative shrink-0 text-[32px] text-center text-white whitespace-nowrap">Take Quiz</p>
    </div>
  );
}

export default function IgAd({ onTakeQuiz }: { onTakeQuiz?: () => void }) {
  return (
    <div className="block relative size-full" data-name="IG Ad">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-white inset-0" />
        <img alt="" className="absolute max-w-none object-cover opacity-60 size-full" src={imgIgAd} />
      </div>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Serafina:Regular',sans-serif] leading-[63px] left-[195.5px] not-italic text-[#392c68] text-[52px] text-center top-[128px] w-[325px]">Which</p>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Serafina:Regular',sans-serif] leading-[63px] left-[195.5px] not-italic text-[#392c68] text-[52px] text-center top-[357px] w-[325px]">are you today?</p>
      <div className="-translate-x-1/2 [word-break:break-word] absolute font-['Poppins:Regular',sans-serif] leading-[0] left-[195.5px] not-italic text-[#392c68] text-[16px] text-center top-[650px] w-[325px]">
        <p className="leading-[28px] mb-0">Five questions, one minute.</p>
        <p className="leading-[28px]">know which one you are today.</p>
      </div>
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Serafina:Swash',sans-serif] leading-[0] left-[194.5px] not-italic text-[#392c68] text-[0px] text-center top-[203px] w-[325px]">
        <span className="leading-[72px] text-[68px]">In</span>
        <span className="font-['Serafina:Regular',sans-serif] leading-[72px] text-[68px]">{`ner `}</span>
        <span className="leading-[72px] text-[68px]">Lan</span>
        <span className="font-['Serafina:Regular',sans-serif] leading-[72px] text-[68px]">dsca</span>
        <span className="leading-[72px] text-[68px]">p</span>
        <span className="font-['Serafina:Regular',sans-serif] leading-[72px] text-[68px]">e</span>
      </p>
      <div className="absolute left-[-101px] rounded-[16px] size-[165px] top-[50px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgRectangle1} />
      </div>
      <div className="absolute left-[-85px] rounded-[16px] size-[137px] top-[494px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgRectangle1} />
      </div>
      <div className="absolute left-[315px] rounded-[16px] size-[165px] top-[374px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgRectangle1} />
      </div>
      <div className="absolute left-[207px] rounded-[16px] size-[165px] top-[761px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgRectangle1} />
      </div>
      <div className="absolute left-[305px] rounded-[16px] size-[165px] top-[-86px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgRectangle1} />
      </div>
      <Frame onClick={onTakeQuiz} />
    </div>
  );
}