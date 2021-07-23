import { Projects } from './projects';
import { AboutMe } from './aboutme';
import { Resume } from './resume';
import { Contact } from './contact';
import '../css/header.css';

export function Header(props) {

    return(
        <header>
            <h1>Luke Perrine</h1>
            <nav>
                <li><button href='#' onClick={() => props.setPage(<AboutMe />)}>About Me</button></li>
                <li><button href='#' onClick={() => props.setPage(<Projects />)}>Projects</button></li>
                <li><button href='#' onClick={() => props.setPage(<Contact />)}>Contact</button></li>
                <li><button href='#' onClick={() => props.setPage(<Resume />)}>Resume</button></li>
            </nav>
        </header>
    )
}