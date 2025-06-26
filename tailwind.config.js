/** @type         primary: '#780d78', // morado principal RGB(120, 13, 120)
        secondary: '#d4af37', // dorado
        accent: '#CC00CC',
        bgLight: '#f9f0f9', // fondo general morado muy claro RGB(249, 240, 249)
        bgSection: '#f4dcf4', // fondo secciones morado clarort('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#660066', // púrpura Rubato principal del manual
        secondary: '#d4af37', // dorado
        accent: '#CC00CC', // magenta del degradado
        bgLight: '#f9f0f9', // fondo general morado muy claro RGB(249, 240, 249)
        bgSection: '#f4dcf4', // fondo secciones morado claro  
        bgCard: '#fcf0fc', // fondo tarjetas muy claro
        bgDark: '#240f24', // fondo oscuro principal
        bgDarkSection: '#4b204b', // fondo secciones oscuras
        headerDark: '#660066', // header morado del manual
        gold: '#d4af37', // dorado elegante
        goldHover: '#ffd750', // dorado hover
        moradoPrincipal: '#660066', // morado principal del manual
        moradoClaro: '#ce8dce', // morado más claro para textos secundarios
        textDark: '#333333', // texto oscuro
        textLight: '#FFFFFF', // texto blanco
        textSecondary: '#ce8dce', // texto secundario (morado claro)
        section1: '#2C0A2C',
        section2: '#361436',
        section3: '#400040',
        casiNegro: '#220022',
        blanco: '#FFFFFF',
        negro: '#000000',
        'accent-soft': '#F5F5F5',
        'text-main': '#F8F4FC',
      },
      fontFamily: {
        heading: ['Cinzel', 'serif'],
        body: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        cinzel: ['Cinzel', 'serif'],
        montserrat: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Cinzel', 'serif'], // para compatibilidad con el diseño base
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        h1: '3rem', // ~48px
        h2: '2rem', // ~32px
        h3: '1.5rem', // ~24px
        base: '1rem', // 16px
        sm: '0.875rem', // 14px
      },
      boxShadow: {
        card: '0 2px 8px 0 rgba(60,60,60,0.08)',
      },
      borderRadius: {
        card: '0.75rem',
      },
    },
  },
  plugins: [],
};