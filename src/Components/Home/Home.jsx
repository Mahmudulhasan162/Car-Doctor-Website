import About from "./About/About";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Products from "./Products/Products";
import Service from "./Service/Service";
import Team from "./Team/Team";
import CoreFeatures from "./CoreFeatures/CoreFeatures";


const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <About></About>
           <Service></Service>
           <Contact></Contact>
           <Products></Products>
           <Team></Team>
           <CoreFeatures></CoreFeatures>
        </div>
    );
};

export default Home;