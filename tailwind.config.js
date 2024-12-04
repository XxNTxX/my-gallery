/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        body: '#1E293B',
        card: {
          bg: '#334155',
          text: '#F1F5F9',
          text2: '#FACC15',
          text3: '#22D3EE',
        },
      },
    },
  },
  plugins: [],
};
