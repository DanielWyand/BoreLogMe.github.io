const summaryTable = {
    container: document.querySelector("table#logSummary"),
    tableBody: document.querySelector("table#logSummary tbody"),
    filter: document.querySelectorAll(
        "div#dataTableView .filter span.filterGroup"
    ),

    load() {
        this.tableBody.innerHTML = "";
        Object.keys(report.logCollection).forEach((logId) => {
            let log = report.logCollection[logId];
            let tableRow = document.createElement("tr");
            tableRow.className = log.logId;
            tableRow.innerHTML = `
                <td data-logId="${logId}" data-property="locationId">${log.locationId}</td>
                <td data-logId="${logId}" data-property="projectNo">${log.projectNo}</td>
                <td data-logId="${logId}" data-property="projectTitle">${log.projectTitle}</td>
                <td data-logId="${logId}" data-property="client">${log.client}</td>
                <td data-logId="${logId}" data-property="loggedBy">${log.loggedBy}</td>
                <td data-logId="${logId}" data-property="reviewedBy">${log.reviewedBy}</td>
                <td data-logId="${logId}" data-property="approvedBy">${log.approvedBy}</td>
                <td data-logId="${logId}" data-property="coordSys">${log.coordSys}</td>
                <td data-logId="${logId}" data-property="xCoord">${log.xCoord}</td>
                <td data-logId="${logId}" data-property="yCoord">${log.yCoord}</td>
                <td data-logId="${logId}" data-property="holeSize">${log.holeSize}</td>
                <td data-logId="${logId}" data-property="initialWaterLevel">${log.initialWaterLevel}</td>
                <td data-logId="${logId}" data-property="drilledBy">${log.drilledBy}</td>
                <td data-logId="${logId}" data-property="drillMethod">${log.drillMethod}</td>
                <td data-logId="${logId}" data-property="drillDate">${log.drillDate}</td> 
                <td data-logId="${logId}" data-property="wellInstalled">${log.wellInstalled}</td>
                <td data-logId="${logId}" data-property="wellHead">${log.wellHead}</td>
                <td data-logId="${logId}" data-property="casingSize">${log.casingSize}</td>
                <td data-logId="${logId}" data-property="totalWellDepth">${log.totalWellDepth}</td>
                <td data-logId="${logId}" data-property="bentoniteSealingDepth">${log.bentoniteSealingDepth}</td>
                <td data-logId="${logId}" data-property="screenIntervalFrom">${log.screenIntervalFrom}</td>
                <td data-logId="${logId}" data-property="screenIntervalTo">${log.screenIntervalTo}</td>
                <td data-logId="${logId}" data-property="topOfCasingElevation">${log.topOfCasingElevation}</td>
                <td data-logId="${logId}" data-property="groundElevation ">${log.groundElevation}</td>
                <td data-logId="${logId}" data-property="staticWaterLevel">${log.staticWaterLevel}</td>
            `;
            this.tableBody.appendChild(tableRow);
        });
    },

    applyfilter(filterName) {
        const colgroups = this.container.querySelectorAll("col");
        colgroups.forEach((col) => {
            col.style.visibility = "collapse";
            if (
                col.className == filterName ||
                filterName == "all" ||
                col.className == ""
            ) {
                col.style.visibility = "";
            }
        });
    },

    init() {
        this.filter.forEach((span) => {
            span.onclick = (e) => {
                if (e.target.classList.contains("selected")) {
                    return 0;
                } else {
                    summaryTable.applyfilter(e.target.dataset.filter);
                    this.filter.forEach((span) => {
                        span.classList.remove("selected");
                    });
                    e.target.classList.add("selected");
                }
            };
        });

        this.tableBody.ondblclick = (e) => {
            if (e.target.tagName == "TD") {
                let currentValue = e.target.innerHTML;
                let input = document.createElement("input");
                input.value = currentValue;
                e.target.appendChild(input);
                input.focus();
                input.onblur = (e) => {
                    let parentTd = e.target.parentNode;
                    let newValue = e.target.value;

                    if (currentValue != e.target.value) {
                        parentTd.classList.add("edited");
                        parentTd.innerHTML = newValue;
                    }

                    e.target.remove();
                };
            }
        };

        document
            .querySelector("div#dataTableContainer div.discard")
            .addEventListener("click", (e) => {
                document.querySelector("div#dataTableContainer").style =
                    "display: none;";
            });

        document
            .querySelector("li#summaryButton")
            .addEventListener("click", (e) => {
                this.load();
                document.querySelector("div#dataTableContainer").style = "";
            });

        document
            .querySelector("div#dataTableView span.refresh")
            .addEventListener("click", (e) => {
                this.load();
            });
    },
};
summaryTable.init();
