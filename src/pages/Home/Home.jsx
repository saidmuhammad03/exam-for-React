import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../Home/Home.css";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { twomen } from "../../App.jsx";
import twowomen from "../Home/twowomen.png";
import a1 from "../Home/a1.png";
import a2 from "../Home/a2.png";
import a3 from "../Home/a3.png";
import a4 from "../Home/a4.png";
import onemen from "../Home/onemen.png";
import twoBtn from "../Home/twoBtn.png";
import white from "../Home/white.png";
import krug1 from "../Home/krug1.png";
import krug2 from "../Home/krug2.png";
import krug3 from "../Home/krug3.png";
import sabz from "../Home/sabz.png";
import theone from "../Home/theone.png";
import thetwo from "../Home/thetwo.png";
import doc1 from "../Home/doc1.png";
import samsung from "../Home/samsung.png";
import diplom from "../Home/diplom.png";
import map from "../Home/map.png";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Button from "../../components/Button.jsx";
import Card from "../../components/Card.jsx";
import Card2 from "../../components/Card2.jsx";
import Card3 from "../../components/Card3.jsx";
import Card4 from "../../components/Card4.jsx";

const Home = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const [lng, setlng] = useState("en");
  return (
    <>
      <hr className="text-[white]" />
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
       
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="dark:bg-[#2c3153] text-[white] bg-grr">
            <div className="pt-[20px] pb-[200px] flex justify-between w-[90%] m-auto items-center">
              <div className="flex justify-star flex-col text-start">
                <p className="text-[35px] mt-[20px]">{t("first.text1")}</p>
                <p className="text-white mt-[15px] text-[20px] mb-[40px]">
                  {t("first.text2")}
                </p>
                <Button
                  text={t("first.btnMore")}
                  h={"40px"}
                  borRadius={"30px"}
                  col={"rgba(59, 185, 109"}
                  bg={"white"}
                  w={"190px"}
                />
              </div>
              <div>
                <img src={twomen} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="dark:bg-[#2c3153] text-[white] bg-grr">
            <div className="pt-[20px] pb-[200px] flex justify-between w-[90%] m-auto items-center">
              <div className="flex justify-star flex-col text-start">
                <p className="text-[35px] mt-[20px]">{t("first.text1")}</p>
                <p className="text-white mt-[15px] text-[20px] mb-[40px]">
                  {t("first.text2")}
                </p>
                <Button
                  text={t("first.btnMore")}
                  h={"40px"}
                  borRadius={"30px"}
                  col={"rgba(59, 185, 109"}
                  bg={"white"}
                  w={"190px"}
                />
              </div>
              <div>
                <img src={twomen} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="dark:bg-[#2c3153] text-[white] bg-grr">
            <div className="pt-[20px] pb-[200px] flex justify-between w-[90%] m-auto items-center">
              <div className="flex justify-star flex-col text-start">
                <p className="text-[35px] mt-[20px]">{t("first.text1")}</p>
                <p className="text-white mt-[15px] text-[20px] mb-[40px]">
                  {t("first.text2")}
                </p>
                <Button
                  text={t("first.btnMore")}
                  h={"40px"}
                  borRadius={"30px"}
                  col={"rgba(59, 185, 109"}
                  bg={"white"}
                  w={"190px"}
                />
              </div>
              <div>
                <img src={twomen} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="dark:bg-[#2c3153] text-[white] bg-grr">
            <div className="pt-[20px] pb-[200px] flex justify-between w-[90%] m-auto items-center">
              <div className="flex justify-star flex-col text-start">
                <p className="text-[35px] mt-[20px]">{t("first.text1")}</p>
                <p className="text-white mt-[15px] text-[20px] mb-[40px]">
                  {t("first.text2")}
                </p>
                <Button
                  text={t("first.btnMore")}
                  h={"40px"}
                  borRadius={"30px"}
                  col={"rgba(59, 185, 109"}
                  bg={"white"}
                  w={"190px"}
                />
              </div>
              <div>
                <img src={twomen} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="dark:bg-[#2c3153] text-[white] bg-grr">
            <div className="pt-[20px] pb-[200px] flex justify-between w-[90%] m-auto items-center">
              <div className="flex justify-star flex-col text-start">
                <p className="text-[35px] mt-[20px]">{t("first.text1")}</p>
                <p className="text-white mt-[15px] text-[20px] mb-[40px]">
                  {t("first.text2")}
                </p>
                <Button
                  text={t("first.btnMore")}
                  h={"40px"}
                  borRadius={"30px"}
                  col={"rgba(59, 185, 109"}
                  bg={"white"}
                  w={"190px"}
                />
              </div>
              <div>
                <img src={twomen} alt="" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <hr className="text-[white]" />
      <section className="dark:bg-[#2c3153] pb-[20px] flex-wrap dark:text-[white]">
        <div className="grid grid-cols-2 gap-[60px] w-[90%] m-auto pt-[30px]">
          <div>
            <p className="text-[33px] font-[700]">{t("second.text1")}</p>
            <p className="text-[grey] dark:text-[white] mt-[19px]">
              {t("second.text2")}
            </p>
          </div>
          <div>
            <img src={twowomen} alt="" />
          </div>
        </div>
      </section>
      <hr className="text-[white]" />
      <section className="dark:bg-[#2c3153] dark:text-[white] pb-[20px]">
        <div className="flex items-center justify-between w-[90%] m-auto pt-[30px] pb-[30px]">
          <p className="text-[33px] font-[600]">{t("third.text")}</p>
          <Button
            text={t("third.text2")}
            w={"170px"}
            bg={"rgba(59, 185, 109, 1)"}
            h={"40px"}
            borRadius={"30px"}
            col={"white"}
          />
        </div>
        <div>
          <div className="flex w-[90%] m-auto justify-between">
            <Card img={a1} p1={t("third.a1")} p2={t("third.btn")} />
            <Card img={a2} p1={t("third.a2")} p2={t("third.btn")} />
            <Card img={a3} p1={t("third.a3")} p2={t("third.btn")} />
            <Card img={a4} p1={t("third.a4")} p2={t("third.btn")} />
          </div>
        </div>
      </section>
      <hr className="text-[white]" />
      <section className="dark:bg-[#2c3153] dark:text-[white]">
        <div className="flex items-center justify-between w-[90%] m-auto pt-[30px] pb-[30px]">
          <p className="text-[33px] font-[600]">{t("fourth.text1")}</p>
          <img src={twoBtn} alt="" />
        </div>
        <div>
          <div className="flex w-[90%] m-auto justify-between">
            <div>
              <Card2
                img={onemen}
                p1={t("fourth.text2")}
                p2={t("fourth.text3")}
              />
              <Button
                text={t("fourth.btn")}
                bg={"rgba(59, 185, 109, 1)"}
                h={"40px"}
                w={"200px"}
                borRadius={"30px"}
                col={"white"}
              />
            </div>
            <div>
              <Card2
                img={onemen}
                p1={t("fourth.text2")}
                p2={t("fourth.text3")}
              />
              <Button
                text={t("fourth.btn")}
                bg={"rgba(59, 185, 109, 1)"}
                h={"40px"}
                w={"200px"}
                borRadius={"30px"}
                col={"white"}
              />
            </div>
            <div>
              <Card2
                img={onemen}
                p1={t("fourth.text2")}
                p2={t("fourth.text3")}
              />
              <Button
                text={t("fourth.btn")}
                bg={"rgba(59, 185, 109, 1)"}
                h={"40px"}
                w={"200px"}
                borRadius={"30px"}
                col={"white"}
              />
            </div>
            <div>
              <Card2
                img={onemen}
                p1={t("fourth.text2")}
                p2={t("fourth.text3")}
              />
              <Button
                text={t("fourth.btn")}
                bg={"rgba(59, 185, 109, 1)"}
                h={"40px"}
                w={"200px"}
                borRadius={"30px"}
                col={"white"}
              />
            </div>
          </div>
        </div>
        <div className="mt-[40px] pb-[30px] flex justify-center items-center">
          <Button
            text={t("fourth.btn2")}
            col={"rgba(59, 185, 109, 1"}
            borRadius={"30px"}
            h={"40px"}
            w={"200px"}
            brd={"1.5px solid rgba(59, 185, 109, 1"}
          />
        </div>
      </section>
      <hr className="text-[white]" />
      <section className="dark:bg-[#2c3153] pb-[40px]">
        <div className="w-[90%] gap-[10px] pt-[20px] m-auto flex justify-between">
          <div>
            <Card3
              bg={"rgba(59, 185, 109, 1"}
              p={"20px"}
              w={"400px"}
              h={"450px"}
              p1={t("five.text1")}
              p2={t("five.text3")}
              p3={"22.03.2023"}
              p4={t("five.text2")}
              img={white}
              imgWidth={"150px"}
            />
          </div>
          <div>
            <div className="grid grid-cols-2 gap-[10px]">
              <Card3
                bg={"rgba(101, 103, 242, 1)"}
                p={"20px"}
                w={"340px"}
                h={"220px"}
                p1={t("five.text1")}
                p2={t("five.text3")}
                p3={"22.03.2023"}
                img={white}
                imgWidth={"90px"}
              />
              <Card3
                bg={"rgba(245, 118, 118, 1)"}
                p={"20px"}
                w={"340px"}
                h={"220px"}
                p1={t("five.text1")}
                p2={t("five.text3")}
                p3={"22.03.2023"}
                img={white}
                imgWidth={"90px"}
              />
              <Card3
                bg={"rgba(255, 219, 92, 1)"}
                p={"20px"}
                w={"340px"}
                h={"220px"}
                p1={t("five.text1")}
                p2={t("five.text3")}
                p3={"22.03.2023"}
                img={white}
                imgWidth={"90px"}
              />
              <Card3
                bg={"rgba(39, 200, 218, 1)"}
                p={"20px"}
                w={"340px"}
                h={"220px"}
                p1={t("five.text1")}
                p2={t("five.text3")}
                p3={"22.03.2023"}
                img={white}
                imgWidth={"90px"}
              />
            </div>
          </div>
        </div>
      </section>
      <hr className="text-[white]" />
      <section className="dark:bg-[#2c3153] pt-[30px]">
        <p className="pb-[40px] dark:text-[white] w-[90%] flex items-start m-auto text-[30px] font-[700]">
          {t("six.text1")}
        </p>
        <div className="flex justify-between w-[90%] m-auto">
          <Card4 img={krug1} p1={t("six.text2")} />
          <Card4 img={krug2} p1={t("six.text3")} />
          <Card4 img={krug3} p1={t("six.text4")} />
        </div>
      </section>
      <section className="dark:bg-[#2c3153] pb-[20px] flex-wrap dark:text-[white]">
        <div className="grid grid-cols-2 gap-[60px] w-[90%] m-auto pt-[30px]">
          <div>
            <p className="text-[grey] dark:text-[white] mb-[25px] mt-[19px]">
              {t("second.text2")}
            </p>
            <Button
              text={t("third.btn")}
              bg={"rgba(59, 185, 109, 1)"}
              h={"40px"}
              w={"200px"}
              borRadius={"30px"}
              col={"white"}
            />
          </div>
          <div>
            <img src={twowomen} alt="" />
          </div>
        </div>
      </section>
      <hr className="text-[white]" />
      <section className="dark:bg-[#2c3153] pb-[30px]">
        <p className="text-[30px] font-[600] dark:text-[white] w-[90%] m-auto pb-[30px] pt-[20px]">
          {t("seven.a1")}
        </p>
        <div className="start flex-wrap flex w-[90%] m-auto justify-between">
          <div>
            <img
              width={"230px"}
              style={{ marginLeft: "20px" }}
              src={white}
              alt=""
            />
            <p className="dark:text-[white] pl-[20px] text-[22px] font-[600] pb-[10px]">
              {t("seven.p1")}
            </p>
            <div className="bg-grey dark:bg-[#2a327b] dark:text-[white] w-[300px] p-[20px] rounded-[45px] flex flex-col justify-between h-[350px] pb-[30px] mt-[-160px] pt-[160px]">
              <div className="flex items-center gap-[5px]">
                <img src={sabz} alt="" />
                <p>{t("seven.p2")}</p>
              </div>
              <div className="flex items-center gap-[5px]">
                <img src={sabz} alt="" />
                <p>{t("seven.p3")}</p>
              </div>
              <div className="flex items-center gap-[5px]">
                <img src={sabz} alt="" />
                <p>{t("seven.p4")}</p>
              </div>
              <div className="flex items-center gap-[5px]">
                <img src={sabz} alt="" />
                <p>{t("seven.p5")}</p>
              </div>
              <div className="flex items-center gap-[5px]">
                <img src={sabz} alt="" />
                <p>{t("seven.p6")}</p>
              </div>
            </div>
          </div>
          <div>
            <img
              width={"230px"}
              style={{ marginLeft: "20px" }}
              src={theone}
              alt=""
            />
            <p className="pl-[20px] dark:text-[white]  text-[22px] font-[600] pb-[10px]">
              {t("seven.p1")}
            </p>
            <div className="bg-grey dark:bg-[#2a327b] dark:text-[white]  w-[300px] p-[20px] rounded-[45px] flex flex-col justify-between h-[350px] pb-[30px] mt-[-160px] pt-[160px]">
              <div className="flex items-center gap-[5px]">
                <img src={sabz} alt="" />
                <p>{t("seven.p2")}</p>
              </div>
              <div className="flex items-center gap-[5px]">
                <img src={sabz} alt="" />
                <p>{t("seven.p3")}</p>
              </div>
              <div className="flex items-center gap-[5px]">
                <img src={sabz} alt="" />
                <p>{t("seven.p4")}</p>
              </div>
              <div className="flex items-center gap-[5px]">
                <img src={sabz} alt="" />
                <p>{t("seven.p5")}</p>
              </div>
              <div className="flex items-center gap-[5px]">
                <img src={sabz} alt="" />
                <p>{t("seven.p6")}</p>
              </div>
            </div>
          </div>
          <div>
            <img
              width={"230px"}
              style={{ marginLeft: "20px" }}
              src={thetwo}
              alt=""
            />
            <p className="pl-[20px] dark:text-[white]  text-[22px] font-[600] pb-[10px]">
              {t("seven.p1")}
            </p>
            <div className="bg-grey dark:bg-[#2a327b] dark:text-[white]  w-[300px] p-[20px] rounded-[45px] flex flex-col justify-between h-[350px] pb-[30px] mt-[-160px] pt-[160px]">
              <div className="flex items-center gap-[5px]">
                <img src={sabz} alt="" />
                <p>{t("seven.p2")}</p>
              </div>
              <div className="flex items-center gap-[5px]">
                <img src={sabz} alt="" />
                <p>{t("seven.p3")}</p>
              </div>
              <div className="flex items-center gap-[5px]">
                <img src={sabz} alt="" />
                <p>{t("seven.p4")}</p>
              </div>
              <div className="flex items-center gap-[5px]">
                <img src={sabz} alt="" />
                <p>{t("seven.p5")}</p>
              </div>
              <div className="flex items-center gap-[5px]">
                <img src={sabz} alt="" />
                <p>{t("seven.p6")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="dark:bg-[#2c3153]">
        <p className="w-[90%] font-[600] pt-[30px] pb-[30px] m-auto text-[30px] dark:text-[white]">
          {t("eight.p1")}
        </p>
      </section>
      <hr className="text-[white]" />
      <section className="dark:bg-[#2c3153] pt-[30px]">
        <div className="grid grid-cols-2 gap-[20px] dark:bg-[#2a327b] dark:text-[white]  rounded-[10px] justify-between w-[90%] bg-grey m-auto p-[20px]">
          <div className="flex flex-col justify-between pt-[30px] pb-[30px]">
            <div className="flex items-center gap-[13px] pl-[10px] h-[35px] rounded-[5px] abc ">
              <p className="text-[22px] font-[700]">01</p>
              <p>{t("nine.p1")}</p>
            </div>
            <div className="flex  items-center gap-[13px] pl-[10px] h-[35px] rounded-[5px] abc">
              <p className="text-[22px] font-[700]">02</p>
              <p>{t("nine.p2")}</p>
            </div>
            <div className="flex  items-center gap-[13px] pl-[10px] h-[35px] rounded-[5px] abc">
              <p className="text-[22px] font-[700]">03</p>
              <p>{t("nine.p3")}</p>
            </div>
            <div className="flex  items-center gap-[13px] pl-[10px] h-[35px] rounded-[5px] abc">
              <p className="text-[22px] font-[700]">04</p>
              <p>{t("nine.p4")}</p>
            </div>
            <div className="flex  items-center gap-[13px] pl-[10px] h-[35px] rounded-[5px] abc">
              <p className="text-[22px] font-[700]">05</p>
              <p>{t("nine.p5")}</p>
            </div>
            <div className="flex  items-center gap-[13px] pl-[10px] h-[35px] rounded-[5px] abc">
              <p className="text-[22px] font-[700]">06</p>
              <p>{t("nine.p6")}</p>
            </div>
            <div className="flex items-center gap-[13px] pl-[10px] h-[35px] rounded-[5px] abc">
              <p className="text-[22px] font-[700]">07</p>
              <p>{t("nine.p7")}</p>
            </div>
            <div className="flex  items-center gap-[13px] pl-[10px] h-[35px] rounded-[5px] abc">
              <p className="text-[22px] font-[700]">08</p>
              <p>{t("nine.p8")}</p>
            </div>
            <div className="flex  items-center gap-[13px] pl-[10px] h-[35px] rounded-[5px] abc">
              <p className="text-[22px] font-[700]">09</p>
              <p>{t("nine.p9")}</p>
            </div>
          </div>
          <div className="pt-[30px]">
            <p className="text-[30px] font-[700]">{t("nine.p1")}</p>
            <p className="h-[4px] w-[80px] bg-grr"></p>
            <p className="mt-[10px]">{t("nine.p10")}</p>
            <div className="flex items-center justify-between">
              <div className="flex flex-col justify-between h-[310px]">
                <div>
                  <p className="text-grr text-[40px] f0nt-[700]">+2800</p>
                  <p>{t("nine.p11")}</p>
                </div>
                <div>
                  <p className="text-grr text-[40px] f0nt-[700]">+2800</p>
                  <p>{t("nine.p11")}</p>
                </div>
                <div>
                  <p className="text-grr text-[40px] f0nt-[700]">+2800</p>
                  <p>{t("nine.p11")}</p>
                </div>
              </div>
              <div>
                <img src={doc1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="dark:bg-[#2c3153] dark:text-[white] pt-[50px]">
        <p className="text-[30px] font-[700] w-[90%] m-auto">{t("ten.p1")}</p>
      </section>
      <section className="dark:bg-[#2c3153]">
        <div className="w-[90%] m-auto grid items-center pb-[30px] grid-cols-6 gap-[70px] pt-[40px]">
          <img src={samsung} alt="" />
          <img src={samsung} alt="" />
          <img src={samsung} alt="" />
          <button style={{ height: "40px", boxShadow: "0 0 3px 1px grey" }}>
            <img src={samsung} alt="" />
          </button>
          <img src={samsung} alt="" />
          <img src={samsung} alt="" />
          <img src={samsung} alt="" />
          <img src={samsung} alt="" />
          <img src={samsung} alt="" />
          <img src={samsung} alt="" />
          <img src={samsung} alt="" />
          <img src={samsung} alt="" />
        </div>
      </section>
      <section className="dark:bg-[#2c3153] dark:text-[white] pt-[30px] pb-[20px]">
        <p className="text-[30px] font-[700] w-[90%] m-auto">{t("ten.p2")}</p>
      </section>
      <section className="dark:bg-[#2c3153]">
        <div className="w-[90%] m-auto flex justify-between pb-[50px] pt-[30px]">
          <img src={diplom} alt="" />
          <img src={diplom} alt="" />
          <img src={diplom} alt="" />
          <img src={diplom} alt="" />
        </div>
      </section>
      <section>
        <div className="ss flex justify-between w-[100%]">
          <div className="bg-[black] flex flex-col justify-between p-[90px] text-[white] w-[410px]">
            <p>{t("last.p1")}</p>
            <div>
              <p>{t("last.p2")}</p>
              <p>{t("last.p3")}</p>
            </div>
            <div>
              <p>{t("last.p4")}</p>
              <p>8 (3822) 50-00-49</p>
            </div>
            <div>
              <p>{t("last.p5")}</p>
              <p>info@docnear.ru</p>
            </div>
            <Button
              text={t("last.p6")}
              bg={"rgba(59, 185, 109, 1)"}
              borRadius={"30px"}
              w={"200px"}
              h={"40px"}
              col={"white"}
            />
          </div>
          <div>
            <img src={map} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
