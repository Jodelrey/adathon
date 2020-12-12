import React from "react";
import styled from "styled-components";
import { FacebookCircle } from "@styled-icons/boxicons-logos/FacebookCircle";
import { InstagramWithCircle } from "@styled-icons/entypo-social/InstagramWithCircle";
import { LinkedinWithCircle } from "@styled-icons/entypo-social/LinkedinWithCircle";
import { VimeoWithCircle } from "@styled-icons/entypo-social/VimeoWithCircle";
import { SocialYoutubeCircular } from "@styled-icons/typicons/SocialYoutubeCircular";
import { TwitterWithCircle } from "@styled-icons/entypo-social/TwitterWithCircle";
import {Whatsapp} from "@styled-icons/remix-fill/Whatsapp"
import {MailWithCircle} from "@styled-icons/entypo-social/MailWithCircle"


const StyledFooter = styled.footer`
  font-family: "Oswald", Verdana, Geneva, Tahoma, sans-serif;
  width: 100%;
  height: 110px;
  padding: 20px 0;
  background-color: rgb(125, 48, 134);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  z-index: 300;

  @media (max-width: 1000px) {
   height: 170px; 
  }
`;

const SocialNetContainer = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-between;


  @media (max-width: 1000px) {
    flex-direction: column; 
    justify-content: center; 
    align-items: center; 
    width: 100%;
  }

`;

const SocialStyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 45%;
  @media (max-width: 1000px) {
    height: 40px
  }
  @media (max-width: 800px) {
    width: 60%;

  }
  
`;

const SMLink = styled.a`
  cursor: pointer;
  font-family: "Oswald", Verdana, Geneva, Tahoma, sans-serif;
  color: #f7f6e7;
  font-size: 15px;
  text-decoration: none;
  display: flex;
  @media (max-width: 500px) {
    font-size: 11px;
  }
  &:hover {
    text-decoration: none;
    color: #b8b0b0;
    transition: 0.3s;
  }
`;


const StyledFacebook = styled(FacebookCircle)`
  height: 30px;
`;

const StyledWhatsapp = styled(Whatsapp)`
  height: 30px;
`;

const StyledMail = styled(MailWithCircle)`
  height: 30px;
`;

const StyledInstagram = styled(InstagramWithCircle)`
  height: 30px;
`;

const StyledLinkedin = styled(LinkedinWithCircle)`
  height: 30px;
`;

const StyledTwitter = styled(TwitterWithCircle)`
  height: 30px;
`;

const StyledVimeo = styled(VimeoWithCircle)`
  height: 30px;
`;
const StyledYouTube = styled(SocialYoutubeCircular)`
  height: 37px;
  margin-top: -2px;

  @media (max-width: 1000px) {
    margin-left: -3px;
  }
`;


const Text = styled.p`
  font-size: 15px;
  padding: 0 10px;
  margin-bottom: 0;
  display: flex;
  text-align: center; 
  @media (max-width: 1000px) {
    padding: 3px 0; 
`;

const InfoContainer = styled(SocialNetContainer)`
  justify-content: center;
`;


const Link = styled(SMLink)`
  font-size: 12px;
  padding: 0 3px;
`;

const Footer = () => {


  return (
    <StyledFooter>
      <SocialNetContainer>
      <SocialStyledContainer>
          <SMLink target="_blank" href="https://www.facebook.com/mujeres2000">
            <StyledFacebook />
          </SMLink>
          <SMLink target="_blank" href="https://www.instagram.com/mujeres2000/">
            <StyledInstagram />
          </SMLink>
          <SMLink target="_blank" href="https://twitter.com/mujeres2000">
            <StyledTwitter />
          </SMLink>
          <SMLink
            target="_blank"
            href="https://www.linkedin.com/company/asociaci-n-civil-mujeres-2000"
          >
            <StyledLinkedin />
          </SMLink>
          </SocialStyledContainer>
          <SocialStyledContainer>
          <SMLink
            target="_blank"
            href="https://www.youtube.com/channel/UCSmaRNbXOXucP1UQ6G-dkng"
          >
            <StyledYouTube />
          </SMLink>
          <SMLink target="_blank" href="mailto: info@mujeres2000.org.ar">
            <StyledMail />
          </SMLink>


          <SMLink
            target="_blank"
            href="https://vimeo.com/mujeres2000"
          >
            <StyledVimeo />
          </SMLink>
          <SMLink target="_blank" href="tel: +549111557094754">
            <StyledWhatsapp />
          </SMLink>
          </SocialStyledContainer>
      </SocialNetContainer>

      <InfoContainer>
        <Text>Malabia 2106, piso 3"C" Capital Federal, Argentina</Text>
        <Text>Tel: (011)15-5709-4754</Text>
        <Text>info@mujeres2000.org.ar</Text>
      </InfoContainer>
    </StyledFooter>
  );
};

export default Footer;
