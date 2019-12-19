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
      
      border-left: 7px solid #00BC06;


      strong {
        display: block;
        color: #666;
        font-size: 18px;
        font-weight: normal;
      }

      span {
        display: block;
        margin-top: 3px;
        color: #666;
      }
    }

    li.WIP {
      padding: 20px;
      border-radius: 4px;
      background: rgb(255, 255, 255, 0.3);
      border-left: 7px solid #FF3030;


      strong {
        display: block;
        color: #666;
        font-size: 18px;
        font-weight: normal;
      }

      span {
        display: block;
        margin-top: 3px;
        color: #666;
      }
    }

    li.Review {
      padding: 20px;
      border-radius: 4px;
      background: #fff;
      border-left: 7px solid #FF9E30;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);


      strong {
        display: block;
        color: #666;
        font-size: 20px;
        font-weight: normal;
      }

      span {
        display: block;
        margin-top: 3px;
        color: #666;
      }
    }

    li.ToDo {
      padding: 20px;
      border-radius: 4px;
      background: #fff;
      border-left: 7px solid #FFF;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);


      strong {
        display: block;
        color: #666;
        font-size: 20px;
        font-weight: normal;
      }

      span {
        display: block;
        margin-top: 3px;
        color: #666;
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
            background: ${darken(0.1, '#EE4D64')};
        }

        input {
            height: 35px;
            width: 250px;
            padding-left: 10px;
            margin-left: 5px;
            border: 1px solid #DDDDDD;
            border-radius: 4px;
            

            ::placeholder {
                color: #999999;
            }
        }
    }
`;
