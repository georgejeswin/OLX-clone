import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import FooterBottom from "./components/FooterBottom";
import FooterTop from "./components/FooterTop";

function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <FooterTop />
        <Footer />
        <FooterBottom />
      </Router>
    </div>
  );
}

export default App;
