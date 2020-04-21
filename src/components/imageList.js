import React from 'react'
import './imageList.css'

import ImageCard from './imageCard'

const imageList = (props) => {
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />
    })

    return (
        <div className="images-list">
            {images}
        </div>
    )
}

export default imageList