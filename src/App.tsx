import React, {useCallback} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
    let a = useCallback(async () => {
        // @ts-ignore
       // await window.api.connectToDB();

        // @ts-ignore
        await window.api.createTable();
        // @ts-ignore
        await window.api.saveCredo("{test:test}");
        }, []
    )
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    <button onClick={a}>create table</button>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}


export default App;
