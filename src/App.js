import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import FooterBottom from "./components/FooterBottom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useContext } from "react";
import { AuthContext, FirebaseContext } from "./store/Context";
import { useEffect } from "react";
import Sell from "./pages/Sell";
import ViewProduct from "./pages/ViewProduct";
import Nav from "./components/Nav";

function App() {
  const { setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, [firebase, setUser]);
  return (
    <div className="app">
      <Router>
        {/* <NavBar /> */}
        <Nav />
        <Header />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/" component={Home} />
          <Route exact path="/sell" component={Sell} />
          <Route exact path="/product/:id" component={ViewProduct} />
        </Switch>
        <Footer />
        <FooterBottom />
      </Router>
    </div>
  );
}

export default App;
