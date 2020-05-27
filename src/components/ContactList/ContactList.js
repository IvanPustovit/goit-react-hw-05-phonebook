import React from "react";
import PropTypes from "prop-types";
// import classes from "./ContactList.module.css";
import "./ContactList.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const ContactList = ({ contacts, filterContacts, deleteContact }) => {
  return (
    <div>
      <TransitionGroup component="ul">
        {filterContacts.length
          ? filterContacts.map((el) => (
              <CSSTransition
                key={el.name}
                classNames="list-item"
                timeout={250}
                mountOnEnter
                unmountOnExit
              >
                <li className="list-item">
                  <p>{el.name}</p>
                  <p>{el.number}</p>

                  <button
                    type="button"
                    id={el.id}
                    className="delete"
                    onClick={() => {
                      deleteContact(el.id);
                    }}
                  >
                    X
                  </button>
                </li>
              </CSSTransition>
            ))
          : contacts.map((el) => (
              <CSSTransition
                key={el.name}
                classNames="list-item"
                timeout={250}
                mountOnEnter
                unmountOnExit
              >
                <li className="list-item">
                  <p>{el.name}</p>
                  <p>{el.number}</p>
                  <button
                    type="button"
                    id={el.id}
                    className="delete"
                    onClick={() => {
                      deleteContact(el.id);
                    }}
                  >
                    Delete
                  </button>
                </li>
              </CSSTransition>
            ))}
      </TransitionGroup>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  filterContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
