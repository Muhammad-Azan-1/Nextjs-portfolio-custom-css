import style from "./page.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.textbox1}>
          <div className={style.mainText}>
            <h1>Freelance web developer based in Pakistan</h1>
            <p>
              Expert development services by NYC-based freelancer for your
              website needs.
            </p>
          </div>
        </div>

        <div className={style.btnBox}>
          <div className={style.btnContent}>
            <button className={style.btn1}>Let&apos;s Connect</button>
            <button className={`${style.btn1} ${style.btn2}`}>
              Check My Work
            </button>
          </div>
        </div>

        <div className={style.brandBox}>
          <h3>Proudly collaborated with some of the biggest brands</h3>
        </div>

        <div className={style.brandLogoBox}>
       
          <Image
            src="Images/brand1.svg"
            alt="brand logo"
            width={50}
            height={50}
            className={style.img}
          ></Image>

          <Image
            src="Images/brand2.svg"
            alt="brand logo"
            width={80}
            height={80}
            className={style.img}
          ></Image>

          <Image
            src="Images/brand3.svg"
            alt="brand logo"
            width={80}
            height={80}
            className={style.img}
          ></Image>

          <Image
            src="Images/brand4.svg"
            alt="brand logo"
            width={50}
            height={50}
            className={style.img}
          ></Image>

          <Image
            src="Images/brand5.svg"
            alt="brand logo"
            width={80}
            height={80}
            className={style.img}
          ></Image>

          <Image
            src="Images/brand6.svg"
            alt="brand logo"
            width={100}
            height={100}
            className={style.img}
          ></Image>
        </div>
      </div>
    </>
  );
};

export default Hero;
