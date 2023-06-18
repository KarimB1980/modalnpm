import React from "react";
import styles from "./style/Modal.module.css";
import PropTypes from 'prop-types';
const Modal = ({
  setIsOpen,
  color,
  title,
  commentary,
  action
}) => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: styles.darkBG,
    onClick: () => setIsOpen(false)
  }), /*#__PURE__*/React.createElement("div", {
    className: styles.centered
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.modal
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.modalHeader,
    style: {
      backgroundColor: color
    }
  }, /*#__PURE__*/React.createElement("h5", {
    className: styles.heading
  }, title || "Information")), /*#__PURE__*/React.createElement("button", {
    className: styles.closeBtn,
    onClick: () => setIsOpen(false)
  }, "x"), /*#__PURE__*/React.createElement("div", {
    className: styles.modalContent
  }, commentary || "Employee Created !"), /*#__PURE__*/React.createElement("div", {
    className: styles.modalActions
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.actionsContainer
  }, /*#__PURE__*/React.createElement("button", {
    className: styles.closeModalBtn,
    onClick: () => setIsOpen(false)
  }, action || "Close"))))));
};
Modal.propTypes = {
  setIsOpen: PropTypes.func,
  color: PropTypes.string,
  title: PropTypes.string,
  commentary: PropTypes.string,
  action: PropTypes.string
};
export default Modal;