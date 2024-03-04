import Button from "../components/Button.jsx";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";

const Card3 = ({ img, p1, p2, p3, p4, bg, h, w, imgWidth, p }) => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  const [lng, setlng] = useState("en");
  return (
    <div
      style={{
        backgroundColor: bg,
        height: h,
        width: w,
        padding: p,
        borderRadius: "5px",
      }}
    >
      <div>
        <p className="text-[20px] font-[600] text-[white]">{p1}</p>
        <div className="flex justify-evenly p-[20px]">
          <div className="flex flex-col justify-between">
            <div className="mt-[30px]">
              <p className="text-[white]">{p2}</p>
              <p className="text-[18px] font-[600] text-[white]">{p3}</p>
              <p className="text-[white] mt-[10px] mb-[10px] w-[230px]">{p4}</p>
            </div>
            <Button
              text={t("third.btn")}
              h={"40px"}
              w={"160px"}
              bg={"white"}
              borRadius={"30px"}
              col={"rgba(59, 185, 109, 1"}
            />
          </div>
          <img style={{ width: imgWidth }} src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card3;
