import React from "react";
import { Container, Grid, Paper, styled } from "@mui/material";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Resume from "./pages/Resume/Resume";
import Blog from "./pages/Blog/Blog";
import Porfolio from "./pages/Porfolio/Porfolio";
import MenuList from "./components/Header/MenuList";

const MainContainer = styled("div")`
  width: 100%;
  max-width: 1170px;
  margin: 60px auto 20px;

  @media (max-width: 992px) {
    max-width: 750px;
  }
`;

const GridItem = styled(Grid)`
  width: 100%;
  position: relative;
  padding: 0 15px;
`;

const App = () => {
  return (
    <MainContainer>
      <BrowserRouter>
        <Grid container>
          <GridItem item xs={12} md1={4} lg={3}>
            <Profile />
          </GridItem>
          <GridItem item xs={12} md1={8} lg={9}>
            <Header />
            <MenuList />
            <Paper>
              <Container>
                <Routes>
                  <Route path="/" element={<About />} />
                  <Route path="/resume" element={<Resume />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/porfolio" element={<Porfolio />} />
                </Routes>
              </Container>
            </Paper>
          </GridItem>
        </Grid>
      </BrowserRouter>
    </MainContainer>
  );
};

export default App;
