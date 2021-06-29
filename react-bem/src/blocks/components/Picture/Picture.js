import React from 'react'

export const Picture = (props) => {
    if (props.enabled == false) return false

    const img = <img src={props.src} alt={props.alt}/>

    let picture = props.link.url == '' ? img : <a href={props.link.url} target={props.link.target}>{img}</a>

    return <picture>{picture}</picture>
}

