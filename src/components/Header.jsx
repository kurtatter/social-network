import style from './Header.module.css';

const Header = () => {
    return (
        <header className={style.header}>
            <img className={style.logo} src="https://w7.pngwing.com/pngs/973/11/png-transparent-logo-phoenix-illustration-phoenix-logo-design-phoenix-illustration-free-logo-design-template-photography-orange.png" />
        </header>
    );
}

export default Header;