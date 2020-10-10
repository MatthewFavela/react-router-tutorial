import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './App.css';

function Shop({match}) {

    useEffect(() => {
        fetchItem();
        console.log(match)
    }, [])

    const [item, setItem] = useState([])




    const fetchItem = async () => {
        const fetchItem = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`)
        const item = await fetchItem.json();

        console.log(item.data)
    }

    return(
        <div>
            <h1>
                {item.data}
            </h1>
        </div>
    )
}

export default Shop;
