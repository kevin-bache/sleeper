import React from 'react'
import styled from 'styled-components'

import Blobs from './Blobs'
import GlobalStyle from './GlobalStyle'

const Layout = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
`

const BlobsContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
`

const Body = styled.main`
  display: flex;
  position: relative;
  margin: 0 auto;
  padding: 64px;
  flex-direction: column;
  max-width: 720px;
  z-index: 10;
  pointer-events: none;

  @media (max-width: 720px) {
    padding: 32px 16px;
  }
`

export default props => (
  <>
    <GlobalStyle />
    <Layout>
      <Body>
        {props.children}
      </Body>
      <BlobsContainer>
        <Blobs />
      </BlobsContainer>
    </Layout>
  </>
)
