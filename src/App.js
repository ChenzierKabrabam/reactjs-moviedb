import {
  createMuiTheme,
  MuiThemeProvider,
  responsiveFontSizes,
  CssBaseline,
} from '@material-ui/core'
import Home from './pages/Home'

let theme = createMuiTheme({
  palette: {
    background: {
      default: '#263238',
    },
    primary: {
      light: '#4f5b62', // font - white
      main: '#263238', // font - white
      dark: '#000a12', // font - white
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff616f',
      main: '#ff1744',
      dark: '#c4001d', // font - white
      contrastText: '#fff',
    },
  },
})

theme = responsiveFontSizes(theme)

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Home />
      <CssBaseline />
    </MuiThemeProvider>
  )
}

export default App
