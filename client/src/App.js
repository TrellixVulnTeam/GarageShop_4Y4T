import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/footer";
import New from "./components/New";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";



const App = observer(() => {
    const {user} = useContext(Context);
    const [loading, setLoading]= useState(true);


        useEffect(()=>{
            check().then(data =>{
                user.setUser(true);
            }).finally(()=> setLoading(false))
        }, [])

    if (loading){
        return  <div className="position-absolute spinn spinner-border" role="status">
                    <span className="sr-only"></span>
                </div>
    }
    return (
    <BrowserRouter>
        <NavBar />
        <AppRouter />
        <Footer />
    </BrowserRouter>
  );
})

export default App;
