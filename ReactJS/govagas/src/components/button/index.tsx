import React, { InputHTMLAttributes } from 'react';
import './style.css';

interface ButtonProps extends InputHTMLAttributes<HTMLInputElement> {
    value: string;
    name: any;
}

const Button: React.FC<ButtonProps> = ({value, name, ...rest}) => {
    return (
        <div>
            <input id={name} type="submit" value={value} {...rest}/>
        </div>
    )
}
export default Button;