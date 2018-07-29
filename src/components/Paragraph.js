import React from 'react';
import styled from 'styled-components';
import Sentence from './Sentence';

const PlaceholderParagraph = styled.p`
  line-height: 30px;
  font-size: 1.25rem;
  color: #333333;
  max-width: 40rem;
  margin: 0 auto;
  padding: 1rem 0;
`;

const Paragraph = ({ words, paragraph }) => (
  <PlaceholderParagraph>
    {words.map((item, index) => (
      <Sentence key={`paragraph-${paragraph}-sentence${index}`} words={item} />
    ))}
  </PlaceholderParagraph>
);

export default Paragraph;
