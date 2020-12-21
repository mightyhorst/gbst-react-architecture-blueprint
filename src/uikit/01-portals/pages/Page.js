import styled from '@emotion/styled'

export const Page = styled.section`
    display: block;
    position: fixed; 
    margin: 0;
    top: 0;
    left: 240px;
    bottom: 0;
    right: 0;
    min-width: calc(100% - 240px);
    min-height: 100vh;
    width: calc(100% - 240px);
    overflow-x: hidden;
    overflow-y: scroll; 
`

export default Page; 
