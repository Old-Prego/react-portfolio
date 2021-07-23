import { Projects } from './projects';
import { Aboutme } from './aboutme';
import { Resume } from './resume';
import { Contact } from './contact';

export function Header(props) {

    return(
        <header>
            <h1>Luke Perrine</h1>
            <nav>
                <li><button href='#' onClick={() => props.setPage(<aboutme />)}>About Me</button></li>
                <li><button href='#' onClick={() => props.setPage(<projects />)}>Projects</button></li>
                <li><button href='#' onClick={() => props.setPage(<contact />)}>Contact</button></li>
                <li><button href='#' onClick={() => props.setPage(<resume />)}>Resume</button></li>
            </nav>
        </header>
    )
}