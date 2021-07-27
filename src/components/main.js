import React, { useState } from 'react';
import { Header } from './header';
import { Footer } from './footer';
import { AboutMe } from './aboutme';
import '../css/main.css';

export function Portfolio() {

    const [page, setPage] = useState(<AboutMe />)

    return (
        <div id="mainScreen">
            <Header setPage={setPage}/>
            <div id="mainContainer">
                {page}
            </div>
            <Footer />
        </div>
    )
}