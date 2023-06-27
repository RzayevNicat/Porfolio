import React from 'react';
import './about.css';
import img6 from '../../images/pexels-ashutosh-sonwani-1762578.jpg';
import img7 from '../../images/building-g1e163a27b_1920.jpg';
import img8 from '../../images/hand-g653e59e93_1920.jpg';
import { Zoom, Bounce } from 'react-awesome-reveal';
function AboutMe() {
	return (
		<div className="about">
			<Bounce cascade duration={2000} fraction={1} triggerOnce>
				<div className="about-description">
					<h3>A BIT ABOUT ME</h3>
					<p>
						I am a <span>Frontend Developer</span> specializing in <span>React(Nextjs)</span>. I have a
						solid understanding of React and an eye for UI design to produce great-looking web interfaces.
						My experience in designing responsive layouts, designing custom components, using{' '}
						<span>Redux</span>, and integrating APIs will help me deliver comprehensive web/mobile
						applications. I'm a quick learner, able to adapt to new technologies while being detail-oriented
						and collaborative. I love <span> Music, Politics, Business, Self Development, Learning</span>.
					</p>
				</div>
			</Bounce>
			<Bounce cascade duration={2000} triggerOnce>
				<div className="about-img">
					<div className="about-img-1">
						<img src={img6} alt="About Img" />
					</div>
					<div className="about-img-2">
						<img src={img7} alt="About Img" />
						<img src={img8} alt="About Img" />
					</div>
				</div>
			</Bounce>
		</div>
	);
}

export default AboutMe;
