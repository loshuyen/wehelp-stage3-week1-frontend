import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useRouter } from 'next/navigation'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter()
  return (
    <div>
      <header className={styles.headers}>
        React 練習專案
      </header>
      <div className={styles.welcome}>
        歡迎光臨我的頁面
      </div>
      <div className={styles.main}>
          <button className={styles.startBtn} onClick={() => router.push("/accounting")}>點此開始</button>
      </div>
    </div>
  );
}
