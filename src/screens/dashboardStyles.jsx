import styled, { css } from "styled-components";

export const Container = styled.div`
  background-color: white;
  height: 100vh;
  display: flex;
  flex: 1;
  flex-direction: column;
  
`;

export const Header = styled.div`
display: flex;
flex: 0.1;
margin:5px;
`;


export const Search = styled.div`
display: flex;
flex: 0.8;
align-items: center;
justify-content: center;
`;

export const SearchWrapper = styled.div`
width:80%;
`;

export const IconWrapper = styled.div`

display: flex;
flex: 0.1;
justify-content:center;
align-items:center;
`;



export const ListingWrapper = styled.div`
    display: flex
;
    flex: 0.9;
    flex-wrap: wrap;
    justify-content: space-evenly;
    /* height: 500px; */
    overflow: auto;
  
`;
export const LoaderWrapper = styled.div`
    display: flex;
    flex: 0.9;
    align-items:center;
    justify-content: center;
    /* height: 500px; */
    
  
`;
export const Card = styled.div`
  width: 250px;
  height:450px;
  display:flex;
  flex-direction:column;
  border-radius: 12px;
  margin:20px 0;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
`;
export const CardImgWrapper = styled.div`
  
  display:flex;
  flex:0.7;
`;
export const CardDetailWrapper = styled.div`
  display:flex;
  flex:0.2;
`;
export const CardAvatarWrapper = styled.div`
  display:flex;
  flex-direction:row;
  flex:0.3;
  align-items:center;
  justify-content:center;
`;

export const CardNameWrapper = styled.div`
  display:flex;
  flex-direction:column;
  flex:0.7;
`;
export const CharacterNameWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !["display", "flex", "fontFamily", "alignItems", "justifyContent", "color"].includes(prop),
})`
  display:flex;
  flex:0.5;
  font-family:math;
  align-items:${(props) => props.alignItems};
  font-weight:${(props) => props.fontWeight};
  color:${(props) => props.color};
`;

export const CardAvatar = styled.img`
  height:40px;
  width:40px;
  border-radius:20px;
  src:${(props) => props.src}
`;

export const CardImg = styled.img`
height:330px;
width:250px;
src:${(props) => props.src}
`;

export const ButtonWrapper = styled.div`
  display:flex;
  justify-content: space-around;
  flex:0.1;
`;

export const ChampCardWrapper = styled.div`
  border-radius: 8px;
  height:400px;
  width:500px;
  display:flex;
  flex-direction:column;
  background:white;
`;

export const ChampCardHeader = styled.div`
display:flex;
flex:0.12;
justify-content:space-between;
  align-items:center;

`;

export const ChampTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: black;
  margin:5px;
`;

export const CloseButton = styled.button`
  font-size: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: black;
  margin:5px;


  &:hover {
    color: red;
  }
`;

export const ChampCardDetails = styled.div`

display:flex;
flex-direction:row;
flex:0.78;
`;

export const BaseComponent = css`
    display: ${(props) => props.display};
    flex-direction: ${(props) => props.flexDirection};
    flex: ${(props) => props.flex};
    align-items:${(props) => props.alignItems};
    justify-content: ${(props) => props.justifyContent};
    `;

export const ChampLeftSide = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !["display", "flexDirection", "flex", "alignItems", "justifyContent"].includes(prop),
})`
    ${BaseComponent}
    `;
export const ChampRightSide = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !["display", "flexDirection", "flex", "alignItems", "justifyContent"].includes(prop),
})`
    ${BaseComponent}
    `;

export const ChampDetailsWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !["display", "gap", "fontSize", "marginLeft", "marginRight", "marginBottom", "marginTop"].includes(prop),
})`
  display: ${(props) => props.display || "flex"};
  gap: ${(props) => props.gap || "8px"};
  font-size: ${(props) => props.fontSize};
  margin-left:${(props) => (props.marginLeft !== undefined ? props.marginLeft : "0px")};
  margin-right:${(props) => props.marginRight};
  margin-bottom:${(props) => (props.marginBottom !== undefined ? props.marginBottom : "0px")};
  margin-top:${(props) => (props.marginTop !== undefined ? props.marginTop : "0px")};
`;

export const Info = styled.span`

color:black;
  font-weight: 700;
`;

export const Value = styled.span`
  font-weight: 700;
`;

export const Img = styled.div`
  width:110px;
  justify-content:center;
  align-items:center;
`;

export const ChampCardFooter = styled.div`
display:flex;
flex:0.12;
justify-content:end;
gap:5px;
`;


