import React from 'react';
import './scss/app.scss';
import {Route, Routes} from "react-router-dom";
import axios from "axios";


import {Header} from "./components";
import {Home, Cart} from "./pages";

export type arrPizzasType = Array<pizzasStateType>

export type pizzasStateType = {
    "id": number,
    "imageUrl": string,
    "name": string,
    "types": number[],
    "sizes": number[],
    "price": number,
    "category": number,
    "rating": number
}

function App() {

    const [pizzas, setPizzas] = React.useState<arrPizzasType>([]);

    React.useEffect(() => {
        axios.get('http://localhost:3000/db.json')
            .then(({data}) => {
                setPizzas(data.pizzas);
            })
        // fetch('http://localhost:3000/db.json')
        //     .then((resp) => resp.json())
        //     .then((json) => {
        //         setPizzas(json.pizzas)
        //     });
    }, []);

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Routes>
                    <Route path={'/'} element={<Home items={pizzas}/>}/>
                    <Route path={'/cart'} element={<Cart/>}/>
                </Routes>
            </div>
        </div>
    );
}


export default App;
