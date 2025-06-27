import { IconButton, TextField } from "@mui/material";
import { Container, Header, ListingWrapper, Search, Card, SearchWrapper, IconWrapper, CardImgWrapper, CardDetailWrapper, CardImg, CardAvatar, CardAvatarWrapper, CardNameWrapper, CharacterNameWrapper, ButtonWrapper } from "./dashboardStyles";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import SortIcon from '@mui/icons-material/Sort';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const obj = [
  {
    id: 244,
    Name: "shiv",
    image: "https://dummyimage.com/300.png/09f/fff"
  },
  {
    id: 245,
    Name: "shivsdfsam",
    image: "https://imgs.search.brave.com/1YW0gqzmuQQlIRdcV7SYPdnmL4QHHpVcqmUWJHigh78/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZnJlZWltYWdl/cy5jb20vdmFyaWFu/dHMvdmZkR3d4d0VE/V3V3aHlyRVhQSGRF/c25vLzYyNGYwZGMx/ZGZmOWJkY2NhYjAz/MmY5M2MzM2U3OWRl/Nzg0ODE3NzBlNzll/MjFkM2IwNDY5ZGFm/NTFmMDI3OTc"

  }, {
    id: 246,
    Name: "shivdfsam",
    image: "https://imgs.search.brave.com/m3kwLut_K13DFyh-_Fi-bvYcjm_54S9RAepDi40ancg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZGFwcGVyY2FkYXZl/ci5jb20vY2RuL3No/b3AvZmlsZXMvMTgz/MjVhNzItYmRlYy00/NjEwLTg5MDAtMGI5/YWYyZGI3ODllLnBu/Zz92PTE3NDc0MzUw/MTcmd2lkdGg9MzIw"

  }, {
    id: 247,
    Name: "shivsdfam",
    image: "https://imgs.search.brave.com/SX0pqAh7XyP0J0ENTUcX2skMAGufbIhD0nMP4vmUc6k/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9j/bGFzc2ljLWR1bW15/LXdpdGgtZGlmZmVy/ZW50LXBvc3R1cmVz/XzIzLTIxNDc5MTQx/MDguanBnP3NlbXQ9/YWlzX2h5YnJpZCZ3/PTc0MA"

  }, {
    id: 248,
    Name: "shivasdfsdm",
    image: "https://imgs.search.brave.com/Zv3EgJ5po6DdGl-hKT3Ov4T21FTnOy33vWk86pWgatk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM4/NzEwNjk5L3Bob3Rv/L21peGVkLXJhY2Ut/YmFieS1ib3ktc3Vj/a2luZy1wYWNpZmll/ci5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9WjhZSENRb0kw/bk4yMHpqMmVnXzB0/a0NVX2lGRTNaU2JB/eWtSM2NxQXNzcz0"

  }, {
    id: 249,
    Name: "shivaxvxm",
    image: "https://imgs.search.brave.com/dIIohreJFRl71WxZlm-q9WJXxri6nQDLOTi8XBgDwYY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOS8w/My8yMS8wOS8yMS9k/dW1teS00MDcwNjAz/XzY0MC5qcGc"

  }, {
    id: 25,
    Name: "shivamAsws",
    image: "https://imgs.search.brave.com/WXmgJHvMWmp8JOa9nzVANq4cVFe0AaQhB3eoVfCNaqU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/ZGFwcGVyY2FkYXZl/ci5jb20vY2RuL3No/b3AvZmlsZXMvQWxh/bi1IYWxmLUFuYXRv/bWljYWwtRHVtbXku/cG5nP3Y9MTc0NzQz/NzQ3NSZ3aWR0aD0z/MjA"

  }, {
    id: 255,
    Name: "archit",
    image: "https://imgs.search.brave.com/m3fjuiOLLpVudPf3wjrTWVrl3YSg1NkTlQrQ1ZsMAzA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzE2MTc1MDQxL3Iv/aWwvNjNjYjZjLzE3/NzY2Mzk4ODEvaWxf/NjAweDYwMC4xNzc2/NjM5ODgxXzhkcjEu/anBn"

  }, {
    id: 235,
    Name: "dev",
    image: "https://imgs.search.brave.com/H1Jf6RtXbXll8CzuoBUjA8nK4eoaQArXinT87jATBS8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDkv/NTg0LzY1Ny9zbWFs/bC90aGUtd29vZGVu/LWR1bW15LXNpdHMt/b24td2hpdGUtYmFj/a2dyb3VuZC1mcmVl/LXBob3RvLmpwZw"

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
        <IconWrapper><FormatListBulletedIcon fontSize="large" /></IconWrapper>
        <IconWrapper><SortIcon fontSize="large" /></IconWrapper>

      </Header>
      <ListingWrapper>
        {
          obj.map((item, index) => {
            return (
              <Card key={index}>
                <CardImgWrapper>{
                  <CardImg src={item.image} />
                } </CardImgWrapper>


                <CardDetailWrapper>
                  <CardAvatarWrapper>
                    <CardAvatar src={item.image}></CardAvatar>
                  </CardAvatarWrapper>

                  <CardNameWrapper>
                    <CharacterNameWrapper alignItem="flex-end" fontWeight="bold" fontcolor="blue">{item.Name}</CharacterNameWrapper>

                    <CharacterNameWrapper fontcolor="grey">neeche</CharacterNameWrapper>
                  </CardNameWrapper>

                </CardDetailWrapper><ButtonWrapper><ShoppingCartIcon cursor="pointer" onClick={() => window.alert("hello")}></ShoppingCartIcon><DeleteIcon cursor="pointer" onClick={() => window.alert("hello")}></DeleteIcon></ButtonWrapper></Card>)
          })}

      </ListingWrapper>


    </Container>
  );
};

export default Dashboard;
