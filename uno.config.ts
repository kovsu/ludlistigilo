import { defineConfig, presetUno, presetAttributify, presetIcons, presetWebFonts } from "unocss"

export default defineConfig ({
  theme: {
    colors: {
      "primary": "#7767bd",
      "success": "#1bb954 ",
      "failed": "#FB364D",
      "pending": "#FFC700",
    },
    breakpoints: {
      sm: '320px',
      md: '640px',
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Nunito Sans',
        mono: ['Nunito'],
      },
    }),
  ],
})
