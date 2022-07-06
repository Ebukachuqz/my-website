import React from "react";
import { styled } from "@mui/material";
import Title from "../../components/Title";

// Stacks import
import { techStacks } from "../../data";

// About
const AboutSection = styled("div")`
  margin-right: -15px;
  margin-left: -15px;
  padding: 40px 30px;
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos ut,
          mollitia quia iure eligendi sapiente doloribus qui nobis, harum
          impedit sequi amet nam pariatur delectus tempore commodi, blanditiis
          optio porro? Totam sequi suscipit cum nihil debitis itaque. Dolore
          <br></br>
          <br></br>
          incidunt cupiditate quia soluta. Nihil excepturi, explicabo distinctio
          blanditiis a quidem id nam aliquid praesentium iste totam dolorum
          veniam, esse commodi cumque. Doloribus nihil ipsam expedita delectus
          deserunt veritatis, itaque esse ipsa sapiente qui, provident natus,
          officiis aliquid optio ad ea laboriosam. Nihil deserunt vero quisquam
          harum corporis recusandae! Porro, molestias suscipit. cumque!
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
