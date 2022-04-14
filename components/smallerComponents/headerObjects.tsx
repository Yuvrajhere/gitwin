import { motion } from "framer-motion";

export const CommitObj1 = () => {

  const variants = {
    start: { left: "-10vw", top: "70vh" },
    end: { left: "105vw", top: "0vh", rotate: 180  },
  }

  return (
    <motion.div
      initial="start"
      animate="end"
      variants={variants}
      transition={{ type: "tween", ease: "linear", duration: 15, repeat: Infinity, repeatType: "reverse", delay: 3 }}
      className="absolute grid grid-cols-2 gap-2 h-24 w-24 -z-10"
    >
      <div className="bg-[#2F984A]"></div>
      <div className="bg-[#216435]"></div>
      <div className="bg-[#93E7A2]"></div>
      <div className="bg-[#E8EAEE]"></div>
    </motion.div>
  );
};

export const CommitObj2 = () => {
  const variants = {
    start: { left: "60vw", top: "70vh", rotate: -30 },
    end: { left: "30vw", top: "0vh", rotate: 180  },
  }

  return (
    <motion.div
    initial="start"
    animate="end"
    variants={variants}
    transition={{ type: "tween", ease: "linear", duration: 30, repeat: Infinity, repeatType: "reverse" }} className="absolute grid grid-cols-3 gap-2 h-24 w-36 -z-10">
      <div className="h-10 w-10 bg-[#E8EAEE]"></div>
      <div className="h-10 w-10 bg-[#93E7A2]"></div>
      <div className="h-10 w-10 bg-[#93E7A2]"></div>
      <div className="h-10 w-10 bg-[#93E7A2]"></div>
      <div className="h-10 w-10 bg-[#3EBE5E]"></div>
      <div className="h-10 w-10 bg-[#93E7A2]"></div>
    </motion.div>
  );
};

export const CommitObj3 = () => {
  const variants = {
    start: { left: "-10vw", top: "-10vh", rotate: 180  },
    end: { left: "90vw", top: "60vh", rotate: 30 },
  }

  return (
    <motion.div
    initial="start"
    animate="end"
    variants={variants}
    transition={{ type: "tween", ease: "linear", duration: 30, repeat: Infinity, repeatType: "reverse", delay: 3 }} className="absolute grid grid-cols-2 gap-2 h-24 w-24 -z-10">
      <div className="h-10 w-10 bg-[#216435]"></div>
      <div className="h-10 w-10 bg-[#216435]"></div>
      <div className="h-10 w-10 bg-[#2F984A]"></div>
      <div className="h-10 w-10 bg-[#3EBE5E]"></div>
    </motion.div>
  );
};

export const CommitObj4 = () => {
  const variants = {
    start: { left: "90vw", top: "0vh", rotate: 60 },
    end: { left: "35vw", top: "80vh", rotate: 180  },
  }

  return (
    <motion.div
    initial="start"
    animate="end"
    variants={variants}
    transition={{ type: "tween", ease: "linear", duration: 30, repeat: Infinity, repeatType: "reverse" }} className="absolute grid grid-cols-2 gap-2 h-24 w-24 -z-10">
      <div className="h-10 w-10 bg-[#93E7A2]"></div>
      <div className="h-10 w-10 bg-[#93E7A2]"></div>
      <div className="h-10 w-10 bg-[#3EBE5E]"></div>
      <div className="h-10 w-10 bg-[#3EBE5E]"></div>
    </motion.div>
  );
};
