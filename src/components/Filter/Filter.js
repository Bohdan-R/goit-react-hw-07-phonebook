import React from 'react';
import { connect } from 'react-redux';
import { contactsActions, contactsSelectors } from '../../redux/contacts';
import PropTypes from 'prop-types';
import './Filter.scss';
import { ImSearch } from 'react-icons/im';

const Filter = ({ value, onChange }) => (
  <div className="find-form">
    <h2 className="find-form__title">Contacts</h2>
    <div className="find-form-container">
      <label htmlFor="contact-name" className="find-form__label">
        Find contact by name
      </label>

      <div className="find-form__input-box">
        <input
          className="find-form__input"
          id="contact-name"
          type="text"
          value={value}
          onChange={onChange}
        />
        <ImSearch className="find-form__icon" />
      </div>
    </div>
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactsActions.changeFilter(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
