import React from 'react';
import Styles from "./Home.module.scss";
import Slider from "./Slider/Slider";
import breadImg1 from "./Images/article.jpg";
import breadImg2 from "./Images/article2.jpg";
import breadImg3 from "./Images/article3.jpg";
import Nyeste from "./Nyeste/Nyeste";


export default function Home(props) {

function myAlert() {
  alert("Tak fordi du tilmeldte dig vores nyhedsbrev!");
}

    return (
     <div className="Home">

         <section className="slider">
             <Slider />
         </section>

         <section className={Styles.firstSection}>
            <h2 className={Styles.overskrift}>Vi skaber lækkert! brød</h2>
            <p className={Styles.bodyText}>Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud</p>
         
            <section className={Styles.imageGrid}>
            <figure><img className={Styles.image} src={breadImg1} alt="bread-image"/>
            <figcaption>
                <h3>KREATIVITET DYRKES</h3>
                <p>Der er mange tilgængelige udgaver af 
Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har </p>
            </figcaption>
            </figure>
 
            <figure><img className={Styles.image} src={breadImg2} alt="bread-image"/>
            <figcaption>
                <h3>VI ELSKER BRØD</h3>
                <p>Der er mange tilgængelige udgaver af 
Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har </p>
            </figcaption>
            </figure>

            <figure><img className={Styles.image} src={breadImg3} alt="bread-image"/>
            <figcaption>
                <h3>SANS FOR DETALJER</h3>
                <p>Der er mange tilgængelige udgaver af 
Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har </p>
            </figcaption>
            </figure>
        </section>

        </section>

<section className={Styles.nyhedsbrev}>
    <article>
<h3>Tildmeld dig vores nyhedsbrev</h3>
<p>Der er mange forskellige udgaver af Lorem Ipsum, men de fleste udgaver</p>
<form>
<div className={Styles.letter}><i class="far fa-envelope"></i></div>
<input type="email" id="email" name="email" required placeholder="Indtast din email.."/>
<button type="submit" value="submit" onClick={ () => myAlert() }>TILMELD</button>
</form>
</article>
</section>

        <Nyeste />

     </div>   
    )
}