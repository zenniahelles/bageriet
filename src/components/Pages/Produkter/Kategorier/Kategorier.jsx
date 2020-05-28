import React, { useState, useEffect } from 'react';

export default function Kategorier(props) {

    const [apiData, setApiData] = useState(null);

    async function getKategorier() {
        const fetchHeaders = new Headers();
        fetchHeaders.append('Accept', 'application/json');
        try {
            console.log(apiData)
            const request = await fetch('https://api.mediehuset.net/bakeonline/categories', { headers: fetchHeaders });
            const response = await request.json();
            console.log(response);
            setApiData(response.categories);
        } catch (error) {
            console.log('getKategorier -> Error', error);
        }
    }

    useEffect(() => {
        getKategorier()
    }, [])

    return (
            <div>
                {
                    apiData && apiData.length > 0 && apiData.slice(0, 8).map((item, i) =>
                    <div key={item.title}>
                        <h3>{item.title}</h3>
                        <br />
                    </div>
                    )
                }
            </div>

    )
}