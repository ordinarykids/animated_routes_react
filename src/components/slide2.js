import React, { Component } from "react";
import Anime from 'react-anime';
// import image1 from '1.jpg'

export default class Home extends Component {
	render() {
		return (
			<div className="page home">
				<Anime easing="easeOutElastic"
					   opacity={[0, 1]}
					   translateY={[-70, 0]}
					   delay={1000}
					>
					<h1>The Discovery of Eris – a Dwarf Planet</h1>
						
				</Anime>

				<div className='backgroundOverflow'>
                    <Anime easing="easeOutElastic"
                        duration={9000}
                        direction="alternate"
                        loop={true}
                        translateX={[-100, 100]}
                        scale={[1, 1.4]}
                        >
						<img src='https://images.unsplash.com/photo-1446776858070-70c3d5ed6758?auto=format&fit=crop&w=2000&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D' />
                    </Anime>
                </div>


				<Anime easing="easeOutElastic"
					opacity={[0, 1]}
					delay={1000}>
					<div className='descriptionBlock'>
						<p>In 2005, a remarkable discovery upended our textbook idea of the solar system as nine planets, plus some moons, comets and asteroids. Scientists observed a new object they named Eris that’s even bigger than its neighbor Pluto. Instead of naming Eris Planet 10, astronomers reclassified it as a “dwarf planet,” with its own moon Dysnomia, and downgraded Pluto to the same status. We may have lost a planet, but the discovery of Eris opened our eyes to a solar realm of much richer diversity and complexity.  
                        03 (Eris): Artist concept of the dwarf planet Eris and its moon Dysnomia. Credit: Robert Hurt (IPAC)
                        </p>
					</div>
				</Anime>
			
				
			</div>
		);
	}
}
