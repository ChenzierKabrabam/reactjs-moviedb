import {
  createMuiTheme,
  MuiThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core'
import Home from './pages/Home'

let theme = createMuiTheme({
  palette: {
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
    </MuiThemeProvider>
  )
}

export default App
