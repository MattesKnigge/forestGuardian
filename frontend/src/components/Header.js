import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import InfoDialog from "./InfoDialog";
import QuestionMarkRoundedIcon from '@mui/icons-material/QuestionMarkRounded';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';

const Header = ({ data }) => {

    const [isInfoOpen, setIsInfoOpen] = useState(false);

    const buttonStyle = {
        backgroundColor: '#e2a4c8',
        marginLeft: '1vw',
        borderRadius: '25%',
    };
    const buttonContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '25%',
    }

    const headerStyle = {
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: "default"
    };

    const iconsContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '-35%',
    };

    const fireIconStyle = {
        marginRight: '5%',
        color: "#D9D9D9",
        //TODO: Change color according to temperature
        //maybe look up correlation for all three values
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
        fontSize: '3.5vh',
        fontFamily: 'Outfit, sans-serif',
        color: '#e2a4c8',
        marginRight: '1vw',
        alignItems: 'center',
    };

    return (
        <header className="header" style={headerStyle}>
            <div className="header-content">
                <h1 style={titleStyle}>ForestGuardian</h1>
                <img
                    src="/birdhouse.svg"
                    alt="Birdhouse"
                    width="35vw"
                    height="35vh"
                />
            </div>
            <div className="header-button">
                <div style={iconsContainerStyle}>
                    <LocalFireDepartmentIcon style={fireIconStyle} />
                    <LocalFireDepartmentIcon style={fireIconStyle} />
                    <LocalFireDepartmentIcon style={fireIconStyle} />
                </div>
                    <div style={buttonContainerStyle}>
                <IconButton style={buttonStyle} onClick={handleRefreshClick}>
                    <RefreshRoundedIcon />
                </IconButton>
                <IconButton style={buttonStyle} onClick={handleInfoClick}>
                    <QuestionMarkRoundedIcon  />
                </IconButton>
                    </div>
            </div>
            <InfoDialog open={isInfoOpen} onClose={handleCloseInfo} />
        </header>
    );
};

export default Header;
