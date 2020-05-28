import React, { useState, useEffect } from 'react';

export default function Bread(props) {

    const [apiData, setApiData] = useState(null);

    async function getProdukter() {
        const fetchHeaders = new Headers();
        fetchHeaders.append('Accept', 'application/json');
        try {
            console.log(apiData)
            const request = await fetch('https://api.mediehuset.net/bakeonline/categories/1', { headers: fetchHeaders });
            const response = await request.json();
            console.log(response);
            setApiData(response.products.products);
        } catch (error) {
            console.log('getCategory -> Error', error);
        }
    }

    useEffect(() => {
        getProdukter()
    }, [])

    return (
            <section className="Nyeste">
                <div className="breadGrid">
{/*indsæt .slice(0,5) efter apiData og før map for at bestemme hvor mange film skal vises. Her er det 5.*/}
                {
                    apiData && apiData.length > 0 && apiData.map((item, i) =>
                        <div key={item.title}>
                            <div className="gridItem">
                            <img src={item.image.fullpath} />
                            <h3>{item.title}</h3>
                            <p>{item.teaser.slice(0,200)}</p>
                                <button>Se mere</button>
                        </div>
                    </div>
                    )
                }</div>
            </section>
    )
}