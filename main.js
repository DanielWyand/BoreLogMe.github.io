/***************************UPDATE JSON DISPLAY***********************/
/********************************************************************/
//refesh upon mannual refeash
document.querySelector('a#refreshJsonButton').addEventListener('click',()=>{
  document.querySelector('textarea#jsonDisplay').value = JSON.stringify(report.logCollectionogCollection, null, "    "); 
})
//refesh upon switch to codeView
document.querySelector('li#codeViewButton').addEventListener('click',()=>{
  document.querySelector('textarea#jsonDisplay').value = JSON.stringify(report.logCollectionogCollection, null, "    "); 
})
/********************************************************************/



/***************************SAVE JSON TXT****************************/
/********************************************************************/
Date.prototype.format = function(fmt) { 
  var o = { 
  "M+" : this.getMonth()+1,                 
  "d+" : this.getDate(),                   
  "h+" : this.getHours(),                    
  "m+" : this.getMinutes(),                 
  "s+" : this.getSeconds(),                 
  "q+" : Math.floor((this.getMonth()+3)/3), 
  "S" : this.getMilliseconds()             
  }; 
  if(/(y+)/.test(fmt)) {
  fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
  }
  for(var k in o) {
  if(new RegExp("("+ k +")").test(fmt)){
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
  }
  }
  return fmt; 
 }

document.querySelector('a#saveJsonButton').addEventListener('click', () => {
  var elementA = document.createElement('a');
  elementA.setAttribute('href', 'data:text/plain;charset=utf-8,' + JSON.stringify(LogCollection, null, "    "));
  elementA.setAttribute('download', "BoringTool-"+new Date().format("yyyy-MM-dd") + ".txt");
  elementA.style.display = 'none';
  document.body.appendChild(elementA);
  elementA.click();
  document.body.removeChild(elementA);
})
/********************************************************************/



/**************************scaleHodler observer**********************/
//init an observer when new page added
var scaleHolderObserver = new MutationObserver(updateLogList = () => {
  document.querySelector("div#logList").innerHTML = ''; //dump the logList
  document.querySelector("div#pageLinks").innerHTML = ''; //dump the pageLinks
  let logs = document.querySelector("div#scaleHolder").children;
  for (i = 0, len = logs.length; i < len; i++) {
    //prepare new logList
    let logId = logs[i].id;
    let logName = logs[i].dataset.name;
    let newDiv1 = document.createElement('div');
    newDiv1.dataset.logId = logId
    newDiv1.innerHTML = `<span class="locationId">${logName}</span><span class="delete"><svg viewBox="0 3 24 21"><use xlink:href="#icon-deleteLog"></svg></span>`;
    document.querySelector("#logList").appendChild(newDiv1);
    //prepare new pageLinks
    let newDiv2 = document.createElement('div');
    newDiv2.dataset.logId = logId
    newDiv2.innerHTML = `<a href=#${logId}>${logName}</a>`;
    document.querySelector("#pageLinks").appendChild(newDiv2);
  }
});
// set the observer on scaleHolder 
scaleHolderObserver.observe(scaleHolder, {childList: true});
// observer.disconnect();
/********************************************************************/


/***************************Update PageNo****************************/
function updatePageNo () {
  let previewPanel = document.querySelector("#previewPanel");
  let scaleHolder = document.querySelector("#scaleHolder");
  let viewLocation = document.querySelector("div#viewLocation");
  let pageTotal = scaleHolder.childElementCount
  if (pageTotal) {
    let scrollTop = previewPanel.scrollTop
    let scrollHeight = previewPanel.scrollHeight
    let clientHeight = previewPanel.clientHeight
    let heightPerPage = scrollHeight/pageTotal
    let PageNo = Math.floor((scrollTop + heightPerPage*0.3)/heightPerPage)
    document.querySelector("#paperSize").innerHTML = scaleHolder.children[PageNo].dataset.size
    document.querySelector("#currentPageNo").innerHTML = PageNo + 1
    document.querySelector("#totalPageNo").innerHTML = pageTotal
    //also update page location
    let pageLinksHeight = pageTotal * 20;
    viewLocation.style.height=clientHeight/scrollHeight*pageLinksHeight+'px'
    viewLocation.style.top=scrollTop/scrollHeight*pageLinksHeight+'px'
  } 
}
//call function when scrolled
document.querySelector("#previewPanel").addEventListener('scroll', updatePageNo)
/********************************************************************/



/***************************Scale Pages******************************/
//miuns 5% when click zoomInButtom
document.querySelector("#zoomOutButtom").addEventListener('click', (e)=>{
  let newZoomFactor = parseInt(document.querySelector("#zoomSlider").value) - 5;
  if (newZoomFactor < 50) newZoomFactor = 50;
  updateZoom (newZoomFactor);
})
//plus 5% when click zoomInButtom
document.querySelector("#zoomInButtom").addEventListener('click', (e)=>{
  let newZoomFactor = parseInt(document.querySelector("#zoomSlider").value) + 5;
  if (newZoomFactor > 150) newZoomFactor = 150;
  updateZoom (newZoomFactor);
})
//scale apge when slide the zoomSlider control
document.querySelector("#zoomSlider").addEventListener('input', ()=>{
  updateZoom (parseInt(document.querySelector("#zoomSlider").value));
})
//double click to resume 100% scale
document.querySelector("#zoomFactor").addEventListener('dblclick', ()=>{updateZoom (100)})
// a func to apply zoomfactor to previewpanle > scaleholder
function updateZoom (newZoomFactor) {
  document.querySelector("#zoomFactor").innerHTML = newZoomFactor + '%';
  document.querySelector("#zoomSlider").value = newZoomFactor;
  document.querySelector("#scaleHolder").style.transform =  `scale(${newZoomFactor/100})`;
}
/********************************************************************/



/**************************Switch Panel******************************/
document.querySelector('ul#navLinks').addEventListener('click',(e)=>{
  // if Li tag is clicked and is not 'seleted'
  if (e.target.tagName=="LI" && !e.target.hasAttribute("selected")) {
    document.querySelector(`div#${document.querySelector('ul#navLinks > li.active').classList[0]}`).classList.toggle('active');//hide the panel is currently shown, the Lis class name stores corresponding panel id}  
    document.querySelector(`div#${e.target.classList[0]}`).classList.toggle('active');// unhide panel tobe displayed
    document.querySelector('ul#navLinks > li.active').classList.toggle('active');//remove selected Attribute from currently shown li   
    e.target.classList.toggle('active')// add new selected li Attribute 

    //navBarMove
    let navBarMove = document.querySelector("div#navBarMove")
    let lastTop = navBarMove.offsetTop;
    let thisTop = e.target.offsetTop;
    const height = 30;
    //move bar to destination
    navBarMove.style.top = thisTop+7+'px';
    navBarMove.style.animation = `myMove${thisTop+7} 0.25s ease-in-out`;
    if (thisTop>lastTop){
      navBarMove.querySelector('style').innerHTML=`
        @keyframes myMove${thisTop+7} {
          0%{top:${lastTop}px;}
          30%{top:${lastTop}px; height: ${thisTop-lastTop+height+7}px;}
          100%{top:${thisTop+7}px;}
      } `
    } else {
      navBarMove.querySelector('style').innerHTML=`
      @keyframes myMove${thisTop+7} {
        0%{top:${lastTop}px;}
        30%{top:${thisTop+7}px; height: ${-thisTop+lastTop+height-7}px;}
        100%{top:${thisTop+7}px;}
      } `
    }
  }
})
/********************************************************************/



/**************************Theme change******************************/
//change theme when load
if(window.matchMedia('(prefers-color-scheme: dark)').matches){
  setDarkMode()
}
//change theme by click button
document.querySelector('li#themeToggle').addEventListener("click", () => {
    if(document.documentElement.hasAttribute('darkTheme')){
      setLightMode()
    }else{
      setDarkMode()
    }  
})
//change with browers theme
window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", () => {
  if(window.matchMedia('(prefers-color-scheme: dark)').matches){
    setDarkMode()
  } else {
    setLightMode()
  }
});
function setDarkMode(){
  document.documentElement.setAttribute('darkTheme', 'true');
  document.querySelector('li#themeToggle').setAttribute('title', 'Change to Light Theme')
  document.querySelector('li#themeToggle').innerHTML = '<svg><use xlink:href="#icon-darkTheme"></svg>'
}
function setLightMode(){
  document.documentElement.removeAttribute('darkTheme');
  document.querySelector('li#themeToggle').setAttribute('title', 'Change to Dark Theme')
  document.querySelector('li#themeToggle').innerHTML = '<svg><use xlink:href="#icon-lightTheme"></svg>'
}
/********************************************************************/


/**************************SETTING MenU******************************/
document.querySelector("li#settingButton").addEventListener('click', (e)=>{
  //when `<span class="locationId">${logName}</span> clicked
  if (e.target.tagName=="SPAN") {
    console.log('click on meun')
  }
  //to keep logList show
  document.querySelector("div#settingMeun").removeAttribute("hidden")
  document.querySelector("div#settingMeun").focus();
})
//hide logList when onBlur
document.querySelector("div#settingMeun").addEventListener('blur', (e)=>{
  document.querySelector("div#settingMeun").setAttribute("hidden", "true")
})
/********************************************************************/


/************drag and adjust width of control panel *****************/
document.querySelector('div#resizeBar').onmousedown = (e) => {
  let controlPanel = document.getElementById("controlPanel");
  let resizeBar = document.getElementById("resizeBar");

  let startX = e.clientX;
  let controlPanel_width = parseFloat(window.getComputedStyle(controlPanel)['width'])

  document.onmousemove = (e) => {
    let endX = e.clientX;
    let deltaX = endX - startX;
    if ((controlPanel_width + deltaX) >= 340 ) {
      controlPanel.style.width = controlPanel_width + deltaX  + "px";
    }  
  }
  document.onmouseup = () =>{
    document.onmousemove = null;
    document.onmouseup = null;
    resizeBar.releaseCapture && resizeBar.releaseCapture();
  }
  resizeBar.setCapture && resizeBar.setCapture();
  return false
}
/********************************************************************/


function printLog(data){

var urlObject = window.URL || window.webkitURL || window;

var export_blob = new Blob([data]);

var save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a")
save_link.href = urlObject.createObjectURL(export_blob);
save_link.download = 'test.html';


}


function exportHTML() {
  let filename=prompt("File Name","Borehole Log");
  if (filename=='') {filename = `Borehole Log`}
  var urlObject = window.URL || window.webkitURL || window;
  let elementA = document.createElementNS("http://www.w3.org/1999/xhtml", "a")
  let data = document.querySelector('div#scaleHolder').innerHTML
  let head = `<!DOCTYPE html><html><head><title>${filename}</title><style>body{padding: 0; margin: 0; font-size:0}</style></head><body>`
  let foot = '</body>'

  elementA.href = urlObject.createObjectURL(new Blob([head+data+foot]));
  elementA.download = filename +'.html';
  elementA.style.display = 'none';
  document.body.appendChild(elementA);
  elementA.click();
  document.body.removeChild(elementA);
}

