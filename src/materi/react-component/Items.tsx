
import type { Item } from '../../types/Item';

type Props = {
    item: Item;
}

const Items = ({item}: Props) => {
  return (
    <>
        <li>{item.name}</li>
    </>
  )
}

export default Items