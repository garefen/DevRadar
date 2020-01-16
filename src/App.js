import React, { useEffect, useState } from 'react';
import './App.css';
import './global.css';

import Aside from './Aside';
import Dev from './Dev';

import api from './services/api';

function App() {
    const [devs, setDevs] = useState([]);

    useEffect(() => {
        async function loadDevs() {
            const response = await api.get('/devs');
            setDevs(response.data);

        }

        loadDevs();
    }, []);

    useEffect(() => {

    })
    async function handleAddDev(data) {
        const response = await api.post('/devs', data);

        setDevs([...devs, response.data]);

    }
    return (
        <div id="App">
            <Aside onSubmit={handleAddDev} />
            <main>
                <ul>
                    {devs.map(dev => (
                        <Dev dev={dev} key={dev._id}/>
                    ))}
                </ul>
            </main>
        </div>
    );
}
    
export default App;
    