import { AppBar, Box, Stack } from "@mui/material"
import Logo from "../iconAndAssets/logo.svg"
import { Link } from "react-router-dom"
import styled from "@emotion/styled"
import { ButtonDark } from "../shared/button"
    
export const Navbar = ()=>{
    const NavBar = styled.section`
        width: 100%;
        display: flex; 
        align-items: center;
        justify-content: space-between;
        margin-bottom: 70px;
        position: absolute; 
`
    const NavContainer = styled.section`
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        align-items: center;
        gap: 20px;
        padding: 15px;
        margin-right: 20px;
        a{
            cursor: pointer;
            color: white;
            text-decoration: none;
        }
        button{
            cursor: pointer ;
        }
    `
    return(
        <Box>
                <NavBar>
                        <img src={Logo} width={244} height={56} style={{marginLeft: '70px'}}/>
                        <NavContainer>
                            <Link to='/'>Home</Link>
                            <Link to='/'>Photography</Link>
                            <Link to='/'>About us</Link>
                            <Link to='/'>Contact us</Link>
                            <Link to='/'>Privacy Policy</Link>
                            <ButtonDark sx={{borderRadius: 1}}>Subscribe</ButtonDark>
                        </NavContainer>
                </NavBar>
        </Box>
    )
}