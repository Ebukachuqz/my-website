import React from "react";
import { Container, Grid, Paper, styled } from "@mui/material";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Resume from "./pages/Resume/Resume";
import Blog from "./pages/Blog/Blog";
import Porfolio from "./pages/Porfolio/Porfolio";

const MainContainer = styled(Container)`
  margin-top: 60px;
`;

const App = () => {
  return (
    <MainContainer>
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <Profile />
        </Grid>
        <Grid item xs={12} md={9}>
          <Header />
          <Paper>
            <Container>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<About />} />
                  <Route path="/resume" element={<Resume />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/porfolio" element={<Porfolio />} />
                </Routes>
              </BrowserRouter>
            </Container>
          </Paper>
        </Grid>
      </Grid>
    </MainContainer>
  );
};

export default App;
