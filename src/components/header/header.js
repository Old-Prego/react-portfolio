import { projects } from '../project/projects';
import { aboutme } from '../aboutme/aboutme';
import { resume } from '../resume/resume';
import { contact } from '../contact/contact';

export function header(props) {

    return(
        <header>
            <h1>Luke Perrine</h1>
            <nav>
                <li><button>About Me</button></li>
                <li><button>Projects</button></li>
                <li><button>Contact</button></li>
                <li><button>Resume</button></li>
            </nav>
        </header>
    )
}