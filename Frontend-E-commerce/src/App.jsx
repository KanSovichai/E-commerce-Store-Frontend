import Nav from "./components/Navbar";
import HeroContent from "./components/Hero-content";
import ProductsFeature from "./components/products-feature";
function App() {
    return(
      
        <div className="body">
            <HeroContent></HeroContent>
            <ProductsFeature></ProductsFeature>
        </div>
    );
}
export default App;