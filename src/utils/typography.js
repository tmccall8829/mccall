import Typography from "typography"
import sutro from "typography-theme-sutro"

sutro.overrideThemeStyles = () => ({
  'a': {
    color: "#749C75",
  },
  'footer': {
    fontSize: '12px'
  },
})
sutro.bodyFontFamily = ['Helvetica', 'sans-serif']

const typography = new Typography(sutro)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
