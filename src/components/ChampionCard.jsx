import { ChampCardDetails, ChampCardFooter, ChampCardHeader, ChampCardWrapper, ChampDetailsWrapper, ChampLeftSide, ChampRightSide, ChampTitle, CloseButton, Img, Info, Value } from "../screens/dashboardStyles";
import CloseIcon from '@mui/icons-material/Close';
import { Button } from "@mui/material";
import { useFavourites } from "../context/FavouriteContext";

const ChampionCard = ({ champions, onClose }) => {
    const { favourites, addToFavourites, removeFromFavourites } = useFavourites();

    return (
        <>
            {champions.map((item, index) => {
                const isFav = favourites.some((fav) => fav.id === item.id)
                return (
                <ChampCardWrapper key={index}>
                    <ChampCardHeader>
                        <ChampTitle>{item.name}</ChampTitle>
                        <CloseButton>
                            <CloseIcon onClick={onClose} />
                        </CloseButton>
                    </ChampCardHeader>
                    <ChampCardDetails>
                        <ChampLeftSide display="flex" flexDirection="column" flex="0.5" alignItems="baseline" justifyContent="space-evenly">
                            <ChampDetailsWrapper fontSize="16px"  marginLeft="8px">
                                <Info>armor:</Info><Value >{item.armor}</Value>
                            </ChampDetailsWrapper>
                            <ChampDetailsWrapper marginLeft="8px">
                                <Info>attackdamage:</Info><Value>{item.attackdamage}</Value>
                            </ChampDetailsWrapper>
                            <ChampDetailsWrapper marginLeft="8px">
                                <Info>attackrange:</Info><Value>{item.attackrange}</Value>
                            </ChampDetailsWrapper>
                            <ChampDetailsWrapper marginLeft="8px">
                                <Info>hp:</Info><Value>{item.hp}</Value>
                            </ChampDetailsWrapper>
                            <ChampDetailsWrapper marginLeft="8px">
                                <Info>movespeed:</Info><Value>{item.movespeed}</Value>
                            </ChampDetailsWrapper>
                        </ChampLeftSide>
                        <ChampRightSide display="flex" flexDirection="column" flex="0.5" alignItems="anchor-center" justifyContent="flex-start" >
                            <ChampDetailsWrapper fontSize="16px"  marginRight="35px" marginBottom="28px" marginTop="34px" marginLeft="50px">
                                <Info>Spell Block:</Info><Value >{item.spellblock}</Value>
                            </ChampDetailsWrapper>
                            <ChampDetailsWrapper marginRight="35px" marginLeft="50px" marginTop="7px">
                                <Info>HP Regen:</Info><Value >{item.hpregen}</Value>
                            </ChampDetailsWrapper>
                            <ChampDetailsWrapper marginRight="35px" marginTop="41px" marginLeft="50px">
                                <Img><img src={item.image_url} alt="image"></img></Img>
                            </ChampDetailsWrapper>
                        </ChampRightSide>
                    </ChampCardDetails>
                    <ChampCardFooter>
                            {isFav ? (
                                <Button variant="outlined" onClick={() => removeFromFavourites(item.id)}>Remove from fav</Button>
                            ) : (<Button variant="outlined" onClick={() => addToFavourites(item)}>Add to fav</Button>
                            )}
                    </ChampCardFooter>
                </ChampCardWrapper>
                )
            })}

        </>
    )
}

export default ChampionCard;
