import styled from 'styled-components'

const Wrapper = styled.nav`

.showBorder{
    /* border: 1px solid red; */
}

.maindoing{
    /* border: 1px solid green; */
    /* background-color: var(--primary--200); */
    background-color: #e0e7ff;
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

.itemlist{
    margin-left: 2rem;
    font-weight : bold;
    /* color: var(--primary--800); */
    color: black;
}


.forboldtitle{
    font-weight: bold;
    font-size: 24px;
}

`

export default Wrapper