import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import styled from 'styled-components';
import Loading from './Loading';
import Filters from './Filters';
import ContactList from './ContactList';

const MainColumn = styled.div`
  max-width: 1150px;
  margin: 0 auto;
`;


const defaultHistory = createBrowserHistory();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      loading: true,
      error: false,
    };
  }

  componentDidMount() {
    const host = process.env.REACT_APP_CONTENT_HOST;
    fetch(`${host}/contacts.json`)
      .then(result => result.json())
      .then(contacts => {
        this.setState({contacts: contacts,loading: false,});        
      })
      .catch(() => {
        this.setState({ loading: false, error: true });
      });
  }

  render() {
    const {
      contacts: contacts,
      loading,
      error,
    } = this.state;

    if (loading) {
      return <Loading />;
    }

    if (error) {
      return (
        <MainColumn>
          Sorry, but the contacts list is unavailable right now
        </MainColumn>
      );
    }

    return (
      <Router history={this.props.history || defaultHistory}>
        <MainColumn>
          <Filters/>
          <ContactList contacts={contacts}/>
        </MainColumn>
      </Router>
    );
  }
}

export default App;
