import styled from "styled-components";

const LoginWrapper = styled.section`
  height: 100vh;
  background-color: var(--primary--200);

  .our-services-card {
    background-color: var(--primary--300);
  }

  .login-wrapper {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
  }

  .software-list {
    font-size: 20px;
    font-weight: 600;
    color: var(--primary--900);
    margin: 0 0 5px 0;
  }
  .icons-display {
    color: var(--primary--900);
    margin: 0 10px 0 0;
  }

  .login-section {
    display: grid;
  }
  .login-section-box {
    /* display: flex;
    justify-content: center; */
  }
  .text {
    color: var(--primary--800);
  }
  .card-style {
    display: flex;
    flex-direction: column;
  }
  .card-header {
    text-align: center;
    font-size: 18px;
    color: var(--primary--900);
    font-weight: bold;
  }

  .password-input-section {
    width: 100%;
    display: flex;
    align-items: center;
  }
  .text-field {
    width: 90%;
  }

  .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: var(--primary--900);
  }
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: var(--primary--800);
  }
`;

export default LoginWrapper;
