import React, { useState } from 'react'
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
const Header = () => {
    const [input, setInput] = useState('');
    const navigate = useNavigate();
    const search = (event) => {
        event.preventDefault();
        const res = input.replace(/ /g, '+');
        navigate(`/search/${res}`);
    }
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <Link to="/">
                    <img className='header__logo' src="/images/logo.svg" alt="" />
                </Link>
            </div>

            <form className="header__center" onSubmit={search}>
                <input type="text" value={input} onChange={event => setInput(event.target.value)} required placeholder='Search...' />
                <Button type="submit" className='header__input__button'>
                    <SearchIcon />
                </Button>
            </form>
            <div className="header__right">
                <VideoCallIcon />
                <AppsIcon />
                <NotificationsIcon />
                <Avatar src="/images/arham.jpeg" />
            </div>
        </div>
    )
}

export default Header
