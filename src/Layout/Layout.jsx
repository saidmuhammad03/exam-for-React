import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Switcher from "../components/Swithcher";
import Button from "../components/Button";
import one1 from "../assets/one1.png";
import burger from "../assets/burger.png";
const Layout = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const [lng, setlng] = useState("en");
  return (
    <div>
      <div className="dark:bg-[#2c3153] h-[100px] pt-[30px]">
        <div className="flex justify-between items-center w-[90%] m-auto">
          <p className="text-[#646363] dark:text-[white] text-[18px] font-[500]">
            {t("start.one")}
          </p>
          <p className="text-[#646363] text-[18px] dark:text-[white] font-[500]">
            {t("start.two")}
          </p>
          <p className="text-[black] text-[22px] font-[500] dark:text-[white]">
            + 7 (978) 00-00-000
          </p>
          <Button
            text={t("start.btnText")}
            h={"40px"}
            bg={"rgba(59, 185, 109, 1)"}
            w={"220px"}
            borRadius={"30px"}
            col={"white"}
          />
        </div>
      </div>
      <div className="dark:bg-[#2c3153] dark:text-[white] ">
        <div className="flex items-center justify-between w-[90%] m-auto pb-[20px]">
          <NavLink to={"/"}>
            <img src={one1} alt="" />
          </NavLink>
          <ul className="flex justify-between w-[790px]">
            <li className="text-[18px] font-[400]">
              <NavLink to={"/Doctors"}>{t("navbar.doctors")}</NavLink>
            </li>
            <NavLink to={"/Services"}>
              <li className="text-[18px] font-[400]">{t("navbar.services")}</li>
            </NavLink>
            <NavLink to={"/Diagnos"}>
              <li className="text-[18px] font-[400]">{t("navbar.diagnos")}</li>
            </NavLink>
            <NavLink to={"/Tests"}>
              <li className="text-[18px] font-[400]">{t("navbar.tests")}</li>
            </NavLink>
            <NavLink to={"/Stoks"}>
              <li className="text-[18px] font-[400]">{t("navbar.stock")}</li>
            </NavLink>
            <NavLink to={"/Patients"}>
              <li className="text-[18px] font-[400]">{t("navbar.patients")}</li>
            </NavLink>
            <NavLink to={"/Clinic"}>
              <li className="text-[18px] font-[400]">{t("navbar.clinic")}</li>
            </NavLink>
            <NavLink to={"/Revies"}>
              <li className="text-[18px] font-[400]">{t("navbar.reviews")}</li>
            </NavLink>

            <NavLink  to={"/Contacts"} >

            <li className="text-[18px] font-[400]">{t("navbar.contacts")}</li>
            </NavLink>
          </ul>
          <div className="flex dark:text-[black] items-center gap-[20px]">
            <Switcher />
            <select
              value={lng}
              className="border rounded-[5px] w-[50px] h-[35px]"
              id=""
              onChange={(e) => {
                changeLanguage(e.target.value);
                setlng(e.target.value);
              }}
            >
              <option value={"en"}>En</option>
              <option value={"ru"}>Ru</option>
            </select>
            <img className="hidden" src={burger} alt="" />
          </div>
        </div>
      </div>
      <Outlet />
      <footer className="bg-grr pb-[30px] text-[white] dark:bg-[#2c3153]">
        <div className="flex w-[90%] m-auto justify-between pt-[30px]">
          <div className="one flex flex-col justify-between h-[240px]">
            <img src={one1} alt="" />
            <div>
              <p>{t("last.p2")}</p>
              <p>{t("footer1.p1")}</p>
            </div>
            <div>
              <p>{t("last.p4")}</p>
              <p>+7 (9__) ___-__-__</p>
            </div>
            <div>
              <p>{t("last.p5")}</p>
              <p>{t("footer1.p2")}</p>
            </div>
          </div>
          <div className="flex flex-col justify-between h-[210px]">
            <p>{t("footer1.p3")}</p>
            <ul className="flex flex-col gap-[5px]">
              <li>{t("footer1.p7")}</li>
              <li>{t("footer1.p7")}</li>
              <li>{t("footer1.p7")}</li>
              <li>{t("footer1.p7")}</li>
              <li>{t("footer1.p7")}</li>
              <li>{t("footer1.p7")}</li>
            </ul>
          </div>
          <div className="flex flex-col justify-between h-[210px]">
            <p>{t("footer1.p4")}</p>
            <ul className="flex flex-col gap-[5px]">
              <li>{t("footer1.p7")}</li>
              <li>{t("footer1.p7")}</li>
              <li>{t("footer1.p7")}</li>
              <li>{t("footer1.p7")}</li>
              <li>{t("footer1.p7")}</li>
              <li>{t("footer1.p7")}</li>
            </ul>
          </div>
          <div className="flex flex-col justify-between h-[210px]">
            <p>{t("footer1.p5")}</p>
            <ul className="flex flex-col gap-[5px]">
              <li>{t("footer1.p7")}</li>
              <li>{t("footer1.p7")}</li>
              <li>{t("footer1.p7")}</li>
              <li>{t("footer1.p7")}</li>
              <li>{t("footer1.p7")}</li>
              <li>{t("footer1.p7")}</li>
            </ul>
          </div>
          <div className="flex flex-col justify-between h-[210px]">
            <p>{t("footer1.p6")}</p>
            <ul className="flex flex-col gap-[5px]">
              <li>{t("footer1.p7")}</li>
              <li>{t("footer1.p7")}</li>
              <li>{t("footer1.p7")}</li>
              <li>{t("footer1.p7")}</li>
              <li>{t("footer1.p7")}</li>
              <li>{t("footer1.p7")}</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
