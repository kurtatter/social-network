import style from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <a href="#">Profile</a>
            </div>
            <div className={style.item}>
                <a href="#">Messages</a>
            </div>
            <div className={style.item}>
                <a href="#">News</a>
            </div>
            <div className={style.item}>
                <a href="#">Music</a>
            </div>
        </nav>
    );
}

export default Navbar;