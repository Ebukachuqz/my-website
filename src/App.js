import React from "react";
import { Grid, styled } from "@mui/material";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import Portfolio from "./pages/Portfolio/Portfolio";
import MenuList from "./components/Header/MenuList";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";

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

const ContentContainer = styled("div")`
  padding: 15px;
  overflow: hidden;
  max-width: 100%;
  min-height: 520px;
  box-shadow: var(--box-shadow);
  background-color: white;
  border-radius: var(--border-radius);
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

            <ContentContainer>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </ContentContainer>
            <Footer />
          </GridItem>
        </Grid>
      </BrowserRouter>
    </MainContainer>
  );
};

export default App;
