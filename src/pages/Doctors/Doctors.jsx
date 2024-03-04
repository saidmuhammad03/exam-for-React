import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Card2 from "../../components/Card2";
import Button from "../../components/Button";
import onemen from "../Home/onemen.png";
import docs from "../Doctors/docs.png";
import "../Doctors/doctor.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Doctors = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const [lng, setlng] = useState("en");
  return (
    <div className="start">
      <div className="dark:bg-[#2c3153] dark:text-[white]">
        <div className="flex pt-[20px] w-[90%] m-auto pb-[20px]">
          <p className="text-[grey]">{t("page2.p1")}</p>
          <p>{t("page2.p2")}</p>
        </div>
        <p className="w-[90%] m-auto pb-[30px] text-[30px] font-[700]">
          {t("page2.p2")}
        </p>
      </div>
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
          <div className="dark:bg-[#2c3153] dark:text-[white]">
            <div className="three flex justify-between w-[90%] m-auto">
              <div className="second flex items-start h-[530px] pt-[30px]">
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
                  <br></br>
                  <Button
                    text={t("first.btnMore")}
                    h={"40px"}
                    brd={"1.5px solid rgba(59, 185, 109, 1)"}
                    w={"200px"}
                    borRadius={"30px"}
                    col={"rgba(59, 185, 109, 1)"}
                  />
                </div>
              </div>
              <div className="second flex items-start h-[500px] pt-[30px]">
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
                  <br></br>
                  <Button
                    text={t("first.btnMore")}
                    h={"40px"}
                    brd={"1.5px solid rgba(59, 185, 109, 1)"}
                    w={"200px"}
                    borRadius={"30px"}
                    col={"rgba(59, 185, 109, 1)"}
                  />
                </div>
              </div>
              <div className="second flex items-start h-[500px] pt-[30px]">
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
                  <br></br>
                  <Button
                    text={t("first.btnMore")}
                    h={"40px"}
                    brd={"1.5px solid rgba(59, 185, 109, 1)"}
                    w={"200px"}
                    borRadius={"30px"}
                    col={"rgba(59, 185, 109, 1)"}
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="dark:bg-[#2c3153] dark:text-[white]">
            <div className="three flex justify-between w-[90%] m-auto">
              <div className="second flex items-start h-[530px] pt-[30px]">
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
                  <br></br>
                  <Button
                    text={t("first.btnMore")}
                    h={"40px"}
                    brd={"1.5px solid rgba(59, 185, 109, 1)"}
                    w={"200px"}
                    borRadius={"30px"}
                    col={"rgba(59, 185, 109, 1)"}
                  />
                </div>
              </div>
              <div className="second flex items-start h-[500px] pt-[30px]">
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
                  <br></br>
                  <Button
                    text={t("first.btnMore")}
                    h={"40px"}
                    brd={"1.5px solid rgba(59, 185, 109, 1)"}
                    w={"200px"}
                    borRadius={"30px"}
                    col={"rgba(59, 185, 109, 1)"}
                  />
                </div>
              </div>
              <div className="second flex items-start h-[500px] pt-[30px]">
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
                  <br></br>
                  <Button
                    text={t("first.btnMore")}
                    h={"40px"}
                    brd={"1.5px solid rgba(59, 185, 109, 1)"}
                    w={"200px"}
                    borRadius={"30px"}
                    col={"rgba(59, 185, 109, 1)"}
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="dark:bg-[#2c3153] dark:text-[white]">
            <div className="three flex justify-between w-[90%] m-auto">
              <div className="second flex items-start h-[530px] pt-[30px]">
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
                  <br></br>
                  <Button
                    text={t("first.btnMore")}
                    h={"40px"}
                    brd={"1.5px solid rgba(59, 185, 109, 1)"}
                    w={"200px"}
                    borRadius={"30px"}
                    col={"rgba(59, 185, 109, 1)"}
                  />
                </div>
              </div>
              <div className="second flex items-start h-[500px] pt-[30px]">
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
                  <br></br>
                  <Button
                    text={t("first.btnMore")}
                    h={"40px"}
                    brd={"1.5px solid rgba(59, 185, 109, 1)"}
                    w={"200px"}
                    borRadius={"30px"}
                    col={"rgba(59, 185, 109, 1)"}
                  />
                </div>
              </div>
              <div className="second flex items-start h-[500px] pt-[30px]">
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
                  <br></br>
                  <Button
                    text={t("first.btnMore")}
                    h={"40px"}
                    brd={"1.5px solid rgba(59, 185, 109, 1)"}
                    w={"200px"}
                    borRadius={"30px"}
                    col={"rgba(59, 185, 109, 1)"}
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="dark:bg-[#2c3153] dark:text-[white]">
            <div className="three flex justify-between w-[90%] m-auto">
              <div className="second flex items-start h-[530px] pt-[30px]">
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
                  <br></br>
                  <Button
                    text={t("first.btnMore")}
                    h={"40px"}
                    brd={"1.5px solid rgba(59, 185, 109, 1)"}
                    w={"200px"}
                    borRadius={"30px"}
                    col={"rgba(59, 185, 109, 1)"}
                  />
                </div>
              </div>
              <div className="second flex items-start h-[500px] pt-[30px]">
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
                  <br></br>
                  <Button
                    text={t("first.btnMore")}
                    h={"40px"}
                    brd={"1.5px solid rgba(59, 185, 109, 1)"}
                    w={"200px"}
                    borRadius={"30px"}
                    col={"rgba(59, 185, 109, 1)"}
                  />
                </div>
              </div>
              <div className="second flex items-start h-[500px] pt-[30px]">
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
                  <br></br>
                  <Button
                    text={t("first.btnMore")}
                    h={"40px"}
                    brd={"1.5px solid rgba(59, 185, 109, 1)"}
                    w={"200px"}
                    borRadius={"30px"}
                    col={"rgba(59, 185, 109, 1)"}
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="dark:bg-[#2c3153] pb-[30px] pt-[40px]">
        <div className="grid rounded-[15px] dark:bg-[black] grid-cols-2 bg-[black] w-[90%] m-auto text-[white]">
          <div className="w-[90%] m-auto flex justify-between">
            <div>
              <p className="text-[30px] font-[700] pb-[20px]">{t("doc1.p1")}</p>
              <p>{t("doc1.p2")}</p>
              <br />
              <div className="flex justify-between">
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[20px] font-[600]">{t("doc1.p3")}</p>
                  <input
                    style={{
                      height: "40px",
                      width: "310px",
                      paddingLeft: "10px",
                      borderRadius: "30px",
                    }}
                    type="text"
                    placeholder={t("doc1.p5")}
                  />
                </div>
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[20px] f0nt-[600]">{t("doc1.p4")}</p>
                  <input
                    style={{
                      height: "40px",
                      width: "280px",
                      paddingLeft: "10px",
                      borderRadius: "30px",
                    }}
                    type="text"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
              </div>
              <br />
              <Button
                text={t("doc1.p6")}
                bg={"rgba(59, 185, 109, 1)"}
                h={"40px"}
                w={"210px"}
                col={"white"}
                borRadius={"30px"}
              />
              <br />
              <div className="flex text-[14px] gap-[6PX]">
                <p>{t("doc1.p7")}</p>
                <p style={{ textDecoration: "underline" }} className="text-grr">
                  {t("doc1.p8")}
                </p>
              </div>
            </div>
          </div>
          <div>
            <img src={docs} className="ml-[12.4px] mt-[-10px]" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
