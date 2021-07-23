import { projects } from './projects';
import { aboutme } from './aboutme';
import { resume } from './resume';
import { contact } from './contact';

export function header(props) {

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