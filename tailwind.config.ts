import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // デジタル庁ガイドライン準拠のカラーパレット (HSL)
        brand: {
          100: 'hsl(215, 100%, 95%)', // 最も薄い (E8F1FE相当)
          200: 'hsl(226, 100%, 77%)', // 8AA5FF相当
          300: 'hsl(226, 96%, 60%)',  // 3460FB相当 (Highlight)
          400: 'hsl(232, 100%, 48%)', // 0029F5相当
          500: 'hsl(232, 100%, 38%)', // 0017C1相当 (Main / Darkest)
        },
        highlight: 'hsl(226, 96%, 60%)',
        danger: 'hsl(0, 99%, 61%)',
        'dashboard-bg': 'hsl(240, 33%, 98%)',
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans JP', 'sans-serif'],
      },
      aspectRatio: {
        '16/9': '16 / 9',
      },
    },
  },
  plugins: [],
};

export default config;
