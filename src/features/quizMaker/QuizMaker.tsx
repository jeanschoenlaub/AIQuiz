import React, { useState } from "react";
import { Input } from "~/components/ui/input"; // Assuming you have an Input component
import { Button } from "~/components/ui/button";
import QuizFrequencyToggle from "./freqToggle";
import { DeliveryMethod } from "./deliveryMethod";

const QuizMaker = () => {
  const [quizTopic, setQuizTopic] = useState(""); // First row input
  const [quizFrequency, setQuizFrequency] = useState<"day" | "week">("day"); // Second row toggle
  const [deliveryMethod, setDeliveryMethod] = useState(""); // Third row combobox
  const [email, setEmail] = useState(""); // Third row email input

  const handleSend = () => {
    console.log("Quiz Topic:", quizTopic);
    console.log("Quiz Frequency:", quizFrequency);
    console.log("Delivery Method:", deliveryMethod);
    console.log("Email:", email);

    // You can process or send this data as needed.
  };

  return (
    <>
      {/* First Row */}
      <div className="flex items-center gap-4">
        <div className="text-lg font-medium">Quiz me on</div>
        <Input
          value={quizTopic}
          onChange={(e) => setQuizTopic(e.target.value)}
          placeholder="..."
          className="w-60 p-2 border rounded"
        />
      </div>

      {/* Second Row */}
      <div className="flex items-center gap-4">
        <QuizFrequencyToggle
          quizFrequency={quizFrequency}
          setQuizFrequency={setQuizFrequency}
        />
      </div>

      {/* Third Row */}
      <div className="flex items-center gap-4">
        <div className="text-lg font-medium">via</div>
        <DeliveryMethod
          value={deliveryMethod}
          onChange={(value) => setDeliveryMethod(value)} // Assuming ComboboxDemo can handle this prop
        />
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          className="w-60 p-2 ml-4 border rounded"
        />
      </div>

      {/* Button Row */}
      <div>
        <Button onClick={handleSend}>Send</Button>
      </div>
    </>
  );
};

export default QuizMaker;
