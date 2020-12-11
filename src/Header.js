import React from 'react'
import './header.css';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';


function Header() {
    return (
        <div className="header">
            <IconButton className="header-icon">
                <PersonPinIcon />
            </IconButton>

            <img className="header-logo"
                src="https://www.pinclipart.com/picdir/big/25-259236_tinder-logo-transparent-background-clipart.png"
                alt="..." />

            <IconButton fontSize="large" className="header-icon">
                <ForumIcon />
            </IconButton>

        </div>
    )
}

export default Header
