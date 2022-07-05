import React, {useCallback} from 'react';
import './App.css';
import AuthComponent from './components/auth/auth.component';


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
                <AuthComponent/>
        </div>
    );
}


export default App;
