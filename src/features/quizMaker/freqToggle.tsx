import React from "react";
import { Toggle } from "~/components/ui/toggle";

interface ToggleGroupFrequencyProps {
  quizFrequency: "day" | "week"; // Limit to allowed values
  setQuizFrequency: React.Dispatch<React.SetStateAction<"day" | "week">>;
}

const QuizFrequencyToggle: React.FC <ToggleGroupFrequencyProps> = ({
  quizFrequency,
  setQuizFrequency
}) => {

  return (
    <div className="flex items-center gap-4">
      <div className="text-lg font-medium">Every</div>
      <Toggle
        onPressedChange={() => setQuizFrequency("day")}
        data-state={quizFrequency === "day" ? "on" : "off"}
      >
        Day
      </Toggle>
      <Toggle
        onPressedChange={() => setQuizFrequency("week")}
        data-state={quizFrequency === "week" ? "on" : "off"}
      >
        Week
      </Toggle>
    </div>
  );
};

export default QuizFrequencyToggle;
