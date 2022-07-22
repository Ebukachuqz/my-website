import { Button, styled } from "@mui/material";
import React from "react";
import Title from "../Others/Title";

import TextField from "@mui/material/TextField";

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const NameEmail = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  font-size: 12px;
`;

const SubmitBtn = styled(Button)`
  background-color: var(--primary-color);
  font-size: 14px;
  font-weight: 600;
  border: 0;
  color: black;
  text-transform: capitalize;
  border-radius: 50px;
  padding: 1px 29px;
  line-height: 35px;
  cursor: pointer;
  margin-top: 40px;

  :hover {
    background-color: var(--primary-color-dark);
  }
`;

const ContactForm = () => {
  return (
    <Container>
      <Title text={"Contact Form"} />
      <NameEmail>
        <TextField
          fullWidth
          label="Name"
          id="standard-size-small"
          defaultValue=""
          size="small"
          variant="standard"
        />
        <TextField
          fullWidth
          label="Email"
          id="standard-size-small"
          defaultValue=""
          size="small"
          variant="standard"
        />
      </NameEmail>
      <TextField
        fullWidth
        id="standard-multiline-static"
        label="Message"
        multiline
        rows={4}
        defaultValue=""
        variant="standard"
      />
      <SubmitBtn>Submit</SubmitBtn>
    </Container>
  );
};

export default ContactForm;
