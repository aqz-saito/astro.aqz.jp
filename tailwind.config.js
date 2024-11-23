/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class", // 追加: クラスベースのダークモード設定
  theme: {
    extend: {},
  },
  plugins: [],
};
