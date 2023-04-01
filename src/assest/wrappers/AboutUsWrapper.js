import styled from "styled-components";

const AboutUsWrapper = styled.section`
  .about-us-section {
    background-color: var(--primary--200);
  }
  .img-container {
    width: 100%;
    height: 500px;
  }

  .about-description {
    color: var(--tertiary-color);
  }

  @media (max-width: 600px) {
    .css-1ijbxbl-MuiGrid-root {
      flex-direction: column-reverse;
    }
  }
`;

export default AboutUsWrapper;
