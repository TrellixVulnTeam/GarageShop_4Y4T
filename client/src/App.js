import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/footer";



function App() {


    return (
    <BrowserRouter>
        <NavBar />
        <AppRouter />
        <Footer />
    </BrowserRouter>
  );
}

export default App;
