import React from 'react';
import styled from 'styled-components';
import Sentence from './Sentence';

const PlaceholderParagraph = styled.p`
  line-height: 28px;
  font-size: 1.25rem;
  color: #333333;
  max-width: 40rem;
  margin: 2rem auto;
`;

const Paragraph = ({ words, paragraph }) => (
  <PlaceholderParagraph>
    {words.map((item, index) => (
      <Sentence key={`paragraph-${paragraph}-sentence${index}`} words={item} />
    ))}
  </PlaceholderParagraph>
);

export default Paragraph;
