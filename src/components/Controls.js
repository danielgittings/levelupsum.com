import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.fieldset`
  border: none;
  margin: 0 0 50px;
  padding: 0;
`;

const ParagraphsOptions = styled.div`
  display: flex;
  justify-content: center;
`;

const LabelButton = styled.label`
  cursor: pointer;
  display: block;
  padding: 10px 30px;

  &:hover {
    background-color: red;
    color: white;
  }
`;

const ControlIntruction = styled.legend`
  font-size: 22px;
  display: block;
  text-align: center;
  padding: 0 0 30px;
`;

const HiddenRadio = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;

  &:checked + label {
    background-color: green;
    color: white;
  }
`;

const Controls = props => (
  <form onChange={props.setNumberOfParagraphs}>
    <ButtonWrapper>
      <ControlIntruction>Select number of paragraphs</ControlIntruction>

      <ParagraphsOptions>
        <div>
          <HiddenRadio id="input1" type="radio" name="paragraphs" value="1" />
          <LabelButton htmlFor="input1">1</LabelButton>
        </div>

        <div>
          <HiddenRadio id="input2" type="radio" name="paragraphs" value="2" />
          <LabelButton htmlFor="input2">2</LabelButton>
        </div>

        <div>
          <HiddenRadio id="input3" type="radio" name="paragraphs" value="3" />
          <LabelButton htmlFor="input3">3</LabelButton>
        </div>

        <div>
          <HiddenRadio id="input4" type="radio" name="paragraphs" value="4" />
          <LabelButton htmlFor="input4">4</LabelButton>
        </div>

        <div>
          <HiddenRadio id="input5" type="radio" name="paragraphs" value="5" />
          <LabelButton htmlFor="input5">5</LabelButton>
        </div>
      </ParagraphsOptions>
    </ButtonWrapper>
  </form>
);

export default Controls;
