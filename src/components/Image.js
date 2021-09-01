import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import '../scss/style.scss';

const Image = () => {

    return <StaticImage
            src="../images/python-únete.jpg"
            alt="Python"
            placeholder="blurred"
            layout="fixed"
            style={{ width: '100%', height: '40rem', opacity: 0.9, maxHeight: 600, zoom:'150%' }}
            imgStyle={{ objectFit: 'cover' }} />

}
export default Image
