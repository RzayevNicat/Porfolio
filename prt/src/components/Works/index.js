import React from 'react';
import './works.css';
import '../../styles/global.css';
import img1 from '../../images/Ekran Görüntüsü (23).png';
import img2 from '../../images/Ekran Görüntüsü (24).png';
import img3 from '../../images/Ekran Görüntüsü (25).png';
import img4 from '../../images/Ekran Görüntüsü (26).png';
import img5 from '../../images/Ekran Görüntüsü (27).png';
import Zoom from 'react-reveal/Zoom';
import { FiChevronRight } from 'react-icons/fi';
function Works() {
	return (
		<div className="works">
			<h4>Works</h4>
			<div className="projects">
				<div className="project">
					<Zoom cascade>
						<div className="project-imgs">
							<img src={img1} alt="Project img" />
							<img src={img2} alt="Project img" />
							<img src={img3} alt="Project img" />
						</div>
					</Zoom>
					<Zoom cascade>
						<div className="project-description">
							<h5>E-COMMERCE</h5>
							<p>
								The <span> Back-End</span> part is assembled with <span>NodeJs (ExpressJs). </span>
								Login, Register, Forgot Password, Buy Product, Wish List, Resume, Comment, Responsive
								Design, etc. is available.
							</p>
							<div className="view-source">
								<a href="https://final-o3m3.vercel.app" target="_blank">
									VIEW WORK <FiChevronRight />
								</a>
								<a href="https://github.com/RzayevNicat/Final" target="_blank">
									VIEW SOURCE <FiChevronRight />
								</a>
							</div>
						</div>
					</Zoom>
				</div>
				<div className="project a">
					<Zoom cascade>
						<div className="project-description">
							<h5>SPEED TYPING GAME</h5>
							<p>
								This program measures how fast you type and helps you type faster.{' '}
								<span>WPM,CPM,ERRORS</span> are available.Compiled with <span>VANİLLA JS</span>.
							</p>
							<div className="view-source">
								<a href="https://speed-typing-game-seven.vercel.app" target="_blank">
									VIEW WORK <FiChevronRight />
								</a>
								<a href="https://github.com/RzayevNicat/speedTypingGame" target="_blank">
									VIEW SOURCE <FiChevronRight />
								</a>
							</div>
						</div>
					</Zoom>
					<Zoom cascade>
						<div className="project-imgs-2">
							<img src={img4} alt="Project img" />
							<img src={img5} alt="Project img" />
						</div>
					</Zoom>
				</div>
			</div>
		</div>
	);
}

export default Works;
