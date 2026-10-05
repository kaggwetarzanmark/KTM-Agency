/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],

  theme: {
    extend: {

      // ─── COLORS ───────────────────────────────────────────────────────────
      // Extracted from :root CSS variables in the design mockup
      colors: {
        // Brand red — primary accent, CTAs, active states, the sq dot
        accent: {
          DEFAULT: '#D93225',
          hover:   '#bf2b1f',
        },

        // Background surfaces (light mode)
        bg: {
          DEFAULT: '#FFFFFF',
          surface: '#F3F1EF',
        },

        // Foreground / text (light mode)
        fg: {
          DEFAULT: '#0B0A0A',
          muted:   '#A09B97',
          'muted-text': '#67625F',
        },

        // Border / divider
        line: 'rgba(11,10,10,0.18)',

        // Dark section backgrounds (services block, footer, nav dropdown)
        dark: {
          DEFAULT:  '#0B0A0A',
          deeper:   '#050404',
          surface:  '#171515',
          elevated: '#151312',
          card:     '#15110F',
        },

        // Text on dark backgrounds
        'on-dark': {
          DEFAULT: '#F4F1EE',
          muted:   '#A39D98',
          subtle:  '#B9B2AC',
        },

        // Dark mode border
        'dark-line': 'rgba(255,255,255,0.16)',

        // On-accent text
        'on-accent': '#FFFFFF',

        // Nav dropdown bg
        'nav-drop': '#151312',
      },

      // ─── TYPOGRAPHY ───────────────────────────────────────────────────────
      fontFamily: {
        display: ['Instrument Sans', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        body:    ['Instrument Sans', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono:    ['Geist Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },

      fontSize: {
        // Mono / eyebrow labels
        'mono-xs': ['12px', { letterSpacing: '0.04em' }],
        'mono-sm': ['11px', { letterSpacing: '0.05em' }],

        // Eyebrow
        eyebrow: ['13px', { fontWeight: '500' }],

        // Body scale
        'body-sm':  ['12.5px', { lineHeight: '1.45' }],
        'body-base':['15px',   { lineHeight: '1.5' }],
        'body-md':  ['14.5px', { lineHeight: '1.5' }],

        // Nav
        'nav-link': ['13.5px', { fontWeight: '500' }],
        'logo':     ['21px',   { fontWeight: '600', letterSpacing: '-0.03em' }],

        // Heading scale (used with clamp in CSS for fluid behaviour)
        'h3-card':  ['1.3rem',  { fontWeight: '500', letterSpacing: '-0.03em' }],
        'h3-why':   ['1.2rem',  { fontWeight: '500', letterSpacing: '-0.02em' }],
      },

      // ─── SPACING / LAYOUT ─────────────────────────────────────────────────
      maxWidth: {
        site: '1320px',   // --maxw
      },

      borderRadius: {
        card:   '22px',   // shots, portfolio cards, preview panel, form
        section:'28px',   // --radius — dark block, pain section, audit banner
        btn:    '999px',  // all buttons
        chip:   '999px',  // pain-point chips
        tag:    '999px',  // pills and tags
        nav:    '22px',   // nav inner box
        drop:   '16px',   // dropdown menu box
        'drop-item': '10px',
        input:  '12px',
        icon:   '14px',   // why-item icon box
        badge:  '999px',  // figcaption badges on showcase shots
      },

      // ─── NAV HEIGHT ───────────────────────────────────────────────────────
      height: {
        nav:      '68px',  // --nav-h
        'btn-sm': '40px',
        'btn-lg': '48px',
        'btn-mobile': '44px',
      },

      // ─── TRANSITIONS ──────────────────────────────────────────────────────
      transitionDuration: {
        fast: '150ms',
        base: '200ms',
        slow: '250ms',
        theme: '300ms',
      },

      // ─── ANIMATION ────────────────────────────────────────────────────────
      // Keyframes defined in global.css
      animation: {
        'drift1':    'drift1 24s ease-in-out infinite alternate',
        'drift2':    'drift2 19s ease-in-out infinite alternate',
        'marquee':   'marquee 38s linear infinite',
      },

      // ─── BOX SHADOWS ──────────────────────────────────────────────────────
      boxShadow: {
        phone:   '0 22px 50px rgba(0,0,0,0.35)',
        card:    '0 22px 50px rgba(0,0,0,0.25)',
        serp:    '0 22px 50px rgba(0,0,0,0.22)',
        preview: '0 24px 60px rgba(0,0,0,0.45)',
        wa:      '0 10px 30px rgba(0,0,0,0.3)',
      },

      // ─── BACKDROP BLUR ────────────────────────────────────────────────────
      backdropBlur: {
        nav: '14px',
        badge: '8px',
      },
    },
  },

  plugins: [],
};
