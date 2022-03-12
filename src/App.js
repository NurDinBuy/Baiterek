import './App.css';
import Header from './components/header'
import Slider from "./components/slider";
import SaleDetails from "./components/sale-details";
import AboutCompany from "./components/about-company";
import DoneProject from "./components/done-projects/doneProject";
import RealizedProjects from "./components/realized-projects";
import Connections from "./components/connections/connections";
import Footer from "./components/footer";
import SliderSwiper from "./components/Slider1";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="container">
                {/*<SliderSwiper />*/}
                <Slider/>
                <SaleDetails/>
                <AboutCompany/>
                <DoneProject/>
                <RealizedProjects/>
                <Connections/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
