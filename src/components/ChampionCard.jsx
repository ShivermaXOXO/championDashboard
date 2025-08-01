import { ChampCardDetails, ChampCardFooter, ChampCardHeader, ChampCardWrapper, ChampDetailsWrapper, ChampLeftSide, ChampRightSide, ChampTitle, CloseButton, Img, Info, Value } from "../screens/dashboardStyles";
import CloseIcon from '@mui/icons-material/Close';
import { Button } from "@mui/material";
const ChampionCard = ({ champions, onClose }) => {

    return (
        <>
            {champions.map((item, index) => (
                <ChampCardWrapper key={index}>
                    <ChampCardHeader>
                        <ChampTitle>{item.name}</ChampTitle>
                        <CloseButton>
                            <CloseIcon onClick={onClose} />
                        </CloseButton>
                    </ChampCardHeader>
                    <ChampCardDetails>
                        <ChampLeftSide display="flex" flexDirection="column" flex="0.5" alignItems="baseline" justifyContent="space-evenly">
                            <ChampDetailsWrapper fontSize="16px" Bg="white" ml="8px">
                                <Info>armor:</Info><Value >{item.armor}</Value>
                            </ChampDetailsWrapper>
                            <ChampDetailsWrapper ml="8px">
                                <Info>attackdamage:</Info><Value>{item.attackdamage}</Value>
                            </ChampDetailsWrapper>
                            <ChampDetailsWrapper ml="8px">
                                <Info>attackrange:</Info><Value>{item.attackrange}</Value>
                            </ChampDetailsWrapper>
                            <ChampDetailsWrapper ml="8px">
                                <Info>hp:</Info><Value>{item.hp}</Value>
                            </ChampDetailsWrapper>
                            <ChampDetailsWrapper ml="8px">
                                <Info>movespeed:</Info><Value>{item.movespeed}</Value>
                            </ChampDetailsWrapper>
                        </ChampLeftSide>
                        <ChampRightSide display="flex" flexDirection="column" flex="0.5" alignItems="end" justifyContent="flex-start" backgroundColor="orange">
                            <ChampDetailsWrapper fontSize="16px" Bg="white" mr="35px" mb="28px" mt="34px" ml="50px">
                                <Info>Spell Block:</Info><Value >{item.spellblock}</Value>
                            </ChampDetailsWrapper>
                            <ChampDetailsWrapper mr="35px" ml="50px" mt="7px">
                                <Info>HP Regen:</Info><Value >{item.hpregen}</Value>
                            </ChampDetailsWrapper>
                            <ChampDetailsWrapper mr="35px" mt="41px" ml="50px">
                                <Img><img src={item.image_url} alt="image"></img></Img>
                            </ChampDetailsWrapper>
                        </ChampRightSide>
                    </ChampCardDetails>
                    <ChampCardFooter>
                        <Button variant="outlined">Remove from fav</Button>
                        <Button variant="outlined">Add to fav</Button>
                    </ChampCardFooter>
                </ChampCardWrapper>
            ))}

        </>
    )
}

export default ChampionCard;
