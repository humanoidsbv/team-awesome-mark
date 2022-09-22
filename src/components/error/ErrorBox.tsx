import * as Styled from "./ErrorBox.styled";

export const ErrorBox = () => {
  return (
    <Styled.Container>
      <Styled.Message>
        ⚠️
        <br />
        Uuuh, okay. Something went wrong here. But no worries! Looks like it was just a classic 404.
        So all your entries are safe 🛟.
      </Styled.Message>
    </Styled.Container>
  );
};
