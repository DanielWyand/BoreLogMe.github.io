/*************************date picker********************************/
const datePicker = {
    clickEvent: function(event){
        let selectedYear  = document.querySelector('input.selectedYear').value;
        let selectedMonth = document.querySelector('input.selectedMonth').value;
        if (event.target.classList.contains('nextMonth')) {
            selectedMonth = parseInt(selectedMonth)+1
            if (selectedMonth==13){
                selectedMonth=1;
                document.querySelector('input.selectedYear').value = parseInt(selectedYear)+1;
            }
            console.log('To nextMonth:'+ selectedMonth)
            document.querySelector('input.selectedMonth').value = selectedMonth;
            this.updateCalendar();
        }
        if (event.target.classList.contains('previousMonth')) {
            selectedMonth = parseInt(selectedMonth)-1
            if (selectedMonth==0){
                selectedMonth=12;
                document.querySelector('input.selectedYear').value = parseInt(selectedYear)-1;
            }
            console.log('To previousMonth'+ selectedMonth)
            document.querySelector('input.selectedMonth').value = selectedMonth;
            this.updateCalendar();
        }
        if (event.target.classList.contains('days')) {
            let currentDateStr = document.querySelector('input.drillDate').value;
            if (/^2\d{3}\/\d{1,2}\/\d{1,2}$/.test(currentDateStr) && 
                Date.parse(currentDateStr) &&
                new Date(currentDateStr)-new Date(event.target.dataset.date)<0 ) {
                document.querySelector('input.drillDate').value += ('~'+event.target.dataset.date);
            } else {
                document.querySelector('input.drillDate').value = event.target.dataset.date;
            }
            this.updateCalendar();
        }
        if (event.target.classList.contains('today')) {
            document.querySelector('input.drillDate').value = new Date().format('yyyy/MM/dd')
            document.querySelector('input.selectedYear').value =new Date().getFullYear();
            document.querySelector('input.selectedMonth').value =new Date().getMonth()+1;
            datePicker.updateCalendar();
        }
        if (event.target.classList.contains('clear')) {
            document.querySelector('input.drillDate').value =''
            this.updateCalendar();
        }
        // if (event.target.tagName=='INPUT') {event.target.focus()}
    },

    updateCalendar: function(){

        let [dateStr1, dateStr2] = this.getDateFromInput();
        if(! isNaN(Date.parse(dateStr1))){
            console.log('youdiandongxi')
            console.log(dateStr1)
            let date = new Date(dateStr1)
            document.querySelector('input.selectedYear').value = date.getFullYear();
            document.querySelector('input.selectedMonth').value = date.getMonth()+1;
        }

        let yearStr  = document.querySelector('input.selectedYear').value;
        let monthStr = document.querySelector('input.selectedMonth').value;
        
        console.log('updateCalendar...')
        let dateTbody = document.querySelector('tbody.dateTbody');
        let days = this.getDateToShow(yearStr, monthStr);
        let trs = '';
        for (let i=0; i<42; i+=7){
            let tds = ''
            for (let j=0;j<7;j++){
                let day = days[i+j];
                let otherMonth = day.month == monthStr ? '':'otherMonth';
                let thisDateStr = `${day.year}/${day.month}/${day.date}`
                let styeleClass =''
                if (dateStr1 != '') {
                    if (new Date(thisDateStr) - new Date(dateStr1)==0) {console.log('start'); styeleClass +=' start '}
                    if (new Date(thisDateStr) - new Date(dateStr2)==0) {console.log('end'); styeleClass +=' end '}
                    if (new Date(dateStr1) < new Date(thisDateStr) && new Date(thisDateStr) < new Date(dateStr2)) {console.log('duration');styeleClass ='duration'}
                }
                tds += `<td class='days ${otherMonth} ${styeleClass}' data-date="${thisDateStr}">${day.date}</td>`;               
            }
            trs += '<tr>'+tds+'</tr>';
        }
        dateTbody.innerHTML = trs
    },

    getDateFromInput: function(){
        let dateStr = document.querySelector('input.drillDate').value.split(/~|;|,/);   
        if (dateStr[0]==''){return []}

        let date1 = new Date(dateStr[0])
        let date2 = new Date(dateStr[1])
        let res = []

        if (Date.parse(date1)) {
            res.push(date1.format('yyyy/MM/dd'))
        } else {
            let today = new Date().format('yyyy/MM/dd');
            return [today,today]
        }

        if (Date.parse(date2) && date2-date1>0){
            res.push(date2.format('yyyy/MM/dd'))
        } else {
            res.push(date1.format('yyyy/MM/dd'))
        }
        return res;
    },

    getDateToShow: function(year, month){
        let ret = [];
        //month 1~12
        if(!year || !month){
            let today = new Date();
            year = today.getFullYear();
            month = today.getMonth()+1;
        }
        let firstDay = new Date(year, month-1,1);
        let firstDayWeekDay = firstDay.getDay();
        if (firstDayWeekDay === 0){
            firstDayWeekDay = 7;
        }

        let lastDayOfLastMonth = new Date(year, month-1, 0);
        let lastDateOfLastMonth = lastDayOfLastMonth.getDate();

        let previousMonthDayToShow = firstDayWeekDay - 1;
        let lastDay = new Date(year, month, 0);
        let lastDate = lastDay.getDate();

        for (let i=0; i<42; i++){
            let dateCount = i + 1 - previousMonthDayToShow;
            let showDate = dateCount;
            let showMonth = month;
            let showYear = year

            if(dateCount <= 0){
                showMonth = month*1 - 1;
                showDate = lastDateOfLastMonth + dateCount;
            }else if(dateCount > lastDate){
                showMonth = month*1 + 1;
                showDate = showDate -lastDate;
            } 
            if(showMonth === 0){
                showMonth = 12;
                showYear --
            }
            if(showMonth === 13){
                showMonth = 1;
                showYear ++
            }
            ret.push({
                year: showYear,
                month: showMonth,
                date: showDate
            })
        }
        return ret
    },

    init: function(){
        document.querySelector('div.fillingField input.drillDate').onfocus = () =>{this.updateCalendar()};
        document.querySelector('div.datePicker').onclick = () =>{this.clickEvent(event)};
        document.querySelector('input.selectedYear').onchange = () =>{this.updateCalendar()};
        document.querySelector('input.selectedMonth').onchange = () =>{this.updateCalendar()};
        let dateStr1 = this.getDateFromInput()[0];
        let initdate;
        isNaN(Date.parse(dateStr1)) ? initdate = new Date() : initdate = new Date(dateStr1)
        let year = initdate.getFullYear();
        let month = initdate.getMonth()+1;
        console.log('init DatePiacker, current YYYY/MM: '+year+" / "+month);
        document.querySelector('input.selectedYear').value = year;
        document.querySelector('input.selectedMonth').value = month;
        this.updateCalendar();
    }
}
datePicker.init()
/********************************************************************/

/*************************Reorder************************************/
const reorder =  {
    targetUnit : null, 
    targetContainer : null, 
    allUnits : null,
    targetIndex : 0,
    isDragging : false,
    mouseOrigY  : 0, 
    mouseDeltaY  : 0, 
    moveStep : 0,
    currentPosIndex : 0,
    targetHeight : 0,
    gapHeight : 5,
    handleMouseDown: function(e){
        console.log('down')
        // console.log(e.currentTarget)
        this.targetUnit = e.currentTarget.closest('div.dragUnit')
        this.targetContainer = this.targetUnit.parentNode;
        this.targetHeight = parseFloat(getComputedStyle(this.targetUnit).height)
        this.allUnits = this.targetContainer.querySelectorAll('div.dragUnit')
        this.allUnits.forEach((unit, index)=>{
            if (unit === this.targetUnit){
                this.targetIndex = index;
            }
        })
        this.isDragging = true;
        this.mouseOrigY = e.clientY;
        this.targetUnit.style.transition = "none";
        this.targetUnit.style.zIndex = 999;

        document.onmousemove = (e)=>{reorder.handleMouseMove(e)}
        document.onmouseup = (e)=>{reorder.handleMouseUp(e)}
    },

    handleMouseMove: function(e){
      if(this.isDragging){
        this.mouseDeltaY = e.clientY - this.mouseOrigY;
        this.targetUnit.style.transform = `translateY(${this.mouseDeltaY}px)`;
        this.moveStep = parseInt(this.mouseDeltaY /  (this.gapHeight +  this.targetHeight))
        this.currentPosIndex = this.moveStep + this.targetIndex;

        for (let i = 0; i < this.allUnits.length; i++) {
          if (i !== this.targetIndex) {this.allUnits[i].style.transform = "translateY(0px)";}
        }

        let moveHeight =  this.targetHeight + this.gapHeight
        if (this.currentPosIndex > this.targetIndex) {
          const needMoveCount = this.currentPosIndex - this.targetIndex;
          for (let i = 1; i <= needMoveCount; i++) {
            if ((this.targetIndex + i) !== (this.allUnits.length)) {
                this.allUnits[this.targetIndex + i]
                ? (this.allUnits[this.targetIndex + i].style.transform = `translateY(-${moveHeight}px)`)
                : "";
            }
          }
        } else if (this.currentPosIndex < this.targetIndex) {
          const needMoveCount = this.targetIndex - this.currentPosIndex;
          for (let i = 1; i <= needMoveCount; i++) {
                this.allUnits[this.targetIndex - i]
                ? (this.allUnits[this.targetIndex - i].style.transform = `translateY(${moveHeight}px)`)
                : "";
          }
        }
      }
    },

    handleMouseUp: function(e){
        if (this.moveStep < 0 - this.targetIndex) {
            this.moveStep = -this.targetIndex;
            } else if (this.moveStep > this.allUnits.length - this.targetIndex - 1) {
            this.moveStep = this.allUnits.length - this.targetIndex - 1;
            }

        this.targetUnit.style.zIndex = 0;

        if (this.currentPosIndex !== this.targetIndex) {
            
            if (this.currentPosIndex < 0) {
            this.currentPosIndex = 0;
            } else if (this.currentPosIndex > this.allUnits.length - 1) {
            this.currentPosIndex = this.allUnits.length - 1;
            }
        
            if (this.currentPosIndex < this.targetIndex) {
            this.targetContainer.insertBefore(this.targetUnit, this.allUnits[this.currentPosIndex]);
            } else {
            this.targetContainer.insertBefore(this.targetUnit, this.allUnits[this.currentPosIndex + 1]);
            }
        }

        this.allUnits.forEach((item) => {
        item.style.transition = "none";
        item.style.transform = "";
        });

        setTimeout(()=>{
            this.allUnits.forEach((item) => {
            item.style.transition = '';
            });
        },200)  

        document.onmousemove = null
        document.onmouseup = null
    }   
}
/********************************************************************/

const patternSelector = {
    container : document.querySelector('div#patternSelector'),
    patternName: document.querySelector('div#patternSelector input.patternName'),
    patternColor: document.querySelector('div#patternSelector input.patternColor'),
    cancelButton: document.querySelector('div#patternSelector span.cancel'),
    confirmButton: document.querySelector('div#patternSelector span.confirm'),
    patternPreview: document.querySelector('div#patternSelector div.patternPreview'),
    target:null,
    
    init(){
        Object.keys(pattern).forEach(patternName => {
            if (patternName=='get'){return 0}
            let patternDiv = document.createElement('div');
            this.patternPreview.appendChild(patternDiv)
            patternDiv.className = `pattern ${patternName}`;
            patternDiv.innerHTML +=
            `
                <svg height="100%" width="100%">
                    <defs>${pattern[patternName]}</defs>
                    <rect x="0" y="0" height="100%" width="100%" fill="url(#${patternName})"></rect>
                </svg>
                <span>${patternName}</span>
            `
            patternDiv.onclick = () =>{this.selectPattern(patternName)}
        })
        this.listenEvents()
    },
    hide(){
        this.container.style.display = 'none';
        this.target = null;
        this.patternName.value = ''
        this.patternColor.value = ''
    },
    show(top){
        this.container.style.display = 'block';
        this.container.style.top = top + 'px'

        let materialType =  this.target.record[2].replace(' ','').toLowerCase()
        this.selectPattern(materialType)
        this.container.focus()
    },
    selectPattern(patternName){
        this.patternPreview.querySelectorAll('.pattern').forEach(div=>{
            div.classList.remove('active')
        })
        if (Object.keys(pattern).indexOf(patternName) != -1){
            this.patternPreview.querySelector(`.${patternName}`).classList.add('active');
            this.patternName.value = patternName
        }
    },
    listenEvents(){
        this.container.onmousedown = (e)=>{e.preventDefault()}
        this.container.onblur = ()=>{this.hide();}
        this.cancelButton.onclick = ()=>{this.hide();}

        this.confirmButton.onclick = ()=>{
            soilDescriber.previewPattern(this.target.patternDiv,this.patternName.value,this.patternColor.value)
            this.hide()
            soilDescriber.export()
        }

        this.container.onclick = (e)=>{
            if (e.target.classList.contains('pattern')){
                this.patternName.value = e.target.classList[1]
            }
        }

        this.container.querySelectorAll('.color').forEach(span=>{
            span.onclick = (e) =>{
                console.log(e.target.style.backgroundColor)
                this.patternColor.value = e.target.classList[1]
            }
        })
        this.container.querySelector('input.colorInput').onchange = (e)=>{
            this.patternColor.value = e.target.value
        }
    }
}

/*************************Log List*********************************/
const logSelector = {
    logId:null,
    logNameInput : document.querySelector("input#currentLog"),
    logList : document.querySelector("div#logList"),
    logListToggle : document.querySelector("a#showLogListButton"),
    addLogButton : document.querySelector("a#addLogButton"),
 
    load(){
        if (this.logId){ 
            this.logNameInput.value = report.logCollection[this.logId].locationId
            this.logNameInput.dataset.logId = this.logId;
            soilSampler.logId = this.logId
            infoManger.logId = this.logId
            soilDescriber.logId = this.logId
            inputControler.logId = this.logId
        }else{
            console.log('logId undefined')
        }
    },
    init(){
        //to capture click event in case logNme input is disabled
        document.querySelector("div#currentLogClickCapture").addEventListener('click', (e)=>{
            e.stopPropagation();
            if (currentLog.disabled) {currentLog.disabled=false; currentLog.focus();} 
          })
        //disable the input when enterkey pushed or input area is blur
        this.logNameInput.onkeyup = (e) => {if (e.keyCode == 13) {currentLog.disabled=true}}
        this.logNameInput.onblur = () => {currentLog.disabled=true}

        //currentLog value changed, rename log location ID 
        this.logNameInput.onchange = ()=>{
            // let logId = currentLog.dataset.logId;
            //set svg Log data tag
            document.querySelector(`svg#${this.logId}`).dataset.name = this.logNameInput.value;
            //set svg Log display location ID
            document.querySelector(`svg#${this.logId} .dataValue .locationId`).innerHTML = this.logNameInput.value;
            //update loaction id in logList
            document.querySelector(`div#logList div[data-log-id=${this.logId}] .locationId`).innerHTML = this.logNameInput.value;
            //and also update pageliks
            document.querySelector(`div#pageLinks div[data-log-id=${this.logId}] a`).innerHTML = this.logNameInput.value;
            //update logcollection object
            report.logCollection[this.logId].locationId = this.logNameInput.value
        }

        //show logList on toggle click
        this.logListToggle.onclick = () =>{
            this.logList.removeAttribute("hidden")
            this.logListToggle.focus();
        }
        //hide logList when onBlur
        this.logListToggle.onblur = ()=>{
            this.logList.setAttribute("hidden", "true")
        }
        
        this.logList.onmousedown = (e)=>{e.preventDefault()}
        this.logList.onclick = (e)=>{
            if (e.target.classList.contains('locationId') ) {
                report.activeLog (e.target.parentElement.dataset.logId);
            }
            if (e.target.classList.contains('delete') ) {
                let logIdtoRemove = e.target.parentElement.dataset.logId;
                document.querySelector(`svg#${logIdtoRemove}`).remove();
            } 
        }
        this.addLogButton.onclick = () =>{
            report.activeLog (report.addNew())
        }
    }

}
logSelector.init()
/********************************************************************/


/*************************Info manger*********************************/
const inputControler = {
    logId : null,
    manualRefresh : document.querySelector('div.inputControl span.manualRefresh'),
    loadTemplate : document.querySelector('div.inputControl span.loadTemplate'),
    saveAsTemplate : document.querySelector('div.inputControl span.saveAsTemplate'),
    fillingFieldDiv : document.querySelector('div.inputControl'),
    wellInstalled : document.querySelector('div.inputControl input#wellInstalled'),
    autoAxis : document.querySelector('div.inputControl input#autoAxis'),
    maxTrickDepth : document.querySelector('div.inputControl input.maxTrickDepth'),
    majorTrick : document.querySelector('div.inputControl input.majorTrick'),
    fieldName : ['wellHead',
                'casingSize',
                'totalWellDepth',
                'bentoniteSealingDepth',
                'screenIntervalFrom',
                'screenIntervalTo',
                'topOfCasingElevation',
                'groundElevation',
                'staticWaterLevel'],
    init(){
        this.manualRefresh.onclick = ()=>{
            report.logCollection[this.logId].refresh()
        }
        this.loadTemplate.onclick = () =>{
            Object.keys(report.template).forEach(key =>{
                report.logCollection[this.logId][key] = report.template[key];
            })
            report.activeLog(this.logId);
        }
        this.saveAsTemplate.onclick = () =>{
            Object.keys(report.template).forEach(key =>{
                report.template[key] = report.logCollection[this.logId][key];
            })
        }
        this.maxTrickDepth.onchange =  (e) => {
            if (e.target.value !== ''){
                console.log(e.target.className+' changed to:'+e.target.value)
                report.logCollection[this.logId].maxTrickDepth = e.target.value;
            }
        }    
        this.majorTrick.onchange = (e) => {
            if (e.target.value !== ''){
                console.log(e.target.className+' changed to:'+e.target.value)
                report.logCollection[this.logId].majorTrick = e.target.value;
            }
        }    
        this.autoAxis.onchange = (e) =>{
            if (e.target.checked){
                this.maxTrickDepth.disabled = true;
                this.majorTrick.disabled = true;
            } else {
                this.maxTrickDepth.disabled = false;
                this.majorTrick.disabled = false;
            }
        }  
        this.autoAxis.checked = true;
        this.maxTrickDepth.disabled = true;
        this.majorTrick.disabled = true;

        this.wellInstalled.onchange = (e) =>{
            report.logCollection[this.logId].wellInstalled = e.target.checked 
            if (e.target.checked){
                this.fieldName.forEach(field =>{
                    document.querySelector(`details#projectDetials div.${field}`).style.display = ''
                })
            } else {
                this.fieldName.forEach(field =>{
                    document.querySelector(`details#projectDetials div.${field}`).style.display = 'none'
                })
            }
        }
        this.wellInstalled.checked = true;                
    },
    load(){
        if (this.logId){ 
            this.maxTrickDepth.value = report.logCollection[this.logId].maxTrickDepth;
            this.majorTrick.value = report.logCollection[this.logId].majorTrick;
            this.wellInstalled.checked = report.logCollection[this.logId].wellInstalled;
            if (this.wellInstalled.checked){
                this.fieldName.forEach(field =>{
                    document.querySelector(`details#projectDetials div.${field}`).style.display = ''
                })
            } else {
                this.fieldName.forEach(field =>{
                    document.querySelector(`details#projectDetials div.${field}`).style.display = 'none'
                })
            }
        }else{
            console.log('logId undefined')
        }
    },
    updateAxis(){
        if(this.autoAxis.checked){
            let max = Math.ceil(this.getMaxDepth()/2)*2;
            if(max <= 6) { return 0}
            let major = (max / 6 < 1) ? 0.5 : Math.ceil(max / 6);
            this.maxTrickDepth.value = max;
            this.majorTrick.value = major;
            report.logCollection[this.logId].maxTrickDepth = max;
            report.logCollection[this.logId].majorTrick = major;
        }
    },
    getMaxDepth(){
        let numbers = [0,
            parseFloat(report.logCollection[this.logId].totalWellDepth),
            parseFloat(report.logCollection[this.logId].bentoniteSealingDepth),
            parseFloat(report.logCollection[this.logId].screenIntervalFrom),
            parseFloat(report.logCollection[this.logId].screenIntervalTo)
            ]
        report.logCollection[this.logId].subsurfaceProfile.forEach(record=>{
            numbers.push(parseFloat(record[1]))
        })
        report.logCollection[this.logId].soilSample.forEach(record=>{
            numbers.push(parseFloat(record[1]))
        })
        numbers = numbers.filter(x=>{return !isNaN(x)})
        return Math.max(...numbers)
    }
}
inputControler.init()
/********************************************************************/


/*************************Info manger*********************************/
const infoManger = {
    logId : null,
    fillingFieldDiv : document.querySelectorAll('div#filePanel div.fillingField'),
    inputFieldsName : [ 'projectNo',
                        'projectTitle',
                        'client',
                        'loggedBy',
                        'reviewedBy',
                        'approvedBy',
                        'coordSys',
                        'xCoord',
                        'yCoord',
                        'drillDate',
                        'drilledBy',
                        'drillMethod',
                        'holeSize',
                        'initialWaterLevel',
                        'wellHead',
                        'casingSize',
                        'totalWellDepth',
                        'bentoniteSealingDepth',
                        'screenIntervalFrom',
                        'screenIntervalTo',
                        'topOfCasingElevation',
                        'groundElevation',
                        'staticWaterLevel' ],
    init(){
        this.fillingFieldDiv.forEach((field)=>{
            this.listenEvents(field)
        })
    },
    load(){
        if (this.logId){ 
            this.inputFieldsName.forEach((fieldName)=>{
                let value = report.logCollection[this.logId][fieldName];
                document.querySelector(`input.${fieldName}`).value = value=='NULL'?'':value
                })
        }else{
            console.log('logId undefined')
        }
    },
    listenEvents(fillingField){
        let emptyInput = fillingField.querySelector('span.emptyInput');
            emptyInput.onmousedown=(e)=>{e.preventDefault()}
            emptyInput.onclick=(e)=>{e.target.parentNode.querySelector('input').value=''}
        
        let dropDownList = fillingField.querySelector('div.dropDownList');
        if (dropDownList) {
            dropDownList.onmousedown=(e)=>{e.preventDefault()}
            dropDownList.onclick=(e)=>{
                if(e.target.tagName=="SPAN"){
                    e.target.parentNode.parentNode.querySelector('input').value=e.target.innerHTML;
                    e.target.parentNode.parentNode.querySelector('input').blur();
                }
            }
        }
        let inputField = fillingField.querySelector('input');
            inputField.onkeyup=(e)=>{if (e.keyCode == 13) {e.target.blur()}}
            inputField.onblur=(e)=>{
                if (e.target.value !== ''){
                    let receiver = report.logCollection[this.logId]
                    let value = e.target.value
                    receiver[e.target.className] = value;
                    switch(e.target.className){  
                        case 'drillDate': 
                            if (/^2\d{3}\/\d{1,2}\/\d{1,2}$/.test(value) || 
                                /^2\d{3}\/\d{1,2}\/\d{1,2}~2\d{3}\/\d{1,2}\/\d{1,2}$/.test(value)
                                ){
                                e.target.setAttribute('validation',"valid"); break;
                            } else {
                                e.target.setAttribute('validation',"invalid"); break;
                            }
                        case 'bentoniteSealingDepth':
                            if (parseFloat(value) <= parseFloat(receiver.screenIntervalFrom) ||  receiver.screenIntervalFrom == 'NULL')
                            { 
                                e.target.removeAttribute('validation'); break;
                            } else { 
                                e.target.setAttribute('validation',"invalid"); break;
                            }
    
                        case 'screenIntervalFrom':
                            if (parseFloat(value) <= parseFloat(receiver.screenIntervalTo) && parseFloat(value) >= parseFloat(receiver.bentoniteSealingDepth) || 
                                parseFloat(value) <= parseFloat(receiver.screenIntervalTo) && receiver.bentoniteSealingDepth == 'NULL' || 
                                receiver.screenIntervalTo == 'NULL'                && value >= parseFloat(receiver.bentoniteSealingDepth) || 
                                receiver.screenIntervalTo == 'NULL'                && receiver.bentoniteSealingDepth == 'NULL' 
                                ){
                                    e.target.removeAttribute('validation'); break;
                            } else {
                                    e.target.setAttribute('validation',"invalid"); break;
                            }
    
                        case 'screenIntervalTo':
                            if (value <= parseFloat(receiver.totalWellDepth) && value >= parseFloat(receiver.screenIntervalFrom) || 
                                value <= parseFloat(receiver.totalWellDepth) && receiver.screenIntervalFrom == 'NULL' || 
                                receiver.totalWellDepth == 'NULL'                && value >= parseFloat(receiver.screenIntervalFrom) || 
                                receiver.totalWellDepth == 'NULL'                && receiver.screenIntervalFrom == 'NULL' 
                                ){
                                    e.target.removeAttribute('validation'); break;
                            } else {
                                    e.target.setAttribute('validation',"invalid"); break;
                            }
    
                        case 'totalWellDepth':
                            if (value >= parseFloat(receiver.screenIntervalTo) || 
                                receiver.screenIntervalTo == 'NULL'){
                                    e.target.removeAttribute('validation'); break;
                            } else {
                                e.target.setAttribute('validation',"invalid"); break;
                            }
                    }
            }
        }
    }

}
infoManger.init()
/********************************************************************/


/*************************Soil descroipber***************************/
const soilDescriber = {
    logId : null,
    container : document.querySelector('details#subsurfaceProfile>div.soilProfileContainer'),
    addLineButton :  document.querySelector('details#subsurfaceProfile > div.addNewLine'),
    template : `
        <div class="profileContent">
            <div class="materialType">
                <input type="text" class="materialType" placeholder="Material Type">                    
                <div class="pattern">
                </div>
                <div class="viewMaterialTypeList">
                    <svg height='14px' viewBox="0 0 24 24"><use xlink:href="#icon-viewList"></use></svg>
                </div>
            </div>
            <div class="depth">
                <input type="number" class="depthFrom" placeholder="#0.00">
                ~
                <input type="number" class="depthTo" placeholder="#0.00">
                m bgs 
            </div>
            <div class="more" tabindex='-1'>
                <svg height='14px' viewBox="0 0 24 24"><use xlink:href="#icon-dots-vertical"></use></svg>
            </div>
            <div class="moreActions">
                <span class="insertBefore" title="Insert Before">
                    <svg height='15px' transform="rotate(180,0,0)"><use xlink:href="#icon-RowInsert"></use></svg>
                </span>
                <span class="insertAfter" title="Insert After">
                    <svg height='15px'><use xlink:href="#icon-RowInsert"></use></svg>
                </span>
                <span  class="deleteRow" title="Delete Row">
                    <svg height='15px'><use xlink:href="#icon-RowDelete"></use></svg>
                </span>
            </div>
        </div>
        <div class="descriptionArea">
            <textarea class="description" placeholder="Soil profile description here"></textarea>
        </div>`,

    init(){
        this.addLineButton.onclick = ()=>{this.addLine(null,null,null)}
        this.addLineButton.click()
        new MutationObserver(()=>{this.validator(); this.export()}).observe(this.container, {childList: true});
    },
    load(){
        if (this.logId){ 
            let subsurfaceProfile = report.logCollection[this.logId].subsurfaceProfile;
            this.container.innerHTML = '';
                subsurfaceProfile.forEach((record)=>{
                this.addLine(null, null, record);
                })
        }else{
            console.log('logId undefined')
        }
    },
    export(){
        if (this.logId){
            let subsurfaceProfile = []
            let soilProfileDiv = this.container.querySelectorAll('div.soilProfile');
            soilProfileDiv.forEach((div)=>{
                let record = [];
                record.push(div.querySelector('input.depthFrom').value);
                record.push(div.querySelector('input.depthTo').value);
                record.push(div.querySelector('input.materialType').value);
                record.push(div.querySelector('textarea.description').value);
                record.push([div.querySelector('div.pattern').dataset.patternName,div.querySelector('div.pattern').dataset.patternColor])
                subsurfaceProfile.push(record)
            })
            report.logCollection[this.logId].subsurfaceProfile = subsurfaceProfile
        }else{
            console.log('logId undefined')
        }
    },
    addLine(soilprofileDiv,location,record){
        let newSoilProfileDiv = document.createElement('div');
        newSoilProfileDiv.classList.add('soilProfile');
        newSoilProfileDiv.classList.add('dragUnit');
        newSoilProfileDiv.innerHTML = this.template;

        if (soilprofileDiv && location=='before'){
            this.container.insertBefore(newSoilProfileDiv, soilprofileDiv)
        }else if(soilprofileDiv && location=='after'){
            this.container.insertBefore(newSoilProfileDiv, soilprofileDiv.nextSibling);
        }else{
            this.container.appendChild(newSoilProfileDiv)
        }

        if (record) {
            this.fill(newSoilProfileDiv, record)
        }else{
            let previousDepthTo = newSoilProfileDiv.previousElementSibling&&newSoilProfileDiv.previousElementSibling.querySelector('input.depthTo').value;
            if (previousDepthTo){
                newSoilProfileDiv.querySelector('input.depthFrom').value=parseFloat(previousDepthTo).toFixed(2)
                newSoilProfileDiv.querySelector('input.depthTo').value=parseFloat(previousDepthTo).toFixed(2)
            } else{
                newSoilProfileDiv.querySelector('input.depthFrom').value=''
                newSoilProfileDiv.querySelector('input.depthTo').value=''
            }
            
        }       
        this.listenEvents(newSoilProfileDiv)
    },

    validator(){
        this.container.querySelectorAll('.soilProfile').forEach((soilprofileDiv, index)=>{
            let depthFrom = soilprofileDiv.querySelector('input.depthFrom');
            depthFrom.removeAttribute('validation')
            let depthTo = soilprofileDiv.querySelector('input.depthTo');
            depthTo.removeAttribute('validation')

            if (index == 0 && parseFloat(depthFrom.value) != 0){
                console.log('1')
                depthFrom.setAttribute('validation',"invalid")
            }
            if (parseFloat(depthFrom.value) >= parseFloat(depthTo.value)){
                console.log('type2')
                depthFrom.setAttribute('validation',"invalid")
                depthTo.setAttribute('validation',"invalid")
            }
            if (soilprofileDiv.previousElementSibling && 
                depthFrom.value != soilprofileDiv.previousElementSibling.querySelector('input.depthTo').value){   
                    console.log('3')
                    depthFrom.setAttribute('validation',"invalid")
            }

            if (soilprofileDiv.nextElementSibling &&
                depthTo.value != soilprofileDiv.nextElementSibling.querySelector('input.depthFrom').value){          
                    console.log('4')
                    depthTo.setAttribute('validation',"invalid")
            }
        })
    },
    fill(soilprofileDiv, record){
        soilprofileDiv.querySelector('input.depthFrom').value=parseFloat(record[0]).toFixed(2)
        soilprofileDiv.querySelector('input.depthTo').value=parseFloat(record[1]).toFixed(2)
        soilprofileDiv.querySelector('input.materialType').value=record[2]
        soilprofileDiv.querySelector('textarea.description').value=record[3]
        if (record[4]){
            this.previewPattern(soilprofileDiv.querySelector('div.pattern'),record[4][0],record[4][1])
        } else {
            this.previewPattern(soilprofileDiv.querySelector('div.pattern'),record[2].replace(' ','').toLowerCase())
        }
    },

    previewPattern(patternDiv,patternName,patternColor){
        let res = pattern.get(patternName,patternColor);          
        let patternCode=res.id
        let patternDOM =res.pattern
        patternDiv.innerHTML=`
            <svg height="100%" width="100%">
                <defs>${patternDOM.outerHTML}</defs>
                <rect x="0" y="0" height="100%" width="100%" fill="url(#${patternCode})"></rect>
            </svg>
        `
        patternDiv.dataset.patternName = patternName
        patternDiv.dataset.patternColor = patternColor
    },

    listenEvents(soilprofileDiv) {
        soilprofileDiv.oncontextmenu = (event)=>{
            event.preventDefault()
            console.log(event.target)
            event.target.closest('div.soilProfile').classList.toggle('active')
            event.target.closest('div.soilProfile').querySelector('div.more').focus()
        }

        soilprofileDiv.querySelector('div.pattern').onclick = (e) =>{
            if (!this.logId) {return 0}
            let y = e.target.getClientRects()[0].y - document.querySelector('details#subsurfaceProfile').getClientRects()[0].y
            
            let index = [].indexOf.call(this.container.querySelectorAll('div.soilProfile'), e.target.closest('div.soilProfile'));
            patternSelector.target = {
                record: report.logCollection[this.logId].subsurfaceProfile[index],
                patternDiv: e.target
            }
            patternSelector.show(y)
        }

        let inputField = soilprofileDiv.querySelectorAll('input');
            inputField.forEach((input)=>{
                input.onchange = (e)=>{
                    if (input.classList.contains('depthFrom')){
                        e.target.value = parseFloat(e.target.value).toFixed(2)
                        if (e.target.parentElement.parentElement.parentElement.previousElementSibling){
                            e.target.parentElement.parentElement.parentElement.previousElementSibling.querySelector('input.depthTo').value = e.target.value;
                        }
                        this.validator()
                    } 
                    if (input.classList.contains('depthTo')){
                        e.target.value = parseFloat(e.target.value).toFixed(2);
                        if (e.target.parentElement.parentElement.parentElement.nextElementSibling){
                            e.target.parentElement.parentElement.parentElement.nextElementSibling.querySelector('input.depthFrom').value = e.target.value;
                        }
                        this.validator()
                    }    
                    if (input.classList.contains('materialType')){
                        let index = [].indexOf.call(this.container.querySelectorAll('div.soilProfile'), e.target.closest('div.soilProfile'))
                        if(!report.logCollection[this.logId].subsurfaceProfile[index][4][0]){
                            this.previewPattern(e.target.nextElementSibling,e.target.value)
                        }
                    }                 
                    this.export()}
            })
                
        let textArea = soilprofileDiv.querySelector('textarea')
            textArea.oninput=(e)=>{
                let adjustHeight = e.target.scrollHeight + 1
                console.log(adjustHeight)
                if (adjustHeight > 35 ){
                    e.target.style.height = adjustHeight + 'px';
                }
            }
            textArea.onfocus=(e)=>{
                console.log('focus')
                let adjustHeight = e.target.scrollHeight + 1
                console.log(adjustHeight)
                if (adjustHeight > 35 ){
                    e.target.style.height = adjustHeight + 'px';
                }   
            }
            textArea.onblur=(e)=>{e.target.style.height = ''; }
            textArea.onchange = ()=>{this.export()}
        //more action button
        let moreDiv = soilprofileDiv.querySelector('div.more');
            moreDiv.onmousedown = (e) =>{reorder.handleMouseDown(e)}
            moreDiv.onblur = (e)=>{e.target.parentNode.parentNode.classList.remove('active')}
        //more menu lists    
        //prevent blur of more button
        soilprofileDiv.querySelector('div.moreActions').onmousedown = (event) =>{
            event.preventDefault()
        }
        //insert before a line
        soilprofileDiv.querySelector('span.insertBefore').onclick = (event) =>{
            this.addLine(event.target.parentNode.parentNode.parentNode, 'before', null)
        }
        //insert after a line
        soilprofileDiv.querySelector('span.insertAfter').onclick = (event) =>{
            this.addLine(event.target.parentNode.parentNode.parentNode, 'after', null)
        }
        //delete after a line
        soilprofileDiv.querySelector('span.deleteRow').onclick = (event) =>{
            event.target.parentNode.parentNode.parentNode.remove()
        }
    }
}
soilDescriber.init()

/********************************************************************/


/**************************Soil Sampler******************************/
const soilSampler =  {
    // constructor(){
        logId: null,
        container : document.querySelector('details#soilSample>div.soilSamplesContainer'),
        addLineButton : document.querySelector('details#soilSample > div.addNewLine'),
        template : `
            <div class="sampleContent">
                <div class="sampleId">
                    <input type="checkbox" class="lab">
                    <input type="text" class="sampleId" placeholder="Sample ID">         
                </div>
                <div class="pid">
                    <input type="number" class="PID" placeholder="PID">ppm
                </div>
                <div class="depth">
                    <input type="number" class="depthFrom" placeholder="#0.00">
                    ~
                    <input type="number" class="depthTo" placeholder="#0.00">
                    m bgs 
                </div>
                <div class="more" tabindex='-1'>
                    <svg height='14px' viewBox="0 0 24 24"><use xlink:href="#icon-dots-vertical"></use></svg>
                </div>
                <div class="moreActions">
                    <span class="insertBefore" title="Insert Before">
                        <svg height='15px' transform="rotate(180,0,0)"><use xlink:href="#icon-RowInsert"></use></svg>
                    </span>
                    <span class="insertAfter" title="Insert After">
                        <svg height='15px'><use xlink:href="#icon-RowInsert"></use></svg>
                    </span>
                    <span  class="deleteRow" title="Delete Row">
                        <svg height='15px'><use xlink:href="#icon-RowDelete"></use></svg>
                    </span>
                </div>
            </div>   
                `,
    init(){
        this.addLineButton.onclick = ()=>{this.addLine(null,null,null)}
        this.addLineButton.click();
        new MutationObserver(()=>{this.export()}).observe(this.container, {childList: true});
    },
    load(){
        if (this.logId){ 
            let soilSample = report.logCollection[this.logId].soilSample;
            this.container.innerHTML = '';
            soilSample.forEach((record)=>{
                this.addLine(null, null, record);
            })
        }else{
            console.log('logId undefined')
        }
    },
    export(){
        if (this.logId){
            let soilSample = []
            let soilSampleDiv = this.container.querySelectorAll('div.soilSample');
            soilSampleDiv.forEach((div)=>{
                let record = [];
                record.push(div.querySelector('input.depthFrom').value);
                record.push(div.querySelector('input.depthTo').value);
                record.push(div.querySelector('input.sampleId').value);
                record.push(div.querySelector('input.PID').value);
                record.push(div.querySelector('input.lab').checked);
                soilSample.push(record)
            })
            report.logCollection[this.logId].soilSample = soilSample
        }else{
            console.log('logId undefined')
        }
    },
    addLine(soilSampleDiv,location,record){
        let newSoilSampleDiv = document.createElement('div');
        newSoilSampleDiv.classList.add('soilSample');
        newSoilSampleDiv.classList.add('dragUnit');
        newSoilSampleDiv.innerHTML = this.template;
        if (soilSampleDiv && location=='before'){
            this.container.insertBefore(newSoilSampleDiv, soilSampleDiv)
        }else if(soilSampleDiv && location=='after'){
            this.container.insertBefore(newSoilSampleDiv, soilSampleDiv.nextSibling);
        }else{
            this.container.appendChild(newSoilSampleDiv)
        }
        record && this.fill(newSoilSampleDiv, record)
        this.listenEvents(newSoilSampleDiv)
    },
    fill(soilSampleDiv, record){
        soilSampleDiv.querySelector('input.depthFrom').value=parseFloat(record[0]).toFixed(2)
        soilSampleDiv.querySelector('input.depthTo').value=parseFloat(record[1]).toFixed(2)
        soilSampleDiv.querySelector('input.sampleId').value=record[2]
        soilSampleDiv.querySelector('input.PID').value=parseFloat(record[3]).toFixed(1)
        soilSampleDiv.querySelector('input.lab').checked=record[4]
    },

    generateSampleId(soilSampleDiv){
        let depthFrom = parseFloat(soilSampleDiv.querySelector('input.depthFrom').value)
        let depthTo = parseFloat(soilSampleDiv.querySelector('input.depthTo').value)
        let locationId = report.logCollection[this.logId].locationId
        let sampleId
        if (isNaN(depthFrom) && !isNaN(depthTo)){
            sampleId = `${locationId}-${depthTo.toFixed(1)}m`
        } else if (!isNaN(depthFrom) && isNaN(depthTo)){
            sampleId = `${locationId}-${depthFrom.toFixed(1)}m`
        } else if (!isNaN(depthFrom) && !isNaN(depthTo)){
            sampleId = `${locationId}-${depthFrom.toFixed(1)}-${depthTo.toFixed(1)}m`
        } else{
            sampleId = `${locationId}`
        }
        soilSampleDiv.querySelector('input.sampleId').value=sampleId
    },

    listenEvents(soilSampleDiv) {
        // addLineButton.onclick = ()=>{this.addLine(null,null,null)}
        soilSampleDiv.oncontextmenu = (event)=>{
            event.preventDefault()
            console.log(event.target)
            event.target.closest('div.soilSample').classList.toggle('active')
            event.target.closest('div.soilSample').querySelector('div.more').focus()
        }
        // listen to input change
        let inputField = soilSampleDiv.querySelectorAll('input');
            inputField.forEach((input)=>{
                input.onchange = (e)=>{
                    this.generateSampleId(e.target.closest('div.soilSample'))
                    this.export()
                }
            })
        
        //more action button
        let moreDiv = soilSampleDiv.querySelector('div.more');
            moreDiv.onmousedown = (e) =>{reorder.handleMouseDown(e)}
            moreDiv.onblur = (e)=>{e.target.parentNode.parentNode.classList.remove('active')}
        //more menu lists    
        //prevent blur of more button
        soilSampleDiv.querySelector('div.moreActions').onmousedown = (event) =>{
            event.preventDefault()
        }
        //insert before a line
        soilSampleDiv.querySelector('span.insertBefore').onclick = (event) =>{
            this.addLine(event.target.parentNode.parentNode.parentNode, 'before', null)
        }
        //insert after a line
        soilSampleDiv.querySelector('span.insertAfter').onclick = (event) =>{
            this.addLine(event.target.parentNode.parentNode.parentNode, 'after', null)
        }
        //delete after a line
        soilSampleDiv.querySelector('span.deleteRow').onclick = (event) =>{
            event.target.parentNode.parentNode.parentNode.remove()
        }
    }
}
soilSampler.init()
/********************************************************************/





