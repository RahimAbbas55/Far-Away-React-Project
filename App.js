import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import Stats from "./Stats";
import PackingList from "./PackingList";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: false }
];

export default function App(){
  const [items , setItems] = useState(initialItems)

  function HandleAddItems( item ){
    setItems((items) => [...items , item])
  }
  function HandleDeleteItem( id ){
    setItems(items => items.filter( item => item.id !== id))
  }
  function HandleToggleItem(id){
    setItems((items) => items.map(item => item.id === id ? {...item , packed: !item.packed} : item))
  }
  function HandleClearList(){
    setItems([])
  }

  return(
    <div className="app">
      <Logo />
      <Form onAddItems={HandleAddItems}/>
      <PackingList items= {items} onDeleteItems={HandleDeleteItem} onToggleItem={HandleToggleItem} onClearList={HandleClearList}/>
      <Stats items={items}/>
    </div>
  )
}
