import styled from "styled-components";

const TestimonialWrapper = styled.section`
.css-et1ao3-MuiTypography-root{
    font-size: 1.2rem;
}

.testimonial-section{
  background-color: var(--primary--200);
}

.testimonial-card{
  background-color: var(--primary--300);
  color: white;
}

.testimonial-avatar{
  box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 25px 0px rgba(0,0,0,0.75);
}

.testimonial-title{
  color:var(--primary--700);
  font-size:20px;
  font-weight:600;
}

.testimonial-title-post{
  font-size:16px;
  font-weight:500;
  font-style: italic;
}

.testimonial-quotes{
  font-size: 62px;
  position: absolute;
  font-family: 'Courgette', cursive !important;
  color: var(--primary--700);
}

.testimonial-quotes.start{
  top: -30%;
}
.testimonial-quotes.end{
  bottom: -15%;
  right: 0;
  transform: rotate(180deg);
}
`;
export default TestimonialWrapper;
