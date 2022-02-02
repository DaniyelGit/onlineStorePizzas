import React from "react";
import classNames from 'classnames';


type ButtonPropsType = {
    className: string
    onClick: () => void
    outLine?: boolean
}

export const Button: React.FC<ButtonPropsType> = (
    {
        className, onClick, outLine, children
    }) => {

    return (
        <button className={classNames('button', className, {'button--outline': outLine})}
                onClick={onClick}
        >
            {children}
        </button>
    );
}