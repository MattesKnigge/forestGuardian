import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import RefreshIcon from '@mui/icons-material/Refresh';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import { data } from "./PlotDisplay";
import InfoDialog from "./InfoDialog";
import QuestionMarkRoundedIcon from '@mui/icons-material/QuestionMarkRounded';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';

const daten = { data };

const Header = ({ data }) => {
    const [isInfoOpen, setIsInfoOpen] = useState(false);

    const buttonStyle = {
        backgroundColor: '#e2a4c8',
        marginLeft: '15%',
        borderRadius: '25%',
    };
    const butonContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '25%',
    }

    const headerStyle = {
        fontFamily: 'Arial, sans-serif',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    };

    const iconsContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        marginLeft: '-35%',
    };

    const fireIconStyle_1 = {
        marginRight: '5%',
        color: daten.data.temp.value >= 25 ? 'orange' : 'white',
    };

    const fireIconStyle_2 = {
        marginRight: '5%',
        color: daten.data.temp.value >= 30 ? 'orange' : 'white',
    };

    const fireIconStyle_3 = {
        color: daten.data.temp.value >= 35 ? 'orange' : 'white',
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
        fontSize: '38px',
        fontFamily: 'Outfit, sans-serif',
        color: '#e2a4c8',
        marginRight: '5%',
        alignItems: 'center',
    };

    return (
        <header className="header" style={headerStyle}>
            <div className="header-content">
                <h1 style={titleStyle}>ForestGuardian</h1>
                <img
                    src="/birdhouse.svg"
                    alt="Birdhouse"
                    width="40"
                    height="40"
                />
            </div>
            <div className="header-button">
                <div style={iconsContainerStyle}>
                    <LocalFireDepartmentIcon style={fireIconStyle_1} />
                    <LocalFireDepartmentIcon style={fireIconStyle_2} />
                    <LocalFireDepartmentIcon style={fireIconStyle_3} />
                </div>
                    <div style={butonContainerStyle}>
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
