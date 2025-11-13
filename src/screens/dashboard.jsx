import { Autocomplete, Box, CircularProgress, Modal, TextField } from "@mui/material";
import { Container, Header, ListingWrapper, Search, Card, SearchWrapper, IconWrapper, CardImgWrapper, CardDetailWrapper, CardImg, CardAvatar, CardAvatarWrapper, CardNameWrapper, CharacterNameWrapper, ButtonWrapper, LoaderWrapper, Sort, SortInfo, SortTitle, HoverWrapper } from "./dashboardStyles";
import SortIcon from '@mui/icons-material/Sort';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useEffect, useState, useMemo } from "react";
import ChampionCard from "../components/ChampionCard";
import useFetchChampion from "../hooks/usefetchChampion";
import { ListAlt } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useFavourites } from "../context/FavouriteContext";
import Nocturne from "../assets/sounds/Nocturne.mp3";
import alistar from "../assets/sounds/alistar.mp3";
import ahri from "../assets/sounds/ahri.mp3";
import viego from "../assets/sounds/viego.mp3";
import yone from "../assets/sounds/yone.mp3";
import Taliyah from "../assets/sounds/Taliyah.mp3";
import smolder from "../assets/sounds/smolder.mp3";
import seraphine from "../assets/sounds/seraphine.mp3";
import rammus from "../assets/sounds/rammus.mp3";
import nilah from "../assets/sounds/nilah.mp3";
import MissFortune from "../assets/sounds/Miss Fortune.mp3";
import mel from "../assets/sounds/mel.mp3";
import MasterYi from "../assets/sounds/Master Yi.mp3";
import LeeSin from "../assets/sounds/Lee Sin.mp3";
import kayn from "../assets/sounds/kayn.mp3";
import katarina from "../assets/sounds/katarina.mp3";
import kalista from "../assets/sounds/kalista.mp3";
import Jax from "../assets/sounds/Jax.mp3";
import JaarvanIV from "../assets/sounds/Jarvan IV.mp3";
import Irelia from "../assets/sounds/Irelia.mp3";
import gwen from "../assets/sounds/gwen.mp3";
import Graves from "../assets/sounds/Graves.mp3";
const Dashboard = () => {
  const { data, loading, setData } = useFetchChampion();
  const [inputValue, setInputValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedChampion, setSelectedChampion] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [openSortModal, setSortModal] = useState(false);
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [debouncedInputValue, setdebouncedInputValue] = useState('');
  const { favourites, addToFavourites } = useFavourites();
  const navigate = useNavigate();

  const soundMap = {
    Nocturne: Nocturne,
    Alistar: alistar,
    Ahri: ahri,
    Viego: viego,
    Yone: yone,
    Taliyah: Taliyah,
    Smolder: smolder,
    Seraphine: seraphine,
    Rammus: rammus,
    Nilah: nilah,
    MissFortune: MissFortune,
    Mel: mel,
    MasterYi: MasterYi,
    LeeSin: LeeSin,
    Kayn: kayn,
    Katarina: katarina,
    Kalista: kalista,
    Jax: Jax,
    JaarvanIV: JaarvanIV,
    Irelia: Irelia,
    Gwen: gwen,
    Graves: Graves,
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setdebouncedInputValue(inputValue);
    }, 300);
    return () => clearTimeout(timer);
  }, [inputValue]);

  const details = useMemo(() => {
    if (!debouncedInputValue) return [];
    return data.filter((r) =>
      r.name.toLowerCase().includes(debouncedInputValue.toLowerCase())
    );
  }, [debouncedInputValue, data]);

  const detailsMap = useMemo(() => {
    const map = {}
    data.forEach((r) => {
      map[r.name.toLowerCase().trim()] = r
    })
    return map;
  }, [data]);

  const removeButton = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  }

  const handleCloseButton = () => {
    setOpenModal(false);
    setSortModal(false)
  }

  const handleSortButton = () => {
    setSortModal(!openSortModal);
  }

  const handleSort = (type, order) => {
    setSortBy(type)
    setSortOrder(order)
  }
  const sortAscending = useMemo(() => {
    if (!sortBy) return data;
    return [...data].sort((a, b) => {
      if (sortBy === "name") {
        return sortOrder === "asc" ?
          a.name.localeCompare(b.name) :
          b.name.localeCompare(a.name)
      }

      if (sortBy === "attackDamage") {
        return sortOrder === "asc" ?
          a.attackdamage - b.attackdamage :
          b.attackdamage - a.attackdamage
      }
      return 0;
    })
  }, [data, sortBy, sortOrder]);

  const favButton = () => {
    navigate('/fav', { state: { favourites } });
  };
  useEffect(() => {
    console.log('Favourites updated:', favourites);
  }, [favourites])
  return (
    <Container>
      <Header>
        <Search>
          <SearchWrapper>
            <Autocomplete
              freeSolo
              options={details}
              getOptionLabel={(details) => {
                if (typeof details === "string") return details;
                if (details && typeof details === "object" && details.name) return details.name;
                return "";
              }}
              inputValue={inputValue}
              onInputChange={(e, newValue) => {
                setInputValue(newValue);
              }}
              value={selectedValue}
              onChange={(e, newValue) => {
                if (newValue && newValue.name) {
                  setOpenModal(false);
                  setTimeout(() => {
                    setSelectedChampion(newValue);
                    setOpenModal(true);
                  },)
                } else {
                  setSelectedChampion(null);
                  setOpenModal(false);
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  const key = inputValue.toLowerCase().trim();
                  const match = detailsMap[key];

                  if (match) {
                    e.preventDefault()
                    setSelectedChampion(match)
                    setSelectedValue(match)
                    setOpenModal(true);
                  } else {
                    setOpenModal(false)
                  }
                }
              }}
              renderInput={(params) => (
                <TextField {...params}
                  id="outlined-basic"
                  variant="outlined"
                  fullWidth
                  label="Search"
                />
              )}
            />
          </SearchWrapper>
        </Search>
        <IconWrapper>
          <HoverWrapper><ListAlt onClick={favButton} fontSize="large" /></HoverWrapper>
        </IconWrapper>
        <IconWrapper>
          <HoverWrapper><SortIcon onClick={handleSortButton} style={{ cursor: "pointer" }} fontSize="large" /></HoverWrapper>
        </IconWrapper>
        {openSortModal && (
          <Modal
            open={openSortModal}
            onClose={() => setSortModal(false)}>
          <Sort >
            <SortTitle>Sort Items</SortTitle>
            <SortInfo onClick={() => handleSort("name", "asc")} style={{ cursor: "pointer" }}>A to Z</SortInfo>
            <SortInfo onClick={() => handleSort("name", "desc")} style={{ cursor: "pointer" }}>Z to A</SortInfo>
            <SortInfo onClick={() => handleSort("attackDamage", "desc")} style={{ cursor: "pointer" }}>More Attack Damage First</SortInfo>
            <SortInfo onClick={() => handleSort("attackDamage", "asc")} style={{ cursor: "pointer" }}>Less Attack Damage First</SortInfo>
            <SortInfo onClick={handleCloseButton} style={{ cursor: "pointer" }}>Close</SortInfo>
            </Sort>
          </Modal>

        )};

      </Header>
      {loading ? <LoaderWrapper><CircularProgress /></LoaderWrapper> :
        <ListingWrapper>
          {(sortAscending || data).map((item, index) => {
            return (
              <Card key={index}>
                <CardImgWrapper>{
                  <CardImg src={item.big_image_url}
                    onClick={() => {
                      const soundFile = soundMap[item.name];
                      const audio = new Audio(soundFile);
                      audio.volume = 0.4;
                      audio.play();
                    }}
                  />
                }
                </CardImgWrapper>
                <CardDetailWrapper flex="0.2">
                  <CardAvatarWrapper flex="0.3">
                    <CardAvatar src={item.
                      image_url
                    }></CardAvatar>
                  </CardAvatarWrapper>
                  <CardNameWrapper>
                    <CharacterNameWrapper alignItems="flex-end" fontWeight="bold" color="blue">{item.
                      name
                    }
                    </CharacterNameWrapper>
                    <CharacterNameWrapper color="grey">Armor: {item.
                      armor}</CharacterNameWrapper>
                  </CardNameWrapper>
                  </CardDetailWrapper>
                  <ButtonWrapper>
                  <HoverWrapper>
                    <ShoppingCartIcon cursor="pointer" onClick={() => addToFavourites(item)}></ShoppingCartIcon></HoverWrapper>
                  <HoverWrapper><DeleteIcon cursor="pointer" onClick={() => removeButton(item.id)}></DeleteIcon>
                  </HoverWrapper>
                  </ButtonWrapper>
                </Card>
              )
            })}
          <Modal
            open={openModal}
            onClose={() => setOpenModal(false)}
            aria-labelledby="champion-modal"
            aria-describedby="champion-detail-card"
          >
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                bgcolor: 'background.paper',
                boxShadow: 24,
                p: 2,
                borderRadius: "8px",
                maxHeight: "90vh",
                overflowY: "auto"
              }}
            >
              {selectedChampion && (
                <ChampionCard champions={[selectedChampion]} onClose={handleCloseButton} />
              )}
            </Box>
          </Modal>
        </ListingWrapper>
      }
    </Container>
  );
};

export default Dashboard;
