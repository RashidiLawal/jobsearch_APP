import React from "react";
import FirstHeader from "../../atoms/header/FirstHeader";
import "./aside.scss";

const Aside = ({ update, elegant }) => {
  return (
    <aside className="styler">
      <FirstHeader
        words={update}
        fw="700"
        fz="1.5rem"
        pb=".5rem"
        lh="3.625rem"
        wi="fit-content"
      />
      {elegant.map((item, idex) => (
        <ul className="stylus">
          <li key={idex}>{item}</li>
        </ul>
      ))}
    </aside>
  );
};

export default Aside;
