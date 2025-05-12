import './index.css'

export const Header = (props) => {
    return (
        <header>
        <h1 className='site-title'>{props.title}</h1>
            <nav><a className= "odkaz" href="#">domů</a>
            <a className= "odkaz" href="#">lekce</a>
            <a className= "odkaz" href="#">náš tým</a>
            <a className= "odkaz" href="#">události</a>
            <a className= "odkaz" href="#">kontakt</a>
            </nav>
        </header>
    )
}