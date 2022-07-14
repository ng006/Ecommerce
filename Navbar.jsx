import Badge from '@mui/material/Badge';
import { Search } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import { ShoppingBag } from '@mui/icons-material';

const Container = styled.div`
 height: 60px;
`
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
`

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`;

const SearchContainer = styled.div`
border: 1px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
`;

const Input = styled.input`
`;

const Language = styled.span`
font-size: 14px;
cursor: pointer;
`;

const Center = styled.div`
flex: 1;
`;

const Logo = styled.h1`
font-weigth: bold;
text-align: center;

`;

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`;

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin: 10px;
`;

const navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search></Search>
          </SearchContainer>
        </Left>
        <Center><Logo>AMA.</Logo></Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign In</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingBag/>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>

    </Container>
  )
}

export default navbar
