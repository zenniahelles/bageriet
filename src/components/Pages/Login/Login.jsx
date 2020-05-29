import React from 'react';
import './Login.scss';

export default function About(props) {
    return (
        <div className="Login">
            <div className="Banner"></div>

        <section className="loginIndhold">
            
            <section className="loginTitle"><h2>Login</h2>
            <p>Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud</p>
            </section>

            <form>
             <input type='text' name='fullName' placeholder="Dit brugernavn..."/>
             <br/>
             <input type='password' name='email' placeholder="Din password..."/> 
             <br/>
            <button>Login</button>
            </form>
            </section>
    </div>
    )
}