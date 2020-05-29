import React from 'react';
import Styles from "./Nav.module.scss";
import routes from '../Router/routes';
import { NavLink } from 'react-router-dom';

// const Li = props => {
//     const {name, exact, path } = props;

//     return (
//         <li>
//             <NavLink to={path} exact={exact}>
//                 {name}
//             </NavLink>
//         </li>
//     );
// }

export default function Nav(props) {
    return (
        <nav className={Styles.sitenav}>
            <ul>
                {/* {routes.map((navelement, i) => {
                    console.log(navelement);
                    return(
                        <Li key={navelement.name}
                        {...navelement}
                        />
                    );
                })} */}

                <li className={Styles.homelink}><NavLink to={routes[0].path} >{routes[0].name}</NavLink></li>
                <li className={Styles.productslink}><NavLink to={routes[1].path} >{routes[1].name}</NavLink></li>
                <li className={Styles.logolink}><NavLink to={routes[0].path} ><span className={Styles.linklogo}>bageriet</span></NavLink></li>
                <li className={Styles.contactlink}><NavLink to={routes[2].path} >{routes[2].name}</NavLink></li>
                <li className={Styles.loginlink}><NavLink to={routes[3].path} >{routes[3].name}</NavLink></li>
            </ul>
        </nav>
    );
}