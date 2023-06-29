import React from 'react';
import './home.css';
import myimg from '../../images/IMG_9631.jpg';
import img from '../../images/pexels-ashutosh-sonwani-1762578.jpg';
function Home() {
	return (
		<div className="home">
			<img src={myimg} alt="My Img" />
			<h1>
				I'm a <span>FRONT-END</span> developer (React) and <span>FULL-STACK</span> developer (Node.js)
			</h1>
		</div>
	);
}

export default Home;
