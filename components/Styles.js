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
body, html {
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
  font-family: Lato,Arial,Helvetica,sans-serif;
  font-size: 14px;
  line-height: 1.4285em;
  color: rgba(0,0,0,.87);
  font-smoothing: antialiased
}
h1, h2, h3, h4, h5 {
  font-family: Lato,Arial,Helvetica,sans-serif;
  line-height: 1.28571429em;
  margin: calc(2rem - .14285714em) 0 1rem;
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
h1:first-child, h2:first-child, h3:first-child, h4:first-child, h5:first-child {
  margin-top: 0
}
h1:last-child, h2:last-child, h3:last-child, h4:last-child, h5:last-child {
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
  color: #4183c4;
  text-decoration: none
}
a:hover {
  color: #1e70bf;
  text-decoration: none
}
::-webkit-selection {
  background-color: #cce2ff;
  color: rgba(0,0,0,.87)
}
::-moz-selection {
  background-color: #cce2ff;
  color: rgba(0,0,0,.87)
}
::selection {
  background-color: #cce2ff;
  color: rgba(0,0,0,.87)
}
input::-webkit-selection, textarea::-webkit-selection {
  background-color: rgba(100,100,100,.4);
  color: rgba(0,0,0,.87)
}
input::-moz-selection, textarea::-moz-selection {
  background-color: rgba(100,100,100,.4);
  color: rgba(0,0,0,.87)
}
input::selection, textarea::selection {
  background-color: rgba(100,100,100,.4);
  color: rgba(0,0,0,.87)
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
*, :after, :before {
  -webkit-box-sizing: inherit;
          box-sizing: inherit
}
html {
  -webkit-box-sizing: border-box;
          box-sizing: border-box
}
input[type=email], input[type=password], input[type=search], input[type=text] {
  -webkit-appearance: none;
  -moz-appearance: none
}
/*! normalize.css v3.0.1 | MIT License | git.io/normalize */
/*! normalize.css v3.0.1 | MIT License | git.io/normalize */
html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%
}
body {
  margin: 0
}
article, aside, details, figcaption, figure, footer, header, hgroup, main, nav, section, summary {
  display: block
}
audio, canvas, progress, video {
  display: inline-block;
  vertical-align: baseline
}
audio:not([controls]) {
  display: none;
  height: 0
}
[hidden], template {
  display: none
}
a {
  background: 0 0
}
a:active, a:hover {
  outline: 0
}
abbr[title] {
  border-bottom: 1px dotted
}
b, strong {
  font-weight: 700
}
dfn {
  font-style: italic
}
h1 {
  font-size: 2em;
  margin: .67em 0
}
mark {
  background: #ff0;
  color: #000
}
small {
  font-size: 80%
}
sub, sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline
}
sup {
  top: -.5em
}
sub {
  bottom: -.25em
}
img {
  border: 0
}
svg:not(:root) {
  overflow: hidden
}
figure {
  margin: 1em 40px
}
hr {
  height: 0
}
pre {
  overflow: auto
}
code, kbd, pre, samp {
  font-family: monospace,monospace;
  font-size: 1em
}
button, input, optgroup, select, textarea {
  color: inherit;
  font: inherit;
  margin: 0
}
button {
  overflow: visible
}
button, select {
  text-transform: none
}
button, html input[type=button], input[type=reset], input[type=submit] {
  -webkit-appearance: button;
  cursor: pointer
}
button[disabled], html input[disabled] {
  cursor: default
}
button::-moz-focus-inner, input::-moz-focus-inner {
  border: 0;
  padding: 0
}
input {
  line-height: normal
}
input[type=checkbox], input[type=radio] {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  padding: 0
}
input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button {
  height: auto
}
input[type=search] {
  -webkit-appearance: textfield
}
input[type=search]::-webkit-search-cancel-button, input[type=search]::-webkit-search-decoration {
  -webkit-appearance: none
}
fieldset {
  border: 1px solid silver;
  margin: 0 2px;
  padding: .35em .625em .75em
}
legend {
  border: 0;
  padding: 0
}
textarea {
  overflow: auto
}
optgroup {
  font-weight: 700
}
table {
  border-collapse: collapse;
  border-spacing: 0
}
td, th {
  padding: 0
}`