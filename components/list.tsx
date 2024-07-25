import Item from "./item";

function List({ items, setItems }) {
  const rows = [];
  for (let i = 0; i < items.length; i++) {
    rows.push(
      <Item
        item={items[i]}
        key={i}
        items={items}
        setItems={setItems}
        index={i}
      ></Item>
    );
  }
  return <div>{rows}</div>;
}

export default List;
