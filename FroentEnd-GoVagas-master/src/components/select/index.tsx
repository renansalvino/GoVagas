import React, { InputHTMLAttributes, SelectHTMLAttributes } from 'react';
import './style.css';
interface SelectProps extends InputHTMLAttributes<HTMLInputElement> {
    name: any;
    label: string;
}

const Select: React.FC<SelectProps> = ({ label, name, ...rest }) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <select name="cars" id="default">
              
            </select>
        </div>
    )
}
export default Select;