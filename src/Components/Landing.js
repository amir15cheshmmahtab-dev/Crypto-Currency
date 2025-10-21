import React, { useEffect, useState } from 'react';
// Styles 
import styles from "./Landing.module.css";
// APi 
import { getApi } from '../Services/Api';
// Components 
import Loader from './Loader';
import Coin from './Coin';
// ............................................................................................................
const Landing = () => {
    const [coins,setCoins] = useState([]);
    const [searchCoin,setSearchCoin] = useState("");

    useEffect(() => {
        const fetchApi = async() => {
            const data = await getApi()
            console.log(data);
            setCoins(data)
        }
        fetchApi()
    }, [])

   const  searchHandler = (event) => {
    setSearchCoin(event.target.value)
  }

  const searchCoinFilter = coins.filter((coin) => coin.name.toLowerCase().includes(searchCoin.toLowerCase()))
// ............................................................................................................
    return (
<React.Fragment>
             <input className={styles.input} type='text' value={searchCoin} onChange={searchHandler} placeholder='Search'/>
             {
                    coins.length ? <div className={styles.coinContainer}>
             {searchCoinFilter.map((coin) => 
             <Coin key={coin.id} name={coin.name} symbol={coin.symbol} image={coin.image} price={coin.current_price} priceChange={coin.price_change_24h} marketCap={coin.market_cap}/> 
            ) } </div>  :
             <Loader/>
             }
     
</React.Fragment>
      
    );
};

export default Landing;