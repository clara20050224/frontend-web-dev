
import { useState } from "react"

const ItemList = () => {

    const [items, setItems] = useState<string[]>(['Item 1', 'Item 2']);

    const addItem = () => {
        setItems([...items, `Item ${items.length + 1}`]); // Add new item to the list
    }

    return (
        <>
            <ul>
                {
                    items.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
            <button onClick={addItem}>Add Item</button>
        </>
    )
}

export default ItemList
