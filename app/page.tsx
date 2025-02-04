
import styles from "./page.module.css";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero"
export default function Home() {
  return (
    <>
    <div className={styles.backgroundImage}>
    <Header/>
    <Hero/>
    </div>

    </>
   
  );
}


