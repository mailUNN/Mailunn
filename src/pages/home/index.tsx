import { AppBar, Box, Divider, Stack, Tooltip } from "@mui/material";
import {
  BodyOne,
  HeaderFive,
  HeaderFour,
  HeaderOne,
  HeaderSix,
  HeaderThree,
  HeaderTwo,
  Label,
} from "../../shared/text";
import Layout from "../../layouts";
import { Data } from "../../mockData/homePageMockData";
import styled from "@emotion/styled";
import { BodyTwo, Display } from "../../shared/text";
import { palette } from "../../shared/palette";
import HomepageHeaderBackgroundImg from "../../iconAndAssets/HomePageHeaderImg.png";
import HomepageHeaderBackgroundMobile from "../../iconAndAssets/HomePageHeaderMobile.png";

const Header = styled.section`
    background: url(${HomepageHeaderBackgroundImg});
    background-size: cover;
    height: auto;
    width: 1440px;
    position: relative;
    top: 0px;
    padding: 100px;
    z-index: -1;
    @media (max-width: 425px) {
      background: url(${HomepageHeaderBackgroundMobile});
      background-size: cover;
      width: 430px;
      height: 520px;
      padding: 0px;
    }
  `;
  const HeroInfoContainer = styled.section`
    margin-left: -30px;
    padding: 10px;
    color: ${palette.White};
    position: relative;
    top: 10px;
    @media (max-width: 425px) {
      margin-left: 16px;
      top: 108px;
      padding: 0px;
    }
  `;
  const TodayEvent = styled.section`
    color: ${palette.Black};
    background: #f2f8f7;
    width: 90%;
    height: 90%;
    margin-top: 20px;
    padding: 20px;
    margin: auto;
    margin-bottom: 30px;
    @media (max-width: 425px) {
      width: 398px;
      height: 165px;
      margin-top: 30px;
    }
  `;
  const DarkButton = styled.button`
    width: 203px;
    padding: 10px 32px 10px 32px;
    background: #015e4d;
    border: none;
    margin-top: 80px;
    color: #ffffff;
    @media (max-width: 425px) {
      margin-top: 40px;
      font-size: 14px;
      width: 170px;
      height: 44px;
    }
  `;
  const TodayEventFirstWrap = styled.section`
    display: flex;
    justify-content: space-between;
    @media (max-width: 425px) {
      justify-content: center;
      gap: 40%;
      margin-bottom: 10px;
    }
  `;
  const TodayEventSecondWrap = styled.section`
    display: flex;
    justify-content: space-between;
    gap: 20px;
    @media (max-width: 425px) {
      #todayImgs {
        width: 100px;
        height: 100px;
      }
    }
  `;
  const TodayAndTrending = styled.section`
    display: flex;
    margin-left: 50px;
    gap: 20px;
    @media(max-width: 425px){
        margin-left: 16px;
    }
  `
const LeftSide = styled.section`
`

export const Homepage = () => {
  const data = Data;
  let word = "Latest";
  let word2 = "View all latest";
  return (
    <Layout>
      <Box>
        <Header>
          <HeroInfoContainer>
            <BodyTwo sx={{ letterSpacing: 3, mb: 2, fontWeight: 600 }}>
              FEATURED
            </BodyTwo>
            <Display sx={{ width: "999px" }}>
              Launching Our School's Exclusive Email Newsletter for a Closer
              Community.
            </Display>
            <BodyTwo sx={{ mt: 3, display: "flex", gap: 1 }}>
              By{" "}
              <BodyTwo sx={{ color: palette.Yellow }}>
                Emmanuel and Terry{" "}
              </BodyTwo>
              | December 23, 2023{" "}
            </BodyTwo>
            <BodyOne sx={{ mt: 3 }}>
              Stay Informed, Stay Connected: Your Gateway to UNN and UNEC Campus
              <br /> Updates, Events, and Exciting Announcements!
            </BodyOne>
            <DarkButton>Read More</DarkButton>
          </HeroInfoContainer>
        </Header>
        <TodayEvent>
          <TodayEventFirstWrap>
            <HeaderFour>Today’s Events</HeaderFour>
            <BodyTwo
              sx={{
                textDecoration: "underline",
                color: palette.Green,
                cursor: "pointer",
                mr: 5,
              }}
            >
              View all events
            </BodyTwo>
          </TodayEventFirstWrap>
          <TodayEventSecondWrap>
            {data.map((item) => (
              <Stack direction={"column"}>
                <Tooltip title={item.overview}>
                  <img
                    id="todayImgs"
                    src={item.img}
                    width={140}
                    height={120}
                    style={{ borderRadius: "5px" }}
                  />
                </Tooltip>
                <HeaderFive>{item.title}</HeaderFive>
              </Stack>
            ))}
          </TodayEventSecondWrap>
        </TodayEvent>
        <Divider variant="middle" />
        <TodayAndTrending>
          <HeaderThree sx={{ color: palette.Green }}>Latest</HeaderThree>
          <HeaderThree sx={{ color: palette.Grey, fontWeight: 400 }}>
            Trending
          </HeaderThree>
        </TodayAndTrending>
        <Divider variant="middle" />
        <LeftSide>
          <HeaderTwo>Popular</HeaderTwo>
        </LeftSide>
      </Box>
    </Layout>
  );
};
