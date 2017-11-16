import React, { Component } from "react";
import Anime from 'react-anime';
import image1 from '../images/1.jpg'

export default class Matter extends Component {
    
	render() {
		return (
			<div className="page home" style={{ backgroundImage: 'url(' + image1 + ')', backgroundSize: 'cover', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'center', backgroundPosition: 'center' }} >
				<Anime easing="easeOutElastic"
					   opacity={[0, 1]}
					   translateY={[-30, 0]}
					   delay={1000}
					>
					<h1>Matter</h1>
						
				</Anime>
				<div className='backgroundMain'>
						asadas d
				</div>


				<Anime easing="easeOutElastic"
                    opacity={[0, 1]}
                    // translateY={[-10, 10 ]}
					delay={1300}>
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
