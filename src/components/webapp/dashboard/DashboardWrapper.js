import styled from "styled-components";

const DashboardWrapper = styled.section`
  .text-center {
    background-color: var(--primary--400);
    color: var(--tertiary-color);
  }
  .right-arrow {
    width:30px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-left: 50%;
    height:30px;
    background-color: var(--primary--400);
    border-radius: 50%;
  }

  .header-color{
    background-color: var(--primary--400);
  } ;
`;

export default DashboardWrapper;
