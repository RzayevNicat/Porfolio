import '../../../node_modules/slick-carousel/slick/slick.css';
import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import React, { Component } from 'react';
import Slider from 'react-slick';
import './slider.css';
export default class Responsive extends Component {
	render() {
		var settings = {
			dots: false,
			infinite: true,
			speed: 2000,
			slidesToShow: 6,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			cssEase: 'linear',
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true,
						autoplaySpeed: 2000,
						dots: true
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						autoplaySpeed: 2000,
						initialSlide: 2
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						autoplaySpeed: 2000
					}
				},
				{
					breakpoint: 400,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						autoplaySpeed: 2000
					}
				},
				{
					breakpoint: 370,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						autoplaySpeed: 2000
					}
				},
				{
					breakpoint: 360,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						autoplaySpeed: 2000
					}
				}
			]
		};
		return (
			<div className="sld">
				<h2>
					{' '}
					My <span>Skils</span>{' '}
				</h2>
				<Slider {...settings}>
					<div className="skil-card">
						<img
							src="https://www.britefish.net/wp-content/uploads/2019/06/logo-javascript-2.png"
							alt="javascript"
						/>
						<p>JavaScript</p>
						<p>Experience: 3 year</p>
					</div>
					<div className="skil-card">
						<img src="https://clipground.com/images/html5-png-image-10.png" alt="html" />
						<p>HTML 5</p>
						<p>Experience: 3 year</p>
					</div>
					<div className="skil-card">
						<img
							src="https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png"
							alt="css"
							className="css"
						/>
						<p>CSS 3</p>
						<p>Experience: 3 year</p>
					</div>
					<div className="skil-card">
						<img src="https://front.id/sites/default/files/2017-05/scss.png" alt="scss" />
						<p>JavaScript</p>
						<p>Experience: 1 year</p>
					</div>
					<div className="skil-card">
						<img
							src="https://cdn-images-1.medium.com/max/1200/1*9HanDsRU11ZMsgDGJwN96w.png"
							alt="bootstrap"
						/>
						<p>Bootstrap</p>
						<p>Experience: 3 year</p>
					</div>
					<div className="skil-card">
						<img src="https://brandeps.com/logo-download/M/Material-UI-logo-vector-01.svg" alt="material" />
						<p>Material UI</p>
						<p>Experience: 1 year</p>
					</div>
					<div className="skil-card">
						<img
							src="http://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem.png"
							alt="react"
						/>
						<p>React</p>
						<p>Experience: 2 year</p>
					</div>
					<div className="skil-card">
						<img src="https://www.ux-republic.com/wp-content/uploads/2016/11/logo-redux.png" alt="redux" />
						<p>Redux</p>
						<p>Experience: 2 year</p>
					</div>
					<div className="skil-card">
						<img
							src="https://tse2.mm.bing.net/th?id=OIP.CLf2MbiumJ4rjRvaZtMWigHaEK&pid=Api&P=0"
							alt="nodejs"
						/>
						<p>NodeJs</p>
						<p>Experience: 1 year</p>
					</div>
					<div className="skil-card">
						<img
							src="http://pluspng.com/img-png/mongodb-png-can-you-use-mongodb-with-drupal-225.png"
							alt="mongo"
						/>
						<p>Mongo DB</p>
						<p>Experience: 1 year</p>
					</div>
					<div className="skil-card">
						<img src="http://verleihsystem.com/wp-content/uploads/2015/06/rest-api.png" alt="restApi" />
						<p>Rest Api</p>
						<p>Experience: 2 year</p>
					</div>
					<div className="skil-card">
						<img src="https://logos-download.com/wp-content/uploads/2016/09/GitHub_logo.png" alt="github" />
						<p>GitHub</p>
						<p>Experience: 1 year</p>
					</div>
					<div className="skil-card">
						<img src="https://git-for-windows.github.io/img/git_logo.png" alt="git" />
						<p>Git</p>
						<p>Experience: 1 year</p>
					</div>
					<div className="skil-card">
						<img src="https://nomadcoders.co/logos/next.png" alt="nextjs" />
						<p>NextJs</p>
						<p>Experience: 1 year</p>
					</div>
				</Slider>
			</div>
		);
	}
}
