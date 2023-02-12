import styled from 'styled-components';

export const TransactionTable = styled.table`
    width: 70%;
    margin: 0 auto;
    border-collapse: collapse;
    & td, & tr {
        height: 40px;
        text-align: center;
    }
    &>thead, &>tbody{
        box-shadow: 2px 2px 5px rgba(0, 0, 255, .2), 0px 2px 5px rgba(0, 0, 255, .2);
    }
    &>thead{
        background-color: #00bfff;
        font-size: 15px;
        text-transform: uppercase;
        text-align: center;
        color: #fff;
        
        
        
    }
    &>tbody>tr:nth-of-type(2n){
    background-color: rgb(211, 238, 215);
    }
    
    & th:not(:last-child), & td:not(:last-child) {
        border-right: 1px solid rgb(221, 218, 218);
    }
`

export const TableCaption = styled.thead`
`

export const TableCaptionCeil = styled.th`
`
export const   TableBodyCeil = styled.td`
`
export const TableBodyRow = styled.tr`
`
