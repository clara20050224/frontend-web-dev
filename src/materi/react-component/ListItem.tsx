import React from 'react'

import type { Item } from '../../types/Item'
import Items from './Items'

const items: Item[] = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Peneaple' },
]

const ListItem = () => {
  return (
    <>
        <h1>List of fruits</h1>
        <ul>
            {
                items.map(item => {
                    return <Items item={item} key={item.id} />
                })
            }
        </ul>
    </>
  )
}

export default ListItem