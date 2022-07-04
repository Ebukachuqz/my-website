import { styled } from "@mui/material";
import React from "react";
import { FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";

const Container = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  gap: 20px;

  a {
    color: black;
    transition: 350ms ease-out transform;
    &:hover {
      transform: scale(1.3);
    }
  }
`;

const TwitterIcon = styled(FaTwitter)`
  &:hover {
    color: #1da1f2;
  }
  @media (max-width: 992px) {
    color: #1da1f2;
  }
`;
const GithubIcon = styled(FaGithub)`
  &:hover {
    color: #07851c;
  }
  @media (max-width: 992px) {
    color: #07851c;
  }
`;

const InstaIcon = styled(FaInstagram)`
  &:hover {
    color: #e20f33;
  }
  @media (max-width: 992px) {
    color: #e20f33;
  }
`;

const SocialIcons = () => {
  return (
    <Container>
      <a target="_blank" rel="noreferrer" href="https://github.com/Ebukachuqz">
        <GithubIcon />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/ebukachuqz/"
      >
        <InstaIcon />
      </a>
      <a target="_blank" rel="noreferrer" href="https://twitter.com/EbukaDev">
        <TwitterIcon />
      </a>
    </Container>
  );
};

export default SocialIcons;
