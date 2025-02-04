import style from "./page.module.css";
import Header from "@/components/header/Header";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
const Services = () => {
  return (
    <>
      <div className={style.headerBg}>
        <Header />
      </div>

      <div className={style.main}>
        <h1 className={style.mainheading}>Services</h1>

        {/* border */}
        <div className={style.border}>
          <div></div>
        </div>
        {/* border */}

        <div className={style.services}>
          <div className={style.service1}>
            <div className={style.text}>
              <h2>01</h2>
              <h1>Front End</h1>
              <p>
                Our web developer is proficient in designing beautiful and
                intuitive interfaces that enhance user experience, making our
                hotel’s website a pleasure to navigate.
              </p>
              <div className={style.list}>
                <FontAwesomeIcon className={style.icon} icon={faPlay} />{" "}
                <p>Donec aenean duis vel id mattis nunc</p> <br />
                <FontAwesomeIcon className={style.icon} icon={faPlay} />{" "}
                <p> Donec aenean duis vel id mattis nunc</p> <br />
                <FontAwesomeIcon className={style.icon} icon={faPlay} />{" "}
                <p> Donec aenean duis vel id mattis nunc</p>
              </div>
            </div>

            <div className={style.imagebox}>
              <Image
                src="/Images/services8.webp"
                alt="service1"
                width={500}
                height={380}
                className={style.image}
              ></Image>
            </div>
          </div>
        </div>

        {/* border */}
        <div className={style.border}>
          <div></div>
        </div>
        {/* border */}

        <div className={style.services}>
          <div className={style.service1}>
            <div className={style.text}>
              <h2>02</h2>
              <h1>Graphic Designing </h1>
              <p>
                Our Graphic Designer is proficient in designing beautiful and
                intuitive interfaces that enhance user experience.
              </p>
              <div className={style.list}>
                <FontAwesomeIcon className={style.icon} icon={faPlay} />{" "}
                <p>Donec aenean duis vel id mattis nunc</p> <br />
                <FontAwesomeIcon className={style.icon} icon={faPlay} />{" "}
                <p> Donec aenean duis vel id mattis nunc</p> <br />
                <FontAwesomeIcon className={style.icon} icon={faPlay} />{" "}
                <p> Donec aenean duis vel id mattis nunc</p>
              </div>
            </div>

            <div className={style.imagebox}>
              <Image
                src="/Images/services3.webp"
                alt="service1"
                width={500}
                height={380}
                className={style.image}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
