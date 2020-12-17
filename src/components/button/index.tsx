import React from 'react';
import './style.css';

interface ButtonProps {
    value: string;
    name: any;
    onClick: any;
}

const Button: React.FC<ButtonProps> = ({value, name, onClick}) => {
    return (
        <div>
            <input id={name} type="submit" onClick={onClick} value={value}/>
        </div>
    )
}
export default Button;