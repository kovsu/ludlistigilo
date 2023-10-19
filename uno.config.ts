import { defineConfig, presetUno, presetAttributify, presetIcons } from "unocss"

export default defineConfig ({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
})
