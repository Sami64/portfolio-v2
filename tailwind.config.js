module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	mode: "jit",
	darkMode: false,
	theme: {
		colors: {
			"sami-black": "#0A0908",
			"sami-white": "#F7F7F7",
			"sami-green": "#329F5B",
		},
		container: {
			center: true,
			padding: {
				DEFAULT: "5.5rem",
				sm: "7rem",
				lg: "8rem",
				xl: "10rem",
				"2xl": "12rem",
			},
		},
		extend: {},
	},
	plugins: [require("@tailwindcss/forms")],
};
