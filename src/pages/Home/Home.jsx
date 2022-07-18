import React from "react";
import { styled } from "@mui/material";
import Title from "../../components/Title";

// Stacks import
import { techStacks } from "../../data";

// About
const AboutSection = styled("div")`
  margin-right: -15px;
  margin-left: -15px;
  padding: 10px 30px;
  background: white;
`;
const AboutBody = styled("p")`
  font-size: 14px;
  color: #4c4c4c;
  line-height: 28px;
`;

const TechStacksSection = styled("div")`
  margin-right: -15px;
  margin-left: -15px;
  padding: 30px;
  background-color: #fafafa;
`;

const TechStacks = styled("div")`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  gap: 20px;
  flex-wrap: wrap;
  width: 100%;
  margin: 20px auto;
  background-color: transparent;
`;
const Stack = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: 500ms ease-in all;

  &:hover {
    transform: scale(1.2);
  }
`;

const StackCard = styled("div")`
  background: #fffefe;
  border-radius: var(--border-radius);
  height: 100px;
  width: 100px;
  padding: 5px;
  background-color: #fff;
  box-shadow: 0px 0px 48px 0px rgb(4 6 4 / 15%);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StackName = styled("p")`
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  color: black;
`;
const Home = () => {
  return (
    <div>
      <AboutSection>
        <Title text={"About Me"} />
        <AboutBody>
          Full Stack Web Developer with experience in building and deploying
          scalable web apps. Skilled in solving problems with HTML, CSS,
          Javascript, Bootstrap, React.Js, Material UI, Mongo DB and Node.Js. I
          have a deep understanding of how to create responsive and
          user-friendly web pages that are both visually appealing and easy to
          use. I have gained good debugging skills and critical thinking while
          working on projects individually or with a team, utilizing these
          technologies.
          <br></br>
          <br></br>
          In addition, I enjoy reading. Business, Psychology and self-help books
          are my favorite. I love to apply my critical thinking, ideas, and
          curiosity to help achieve goals and solve technical problems in
          projects, teams, and companies I work for.
        </AboutBody>
      </AboutSection>
      {/* Tech Stacks */}
      <TechStacksSection>
        <Title text={"Tech Stacks"} />
        <TechStacks>
          {techStacks.map((techStack) => {
            return (
              <Stack key={techStack.id}>
                <StackCard>
                  <img src={techStack.image} alt={techStack.name} />
                </StackCard>
                <StackName>{techStack.name}</StackName>
              </Stack>
            );
          })}
        </TechStacks>
      </TechStacksSection>
    </div>
  );
};

export default Home;
