import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.home}>
      <header className={styles.headers}>React 練習專案</header>
      <div className={styles.welcome}>歡迎光臨我的頁面</div>
      <div className={styles.container}>
        <Link href="/accounting" className={styles.startBtn}>
          <button className={styles.btn}>點此開始</button>
        </Link>
      </div>
    </div>
  );
}
