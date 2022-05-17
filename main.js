
function highLightLog (logId) {
  let logs = document.querySelectorAll(`svg.logs`);
  for (let log of logs) {
    log.setAttribute("selected", "false");
  }
  document.querySelector(`svg#${logId}`).setAttribute("selected", "true");
  location.href = `#${logId}`
}

//add page button
var addLogButton = document.querySelector("#addLogButton");
addLogButton.addEventListener('click', ()=>{
  let newLogId = addNewLog ()
  let currentLog = document.querySelector('#currentLog');
  currentLog.value = LogCollection[newLogId].locationId
  currentLog.dataset.logId = newLogId;
  highLightLog (newLogId)
})


//rename/enable iput of currentLog
var currentLog = document.querySelector("#currentLog");
var currentLogClickCapture = document.querySelector("#currentLogClickCapture");
//enable currentLog input to rename
currentLogClickCapture.addEventListener('click', (e)=>{
  e.stopPropagation();
  if (currentLog.disabled) {
    currentLog.disabled=false;
    currentLog.focus();
  } 
  //click on other area will disablethe input
  document.addEventListener('click', (e)=>{
    if (e.target != currentLogClickCapture){
      currentLog.disabled=true; 
    }
  }, {once: true})
})
currentLog.addEventListener('keyup', (e) => {
  if (e.keyCode == 13) {currentLog.disabled=true}
})

// listen currentLog to change log location ID 
currentLog.addEventListener('change',()=>{
  let logId = currentLog.dataset.logId;
  //set svg Log data tag
  document.querySelector(`svg#${logId}`).dataset.name = currentLog.value;
  //set svg Log display location ID
  document.querySelector(`svg#${logId} .dataValue .locationId`).innerHTML = currentLog.value;
  //update loaction id in logList
  document.querySelector(`div#logList div[data-log-id=${logId}] .locationId`).innerHTML = currentLog.value;
  //and also update pageliks
  document.querySelector(`div#pageLinks div[data-log-id=${logId}] a`).innerHTML = currentLog.value;
  //last but not leaset, update logcollection object
  LogCollection[logId].locationId = currentLog.value
})




//show hide logList

document.querySelector("#showLogListButton").addEventListener('click', (e)=>{
  document.querySelector("div#logList").removeAttribute("hidden")
  document.querySelector("div#logList").focus();
  
  console.log('click')
  // e.stopPropagation();
  // logList.classList.toggle('hidden');
  // //click on other area will disablethe input
  // document.addEventListener('click', (e)=>{
  //   if (e.target != logList){
  //     logList.classList.toggle('hidden');
  //   }
  // }, {once: true})
})

document.querySelector("div#logList").addEventListener('blur', (e)=>{
  document.querySelector("div#logList").setAttribute("hidden", "true")
  console.log(e.target)
})



document.querySelector("#logList").addEventListener('click',(e)=>{
  
  if (e.target.tagName == "BUTTON") {
    if (e.target.innerHTML=='Del'){
      console.log('text')
      e.target.innerHTML='Comfirme (5)'
      setTimeout(() => {e.target.innerHTML='Comfirme (4)'}, 1000);
      setTimeout(() => {e.target.innerHTML='Comfirme (3)'}, 2000);
      setTimeout(() => {e.target.innerHTML='Comfirme (2)'}, 3000);
      setTimeout(() => {e.target.innerHTML='Comfirme (1)'}, 4000);
      setTimeout(() => {e.target.innerHTML='Del'}, 5000);
    } else {
      let logId = e.target.parentElement.dataset.logId;
      e.target.parentElement.remove();
      document.querySelector(`svg#${logId}`).remove();
    }
  }
  if (e.target.tagName == "SPAN") {
    let currentLog = document.querySelector('#currentLog');
    let logId = e.target.parentElement.dataset.logId;
    currentLog.value = e.target.innerHTML;
    currentLog.dataset.logId = logId;
    location.href = `#${logId}`   
  }
})



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

/***************************Scale Pages******************************/
/********************************************************************/




//page adding related
var previewPanel = document.querySelector("#previewPanel");
var scaleHolder = document.querySelector("#scaleHolder");
//update #page of #pages in statusbar
function updatePageNo () {
  let viewLocation = document.querySelector("#viewLocation");
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
previewPanel.addEventListener('scroll', updatePageNo)

//init an observer when new page added
var observer = new MutationObserver(updateLogList = () => {
  //update #LogList in controlpanel
  let logList = document.querySelector("#logList");
  logList.innerHTML = ''; //dump the logList
  //update pagelinks in preview panel
  let pageLinks = document.querySelector("#pageLinks");
  pageLinks.innerHTML = ''; //dump the logList
  let scaleHolder = document.querySelector("#scaleHolder");
  let logs = scaleHolder.children;
  for (i = 0, len = logs.length; i < len; i++) {
    let logId = logs[i].id;
    let logName = logs[i].dataset.name;
    let newDiv1 = document.createElement('div');
    newDiv1.dataset.logId = logId
    newDiv1.innerHTML = `<span class="locationId">${logName}</span><button>Del</button>`;
    logList.appendChild(newDiv1);
    let newDiv2 = document.createElement('div');
    newDiv2.dataset.logId = logId
    newDiv2.innerHTML = `<a href=#${logId}>${logName}</a>`;
    pageLinks.appendChild(newDiv2);
  }
});
// set the observer on scaleHolder 
observer.observe(scaleHolder, {childList: true});
// observer.disconnect();





/********************************************************************/
/**************************Theme change******************************/

//change theme when load
if(window.matchMedia('(prefers-color-scheme: dark)').matches){
  setDarkMode()
}
//change theme by click button
document.querySelector('a#themeToggle').addEventListener("click", () => {
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
  document.querySelector('a#themeToggle').setAttribute('title', 'Change to Light Theme')
  document.querySelector('a#themeToggle').innerHTML = '<svg><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>'
}
function setLightMode(){
  document.documentElement.removeAttribute('darkTheme');
  document.querySelector('a#themeToggle').setAttribute('title', 'Change to Dark Theme')
  document.querySelector('a#themeToggle').innerHTML = '<svg><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>'
}
/**************************Theme change******************************/
/********************************************************************/



/********************************************************************/
/**************************Switch Panel******************************/

document.querySelector('ul#navLinks').addEventListener('click',(e)=>{
  
  //if A tag is clicked and A.parent Li is not 'seleted'
  if (e.target.tagName=="A" && !e.target.parentElement.hasAttribute("selected")) {
    //hide the panel is currently shown, the Lis class name stores corresponding panel id
    document.querySelector(`div#${document.querySelector('ul#navLinks > li[selected=true]').className}`).setAttribute("hidden", "true");
    // unhide panel tobe displayed
    document.querySelector(`div#${e.target.parentElement.className}`).removeAttribute("hidden");
    //remove selected Attribute from currently shown li
    document.querySelector('ul#navLinks > li[selected=true]').removeAttribute("selected");
    // add new selected li Attribute 
    e.target.parentElement.setAttribute("selected", "true")

    //navBarMove
    let navBarMove = document.querySelector("div#navBarMove")
    let lastTop = navBarMove.offsetTop;
    const height = 38;
    let thisTop = e.target.offsetTop;

    //move bar to destination
    navBarMove.style.top = thisTop+'px';
    navBarMove.style.animation = `myMove${thisTop} 0.25s ease-in-out`;

    if (thisTop>lastTop){
      navBarMove.querySelector('style').innerHTML=`
        @keyframes myMove${thisTop} {
          0%{top:${lastTop}px;}
          30%{top:${lastTop}px; height: ${thisTop-lastTop+height}px;}
          100%{top:${thisTop}px;}
      } `
    } else {
      navBarMove.querySelector('style').innerHTML=`
      @keyframes myMove${thisTop} {
        0%{top:${lastTop}px;}
        30%{top:${thisTop}px; height: ${-thisTop+lastTop+height}px;}
        100%{top:${thisTop}px;}
      } `
    }
  }
})

/**************************Switch Panel******************************/
/********************************************************************/



//show hide setting meun
var settingButton = document.getElementById('settingButton');
var settingMeun = document.getElementById('settingMeun');
settingButton.addEventListener('click', (e) => {
  e.stopPropagation();
  settingMeun.classList.toggle("hidden");
})

//drag and adjust width of control panel
var controlPanel = document.getElementById("controlPanel");
var resizeBar = document.getElementById("resizeBar");
var previewPanel = document.getElementById("previewPanel");

resizeBar.onmousedown = (e) => {
  var startX = e.clientX;
  var controlPanel_width = parseFloat(window.getComputedStyle(controlPanel)['width'])
  var previewPanel_width = parseFloat(window.getComputedStyle(previewPanel)['width'])

  document.onmousemove = (e) => {
    var endX = e.clientX;
    var deltaX = endX - startX;
    // && (previewPanel_width - deltaX >= 600)
    if ((controlPanel_width + deltaX) >= 340 ) {
      controlPanel.style.width = controlPanel_width + deltaX  + "px";
    }  
  }
  
  document.onmouseup = (e) =>{
    document.onmousemove = null;
    document.onmouseup = null;
    resizeBar.releaseCapture && resizeBar.releaseCapture();
  }
  resizeBar.setCapture && resizeBar.setCapture();
  return false
}

var profileTable = document.getElementById('profileTable')
var rowTemplate = `<div class="TableCell column0"><span class="highCyc" title="Add a line before">+</span><span class="rowNo" title="Adjust line order">1</span><span class="lowCyc" title="Add a line after">+</span></div><div class="TableCell column1"><input type="text" class="depth">~<input type="text" class="depth"></div><div class="TableCell column2"><span class="soilLegend" title="Add a line after"></span> <input type="text" class="soilType"></div><div class="TableCell column3"><textarea class="description"></textarea> <span class="editThisLine"><svg viewBox="0 0 24 24"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg></span> <span class="deleteThisLine"><svg  viewBox="0 0 24 24"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></span></div>`
var profileTableRow = profileTable.getElementsByClassName('TableRow')
var rowNo = profileTable.getElementsByClassName('rowNo')

// row number refresher
function refreshRowNo (){
  for (let i=0, len = profileTableRow.length; i<len; i++) {
    profileTableRow[i].getElementsByClassName('rowNo')[0].innerHTML = i+1
  }
}

//click events
profileTable.addEventListener('mousedown', (e) => {
  // insert New Row
  if(e.target.classList == "highCyc" || e.target.classList == "lowCyc"){
    let currentRow = e.target.parentElement.parentElement;
    let newRow = document.createElement('div');
    newRow.classList.add('TableRow');
    newRow.innerHTML = rowTemplate;
    if(e.target.classList == "highCyc"){
      // add before 
      currentRow.before(newRow)
    }else{
      currentRow.after(newRow)
    }
    // refreshRowNo ()
  }
  // add a new line 
  if (e.target.classList == "addNewLine"){
    let currentRow = e.target.parentElement.parentElement;
    let newRow = document.createElement('div');
    newRow.classList.add('TableRow');
    newRow.innerHTML = rowTemplate;
    profileTable.insertBefore(newRow, currentRow)
    // refreshRowNo ()
  }
  // delete a line 
  if (e.target.classList == "deleteThisLine"){
    e.target.parentElement.parentElement.remove()
    // refreshRowNo ()
  }
  //drag
  if (e.target.classList == "rowNo"){
        e.preventDefault();
        let dragObj = e.target.parentElement.parentElement
        let currenIndex, previousIndex;
        let itemDomList = document.getElementsByClassName('TableRow');
        let listLength = itemDomList.length;
        let startY = e.clientY;
        let selectIndex;
        Array.from(itemDomList).forEach((v, i) => {
          if (v === dragObj) {
            selectIndex = i;
          }
        });
        let holdItemDom = document.createElement("div");
        holdItemDom.classList.add('placeHolderLine');
        dragObj.after(holdItemDom);
        dragObj.classList.add('draggedLine');
        dragObj.style.top = dragObj.clientHeight * (selectIndex +1) + 'px';
        let itemHeight = dragObj.clientHeight;
        let topIndex = selectIndex;
        let startTop = dragObj.style.top;
        previousIndex = Math.ceil((parseInt(startTop) - itemHeight / 2) / itemHeight);
        document.onmousemove = function (e) {
          e.preventDefault();
          dragObj.classList.add('draggedLine');
          let moveY = e.clientY;
          let presentTop = parseInt(startTop) + (moveY - startY);
          if (presentTop > listLength && presentTop < itemHeight*(listLength+1)){
            dragObj.style.top = presentTop + 'px';
          }      
          currenIndex = Math.ceil((presentTop - itemHeight / 2) / itemHeight) -1;
          if (currenIndex < 0) currenIndex = 0;
          if (currenIndex > listLength - 1) currenIndex = listLength - 1;
          if (previousIndex !== currenIndex) {
            holdItemDom.remove();
            if (previousIndex > currenIndex && currenIndex < topIndex) {
              dragObj.remove();
              itemDomList[currenIndex].before(dragObj);
              dragObj.after(holdItemDom);
            } else {
              let currentItems = document.getElementsByClassName('TableRow');
              currentItems[currenIndex].after(holdItemDom);
            }
            previousIndex = currenIndex;
            if (currenIndex < topIndex) topIndex = currenIndex;
          }
          
        };
        document.onmouseup = function (e) {
          let currentItems = document.getElementsByClassName('TableRow');
          if (currenIndex > topIndex) {
            currentItems[currenIndex].after(dragObj);
          }
          holdItemDom.remove();
          dragObj.classList.remove('draggedLine');
          document.onmousemove = null;
          document.onmouseup = null;
          refreshRowNo ()
        };
  }

refreshRowNo ()
})



var sampleTable = document.getElementById('sampleTable')
var rowTemplate2 = `<div class="TableCell column0"><span class="highCyc" title="Add a line before">+</span><span class="rowNo" title="Adjust line order">1</span><span class="lowCyc" title="Add a line after">+</span></div><div class="TableCell column1"><input type="text" class="depth">~<input type="text" class="depth"></div><div class="TableCell column2"><input type="text" class="PIDReading"></div><div class="TableCell column3"><textarea class="description"></textarea><span class="labAnalysis">   <input type="checkbox"></span><span class="deleteThisLine">    <svg  viewBox="0 0 24 24">        <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>    </svg></span></div>`
var sampleTableTableRow = sampleTable.getElementsByClassName('TableRow')
var rowNo2 = sampleTable.getElementsByClassName('rowNo')

// row number refresher
function refreshRowNo2 (){
  for (let i=0, len = sampleTableTableRow.length; i<len; i++) {
    sampleTableTableRow[i].getElementsByClassName('rowNo')[0].innerHTML = i+1
  }
}

//click events
sampleTable.addEventListener('mousedown', (e) => {
  // insert New Row
  if(e.target.classList == "highCyc" || e.target.classList == "lowCyc"){
    let currentRow = e.target.parentElement.parentElement;
    let newRow = document.createElement('div');
    newRow.classList.add('TableRow');
    newRow.innerHTML = rowTemplate2;
    if(e.target.classList == "highCyc"){
      // add before 
      currentRow.before(newRow)
    }else{
      currentRow.after(newRow)
    }
    // refreshRowNo ()
  }
  // add a new line 
  if (e.target.classList == "addNewLine"){
    let currentRow = e.target.parentElement.parentElement;
    let newRow = document.createElement('div');
    newRow.classList.add('TableRow');
    newRow.innerHTML = rowTemplate2;
    sampleTable.insertBefore(newRow, currentRow)
    // refreshRowNo ()
  }
  // delete a line 
  if (e.target.classList == "deleteThisLine"){
    e.target.parentElement.parentElement.remove()
    // refreshRowNo ()
  }
  //drag
  if (e.target.classList == "rowNo"){
        e.preventDefault();
        let dragObj = e.target.parentElement.parentElement
        let currenIndex, previousIndex;
        let itemDomList = document.getElementsByClassName('TableRow');
        let listLength = itemDomList.length;
        let startY = e.clientY;
        let selectIndex;
        Array.from(itemDomList).forEach((v, i) => {
          if (v === dragObj) {
            selectIndex = i;
          }
        });
        let holdItemDom = document.createElement("div");
        holdItemDom.classList.add('placeHolderLine');
        dragObj.after(holdItemDom);
        dragObj.classList.add('draggedLine');
        dragObj.style.top = dragObj.clientHeight * (selectIndex +1) + 'px';
        let itemHeight = dragObj.clientHeight;
        let topIndex = selectIndex;
        let startTop = dragObj.style.top;
        previousIndex = Math.ceil((parseInt(startTop) - itemHeight / 2) / itemHeight);
        document.onmousemove = function (e) {
          e.preventDefault();
          dragObj.classList.add('draggedLine');
          let moveY = e.clientY;
          let presentTop = parseInt(startTop) + (moveY - startY);
          if (presentTop > listLength && presentTop < itemHeight*(listLength+1)){
            dragObj.style.top = presentTop + 'px';
          }      
          currenIndex = Math.ceil((presentTop - itemHeight / 2) / itemHeight) -1;
          if (currenIndex < 0) currenIndex = 0;
          if (currenIndex > listLength - 1) currenIndex = listLength - 1;
          if (previousIndex !== currenIndex) {
            holdItemDom.remove();
            if (previousIndex > currenIndex && currenIndex < topIndex) {
              dragObj.remove();
              itemDomList[currenIndex].before(dragObj);
              dragObj.after(holdItemDom);
            } else {
              let currentItems = document.getElementsByClassName('TableRow');
              currentItems[currenIndex].after(holdItemDom);
            }
            previousIndex = currenIndex;
            if (currenIndex < topIndex) topIndex = currenIndex;
          }
          
        };
        document.onmouseup = function (e) {
          let currentItems = document.getElementsByClassName('TableRow');
          if (currenIndex > topIndex) {
            currentItems[currenIndex].after(dragObj);
          }
          holdItemDom.remove();
          dragObj.classList.remove('draggedLine');
          document.onmousemove = null;
          document.onmouseup = null;
          refreshRowNo2 ()
        };
  }

refreshRowNo2 ()
})



