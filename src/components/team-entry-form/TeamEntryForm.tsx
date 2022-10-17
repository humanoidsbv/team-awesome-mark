import React, { useState, useRef, useContext } from "react";

import { Button } from "../button/Button";
import { postTeamEntry } from "../../services/team-entries/postTeamEntry";
import * as Styled from "./TeamEntryForm.styled";
import { TeamEntriesContext } from "../../context/TeamEntriesProvider";

interface TeamEntryFormProps {
  handleModal: () => void;
}

const initialFormValues = {
  client: "",
  firstName: "",
  lastName: "",
  role: "",
  startDate: "",
};

export const TeamEntryForm = ({ handleModal }: TeamEntryFormProps) => {
  const [newTeamEntry, setNewTeamEntry] = useState(initialFormValues);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const { teamEntries, setTeamEntries } = useContext(TeamEntriesContext);

  const formRef = useRef<HTMLFormElement>(null);

  const handleBlur = () => {
    setIsFormValid(formRef.current?.checkValidity() || false);
  };

  const handleChange = (key: string, event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTeamEntry({ ...newTeamEntry, [key]: event.target.value });
  };

  const handleSubmit = async () => {
    const formattedEntry = {
      client: newTeamEntry.client,
      firstName: newTeamEntry.firstName,
      lastName: newTeamEntry.lastName,
      role: newTeamEntry.role,
      startDate: newTeamEntry.startDate,
    };
    const postedEntry = await postTeamEntry(formattedEntry);
    if (postedEntry) {
      setTeamEntries([...teamEntries, postedEntry]);
      setNewTeamEntry(initialFormValues);
    }
    handleModal();
  };

  return (
    <>
      <Styled.Form ref={formRef}>
        <Styled.NameWrapper>
          <Styled.FirstName>
            <Styled.Label>First name</Styled.Label>
            <Styled.Input
              name="firstname"
              onBlur={handleBlur}
              onChange={(event) => handleChange("firstName", event)}
              placeholder="First name"
              required
              type="text"
              value={newTeamEntry.firstName ?? ""}
            />
            {!isFormValid && <Styled.Span>This field is required</Styled.Span>}
          </Styled.FirstName>
          <Styled.LastName>
            <Styled.Label>Last name</Styled.Label>
            <Styled.Input
              name="lastname"
              onBlur={handleBlur}
              onChange={(event) => handleChange("lastName", event)}
              placeholder="Last name"
              required
              type="text"
              value={newTeamEntry.lastName ?? ""}
            />
            {!isFormValid && <Styled.Span>This field is required</Styled.Span>}
          </Styled.LastName>
        </Styled.NameWrapper>
        <Styled.Label>Role</Styled.Label>
        <Styled.Input
          name="role"
          onBlur={handleBlur}
          onChange={(event) => handleChange("role", event)}
          placeholder="Role in organisation"
          required
          type="text"
          value={newTeamEntry.role ?? ""}
        />
        {!isFormValid && <Styled.Span>This field is required</Styled.Span>}
        <Styled.Label>Current client</Styled.Label>
        <Styled.Input
          name="client"
          onBlur={handleBlur}
          onChange={(event) => handleChange("client", event)}
          placeholder="Name of current client"
          required
          type="text"
          value={newTeamEntry.client ?? ""}
        />
        {!isFormValid && <Styled.Span>This field is required</Styled.Span>}
      </Styled.Form>
      <Styled.ButtonWrapper>
        <Button onClick={handleModal} variant="secondary" label="Cancel" />
        <Button
          disabled={!isFormValid}
          label="Add Humanoid"
          onClick={handleSubmit}
          variant="primary"
        />
      </Styled.ButtonWrapper>
    </>
  );
};
