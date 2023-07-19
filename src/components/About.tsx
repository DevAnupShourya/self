// ? Local Files

// ? packages
import {useState} from 'react'

export default function About() {
  const [cardOpen, setCardOpen] = useState('one');

  return (
    <section
      id="about"
      className="w-full h-full overflow-hidden grid place-items-center"
    >
      <div id="about_cards" className="w-2/3 h-2/3 flex flex-row">
        <div id="card_titles" className="w-1/4 border-l-4 border-slate-800 flex flex-col justify-between">
          <button id="card_1_title" className="hover:bg-slate-800 transition-colors bg-slate-800 border-l-4 border-cyan-500  w-full h-1/6 capitalize text-cyan-500 font-bold tracking-widest">who i am</button>
          <button id="card_2_title" className="hover:bg-slate-800 transition-colors w-full h-1/6 capitalize text-cyan-500 font-bold tracking-widest">how i work</button>
          <button id="card_3_title" className="hover:bg-slate-800 transition-colors w-full h-1/6 capitalize text-cyan-500 font-bold tracking-widest">what i know</button>
        </div>
        <div id="card_details" className="border w-3/4 overflow-y-scroll">
          <div id="card_1_details" className="w-full h-full bg-violet-400">Card 1</div>
          <div id="card_2_details" className="w-full h-full bg-violet-300">card 2</div>
          <div id="card_3_details" className="w-full h-full bg-violet-500">card 3</div>
        </div>
      </div>
    </section>
  );
}
