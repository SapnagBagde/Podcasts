import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import {BrowserRouter,Routes,Route} from  "react-router-dom"
import {lightTheme,darkTheme} from "./utils/Themes.js";
import Sidebar from "./components/Sidebar.jsx";
import NavBar from "./components/NavBar.jsx"
import Dashboard from "./pages/Dashboard.jsx";
import DisplayPodcasts from "./pages/DisplayPodcasts.jsx";
import Favourite from "./pages/Favourite.jsx";
import PodcastDetails from "./pages/PodcastDetails.jsx";
import Search from "./pages/Search.jsx";
import Profile from "./pages/Profile.jsx";
import Login from "./routes/Login.jsx"
import SignUp from "./routes/Signup.jsx"
import Home from "./routes/Home.jsx"


const Container = styled.div`
  display:flex;
  background : ${({ theme }) => theme.bgLight  } ;
  width:100%;
  height:100vh;
  overflow-x:hidden;
  overflow-y:hidden;

`;

const Frame = styled.div `
    display:flex;
    flex-direction : column;
    flex:3;
`;

function App() {

  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Container>

          {
            menuOpen && ( 
              <Sidebar
                setMenuOpen = {setMenuOpen}
                setDarkMode = {setDarkMode}
                darkMode = {darkMode}
                menuOpen ={menuOpen}
              />
            )
          }
          
          <Frame>
            <NavBar 
              menuOpen ={menuOpen}
              setMenuOpen = {setMenuOpen}
            />
            <Routes>
              <Route path="/"  exact element={<Dashboard/>} />
              <Route path="/search"  exact element={<Search/>} />
              <Route path="/favourite"  exact element={<Favourite/>} />
              <Route path="/"  exact element={<Home/>} />
              <Route path="/login"  exact element={<Login/>} />
              <Route path="/signup"  exact element={<SignUp/>} />
              <Route path="/profile"  exact element={<Profile/>} />
              <Route path="/podcast/:id"  exact element={<PodcastDetails/>} />
              <Route path="/showpodcasts/:type"  exact element={<DisplayPodcasts/>} />  
              
            </Routes>
          </Frame>
          
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

