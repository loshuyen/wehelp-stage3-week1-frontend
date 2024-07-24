import styles from "@/styles/form.module.css";

function Form({ addItem }) {
  return (
    <div className={styles.container}>
      <select className={styles.type} id="type">
        <option value="expense">支出</option>
        <option value="income">收入</option>
      </select>
      <input type="dial" className={styles.expense} id="expense" />
      <input type="text" className={styles.item} id="name" />
      <button
        className={styles.btn}
        onClick={() => {
          const expenseType = (document.querySelector("#type") as HTMLInputElement).value;
          let cost = (document.querySelector("#expense") as HTMLInputElement).value;
          const name = (document.querySelector("#name") as HTMLInputElement).value;
          let expense = Number.parseInt(cost);
          expense = expenseType === "expense" ? (expense *= -1) : expense;
          addItem({ expense: expense, name: name });
        }}
      >
        新增紀錄
      </button>
    </div>
  );
}

export default Form;
