import styled from "styled-components";

const Wrapper = styled.nav`
  .contact-us-section {
    background-color: var(--primary--200);
  }
  .cWidth {
    width: 100%;
  }

  .cButton {
    background-color: var(--primary--700);
    position: relative;
    transition: all 0.3s linear;
  }

  .cButton:hover {
    background-color: var(--primary--100);
    color: var(--tertiary-color);
  }

  .img-container {
    width: 100%;
    height: 400px;
  }

  .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: white;
  }
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: black;
  }
  .MuiInputLabel-root.Mui-focused {
    color: var(--tertairy-color);
    font-size: 18px;
  }
`;

export default Wrapper;
