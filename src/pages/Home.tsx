import React from "react";


import {Categories, PizzaBlock, SortPopup} from "../components";

import {ArrPizzasType} from "../App";



type HomePropsType = {
    items: ArrPizzasType
}

export const Home: React.FC<HomePropsType> = ({items}) => {
    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    items={['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые']}
                    onClick={() => {}}
                />
                <SortPopup items={[{name: 'популярности', type: 'popular'}, {name: 'цене', type: 'price'}, {name: 'алфавиту', type: 'alphabet'}]}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    items.map((items) => {
                        return (
                          <PizzaBlock key={items.id} item={items}/>
                        );
                    })
                }
            </div>
        </div>
    );
}