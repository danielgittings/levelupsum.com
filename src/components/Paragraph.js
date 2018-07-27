import React from 'react';
import Sentence from './Sentence';

const Paragraph = ({ words, paragraph }) => (
  <p>
    {words.map((item, index) => (
      <Sentence key={`paragraph-${paragraph}-sentence${index}`} words={item} />
    ))}
  
  </p>
);

export default Paragraph;
