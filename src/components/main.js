import React, { useState } from 'react';
import { header } from './header/header';
import { footer } from './footer/footer';
import { aboutme } from './aboutme/aboutme';

export function portfolio() {

    const [page, setPage] = useState(<aboutme />)

    return (
        <div>
            <header setPage={setPage}/>
            {page}
            <footer />
        </div>
    )
}