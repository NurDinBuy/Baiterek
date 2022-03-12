import "./App.css";
import Header from "../header";
import Footer from "../footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Stocks from "../stocks";
import HomePage from "../home-page/home";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Route path="/stocks" component={Stocks}>

          </Route>
          <Route exact={true} path="/" component={HomePage}>

          </Route>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
