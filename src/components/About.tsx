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
      <div id="about_cards" className="w-3/4 h-2/3 max-md:w-10/12 max-md:h-5/6 flex flex-row max-md:flex-col">
        <div id="card_titles" className="w-1/4 max-md:h-1/6 max-md:w-full border-l-4 max-md:border-b-4  max-md:border-l-0 border-slate-800 flex flex-col max-md:flex-row justify-between">
          <motion.button
            whileTap={{}}
            onClick={() => {
              setCardOpen("one");
            }}
            id="card_1_title"
            className={`hover:bg-slate-800 transition-colors w-full max-md:w-1/3 h-1/6 max-md:h-full capitalize text-cyan-500 font-bold tracking-widest  ${
              cardOpen === "one"
                ? "bg-slate-800 border-l-4 max-md:border-b-4 max-md:border-l-0  border-cyan-500"
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
            className={`hover:bg-slate-800 transition-colors w-full max-md:w-1/3 h-1/6 max-md:h-full capitalize text-cyan-500 font-bold tracking-widest  ${
              cardOpen === "two"
                ? "bg-slate-800  border-l-4 max-md:border-b-4 max-md:border-l-0  border-cyan-500"
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
            className={`hover:bg-slate-800 transition-colors w-full max-md:w-1/3 h-1/6 max-md:h-full  capitalize text-cyan-500 font-bold tracking-widest ${
              cardOpen === "three"
                ? "bg-slate-800 border-l-4 max-md:border-b-4 max-md:border-l-0  border-cyan-500"
                : ""
            } `}
          >
            what i know
          </motion.button>
        </div>
        <div id="card_details" className="h-full w-3/4 max-md:w-full max-md:h-5/6 relative">
          <motion.div id="card_1_details"
            animate={cardOpen === "one" ? "open" : "closed"}
            variants={fadeInOut}
            transition={{ duration: 0.8, stiffness: 100 }}
            className={`w-full h-full z-[2] absolute top-0 left-0 overflow-hidden grid place-items-center px-5 max-md:py-5 max-md:px-0`}
          >
            <div id="card_1_details_card border">
              <h1 className="text-4xl font-bold capitalize">
                {about_section.whoIam.myName}
              </h1>
              <p className="text-gray-500 text-sm font-semibold capitalize mt-1 mb-5">
                {about_section.whoIam.myStatus}
              </p>
              <p className="text-gray-500 text-xl my-2 font-light capitalize">
                {about_section.whoIam.mySelfPara1}
              </p>
              <p className="text-xl text-gray-500 my-2 font-light capitalize">
                {about_section.whoIam.mySelfPara2}
              </p>
            </div>
          </motion.div>
          <motion.div id="card_2_details"
            animate={cardOpen === "two" ? "open" : "closed"}
            variants={fadeInOut}
            transition={{ duration: 0.8, stiffness: 100 }}
            className={`w-full h-full z-1 absolute top-0 left-0 overflow-y-scroll grid place-items-center px-5`}
          >
            <div id="card_2_details_card" className="w-10/12 h-full">
              {about_section.howIWork.map((card) => {
                const IconComponent = card.icon;
                return (
                  <motion.div
                    transition={{ delay: 0.08 * card.stepNumber }}
                    whileInView={{ opacity: [0, 1] }}
                    className="flex"
                    key={card.stepNumber}
                  >
                    <div
                      id="left-side"
                      className="flex flex-col items-center mr-6"
                    >
                      <div
                        id={`upperdiv_${card.stepNumber}`}
                        className="bg-slate-400 w-px h-10 opacity-100 sm:h-full"
                      />
                      <div>
                        <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
                          {card.stepNumber}
                        </div>
                      </div>
                      <div
                        id={`bottomdiv_${card.stepNumber}`}
                        className="w-px h-full bg-slate-400"
                      />
                    </div>
                    <div
                      id="right-side"
                      className="flex flex-col sm:items-center sm:flex-row py-5"
                    >
                      <div className="sm:mr-5">
                        <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-950  sm:w-24 sm:h-24 text-indigo-500 border border-indigo-500 text-2xl font-bold">
                          <IconComponent />
                        </div>
                      </div>
                      <div>
                        <h1 className="text-xl font-semibold text-indigo-500">
                          {card.name}
                        </h1>
                        <p className="text-sm">{card.details}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
          <motion.div id="card_3_details"
            animate={cardOpen === "three" ? "open" : "closed"}
            variants={fadeInOut}
            transition={{ duration: 0.8, stiffness: 100 }}
            className={`w-full h-full z-1 absolute top-0 left-0 overflow-hidden grid place-items-center px-5`}
          >
            <div id="card_3_details_card" className="w-full h-full">
              <ul className="w-full h-full grid grid-rows-4 grid-cols-3 place-items-stretch">
                {about_section.whatIknow.map((item) => {
                  const IconComponent = item.techIcon;
                  return (
                    <motion.li
                      animate={{ opacity: [0, 0.5, 1] }}
                      transition={{ delay: item.no * 0.1, duration: 0.5 }}
                      key={item.techName}
                      className="text-white text-5xl flex flex-col justify-center items-center"
                      title={item.techName}
                    >
                      <IconComponent className="text-teal-500" />
                      <p className="text-sm uppercase font-light tracking-widest text-teal-200">
                        {item.techName}
                      </p>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
