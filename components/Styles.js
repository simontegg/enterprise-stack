module.exports = `/*!
 * # Semantic UI 2.2.10 - Site
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
@import url(https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic&subset=latin);
body,
html {
  height: 100%
}
html {
  font-size: 14px
}
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  min-width: 320px;
  background: #fff;
  font-family: "Open Sans","Helvetica Neue",Arial,Helvetica,sans-serif;
  font-size: 14px;
  line-height: 1.4285em;
  color: rgba(0,0,0,.8);
  font-smoothing: antialiased
}
h1,
h2,
h3,
h4,
h5 {
  font-family: "Open Sans","Helvetica Neue",Arial,Helvetica,sans-serif;
  line-height: 1.28571429em;
  margin: 1em 0 1rem;
  font-weight: 700;
  padding: 0
}
h1 {
  min-height: 1rem;
  font-size: 2rem
}
h2 {
  font-size: 1.71428571rem
}
h3 {
  font-size: 1.28571429rem
}
h4 {
  font-size: 1.07142857rem
}
h5 {
  font-size: 1rem
}
h1:first-child,
h2:first-child,
h3:first-child,
h4:first-child,
h5:first-child {
  margin-top: 0
}
h1:last-child,
h2:last-child,
h3:last-child,
h4:last-child,
h5:last-child {
  margin-bottom: 0
}
p {
  margin: 0 0 1em;
  line-height: 1.4285em
}
p:first-child {
  margin-top: 0
}
p:last-child {
  margin-bottom: 0
}
a {
  color: #009fda;
  text-decoration: none
}
a:hover {
  color: #00b2f3;
  text-decoration: none
}
::-webkit-selection {
  background-color: #ffc;
  color: rgba(0,0,0,.8)
}
::-moz-selection {
  background-color: #ffc;
  color: rgba(0,0,0,.8)
}
::selection {
  background-color: #ffc;
  color: rgba(0,0,0,.8)
}
input::-webkit-selection,
textarea::-webkit-selection {
  background-color: rgba(100,100,100,.4);
  color: rgba(0,0,0,.8)
}
input::-moz-selection,
textarea::-moz-selection {
  background-color: rgba(100,100,100,.4);
  color: rgba(0,0,0,.8)
}
input::selection,
textarea::selection {
  background-color: rgba(100,100,100,.4);
  color: rgba(0,0,0,.8)
}
/*!
 * # Semantic UI 2.2.10 - Reset
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
*,
:after,
:before {
  box-sizing: inherit
}
html {
  box-sizing: border-box
}
input[type=email],
input[type=password],
input[type=search],
input[type=text] {
  -webkit-appearance: none;
  -moz-appearance: none
}
/*!
 * # Semantic UI 2.2.10 - Grid
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
.ui.grid {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  padding: 0
}
.ui.grid {
  margin-top: -1rem;
  margin-bottom: -1rem;
  margin-left: -1rem;
  margin-right: -1rem
}
.ui.relaxed.grid {
  margin-left: -1.5rem;
  margin-right: -1.5rem
}
.ui[class*="very relaxed"].grid {
  margin-left: -2.5rem;
  margin-right: -2.5rem
}
.ui.grid + .grid {
  margin-top: 1rem
}
.ui.grid > .column:not(.row),
.ui.grid > .row > .column {
  position: relative;
  display: inline-block;
  width: 6.25%;
  padding-left: 1rem;
  padding-right: 1rem;
  vertical-align: top
}
.ui.grid > * {
  padding-left: 1rem;
  padding-right: 1rem
}
.ui.grid > .row {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: inherit;
  -ms-flex-pack: inherit;
  justify-content: inherit;
  -webkit-box-align: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  width: 100%!important;
  padding: 0;
  padding-top: 1rem;
  padding-bottom: 1rem
}
.ui.grid > .column:not(.row) {
  padding-top: 1rem;
  padding-bottom: 1rem
}
.ui.grid > .row > .column {
  margin-top: 0;
  margin-bottom: 0
}
.ui.grid > .row > .column > img,
.ui.grid > .row > img {
  max-width: 100%
}
.ui.grid > .ui.grid:first-child {
  margin-top: 0
}
.ui.grid > .ui.grid:last-child {
  margin-bottom: 0
}
.ui.aligned.grid .column > .segment:not(.compact):not(.attached),
.ui.grid .aligned.row > .column > .segment:not(.compact):not(.attached) {
  width: 100%
}
.ui.grid .row + .ui.divider {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  margin: 1rem 1rem
}
.ui.grid .column + .ui.vertical.divider {
  height: calc(50% - 1rem)
}
.ui.grid > .column:last-child > .horizontal.segment,
.ui.grid > .row > .column:last-child > .horizontal.segment {
  box-shadow: none
}
@media only screen and (max-width:767px) {
  .ui.page.grid {
    width: auto;
    padding-left: 0;
    padding-right: 0;
    margin-left: 0;
    margin-right: 0
  }
}
@media only screen and (min-width:768px) and (max-width:991px) {
  .ui.page.grid {
    width: auto;
    margin-left: 0;
    margin-right: 0;
    padding-left: 2em;
    padding-right: 2em
  }
}
@media only screen and (min-width:992px) and (max-width:1199px) {
  .ui.page.grid {
    width: auto;
    margin-left: 0;
    margin-right: 0;
    padding-left: 3%;
    padding-right: 3%
  }
}
@media only screen and (min-width:1200px) and (max-width:1919px) {
  .ui.page.grid {
    width: auto;
    margin-left: 0;
    margin-right: 0;
    padding-left: 15%;
    padding-right: 15%
  }
}
@media only screen and (min-width:1920px) {
  .ui.page.grid {
    width: auto;
    margin-left: 0;
    margin-right: 0;
    padding-left: 23%;
    padding-right: 23%
  }
}
.ui.grid > .column:only-child,
.ui.grid > .row > .column:only-child {
  width: 100%
}
.ui[class*="one column"].grid > .column:not(.row),
.ui[class*="one column"].grid > .row > .column {
  width: 100%
}
.ui[class*="two column"].grid > .column:not(.row),
.ui[class*="two column"].grid > .row > .column {
  width: 50%
}
.ui[class*="three column"].grid > .column:not(.row),
.ui[class*="three column"].grid > .row > .column {
  width: 33.33333333%
}
.ui[class*="four column"].grid > .column:not(.row),
.ui[class*="four column"].grid > .row > .column {
  width: 25%
}
.ui[class*="five column"].grid > .column:not(.row),
.ui[class*="five column"].grid > .row > .column {
  width: 20%
}
.ui[class*="six column"].grid > .column:not(.row),
.ui[class*="six column"].grid > .row > .column {
  width: 16.66666667%
}
.ui[class*="seven column"].grid > .column:not(.row),
.ui[class*="seven column"].grid > .row > .column {
  width: 14.28571429%
}
.ui[class*="eight column"].grid > .column:not(.row),
.ui[class*="eight column"].grid > .row > .column {
  width: 12.5%
}
.ui[class*="nine column"].grid > .column:not(.row),
.ui[class*="nine column"].grid > .row > .column {
  width: 11.11111111%
}
.ui[class*="ten column"].grid > .column:not(.row),
.ui[class*="ten column"].grid > .row > .column {
  width: 10%
}
.ui[class*="eleven column"].grid > .column:not(.row),
.ui[class*="eleven column"].grid > .row > .column {
  width: 9.09090909%
}
.ui[class*="twelve column"].grid > .column:not(.row),
.ui[class*="twelve column"].grid > .row > .column {
  width: 8.33333333%
}
.ui[class*="thirteen column"].grid > .column:not(.row),
.ui[class*="thirteen column"].grid > .row > .column {
  width: 7.69230769%
}
.ui[class*="fourteen column"].grid > .column:not(.row),
.ui[class*="fourteen column"].grid > .row > .column {
  width: 7.14285714%
}
.ui[class*="fifteen column"].grid > .column:not(.row),
.ui[class*="fifteen column"].grid > .row > .column {
  width: 6.66666667%
}
.ui[class*="sixteen column"].grid > .column:not(.row),
.ui[class*="sixteen column"].grid > .row > .column {
  width: 6.25%
}
.ui.grid > [class*="one column"].row > .column {
  width: 100%!important
}
.ui.grid > [class*="two column"].row > .column {
  width: 50%!important
}
.ui.grid > [class*="three column"].row > .column {
  width: 33.33333333%!important
}
.ui.grid > [class*="four column"].row > .column {
  width: 25%!important
}
.ui.grid > [class*="five column"].row > .column {
  width: 20%!important
}
.ui.grid > [class*="six column"].row > .column {
  width: 16.66666667%!important
}
.ui.grid > [class*="seven column"].row > .column {
  width: 14.28571429%!important
}
.ui.grid > [class*="eight column"].row > .column {
  width: 12.5%!important
}
.ui.grid > [class*="nine column"].row > .column {
  width: 11.11111111%!important
}
.ui.grid > [class*="ten column"].row > .column {
  width: 10%!important
}
.ui.grid > [class*="eleven column"].row > .column {
  width: 9.09090909%!important
}
.ui.grid > [class*="twelve column"].row > .column {
  width: 8.33333333%!important
}
.ui.grid > [class*="thirteen column"].row > .column {
  width: 7.69230769%!important
}
.ui.grid > [class*="fourteen column"].row > .column {
  width: 7.14285714%!important
}
.ui.grid > [class*="fifteen column"].row > .column {
  width: 6.66666667%!important
}
.ui.grid > [class*="sixteen column"].row > .column {
  width: 6.25%!important
}
.ui.celled.page.grid {
  box-shadow: none
}
.ui.column.grid > [class*="one wide"].column,
.ui.grid > .column.row > [class*="one wide"].column,
.ui.grid > .row > [class*="one wide"].column,
.ui.grid > [class*="one wide"].column {
  width: 6.25%!important
}
.ui.column.grid > [class*="two wide"].column,
.ui.grid > .column.row > [class*="two wide"].column,
.ui.grid > .row > [class*="two wide"].column,
.ui.grid > [class*="two wide"].column {
  width: 12.5%!important
}
.ui.column.grid > [class*="three wide"].column,
.ui.grid > .column.row > [class*="three wide"].column,
.ui.grid > .row > [class*="three wide"].column,
.ui.grid > [class*="three wide"].column {
  width: 18.75%!important
}
.ui.column.grid > [class*="four wide"].column,
.ui.grid > .column.row > [class*="four wide"].column,
.ui.grid > .row > [class*="four wide"].column,
.ui.grid > [class*="four wide"].column {
  width: 25%!important
}
.ui.column.grid > [class*="five wide"].column,
.ui.grid > .column.row > [class*="five wide"].column,
.ui.grid > .row > [class*="five wide"].column,
.ui.grid > [class*="five wide"].column {
  width: 31.25%!important
}
.ui.column.grid > [class*="six wide"].column,
.ui.grid > .column.row > [class*="six wide"].column,
.ui.grid > .row > [class*="six wide"].column,
.ui.grid > [class*="six wide"].column {
  width: 37.5%!important
}
.ui.column.grid > [class*="seven wide"].column,
.ui.grid > .column.row > [class*="seven wide"].column,
.ui.grid > .row > [class*="seven wide"].column,
.ui.grid > [class*="seven wide"].column {
  width: 43.75%!important
}
.ui.column.grid > [class*="eight wide"].column,
.ui.grid > .column.row > [class*="eight wide"].column,
.ui.grid > .row > [class*="eight wide"].column,
.ui.grid > [class*="eight wide"].column {
  width: 50%!important
}
.ui.column.grid > [class*="nine wide"].column,
.ui.grid > .column.row > [class*="nine wide"].column,
.ui.grid > .row > [class*="nine wide"].column,
.ui.grid > [class*="nine wide"].column {
  width: 56.25%!important
}
.ui.column.grid > [class*="ten wide"].column,
.ui.grid > .column.row > [class*="ten wide"].column,
.ui.grid > .row > [class*="ten wide"].column,
.ui.grid > [class*="ten wide"].column {
  width: 62.5%!important
}
.ui.column.grid > [class*="eleven wide"].column,
.ui.grid > .column.row > [class*="eleven wide"].column,
.ui.grid > .row > [class*="eleven wide"].column,
.ui.grid > [class*="eleven wide"].column {
  width: 68.75%!important
}
.ui.column.grid > [class*="twelve wide"].column,
.ui.grid > .column.row > [class*="twelve wide"].column,
.ui.grid > .row > [class*="twelve wide"].column,
.ui.grid > [class*="twelve wide"].column {
  width: 75%!important
}
.ui.column.grid > [class*="thirteen wide"].column,
.ui.grid > .column.row > [class*="thirteen wide"].column,
.ui.grid > .row > [class*="thirteen wide"].column,
.ui.grid > [class*="thirteen wide"].column {
  width: 81.25%!important
}
.ui.column.grid > [class*="fourteen wide"].column,
.ui.grid > .column.row > [class*="fourteen wide"].column,
.ui.grid > .row > [class*="fourteen wide"].column,
.ui.grid > [class*="fourteen wide"].column {
  width: 87.5%!important
}
.ui.column.grid > [class*="fifteen wide"].column,
.ui.grid > .column.row > [class*="fifteen wide"].column,
.ui.grid > .row > [class*="fifteen wide"].column,
.ui.grid > [class*="fifteen wide"].column {
  width: 93.75%!important
}
.ui.column.grid > [class*="sixteen wide"].column,
.ui.grid > .column.row > [class*="sixteen wide"].column,
.ui.grid > .row > [class*="sixteen wide"].column,
.ui.grid > [class*="sixteen wide"].column {
  width: 100%!important
}
@media only screen and (min-width:320px) and (max-width:767px) {
  .ui.column.grid > [class*="one wide mobile"].column,
  .ui.grid > .column.row > [class*="one wide mobile"].column,
  .ui.grid > .row > [class*="one wide mobile"].column,
  .ui.grid > [class*="one wide mobile"].column {
    width: 6.25%!important
  }
  .ui.column.grid > [class*="two wide mobile"].column,
  .ui.grid > .column.row > [class*="two wide mobile"].column,
  .ui.grid > .row > [class*="two wide mobile"].column,
  .ui.grid > [class*="two wide mobile"].column {
    width: 12.5%!important
  }
  .ui.column.grid > [class*="three wide mobile"].column,
  .ui.grid > .column.row > [class*="three wide mobile"].column,
  .ui.grid > .row > [class*="three wide mobile"].column,
  .ui.grid > [class*="three wide mobile"].column {
    width: 18.75%!important
  }
  .ui.column.grid > [class*="four wide mobile"].column,
  .ui.grid > .column.row > [class*="four wide mobile"].column,
  .ui.grid > .row > [class*="four wide mobile"].column,
  .ui.grid > [class*="four wide mobile"].column {
    width: 25%!important
  }
  .ui.column.grid > [class*="five wide mobile"].column,
  .ui.grid > .column.row > [class*="five wide mobile"].column,
  .ui.grid > .row > [class*="five wide mobile"].column,
  .ui.grid > [class*="five wide mobile"].column {
    width: 31.25%!important
  }
  .ui.column.grid > [class*="six wide mobile"].column,
  .ui.grid > .column.row > [class*="six wide mobile"].column,
  .ui.grid > .row > [class*="six wide mobile"].column,
  .ui.grid > [class*="six wide mobile"].column {
    width: 37.5%!important
  }
  .ui.column.grid > [class*="seven wide mobile"].column,
  .ui.grid > .column.row > [class*="seven wide mobile"].column,
  .ui.grid > .row > [class*="seven wide mobile"].column,
  .ui.grid > [class*="seven wide mobile"].column {
    width: 43.75%!important
  }
  .ui.column.grid > [class*="eight wide mobile"].column,
  .ui.grid > .column.row > [class*="eight wide mobile"].column,
  .ui.grid > .row > [class*="eight wide mobile"].column,
  .ui.grid > [class*="eight wide mobile"].column {
    width: 50%!important
  }
  .ui.column.grid > [class*="nine wide mobile"].column,
  .ui.grid > .column.row > [class*="nine wide mobile"].column,
  .ui.grid > .row > [class*="nine wide mobile"].column,
  .ui.grid > [class*="nine wide mobile"].column {
    width: 56.25%!important
  }
  .ui.column.grid > [class*="ten wide mobile"].column,
  .ui.grid > .column.row > [class*="ten wide mobile"].column,
  .ui.grid > .row > [class*="ten wide mobile"].column,
  .ui.grid > [class*="ten wide mobile"].column {
    width: 62.5%!important
  }
  .ui.column.grid > [class*="eleven wide mobile"].column,
  .ui.grid > .column.row > [class*="eleven wide mobile"].column,
  .ui.grid > .row > [class*="eleven wide mobile"].column,
  .ui.grid > [class*="eleven wide mobile"].column {
    width: 68.75%!important
  }
  .ui.column.grid > [class*="twelve wide mobile"].column,
  .ui.grid > .column.row > [class*="twelve wide mobile"].column,
  .ui.grid > .row > [class*="twelve wide mobile"].column,
  .ui.grid > [class*="twelve wide mobile"].column {
    width: 75%!important
  }
  .ui.column.grid > [class*="thirteen wide mobile"].column,
  .ui.grid > .column.row > [class*="thirteen wide mobile"].column,
  .ui.grid > .row > [class*="thirteen wide mobile"].column,
  .ui.grid > [class*="thirteen wide mobile"].column {
    width: 81.25%!important
  }
  .ui.column.grid > [class*="fourteen wide mobile"].column,
  .ui.grid > .column.row > [class*="fourteen wide mobile"].column,
  .ui.grid > .row > [class*="fourteen wide mobile"].column,
  .ui.grid > [class*="fourteen wide mobile"].column {
    width: 87.5%!important
  }
  .ui.column.grid > [class*="fifteen wide mobile"].column,
  .ui.grid > .column.row > [class*="fifteen wide mobile"].column,
  .ui.grid > .row > [class*="fifteen wide mobile"].column,
  .ui.grid > [class*="fifteen wide mobile"].column {
    width: 93.75%!important
  }
  .ui.column.grid > [class*="sixteen wide mobile"].column,
  .ui.grid > .column.row > [class*="sixteen wide mobile"].column,
  .ui.grid > .row > [class*="sixteen wide mobile"].column,
  .ui.grid > [class*="sixteen wide mobile"].column {
    width: 100%!important
  }
}
@media only screen and (min-width:768px) and (max-width:991px) {
  .ui.column.grid > [class*="one wide tablet"].column,
  .ui.grid > .column.row > [class*="one wide tablet"].column,
  .ui.grid > .row > [class*="one wide tablet"].column,
  .ui.grid > [class*="one wide tablet"].column {
    width: 6.25%!important
  }
  .ui.column.grid > [class*="two wide tablet"].column,
  .ui.grid > .column.row > [class*="two wide tablet"].column,
  .ui.grid > .row > [class*="two wide tablet"].column,
  .ui.grid > [class*="two wide tablet"].column {
    width: 12.5%!important
  }
  .ui.column.grid > [class*="three wide tablet"].column,
  .ui.grid > .column.row > [class*="three wide tablet"].column,
  .ui.grid > .row > [class*="three wide tablet"].column,
  .ui.grid > [class*="three wide tablet"].column {
    width: 18.75%!important
  }
  .ui.column.grid > [class*="four wide tablet"].column,
  .ui.grid > .column.row > [class*="four wide tablet"].column,
  .ui.grid > .row > [class*="four wide tablet"].column,
  .ui.grid > [class*="four wide tablet"].column {
    width: 25%!important
  }
  .ui.column.grid > [class*="five wide tablet"].column,
  .ui.grid > .column.row > [class*="five wide tablet"].column,
  .ui.grid > .row > [class*="five wide tablet"].column,
  .ui.grid > [class*="five wide tablet"].column {
    width: 31.25%!important
  }
  .ui.column.grid > [class*="six wide tablet"].column,
  .ui.grid > .column.row > [class*="six wide tablet"].column,
  .ui.grid > .row > [class*="six wide tablet"].column,
  .ui.grid > [class*="six wide tablet"].column {
    width: 37.5%!important
  }
  .ui.column.grid > [class*="seven wide tablet"].column,
  .ui.grid > .column.row > [class*="seven wide tablet"].column,
  .ui.grid > .row > [class*="seven wide tablet"].column,
  .ui.grid > [class*="seven wide tablet"].column {
    width: 43.75%!important
  }
  .ui.column.grid > [class*="eight wide tablet"].column,
  .ui.grid > .column.row > [class*="eight wide tablet"].column,
  .ui.grid > .row > [class*="eight wide tablet"].column,
  .ui.grid > [class*="eight wide tablet"].column {
    width: 50%!important
  }
  .ui.column.grid > [class*="nine wide tablet"].column,
  .ui.grid > .column.row > [class*="nine wide tablet"].column,
  .ui.grid > .row > [class*="nine wide tablet"].column,
  .ui.grid > [class*="nine wide tablet"].column {
    width: 56.25%!important
  }
  .ui.column.grid > [class*="ten wide tablet"].column,
  .ui.grid > .column.row > [class*="ten wide tablet"].column,
  .ui.grid > .row > [class*="ten wide tablet"].column,
  .ui.grid > [class*="ten wide tablet"].column {
    width: 62.5%!important
  }
  .ui.column.grid > [class*="eleven wide tablet"].column,
  .ui.grid > .column.row > [class*="eleven wide tablet"].column,
  .ui.grid > .row > [class*="eleven wide tablet"].column,
  .ui.grid > [class*="eleven wide tablet"].column {
    width: 68.75%!important
  }
  .ui.column.grid > [class*="twelve wide tablet"].column,
  .ui.grid > .column.row > [class*="twelve wide tablet"].column,
  .ui.grid > .row > [class*="twelve wide tablet"].column,
  .ui.grid > [class*="twelve wide tablet"].column {
    width: 75%!important
  }
  .ui.column.grid > [class*="thirteen wide tablet"].column,
  .ui.grid > .column.row > [class*="thirteen wide tablet"].column,
  .ui.grid > .row > [class*="thirteen wide tablet"].column,
  .ui.grid > [class*="thirteen wide tablet"].column {
    width: 81.25%!important
  }
  .ui.column.grid > [class*="fourteen wide tablet"].column,
  .ui.grid > .column.row > [class*="fourteen wide tablet"].column,
  .ui.grid > .row > [class*="fourteen wide tablet"].column,
  .ui.grid > [class*="fourteen wide tablet"].column {
    width: 87.5%!important
  }
  .ui.column.grid > [class*="fifteen wide tablet"].column,
  .ui.grid > .column.row > [class*="fifteen wide tablet"].column,
  .ui.grid > .row > [class*="fifteen wide tablet"].column,
  .ui.grid > [class*="fifteen wide tablet"].column {
    width: 93.75%!important
  }
  .ui.column.grid > [class*="sixteen wide tablet"].column,
  .ui.grid > .column.row > [class*="sixteen wide tablet"].column,
  .ui.grid > .row > [class*="sixteen wide tablet"].column,
  .ui.grid > [class*="sixteen wide tablet"].column {
    width: 100%!important
  }
}
@media only screen and (min-width:992px) {
  .ui.column.grid > [class*="one wide computer"].column,
  .ui.grid > .column.row > [class*="one wide computer"].column,
  .ui.grid > .row > [class*="one wide computer"].column,
  .ui.grid > [class*="one wide computer"].column {
    width: 6.25%!important
  }
  .ui.column.grid > [class*="two wide computer"].column,
  .ui.grid > .column.row > [class*="two wide computer"].column,
  .ui.grid > .row > [class*="two wide computer"].column,
  .ui.grid > [class*="two wide computer"].column {
    width: 12.5%!important
  }
  .ui.column.grid > [class*="three wide computer"].column,
  .ui.grid > .column.row > [class*="three wide computer"].column,
  .ui.grid > .row > [class*="three wide computer"].column,
  .ui.grid > [class*="three wide computer"].column {
    width: 18.75%!important
  }
  .ui.column.grid > [class*="four wide computer"].column,
  .ui.grid > .column.row > [class*="four wide computer"].column,
  .ui.grid > .row > [class*="four wide computer"].column,
  .ui.grid > [class*="four wide computer"].column {
    width: 25%!important
  }
  .ui.column.grid > [class*="five wide computer"].column,
  .ui.grid > .column.row > [class*="five wide computer"].column,
  .ui.grid > .row > [class*="five wide computer"].column,
  .ui.grid > [class*="five wide computer"].column {
    width: 31.25%!important
  }
  .ui.column.grid > [class*="six wide computer"].column,
  .ui.grid > .column.row > [class*="six wide computer"].column,
  .ui.grid > .row > [class*="six wide computer"].column,
  .ui.grid > [class*="six wide computer"].column {
    width: 37.5%!important
  }
  .ui.column.grid > [class*="seven wide computer"].column,
  .ui.grid > .column.row > [class*="seven wide computer"].column,
  .ui.grid > .row > [class*="seven wide computer"].column,
  .ui.grid > [class*="seven wide computer"].column {
    width: 43.75%!important
  }
  .ui.column.grid > [class*="eight wide computer"].column,
  .ui.grid > .column.row > [class*="eight wide computer"].column,
  .ui.grid > .row > [class*="eight wide computer"].column,
  .ui.grid > [class*="eight wide computer"].column {
    width: 50%!important
  }
  .ui.column.grid > [class*="nine wide computer"].column,
  .ui.grid > .column.row > [class*="nine wide computer"].column,
  .ui.grid > .row > [class*="nine wide computer"].column,
  .ui.grid > [class*="nine wide computer"].column {
    width: 56.25%!important
  }
  .ui.column.grid > [class*="ten wide computer"].column,
  .ui.grid > .column.row > [class*="ten wide computer"].column,
  .ui.grid > .row > [class*="ten wide computer"].column,
  .ui.grid > [class*="ten wide computer"].column {
    width: 62.5%!important
  }
  .ui.column.grid > [class*="eleven wide computer"].column,
  .ui.grid > .column.row > [class*="eleven wide computer"].column,
  .ui.grid > .row > [class*="eleven wide computer"].column,
  .ui.grid > [class*="eleven wide computer"].column {
    width: 68.75%!important
  }
  .ui.column.grid > [class*="twelve wide computer"].column,
  .ui.grid > .column.row > [class*="twelve wide computer"].column,
  .ui.grid > .row > [class*="twelve wide computer"].column,
  .ui.grid > [class*="twelve wide computer"].column {
    width: 75%!important
  }
  .ui.column.grid > [class*="thirteen wide computer"].column,
  .ui.grid > .column.row > [class*="thirteen wide computer"].column,
  .ui.grid > .row > [class*="thirteen wide computer"].column,
  .ui.grid > [class*="thirteen wide computer"].column {
    width: 81.25%!important
  }
  .ui.column.grid > [class*="fourteen wide computer"].column,
  .ui.grid > .column.row > [class*="fourteen wide computer"].column,
  .ui.grid > .row > [class*="fourteen wide computer"].column,
  .ui.grid > [class*="fourteen wide computer"].column {
    width: 87.5%!important
  }
  .ui.column.grid > [class*="fifteen wide computer"].column,
  .ui.grid > .column.row > [class*="fifteen wide computer"].column,
  .ui.grid > .row > [class*="fifteen wide computer"].column,
  .ui.grid > [class*="fifteen wide computer"].column {
    width: 93.75%!important
  }
  .ui.column.grid > [class*="sixteen wide computer"].column,
  .ui.grid > .column.row > [class*="sixteen wide computer"].column,
  .ui.grid > .row > [class*="sixteen wide computer"].column,
  .ui.grid > [class*="sixteen wide computer"].column {
    width: 100%!important
  }
}
@media only screen and (min-width:1200px) and (max-width:1919px) {
  .ui.column.grid > [class*="one wide large screen"].column,
  .ui.grid > .column.row > [class*="one wide large screen"].column,
  .ui.grid > .row > [class*="one wide large screen"].column,
  .ui.grid > [class*="one wide large screen"].column {
    width: 6.25%!important
  }
  .ui.column.grid > [class*="two wide large screen"].column,
  .ui.grid > .column.row > [class*="two wide large screen"].column,
  .ui.grid > .row > [class*="two wide large screen"].column,
  .ui.grid > [class*="two wide large screen"].column {
    width: 12.5%!important
  }
  .ui.column.grid > [class*="three wide large screen"].column,
  .ui.grid > .column.row > [class*="three wide large screen"].column,
  .ui.grid > .row > [class*="three wide large screen"].column,
  .ui.grid > [class*="three wide large screen"].column {
    width: 18.75%!important
  }
  .ui.column.grid > [class*="four wide large screen"].column,
  .ui.grid > .column.row > [class*="four wide large screen"].column,
  .ui.grid > .row > [class*="four wide large screen"].column,
  .ui.grid > [class*="four wide large screen"].column {
    width: 25%!important
  }
  .ui.column.grid > [class*="five wide large screen"].column,
  .ui.grid > .column.row > [class*="five wide large screen"].column,
  .ui.grid > .row > [class*="five wide large screen"].column,
  .ui.grid > [class*="five wide large screen"].column {
    width: 31.25%!important
  }
  .ui.column.grid > [class*="six wide large screen"].column,
  .ui.grid > .column.row > [class*="six wide large screen"].column,
  .ui.grid > .row > [class*="six wide large screen"].column,
  .ui.grid > [class*="six wide large screen"].column {
    width: 37.5%!important
  }
  .ui.column.grid > [class*="seven wide large screen"].column,
  .ui.grid > .column.row > [class*="seven wide large screen"].column,
  .ui.grid > .row > [class*="seven wide large screen"].column,
  .ui.grid > [class*="seven wide large screen"].column {
    width: 43.75%!important
  }
  .ui.column.grid > [class*="eight wide large screen"].column,
  .ui.grid > .column.row > [class*="eight wide large screen"].column,
  .ui.grid > .row > [class*="eight wide large screen"].column,
  .ui.grid > [class*="eight wide large screen"].column {
    width: 50%!important
  }
  .ui.column.grid > [class*="nine wide large screen"].column,
  .ui.grid > .column.row > [class*="nine wide large screen"].column,
  .ui.grid > .row > [class*="nine wide large screen"].column,
  .ui.grid > [class*="nine wide large screen"].column {
    width: 56.25%!important
  }
  .ui.column.grid > [class*="ten wide large screen"].column,
  .ui.grid > .column.row > [class*="ten wide large screen"].column,
  .ui.grid > .row > [class*="ten wide large screen"].column,
  .ui.grid > [class*="ten wide large screen"].column {
    width: 62.5%!important
  }
  .ui.column.grid > [class*="eleven wide large screen"].column,
  .ui.grid > .column.row > [class*="eleven wide large screen"].column,
  .ui.grid > .row > [class*="eleven wide large screen"].column,
  .ui.grid > [class*="eleven wide large screen"].column {
    width: 68.75%!important
  }
  .ui.column.grid > [class*="twelve wide large screen"].column,
  .ui.grid > .column.row > [class*="twelve wide large screen"].column,
  .ui.grid > .row > [class*="twelve wide large screen"].column,
  .ui.grid > [class*="twelve wide large screen"].column {
    width: 75%!important
  }
  .ui.column.grid > [class*="thirteen wide large screen"].column,
  .ui.grid > .column.row > [class*="thirteen wide large screen"].column,
  .ui.grid > .row > [class*="thirteen wide large screen"].column,
  .ui.grid > [class*="thirteen wide large screen"].column {
    width: 81.25%!important
  }
  .ui.column.grid > [class*="fourteen wide large screen"].column,
  .ui.grid > .column.row > [class*="fourteen wide large screen"].column,
  .ui.grid > .row > [class*="fourteen wide large screen"].column,
  .ui.grid > [class*="fourteen wide large screen"].column {
    width: 87.5%!important
  }
  .ui.column.grid > [class*="fifteen wide large screen"].column,
  .ui.grid > .column.row > [class*="fifteen wide large screen"].column,
  .ui.grid > .row > [class*="fifteen wide large screen"].column,
  .ui.grid > [class*="fifteen wide large screen"].column {
    width: 93.75%!important
  }
  .ui.column.grid > [class*="sixteen wide large screen"].column,
  .ui.grid > .column.row > [class*="sixteen wide large screen"].column,
  .ui.grid > .row > [class*="sixteen wide large screen"].column,
  .ui.grid > [class*="sixteen wide large screen"].column {
    width: 100%!important
  }
}
@media only screen and (min-width:1920px) {
  .ui.column.grid > [class*="one wide widescreen"].column,
  .ui.grid > .column.row > [class*="one wide widescreen"].column,
  .ui.grid > .row > [class*="one wide widescreen"].column,
  .ui.grid > [class*="one wide widescreen"].column {
    width: 6.25%!important
  }
  .ui.column.grid > [class*="two wide widescreen"].column,
  .ui.grid > .column.row > [class*="two wide widescreen"].column,
  .ui.grid > .row > [class*="two wide widescreen"].column,
  .ui.grid > [class*="two wide widescreen"].column {
    width: 12.5%!important
  }
  .ui.column.grid > [class*="three wide widescreen"].column,
  .ui.grid > .column.row > [class*="three wide widescreen"].column,
  .ui.grid > .row > [class*="three wide widescreen"].column,
  .ui.grid > [class*="three wide widescreen"].column {
    width: 18.75%!important
  }
  .ui.column.grid > [class*="four wide widescreen"].column,
  .ui.grid > .column.row > [class*="four wide widescreen"].column,
  .ui.grid > .row > [class*="four wide widescreen"].column,
  .ui.grid > [class*="four wide widescreen"].column {
    width: 25%!important
  }
  .ui.column.grid > [class*="five wide widescreen"].column,
  .ui.grid > .column.row > [class*="five wide widescreen"].column,
  .ui.grid > .row > [class*="five wide widescreen"].column,
  .ui.grid > [class*="five wide widescreen"].column {
    width: 31.25%!important
  }
  .ui.column.grid > [class*="six wide widescreen"].column,
  .ui.grid > .column.row > [class*="six wide widescreen"].column,
  .ui.grid > .row > [class*="six wide widescreen"].column,
  .ui.grid > [class*="six wide widescreen"].column {
    width: 37.5%!important
  }
  .ui.column.grid > [class*="seven wide widescreen"].column,
  .ui.grid > .column.row > [class*="seven wide widescreen"].column,
  .ui.grid > .row > [class*="seven wide widescreen"].column,
  .ui.grid > [class*="seven wide widescreen"].column {
    width: 43.75%!important
  }
  .ui.column.grid > [class*="eight wide widescreen"].column,
  .ui.grid > .column.row > [class*="eight wide widescreen"].column,
  .ui.grid > .row > [class*="eight wide widescreen"].column,
  .ui.grid > [class*="eight wide widescreen"].column {
    width: 50%!important
  }
  .ui.column.grid > [class*="nine wide widescreen"].column,
  .ui.grid > .column.row > [class*="nine wide widescreen"].column,
  .ui.grid > .row > [class*="nine wide widescreen"].column,
  .ui.grid > [class*="nine wide widescreen"].column {
    width: 56.25%!important
  }
  .ui.column.grid > [class*="ten wide widescreen"].column,
  .ui.grid > .column.row > [class*="ten wide widescreen"].column,
  .ui.grid > .row > [class*="ten wide widescreen"].column,
  .ui.grid > [class*="ten wide widescreen"].column {
    width: 62.5%!important
  }
  .ui.column.grid > [class*="eleven wide widescreen"].column,
  .ui.grid > .column.row > [class*="eleven wide widescreen"].column,
  .ui.grid > .row > [class*="eleven wide widescreen"].column,
  .ui.grid > [class*="eleven wide widescreen"].column {
    width: 68.75%!important
  }
  .ui.column.grid > [class*="twelve wide widescreen"].column,
  .ui.grid > .column.row > [class*="twelve wide widescreen"].column,
  .ui.grid > .row > [class*="twelve wide widescreen"].column,
  .ui.grid > [class*="twelve wide widescreen"].column {
    width: 75%!important
  }
  .ui.column.grid > [class*="thirteen wide widescreen"].column,
  .ui.grid > .column.row > [class*="thirteen wide widescreen"].column,
  .ui.grid > .row > [class*="thirteen wide widescreen"].column,
  .ui.grid > [class*="thirteen wide widescreen"].column {
    width: 81.25%!important
  }
  .ui.column.grid > [class*="fourteen wide widescreen"].column,
  .ui.grid > .column.row > [class*="fourteen wide widescreen"].column,
  .ui.grid > .row > [class*="fourteen wide widescreen"].column,
  .ui.grid > [class*="fourteen wide widescreen"].column {
    width: 87.5%!important
  }
  .ui.column.grid > [class*="fifteen wide widescreen"].column,
  .ui.grid > .column.row > [class*="fifteen wide widescreen"].column,
  .ui.grid > .row > [class*="fifteen wide widescreen"].column,
  .ui.grid > [class*="fifteen wide widescreen"].column {
    width: 93.75%!important
  }
  .ui.column.grid > [class*="sixteen wide widescreen"].column,
  .ui.grid > .column.row > [class*="sixteen wide widescreen"].column,
  .ui.grid > .row > [class*="sixteen wide widescreen"].column,
  .ui.grid > [class*="sixteen wide widescreen"].column {
    width: 100%!important
  }
}
.ui.centered.grid,
.ui.centered.grid > .row,
.ui.grid > .centered.row {
  text-align: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center
}
.ui.centered.grid > .column:not(.aligned):not(.justified):not(.row),
.ui.centered.grid > .row > .column:not(.aligned):not(.justified),
.ui.grid .centered.row > .column:not(.aligned):not(.justified) {
  text-align: left
}
.ui.grid > .centered.column,
.ui.grid > .row > .centered.column {
  display: block;
  margin-left: auto;
  margin-right: auto
}
.ui.grid > .relaxed.row > .column,
.ui.relaxed.grid > .column:not(.row),
.ui.relaxed.grid > .row > .column {
  padding-left: 1.5rem;
  padding-right: 1.5rem
}
.ui.grid > [class*="very relaxed"].row > .column,
.ui[class*="very relaxed"].grid > .column:not(.row),
.ui[class*="very relaxed"].grid > .row > .column {
  padding-left: 2.5rem;
  padding-right: 2.5rem
}
.ui.grid .relaxed.row + .ui.divider,
.ui.relaxed.grid .row + .ui.divider {
  margin-left: 1.5rem;
  margin-right: 1.5rem
}
.ui.grid [class*="very relaxed"].row + .ui.divider,
.ui[class*="very relaxed"].grid .row + .ui.divider {
  margin-left: 2.5rem;
  margin-right: 2.5rem
}
.ui.padded.grid:not(.vertically):not(.horizontally) {
  margin: 0!important
}
[class*="horizontally padded"].ui.grid {
  margin-left: 0!important;
  margin-right: 0!important
}
[class*="vertically padded"].ui.grid {
  margin-top: 0!important;
  margin-bottom: 0!important
}
.ui.grid [class*="left floated"].column {
  margin-right: auto
}
.ui.grid [class*="right floated"].column {
  margin-left: auto
}
.ui.divided.grid:not([class*="vertically divided"]) > .column:not(.row),
.ui.divided.grid:not([class*="vertically divided"]) > .row > .column {
  box-shadow: -1px 0 0 0 rgba(34,36,38,.15)
}
.ui[class*="vertically divided"].grid > .column:not(.row),
.ui[class*="vertically divided"].grid > .row > .column {
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding-top: 0;
  padding-bottom: 0
}
.ui[class*="vertically divided"].grid > .row {
  margin-top: 0;
  margin-bottom: 0
}
.ui.divided.grid:not([class*="vertically divided"]) > .column:first-child,
.ui.divided.grid:not([class*="vertically divided"]) > .row > .column:first-child {
  box-shadow: none
}
.ui[class*="vertically divided"].grid > .row:first-child > .column {
  margin-top: 0
}
.ui.grid > .divided.row > .column {
  box-shadow: -1px 0 0 0 rgba(34,36,38,.15)
}
.ui.grid > .divided.row > .column:first-child {
  box-shadow: none
}
.ui[class*="vertically divided"].grid > .row {
  position: relative
}
.ui[class*="vertically divided"].grid > .row:before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: calc(100% - 2rem);
  height: 1px;
  margin: 0 1rem;
  box-shadow: 0 -1px 0 0 rgba(34,36,38,.15)
}
.ui.padded.divided.grid:not(.vertically):not(.horizontally),
[class*="horizontally padded"].ui.divided.grid {
  width: 100%
}
.ui[class*="vertically divided"].grid > .row:first-child:before {
  box-shadow: none
}
.ui.inverted.divided.grid:not([class*="vertically divided"]) > .column:not(.row),
.ui.inverted.divided.grid:not([class*="vertically divided"]) > .row > .column {
  box-shadow: -1px 0 0 0 rgba(255,255,255,.1)
}
.ui.inverted.divided.grid:not([class*="vertically divided"]) > .column:not(.row):first-child,
.ui.inverted.divided.grid:not([class*="vertically divided"]) > .row > .column:first-child {
  box-shadow: none
}
.ui.inverted[class*="vertically divided"].grid > .row:before {
  box-shadow: 0 -1px 0 0 rgba(255,255,255,.1)
}
.ui.relaxed[class*="vertically divided"].grid > .row:before {
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  width: calc(100% - 3rem)
}
.ui[class*="very relaxed"][class*="vertically divided"].grid > .row:before {
  margin-left: 5rem;
  margin-right: 5rem;
  width: calc(100% - 5rem)
}
.ui.celled.grid {
  width: 100%;
  margin: 1em 0;
  box-shadow: 0 0 0 1px #d4d4d5
}
.ui.celled.grid > .row {
  width: 100%!important;
  margin: 0;
  padding: 0;
  box-shadow: 0 -1px 0 0 #d4d4d5
}
.ui.celled.grid > .column:not(.row),
.ui.celled.grid > .row > .column {
  box-shadow: -1px 0 0 0 #d4d4d5
}
.ui.celled.grid > .column:first-child,
.ui.celled.grid > .row > .column:first-child {
  box-shadow: none
}
.ui.celled.grid > .column:not(.row),
.ui.celled.grid > .row > .column {
  padding: 1em
}
.ui.relaxed.celled.grid > .column:not(.row),
.ui.relaxed.celled.grid > .row > .column {
  padding: 1.5em
}
.ui[class*="very relaxed"].celled.grid > .column:not(.row),
.ui[class*="very relaxed"].celled.grid > .row > .column {
  padding: 2em
}
.ui[class*="internally celled"].grid {
  box-shadow: none;
  margin: 0
}
.ui[class*="internally celled"].grid > .row:first-child {
  box-shadow: none
}
.ui[class*="internally celled"].grid > .row > .column:first-child {
  box-shadow: none
}
.ui.grid > .row > [class*="top aligned"].column,
.ui.grid > [class*="top aligned"].column:not(.row),
.ui.grid > [class*="top aligned"].row > .column,
.ui[class*="top aligned"].grid > .column:not(.row),
.ui[class*="top aligned"].grid > .row > .column {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  vertical-align: top;
  -ms-flex-item-align: start!important;
  align-self: flex-start!important
}
.ui.grid > .row > [class*="middle aligned"].column,
.ui.grid > [class*="middle aligned"].column:not(.row),
.ui.grid > [class*="middle aligned"].row > .column,
.ui[class*="middle aligned"].grid > .column:not(.row),
.ui[class*="middle aligned"].grid > .row > .column {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  vertical-align: middle;
  -ms-flex-item-align: center!important;
  -ms-grid-row-align: center!important;
  align-self: center!important
}
.ui.grid > .row > [class*="bottom aligned"].column,
.ui.grid > [class*="bottom aligned"].column:not(.row),
.ui.grid > [class*="bottom aligned"].row > .column,
.ui[class*="bottom aligned"].grid > .column:not(.row),
.ui[class*="bottom aligned"].grid > .row > .column {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  vertical-align: bottom;
  -ms-flex-item-align: end!important;
  align-self: flex-end!important
}
.ui.grid > .row > .stretched.column,
.ui.grid > .stretched.column:not(.row),
.ui.grid > .stretched.row > .column,
.ui.stretched.grid > .column,
.ui.stretched.grid > .row > .column {
  display: -webkit-inline-box!important;
  display: -ms-inline-flexbox!important;
  display: inline-flex!important;
  -ms-flex-item-align: stretch;
  align-self: stretch;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column
}
.ui.grid > .row > .stretched.column > *,
.ui.grid > .stretched.column:not(.row) > *,
.ui.grid > .stretched.row > .column > *,
.ui.stretched.grid > .column > *,
.ui.stretched.grid > .row > .column > * {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1
}
.ui.grid > .row > [class*="left aligned"].column.column,
.ui.grid > [class*="left aligned"].column.column,
.ui.grid > [class*="left aligned"].row > .column,
.ui[class*="left aligned"].grid > .column,
.ui[class*="left aligned"].grid > .row > .column {
  text-align: left;
  -ms-flex-item-align: inherit;
  -ms-grid-row-align: inherit;
  align-self: inherit
}
.ui.grid > .row > [class*="center aligned"].column.column,
.ui.grid > [class*="center aligned"].column.column,
.ui.grid > [class*="center aligned"].row > .column,
.ui[class*="center aligned"].grid > .column,
.ui[class*="center aligned"].grid > .row > .column {
  text-align: center;
  -ms-flex-item-align: inherit;
  -ms-grid-row-align: inherit;
  align-self: inherit
}
.ui[class*="center aligned"].grid {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center
}
.ui.grid > .row > [class*="right aligned"].column.column,
.ui.grid > [class*="right aligned"].column.column,
.ui.grid > [class*="right aligned"].row > .column,
.ui[class*="right aligned"].grid > .column,
.ui[class*="right aligned"].grid > .row > .column {
  text-align: right;
  -ms-flex-item-align: inherit;
  -ms-grid-row-align: inherit;
  align-self: inherit
}
.ui.grid > .justified.column.column,
.ui.grid > .justified.row > .column,
.ui.grid > .row > .justified.column.column,
.ui.justified.grid > .column,
.ui.justified.grid > .row > .column {
  text-align: justify;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto
}
.ui.grid > .row > .black.column,
.ui.grid > .row > .blue.column,
.ui.grid > .row > .brown.column,
.ui.grid > .row > .green.column,
.ui.grid > .row > .grey.column,
.ui.grid > .row > .olive.column,
.ui.grid > .row > .orange.column,
.ui.grid > .row > .pink.column,
.ui.grid > .row > .purple.column,
.ui.grid > .row > .red.column,
.ui.grid > .row > .teal.column,
.ui.grid > .row > .violet.column,
.ui.grid > .row > .yellow.column {
  margin-top: -1rem;
  margin-bottom: -1rem;
  padding-top: 1rem;
  padding-bottom: 1rem
}
.ui.grid > .red.column,
.ui.grid > .red.row,
.ui.grid > .row > .red.column {
  background-color: #db2828!important;
  color: #fff
}
.ui.grid > .orange.column,
.ui.grid > .orange.row,
.ui.grid > .row > .orange.column {
  background-color: #f2711c!important;
  color: #fff
}
.ui.grid > .row > .yellow.column,
.ui.grid > .yellow.column,
.ui.grid > .yellow.row {
  background-color: #fbbd08!important;
  color: #fff
}
.ui.grid > .olive.column,
.ui.grid > .olive.row,
.ui.grid > .row > .olive.column {
  background-color: #b5cc18!important;
  color: #fff
}
.ui.grid > .green.column,
.ui.grid > .green.row,
.ui.grid > .row > .green.column {
  background-color: #21ba45!important;
  color: #fff
}
.ui.grid > .row > .teal.column,
.ui.grid > .teal.column,
.ui.grid > .teal.row {
  background-color: #00b5ad!important;
  color: #fff
}
.ui.grid > .blue.column,
.ui.grid > .blue.row,
.ui.grid > .row > .blue.column {
  background-color: #2185d0!important;
  color: #fff
}
.ui.grid > .row > .violet.column,
.ui.grid > .violet.column,
.ui.grid > .violet.row {
  background-color: #6435c9!important;
  color: #fff
}
.ui.grid > .purple.column,
.ui.grid > .purple.row,
.ui.grid > .row > .purple.column {
  background-color: #a333c8!important;
  color: #fff
}
.ui.grid > .pink.column,
.ui.grid > .pink.row,
.ui.grid > .row > .pink.column {
  background-color: #e03997!important;
  color: #fff
}
.ui.grid > .brown.column,
.ui.grid > .brown.row,
.ui.grid > .row > .brown.column {
  background-color: #a5673f!important;
  color: #fff
}
.ui.grid > .grey.column,
.ui.grid > .grey.row,
.ui.grid > .row > .grey.column {
  background-color: #767676!important;
  color: #fff
}
.ui.grid > .black.column,
.ui.grid > .black.row,
.ui.grid > .row > .black.column {
  background-color: #1b1c1d!important;
  color: #fff
}
.ui.grid > [class*="equal width"].row > .column,
.ui[class*="equal width"].grid > .column:not(.row),
.ui[class*="equal width"].grid > .row > .column {
  display: inline-block;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1
}
.ui.grid > [class*="equal width"].row > .wide.column,
.ui[class*="equal width"].grid > .row > .wide.column,
.ui[class*="equal width"].grid > .wide.column {
  -webkit-box-flex: 0;
  -ms-flex-positive: 0;
  flex-grow: 0
}
@media only screen and (max-width:767px) {
  .ui.grid > [class*="mobile reversed"].row,
  .ui[class*="mobile reversed"].grid,
  .ui[class*="mobile reversed"].grid > .row {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse
  }
  .ui.stackable[class*="mobile reversed"],
  .ui[class*="mobile vertically reversed"].grid {
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse
  }
  .ui[class*="mobile reversed"].divided.grid:not([class*="vertically divided"]) > .column:first-child,
  .ui[class*="mobile reversed"].divided.grid:not([class*="vertically divided"]) > .row > .column:first-child {
    box-shadow: -1px 0 0 0 rgba(34,36,38,.15)
  }
  .ui[class*="mobile reversed"].divided.grid:not([class*="vertically divided"]) > .column:last-child,
  .ui[class*="mobile reversed"].divided.grid:not([class*="vertically divided"]) > .row > .column:last-child {
    box-shadow: none
  }
  .ui.grid[class*="vertically divided"][class*="mobile vertically reversed"] > .row:first-child:before {
    box-shadow: 0 -1px 0 0 rgba(34,36,38,.15)
  }
  .ui.grid[class*="vertically divided"][class*="mobile vertically reversed"] > .row:last-child:before {
    box-shadow: none
  }
  .ui[class*="mobile reversed"].celled.grid > .row > .column:first-child {
    box-shadow: -1px 0 0 0 #d4d4d5
  }
  .ui[class*="mobile reversed"].celled.grid > .row > .column:last-child {
    box-shadow: none
  }
}
@media only screen and (min-width:768px) and (max-width:991px) {
  .ui.grid > [class*="tablet reversed"].row,
  .ui[class*="tablet reversed"].grid,
  .ui[class*="tablet reversed"].grid > .row {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse
  }
  .ui[class*="tablet vertically reversed"].grid {
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse
  }
  .ui[class*="tablet reversed"].divided.grid:not([class*="vertically divided"]) > .column:first-child,
  .ui[class*="tablet reversed"].divided.grid:not([class*="vertically divided"]) > .row > .column:first-child {
    box-shadow: -1px 0 0 0 rgba(34,36,38,.15)
  }
  .ui[class*="tablet reversed"].divided.grid:not([class*="vertically divided"]) > .column:last-child,
  .ui[class*="tablet reversed"].divided.grid:not([class*="vertically divided"]) > .row > .column:last-child {
    box-shadow: none
  }
  .ui.grid[class*="vertically divided"][class*="tablet vertically reversed"] > .row:first-child:before {
    box-shadow: 0 -1px 0 0 rgba(34,36,38,.15)
  }
  .ui.grid[class*="vertically divided"][class*="tablet vertically reversed"] > .row:last-child:before {
    box-shadow: none
  }
  .ui[class*="tablet reversed"].celled.grid > .row > .column:first-child {
    box-shadow: -1px 0 0 0 #d4d4d5
  }
  .ui[class*="tablet reversed"].celled.grid > .row > .column:last-child {
    box-shadow: none
  }
}
@media only screen and (min-width:992px) {
  .ui.grid > [class*="computer reversed"].row,
  .ui[class*="computer reversed"].grid,
  .ui[class*="computer reversed"].grid > .row {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse
  }
  .ui[class*="computer vertically reversed"].grid {
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse
  }
  .ui[class*="computer reversed"].divided.grid:not([class*="vertically divided"]) > .column:first-child,
  .ui[class*="computer reversed"].divided.grid:not([class*="vertically divided"]) > .row > .column:first-child {
    box-shadow: -1px 0 0 0 rgba(34,36,38,.15)
  }
  .ui[class*="computer reversed"].divided.grid:not([class*="vertically divided"]) > .column:last-child,
  .ui[class*="computer reversed"].divided.grid:not([class*="vertically divided"]) > .row > .column:last-child {
    box-shadow: none
  }
  .ui.grid[class*="vertically divided"][class*="computer vertically reversed"] > .row:first-child:before {
    box-shadow: 0 -1px 0 0 rgba(34,36,38,.15)
  }
  .ui.grid[class*="vertically divided"][class*="computer vertically reversed"] > .row:last-child:before {
    box-shadow: none
  }
  .ui[class*="computer reversed"].celled.grid > .row > .column:first-child {
    box-shadow: -1px 0 0 0 #d4d4d5
  }
  .ui[class*="computer reversed"].celled.grid > .row > .column:last-child {
    box-shadow: none
  }
}
@media only screen and (min-width:768px) and (max-width:991px) {
  .ui.doubling.grid {
    width: auto
  }
  .ui.doubling.grid > .row,
  .ui.grid > .doubling.row {
    margin: 0!important;
    padding: 0!important
  }
  .ui.doubling.grid > .row > .column,
  .ui.grid > .doubling.row > .column {
    display: inline-block!important;
    padding-top: 1rem!important;
    padding-bottom: 1rem!important;
    box-shadow: none!important;
    margin: 0
  }
  .ui.grid > [class*="two column"].doubling.row.row > .column,
  .ui[class*="two column"].doubling.grid > .column:not(.row),
  .ui[class*="two column"].doubling.grid > .row > .column {
    width: 100%!important
  }
  .ui.grid > [class*="three column"].doubling.row.row > .column,
  .ui[class*="three column"].doubling.grid > .column:not(.row),
  .ui[class*="three column"].doubling.grid > .row > .column {
    width: 50%!important
  }
  .ui.grid > [class*="four column"].doubling.row.row > .column,
  .ui[class*="four column"].doubling.grid > .column:not(.row),
  .ui[class*="four column"].doubling.grid > .row > .column {
    width: 50%!important
  }
  .ui.grid > [class*="five column"].doubling.row.row > .column,
  .ui[class*="five column"].doubling.grid > .column:not(.row),
  .ui[class*="five column"].doubling.grid > .row > .column {
    width: 33.33333333%!important
  }
  .ui.grid > [class*="six column"].doubling.row.row > .column,
  .ui[class*="six column"].doubling.grid > .column:not(.row),
  .ui[class*="six column"].doubling.grid > .row > .column {
    width: 33.33333333%!important
  }
  .ui.grid > [class*="seven column"].doubling.row.row > .column,
  .ui[class*="seven column"].doubling.grid > .column:not(.row),
  .ui[class*="seven column"].doubling.grid > .row > .column {
    width: 33.33333333%!important
  }
  .ui.grid > [class*="eight column"].doubling.row.row > .column,
  .ui[class*="eight column"].doubling.grid > .column:not(.row),
  .ui[class*="eight column"].doubling.grid > .row > .column {
    width: 25%!important
  }
  .ui.grid > [class*="nine column"].doubling.row.row > .column,
  .ui[class*="nine column"].doubling.grid > .column:not(.row),
  .ui[class*="nine column"].doubling.grid > .row > .column {
    width: 25%!important
  }
  .ui.grid > [class*="ten column"].doubling.row.row > .column,
  .ui[class*="ten column"].doubling.grid > .column:not(.row),
  .ui[class*="ten column"].doubling.grid > .row > .column {
    width: 20%!important
  }
  .ui.grid > [class*="eleven column"].doubling.row.row > .column,
  .ui[class*="eleven column"].doubling.grid > .column:not(.row),
  .ui[class*="eleven column"].doubling.grid > .row > .column {
    width: 20%!important
  }
  .ui.grid > [class*="twelve column"].doubling.row.row > .column,
  .ui[class*="twelve column"].doubling.grid > .column:not(.row),
  .ui[class*="twelve column"].doubling.grid > .row > .column {
    width: 16.66666667%!important
  }
  .ui.grid > [class*="thirteen column"].doubling.row.row > .column,
  .ui[class*="thirteen column"].doubling.grid > .column:not(.row),
  .ui[class*="thirteen column"].doubling.grid > .row > .column {
    width: 16.66666667%!important
  }
  .ui.grid > [class*="fourteen column"].doubling.row.row > .column,
  .ui[class*="fourteen column"].doubling.grid > .column:not(.row),
  .ui[class*="fourteen column"].doubling.grid > .row > .column {
    width: 14.28571429%!important
  }
  .ui.grid > [class*="fifteen column"].doubling.row.row > .column,
  .ui[class*="fifteen column"].doubling.grid > .column:not(.row),
  .ui[class*="fifteen column"].doubling.grid > .row > .column {
    width: 14.28571429%!important
  }
  .ui.grid > [class*="sixteen column"].doubling.row.row > .column,
  .ui[class*="sixteen column"].doubling.grid > .column:not(.row),
  .ui[class*="sixteen column"].doubling.grid > .row > .column {
    width: 12.5%!important
  }
}
@media only screen and (max-width:767px) {
  .ui.doubling.grid > .row,
  .ui.grid > .doubling.row {
    margin: 0!important;
    padding: 0!important
  }
  .ui.doubling.grid > .row > .column,
  .ui.grid > .doubling.row > .column {
    padding-top: 1rem!important;
    padding-bottom: 1rem!important;
    margin: 0!important;
    box-shadow: none!important
  }
  .ui.grid > [class*="two column"].doubling:not(.stackable).row.row > .column,
  .ui[class*="two column"].doubling:not(.stackable).grid > .column:not(.row),
  .ui[class*="two column"].doubling:not(.stackable).grid > .row > .column {
    width: 100%!important
  }
  .ui.grid > [class*="three column"].doubling:not(.stackable).row.row > .column,
  .ui[class*="three column"].doubling:not(.stackable).grid > .column:not(.row),
  .ui[class*="three column"].doubling:not(.stackable).grid > .row > .column {
    width: 50%!important
  }
  .ui.grid > [class*="four column"].doubling:not(.stackable).row.row > .column,
  .ui[class*="four column"].doubling:not(.stackable).grid > .column:not(.row),
  .ui[class*="four column"].doubling:not(.stackable).grid > .row > .column {
    width: 50%!important
  }
  .ui.grid > [class*="five column"].doubling:not(.stackable).row.row > .column,
  .ui[class*="five column"].doubling:not(.stackable).grid > .column:not(.row),
  .ui[class*="five column"].doubling:not(.stackable).grid > .row > .column {
    width: 50%!important
  }
  .ui.grid > [class*="six column"].doubling:not(.stackable).row.row > .column,
  .ui[class*="six column"].doubling:not(.stackable).grid > .column:not(.row),
  .ui[class*="six column"].doubling:not(.stackable).grid > .row > .column {
    width: 50%!important
  }
  .ui.grid > [class*="seven column"].doubling:not(.stackable).row.row > .column,
  .ui[class*="seven column"].doubling:not(.stackable).grid > .column:not(.row),
  .ui[class*="seven column"].doubling:not(.stackable).grid > .row > .column {
    width: 50%!important
  }
  .ui.grid > [class*="eight column"].doubling:not(.stackable).row.row > .column,
  .ui[class*="eight column"].doubling:not(.stackable).grid > .column:not(.row),
  .ui[class*="eight column"].doubling:not(.stackable).grid > .row > .column {
    width: 50%!important
  }
  .ui.grid > [class*="nine column"].doubling:not(.stackable).row.row > .column,
  .ui[class*="nine column"].doubling:not(.stackable).grid > .column:not(.row),
  .ui[class*="nine column"].doubling:not(.stackable).grid > .row > .column {
    width: 33.33333333%!important
  }
  .ui.grid > [class*="ten column"].doubling:not(.stackable).row.row > .column,
  .ui[class*="ten column"].doubling:not(.stackable).grid > .column:not(.row),
  .ui[class*="ten column"].doubling:not(.stackable).grid > .row > .column {
    width: 33.33333333%!important
  }
  .ui.grid > [class*="eleven column"].doubling:not(.stackable).row.row > .column,
  .ui[class*="eleven column"].doubling:not(.stackable).grid > .column:not(.row),
  .ui[class*="eleven column"].doubling:not(.stackable).grid > .row > .column {
    width: 33.33333333%!important
  }
  .ui.grid > [class*="twelve column"].doubling:not(.stackable).row.row > .column,
  .ui[class*="twelve column"].doubling:not(.stackable).grid > .column:not(.row),
  .ui[class*="twelve column"].doubling:not(.stackable).grid > .row > .column {
    width: 33.33333333%!important
  }
  .ui.grid > [class*="thirteen column"].doubling:not(.stackable).row.row > .column,
  .ui[class*="thirteen column"].doubling:not(.stackable).grid > .column:not(.row),
  .ui[class*="thirteen column"].doubling:not(.stackable).grid > .row > .column {
    width: 33.33333333%!important
  }
  .ui.grid > [class*="fourteen column"].doubling:not(.stackable).row.row > .column,
  .ui[class*="fourteen column"].doubling:not(.stackable).grid > .column:not(.row),
  .ui[class*="fourteen column"].doubling:not(.stackable).grid > .row > .column {
    width: 25%!important
  }
  .ui.grid > [class*="fifteen column"].doubling:not(.stackable).row.row > .column,
  .ui[class*="fifteen column"].doubling:not(.stackable).grid > .column:not(.row),
  .ui[class*="fifteen column"].doubling:not(.stackable).grid > .row > .column {
    width: 25%!important
  }
  .ui.grid > [class*="sixteen column"].doubling:not(.stackable).row.row > .column,
  .ui[class*="sixteen column"].doubling:not(.stackable).grid > .column:not(.row),
  .ui[class*="sixteen column"].doubling:not(.stackable).grid > .row > .column {
    width: 25%!important
  }
}
@media only screen and (max-width:767px) {
  .ui.stackable.grid {
    width: auto;
    margin-left: 0!important;
    margin-right: 0!important
  }
  .ui.grid > .stackable.stackable.row > .column,
  .ui.stackable.grid > .column.grid > .column,
  .ui.stackable.grid > .column.row > .column,
  .ui.stackable.grid > .column:not(.row),
  .ui.stackable.grid > .row > .column,
  .ui.stackable.grid > .row > .wide.column,
  .ui.stackable.grid > .wide.column {
    width: 100%!important;
    margin: 0 0!important;
    box-shadow: none!important;
    padding: 1rem 1rem!important
  }
  .ui.stackable.grid:not(.vertically) > .row {
    margin: 0;
    padding: 0
  }
  .ui.container > .ui.stackable.grid > .column,
  .ui.container > .ui.stackable.grid > .row > .column {
    padding-left: 0!important;
    padding-right: 0!important
  }
  .ui.grid .ui.stackable.grid,
  .ui.segment:not(.vertical) .ui.stackable.page.grid {
    margin-left: -1rem!important;
    margin-right: -1rem!important
  }
  .ui.stackable.celled.grid > .column:not(.row):first-child,
  .ui.stackable.celled.grid > .row:first-child > .column:first-child,
  .ui.stackable.divided.grid > .column:not(.row):first-child,
  .ui.stackable.divided.grid > .row:first-child > .column:first-child {
    border-top: none!important
  }
  .ui.inverted.stackable.celled.grid > .column:not(.row),
  .ui.inverted.stackable.celled.grid > .row > .column,
  .ui.inverted.stackable.divided.grid > .column:not(.row),
  .ui.inverted.stackable.divided.grid > .row > .column {
    border-top: 1px solid rgba(255,255,255,.1)
  }
  .ui.stackable.celled.grid > .column:not(.row),
  .ui.stackable.celled.grid > .row > .column,
  .ui.stackable.divided:not(.vertically).grid > .column:not(.row),
  .ui.stackable.divided:not(.vertically).grid > .row > .column {
    border-top: 1px solid rgba(34,36,38,.15);
    box-shadow: none!important;
    padding-top: 2rem!important;
    padding-bottom: 2rem!important
  }
  .ui.stackable.celled.grid > .row {
    box-shadow: none!important
  }
  .ui.stackable.divided:not(.vertically).grid > .column:not(.row),
  .ui.stackable.divided:not(.vertically).grid > .row > .column {
    padding-left: 0!important;
    padding-right: 0!important
  }
}
@media only screen and (max-width:767px) {
  .ui.grid.grid.grid > .row > [class*="tablet only"].column:not(.mobile),
  .ui.grid.grid.grid > [class*="tablet only"].column:not(.mobile),
  .ui.grid.grid.grid > [class*="tablet only"].row:not(.mobile),
  .ui[class*="tablet only"].grid.grid.grid:not(.mobile) {
    display: none!important
  }
  .ui.grid.grid.grid > .row > [class*="computer only"].column:not(.mobile),
  .ui.grid.grid.grid > [class*="computer only"].column:not(.mobile),
  .ui.grid.grid.grid > [class*="computer only"].row:not(.mobile),
  .ui[class*="computer only"].grid.grid.grid:not(.mobile) {
    display: none!important
  }
  .ui.grid.grid.grid > .row > [class*="large screen only"].column:not(.mobile),
  .ui.grid.grid.grid > [class*="large screen only"].column:not(.mobile),
  .ui.grid.grid.grid > [class*="large screen only"].row:not(.mobile),
  .ui[class*="large screen only"].grid.grid.grid:not(.mobile) {
    display: none!important
  }
  .ui.grid.grid.grid > .row > [class*="widescreen only"].column:not(.mobile),
  .ui.grid.grid.grid > [class*="widescreen only"].column:not(.mobile),
  .ui.grid.grid.grid > [class*="widescreen only"].row:not(.mobile),
  .ui[class*="widescreen only"].grid.grid.grid:not(.mobile) {
    display: none!important
  }
}
@media only screen and (min-width:768px) and (max-width:991px) {
  .ui.grid.grid.grid > .row > [class*="mobile only"].column:not(.tablet),
  .ui.grid.grid.grid > [class*="mobile only"].column:not(.tablet),
  .ui.grid.grid.grid > [class*="mobile only"].row:not(.tablet),
  .ui[class*="mobile only"].grid.grid.grid:not(.tablet) {
    display: none!important
  }
  .ui.grid.grid.grid > .row > [class*="computer only"].column:not(.tablet),
  .ui.grid.grid.grid > [class*="computer only"].column:not(.tablet),
  .ui.grid.grid.grid > [class*="computer only"].row:not(.tablet),
  .ui[class*="computer only"].grid.grid.grid:not(.tablet) {
    display: none!important
  }
  .ui.grid.grid.grid > .row > [class*="large screen only"].column:not(.mobile),
  .ui.grid.grid.grid > [class*="large screen only"].column:not(.mobile),
  .ui.grid.grid.grid > [class*="large screen only"].row:not(.mobile),
  .ui[class*="large screen only"].grid.grid.grid:not(.mobile) {
    display: none!important
  }
  .ui.grid.grid.grid > .row > [class*="widescreen only"].column:not(.mobile),
  .ui.grid.grid.grid > [class*="widescreen only"].column:not(.mobile),
  .ui.grid.grid.grid > [class*="widescreen only"].row:not(.mobile),
  .ui[class*="widescreen only"].grid.grid.grid:not(.mobile) {
    display: none!important
  }
}
@media only screen and (min-width:992px) and (max-width:1199px) {
  .ui.grid.grid.grid > .row > [class*="mobile only"].column:not(.computer),
  .ui.grid.grid.grid > [class*="mobile only"].column:not(.computer),
  .ui.grid.grid.grid > [class*="mobile only"].row:not(.computer),
  .ui[class*="mobile only"].grid.grid.grid:not(.computer) {
    display: none!important
  }
  .ui.grid.grid.grid > .row > [class*="tablet only"].column:not(.computer),
  .ui.grid.grid.grid > [class*="tablet only"].column:not(.computer),
  .ui.grid.grid.grid > [class*="tablet only"].row:not(.computer),
  .ui[class*="tablet only"].grid.grid.grid:not(.computer) {
    display: none!important
  }
  .ui.grid.grid.grid > .row > [class*="large screen only"].column:not(.mobile),
  .ui.grid.grid.grid > [class*="large screen only"].column:not(.mobile),
  .ui.grid.grid.grid > [class*="large screen only"].row:not(.mobile),
  .ui[class*="large screen only"].grid.grid.grid:not(.mobile) {
    display: none!important
  }
  .ui.grid.grid.grid > .row > [class*="widescreen only"].column:not(.mobile),
  .ui.grid.grid.grid > [class*="widescreen only"].column:not(.mobile),
  .ui.grid.grid.grid > [class*="widescreen only"].row:not(.mobile),
  .ui[class*="widescreen only"].grid.grid.grid:not(.mobile) {
    display: none!important
  }
}
@media only screen and (min-width:1200px) and (max-width:1919px) {
  .ui.grid.grid.grid > .row > [class*="mobile only"].column:not(.computer),
  .ui.grid.grid.grid > [class*="mobile only"].column:not(.computer),
  .ui.grid.grid.grid > [class*="mobile only"].row:not(.computer),
  .ui[class*="mobile only"].grid.grid.grid:not(.computer) {
    display: none!important
  }
  .ui.grid.grid.grid > .row > [class*="tablet only"].column:not(.computer),
  .ui.grid.grid.grid > [class*="tablet only"].column:not(.computer),
  .ui.grid.grid.grid > [class*="tablet only"].row:not(.computer),
  .ui[class*="tablet only"].grid.grid.grid:not(.computer) {
    display: none!important
  }
  .ui.grid.grid.grid > .row > [class*="widescreen only"].column:not(.mobile),
  .ui.grid.grid.grid > [class*="widescreen only"].column:not(.mobile),
  .ui.grid.grid.grid > [class*="widescreen only"].row:not(.mobile),
  .ui[class*="widescreen only"].grid.grid.grid:not(.mobile) {
    display: none!important
  }
}
@media only screen and (min-width:1920px) {
  .ui.grid.grid.grid > .row > [class*="mobile only"].column:not(.computer),
  .ui.grid.grid.grid > [class*="mobile only"].column:not(.computer),
  .ui.grid.grid.grid > [class*="mobile only"].row:not(.computer),
  .ui[class*="mobile only"].grid.grid.grid:not(.computer) {
    display: none!important
  }
  .ui.grid.grid.grid > .row > [class*="tablet only"].column:not(.computer),
  .ui.grid.grid.grid > [class*="tablet only"].column:not(.computer),
  .ui.grid.grid.grid > [class*="tablet only"].row:not(.computer),
  .ui[class*="tablet only"].grid.grid.grid:not(.computer) {
    display: none!important
  }
}
/*!
 * # Semantic UI 2.2.10 - Item
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
.ui.card,
.ui.cards > .card {
  max-width: 100%;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 290px;
  min-height: 0;
  background: #fff;
  padding: 0;
  border: none;
  border-radius: .28571429rem;
  box-shadow: 0 1px 3px 0 #d4d4d5,0 0 0 1px #d4d4d5;
  -webkit-transition: box-shadow .1s ease,-webkit-transform .1s ease;
  transition: box-shadow .1s ease,-webkit-transform .1s ease;
  transition: box-shadow .1s ease,transform .1s ease;
  transition: box-shadow .1s ease,transform .1s ease,-webkit-transform .1s ease;
  z-index: ''
}
.ui.card {
  margin: 1em 0
}
.ui.card a,
.ui.cards > .card a {
  cursor: pointer
}
.ui.card:first-child {
  margin-top: 0
}
.ui.card:last-child {
  margin-bottom: 0
}
.ui.cards {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: -.875em -.5em;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap
}
.ui.cards > .card {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: .875em .5em;
  float: none
}
.ui.card:after,
.ui.cards:after {
  display: block;
  content: ' ';
  height: 0;
  clear: both;
  overflow: hidden;
  visibility: hidden
}
.ui.cards ~ .ui.cards {
  margin-top: .875em
}
.ui.card > :first-child,
.ui.cards > .card > :first-child {
  border-radius: .28571429rem .28571429rem 0 0!important;
  border-top: none!important
}
.ui.card > :last-child,
.ui.cards > .card > :last-child {
  border-radius: 0 0 .28571429rem .28571429rem!important
}
.ui.card > :only-child,
.ui.cards > .card > :only-child {
  border-radius: .28571429rem!important
}
.ui.card > .image,
.ui.cards > .card > .image {
  position: relative;
  display: block;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  padding: 0;
  background: rgba(0,0,0,.05)
}
.ui.card > .image > img,
.ui.cards > .card > .image > img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: inherit
}
.ui.card > .image:not(.ui) > img,
.ui.cards > .card > .image:not(.ui) > img {
  border: none
}
.ui.card > .content,
.ui.cards > .card > .content {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  border: none;
  border-top: 1px solid rgba(34,36,38,.1);
  background: 0 0;
  margin: 0;
  padding: 1em 1em;
  box-shadow: none;
  font-size: 1em;
  border-radius: 0
}
.ui.card > .content:after,
.ui.cards > .card > .content:after {
  display: block;
  content: ' ';
  height: 0;
  clear: both;
  overflow: hidden;
  visibility: hidden
}
.ui.card > .content > .header,
.ui.cards > .card > .content > .header {
  display: block;
  margin: '';
  font-family: Lato,Arial,Helvetica,sans-serif;
  color: rgba(0,0,0,.85)
}
.ui.card > .content > .header:not(.ui),
.ui.cards > .card > .content > .header:not(.ui) {
  font-weight: 700;
  font-size: 1.28571429em;
  margin-top: -.21425em;
  line-height: 1.28571429em
}
.ui.card > .content > .header + .description,
.ui.card > .content > .meta + .description,
.ui.cards > .card > .content > .header + .description,
.ui.cards > .card > .content > .meta + .description {
  margin-top: .5em
}
.ui.card [class*="left floated"],
.ui.cards > .card [class*="left floated"] {
  float: left
}
.ui.card [class*="right floated"],
.ui.cards > .card [class*="right floated"] {
  float: right
}
.ui.card [class*="left aligned"],
.ui.cards > .card [class*="left aligned"] {
  text-align: left
}
.ui.card [class*="center aligned"],
.ui.cards > .card [class*="center aligned"] {
  text-align: center
}
.ui.card [class*="right aligned"],
.ui.cards > .card [class*="right aligned"] {
  text-align: right
}
.ui.card .content img,
.ui.cards > .card .content img {
  display: inline-block;
  vertical-align: middle;
  width: ''
}
.ui.card .avatar img,
.ui.card img.avatar,
.ui.cards > .card .avatar img,
.ui.cards > .card img.avatar {
  width: 2em;
  height: 2em;
  border-radius: 500rem
}
.ui.card > .content > .description,
.ui.cards > .card > .content > .description {
  clear: both;
  color: rgba(0,0,0,.68)
}
.ui.card > .content p,
.ui.cards > .card > .content p {
  margin: 0 0 .5em
}
.ui.card > .content p:last-child,
.ui.cards > .card > .content p:last-child {
  margin-bottom: 0
}
.ui.card .meta,
.ui.cards > .card .meta {
  font-size: 1em;
  color: rgba(0,0,0,.4)
}
.ui.card .meta *,
.ui.cards > .card .meta * {
  margin-right: .3em
}
.ui.card .meta :last-child,
.ui.cards > .card .meta :last-child {
  margin-right: 0
}
.ui.card .meta [class*="right floated"],
.ui.cards > .card .meta [class*="right floated"] {
  margin-right: 0;
  margin-left: .3em
}
.ui.card > .content a:not(.ui),
.ui.cards > .card > .content a:not(.ui) {
  color: '';
  -webkit-transition: color .1s ease;
  transition: color .1s ease
}
.ui.card > .content a:not(.ui):hover,
.ui.cards > .card > .content a:not(.ui):hover {
  color: ''
}
.ui.card > .content > a.header,
.ui.cards > .card > .content > a.header {
  color: rgba(0,0,0,.85)
}
.ui.card > .content > a.header:hover,
.ui.cards > .card > .content > a.header:hover {
  color: #1e70bf
}
.ui.card .meta > a:not(.ui),
.ui.cards > .card .meta > a:not(.ui) {
  color: rgba(0,0,0,.4)
}
.ui.card .meta > a:not(.ui):hover,
.ui.cards > .card .meta > a:not(.ui):hover {
  color: rgba(0,0,0,.87)
}
.ui.card > .button,
.ui.card > .buttons,
.ui.cards > .card > .button,
.ui.cards > .card > .buttons {
  margin: 0 -1px;
  width: calc(100% + 2px)
}
.ui.card .dimmer,
.ui.cards > .card .dimmer {
  background-color: '';
  z-index: 10
}
.ui.card > .content .star.icon,
.ui.cards > .card > .content .star.icon {
  cursor: pointer;
  opacity: .75;
  -webkit-transition: color .1s ease;
  transition: color .1s ease
}
.ui.card > .content .star.icon:hover,
.ui.cards > .card > .content .star.icon:hover {
  opacity: 1;
  color: #ffb70a
}
.ui.card > .content .active.star.icon,
.ui.cards > .card > .content .active.star.icon {
  color: #ffe623
}
.ui.card > .content .like.icon,
.ui.cards > .card > .content .like.icon {
  cursor: pointer;
  opacity: .75;
  -webkit-transition: color .1s ease;
  transition: color .1s ease
}
.ui.card > .content .like.icon:hover,
.ui.cards > .card > .content .like.icon:hover {
  opacity: 1;
  color: #ff2733
}
.ui.card > .content .active.like.icon,
.ui.cards > .card > .content .active.like.icon {
  color: #ff2733
}
.ui.card > .extra,
.ui.cards > .card > .extra {
  max-width: 100%;
  min-height: 0!important;
  -webkit-box-flex: 0;
  -ms-flex-positive: 0;
  flex-grow: 0;
  border-top: 1px solid rgba(0,0,0,.05)!important;
  position: static;
  background: 0 0;
  width: auto;
  margin: 0 0;
  padding: .75em 1em;
  top: 0;
  left: 0;
  color: rgba(0,0,0,.4);
  box-shadow: none;
  -webkit-transition: color .1s ease;
  transition: color .1s ease
}
.ui.card > .extra a:not(.ui),
.ui.cards > .card > .extra a:not(.ui) {
  color: rgba(0,0,0,.4)
}
.ui.card > .extra a:not(.ui):hover,
.ui.cards > .card > .extra a:not(.ui):hover {
  color: #1e70bf
}
.ui.raised.card,
.ui.raised.cards > .card {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.15)
}
.ui.link.cards .raised.card:hover,
.ui.link.raised.card:hover,
.ui.raised.cards a.card:hover,
a.ui.raised.card:hover {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 4px 0 rgba(34,36,38,.15),0 2px 10px 0 rgba(34,36,38,.25)
}
.ui.raised.card,
.ui.raised.cards > .card {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 4px 0 rgba(34,36,38,.12),0 2px 10px 0 rgba(34,36,38,.15)
}
.ui.centered.cards {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center
}
.ui.centered.card {
  margin-left: auto;
  margin-right: auto
}
.ui.fluid.card {
  width: 100%;
  max-width: 9999px
}
.ui.cards a.card,
.ui.link.card,
.ui.link.cards .card,
a.ui.card {
  -webkit-transform: none;
  transform: none
}
.ui.cards a.card:hover,
.ui.link.card:hover,
.ui.link.cards .card:hover,
a.ui.card:hover {
  cursor: pointer;
  z-index: 5;
  background: #fff;
  border: none;
  box-shadow: 0 1px 3px 0 #bcbdbd,0 0 0 1px #d4d4d5;
  -webkit-transform: translateY(-3px);
  transform: translateY(-3px)
}
.ui.cards > .red.card,
.ui.red.card,
.ui.red.cards > .card {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 0 0 #db2828,0 1px 3px 0 #d4d4d5
}
.ui.cards > .red.card:hover,
.ui.red.card:hover,
.ui.red.cards > .card:hover {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 0 0 #d01919,0 1px 3px 0 #bcbdbd
}
.ui.cards > .orange.card,
.ui.orange.card,
.ui.orange.cards > .card {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 0 0 #f2711c,0 1px 3px 0 #d4d4d5
}
.ui.cards > .orange.card:hover,
.ui.orange.card:hover,
.ui.orange.cards > .card:hover {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 0 0 #f26202,0 1px 3px 0 #bcbdbd
}
.ui.cards > .yellow.card,
.ui.yellow.card,
.ui.yellow.cards > .card {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 0 0 #fbbd08,0 1px 3px 0 #d4d4d5
}
.ui.cards > .yellow.card:hover,
.ui.yellow.card:hover,
.ui.yellow.cards > .card:hover {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 0 0 #eaae00,0 1px 3px 0 #bcbdbd
}
.ui.cards > .olive.card,
.ui.olive.card,
.ui.olive.cards > .card {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 0 0 #b5cc18,0 1px 3px 0 #d4d4d5
}
.ui.cards > .olive.card:hover,
.ui.olive.card:hover,
.ui.olive.cards > .card:hover {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 0 0 #a7bd0d,0 1px 3px 0 #bcbdbd
}
.ui.cards > .green.card,
.ui.green.card,
.ui.green.cards > .card {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 0 0 #21ba45,0 1px 3px 0 #d4d4d5
}
.ui.cards > .green.card:hover,
.ui.green.card:hover,
.ui.green.cards > .card:hover {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 0 0 #16ab39,0 1px 3px 0 #bcbdbd
}
.ui.cards > .teal.card,
.ui.teal.card,
.ui.teal.cards > .card {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 0 0 #00b5ad,0 1px 3px 0 #d4d4d5
}
.ui.cards > .teal.card:hover,
.ui.teal.card:hover,
.ui.teal.cards > .card:hover {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 0 0 #009c95,0 1px 3px 0 #bcbdbd
}
.ui.blue.card,
.ui.blue.cards > .card,
.ui.cards > .blue.card {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 0 0 #2185d0,0 1px 3px 0 #d4d4d5
}
.ui.blue.card:hover,
.ui.blue.cards > .card:hover,
.ui.cards > .blue.card:hover {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 0 0 #1678c2,0 1px 3px 0 #bcbdbd
}
.ui.cards > .violet.card,
.ui.violet.card,
.ui.violet.cards > .card {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 0 0 #6435c9,0 1px 3px 0 #d4d4d5
}
.ui.cards > .violet.card:hover,
.ui.violet.card:hover,
.ui.violet.cards > .card:hover {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 0 0 #5829bb,0 1px 3px 0 #bcbdbd
}
.ui.cards > .purple.card,
.ui.purple.card,
.ui.purple.cards > .card {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 0 0 #a333c8,0 1px 3px 0 #d4d4d5
}
.ui.cards > .purple.card:hover,
.ui.purple.card:hover,
.ui.purple.cards > .card:hover {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 0 0 #9627ba,0 1px 3px 0 #bcbdbd
}
.ui.cards > .pink.card,
.ui.pink.card,
.ui.pink.cards > .card {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 0 0 #e03997,0 1px 3px 0 #d4d4d5
}
.ui.cards > .pink.card:hover,
.ui.pink.card:hover,
.ui.pink.cards > .card:hover {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 0 0 #e61a8d,0 1px 3px 0 #bcbdbd
}
.ui.brown.card,
.ui.brown.cards > .card,
.ui.cards > .brown.card {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 0 0 #a5673f,0 1px 3px 0 #d4d4d5
}
.ui.brown.card:hover,
.ui.brown.cards > .card:hover,
.ui.cards > .brown.card:hover {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 0 0 #975b33,0 1px 3px 0 #bcbdbd
}
.ui.cards > .grey.card,
.ui.grey.card,
.ui.grey.cards > .card {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 0 0 #767676,0 1px 3px 0 #d4d4d5
}
.ui.cards > .grey.card:hover,
.ui.grey.card:hover,
.ui.grey.cards > .card:hover {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 0 0 #838383,0 1px 3px 0 #bcbdbd
}
.ui.black.card,
.ui.black.cards > .card,
.ui.cards > .black.card {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 0 0 #1b1c1d,0 1px 3px 0 #d4d4d5
}
.ui.black.card:hover,
.ui.black.cards > .card:hover,
.ui.cards > .black.card:hover {
  box-shadow: 0 0 0 1px #d4d4d5,0 2px 0 0 #27292a,0 1px 3px 0 #bcbdbd
}
.ui.one.cards {
  margin-left: 0;
  margin-right: 0
}
.ui.one.cards > .card {
  width: 100%
}
.ui.two.cards {
  margin-left: -1em;
  margin-right: -1em
}
.ui.two.cards > .card {
  width: calc(50% - 2em);
  margin-left: 1em;
  margin-right: 1em
}
.ui.three.cards {
  margin-left: -1em;
  margin-right: -1em
}
.ui.three.cards > .card {
  width: calc(33.33333333% - 2em);
  margin-left: 1em;
  margin-right: 1em
}
.ui.four.cards {
  margin-left: -.75em;
  margin-right: -.75em
}
.ui.four.cards > .card {
  width: calc(25% - 1.5em);
  margin-left: .75em;
  margin-right: .75em
}
.ui.five.cards {
  margin-left: -.75em;
  margin-right: -.75em
}
.ui.five.cards > .card {
  width: calc(20% - 1.5em);
  margin-left: .75em;
  margin-right: .75em
}
.ui.six.cards {
  margin-left: -.75em;
  margin-right: -.75em
}
.ui.six.cards > .card {
  width: calc(16.66666667% - 1.5em);
  margin-left: .75em;
  margin-right: .75em
}
.ui.seven.cards {
  margin-left: -.5em;
  margin-right: -.5em
}
.ui.seven.cards > .card {
  width: calc(14.28571429% - 1em);
  margin-left: .5em;
  margin-right: .5em
}
.ui.eight.cards {
  margin-left: -.5em;
  margin-right: -.5em
}
.ui.eight.cards > .card {
  width: calc(12.5% - 1em);
  margin-left: .5em;
  margin-right: .5em;
  font-size: 11px
}
.ui.nine.cards {
  margin-left: -.5em;
  margin-right: -.5em
}
.ui.nine.cards > .card {
  width: calc(11.11111111% - 1em);
  margin-left: .5em;
  margin-right: .5em;
  font-size: 10px
}
.ui.ten.cards {
  margin-left: -.5em;
  margin-right: -.5em
}
.ui.ten.cards > .card {
  width: calc(10% - 1em);
  margin-left: .5em;
  margin-right: .5em
}
@media only screen and (max-width:767px) {
  .ui.two.doubling.cards {
    margin-left: 0;
    margin-right: 0
  }
  .ui.two.doubling.cards > .card {
    width: 100%;
    margin-left: 0;
    margin-right: 0
  }
  .ui.three.doubling.cards {
    margin-left: -1em;
    margin-right: -1em
  }
  .ui.three.doubling.cards > .card {
    width: calc(50% - 2em);
    margin-left: 1em;
    margin-right: 1em
  }
  .ui.four.doubling.cards {
    margin-left: -1em;
    margin-right: -1em
  }
  .ui.four.doubling.cards > .card {
    width: calc(50% - 2em);
    margin-left: 1em;
    margin-right: 1em
  }
  .ui.five.doubling.cards {
    margin-left: -1em;
    margin-right: -1em
  }
  .ui.five.doubling.cards > .card {
    width: calc(50% - 2em);
    margin-left: 1em;
    margin-right: 1em
  }
  .ui.six.doubling.cards {
    margin-left: -1em;
    margin-right: -1em
  }
  .ui.six.doubling.cards > .card {
    width: calc(50% - 2em);
    margin-left: 1em;
    margin-right: 1em
  }
  .ui.seven.doubling.cards {
    margin-left: -1em;
    margin-right: -1em
  }
  .ui.seven.doubling.cards > .card {
    width: calc(33.33333333% - 2em);
    margin-left: 1em;
    margin-right: 1em
  }
  .ui.eight.doubling.cards {
    margin-left: -1em;
    margin-right: -1em
  }
  .ui.eight.doubling.cards > .card {
    width: calc(33.33333333% - 2em);
    margin-left: 1em;
    margin-right: 1em
  }
  .ui.nine.doubling.cards {
    margin-left: -1em;
    margin-right: -1em
  }
  .ui.nine.doubling.cards > .card {
    width: calc(33.33333333% - 2em);
    margin-left: 1em;
    margin-right: 1em
  }
  .ui.ten.doubling.cards {
    margin-left: -1em;
    margin-right: -1em
  }
  .ui.ten.doubling.cards > .card {
    width: calc(33.33333333% - 2em);
    margin-left: 1em;
    margin-right: 1em
  }
}
@media only screen and (min-width:768px) and (max-width:991px) {
  .ui.two.doubling.cards {
    margin-left: 0;
    margin-right: 0
  }
  .ui.two.doubling.cards > .card {
    width: 100%;
    margin-left: 0;
    margin-right: 0
  }
  .ui.three.doubling.cards {
    margin-left: -1em;
    margin-right: -1em
  }
  .ui.three.doubling.cards > .card {
    width: calc(50% - 2em);
    margin-left: 1em;
    margin-right: 1em
  }
  .ui.four.doubling.cards {
    margin-left: -1em;
    margin-right: -1em
  }
  .ui.four.doubling.cards > .card {
    width: calc(50% - 2em);
    margin-left: 1em;
    margin-right: 1em
  }
  .ui.five.doubling.cards {
    margin-left: -1em;
    margin-right: -1em
  }
  .ui.five.doubling.cards > .card {
    width: calc(33.33333333% - 2em);
    margin-left: 1em;
    margin-right: 1em
  }
  .ui.six.doubling.cards {
    margin-left: -1em;
    margin-right: -1em
  }
  .ui.six.doubling.cards > .card {
    width: calc(33.33333333% - 2em);
    margin-left: 1em;
    margin-right: 1em
  }
  .ui.eight.doubling.cards {
    margin-left: -1em;
    margin-right: -1em
  }
  .ui.eight.doubling.cards > .card {
    width: calc(33.33333333% - 2em);
    margin-left: 1em;
    margin-right: 1em
  }
  .ui.eight.doubling.cards {
    margin-left: -.75em;
    margin-right: -.75em
  }
  .ui.eight.doubling.cards > .card {
    width: calc(25% - 1.5em);
    margin-left: .75em;
    margin-right: .75em
  }
  .ui.nine.doubling.cards {
    margin-left: -.75em;
    margin-right: -.75em
  }
  .ui.nine.doubling.cards > .card {
    width: calc(25% - 1.5em);
    margin-left: .75em;
    margin-right: .75em
  }
  .ui.ten.doubling.cards {
    margin-left: -.75em;
    margin-right: -.75em
  }
  .ui.ten.doubling.cards > .card {
    width: calc(20% - 1.5em);
    margin-left: .75em;
    margin-right: .75em
  }
}
@media only screen and (max-width:767px) {
  .ui.stackable.cards {
    display: block!important
  }
  .ui.stackable.cards .card:first-child {
    margin-top: 0!important
  }
  .ui.stackable.cards > .card {
    display: block!important;
    height: auto!important;
    margin: 1em 1em;
    padding: 0!important;
    width: calc(100% - 2em)!important
  }
}
.ui.cards > .card {
  font-size: 1em
}
/*!
 * # Semantic UI 2.2.10 - Container
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
.ui.container {
  display: block;
  max-width: 100%!important
}
@media only screen and (max-width:767px) {
  .ui.container {
    width: auto!important;
    margin-left: 1em!important;
    margin-right: 1em!important
  }
  .ui.grid.container {
    width: auto!important
  }
  .ui.relaxed.grid.container {
    width: auto!important
  }
  .ui.very.relaxed.grid.container {
    width: auto!important
  }
}
@media only screen and (min-width:768px) and (max-width:991px) {
  .ui.container {
    width: 723px;
    margin-left: auto!important;
    margin-right: auto!important
  }
  .ui.grid.container {
    width: calc(723px + 2rem)!important
  }
  .ui.relaxed.grid.container {
    width: calc(723px + 3rem)!important
  }
  .ui.very.relaxed.grid.container {
    width: calc(723px + 5rem)!important
  }
}
@media only screen and (min-width:992px) and (max-width:1199px) {
  .ui.container {
    width: 933px;
    margin-left: auto!important;
    margin-right: auto!important
  }
  .ui.grid.container {
    width: calc(933px + 2rem)!important
  }
  .ui.relaxed.grid.container {
    width: calc(933px + 3rem)!important
  }
  .ui.very.relaxed.grid.container {
    width: calc(933px + 5rem)!important
  }
}
@media only screen and (min-width:1200px) {
  .ui.container {
    width: 1127px;
    margin-left: auto!important;
    margin-right: auto!important
  }
  .ui.grid.container {
    width: calc(1127px + 2rem)!important
  }
  .ui.relaxed.grid.container {
    width: calc(1127px + 3rem)!important
  }
  .ui.very.relaxed.grid.container {
    width: calc(1127px + 5rem)!important
  }
}
.ui.text.container {
  font-family: Lato,Arial,Helvetica,sans-serif;
  max-width: 700px!important;
  line-height: 1.5
}
.ui.text.container {
  font-size: 1.14285714rem
}
.ui.fluid.container {
  width: 100%
}
.ui[class*="left aligned"].container {
  text-align: left
}
.ui[class*="center aligned"].container {
  text-align: center
}
.ui[class*="right aligned"].container {
  text-align: right
}
.ui.justified.container {
  text-align: justify;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto
}`
