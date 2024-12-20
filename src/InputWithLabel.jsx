import React, { useEffect, Fragment, useRef } from "react";

const InputWithLabel = ({ id, value,name, onChange, children = "Title: ", placeholder, type = "text", inputRef}) => {


  return (
 
    <>
<label htmlFor={id}>{children}</label>
<input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder = {placeholder}
        ref={inputRef}

      />
      
    </>
  )
}

export default InputWithLabel
