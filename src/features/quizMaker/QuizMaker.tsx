import React, { useState } from "react";
import { Input } from "~/components/ui/input"; // Assuming you have an Input component
import { Button } from "~/components/ui/button";
import QuizFrequencyToggle from "./freqToggle";
import { DeliveryMethod } from "./deliveryMethod";
import { Mail, Send } from "lucide-react";

const QuizMaker = () => {
  const [quizTopic, setQuizTopic] = useState(""); // First row input
  const [quizFrequency, setQuizFrequency] = useState< "now" | "day" | "week" >("now"); // Second row toggle
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
    <div className="flex flex-col h-screen bg-white font-inter">
        <header className="absolute top-8 left-1/2 transform -translate-x-1/2 w-[705px] text-lg text-black text-left">
            QuizMe
        </header>
        <main className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center">
            <h1 className="text-4xl mb-10 text-black">Quiz Me On</h1>
            <div className="mb-5">
                <Input
                    type="text"
                    placeholder="Data engineering"
                    className="w-[705px] h-12 rounded-full border border-gray-300 bg-gray-100 text-gray-600"
                    style={{ fontSize: '1 rem' }} 
                />
            </div>
            <p className="mb-5 text-lg text-black">or setup a recurring Quiz via</p>
            <div className="flex gap-8">
            <button className="flex items-center w-40 h-11 border border-gray-300 rounded-full bg-white text-base text-black">
                <Mail className="ml-4" color="#FF7070"/>
                <span className="flex-1 mr-4 text-center">Mail</span>
            </button>
            <button className="flex items-center w-40 h-11 border border-gray-300 rounded-full bg-white text-base text-black">
                <Send className="ml-4" color="#6FD241"/>
                <span className="flex-1 mr-4 text-center">WhatsApp</span>
            </button>
            </div>
        </main>
    </div>
  );
};

export default QuizMaker;


//         <div className="text-lg font-medium">
//             Quiz me on
//         </div>
//         <div className="flex items-center gap-4">
//             <div>
//                 <Input
//                     value={quizTopic}
//                     onChange={(e) => setQuizTopic(e.target.value)}
//                     placeholder="..."
//                     className="w-60 p-2 border rounded"
//                 />
//             </div>
//             <div className="flex items-center gap-4">
//                 <div>
//                     <Button onClick={handleSend}>Now</Button>
//                 </div>
//             </div>


//             { quizFrequency != "now" && 
//                 <>
//                     <QuizFrequencyToggle
//                         quizFrequency={quizFrequency}
//                         setQuizFrequency={setQuizFrequency}
//                     />
//                     <div className="flex items-center gap-4">
//                         <div className="text-lg font-medium">via</div>
//                         <DeliveryMethod
//                         value={deliveryMethod}
//                         onChange={(value) => setDeliveryMethod(value)} // Assuming ComboboxDemo can handle this prop
//                         />
//                         <Input
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         placeholder="your@email.com"
//                         className="w-60 p-2 ml-4 border rounded"
//                         />
//                     </div>
//                 </>
//             }
//         </div>
//     </>
//   );
// };