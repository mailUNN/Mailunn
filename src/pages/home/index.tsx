import { AppBar, Box, Stack } from "@mui/material"
import { BodyOne, HeaderFive, HeaderFour, HeaderOne, Label } from "../../shared/text"
import Layout from "../../layouts"
import { Data } from "../../mockData/homePageMockData"
import styled from "@emotion/styled"
import { BodyTwo, Display } from "../../shared/text"
import { palette } from "../../shared/palette"
import HomepageHeaderBackgroundImg from "../../iconAndAssets/HomePageHeaderImg.png"
import { ButtonDark } from "../../shared/button"

export const Homepage = () =>{
    const data = Data;
    const Header = styled.section`
        background:url(${HomepageHeaderBackgroundImg});
        background-size: cover;
        height: auto;
        position: relative;
        top: 0px;
        padding: 100px;
        z-index: -1;
        margin-bottom: 60px;
    `
    const HeroInfoContainer = styled.section`
        margin-left: -30px;
        padding: 10px;
        color: ${palette.White};
        position: relative;
        top: 80px;
       
    `
    const TodayEvent = styled.section`
        color: ${palette.Black};
        background: #F2F8F7;
        width: 90%;
        height: 90%;
        margin-top: 20px;
        padding: 20px;
        margin: auto;
    `
    return(
    <Layout>
        <Box>
        <Header>
            <HeroInfoContainer>
                <BodyTwo sx={{letterSpacing:3,mb:2,fontWeight:600}}>FEATURED</BodyTwo>
                <Display sx={{width: '90%',}}>Launching Our School's Exclusive Email<br/> Newsletter for a Closer Community.</Display>
                <BodyTwo sx={{mt:3,display: 'flex',gap:1}}>By <BodyTwo sx={{color:palette.Yellow}}>Emmanuel and Terry </BodyTwo>|  December 23, 2023 </BodyTwo>
                <BodyOne sx={{mt:3}}>Stay Informed, Stay Connected: Your Gateway to UNN and UNEC Campus<br/> Updates, Events, and Exciting Announcements!</BodyOne>
                <ButtonDark sx={{mt:8,mb:10,borderRadius: 1}}>Subscribe</ButtonDark>
            </HeroInfoContainer>
        </Header>  
        <TodayEvent>
            <Stack direction={'row'} justifyContent={'space-between'}>
            <HeaderFour sx={{ml:5}}>Today’s Events</HeaderFour>
            <BodyTwo sx={{textDecoration:'underline',color: palette.Green,cursor:'pointer',mr:5}}>View all events</BodyTwo>
            </Stack>
            <Stack direction={'row'} sx={{p:5}} justifyContent={'space-evenly'}>
            {
                data.map(item=>(
                    <Stack direction={'row'}gap={2}>
                        <img src={item.img} width={140}/>
                        <Stack direction={'column'}>
                            <HeaderFive>{item.title}</HeaderFive>
                            <Label sx={{color: palette.Green}}>{item.time}</Label>
                            <BodyTwo sx={{color: palette.Black}}>{item.overview}</BodyTwo>
                        </Stack>
                    </Stack>
                ))
            }</Stack>
        </TodayEvent> 
        <Stack>
            
        </Stack>
        </Box>
    </Layout>
    )
}