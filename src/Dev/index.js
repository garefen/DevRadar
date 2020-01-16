import React from 'react';

import './index.css';

    const Dev = ({dev}) => {
    return (
        <li className="dev-item">
            <header>
                <img src={dev.avatar_url} alt={dev.github_username}/>
                <div className="user-info">
                    <strong>{dev.name}</strong>
                    <span>{dev.techs.join(', ')}</span>
                </div>
            </header>
            <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.github_username}`} target="_blank" rel="noopener noreferrer">Acessar perfil no GitHub</a>
        </li>
    );
};

export default Dev;
