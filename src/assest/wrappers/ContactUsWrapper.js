import styled from "styled-components";

const Wrapper = styled.nav`
  .contact-us-section {
    background-color: var(--primary--300);
  }
  .cWidth {
    width: 100%;
  }

  .cButton {
    background-color: var(--primary--700);
  }
  .cButton:hover {
    background-color: white;
    color: var(--primary--700);
  }

  .img-container {
    width: 100%;
    height: 400px;
    margin-top: -145px;
  }
  img.contact-us-image {
    transform: scaleX(-1);
  }

  .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: white;
  }
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: white;
  }
  .MuiInputLabel-root.Mui-focused {
    color: #160f28;
    font-size: 18px;
  }
`;

export default Wrapper;
