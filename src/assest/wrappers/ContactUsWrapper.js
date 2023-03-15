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
`;

export default Wrapper;
