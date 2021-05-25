import "./App.css";
import Header from "./partials/Header";
import Sidebar from "./partials/Sidebar";
import Home from "./components/Home";
import Footer from "./partials/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/" component={About} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
