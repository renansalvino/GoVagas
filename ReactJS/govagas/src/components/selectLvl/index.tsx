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
                <option value="Básico">Básico</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
            </select>
        </div>
    )
}
export default SelectLvl;