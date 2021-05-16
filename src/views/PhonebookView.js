import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactOperations from '../redux/contacts/contacts-operations';
import contactsSelectors from '../redux/contacts/contacts-selectors';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';
import Spinner from '../components/Spinner';
import './viewsStyles/PhonebookView.scss';

class App extends Component {
  componentDidMount() {
    this.props.fetchContact();
  }
  render() {
    return (
      <main>
        <div className="section">
          <div className="main-box">
            <ContactForm />
            <div className="decorate-element"></div>
            <Filter />
            <ContactList />
            <div className="decorate-element"></div>
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContact: () => dispatch(contactOperations.fetchContact()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
