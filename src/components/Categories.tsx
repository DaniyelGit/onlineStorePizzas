import React, {useState} from "react";


type CategoriesPropsType = {
    items: string[];
    onClick: () => void
}

export const Categories: React.FC<CategoriesPropsType> = ({items}) => {
    const [activeItem, setActiveItem] = useState<null | number>(null);

    const onSelectItem = (index: number | null) => {
        setActiveItem(index);
    }

    return (
        <div className="categories">
            <ul>
                <li className={activeItem === null ? 'active' : ''}
                    onClick={() => onSelectItem(null)}
                >
                    Все
                </li>
                {items && items.map((item, index) => {
                    return (
                        <li key={`${item}_${index}`}
                            className={activeItem === index ? 'active' : ''}
                            onClick={() => onSelectItem(index)}
                        >
                            {item}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
