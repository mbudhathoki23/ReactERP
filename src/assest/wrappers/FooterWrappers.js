import styled from "styled-components";

const FooterWrapper = styled.section`
  .company-logo-name {
    display: flex;
    align-items: center;
  }

  .company-logo {
    width: 80px;
    height: 80px;
    margin-right: 10px;
  }

  .footer-section {
    background-color: var(--primary--800);
  }
  .footer-list-title {
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--secondary-color);
  }

  .description-what-do {
    color: var(--secondary-color);
  }

  .social-links {
    display: flex;
    gap: 1rem;
    width: fit-content;
  }

  .social-link {
    color: var(--secondary-color);
    padding: 5px;
    border-radius: 50px;
    transition: all 0.5s ease-in-out;
  }

  .social-link:hover {
    background-color: var(--tertiary-color);
    transform: scale(1.2);
  }

  .list-item-box {
    width: fit-content;
    padding-top: 0px;
    padding-bottom: 0px;
  }

  .list-items {
    padding-top: 0;
    padding-bottom: 0;
    font-size: 0.9rem;
    color: var(--primary--100);
    font-weight: 500;
    width: fit-content;
    transition: all;
    text-decoration: none;
    cursor: pointer;
  }
  .list-items:hover {
    /* color: var(--primary--700); */
    /* color: var(--primary-color); */
    color: var(--quaternary-color);
  }

  .copyright-text {
    color: var(--primary--100);
  }

  .footer-foot-link {
    color: var(--primary--100);
    margin-left: 1rem;
    text-decoration: none;
  }
  .footer-foot-link:hover {
    cursor: pointer;
    color: var(--primary--800);
  }
`;
export default FooterWrapper;
