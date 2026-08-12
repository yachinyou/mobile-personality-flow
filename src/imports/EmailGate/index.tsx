import { useState } from "react";
import imgEmailGate from "./cf1a9b09158389e5eac655a596f996e6e9051fc2.png";
import imgRectangle1 from "./803a4b3e0dc3e1b4424e59798b34f78c8987c361.png";
import { subscribeToMailerLite } from "@/lib/mailerlite";
import { trackLead } from "@/lib/metaPixel";

function Frame6({ title }: { title: string }) {
  const displayTitle = title === "The Moon" || title === "The Peaks" ? title.replace(" ", "\n") : title;
  const mainPart = displayTitle.slice(0, -1);
  const lastChar = displayTitle.slice(-1);
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-center not-italic relative shrink-0 text-[#392c68] text-center w-full">
      <p className="font-['Poppins:Medium',sans-serif] leading-[normal] relative shrink-0 text-[16px] w-full">YOU ARE</p>
      <p className="font-['Serafina:Regular',sans-serif] leading-[0] relative shrink-0 text-[0px] w-full whitespace-pre-line">
        <span className="leading-[68px] text-[72px]">{mainPart}</span>
        <span className="font-['Serafina:Swash',sans-serif] leading-[68px] text-[72px]">{lastChar}</span>
      </p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-center leading-[normal] not-italic relative shrink-0 text-[#392c68] text-center w-[318px]">
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[18px] w-full">Here is:</p>
      <p className="font-['Poppins:SemiBold',sans-serif] relative shrink-0 text-[22px] w-full">
        Your full reading &<br />Printable landscape art
      </p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[18px] w-full">Where should I send it?</p>
    </div>
  );
}

function Frame2({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <div className="relative rounded-[16px] shrink-0 w-full">
      <div aria-hidden className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[20px] relative size-full">
          <input
            type="email"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Your email"
            className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#392c68] placeholder:text-[#838383] text-[15px] text-left w-full bg-transparent outline-none border-none"
          />
        </div>
      </div>
    </div>
  );
}

function Frame3({ email, setEmail }: { email: string; setEmail: (value: string) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame2 value={email} onChange={setEmail} />
      <p className="[word-break:break-word] font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.6)] text-left w-full">{`You'll also get my art studio letters. Unsubscribe anytime.`}</p>
    </div>
  );
}

function Frame({ onClick, label }: { onClick?: () => void; label: string }) {
  return (
    <div onClick={onClick} className="bg-[#392c68] content-stretch flex items-center justify-center px-[10px] py-[16px] relative rounded-[99px] shrink-0 w-[206px] cursor-pointer">
      <p className="[word-break:break-word] font-['Serafina:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[32px] text-center text-white whitespace-nowrap">{label}</p>
    </div>
  );
}

function Frame4({
  email,
  setEmail,
  onSend,
  label,
}: {
  email: string;
  setEmail: (value: string) => void;
  onSend?: () => void;
  label: string;
}) {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
      <Frame3 email={email} setEmail={setEmail} />
      <Frame onClick={onSend} label={label} />
    </div>
  );
}

function Frame7({
  title,
  email,
  setEmail,
  onSend,
  label,
}: {
  title: string;
  email: string;
  setEmail: (value: string) => void;
  onSend?: () => void;
  label: string;
}) {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-center left-[23px] top-[40px] w-[345px]">
      <Frame6 title={title} />
      <div className="relative rounded-[16px] shrink-0 size-[117px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[16px] size-full" src={imgRectangle1} />
      </div>
      <Frame5 />
      <Frame4 email={email} setEmail={setEmail} onSend={onSend} label={label} />
    </div>
  );
}

export default function EmailGate({
  archetypeName,
  archetypeKey,
  onSend,
}: {
  archetypeName?: string;
  archetypeKey?: string;
  onSend?: (data: { email: string }) => void;
}) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSend = async () => {
    if (!email.trim() || isSubmitting) return;
    setIsSubmitting(true);
    trackLead({ archetype: archetypeKey });
    try {
      await subscribeToMailerLite({ email, archetype: archetypeKey });
    } catch {
      // best-effort for now — no error UI until we wire up real error handling
    }
    setIsSubmitting(false);
    onSend?.({ email });
  };

  return (
    <div className="block relative size-full" data-name="email gate">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-white inset-0" />
        <img alt="" className="absolute max-w-none object-cover opacity-60 size-full" src={imgEmailGate} />
      </div>
      <Frame7
        title={archetypeName ?? "The Iceberg"}
        email={email}
        setEmail={setEmail}
        onSend={handleSend}
        label={isSubmitting ? "Sending..." : "Send"}
      />
    </div>
  );
}
