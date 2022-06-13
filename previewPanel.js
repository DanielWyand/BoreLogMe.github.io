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
        fontSize : 9, //px
        fontFamily : 'Arial',
        contentInnerBorderPadding : 16, //px
        rowHeightPct : [0.1,0.025,0.09,0.665,0.12],
        colWidthPct : [0.06,0.08,0.36,0.06,0.14,0.06,0.06,0.18],
        headerColOffSet: [0,0],
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
    container: document.querySelector('#scaleHolder'), //container for svg Logs 
    tempHolder: document.querySelector('span#tempHolder'), //temple span for calc paragh height
    gridLines: {}, //gridlines in each svg
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
        g_colTitle.setAttribute('dominant-baseline', 'middle');
        
        //lable text
        Object.keys(config.lable.coltitle).forEach(key => {
            let text=document.createElementNS(svgNS,'text'); 
            text.innerHTML = config.lable.coltitle[key][0];
            text.setAttribute('x', `${config.lable.coltitle[key][1]}` );
            text.setAttribute('y', `${config.lable.coltitle[key][2]}` );
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
            text_locationIdLable.setAttribute('font-size',`${PS.fontSize*1.67}`);
            text_locationIdLable.setAttribute('font-weight','bold');
            text_locationIdLable.setAttribute('dominant-baseline', 'hanging');
            text_locationIdLable.innerHTML = `
            <tspan class="locationId" x="${text_x1}" y="${text_y1}">${config.lable.locationId}</tspan>
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
            <tspan class="locationId" x="${text_x1+deltax}" y="${text_y1}">${this.locationId}</tspan>
            `

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
                <tspan class="approvedBy" x="${text_x3+deltax}" y="${text_y4}"">${this.approvedBy}</tspan>
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

        let colwidth = (GL.x8 - GL.x0 - 2*PS.contentInnerBorderPadding)/3
        let text_x1 = GL.x0 + PS.contentInnerBorderPadding;
        let text_x2 = text_x1 + colwidth   + PS.footerColOffSet[0];
        let text_x3 = text_x1 + colwidth*2 + PS.footerColOffSet[1];

        let text_y1 = GL.y4 + PS.contentInnerBorderPadding; //but hanging
        let text_y2 = text_y1 + PS.footerLineHeight;
        let text_y3 = text_y2 + PS.footerLineHeight;
        
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
            <tspan class="holeSize" x="${text_x1+deltax}" y="${text_y1}">${this.wellInstalled?this.holeSize:'N/A'}</tspan>
            <tspan class="casingSize" x="${text_x1+deltax}" y="${text_y2}">${this.wellInstalled?this.casingSize:'N/A'}</tspan>
            <tspan class="totalWellDepth" x="${text_x1+deltax}" y="${text_y3}">${this.wellInstalled?this.totalWellDepth:'N/A'}</tspan>&nbsp;
            `
            deltax = text_legendCol1Value.getBBox().width + 10; 
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

            deltax = text_legendCol1Lable.getBBox().width + 10; 
            let text_legendCol2Value=document.createElementNS(svgNS,'text'); 
            g_legendCol2.appendChild(text_legendCol2Value)
            text_legendCol2Value.setAttribute('class','dataValue');
            text_legendCol2Value.setAttribute('dominant-baseline', 'hanging');
            text_legendCol2Value.setAttribute('text-decoration', 'underline');
            text_legendCol2Value.setAttribute('text-anchor', 'end');
            text_legendCol2Value.innerHTML = `
            <tspan class="screenInterval" x="${text_x2+deltax}" y="${text_y1}">
            <tspan class="screenIntervalFrom">${this.wellInstalled ? parseFloat(this.screenIntervalFrom).toFixed(1) : 'N/A'}</tspan> - <tspan class="screenIntervalTo">${this.wellInstalled?parseFloat(this.screenIntervalTo).toFixed(1):'N/A'}</tspan>
            </tspan>
            <tspan class="initialWaterLevel" x="${text_x2+deltax}" y="${text_y2}">${isNaN(this.initialWaterLevel)?'N/A':parseFloat(this.initialWaterLevel).toFixed(1)}</tspan>
            <tspan class="staticWaterLevel" x="${text_x2+deltax}" y="${text_y3}">${this.wellInstalled?parseFloat(this.staticWaterLevel - (this.topOfCasingElevation - this.groundElevation)).toFixed(3):'N/A'}</tspan>&nbsp;
            `
            deltax = text_legendCol2Value.getBBox().width + 10; 
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

            deltax = text_legendCol3Lable.getBBox().width + 10; 
            let text_legendCol3Value=document.createElementNS(svgNS,'text'); 
            g_legendCol3.appendChild(text_legendCol3Value)
            text_legendCol3Value.setAttribute('class','dataValue');
            text_legendCol3Value.setAttribute('dominant-baseline', 'hanging');
            text_legendCol3Value.setAttribute('text-decoration', 'underline');
            text_legendCol3Value.innerHTML = `
            <tspan class="drilledBy" x="${text_x3+deltax}" y="${text_y1}">${this.drilledBy}</tspan>
            <tspan class="drillDate" x="${text_x3+deltax}" y="${text_y2}">NULL</tspan>
            <tspan class="drillMethod" x="${text_x3+deltax}" y="${text_y3}">${this.drillMethod}</tspan>&nbsp;
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
        g_axis.setAttribute('class', 'axis')

        let minorTrick = majorTrick/10;

        for (let i=0, tricks = Math.floor(maxTrickDepth/minorTrick); i<tricks+1; i++){
            if (i % 10) {//minorTrick) % majorTrick){
                let path = document.createElementNS(svgNS, 'path');
                let doubleTrick = i%5==0 ? 1: 0;
                let path_x = GL.x1-(GL.x1-GL.x0)*0.125*(1+doubleTrick);
                // let path_y = minDepth_y + (GL.y4-GL.y3)*0.85 / tricks * i;
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
        text.setAttribute('y', `${config.convertMbgsToPxy(maxTrickDepth, 0)-2}` );
        text.setAttribute('text-anchor', 'middle' );
        text.setAttribute('dominant-baseline', 'ideographic' );
        g_axis.appendChild(text)

        svg_log.appendChild(g_axis)
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
            g_subsurfaceProfile.setAttribute('dominant-baseline', 'hanging' );

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

            if (this.wellInstalled && !isNaN(this.groundElevation)){
                let text_elev=document.createElementNS(svgNS,'text'); 
                g_record.appendChild(text_elev);
                text_elev.innerHTML = (this.groundElevation-depthFrom).toFixed(3);
                text_elev.setAttribute('x', `${(GL.x3+GL.x4)/2}` );//path_x - 2
                text_elev.setAttribute('y', `${minDepth_y+adjusted_y}` );
                text_elev.setAttribute('text-anchor', 'middle' );
                text_elev.setAttribute('dominant-baseline', 'ideographic' ); //hanging ideographic middle
            }

            let g_record_des = document.createElementNS(svgNS, 'g');
            g_record.appendChild(g_record_des);

                let text_materialType = document.createElementNS(svgNS, 'text');
                g_record_des.appendChild(text_materialType);
                text_materialType.setAttribute('class','materialType');
                text_materialType.setAttribute('font-weight','bold');
                text_materialType.setAttribute('x',`${GL.x2+8}`);
                text_materialType.setAttribute('y',`${minDepth_y+adjusted_y+8}`);
                text_materialType.innerHTML=`${materialType}, ${depthFrom.toFixed(2)} - ${depthTo.toFixed(2)} m bgs;`;

                let paragraphHeight = config.getParagraphHeight((GL.x3-GL.x2-14),description);

                let foreignObject_description = document.createElementNS(svgNS, 'foreignObject');
                g_record_des.appendChild(foreignObject_description);
                foreignObject_description.setAttribute('class','description');
                foreignObject_description.setAttribute('x',`${GL.x2+8}`);
                foreignObject_description.setAttribute('y',`${minDepth_y+adjusted_y+6+1.5*PS.fontSize}`);
                foreignObject_description.setAttribute('width',`${GL.x3-GL.x2-14}`);
                foreignObject_description.setAttribute('height',`${paragraphHeight}`);
                foreignObject_description.setAttribute('style', `word-break:break-word; font-size:${PS.fontSize}px; line-height: ${1.5*PS.fontSize}px`)
                foreignObject_description.innerHTML=`<span xmlns="http://www.w3.org/1999/xhtml">${description}</span>`;

            usedSpace_y = adjusted_y + g_record_des.getBBox().height +4

            if (index == this.subsurfaceProfile.length-1) {

                let record_y = (GL.y4-GL.y3)*0.85 / this.maxTrickDepth * depthTo;
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
        
                if (this.wellInstalled && !isNaN(this.groundElevation)){
                    let text_elev=document.createElementNS(svgNS,'text'); 
                    g_record.appendChild(text_elev);
                    text_elev.innerHTML = (this.groundElevation-depthTo).toFixed(3);
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
        let PS = report.pageSetting;
    
        if(svg_log.querySelector('g.wellDetail')){svg_log.querySelector('g.wellDetail').remove()};  
        if(!this.wellInstalled) {return 0}
        let g_wellDetail = document.createElementNS(svgNS, 'g');
        svg_log.appendChild(g_wellDetail);
        g_wellDetail.setAttribute('class','wellDetail'); 

    
        g_wellDetail.innerHTML = 
       `<defs>
        <marker id="marker-arrow" markerWidth="12" markerHeight="6" refX="10" refY="3" orient="auto">
            <path d="M0,0 L12,3 L0,6Z" fill='#000'></path>
        </marker>
        <pattern id="pattern-screen" x="0" y="0" width="5" height="4" patternUnits="userSpaceOnUse">
        <path d="M 0 2 L 5 2" stroke-width="0.5" stroke="#888"></path>
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
            <path class="screen" fill="url(#pattern-screen)" stroke='none' d=
            "M${xZero-unitL+1.5},${yScreenFrom} L${xZero-unitL+1.5},${yScreenTo}
            L${xZero+unitL-1.5},${yScreenTo} L${xZero+unitL-1.5},${yScreenFrom}Z">
            </path>
            `
    
        let g_wellHead = document.createElementNS(svgNS, 'g');
        g_wellDetail.appendChild(g_wellHead);
        g_wellHead.setAttribute('class','wellHead');
        g_wellHead.setAttribute('stroke-width', 0.5);
        switch(this.wellHead){
            case 'Protective Standpipe': 
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
            case 'Flush-Mounted Manhole': 
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
            case 'None':
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
            g_lable.setAttribute('font-size', `${PS.fontSize*0.8}`);
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

        if (!isNaN(this.initialWaterLevel)){
            let inital = config.convertMbgsToPxy(this.maxTrickDepth, this.initialWaterLevel);
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
        }

        if(!this.wellInstalled) {return 0}
        if (!isNaN(this.staticWaterLevel)){
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
}

