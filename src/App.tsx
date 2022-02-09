import React from 'react';
import './scss/app.scss';
import {Route, Routes} from "react-router-dom";
import axios from "axios";


import {Header} from "./components";
import {Home, Cart} from "./pages";
import {store} from "./redux/store";
import {setPizzas} from "./redux/actions/pizzasAC";

export type ArrPizzasType = Array<PizzasStateType>

export type PizzasStateType = {
    "id": number,
    "imageUrl": string,
    "name": string,
    "types": number[],
    "sizes": number[],
    "price": number,
    "category": number,
    "rating": number
}

// function App() {
//
//     // const [pizzas, setPizzas] = React.useState<ArrPizzasType>([]);
//
//     React.useEffect(() => {
//         axios.get('http://localhost:3000/db.json')
//             .then(({data}) => {
//                 setPizzas(data.pizzas);
//             })
//         // fetch('http://localhost:3000/db.json')
//         //     .then((resp) => resp.json())
//         //     .then((json) => {
//         //         setPizzas(json.pizzas)
//         //     });
//     }, []);
//
//     return (
//         <div className="wrapper">
//             <Header/>
//             <div className="content">
//                 <Routes>
//                     <Route path={'/'} element={<Home items={pizzas}/>}/>
//                     <Route path={'/cart'} element={<Cart/>}/>
//                 </Routes>
//             </div>
//         </div>
//     );
// }


class App extends React.Component<{}> {

    componentDidMount() {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
            store.dispatch(setPizzas(data.pizzas));
        })
    }

    render() {
        return (
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Routes>
                        <Route path={'/'} element={<Home items={[]}/>}/>
                        <Route path={'/cart'} element={<Cart/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}


export default App;
