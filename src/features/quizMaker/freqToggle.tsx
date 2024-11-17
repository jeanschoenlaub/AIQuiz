import React from "react";
import { Toggle } from "~/components/ui/toggle";

interface ToggleGroupFrequencyProps {
  quizFrequency: "now" | "day" | "week"; // Limit to allowed values
  setQuizFrequency: React.Dispatch<React.SetStateAction<"now" | "day" | "week">>;
}

const QuizFrequencyToggle: React.FC <ToggleGroupFrequencyProps> = ({
  quizFrequency,
  setQuizFrequency
}) => {

  return (
    <div className="flex items-center gap-4">
      <div className="text-lg font-medium">Every</div>
      <Toggle
        onPressedChange={() => setQuizFrequency("now")}
        data-state={quizFrequency === "now" ? "on" : "off"}
      >
        Now
      </Toggle>
      <Toggle
        onPressedChange={() => setQuizFrequency("day")}
        data-state={quizFrequency === "day" ? "on" : "off"}
      >
        Every Day
      </Toggle>
      <Toggle
        onPressedChange={() => setQuizFrequency("week")}
        data-state={quizFrequency === "week" ? "on" : "off"}
      >
        Every Week
      </Toggle>
    </div>
  );
};

export default QuizFrequencyToggle;
