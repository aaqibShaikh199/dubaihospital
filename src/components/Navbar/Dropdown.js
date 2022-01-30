import React, { useState } from "react";
import { DropItems } from "./DropItems";
import { Link } from "react-router-dom";
import "./navbarstyle.css";

function Dropdown() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked bg-transparent" : "dropdown-menu bg-transparent"}
      >
        {DropItems.map((item, index) => {
          return (
            <li key={index} className="dropdown-link text-base bg-transparent">
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
