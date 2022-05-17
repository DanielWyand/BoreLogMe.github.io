//svg name space
var svgNS = 'http://www.w3.org/2000/svg'
//container for svg Logs
var scaleHolder = document.querySelector('#scaleHolder')
//logo
var logoInnerHtml = `<path id="svg_1" stroke-miterlimit="1" stroke-width="0.325" stroke="#636466" fill="none" d="m1.52337,10.2533l47.9,0l0,37.3l-47.9,0l0,-37.3zm47.9,33.3l-47.9,0m47.9,-4.2l-47.9,0m47.9,-8.1l-47.9,0m47.9,-4.2l-47.9,0m47.9,-4.3l-47.9,0m47.9,-4.2l-47.9,0m47.9,-4.2l-47.9,0m44.1,33.2l0,-37.3m-4.1,37.3l0,-37.3m-7.9,37.3l0,-37.3m-4,37.3l0,-37.3m-4,37.3l0,-37.3m-4.1,37.3l0,-37.3m-4,37.3l0,-37.3m-4,37.3l0,-37.3m-3.9,37.3l0,-37.3m-4,37.3l0,-37.3m43.8,25l-47.9,0m36,12.3l0,-37.3"/><path id="svg_2" fill="#636466" d="m1.02337,69.3533l0,-0.6c0.5,-0.2 0.8,-0.4 1.1,-0.7c0,-0.3 0.1,-0.8 0.1,-1.5c0.1,-1.3 0.1,-2.2 0.1,-2.8l0,-7.3c0,-0.9 -0.1,-1.4 -0.2,-1.6c0,-0.1 -0.1,-0.1 -0.2,-0.2c-0.2,-0.1 -0.7,-0.2 -1.6,-0.2l0,-1l2.6,0.1l5,0l2.3,-0.1l1.7,0c0.1,0 0.2,0 0.4,0.1l0.1,0.1l-0.2,1.6c0,0.1 0,0.7 -0.1,1.6l-0.9,0c0,-0.9 0,-1.4 -0.1,-1.6c0,-0.1 -0.1,-0.2 -0.1,-0.2c-0.1,-0.1 -0.4,-0.1 -0.9,-0.2c-0.7,-0.1 -1.5,-0.1 -2.2,-0.1c-0.7,0 -1.4,0 -2.1,0.1c-0.1,0.9 -0.2,1.9 -0.2,3.3l0,2.3c0.5,0 1.1,0.1 1.6,0.1l1.9,0c0.4,0 0.6,0 0.7,-0.1c0.1,0 0.1,-0.1 0.2,-0.2c0.1,-0.3 0.1,-0.8 0.2,-1.4l0.9,0l0,5l-1,0c0,-0.9 0,-1.4 -0.2,-1.6c-0.1,-0.2 -0.3,-0.2 -0.5,-0.3c-0.5,-0.1 -1.2,-0.1 -2,-0.1c-0.7,0 -1.3,0 -1.8,0.1l0,6.2c0.6,0 1.3,0.1 2.2,0.1c0.8,0 1.6,0 2.3,-0.1c0.7,-0.1 1.1,-0.1 1.3,-0.2c0.1,0 0.1,-0.1 0.1,-0.2c0.1,-0.4 0.3,-1 0.4,-2.1l0.9,0c-0.2,1.5 -0.3,2.7 -0.3,3.7l-0.1,-0.1c-0.5,0.1 -1.2,0.1 -2.1,0.1l-5.5,0c-0.2,-0.1 -1.4,-0.1 -3.8,0zm12.6,-15l0,-0.9l6,0c0.9,0 1.7,-0.1 2.3,-0.1c1.2,0 2.1,0.1 2.7,0.3c0.6,0.2 1.1,0.5 1.5,1.1c0.4,0.5 0.6,1.2 0.6,2c0,0.9 -0.3,1.7 -0.9,2.5c-0.6,0.7 -1.4,1.3 -2.6,1.8c0.2,0.3 0.4,0.7 0.6,1c0.2,0.4 0.4,0.6 0.4,0.6c0,0.1 0.1,0.1 0.1,0.2l1.8,2.6c0.5,0.7 0.7,1.1 0.8,1.1c0.6,0.8 0.9,1.2 1,1.3c0.1,0.1 0.3,0.2 0.4,0.3c0.1,0.1 0.4,0.1 0.7,0.1l0,0.9l-4.3,0c0,-0.2 -0.1,-0.4 -0.3,-0.6l-2.4,-4c-0.7,-1.1 -1.3,-2.1 -1.8,-2.7c-0.2,-0.3 -0.5,-0.6 -0.7,-0.7l0.1,-0.4c0.9,0 1.6,-0.1 2.1,-0.3c0.5,-0.2 0.9,-0.6 1.2,-1.2c0.3,-0.6 0.5,-1.2 0.5,-1.9s-0.2,-1.3 -0.5,-1.7c-0.3,-0.5 -0.7,-0.8 -1.2,-1c-0.3,-0.1 -0.9,-0.2 -1.7,-0.2c-0.4,0 -0.7,0 -1.1,0.1c0,0.3 0,0.9 -0.1,1.8c0,2.1 -0.1,3.6 -0.1,4.3l0,3.6c0,1.6 0.1,2.4 0.1,2.7c0,0.4 0.1,0.7 0.1,0.8c0,0.1 0.1,0.1 0.1,0.2c0.1,0 0.2,0.1 0.3,0.1c0.2,0 0.6,0.1 1.3,0.1l0,1c-1.3,0 -2.6,-0.1 -3.9,-0.1c-1.2,0 -2.3,0 -3.3,0.1l0,-1c0.9,0 1.4,-0.1 1.5,-0.1c0.1,0 0.2,-0.1 0.2,-0.1c0,-0.1 0.1,-0.2 0.1,-0.3c0.1,-0.3 0.1,-0.7 0.1,-1.3l0.1,-3.3l0,-6.6c0,-0.9 -0.1,-1.5 -0.1,-1.7c0,-0.1 -0.1,-0.1 -0.2,-0.2c0,0 -0.5,-0.1 -1.5,-0.2zm16.3,15l0,-1c0.9,-0.1 1.4,-0.1 1.5,-0.2c0.1,0 0.2,-0.1 0.2,-0.2c0.1,-0.1 0.1,-0.2 0.1,-0.4c0.1,-0.4 0.1,-1.4 0.1,-2.8l0,-7.7c0,-1.2 -0.1,-1.9 -0.1,-2.1c0,-0.1 -0.1,-0.2 -0.1,-0.2c-0.1,-0.1 -0.2,-0.1 -0.4,-0.1c-0.5,-0.1 -1,-0.1 -1.4,-0.1l0,-1c1.6,0 2.6,0.1 3.2,0.1c0.8,0 1.6,0 2.3,-0.1l1,2.2l0.8,1.7l3.6,7.4c0.8,-1.5 1.3,-2.6 1.7,-3.5l1.5,-3.1c0.8,-1.8 1.3,-2.8 1.5,-3.2c0.2,-0.4 0.4,-0.9 0.6,-1.5c1,0.1 1.6,0.1 1.9,0.1l3.4,-0.1l0,1l-0.2,0c-0.8,0 -1.2,0.1 -1.5,0.3c-0.2,0.2 -0.3,0.5 -0.3,1.1l0,1.4l-0.1,3.2l0,5.7c0.1,1 0.1,1.5 0.2,1.8c0,0.1 0.1,0.2 0.1,0.3c0.1,0.1 0.1,0.1 0.3,0.1c0.1,0 0.6,0.1 1.4,0.1l0,1l-3.6,-0.1l-3.5,0.1l0,-1c0.9,0 1.5,-0.1 1.6,-0.2c0.1,-0.1 0.2,-0.3 0.3,-0.5c0.1,-0.3 0.1,-1.2 0.1,-2.8l0,-8.3l-2.6,5.3l-1.1,2.5c-0.3,0.7 -0.8,1.7 -1.4,3c-0.4,0.8 -0.7,1.4 -0.9,1.9l-0.7,0c-0.3,-0.6 -0.7,-1.5 -1.2,-2.6c-0.9,-1.9 -1.5,-3.3 -2,-4.2l-3,-6.1l0,8.9c0,1.3 0.1,2 0.1,2.2c0,0.2 0.1,0.3 0.1,0.4c0.1,0.1 0.2,0.1 0.3,0.2c0.2,0.1 0.6,0.1 1.4,0.1l0,1c-0.8,0 -1.7,-0.1 -2.6,-0.1c-1.1,0 -2,0 -2.6,0.1zm3.7,-22.5l15,-15.5l-7.2,-7.6l-3.3,3.7l-0.6,-0.4l3.8,-4.1l8.1,8.3l-15.8,16.3l-32.3,-33l0.4,-0.4l31.9,32.7z"/><path id="svg_3" fill="#008061" d="m9.22337,36.4533c0.1,-0.1 -0.1,-0.3 -0.4,-0.2c-0.1,-0.5 -0.4,-0.4 -0.4,-0.6c-0.2,-0.1 0.3,-0.5 0.4,-0.4l-0.2,-0.2l0,-0.2l-0.2,0l-0.4,-0.4c-0.3,-0.2 -0.4,-0.3 -0.2,-0.4c0.2,-0.2 -0.2,-0.5 -0.4,-0.4c0,0.1 -0.2,0 -0.2,-0.2l-0.1,-0.3c-0.2,0.1 -0.3,0 -0.2,-0.2c0.1,-0.2 0,-0.2 -0.2,-0.2c-0.4,0 -0.4,-0.2 -0.2,-0.4c0.3,0 0.2,-0.1 0,-0.2l-0.4,0l0,-0.2l0.2,-0.4l-0.2,-0.4c-0.3,0.5 -0.4,-0.2 -0.2,-0.4l-0.2,-0.2c-0.1,0 -0.3,-0.4 -0.4,-0.8c-0.3,0 -0.3,-0.4 0,-0.4l0.2,0c0.5,0.1 0.3,-0.3 -0.2,-0.4c-0.1,-0.1 -0.1,0 -0.2,0l-0.2,-0.2l0,-0.2l-0.2,-0.2l0.2,-0.2l0.2,-0.2l-0.2,-0.4l-0.2,0c-0.1,0 -0.1,-0.2 0,-0.4c-0.1,-0.1 -0.3,-0.2 -0.2,-0.2l0,-0.2l-0.4,-0.2l0,-0.6l-0.2,-0.2l0,-0.4l-0.2,-0.2c-0.4,0 -0.3,-0.1 0,-0.2c0,-0.1 -0.1,-0.2 -0.4,-0.2c-0.2,0 -0.3,-0.1 -0.4,-0.2c0.1,0 0.2,-0.1 0.2,-0.2c0.4,0 0.4,-0.2 0.2,-0.4l0,0.2c0.2,0 0.1,-0.2 0,-0.2l0,-0.2c-0.3,0.1 -0.3,-0.3 -0.2,-0.4c0.2,-0.2 0.2,-0.3 -0.2,-0.6l0,-0.4l-0.4,-0.2l0,-0.2l-0.2,-0.2l0.2,0c0.5,-0.1 0.2,-0.7 -0.2,-0.8l0.2,-0.2c0.3,0 0.3,-0.2 0.2,-0.4l0,-0.2l-0.2,-0.2c-0.2,0.1 -0.3,0 -0.2,-0.4c-0.1,0 -0.1,-0.1 0,-0.2c0.3,-0.3 0.2,-0.3 -0.2,-0.4c-0.5,0 -0.3,-0.4 0,-0.4c0.2,-0.1 0.3,-0.3 0,-0.4c-0.1,-0.1 -0.2,-0.3 -0.2,-0.4l-0.2,-0.2l0,-0.2l0.2,0c-0.1,-0.2 0,-0.4 0,-0.4c0.1,-0.3 0.1,-0.5 -0.2,-0.6l0,-0.2l0.2,0l-0.2,-0.2c-0.5,0.1 -0.4,-0.6 -0.4,-0.8c-0.1,-0.2 0,-0.4 0,-0.6l0,-2.1l-0.4,-0.2c0.1,-0.1 -0.1,-0.3 -0.2,-0.4l0,-0.2c0.2,-0.1 0.1,-0.5 0,-0.8l0.2,-0.4c0.4,0 0.1,-0.3 -0.2,-0.4l0,-0.2l0.2,-0.2c0.1,0 0.1,-0.1 0,-0.2l-0.2,-0.4l0,0.1c-0.2,-0.4 -0.1,-0.6 0,-0.8c0.1,0 0,-0.4 -0.2,-0.8l0,-0.2c-0.1,-0.2 -0.1,-0.3 0.2,-0.4c0.1,-0.1 0,-0.3 0,-0.6c-0.6,-0.4 -0.2,-0.4 0,-1l0,-0.6c-0.3,-0.3 -0.1,-0.6 0,-0.6l0.2,-0.2c-0.1,-0.1 -0.1,-0.2 0,-0.2l0,-0.4c-0.3,0.1 -0.2,-0.1 -0.2,-0.2c0.1,-0.2 0,-0.2 -0.2,-0.2l0,-0.2c0.1,0 0.2,-0.1 0.2,-0.2s0.1,-0.2 0.2,-0.2c-0.1,-0.1 -0.1,-0.3 0,-0.4l0,-0.4c-0.2,-0.1 -0.2,-0.4 0,-0.4c0,-0.1 0.1,-0.3 0.2,-0.4c-0.1,-0.1 -0.1,-0.2 0,-0.2c0.1,-0.3 0.2,-0.3 0.4,0l0,0.6c0.1,-0.1 0.1,0 0,0l0,0.4c0.2,0 0.2,0.2 0,0.4c0.1,0 0.1,0.1 0.2,0.2l0,0.4c0.1,0 0.1,0.2 0,0.4c0,0 0,0.1 0,0l0,2.3c0.1,0 0.1,0.1 0,0.2l0,0.4c0.2,-0.1 0.3,0.1 0.2,0.2c0,0.2 0,0.6 0.2,0.8c-0.1,0.3 -0.1,0.5 0,0.6c0,0.2 0.1,1.7 0.2,1.9c0.2,0 0.2,1 0,1.3c0.2,0.3 0.2,0.5 0.2,0.8c0,0.1 0.2,0.6 0.2,1l0,0.4c-0.1,0 0,0.2 0,0.4c0.1,-0.1 0.2,0 0.2,0.2l-0.2,0l0,0.2c0.3,0.1 0.3,0.8 0.2,1c0.3,0.1 0.5,1.2 0.4,1.3l0.2,0.4l-0.2,0l0,0.4c0.2,0.2 0.2,0.3 0.2,0.8c0.2,0.1 0.4,0.8 0.4,1.2c0.2,0.1 0.2,0.6 0.2,0.6l0,0.4c0,0.1 0.1,0.2 0.2,0.4c-0.1,0.2 0,0.2 0,0.4c0.1,0.3 0.1,0.4 0.2,0.6c0,0.1 0.3,0.8 0.4,1.2c0.1,0.2 0.2,0.5 0.2,0.8l0.2,0.5c-0.1,0.2 -0.1,0.2 0,0.2l0.1,0.3c0.1,-0.2 0.2,0.5 0.2,0.6c0.1,0.2 0.1,0.2 0.2,0.2c0.1,0.2 0.1,0.6 0,0.6l0,0.4c0.1,0.1 0.2,0.2 0.2,0.4l0,0.6c0.4,-0.2 0.6,0.4 0.6,1c0.2,0.1 0.3,0.1 0.4,0.2c-0.1,0.3 0,0.6 0,0.8c0.2,0.1 0.4,0.3 0.4,0.4c0,0.3 0.2,0.6 0.2,0.6c0.5,0.5 0.5,0.6 0.6,0.8c0.1,0.2 0.3,0.3 0.2,0.6c0.1,-0.1 0.2,0 0.2,0.2c0.3,0.2 0.3,0.3 0.2,0.6c-0.1,0 0,0.3 0.2,0.4c0.7,0.3 0.7,0.4 0.8,0.8l0,-0.2c0.2,0.3 1,1.2 1.3,1.7c0.3,0 0.3,0.2 0.2,0.4c0.2,-0.1 0.4,0.2 0.4,0.4c0.2,0 0.4,0.3 0.2,0.5l0.4,0.2l0.2,0.2l0,0.2c0,0.1 0.1,0.1 0.2,0.2c0.1,0 0.2,0.1 0.4,0l0,0.2c-0.2,0.2 0,0.4 0.2,0.4c0.2,0.1 0.3,0.3 0.4,0.6c0,0 0.2,0.1 0.2,0.4l0.6,0.4c0.4,-0.2 0.4,0.1 0.4,0.4l0.2,0.2l0.2,0.2l0.2,0.2l-0.1,0l0.2,0.2l0.2,0l0.2,0.2l0.4,0.2l0.2,0.2c0,0.2 0.1,0.4 0.2,0.3c0.1,0 0.3,0.2 0.4,0.2l0.2,0.2c0.1,0 0.4,0.1 0.6,0.2c0.1,0.2 0.3,0.3 0.6,0.4c0.2,0.2 0.9,0.6 1.3,1c0.1,0 0.1,0 0,0.2c1.3,0.1 1.3,0.7 1.3,1.2l0.4,0l0.2,-0.2c0.5,-0.3 0.8,0 1,0.2c0,0 0.2,0 0.2,0.2c0.1,0 0.1,0 0.2,0.2c0,0.1 0.3,0.2 0.4,0.2c0.1,-0.1 0.3,-0.1 0.4,0l0.4,0l0.4,0.2c0.1,-0.1 0.3,0 0.4,0c0.1,0.2 0.3,0.2 0.4,0c0.1,0.1 0.3,0.1 0.4,0.2l0.6,0.2l0.8,0c0.5,-0.1 1,0.2 1.2,0.2l0.2,0.2l0,-0.2l0.2,0l0,0.2l0.6,0l-0.2,0l0,-0.2l0.4,0l0,0.2l0.4,0c0.1,0.1 0.6,0 0.8,-0.2l1.2,0c0.1,0.1 0.9,0.1 1,0c0,0.1 0.1,0.2 0.2,0c0.2,0.1 1.1,0 1.2,0c0.2,0.1 0.2,0 0.4,-0.2c0.2,0 0.8,-0.2 1,-0.2c0.2,0.1 0.8,-0.1 0.8,-0.2c0.1,-0.1 0.4,-0.3 0.6,-0.4l0.2,0l0.2,-0.2l0.2,0c0.1,-0.1 0.1,-0.1 0.2,0c0,-0.2 0.2,-0.4 0.4,-0.2c0.1,0.1 0.1,0 0.2,-0.2c0.1,-0.3 0.5,-0.4 0.8,-0.4c0.1,0.1 0.2,0 0.4,-0.2c0,-0.1 0.4,-0.3 0.6,-0.2c0.1,-0.1 0.3,-0.2 0.4,-0.2c0.1,-0.2 0.1,-0.2 0.2,-0.2c0.1,-0.1 0.3,0 0.4,0c0.2,0 0.3,-0.1 0.2,-0.2c0.1,-0.2 0.4,-0.5 0.6,-0.4c0.2,0 0.7,-0.2 0.8,-0.6c0,-0.4 0.4,-0.6 0.6,-0.6c0.2,0.3 0.3,0 0.4,-0.4l0,-0.2c-0.1,0.1 0,0.1 0.2,0c0.3,0.2 0.4,0 0.4,-0.2c0.1,-0.5 0,-0.4 0.2,-0.6l0,-0.2l0.2,0l0,-0.2l0.2,0l0,-0.2l0.2,-0.2l0.2,-0.2l-0.4,0c0.1,-0.1 0.1,-0.1 0,0c0,-0.3 0.1,-0.4 0.2,-0.4s0.3,-0.1 0.2,-0.2c-0.3,-0.4 0,-0.5 0.2,-0.6c0.1,-0.2 0.2,-0.2 0,-0.4l0,-0.2l0.4,-0.2l0,-0.4s0,-0.2 0.2,-0.4c-0.1,0 0.1,-0.1 0.2,-0.2c-0.1,-0.3 -0.1,-0.4 0,-0.5c0,0 0.1,0 0,-0.2c0,-0.1 0.1,-0.3 0.2,-0.4c0.1,0 0.2,-0.2 0.2,-0.2c-0.2,-0.3 -0.1,-0.3 0,-0.4c0,0 0.1,-0.2 0,-0.4c0,0 0,-0.1 0.2,-0.2c-0.1,-0.1 0,-0.1 0,-0.2c-0.1,-0.3 -0.1,-0.9 0,-1.2c-0.1,-0.1 0,-0.1 0,-0.2c-0.4,-0.3 -0.3,-0.5 0,-0.6l0,-0.2c-0.2,-0.1 -0.1,-0.4 0,-0.4l0,-0.6c-0.2,-0.2 -0.1,-0.2 0,-0.2l0,-0.2c-0.2,-0.2 -0.2,-0.3 -0.2,-0.6c0.1,-0.1 0.1,-0.1 0,-0.4c-0.2,-0.2 -0.2,-0.2 0,-0.6c-0.2,-0.2 -0.2,-0.4 0,-0.6c0.1,-0.1 0.1,-0.1 0,-0.2l-0.4,-0.4c-0.1,-0.2 0,-0.3 -0.2,-0.4c-0.1,0 -0.2,-0.1 -0.2,-0.2c-0.3,-0.1 -0.2,-0.5 -0.2,-0.6l-0.2,-0.2c-0.4,-0.3 -0.2,-0.5 0,-0.6c0.4,-0.3 0,-0.5 -0.4,-0.4c-0.2,0.5 -0.3,0.4 -0.4,0.2c-0.2,0 -0.3,-0.1 -0.4,-0.2c0.1,-0.1 0.1,-0.1 0,-0.2c0.1,-0.1 0.1,-0.1 0,-0.2c-0.2,0.1 -0.4,0 -0.6,-0.2c0,0 0,-0.1 -0.2,-0.2c-0.1,0.1 -0.6,0 -0.8,-0.2c-0.2,0 -0.3,0 -0.4,-0.4c-0.1,0 -0.1,-0.2 -0.2,-0.2l-0.2,-0.2l-0.1,0.4c-0.1,0 -0.4,-0.1 -0.4,-0.2c0,-0.2 -0.2,-0.2 -0.2,0c-0.1,0 -0.7,0.3 -1.2,0.3l-0.1,-0.1c-0.3,0 -1,0.4 -1.2,0.8l-0.3,0.2c0,0.3 -0.1,0.4 -0.2,0.4c-0.3,0.1 -0.4,0.3 -0.2,0.4l-0.2,0.2l0,0.2l-0.2,0.2c-0.1,0.4 0,0.6 0.2,0.6l0.2,0l0.2,0.2c-0.1,-0.1 0.2,-0.2 0.4,-0.2c0.1,-0.2 0.4,-0.3 0.8,-0.2c0.4,-0.6 0.8,-0.3 0.8,0c0.1,0.2 0.6,0.4 0.8,0.4c0.2,-0.2 0.4,0.2 0.2,0.4l0,0.2l0.2,0.2l0,0.2l0.4,0c0.1,0 0.1,0.3 -0.2,0.3l-0.2,0.2c-0.2,0.3 0.1,0.3 0.2,0.2c0.3,-0.1 0.3,0.3 0.2,0.8l0,0.2l0.2,0.2c0.1,0.2 0.1,0.3 0,0.4c-0.2,0 -0.5,0.2 -0.6,0c-0.2,0 -0.3,0 -0.4,-0.2l-0.2,0.4l-0.6,0l-0.3,0.1c-0.2,0.3 -0.3,0.3 -0.4,0.2c-0.1,0 -0.2,0.1 -0.4,0.4c-0.2,0.1 -0.4,0.1 -0.4,0c0.1,-0.3 -0.1,-0.5 -0.2,-0.4l-0.2,0.2l-0.2,0l0,0.2l-0.2,0c-0.5,-0.2 -0.3,-0.2 0,-0.4l0.2,0.2l0.2,-0.2l0,-0.6l-0.2,-0.2c-0.2,0.1 -0.3,0 -0.2,-0.2c-0.1,-0.1 -0.4,-0.1 -0.4,0l0,0.4c0,0.1 -0.2,0.2 -0.2,-0.2l-0.4,0c-0.4,0.2 -0.5,-0.1 -0.4,-0.4c0.1,0 0.1,-0.1 -0.2,-0.2l-0.2,-0.2c0.1,0 0,-0.1 -0.2,-0.2c-0.1,0.1 -0.1,0.1 -0.2,0c-0.3,-0.2 -0.4,-0.3 -0.2,-0.4c0.2,-0.2 0.1,-0.3 -0.2,-0.4l0,-0.4c-0.3,-0.4 0.1,-0.6 0.2,-0.4c0.6,-0.2 0.3,-0.5 0,-0.4c0,0.1 -0.1,0.1 -0.3,0c-0.2,-0.4 -0.1,-0.6 0.2,-0.8l0,-0.2c-0.4,-0.1 -0.2,-0.3 -0.2,-0.4l0.2,-0.2l0.2,-0.2c0.3,0 0.2,-0.2 0,-0.4c-0.2,0.2 -0.2,-0.1 -0.2,-0.2l0,-0.4c0.1,0 0.1,-0.1 0.2,-0.2c-0.1,0 0,-0.2 0,-0.4c0.3,0 0.5,-0.2 0.4,-0.2l0,-0.2c0.3,-0.2 0.4,-0.5 0.2,-0.6c0.1,-0.1 0.3,-0.4 0.4,-0.4c0.1,0 0.2,-0.1 0.2,-0.2c0.2,-0.1 0.2,-0.3 0.4,-0.4c0.1,0 0.3,-0.1 0.4,-0.2l0.4,-0.6c0,0.1 0.2,0 0.4,-0.2l0.2,0c0.6,0.1 0.6,0 0.6,-0.2c-0.2,-0.1 0,0 0.2,0l0.4,0c0.1,0.2 0.4,0.1 0.4,0l0.2,-0.4l0.2,0l0,0.4l0.4,-0.2l0.4,0c0.2,0.1 0.9,0.2 1.2,0.4c0.3,0.1 0.5,0.1 0.6,0.2l0.2,0c0.3,0 0.5,0.2 0.8,0.4l0,0.2l0.4,0c0.1,0 0.5,0.1 0.8,0.6l0.2,0.2l0.4,0.4l0.4,0.2l0,0.2l0.4,0.4l-0.4,0l-0.2,-0.4c-0.1,-0.1 -0.2,-0.3 -0.6,-0.2c-0.1,-0.2 -0.3,0.2 -0.2,0.2c0.2,0 0.2,0.2 0.2,0.2c-0.1,0.1 -0.2,0.3 0.2,0.2c0.4,-0.1 0.4,0 0.4,0.2c-0.2,0.3 0.3,0.3 0.6,0.2c1.2,0.3 1.1,0.5 1.2,0.7c-0.3,0 -0.4,0.3 -0.2,0.4c0.3,0.1 0.2,0.4 0,0.4c-0.1,-0.1 -0.2,0 0,0.2c-0.1,0.1 0,0.2 0,0.2l0.2,0c-0.1,0 0,0 0,0c-0.1,0.2 0,0.3 0.2,0.4c0.3,0 0.3,0.3 0.2,0.6c-0.2,0 0,0.3 0.2,0.2c0.3,0 0.4,0.1 0.4,0.2c0.3,0.1 0.2,0.3 0,0.4l0,0.5c0.1,0.1 0.5,0.3 0.4,0.6c0.2,0.1 0.2,0.2 0,0.2c0.2,0.1 0.2,0.4 0,0.4c0.3,0.1 0.2,0.4 0,0.4c0.1,0 0.1,0.4 0,0.4c0.2,0.1 0.2,0.2 0.2,0.2c-0.1,0.1 -0.1,0.4 -0.2,0.4c0.2,0.1 0.4,0.2 0.4,0.4c0.1,0.1 0.1,0.2 0,0.2s-0.2,0.2 -0.2,0.4c-0.1,0 -0.1,0.6 0,0.7l0,0.6l-0.7,0.3l0.2,0l0,0.2l-0.2,0l0,0.4c0.2,0.1 0.1,0.5 0,0.6l0,0.6c0.1,0 0,0.5 -0.2,0.6c0,0 -0.1,0.3 -0.2,0.4c0.1,0.2 0.1,0.5 -0.2,0.8c-0.1,0 -0.1,0 0,0.2c0.1,0.1 0.1,0.2 0,0.4l0,0.4c0,0.1 -0.1,0.2 -0.4,0.2l0,0.2c0,0.1 0,0.3 -0.2,0.2c0,0.4 -0.2,0.3 -0.4,0.2l0,-0.2c-0.6,0.1 -0.4,0.6 -0.2,0.4c0.2,-0.1 0.3,0 0.4,0.2l-0.2,0l0,0.4c0,-0.1 -0.2,0.1 -0.2,0.2c0.1,0.2 0,0.5 -0.2,0.6c-0.4,0 -0.5,0.5 -0.4,0.6c-0.1,0.2 -0.3,0.5 -0.4,0.4c0,0 -0.2,0.1 -0.2,0.4l-0.6,0.4l0,0.4c0.2,0.4 -0.1,0.6 -0.4,0.6c0,0.1 0,0.4 -0.2,0.4c-0.2,0.1 -0.3,0.3 -0.4,0.4c0.1,0.1 0.1,0.1 0,0.2c0,0.1 -0.1,0.1 -0.2,0.2l0,0.2l-0.2,0c0.1,-0.1 -0.2,0 -0.2,0.2s-0.2,0.4 -0.2,0.4c-0.1,0 -0.2,0 -0.2,0.2c-0.1,0.2 -0.2,0.1 -0.4,0.2c-0.4,-0.2 -0.5,-0.1 -0.4,0.2c-0.1,0 -0.1,0 0,0.2c-0.1,0.2 -0.3,0.3 -0.4,0.2c-0.2,0.1 -0.3,0.1 -0.4,0.2c0,0.2 0,0.3 -0.2,0.2c-0.4,0.1 -0.6,0.1 -0.8,0.2c0.1,0.3 -0.1,0.4 -0.6,0.4l-0.2,0.2l-0.2,0c0.2,0.2 0.1,0.4 -0.2,0.4l-0.2,0l0,0.2l-0.4,0l0,-0.3l-0.2,0l-0.4,0.4l-0.2,-0.2l-0.6,0c-0.2,-0.2 -0.5,0 -0.6,0.2l0.2,0.4l0.2,0l-0.8,0.2l-0.2,0.2l-0.2,-0.2l-0.4,0c0,-0.1 -0.1,-0.1 -0.2,0.2l-0.2,0l0,0.3l-0.4,0l0,-0.2c0.1,0.1 0.2,-0.1 0.2,-0.2l0,-0.4c0.1,-0.2 0.1,-0.2 0.2,-0.2c0.2,-0.1 0.3,-0.3 0,-0.4l0,-0.2c0.2,-0.1 0.2,-0.3 -0.2,-0.4l-0.2,0l-0.2,0.2l0,1c-0.1,-0.1 -0.2,0 -0.2,0.2l-0.2,0l0.2,0.2l0,0.2c0.3,0 0.2,0.2 0,0.4l-0.2,0l-0.2,-0.2l-0.2,0.2c-0.1,-0.4 -0.5,-0.4 -0.6,-0.2l-0.4,0c-0.1,-0.1 -0.2,-0.2 -0.4,0c-0.1,0.1 -0.3,0.1 -0.6,-0.2l0,-0.4c0.1,0 0.3,0.1 0.4,0.2c0.2,-0.2 0.2,-0.3 0,-0.4l-0.4,0c0,0.2 -0.3,0.4 -0.6,0.4l-0.3,0.2c-0.4,-0.1 -0.2,0.1 -0.2,0.4l0.2,0l0,0.4l-0.4,0c-0.1,-0.1 -0.1,-0.4 -0.2,-0.4c-0.1,-0.5 -0.4,-0.3 -0.3,0c0,0.7 -0.3,0.5 -0.6,0l-0.6,0c0.1,-0.4 -0.2,-0.3 -0.4,-0.2c-0.2,-0.1 -0.3,0 -0.4,0.2c0,0.4 -0.2,0.3 -0.2,0c-0.1,-0.3 -0.3,-0.2 -0.4,0l-0.2,-0.2l-0.2,0.2l-0.2,-0.2l-0.2,0c-0.1,-0.2 -0.2,-0.2 -0.4,0c-0.1,0.3 -0.2,0.2 -0.2,-0.2c0,-0.2 0,-0.2 -0.4,-0.2c-0.3,-0.2 -0.6,-0.1 -0.8,0c-0.3,0 -0.2,0.1 0,0.2c0.6,0 0.2,0.4 0,0.2c-0.1,-0.1 -0.1,-0.2 -0.2,-0.2l0,-0.2c-0.2,-0.2 -0.1,-0.4 0,-0.4c0,-0.2 0.2,-0.3 0.4,-0.4c-0.1,-0.6 -0.6,-0.2 -1,0.4c-0.2,0 -0.5,0.4 -1,0.2c-0.1,-0.1 -0.1,-0.2 -0.2,-0.2c0.1,-0.2 0.2,-0.3 0.2,-0.2c0.1,-0.2 0.2,-0.4 -0.2,-0.4l0,-0.2s-0.1,-0.1 -0.2,0c-0.1,0.2 -0.2,0.1 -0.4,0c0.1,-0.2 0,-0.3 -0.2,-0.2l0,0.2l-0.6,0l-0.2,-0.2c-0.1,0 -0.2,0 -0.4,0.2c-0.3,0.1 -0.6,0.1 -0.6,-0.2c-0.2,-0.2 -0.6,-0.4 -1,-0.4l-0.4,-0.2c0,0.1 -0.1,0 -0.2,0c0,-0.2 0.1,-0.3 0.2,-0.4l0,-0.2c-0.2,-0.5 0.4,-0.5 0.6,-0.4l0.4,0l0,-0.2l-0.2,0c0.2,-0.2 -0.1,-0.3 -0.2,-0.2c-0.2,0.1 -0.3,0.2 -0.6,0c-0.1,0 -0.2,-0.1 -0.2,-0.2c0.1,-0.1 0.1,-0.2 0.2,-0.2l0,-0.2c0,-0.5 -0.3,-0.3 -0.2,0l-0.2,0l-0.2,0.2c-0.2,0 -0.3,0.1 -0.4,0.2c0,0 0.1,0.2 0.2,0.2c0.3,-0.1 0.4,-0.1 0.6,0l0.4,0.2l-0.2,0.3l-0.2,0.2c0,-0.3 -0.4,-0.1 -0.4,0.2c0.4,0.4 0.1,0.4 -0.2,0.2c-0.9,-0.1 -0.9,-0.4 -0.8,-1.2l-0.2,0l-0.4,-0.2l-0.3,-0.1c-0.1,0 -0.1,-0.2 0,-0.2l-0.2,0c-0.2,-0.1 -0.3,-0.3 -0.2,-0.2l-0.4,0l-0.2,-0.2c0.1,-0.1 0,-0.2 -0.2,-0.2c-0.2,-0.1 -0.6,0 -0.6,-0.2l0,-0.2c-0.1,-0.3 -0.4,-0.6 -0.6,-0.6c-0.4,0.1 -0.3,-0.1 -0.2,-0.2c0.1,-0.2 -0.1,-0.7 -0.4,-0.8l-0.2,0l-0.4,-0.6l-0.8,0l-0.2,-0.4l0.2,-0.2l0.6,0l0,0.4l0.2,0l0.2,0.2c0.6,0 0.5,-0.2 0.2,-0.4l-0.4,-0.2c-0.4,-0.7 -1,-0.3 -1,0l-0.4,0l0.2,-0.2l-0.2,-0.2l-0.4,0l-0.2,-0.2l0.2,-0.2c0.4,-0.2 0.4,-0.4 0.2,-0.4l-0.4,-0.2c0,-0.1 0,-0.1 -0.2,-0.2c0.4,-0.3 0.3,-0.5 0,-0.6l-0.2,-0.4l-0.2,0l-0.2,0.2l-0.2,-0.2l-0.4,0l0.2,-0.2l0.4,0c0.5,0 0.3,-0.3 0,-0.4l-0.1,0l0,-0.2l0.2,0c0.2,-0.2 -0.1,-0.4 -0.4,-0.2l-0.2,0.2l-0.2,0.2c0,0.5 0,0.5 -0.4,0c-0.1,-0.2 -0.1,-0.2 0,-0.2c-0.1,0.1 -0.2,0 -0.2,-0.3zm28.3,8.1zm-34.5,-22.9c0,0.4 0.2,0.2 0.2,0c0.2,-0.1 0,-0.1 -0.2,0zm1.2,2.9c0,0.3 0.1,0.2 0.2,0c0,-0.1 -0.2,-0.2 -0.2,0zm-0.2,0c-0.5,0 -0.3,0.2 0,0.4c0.2,-0.2 0.1,-0.4 0,-0.4zm0.4,0.7l0,0.4l0.2,0c0.3,-0.2 0.1,-0.4 0,-0.4l-0.2,0zm2.1,4.6s-0.1,-0.1 -0.2,0c-0.2,0.1 0,0.3 0.2,0.2c0.1,0.1 0.2,0 0,-0.2zm0.4,1.4l-0.2,0.2l0.4,0c0.1,0 0.1,-0.3 -0.2,-0.2zm0.4,1.5c0.1,0.1 0.2,0 0.2,0c0.1,-0.2 0,-0.3 0,-0.2c-0.3,0 -0.4,0 -0.2,0.2zm2.3,2.5c-0.1,-0.3 -0.3,-0.2 -0.4,0c0.3,0.3 0.3,0.2 0.4,0zm0.4,-0.2l-0.2,0c-0.1,0.5 0.3,0.3 0.2,0zm0.3,0.1l-0.2,0c0.2,0.3 0.5,0.2 0.2,0zm-0.3,0.7l0,0.2l0.2,0c0.1,0 0.2,-0.2 0.2,-0.4c-0.1,-0.3 -0.4,-0.1 -0.4,0l0,0.2zm1.5,1c-0.1,-0.2 -0.3,-0.2 -0.4,0c0,0.5 0.3,0.3 0.4,0zm0.4,1.5c0,0.3 0.3,0.3 0.4,0c-0.1,-0.2 -0.3,-0.2 -0.4,0zm2.9,1.9c0,0.1 0.1,0.2 0.2,0l-0.2,0zm-0.2,1.4c0,0.2 0.1,0.2 0.2,0c-0.1,-0.1 -0.2,-0.1 -0.2,0zm1.5,0.4c-0.1,-0.1 -0.2,0 -0.2,0c0.3,0.3 0.3,0 0.2,0zm0.4,0.5l0.2,-0.2c0.2,-0.4 0,-0.4 -0.2,-0.2c-0.1,-0.2 -0.3,0.1 -0.2,0.2l0.2,0.2zm1.6,1.4c-0.2,0 0,0.2 0.2,0.2l0.2,0l0,-0.2c0.1,-0.1 0.2,-0.1 0.2,-0.4c0,-0.2 -0.4,-0.2 -0.4,0c-0.1,0.1 -0.2,0.3 -0.2,0.4zm2.9,0c0,-0.2 -0.3,-0.2 -0.4,0c0.1,0.3 0.4,0.2 0.4,0zm-1.2,1.9c0,0.2 0.3,0.1 0.4,0c-0.1,-0.3 -0.4,-0.3 -0.4,0zm2.1,-0.6s0.1,0 0,0c0.1,0.2 0,0.2 0,0zm0.6,0.2l0,-0.2l-0.2,0.2l0.2,0zm-0.6,0.8c0.5,0.2 0.6,0 0.6,-0.4c-0.1,-0.1 -0.4,-0.2 -0.6,0c-0.2,0.2 -0.2,0.3 0,0.4zm6.4,1.8l0.2,0c-0.2,-0.2 -0.2,-0.2 -0.2,0zm0.5,-0.5c0,0.3 0.2,0.2 0.2,0c0.1,-0.1 -0.2,0 -0.2,0zm0.8,0.4c0,-0.3 -0.2,-0.3 -0.2,0c0,0.4 0.3,0.4 0.2,0zm0.6,0.2c0.1,-0.1 -0.1,-0.1 -0.2,0c0.1,0.4 0.3,0.4 0.2,0zm7.3,-2.1l-0.2,0.2l0.2,0l0.2,0.4l0.2,0l0,-0.2l0.2,0.2c0.6,0 0.1,-0.3 -0.4,-0.4l0,-0.4c0.6,-0.6 0.2,-0.7 0,-0.6l-0.2,0.8zm1.5,0.2l0.2,0c-0.5,-0.2 -0.3,0.1 -0.2,0zm0.4,-0.9c-0.2,0 -0.2,0 -0.2,0.2l0.2,0l0,-0.2zm0.4,-0.1c0,0.2 0.1,0.1 0.2,0l-0.2,0zm1.9,-0.3c0.2,-0.1 0.2,-0.1 0.2,-0.2c-0.1,-0.3 -0.4,-0.2 -0.6,-0.2c-0.1,0.2 0,0.4 0.4,0.4zm-0.4,0.3c-0.2,0 -0.1,0.2 0,0.2l0,-0.2zm1,-0.7c-0.1,-0.1 -0.2,0 -0.2,0l0,0.2l0.2,0l0,0.2l0.2,0l0,-0.4l-0.2,0zm-0.2,-1.4c0,0.3 0.4,0.3 0.8,0.2c0.2,0.1 0.2,0.1 0.4,-0.2c0.1,-0.1 0.1,-0.3 -0.2,-0.2l-0.2,0l-0.2,-0.2l-0.2,0c-0.5,-0.3 -0.6,0.3 -0.4,0.4zm0.6,-0.7c-0.1,-0.1 -0.3,-0.1 -0.4,0c0.1,0.2 0.3,0.2 0.4,0zm2.3,-0.8c-0.7,0 -0.5,0.5 -0.2,0.6c0.5,-0.2 0.4,-0.6 0.2,-0.6zm-0.6,-0.4c0.2,0.1 0.2,0.2 0.4,0c0.3,0 0.3,0 0.2,-0.2c-0.1,-0.3 -0.3,-0.3 -0.4,-0.2c-0.2,0.3 -0.2,0.3 -0.2,0.4zm2.5,-5.2l0.2,0c0.2,0.1 0.4,0.1 0.4,0l0,-0.4l-0.2,-0.2c0,0.1 -0.4,0.1 -0.4,0l0,0.6zm1,0l0.2,0l-0.2,0zm-0.2,-0.4l0.4,0c-0.2,-0.4 -0.4,-0.2 -0.6,0l0.2,0zm0.6,-0.3c-0.1,0 -0.2,0 -0.2,0.2c0.2,0.4 0.7,0.2 0.8,0c-0.1,-0.3 -0.2,-0.5 -0.2,-0.6c0.1,-0.2 0.1,-0.3 -0.2,-0.6c-0.3,-0.1 -0.5,0.2 -0.2,0.4l0,0.6zm-7.9,-8.3c-0.2,0 -0.4,0.1 -0.2,0.2c0.2,0.3 0.3,0 0.2,-0.2zm0.2,0.9c0,-0.1 0,-0.2 -0.2,-0.2l-0.2,0.4c0.1,0.5 0.5,0.1 0.2,-0.2l0.2,0zm0.5,0.6c-0.2,0 -0.1,0.3 0,0.4l0.2,0c0.1,0 0.1,-0.4 0,-0.4c0.1,-0.1 -0.2,0 -0.2,0zm-1.5,-1c-0.2,0 -0.2,0.1 0,0.2l0,-0.2zm-0.6,0.2l0.2,0l0,-0.2c-0.1,-0.1 -0.2,0.1 -0.2,0.2zm0,-0.9l-0.2,-0.2c-0.1,-0.1 -0.3,0 -0.2,0.2l0.4,0zm-1.7,0.9c-0.1,0 -0.2,0.1 -0.2,0.2c0.2,0.1 0.3,0 0.2,-0.2zm-0.4,0c0.2,-0.1 0.1,-0.4 0,-0.4c-0.4,0 -0.4,0.2 0,0.4zm1.4,-5.5c0,0.1 -0.1,0.2 0,0zm1.5,-1.2c0,0.3 0.3,0.2 0.2,0c0.1,-0.4 -0.2,-0.4 -0.2,0zm1.2,1.4l0,-0.4c-0.2,-0.1 -0.2,0.2 0,0.4zm2.8,0.9c-0.4,-0.2 -0.5,0.2 -0.2,0.6c0.2,0.2 0.5,0.2 0.6,0c0.2,0.1 0.3,-0.4 0,-0.4c-0.1,-0.1 -0.2,-0.2 -0.4,-0.2zm5.2,4.2l-0.2,0c0.2,0.2 0.2,0 0.2,0zm-1.3,0.8c0.3,0.1 0.4,-0.1 0.4,-0.2c-0.2,-0.2 -0.5,-0.2 -0.6,0c0.1,0.2 0.1,0.2 0.2,0.2zm0.2,3.5c0.1,-0.1 0,-0.2 -0.2,0c0.1,0.1 0.2,0.1 0.2,0zm0.2,1.5c0,0.2 0.2,0.1 0.2,-0.2l-0.2,0c-0.1,-0.1 -0.2,0 0,0.2zm0.5,-0.2c0.1,0.2 0,0.2 0,0zm0.6,0c-0.1,0 -0.3,-0.1 -0.2,0.2c0.2,0.2 0.2,-0.1 0.2,-0.2z"/>`
//define a pagesetup Obj storage pagesettints
class PageSetup {
    constructor() {
        this.pageHeight_mm = 297; //279.4
        this.pageWidth_mm = 210; //215.9 210
        this.marginTop_mm = 15; //mm
        this.marginBottom_mm = 15; //mm
        this.marginLeft_mm = 15; //mm
        this.marginRight_mm = 15; //mm
        this.fontSize = 9; //px
        this.fontFamily = 'Arial';
        this.contentInnerBorderPadding = 16;
        this.RowHeightPct = [0.1,0.025,0.09,0.665,0.12];
        this.ColWidthPct = [0.06,0.08,0.36,0.06,0.14,0.06,0.06,0.18];
    }
}
//instantiation pageSetup when loading
var PS = new PageSetup;
//an Object store gridline axi
var GL = new Object
function getBorderGrids() { 

    //calc px / mm ratio
    // let svg = document.createElementNS(svgNS,'svg'); 	
    // svg.setAttribute('width',`1mm`);
    // svg.setAttribute('height',`1mm`);
    // scaleHolder.appendChild(svg);
    // let mmTopxRatio = svg.getClientRects()[0].width;
    // console.log(mmTopxRatio)
    // svg.remove() //xiemoshalv

    let mmTopxRatio = parseFloat(getComputedStyle(document.querySelector('span#tempHolder')).width)/200


    //paper size in px
    let pageWidth = PS.pageWidth_mm * mmTopxRatio
    let pageHeight = PS.pageHeight_mm * mmTopxRatio

    //calc margin from mm to px
    let marginTop = PS.marginTop_mm * mmTopxRatio
    let marginBottom = PS.marginBottom_mm * mmTopxRatio
    let marginLeft = PS.marginLeft_mm * mmTopxRatio
    let marginRight = PS.marginRight_mm * mmTopxRatio

    //InnerBorder offset 2px from outerborder
    let ContentInnerBorderWidth = pageWidth-marginLeft-marginRight-4
    let ContentInnerBorderHeight = pageHeight-marginBottom-marginTop-4

    // row y in px 
    GL.y0 = marginTop + 2;
    GL.y1 = GL.y0 + ContentInnerBorderHeight * PS.RowHeightPct[0]
    GL.y2 = GL.y1 + ContentInnerBorderHeight * PS.RowHeightPct[1]
    GL.y3 = GL.y2 + ContentInnerBorderHeight * PS.RowHeightPct[2]
    GL.y4 = GL.y3 + ContentInnerBorderHeight * PS.RowHeightPct[3]
    GL.y5 = GL.y4 + ContentInnerBorderHeight * PS.RowHeightPct[4]
    // col x in px 
    GL.x0 = marginLeft + 2
    GL.x1 = GL.x0 + ContentInnerBorderWidth * PS.ColWidthPct[0]
    GL.x2 = GL.x1 + ContentInnerBorderWidth * PS.ColWidthPct[1]
    GL.x3 = GL.x2 + ContentInnerBorderWidth * PS.ColWidthPct[2]
    GL.x4 = GL.x3 + ContentInnerBorderWidth * PS.ColWidthPct[3]
    GL.x5 = GL.x4 + ContentInnerBorderWidth * PS.ColWidthPct[4]
    GL.x6 = GL.x5 + ContentInnerBorderWidth * PS.ColWidthPct[5]
    GL.x7 = GL.x6 + ContentInnerBorderWidth * PS.ColWidthPct[6]
    GL.x8 = GL.x7 + ContentInnerBorderWidth * PS.ColWidthPct[7]
}
getBorderGrids()

// pass profile description to a placeholder, to get des height 
function getParagraphHeight (width, string) {
    let tempHolder = document.querySelector('span#tempHolder');
    tempHolder.style.fontSize = PS.fontSize + 'px';
    tempHolder.style.lineHeight = PS.fontSize*1.5 + 'px'
    tempHolder.style.width = width + 'px';
    tempHolder.innerHTML = string;
    paragraphHeight = parseFloat(getComputedStyle(tempHolder).height);
    tempHolder.innerHTML = "";
    return paragraphHeight
}
function convertMbgsToPxy (maxTrickDepth, mbgs) {
    let drawPadding = 0.075;
    let minDepth_y = GL.y3 + (GL.y4-GL.y3)*drawPadding;
    let pxy = minDepth_y + (GL.y4-GL.y3)*(1-2*drawPadding) / maxTrickDepth * mbgs;
    return pxy
}

// sessionStorage.setItem('abc', JSON.stringify(currentPageSetup))

// define a log Object store log content
class Log {
    constructor() {
        this.logId = 'NULL';
        this.locationId = 'NULL';
        this.projectNo = 'NULL';
        this.projectTitle = 'NULL';
        this.client = 'NULL';
        this.coordSys = 'NULL';
        this.xCoord = 'NULL';
        this.yCoord = 'NULL'
        this.loggedBy = 'NULL'
        this.reviewedBy = 'NULL'
        this.approvedBy = 'NULL'
        this.holeSize = 130
        this.wellHead = 'protectiveStandpipe'
        this.casingSize = 63
        this.totalWellDepth = 5.5
        this.bentoniteSealingDepth = 0.5
        this.screenIntervalFrom = 1
        this.screenIntervalTo = 5
        this.initialWaterLevel = 2.4
        this.staticWaterLevel = 2.094
        this.topOfCasingElevation = 10.520
        this.groundElevation = 10.201
        this.drilledBy = 'NULL'
        this.drillDateFrom = 'NULL'
        this.drillDateTo = 'NULL'
        this.drillMethod = 'NULL'
        this.subsurfaceProfile = [  [0,0.2,'Silty Clay','The SVG is displayed by inserting the XML into the HTML file, however, when loaded like this the SVG displayed differently compared with being displayed within an img tag. The SVG is displayed by inserting the XML into the HTML file, however, when loaded like this the SVG displayed differently compared with being displayed within an img tag.The SVG is displayed by inserting the XML into the HTML file, however, when loaded like this the SVG displayed differently compared with being displayed within an img tag.'],
                                    [0.2,3,'Clay','I am just trying to reduce the line height within the following SVG:'],
                                    [3,3.5,'Sand','The SVG is displayed by inserting the XML into the HTML file, however, when loaded like this the SVG displayed differently compared with being displayed within an img tag. The SVG is displayed by inserting the XML into the HTML file, however, when loaded like this the SVG displayed differently compared with being displayed within an img tag.']
                        ]
        this.soilSample = [[0.2,0.5,'MW-1-0.2-0.5m','1.0',true],
                           [0.9,1.0,'MW-1-0.9-1.0m','5.0',],
                           [6,6,'MW-1-0.9-1.0m','2.0',true],

                        ], //..[from,to,sampleID,PID,Lab]..
        this.maxTrickDepth = 6,
        this.majorTrick = 1
    }
}
// collection obj for Logs
var LogCollection = new Object
addNewLog ();

// add a new page 
function addNewLog (){
    //generate a uid for the newLog
    let newLogId = 'log'+ Date.now() + Math.random().toString(36).substring(2,6)
    LogCollection[newLogId] = new Log
    LogCollection[newLogId].logId = newLogId
    // create a page for newLog 
    let pageNo = scaleHolder.childElementCount
    LogCollection[newLogId].locationId = `UNTITLED_${pageNo+1}`
    switch ((PS.pageWidth_mm).toString() + (PS.pageHeight_mm).toString()){
        case '210297': pageSize = 'A4'; break;
        case '215.9279.4': pageSize = 'Letter'; break;
        default: pageSize = 'Custom';
    }


    let svg_log=document.createElementNS(svgNS,'svg'); 	
    svg_log.setAttribute('id', newLogId);
    svg_log.setAttribute('class', 'logs');
    svg_log.setAttribute('data-name', `UNTITLED_${pageNo+1}`);
    svg_log.setAttribute('data-size',pageSize);
    svg_log.setAttribute('xmlns', svgNS);
    svg_log.setAttribute('version','1.1');
    svg_log.setAttribute('width',`${PS.pageWidth_mm}mm`);
    svg_log.setAttribute('height',`${PS.pageHeight_mm}mm`);
    svg_log.setAttribute('font-family', `${PS.fontFamily}`)//'Book Antiqua''Arial'
    svg_log.setAttribute('font-size', `${PS.fontSize}` )//'Book Antiqua''Arial'
    // svg.setAttribute('viewBox',`0 0 ${thisPageWidth} ${thisPageHeight}` );
    
    scaleHolder.appendChild(svg_log)
    updatePageNo ()

    drawBorderLine(newLogId)
    addCompanyLogo(newLogId)
    addLogTitle (newLogId)
    addColTitle(newLogId)
    addLegend (newLogId)
    updateAxis (newLogId)
    updateSoilSample (newLogId)
    updateSubsurfaceProfile (newLogId)
    updateWellDetail (newLogId)
    updateWaterLevel (newLogId)

    return newLogId
}
function drawBorderLine (logId){
    let svg_log = document.querySelector(`svg#${logId}`)
    //remove grid if exist
    if(svg_log.querySelector('g.borderLine')){svg_log.querySelector('g.borderLine').remove()};
     //draw grid
     let g_borderLine=document.createElementNS(svgNS,'g'); 
     svg_log.appendChild(g_borderLine);
     g_borderLine.setAttribute('class', 'borderLine')
     g_borderLine.setAttribute('stroke-width', 0.5)
     g_borderLine.setAttribute('fill', 'none')
     g_borderLine.setAttribute('stroke', 'black')
    //grid line paths
    let grid_template = [
        `M ${GL.x0-2} ${GL.y0-2} L ${GL.x8+2} ${GL.y0-2} L ${GL.x8+2} ${GL.y5+2} L ${GL.x0-2} ${GL.y5+2} Z`,//grid_template.outerBorder
        `M ${GL.x0} ${GL.y0} L ${GL.x8} ${GL.y0} L ${GL.x8} ${GL.y5} L ${GL.x0} ${GL.y5} Z`,//grid_template.innerBorder
        `M ${GL.x0} ${GL.y1} L ${GL.x8} ${GL.y1}`,//grid_template.hGrid1
        `M ${GL.x0} ${GL.y2} L ${GL.x7} ${GL.y2}`,//grid_template.hGrid2
        `M ${GL.x0} ${GL.y3} L ${GL.x8} ${GL.y3}`,//grid_template.hGrid3
        `M ${GL.x0} ${GL.y4} L ${GL.x8} ${GL.y4}`,//grid_template.hGrid4
        `M ${GL.x1} ${GL.y2} L ${GL.x1} ${GL.y4}`,//grid_template.vGrid1
        `M ${GL.x2} ${GL.y0} L ${GL.x2} ${GL.y1} M ${GL.x2} ${GL.y2} L ${GL.x2} ${GL.y4}`,//grid_template.vGrid2
        `M ${GL.x3} ${GL.y2} L ${GL.x3} ${GL.y4}`,//grid_template.vGrid4
        `M ${GL.x4} ${GL.y1} L ${GL.x4} ${GL.y4}`,//grid_template.vGrid5
        `M ${GL.x5} ${GL.y2} L ${GL.x5} ${GL.y4}`,//grid_template.vGrid6
        `M ${GL.x6} ${GL.y2} L ${GL.x6} ${GL.y4}`,//grid_template.vGrid7
        `M ${GL.x7} ${GL.y1} L ${GL.x7} ${GL.y4}` //grid_template.vGrid8
    ]  
    grid_template.forEach((d) => {
        let path = document.createElementNS(svgNS, 'path');
        path.setAttribute('d', d)
        g_borderLine.appendChild(path)
    });
}   
function addColTitle (logId){
    let svg_log = document.querySelector(`svg#${logId}`)
    if(svg_log.querySelector('g.colTitle')){svg_log.querySelector('g.colTitle').remove()};

    let g_colTitle=document.createElementNS(svgNS,'g');
    svg_log.appendChild(g_colTitle);
    g_colTitle.setAttribute('class', 'colTitle');
    g_colTitle.setAttribute('text-anchor', 'middle');
    g_colTitle.setAttribute('dominant-baseline', 'middle');

    //test content
    var text_template  = new(Object)
    text_template.r2c1 = ['SUBSURFACE PROFILE', (GL.x0+GL.x4)/2,(GL.y1+GL.y2)/2   ]
    text_template.r2c2 = ['SAMPLE',             (GL.x4+GL.x7)/2,(GL.y1+GL.y2)/2   ]
    text_template.r2c3 = ['WELL',               (GL.x7+GL.x8)/2,(GL.y1+GL.y3)/2-12]
    text_template.r2c4 = ['CONSTRUCTION',       (GL.x7+GL.x8)/2,(GL.y1+GL.y3)/2   ]
    text_template.r2c5 = ['DETAILS',            (GL.x7+GL.x8)/2,(GL.y1+GL.y3)/2+12]
    text_template.r3c1 = ['Depth (m)' ,         (GL.x0+GL.x1)/2,(GL.y2+GL.y3)/2   ]
    text_template.r3c2 = ['Symbol',             (GL.x1+GL.x2)/2,(GL.y2+GL.y3)/2   ]
    text_template.r3c3 = ['Description',        (GL.x2+GL.x3)/2,(GL.y2+GL.y3)/2   ]
    text_template.r3c4 = ['Elev / Depth (m)',   (GL.x3+GL.x4)/2,(GL.y2+GL.y3)/2   ]
    text_template.r3c5 = ['Sample ID',          (GL.x4+GL.x5)/2,(GL.y2+GL.y3)/2   ]
    text_template.r3c6 = ['PID',                (GL.x5+GL.x6)/2,(GL.y2+GL.y3)/2   ]
    text_template.r3c7 = ['Lab Analysis',       (GL.x6+GL.x7)/2,(GL.y2+GL.y3)/2   ]

    //lable text
    Object.keys(text_template).forEach(key => {
        let text=document.createElementNS(svgNS,'text'); 
        text.innerHTML = text_template[key][0];
        text.setAttribute('x', `${text_template[key][1]}` );
        text.setAttribute('y', `${text_template[key][2]}` );
        if (text_template[key][2] == (GL.y2+GL.y3)/2){
            text.setAttribute('transform', `rotate(-90 ${text_template[key][1]} ${text_template[key][2]})`);
        };
        g_colTitle.appendChild(text)
    })
}
function addCompanyLogo (logId) {
    let svg_log = document.querySelector(`svg#${logId}`)
    if(svg_log.querySelector('g.companyLogo')){svg_log.querySelector('g.companyLogo').remove()};

    // insert ERM logo
    let g_companyLogo=document.createElementNS(svgNS,'g'); 
    svg_log.appendChild(g_companyLogo);
    // svg_ERMlogo w51 * h69
    g_companyLogo.innerHTML = logoInnerHtml;
    g_companyLogo.setAttribute('class', 'companyLogo')
    let logoHeight = g_companyLogo.getBBox().height
    let logoWidth = g_companyLogo.getBBox().width
    let allowedHeight = GL.y1-GL.y0-PS.contentInnerBorderPadding*2
    let allowedWidth = GL.x2-GL.x0-PS.contentInnerBorderPadding*2
    let scale = Math.min(allowedHeight/logoHeight, allowedWidth/logoWidth)

    let logoOffset_X = (GL.x2+GL.x0)*0.5 - 0.5*scale*logoWidth;
    let logoOffset_y = (GL.y1+GL.y0)*0.5 - 0.5*scale*logoHeight;

    g_companyLogo.setAttribute('transform',`translate(${logoOffset_X},${logoOffset_y}), scale(${scale})`)
}
function addLogTitle (logId) {
    let svg_log = document.querySelector(`svg#${logId}`)
    let log = LogCollection[logId];
    if(svg_log.querySelector('g.tableTitle')){svg_log.querySelector('g.tableTitle').remove()};
    //header
    let g_tableTitle=document.createElementNS(svgNS,'g');
    svg_log.appendChild(g_tableTitle);
    g_tableTitle.setAttribute('class', 'tableTitle');

    let text_x1 = GL.x2 + PS.contentInnerBorderPadding;
    let text_x2 = GL.x2 + (GL.x8 - GL.x2)*0.4;// + PS.contentInnerBorderPadding;
    let text_x3 = GL.x2 + (GL.x8 - GL.x2)*0.7 + PS.contentInnerBorderPadding;

    let text_y1 = GL.y0 + PS.contentInnerBorderPadding; //but hanging
    let text_y2 = GL.y1 - PS.contentInnerBorderPadding - 30//text_y1 + (y1-y0-2*contentInnerBorderPadding)/42*(15+9*1);
    let text_y3 = GL.y1 - PS.contentInnerBorderPadding - 15//text_y1 + (y1-y0-2*contentInnerBorderPadding)/42*(15+9*2);
    let text_y4 = GL.y1 - PS.contentInnerBorderPadding//text_y1 + (y1-y0-2*contentInnerBorderPadding)/42*(15+9*3);
    
    let deltax
    let g_tableTitleCol0=document.createElementNS(svgNS,'g');
    g_tableTitleCol0.setAttribute('class','tableTitleCol0');
    g_tableTitle.appendChild(g_tableTitleCol0);  
        let text_locationIdLable=document.createElementNS(svgNS,'text'); 
        g_tableTitleCol0.appendChild(text_locationIdLable)
        text_locationIdLable.setAttribute('class','dataLable');
        text_locationIdLable.setAttribute('font-size',`${PS.fontSize*1.67}`);
        text_locationIdLable.setAttribute('font-weight','bold');
        text_locationIdLable.setAttribute('dominant-baseline', 'hanging');
        text_locationIdLable.innerHTML = `
        <tspan class="locationId" x="${text_x1}" y="${text_y1}">LOG OF BOREHOLE:   </tspan>
        `
        deltax = text_locationIdLable.getBBox().width + 10;
        let text_locationIdValue=document.createElementNS(svgNS,'text'); 
        g_tableTitleCol0.appendChild(text_locationIdValue)
        text_locationIdValue.setAttribute('class','dataValue');
        text_locationIdValue.setAttribute('font-size',`${PS.fontSize*1.67}`);
        text_locationIdValue.setAttribute('font-weight','bold');
        text_locationIdValue.setAttribute('dominant-baseline', 'hanging');
        text_locationIdValue.setAttribute('text-decoration','underline');
        text_locationIdValue.innerHTML = `
        <tspan class="locationId" x="${text_x1+deltax}" y="${text_y1}">${log.locationId}</tspan>
        `

    let g_tableTitleCol1=document.createElementNS(svgNS,'g');
    g_tableTitleCol1.setAttribute('class','tableTitleCol1');
    g_tableTitle.appendChild(g_tableTitleCol1);  
        let text_projectDetialLable=document.createElementNS(svgNS,'text'); 
        g_tableTitleCol1.appendChild(text_projectDetialLable)
        text_projectDetialLable.setAttribute('class','dataLable');
        text_projectDetialLable.innerHTML = `
        <tspan class="projectNo" x="${text_x1}"    y="${text_y2}">Project No: </tspan>
        <tspan class="projectTitle" x="${text_x1}"    y="${text_y3}">Project Title: </tspan>
        <tspan class="client" x="${text_x1}"    y="${text_y4}">Client: </tspan>
        `;
        deltax = text_projectDetialLable.getBBox().width + 5;
        let text_projectDetialValue =document.createElementNS(svgNS,'text'); 
        g_tableTitleCol1.appendChild(text_projectDetialValue)
        text_projectDetialValue.setAttribute('class','dataValue');
        text_projectDetialValue.setAttribute('text-decoration','underline');
        text_projectDetialValue.innerHTML = `
        <tspan class="projectNo" x="${text_x1+deltax}" y="${text_y2}">${log.projectNo}</tspan>
        <tspan class="projectTitle" x="${text_x1+deltax}" y="${text_y3}">${log.projectTitle}</tspan>
        <tspan class="client" x="${text_x1+deltax}" y="${text_y4}">${log.client}</tspan>
        `;

    let g_tableTitleCol2=document.createElementNS(svgNS,'g');
    g_tableTitleCol2.setAttribute('class','tableTitleCol2');
    g_tableTitle.appendChild(g_tableTitleCol2);  
        let text_coordDetialLable=document.createElementNS(svgNS,'text'); 
        g_tableTitleCol2.appendChild(text_coordDetialLable)
        text_coordDetialLable.setAttribute('class','dataLable');
        text_coordDetialLable.innerHTML = `
        <tspan class="coordSys" x="${text_x2}"    y="${text_y2}">Coord. Sys.: </tspan>
        <tspan class="xCoord" x="${text_x2}"    y="${text_y3}">X Coord.: </tspan>
        <tspan class="yCoord" x="${text_x2}"    y="${text_y4}">Y Coord.: </tspan>
        `;
        deltax = text_coordDetialLable.getBBox().width + 5;
        let text_coordDetialValue=document.createElementNS(svgNS,'text'); 
        g_tableTitleCol2.appendChild(text_coordDetialValue)
        text_coordDetialValue.setAttribute('class','dataValue');
        text_coordDetialValue.setAttribute('text-decoration','underline');
        text_coordDetialValue.innerHTML = `
        <tspan class="coordSys" x="${text_x2+deltax}" y="${text_y2}">${log.coordSys}</tspan>
        <tspan class="xCoord" x="${text_x2+deltax}" y="${text_y3}">${log.xCoord}</tspan>
        <tspan class="yCoord" x="${text_x2+deltax}" y="${text_y4}">${log.yCoord}</tspan>
        `;


    let g_tableTitleCol3=document.createElementNS(svgNS,'g');
    g_tableTitleCol3.setAttribute('class','tableTitleCol3');
    g_tableTitle.appendChild(g_tableTitleCol3);  
        let text_reviewListLable=document.createElementNS(svgNS,'text'); 
        g_tableTitleCol3.appendChild(text_reviewListLable)
        text_reviewListLable.setAttribute('class','dataLable');
        text_reviewListLable.innerHTML = `
        <tspan class="loggedBy" x="${text_x3}"    y="${text_y2}">Logged By: </tspan>
        <tspan class="reviewedBy" x="${text_x3}"    y="${text_y3}">Reviewed By: </tspan>
        <tspan class="approvedBy" x="${text_x3}"    y="${text_y4}">Approved By: </tspan>
        `
        deltax = text_reviewListLable.getBBox().width + 5;
        let text_reviewListValue=document.createElementNS(svgNS,'text'); 
        g_tableTitleCol3.appendChild(text_reviewListValue)
        text_reviewListValue.setAttribute('class','dataValue');
        text_reviewListValue.setAttribute('text-decoration','underline');
        text_reviewListValue.innerHTML = `
        <tspan class="loggedBy" x="${text_x3+deltax}" y="${text_y2}">${log.loggedBy}</tspan>
        <tspan class="reviewedBy" x="${text_x3+deltax}" y="${text_y3}">${log.reviewedBy}</tspan>
        <tspan class="approvedBy" x="${text_x3+deltax}" y="${text_y4}"">${log.approvedBy}</tspan>
        `
}
function addLegend (logId) {
    let svg_log = document.querySelector(`svg#${logId}`);
    let log = LogCollection[logId];
    if(svg_log.querySelector('g.legend')){svg_log.querySelector('g.legend').remove()};

    //creata a group
    let g_legend=document.createElementNS(svgNS,'g');
    svg_log.appendChild(g_legend);
    g_legend.setAttribute('class', 'legend');

    let colwidth = (GL.x8 - GL.x0 - 2*PS.contentInnerBorderPadding)/3
    let text_x1 = GL.x0 + PS.contentInnerBorderPadding;
    let text_x2 = text_x1 + colwidth;
    let text_x3 = text_x1 + colwidth * 2 + PS.contentInnerBorderPadding;

    let text_y1 = GL.y4 + PS.contentInnerBorderPadding; //but hanging
    let text_y2 = text_y1 + 15;
    let text_y3 = text_y2 + 15;
    
    let deltax
    //Col1 lable, value, unit
    let g_legendCol1=document.createElementNS(svgNS,'g');
    g_legendCol1.setAttribute('class','legendCol1');
    g_legend.appendChild(g_legendCol1);  

        let text_legendCol1Lable=document.createElementNS(svgNS,'text'); 
        g_legendCol1.appendChild(text_legendCol1Lable)
        text_legendCol1Lable.setAttribute('class','dataLable');
        text_legendCol1Lable.setAttribute('dominant-baseline', 'hanging');
        text_legendCol1Lable.innerHTML = `
        <tspan class="holeSize" x="${text_x1}" y="${text_y1}">Hole Size: </tspan>
        <tspan class="casingSize" x="${text_x1}" y="${text_y2}">Casing Size: </tspan>
        <tspan class="totalWellDepth" x="${text_x1}" y="${text_y3}">Total Well Depth: </tspan>
        `

        deltax = text_legendCol1Lable.getBBox().width; 
        let text_legendCol1Value=document.createElementNS(svgNS,'text'); 
        g_legendCol1.appendChild(text_legendCol1Value)
        text_legendCol1Value.setAttribute('class','dataValue');
        text_legendCol1Value.setAttribute('dominant-baseline', 'hanging');
        text_legendCol1Value.setAttribute('text-decoration', 'underline');
        text_legendCol1Value.setAttribute('text-anchor', 'end');
        text_legendCol1Value.innerHTML = `
        <tspan class="holeSize" x="${text_x1+deltax}" y="${text_y1}">${log.holeSize}</tspan>
        <tspan class="casingSize" x="${text_x1+deltax}" y="${text_y2}">${log.casingSize}</tspan>
        <tspan class="totalWellDepth" x="${text_x1+deltax}" y="${text_y3}">${log.totalWellDepth}</tspan>&nbsp;
        `
        deltax = text_legendCol1Value.getBBox().width + 5; 
        text_legendCol1Value.setAttribute('transform',`translate(${deltax},0)`);

        deltax = g_legendCol1.getBBox().width + 5; 
        let text_legendCol1Unit=document.createElementNS(svgNS,'text'); 
        g_legendCol1.appendChild(text_legendCol1Unit)
        text_legendCol1Unit.setAttribute('class','dataUnit');
        text_legendCol1Unit.setAttribute('dominant-baseline', 'hanging');
        text_legendCol1Unit.innerHTML = `
        <tspan class="holeSize" x="${text_x1+deltax}" y="${text_y1}">mm</tspan>
        <tspan class="casingSize" x="${text_x1+deltax}" y="${text_y2}">mm</tspan>
        <tspan class="totalWellDepth" x="${text_x1+deltax}" y="${text_y3}">m bgs</tspan>
        `
    
    //Col2 lable, value, unit
    let g_legendCol2=document.createElementNS(svgNS,'g');
    g_legendCol2.setAttribute('class','legendCol2');
    g_legend.appendChild(g_legendCol2);  

        let text_legendCol2Lable=document.createElementNS(svgNS,'text'); 
        g_legendCol2.appendChild(text_legendCol2Lable)
        text_legendCol2Lable.setAttribute('class','dataLable');
        text_legendCol2Lable.setAttribute('dominant-baseline', 'hanging');
        text_legendCol2Lable.innerHTML = `
        <tspan class="screenInterval" x="${text_x2}" y="${text_y1}">Screen Interval: </tspan>
        <tspan class="initialWaterLevel" x="${text_x2}" y="${text_y2}">Initial Water Level: </tspan>
        <tspan class="staticWaterLevel" x="${text_x2}" y="${text_y3}">Static Water Level: </tspan>
        `

        deltax = text_legendCol1Lable.getBBox().width + 5; 
        let text_legendCol2Value=document.createElementNS(svgNS,'text'); 
        g_legendCol2.appendChild(text_legendCol2Value)
        text_legendCol2Value.setAttribute('class','dataValue');
        text_legendCol2Value.setAttribute('dominant-baseline', 'hanging');
        text_legendCol2Value.setAttribute('text-decoration', 'underline');
        text_legendCol2Value.setAttribute('text-anchor', 'end');
        text_legendCol2Value.innerHTML = `
        <tspan class="screenInterval" x="${text_x2+deltax}" y="${text_y1}">
        <tspan class="screenIntervalFrom">${log.screenIntervalFrom}</tspan> - <tspan class="screenIntervalTo">${log.screenIntervalTo}</tspan>
        </tspan>
        <tspan class="initialWaterLevel" x="${text_x2+deltax}" y="${text_y2}">${log.initialWaterLevel}</tspan>
        <tspan class="staticWaterLevel" x="${text_x2+deltax}" y="${text_y3}">${log.staticWaterLevel}</tspan>&nbsp;
        `
        deltax = text_legendCol2Value.getBBox().width + 5; 
        text_legendCol2Value.setAttribute('transform',`translate(${deltax},0)`);

        deltax = g_legendCol2.getBBox().width + 5; 
        let text_legendCol2Unit=document.createElementNS(svgNS,'text'); 
        g_legendCol2.appendChild(text_legendCol2Unit)
        text_legendCol2Unit.setAttribute('class','dataUnit');
        text_legendCol2Unit.setAttribute('dominant-baseline', 'hanging');
        text_legendCol2Unit.innerHTML = `
        <tspan class="screenInterval" x="${text_x2+deltax}" y="${text_y1}">m bgs</tspan>
        <tspan class="initialWaterLevel" x="${text_x2+deltax}" y="${text_y2}">m bgs</tspan>
        <tspan class="staticWaterLevel" x="${text_x2+deltax}" y="${text_y3}">m bgs</tspan>
        `

    //Col3 lable, value
    let g_legendCol3=document.createElementNS(svgNS,'g');
    g_legendCol3.setAttribute('class','legendCol2');
    g_legend.appendChild(g_legendCol3);  

        let text_legendCol3Lable=document.createElementNS(svgNS,'text'); 
        g_legendCol3.appendChild(text_legendCol3Lable)
        text_legendCol3Lable.setAttribute('class','dataLable');
        text_legendCol3Lable.setAttribute('dominant-baseline', 'hanging');
        text_legendCol3Lable.innerHTML = `
        <tspan class="drilledBy" x="${text_x3}" y="${text_y1}">Drilled By: </tspan>
        <tspan class="drillDate" x="${text_x3}" y="${text_y2}">Drill Date: </tspan>
        <tspan class="drillMethod" x="${text_x3}" y="${text_y3}">Drill Method: </tspan>
        `

        deltax = text_legendCol3Lable.getBBox().width + 5; 
        let text_legendCol3Value=document.createElementNS(svgNS,'text'); 
        g_legendCol3.appendChild(text_legendCol3Value)
        text_legendCol3Value.setAttribute('class','dataValue');
        text_legendCol3Value.setAttribute('dominant-baseline', 'hanging');
        text_legendCol3Value.setAttribute('text-decoration', 'underline');
        text_legendCol3Value.innerHTML = `
        <tspan class="drilledBy" x="${text_x3+deltax}" y="${text_y1}">${log.drilledBy}</tspan>
        <tspan class="drillDate" x="${text_x3+deltax}" y="${text_y2}">NULL</tspan>
        <tspan class="drillMethod" x="${text_x3+deltax}" y="${text_y3}">${log.drillMethod}</tspan>&nbsp;
        `
}
function updateAxis (logId) {
    let log = LogCollection[logId];
    let maxTrickDepth = log.maxTrickDepth;
    let majorTrick = log.majorTrick;

    let svg_log = document.querySelector(`svg#${logId}`)
    if(svg_log.querySelector('g.axis')){svg_log.querySelector('g.axis').remove()};
    
    let g_axis = document.createElementNS(svgNS, 'g');
    g_axis.setAttribute('class', 'axis')

    let minorTrick = majorTrick/10;

    for (i=0, tricks = Math.floor(maxTrickDepth/minorTrick); i<tricks+1; i++){
        if (i % 10) {//minorTrick) % majorTrick){
            let path = document.createElementNS(svgNS, 'path');
            let doubleTrick = i%5==0 ? 1: 0;
            let path_x = GL.x1-(GL.x1-GL.x0)*0.125*(1+doubleTrick);
            // let path_y = minDepth_y + (GL.y4-GL.y3)*0.85 / tricks * i;
            let path_y = convertMbgsToPxy (tricks, i);
            path.setAttribute('d', `M ${path_x} ${path_y} L ${GL.x1} ${path_y}`)
            path.setAttribute('stroke-width', 0.5)
            path.setAttribute('fill', 'none')
            path.setAttribute('stroke', 'black')
            g_axis.appendChild(path)
        } else {
            let path = document.createElementNS(svgNS, 'path');
            let path_x = GL.x1-(GL.x1-GL.x0)*1;
            let path_y = convertMbgsToPxy (tricks, i);
            path.setAttribute('d', `M ${path_x} ${path_y} L ${GL.x1} ${path_y}`)
            path.setAttribute('stroke-width', 0.5)
            path.setAttribute('fill', 'none')
            path.setAttribute('stroke', 'black')
            g_axis.appendChild(path)
            let text=document.createElementNS(svgNS,'text'); 
            text.innerHTML = (i * minorTrick).toFixed(3);
            text.setAttribute('x', `${(GL.x0+GL.x1)/2}` );//path_x - 2
            text.setAttribute('y', `${path_y+4}` );
            text.setAttribute('text-anchor', 'middle' );
            text.setAttribute('dominant-baseline', 'hanging' ); //hanging ideographic middle
            // text.setAttribute('font-size', '9' );
            g_axis.appendChild(text)
        }
    }

    var text=document.createElementNS(svgNS,'text'); 
    text.innerHTML = 'GROUND SURFACE';
    text.setAttribute('x', `${(GL.x2+GL.x3)/2}` );
    text.setAttribute('y', `${convertMbgsToPxy(log.maxTrickDepth, 0)-2}` );
    text.setAttribute('text-anchor', 'middle' );
    text.setAttribute('dominant-baseline', 'ideographic' );
    g_axis.appendChild(text)

    svg_log.appendChild(g_axis)
}
function updateSoilSample (logId) {
    let log = LogCollection[logId];
    if (log.soilSample.length == 0) {return 0} 

    let svg_log = document.querySelector(`svg#${logId}`);
    if(svg_log.querySelector('g.soilSample')){svg_log.querySelector('g.soilSample').remove()};
    
    let g_soilSample = document.createElementNS(svgNS, 'g');
    svg_log.appendChild(g_soilSample);
    g_soilSample.setAttribute('class', 'soilSample')
    g_soilSample.setAttribute('text-anchor', 'middle');
    g_soilSample.setAttribute('dominant-baseline', 'middle');

    log.soilSample.forEach(record=>{
              
        let depthFrom = record[0];
        let depthTo = record[1];
        let sampleID = record[2];
        let pid = record[3];
        let lab = record[4]?'√':'';
        
        let record_y = convertMbgsToPxy (log.maxTrickDepth, (depthTo+depthFrom) * 0.5)
        let sampleID_x = (GL.x5+GL.x4)*0.5;
        let pid_x = (GL.x6+GL.x5)*0.5;
        let lab_x = (GL.x7+GL.x6)*0.5;

        let text_sampleRecord = document.createElementNS(svgNS, 'text');
        g_soilSample.appendChild(text_sampleRecord);
        text_sampleRecord.innerHTML=`
        <tspan x="${sampleID_x}" y="${record_y}">${sampleID}</tspan>
        <tspan x="${pid_x}" y="${record_y}">${pid}</tspan>
        <tspan x="${lab_x}" y="${record_y}">${lab}</tspan>
        `
    })

}
function updateSubsurfaceProfile (logId) {
    let log = LogCollection[logId];
    if (log.subsurfaceProfile.length == 0) {return 0} 

    let svg_log = document.querySelector(`svg#${logId}`);
    if(svg_log.querySelector('g.subsurfaceProfile')){svg_log.querySelector('g.subsurfaceProfile').remove()};
    
    let g_subsurfaceProfile = document.createElementNS(svgNS, 'g');
    svg_log.appendChild(g_subsurfaceProfile);
    g_subsurfaceProfile.setAttribute('class', 'subsurfaceProfile');
    g_subsurfaceProfile.setAttribute('dominant-baseline', 'hanging' );

    //create a textpath
    // let g_descroptionPath = document.createElementNS(svgNS, 'g');
    // g_subsurfaceProfile.appendChild(g_descroptionPath);
    // let lineHeight = PS.fontSize * 1.5;
    // let d_descroptionPath = ''
    // for (i=0;i<30;i++){
    //     path_y = minDepth_y + i * lineHeight;
    //     d_descroptionPath += `M ${GL.x2+8} ${path_y} L ${GL.x3-8} ${path_y}`
    // }
    // let path_descroptionPath = document.createElementNS(svgNS, 'path');
    // g_descroptionPath.appendChild(path_descroptionPath);
    // path_descroptionPath.setAttribute('id', 'descroptionPath');
    // path_descroptionPath.setAttribute('d', d_descroptionPath);
    // path_descroptionPath.setAttribute('stroke-width', 0.5)
    // path_descroptionPath.setAttribute('stroke', 'red')

    let minDepth_y = GL.y3 + (GL.y4-GL.y3)*0.075;//7.5% height of description col will be blank 
    let usedSpace_y = -8;
    log.subsurfaceProfile.forEach((record,index)=>{

        let g_record = document.createElementNS(svgNS, 'g');
        g_subsurfaceProfile.appendChild(g_record);
        g_record.setAttribute('class',`layer${index+1}`);
        
        let depthFrom = record[0];
        let depthTo = record[1];
        let materialType = record[2];
        let description = record[3];

        let record_y = (GL.y4-GL.y3)*0.85 / log.maxTrickDepth * depthFrom;
        let adjusted_y = Math.max(record_y, usedSpace_y + 8);

        let path_leadingLine = document.createElementNS(svgNS, 'path');
        g_record.appendChild(path_leadingLine);
        path_leadingLine.setAttribute('class', 'descroptionLeadingLine');
        path_leadingLine.setAttribute('d', `M ${GL.x1} ${minDepth_y+record_y} L ${GL.x2} ${minDepth_y+record_y} L ${GL.x2+4} ${minDepth_y+adjusted_y} L ${GL.x4} ${minDepth_y+adjusted_y}`);
        path_leadingLine.setAttribute('stroke-width', 0.5);
        path_leadingLine.setAttribute('stroke', 'black');
        path_leadingLine.setAttribute('fill', 'none');

        let text_depth=document.createElementNS(svgNS,'text'); 
        g_record.appendChild(text_depth);
        text_depth.innerHTML = (depthFrom).toFixed(3);
        text_depth.setAttribute('x', `${(GL.x3+GL.x4)/2}` );//path_x - 2
        text_depth.setAttribute('y', `${minDepth_y+adjusted_y+4}` );
        text_depth.setAttribute('text-anchor', 'middle' );
        text_depth.setAttribute('dominant-baseline', 'hanging' ); //hanging ideographic middle

        if (log.groundElevation != 'NULL'){
            let text_elev=document.createElementNS(svgNS,'text'); 
            g_record.appendChild(text_elev);
            text_elev.innerHTML = (log.groundElevation-depthFrom).toFixed(3);
            text_elev.setAttribute('x', `${(GL.x3+GL.x4)/2}` );//path_x - 2
            text_elev.setAttribute('y', `${minDepth_y+adjusted_y}` );
            text_elev.setAttribute('text-anchor', 'middle' );
            text_elev.setAttribute('dominant-baseline', 'ideographic' ); //hanging ideographic middle
        }

        /*
        another soultion use textpath, no better than foreignObject
        //thus drawing in 85% height of (GL.y4-GL.y3)
        let g_record_des = document.createElementNS(svgNS, 'g');
        g_record.appendChild(g_record_des);
        let text_materialType = document.createElementNS(svgNS, 'text');
        g_record_des.appendChild(text_materialType);
        text_materialType.setAttribute('class','materialType');
        text_materialType.setAttribute('font-weight','bold');
        text_materialType.innerHTML=`
        <textPath href="#descroptionPath">
        ${materialType}, ${depthFrom} - ${depthTo} m bgs;
        </textPath>`;

        let text_description = document.createElementNS(svgNS, 'text');
        g_record_des.appendChild(text_description);
        text_description.setAttribute('class','description');
        text_description.setAttribute('transform',`translate(0,${lineHeight})`)
        text_description.innerHTML=`
        <textPath href="#descroptionPath">${description}</textPath>`;

        g_record_des.setAttribute('transform',`translate(0,${adjusted_y+4})`)
        */
        //thus drawing in 85% height of (GL.y4-GL.y3)
        let g_record_des = document.createElementNS(svgNS, 'g');
        g_record.appendChild(g_record_des);

            let text_materialType = document.createElementNS(svgNS, 'text');
            g_record_des.appendChild(text_materialType);
            text_materialType.setAttribute('class','materialType');
            text_materialType.setAttribute('font-weight','bold');
            text_materialType.setAttribute('x',`${GL.x2+8}`);
            text_materialType.setAttribute('y',`${minDepth_y+adjusted_y+8}`);
            text_materialType.innerHTML=`${materialType}, ${depthFrom} - ${depthTo} m bgs;`;

            let paragraphHeight = getParagraphHeight((GL.x3-GL.x2-14),description);

            let foreignObject_description = document.createElementNS(svgNS, 'foreignObject');
            g_record_des.appendChild(foreignObject_description);
            foreignObject_description.setAttribute('class','description');
            foreignObject_description.setAttribute('x',`${GL.x2+8}`);
            foreignObject_description.setAttribute('y',`${minDepth_y+adjusted_y+6+1.5*PS.fontSize}`);
            foreignObject_description.setAttribute('width',`${GL.x3-GL.x2-14}`);
            foreignObject_description.setAttribute('height',`${paragraphHeight}`);
            foreignObject_description.setAttribute('style', `word-break:break-word; font-size:${PS.fontSize}px; line-height: ${1.5*PS.fontSize}px`)
            foreignObject_description.innerHTML=`<span xmlns="http://www.w3.org/1999/xhtml">${description}</span>`;

        // usedSpace_y =  - minDepth_y - svg_log.getBoundingClientRect().top + g_record.getBoundingClientRect().bottom
        usedSpace_y = adjusted_y + g_record_des.getBBox().height +4

        if (index == log.subsurfaceProfile.length-1) {

            let record_y = (GL.y4-GL.y3)*0.85 / log.maxTrickDepth * depthTo;
            let adjusted_y = Math.max(record_y, usedSpace_y + 8);

            let path_leadingLine = document.createElementNS(svgNS, 'path');
            g_record.appendChild(path_leadingLine);
            path_leadingLine.setAttribute('id', 'descroptionPath');
            path_leadingLine.setAttribute('d', `M ${GL.x1} ${minDepth_y+record_y} L ${GL.x2} ${minDepth_y+record_y} L ${GL.x2+4} ${minDepth_y+adjusted_y} L ${GL.x4} ${minDepth_y+adjusted_y}`);
            path_leadingLine.setAttribute('stroke-width', 0.5);
            path_leadingLine.setAttribute('stroke', 'black');
            path_leadingLine.setAttribute('fill', 'none');
            
            let text_depth=document.createElementNS(svgNS,'text'); 
            g_record.appendChild(text_depth);
            text_depth.innerHTML = (depthTo).toFixed(3);
            text_depth.setAttribute('x', `${(GL.x3+GL.x4)/2}` );//path_x - 2
            text_depth.setAttribute('y', `${minDepth_y+adjusted_y+4}` );
            text_depth.setAttribute('text-anchor', 'middle' );
            text_depth.setAttribute('dominant-baseline', 'hanging' ); //hanging ideographic middle
    
            if (log.groundElevation != 'NULL'){
                let text_elev=document.createElementNS(svgNS,'text'); 
                g_record.appendChild(text_elev);
                text_elev.innerHTML = (log.groundElevation-depthTo).toFixed(3);
                text_elev.setAttribute('x', `${(GL.x3+GL.x4)/2}` );//path_x - 2
                text_elev.setAttribute('y', `${minDepth_y+adjusted_y}` );
                text_elev.setAttribute('text-anchor', 'middle' );
                text_elev.setAttribute('dominant-baseline', 'ideographic' ); //hanging ideographic middle
            }

            var text=document.createElementNS(svgNS,'text'); 
            text.innerHTML = 'END of BOREHOLE';
            text.setAttribute('x', `${(GL.x2+GL.x3)/2}` );
            text.setAttribute('y', `${minDepth_y+adjusted_y+4}` );
            text.setAttribute('text-anchor', 'middle' );
            // text.setAttribute('dominant-baseline', 'hanging' );
            g_record.appendChild(text)
        }
    })


}
function updateWellDetail (logId) {
    let log = LogCollection[logId];
    if (log.subsurfaceProfile.length == 0) {return 0} 

    let svg_log = document.querySelector(`svg#${logId}`);
    if(svg_log.querySelector('g.wellDetail')){svg_log.querySelector('g.wellDetail').remove()};
    
    let g_wellDetail = document.createElementNS(svgNS, 'g');
    svg_log.appendChild(g_wellDetail);
    g_wellDetail.setAttribute('class','wellDetail');

    g_wellDetail.innerHTML = 
   `<defs>
    <marker id="marker-arrow" markerWidth="12" markerHeight="6" refX="10" refY="3" orient="auto">
        <path d="M0,0 L12,3 L0,6Z" fill='#000'></path>
    </marker>

    <pattern id="pattern-screen" x="0" y="0" width="10" height="4" patternUnits="userSpaceOnUse">
        <path d="M 0 2 L 10 2" stroke-width="0.25" stroke="#000" ></path>
    </pattern>

    <pattern id="pattern-steel" x="0" y="0" width="3" height="3" patternUnits="userSpaceOnUse">
        <rect width="3" height="3" fill='#CCC'></rect>
        <path d="M0,1.5 L1.5,3 M1.5,0 L3,1.5" stroke-width="0.25" stroke="#000" ></path>
    </pattern>

    <pattern id="pattern-ben" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect width="4" height="4" fill='#FFF'></rect>
        <path d="M0,2 L2,4 L4,2 L2,0 Z" stroke-width="0.25" stroke="#000" fill='white'></path>
    </pattern>

    <pattern id="pattern-concrete" x="0" y="0" width="20" height="10" stroke-width="0.2"  patternUnits="userSpaceOnUse">
        <rect width="20" height="10" fill='#FFF'stroke="#FFF"></rect>
        <polygon points="11.883,7.606 11.222,9.873 13.353,8.411 11.883,7.606"/>
        <polygon points="2.625,3.297 1.892,4.758 2.774,4.831 2.625,3.297"/>
        <polygon points="16.807,0.373 16.733,2.347 18.715,1.251 16.807,0.373"/>
        <line y2="5.232" x2="10.356" y1="5.493" x1="10.053"/><line  y2="5.606" x2="17.570" y1="5.946" x1="17.305"/>
        <path d="m6.06,8.91522l-0.05,0a0.09,0.09 0 0 0 -0.05,0.01a0.10,0.10 0 0 0 -0.04,0.02a0.09,0.09 0 0 0 -0.02,0.04a0.11,0.11 0 0 0 -0.01,0.05l0,0.03a0.19,0.19 0 0 0 0.03,0.05l0.02,0.01a0.12,0.12 0 0 0 0.06,0.01884l0.05143,0a0.11098,0.11037 0 0 0 0.05143,0a0.1191,0.11844 0 0 0 0.04331,-0.02692a0.10557,0.10498 0 0 0 0.02978,-0.04576a0.10286,0.10229 0 0 0 0,-0.05115l0,-0.03499a0.10286,0.10229 0 0 0 -0.03519,-0.05922l-0.02707,-0.02153a0.14888,0.14805 0 0 0 -0.06767,-0.01884l0.01083,-0.01077z"/>
        <path d="m14.02,4.85l-0.05,0a0.08,0.08 0 0 0 -0.05,0.01a0.0785,0.07806 0 0 0 -0.04331,0.02692a0.09745,0.09 0 0 0 -0.02978,0.04307a0.11098,0.11037 0 0 0 0,0.05115l0,0.03769a0.12452,0.12383 0 0 0 0.03519,0.05922l0.02707,0.01884a0.1164,0.11575 0 0 0 0.06767,0.01884l0.05143,0a0.08933,0.08883 0 0 0 0.05143,0a0.14617,0.14536 0 0 0 0.04331,-0.02692a0.10557,0.10498 0 0 0 0.02707,-0.04307a0.12452,0.12383 0 0 0 0,-0.05384l0,-0.03499a0.14617,0.14536 0 0 0 -0.02978,-0.0646l-0.02707,-0.02153a0.14888,0.14805 0 0 0 -0.06767,-0.01884l-0.00271,-0.00538z"/>
        <path d="m2.18,8.80l-0.05,-0.05115a0.14617,0.14536 0 0 0 -0.04,-0.02a0.11,0.11 0 0 0 -0.05,0a0.12,0.12 0 0 0 -0.05,0a0.14,0.14 0 0 0 -0.04,0.02l-0.02,0.02a0.13,0.13 0 0 0 -0.01,0.0673l0,0.03499a0.14617,0.14536 0 0 0 0.0379,0.05653l0.05143,0.05115a0.09203,0.09152 0 0 0 0.04331,0.02692a0.08391,0.08345 0 0 0 0.05143,0a0.09203,0.09152 0 0 0 0.05414,0a0.10557,0.10498 0 0 0 0.04331,-0.02692l0.01895,-0.02692a0.12993,0.12921 0 0 0 0.01895,-0.06999l0,-0.03499a0.12993,0.12921 0 0 0 -0.03248,-0.05922l-0.00541,0.00269z"/>
        <path d="m0.74,5.42l-0.05,-0.0996a0.0785,0.07806 0 0 0 -0.03,-0.03a0.07,0.06 0 0 0 -0.04602,-0.02423a0.09,0.09152 0 0 0 -0.05414,0a0.08662,0.08614 0 0 0 -0.04872,0.01615l-0.02707,0.02153a0.12181,0.12113 0 0 0 -0.03519,0.05922l0,0.03499a0.1164,0.11575 0 0 0 0.01895,0.0673l0.05143,0.10229a0.14347,0.14267 0 0 0 0.03248,0.03769a0.15159,0.15074 0 0 0 0.04602,0.02423a0.09203,0.09152 0 0 0 0.05414,0a0.08933,0.08883 0 0 0 0.05143,-0.01615l0.02707,-0.01884a0.15159,0.15074 0 0 0 0.03519,-0.05922l0,-0.03769a0.14888,0.14805 0 0 0 -0.01895,-0.0673l0,-0.00269z"/>
        <path d="m10.44,0.15l-0.10,0a0.12181,0.12113 0 0 0 -0.05143,0.01346a0.11,0.11 0 0 0 -0.07,0.06a0.12,0.12 0 0 0 -0.01353,0.05115l0,0.03769a0.16512,0.1642 0 0 0 0.03519,0.05922l0.02707,0.02153a0.14617,0.14536 0 0 0 0.06767,0.01615l0.10286,0a0.08933,0.08883 0 0 0 0.05143,0a0.11369,0.11306 0 0 0 0.07579,-0.09152a0.12452,0.12383 0 0 0 0,-0.05384l0,-0.03499a0.16512,0.1642 0 0 0 -0.03519,-0.05922l-0.02707,-0.02153a0.14888,0.14805 0 0 0 -0.06767,-0.01884l0.00812,0.01077z"/>
        <path d="m8.57,3.28l-0.04872,-0.05115a0.10557,0.10498 0 0 0 -0.04331,-0.02a0.09474,0.09422 0 0 0 -0.05414,0a0.09203,0.09 0 0 0 -0.05143,0a0.10,0.10 0 0 0 -0.04,0.02l-0.02,0.02a0.14,0.14 0 0 0 -0.01,0.0673l0,0.03769a0.19219,0.19112 0 0 0 0.03519,0.05922l0.05143,0.04845a0.09745,0.09691 0 0 0 0.04331,0.02961a0.12722,0.12652 0 0 0 0.10286,0a0.09745,0.09691 0 0 0 0.04331,-0.02961l0.02166,-0.02692a0.12181,0.12113 0 0 0 0.01895,-0.0673l0,-0.03499a0.10286,0.10229 0 0 0 -0.03519,-0.05922z"/>
        <path d="m9.10,9.27l0.05,-0.09a0.16,0.16 0 0 0 0.01,-0.05a0.12,0.12 0 0 0 0,-0.05a0.15,0.15074 0 0 0 -0.02436,-0.04576a0.11,0.11037 0 0 0 -0.03,-0.03l-0.03248,-0.01346a0.11369,0.11306 0 0 0 -0.07309,0l-0.03248,0.01346a0.14076,0.13998 0 0 0 -0.04872,0.04845l-0.04872,0.0996a0.08121,0.08076 0 0 0 -0.01624,0.04845a0.09203,0.09152 0 0 0 0,0.05384a0.07579,0.07537 0 0 0 0.02436,0.04576a0.0785,0.07806 0 0 0 0.0379,0.03499l0.03248,0.01346a0.10557,0.10498 0 0 0 0.07038,0l0.03248,-0.01346a0.10557,0.10498 0 0 0 0.04872,-0.04845z"/>
        <path d="m14.37,2.37127l-0.05143,0a0.19219,0.19112 0 0 0 -0.10286,0.02a0.21,0.20 0 0 0 -0.08,0.05a0.22,0.22 0 0 0 -0.05,0.08a0.23,0.23 0 0 0 -0.02,0.10l0,0.06a0.27,0.26 0 0 0 0.06,0.12l0.05,0.04038a0.27069,0.26919 0 0 0 0.13534,0.03769l0.05143,0a0.22196,0.22073 0 0 0 0.10286,-0.02423a0.20572,0.20458 0 0 0 0.08662,-0.05384a0.21114,0.20997 0 0 0 0.05684,-0.08883a0.22196,0.22073 0 0 0 0.02436,-0.10229l0,-0.07268a0.27069,0.26919 0 0 0 -0.07038,-0.11844l-0.05414,-0.04307a0.27069,0.26919 0 0 0 -0.13534,-0.03499z"/>
        <path d="m0.31,0.21777l-0.04331,0a0.1976,0.19651 0 0 0 -0.10286,0.02153a0.25445,0.25304 0 0 0 -0.14347,0.14267a0.23279,0.23 0 0 0 -0.02,0.10l0,0.06a0.27,0.26 0 0 0 0.07,0.12l0.05,0.04a0.27,0.26 0 0 0 0.13,0.03769l0.05414,0a0.23279,0.2315 0 0 0 0.10557,-0.02423a0.22467,0.22343 0 0 0 0.08662,-0.05384a0.20302,0.20189 0 0 0 0.05414,-0.08883a0.17053,0.16959 0 0 0 0.02436,-0.10229l0,-0.07268a0.29776,0.29611 0 0 0 -0.07038,-0.11844l-0.05414,-0.04307a0.27069,0.26919 0 0 0 -0.14617,-0.03499z"/>
        <path d="m6.87,1.74a0.40,0.40 0 0 0 0,-0.80a0.40,0.40 0 0 0 0,0.80z"/>
        <path d="m6.46,5.41a0.27,0.26 0 0 0 0,-0.53a0.27,0.26 0 0 0 0,0.53z"/>
        <path d="m17.34,9.53a0.27,0.26 0 0 0 0,-0.53a0.27,0.26 0 0 0 0,0.53z"/>
    </pattern>

    <pattern id="pattern-silica" x="0" y="0" width="10" height="10" stroke-width="0.2" stroke="#000" patternUnits="userSpaceOnUse">
        <path d="m1.23754,6.77999c-0.1,0 -0.2,-0.04 -0.3,-0.12c-0.06,-0.05 -0.1,-0.16 -0.1,-0.27c0,-0.1 0.04,-0.2 0.12,-0.28c0.14,-0.14 0.4,-0.15 0.56,0c0.07,0.07 0.12,0.17 0.12,0.28c0,0.1 -0.05,0.22 -0.13,0.3c-0.06,0.06 -0.16,0.1 -0.27,0.1l0,-0.01z"/>
        <path d="m2.16999,4.01749c-0.1,0 -0.2,-0.05 -0.28,-0.12c-0.07,-0.08 -0.12,-0.18 -0.12,-0.28c0,-0.1 0.05,-0.22 0.12,-0.3c0.15,-0.13 0.42,-0.14 0.57,0c0.08,0.08 0.12,0.2 0.12,0.3c0,0.1 -0.04,0.2 -0.1,0.28c-0.1,0.07 -0.2,0.12 -0.3,0.12l-0.01,0z"/>
        <path d="m5.42498,4.15499c-0.1,0 -0.2,-0.04 -0.3,-0.1c-0.06,-0.08 -0.1,-0.2 -0.1,-0.3c0,-0.1 0.04,-0.2 0.12,-0.28c0.14,-0.14 0.4,-0.15 0.56,0c0.07,0.07 0.12,0.18 0.12,0.28c0,0.1 -0.04,0.2 -0.12,0.3c-0.08,0.06 -0.18,0.1 -0.28,0.1z"/>
        <path d="m4.15,1.99999c-0.12,0 -0.22,-0.04 -0.3,-0.1c-0.07,-0.08 -0.1,-0.18 -0.1,-0.3c0,-0.1 0.03,-0.2 0.1,-0.28c0.15,-0.14 0.43,-0.14 0.57,0c0.08,0.08 0.12,0.18 0.12,0.3c0,0.1 -0.05,0.2 -0.13,0.27c-0.07,0.07 -0.17,0.1 -0.28,0.1l0.02,0.01z"/>
        <path d="m7.48749,7.26746c-0.1,0 -0.2,-0.04 -0.3,-0.1c-0.06,-0.1 -0.1,-0.2 -0.1,-0.3c0,-0.1 0.04,-0.2 0.12,-0.28c0.14,-0.14 0.4,-0.15 0.56,0c0.07,0.07 0.12,0.18 0.12,0.28c0,0.1 -0.04,0.2 -0.12,0.3c-0.07,0.06 -0.18,0.1 -0.28,0.1z"/>
        <path d="m7.16251,1.42501c-0.1,0 -0.2,-0.04 -0.27,-0.1c-0.08,-0.1 -0.12,-0.2 -0.12,-0.3c0,-0.1 0.05,-0.2 0.12,-0.28c0.15,-0.15 0.42,-0.15 0.57,0c0.06,0.07 0.1,0.18 0.1,0.28c0,0.1 -0.04,0.2 -0.1,0.28c-0.1,0.08 -0.2,0.12 -0.3,0.12z"/>
        <path d="m8.50751,4.78748c-0.1,0 -0.2,-0.05 -0.28,-0.12c-0.1,-0.08 -0.13,-0.18 -0.13,-0.28c0,-0.1 0.04,-0.2 0.1,-0.3c0.16,-0.14 0.43,-0.14 0.58,0c0.07,0.1 0.12,0.2 0.12,0.3c0,0.1 -0.04,0.2 -0.12,0.28c-0.08,0.07 -0.18,0.1 -0.28,0.1l0.01,0.02z"/>
        <path d="m1.04999,1.76249c-0.1,0 -0.2,-0.05 -0.28,-0.12c-0.07,-0.07 -0.12,-0.17 -0.12,-0.28c0,-0.1 0.04,-0.2 0.1,-0.28c0.18,-0.15 0.45,-0.15 0.59,0c0.06,0.07 0.11,0.17 0.11,0.27c0,0.1 -0.04,0.2 -0.12,0.28s-0.18,0.13 -0.28,0.13z"/>
        <path d="m1.62,9.08748c-0.1,0 -0.2,-0.04 -0.28,-0.1c-0.1,-0.1 -0.13,-0.2 -0.13,-0.3c0,-0.1 0.05,-0.2 0.12,-0.28c0.16,-0.16 0.4,-0.15 0.56,0c0.07,0.07 0.1,0.17 0.1,0.28c0,0.1 -0.03,0.2 -0.1,0.28c-0.08,0.08 -0.18,0.12 -0.3,0.12l0.03,0z"/>
        <path d="m5.50753,9.59497c-0.1,0 -0.2,-0.04 -0.3,-0.12c-0.06,-0.07 -0.1,-0.17 -0.1,-0.28c0,-0.1 0.04,-0.2 0.1,-0.28c0.16,-0.16 0.43,-0.16 0.58,0c0.07,0.06 0.12,0.17 0.12,0.27s-0.04,0.2 -0.12,0.28c-0.08,0.08 -0.18,0.12 -0.28,0.12l0,0.01z"/>
        <path d="m4.28751,7.06252c-0.1,0 -0.2,-0.04 -0.28,-0.1c-0.07,-0.08 -0.12,-0.2 -0.12,-0.3c0,-0.1 0.05,-0.2 0.12,-0.28c0.15,-0.14 0.42,-0.14 0.57,0c0.06,0.08 0.1,0.18 0.1,0.3c0,0.1 -0.04,0.2 -0.1,0.27c-0.1,0.07 -0.2,0.1 -0.3,0.1l0.01,0.01z"/>
        <path d="m8.88249,9.46997c-0.1,0 -0.2,-0.04 -0.3,-0.12c-0.06,-0.07 -0.1,-0.17 -0.1,-0.28c0,-0.1 0.04,-0.2 0.1,-0.28c0.16,-0.16 0.43,-0.16 0.58,0c0.07,0.06 0.12,0.17 0.12,0.27s-0.04,0.2 -0.12,0.28c-0.08,0.08 -0.18,0.12 -0.28,0.12l0,0.01z"/>    
    </pattern>
    </defs>
    `

    let xZero = (GL.x7+GL.x8)/2;
    let yZero = convertMbgsToPxy(1,0);
    let unitL = (GL.x8-GL.x7) /9 / 2; //1/9 col width->casing size, 1/2 casing size ->unit lenth
    let yBentonite = convertMbgsToPxy(log.maxTrickDepth, log.bentoniteSealingDepth);
    let yWellDepth = convertMbgsToPxy(log.maxTrickDepth, log.totalWellDepth);
    let yScreenFrom = convertMbgsToPxy(log.maxTrickDepth, log.screenIntervalFrom);
    let yScreenTo = convertMbgsToPxy(log.maxTrickDepth, log.screenIntervalTo);

    let g_backfill = document.createElementNS(svgNS, 'g');
    g_wellDetail.appendChild(g_backfill);
    g_backfill.setAttribute('class','backfill');
    g_backfill.setAttribute('stroke-width', 0.5);
    g_backfill.innerHTML = `
        <path class="bentoniteSealing" stroke="black" fill="url(#pattern-ben)" d=
        "M${xZero-3*unitL},${yZero} L${xZero-3*unitL},${yBentonite}
        L${xZero+3*unitL},${yBentonite} ${xZero+3*unitL},${yZero}">
        </path>
        <path class="silicaSand" stroke="black" fill="url(#pattern-silica)" d=
        "M${xZero-3*unitL},${yBentonite} L${xZero-3*unitL},${yWellDepth+unitL}
        L${xZero+3*unitL},${yWellDepth+unitL} L${xZero+3*unitL},${yBentonite}">
        </path>
        `

    let g_casing = document.createElementNS(svgNS, 'g');
    g_wellDetail.appendChild(g_casing);
    g_casing.setAttribute('class','casing');
    g_casing.setAttribute('stroke-width', 0.5);
    g_casing.setAttribute('stroke', "#000");//'rgb(132,60,12)'
    g_casing.innerHTML = `
        <path class="casingUncapped" fill="white" d=
        "M${xZero-unitL},${yZero} L${xZero-unitL},${yWellDepth}
        L${xZero+unitL},${yWellDepth} L${xZero+unitL},${yZero}">
        </path>
        <path class="screen" fill="url(#pattern-screen)" stroke="white" d=
        "M${xZero-unitL+1.5},${yScreenFrom} L${xZero-unitL+1.5},${yScreenTo}
        L${xZero+unitL-1.5},${yScreenTo} L${xZero+unitL-1.5},${yScreenFrom}Z">
        </path>
        `

    let g_wellHead = document.createElementNS(svgNS, 'g');
    g_wellDetail.appendChild(g_wellHead);
    g_wellHead.setAttribute('class','wellHead');
    g_wellHead.setAttribute('stroke-width', 0.5);
    switch(log.wellHead){
        case 'protectiveStandpipe': 
            g_wellHead.innerHTML = `
            <path class="concrete" stroke="black" fill="url(#pattern-concrete)" d=
            "M${xZero-5*unitL},${yZero-1*unitL} L${xZero-5*unitL},${yZero+0*unitL} L${xZero-1*unitL},${yZero+0.5*unitL}
            L${xZero+1*unitL},${yZero+0.5*unitL} L${xZero+5*unitL},${yZero+0*unitL} L${xZero+5*unitL},${yZero-1*unitL}Z">
            </path>
            <path class="groundsurface" stroke="black" d=
            "M${xZero-9*unitL},${yZero} L${xZero-5*unitL},${yZero-0*unitL} M${xZero+9*unitL},${yZero} L${xZero+5*unitL},${yZero-0*unitL}">
            </path>
            <path class="manHoleSteel" stroke="black" fill="url(#pattern-steel)"  d=
            "M${xZero-2.*unitL},${yZero} L${xZero-2.*unitL},${yZero-5.*unitL} L${xZero+2.*unitL},${yZero-5.*unitL} L${xZero+2.*unitL},${yZero} 
            L${xZero+1.8*unitL},${yZero} L${xZero+1.8*unitL},${yZero-5*unitL} L${xZero-1.8*unitL},${yZero-5*unitL} L${xZero-1.8*unitL},${yZero}Z">
            </path>
            <path class="manHoleCover" stroke="black" fill="url(#pattern-steel)" d=
            "M${xZero-1.9*unitL},${yZero-4.8*unitL} L${xZero-2.1*unitL},${yZero-5*unitL} L${xZero-2.1*unitL},${yZero-5.2*unitL}
            L${xZero+2.1*unitL},${yZero-5.2*unitL} L${xZero+2.1*unitL},${yZero-5*unitL} L${xZero+1.9*unitL},${yZero-4.8*unitL}Z">
            </path>
            <path class="casing" fill="white" stroke="#000" d=
            "M${xZero-unitL},${yZero+unitL} L${xZero-unitL},${yZero-3*unitL} L${xZero+unitL},${yZero-3*unitL} L${xZero+unitL},${yZero+unitL}">
            </path>
            <path class="casingPvcCap" fill="white" stroke="#000" d=
            "M${xZero-unitL-1.5},${yZero-3*unitL} L${xZero-unitL-1.5},${yZero+3-4*unitL} Q${xZero-unitL-1.5},${yZero-4*unitL} ${xZero-3},${yZero-4*unitL} 
            L${xZero+3},${yZero-4*unitL} Q${xZero+unitL+1.5},${yZero-4*unitL} ${xZero+unitL+1.5},${yZero+3-4*unitL} L${xZero+unitL+1.5},${yZero-3*unitL}Z">
            </path>
            <path stroke="#000" fill="none" d=
            "M${xZero-6.5*unitL},${yZero-2*unitL} h${+4*unitL}" marker-end="url(#marker-arrow)">
            </path>
            <text x=${xZero-6.5*unitL} y=${yZero-4*unitL} transform="rotate(-90 ${xZero-6.5*unitL} ${yZero-4*unitL})" text-anchor='end' font-size=${PS.fontSize*0.7} paint-order="stroke" stroke="#FFF" stroke-width="3">
            Protective Standpipe
            </text>
            `
            break;
        case 'flushMountedManhole': 
            g_wellHead.innerHTML = `
            <path class="whiteBackg" stroke="white" fill="white" d=
            "M${xZero-3*unitL-1},${yZero+2.5*unitL} L${xZero-3*unitL-1},${yZero-0.25*unitL} L${xZero+3*unitL+1},${yZero-0.25*unitL} L${xZero+3*unitL+1},${yZero+2.5*unitL}">
            </path>
            <path class="concrete" stroke="black" fill="url(#pattern-concrete)" d=
            "M${xZero-3*unitL},${yZero+1.5*unitL} L${xZero-3*unitL},${yZero-0.5*unitL} L${xZero-5*unitL},${yZero-0.25*unitL} L${xZero-5*unitL},${yZero+0.25*unitL} L${xZero-4*unitL},${yZero+0.5*unitL} L${xZero-3.5*unitL},${yZero+2.5*unitL}
            L${xZero+3.5*unitL},${yZero+2.5*unitL} L${xZero+4*unitL},${yZero+0.5*unitL} L${xZero+5*unitL},${yZero+0.25*unitL} L${xZero+5*unitL},${yZero-0.25*unitL} L${xZero+3*unitL},${yZero-0.5*unitL} L${xZero+3*unitL},${yZero+1.5*unitL}Z">
            </path>
            <path class="groundsurface" stroke="black" d=
            "M${xZero-9*unitL},${yZero} L${xZero-5*unitL},${yZero-0*unitL} M${xZero+9*unitL},${yZero} L${xZero+5*unitL},${yZero-0*unitL}">
            </path>
            <path class="manHoleSteel" stroke="black" fill="url(#pattern-steel)"  d=
            "M${xZero-4*unitL},${yZero-0.5*unitL} L${xZero-4*unitL},${yZero} L${xZero-3.5*unitL},${yZero} L${xZero-3.25*unitL},${yZero+2*unitL} L${xZero-3*unitL},${yZero+2*unitL} L${xZero-3*unitL},${yZero-0.5*unitL}
            L${xZero+3*unitL},${yZero-0.5*unitL} L${xZero+3*unitL},${yZero+2*unitL} L${xZero+3.25*unitL},${yZero+2*unitL} L${xZero+3.5*unitL},${yZero} L${xZero+4*unitL},${yZero} L${xZero+4*unitL},${yZero-0.5*unitL}Z">
            </path>
            <path class="manHoleCover" stroke="black" fill="url(#pattern-steel)" d=
            "M${xZero-3.25*unitL},${yZero-0.6*unitL} L${xZero-3.25*unitL},${yZero-0.25*unitL} L${xZero+3.25*unitL},${yZero-0.25*unitL} L${xZero+3.25*unitL},${yZero-0.6*unitL}Z">
            </path>
            <path class="casing" fill="white" stroke="#000" d=
            "M${xZero-unitL},${yZero+2.5*unitL+1} L${xZero-unitL},${yZero+1*unitL} L${xZero+unitL},${yZero+1*unitL} L${xZero+unitL},${yZero+2.5*unitL+1}">
            </path>
            <path class="casingPvcCap" fill="white" stroke="#000" d=
            "M${xZero-unitL-1.5},${yZero+1*unitL} L${xZero-unitL-1.5},${yZero+3} Q${xZero-unitL-1.5},${yZero} ${xZero-3},${yZero} 
            L${xZero+3},${yZero} Q${xZero+unitL+1.5},${yZero} ${xZero+unitL+1.5},${yZero+3} L${xZero+unitL+1.5},${yZero+1*unitL}Z">
            </path>
            <path stroke="#000" fill="none" d=
            "M${xZero-6.5*unitL},${yZero-2*unitL} h${+5*unitL} L${xZero} ${yZero-0.8*unitL}" marker-end="url(#marker-arrow)">
            </path>
            <text x=${xZero-6.5*unitL} y=${yZero-4*unitL} transform="rotate(-90 ${xZero-6.5*unitL} ${yZero-4*unitL})" text-anchor='end' font-size=${PS.fontSize*0.7} paint-order="stroke" stroke="#FFF" stroke-width="3">
            Flush-mounted Manhole
            </text>
            `
            break;
        default:
            g_wellHead.innerHTML = `
            <path class="groundsurface" stroke="black" d=
            "M${xZero-9*unitL},${yZero} L${xZero-3.5*unitL},${yZero} M${xZero+9*unitL},${yZero} L${xZero+3.5*unitL},${yZero}">
            </path>
            <path class="bentoniteSealing" stroke="black" fill="url(#pattern-ben)"  d=
            "M${xZero-3*unitL},${yZero+1*unitL} 
            Q${xZero-3*unitL},${yZero+0.25*unitL} ${xZero-3.5*unitL},${yZero-0*unitL} 
            L${xZero-3.5*unitL},${yZero-0*unitL} 
            Q${xZero-4*unitL},${yZero-0.0*unitL} ${xZero-4*unitL},${yZero-0.25*unitL} 
            L${xZero-4*unitL},${yZero-0.25*unitL} 
            Q${xZero-4*unitL},${yZero-1*unitL} ${xZero-unitL},${yZero-1.5*unitL}
            L${xZero+unitL},${yZero-1.5*unitL}
            Q${xZero+4*unitL},${yZero-1*unitL} ${xZero+4*unitL},${yZero-0.25*unitL}
            L${xZero+4*unitL},${yZero-0.25*unitL} 
            Q${xZero+4*unitL},${yZero-0*unitL} ${xZero+3.5*unitL},${yZero-0*unitL}  
            L${xZero+3.5*unitL},${yZero-0*unitL} 
            Q${xZero+3*unitL},${yZero-0*unitL} ${xZero+3*unitL},${yZero+1*unitL}  
            ">
            </path>
            <path class="casing" fill="white" stroke="#000" d=
            "M${xZero-unitL},${yZero+unitL} L${xZero-unitL},${yZero-3*unitL} L${xZero+unitL},${yZero-3*unitL} L${xZero+unitL},${yZero+unitL}">
            </path>
            <path class="casingPvcCap" fill="white" stroke="#000" d=
            "M${xZero-unitL-1.5},${yZero-3*unitL} L${xZero-unitL-1.5},${yZero+3-4*unitL} Q${xZero-unitL-1.5},${yZero-4*unitL} ${xZero-3},${yZero-4*unitL} 
            L${xZero+3},${yZero-4*unitL} Q${xZero+unitL+1.5},${yZero-4*unitL} ${xZero+unitL+1.5},${yZero+3-4*unitL} L${xZero+unitL+1.5},${yZero-3*unitL}Z">
            </path>
            `
    }
      
    let g_remark = document.createElementNS(svgNS, 'g');
    g_wellDetail.appendChild(g_remark);

        let g_arrow = document.createElementNS(svgNS, 'g');
        g_remark.appendChild(g_arrow);
        g_arrow.setAttribute('class','arrow');

        let g_lable = document.createElementNS(svgNS, 'g');
        g_remark.appendChild(g_lable);
        g_lable.setAttribute('class','lable');
        g_lable.setAttribute('text-anchor', 'middle');
        g_lable.setAttribute('font-size', `${PS.fontSize*0.7}`);
        g_lable.setAttribute('paint-order', `stroke`);
        g_lable.setAttribute('stroke', `#FFF`);
        g_lable.setAttribute('stroke-width', `3`);

        //well detail captions, [lable, anchorX, anchorY, arrowlength]
        let caption = [
            ['Bentonite Sealing', xZero+6*unitL,0.75*yBentonite+0.25*yZero,  -3*unitL],
            ['Silica Sand Pack',  xZero+6*unitL,0.5*(yBentonite+yWellDepth), -3*unitL],
            ['Casing',            xZero-5*unitL,0.5*(yBentonite+yScreenFrom), 4*unitL],
            ['Screen Section',    xZero-5*unitL,0.5*(yScreenTo+yScreenFrom),  4*unitL],
            ['Sediment Sump',     xZero-5*unitL,0.5*(yScreenTo+yWellDepth),   4*unitL]
        ]
        caption.forEach((element) => {
            g_arrow.innerHTML += `
            <path stroke-width="2.0" stroke="#FFF" d="M${element[1]},${element[2]} h${element[3]}" stroke-linecap="round"></path>
            <path stroke-width="0.5" stroke="#000" d="M${element[1]},${element[2]} h${element[3]}" marker-end="url(#marker-arrow)"></path>
            `
            g_lable.innerHTML +=`
            <text  x=${element[1]} y=${element[2]} transform="rotate(-90 ${element[1]} ${element[2]})" dominant-baseline="hanging">
            ${element[0]}
            </text>
            `
        })
}
function updateWaterLevel (logId) {
    let log = LogCollection[logId];
    if (log.subsurfaceProfile.length == 0) {return 0} 

    let svg_log = document.querySelector(`svg#${logId}`);
    if(svg_log.querySelector('g.waterLevel')){svg_log.querySelector('g.waterLevel').remove()};
    
    let g_waterLevel = document.createElementNS(svgNS, 'g');
    svg_log.appendChild(g_waterLevel);
    g_waterLevel.setAttribute('class','waterLevel');

    let xZero = (GL.x7+GL.x8)/2; //central line
    let unitL = (GL.x8-GL.x7) /9 / 2; //1/9 col width->casing size, 1/2 casing size ->unit lenth

    let inital = convertMbgsToPxy(log.maxTrickDepth, log.initialWaterLevel);
    if(inital){
        let g_inital = document.createElementNS(svgNS, 'g');
        g_waterLevel.appendChild(g_inital);
        g_inital.setAttribute('class','initialWaterLevel');
        g_inital.setAttribute('stroke-width', 0.5);
        g_inital.innerHTML = `
        <path class="initialWaterLevel-bg" stroke="#FFF" fill="#FFF" stroke-width="2.0" stroke-linecap="round" stroke-linejoin="round"d=
        "M${xZero},${inital} L${xZero-unitL+1},${inital-0.75*unitL} L${xZero+unitL-1},${inital-0.75*unitL}Z
        M${xZero-unitL+1},${inital} L${xZero+unitL-1},${inital}
        M${xZero-0.6*unitL},${inital+0.3*unitL} L${xZero+0.6*unitL},${inital+0.3*unitL}
        M${xZero-0.3*unitL},${inital+0.6*unitL} L${xZero+0.3*unitL},${inital+0.6*unitL}
        "></path>
        <path class="initialWaterLevel-fg" stroke="#2F5597" fill="#FFF" d=
        "M${xZero},${inital} L${xZero-unitL+1.5},${inital-0.75*unitL} L${xZero+unitL-1.5},${inital-0.75*unitL}Z
        M${xZero-unitL+1},${inital} L${xZero+unitL-1},${inital}
        M${xZero-0.6*unitL},${inital+0.3*unitL} L${xZero+0.6*unitL},${inital+0.3*unitL}
        M${xZero-0.3*unitL},${inital+0.6*unitL} L${xZero+0.3*unitL},${inital+0.6*unitL}
        "></path>
        `
    }

    let static = convertMbgsToPxy(log.maxTrickDepth, log.staticWaterLevel-(log.topOfCasingElevation-log.groundElevation));
    if(static){
        let g_static = document.createElementNS(svgNS, 'g');
        g_waterLevel.appendChild(g_static);
        g_static.setAttribute('class','staticlWaterLevel');
        // g_static.setAttribute('stroke-width', 0.5);
        g_static.innerHTML = `
        <path class="staticlWaterLevel-bg" stroke="#FFF" fill="#FFF" stroke-width="2.0" stroke-linecap="round" stroke-linejoin="round"d=
        "M${xZero},${static} L${xZero-unitL+1},${static-0.75*unitL} L${xZero+unitL-1},${static-0.75*unitL}Z
        M${xZero-unitL+1},${static} L${xZero+unitL-1},${static}
        M${xZero-0.6*unitL},${static+0.3*unitL} L${xZero+0.6*unitL},${static+0.3*unitL}
        M${xZero-0.3*unitL},${static+0.6*unitL} L${xZero+0.3*unitL},${static+0.6*unitL}
        "></path>
        <path class="staticlWaterLevel-fg" stroke="#2F5597" fill="#2F5597" stroke-width="0.5" d=
        "M${xZero},${static} L${xZero-unitL+1.5},${static-0.75*unitL} L${xZero+unitL-1.5},${static-0.75*unitL}Z
        M${xZero-unitL+1},${static} L${xZero+unitL-1},${static}
        M${xZero-0.6*unitL},${static+0.3*unitL} L${xZero+0.6*unitL},${static+0.3*unitL}
        M${xZero-0.3*unitL},${static+0.6*unitL} L${xZero+0.3*unitL},${static+0.6*unitL}
        "></path>
        `
    }
}
function updateDrillingPeriod(logId){
    let log = LogCollection[logId];
    let drillDateFrom = log.drillDateFrom;
    let drillDateTo = log.drillDateTo;
    const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    if (drillDateFrom != 'NULL' && drillDateTo != 'NULL' && (drillDateFrom <= drillDateTo)){
        let dateFrom = new Date(drillDateFrom);
        let dateTo = new Date(drillDateTo);   
        if (drillDateFrom==drillDateTo){
            date = `${months[dateFrom.getMonth()]} ${dateFrom.getDate()}, ${dateFrom.getFullYear()}`;   
        } else if (dateFrom.getMonth()==dateTo.getMonth()) {
            date = `${months[dateFrom.getMonth()]} ${dateFrom.getDate()} ~ ${dateTo.getDate()}, ${dateFrom.getFullYear()}`;  
        } else if (dateFrom.getFullYear()==dateTo.getFullYear()) {
            date = `${months[dateFrom.getMonth()]} ${dateFrom.getDate()} ~ ${months[dateTo.getMonth()]} ${dateTo.getDate()}, ${dateFrom.getFullYear()}`;  
        } else {
            date = `${months[dateFrom.getMonth()]} ${dateFrom.getDate()}, ${dateFrom.getFullYear()} ~ ${months[dateTo.getMonth()]} ${dateTo.getDate()}, ${dateTo.getFullYear()}`;  
        }
    } else if (drillDateFrom =="NULL" || drillDateTo =="NULL" ) {
        let validDate = new Date((drillDateFrom+drillDateTo).replace('NULL',""));
        console.log((drillDateFrom+drillDateTo).replace('NULL',""))
        date = `${months[validDate.getMonth()]} ${validDate.getDate()}, ${validDate.getFullYear()}`; 
    } else {
        date = 'NULL'
    }
    console.log(date)
    document.querySelector(`svg#${logId} .dataValue .drillDate`).innerHTML = date;
}

//func for common input Areas
function updateCommonFiled(inputField){
    let logId = document.querySelector("#currentLog").dataset.logId;
    let inputName = inputField.className
    document.querySelector(`svg#${logId} .dataValue .${inputName}`).innerHTML = inputField.value;
    LogCollection[logId][inputName] = inputField.value;
}

var projectNo               = document.querySelector('input.projectNo')
var projectTitle            = document.querySelector('input.projectTitle')
var client                  = document.querySelector('input.client')
var loggedBy                = document.querySelector('input.loggedBy')
var reviewedBy              = document.querySelector('input.reviewedBy')
var approvedBy              = document.querySelector('input.approvedBy')
var coordSys                = document.querySelector('input.coordSys')
var xCoord                  = document.querySelector('input.xCoord')
var yCoord                  = document.querySelector('input.yCoord')
var drillDateFrom           = document.querySelector('input.drillDateFrom')
var drillDateTo             = document.querySelector('input.drillDateTo')
var drilledBy               = document.querySelector('input.drilledBy')
var drillMethod             = document.querySelector('input.drillMethod')
var holeSize                = document.querySelector('input.holeSize')
var initialWaterLevel       = document.querySelector('input.initialWaterLevel')
var wellHead                = document.querySelector('input.wellHead')
var casingSize              = document.querySelector('input.casingSize')
var totalWellDepth          = document.querySelector('input.totalWellDepth')
var bentoniteSealingDepth   = document.querySelector('input.bentoniteSealingDepth')
var screenIntervalFrom      = document.querySelector('input.screenIntervalFrom')
var screenIntervalTo        = document.querySelector('input.screenIntervalTo')
var topOfCasingElevation    = document.querySelector('input.topOfCasingElevation')
var groundElevation         = document.querySelector('input.groundElevation')
var staticWaterLevel        = document.querySelector('input.staticWaterLevel')

projectNo.addEventListener('change', (e)=>{
    updateCommonFiled(e.target)
})             
projectTitle.addEventListener('change', (e)=>{
    updateCommonFiled(e.target)
})                       
client.addEventListener('change', (e)=>{
    updateCommonFiled(e.target)
})                            
loggedBy.addEventListener('change', (e)=>{
    updateCommonFiled(e.target)
})                           
reviewedBy.addEventListener('change', (e)=>{
    updateCommonFiled(e.target)
})                         
approvedBy.addEventListener('change', (e)=>{
    updateCommonFiled(e.target)
})                         
coordSys.addEventListener('change', (e)=>{
    updateCommonFiled(e.target)
})                           
xCoord.addEventListener('change', (e)=>{
    updateCommonFiled(e.target)
})                             
yCoord.addEventListener('change', (e)=>{
    updateCommonFiled(e.target)
})                             
drillDateFrom.addEventListener('change', (e)=>{
    let logId = document.querySelector("#currentLog").dataset.logId;
    LogCollection[logId].drillDateFrom = e.target.value;
    updateDrillingPeriod(logId)
})
drillDateTo.addEventListener('change', (e)=>{
    let logId = document.querySelector("#currentLog").dataset.logId;
    LogCollection[logId].drillDateTo = e.target.value;
    updateDrillingPeriod(logId)
})           
drilledBy.addEventListener('change', (e)=>{
    updateCommonFiled(e.target)
})                          
drillMethod.addEventListener('change', (e)=>{
    updateCommonFiled(e.target)
})                        
holeSize.addEventListener('change', (e)=>{
    updateCommonFiled(e.target)
})                           
initialWaterLevel.addEventListener('change', (e)=>{
    updateCommonFiled(e.target)
})                  
wellHead.addEventListener('change', (e)=>{
    updateCommonFiled(e.target)
})                           
casingSize.addEventListener('change', (e)=>{
    updateCommonFiled(e.target)
})                         
totalWellDepth.addEventListener('change', (e)=>{
    updateCommonFiled(e.target)
})                     
bentoniteSealingDepth.addEventListener('change', (e)=>{
    updateCommonFiled(e.target)
})              
screenIntervalFrom.addEventListener('change', (e)=>{
    updateCommonFiled(e.target)
})                 
screenIntervalTo.addEventListener('change', (e)=>{
    updateCommonFiled(e.target)
})                   
topOfCasingElevation.addEventListener('change', (e)=>{
    updateCommonFiled(e.target)
})               
groundElevation.addEventListener('change', (e)=>{
    updateCommonFiled(e.target)
})                    
staticWaterLevel.addEventListener('change', (e)=>{
    updateCommonFiled(e.target)
})                   
