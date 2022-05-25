import React from 'react'

const css = {
    borderRadius: '6px',
    background: '#34709d',
    textAlign: 'center',
    color: '#fff',
    display: 'inline-block',
    minWidth: '10em',
    height: '2.25em',
    lineHeight: '2.25em',
    textDecoration: 'none',
}

export default function LinkButton({ link, text }) {
    const target = link.startsWith('http') ? '_blank' : '_self'
    
    return (
        <a href={link} target={target} style={css}>
            {text}
        </a>
    )
}