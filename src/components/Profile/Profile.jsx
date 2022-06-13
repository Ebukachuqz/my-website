import {
  Box,
  Paper,
  styled,
  Typography,
  Container as BtnContainer,
} from "@mui/material";
import React from "react";
import ProfilePx from "../../assets/images/profilepx.jpeg";
import GenericButton from "../GenericButton/GenericButton";
import Timeline from "../Timeline/Timeline";
import { FaDownload } from "react-icons/fa";

const Container = styled(Box)`
  width: 100%;
  padding: 0 10px;
`;
const ProfileContainer = styled(Paper)`
  width: 100%;
  padding: 1px 0px;
  background-color: #fff;
`;

const ProfileName = styled(Typography)`
  text-transform: uppercase;
  font-size: 17px;
  font-weight: bold;
`;

const JobText = styled(Typography)`
  font-size: 13px;
  color: #777777;
`;

const ProfilePicture = styled(Box)`
  margin-top: -18px;
  -webkit-clip-path: polygon(0 9%, 100% 0, 100% 94%, 0% 100%);
  clip-path: polygon(0 9%, 100% 0, 100% 94%, 0% 100%);

  img {
    width: 100%;
  }
`;
const Profile = () => {
  return (
    <Container>
      <ProfileContainer elevation={1}>
        {/* Profile name */}
        <Box sx={{ lineHeight: "18px", padding: "20px" }}>
          <ProfileName>EBUKA CHUQZ</ProfileName>
          <JobText>Fullstack Web Developer</JobText>
        </Box>
        {/* Profile Picture */}
        <ProfilePicture>
          <img src={ProfilePx} alt="Ebuka Chuqz" />
        </ProfilePicture>

        {/* Timeline */}
        <Timeline />

        {/* Download Cv */}
        <BtnContainer sx={{ margin: "20px auto 30px" }}>
          <GenericButton text={"Download Cv"} icon={<FaDownload />} />
        </BtnContainer>
      </ProfileContainer>
    </Container>
  );
};

export default Profile;
