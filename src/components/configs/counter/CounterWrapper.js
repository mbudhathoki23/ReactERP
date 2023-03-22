import styled from "styled-components";

const CounterWrapper = styled.section`
  .counter-display {
    font-size: 3rem;
    font-weight: 600;
    color: var(--primary--600);
  }

  .timer-counter {
      font-size: 18px !important;
    }
    .counter-display {
      font-size: .8rem;
    }

  @media (max-width: 600px) {
    .timer-counter {
      font-size: 18px !important;
    }
    .counter-display {
      font-size: .8rem;
    }
  }
`;

export default CounterWrapper;
