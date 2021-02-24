import React from 'react';
import styled from 'styled-components';
import TextInput from './components/TextInput';
import Button from './components/Button';

const mediumScreen = `@media (max-width: 830px)`;
const smallScreen = `@media (max-width: 430px)`;

const FilterRow = styled.div`
  padding: 30px;
  font-size: 24px;
  display: flex;

  ${mediumScreen} {
    flex-direction: column;
  }
`;


const Filters = ({
}) => (
  <FilterRow>
    <TextInput label="Search:"  />
    <Button >Clear</Button>
  </FilterRow>
);

export default Filters;
