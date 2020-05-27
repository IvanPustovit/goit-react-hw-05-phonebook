import React from "react";
import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./Filter.css";

const Filter = ({ handleChangeNameFilter, contacts }) => {
  return (
    <TransitionGroup>
      {contacts.length > 1 && (
        <CSSTransition
          timeout={250}
          classNames="filter"
          mountOnEnter
          unmountOnExit
        >
          <div className="filter">
            <p>Find contacts by name</p>
            <input
              name="filter"
              type="text"
              onChange={handleChangeNameFilter}
            />
          </div>
        </CSSTransition>
      )}
    </TransitionGroup>
  );
};

Filter.propTypes = {
  handleChangeNameFilter: PropTypes.func,
};

export default Filter;
