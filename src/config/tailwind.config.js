/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {},
  variants: {
    margin: ['responsive', 'first', 'last'],
    backgroundColor: ['hover']
  },
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: () => {
      if (process.env.STAGE_ENV === 'local') {
        return false
      } else {
        return true
      }
    },
    content: ['../**/*.vue', '../../dist/**/*.html', '../../dist/**/*.js']
  }
}
