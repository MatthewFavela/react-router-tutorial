import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './App.css';

function Shop() {

    useEffect(() => {
        fetchItems();
    }, [])

    const [items, setItems] = useState([])


    const fetchItems = async () => {
        const data = await fetch('https://fortnite-api.theapinetwork.com/store/get')
        const items2 = await data.json()
        console.log(items2.data)
        setItems(items2.data)
    }


  return (
    <div>
        <div>
            {items.map(item => (
                <h1 key={item.itemId}>
                    <Link to={`/shop/${item.itemId}`}>{item.item.name}</Link>
                </h1>
  ))}
        </div>
    </div>
  );
}

export default Shop;
