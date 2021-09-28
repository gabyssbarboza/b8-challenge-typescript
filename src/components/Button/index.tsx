import React, { ButtonHTMLAttributes, useState } from "react";
import { Btn, Icon } from "./styles";

export const Button = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <Btn onClick={() => setActive(!active)} isActive={active}>
      {active ? (
        <span>
          <Icon />
          Adicionado
        </span>
      ) : (
        <span>Adicionar</span>
      )}
    </Btn>
  );
};
