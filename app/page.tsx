import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header className={styles.headers}>
        React 練習專案
      </header>
      <div className={styles.welcome}>
        歡迎光臨我的頁面
      </div>
      <div className={styles.container}>
          <Link href="/accounting" className={styles.startBtn}>
            <button>點此開始</button>
          </Link>
      </div>
    </div>
  );
}
