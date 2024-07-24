'use client'

import Form from "../../components/form";
import List from "../../components/list";
import Total from "../../components/total";
import { useState } from "react";

interface Item {
    expense: number
    name: string
}


export default function Accounting() {
  const [items, setItems] = useState([
    {expense: -1200, name: "吃大餐"},
    {expense: -500, name: "咖啡"},
    {expense: -200, name: "生活用品"},
    {expense: 50000, name: "十月份薪資"},
  ]);
  
  function addItem(item: Item) {
    setItems([...items, item]);
  }

  return (
      <div>
        <div className="content">
            <Form addItem={addItem}></Form>
            <List items={items} setItems={setItems}></List>
        </div>
        <Total items={items}></Total>
      </div>
    );
  }
