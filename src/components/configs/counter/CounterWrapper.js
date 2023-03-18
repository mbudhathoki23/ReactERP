import styled from "styled-components";

const CounterWrapper = styled.section`
  .counter-display {
    font-size: 3rem;
    font-weight: 600;
    color: var(--primary--600);
  }

  @media (max-width: 600px) {
    .timer-counter {
      font-size: 22px !important;
    }
    .counter-display {
      font-size: 1.2rem;
    }
  }
`;

export default CounterWrapper;
