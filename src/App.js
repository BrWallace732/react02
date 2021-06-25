import { Navbar, Footer} from './components'
import ScrollToTop from './components/ScrollToTop'
import GlobalStyle from './globalStyles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/HomePage/Home'
import Services from './pages/Services/Services'
import Products from './pages/Products/Products'
import SignUp from './pages/SignUp/SignUp'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <switch>
        <Route path="/" exact component={Home} />
        <Route path="/Services" exact component={Services} />
        <Route path="/Products" exact component={Products} />
        <Route path="/SignUp" exact component={SignUp} />
      </switch>
      <Footer />
    </Router>
  );
}

export default App;
