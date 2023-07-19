// ? Local Files

// ? packages
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX - 25);
      mouseY.set(event.clientY - 25);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const springConfig = { damping: 40, stiffness: 300 };
  const cursorXSpring = useSpring(mouseX, springConfig);
  const cursorYSpring = useSpring(mouseY, springConfig);

  return (
    <motion.div
      id="cursor"
      className="w-[50px] h-[50px] pointer-events-none fixed inset-0 z-30  rounded-full grid place-items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
    ></motion.div>
  );
}
