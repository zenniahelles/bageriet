import React, { useState, useEffect } from 'react';
import './Nyeste.scss';

export default function Nyeste(props) {

    const [apiData, setApiData] = useState(null);

    async function getNyeste() {
        const fetchHeaders = new Headers();
        fetchHeaders.append('Accept', 'application/json');
        try {
            console.log(apiData)
            const request = await fetch('https://api.mediehuset.net/bakeonline/products', { headers: fetchHeaders });
            const response = await request.json();
            console.log(response);
            setApiData(response.products);
        } catch (error) {
            console.log('getCategory -> Error', error);
        }
    }

    useEffect(() => {
        getNyeste()
    }, [])

    return (
        <section className="Nyeste">
            <h2>Nyeste bagværk</h2>
            <p>Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver har gennemgået forandringer, når nogen har tilføjet humor eller tilfældige ord, som på ingen måde ser ægte ud</p>
                <div className="nyesteGrid">
                {
                    apiData && apiData.length > 0 && apiData.slice(0,8).map((item, i) =>
                        <div key={item.title}>    
                            <div className="gridItem">
                            <img src={item.image.fullpath} />
                            <h3>{item.title}</h3>
                            <p>{item.teaser.slice(0,220)}</p>
                           <button>Se mere</button>
                            </div>
                        </div>
                    )
                }</div>

            </section>
    )
}
