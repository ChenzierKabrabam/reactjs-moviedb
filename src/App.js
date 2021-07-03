import {
  createMuiTheme,
  MuiThemeProvider,
  responsiveFontSizes,
  CssBaseline,
} from '@material-ui/core'
import Home from './pages/Home'
import SingleMovie from './pages/singleMovie'

let theme = createMuiTheme({
  palette: {
    background: {
      default: '#4f5b62',
    },
    primary: {
      light: '#4f5b62', // font - white
      main: '#263238', // font - white
      dark: '#000a12', // font - white
      contrastText: '#fff',
    },
    secondary: {
      light: '#62727b',
      main: '#37474f',
      dark: '#102027', // font - white
      contrastText: '#fff',
    },
  },
})

theme = responsiveFontSizes(theme)

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Home />
      {/* <SingleMovie /> */}
      <CssBaseline />
    </MuiThemeProvider>
  )
}

export default App
