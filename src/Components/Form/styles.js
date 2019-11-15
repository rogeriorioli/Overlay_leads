import styled from 'styled-components';

export const Container = styled.div `
      width : 367px;
      margin-right : 40px;
      form {
        padding : 0 10px;
        input {
          width : 97% ;
          display : block ;
          padding : 10px;
          background : rgb(248, 248, 248);
          outline: none;
          border : 1px solid rgb(227, 227, 227);
          border-radius: 4px;
          margin : 10px auto; 
          &::placeholder {
            color : #7d7d7d;
          }
        }
        button {
          background-color: #85c19b;
          color : #fff;
          border : none;
          width : 97%;
          padding : 15px 0;
          margin : auto;
          display : block;
          cursor : pointer;
          position: relative;
          &::before {
            width : 100%;
            content : "";
            height:3px;
            bottom : 0;
            background:#24673d;
            position: absolute;
            left: 0;
          }
        }
        &.hide {
            display : none ;
          }
      }

`;