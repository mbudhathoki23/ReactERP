import styled from "styled-components";

const FooterWrapper = styled.section`
.company-logo-name{
    display:flex;
    align-items: center;

}

.company-logo{
    width: 80px;
    height: 80px;
    margin-right: 10px;
}

.footer-section{
    background-color: var(--primary--400);
}
.footer-list-title{
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--primary--800);
}

.description-what-do{
    color:var(--primary--100);
}

.social-links{
    display:flex;
    gap:1rem;
    width:fit-content;
    color: var(--primary--800) ;
}

.social-link{
    color: var(--primary--800) ;
}

.social-link:hover{
color:var(--primary--100);
}

.list-item-box{
    width: fit-content;
    padding-top: 0px;
padding-bottom: 0px;
}

.list-items{
    padding-top: 0;
    padding-bottom: 0;
    font-size: .9rem;
    color: var(--primary--100) ;
    font-weight: 500;
    width: fit-content;
    transition: all ;
    text-decoration: none;
}
.list-items:hover{
    color: var(--primary--700);
    /* color: blue; */
}

.copyright-text{
    color: var(--primary--100);
}

.footer-foot-link{
    color: var(--primary--100);
    margin-left: 1rem;
    text-decoration: none;
}
.footer-foot-link:hover{
    cursor: pointer;
    color: var(--primary--800);
}
`
export default FooterWrapper;