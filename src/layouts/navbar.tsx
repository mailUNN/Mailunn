import { AppBar, Box, Stack } from "@mui/material";
import Logo from "../iconAndAssets/logo.svg";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { ButtonDark } from "../shared/button";
import { List, MagnifyingGlass, ArrowRight, X } from "@phosphor-icons/react";
import { palette } from "../shared/palette";
import { HeaderFour } from "../shared/text";
import { InputBox } from "../shared/input";
import { useEffect, useState } from "react";

const NavBar = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 70px;
  position: absolute;
  @media (max-width: 425px) {
    display: none;
  }
`;
const NavContainer = styled.section`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  padding: 15px;
  margin-right: 20px;
  a {
    cursor: pointer;
    color: white;
    text-decoration: none;
  }
  button {
    cursor: pointer;
  }
`;
const MobileNavbarstyle = styled.section`
  @media (max-width: 425px) {
    width: 100%;
    display: flex;
    justify-content: space-around;
    gap: 200px;
    align-items: center;
    position: absolute;
    margin-top: 15px;
    #logo1{
      width: 150px;
      height: 50px;
    }
    #logo2{
      width: 22.1px;
      height: 22.1px;
    }
  }
`;
const Menu = styled.section`
  height: 100vh;
  background: #015f4c;
  background-size: cover;
  position: absolute;
  width: 100%;
  overflow: auto;
`;
const Search = styled.input`
  border: none;
  background: none;
  color: white;
  outline: none;
  width: 100%;
  font-size: 20px;
  ::placeholder {
    color: white;
  }
`;
const Span = styled.span`
  display: flex;
  justify-content: space-between;
  color: white;
  padding: 10px;
  margin-left: 6px;
  margin-right: 6px;
`;
export const Navbar = () => {
  const [showComponent, setShowComponent] = useState(true);
  const [width, setWidth] = useState(window.outerWidth);

  useEffect(() => {
    if (width <= 425) {
      setShowComponent(false);
    } else {
      setShowComponent(true);
    }
  }, [width]);

  useEffect(() => {
    const resizeListener = (e: UIEvent) => {
      setWidth((e.target as Window)?.outerWidth ?? window.outerWidth);
    };

    window.addEventListener("resize", resizeListener);
    return () => window.removeEventListener("resize", resizeListener);
  });

  return <Box>{showComponent ? <DesktopNavbar /> : <MobileNavbar />}</Box>;
};

const DesktopNavbar = () => {
  return (
    <Box>
      <NavBar>
        <img
          src={Logo}
          width={244}
          height={56}
          style={{ marginLeft: "70px" }}
        />
        <NavContainer>
          <Link to="/">Home</Link>
          <Link to="/">Photography</Link>
          <Link to="/">About us</Link>
          <Link to="/">Contact us</Link>
          <Link to="/">Privacy Policy</Link>
          <ButtonDark sx={{ borderRadius: 1 }}>Subscribe</ButtonDark>
        </NavContainer>
      </NavBar>
    </Box>
  );
};

export const MobileNavbar = () => {
  const [showComponent, setShowComponent] = useState(true);
  const [isClick,setIsClick] = useState(true);
  useEffect(() => {
    if(isClick === true){
      setShowComponent(true)
    }
    else{
      setShowComponent(false)
    }
  },[isClick]);
  const MobileNav =()=>{
    return(
      <MobileNavbarstyle>
        <img  id="logo1" src={Logo}  width={244} height={56} />
        <List id="logo2" onClick={()=>{
            setIsClick(false)
        }} color={palette.White} weight="fill" size={32} />
      </MobileNavbarstyle>
    )
  }
  const MenuList =()=>{
    return(
      <Menu>
        <X
          color={palette.White}
          size={23}
          style={{ float: "right", marginBottom: "30px", padding: "10px" }}
          onClick={()=>{
            setIsClick(true)
          }}
        />
        <Stack
          direction={"row"}
          sx={{
            borderBottom: "solid white 1px",
            width: "90%",
            p: 0.5,
            mt: 3,
            ml: 2,
          }}
        >
          <Search placeholder="Search for..."></Search>
          <MagnifyingGlass color={palette.White} size={32} />
        </Stack>
        <Box sx={{ mt: 10 }}>
          <Span>
            <HeaderFour>Home</HeaderFour>
            <ArrowRight color={palette.White} size={32} />
          </Span>
          <Span>
            <HeaderFour>Photography</HeaderFour>
            <ArrowRight color={palette.White} size={32} />
          </Span>
          <Span>
            <HeaderFour>About us</HeaderFour>
            <ArrowRight color={palette.White} size={32} />
          </Span>
          <Span>
            <HeaderFour>Contact us</HeaderFour>
            <ArrowRight color={palette.White} size={32} />
          </Span>
          <Span>
            <HeaderFour>Privacy Policy</HeaderFour>
            <ArrowRight color={palette.White} size={32} />
          </Span>
        </Box>

        <Stack
          direction={"row"}
          sx={{ mt: 7, p: 1 }}
          justifyContent={"space-around"}
        >
          <InputBox placeholder="Enter Your Email"></InputBox>
          <ButtonDark
            sx={{ borderRadius: 1, background: "#DEA532", width: "154px" }}
          >
            Subscribe
          </ButtonDark>
        </Stack>
      </Menu>
    )
  }

  return (
    <Box>
      {showComponent ? <MobileNav/> : <MenuList/>}
    </Box>
  );
};
