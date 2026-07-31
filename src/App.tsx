import { useState } from "react";
import { computeArchetype, ARCHETYPE_NAMES } from "@/lib/archetype";
import IgAd from "@/imports/IgAd";
import Q1 from "@/imports/Q1";
import Q2 from "@/imports/Q2";
import Q3 from "@/imports/Q3";
import Q4 from "@/imports/Q4";
import Q5 from "@/imports/Q5";
import EmailGate from "@/imports/EmailGate";
import ThankYouPage from "@/imports/ThankYouPage";
import ReadingImageForSharing from "@/imports/ReadingImageForSharing";
import Email from "@/imports/Email";

type Screen =
  | "igad"
  | "q1"
  | "q2"
  | "q3"
  | "q4"
  | "q5"
  | "emailgate"
  | "thankyou"
  | "sharing"
  | "email";

export default function App() {
  const [screen, setScreen] = useState<Screen>("igad");
  const [answers, setAnswers] = useState<number[]>([]);

  const go = (s: Screen) => () => setScreen(s);

  const answerAndGo = (questionIndex: number, next: Screen) => (optionIndex: number) => {
    setAnswers((prev) => {
      const updated = [...prev];
      updated[questionIndex] = optionIndex;
      return updated;
    });
    setScreen(next);
  };

  const archetypeKey = answers.length === 5 ? computeArchetype(answers) : undefined;
  const archetypeName = archetypeKey ? ARCHETYPE_NAMES[archetypeKey] : undefined;

  const wrapScreen = (children: React.ReactNode) => (
    <div
      style={{
        position: "fixed",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f0eb",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "390px",
          height: "844px",
          overflow: "hidden",
          boxShadow: "0 8px 48px rgba(0,0,0,0.18)",
        }}
      >
        {children}
      </div>
    </div>
  );

  if (screen === "igad") {
    return wrapScreen(
      <div style={{ position: "absolute", inset: 0 }}>
        <IgAd onTakeQuiz={go("q1")} />
      </div>
    );
  }

  if (screen === "q1") {
    return wrapScreen(
      <div style={{ position: "absolute", inset: 0 }}>
        <Q1 onNext={answerAndGo(0, "q2")} />
      </div>
    );
  }

  if (screen === "q2") {
    return wrapScreen(
      <div style={{ position: "absolute", inset: 0 }}>
        <Q2 onNext={answerAndGo(1, "q3")} onBack={go("q1")} />
      </div>
    );
  }

  if (screen === "q3") {
    return wrapScreen(
      <div style={{ position: "absolute", inset: 0 }}>
        <Q3 onNext={answerAndGo(2, "q4")} onBack={go("q2")} />
      </div>
    );
  }

  if (screen === "q4") {
    return wrapScreen(
      <div style={{ position: "absolute", inset: 0 }}>
        <Q4 onNext={answerAndGo(3, "q5")} onBack={go("q3")} />
      </div>
    );
  }

  if (screen === "q5") {
    return wrapScreen(
      <div style={{ position: "absolute", inset: 0 }}>
        <Q5 onNext={answerAndGo(4, "emailgate")} onBack={go("q4")} />
      </div>
    );
  }

  if (screen === "emailgate") {
    return wrapScreen(
      <div style={{ position: "absolute", inset: 0 }}>
        <EmailGate archetypeName={archetypeName} archetypeKey={archetypeKey} onSend={go("thankyou")} />
      </div>
    );
  }

  if (screen === "thankyou") {
    return wrapScreen(
      <div style={{ position: "absolute", inset: 0, overflowY: "auto" }}>
        <div onClick={go("sharing")} style={{ cursor: "pointer" }}>
          <ThankYouPage archetypeName={archetypeName} />
        </div>
      </div>
    );
  }

  if (screen === "sharing") {
    return wrapScreen(
      <div style={{ position: "absolute", inset: 0, overflowY: "auto" }}>
        <div onClick={go("email")} style={{ cursor: "pointer" }}>
          <ReadingImageForSharing archetypeName={archetypeName} />
        </div>
      </div>
    );
  }

  if (screen === "email") {
    return wrapScreen(
      <div style={{ position: "absolute", inset: 0, overflowY: "auto" }}>
        <div onClick={go("igad")} style={{ cursor: "pointer" }}>
          <Email archetypeName={archetypeName} />
        </div>
      </div>
    );
  }

  return null;
}
