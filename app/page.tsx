
import styles from "./page.module.css";
import Header from "./Components/header/Header";
import Hero from "./Components/hero/Hero"
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


