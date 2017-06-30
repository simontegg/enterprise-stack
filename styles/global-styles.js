module.exports = `/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */
html {
  line-height: 1.15;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%
}
body {
  margin: 0
}
article,
aside,
footer,
header,
nav,
section {
  display: block
}
h1 {
  font-size: 2em;
  margin: .67em 0
}
figcaption,
figure,
main {
  display: block
}
figure {
  margin: 1em 40px
}
hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible
}
pre {
  font-family: monospace,monospace;
  font-size: 1em
}
a {
  background-color: transparent;
  -webkit-text-decoration-skip: objects
}
abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  text-decoration: underline dotted
}
b,
strong {
  font-weight: inherit
}
b,
strong {
  font-weight: bolder
}
code,
kbd,
samp {
  font-family: monospace,monospace;
  font-size: 1em
}
dfn {
  font-style: italic
}
mark {
  background-color: #ff0;
  color: #000
}
small {
  font-size: 80%
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline
}
sub {
  bottom: -.25em
}
sup {
  top: -.5em
}
audio,
video {
  display: inline-block
}
audio:not([controls]) {
  display: none;
  height: 0
}
img {
  border-style: none
}
svg:not(:root) {
  overflow: hidden
}
button,
input,
optgroup,
select,
textarea {
  font-family: sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 0
}
button,
input {
  overflow: visible
}
button,
select {
  text-transform: none
}
[type=reset],
[type=submit],
button,
html [type=button] {
  -webkit-appearance: button
}
[type=button]::-moz-focus-inner,
[type=reset]::-moz-focus-inner,
[type=submit]::-moz-focus-inner,
button::-moz-focus-inner {
  border-style: none;
  padding: 0
}
[type=button]:-moz-focusring,
[type=reset]:-moz-focusring,
[type=submit]:-moz-focusring,
button:-moz-focusring {
  outline: 1px dotted ButtonText
}
fieldset {
  padding: .35em .75em .625em
}
legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal
}
progress {
  display: inline-block;
  vertical-align: baseline
}
textarea {
  overflow: auto
}
[type=checkbox],
[type=radio] {
  box-sizing: border-box;
  padding: 0
}
[type=number]::-webkit-inner-spin-button,
[type=number]::-webkit-outer-spin-button {
  height: auto
}
[type=search] {
  -webkit-appearance: textfield;
  outline-offset: -2px
}
[type=search]::-webkit-search-cancel-button,
[type=search]::-webkit-search-decoration {
  -webkit-appearance: none
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit
}
details,
menu {
  display: block
}
summary {
  display: list-item
}
canvas {
  display: inline-block
}
template {
  display: none
}
[hidden] {
  display: none
}
/*!
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
a {
  font-family: "Open Sans","Helvetica Neue",Arial,Helvetica,sans-serif;
  cursor: pointer
}`