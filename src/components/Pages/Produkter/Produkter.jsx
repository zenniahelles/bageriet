import React, { useState, useEffect } from 'react';

export default function Categories(props) {

    const [apiData, setApiData] = useState(null);

    async function getCategory() {
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
        getCategory()
    }, [])

    return (
        <div>
            <h2>Categories</h2>
            <section>
{/*indsæt .slice(0,5) efter apiData og før map for at bestemme hvor mange film skal vises. Her er det 5.*/}
                {
                    apiData && apiData.length > 0 && apiData.slice(0,8).map((item, i) =>
                        <div key={item.title}>
                            <img src={item.image.fullpath} />
                            <h3>{item.title}</h3>
                            <p>{item.teaser}</p>
                            <br />
                        </div>
                    )
                }

            </section>
        </div>
    )
}