import React, { useCallback, useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthComponent from './components/auth/auth.component';
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import BarComponent from "./components/appBar/bar.component";


const darkTheme = createTheme({
    components:{
        MuiFilledInput:{
            defaultProps:{
                color: 'error'
            }
        }
    },
    palette: {
        mode: "dark",
        background: {
            default: '#151a30',
            paper: '#222b44',
        },
        divider: '#222b44',
        //primary: '#151a30'
        // primary: '#151a30',
        // secondary: {
        //     main: '#FFFFFF'
        // },
    }
});


function App() {
const [test, setCount] = useState('false')
    let a = useCallback(async () => {
            // @ts-ignore
            // await window.api.connectToDB();

            // @ts-ignore
            // await window.api.createTable();
            // // @ts-ignore
            // await window.api.saveCredo("{test:test}");
        }, []
    )

    return ( <>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline/>
                <BrowserRouter>
                    <Routes>
                        <Route path={'/'} element={<AuthComponent/>}/>
                        <Route path={'/main'} element={<BarComponent/>}/>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>

      </>
    );
}


export default App;
