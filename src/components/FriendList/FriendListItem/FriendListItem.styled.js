import styled from 'styled-components';

export const Item = styled.li`
    display: flex;
    align-items: center;
    justify-content: left;
    box-shadow: 2px 2px 5px rgba(0, 0, 255, .2), 0px 2px 5px rgba(0, 0, 255, .2);
    width: 270px;
    margin-bottom: 15px;
    padding: 15px 30px;
`

export const Status = styled.span`
    width: 20px;
    border-radius: 50%;
    height: 20px;
    margin-right: 15px;

    background-color:${({ isOnline }) => {
    switch (isOnline) {
        case true:
            return "green";
        case false:
            return "red";
        default:
            return "black";
        }
    }}
`

export const Avatar = styled.img`
    width: 70px;
    margin-right: 15px;
    
`

export const UserName = styled.p`
    font-size: 24px;
    font-weight: 500;
`