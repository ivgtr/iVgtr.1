module.exports = {
  theme: {},
  variants: {
    margin: ['responsive', 'first', 'last'],
    backgroundColor: ['hover']
  },
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'src/components/**/*.vue',
      'src/layouts/**/*.vue',
      'src/pages/**/*.vue',
      'src/plugins/**/*.js',
      'src/plugins/**/*.ts',
      'nuxt.config.ts'
    ]
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  }
}
