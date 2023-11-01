import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import InfoDialog from "./InfoDialog";
import QuestionMarkRoundedIcon from '@mui/icons-material/QuestionMarkRounded';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';

const Header = ({ data }) => {
    const [isInfoOpen, setIsInfoOpen] = useState(false);

    const buttonStyle = {
        backgroundColor: '#537A5A',
        marginLeft: '.5rem',
        borderRadius: '20%',
        color: '#353734',
        padding: '.5rem',
    };

    const buttonContainerStyle = {
        display: 'flex',
        alignItems: 'center',
    };

    const headerStyle = {
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'default',
    };

    const handleRefreshClick = () => {
        window.location.reload();
    };

    const handleInfoClick = () => {
        setIsInfoOpen(true);
    };

    const handleCloseInfo = () => {
        setIsInfoOpen(false);
    };

    const titleStyle = {
        color: '#537A5A',
        display: 'flex',
        alignItems: 'center',
        marginLeft: '-1%',
    };

    return (
        <header className="header" style={headerStyle}>
            <div className="header-content">
                <h1 style={titleStyle}>ForestGuardian</h1>
            </div>
            <div className="header-button">
                <div style={buttonContainerStyle}>
                    <IconButton style={buttonStyle} onClick={handleRefreshClick}>
                        <RefreshRoundedIcon />
                    </IconButton>
                    <IconButton style={buttonStyle} onClick={handleInfoClick}>
                        <QuestionMarkRoundedIcon />
                    </IconButton>
                </div>
            </div>
            <InfoDialog open={isInfoOpen} onClose={handleCloseInfo} />
        </header>
    );
};

export default Header;
