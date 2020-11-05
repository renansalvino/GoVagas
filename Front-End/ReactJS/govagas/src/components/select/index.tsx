import React, { InputHTMLAttributes, SelectHTMLAttributes } from 'react';
import './style.css';
interface SelectProps extends InputHTMLAttributes<HTMLInputElement> {
    name: any;
}

const Select: React.FC<SelectProps> = ({ name, ...rest }) => {
    return (
        <div>
            <select name="cars" id="default">
                <option value="Erick">Selecione uma Altura para Gabi:</option>
                <option value="Renan">1,50m</option>
                <option value="Gabi">1,50m</option>
                <option value="Czar">1,50m</option>
            </select>
        </div>
    )
}
export default Select;