import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, styled } from "@mui/material";
import Atag from "../Others/Atag";

const CardActionAreaContainer = styled(CardActionArea)`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  transition: ease-out 400ms;
  border-radius: var(--border-radius);
  overflow: hidden;

  :hover {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
`;

const CardActionsContainer = styled(CardActions)`
  background: transparent;
  border: none;
  justify-content: center;
`;

const PortfolioCard = () => {
  return (
    <Card
      sx={{
        maxWidth: 230,
        border: "none",
        boxShadow: "none",
        overflow: "visible",
      }}
    >
      <CardActionAreaContainer>
        <CardMedia
          component="img"
          height="150"
          image="https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="body1"
            fontWeight={700}
            component="div"
          >
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles
          </Typography>
        </CardContent>
      </CardActionAreaContainer>
      <CardActionsContainer>
        <Button size="medium">
          <Atag text={"Github"} href={"#"} color="green" />
        </Button>
        <Button size="medium">
          <Atag text={"Live"} href={"#"} color="purple" />
        </Button>
      </CardActionsContainer>
    </Card>
  );
};

export default PortfolioCard;
