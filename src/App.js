import React from 'react';
import { Routes, Route, NavLink } from "react-router-dom";
import General from "./components/General";
import Drift from "./components/Drift";
import TimeAttack from "./components/TimeAttack";
import ForzaKarting from "./components/ForzaKarting";


export default function App() {
    return (
        <>
			<nav className="menu">
				<NavLink to="/" className="menu__link">Главная</NavLink>
				<NavLink to="/drift" className="menu__link">Дрифт-такси</NavLink>
				<NavLink to="/timeattack" className="menu__link">Time Attack</NavLink>
				<NavLink to="/forza" className="menu__link">Forza Karting</NavLink>
			</nav>
			<Routes>
				<Route path='/' element={<General />} />
				<Route path='/drift' element={<Drift />} />
				<Route path='/timeattack' element={<TimeAttack />} />
				<Route path='/forza' element={<ForzaKarting />} />
			</Routes>
		</>
    );
}
