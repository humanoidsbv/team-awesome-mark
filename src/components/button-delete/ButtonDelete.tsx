import { MouseEventHandler } from "react";

import * as Styled from "./ButtonDelete.styled";
import BinIcon from "../../../public/images/bin.svg";

interface ButtonDelete {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const ButtonDelete = ({ onClick }: ButtonDelete) => {
  return (
    <Styled.Button onClick={onClick}>
      <BinIcon />
    </Styled.Button>
  );
};
