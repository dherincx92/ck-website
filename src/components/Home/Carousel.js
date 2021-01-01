/**
 * Sliding image carousel component. Gatsby allows us to directly import
 * images into our projects. `images` is a object array containing those
 * images. See `static/assets` directory.
 *
 * author: derek663@gmail.com
 * last_updated: 12/28/2020
 */

import React, { Component } from "react"

// Local imports
import images from "../../data/images"

import ImageGallery from 'react-image-gallery';
import "../../../static/css/carousel.css"


/**
 * Image Carousel that repeats images infinitely. To change the duration each
 * slide plays, edit `slideDuration` prop, which represents milliseconds.
 */
class ImageCarousel extends Component {
  render() {
    return (
      <ImageGallery
        infinite
        autoPlay={true}
        showThumbnails={false}
        showNav={true}
        items={images}
        showPlayButton={false}
        slideDuration={5000}
        fullscreen={false}
      />
    )
  }
}

export default ImageCarousel
