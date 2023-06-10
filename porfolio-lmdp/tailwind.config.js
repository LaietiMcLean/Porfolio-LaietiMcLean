/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: {
    enabled: true,
    content: ['./src/**/*.{html,ts}']
  },
  theme: {
    extend: {
      screens: {
        '3xl': '2000px',
        '4xl': '2560px'
      }
    },
  },
  theme: {
    extend: {
      screens: {
        '3xl': '2000px',
        '4xl': '2560px'
      },
      colors: {
        main: {
          DEFAULT: 'var(--MAIN_COLOR)',
          1: 'var(--MAIN_COLOR_TINT_1)',
          2: 'var(--MAIN_COLOR_TINT_2)',
          3: 'var(--MAIN_COLOR_TINT_3)',
          4: 'var(--MAIN_COLOR_TINT_4)',
          5: 'var(--MAIN_COLOR_TINT_5)',
          6: 'var(--MAIN_COLOR_TINT_6)',
          7: 'var(--MAIN_COLOR_TINT_7)'
        },
        secondary: {
          DEFAULT: 'var(--SECONDARY_COLOR)',
          1: 'var(--SECONDARY_COLOR_TINT_1)',
          2: 'var(--SECONDARY_COLOR_TINT_2)'
        },
        dark: 'var(--DARK_COLOR)',
        light: {
          DEFAULT: 'var(--LIGHT_COLOR)',
          2: 'var(--LIGHT_COLOR_TINT_2)'
        },
        grey: {
          1: 'var(--GREY_COLOR_1)',
          2: 'var(--GREY_COLOR_2)',
          3: 'var(--GREY_COLOR_3)',
          4: 'var(--GREY_COLOR_4)',
          5: 'var(--GREY_COLOR_5)',
          6: 'var(--GREY_COLOR_6)',
          7: 'var(--GREY_COLOR_7)'
        },
        error: {
          DEFAULT: 'var(--ERROR_COLOR)',
          soft: 'var(--SOFT_ERROR_COLOR)'
        },
        warning: {
          DEFAULT: 'var(--WARNING_COLOR)',
          soft: 'var(--SOFT_WARNING_COLOR)'
        },
        success: {
          DEFAULT: 'var(--SUCCESS_COLOR)',
          soft: 'var(--SOFT_SUCCESS_COLOR)'
        },
        navy: {
          DEFAULT: 'var(--NAVY_COLOR)',
          soft: 'var(--SOFT_NAVY_COLOR)'
        },
        porfolio: {
          1: 'var(--COLOR_TINT_1)',
          2: 'var(--COLOR_TINT_2)',
          3: 'var(--COLOR_TINT_3)',
          4: 'var(--COLOR_TINT_4)',
          5: 'var(--COLOR_TINT_5)',
          6: 'var(--COLOR_TINT_6)'
        },
        other: {
          7: 'var(--OTHER_COLOR_7)',
          10: 'var(--OTHER_COLOR_10)'
        }
      },
      fontFamily: 'var(--FONT_FAMILY)',
      fontSize: {
        xxs: 'var(--TEXT_XXS)',
        xs: 'var(--TEXT_XS)',
        sm: 'var(--TEXT_SM)',
        base: 'var(--TEXT_BASE)',
        xl: 'var(--TEXT_XL)',
        '2xl': 'var(--TEXT_2XL)',
        '4xl': 'var(--TEXT_4XL)',
        '5xl': 'var(--TEXT_5XL)',
        '6xl': 'var(--TEXT_6XL)',
        '8xl': 'var(--TEXT_8XL)'
      },
      boxShadow: {
        DEFAULT: '0px 2px 8px rgba(0, 0, 0, 0.15)',
        sm: '0px 0px 4px rgba(0, 0, 0, 0.15)',
        focus: '0px 0px 3.2px #3591CA'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [],
}

