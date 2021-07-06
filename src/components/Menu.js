
import { Route, Link, } from 'react-router-dom';

const menus = [
    {
        name: 'Trang chủ',
        to: '/',
        exact: true,
    },
    {
        name: 'Giới Thiệu',
        to: '/about',
        exact: false,
    },
    {
        name: 'Liên Hệ',
        to: '/contact',
        exact: false,
    },
    {
        name: 'Sản Phẩm',
        to: '/products',
        exact: false,
    },
]

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
            var active = match ? 'active abc' : '';
            return (
                // <li className={active}>
                <li className={`my-li ${active}`}>
                    <Link to={to} className="my-link">
                        {label}
                    </Link>
                </li>)
        }}
        />
    )
}

function Menu() {

    const showMenu = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                    />
                )
            })
        }
        return result;
    }

    return (
        <nav className="navbar navbar-default">
            <ul className="nav navbar-nav">
                {showMenu(menus)}

            </ul>
        </nav>
    );


}



export default Menu;
