import Link from "next/link";
import styles from "@/styles/total.module.css";

function Total({items}) {
    function calculateTotal() {
        let sum = 0;
        items.forEach(item => {
        sum += item.expense;
        })
        return sum;
      }
    
    let total = calculateTotal();

    return (
        <div className={styles.container}>
            <div>
                小計：{total}
            </div>
            <Link href="/">
                <button>返回首頁</button>
            </Link>
        </div>
    );
}

export default Total;