import styles from "@/styles/item.module.css";

function Item({item, index, items, setItems}) {
    function removeItem() {
        items.splice(index, 1);
        const newItems = [...items];
        setItems(newItems);
    }

    return (
        <div className={styles.container}>
            <div 
                className={item.expense >= 0 ? styles.expenseGreen : styles.expenseRed}
            >
                {item.expense}
            </div>
            <div className={styles.name}>
                {item.name}
            </div>
            <button onClick={removeItem}>刪除</button>
        </div>
    );
}

export default Item;