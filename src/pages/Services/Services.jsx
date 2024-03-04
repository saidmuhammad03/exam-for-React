import React from "react";
import Card from "../../components/Card";
import b1 from "../Services/b1.png";
import b2 from "../Services/b2.png";
import b3 from "../Services/b3.png";
import b4 from "../Services/b4.png";
import b5 from "../Services/b5.png";
import b6 from "../Services/b6.png";
import b7 from "../Services/b7.png";
import b8 from "../Services/b8.png";
import b9 from "../Services/b9.png";
import b10 from "../Services/b10.png";
import b11 from "../Services/b11.png";
import b12 from "../Services/b12.png";
import b13 from "../Services/b13.png";
import Button from "../../components/Button";

const Services = () => {
  return (
    <div className="start">
      <div className="dark:bg-[#2c3153] dark:text-[white]">
        <div className="flex pt-[20px] w-[90%] m-auto pb-[20px]">
          <p className="text-[grey]">Главная </p>
          <p>Направления нашей работы</p>
        </div>
        <p className="w-[90%] m-auto pb-[30px] text-[30px] font-[700]">
          Направления нашей работы
        </p>
      </div>
      <div className="dark:bg-[#2c3153] text-[white]">
        <div className="grid w-[90%] m-auto pt-[30px] gap-[20px] pb-[70px] grid-cols-4">
          <Card img={b1} p1={"Отоларингология"} p2={"Подробнее"} />
          <Card img={b2} p1={"Сурдология"} p2={"Подробнее"} />
          <Card img={b3} p1={"Педиатрия"} p2={"Подробнее"} />
          <Card img={b4} p1={"Неврология"} p2={"Подробнее"} />
          <Card img={b5} p1={"Терапия"} p2={"Подробнее"} />
          <Card img={b6} p1={"Ревматология"} p2={"Подробнее"} />
          <Card img={b7} p1={"Гастроэнтерология"} p2={"Подробнее"} />
          <Card img={b8} p1={"УЗИ- диагностика"} p2={"Подробнее"} />
          <Card img={b9} p1={"Кардиология"} p2={"Подробнее"} />
          <Card img={b10} p1={"Эндокринология"} p2={"Подробнее"} />
          <Card img={b11} p1={"Общая хирургия"} p2={"Подробнее"} />
          <Card img={b12} p1={"Урология"} p2={"Подробнее"} />
        </div>
      </div>
      <section className="dark:bg-[#2c3153] dark:text-[white]">
        <p className="w-[90%] m-auto pb-[30px] text-[30px] font-[700]">
          Запись на приём
        </p>
      </section>
      <section className="dark:bg-[#2c3153] dark:text-[white]">
        <div className="flex w-[90%] m-auto items-end pb-[30px] justify-between">
          <div className="flex flex-col gap-[10px]">
            <p className="text-[20px] font-[600]">Ваше ФИО</p>
            <input
              className="bg-grey"
              style={{
                height: "40px",
                width: "250px",
                paddingLeft: "10px",
                borderRadius: "30px",
              }}
              type="text"
              placeholder="Иванов Иван Иванович"
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <p className="text-[20px] font-[600]">Номер телефона</p>
            <input
              className="bg-grey"
              style={{
                height: "40px",
                width: "250px",
                paddingLeft: "10px",
                borderRadius: "30px",
              }}
              type="text"
              placeholder="+7 (___) ___-__-__"
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <p className="text-[20px] font-[600]">Выберите направление</p>
            <input
              className="bg-grey"
              style={{
                height: "40px",
                width: "250px",
                paddingLeft: "10px",
                borderRadius: "30px",
              }}
              type="text"
              placeholder="Эндокринология"
            />
          </div>
          <Button
            text={"Записаться на приём"}
            h={"40px"}
            bg={"rgba(59, 185, 109, 1)"}
            w={"250px"}
            borRadius={"30px"}
            col={"white"}
          />
        </div>
        <div className="flex text-[14px] gap-[6PX] w-[90%] m-auto pb-[50px]">
          <p>Нажимая на кнопку Записаться на приём вы соглашаетесь с </p>
          <p style={{ textDecoration: "underline" }} className="text-grr">
            политикой конфиденциальности
          </p>
        </div>
      </section>
    </div>
  );
};
export default Services;
