import { MouseEventHandler } from "react";

import * as Styled from "./ButtonDelete.styled";
import BinIcon from "../../../public/images/bin.svg";

export const ButtonDelete = (onClick: MouseEventHandler<HTMLButtonElement>) => {
  return (
    <Styled.Button onClick={onClick}>
      <BinIcon />
    </Styled.Button>
  );
};
