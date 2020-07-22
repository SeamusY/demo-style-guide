import React, { Component } from "react";

export default function InputField({
  name,
  placeholdertext
}){
  return (
    <input
      type={"input"}
      name={name}
      placeholder={placeholdertext}
    />
  );
};

