import { Navbar} from './components'
import GlobalStyle from './globalStyles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/HomePage/Home'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <switch>
        <Route path="/" exact component={Home} />
      </switch>
    </Router>
  );
}

export default App;
