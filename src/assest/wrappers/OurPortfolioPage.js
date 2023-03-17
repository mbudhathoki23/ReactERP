import styled from "styled-components";

const Wrapper = styled.section`

.my-carousels .carousel-item {
  position: relative;
  height: 500px;
  background-size: cover;
  background-position: center;
}

.my-carousels .carousel-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 3rem;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);
}

`
export default Wrapper