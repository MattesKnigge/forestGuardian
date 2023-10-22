import React from 'react';

const Credits = () => {
    const namesWithGitHub = [
        { name: 'Niklas Lugowski', githubUsername: 'NiklasLugi' },
        { name: 'Julian Schöpe', githubUsername: 'j.schoepe' },
        { name: 'Alireza Jalili Baleh', githubUsername: 'Alireza.Jalili' },
        { name: 'Mattes Knigge', githubUsername: 'whosmattes' },
        { name: 'Hooman Taghi Zadehi', githubUsername: 'hooman.taghi' },

    ];

    const handleGitHubLinkClick = (githubUsername) => {
        const githubURL = `https://gitlab.com/${githubUsername}`;
        window.open(githubURL, '_blank');
    };

    return (
        <div className="credits-container">
            <div className="credits-content">
                <p>
                    Build by: {namesWithGitHub.map((item, index) => (
                    <span
                        key={index}
                        className="credit-link"
                        onClick={() => handleGitHubLinkClick(item.githubUsername)}
                    >
                            {item.name}
                        {index < namesWithGitHub.length - 1 && ", "}
                        <label> </label>
                        </span>
                ))}
                     |
                    <label> </label>
                    <span
                        className="credit-link"
                        onClick={() => handleGitHubLinkClick('whosmattes/sensorknoten-vogelhaus')}
                    >
                         Visit our GitLab |
                    </span>
                    <label> </label>
                    <span
                    >
                        <a href="https://5g-smart-country.de" target="_blank" rel="noreferrer">5G Smart Country</a>
                    </span>
                    <label> | 2023</label>
                </p>
            </div>
        </div>
    );
};

export default Credits;
