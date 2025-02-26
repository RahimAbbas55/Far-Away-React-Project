import { useState } from "react";
import Item from "./Item";
function PackingList({items , onDeleteItems , onToggleItem , onClearList}){
    const [sortBy , setSort] = useState("input")
    let sortedItems
    if( sortBy === "input" ) sortedItems = items
  
    if ( sortBy === "description" ) sortedItems = items.slice().sort( (a , b) => a.description.localeCompare(b.description))
  
    if ( sortBy === "packed" ) sortedItems = items.slice().sort((a , b) => Number(a.packed) - Number(b.packed))
    return (
      <div className="list">
        <ul >
          {sortedItems.map( (item) => (
            <Item item={item} key={item.id} onDeleteItems={onDeleteItems} onToggleItem={onToggleItem}/>
          ))}
        </ul>
        <div className="actions">
          <select value={sortBy} onChange={e => setSort(e.target.value)}>
            <option value='input'>Sort by Input Order</option>
            <option value='description'>Sort by Description</option>
            <option value='packed'>Sort by Packed Order</option>
          </select>
          <button onClick={onClearList}>Clear List</button>
        </div>
      </div>
    )
  }
export default PackingList