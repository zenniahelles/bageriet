import React from 'react';
import './Contact.scss';
import mapImg from './map.jpg';

export default function Contact(props) {
    return (
        <div className="Contact">
            <div className="Banner"></div>

        <section className="kontaktIndhold">
            
            <section className="contactTitle"><h2>Kontakt os</h2>
            <p>Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud</p>
            </section>

            <section className="kontaktGrid">
            <form>
             <input type='text' name='fullName' placeholder="Dit navn..."/>
             <br/>
             <input type='email' name='email' placeholder="Din email..."/> 
             <br/>
             <textarea name="message" rows="9" cols="30" placeholder="Din besked..."/> 
            <br/>
            <button>Send</button>
            </form>

            <img src={mapImg} alt="map"/>
            </section>
        </section>
    </div>
    )
}