import { styled } from "@mui/material";
import React from "react";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactInfo from "../../components/ContactInfo/ContactInfo";

const Container = styled("div")`
  margin-right: -15px;
  margin-left: -15px;
  padding: 10px 30px;
  background: white;
  display: flex;
  justify-content: center;
  gap: 30px;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const Contact = () => {
  return (
    <Container>
      <div style={{ flex: 1 }}>
        <ContactForm />
      </div>
      <div style={{ flex: 1 }}>
        <ContactInfo />
      </div>
    </Container>
  );
};

export default Contact;
