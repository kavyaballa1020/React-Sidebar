import React, { useState } from 'react';
import './Sidebar.css';
import { FiHome, FiLayers, FiBook, FiPhone, FiSettings, FiUser } from 'react-icons/fi';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button className="toggle-button" onClick={toggleSidebar}>
                ☰
            </button>
            <nav className="nav-menu">
                <a href="#home"><FiHome /> Home</a>
                <a href="#about"><FiUser /> About</a>
                <a href="#services"><FiSettings /> Services</a>
                <a href="#case-studies"><FiLayers /> Case Studies</a>
                <a href='#blog'><FiBook /> Blog</a>
                <a href="#contact"><FiPhone /> Contact</a>
            </nav>
            <div className="profile-section">
                <div className="profile-picture">
                <img src={process.env.PUBLIC_URL + '/Kavya.JPG'} alt="Profile" />
                </div>
                <div className="profile-info">
                    <h3>Kavya Balla</h3>
                    <p>Web Developer</p>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
