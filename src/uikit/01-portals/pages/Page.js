import styled from '@emotion/styled'

export const Page = styled.section`
    position: fixed; 
    margin: 0;
    top: 0;
    left: 240px;
    bottom: 0;
    right: 0;
    min-width: calc(100% - 240px);
    min-height: 100vh;
    height: 100vh;
    width: calc(100% - 240px);
    overflow-x: hidden;
    overflow-y: scroll; 
    display: block;
    display: flex;
    flex-direction: column; 
`

const PagePadding = styled.section`
    padding: 40px 60px;
`;


const PageHeader = styled.section`
    display: flex;
    flex-direction: column;
    height: 120px; 
    border-bottom: 1px solid rgba(0,0,0,.2);
    padding-left: 34px;
`;

const PageHeaderTitle = styled.h1`
    display: block;
    width: 100%;
    color: #0b2057;
    font-family: Roboto, helvetica, arial;
    font-weight: 700;
    font-size: 2rem;
`

const PageContents = styled.section`
    display: flex;
    flex-direction: column;
    /*height: calc(100% - 100px);*/
    flex: 1 1 100%;  
    background: #f7f7f7; 
    overflow-x: hidden;
    overflow-y: scroll;
    padding: 20px 34px;
    box-sizing: border-box; 
`;

/**
 * @shorthand 
 */
Page.Padding = PagePadding;
Page.Header = PageHeader;
Page.HeaderTitle = PageHeaderTitle;
Page.Contents = PageContents;

