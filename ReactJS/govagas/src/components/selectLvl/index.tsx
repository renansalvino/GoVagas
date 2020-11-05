import React, { InputHTMLAttributes, SelectHTMLAttributes } from 'react';
import './style.css';
interface SelectProps extends InputHTMLAttributes<HTMLInputElement> {
    name: any;
}

const SelectLvl: React.FC<SelectProps> = ({ name, ...rest }) => {
    return (
        <div>
            <label htmlFor="nivel">Nivel:</label>
            <select className="default" name="nivel" >
                <option selected>Escolher...</option>
                <option>Básico</option>
                <option>Intermediário</option>
                <option>Avançado</option>
            </select>
        </div>
    )
}
export default SelectLvl;