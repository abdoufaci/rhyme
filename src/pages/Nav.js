import Image from 'next/image'
import logo from '../../public/logo.png'


const Nav = () => {
    return (
        <nav>
            <div className="logo">
            <Image
            src={logo}
            alt="Picture of the author"
            width={150}
            height={150}
            />
            </div>
            <ul className="nav_links">
                <li><a href="">HOME</a></li>
                <li><a href="">MENU</a></li>
                <li><a href="">GALLERY</a></li>
                <li><a href="">ORDER ONLINE</a></li>
                <li><a href="">TEAM</a></li>
                <li><a href="">ABOUT</a></li>
            </ul>
        </nav>
    )
}

export default Nav;