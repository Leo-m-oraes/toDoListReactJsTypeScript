import { useState } from 'react';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import * as Components from './styles'
import { Item } from '../../types/Item';

type Props = {
    item: Item,
    onDelete:(id: number) => void;
    
}


export const ListItem = ({ item, onDelete }: Props) => {
   
    

    const [isChecked, setIsChecked] = useState(item.done);
    
    return (
        <Components.Container done={isChecked}>
            <input 
            type="checkbox"
            checked={isChecked}
            onChange={e =>  setIsChecked(e.target.checked)}
            
            
            />
            <label>{item.name}</label>
            <Components.DeleteButton onClick={() => onDelete(item.id)}><FontAwesomeIcon icon={faTrash} /></Components.DeleteButton>

            <button></button>
        </Components.Container>
    )
}