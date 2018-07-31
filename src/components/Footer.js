import React from 'react';
import styled from 'styled-components';

const MainFooter = styled.footer`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 50px auto 0;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;

  > p {
    font-size: 0.8rem;

    a {
      color: hsl(219, 79%, 60%);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const Footer = () => (
  <MainFooter>
    <p>
      Made by <a href="https://github.com/dgittings">Daniel Gittings</a>
    </p>
    <p>
      <a href="https://github.com/dgittings">GitHub</a>
    </p>
  </MainFooter>
);

export default Footer;
