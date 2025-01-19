/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    fontFamily: {
        'Great-Vibes': ['"Great Vibes"', 'cursive'],
      edu: ['"Edu AU VIC WA NT Pre"', 'cursive'],
      greatVibes: ['"Great Vibes"', 'cursive'],
      jacques: ['"Jacques Francois Shadow"', 'serif'],
      montserrat: ['Montserrat', 'sans-serif'],
      notoSans: ['"Noto Sans"', 'sans-serif'],
      openSans: ['"Open Sans"', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    },
    boxShadow: {
      'lg': '5px 5px 10px 2px rgba(110, 61, 61, 0.3)',
      'custom-light': '0 2px 4px rgba(143, 37, 37, 0.1)',
      'custom-heavy': '0 10px 15px rgba(128, 44, 44, 0.5)',
    },
  },
};
export const plugins = [];
