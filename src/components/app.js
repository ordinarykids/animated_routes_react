import React, { Component } from "react";
import { Route, matchPath } from "react-router-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";
import AnimatedSwitch from "./animated_switch";
import { firstChild } from "../utils/helpers";

import TopBar from "./top_bar";
import Home from "./home";
import Slide2 from "./slide2";
import Matter from "./matter";


import Projects from "./projects";
import ProjectItem from "./project_item";
import Missed from "./missed";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: []
		};
	}
	
	render() {
		return (
			<div className="wrapper">
				<TopBar />
				<Route
					render={({ location }) => (
						<TransitionGroup component="main">
							<AnimatedSwitch
								key={location.key}
								location={location}
							>
								<Route exact path="/" component={Home} />
								<Route exact path="/Water-On-Mars" component={Slide2} />
								<Route exact path="/matter" component={Matter} />
								<Route exact path="/Water-On-Mars" component={Slide2} />
								<Route exact path="/Water-On-Mars" component={Slide2} />
								
								<Route component={Missed} />
							</AnimatedSwitch>
						</TransitionGroup>
					)}
				/>
			</div>
		);
	}
}
