import styled from 'styled-components';

export const Container = styled.div `
  .img-thanx {
       width : 79px;
        height : 79px;
        background-image : url('https://static.shopback.net/shopconvert/uploads/imagens/reachr/img_thanx.png');
        background-size : cover;
        background-repeat : no-repeat;
        background-position : center center;
        margin: auto;
        &.hide {
          display : none;
        }
  }
  p {
      font-size: 25px;
      color : #fff;
      font-weight : bold;
      padding : 15px;
      margin : 10px 0;
    &.hide {
          display : none;
        }
  }
  button {
          background-color: #85c19b;
          color : #fff;
          border : none;
          width : 67%;
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
          &.hide {
          display : none;
      }
  }
`;