import React from 'react';
import Styles from "./Footer.module.scss";

export default function Footer(props) {
    return (
        <footer className={Styles.sitefooter}>
            <a href="#top"><button className={Styles.up}><i class="fas fa-chevron-up"></i></button></a>
            <h3>bageriet</h3>
            <p>Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har <br/>gennemgået forandringer.</p>
            <p className={Styles.copyright}>Copyright © 2017 bageriet aps</p>
            {props.children}
        </footer>
    )
}