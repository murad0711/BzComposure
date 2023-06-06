/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f4f9fa",
        black: "#000",
        white: "#fff",
        firebrick: "#b91c1c",
        lightcyan: "#dcf1f5",
        cadetblue: "#00a9c3",
        gainsboro: "#e7e7e7",
        slategray: "rgba(107, 114, 128, 0.75)",
        aliceblue: "#ecf7f9",
        dimgray: "#4b5563",
        "grayapa-200": "#e5e7eb",
        "grayapa-500": "#6b7280",
        "grayapa-300": "#d1d5db",
        "actions-extras-unactive-text-color": "#a9a9a9",
        "gray-900": "#111827",
        darkslategray: "#374151",
        "primaryapa-600": "#0042a3",
        darkslateblue: "#002152",
        "red-100": "#fee2e2",
      },
      fontFamily: {
        "text-sm-leading-5-font-normal": "Inter",
      },
      borderRadius: {
        "10xs-7": "2.7px",
        "31xl": "50px",
      },
    },
    fontSize: {
      base: "1rem",
      sm: "0.88rem",
      "5xl": "1.5rem",
      mini: "0.94rem",
      xs: "0.75rem",
      "11xl": "1.88rem",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
