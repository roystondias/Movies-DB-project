//adding CSS to the Navbar
import './Navbar.css'
//importing logo
import logo from '../Logo/logo.svg'
import React from 'react'
//adding the materail icon
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Navbar() {
    return (
        <header>
            <img src={logo} alt="Movies db logo" />
            <ul>
                <li>Movies</li>
                <li>TV Shows</li>
                <li>People</li>
                <li>More</li>
            </ul>
            <AddIcon></AddIcon>
            <NotificationsIcon></NotificationsIcon>
            <AccountCircleIcon></AccountCircleIcon>
            <SearchIcon></SearchIcon>
        </header>
    )
}

export default Navbar