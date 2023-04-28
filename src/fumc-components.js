import React from 'react'

export function Navber(){
    const aStyle={
        disply: 'inline-block',
        color: 'blue',
        margin: '10px',
        textDecoration: 'none'
    }
    return(
        <div style={{backgroundColor: '#D25644'}}>
            <a href="#" style={aStyle}>Home</a>&nbsp; | &nbsp;
            <a href="#" style={aStyle}>About</a>&nbsp; | &nbsp;
            <a href="#" style={aStyle}>Contect</a>
        </div>
    )
}

export function Header(){
    return (
        <div style={{textAlign: 'center',color: 'navy'}}> 
        <img src="./images/1.jpg" width="100%"/>
            <h2>Hello Component</h2>
            <br></br><br/>
        </div>
    )
}
export const Footer=() => {
    return(
    <div style={{textAlign: 'center'}}>
        &copy:{new Date().getFullYear()} All rights reserved
    </div>
)
}