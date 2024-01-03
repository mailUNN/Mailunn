import { Typography, styled } from "@mui/material";

export const Display = styled(Typography)`
  font-size: 56px;
  line-height: 64px;
  font-weight: 700;
  font-family: R.dm sans;
  @media (max-width: 425px) {
    font-size: 24px;
    line-height: 32px;
    width: 100%;
  }
`;
export const HeaderOne = styled(Typography)`
  font-size: 48px;
  line-height: 64px;
  font-weight: 700;
  font-family: R.dm sans;
`;
export const HeaderTwo = styled(Typography)`
  font-size: 36px;
  line-height: 48px;
  font-weight: 700;
  font-family: R.dm sans;
  @media (max-width: 425px) {
    font-size: 24px;
    line-height: 48px;
  }
`;
export const HeaderThree = styled(Typography)`
  font-size: 28px;
  line-height: 40px;
  font-weight: 700;
  font-family: R.dm sans;
  @media (max-width: 425px) {
    font-size: 14px;
    line-height: 48px;
  }
`;
export const HeaderFour = styled(Typography)`
  font-size: 24px;
  line-height: 32px;
  font-weight: 400;
  font-family: R.dm sans;
  @media (max-width: 425px) {
    font-size: 14px;
    line-height: 32px;
    font-weight: 700;
  }
`;
export const HeaderFive = styled(Typography)`
  font-size: 20px;
  line-height: 32px;
  font-weight: 700;
  font-family: R.dm sans;
  @media (max-width: 425px) {
    font-size: 12px;
    line-height: 16px;
    font-weight: 500;
  }
`;
export const HeaderSix = styled(Typography)`
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  font-family: R.dm sans;
`;
export const BodyOne = styled(Typography)`
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  font-family: inter;
`;

export const BodyTwo = styled(Typography)`
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  font-family: inter;
  @media (max-width: 425px) {
    font-size: 12px;
    line-height: 13px;
  }
`;
export const Label = styled(Typography)`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  font-family: inter;
  @media (max-width: 425px) {
    font-size: 8px;
    line-height: 15px;
    font-weight: 600;
  }
`;
