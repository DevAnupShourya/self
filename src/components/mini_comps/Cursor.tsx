// ? Local Files

// ? packages
import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX - 5);
      mouseY.set(event.clientY - 5);
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
      className="w-[10px] h-[10px] z-50 pointer-events-none fixed inset-0 rounded-full grid place-items-center bg-cyan-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      style={{
        filter : 'blur(2px)',
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
    ></motion.div>
  );
}
