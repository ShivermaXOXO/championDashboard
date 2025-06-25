import { IconButton, TextField } from "@mui/material";
import { Container, Header, ListingWrapper, Search, Menu, Filter, Card ,SearchWrapper, IconWrapper} from "./dashboardStyles";
import  FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SortIcon from '@mui/icons-material/Sort';
const obj = [
  {
    id: 244,
    Name: "shiv",

  },
  {
    id: 245,
    Name: "shivsdfsam",

  }, {
    id: 246,
    Name: "shivdfsam",

  }, {
    id: 247,
    Name: "shivsdfam",

  }, {
    id: 248,
    Name: "shivasdfsdm",

  }, {
    id: 249,
    Name: "shivaxvxm",

  }, {
    id: 25,
    Name: "shivamAsws",

  }, {
    id: 255,
    Name: "archit",

  }, {
    id: 235,
    Name: "dev",

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
          obj.map((item, index) => <Card>{
            <p key={index}>{item.Name}</p>
          }</Card>)}

      </ListingWrapper>


    </Container>
  );
};

export default Dashboard;
