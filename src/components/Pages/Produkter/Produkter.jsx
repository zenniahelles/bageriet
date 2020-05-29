import React, { useState, useEffect } from 'react';
import './Produkter.scss';
import Kategorier from "./Kategorier/Kategorier";
import Bread from "./Bread/Bread";

export default function Produkter(props) {

    return (
        <div className="Produkter">
            <div className="Banner"></div>
            <section className="ProductTitle"><h2>Vores elskede bagværk</h2>
            <p>Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud</p>
            </section>

            <section className="Indhold">
            <div className="breadMenu"><Kategorier /></div>
            <Bread />
        </section>
    </div>
    )
}