import React from 'react'
import styled from 'styled-components'

const FooterGroup = styled.div`
    background: #F1F3F5;
    padding:  50px 0;
    display: grid;
    grid-gap: 20px;

`
const Text = styled.p`
    font-size: 24px;
    font-weight: 600;
    color: #486791;
    max-width: 500px;
    margin: 0 auto;
`

const Button = styled.button`
    background: linear-gradient(93.96deg, #9B51E0 0%, #3436E7 100%);
    box-shadow: 0px 10px 20px 0px #6529FF26;
    color: white;
    border-radius: 30px;
    border: none;
    padding: 16px 60px;
    font-weight: 600;
    font-size: 24px;
    justify-self: center;
`
const LinkGroup = styled.div`
    width: 500px;
    margin: 50px auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
`

const Copyright = styled.div`
    color: #486791;
    max-width: 500px;
    margin: 0 auto;
    padding: 0 20px;
`

const Footer = ({data, children}) => (
    <FooterGroup>
        <Text>Tweet, "Prototype and build apps with React and Swift" </Text>
        <Button>Tweet</Button>
        <LinkGroup>
        {data.allContentfulLink.edges.map(edge => (<a href={edge.node.url}>{edge.node.title}</a>))}
        </LinkGroup>
        <Copyright>{children}</Copyright>
    </FooterGroup>
)

export default Footer