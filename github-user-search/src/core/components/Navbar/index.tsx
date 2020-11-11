import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Navbar = () => (
<nav className="container-nav">
    <div className="content-nav" >
        <Link to="/" className="turn-white">
            <h4>Bootcamp DevSuperior</h4>
        </Link>
        
    </div>
</nav>
);

export default Navbar;  