import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Image = () => {
    
    return <StaticImage
        src="../images/python.jpg"
        alt="Python"
        placeholder="blurred"
        layout="fixed"
        style={{ width: '100%', height:'40rem',  }}
        // imgStyle={{ objectFit: 'contain' }}
        
    />
}
export default Image