import React from 'react';
import './footer.css';
import { BsLinkedin, BsInstagram } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';
import { SiGmail } from 'react-icons/si';
import { Slide } from 'react-awesome-reveal';
function Footer() {
	return (
		<div className="contact">
			<Slide direction="top" duration={2000}>
				<h3>
					Contact <span>ME.</span>
				</h3>
				<p>So that we can talk more about...</p>
			</Slide>

			<div className="contact-icons">
				<ul>
					<Slide direction="left" duration={2000}>
						<li>
							<a href="https://www.linkedin.com/in/nicat-rzayev-374463219/" target="_blank">
								<BsLinkedin />
								<span>Linkedin</span>
							</a>
						</li>
					</Slide>
					<Slide direction="left" duration={2000}>
						<li>
							<a
								href="#"
								onClick={(e) => {
									e.preventDefault();
								}}
							>
								<FiPhoneCall />
								<span>+994707283864</span>
							</a>
						</li>
					</Slide>
					<Slide direction="right" duration={2000}>
						<li>
							<a href="https://instagram.com/rzzaef?igshid=YmMyMTA2M2Y=" target="_blank">
								<BsInstagram />
								<span>Instagram</span>
							</a>
						</li>
					</Slide>

					<Slide direction="right" duration={2000} className="slide">
										<li>
							<a
								href="#"
								onClick={(e) => {
									e.preventDefault();
								}}
							>
								<SiGmail /> <span>rzzayev.nicat@gmail.com</span>
							</a>
						</li></Slide>
				
					
				</ul>
			</div>
		</div>
	);
}

export default Footer;
