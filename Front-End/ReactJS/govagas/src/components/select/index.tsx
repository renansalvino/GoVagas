import React, { InputHTMLAttributes, SelectHTMLAttributes } from 'react';
import './style.css';
interface SelectProps extends InputHTMLAttributes<HTMLInputElement> {
    name: any;
}

const Select: React.FC<SelectProps> = ({ name, ...rest }) => {
    return (
        <div>
            <label htmlFor={name}></label>
            <select name="cars" id="default">
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
            </select>
        </div>
    )
}
export default Select;