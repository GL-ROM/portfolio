import React from 'react';
import { FooterWrapper } from '../Styles/layout'

const Footer = (props) => {
    return (
        <FooterWrapper>
          <div>
            Email me: <a href={`mailto:${props.data.fields.email}`}>{props.data.fields.email}</a>
          </div>

          <div>
            <a href={`mailto:${props.data.fields.github}`} target="_blank" rel="noopener noreferrer">Github</a> |
            <a href={props.data.fields.linkedin} target="_blank" rel="noopener noreferrer">Linkedin</a> |
            <a href={props.data.fields.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </FooterWrapper>
    )
}

export default Footer;