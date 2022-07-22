import { styled } from "@mui/material";
import React from "react";
import PortfolioCard from "../../components/Cards/PortfolioCard";
import Title from "../../components/Others/Title";
import { projectSort } from "../../data";

const projects = [1, 2, 3, 4, 5];

const Container = styled("div")`
  margin-right: -15px;
  margin-left: -15px;
  padding: 10px 30px;
  background: white;
`;

const Projects = styled("div")`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: flex-start;
  align-items: center;
  padding: 30px 10px;
  gap: 30px;

  @media (max-width: 1200px) {
    justify-content: center;
  }
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
      <Projects>
        {projects.map((p) => (
          <div key={p}>
            <PortfolioCard />
          </div>
        ))}
      </Projects>
    </Container>
  );
};

export default Portfolio;
