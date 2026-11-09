import { useState } from 'react';

const ShoppingList = () => {
    
    const [items,setItems] = useState([
        'Milk',
        'Powder',
        'Suger',
        'Solt',
        'Light',
    ])

    const handleRemoveItem = (item)=>{
        const newList = items.filter((buyItem)=> buyItem != item);
        setItems(newList);
    }
    const handleAdd = (newItem)=>{
        setItems([...items, newItem])
    } 

    return (
        <div className='shopping'>
            <h2>Shopping List:</h2>
            <button onClick={()=> handleAdd('Oil')}>Salt</button>
            <button onClick={()=> handleAdd('Potato')}>Potato</button>
            <div className='items'>
                {
                    items.map((item,ind)=> {
                        return <h2 key={ind} onClick={()=> handleRemoveItem(item)}>{item}</h2>
                    })
                }
            </div>
        </div>
    );
};

export default ShoppingList;