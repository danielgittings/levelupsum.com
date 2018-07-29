import React from 'react';
import styled from 'styled-components';

const ControlsForm = styled.form`
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  padding: 50px;
  margin-bottom: 40px;
`;

const ButtonWrapper = styled.fieldset`
  border: none;
  margin: 0;
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
    background-color: hsl(219, 79%, 95%);
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
    background-color: hsl(219, 79%, 80%);
    color: white;
  }
`;

const Controls = props => (
  <ControlsForm onChange={props.setNumberOfParagraphs}>
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
  </ControlsForm>
);

export default Controls;
