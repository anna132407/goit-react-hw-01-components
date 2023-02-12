import styled from 'styled-components';


export const ContainerUser = styled.div`
    margin: 0 auto;
    margin-bottom: 100px;
    text-align: center;
    box-shadow: 2px 2px 5px rgba(0, 0, 255, .2), 0px 2px 5px rgba(0, 0, 255, .2);
    width: 300px;
    padding-top: 30px;
    background-color: #fff;
`

export const ContainerImage = styled.div`
`

export const Image = styled.img`
  width: 100px;
  margin: 0 auto;
  border-radius: 50%;
  margin-bottom: 30px;
`

export const UserName = styled.p`
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
`

export const Tag = styled.p`
    font-size: 16px;
    color: grey;
    margin-bottom: 10px;
`

export const Location = styled.p`
    font-size: 16px;
    color: grey;
    margin-bottom: 50px;
`

export const StatsList = styled.ul`
  display: flex;
  justify-content: space-around;
  border-top: 1px solid lightgrey;
`

export const Label = styled.span`
    font-size: 16px;
    color: rgb(100, 100, 100);
`

export const Quantity = styled.span`
    display: block;
    font-size: 18px;
    font-weight: 700;
`

export const StatsItem = styled.li`
  flex-basis: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 20px 0;
  &:not(:last-child) {
    border-right: 1px solid lightgrey;
  }
`;
