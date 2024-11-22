import style from "./page.module.css";
import Header from "../Components/header/Header";
import Image from "next/image";
import Link from "next/link";
const Page = () => {
  return (
    <>
      <div className={style.headerBg}>
        <Header />
      </div>

      <div className={style.main}>
        <h1 className={style.mainHeading}>Featured Work</h1>

        <div className={style.imagebox}>
          {/* box1 */}
          <div className={style.box1}>
            <Image
              src="/Images/portolio1.jpg"
              alt="Portfolio Image 1"
              width={900}
              height={600}
              className={style.img}
            ></Image>

            <div className={style.imageContent}>
              <div className="heading">
                <h3>Front-end</h3>
              </div>

              <div className={style.about_project}>
                <h1>University Website Design</h1>
                <p>
                  Revamp your online presence with a modern and user-friendly
                  University website design that showcases your skills in
                  forntend development
                </p>
              </div>

              <div className={style.linktag}>
                <Link href="/">Porject Detials</Link>
              </div>
            </div>
          </div>

          {/* box2 */}

          <div className={style.box2}>
            <div className={style.image2}>
              <Image
                src="/Images/portfolio2.jpg"
                alt="porject Image 2"
                width={552}
                height={420}
                className={style.img2}
              ></Image>

              <div className={style.image2Content}>
                <div className={style.image2text}>
                  <span>Ecommerce</span>
                  <h3>Brittany & Co Front Store</h3>
                </div>
              </div>
            </div>

            <div className={style.image2}>
              <Image
                src="/Images/portfolio3.jpg"
                alt="porject Image 2"
                width={552}
                height={420}
                className={style.img2}
              ></Image>

              <div className={style.image2Content}>
                <div className={style.image2text}>
                  <span>Front End</span>
                  <h3>NeuroApp Landing Page</h3>
                </div>
              </div>
            </div>

            <div className={style.image2}>
              <Image
                src="/Images/portfolio4.jpg"
                alt="porject Image 2"
                width={552}
                height={420}
                className={style.img2}
              ></Image>

              <div className={style.image2Content}>
                <div className={style.image2text}>
                  <span>Full Stack</span>
                  <h3>Ozone Esport Platform</h3>
                </div>
              </div>
            </div>

            <div className={style.image2}>
              <Image
                src="/Images/portfolio5.jpg"
                alt="porject Image 2"
                width={552}
                height={420}
                className={style.img2}
              ></Image>

              <div className={style.image2Content}>
                <div className={style.image2text}>
                  <span>Backcend</span>
                  <h3>NY Hospital CRM</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.btn}>
        <button>Click here to view more porjects</button>
      </div>
    </>
  );
};

export default Page;
