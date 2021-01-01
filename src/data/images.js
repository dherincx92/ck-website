/**
 * This array is the `items` arary required by <ImageGallery />. See the
 * following ---> https://github.com/xiaolin/react-image-gallery
 *
 * Gatsby also allows us to import assets directly into files as so.
 * https://www.gatsbyjs.com/docs/how-to/images-and-media/importing-assets-into-files/
 *
 * author: derek663@gmail.com
 * last_updated: 12/31/2020
 */


import CKFCC1 from  "../../static/assets/CK_FCC1.jpg"
import CKGUITAR from "../../static/assets/CK_FCC_GUITAR.jpg"
import CKFKO from "../../static/assets/2019_FKO_JUMP.jpg"

const images = [
    {
        'original': CKFCC1
    },
    {
        'original': CKGUITAR
    },
    {
        'original': CKFKO
    }
]

export default images
