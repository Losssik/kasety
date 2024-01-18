import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {

  --color-test: #695CC1;

  /* Indigo */
  /* --color-brand-50: #eef2ff;
  --color-brand-100: #e0e7ff;
  --color-brand-200: #c7d2fe;
  --color-brand-300: #a5b4fc;
  --color-brand-400: #818cf8;
  --color-brand-500: #6366f1;
  --color-brand-600: #4f46e5;
  --color-brand-700: #4338ca;
  --color-brand-800: #3730a3;
  --color-brand-900: #312e81;
  --color-brand-950: #1e1b4b; */

  /* blue */

  --color-brand-50: #eff6ff;
  --color-brand-100: #dbeafe;
  --color-brand-200: #bfdbfe;
  --color-brand-300: #93c5fd;
  --color-brand-400: #60a5fa;
  --color-brand-500: #3b82f6;
  --color-brand-600: #2563eb;
  --color-brand-700: #1d4ed8;
  --color-brand-800: #1e40af;
  --color-brand-900: #1e3a8a;
  --color-brand-950: #172554;

  /* Grey */
  --color-grey-0: #fff;
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #111827;

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;

}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  letter-spacing: 1px;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;

}

body {
  font-family: 'Oswald', sans-serif;
  color: var(--color-grey-200);
  background-color: #fff;
  line-height: 1.5;
  font-size: 1.6rem;

}

input,
button,
textarea {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

a {
  color: var(--color-brand-500);
  text-decoration: none;
  font-size: 2rem;
}

a:hover {
   
    color: var(--color-test);
    transition: all 0.3s;
}

ul {
  list-style: none;
}`;

export default GlobalStyles;
