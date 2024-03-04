import { useState } from "react";

import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../hooks/useDarkSide";

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  const defaultProperties = {
    dark: {
      circle: {
        r: 5,
      },
      mask: {
        cx: "20%",
        cy: "49%",
      },
      svg: {
        transform: "rotate(40deg)",
      },
      lines: {
        opacity: 0,
      },
    },
    light: {
      circle: {
        r: 3.5,
      },
      mask: {
        cx: "100%",
        cy: "40%",
      },
      svg: {
        transform: "rotate(90deg)",
      },
      lines: {
        opacity: 1,
      },
    },
    springConfig: { mass: 5, tension: 150, friction: 25 },
  };

  return (
    <>
      <div>
        <DarkModeSwitch
          checked={darkSide}
          onChange={toggleDarkMode}
          size={50}
          animationProperties={defaultProperties}
          moonColor="rgb(20, 145, 295)"
          sunColor="orange"
        />
      </div>
    </>
  );
}
