import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
            background: #D8D8D8;
            border-radius: 4px;
            border: none;
            color: #827D7D;
            margin-right: 5px;
            font-weight: bold;
        }

        button:hover {
            background: ${darken(0.1, '#D8D8D8')};
        }
    }
`;

export const Form = styled.div`
    margin-top: 50px;
    background: #FFF;
    padding: 20px;
    border: none;
    border-radius: 4px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    

    label {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
        font-weight: bold;
        color: #827D7D;

        input {
            height: 35px;
            border: 1px solid #DDDDDD;
            border-radius: 4px;
            padding-left: 10px;
            margin-top: 5px
        }
    }

    .responsavel {
        width: 230px;
    }
    
    .status {
        margin-left: 10px;
        margin-right: 10px;
        width: 120px;
    }

    .deadline {
        width: auto;
    }

    div.secondRow {
        display: flex;
        flex-direction: row;        
    }


    button.save {
        background: #34C943;
        border-radius: 4px;
        border: none;
        height: 35px;
        width: 100%;
        color: #FFF;
        font-weight: bold;
        margin-top: 5px;
    }

    button.save:hover {
        background: ${darken(0.1, '#34C943')};
    }

    select {
        height: 35px;
        border: 1px solid #DDDDDD;
        border-radius: 4px;
        padding-left: 10px;
        margin-top: 5px
    }

    
`;