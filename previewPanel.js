const svgNS = 'http://www.w3.org/2000/svg'
const ermLogo = `<path id="svg_1" stroke-miterlimit="1" stroke-width="0.325" stroke="#636466" fill="none" d="m1.52337,10.2533l47.9,0l0,37.3l-47.9,0l0,-37.3zm47.9,33.3l-47.9,0m47.9,-4.2l-47.9,0m47.9,-8.1l-47.9,0m47.9,-4.2l-47.9,0m47.9,-4.3l-47.9,0m47.9,-4.2l-47.9,0m47.9,-4.2l-47.9,0m44.1,33.2l0,-37.3m-4.1,37.3l0,-37.3m-7.9,37.3l0,-37.3m-4,37.3l0,-37.3m-4,37.3l0,-37.3m-4.1,37.3l0,-37.3m-4,37.3l0,-37.3m-4,37.3l0,-37.3m-3.9,37.3l0,-37.3m-4,37.3l0,-37.3m43.8,25l-47.9,0m36,12.3l0,-37.3"/><path id="svg_2" fill="#636466" d="m1.02337,69.3533l0,-0.6c0.5,-0.2 0.8,-0.4 1.1,-0.7c0,-0.3 0.1,-0.8 0.1,-1.5c0.1,-1.3 0.1,-2.2 0.1,-2.8l0,-7.3c0,-0.9 -0.1,-1.4 -0.2,-1.6c0,-0.1 -0.1,-0.1 -0.2,-0.2c-0.2,-0.1 -0.7,-0.2 -1.6,-0.2l0,-1l2.6,0.1l5,0l2.3,-0.1l1.7,0c0.1,0 0.2,0 0.4,0.1l0.1,0.1l-0.2,1.6c0,0.1 0,0.7 -0.1,1.6l-0.9,0c0,-0.9 0,-1.4 -0.1,-1.6c0,-0.1 -0.1,-0.2 -0.1,-0.2c-0.1,-0.1 -0.4,-0.1 -0.9,-0.2c-0.7,-0.1 -1.5,-0.1 -2.2,-0.1c-0.7,0 -1.4,0 -2.1,0.1c-0.1,0.9 -0.2,1.9 -0.2,3.3l0,2.3c0.5,0 1.1,0.1 1.6,0.1l1.9,0c0.4,0 0.6,0 0.7,-0.1c0.1,0 0.1,-0.1 0.2,-0.2c0.1,-0.3 0.1,-0.8 0.2,-1.4l0.9,0l0,5l-1,0c0,-0.9 0,-1.4 -0.2,-1.6c-0.1,-0.2 -0.3,-0.2 -0.5,-0.3c-0.5,-0.1 -1.2,-0.1 -2,-0.1c-0.7,0 -1.3,0 -1.8,0.1l0,6.2c0.6,0 1.3,0.1 2.2,0.1c0.8,0 1.6,0 2.3,-0.1c0.7,-0.1 1.1,-0.1 1.3,-0.2c0.1,0 0.1,-0.1 0.1,-0.2c0.1,-0.4 0.3,-1 0.4,-2.1l0.9,0c-0.2,1.5 -0.3,2.7 -0.3,3.7l-0.1,-0.1c-0.5,0.1 -1.2,0.1 -2.1,0.1l-5.5,0c-0.2,-0.1 -1.4,-0.1 -3.8,0zm12.6,-15l0,-0.9l6,0c0.9,0 1.7,-0.1 2.3,-0.1c1.2,0 2.1,0.1 2.7,0.3c0.6,0.2 1.1,0.5 1.5,1.1c0.4,0.5 0.6,1.2 0.6,2c0,0.9 -0.3,1.7 -0.9,2.5c-0.6,0.7 -1.4,1.3 -2.6,1.8c0.2,0.3 0.4,0.7 0.6,1c0.2,0.4 0.4,0.6 0.4,0.6c0,0.1 0.1,0.1 0.1,0.2l1.8,2.6c0.5,0.7 0.7,1.1 0.8,1.1c0.6,0.8 0.9,1.2 1,1.3c0.1,0.1 0.3,0.2 0.4,0.3c0.1,0.1 0.4,0.1 0.7,0.1l0,0.9l-4.3,0c0,-0.2 -0.1,-0.4 -0.3,-0.6l-2.4,-4c-0.7,-1.1 -1.3,-2.1 -1.8,-2.7c-0.2,-0.3 -0.5,-0.6 -0.7,-0.7l0.1,-0.4c0.9,0 1.6,-0.1 2.1,-0.3c0.5,-0.2 0.9,-0.6 1.2,-1.2c0.3,-0.6 0.5,-1.2 0.5,-1.9s-0.2,-1.3 -0.5,-1.7c-0.3,-0.5 -0.7,-0.8 -1.2,-1c-0.3,-0.1 -0.9,-0.2 -1.7,-0.2c-0.4,0 -0.7,0 -1.1,0.1c0,0.3 0,0.9 -0.1,1.8c0,2.1 -0.1,3.6 -0.1,4.3l0,3.6c0,1.6 0.1,2.4 0.1,2.7c0,0.4 0.1,0.7 0.1,0.8c0,0.1 0.1,0.1 0.1,0.2c0.1,0 0.2,0.1 0.3,0.1c0.2,0 0.6,0.1 1.3,0.1l0,1c-1.3,0 -2.6,-0.1 -3.9,-0.1c-1.2,0 -2.3,0 -3.3,0.1l0,-1c0.9,0 1.4,-0.1 1.5,-0.1c0.1,0 0.2,-0.1 0.2,-0.1c0,-0.1 0.1,-0.2 0.1,-0.3c0.1,-0.3 0.1,-0.7 0.1,-1.3l0.1,-3.3l0,-6.6c0,-0.9 -0.1,-1.5 -0.1,-1.7c0,-0.1 -0.1,-0.1 -0.2,-0.2c0,0 -0.5,-0.1 -1.5,-0.2zm16.3,15l0,-1c0.9,-0.1 1.4,-0.1 1.5,-0.2c0.1,0 0.2,-0.1 0.2,-0.2c0.1,-0.1 0.1,-0.2 0.1,-0.4c0.1,-0.4 0.1,-1.4 0.1,-2.8l0,-7.7c0,-1.2 -0.1,-1.9 -0.1,-2.1c0,-0.1 -0.1,-0.2 -0.1,-0.2c-0.1,-0.1 -0.2,-0.1 -0.4,-0.1c-0.5,-0.1 -1,-0.1 -1.4,-0.1l0,-1c1.6,0 2.6,0.1 3.2,0.1c0.8,0 1.6,0 2.3,-0.1l1,2.2l0.8,1.7l3.6,7.4c0.8,-1.5 1.3,-2.6 1.7,-3.5l1.5,-3.1c0.8,-1.8 1.3,-2.8 1.5,-3.2c0.2,-0.4 0.4,-0.9 0.6,-1.5c1,0.1 1.6,0.1 1.9,0.1l3.4,-0.1l0,1l-0.2,0c-0.8,0 -1.2,0.1 -1.5,0.3c-0.2,0.2 -0.3,0.5 -0.3,1.1l0,1.4l-0.1,3.2l0,5.7c0.1,1 0.1,1.5 0.2,1.8c0,0.1 0.1,0.2 0.1,0.3c0.1,0.1 0.1,0.1 0.3,0.1c0.1,0 0.6,0.1 1.4,0.1l0,1l-3.6,-0.1l-3.5,0.1l0,-1c0.9,0 1.5,-0.1 1.6,-0.2c0.1,-0.1 0.2,-0.3 0.3,-0.5c0.1,-0.3 0.1,-1.2 0.1,-2.8l0,-8.3l-2.6,5.3l-1.1,2.5c-0.3,0.7 -0.8,1.7 -1.4,3c-0.4,0.8 -0.7,1.4 -0.9,1.9l-0.7,0c-0.3,-0.6 -0.7,-1.5 -1.2,-2.6c-0.9,-1.9 -1.5,-3.3 -2,-4.2l-3,-6.1l0,8.9c0,1.3 0.1,2 0.1,2.2c0,0.2 0.1,0.3 0.1,0.4c0.1,0.1 0.2,0.1 0.3,0.2c0.2,0.1 0.6,0.1 1.4,0.1l0,1c-0.8,0 -1.7,-0.1 -2.6,-0.1c-1.1,0 -2,0 -2.6,0.1zm3.7,-22.5l15,-15.5l-7.2,-7.6l-3.3,3.7l-0.6,-0.4l3.8,-4.1l8.1,8.3l-15.8,16.3l-32.3,-33l0.4,-0.4l31.9,32.7z"/><path id="svg_3" fill="#008061" d="m9.22337,36.4533c0.1,-0.1 -0.1,-0.3 -0.4,-0.2c-0.1,-0.5 -0.4,-0.4 -0.4,-0.6c-0.2,-0.1 0.3,-0.5 0.4,-0.4l-0.2,-0.2l0,-0.2l-0.2,0l-0.4,-0.4c-0.3,-0.2 -0.4,-0.3 -0.2,-0.4c0.2,-0.2 -0.2,-0.5 -0.4,-0.4c0,0.1 -0.2,0 -0.2,-0.2l-0.1,-0.3c-0.2,0.1 -0.3,0 -0.2,-0.2c0.1,-0.2 0,-0.2 -0.2,-0.2c-0.4,0 -0.4,-0.2 -0.2,-0.4c0.3,0 0.2,-0.1 0,-0.2l-0.4,0l0,-0.2l0.2,-0.4l-0.2,-0.4c-0.3,0.5 -0.4,-0.2 -0.2,-0.4l-0.2,-0.2c-0.1,0 -0.3,-0.4 -0.4,-0.8c-0.3,0 -0.3,-0.4 0,-0.4l0.2,0c0.5,0.1 0.3,-0.3 -0.2,-0.4c-0.1,-0.1 -0.1,0 -0.2,0l-0.2,-0.2l0,-0.2l-0.2,-0.2l0.2,-0.2l0.2,-0.2l-0.2,-0.4l-0.2,0c-0.1,0 -0.1,-0.2 0,-0.4c-0.1,-0.1 -0.3,-0.2 -0.2,-0.2l0,-0.2l-0.4,-0.2l0,-0.6l-0.2,-0.2l0,-0.4l-0.2,-0.2c-0.4,0 -0.3,-0.1 0,-0.2c0,-0.1 -0.1,-0.2 -0.4,-0.2c-0.2,0 -0.3,-0.1 -0.4,-0.2c0.1,0 0.2,-0.1 0.2,-0.2c0.4,0 0.4,-0.2 0.2,-0.4l0,0.2c0.2,0 0.1,-0.2 0,-0.2l0,-0.2c-0.3,0.1 -0.3,-0.3 -0.2,-0.4c0.2,-0.2 0.2,-0.3 -0.2,-0.6l0,-0.4l-0.4,-0.2l0,-0.2l-0.2,-0.2l0.2,0c0.5,-0.1 0.2,-0.7 -0.2,-0.8l0.2,-0.2c0.3,0 0.3,-0.2 0.2,-0.4l0,-0.2l-0.2,-0.2c-0.2,0.1 -0.3,0 -0.2,-0.4c-0.1,0 -0.1,-0.1 0,-0.2c0.3,-0.3 0.2,-0.3 -0.2,-0.4c-0.5,0 -0.3,-0.4 0,-0.4c0.2,-0.1 0.3,-0.3 0,-0.4c-0.1,-0.1 -0.2,-0.3 -0.2,-0.4l-0.2,-0.2l0,-0.2l0.2,0c-0.1,-0.2 0,-0.4 0,-0.4c0.1,-0.3 0.1,-0.5 -0.2,-0.6l0,-0.2l0.2,0l-0.2,-0.2c-0.5,0.1 -0.4,-0.6 -0.4,-0.8c-0.1,-0.2 0,-0.4 0,-0.6l0,-2.1l-0.4,-0.2c0.1,-0.1 -0.1,-0.3 -0.2,-0.4l0,-0.2c0.2,-0.1 0.1,-0.5 0,-0.8l0.2,-0.4c0.4,0 0.1,-0.3 -0.2,-0.4l0,-0.2l0.2,-0.2c0.1,0 0.1,-0.1 0,-0.2l-0.2,-0.4l0,0.1c-0.2,-0.4 -0.1,-0.6 0,-0.8c0.1,0 0,-0.4 -0.2,-0.8l0,-0.2c-0.1,-0.2 -0.1,-0.3 0.2,-0.4c0.1,-0.1 0,-0.3 0,-0.6c-0.6,-0.4 -0.2,-0.4 0,-1l0,-0.6c-0.3,-0.3 -0.1,-0.6 0,-0.6l0.2,-0.2c-0.1,-0.1 -0.1,-0.2 0,-0.2l0,-0.4c-0.3,0.1 -0.2,-0.1 -0.2,-0.2c0.1,-0.2 0,-0.2 -0.2,-0.2l0,-0.2c0.1,0 0.2,-0.1 0.2,-0.2s0.1,-0.2 0.2,-0.2c-0.1,-0.1 -0.1,-0.3 0,-0.4l0,-0.4c-0.2,-0.1 -0.2,-0.4 0,-0.4c0,-0.1 0.1,-0.3 0.2,-0.4c-0.1,-0.1 -0.1,-0.2 0,-0.2c0.1,-0.3 0.2,-0.3 0.4,0l0,0.6c0.1,-0.1 0.1,0 0,0l0,0.4c0.2,0 0.2,0.2 0,0.4c0.1,0 0.1,0.1 0.2,0.2l0,0.4c0.1,0 0.1,0.2 0,0.4c0,0 0,0.1 0,0l0,2.3c0.1,0 0.1,0.1 0,0.2l0,0.4c0.2,-0.1 0.3,0.1 0.2,0.2c0,0.2 0,0.6 0.2,0.8c-0.1,0.3 -0.1,0.5 0,0.6c0,0.2 0.1,1.7 0.2,1.9c0.2,0 0.2,1 0,1.3c0.2,0.3 0.2,0.5 0.2,0.8c0,0.1 0.2,0.6 0.2,1l0,0.4c-0.1,0 0,0.2 0,0.4c0.1,-0.1 0.2,0 0.2,0.2l-0.2,0l0,0.2c0.3,0.1 0.3,0.8 0.2,1c0.3,0.1 0.5,1.2 0.4,1.3l0.2,0.4l-0.2,0l0,0.4c0.2,0.2 0.2,0.3 0.2,0.8c0.2,0.1 0.4,0.8 0.4,1.2c0.2,0.1 0.2,0.6 0.2,0.6l0,0.4c0,0.1 0.1,0.2 0.2,0.4c-0.1,0.2 0,0.2 0,0.4c0.1,0.3 0.1,0.4 0.2,0.6c0,0.1 0.3,0.8 0.4,1.2c0.1,0.2 0.2,0.5 0.2,0.8l0.2,0.5c-0.1,0.2 -0.1,0.2 0,0.2l0.1,0.3c0.1,-0.2 0.2,0.5 0.2,0.6c0.1,0.2 0.1,0.2 0.2,0.2c0.1,0.2 0.1,0.6 0,0.6l0,0.4c0.1,0.1 0.2,0.2 0.2,0.4l0,0.6c0.4,-0.2 0.6,0.4 0.6,1c0.2,0.1 0.3,0.1 0.4,0.2c-0.1,0.3 0,0.6 0,0.8c0.2,0.1 0.4,0.3 0.4,0.4c0,0.3 0.2,0.6 0.2,0.6c0.5,0.5 0.5,0.6 0.6,0.8c0.1,0.2 0.3,0.3 0.2,0.6c0.1,-0.1 0.2,0 0.2,0.2c0.3,0.2 0.3,0.3 0.2,0.6c-0.1,0 0,0.3 0.2,0.4c0.7,0.3 0.7,0.4 0.8,0.8l0,-0.2c0.2,0.3 1,1.2 1.3,1.7c0.3,0 0.3,0.2 0.2,0.4c0.2,-0.1 0.4,0.2 0.4,0.4c0.2,0 0.4,0.3 0.2,0.5l0.4,0.2l0.2,0.2l0,0.2c0,0.1 0.1,0.1 0.2,0.2c0.1,0 0.2,0.1 0.4,0l0,0.2c-0.2,0.2 0,0.4 0.2,0.4c0.2,0.1 0.3,0.3 0.4,0.6c0,0 0.2,0.1 0.2,0.4l0.6,0.4c0.4,-0.2 0.4,0.1 0.4,0.4l0.2,0.2l0.2,0.2l0.2,0.2l-0.1,0l0.2,0.2l0.2,0l0.2,0.2l0.4,0.2l0.2,0.2c0,0.2 0.1,0.4 0.2,0.3c0.1,0 0.3,0.2 0.4,0.2l0.2,0.2c0.1,0 0.4,0.1 0.6,0.2c0.1,0.2 0.3,0.3 0.6,0.4c0.2,0.2 0.9,0.6 1.3,1c0.1,0 0.1,0 0,0.2c1.3,0.1 1.3,0.7 1.3,1.2l0.4,0l0.2,-0.2c0.5,-0.3 0.8,0 1,0.2c0,0 0.2,0 0.2,0.2c0.1,0 0.1,0 0.2,0.2c0,0.1 0.3,0.2 0.4,0.2c0.1,-0.1 0.3,-0.1 0.4,0l0.4,0l0.4,0.2c0.1,-0.1 0.3,0 0.4,0c0.1,0.2 0.3,0.2 0.4,0c0.1,0.1 0.3,0.1 0.4,0.2l0.6,0.2l0.8,0c0.5,-0.1 1,0.2 1.2,0.2l0.2,0.2l0,-0.2l0.2,0l0,0.2l0.6,0l-0.2,0l0,-0.2l0.4,0l0,0.2l0.4,0c0.1,0.1 0.6,0 0.8,-0.2l1.2,0c0.1,0.1 0.9,0.1 1,0c0,0.1 0.1,0.2 0.2,0c0.2,0.1 1.1,0 1.2,0c0.2,0.1 0.2,0 0.4,-0.2c0.2,0 0.8,-0.2 1,-0.2c0.2,0.1 0.8,-0.1 0.8,-0.2c0.1,-0.1 0.4,-0.3 0.6,-0.4l0.2,0l0.2,-0.2l0.2,0c0.1,-0.1 0.1,-0.1 0.2,0c0,-0.2 0.2,-0.4 0.4,-0.2c0.1,0.1 0.1,0 0.2,-0.2c0.1,-0.3 0.5,-0.4 0.8,-0.4c0.1,0.1 0.2,0 0.4,-0.2c0,-0.1 0.4,-0.3 0.6,-0.2c0.1,-0.1 0.3,-0.2 0.4,-0.2c0.1,-0.2 0.1,-0.2 0.2,-0.2c0.1,-0.1 0.3,0 0.4,0c0.2,0 0.3,-0.1 0.2,-0.2c0.1,-0.2 0.4,-0.5 0.6,-0.4c0.2,0 0.7,-0.2 0.8,-0.6c0,-0.4 0.4,-0.6 0.6,-0.6c0.2,0.3 0.3,0 0.4,-0.4l0,-0.2c-0.1,0.1 0,0.1 0.2,0c0.3,0.2 0.4,0 0.4,-0.2c0.1,-0.5 0,-0.4 0.2,-0.6l0,-0.2l0.2,0l0,-0.2l0.2,0l0,-0.2l0.2,-0.2l0.2,-0.2l-0.4,0c0.1,-0.1 0.1,-0.1 0,0c0,-0.3 0.1,-0.4 0.2,-0.4s0.3,-0.1 0.2,-0.2c-0.3,-0.4 0,-0.5 0.2,-0.6c0.1,-0.2 0.2,-0.2 0,-0.4l0,-0.2l0.4,-0.2l0,-0.4s0,-0.2 0.2,-0.4c-0.1,0 0.1,-0.1 0.2,-0.2c-0.1,-0.3 -0.1,-0.4 0,-0.5c0,0 0.1,0 0,-0.2c0,-0.1 0.1,-0.3 0.2,-0.4c0.1,0 0.2,-0.2 0.2,-0.2c-0.2,-0.3 -0.1,-0.3 0,-0.4c0,0 0.1,-0.2 0,-0.4c0,0 0,-0.1 0.2,-0.2c-0.1,-0.1 0,-0.1 0,-0.2c-0.1,-0.3 -0.1,-0.9 0,-1.2c-0.1,-0.1 0,-0.1 0,-0.2c-0.4,-0.3 -0.3,-0.5 0,-0.6l0,-0.2c-0.2,-0.1 -0.1,-0.4 0,-0.4l0,-0.6c-0.2,-0.2 -0.1,-0.2 0,-0.2l0,-0.2c-0.2,-0.2 -0.2,-0.3 -0.2,-0.6c0.1,-0.1 0.1,-0.1 0,-0.4c-0.2,-0.2 -0.2,-0.2 0,-0.6c-0.2,-0.2 -0.2,-0.4 0,-0.6c0.1,-0.1 0.1,-0.1 0,-0.2l-0.4,-0.4c-0.1,-0.2 0,-0.3 -0.2,-0.4c-0.1,0 -0.2,-0.1 -0.2,-0.2c-0.3,-0.1 -0.2,-0.5 -0.2,-0.6l-0.2,-0.2c-0.4,-0.3 -0.2,-0.5 0,-0.6c0.4,-0.3 0,-0.5 -0.4,-0.4c-0.2,0.5 -0.3,0.4 -0.4,0.2c-0.2,0 -0.3,-0.1 -0.4,-0.2c0.1,-0.1 0.1,-0.1 0,-0.2c0.1,-0.1 0.1,-0.1 0,-0.2c-0.2,0.1 -0.4,0 -0.6,-0.2c0,0 0,-0.1 -0.2,-0.2c-0.1,0.1 -0.6,0 -0.8,-0.2c-0.2,0 -0.3,0 -0.4,-0.4c-0.1,0 -0.1,-0.2 -0.2,-0.2l-0.2,-0.2l-0.1,0.4c-0.1,0 -0.4,-0.1 -0.4,-0.2c0,-0.2 -0.2,-0.2 -0.2,0c-0.1,0 -0.7,0.3 -1.2,0.3l-0.1,-0.1c-0.3,0 -1,0.4 -1.2,0.8l-0.3,0.2c0,0.3 -0.1,0.4 -0.2,0.4c-0.3,0.1 -0.4,0.3 -0.2,0.4l-0.2,0.2l0,0.2l-0.2,0.2c-0.1,0.4 0,0.6 0.2,0.6l0.2,0l0.2,0.2c-0.1,-0.1 0.2,-0.2 0.4,-0.2c0.1,-0.2 0.4,-0.3 0.8,-0.2c0.4,-0.6 0.8,-0.3 0.8,0c0.1,0.2 0.6,0.4 0.8,0.4c0.2,-0.2 0.4,0.2 0.2,0.4l0,0.2l0.2,0.2l0,0.2l0.4,0c0.1,0 0.1,0.3 -0.2,0.3l-0.2,0.2c-0.2,0.3 0.1,0.3 0.2,0.2c0.3,-0.1 0.3,0.3 0.2,0.8l0,0.2l0.2,0.2c0.1,0.2 0.1,0.3 0,0.4c-0.2,0 -0.5,0.2 -0.6,0c-0.2,0 -0.3,0 -0.4,-0.2l-0.2,0.4l-0.6,0l-0.3,0.1c-0.2,0.3 -0.3,0.3 -0.4,0.2c-0.1,0 -0.2,0.1 -0.4,0.4c-0.2,0.1 -0.4,0.1 -0.4,0c0.1,-0.3 -0.1,-0.5 -0.2,-0.4l-0.2,0.2l-0.2,0l0,0.2l-0.2,0c-0.5,-0.2 -0.3,-0.2 0,-0.4l0.2,0.2l0.2,-0.2l0,-0.6l-0.2,-0.2c-0.2,0.1 -0.3,0 -0.2,-0.2c-0.1,-0.1 -0.4,-0.1 -0.4,0l0,0.4c0,0.1 -0.2,0.2 -0.2,-0.2l-0.4,0c-0.4,0.2 -0.5,-0.1 -0.4,-0.4c0.1,0 0.1,-0.1 -0.2,-0.2l-0.2,-0.2c0.1,0 0,-0.1 -0.2,-0.2c-0.1,0.1 -0.1,0.1 -0.2,0c-0.3,-0.2 -0.4,-0.3 -0.2,-0.4c0.2,-0.2 0.1,-0.3 -0.2,-0.4l0,-0.4c-0.3,-0.4 0.1,-0.6 0.2,-0.4c0.6,-0.2 0.3,-0.5 0,-0.4c0,0.1 -0.1,0.1 -0.3,0c-0.2,-0.4 -0.1,-0.6 0.2,-0.8l0,-0.2c-0.4,-0.1 -0.2,-0.3 -0.2,-0.4l0.2,-0.2l0.2,-0.2c0.3,0 0.2,-0.2 0,-0.4c-0.2,0.2 -0.2,-0.1 -0.2,-0.2l0,-0.4c0.1,0 0.1,-0.1 0.2,-0.2c-0.1,0 0,-0.2 0,-0.4c0.3,0 0.5,-0.2 0.4,-0.2l0,-0.2c0.3,-0.2 0.4,-0.5 0.2,-0.6c0.1,-0.1 0.3,-0.4 0.4,-0.4c0.1,0 0.2,-0.1 0.2,-0.2c0.2,-0.1 0.2,-0.3 0.4,-0.4c0.1,0 0.3,-0.1 0.4,-0.2l0.4,-0.6c0,0.1 0.2,0 0.4,-0.2l0.2,0c0.6,0.1 0.6,0 0.6,-0.2c-0.2,-0.1 0,0 0.2,0l0.4,0c0.1,0.2 0.4,0.1 0.4,0l0.2,-0.4l0.2,0l0,0.4l0.4,-0.2l0.4,0c0.2,0.1 0.9,0.2 1.2,0.4c0.3,0.1 0.5,0.1 0.6,0.2l0.2,0c0.3,0 0.5,0.2 0.8,0.4l0,0.2l0.4,0c0.1,0 0.5,0.1 0.8,0.6l0.2,0.2l0.4,0.4l0.4,0.2l0,0.2l0.4,0.4l-0.4,0l-0.2,-0.4c-0.1,-0.1 -0.2,-0.3 -0.6,-0.2c-0.1,-0.2 -0.3,0.2 -0.2,0.2c0.2,0 0.2,0.2 0.2,0.2c-0.1,0.1 -0.2,0.3 0.2,0.2c0.4,-0.1 0.4,0 0.4,0.2c-0.2,0.3 0.3,0.3 0.6,0.2c1.2,0.3 1.1,0.5 1.2,0.7c-0.3,0 -0.4,0.3 -0.2,0.4c0.3,0.1 0.2,0.4 0,0.4c-0.1,-0.1 -0.2,0 0,0.2c-0.1,0.1 0,0.2 0,0.2l0.2,0c-0.1,0 0,0 0,0c-0.1,0.2 0,0.3 0.2,0.4c0.3,0 0.3,0.3 0.2,0.6c-0.2,0 0,0.3 0.2,0.2c0.3,0 0.4,0.1 0.4,0.2c0.3,0.1 0.2,0.3 0,0.4l0,0.5c0.1,0.1 0.5,0.3 0.4,0.6c0.2,0.1 0.2,0.2 0,0.2c0.2,0.1 0.2,0.4 0,0.4c0.3,0.1 0.2,0.4 0,0.4c0.1,0 0.1,0.4 0,0.4c0.2,0.1 0.2,0.2 0.2,0.2c-0.1,0.1 -0.1,0.4 -0.2,0.4c0.2,0.1 0.4,0.2 0.4,0.4c0.1,0.1 0.1,0.2 0,0.2s-0.2,0.2 -0.2,0.4c-0.1,0 -0.1,0.6 0,0.7l0,0.6l-0.7,0.3l0.2,0l0,0.2l-0.2,0l0,0.4c0.2,0.1 0.1,0.5 0,0.6l0,0.6c0.1,0 0,0.5 -0.2,0.6c0,0 -0.1,0.3 -0.2,0.4c0.1,0.2 0.1,0.5 -0.2,0.8c-0.1,0 -0.1,0 0,0.2c0.1,0.1 0.1,0.2 0,0.4l0,0.4c0,0.1 -0.1,0.2 -0.4,0.2l0,0.2c0,0.1 0,0.3 -0.2,0.2c0,0.4 -0.2,0.3 -0.4,0.2l0,-0.2c-0.6,0.1 -0.4,0.6 -0.2,0.4c0.2,-0.1 0.3,0 0.4,0.2l-0.2,0l0,0.4c0,-0.1 -0.2,0.1 -0.2,0.2c0.1,0.2 0,0.5 -0.2,0.6c-0.4,0 -0.5,0.5 -0.4,0.6c-0.1,0.2 -0.3,0.5 -0.4,0.4c0,0 -0.2,0.1 -0.2,0.4l-0.6,0.4l0,0.4c0.2,0.4 -0.1,0.6 -0.4,0.6c0,0.1 0,0.4 -0.2,0.4c-0.2,0.1 -0.3,0.3 -0.4,0.4c0.1,0.1 0.1,0.1 0,0.2c0,0.1 -0.1,0.1 -0.2,0.2l0,0.2l-0.2,0c0.1,-0.1 -0.2,0 -0.2,0.2s-0.2,0.4 -0.2,0.4c-0.1,0 -0.2,0 -0.2,0.2c-0.1,0.2 -0.2,0.1 -0.4,0.2c-0.4,-0.2 -0.5,-0.1 -0.4,0.2c-0.1,0 -0.1,0 0,0.2c-0.1,0.2 -0.3,0.3 -0.4,0.2c-0.2,0.1 -0.3,0.1 -0.4,0.2c0,0.2 0,0.3 -0.2,0.2c-0.4,0.1 -0.6,0.1 -0.8,0.2c0.1,0.3 -0.1,0.4 -0.6,0.4l-0.2,0.2l-0.2,0c0.2,0.2 0.1,0.4 -0.2,0.4l-0.2,0l0,0.2l-0.4,0l0,-0.3l-0.2,0l-0.4,0.4l-0.2,-0.2l-0.6,0c-0.2,-0.2 -0.5,0 -0.6,0.2l0.2,0.4l0.2,0l-0.8,0.2l-0.2,0.2l-0.2,-0.2l-0.4,0c0,-0.1 -0.1,-0.1 -0.2,0.2l-0.2,0l0,0.3l-0.4,0l0,-0.2c0.1,0.1 0.2,-0.1 0.2,-0.2l0,-0.4c0.1,-0.2 0.1,-0.2 0.2,-0.2c0.2,-0.1 0.3,-0.3 0,-0.4l0,-0.2c0.2,-0.1 0.2,-0.3 -0.2,-0.4l-0.2,0l-0.2,0.2l0,1c-0.1,-0.1 -0.2,0 -0.2,0.2l-0.2,0l0.2,0.2l0,0.2c0.3,0 0.2,0.2 0,0.4l-0.2,0l-0.2,-0.2l-0.2,0.2c-0.1,-0.4 -0.5,-0.4 -0.6,-0.2l-0.4,0c-0.1,-0.1 -0.2,-0.2 -0.4,0c-0.1,0.1 -0.3,0.1 -0.6,-0.2l0,-0.4c0.1,0 0.3,0.1 0.4,0.2c0.2,-0.2 0.2,-0.3 0,-0.4l-0.4,0c0,0.2 -0.3,0.4 -0.6,0.4l-0.3,0.2c-0.4,-0.1 -0.2,0.1 -0.2,0.4l0.2,0l0,0.4l-0.4,0c-0.1,-0.1 -0.1,-0.4 -0.2,-0.4c-0.1,-0.5 -0.4,-0.3 -0.3,0c0,0.7 -0.3,0.5 -0.6,0l-0.6,0c0.1,-0.4 -0.2,-0.3 -0.4,-0.2c-0.2,-0.1 -0.3,0 -0.4,0.2c0,0.4 -0.2,0.3 -0.2,0c-0.1,-0.3 -0.3,-0.2 -0.4,0l-0.2,-0.2l-0.2,0.2l-0.2,-0.2l-0.2,0c-0.1,-0.2 -0.2,-0.2 -0.4,0c-0.1,0.3 -0.2,0.2 -0.2,-0.2c0,-0.2 0,-0.2 -0.4,-0.2c-0.3,-0.2 -0.6,-0.1 -0.8,0c-0.3,0 -0.2,0.1 0,0.2c0.6,0 0.2,0.4 0,0.2c-0.1,-0.1 -0.1,-0.2 -0.2,-0.2l0,-0.2c-0.2,-0.2 -0.1,-0.4 0,-0.4c0,-0.2 0.2,-0.3 0.4,-0.4c-0.1,-0.6 -0.6,-0.2 -1,0.4c-0.2,0 -0.5,0.4 -1,0.2c-0.1,-0.1 -0.1,-0.2 -0.2,-0.2c0.1,-0.2 0.2,-0.3 0.2,-0.2c0.1,-0.2 0.2,-0.4 -0.2,-0.4l0,-0.2s-0.1,-0.1 -0.2,0c-0.1,0.2 -0.2,0.1 -0.4,0c0.1,-0.2 0,-0.3 -0.2,-0.2l0,0.2l-0.6,0l-0.2,-0.2c-0.1,0 -0.2,0 -0.4,0.2c-0.3,0.1 -0.6,0.1 -0.6,-0.2c-0.2,-0.2 -0.6,-0.4 -1,-0.4l-0.4,-0.2c0,0.1 -0.1,0 -0.2,0c0,-0.2 0.1,-0.3 0.2,-0.4l0,-0.2c-0.2,-0.5 0.4,-0.5 0.6,-0.4l0.4,0l0,-0.2l-0.2,0c0.2,-0.2 -0.1,-0.3 -0.2,-0.2c-0.2,0.1 -0.3,0.2 -0.6,0c-0.1,0 -0.2,-0.1 -0.2,-0.2c0.1,-0.1 0.1,-0.2 0.2,-0.2l0,-0.2c0,-0.5 -0.3,-0.3 -0.2,0l-0.2,0l-0.2,0.2c-0.2,0 -0.3,0.1 -0.4,0.2c0,0 0.1,0.2 0.2,0.2c0.3,-0.1 0.4,-0.1 0.6,0l0.4,0.2l-0.2,0.3l-0.2,0.2c0,-0.3 -0.4,-0.1 -0.4,0.2c0.4,0.4 0.1,0.4 -0.2,0.2c-0.9,-0.1 -0.9,-0.4 -0.8,-1.2l-0.2,0l-0.4,-0.2l-0.3,-0.1c-0.1,0 -0.1,-0.2 0,-0.2l-0.2,0c-0.2,-0.1 -0.3,-0.3 -0.2,-0.2l-0.4,0l-0.2,-0.2c0.1,-0.1 0,-0.2 -0.2,-0.2c-0.2,-0.1 -0.6,0 -0.6,-0.2l0,-0.2c-0.1,-0.3 -0.4,-0.6 -0.6,-0.6c-0.4,0.1 -0.3,-0.1 -0.2,-0.2c0.1,-0.2 -0.1,-0.7 -0.4,-0.8l-0.2,0l-0.4,-0.6l-0.8,0l-0.2,-0.4l0.2,-0.2l0.6,0l0,0.4l0.2,0l0.2,0.2c0.6,0 0.5,-0.2 0.2,-0.4l-0.4,-0.2c-0.4,-0.7 -1,-0.3 -1,0l-0.4,0l0.2,-0.2l-0.2,-0.2l-0.4,0l-0.2,-0.2l0.2,-0.2c0.4,-0.2 0.4,-0.4 0.2,-0.4l-0.4,-0.2c0,-0.1 0,-0.1 -0.2,-0.2c0.4,-0.3 0.3,-0.5 0,-0.6l-0.2,-0.4l-0.2,0l-0.2,0.2l-0.2,-0.2l-0.4,0l0.2,-0.2l0.4,0c0.5,0 0.3,-0.3 0,-0.4l-0.1,0l0,-0.2l0.2,0c0.2,-0.2 -0.1,-0.4 -0.4,-0.2l-0.2,0.2l-0.2,0.2c0,0.5 0,0.5 -0.4,0c-0.1,-0.2 -0.1,-0.2 0,-0.2c-0.1,0.1 -0.2,0 -0.2,-0.3zm28.3,8.1zm-34.5,-22.9c0,0.4 0.2,0.2 0.2,0c0.2,-0.1 0,-0.1 -0.2,0zm1.2,2.9c0,0.3 0.1,0.2 0.2,0c0,-0.1 -0.2,-0.2 -0.2,0zm-0.2,0c-0.5,0 -0.3,0.2 0,0.4c0.2,-0.2 0.1,-0.4 0,-0.4zm0.4,0.7l0,0.4l0.2,0c0.3,-0.2 0.1,-0.4 0,-0.4l-0.2,0zm2.1,4.6s-0.1,-0.1 -0.2,0c-0.2,0.1 0,0.3 0.2,0.2c0.1,0.1 0.2,0 0,-0.2zm0.4,1.4l-0.2,0.2l0.4,0c0.1,0 0.1,-0.3 -0.2,-0.2zm0.4,1.5c0.1,0.1 0.2,0 0.2,0c0.1,-0.2 0,-0.3 0,-0.2c-0.3,0 -0.4,0 -0.2,0.2zm2.3,2.5c-0.1,-0.3 -0.3,-0.2 -0.4,0c0.3,0.3 0.3,0.2 0.4,0zm0.4,-0.2l-0.2,0c-0.1,0.5 0.3,0.3 0.2,0zm0.3,0.1l-0.2,0c0.2,0.3 0.5,0.2 0.2,0zm-0.3,0.7l0,0.2l0.2,0c0.1,0 0.2,-0.2 0.2,-0.4c-0.1,-0.3 -0.4,-0.1 -0.4,0l0,0.2zm1.5,1c-0.1,-0.2 -0.3,-0.2 -0.4,0c0,0.5 0.3,0.3 0.4,0zm0.4,1.5c0,0.3 0.3,0.3 0.4,0c-0.1,-0.2 -0.3,-0.2 -0.4,0zm2.9,1.9c0,0.1 0.1,0.2 0.2,0l-0.2,0zm-0.2,1.4c0,0.2 0.1,0.2 0.2,0c-0.1,-0.1 -0.2,-0.1 -0.2,0zm1.5,0.4c-0.1,-0.1 -0.2,0 -0.2,0c0.3,0.3 0.3,0 0.2,0zm0.4,0.5l0.2,-0.2c0.2,-0.4 0,-0.4 -0.2,-0.2c-0.1,-0.2 -0.3,0.1 -0.2,0.2l0.2,0.2zm1.6,1.4c-0.2,0 0,0.2 0.2,0.2l0.2,0l0,-0.2c0.1,-0.1 0.2,-0.1 0.2,-0.4c0,-0.2 -0.4,-0.2 -0.4,0c-0.1,0.1 -0.2,0.3 -0.2,0.4zm2.9,0c0,-0.2 -0.3,-0.2 -0.4,0c0.1,0.3 0.4,0.2 0.4,0zm-1.2,1.9c0,0.2 0.3,0.1 0.4,0c-0.1,-0.3 -0.4,-0.3 -0.4,0zm2.1,-0.6s0.1,0 0,0c0.1,0.2 0,0.2 0,0zm0.6,0.2l0,-0.2l-0.2,0.2l0.2,0zm-0.6,0.8c0.5,0.2 0.6,0 0.6,-0.4c-0.1,-0.1 -0.4,-0.2 -0.6,0c-0.2,0.2 -0.2,0.3 0,0.4zm6.4,1.8l0.2,0c-0.2,-0.2 -0.2,-0.2 -0.2,0zm0.5,-0.5c0,0.3 0.2,0.2 0.2,0c0.1,-0.1 -0.2,0 -0.2,0zm0.8,0.4c0,-0.3 -0.2,-0.3 -0.2,0c0,0.4 0.3,0.4 0.2,0zm0.6,0.2c0.1,-0.1 -0.1,-0.1 -0.2,0c0.1,0.4 0.3,0.4 0.2,0zm7.3,-2.1l-0.2,0.2l0.2,0l0.2,0.4l0.2,0l0,-0.2l0.2,0.2c0.6,0 0.1,-0.3 -0.4,-0.4l0,-0.4c0.6,-0.6 0.2,-0.7 0,-0.6l-0.2,0.8zm1.5,0.2l0.2,0c-0.5,-0.2 -0.3,0.1 -0.2,0zm0.4,-0.9c-0.2,0 -0.2,0 -0.2,0.2l0.2,0l0,-0.2zm0.4,-0.1c0,0.2 0.1,0.1 0.2,0l-0.2,0zm1.9,-0.3c0.2,-0.1 0.2,-0.1 0.2,-0.2c-0.1,-0.3 -0.4,-0.2 -0.6,-0.2c-0.1,0.2 0,0.4 0.4,0.4zm-0.4,0.3c-0.2,0 -0.1,0.2 0,0.2l0,-0.2zm1,-0.7c-0.1,-0.1 -0.2,0 -0.2,0l0,0.2l0.2,0l0,0.2l0.2,0l0,-0.4l-0.2,0zm-0.2,-1.4c0,0.3 0.4,0.3 0.8,0.2c0.2,0.1 0.2,0.1 0.4,-0.2c0.1,-0.1 0.1,-0.3 -0.2,-0.2l-0.2,0l-0.2,-0.2l-0.2,0c-0.5,-0.3 -0.6,0.3 -0.4,0.4zm0.6,-0.7c-0.1,-0.1 -0.3,-0.1 -0.4,0c0.1,0.2 0.3,0.2 0.4,0zm2.3,-0.8c-0.7,0 -0.5,0.5 -0.2,0.6c0.5,-0.2 0.4,-0.6 0.2,-0.6zm-0.6,-0.4c0.2,0.1 0.2,0.2 0.4,0c0.3,0 0.3,0 0.2,-0.2c-0.1,-0.3 -0.3,-0.3 -0.4,-0.2c-0.2,0.3 -0.2,0.3 -0.2,0.4zm2.5,-5.2l0.2,0c0.2,0.1 0.4,0.1 0.4,0l0,-0.4l-0.2,-0.2c0,0.1 -0.4,0.1 -0.4,0l0,0.6zm1,0l0.2,0l-0.2,0zm-0.2,-0.4l0.4,0c-0.2,-0.4 -0.4,-0.2 -0.6,0l0.2,0zm0.6,-0.3c-0.1,0 -0.2,0 -0.2,0.2c0.2,0.4 0.7,0.2 0.8,0c-0.1,-0.3 -0.2,-0.5 -0.2,-0.6c0.1,-0.2 0.1,-0.3 -0.2,-0.6c-0.3,-0.1 -0.5,0.2 -0.2,0.4l0,0.6zm-7.9,-8.3c-0.2,0 -0.4,0.1 -0.2,0.2c0.2,0.3 0.3,0 0.2,-0.2zm0.2,0.9c0,-0.1 0,-0.2 -0.2,-0.2l-0.2,0.4c0.1,0.5 0.5,0.1 0.2,-0.2l0.2,0zm0.5,0.6c-0.2,0 -0.1,0.3 0,0.4l0.2,0c0.1,0 0.1,-0.4 0,-0.4c0.1,-0.1 -0.2,0 -0.2,0zm-1.5,-1c-0.2,0 -0.2,0.1 0,0.2l0,-0.2zm-0.6,0.2l0.2,0l0,-0.2c-0.1,-0.1 -0.2,0.1 -0.2,0.2zm0,-0.9l-0.2,-0.2c-0.1,-0.1 -0.3,0 -0.2,0.2l0.4,0zm-1.7,0.9c-0.1,0 -0.2,0.1 -0.2,0.2c0.2,0.1 0.3,0 0.2,-0.2zm-0.4,0c0.2,-0.1 0.1,-0.4 0,-0.4c-0.4,0 -0.4,0.2 0,0.4zm1.4,-5.5c0,0.1 -0.1,0.2 0,0zm1.5,-1.2c0,0.3 0.3,0.2 0.2,0c0.1,-0.4 -0.2,-0.4 -0.2,0zm1.2,1.4l0,-0.4c-0.2,-0.1 -0.2,0.2 0,0.4zm2.8,0.9c-0.4,-0.2 -0.5,0.2 -0.2,0.6c0.2,0.2 0.5,0.2 0.6,0c0.2,0.1 0.3,-0.4 0,-0.4c-0.1,-0.1 -0.2,-0.2 -0.4,-0.2zm5.2,4.2l-0.2,0c0.2,0.2 0.2,0 0.2,0zm-1.3,0.8c0.3,0.1 0.4,-0.1 0.4,-0.2c-0.2,-0.2 -0.5,-0.2 -0.6,0c0.1,0.2 0.1,0.2 0.2,0.2zm0.2,3.5c0.1,-0.1 0,-0.2 -0.2,0c0.1,0.1 0.2,0.1 0.2,0zm0.2,1.5c0,0.2 0.2,0.1 0.2,-0.2l-0.2,0c-0.1,-0.1 -0.2,0 0,0.2zm0.5,-0.2c0.1,0.2 0,0.2 0,0zm0.6,0c-0.1,0 -0.3,-0.1 -0.2,0.2c0.2,0.2 0.2,-0.1 0.2,-0.2z"/>`
   
const report = {
    pageSetting: new Proxy({
        pageHeight_mm : 297, //279.4
        pageWidth_mm : 210, //215.9 210
        marginTop_mm :15, //mm
        marginBottom_mm : 15, //mm
        marginLeft_mm : 15, //mm
        marginRight_mm : 15, //mm
        language : 'EN',
        fontSize : 9.5, //px
        fontFamily : 'Arial',
        contentInnerBorderPadding : 14, //px
        rowHeightPct : [0.1,0.025,0.09,0.665,0.12],
        colWidthPct : [0.06,0.08,0.36,0.06,0.14,0.06,0.06,0.18],
        headerColOffSet: [0,0],
        descriptionLineHeight: 14,
        headerLineHeight: 16, //px
        footerColOffSet: [0,0],
        footerLineHeight: 16, //px
        headSpace: 0.075, //pct of body will be blank
        logoInnerHtml : ermLogo,
        }, {
        set: function (receiver, property, value) {
            console.log(property, 'is changed to', value);
            receiver[property] = value;
            report.refresh()
        }
    }),
    logCollection: {},  
    template: {
        projectNo : '0028705',
        projectTitle : 'General Admin',
        client : 'ERM',
        coordSys : 'WGS 84',
        xCoord : `121°29'4.92"`,
        yCoord : `31°15'10.51"`,
        loggedBy : 'Daniel Wang',
        reviewedBy : 'Edward Zhang',
        approvedBy : 'Seong Jeon',
        holeSize : '130',
        wellInstalled : true,
        wellHead : 'Protective Standpipe',
        casingSize : '63',
        totalWellDepth : '5.5',
        bentoniteSealingDepth : '0.5',
        screenIntervalFrom : '1',
        screenIntervalTo : '5',
        initialWaterLevel : '2.4',
        staticWaterLevel : '2.094',
        topOfCasingElevation : '10.520',
        groundElevation : '10.201',
        drilledBy : 'Liuju',
        drillDate : '2019/07/15',
        drillMethod : 'Direct Push',
        subsurfaceProfile : [
            ['0.00','0.30','Concrete','concrete pavement'],
            ['0.30','3.00','Fill','grey, mainly sand, silty clay and gravels, dry, dense to medium dense. No stain or odor noted.'],
            ['3.00','6.00','Silty Clay','greyish brown to dark grey, mainly silty clay, with some clayey silt and/or sand, wet to saturated, soft, medium plasticity, meidum dilatancy. No stain or odor noted.']
        ],
        soilSample : [
            [0.2,0.5,'MW-1-0.2-0.5m',1.0,true],
            [0.9,1.0,'MW-1-0.9-1.0m',5.0,],
            [6,6,'MW-1-6.0m',2.0,true],
        ], //..[from,to,sampleID,PID,Lab]..
        maxTrickDepth : '6',
        majorTrick : '1'
    },

    addNew() {
        let newLogId = 'log'+ Date.now() + Math.random().toString(36).substring(2,6)
        let tempLocationId = `UNTITLED_${config.container.childElementCount+1}`
        this.logCollection[newLogId] = new Proxy(new Log(newLogId, tempLocationId),{
            set: function (receiver, property, value) {
                switch(property){
                    case 'wellInstalled':
                        receiver[property] = value;
                        console.log('wellInstalled Changed');
                        receiver.updateFooter();
                        receiver.updateSubsurfaceProfile();
                        receiver.updateWellDetail()
                        receiver.updateWaterLevel();
                        return true;

                    case 'majorTrick':
                        receiver[property] = value;
                        console.log('majorTrick Changed');
                        receiver.updateAxis()
                        return true;

                    case 'maxTrickDepth': 
                        receiver[property] = value;
                        console.log('maxTrickDepth Changed');
                        receiver.updateAxis()
                        receiver.updateSubsurfaceProfile()
                        receiver.updateSoilSample()
                        receiver.updateWellDetail()
                        receiver.updateWaterLevel();
                        return true;

                    case 'drillDate': 
                        // if (/^2\d{3}\/\d{1,2}\/\d{1,2}$/.test(value) || 
                        //     /^2\d{3}\/\d{1,2}\/\d{1,2}~2\d{3}\/\d{1,2}\/\d{1,2}$/.test(value)
                        //     ){
                            receiver[property] = value;
                            console.log(value)
                            document.querySelector(`svg#${receiver.logId} .dataValue .${property}`).innerHTML = value;
                            document.querySelector(`div.fillingField input.${property}`).setAttribute('validation',"valid")
                            console.log('drillDate Changed');
                            return true;
                        // } else {
                        //     document.querySelector(`div.fillingField input.${property}`).setAttribute('validation',"invalid")
                        //     return false;
                        // }

                    case 'initialWaterLevel':
                        receiver[property] = value;
                        inputControler.updateAxis()
                        document.querySelector(`svg#${receiver.logId} .dataValue .${property}`).innerHTML = parseFloat(value).toFixed(1);
                        receiver.updateWaterLevel();
                        console.log('initialWaterLevel Changed');
                        return true;

                    case 'wellHead': 
                        receiver[property] = value;
                        receiver.updateWellDetail(); receiver.updateWaterLevel();
                        console.log('wellHead Changed');
                        return true;

                    case 'bentoniteSealingDepth':
                        // if (value <= parseFloat(receiver.screenIntervalFrom) || 
                        //     receiver.screenIntervalFrom == ''){
                            receiver[property] = value;
                            inputControler.updateAxis()
                            document.querySelector(`div.fillingField input.${property}`).removeAttribute('validation')
                            receiver.updateWellDetail(); receiver.updateWaterLevel();
                            console.log('bentoniteSealingDepth Changed');
                            return true;
                        // } else {
                        //     document.querySelector(`div.fillingField input.${property}`).setAttribute('validation',"invalid")
                        //     return false;
                        // }

                    case 'screenIntervalFrom':
                        // if (value <= parseFloat(receiver.screenIntervalTo) && value >= parseFloat(receiver.bentoniteSealingDepth) || 
                        //     value <= parseFloat(receiver.screenIntervalTo) && receiver.bentoniteSealingDepth == '' || 
                        //     receiver.screenIntervalTo == ''                && value >= parseFloat(receiver.bentoniteSealingDepth) || 
                        //     receiver.screenIntervalTo == ''                && receiver.bentoniteSealingDepth == '' 
                        //     ){
                            receiver[property] = value;
                            inputControler.updateAxis()
                            document.querySelector(`svg#${receiver.logId} .dataValue .${property}`).innerHTML = parseFloat(value).toFixed(1);
                            document.querySelector(`div.fillingField input.${property}`).removeAttribute('validation')
                            receiver.updateWellDetail(); receiver.updateWaterLevel();
                            console.log('totalWellDepth Changed');
                            return true;
                        // } else {
                        //     document.querySelector(`div.fillingField input.${property}`).setAttribute('validation',"invalid")
                        //     return false;
                        // }

                    case 'screenIntervalTo':
                        // if (value <= parseFloat(receiver.totalWellDepth) && value >= parseFloat(receiver.screenIntervalFrom) || 
                        //     value <= parseFloat(receiver.totalWellDepth) && receiver.screenIntervalFrom == '' || 
                        //     receiver.totalWellDepth == ''                && value >= parseFloat(receiver.screenIntervalFrom) || 
                        //     receiver.totalWellDepth == ''                && receiver.screenIntervalFrom == '' 
                        //     ){
                            receiver[property] = value;
                            inputControler.updateAxis()
                            document.querySelector(`svg#${receiver.logId} .dataValue .${property}`).innerHTML = parseFloat(value).toFixed(1);
                            document.querySelector(`div.fillingField input.${property}`).removeAttribute('validation')
                            receiver.updateWellDetail(); receiver.updateWaterLevel();
                            console.log('totalWellDepth Changed');
                            return true;
                        // } else {
                        //     document.querySelector(`div.fillingField input.${property}`).setAttribute('validation',"invalid")
                        //     return false;
                        // }

                    case 'totalWellDepth':
                        // if (value >= parseFloat(receiver.screenIntervalTo) || 
                        //     receiver.screenIntervalTo == ''){
                            receiver[property] = value;
                            inputControler.updateAxis()
                            document.querySelector(`svg#${receiver.logId} .dataValue .${property}`).innerHTML = value;
                            document.querySelector(`div.fillingField input.${property}`).removeAttribute('validation')
                            receiver.updateWellDetail(); receiver.updateWaterLevel();
                            console.log('totalWellDepth Changed');
                            return true;
                        // } else {
                        //     document.querySelector(`div.fillingField input.${property}`).setAttribute('validation',"invalid")
                        //     console.log('budui')
                        //     return false;
                        // }

                    case 'staticWaterLevel': 
                        receiver[property] = value;
                        inputControler.updateAxis()
                        let staticWaterLevelbgs = (receiver.staticWaterLevel - (receiver.topOfCasingElevation - receiver.groundElevation)).toFixed(3);
                        document.querySelector(`svg#${receiver.logId} .dataValue .${property}`).innerHTML = staticWaterLevelbgs;
                        receiver.updateWaterLevel();
                        console.log('staticWaterLevel Changed');
                        return true;

                    case 'topOfCasingElevation':
                    case 'groundElevation':
                        receiver[property] = value;
                        receiver.updateSubsurfaceProfile ()
                        let staticWaterLevelbgs2 = (receiver.staticWaterLevel - (receiver.topOfCasingElevation - receiver.groundElevation)).toFixed(3);
                        document.querySelector(`svg#${receiver.logId} .dataValue .staticWaterLevel`).innerHTML = staticWaterLevelbgs2;
                        return true;

                    case 'subsurfaceProfile': 
                        receiver[property] = value;
                        console.log('subsurfaceProfile Changed');
                        inputControler.updateAxis()
                        receiver.updateSubsurfaceProfile ()
                        return true;

                    case 'soilSample': 
                        receiver[property] = value;
                        console.log('soilSample Changed');
                        inputControler.updateAxis()
                        receiver.updateSoilSample()
                        return true;

                    default: 
                        receiver[property] = value;
                        document.querySelector(`svg#${receiver.logId} .dataValue .${property}`).innerHTML = value;
                        console.log(`default (${property}) Changed`);
                }
            }
        })
        return newLogId 
    },

    remove(logId) {
        document.querySelector(`svg#${logId}`).remove();
        delete logCollection.logId
    },

    activeLog (logId) {
        logSelector.logId = logId
        logSelector.load()
        infoManger.load()
        soilDescriber.load()
        soilSampler.load()
        inputControler.load()
    
        if (document.querySelector(`svg.active`)) {
        document.querySelector(`svg.active`).classList.toggle('active')
        };
        document.querySelector(`svg#${logId}`).classList.toggle('active');
        location.href = `#${logId}`
    },

    refresh(){
        config.init()
        Object.keys(this.logCollection).forEach((log)=>{
            this.logCollection[log].refresh()
        })
    }
}

const config = {
    container: document.querySelector('#scaleHolder'), 
    tempHolder: document.querySelector('span#tempHolder'),
    gridLines: {},
    lable:{coltitle:{}},

    init: function(){
        this.getBorderGrids();
        this.getLable();
    },

    getBorderGrids: function(){
        this.tempHolder.style.width = '200mm'
        let mmTopxRatio = parseFloat(getComputedStyle(document.querySelector('span#tempHolder')).width)/200
        this.tempHolder.style.width = ''
        //paper size in px
        let pageWidth = report.pageSetting.pageWidth_mm * mmTopxRatio
        let pageHeight = report.pageSetting.pageHeight_mm * mmTopxRatio
        //calc margin from mm to px
        let marginTop = report.pageSetting.marginTop_mm * mmTopxRatio
        let marginBottom = report.pageSetting.marginBottom_mm * mmTopxRatio
        let marginLeft = report.pageSetting.marginLeft_mm * mmTopxRatio
        let marginRight = report.pageSetting.marginRight_mm * mmTopxRatio
        //InnerBorder offset 2px from outerborder
        let ContentInnerBorderWidth = pageWidth-marginLeft-marginRight-4
        let ContentInnerBorderHeight = pageHeight-marginBottom-marginTop-4
        // row y in px 
        this.gridLines.y0 = marginTop + 2;
        this.gridLines.y1 = this.gridLines.y0 + ContentInnerBorderHeight * report.pageSetting.rowHeightPct[0]
        this.gridLines.y2 = this.gridLines.y1 + ContentInnerBorderHeight * report.pageSetting.rowHeightPct[1]
        this.gridLines.y3 = this.gridLines.y2 + ContentInnerBorderHeight * report.pageSetting.rowHeightPct[2]
        this.gridLines.y4 = this.gridLines.y3 + ContentInnerBorderHeight * report.pageSetting.rowHeightPct[3]
        this.gridLines.y5 = this.gridLines.y4 + ContentInnerBorderHeight * report.pageSetting.rowHeightPct[4]
        // col x in px 
        this.gridLines.x0 = marginLeft + 2
        this.gridLines.x1 = this.gridLines.x0 + ContentInnerBorderWidth * report.pageSetting.colWidthPct[0]
        this.gridLines.x2 = this.gridLines.x1 + ContentInnerBorderWidth * report.pageSetting.colWidthPct[1]
        this.gridLines.x3 = this.gridLines.x2 + ContentInnerBorderWidth * report.pageSetting.colWidthPct[2]
        this.gridLines.x4 = this.gridLines.x3 + ContentInnerBorderWidth * report.pageSetting.colWidthPct[3]
        this.gridLines.x5 = this.gridLines.x4 + ContentInnerBorderWidth * report.pageSetting.colWidthPct[4]
        this.gridLines.x6 = this.gridLines.x5 + ContentInnerBorderWidth * report.pageSetting.colWidthPct[5]
        this.gridLines.x7 = this.gridLines.x6 + ContentInnerBorderWidth * report.pageSetting.colWidthPct[6]
        this.gridLines.x8 = this.gridLines.x7 + ContentInnerBorderWidth * report.pageSetting.colWidthPct[7]
    },

    getLable: function(){
        let GL = this.gridLines;
        if(report.pageSetting.language=='EN'){
            this.lable.locationId = 'LOG OF BOREHOLE:   ';
            this.lable.projectNo = 'Project No: ';
            this.lable.projectTitle = 'Project Title: ';
            this.lable.client = 'Client: ';
            this.lable.coordSys = 'Coord. Sys.: ';
            this.lable.xCoord = 'X Coord.: ';
            this.lable.yCoord = 'Y Coord.: ';
            this.lable.loggedBy = 'Logged By: ';
            this.lable.reviewedBy = 'Reviewed By: ';
            this.lable.approvedBy = 'Approved By: ';
            this.lable.coltitle.r2c1 = ['SUBSURFACE PROFILE', (GL.x0+GL.x4)/2,(GL.y1+GL.y2)/2   ];
            this.lable.coltitle.r2c2 = ['SAMPLE',             (GL.x4+GL.x7)/2,(GL.y1+GL.y2)/2   ];
            this.lable.coltitle.r2c3 = ['WELL',               (GL.x7+GL.x8)/2,(GL.y1+GL.y3)/2-12];
            this.lable.coltitle.r2c4 = ['CONSTRUCTION',       (GL.x7+GL.x8)/2,(GL.y1+GL.y3)/2   ];
            this.lable.coltitle.r2c5 = ['DETAILS',            (GL.x7+GL.x8)/2,(GL.y1+GL.y3)/2+12];
            this.lable.coltitle.r3c1 = ['Depth (m)' ,         (GL.x0+GL.x1)/2,(GL.y2+GL.y3)/2   ];
            this.lable.coltitle.r3c2 = ['Symbol',             (GL.x1+GL.x2)/2,(GL.y2+GL.y3)/2   ];
            this.lable.coltitle.r3c3 = ['Description',        (GL.x2+GL.x3)/2,(GL.y2+GL.y3)/2   ];
            this.lable.coltitle.r3c4 = ['Elev / Depth (m)',   (GL.x3+GL.x4)/2,(GL.y2+GL.y3)/2   ];
            this.lable.coltitle.r3c5 = ['Sample ID',          (GL.x4+GL.x5)/2,(GL.y2+GL.y3)/2   ];
            this.lable.coltitle.r3c6 = ['PID reading (ppm)',                (GL.x5+GL.x6)/2,(GL.y2+GL.y3)/2   ];
            this.lable.coltitle.r3c7 = ['Lab Analysis',       (GL.x6+GL.x7)/2,(GL.y2+GL.y3)/2   ];
        } else{
            this.lable.locationId = '钻孔记录:   ';
            this.lable.projectNo = '项目编号: ';
            this.lable.projectTitle = '项目名称: ';
            this.lable.client = '客户: ';
            this.lable.coordSys = '坐标系统: ';
            this.lable.xCoord = 'X 坐标: ';
            this.lable.yCoord = 'Y 坐标: ';
            this.lable.loggedBy = '记录: ';
            this.lable.reviewedBy = '审阅: ';
            this.lable.approvedBy = '批准: ';
            this.lable.coltitle.r2c1 = ['土层剖面', (GL.x0+GL.x4)/2,(GL.y1+GL.y2)/2   ];
            this.lable.coltitle.r2c2 = ['样品采集',             (GL.x4+GL.x7)/2,(GL.y1+GL.y2)/2   ];
            this.lable.coltitle.r2c4 = ['监测井结构',       (GL.x7+GL.x8)/2,(GL.y1+GL.y3)/2   ];
            this.lable.coltitle.r3c1 = ['深度(米)' ,         (GL.x0+GL.x1)/2,(GL.y2+GL.y3)/2   ];
            this.lable.coltitle.r3c2 = ['符号',             (GL.x1+GL.x2)/2,(GL.y2+GL.y3)/2   ];
            this.lable.coltitle.r3c3 = ['描述',        (GL.x2+GL.x3)/2,(GL.y2+GL.y3)/2   ];
            this.lable.coltitle.r3c4 = ['高程/深度(米)',   (GL.x3+GL.x4)/2,(GL.y2+GL.y3)/2   ];
            this.lable.coltitle.r3c5 = ['土样编号',          (GL.x4+GL.x5)/2,(GL.y2+GL.y3)/2   ];
            this.lable.coltitle.r3c6 = ['PID读数(ppm)',                (GL.x5+GL.x6)/2,(GL.y2+GL.y3)/2   ];
            this.lable.coltitle.r3c7 = ['实验室分析',       (GL.x6+GL.x7)/2,(GL.y2+GL.y3)/2   ];
        }
    },

    getParagraphHeight : function (width, string) {
        let fontSize = report.pageSetting.fontSize;
        this.tempHolder.style.fontSize = fontSize + 'px';
        this.tempHolder.style.lineHeight = fontSize*1.5 + 'px'
        this.tempHolder.style.width = width + 'px';
        this.tempHolder.innerHTML = string;
        paragraphHeight = parseFloat(getComputedStyle(this.tempHolder).height);
        this.tempHolder.innerHTML = "";
        return paragraphHeight
    },

    convertMbgsToPxy : function (maxTrickDepth, mbgs) {
        let drawPadding = report.pageSetting.headSpace;
        let minDepth_y = this.gridLines.y3 + (this.gridLines.y4-this.gridLines.y3)*drawPadding;
        let pxy = minDepth_y + (this.gridLines.y4-this.gridLines.y3)*(1-2*drawPadding) / maxTrickDepth * mbgs;
        return pxy
    }
}
config.init()

class Log {
    constructor(logId, locationId) {
        this.logId = logId;
        this.locationId = locationId;
        this.projectNo = 'NULL';
        this.projectTitle = 'NULL';
        this.client = 'NULL';
        this.coordSys = 'NULL';
        this.xCoord = 'NULL';
        this.yCoord = 'NULL'
        this.loggedBy = 'NULL'
        this.reviewedBy = 'NULL'
        this.approvedBy = 'NULL'
        this.holeSize = 'NULL'
        this.wellInstalled = true
        this.wellHead = 'NULL'
        this.casingSize = 'NULL'
        this.totalWellDepth = 'NULL'
        this.bentoniteSealingDepth = 'NULL'
        this.screenIntervalFrom = 'NULL'
        this.screenIntervalTo = 'NULL'
        this.initialWaterLevel = 'NULL'
        this.staticWaterLevel = 'NULL'
        this.topOfCasingElevation = 'NULL'
        this.groundElevation = 'NULL'
        this.drilledBy = 'NULL'
        this.drillDate = 'NULL'
        this.drillMethod = 'NULL'
        this.subsurfaceProfile = []
        this.soilSample = [], //..[from,to,sampleID,PID,Lab]..
        this.maxTrickDepth = '6'
        this.majorTrick = '1'
        this.init()
    }

    init(){
        this.createSVG()
        this.refresh()
        console.log(this.logId+'  initialized')
    }
    
    refresh(){
        this.updateBorders()
        this.addColTitle ()
        this.updateLogo()
        this.updateHeader()
        this.updateFooter()
        this.updateAxis ()
        this.updateSubsurfaceProfile ()
        this.updateSoilSample()
        this.updateWellDetail ()
        this.updateWaterLevel ()
        console.log('log.refresh()')
    }

    createSVG(){
        
        let svg_log=document.createElementNS(svgNS,'svg'); 	
            svg_log.setAttribute('id', this.logId);
            svg_log.setAttribute('class', 'logs');
            svg_log.setAttribute('data-name', `UNTITLED_${config.container.childElementCount+1}`);
            svg_log.setAttribute('xmlns', svgNS);
            svg_log.setAttribute('version','1.1');
            svg_log.setAttribute('width',`${report.pageSetting.pageWidth_mm}mm`);
            svg_log.setAttribute('height',`${report.pageSetting.pageHeight_mm}mm`);
            svg_log.setAttribute('font-family', `${report.pageSetting.fontFamily}`)//'Book Antiqua''Arial'
            svg_log.setAttribute('font-size', `${report.pageSetting.fontSize}` )//'Book Antiqua''Arial'
        config.container.appendChild(svg_log)      
    }

    updateBorders(){
        let svg_log = document.querySelector(`svg#${this.logId}`);
        let GL = config.gridLines;

        if(svg_log.querySelector('g.borderLine')){svg_log.querySelector('g.borderLine').remove()};
        let g_borderLine=document.createElementNS(svgNS,'g'); 
        svg_log.appendChild(g_borderLine);
            g_borderLine.setAttribute('class', 'borderLine')
            g_borderLine.setAttribute('stroke-width', 0.5)
            g_borderLine.setAttribute('fill', 'none')
            g_borderLine.setAttribute('stroke', 'black')
            g_borderLine.innerHTML = `<path d="
                M ${GL.x0-2} ${GL.y0-2} L ${GL.x8+2} ${GL.y0-2} L ${GL.x8+2} ${GL.y5+2} L ${GL.x0-2} ${GL.y5+2} Z 
                M ${GL.x0} ${GL.y0} L ${GL.x8} ${GL.y0} L ${GL.x8} ${GL.y5} L ${GL.x0} ${GL.y5} Z
                M ${GL.x0} ${GL.y1} L ${GL.x8} ${GL.y1}
                M ${GL.x0} ${GL.y2} L ${GL.x7} ${GL.y2}
                M ${GL.x0} ${GL.y3} L ${GL.x8} ${GL.y3}
                M ${GL.x0} ${GL.y4} L ${GL.x8} ${GL.y4}
                M ${GL.x1} ${GL.y2} L ${GL.x1} ${GL.y4}
                M ${GL.x2} ${GL.y0} L ${GL.x2} ${GL.y1} M ${GL.x2} ${GL.y2} L ${GL.x2} ${GL.y4}
                M ${GL.x3} ${GL.y2} L ${GL.x3} ${GL.y4}
                M ${GL.x4} ${GL.y1} L ${GL.x4} ${GL.y4}
                M ${GL.x5} ${GL.y2} L ${GL.x5} ${GL.y4}
                M ${GL.x6} ${GL.y2} L ${GL.x6} ${GL.y4}
                M ${GL.x7} ${GL.y1} L ${GL.x7} ${GL.y4}"></path>`    
    }

    addColTitle (){
        let svg_log = document.querySelector(`svg#${this.logId}`);
        let GL = config.gridLines;

        if(svg_log.querySelector('g.colTitle')){svg_log.querySelector('g.colTitle').remove()};
        let g_colTitle=document.createElementNS(svgNS,'g');
        svg_log.appendChild(g_colTitle);
        g_colTitle.setAttribute('class', 'colTitle');
        g_colTitle.setAttribute('text-anchor', 'middle');
        // g_colTitle.setAttribute('dominant-baseline', 'middle');

        g_colTitle.innerHTML = '<text>abc</text>';
        let lineheight = g_colTitle.getBBox().height; 
        g_colTitle.innerHTML = '';
        
        //lable text
        Object.keys(config.lable.coltitle).forEach(key => {
            let text=document.createElementNS(svgNS,'text'); 
            text.innerHTML = config.lable.coltitle[key][0];
            text.setAttribute('x', `${config.lable.coltitle[key][1]}` );
            text.setAttribute('y', `${config.lable.coltitle[key][2]+lineheight/2}` );
            if (config.lable.coltitle[key][2] == (GL.y2+GL.y3)/2){
                text.setAttribute('transform', `rotate(-90 ${config.lable.coltitle[key][1]} ${config.lable.coltitle[key][2]})`);
            };
            g_colTitle.appendChild(text)
        })
    }

    updateLogo(){
        let svg_log = document.querySelector(`svg#${this.logId}`);
        let GL = config.gridLines;
        let PS = report.pageSetting;

        if(svg_log.querySelector('g.companyLogo')){svg_log.querySelector('g.companyLogo').remove()};
        let g_companyLogo=document.createElementNS(svgNS,'g'); 
            svg_log.appendChild(g_companyLogo);
            g_companyLogo.setAttribute('class', 'companyLogo')
            g_companyLogo.innerHTML = PS.logoInnerHtml;

        let logoHeight = g_companyLogo.getBBox().height
        let logoWidth = g_companyLogo.getBBox().width
        let allowedHeight = GL.y1-GL.y0-PS.contentInnerBorderPadding*2
        let allowedWidth = GL.x2-GL.x0-PS.contentInnerBorderPadding*2
        let scale = Math.min(allowedHeight/logoHeight, allowedWidth/logoWidth)
        let logoOffset_X = (GL.x2+GL.x0)*0.5 - 0.5*scale*logoWidth;
        let logoOffset_y = (GL.y1+GL.y0)*0.5 - 0.5*scale*logoHeight;
        g_companyLogo.setAttribute('transform',`translate(${logoOffset_X},${logoOffset_y}), scale(${scale})`)
    }

    updateHeader(){
        let svg_log = document.querySelector(`svg#${this.logId}`);
        let GL = config.gridLines;
        let PS = report.pageSetting;

        if(svg_log.querySelector('g.tableTitle')){svg_log.querySelector('g.tableTitle').remove()};
        let g_tableTitle=document.createElementNS(svgNS,'g');
        svg_log.appendChild(g_tableTitle);

        g_tableTitle.setAttribute('class', 'tableTitle');

        let colwidth = (GL.x8 - GL.x2 - 2*PS.contentInnerBorderPadding)/3
        let text_x1 = GL.x2 + PS.contentInnerBorderPadding;
        let text_x2 = text_x1 + colwidth   + PS.headerColOffSet[0];
        let text_x3 = text_x1 + colwidth*2 + PS.headerColOffSet[1];

        let text_y1 = GL.y0 + PS.contentInnerBorderPadding; 
        let text_y2 = GL.y1 - PS.contentInnerBorderPadding - PS.headerLineHeight*2
        let text_y3 = GL.y1 - PS.contentInnerBorderPadding - PS.headerLineHeight
        let text_y4 = GL.y1 - PS.contentInnerBorderPadding
        
        let deltax
        let g_tableTitleCol0=document.createElementNS(svgNS,'g');
        g_tableTitleCol0.setAttribute('class','tableTitleCol0');
        g_tableTitle.appendChild(g_tableTitleCol0);  
            let text_locationIdLable=document.createElementNS(svgNS,'text'); 
            g_tableTitleCol0.appendChild(text_locationIdLable)
            text_locationIdLable.setAttribute('class','dataLable');
            text_locationIdLable.setAttribute('font-size',`170%`);
            text_locationIdLable.setAttribute('font-weight','bold');
            text_locationIdLable.innerHTML = `<tspan class="locationId" x="${text_x1}" y="${text_y1}">${config.lable.locationId}</tspan>`;
            deltax = text_locationIdLable.getBBox().width + 10;
            let text_locationIdValue=document.createElementNS(svgNS,'text'); 
            g_tableTitleCol0.appendChild(text_locationIdValue)
            text_locationIdValue.setAttribute('class','dataValue');
            text_locationIdValue.setAttribute('font-size',`170%`);
            text_locationIdValue.setAttribute('font-weight','bold');
            text_locationIdValue.setAttribute('text-decoration','underline');
            text_locationIdValue.innerHTML = `<tspan class="locationId" x="${text_x1+deltax}" y="${text_y1}">${this.locationId}</tspan>`;
        g_tableTitleCol0.setAttribute('transform',`translate(0,${g_tableTitleCol0.getBBox().height})`);

        let g_tableTitleCol1=document.createElementNS(svgNS,'g');
        g_tableTitleCol1.setAttribute('class','tableTitleCol1');
        g_tableTitle.appendChild(g_tableTitleCol1);  
            let text_projectDetialLable=document.createElementNS(svgNS,'text'); 
            g_tableTitleCol1.appendChild(text_projectDetialLable)
            text_projectDetialLable.setAttribute('class','dataLable');
            text_projectDetialLable.innerHTML = `
                <tspan class="projectNo" x="${text_x1}"    y="${text_y2}">${config.lable.projectNo}</tspan>
                <tspan class="projectTitle" x="${text_x1}"    y="${text_y3}">${config.lable.projectTitle}</tspan>
                <tspan class="client" x="${text_x1}"    y="${text_y4}">${config.lable.client}</tspan>
                `;
            deltax = text_projectDetialLable.getBBox().width + 5;
            let text_projectDetialValue =document.createElementNS(svgNS,'text'); 
            g_tableTitleCol1.appendChild(text_projectDetialValue)
            text_projectDetialValue.setAttribute('class','dataValue');
            text_projectDetialValue.setAttribute('text-decoration','underline');
            text_projectDetialValue.innerHTML = `
                <tspan class="projectNo" x="${text_x1+deltax}" y="${text_y2}">${this.projectNo}</tspan>
                <tspan class="projectTitle" x="${text_x1+deltax}" y="${text_y3}">${this.projectTitle}</tspan>
                <tspan class="client" x="${text_x1+deltax}" y="${text_y4}">${this.client}</tspan>
                `;

        let g_tableTitleCol2=document.createElementNS(svgNS,'g');
        g_tableTitleCol2.setAttribute('class','tableTitleCol2');
        g_tableTitle.appendChild(g_tableTitleCol2);  
            let text_coordDetialLable=document.createElementNS(svgNS,'text'); 
            g_tableTitleCol2.appendChild(text_coordDetialLable)
            text_coordDetialLable.setAttribute('class','dataLable');
            text_coordDetialLable.innerHTML = `
                <tspan class="coordSys" x="${text_x2}"    y="${text_y2}">${config.lable.coordSys}</tspan>
                <tspan class="xCoord" x="${text_x2}"    y="${text_y3}">${config.lable.xCoord}</tspan>
                <tspan class="yCoord" x="${text_x2}"    y="${text_y4}">${config.lable.yCoord}</tspan>
                `;
            deltax = text_coordDetialLable.getBBox().width + 5;
            let text_coordDetialValue=document.createElementNS(svgNS,'text'); 
            g_tableTitleCol2.appendChild(text_coordDetialValue)
            text_coordDetialValue.setAttribute('class','dataValue');
            text_coordDetialValue.setAttribute('text-decoration','underline');
            text_coordDetialValue.innerHTML = `
                <tspan class="coordSys" x="${text_x2+deltax}" y="${text_y2}">${this.coordSys}</tspan>
                <tspan class="xCoord" x="${text_x2+deltax}" y="${text_y3}">${this.xCoord}</tspan>
                <tspan class="yCoord" x="${text_x2+deltax}" y="${text_y4}">${this.yCoord}</tspan>
                `

        let g_tableTitleCol3=document.createElementNS(svgNS,'g');
        g_tableTitleCol3.setAttribute('class','tableTitleCol3');
        g_tableTitle.appendChild(g_tableTitleCol3);  
            let text_reviewListLable=document.createElementNS(svgNS,'text'); 
            g_tableTitleCol3.appendChild(text_reviewListLable)
            text_reviewListLable.setAttribute('class','dataLable');
            text_reviewListLable.innerHTML = `
                <tspan class="loggedBy" x="${text_x3}"    y="${text_y2}">${config.lable.loggedBy}</tspan>
                <tspan class="reviewedBy" x="${text_x3}"    y="${text_y3}">${config.lable.reviewedBy}</tspan>
                <tspan class="approvedBy" x="${text_x3}"    y="${text_y4}">${config.lable.approvedBy}</tspan>
                `
            deltax = text_reviewListLable.getBBox().width + 5;
            let text_reviewListValue=document.createElementNS(svgNS,'text'); 
            g_tableTitleCol3.appendChild(text_reviewListValue)
            text_reviewListValue.setAttribute('class','dataValue');
            text_reviewListValue.setAttribute('text-decoration','underline');
            text_reviewListValue.innerHTML = `
                <tspan class="loggedBy" x="${text_x3+deltax}" y="${text_y2}">${this.loggedBy}</tspan>
                <tspan class="reviewedBy" x="${text_x3+deltax}" y="${text_y3}">${this.reviewedBy}</tspan>
                <tspan class="approvedBy" x="${text_x3+deltax}" y="${text_y4}">${this.approvedBy}</tspan>
                `
    }

    updateFooter(){
        let svg_log = document.querySelector(`svg#${this.logId}`);
        let GL = config.gridLines;
        let PS = report.pageSetting;

        if(svg_log.querySelector('g.legend')){svg_log.querySelector('g.legend').remove()};
        let g_legend=document.createElementNS(svgNS,'g');
        svg_log.appendChild(g_legend);
        g_legend.setAttribute('class', 'legend');
        g_legend.innerHTML = '<text>abc</text>';
        let lineheight = g_legend.getBBox().height; 
        g_legend.innerHTML = '';

        let colwidth = (GL.x8 - GL.x0 - 2*PS.contentInnerBorderPadding)/3
        let text_x1 = GL.x0 + PS.contentInnerBorderPadding;
        let text_x2 = text_x1 + colwidth   + PS.footerColOffSet[0];
        let text_x3 = text_x1 + colwidth*2 + PS.footerColOffSet[1];

        let text_y1 = GL.y4 + PS.contentInnerBorderPadding + lineheight/2;
        let text_y2 = text_y1 + PS.footerLineHeight;
        let text_y3 = text_y2 + PS.footerLineHeight;
        let text_y4 = text_y3 + PS.footerLineHeight*1.5;
        let text_y5 = text_y4 + PS.footerLineHeight;
        let text_y6 = text_y5 + PS.footerLineHeight;
        
        let deltax
        //Col1 lable, value, unit
        let g_legendCol1=document.createElementNS(svgNS,'g');
        g_legendCol1.setAttribute('class','legendCol1');
        g_legend.appendChild(g_legendCol1);  

            let text_legendCol1Lable=document.createElementNS(svgNS,'text'); 
            g_legendCol1.appendChild(text_legendCol1Lable)
            text_legendCol1Lable.setAttribute('class','dataLable');
            text_legendCol1Lable.innerHTML = `
            <tspan class="holeSize" x="${text_x1}" y="${text_y1}">Hole Size: </tspan>
            <tspan class="casingSize" x="${text_x1}" y="${text_y2}">Casing Size: </tspan>
            <tspan class="totalWellDepth" x="${text_x1}" y="${text_y3}">Total Well Depth: </tspan>
            `

            deltax = text_legendCol1Lable.getBBox().width; 
            let text_legendCol1Value=document.createElementNS(svgNS,'text'); 
            g_legendCol1.appendChild(text_legendCol1Value)
            text_legendCol1Value.setAttribute('class','dataValue');
            text_legendCol1Value.setAttribute('text-decoration', 'underline');
            text_legendCol1Value.setAttribute('text-anchor', 'end');
            text_legendCol1Value.innerHTML = `
            <tspan class="holeSize" x="${text_x1+deltax}" y="${text_y1}">${this.holeSize}</tspan>
            <tspan class="casingSize" x="${text_x1+deltax}" y="${text_y2}">${this.wellInstalled?this.casingSize:'N/A'}</tspan>
            <tspan class="totalWellDepth" x="${text_x1+deltax}" y="${text_y3}">${this.wellInstalled?this.totalWellDepth:'N/A'}</tspan>
            `
            deltax = text_legendCol1Value.getBBox().width + 10; 
            text_legendCol1Value.setAttribute('transform',`translate(${deltax},0)`);

            deltax = g_legendCol1.getBBox().width + 5; 
            let text_legendCol1Unit=document.createElementNS(svgNS,'text'); 
            g_legendCol1.appendChild(text_legendCol1Unit)
            text_legendCol1Unit.setAttribute('class','dataUnit');
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
            text_legendCol2Lable.innerHTML = `
            <tspan class="screenInterval" x="${text_x2}" y="${text_y1}">Screen Interval: </tspan>
            <tspan class="initialWaterLevel" x="${text_x2}" y="${text_y2}">Initial Water Level: </tspan>
            <tspan class="staticWaterLevel" x="${text_x2}" y="${text_y3}">Static Water Level: </tspan>
            `

            deltax = text_legendCol1Lable.getBBox().width + 10; 
            let text_legendCol2Value=document.createElementNS(svgNS,'text'); 
            g_legendCol2.appendChild(text_legendCol2Value)
            text_legendCol2Value.setAttribute('class','dataValue');
            text_legendCol2Value.setAttribute('text-decoration', 'underline');
            text_legendCol2Value.setAttribute('text-anchor', 'end');
            text_legendCol2Value.innerHTML = `
            <tspan class="screenInterval" x="${text_x2+deltax}" y="${text_y1}">
            <tspan class="screenIntervalFrom">${this.wellInstalled ? parseFloat(this.screenIntervalFrom).toFixed(1) : 'N/A'}</tspan> - <tspan class="screenIntervalTo">${this.wellInstalled?parseFloat(this.screenIntervalTo).toFixed(1):'N/A'}</tspan>
            </tspan>
            <tspan class="initialWaterLevel" x="${text_x2+deltax}" y="${text_y2}">${isNaN(this.initialWaterLevel)?'N/A':parseFloat(this.initialWaterLevel).toFixed(1)}</tspan>
            <tspan class="staticWaterLevel" x="${text_x2+deltax}" y="${text_y3}">${this.wellInstalled?parseFloat(this.staticWaterLevel - (this.topOfCasingElevation - this.groundElevation)).toFixed(3):'N/A'}</tspan>
            `
            deltax = text_legendCol2Value.getBBox().width + 10; 
            text_legendCol2Value.setAttribute('transform',`translate(${deltax},0)`);

            deltax = g_legendCol2.getBBox().width + 5; 
            let text_legendCol2Unit=document.createElementNS(svgNS,'text'); 
            g_legendCol2.appendChild(text_legendCol2Unit)
            text_legendCol2Unit.setAttribute('class','dataUnit');
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
            text_legendCol3Lable.innerHTML = `
            <tspan class="drilledBy" x="${text_x3}" y="${text_y1}">Drilled By: </tspan>
            <tspan class="drillDate" x="${text_x3}" y="${text_y2}">Drill Date: </tspan>
            <tspan class="drillMethod" x="${text_x3}" y="${text_y3}">Drill Method: </tspan>
            `

            deltax = text_legendCol3Lable.getBBox().width + 10; 
            let text_legendCol3Value=document.createElementNS(svgNS,'text'); 
            g_legendCol3.appendChild(text_legendCol3Value)
            text_legendCol3Value.setAttribute('class','dataValue');
            text_legendCol3Value.setAttribute('text-decoration', 'underline');
            text_legendCol3Value.innerHTML = `
            <tspan class="drilledBy" x="${text_x3+deltax}" y="${text_y1}">${this.drilledBy}</tspan>
            <tspan class="drillDate" x="${text_x3+deltax}" y="${text_y2}">NULL</tspan>
            <tspan class="drillMethod" x="${text_x3+deltax}" y="${text_y3}">${this.drillMethod}</tspan>
            `
        
        let g_note=document.createElementNS(svgNS,'g');
        g_note.setAttribute('class','note');
        g_legend.appendChild(g_note);  

            let text_note=document.createElementNS(svgNS,'text'); 
            g_note.appendChild(text_note)
            text_note.innerHTML = `
            <tspan font-weight='bold' x="${text_x1}" y="${text_y4}">Note: </tspan>
            <tspan x="${text_x1}" y="${text_y5}">m bgs = meters below ground surface</tspan>
            <tspan x="${text_x1}" y="${text_y6}">N/A = Not applicable</tspan>
            `
            let a = lineheight/2
            let g_inital=document.createElementNS(svgNS,'g');
            g_note.appendChild(g_inital)
            g_inital.setAttribute('transform',`translate(${text_x2},${text_y5-lineheight})`)
            g_inital.innerHTML = `
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5" stroke="#2F5597" fill="#FFF" d=
            "M${a},${a+2} L${0.5},${0.25*a+2} L${2*a-0.5},${0.25*a+2}Z
            M${0.5},${a+2} L${2*a-0.5},${a+2}
            M${0.4*a},${1.3*a+2} L${1.6*a},${1.3*a+2}
            M${0.7*a},${1.6*a+2} L${1.3*a},${1.6*a+2}"
            ></path>
            <text x="${1.5*lineheight}" y="${lineheight}">Initial Groundwater Level</text>
            `
            
            let g_static=document.createElementNS(svgNS,'g');
            g_note.appendChild(g_static)
            g_static.setAttribute('transform',`translate(${text_x2},${text_y6-lineheight})`)
            g_static.innerHTML = `
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5" stroke="#2F5597" fill="#2F5597" d=
            "M${a},${a+2} L${0.5},${0.25*a+2} L${2*a-0.5},${0.25*a+2}Z
            M${0.5},${a+2} L${2*a-0.5},${a+2}
            M${0.4*a},${1.3*a+2} L${1.6*a},${1.3*a+2}
            M${0.7*a},${1.6*a+2} L${1.3*a},${1.6*a+2}"
            ></path>
            <text x="${1.5*lineheight}" y="${lineheight}">Static Groundwater Level</text>
            `
    }

    updateAxis (){
        console.log(`update Axis of ${this.logId}`)
        let svg_log = document.querySelector(`svg#${this.logId}`);
        let GL = config.gridLines;
        let maxTrickDepth = this.maxTrickDepth;
        let majorTrick = this.majorTrick;

        if(svg_log.querySelector('g.axis')){svg_log.querySelector('g.axis').remove()};
        let g_axis = document.createElementNS(svgNS, 'g');
        svg_log.appendChild(g_axis)
        g_axis.setAttribute('class', 'axis')

        g_axis.innerHTML = '<text>abc</text>';
        let lineheight = g_axis.getBBox().height; 
        g_axis.innerHTML = '';

        let minorTrick = majorTrick/10;

        for (let i=0, tricks = Math.floor(maxTrickDepth/minorTrick); i<tricks+1; i++){
            if (i % 10) {//minorTrick) % majorTrick){
                let path = document.createElementNS(svgNS, 'path');
                let doubleTrick = i%5==0 ? 1: 0;
                let path_x = GL.x1-(GL.x1-GL.x0)*0.125*(1+doubleTrick);
                let path_y = config.convertMbgsToPxy (tricks, i);
                path.setAttribute('d', `M ${path_x} ${path_y} L ${GL.x1} ${path_y}`)
                path.setAttribute('stroke-width', 0.5)
                path.setAttribute('fill', 'none')
                path.setAttribute('stroke', 'black')
                g_axis.appendChild(path)
            } else {
                let path = document.createElementNS(svgNS, 'path');
                let path_x = GL.x1-(GL.x1-GL.x0)*1;
                let path_y = config.convertMbgsToPxy (tricks, i);
                path.setAttribute('d', `M ${path_x} ${path_y} L ${GL.x1} ${path_y}`)
                path.setAttribute('stroke-width', 0.5)
                path.setAttribute('fill', 'none')
                path.setAttribute('stroke', 'black')
                g_axis.appendChild(path)
                let text=document.createElementNS(svgNS,'text'); 
                text.innerHTML = (i * minorTrick).toFixed(3);
                text.setAttribute('x', `${(GL.x0+GL.x1)/2}` );//path_x - 2
                text.setAttribute('y', `${path_y+lineheight}` );
                text.setAttribute('text-anchor', 'middle' );
                g_axis.appendChild(text)
            }
        }

        var text=document.createElementNS(svgNS,'text'); 
        text.innerHTML = 'GROUND SURFACE';
        text.setAttribute('x', `${(GL.x2+GL.x3)/2}` );
        text.setAttribute('y', `${config.convertMbgsToPxy(maxTrickDepth, 0)-3}` );
        text.setAttribute('text-anchor', 'middle' );
        g_axis.appendChild(text)
    }

    updateSubsurfaceProfile (){
        let svg_log = document.querySelector(`svg#${this.logId}`);
        if(svg_log.querySelector('g.subsurfaceProfile')){svg_log.querySelector('g.subsurfaceProfile').remove()};

        if (this.subsurfaceProfile.length == 0) {return 0} 
        let GL = config.gridLines;
        let PS = report.pageSetting;

        let g_subsurfaceProfile = document.createElementNS(svgNS, 'g');
            svg_log.appendChild(g_subsurfaceProfile);
            g_subsurfaceProfile.setAttribute('class', 'subsurfaceProfile');

            g_subsurfaceProfile.innerHTML = '<text>abc</text>';
            let lineheight = g_subsurfaceProfile.getBBox().height;      
            g_subsurfaceProfile.innerHTML =``;

        let patternDefs = document.createElementNS(svgNS,'defs');
        svg_log.appendChild(patternDefs);

        let minDepth_y = GL.y3 + (GL.y4-GL.y3)*PS.headSpace;//7.5% height of description col will be blank 
        let usedSpace_y = -8;

        this.subsurfaceProfile.forEach((record,index)=>{

            let depthFrom = parseFloat(record[0]);
            let depthTo = parseFloat(record[1]);
            let materialType = record[2];
            let description = record[3];
            if(isNaN(depthFrom)||isNaN(depthTo)||depthFrom<0||depthTo<0){
                return;
            }

            let g_record = document.createElementNS(svgNS, 'g');
            g_subsurfaceProfile.appendChild(g_record);
            g_record.setAttribute('class',`layer${index+1}`);
            
            let record_y = (GL.y4-GL.y3)*0.85 / this.maxTrickDepth * depthFrom;
            let record_y2 = (GL.y4-GL.y3)*0.85 / this.maxTrickDepth * depthTo;
            let adjusted_y = Math.max(record_y, usedSpace_y + PS.descriptionLineHeight/2);


            let patternCode = record[2].replace(' ','').toLowerCase();
            patternDefs.appendChild(pattern.get(patternCode));
            let path_symbol = document.createElementNS(svgNS, 'path');
            g_record.appendChild(path_symbol);
            path_symbol.setAttribute('stroke', 'none');
            path_symbol.setAttribute('fill', `url(#${patternCode})`);
            path_symbol.setAttribute('opacity', '0.99');
            path_symbol.setAttribute('d', `M ${GL.x1+1} ${minDepth_y+record_y+1} L ${GL.x2-1} ${minDepth_y+record_y+1} L ${GL.x2-1} ${minDepth_y+record_y2-1} L ${GL.x1+1} ${minDepth_y+record_y2-1}`);

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
            text_depth.setAttribute('y', `${minDepth_y+adjusted_y+lineheight}` );
            text_depth.setAttribute('text-anchor', 'middle' );

            if (this.wellInstalled && !isNaN(this.groundElevation) && this.groundElevation !=''){
                let text_elev=document.createElementNS(svgNS,'text'); 
                g_record.appendChild(text_elev);
                text_elev.innerHTML = (this.groundElevation-depthFrom).toFixed(3);
                text_elev.setAttribute('x', `${(GL.x3+GL.x4)/2}` );
                text_elev.setAttribute('y', `${minDepth_y+adjusted_y-3}` );
                text_elev.setAttribute('text-anchor', 'middle' );
            }

            let g_record_des = document.createElementNS(svgNS, 'g');
            g_record.appendChild(g_record_des);

                let line1y = minDepth_y+adjusted_y+PS.descriptionLineHeight/2+lineheight
                let line1x = GL.x2+8

                let text_materialType = document.createElementNS(svgNS, 'text');
                g_record_des.appendChild(text_materialType);

                text_materialType.innerHTML = `
                <tspan font-weight='bold' x="${line1x}" y="${line1y}">${materialType}, ${depthFrom.toFixed(2)} - ${depthTo.toFixed(2)} m bgs;</tspan>
                <tspan x="${line1x}" y="${line1y + PS.descriptionLineHeight}"></tspan>`;

                let lineCount = 1
                description.split(' ').forEach(word =>{
                    let cache = text_materialType.innerHTML.slice(0,-8);
                    text_materialType.innerHTML = cache + (word + ' ');
                    if (g_record_des.getBBox().width > (GL.x3-GL.x2-24)||(word.indexOf('\n')!=-1)){
                        lineCount ++;
                        text_materialType.innerHTML = cache + `</tspan>
                        <tspan x="${line1x}" y="${line1y + lineCount * PS.descriptionLineHeight}">
                        ` + word + ' </tspan>'
                    }
                })

            usedSpace_y = adjusted_y + g_record_des.getBBox().height + PS.descriptionLineHeight/2+lineheight/2

            if (index == this.subsurfaceProfile.length-1) {

                let record_y = (GL.y4-GL.y3)*0.85 / this.maxTrickDepth * depthTo;
                let adjusted_y = Math.max(record_y, usedSpace_y + PS.descriptionLineHeight/2);

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
                text_depth.setAttribute('y', `${minDepth_y+adjusted_y+lineheight}` );
                text_depth.setAttribute('text-anchor', 'middle' );
        
                if (this.wellInstalled && !isNaN(this.groundElevation) && this.groundElevation !=''){
                    let text_elev=document.createElementNS(svgNS,'text'); 
                    g_record.appendChild(text_elev);
                    text_elev.innerHTML = (this.groundElevation-depthTo).toFixed(3);
                    text_elev.setAttribute('x', `${(GL.x3+GL.x4)/2}` );//path_x - 2
                    text_elev.setAttribute('y', `${minDepth_y+adjusted_y-3}` );
                    text_elev.setAttribute('text-anchor', 'middle' );
                }

                var text=document.createElementNS(svgNS,'text'); 
                text.innerHTML = 'END of BOREHOLE';
                text.setAttribute('x', `${(GL.x2+GL.x3)/2}` );
                text.setAttribute('y', `${minDepth_y+adjusted_y+lineheight}` );
                text.setAttribute('text-anchor', 'middle' );
                g_record.appendChild(text)
            }
        })
    }

    updateSoilSample () {
        if (this.soilSample.length == 0) {return 0} 
        let svg_log = document.querySelector(`svg#${this.logId}`);
        let GL = config.gridLines;
    
        if(svg_log.querySelector('g.soilSample')){svg_log.querySelector('g.soilSample').remove()};     
        let g_soilSample = document.createElementNS(svgNS, 'g');
        svg_log.appendChild(g_soilSample);
        g_soilSample.setAttribute('class', 'soilSample')
        g_soilSample.setAttribute('text-anchor', 'middle');
        g_soilSample.setAttribute('dominant-baseline', 'middle');
    
        this.soilSample.forEach(record=>{
                  
            let depthFrom = parseFloat(record[0]);
            let depthTo = parseFloat(record[1]);
            let sampleID = record[2];
            let pid = parseFloat(record[3]);
            let lab = record[4]?'√':'';
            
            let record_y = config.convertMbgsToPxy (this.maxTrickDepth, (depthTo+depthFrom) * 0.5)
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

    updateWellDetail () {

        if(this.bentoniteSealingDepth == '' || this.totalWellDepth == '' || this.screenIntervalFrom == '' || this.screenIntervalTo == '' ||
            isNaN(this.bentoniteSealingDepth) || isNaN(this.totalWellDepth) || isNaN(this.screenIntervalFrom) || isNaN(this.screenIntervalTo)){
                return 0; }

        let svg_log = document.querySelector(`svg#${this.logId}`);
        let GL = config.gridLines;
    
        if(svg_log.querySelector('g.wellDetail')){svg_log.querySelector('g.wellDetail').remove()};  
        if(!this.wellInstalled) {return 0}
        let g_wellDetail = document.createElementNS(svgNS, 'g');
        svg_log.appendChild(g_wellDetail);
        g_wellDetail.setAttribute('class','wellDetail'); 

    
        g_wellDetail.innerHTML = 
       `<defs>
        <marker id="marker-arrow" markerWidth="12" markerHeight="6" refX="10" refY="3" orient="auto">
            <path d="M0,0 L12,3 L0,6Z" fill='#000'/>
        </marker>
        <pattern id="pattern-screen" x="0" y="0" width="5" height="4" patternUnits="userSpaceOnUse">
            <path d="M 0 2 L 5 2" stroke-width="0.5" stroke="#888"/>
        </pattern>
        <pattern id="pattern-steel" x="0" y="0" width="3" height="3" patternUnits="userSpaceOnUse">
            <rect width="3" height="3" fill='#CCC'/>
            <path d="M0,1.5 L1.5,3 M1.5,0 L3,1.5" stroke-width="0.25" stroke="#000"/>
        </pattern>    
        <pattern id="pattern-ben" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
            <rect width="4" height="4" fill='#FFF'/>
            <path d="M0,2 L2,4 L4,2 L2,0 Z" stroke-width="0.25" stroke="#000" fill='white'></path>
        </pattern>
        <pattern id="pattern-concrete" x="0" y="0" width="24" height="20" viewbox='0 0 48 48' patternUnits="userSpaceOnUse">
            <rect width="48" height="48" fill='#FFF'stroke="#FFF"/>
            <path path d="M47,47l-3,-0.5l3,-2.5z M31,38l-4,0.2l1.5,-2.5z M30,15l-2,0.8l-2.5,-2z M34,9l-4,0.1l2.5,-2z M3,4l-2.5,0.5l0.1,-2z M13,4l-2.5,0l0.5,-2z M9,28l-2.5,-1l1.4,-2z M5,37l-2.5,1l2,-4z M24,24l-2.5,1l-1,-4z 
            M5,42l-0.5,1 M18,45l1,-2 M40,44l-1,-1 M12,16l0,-1.5 M18,32l-0.5,-1.5 M38,32l0.5,-2 M47,32l-0.5,-1 M43,24l0,-1.5 M40,12l0,-1.5 M44,8l-0.5,-1.5 M30,2l-0.5,-1.5 M20,10l0.5,-1.5 M2,18l0.5,-1.5 M35,24l-2,-3.5"
            stroke-linecap="square" stroke-width="1" stroke="#000" fill='#000' stroke-linejoin="round"/>
        </pattern>    
        <pattern id="pattern-silica" x="0" y="0" width="4" height="4" viewbox='0 0 10 10' stroke-width="0.5" stroke="#000" fill='#888' patternUnits="userSpaceOnUse">
            <circle cx="0" cy="0" r="0.5"/>
            <circle cx="10" cy="0" r="0.5"/>
            <circle cx="0" cy="10" r="0.5"/>
            <circle cx="10" cy="10" r="0.5"/>
            <circle cx="5" cy="5" r="0.5"/>
        </pattern>
        </defs>
        `
        let xZero = (GL.x7+GL.x8)/2;
        let yZero = config.convertMbgsToPxy(1,0);
        let unitL = (GL.x8-GL.x7) /9 / 2; //1/9 col width->casing size, 1/2 casing size ->unit lenth
        let yBentonite = config.convertMbgsToPxy(this.maxTrickDepth, this.bentoniteSealingDepth);
        let yWellDepth = config.convertMbgsToPxy(this.maxTrickDepth, this.totalWellDepth);
        let yScreenFrom = config.convertMbgsToPxy(this.maxTrickDepth, this.screenIntervalFrom);
        let yScreenTo = config.convertMbgsToPxy(this.maxTrickDepth, this.screenIntervalTo);
    
        let g_backfill = document.createElementNS(svgNS, 'g');
        g_wellDetail.appendChild(g_backfill);
        g_backfill.setAttribute('class','backfill');
        g_backfill.setAttribute('stroke-width', 0.5);
        g_backfill.innerHTML = `
            <path class="bentoniteSealing" stroke="none" fill="url(#pattern-ben)" opacity='0.99' d=
            "M${xZero-3*unitL},${yZero} L${xZero-3*unitL},${yBentonite}
            L${xZero+3*unitL},${yBentonite} ${xZero+3*unitL},${yZero}">
            </path>
            <path class="silicaSand" stroke="none" fill="url(#pattern-silica)" opacity='0.99' d=
            "M${xZero-3*unitL},${yBentonite} L${xZero-3*unitL},${yWellDepth+unitL}
            L${xZero+3*unitL},${yWellDepth+unitL} L${xZero+3*unitL},${yBentonite}">
            </path>
            <path class="bentoniteSealing" stroke="black" fill="none" d=
            "M${xZero-3*unitL},${yZero} L${xZero-3*unitL},${yBentonite}
            L${xZero+3*unitL},${yBentonite} ${xZero+3*unitL},${yZero}">
            </path>
            <path class="silicaSand" stroke="black" fill="none" d=
            "M${xZero-3*unitL},${yBentonite} L${xZero-3*unitL},${yWellDepth+unitL}
            L${xZero+3*unitL},${yWellDepth+unitL} L${xZero+3*unitL},${yBentonite}">
            </path>
            `
        let screen_d = ''
        for(let i=yScreenFrom; i<=yScreenTo; i+=5){
            screen_d = screen_d + `M${xZero-unitL+2},${i} L${xZero+unitL-2},${i} `
        }
    
        let g_casing = document.createElementNS(svgNS, 'g');
        g_wellDetail.appendChild(g_casing);
        g_casing.setAttribute('class','casing');
        // g_casing.setAttribute('stroke-width', 0.5);
        // g_casing.setAttribute('stroke', "#000");
        g_casing.innerHTML = `
            <path class="casingUncapped" fill="white" stroke="#000" stroke-width='0.5' d=
            "M${xZero-unitL},${yZero} L${xZero-unitL},${yWellDepth}L${xZero+unitL},${yWellDepth} L${xZero+unitL},${yZero}">
            </path>
            <path class="screen" d="${screen_d}" stroke="#aaa" stroke-width='0.5'</path>
            `
        let g_wellHead = document.createElementNS(svgNS, 'g');
        g_wellDetail.appendChild(g_wellHead);
        g_wellHead.setAttribute('class','wellHead');
        g_wellHead.setAttribute('stroke-width', 0.5);
        switch(this.wellHead){
            case 'Protective Standpipe': 
                g_wellHead.innerHTML = `
                <path class="concretepattern" stroke="none" fill="url(#pattern-concrete)"  opacity='0.99' d=
                "M${xZero-5*unitL},${yZero-1*unitL} L${xZero-5*unitL},${yZero+0*unitL} L${xZero-1*unitL},${yZero+0.5*unitL}
                L${xZero+1*unitL},${yZero+0.5*unitL} L${xZero+5*unitL},${yZero+0*unitL} L${xZero+5*unitL},${yZero-1*unitL}Z">
                </path>
                <path class="concrete" stroke="black" fill="none" d=
                "M${xZero-5*unitL},${yZero-1*unitL} L${xZero-5*unitL},${yZero+0*unitL} L${xZero-1*unitL},${yZero+0.5*unitL}
                L${xZero+1*unitL},${yZero+0.5*unitL} L${xZero+5*unitL},${yZero+0*unitL} L${xZero+5*unitL},${yZero-1*unitL}Z">
                </path>
                <path class="groundsurface" stroke="black" d=
                "M${xZero-9*unitL},${yZero} L${xZero-5*unitL},${yZero-0*unitL} M${xZero+9*unitL},${yZero} L${xZero+5*unitL},${yZero-0*unitL}">
                </path>
                <path class="manHoleSteelpattern" stroke="none" fill="url(#pattern-steel)"  opacity='0.99'  d=
                "M${xZero-2.*unitL},${yZero} L${xZero-2.*unitL},${yZero-5.*unitL} L${xZero+2.*unitL},${yZero-5.*unitL} L${xZero+2.*unitL},${yZero} 
                L${xZero+1.8*unitL},${yZero} L${xZero+1.8*unitL},${yZero-5*unitL} L${xZero-1.8*unitL},${yZero-5*unitL} L${xZero-1.8*unitL},${yZero}Z">
                </path>
                <path class="manHoleSteel" stroke="black" fill="none"  d=
                "M${xZero-2.*unitL},${yZero} L${xZero-2.*unitL},${yZero-5.*unitL} L${xZero+2.*unitL},${yZero-5.*unitL} L${xZero+2.*unitL},${yZero} 
                L${xZero+1.8*unitL},${yZero} L${xZero+1.8*unitL},${yZero-5*unitL} L${xZero-1.8*unitL},${yZero-5*unitL} L${xZero-1.8*unitL},${yZero}Z">
                </path>
                <path class="manHoleCover" stroke="none" fill="url(#pattern-steel)"  opacity='0.99' d=
                "M${xZero-1.9*unitL},${yZero-4.8*unitL} L${xZero-2.1*unitL},${yZero-5*unitL} L${xZero-2.1*unitL},${yZero-5.2*unitL}
                L${xZero+2.1*unitL},${yZero-5.2*unitL} L${xZero+2.1*unitL},${yZero-5*unitL} L${xZero+1.9*unitL},${yZero-4.8*unitL}Z">
                </path>
                <path class="manHoleCover" stroke="black" fill="none" d=
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
                <text x=${xZero-6.5*unitL} y=${yZero-4*unitL} transform="rotate(-90 ${xZero-6.5*unitL} ${yZero-4*unitL})" text-anchor='end' font-size='70%' paint-order="stroke" stroke="#FFF" stroke-width="3">
                Protective Standpipe
                </text>
                `
                break;
            case 'Flush-Mounted Manhole': 
                g_wellHead.innerHTML = `
                <path class="whiteBackg" stroke="white" fill="white" d=
                "M${xZero-3*unitL-1},${yZero+2.5*unitL} L${xZero-3*unitL-1},${yZero-0.25*unitL} L${xZero+3*unitL+1},${yZero-0.25*unitL} L${xZero+3*unitL+1},${yZero+2.5*unitL}">
                </path>
                <path class="concrete" stroke="none" fill="url(#pattern-concrete)" opacity='0.99' d=
                "M${xZero-3*unitL},${yZero+1.5*unitL} L${xZero-3*unitL},${yZero-0.5*unitL} L${xZero-5*unitL},${yZero-0.25*unitL} L${xZero-5*unitL},${yZero+0.25*unitL} L${xZero-4*unitL},${yZero+0.5*unitL} L${xZero-3.5*unitL},${yZero+2.5*unitL}
                L${xZero+3.5*unitL},${yZero+2.5*unitL} L${xZero+4*unitL},${yZero+0.5*unitL} L${xZero+5*unitL},${yZero+0.25*unitL} L${xZero+5*unitL},${yZero-0.25*unitL} L${xZero+3*unitL},${yZero-0.5*unitL} L${xZero+3*unitL},${yZero+1.5*unitL}Z">
                </path>
                <path class="concrete" stroke="black" fill="none" d=
                "M${xZero-3*unitL},${yZero+1.5*unitL} L${xZero-3*unitL},${yZero-0.5*unitL} L${xZero-5*unitL},${yZero-0.25*unitL} L${xZero-5*unitL},${yZero+0.25*unitL} L${xZero-4*unitL},${yZero+0.5*unitL} L${xZero-3.5*unitL},${yZero+2.5*unitL}
                L${xZero+3.5*unitL},${yZero+2.5*unitL} L${xZero+4*unitL},${yZero+0.5*unitL} L${xZero+5*unitL},${yZero+0.25*unitL} L${xZero+5*unitL},${yZero-0.25*unitL} L${xZero+3*unitL},${yZero-0.5*unitL} L${xZero+3*unitL},${yZero+1.5*unitL}Z">
                </path>
                <path class="groundsurface" stroke="black" d=
                "M${xZero-9*unitL},${yZero} L${xZero-5*unitL},${yZero-0*unitL} M${xZero+9*unitL},${yZero} L${xZero+5*unitL},${yZero-0*unitL}">
                </path>
                <path class="manHoleSteel" stroke="none" fill="url(#pattern-steel)" opacity='0.99' d=
                "M${xZero-4*unitL},${yZero-0.5*unitL} L${xZero-4*unitL},${yZero} L${xZero-3.5*unitL},${yZero} L${xZero-3.25*unitL},${yZero+2*unitL} L${xZero-3*unitL},${yZero+2*unitL} L${xZero-3*unitL},${yZero-0.5*unitL}
                L${xZero+3*unitL},${yZero-0.5*unitL} L${xZero+3*unitL},${yZero+2*unitL} L${xZero+3.25*unitL},${yZero+2*unitL} L${xZero+3.5*unitL},${yZero} L${xZero+4*unitL},${yZero} L${xZero+4*unitL},${yZero-0.5*unitL}Z">
                </path>
                <path class="manHoleSteel" stroke="black" fill="none"  d=
                "M${xZero-4*unitL},${yZero-0.5*unitL} L${xZero-4*unitL},${yZero} L${xZero-3.5*unitL},${yZero} L${xZero-3.25*unitL},${yZero+2*unitL} L${xZero-3*unitL},${yZero+2*unitL} L${xZero-3*unitL},${yZero-0.5*unitL}
                L${xZero+3*unitL},${yZero-0.5*unitL} L${xZero+3*unitL},${yZero+2*unitL} L${xZero+3.25*unitL},${yZero+2*unitL} L${xZero+3.5*unitL},${yZero} L${xZero+4*unitL},${yZero} L${xZero+4*unitL},${yZero-0.5*unitL}Z">
                </path>
                <path class="manHoleCover" stroke="none" fill="url(#pattern-steel)" opacity='0.99' d=
                "M${xZero-3.25*unitL},${yZero-0.6*unitL} L${xZero-3.25*unitL},${yZero-0.25*unitL} L${xZero+3.25*unitL},${yZero-0.25*unitL} L${xZero+3.25*unitL},${yZero-0.6*unitL}Z">
                </path>
                <path class="manHoleCover" stroke="black" fill="none" d=
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
                <text x=${xZero-6.5*unitL} y=${yZero-4*unitL} transform="rotate(-90 ${xZero-6.5*unitL} ${yZero-4*unitL})" text-anchor='end' font-size='70%' paint-order="stroke" stroke="#FFF" stroke-width="3">
                Flush-mounted Manhole
                </text>
                `
                break;
            case 'None':
                g_wellHead.innerHTML = `
                <path class="groundsurface" stroke="black" d=
                "M${xZero-9*unitL},${yZero} L${xZero-3.5*unitL},${yZero} M${xZero+9*unitL},${yZero} L${xZero+3.5*unitL},${yZero}">
                </path>
                <path class="bentoniteSealing" stroke="none" fill="url(#pattern-ben)" opacity='0.99' d=
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
                Q${xZero+3*unitL},${yZero-0*unitL} ${xZero+3*unitL},${yZero+1*unitL}  ">
                </path>
                <path class="bentoniteSealing" stroke="black" fill="none"  d=
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
                Q${xZero+3*unitL},${yZero-0*unitL} ${xZero+3*unitL},${yZero+1*unitL}  ">
                </path>
                <path class="casing" fill="white" stroke="#000" d=
                "M${xZero-unitL},${yZero+unitL} L${xZero-unitL},${yZero-3*unitL} L${xZero+unitL},${yZero-3*unitL} L${xZero+unitL},${yZero+unitL}">
                </path>
                <path class="casingPvcCap" fill="white" stroke="#000" d=
                "M${xZero-unitL-1.5},${yZero-3*unitL} L${xZero-unitL-1.5},${yZero+3-4*unitL} Q${xZero-unitL-1.5},${yZero-4*unitL} ${xZero-3},${yZero-4*unitL} 
                L${xZero+3},${yZero-4*unitL} Q${xZero+unitL+1.5},${yZero-4*unitL} ${xZero+unitL+1.5},${yZero+3-4*unitL} L${xZero+unitL+1.5},${yZero-3*unitL}Z">
                </path>
                `
            default:
                break
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
            g_lable.setAttribute('font-size', `80%`);
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

    updateWaterLevel () {
        let svg_log = document.querySelector(`svg#${this.logId}`);
        let GL = config.gridLines;
        if(svg_log.querySelector('g.waterLevel')){svg_log.querySelector('g.waterLevel').remove()};
        
        let g_waterLevel = document.createElementNS(svgNS, 'g');
        svg_log.appendChild(g_waterLevel);
        g_waterLevel.setAttribute('class','waterLevel');
    
        let xZero = (GL.x7+GL.x8)/2; //central line
        let unitL = (GL.x8-GL.x7) /9 / 2; //1/9 col width->casing size, 1/2 casing size ->unit lenth

        if (!isNaN(this.initialWaterLevel)&&this.initialWaterLevel!=''){
            let inital = config.convertMbgsToPxy(this.maxTrickDepth, this.initialWaterLevel);
            if(inital){
                let g_inital = document.createElementNS(svgNS, 'g');
                g_waterLevel.appendChild(g_inital);
                g_inital.setAttribute('class','initialWaterLevel');
                g_inital.setAttribute('stroke-width', 0.5);
                g_inital.innerHTML = `
                <path class="initialWaterLevel-bg" stroke="#FFF" fill="#FFF" stroke-width="2.0" stroke-linecap="round" stroke-linejoin="round" d=
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
        }

        if(!this.wellInstalled) {return 0}
        if (!isNaN(this.staticWaterLevel)&&this.staticWaterLevel!=''){
            let staticlevel = config.convertMbgsToPxy(this.maxTrickDepth, this.staticWaterLevel-(this.topOfCasingElevation-this.groundElevation));
            if(staticlevel){
                let g_static = document.createElementNS(svgNS, 'g');
                g_waterLevel.appendChild(g_static);
                g_static.setAttribute('class','staticlWaterLevel');
                // g_static.setAttribute('stroke-width', 0.5);
                g_static.innerHTML = `
                <path class="staticlWaterLevel-bg" stroke="#FFF" fill="#FFF" stroke-width="2.0" stroke-linecap="round" stroke-linejoin="round"d=
                "M${xZero},${staticlevel} L${xZero-unitL+1},${staticlevel-0.75*unitL} L${xZero+unitL-1},${staticlevel-0.75*unitL}Z
                M${xZero-unitL+1},${staticlevel} L${xZero+unitL-1},${staticlevel}
                M${xZero-0.6*unitL},${staticlevel+0.3*unitL} L${xZero+0.6*unitL},${staticlevel+0.3*unitL}
                M${xZero-0.3*unitL},${staticlevel+0.6*unitL} L${xZero+0.3*unitL},${staticlevel+0.6*unitL}
                "></path>
                <path class="staticlWaterLevel-fg" stroke="#2F5597" fill="#2F5597" stroke-width="0.5" d=
                "M${xZero},${staticlevel} L${xZero-unitL+1.5},${staticlevel-0.75*unitL} L${xZero+unitL-1.5},${staticlevel-0.75*unitL}Z
                M${xZero-unitL+1},${staticlevel} L${xZero+unitL-1},${staticlevel}
                M${xZero-0.6*unitL},${staticlevel+0.3*unitL} L${xZero+0.6*unitL},${staticlevel+0.3*unitL}
                M${xZero-0.3*unitL},${staticlevel+0.6*unitL} L${xZero+0.3*unitL},${staticlevel+0.6*unitL}
                "></path>
                `
            }
        }
    }

    propertyValidator(){

    }

    profileValidator(){
        let errorCount = 0
        this.soilDescriber.forEach((record, index) =>{
            if (index==0){
                if (parseFloat(record[0]) != 0){
                    errorCount ++
                    soilDescriber.children(index).querySelector('input.depthFrom').setAttribute('validation',"invalid")
                }
            }

        })
    }

    sampleValidator(){
        
    }
}

const pattern = {
    fill:  `
        <pattern id="fill" 
            x="0" y="0" width="12" height="12" 
            viewbox='0 0 20 20' patternUnits="userSpaceOnUse" 
            stroke-linecap="square" stroke-width="0.3" stroke="#000" fill='none' stroke-linejoin="round">
            <path d="M10,0L0,10L10,20L20,10Z M20,20L0,0 M20,0L0,20"/>
        </pattern>`,
    fill1:  `
        <pattern id="fill1" 
            x="0" y="0" width="12" height="12" 
            viewbox='0 0 24 24' patternUnits="userSpaceOnUse" 
            stroke-linecap="square" stroke-width="0.5" stroke="#000" fill='none' stroke-linejoin="round">
            <path d=" M1,1l4,0M1,1l3,3M1,1l0,4 
            M1,9l4,0M1,9l3,3M1,9l0,4 
            M1,17l4,0M1,17l3,3M1,17l0,4
            M9,1l4,0M9,1l3,3M9,1l0,4 
            M9,9l4,0M9,9l3,3M9,9l0,4 
            M9,17l4,0M9,17l3,3M9,17l0,4
            M17,1l4,0M17,1l3,3M17,1l0,4 
            M17,9l4,0M17,9l3,3M17,9l0,4 
            M17,17l4,0M17,17l3,3M17,17l0,4"/>
        </pattern>`,
    brick:` 
        <pattern id="brick" 
            x="0" y="0" width="18" height="18" 
            viewbox='0 0 24 24' patternUnits="userSpaceOnUse" 
            stroke-linecap="square" stroke-width="0.5" stroke="#000" fill='none' stroke-linejoin="round">
            <path d="M0,24L24,0M0,8L8,0M0,16L16,0M8,24L24,8M16,24L24,16M0,0l4,4M8,0l4,4M0,8l4,4M16,0l4,4M16,8l4,4M8,8l4,4M0,16l4,4M8,16l4,4M16,16l4,4"/>
        </pattern>`,
    clay:`  
        <pattern id="clay" 
            x="0" y="0" width="12" height="12" 
            viewbox='0 0 24 24' patternUnits="userSpaceOnUse" 
            stroke-linecap="square" stroke-width="0.5" stroke="#000" fill='none' stroke-linejoin="round">
            <path d="M0,24L24,0M0,8L8,0M0,16L16,0M8,24L24,8M16,24L24,16"/>
        </pattern>`,
    siltyclay:`
        <pattern id="siltyclay" 
            x="0" y="0" width="12" height="12" 
            viewbox='0 0 24 24' patternUnits="userSpaceOnUse" 
            stroke-linecap="square" stroke-width="0.5" stroke="#000" fill='none' stroke-linejoin="round">
            <path d="M0,8L8,0 M0,16L16,0 M0,24L4,20 M8,16L12,12 M16,8L20,4 M8,24L24,8 M16,24L24,16"/>
        </pattern>`,
    clayeysilt:`
        <pattern id="clayeysilt" 
            x="0" y="0" width="12" height="12" 
            viewbox='0 0 24 24' patternUnits="userSpaceOnUse" 
            stroke-linecap="square" stroke-width="0.5" stroke="#000" fill='none' stroke-linejoin="round">
            <path d="M0,8L4,4  M0,16L4,12 M8,8L12,4 M0,24L24,0 M8,24L12,20 M16,16L20,12 M16,24L20,20"/>
        </pattern>`,
    silt:`
        <pattern id="silt" 
            x="0" y="0" width="12" height="12" 
            viewbox='0 0 24 24' patternUnits="userSpaceOnUse" 
            stroke-linecap="square" stroke-width="0.5" stroke="#000" fill='none' stroke-linejoin="round">
            <path d="M0,8L4,4 M0,16L4,12 M8,8L12,4 M0,24L4,20 M8,16L12,12 M16,8L20,4 M8,24L12,20 M16,16L20,12 M16,24L20,20"/>
        </pattern>`,
	sandysilt:`
        <pattern id="sandysilt" 
            x="0" y="0" width="12" height="12" 
            viewbox='0 0 24 24' patternUnits="userSpaceOnUse" 
            stroke-linecap="square" stroke-width="0.5" stroke="#000" fill='none' stroke-linejoin="round">
            <path d="M0,8L4,4 M0,16L4,12 M8,8L12,4 M8,24L12,20 M16,16L20,12 M16,24L20,20"/>	
            <circle cx="0" cy="0" r="0.5"/>
            <circle cx="0" cy="24" r="0.5"/>
            <circle cx="4" cy="20" r="0.5"/>
            <circle cx="8" cy="16" r="0.5"/>
            <circle cx="12" cy="12" r="0.5"/>
            <circle cx="16" cy="8" r="0.5"/>
            <circle cx="20" cy="4" r="0.5"/>
            <circle cx="24" cy="0" r="0.5"/>
            <circle cx="24" cy="24" r="0.5"/>
        </pattern>`,
	siltysand:`
        <pattern id="siltysand" 
            x="0" y="0" width="12" height="12" 
            viewbox='0 0 24 24' patternUnits="userSpaceOnUse" 
            stroke-linecap="square" stroke-width="0.5" stroke="#000" fill='none' stroke-linejoin="round">
            <path d="M0,24L4,20 M8,16L12,12 M16,8L20,4"/>
            <circle cx="0" cy="8" r="0.5"/>
            <circle cx="0" cy="16" r="0.5"/>
            <circle cx="4" cy="4" r="0.5"/>
            <circle cx="4" cy="12" r="0.5"/>
            <circle cx="8" cy="0" r="0.5"/>
            <circle cx="8" cy="8" r="0.5"/>
            <circle cx="8" cy="24" r="0.5"/>
            <circle cx="12" cy="4" r="0.5"/>
            <circle cx="12" cy="20" r="0.5"/>
            <circle cx="16" cy="0" r="0.5"/>
            <circle cx="16" cy="16" r="0.5"/>
            <circle cx="16" cy="24" r="0.5"/>
            <circle cx="20" cy="12" r="0.5"/>
            <circle cx="20" cy="20" r="0.5"/>
            <circle cx="24" cy="8" r="0.5"/>
            <circle cx="24" cy="16" r="0.5"/>
        </pattern>`,
	coarsesand:`
        <pattern id="coarsesand" 
            x="0" y="0" width="18" height="18" 
            viewbox='0 0 24 24' patternUnits="userSpaceOnUse" 
            stroke-linecap="square" stroke-width="0.5" stroke="#000" fill='none' stroke-linejoin="round">
            <circle cx="0" cy="0" r="1.5"/>
            <circle cx="0" cy="8" r="1.5"/>
            <circle cx="0" cy="16" r="1.5"/>
            <circle cx="0" cy="24" r="1.5"/>
            <circle cx="4" cy="4" r="1.5"/>
            <circle cx="4" cy="12" r="1.5"/>
            <circle cx="4" cy="20" r="1.5"/>
            <circle cx="8" cy="0" r="1.5"/>
            <circle cx="8" cy="8" r="1.5"/>
            <circle cx="8" cy="16" r="1.5"/>
            <circle cx="8" cy="24" r="1.5"/>
            <circle cx="12" cy="4" r="1.5"/>
            <circle cx="12" cy="12" r="1.5"/>
            <circle cx="12" cy="20" r="1.5"/>
            <circle cx="16" cy="0" r="1.5"/>
            <circle cx="16" cy="8" r="1.5"/>
            <circle cx="16" cy="16" r="1.5"/>
            <circle cx="16" cy="24" r="1.5"/>
            <circle cx="20" cy="4" r="1.5"/>
            <circle cx="20" cy="12" r="1.5"/>
            <circle cx="20" cy="20" r="1.5"/>
            <circle cx="24" cy="0" r="1.5"/>
            <circle cx="24" cy="8" r="1.5"/>
            <circle cx="24" cy="16" r="1.5"/>
            <circle cx="24" cy="24" r="1.5"/>
        </pattern>`,
    sand:`
        <pattern id="sand" 
            x="0" y="0" width="12" height="12" 
            viewbox='0 0 24 24' patternUnits="userSpaceOnUse" 
            stroke-linecap="square" stroke-width="0.5" stroke="#000" fill='none' stroke-linejoin="round">
            <circle cx="0" cy="0" r="0.5"/>
            <circle cx="0" cy="8" r="0.5"/>
            <circle cx="0" cy="16" r="0.5"/>
            <circle cx="0" cy="24" r="0.5"/>
            <circle cx="4" cy="4" r="0.5"/>
            <circle cx="4" cy="12" r="0.5"/>
            <circle cx="4" cy="20" r="0.5"/>
            <circle cx="8" cy="0" r="0.5"/>
            <circle cx="8" cy="8" r="0.5"/>
            <circle cx="8" cy="16" r="0.5"/>
            <circle cx="8" cy="24" r="0.5"/>
            <circle cx="12" cy="4" r="0.5"/>
            <circle cx="12" cy="12" r="0.5"/>
            <circle cx="12" cy="20" r="0.5"/>
            <circle cx="16" cy="0" r="0.5"/>
            <circle cx="16" cy="8" r="0.5"/>
            <circle cx="16" cy="16" r="0.5"/>
            <circle cx="16" cy="24" r="0.5"/>
            <circle cx="20" cy="4" r="0.5"/>
            <circle cx="20" cy="12" r="0.5"/>
            <circle cx="20" cy="20" r="0.5"/>
            <circle cx="24" cy="0" r="0.5"/>
            <circle cx="24" cy="8" r="0.5"/>
            <circle cx="24" cy="16" r="0.5"/>
            <circle cx="24" cy="24" r="0.5"/>
        </pattern>`,
	sandyclay:`
        <pattern id="sandyclay" 
                x="0" y="0" width="12" height="12" 
                viewbox='0 0 24 24' patternUnits="userSpaceOnUse" 
                stroke-linecap="square" stroke-width="0.5" stroke="#000" fill='none' stroke-linejoin="round">
                <path d="M0,8L8,0 M0,16L16,0 M8,24L24,8 M16,24L24,16"></path>	
                <circle cx="0" cy="0" r="0.5"/>
                <circle cx="0" cy="24" r="0.5"/>
                <circle cx="4" cy="20" r="0.5"/>
                <circle cx="8" cy="16" r="0.5"/>
                <circle cx="12" cy="12" r="0.5"/>
                <circle cx="16" cy="8" r="0.5"/>
                <circle cx="20" cy="4" r="0.5"/>
                <circle cx="24" cy="0" r="0.5"/>
                <circle cx="24" cy="24" r="0.5"/>
            </pattern>`,
	clayeysand:`
        <pattern id="clayeysand" 
                x="0" y="0" width="12" height="12" 
                viewbox='0 0 24 24' patternUnits="userSpaceOnUse" 
                stroke-linecap="square" stroke-width="0.5" stroke="#000" fill='none' stroke-linejoin="round">
                <path d="M0,24L24,0"/>
                <circle cx="0" cy="8" r="0.5" />
                <circle cx="0" cy="16" r="0.5"/>
                <circle cx="4" cy="4" r="0.5" />
                <circle cx="4" cy="12" r="0.5" />
                <circle cx="8" cy="0" r="0.5" />
                <circle cx="8" cy="8" r="0.5" />
                <circle cx="8" cy="24" r="0.5" />
                <circle cx="12" cy="4" r="0.5" />
                <circle cx="12" cy="20" r="0.5" />
                <circle cx="16" cy="0" r="0.5" />
                <circle cx="16" cy="16" r="0.5" />
                <circle cx="16" cy="24" r="0.5" />
                <circle cx="20" cy="12" r="0.5" />
                <circle cx="20" cy="20" r="0.5" />
                <circle cx="24" cy="8" r="0.5" />
                <circle cx="24" cy="16" r="0.5" />
            </pattern>`,
	gravel:`
        <pattern id="gravel" 
                x="0" y="0" width="32" height="32" 
                viewbox='0 0 48 48' patternUnits="userSpaceOnUse" 
                stroke-linecap="square" stroke-width="0.5" stroke="#000" fill='none' stroke-linejoin="round">
                <path d="m42.01,9.79c-0.30,3.02 4.37,8.17 4.57,5.74c0.30,-3.62 -4.27,-8.76 -4.57,-5.74z"/>
                <path d="m9.43,41.70c-1.91,1.69 -0.47,7.26 1.28,5.71c1.91,-1.69 0.63,-7.40 -1.28,-5.71z"/>
                <path d="m6.86,32.90c0,3.92 7.01,2.71 6.40,0.90c-0.78,-2.31 -6.40,-4.83 -6.40,-0.90z"/>
                <path d="m39.02,38.12c2.74,0.60 5.49,-3.62 2.13,-5.74c-3.35,-2.11 -4.79,5.15 -2.13,5.74z"/>
                <path d="m35.65,42.18c-1.52,-0.90 -5.86,3.14 -3.66,4.23c1.83,0.91 9.44,-0.79 3.66,-4.23z"/>
                <path d="m15.23,3.42c-2.74,0.30 -1.39,5.70 1.22,4.83c1.83,-0.60 1.52,-5.13 -1.22,-4.83z"/>
                <path d="m9.46,17.49c-1.83,2.41 3.28,3.76 3.96,2.41c1.22,-2.41 -2.13,-4.83 -3.96,-2.41z"/>
                <path d="m8.31,13.56c1.70,0.42 2.34,-2.11 0.64,-3.38c-1.71,-1.26 -3.06,2.78 -0.64,3.38z"/>
                <path d="m26.51,4.19c1.83,-3.02 -1.52,-5.13 -2.74,-3.32c-1.22,1.81 1.39,5.55 2.74,3.32z"/>
                <path d="m20.72,41.36c-1.22,1.81 1.39,5.55 2.74,3.32c1.83,-3.02 -1.52,-5.13 -2.74,-3.32z"/>
                <path d="m11.31,26.31c-0.98,-3.38 -4.83,-2.38 -4.32,-0.26c0.51,2.11 5.05,2.76 4.32,0.26z"/>
                <path d="m3.39,3.14c0.51,2.11 5.05,2.76 4.32,0.26c-0.99,-3.38 -4.84,-2.38 -4.32,-0.26z"/>
                <path d="m21.63,27.46c-1.22,3.32 2.74,5.13 3.66,3.92c1.94,-2.57 -2.44,-7.25 -3.66,-3.92z"/>
                <path d="m30.66,40.75c4.27,2.11 1.83,-7.55 -0.30,-6.94c-2.13,0.60 -2.98,5.31 0.30,6.94z"/>
                <path d="m45.42,35.44c-0.97,0 -0.07,2.28 0.73,1.69c0.97,-0.72 0.24,-1.69 -0.73,-1.69z"/>
                <path d="m16.32,29.09c-0.97,0 -0.07,2.29 0.73,1.69c0.97,-0.72 0.24,-1.69 -0.73,-1.69z"/>
                <path d="m6.28,21.50c0.97,-0.72 0.24,-1.69 -0.73,-1.69s-0.07,2.28 0.73,1.69z"/>
                <path d="m1.19,9.93c0.97,-0.72 0.24,-1.69 -0.73,-1.69s-0.07,2.29 0.73,1.69z"/>
                <path d="m16.02,11.26c-0.97,0 -0.07,2.28 0.73,1.69c0.97,-0.72 0.24,-1.69 -0.73,-1.69z"/>
                <path d="m39.94,18.39c0.97,-0.72 0.24,-1.69 -0.73,-1.69c-0.97,0 -0.07,2.28 0.73,1.69z"/>
                <path d="m41.56,43.11c-2.13,-0.90 -2.98,3.74 -0.30,4.23c3.35,0.60 2.44,-3.32 0.30,-4.23z"/>
                <path d="m33.98,17.11c-2.13,-0.90 -2.98,3.74 -0.30,4.23c3.35,0.60 2.44,-3.32 0.30,-4.23z"/>
                <path d="m34.44,8.12c-2.13,-1.20 -2.84,4.23 -0.91,4.23c1.52,0 3.05,-3.02 0.91,-4.23z"/>
                <path d="m26.82,21.11c-2.13,-1.20 -2.84,4.23 -0.91,4.23c1.52,0 3.05,-3.02 0.91,-4.23z"/>
                <path d="m28.34,5.40c-2.13,-1.20 -2.84,4.23 -0.91,4.23c1.52,0 3.05,-3.02 0.91,-4.23z"/>
                <path d="m39.30,2.55c-3.05,0.60 -0.30,4.23 1.52,3.92c0,0 1.52,-4.53 -1.52,-3.92z"/>
                <path d="m34.75,31.99c1.52,0 2.13,-2.41 0.61,-3.02s-2.54,3.02 -0.61,3.02z"/>
                <path d="m19.19,37.43c1.52,0 2.13,-2.41 0.61,-3.02c-1.52,-0.60 -2.54,3.02 -0.61,3.02z"/>
                <path d="m44.82,40.15c-1.52,-0.60 -2.53,3.02 -0.61,3.02c1.52,0 2.13,-2.41 0.61,-3.02z"/>
                <path d="m18.72,22.49c-1.52,-0.60 -2.53,3.02 -0.61,3.02c1.52,0 2.13,-2.41 0.61,-3.02z"/>
                <path d="m20.72,17.79c1.52,0 2.13,-2.41 0.61,-3.02c-1.52,-0.60 -2.54,3.02 -0.61,3.02z"/>
                <path d="m15.84,44.98c1.52,0 2.13,-2.41 0.61,-3.02c-1.52,-0.60 -2.54,3.02 -0.61,3.02z"/>
                <path d="m25.46,47.84c1.52,0 2.13,-2.41 0.61,-3.02c-1.52,-0.60 -2.54,3.02 -0.61,3.02z"/>
                <path d="m26.21,15.67c-1.52,-0.60 -2.54,3.02 -0.61,3.02c1.52,0 2.13,-2.41 0.61,-3.02z"/>
                <path d="m46.66,0.23c-1.52,-0.60 -2.53,3.02 -0.61,3.02c1.52,0 2.13,-2.41 0.61,-3.02z"/>
                <path d="m1.50,45.29c1.52,0 2.13,-2.41 0.61,-3.02c-1.52,-0.60 -2.54,3.02 -0.61,3.02z"/>
                <path d="m46.05,28.36c1.52,0 2.13,-2.41 0.61,-3.02c-1.52,-0.60 -2.54,3.02 -0.61,3.02z"/>
                <path d="m1.56,29.42c1.35,0.16 3.46,-1.01 2.54,-2.51c-3.83,-6.24 -4.72,2.26 -2.54,2.51z"/>
                <path d="m10.12,37.18c-0.97,0 -0.07,2.29 0.73,1.69c0.97,-0.72 0.24,-1.69 -0.73,-1.69z"/>
                <path d="m41.23,26.17c1.52,0 2.13,-2.41 0.61,-3.02c-1.52,-0.60 -2.54,3.02 -0.61,3.02z"/>
            </pattern>`,
	cobble:`
        <pattern id="cobble" 
            x="0" y="0" width="32" height="32" 
            viewbox='0 0 48 48' patternUnits="userSpaceOnUse" 
            stroke-linecap="square" stroke-width="0.5" stroke="#000" fill='none' stroke-linejoin="round">
            <path d="m11.82,6.05a2.68,2.68 0 0 0 -0.35,1.68a1.68,1.68 0 0 0 0.32,1.07a1.83,1.83 0 0 0 1.38,0.41a6.62,6.62 0 0 0 2.34,-0.28a2.65,2.65 0 0 0 1.68,-1.56a1.68,1.68 0 0 0 -0.76,-2.03c-1.10,-0.50 -3.87,-0.35 -4.62,0.70l-0.00,-0.00z"/>
            <path d="m29.69,22.62a2.68,2.68 0 0 0 -0.31,1.68a1.71,1.71 0 0 0 0.32,1.07a1.83,1.83 0 0 0 1.38,0.41a6.66,6.66 0 0 0 2.35,-0.28a2.66,2.66 0 0 0 1.68,-1.56a1.68,1.68 0 0 0 -0.76,-2.03c-1.13,-0.50 -3.90,-0.35 -4.65,0.70l-0.00,-0.00z"/>
            <path d="m23.42,15.61a3.48,3.48 0 0 0 -1.41,3.06a1.30,1.30 0 0 0 0.40,0.95a1.42,1.42 0 0 0 0.95,0.23a3.33,3.33 0 0 0 2.42,-0.98a1.98,1.98 0 0 0 0.18,-2.47c-0.58,-0.72 -1.61,-0.79 -2.55,-0.79l0,0.00z"/>
            <path d="m1.93,36.30c-0.13,1.76 0.11,3.89 1.70,4.72a3.24,3.20 0 0 0 3.49,-0.55a6.03,5.95 0 0 0 1.79,-3.18a6.60,6.51 0 0 0 -0.21,-4.38c-2.59,-5.27 -6.50,-0.04 -6.77,3.39l0.00,0.00z"/>
            <path d="m31.62,14.60c-0.05,0.62 0.04,1.38 0.70,1.68a1.35,1.13 0 0 0 1.45,-0.19a2.55,2.15 0 0 0 0.74,-1.13a2.77,2.33 0 0 0 -0.09,-1.55c-1.07,-1.89 -2.70,-0.01 -2.81,1.20z"/>
            <path d="m15.00,38.17a21.17,15.06 0 0 0 -1.43,2.32a7.16,5.09 0 0 0 -1.55,4.62a7.02,4.99 0 0 0 8.58,-1.68a6.79,4.83 0 0 0 -1.59,-6.03l0.23,0.15z"/>
            <path d="m42.64,21.52a6.38,3.26 0 0 0 -3.37,3.13a3.79,1.94 0 0 0 0.51,1.01a4.78,2.44 0 0 0 5.32,0.66a7.17,3.67 0 0 0 5.39,-2.57a4.33,2.22 0 0 0 -4.84,-2.36l0.00,0.12z"/>
            <path d="m42.78,8.30a13.80,10.28 0 0 0 -4.23,5.53c-0.41,1.49 -0.10,3.39 1.78,3.99a3.57,2.66 0 0 0 3.80,-0.71a7.04,5.25 0 0 0 1.55,-2.81a15.67,11.68 0 0 0 0,-3.73a4.48,3.34 0 0 0 -0.82,-1.54c-0.44,-0.41 -1.43,-0.97 -2.09,-0.71l0.00,0.00z"/>
            <path d="m36.38,38.83a2.89,2.90 0 0 0 0.44,3.93a7.01,7.05 0 0 0 3.90,1.49a3.73,3.75 0 0 0 1.54,0a2.77,2.79 0 0 0 1.71,-2.53a8.59,8.64 0 0 0 -0.66,-3.18a15.91,16.02 0 0 0 -6.95,0.29l-0.00,0z"/>
            <path d="m14.03,31.64a1.82,1.82 0 0 0 -0.71,2.63a1.78,1.78 0 0 0 2.71,0.04a1.78,1.78 0 0 0 -0.16,-2.31a2.03,2.03 0 0 0 -2.04,-0.34"/>
            <path d="m21.37,5.90a2.47,2.47 0 0 0 -0.86,0.09a1.65,1.65 0 0 0 -1.00,1.46a3.57,3.57 0 0 0 0.46,1.78a5.05,5.05 0 0 0 1.96,2.19a6.19,6.19 0 0 0 2.52,0.59a24.09,24.09 0 0 0 3.40,0.04a2.84,2.84 0 0 0 1.75,-0.52a2.00,2.00 0 0 0 0.59,-1.53a4.76,4.76 0 0 0 -0.40,-1.63c-0.39,-1.01 -0.97,-2.06 -1.98,-2.45a4.51,4.51 0 0 0 -1.54,-0.21c-1.65,0 -3.25,0.17 -4.89,0.17l0,0.00z"/>
            <path d="m13.31,25.44a4.63,4.20 0 0 0 0.33,1.74a3.85,3.49 0 0 0 2.36,1.59a8.66,7.85 0 0 0 4.22,0.24a2.10,1.90 0 0 0 0.91,-0.32a1.98,1.79 0 0 0 0.54,-0.71a6.41,5.80 0 0 0 -0.18,-5.45a8.35,7.56 0 0 0 -2.60,-2.18a8.60,7.79 0 0 0 -3.23,-1.31c-3.81,-0.61 -2.44,4.17 -2.35,6.40l0,0.00z"/>
            <path d="m40.73,32.75a5.41,5.41 0 0 0 -0.44,2.32a1.45,1.45 0 0 0 0.59,1.19a1.85,1.85 0 0 0 0.73,0.16l4.04,0.45a1.13,1.13 0 0 0 0.69,-0.05a0.94,0.94 0 0 0 0.36,-0.38a3.05,3.05 0 0 0 0.44,-2.01a6.16,6.16 0 0 0 -0.45,-1.51l-0.71,-1.78a2.19,2.19 0 0 0 -0.46,-0.81a2.06,2.06 0 0 0 -1.07,-0.45c-2.38,-0.47 -2.96,0.88 -3.72,2.87l0.00,0z"/>
            <path d="m25.24,48.20c1.22,1.61 3.41,2.04 5.39,2.35a8.36,8.57 0 0 0 2.86,0.10a3.71,3.80 0 0 0 2.71,-2.10a2.89,2.96 0 0 0 -0.65,-3.31c-1.06,-0.93 -2.75,-0.86 -3.76,-1.88c-1.49,-1.53 -2.78,-5.31 -5.60,-3.07c-1.93,1.44 -2.35,6.12 -0.94,7.92l-0.00,0.00z"/>
            <path d="m4.61,25.48a1.44,1.44 0 0 0 1.12,1.38a6.94,6.94 0 0 0 1.11,0c0.88,0.04 1.67,0.59 2.50,0.86a0.94,0.94 0 0 0 0.54,0.06c1.45,-0.39 0.20,-3.57 -0.83,-4.01c-1.33,-0.51 -4.43,-0.19 -4.45,1.69l-0.00,0.00z"/>
            <path d="m24.28,28.41a4.20,4.20 0 0 0 -0.95,1.62a5.95,5.95 0 0 0 -0.42,4.35a3.26,3.26 0 0 0 0.69,1.33c0.84,0.89 2.21,0.94 3.43,0.94l2.97,0a4.12,4.12 0 0 0 1.84,-0.29a2.62,2.62 0 0 0 1.05,-1.01a5.51,5.51 0 0 0 0.50,-3.67c-0.30,-2.00 -1.39,-3.57 -3.52,-3.67c-1.74,-0.09 -4.01,-0.49 -5.48,0.66l0.00,-0.12z"/>
            <path d="m48.11,45.02a1.97,1.97 0 0 0 -1.03,0.12a1.85,1.85 0 0 0 -0.78,1.19a4.85,4.85 0 0 0 -0.25,2.28a5.52,5.52 0 0 0 0.59,1.53a9.58,9.58 0 0 0 2.61,3.36a4.33,4.33 0 0 0 4.07,0.74a5.21,5.21 0 0 0 2.38,-2.34a5.36,5.36 0 0 0 0.59,-1.43a4.10,4.10 0 0 0 -1.07,-3.57c-1.90,-2.12 -4.52,-1.72 -7.11,-1.88l0.00,-0.00z"/>
            <path d="m1.06,14.00a5.44,5.44 0 0 0 2.41,4.85a7.87,7.87 0 0 0 5.44,1.19a2.24,2.24 0 0 0 1.78,-0.88a2.43,2.43 0 0 0 0.23,-1.19c0,-1.13 -0.12,-2.38 -0.98,-3.13c-0.52,-0.44 -1.26,-0.63 -1.64,-1.19c-0.52,-0.79 -0.09,-1.91 -0.54,-2.75c-1.73,-3.21 -6.47,0.84 -6.69,3.10z"/>
            <path d="m38.84,3.98a4.76,4.76 0 0 0 -2.83,1.72c-0.14,0.19 -0.28,0.46 -0.14,0.66a0.59,0.59 0 0 0 0.29,0.17c1.31,0.41 2.74,-0.09 3.93,-0.79c0.50,-0.29 1.06,-0.81 0.88,-1.37a0.95,0.95 0 0 0 -0.75,-0.59a5.44,5.44 0 0 0 -1.37,0.19"/>
            <path d="m0.19,45.02a1.97,1.97 0 0 0 -1.03,0.12a1.85,1.85 0 0 0 -0.78,1.19a4.85,4.85 0 0 0 -0.25,2.28a5.52,5.52 0 0 0 0.59,1.53a9.58,9.58 0 0 0 2.61,3.36a4.33,4.33 0 0 0 4.07,0.74a5.21,5.21 0 0 0 2.38,-2.34a5.36,5.36 0 0 0 0.59,-1.43a4.10,4.10 0 0 0 -1.07,-3.57c-1.90,-2.12 -4.52,-1.72 -7.11,-1.88z"/>
            <path d="m0.02,-2.97a1.97,1.97 0 0 0 -1.03,0.12a1.85,1.85 0 0 0 -0.78,1.19a4.85,4.85 0 0 0 -0.25,2.28a5.52,5.52 0 0 0 0.59,1.53a9.58,9.58 0 0 0 2.61,3.36a4.33,4.33 0 0 0 4.07,0.74a5.21,5.21 0 0 0 2.38,-2.34a5.36,5.36 0 0 0 0.59,-1.43a4.10,4.10 0 0 0 -1.07,-3.57c-1.90,-2.12 -4.52,-1.72 -7.11,-1.88z"/>
            <path d="m48.11,-2.97a1.97,1.97 0 0 0 -1.03,0.12a1.85,1.85 0 0 0 -0.78,1.19a4.85,4.85 0 0 0 -0.25,2.28a5.52,5.52 0 0 0 0.59,1.53a9.58,9.58 0 0 0 2.61,3.36a4.33,4.33 0 0 0 4.07,0.74a5.21,5.21 0 0 0 2.38,-2.34a5.36,5.36 0 0 0 0.59,-1.43a4.10,4.10 0 0 0 -1.07,-3.57c-1.90,-2.12 -4.52,-1.72 -7.11,-1.88z"/>
            <path d="m-5.60,21.14a6.38,3.26 0 0 0 -3.37,3.13a3.79,1.94 0 0 0 0.51,1.01a4.78,2.44 0 0 0 5.32,0.66a7.17,3.67 0 0 0 5.39,-2.57a4.33,2.22 0 0 0 -4.84,-2.36l0.00,0.12z"/>
            <path d="m25.13,0.62c1.22,1.61 3.41,2.04 5.39,2.35a8.36,8.57 0 0 0 2.86,0.10a3.71,3.80 0 0 0 2.71,-2.10a2.89,2.96 0 0 0 -0.65,-3.31c-1.06,-0.93 -2.75,-0.86 -3.76,-1.88c-1.49,-1.53 -2.78,-5.31 -5.60,-3.07c-1.93,1.44 -2.35,6.12 -0.94,7.92l-0.00,0.00z"/>
        </pattern>`,
    concrete:`
        <pattern id="concrete" 
            x="0" y="0" width="40" height="40" 
            viewbox='0 0 50 50' patternUnits="userSpaceOnUse" 
            stroke-linecap="square" stroke-width="0.5" stroke="#000" fill='none' stroke-linejoin="round">
            <path path d="
            M47,47l-4,-4.5l4,-4.5z 
            M5,47l-3,-1.5l4,-2.5z 
            M7,12l-4.5,2.5l2,-3z
            M31,38l-5,4.2l0.5,-5.5z 
            M30,15l-4,1.8l-3.5,-3z
            M34,9l-5,1.1l3.5,-3z
            M13,4l-4.5,1l1.5,-3z
            M9,28l-3.5,-2l2.4,-3z
            M5,37l-3.5,4l1,-5z
            M24,24l-3.5,2l-2,-5z
            M5,42l-1.5,1
            M15,22l-1.5,1
            M18,45l2,-2
            M18,35l2,-2
            M40,44l-2,-1
            M12,16l1,-1.5
            M18,32l-1.5,-1.5
            M38,22l-1.5,-1.5
            M38,32l1.5,-2
            M38,42l1.5,-2
            M47,32l-1.5,-1
            M37,34l-1.5,-1
            M43,24l1,-1.5
            M23,44l0,-2.5
            M40,12l1,-1.5
            M10,42l0,-2.5
            M44,8l-1.5,-1.5
            M44,38l-0.5,-2.5
            M30,2l-1.5,-1.5
            M45,1l-0.5,-2.5
            M20,10l1.5,-1.5
            M10,10l1.5,-2.5
            M2,18l1.5,-1.5
            M2,9l0.5,-2.5
            M35,24l-2,-3.5
            M35,12l-2,-3.5"/>
        </pattern>`,

    get(name, color){
        let svgDef = document.createElementNS(svgNS,'def');
        let patternStr
        if (color){
            patternStr = this[name].replace(`stroke="#000"`,`stroke="${color}"`);
        } else {
            patternStr = this[name]
        }
        svgDef.innerHTML = patternStr;
        return svgDef.children[0]
    }
}