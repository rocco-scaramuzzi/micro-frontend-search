import React from 'react';
import styled from 'styled-components';
import ContactCard from './ContactCard';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ContactList = ({ contacts }) => {
  return (
    <CardContainer>
      {contacts.map(contact => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </CardContainer>
  );
};

export default ContactList;
