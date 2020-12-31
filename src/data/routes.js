/**
 * Routes. This array should always be of length == 2. If you desire to add
 * new routes, append a new object to the `routes` key. `position` refers
 * to the position of the new nav button, relative to the browser.
 *
 * Key definitions:
 *  - label : text label that will be rendered on browser
 *  - path: the endpoint for when the user clicks that navigation button
 *  - active: should the button be enabled or disabled?
 *
 * author: derek663@gmail.com
 * last_updated: 12/31/2020
 */

const routes = [
  {
    position: 'left',
    routes : [
      {
        label: 'HOME',
        path: '/home',
        active: true
      },
      {
        label: 'ABOUT',
        path: '/about',
        active: false
      },
      {
        label: 'BLOG',
        path: '/blog',
        active: false
      }
    ]
  },
  {
    position: 'right',
    routes : [
      {
        label: 'MUSIC',
        path: '/music',
        active: false
      },
      {
        label: 'SHOP',
        path: '/shop',
        active: false
      },
      {
        label: 'CONTACT',
        path: '/contact',
        active: false
      }
    ]
  }
]

export default routes;
