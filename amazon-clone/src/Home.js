import React from 'react'
import './Home.css';
import Product from "./Product";
import "./Subtotal";
function Home() {
    return (
        <div className="home">
            <div className="home__container">
               <img className="home__image" 
               src="https://images-eu.ssl-images-amazon.com/images/G/03/MOZART/COP/XCM_Manual_1234892_1242077_DE_de_de_cop_launch_gw_mozart_en_gb_en_3202760_1500x600_en_GB._CB409241715_.jpg"
               />

               <div className="home__row">
                   <Product
                    id="12395678"
                    title='Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                    Fusce dolor tortor, laoreet eu'
                    price={29.99} 
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg" 
                    rating={5}/>
                     <Product
                    id="12340678"
                    title='Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                    Fusce dolor tortor, laoreet eu'
                    price={29.99} 
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg" 
                    rating={2}/>
               </div>

               <div className="home__row">
                   <Product
                    id="12347678"
                    title='Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                    Fusce dolor tortor, laoreet eu'
                    price={29.99} 
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg" 
                    rating={5}/>
                     <Product
                    id="12355678"
                    title='Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                    Fusce dolor tortor, laoreet eu'
                    price={29.99} 
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg" 
                    rating={3}/>
                     <Product
                    id="12345608"
                    title='Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                    Fusce dolor tortor, laoreet eu'
                    price={49.99} 
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Gaming_1x._SY304_CB432517394_.jpg" 
                    rating={4}/>
               </div>
               <div className="home__row">
                   <Product
                    id="12349678"
                    title='Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.
                    Fusce dolor tortor, laoreet eu'
                    price={29.99} 
                    image="https://images-na.ssl-images-amazon.com/images/I/71tZW1aa%2BPL._AC_SX450_.jpg" 
                    rating={5}/>
               </div>

            </div>
        </div>
    )
}

export default Home
