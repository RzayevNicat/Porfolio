import React from 'react';
import './home.css';
import myimg from '../../images/IMG_9631.jpg';
import Typewriter from 'typewriter-effect';
function Home() {
	return (
		<div className="home">
			<img src={myimg} alt="My Img" />
			<h1>
				{' '}
				<p>I'm a </p>
				<Typewriter
					options={{
						strings: [ '  FRONT-END developer (React)', '   FULL-STACK developer (Node.js)' ],
						autoStart: true,
						loop: true
					}}
				/>
			</h1>
		</div>
	);
}

export default Home;
