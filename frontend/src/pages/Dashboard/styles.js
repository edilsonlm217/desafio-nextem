import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TaskList = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
    width: 600px;

    li.Done {
      padding: 20px;
      border-radius: 4px;
      background: rgb(255, 255, 255, 0.3);
      height: 110px;
      
      border-left: 7px solid #00BC06;

      strong {
        display: block;
        color: #666;
        font-size: 20px;
        font-weight: normal;
      }

      .spanDiv {
        display: flex;
        flex-direction: row;

        span {
          display: block;
          margin-top: 3px;
          color: #666;
          white-space: nowrap;
        }

        span.border {
          border-left: 1px solid #DDDDDD;
          margin-left: 10px;
          padding-left: 10px;
          border-color: #666;
          white-space: nowrap;
        }

      }
      
    }

    li.WIP {
      padding: 20px;
      border-radius: 4px;
      background: rgb(255, 255, 255, 0.3);
      border-left: 7px solid #FF3030;
      height: 110px;

      strong {
        display: block;
        color: #666;
        font-size: 18px;
        font-weight: normal;
        font-size: 20px;
      }

      .spanDiv {
        display: flex;
        flex-direction: row;
      }
      
      span {
        display: block;
        margin-top: 3px;
        color: #666;
      }

      span.border {
          border-left: 1px solid #DDDDDD;
          margin-left: 10px;
          padding-left: 10px;
          border-color: #666;
          
        }
    }

    li.Review {
      padding: 20px;
      border-radius: 4px;
      background: #fff;
      border-left: 7px solid #FF9E30;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      height: 110px;

      strong {
        display: block;
        color: #666;
        font-size: 20px;
        font-weight: normal;
      }

      .spanDiv {
        display: flex;
        flex-direction: row;
      }

      span {
        display: block;
        margin-top: 3px;
        color: #666;
      }

      span.border {
          border-left: 1px solid #DDDDDD;
          margin-left: 10px;
          padding-left: 10px;
          border-color: #666;
          white-space: nowrap;
        }
    }

    li.ToDo {
      padding: 20px;
      border-radius: 4px;
      background: #fff;
      border-left: 7px solid #FFF;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      height: 110px;

      strong {
        display: block;
        color: #666;
        font-size: 20px;
        font-weight: normal;
      }

      .spanDiv {
        display: flex;
        flex-direction: row;
      }

      span {
        display: block;
        margin-top: 3px;
        color: #666;
        white-space: nowrap
      }

      span.border {
        border-left: 1px solid #DDDDDD;
        margin-left: 10px;
        padding-left: 10px;
        border-color: #666;
        white-space: nowrap;
      }
    }
`;

export const SubHeader = styled.div`
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;

    width: 100%;
    margin-top: 50px;
    margin-bottom: 30px;
    max-width: 800px;
    min-width: 500px;   
    color: #FFF;
    
    
    strong {
        font-size: 21px;
        white-space: nowrap;
    }
    
    div {
        white-space: nowrap;

        button {
            height: 35px;
            width: 120px;
            background: #34C943;
            border-radius: 4px;
            border: none;
            color: #fff;
            margin-right: 5px;
            font-weight: bold;
        }

        button:hover {
            background: ${darken(0.1, '#34C943')};
        }
    }
`;
