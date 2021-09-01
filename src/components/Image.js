import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import '../scss/style.scss';

const Image = () => {

    return <StaticImage
            src="../images/python.jpg"
            alt="Python"
            placeholder="blurred"
            layout="fixed"
            style={{ width: '100%', height: '100%',  zoom:'80%', paddingTop:'50rem' }}
            imgStyle={{ objectFit: 'cover' }} />

}
export default Image
