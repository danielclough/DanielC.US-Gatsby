import Typography from "typography"
import theme from "typography-theme-lawton"

theme.overrideThemeStyles = () => ({
  a: {
    color: "black",
    textDecoration: "none",
    borderBottom: "2px solid gold",
  },

  "a:hover": {
    color: "black",
    textDecoration: "none",
    borderBottom: "2px solid gold",
  },
})

const typography = new Typography(theme)

export default typography
