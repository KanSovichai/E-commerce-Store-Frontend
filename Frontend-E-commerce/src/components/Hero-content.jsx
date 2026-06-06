import "../styles/Hero-content-style.css";
import Nav from "./Navbar";
const HeroContent = () => {
	return (
		<div className="container">
			<div className="nav-wrapper">
				<Nav></Nav>
			</div>
			<div className="hero-carousel-container">
				<div className="missingPart">
					<img src="../src/assets/MissingNavPart.png" alt="" />
				</div>
			</div>
		</div>
	);
};
export default HeroContent;
