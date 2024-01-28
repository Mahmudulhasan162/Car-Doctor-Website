import About from "./About/About";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Products from "./Products/Products";
import Service from "./Service/Service";


const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <About></About>
           <Service></Service>
           <Contact></Contact>
           <Products></Products>
        </div>
    );
};

export default Home;