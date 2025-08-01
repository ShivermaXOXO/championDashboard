import { Autocomplete, Box, CircularProgress, Modal, TextField } from "@mui/material";
import { Container, Header, ListingWrapper, Search, Card, SearchWrapper, IconWrapper, CardImgWrapper, CardDetailWrapper, CardImg, CardAvatar, CardAvatarWrapper, CardNameWrapper, CharacterNameWrapper, ButtonWrapper, LoaderWrapper } from "./dashboardStyles";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SortIcon from '@mui/icons-material/Sort';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useEffect, useState } from "react";
import { apiToken, SERVER_URL } from "../constants/apiConstants";
import ChampionCard from "../components/championCard";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedChampion, setSelectedChampion] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    setLoading(true);
    const url = `${SERVER_URL}?sort=armor&page=1&per_page=50&${apiToken}`;
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log("API Response:", data);
        setData(data);
      })
      .catch((error) => {
        console.error("Fetch Error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const details = data.filter(r =>
    r.name.toLowerCase().includes(inputValue.toLowerCase())
  )

  const handleCloseButton = () => {
    setOpenModal(false);
  }
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
                setSelectedValue(newValue || "");
                setSelectedChampion(newValue)
                setOpenModal(true);
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
        <IconWrapper><FormatListBulletedIcon fontSize="large" /></IconWrapper>
        <IconWrapper><SortIcon fontSize="large" /></IconWrapper>
      </Header>
      {loading ? <LoaderWrapper><CircularProgress /></LoaderWrapper> :
        <ListingWrapper>
        {
            data.map((item, index) => {
            return (
              <Card key={index}>
                <CardImgWrapper>{
                  <CardImg src={item.big_image_url
                  } />
                }
                </CardImgWrapper>
                <CardDetailWrapper>
                  <CardAvatarWrapper>
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
                    <ShoppingCartIcon cursor="pointer" onClick={() => window.alert("hello")}></ShoppingCartIcon>
                    <DeleteIcon cursor="pointer" onClick={() => window.alert("hello")}></DeleteIcon>
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
