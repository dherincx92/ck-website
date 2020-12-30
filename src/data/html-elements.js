/**
 * Order matters since items with "parent" key assume parent item has
 * already been referenced in array
 */

const elements = [
    {
        "name": "track",
        "class": ".carousel__track"
    },
    {
        "name": "dotsNav",
        "class": ".carousel__nav"
    },
    {
        "name": "slides",
        "class": null,
        "parent": "track"
    },
    {
        "name": "dots",
        "class": null,
        "parent": "dotsNav"
    }
]

export default elements