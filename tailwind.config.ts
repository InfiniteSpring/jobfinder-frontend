
import daisyui from "daisyui";
import daisyUIThemes from "daisyui/src/theming/themes";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/app/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
	theme: {
	  extend: {
		colors: {
		  mainBackground: "hsl(var(--mainBackground, 220 14% 96%))",
		  accentBackground: "hsl(var(--accentBackground, 0 0% 100%))",
		  emptySpaceBackground: "hsl(var(--emptySpaceBackground, 220 14% 90%))",
		  primary: "hsl(var(--primary, 0 100% 70%))",
		  secondary: "hsl(var(--secondary, 240 85% 55%))",
		},
	  },
	},
	plugins: [daisyui],
  
	daisyui: {
	  themes: [
		  {
			grayGreen: {
				"primary": "86, 60%, 49%",
				"secondary": "88, 50%, 37%",
				"emptySpaceBackground": "220, 6%, 22%",
				"accentBackground": "210, 3%, 43%",
				"mainBackground": "200, 10%, 15%",
			},
		  light: {
			"primary": "0 100% 70%",
			"secondary": "240 85% 55%",
			"mainBackground": "220 14% 96%",
			"accentBackground": "0 0% 100%",
			"emptySpaceBackground": "220 14% 90%",
		  },
		  warm: {
			"primary": "10 90% 60%",
			"secondary": "40 100% 50%",
			"mainBackground": "40 100% 95%",
			"accentBackground": "0 0% 100%",
			"emptySpaceBackground": "40 80% 90%",
		  },
		  cool: {
			"primary": "220 85% 60%",
			"secondary": "160 85% 55%",
			"mainBackground": "220 14% 95%",
			"accentBackground": "0 0% 100%",
			"emptySpaceBackground": "220 14% 85%",
		  },
		  dark: {
			"primary": "350 78% 50%",
			"secondary": "51 100% 50%",
			"mainBackground": "0 0% 7%",
			"accentBackground": "0 0% 12%",
			"emptySpaceBackground": "0 0% 18%",
		  },
		  neon: {
			"primary": "180 100% 50%",
			"secondary": "300 100% 50%",
			"mainBackground": "210 100% 5%",
			"accentBackground": "220 100% 10%",
			"emptySpaceBackground": "230 100% 15%",
		  },
		  profe: {
			"primary": "210 85% 45%",
			"secondary": "30 100% 50%",
			"mainBackground": "220 10% 10%",
			"accentBackground": "220 10% 15%",
			"emptySpaceBackground": "220 10% 20%",
		  },
		},
	  ],
	  base: true,
	},
  };