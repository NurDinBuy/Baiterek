import "./App.css";
import Header from "../header";
import Footer from "../footer";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Stocks from "../stocks";
import HomePage from "../home-page/home";
import stocksDetails from "../stocks-details";

function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <div className="container">
                    <Route path="/stocks" component={Stocks}>

                    </Route>
                    <Route path="/details" component={stocksDetails}>

                    </Route>
                    <Route exact={true} path="/" component={HomePage}>

                    </Route>
                </div>
                <Footer/>
            </div>
        </Router>
    );
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Route exact={true} path="/" component={HomePage}></Route>
          <Route path="/stocks" component={Stocks}></Route>
          <Route path="/details" component={stocksDetails}></Route>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
