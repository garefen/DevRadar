import React, {useState, useEffect} from 'react';

import './index.css'

const Aside = ({ onSubmit }) => {
    const [techs, setTechs] = useState('');
    const [github_username, setGithubUsername] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;

                setLatitude(latitude);
                setLongitude(longitude);

            },
            (err) => {
                console.log(err);
            },
            {
                timeout: 30000,
            }
        );
    }, []);

    async function handleAddDev(e) {
        e.preventDefault();

        await onSubmit({
            github_username,
            techs,
            latitude,
            longitude
        });

        setGithubUsername('');
        setTechs('');
    }

    return (
        <aside>
            <strong>Cadastrar</strong>
            <form onSubmit={handleAddDev}>
                <div className="input-block">
                    <label htmlFor="github_username">Usuário do GitHub</label>
                    <input
                        name="github_username" 
                        id="github_username" 
                        required
                        value={github_username}
                        onChange={e => setGithubUsername(e.target.value)}    
                    />
                </div>
                <div className="input-block">
                    <label htmlFor="techs">Tecnologias</label>
                    <input 
                        name="techs" 
                        id="techs" 
                        required
                        value={techs}
                        onChange={e => setTechs(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <div className="input-block">
                        <label htmlFor="latitude">Latitude</label>
                        <input 
                            type="text" 
                            value={latitude}
                            name="latitude"
                            id="latitude" 
                            required
                            onChange={e => setLatitude(e.target.value)}    
                        />
                    </div>
                    <div className="input-block">
                        <label htmlFor="longitude">Longitude</label>
                        <input 
                            type="text" 
                            value={longitude}
                            name="longitude"
                            id="longitude" 
                            required
                            onChange={e => setLongitude(e.target.value)}    
                        />
                    </div>
                </div>
                <button type='submit'>Salvar</button>
            </form>
        </aside>
        )
    };
    
    export default Aside;
    