import React from 'react';
import './works.css';
import '../../styles/global.css';
import img1 from '../../images/Ekran Görüntüsü (23).png';
import img2 from '../../images/Ekran Görüntüsü (24).png';
import img3 from '../../images/Ekran Görüntüsü (25).png';
import img4 from '../../images/Ekran Görüntüsü (26).png';
import img5 from '../../images/Ekran Görüntüsü (27).png';
import img6 from '../../images/Ekran Görüntüsü (28).png';
import img7 from '../../images/Ekran Görüntüsü (29).png';
import { Bounce } from 'react-awesome-reveal';
import { FiChevronRight } from 'react-icons/fi';
function Works() {
	return (
		<div className="works">
			<h4>Works</h4>
			<div className="projects">
				<div className="project">
					<Bounce cascade duration={2000} fraction={1} triggerOnce>
						<div className="project-imgs">
							<img src={img1} alt="Project img" />
							<img src={img2} alt="Project img" />
							<img src={img3} alt="Project img" />
						</div>
					</Bounce>
					<Bounce cascade duration={2000} fraction={1} triggerOnce>
						<div className="project-description">
							<h5>E-COMMERCE</h5>
							<p>
								The{' '}
								<a
									href="https://github.com/RzayevNicat/FinalBack"
									target="_blank"
									style={{ textDecoration: 'none' }}
								>
									<span> Back-End</span>
								</a>{' '}
								part is assembled with <span>NodeJs (ExpressJs). </span>
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
					</Bounce>
				</div>
				<div className="project a">
					<Bounce cascade duration={2000} fraction={1} triggerOnce>
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
					</Bounce>
					<Bounce cascade duration={2000} fraction={1} triggerOnce>
						<div className="project-imgs-2">
							<img src={img4} alt="Project img" />
							<img src={img5} alt="Project img" />
						</div>
					</Bounce>
				</div>
				<div className="project">
					<Bounce cascade duration={2000} fraction={1} triggerOnce>
						<div className="project2-imgs">
							<img src={img6} alt="Project img" />
							<img src={img7} alt="Project img" />
						</div>
					</Bounce>
					<Bounce cascade duration={2000} fraction={1} triggerOnce>
						<div className="project-description">
							<h5>Todo List</h5>
							<p>
								In this program, you can <span>add,</span> <span>delete,</span> and <span>search</span>{' '}
								for the todo you have added. You cannot add the <span>same todo</span> or enter a{' '}
								<span>blank input.</span>
							</p>
							<div className="view-source">
								<a href="https://todolist-git-master-rzayevnicat.vercel.app/" target="_blank">
									VIEW WORK <FiChevronRight />
								</a>
								<a href="https://github.com/RzayevNicat/Todolist" target="_blank">
									VIEW SOURCE <FiChevronRight />
								</a>
							</div>
						</div>
					</Bounce>
				</div>
			</div>
		</div>
	);
}

export default Works;
