import React from 'react';
import styled from 'styled-components';

const MainHeader = styled.header`
  text-align: center;
  padding: 150px 0 100px;
  background-color: hsl(219, 79%, 72%);

  > div {
    max-width: 800px;
    margin: 0 auto;
  }
`;

const Title = styled.h1`
  margin: 0 0 30px;
  font-size: 100px;
  font-family: 'Luckiest Guy';
  font-weight: 400;
  text-shadow: 8px 8px 3px rgba(0, 0, 0, 0.1);
  color: white;
`;

const Subheading = styled.h3`
  font-size: 28px;
  font-family: 'Open Sans';
`;

const Header = () => (
  <MainHeader>
    <div>
      <Title>Gamer ipsum</Title>
      <Subheading>Placeholder text for gamer types</Subheading>
    </div>
  </MainHeader>
);

export default Header;
