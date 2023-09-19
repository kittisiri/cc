/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			height: {
				"screen-svh": "100svh",
			},

			fontFamily: {
				montserrat: ["Montserrat"],
			},

			colors: {
				// https://uicolors.app/edit?sv1=bluecc:50-f5f7fa/100-eaf0f6/200-cedee9/300-a4c1d6/400-739dbf/500-5183a9/600-3d678a/700-335471/800-2c485e/900-273c4f/950-1b2b37;stone:50-fafaf9/100-f5f5f4/200-e7e5e4/300-d6d3d1/400-a8a29e/500-78716c/600-57534e/700-44403c/800-292524/900-1c1917/950-0c0a09;cc-oldrose:50-faf7f6/100-f6edea/200-efddd9/300-e3c5be/400-d0a399/500-bb7f72/600-a7695b/700-8b564a/800-734a3f/900-573b33/950-341f1b
				ccblue: {
					50: "#f5f7fa",
					100: "#eaf0f6",
					200: "#cedee9",
					300: "#a4c1d6",
					400: "#739dbf",
					500: "#5183a9",
					600: "#3d678a",
					700: "#335471",
					800: "#2c485e",
					900: "#273c4f",
					950: "#1b2b37",
				},
				ccoldrose: {
					50: "#faf7f6",
					100: "#f6edea",
					200: "#efddd9",
					300: "#e3c5be",
					400: "#d0a399",
					500: "#bb7f72",
					600: "#a7695b",
					700: "#8b564a",
					800: "#734a3f",
					900: "#573b33",
					950: "#341f1b",
				},
			},
		},
	},
	plugins: [],
};
