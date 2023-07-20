// ? Local Files
import { about_section } from "../assets/constants";
// ? packages
import { useState } from "react";
import { motion } from "framer-motion";

const fadeInOut = {
  open: { opacity: [0.2, 0.5, 0.8, 1], zIndex: 2 },
  closed: { opacity: [1, 0.8, 0.5, 0.2, 0], zIndex: 1 },
};

export default function About() {
  const [cardOpen, setCardOpen] = useState("one");

  return (
    <section
      id="about"
      className="w-full h-full overflow-hidden grid place-items-center"
    >
      <div id="about_cards" className="w-2/3 h-2/3 flex flex-row">
        <div
          id="card_titles"
          className="w-1/4 border-l-4 border-slate-800 flex flex-col justify-between"
        >
          <motion.button
            whileTap={{}}
            onClick={() => {
              setCardOpen("one");
            }}
            id="card_1_title"
            className={`hover:bg-slate-800 transition-colors  w-full h-1/6 capitalize text-cyan-500 font-bold tracking-widest  ${
              cardOpen === "one"
                ? "bg-slate-800 border-l-4 border-cyan-500"
                : ""
            }`}
          >
            who i am
          </motion.button>
          <motion.button
            whileTap={{}}
            onClick={() => {
              setCardOpen("two");
            }}
            id="card_2_title"
            className={`hover:bg-slate-800 transition-colors w-full h-1/6 capitalize text-cyan-500 font-bold tracking-widest  ${
              cardOpen === "two"
                ? "bg-slate-800 border-l-4 border-cyan-500"
                : ""
            }`}
          >
            how i work
          </motion.button>
          <motion.button
            whileTap={{}}
            onClick={() => {
              setCardOpen("three");
            }}
            id="card_3_title"
            className={`hover:bg-slate-800 transition-colors w-full h-1/6 capitalize text-cyan-500 font-bold tracking-widest ${
              cardOpen === "three"
                ? "bg-slate-800 border-l-4 border-cyan-500"
                : ""
            } `}
          >
            what i know
          </motion.button>
        </div>
        <div id="card_details" className="h-full w-3/4 relative">
          <motion.div
            animate={cardOpen === "one" ? "open" : "closed"}
            variants={fadeInOut}
            transition={{ duration: 0.8, stiffness: 100 }}
            id="card_1_details"
            className={`w-full h-full absolute top-0 left-0 overflow-hidden grid place-items-center px-5`}
          >
            <div id="card_1_details_card">
              <h1 className="text-4xl font-bold capitalize">
                {about_section.whoIam.myName}
              </h1>
              <p className="text-sm font-semibold capitalize mt-1 mb-5">
                {about_section.whoIam.myStatus}
              </p>
              <p className="text-xl my-2 font-light capitalize">
                {about_section.whoIam.mySelfPara1}
              </p>
              <p className="text-xl my-2 font-light capitalize">
                {about_section.whoIam.mySelfPara2}
              </p>
            </div>
          </motion.div>
          <motion.div
            animate={cardOpen === "two" ? "open" : "closed"}
            variants={fadeInOut}
            transition={{ duration: 0.8, stiffness: 100 }}
            id="card_2_details"
            className={`w-full h-full absolute top-0 left-0 overflow-y-scroll grid place-items-center px-5`}
          >
            <div id="card_2_details_card" className="w-10/12 h-full">
              {about_section.howIWork.map((card) => {
                const IconComponent = card.icon;
                return (
                  <motion.div
                    transition={{ delay:  0.08 * card.stepNumber }}
                    whileInView={{opacity : [0 , 1]}}
                    className="flex"
                    key={card.stepNumber}
                  >
                    <div
                      id="left-side"
                      className="flex flex-col items-center mr-6"
                    >
                      <div
                        id={`upperdiv_${card.stepNumber}`}
                        className="bg-gray-300 w-px h-10 opacity-100 sm:h-full"
                      />
                      <div>
                        <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
                          {card.stepNumber}
                        </div>
                      </div>
                      <div
                        id={`bottomdiv_${card.stepNumber}`}
                        className="w-px h-full bg-gray-300"
                      />
                    </div>
                    <div
                      id="right-side"
                      className="flex flex-col sm:items-center sm:flex-row py-5"
                    >
                      <div className="sm:mr-5">
                        <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-slate-800 sm:w-24 sm:h-24 text-cyan-500 text-2xl font-bold">
                          <IconComponent />
                        </div>
                      </div>
                      <div>
                        <p className="text-xl font-semibold ">{card.name}</p>
                        <p className="text-sm text-gray-500">{card.details}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
          <motion.div
            animate={cardOpen === "three" ? "open" : "closed"}
            variants={fadeInOut}
            transition={{ duration: 0.8, stiffness: 100 }}
            id="card_3_details"
            className={`w-full h-full absolute top-0 left-0 overflow-hidden grid place-items-center px-5`}
          >
            <div id="card_3_details_card">
              {about_section.whatIknow.map((item) => {
                const IconComponent = item.techIcon;
                return (
                    <h1 className="text-5xl"> {item.techName} : <IconComponent className="inline-block" /></h1>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
