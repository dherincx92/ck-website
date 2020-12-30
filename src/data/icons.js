/**
 * Array of icons to be used in Navigation Bar
 *
 * author: derek663@gmail.com
 * last_updated:
 */

import React from "react";

import { AiOutlineApple } from "react-icons/ai";
import { FiFacebook }  from "react-icons/fi";
import { RiInstagramLine, RiSpotifyLine } from "react-icons/ri";
import { TiSocialYoutubeCircular } from "react-icons/ti";

const SLUG = 'chriskim23'
const size = 25
const color = 'white'

const icons = [
    {
        "icon":  <AiOutlineApple size={size} color={color}/>,
        "route": null
    },
    {
        "icon":  <FiFacebook size={size} color={color}/>,
        "route": `https://www.facebook.com/${SLUG}`
    },
    {
        "icon":  <RiInstagramLine size={size} color={color}/>,
        "route": `https://www.instagram.com/${SLUG}`
    },
    {
        "icon":  <RiSpotifyLine size={size} color={color}/>,
        "route": null
    }
]

export default icons;