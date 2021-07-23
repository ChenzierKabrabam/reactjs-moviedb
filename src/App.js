import {
  createMuiTheme,
  MuiThemeProvider,
  responsiveFontSizes,
  CssBaseline,
} from '@material-ui/core'
import Home from './pages/Home'
import MoviePage from './pages/MoviePage'
import TvShowPage from './pages/TvShowPage'
import { Switch, Route } from 'react-router-dom'
import Header from './component/Header'
import SearchResult from './pages/SearchResult'

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
      <Header />
      <Switch>
        <Route exact path='/' children={<Home />} />
        <Route path='/movie/:id' children={<MoviePage />} />
        <Route path='/tv-show/:id' children={<TvShowPage />} />
        <Route path='/search' children={<SearchResult />} />
      </Switch>
      <CssBaseline />
    </MuiThemeProvider>
  )
}

export default App

// avatar: Image by <a href="https://pixabay.com/users/wingtilldie-3058071/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1577909">WingTillDie</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1577909">Pixabay</a>
