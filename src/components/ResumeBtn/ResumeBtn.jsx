import { motion } from "framer-motion";
import React from "react";

const ResumeBtn = ({ title, className, ...props }) => {
	return (
		<motion.button
			className={`border-sami-green text-sami-green border rounded px-6 py-2 hover:bg-sami-green hover:text-sami-white transition-all whitespace-nowrap select-none ${className}`}
			whileTap={{ scale: 0.95, transition: { duration: 0.025 } }}
			{...props}
		>
			{title}
		</motion.button>
	);
};

export default ResumeBtn;
