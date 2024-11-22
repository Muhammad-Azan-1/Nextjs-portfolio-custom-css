import Header from "../Components/header/Header";
import style from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faDiscord,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <>
      <div className={style.headerBg}>
        <Header />
      </div>

      <div className={style.main}>
        <div className={style.aboutme}>
          <div className={style.imagebox}>
            <div className={style.imagebg}>
              <Image
                src="/Images/aboutme2.jpg"
                alt="About Me Image"
                width={325}
                height={400}
                className={style.image}
              ></Image>

              <div className={style.icons}>
                <Link href="">
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
                <Link href="">
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
                <Link href="">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </Link>
                <Link href="">
                  <FontAwesomeIcon icon={faDiscord} />
                </Link>
              </div>
            </div>
          </div>

          {/* Text contetn ABout me */}

          <div className={style.textcontent}>
            <h2>
              I’m John Smith. I’m passionate about crafting exceptional
              websites. With a blend of design skills and coding expertise, I
              create unique online experiences that captivate users.
            </h2>
            <p>
              Looking for a top-notch web developer to revamp your hotel’s
              website? Look no further than John Smith. With years of experience
              and a keen eye for design, John can take your site to the next
              level, helping you attract more visitors and boost your bookings.
            </p>
          </div>
        </div>

        {/* testimonials */}

        <div className={style.main2}>
          <div className={style.heading2}>
            <h1>See why they love me</h1>
          </div>

          <div className={style.testimonials}>
            {/* text box one */}

            <div className={style.textbox}>
              <div className={style.user}>
                <Image
                  src="/Images/user1.jpg"
                  alt="Testimonial Image 1"
                  width={50}
                  height={50}
                  className={style.userImages}
                ></Image>
                <h3>Jasica</h3>
              </div>

              <div className={style.text}>
                <p>
                  Turpis gravida mauris neque phasellus ut praesent ullamcorper
                  a amet. Consequat amet turpis vitae pretium viverra. Platea
                  non imperdiet fringilla nunc lacus congue mauris in vitae.
                </p>

                <div className={style.stardiv}>
                  <FontAwesomeIcon icon={faStar} className={style.starIcon} />
                  <FontAwesomeIcon icon={faStar} className={style.starIcon} />
                  <FontAwesomeIcon icon={faStar} className={style.starIcon} />
                  <FontAwesomeIcon icon={faStar} className={style.starIcon} />
                  <FontAwesomeIcon icon={faStar} className={style.starIcon} />
                </div>
              </div>
            </div>

            {/* text box two */}

            <div className={style.textbox}>
              <div className={style.user}>
                <Image
                  src="/Images/user7.webp"
                  alt="Testimonial Image 1"
                  width={50}
                  height={50}
                  className={style.userImages}
                ></Image>
                <h3>Duke</h3>
              </div>

              <div className={style.text}>
                <p>
                  Turpis gravida mauris neque phasellus ut praesent ullamcorper
                  a amet. Consequat amet turpis vitae pretium viverra. Platea
                  non imperdiet fringilla nunc lacus congue mauris in vitae.
                </p>

                <div className={style.stardiv}>
                  <FontAwesomeIcon icon={faStar} className={style.starIcon} />
                  <FontAwesomeIcon icon={faStar} className={style.starIcon} />
                  <FontAwesomeIcon icon={faStar} className={style.starIcon} />
                  <FontAwesomeIcon icon={faStar} className={style.starIcon} />
                  <FontAwesomeIcon
                    icon={faStarHalfStroke}
                    className={style.starIcon}
                  />
                </div>
              </div>
            </div>

            {/* text box 3 */}

            <div className={style.textbox}>
              <div className={style.user}>
                <Image
                  src="/Images/user3.webp"
                  alt="Testimonial Image 1"
                  width={50}
                  height={50}
                  className={style.userImages}
                ></Image>
                <h3>JohnSmith</h3>
              </div>

              <div className={style.text}>
                <p>
                  Turpis gravida mauris neque phasellus ut praesent ullamcorper
                  a amet. Consequat amet turpis vitae pretium viverra. Platea
                  non imperdiet fringilla nunc lacus congue mauris in vitae.
                </p>

                <div className={style.stardiv}>
                  <FontAwesomeIcon icon={faStar} className={style.starIcon} />
                  <FontAwesomeIcon icon={faStar} className={style.starIcon} />
                  <FontAwesomeIcon icon={faStar} className={style.starIcon} />
                  <FontAwesomeIcon icon={faStar} className={style.starIcon} />
                  <FontAwesomeIcon
                    icon={faStarHalfStroke}
                    className={style.starIcon}
                  />
                </div>
              </div>
            </div>

            {/* text box 4 */}

            <div className={style.textbox}>
              <div className={style.user}>
                <Image
                  src="/Images/user2.jpg"
                  alt="Testimonial Image 1"
                  width={50}
                  height={50}
                  className={style.userImages}
                ></Image>
                <h3>Hamza</h3>
              </div>

              <div className={style.text}>
                <p>
                  Turpis gravida mauris neque phasellus ut praesent ullamcorper
                  a amet. Consequat amet turpis vitae pretium viverra. Platea
                  non imperdiet fringilla nunc lacus congue mauris in vitae.
                </p>

                <div className={style.stardiv}>
                  <FontAwesomeIcon icon={faStar} className={style.starIcon} />
                  <FontAwesomeIcon icon={faStar} className={style.starIcon} />
                  <FontAwesomeIcon icon={faStar} className={style.starIcon} />
                  <FontAwesomeIcon icon={faStar} className={style.starIcon} />
                  <FontAwesomeIcon icon={faStar} className={style.starIcon} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
