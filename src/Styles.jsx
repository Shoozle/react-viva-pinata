import styled from "styled-components";

export const Cards = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
gap: 2rem;
margin: 2rem;
`

export const Card = styled.div`
   display: flex;
   flex-direction: column;
   background: rgb(55,216,218);
   background: linear-gradient(135deg, #82ccfe 0%, #78c8ff 100%);
   max-height: 30rem;
   overflow: scroll;
   overflow-x: hidden;
   position: relative;
   font-family: 'Roboto', sans-serif;
   &::-webkit-scrollbar {
      width: 10px;
   }
   &::-webkit-scrollbar-track {
      background-color: lightgreen;
   }
   &::-webkit-scrollbar-thumb {
      background-color: darkcyan;
   }
   h3 {
      font-size: 1.6rem;
      padding: .4rem 1rem;
      font-weight: 400;
      position: sticky;
      top: 0;
      background-color: #6eb0de;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
         font-size: 1rem;
         cursor: pointer;
      }
   }
   h4 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer; 
      font-size: 1.2rem;
      font-weight: 400;
      padding: .3rem 1rem;
      border-top: 1px solid #78c8ff;
      border-bottom: 1px solid #82ccfe;
      background-color: #6eb0de;
      :hover{
         background-color: #66a7d4;
      }
      span {
         font-size: 1rem;
      }
   }
   h4::selection {
      background-color: transparent;
   }
   ul {
      transition: all .3s ease;
      overflow:hidden;
      padding-left: 1.2rem;
      font-size: 1rem;
      line-height: 1.6rem;
      li {
         font-family: 'Roboto', sans-serif;
         font-weight: 300;
         padding-right: 1.2rem;
      }
      li::selection{
         background-color: lightgreen;
      }
   }
   ul.visible {
      height: auto;
      opacity: 1;
   }
   ul.invisible {
      height: 0;
      opacity: 0;
      color: red;
   }
   form {
      padding: .4rem 1rem;
      input {
         margin-left: 1rem;
      }
   }
`
