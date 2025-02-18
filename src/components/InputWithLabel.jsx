import React, { useRef } from "react";
import PropTypes from "prop-types";
import styles from "./InputWithLabel.module.css";

const InputWithLabel = ({
  id,
  value,
  name,
  onChange,
  label = "Title: ",
  placeholder,
  type = "text",
  inputRef,
}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        className={styles.input}
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        ref={inputRef}
      />
    </>
  );
};

InputWithLabel.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.node,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

export default InputWithLabel;
