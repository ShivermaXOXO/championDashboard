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
    background-color: blue;
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
  height:300px;
  border-radius: 12px;
  margin:20px 0;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  background-color: #fff;
`;
