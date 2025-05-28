import  { useState } from 'react';
import { BsArrowsExpand } from "react-icons/bs";
import { BsArrowsCollapse } from "react-icons/bs";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(false);

  const faqItems = [
    {
      question: "What Services Does Prime Gaming Offer?",
      answer: "Prime Gaming offers a variety of benefits, including free games, in-game content for popular titles, and a monthly Twitch channel subscription."
    },
    {
      question: "Do I Need An Account To Use The Site?",
      answer: "Yes, you need an Amazon Prime account to access Prime Gaming benefits. You can sign up for a free trial if you don't have one."
    },
    {
      question: "Are There Any Subscription Fees?",
      answer: "Prime Gaming is included with your Amazon Prime subscription, so there are no additional fees."
    },
    {
      question: "How Can I Contact Support?",
      answer: "You can contact Prime Gaming support through the Amazon customer service portal or by visiting the Prime Gaming help pages."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="h-[600px]  bg-[#1c1b28] flex flex-col items-center justify-center">
      
      <h1 className="text-4xl font-bold text-white mb-10 tracking-wide">
        FAQ
      </h1>

      <div className="w-[80%] border-2 border-[#6B2515] flex flex-col gap-y-4  rounded-lg ">
        {faqItems.map((item, index) => (
          <div
            key={index}
            className=" bg-gray-800 rounded-lg border border-red-700 "
          >
            <button
              className="w-full flex justify-between items-center p-3 text-left focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <h2 className="text-xl font-semibold text-white">
                {item.question}
              </h2>
              {openIndex === index ? (
                <BsArrowsCollapse className="w-6 h-6 text-red-500 " />
              ) : (
                <BsArrowsExpand className="w-6 h-6 text-red-500 " />
              )}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-6 text-white">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;