import styled from "styled-components";

const Wrapper = styled.nav`
  .Container {
    width: 100%;
    height: 110px ;
    background-color: #e2e8f0;
    color: black;
    box-shadow: 0px 10px 20px 2px rgba(0, 0, 0, 0.25);
    /* position: fixed; */
    /* top: 0; */
  }

  .secondCOn {
    /* margin: 7px 0; */
    display: flex;
    gap: 25%;
    height: 100px;
  }

  .doingimg {
    width: 70px;
    height: 70px;
    margin: 0 1rem 0 3rem;
  }

  .imgsolution {
    /* margin-top: 0.8rem; */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .imgsolutioning {
    /* width: 65vw; */
    /* display: flex;
    justify-content: center;
    align-items: center; */
  }

  .listing {
    /* width: 96vh; */
    height: 100%;
    display: flex;
    /* margin-left: 6rem; */
    justify-content: center;
    align-items: center;
  }

  ul li a {
    list-style: none;
    text-decoration: none;
  }

  ul li {
    list-style: none;
  }

  .listinging {
    display: flex;
    /* padding: 1rem; */
    width: 40vw;
    justify-content: space-between;
  }

  .coloring {
    color: black;
  }

  .reactdrop {
    color: black;
    text-decoration: none;
    font-size: 1.2rem;
  }

  .reactdrop:hover {
    color: #5c52a9;
  }
`;

export default Wrapper;
