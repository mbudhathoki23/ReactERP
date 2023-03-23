import styled from 'styled-components'

const Wrapper = styled.nav`

.maindoing{
    /* border: 1px solid green; */
    background-color: var(--primary--400);
    /* background-color: #e0e7ff; */
    color : black;
    box-shadow: 0 3px 5px 0 rgba(0,0,0,0.08);
  transition: box-shadow 0.3s ease-in-out;
}


.imageresize{
    width: 90px;
    height: 90px;
    /* margin-left : 0.5rem; */
}

.forbox{
    border: 1px solid yellow;
}


.imagepara{
    /* border: 1px solid blue; */
    display: flex;
    justify-content: center;
    align-items: center;
}

.twot{
    margin-left: 1%;
}


.linkingList{
    padding: 1.5rem;
}

.cButton{
    margin-left: 2rem;
    font-weight : bold;
    color: var(--primary--100);
    text-decoration: none;
    position: relative;
}

.cButton::after{
content: "";
width: 100%;
height: 10px;
position: absolute;
bottom: 0;
left: 0;
}


.company-logo-name{
    font-weight: bold;
    font-size: 2rem;
    color: var(--primary--200);
    text-transform: uppercase;
}

.company-logo-location{
    color: var(--primary--200);
    text-transform: capitalize;
    font-weight: 500 !important;
    font-size: 1.1rem;
}

`

export default Wrapper