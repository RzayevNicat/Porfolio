import './styles/reset.css';
import './styles/global.css';
import './styles/navbar.css';
import Home from './components/Home';
import Works from './components/Works';
import { Link } from 'react-scroll';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import cv from './images/CVNicatRzayev.pdf';
import Slider from './components/Slider';
import { Helmet } from 'react-helmet';
import img from './images/IMG_9631.jpg';
function App() {
	return (
		<div className="main">
			<Helmet>
				<meta charSet="utf-8" />
				<link rel="icon" href={img} />
				<title>Portfolio</title>
			</Helmet>
			<nav className="navbar">
				<h4>Nicat Rzayev</h4>
				<ul>
					<li>
						<Link
							to="home"
							spy={true}
							smooth={true}
							offset={50}
							duration={500}
							className="neutral2"
							onClick={(e) => {
								e.preventDefault();
							}}
						>
							HOME |
						</Link>
					</li>
					<li>
						<Link
							to="works"
							spy={true}
							smooth={true}
							offset={50}
							duration={500}
							className="neutral2"
							onClick={(e) => {
								e.preventDefault();
							}}
						>
							WORKS |
						</Link>
					</li>
					<li>
						<Link
							to="about"
							spy={true}
							smooth={true}
							offset={50}
							duration={500}
							className="neutral2"
							onClick={(e) => {
								e.preventDefault();
							}}
						>
							ABOUT ME |
						</Link>
					</li>
					<li>
						<Link
							to="contact"
							spy={true}
							smooth={true}
							offset={50}
							duration={500}
							className="neutral2"
							onClick={(e) => {
								e.preventDefault();
							}}
						>
							CONTACT ME |
						</Link>
					</li>
					<li>
						<a href={cv} download>
							CV
						</a>
					</li>
				</ul>
			</nav>

			<Home id="home" />
			<Works id="works" />
			<AboutMe id="about" />
			<Slider />
			<Footer id="contact" />
			<div class="snowflakes" aria-hidden="true">
				<div className="snowflake">🔴</div>
				<div className="snowflake">🔵</div>
				<div className="snowflake">🟡</div>
				<div className="snowflake">🟢</div>
				<div className="snowflake">⚪</div>
				<div className="snowflake">🟠</div>
				<div className="snowflake">🟠</div>
				<div className="snowflake">🔴</div>
				<div className="snowflake">🔵</div>
				<div className="snowflake">🟡</div>
			</div>
		</div>
	);
}

export default App;
