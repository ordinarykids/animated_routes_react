import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class TopBar extends Component {
	render() {
		return (
			<div className="top-bar">
				<nav>
					<NavLink exact to="/">Home</NavLink>
					<NavLink to="/Water-On-Mars">(1) Water on Mars</NavLink>
					<NavLink to="/eris">(2) The Discovery of Eris</NavLink>
					<NavLink to="/pluto">(3) Pluto’s Mysteries Revealed  </NavLink>
					<NavLink to="/Planets">(4) Extrasolar Planets – By the Billions</NavLink>
					<NavLink to="/matter">(5) The Hunt for Dark Matter  </NavLink>
				</nav>
			</div>
		)
	}
}