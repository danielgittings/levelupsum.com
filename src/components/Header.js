import React from 'react';
import styled from 'styled-components';

const MainHeader = styled.header`
  text-align: center;
  padding: 150px 0 75px;

  > div {
    max-width: 800px;
    margin: 0 auto;
  }
`;

const Title = styled.h1`
  margin-top: 0;
  font-size: 50px;
`;

const Subheading = styled.h3`
  font-size: 28px;
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
