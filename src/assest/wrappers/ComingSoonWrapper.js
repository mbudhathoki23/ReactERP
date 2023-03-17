import styled from "styled-components";

const ComingSoonWrapper = styled.section`
  .title {
    font-size: 50px;
    font-weight: 600;
    line-height: 100%;
    color: white;
    text-shadow: 0px 0px 10px var(--primary--300);
  }
  .sub-title {
    font-size: 20px;
  }
  .coming-soon-section {
    height: 100vh;
    background-color: var(--primary--200);
  }
  .grid-container {
    height: 100vh;
    width: 100%;
  }
  .coming-soon-mail,
  .coming-soon-phone-number {
    font-size: 22px;
    font-weight: 800;
    color: var(--primary--600);
  }
  .coming-soon-phone-number {
    font-size: 18px;
  }
  .coming-soon-phone-number:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .features-offered-title {
    font-size: 42px;
  }
`;

export default ComingSoonWrapper;
