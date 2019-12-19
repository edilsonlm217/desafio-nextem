import styled from 'styled-components';
import { darken } from 'polished';

export const Content = styled.div`
    width: 100%;
    max-width: 360px;
    text-align: center;
    background: #FFF;
    border-radius: 4px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    img {
        margin-top: 50px;
        height: 150px;
        width: 150px;
    }

    form {
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        align-items: center;
        

        input {
            padding-left: 10px;
            margin: 5px 30px;
            height: 45px;
            width: 260px;
            border: solid #DDDDDD 1px;
            border-radius: 4px;
        }
    
        button {
            height: 45px;
            width: 260px;
            margin-top: 30px;
            margin-bottom: 45px;
            border: 0;
            border-radius: 4px;
            background: #071D88;
            color: #fff;
            font-weight: bold;
        }

        button:hover {
            background: ${darken(0.1, '#071D88')};
        }
    }
    
`;
