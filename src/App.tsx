import React from 'react';
import './scss/app.scss';
import {Route, Routes} from "react-router-dom";
import axios from "axios";
import {connect} from "react-redux";


import {Header} from "./components";
import {Home, Cart} from "./pages";
import {setPizzas} from "./redux/actions/pizzasAC";
import {rootReducerType} from "./redux/reducers";
import {Dispatch} from "redux";


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


class App extends React.Component<mapStateToPropsType & mapDispatchPropsType> {


    componentDidMount() {
        axios.get('http://localhost:3000/db.json').then(({data}) => {
            // store.dispatch(setPizzas(data.pizzas));
            this.props.setPizzasState(data.pizzas);
        })
    }

    render() {
        console.log(this.props)
        return (
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Routes>
                        <Route path={'/'} element={<Home items={this.props.items}/>}/>
                        <Route path={'/cart'} element={<Cart/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}



type mapStateToPropsType = ReturnType<typeof mapStateToProps>;

const mapStateToProps = (state: rootReducerType) => {
    return {
        items: state.pizzas.items,
        filters: state.filters,
    }
}

type mapDispatchPropsType = {
    setPizzasState: (items: ArrPizzasType) => void
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        setPizzasState: (items: ArrPizzasType) => {
            dispatch(setPizzas(items));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
