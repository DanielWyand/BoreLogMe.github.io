


//func for date update
// function updateDrillingPeriod(logId){
//     const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
//     if (drillDateFrom.value && drillDateTo.value && (drillDateFrom.value <= drillDateTo.value)){
//         let dateFrom = new Date(drillDateFrom.value);
//         let dateTo = new Date(drillDateTo.value);   
//         if (drillDateFrom.value==drillDateTo.value){
//             date = `${months[dateFrom.getMonth()]} ${dateFrom.getDate()}, ${dateFrom.getFullYear()}`;   
//         } else if (dateFrom.getMonth()==dateTo.getMonth()) {
//             date = `${months[dateFrom.getMonth()]} ${dateFrom.getDate()} ~ ${dateTo.getDate()}, ${dateFrom.getFullYear()}`;  
//         } else if (dateFrom.getFullYear()==dateTo.getFullYear()) {
//             date = `${months[dateFrom.getMonth()]} ${dateFrom.getDate()} ~ ${months[dateTo.getMonth()]} ${dateTo.getDate()}, ${dateFrom.getFullYear()}`;  
//         } else {
//             date = `${months[dateFrom.getMonth()]} ${dateFrom.getDate()}, ${dateFrom.getFullYear()} ~ ${months[dateTo.getMonth()]} ${dateTo.getDate()}, ${dateTo.getFullYear()}`;  
//         }
//     } else if (drillDateFrom.value =="" || drillDateTo.value =="" ) {
//         let validDate = new Date(drillDateFrom.value+drillDateTo.value);
//         date = `${months[validDate.getMonth()]} ${validDate.getDate()}, ${validDate.getFullYear()}`; 
//     } else {
//         date = 'NULL'
//     }
//     let logId = document.querySelector("#currentLog").dataset.logId;
//     document.querySelector(`svg#${logId} .dataValue .drillDate`).innerHTML = date;
// }


// var projectNo               = document.querySelector('input.projectNo')
// var projectTitle            = document.querySelector('input.projectTitle')
// var client                  = document.querySelector('input.client')
// var loggedBy                = document.querySelector('input.loggedBy')
// var reviewedBy              = document.querySelector('input.reviewedBy')
// var approvedBy              = document.querySelector('input.approvedBy')
// var coordSys                = document.querySelector('input.coordSys')
// var xCoord                  = document.querySelector('input.xCoord')
// var yCoord                  = document.querySelector('input.yCoord')
// var drillDateFrom           = document.querySelector('input.drillDateFrom')
// var drillDateTo             = document.querySelector('input.drillDateTo')
// var drilledBy               = document.querySelector('input.drilledBy')
// var drillMethod             = document.querySelector('input.drillMethod')
// var holeSize                = document.querySelector('input.holeSize')
// var initialWaterLevel       = document.querySelector('input.initialWaterLevel')
// var wellHead                = document.querySelector('input.wellHead')
// var casingSize              = document.querySelector('input.casingSize')
// var totalWellDepth          = document.querySelector('input.totalWellDepth')
// var bentoniteSealingDepth   = document.querySelector('input.bentoniteSealingDepth')
// var screenIntervalFrom      = document.querySelector('input.screenIntervalFrom')
// var screenIntervalTo        = document.querySelector('input.screenIntervalTo')
// var topOfCasingElevation    = document.querySelector('input.topOfCasingElevation')
// var groundElevation         = document.querySelector('input.groundElevation')
// var staticWaterLevel        = document.querySelector('input.staticWaterLevel')

// projectNo.addEventListener('change', (e)=>{
//     updateCommonFiled(e.target)
// })             
// projectTitle.addEventListener('change', (e)=>{
//     updateCommonFiled(e.target)
// })                       
// client.addEventListener('change', (e)=>{
//     updateCommonFiled(e.target)
// })                            
// loggedBy.addEventListener('change', (e)=>{
//     updateCommonFiled(e.target)
// })                           
// reviewedBy.addEventListener('change', (e)=>{
//     updateCommonFiled(e.target)
// })                         
// approvedBy.addEventListener('change', (e)=>{
//     updateCommonFiled(e.target)
// })                         
// coordSys.addEventListener('change', (e)=>{
//     updateCommonFiled(e.target)
// })                           
// xCoord.addEventListener('change', (e)=>{
//     updateCommonFiled(e.target)
// })                             
// yCoord.addEventListener('change', (e)=>{
//     updateCommonFiled(e.target)
// })                             
// drillDateFrom.addEventListener('change', ()=>{
//     let logId = document.querySelector("#currentLog").dataset.logId;
//     updateDrillingPeriod(logId)
// })
// drillDateTo.addEventListener('change', ()=>{
//     let logId = document.querySelector("#currentLog").dataset.logId;
//     updateDrillingPeriod(logId)
// })           
// drilledBy.addEventListener('change', (e)=>{
//     updateCommonFiled(e.target)
// })                          
// drillMethod.addEventListener('change', (e)=>{
//     updateCommonFiled(e.target)
// })                        
// holeSize.addEventListener('change', (e)=>{
//     updateCommonFiled(e.target)
// })                           
// initialWaterLevel.addEventListener('change', (e)=>{
//     updateCommonFiled(e.target)
// })                  
// wellHead.addEventListener('change', (e)=>{
//     updateCommonFiled(e.target)
// })                           
// casingSize.addEventListener('change', (e)=>{
//     updateCommonFiled(e.target)
// })                         
// totalWellDepth.addEventListener('change', (e)=>{
//     updateCommonFiled(e.target)
// })                     
// bentoniteSealingDepth.addEventListener('change', (e)=>{
//     updateCommonFiled(e.target)
// })              
// screenIntervalFrom.addEventListener('change', (e)=>{
//     updateCommonFiled(e.target)
// })                 
// screenIntervalTo.addEventListener('change', (e)=>{
//     updateCommonFiled(e.target)
// })                   
// topOfCasingElevation.addEventListener('change', (e)=>{
//     updateCommonFiled(e.target)
// })               
// groundElevation.addEventListener('change', (e)=>{
//     updateCommonFiled(e.target)
// })                    
// staticWaterLevel.addEventListener('change', (e)=>{
//     updateCommonFiled(e.target)
// })                   



