import { styled } from "@mui/material";
import React from "react";
import BlogCard from "../../components/Cards/BlogCard";
import Atag from "../../components/Others/Atag";
import Title from "../../components/Others/Title";

const blogs = [1, 2, 3, 4, 5, 6];

const Container = styled("div")`
  margin-right: -15px;
  margin-left: -15px;
  padding: 10px 30px;
  background: white;
`;
const Blogs = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 15px;
  gap: 40px;

  @media (max-width: 1200px) {
    justify-content: center;
  }
`;

const Blog = () => {
  return (
    <Container>
      <Title text={"Blogs"} />
      <Blogs>
        {blogs.map((blog) => (
          <Atag text={<BlogCard />} href="https://hashnode.com/@Ebukachuqz" />
        ))}
      </Blogs>
    </Container>
  );
};

export default Blog;
