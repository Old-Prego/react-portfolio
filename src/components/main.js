import React, { useState } from 'react';
import { header } from './header';
import { footer } from './footer';
import { aboutme } from './aboutme';

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