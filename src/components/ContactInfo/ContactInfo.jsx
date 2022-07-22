import { styled } from "@mui/material";
import React from "react";
import Title from "../Others/Title";
import SocialIcons from "../SocialIcons/SocialIcons";

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ContactDetails = styled("div")`
  margin-bottom: 30px;
  p {
    list-style: none;
    font-size: 15px;
    color: #787878;
    line-height: 30px;

    span {
      color: #000;
    }
  }
`;

const ContactInfo = () => {
  return (
    <Container>
      <Title text={"Contact Informations"} />
      <ContactDetails>
        <p>
          <span>Address: </span>Lagos, Nigeria.
        </p>
        <p>
          <span>Phone: </span>+234 123-4567-890
        </p>
        <p>
          <span>Email: </span>chimebuka.dev@gmail.com
        </p>
        <p>
          <span>Location: </span>Remote
        </p>
      </ContactDetails>
      <SocialIcons />
    </Container>
  );
};

export default ContactInfo;
