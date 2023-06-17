/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#e8f3ff',
					100: '#d5e8ff',
					200: '#b3d3ff',
					300: '#85b4ff',
					400: '#5686ff',
					500: '#2f59ff',
					600: '#0c26ff',
					700: '#0017eb',
					800: '#061ccd',
					900: '#10249f',
					950: '#0a135c',
				},
				danone: {
					'light-blue': '#e8f3ff',
					'picton-blue': '#4CABE4',
					'blue-jeans': '#5BB5E9',
					'baby-blue': '#89C8F2',
					'vivid-ceru': '#11ACED',
					'violet-blue': '#324BAA',
					red: '#D52330',
				},
			},
		},
	},
	plugins: [],
};
