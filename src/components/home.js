import React, { Component } from "react";
import Anime from 'react-anime';
import image1 from '../images/intro.jpg'

export default class Home extends Component {
	render() {
		return (
			<div className="page home">
				<Anime easing="easeOutElastic"
					   opacity={[0, 1]}
					   delay={1000}
					>
					<h1>The New Golden Age of Space Exploration: Top Ten Hits</h1>
						
				</Anime>
				<div className='backgroundMain'>
					<Anime easing="easeOutElastic"
						// translateX={[-100, 100]}
						duration={8000}
						loop={true}
						direction={'alternate'}
						scale={[1,1.5]}
						easing={'easeInOutQuad'}
						delay={1000}>
						<img src={ image1 } />
					</Anime>
				</div>


				<Anime easing="easeOutElastic"
					opacity={[0, 1]}
					delay={3000}>
					<div className='descriptionBlock'>
						<p>At the turn of the 20th Century, many scientists believed that most of the exploration of Earth and universe had been accomplished. </p>
						<p>Then the Space Age dawned. From the earliest manned Mercury flights in 1962 to the fleets of robotic spacecraft sent on remote missions of discovery, exploration beyond the Earth opened up seemingly inexhaustible reservoirs of new things to know and investigate about the universe.</p>
						<p>Today we’re in a new Golden Age of space exploration. What we have discovered in the past ten years alone has reshaped science, our understanding of the cosmos and humankind’s place in it. </p>
						<p>Here are ten of the most important new discoveries by space scientists in the past decade.</p>
					</div>
				</Anime>
			
				
			</div>
		);
	}
}
