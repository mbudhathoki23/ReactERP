import styled from "styled-components";

const HeaderWrapper = styled.section`
  .header-main {
    font-size: 0.8rem;
    color: var(--primary--800);
  }
  .message-icon{
    color: var(--primary--800);
  }
`;

export default HeaderWrapper;
// const HeaderWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 16px;
//   background-color: #f7f7f7;

//   @media (max-width: 768px) {
//     flex-direction: column;
//     justify-content: center;
//     text-align: center;
//   }
// `;

// const Logo = styled(Box)`
//   font-weight: bold;
//   font-size: 24px;

//   @media (max-width: 768px) {
//     margin-bottom: 16px;
//   }
// `;

// const Info = styled(Box)`
//   font-size: 14px;

//   @media (max-width: 768px) {
//     margin-top: 16px;
//   }
// `;
