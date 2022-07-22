import { Grid, styled } from "@mui/material";
import React from "react";
import PortfolioCard from "../../components/PortfolioCard/PortfolioCard";
import Title from "../../components/Others/Title";
import { projectSort } from "../../data";

const projects = [1, 2, 3, 4, 5];

const Container = styled("div")`
  margin-right: -15px;
  margin-left: -15px;
  padding: 10px 30px;
  background: white;
`;

const GridContainer = styled(Grid)`
  padding: 20px 5px;
`;

const Sort = styled("div")`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 17px;
  color: grey;
  text-transform: capitalize;
  gap: 20px;
`;

const Portfolio = () => {
  return (
    <Container>
      <Title text={"Portfolio"} />
      <Sort>
        {projectSort.map((project) => {
          return <div key={project.id}>{project.name}</div>;
        })}
      </Sort>
      <GridContainer container spacing={3}>
        {projects.map((p) => (
          <Grid key={p} item>
            <PortfolioCard />
          </Grid>
        ))}
      </GridContainer>
    </Container>
  );
};

export default Portfolio;
