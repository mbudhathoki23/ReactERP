import styled from "styled-components";

const Wrapper = styled.nav`
.Container{
    width : 100vw;
    height : 14vh;
    border : 1px solid red;
    background-color:#302F6A;
    color: white;
}

.secondCOn{
    border : 1px solid green;
   margin : 7px auto;
   display: flex;
   justify-content: space-between;
}



.titlingf{
    border : 1px solid cyan;
}

.doingimg{
    border: 1px solid orange;
    width: 70px;
    height: 70px;
    margin-left: 3rem;
}

.imgsolution{
    border: 1px solid pink;
    display: flex;
    width : 60vh;
    justify-content : space-around
}



.imgsolutioning{
    border: 1px solid blue;
   width:  65vw;
}

.listing{
    width: 96vh;
    border: 1px solid orange;
    height: 100%;
    display : flex;
    margin-left: 6rem;
}

ul li a{
    list-style: none;
    text-decoration : none;
    
}

ul li {
    list-style : none
}

.listinging{
    display: flex;
    border: 1px solid cyan;
    padding: 1rem;
    width: 40vw;
    justify-content: space-between;
}

.coloring{
    color: white;
}

`

export default Wrapper