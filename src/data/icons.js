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
        // "icon":  <AiOutlineApple size={size} color={color}/>,
        "route": "https://music.apple.com/us/artist/chris-kim/284067502",
        "alias": "apple"
    },
    {
        // "icon":  <FiFacebook size={size} color={color}/>,
        "route": `https://www.facebook.com/${SLUG}`,
        "alias": "facebook",
    },
    {
        // "icon":  <RiInstagramLine size={size} color={color}/>,
        "route": `https://www.instagram.com/${SLUG}`,
        "alias": "instagram"
    },
    {
        // "icon":  <RiSpotifyLine size={size} color={color}/>,
        "route": "https://open.spotify.com/artist/1GhVaT8gelrWGHImqOdKex",
        "alias": "spotify"
    }
]

export default icons;
