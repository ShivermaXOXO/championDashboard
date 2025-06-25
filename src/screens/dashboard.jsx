import { Container, Header, ListingWrapper, Search, Menu, Filter, Card } from "./dashboardStyles";
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
        </Search>
        <Menu></Menu>
        <Filter></Filter>
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
