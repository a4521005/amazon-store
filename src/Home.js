import React from 'react';
import './Home.css'
import Product from './Product.js'

function Home(){
    return(
        <div className="home">
            <img className="home-image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="home-image"/>
            <div className="home-row">
                <Product 
                    id="121314"
                    title="The Lean Startup: How Contant Innovation"
                    price={11.96}
                    rating={4}
                    image ="https://images-na.ssl-images-amazon.com/images/I/71K7Q4FpguL._AC_SL1500_.jpg"
                />
                <Product 
                    id="121315"
                    title="Coredy L900 Robot Vacuum Cleaner"
                    price={154.99}
                    rating={3}
                    image ="https://images-na.ssl-images-amazon.com/images/I/71VbGA4W9yL._AC_SL1200_.jpg"
                />
                <Product 
                    id="121316"
                    title="Ailun Glass Screen Protector Compatible for iPhone 11/iPhone XR, 6.1 Inch 3 Pack Tempered Glass"
                    price={21.95}
                    rating={5}
                    image ="https://images-na.ssl-images-amazon.com/images/I/81MZ5D1wHpL._AC_SL1500_.jpg"
                />
            </div>
            <div className="home-row">
                <Product 
                    id="121314"
                    title="The Lean Startup: How Contant Innovation"
                    price={11.96}
                    rating={4}
                    image ="https://images-na.ssl-images-amazon.com/images/I/71K7Q4FpguL._AC_SL1500_.jpg"
                />
                <Product 
                    id="121315"
                    title="Coredy L900 Robot Vacuum Cleaner"
                    price={154.99}
                    rating={3}
                    image ="https://images-na.ssl-images-amazon.com/images/I/71VbGA4W9yL._AC_SL1200_.jpg"
                />
                <Product 
                    id="121316"
                    title="Ailun Glass Screen Protector Compatible for iPhone 11/iPhone XR, 6.1 Inch 3 Pack Tempered Glass"
                    price={21.95}
                    rating={5}
                    image ="https://images-na.ssl-images-amazon.com/images/I/81MZ5D1wHpL._AC_SL1500_.jpg"
                />
                <Product 
                    id="121316"
                    title="Ailun Glass Screen Protector Compatible for iPhone 11/iPhone XR, 6.1 Inch 3 Pack Tempered Glass"
                    price={21.95}
                    rating={5}
                    image ="https://images-na.ssl-images-amazon.com/images/I/81MZ5D1wHpL._AC_SL1500_.jpg"
                />
            </div>
            <div className="home-row">
                <Product 
                    id="121314"
                    title="The Lean Startup: How Contant Innovation"
                    price={11.96}
                    rating={4}
                    image ="https://images-na.ssl-images-amazon.com/images/I/71K7Q4FpguL._AC_SL1500_.jpg"
                />
                <Product 
                    id="121315"
                    title="Coredy L900 Robot Vacuum Cleaner"
                    price={154.99}
                    rating={3}
                    image ="https://images-na.ssl-images-amazon.com/images/I/71VbGA4W9yL._AC_SL1200_.jpg"
                />

            </div>
        </div>
    )
}

export default Home;