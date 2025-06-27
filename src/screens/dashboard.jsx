import { IconButton, TextField } from "@mui/material";
import { Container, Header, ListingWrapper, Search, Card, SearchWrapper, IconWrapper } from "./dashboardStyles";
import  FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SortIcon from '@mui/icons-material/Sort';
const obj = [
  {
    id: 244,
    Name: "shiv",
    adress: ",mbchjcgas"
  },
  {
    id: 245,
    Name: "shivsdfsam",
    adress: ",mbchjcgas"
  }, {
    id: 246,
    Name: "shivdfsam",
    adress: ",mbchjcgas"
  }, {
    id: 247,
    Name: "shivsdfam",
    adress: ",mbchjcgas"
  }, {
    id: 248,
    Name: "shivasdfsdm",
    adress: ",mbchjcgas"
  }, {
    id: 249,
    Name: "shivaxvxm",
    adress: ",mbchjcgas"
  }, {
    id: 25,
    Name: "shivamAsws",
    adress: ",mbchjcgas"
  }, {
    id: 255,
    Name: "archit",
    adress: ",mbchjcgas"
  }, {
    id: 235,
    Name: "dev",
    adress: ",mbchjcgas"
  },
];

const Dashboard = () => {

  return (
    <Container>
      <Header>
        <Search>
         <SearchWrapper>
         <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
        />
        </SearchWrapper>
        </Search>
        <IconWrapper><FormatListBulletedIcon fontSize="large"/></IconWrapper>
        <IconWrapper><SortIcon fontSize="large"/></IconWrapper>
        
      </Header>
      <ListingWrapper>
        {
          obj.map((item, index) => <Card>
            <p key={index}>{item.Name}</p>
            <p key={index}>{item.adress}</p>
          </Card>)}

      </ListingWrapper>


    </Container>
  );
};

export default Dashboard;
