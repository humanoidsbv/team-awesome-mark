import * as Styled from "./PrimaryButton.styled";
import PlusIcon from "../../../public/images/plus.svg";

export const PrimaryButton = () => {
  return (
    <Styled.Button>
      <PlusIcon />
      New Time Entry
    </Styled.Button>
  );
};
