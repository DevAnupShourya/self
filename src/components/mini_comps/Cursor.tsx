// ? Local Files

// ? packages
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface onLinkProps {
  onLink: boolean;
}

export default function Cursor(props: onLinkProps) {
  const mouse1X = useMotionValue(0);
  const mouse2X = useMotionValue(0);
  const mouse1Y = useMotionValue(0);
  const mouse2Y = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouse1X.set(event.clientX - 5);
      mouse1Y.set(event.clientY - 5);
      mouse2X.set(event.clientX - 25);
      mouse2Y.set(event.clientY - 25);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouse1X, mouse1Y, mouse2X, mouse2Y]);

  const springConfig1 = { damping: 30, stiffness: 500 };
  const cursorXSpring1 = useSpring(mouse1X, springConfig1);
  const cursorYSpring1 = useSpring(mouse1Y, springConfig1);
  const springConfig2 = { damping: 40, stiffness: 300 };
  const cursorXSpring2 = useSpring(mouse2X, springConfig2);
  const cursorYSpring2 = useSpring(mouse2Y, springConfig2);

  return (
    <div className="max-md:hidden">
      <motion.div
        id="cursor1"
        className="w-[10px] h-[10px] z-50 pointer-events-none fixed inset-0 rounded-full bg-cyan-500"
        animate={{
          opacity: 1,
          width: props.onLink === true ? "20px" : "10px",
          height: props.onLink === true ? "20px" : "10px",
        }}
        transition={{ delay: 0, duration: 0.5 }}
        style={{
          translateX: cursorXSpring1,
          translateY: cursorYSpring1,
        }}
      ></motion.div>
      <motion.div
        id="cursor2"
        className={`z-50 w-[50px] h-[50px] pointer-events-none fixed inset-0 rounded-full grid place-items-center border-2 border-cyan-700 bg-blend-multiply`}
        animate={{
          opacity: 1,
          width: props.onLink === true ? "100px" : "50px",
          height: props.onLink === true ? "100px" : "50px",
        }}
        transition={{ delay: 0, duration: 0.6 }}
        style={{
          translateX: cursorXSpring2,
          translateY: cursorYSpring2,
        }}
      ></motion.div>
    </div>
  );
}
