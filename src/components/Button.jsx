import React from "react";

const Button = ({ styles }) => (
  <a href="https://www.navyfederal.org/about.html" target="_blank" rel="noreferrer">
    <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
      More About Us
    </button>
</a>
);

export default Button;


