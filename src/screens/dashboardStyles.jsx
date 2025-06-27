import styled from "styled-components";

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
export const CharacterNameWrapper = styled.div`
  display:flex;
  ${'' /* flex-direction:row; */}
  flex:0.5;
  align-items:${(props) => props.alignItem};
  font-weight:${(props) => props.fontWeight};
  color:${(props) => props.fontColor};
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

