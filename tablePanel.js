const summaryTable = {
    container: document.querySelector("table#logSummary"),
    tableBody: document.querySelector("table#logSummary tbody"),
    filter: document.querySelectorAll("div#dataTableView .filter span.filterGroup"),
    tableDisplay: document.querySelector("div#dataTableView .tableDisplay"),
    inputUpload: document.querySelector("input#inputUpload"),
    locationIdToLogId: {},
    titles: [
        "Location ID",
        "Project No",
        "Project Title",
        "Client",
        "Logged By",
        "Reviewed By",
        "Approved By",
        "Coord.Sys",
        "X Coord.",
        "Y Coord.",
        "Borehole Dia.",
        "Initial GWL",
        "Driller Name",
        "Drill Method",
        "Drill Date",
        "Well Installed",
        "Wellhead Type",
        "Casing Dia.",
        "Well Depth",
        "Sealing Depth",
        "Screen From.",
        "Screen To",
        "TOC Elev.",
        "Ground Elev.",
        "Static GWL",
    ],

    tdMenu: {
        menu: document.querySelector("div#dataTableView div.menu"),
        defaultVals: document.querySelector("div#dataTableView div.defautVals"),
        autoFillSpan: document.querySelector("div#dataTableView span.autoFill"),
        targetTd: null,

        show(property) {
            if (property) {
                this.loadDefaultVals(property);
            }

            this.menu.style.display = "block";
        },
        hide() {
            this.menu.style.display = "none";
            this.targetTd = null;
        },
        relocateTo(x, y) {
            this.menu.style.top = y + "px";
            this.menu.style.left = x + "px";
        },

        loadDefaultVals(property) {
            let defaultVals = this.collectExistingVals(property);
            if (defaultVals.length) {
                str = "";
                defaultVals.forEach((val) => {
                    str += `<span>${val}</span>`;
                });
                this.defaultVals.innerHTML = str;
                this.defaultVals.style.display = "block";
            } else {
                this.defaultVals.style.display = "none";
            }
        },

        collectExistingVals(property) {
            let defaultVals = [];
            if (
                ["projectNo", "projectTitle", "client", "loggedBy", "reviewedBy", "approvedBy", "holeSize", "casingSize", "drillMethod"].indexOf(property) != -1
            ) {
                let tds = summaryTable.tableBody.querySelectorAll(`td[data-property=${property}]`);
                tds.forEach((td) => {
                    let val = td.innerHTML;
                    if (defaultVals.indexOf(val) == -1 && val != "NULL") {
                        defaultVals.push(val);
                    }
                });
            }

            switch (property) {
                case "coordSys":
                    ["WGS 84", "UTM", "CGCS2000"].forEach((item) => {
                        if (defaultVals.indexOf(item) == -1) {
                            defaultVals.push(item);
                        }
                    });
                    break;

                case "drilledBy":
                    ["Senping", "Tengjing", "Liuju", "Jierang"].forEach((item) => {
                        if (defaultVals.indexOf(item) == -1) {
                            defaultVals.push(item);
                        }
                    });
                    break;

                case "drillMethod":
                    ["Hand Auger", "Direct Push", "Hollow Stem Auger", "Cable Percussion"].forEach((item) => {
                        if (defaultVals.indexOf(item) == -1) {
                            defaultVals.push(item);
                        }
                    });
                    break;

                case "wellHead":
                    ["Protective Standpipe", "Flush-Mounted Manhole", "None"].forEach((item) => {
                        if (defaultVals.indexOf(item) == -1) {
                            defaultVals.push(item);
                        }
                    });
                    break;

                default:
                    break;
            }

            return defaultVals;
        },

        autoFill() {
            let property = this.targetTd.dataset.property;
            let currentVal = this.targetTd.innerHTML;
            let targetCol = summaryTable.tableBody.querySelectorAll(`td[data-property=${property}]`);

            targetCol.forEach((td) => {
                if (td.innerHTML != currentVal) {
                    td.classList.add("edited");
                    td.innerHTML = currentVal;
                }
            });
        },
    },

    load() {
        this.tableBody.innerHTML = "";
        Object.keys(report.logCollection).forEach((logId) => {
            let log = report.logCollection[logId];

            let tableRow = document.createElement("tr");
            tableRow.className = logId;
            tableRow.dataset.logId = logId;
            tableRow.innerHTML = `
                <td contenteditable data-property="locationId">${log.locationId}</td>
                <td contenteditable data-property="projectNo">${log.projectNo}</td>
                <td contenteditable data-property="projectTitle">${log.projectTitle}</td>
                <td contenteditable data-property="client">${log.client}</td>
                <td contenteditable data-property="loggedBy">${log.loggedBy}</td>
                <td contenteditable data-property="reviewedBy">${log.reviewedBy}</td>
                <td contenteditable data-property="approvedBy">${log.approvedBy}</td>
                <td contenteditable data-property="coordSys">${log.coordSys}</td>
                <td contenteditable data-property="xCoord">${log.xCoord}</td>
                <td contenteditable data-property="yCoord">${log.yCoord}</td>
                <td contenteditable data-property="holeSize">${log.holeSize}</td>
                <td contenteditable data-property="initialWaterLevel">${log.initialWaterLevel}</td>
                <td contenteditable data-property="drilledBy">${log.drilledBy}</td>
                <td contenteditable data-property="drillMethod">${log.drillMethod}</td>
                <td contenteditable data-property="drillDate">${log.drillDate}</td> 
                <td contenteditable data-property="wellInstalled">${log.wellInstalled}</td>
                <td contenteditable data-property="wellHead">${log.wellHead}</td>
                <td contenteditable data-property="casingSize">${log.casingSize}</td>
                <td contenteditable data-property="totalWellDepth">${log.totalWellDepth}</td>
                <td contenteditable data-property="bentoniteSealingDepth">${log.bentoniteSealingDepth}</td>
                <td contenteditable data-property="screenIntervalFrom">${log.screenIntervalFrom}</td>
                <td contenteditable data-property="screenIntervalTo">${log.screenIntervalTo}</td>
                <td contenteditable data-property="topOfCasingElevation">${log.topOfCasingElevation}</td>
                <td contenteditable data-property="groundElevation ">${log.groundElevation}</td>
                <td contenteditable data-property="staticWaterLevel">${log.staticWaterLevel}</td>
            `;
            this.tableBody.appendChild(tableRow);
        });
    },

    show() {
        document.querySelector("div#dataTableContainer").style = "";
    },
    hide() {
        document.querySelector("div#dataTableContainer").style = "display: none;";
    },

    saveChange() {
        let newTrs = this.tableBody.querySelectorAll("tr.new");
        newTrs.forEach((tr) => {
            tr.dataset.logId = report.addNew();
        });
        updateLogList();
        let changedTds = this.tableBody.querySelectorAll("td.edited");
        changedTds.forEach((td) => {
            report.logCollection[td.parentElement.dataset.logId][td.dataset.property] = td.innerHTML;
        });
    },

    applyfilter(filterName) {
        const colgroups = this.container.querySelectorAll("col");
        colgroups.forEach((col) => {
            col.style.visibility = "collapse";
            if (col.className == filterName || filterName == "all" || col.className == "") {
                col.style.visibility = "";
            }
        });
    },

    refreshLocationIdToLogId() {
        let trs = this.tableBody.querySelectorAll("tr");
        this.locationIdToLogId = {};
        trs.forEach((tr) => {
            let logId = tr.dataset.logId;
            let locationId = tr.children[0].innerHTML;
            this.locationIdToLogId[locationId] = logId;
        });

        return this.locationIdToLogId;
    },

    exportCsvStr() {
        let csvStr = "";
        let row = "";
        for (const title of this.titles) {
            row += '"' + title + '",';
        }
        csvStr += row + "\r\n";

        let trs = this.tableBody.querySelectorAll("tr");

        trs.forEach((tr) => {
            row = "";
            tr.querySelectorAll("td").forEach((td) => {
                row += '"' + td.innerHTML + '",';
            });
            csvStr += row + "\r\n";
        });

        return csvStr;
    },

    init() {
        this.tableBody.oncontextmenu = (e) => {
            //if dblclick on td cell, insert an input element
            if (e.target.tagName == "TD") {
                e.preventDefault();
                summaryTable.tdMenu.relocateTo(e.pageX, e.pageY);
                summaryTable.tdMenu.targetTd = e.target;
                summaryTable.tdMenu.show(e.target.dataset.property);
            }
        };

        this.tdMenu.menu.onclick = (e) => {
            e.stopPropagation();
            document.querySelector("div#dataTableContainer").addEventListener(
                "click",
                () => {
                    summaryTable.tdMenu.hide();
                },
                false
            );
        };

        this.tdMenu.defaultVals.onclick = (e) => {
            if (e.target.tagName == "SPAN") {
                if (summaryTable.tdMenu.targetTd.innerHTML != e.target.innerHTML) {
                    summaryTable.tdMenu.targetTd.classList.add("edited");
                    summaryTable.tdMenu.targetTd.innerHTML = e.target.innerHTML;
                }
            }
        };

        this.tdMenu.autoFillSpan.onclick = (e) => {
            summaryTable.tdMenu.autoFill();
        };

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

        this.tableBody.addEventListener("input", (e) => {
            e.target.classList.add("edited");
            externalDataTable.updateJoinType();
        });

        //upload by input
        this.inputUpload.onchange = (e) => {
            fileProcessor.read(e.target.files);
        };

        //drag and drop to table display
        this.tableDisplay.addEventListener("drop", function (event) {
            event.preventDefault();
            if (event.type === "drop") {
                let files = event.dataTransfer.files;
                fileProcessor.read(files);
                // console.log(files.length);
                // console.log(`文件名称:${files[0].name},文件类型:${files[0].type},文件大小:${files[0].size} bytes`);
            }
            event.target.classList.remove("ondrop");
        });
        this.tableDisplay.addEventListener("dragenter", function (event) {
            event.preventDefault();
            event.target.classList.add("ondrop");
        });
        this.tableDisplay.addEventListener("dragleave", function (event) {
            event.preventDefault();
            event.target.classList.remove("ondrop");
        });
        this.tableDisplay.addEventListener("dragover", function (event) {
            event.preventDefault();
        });

        //discard bottom, do nothing just hide the table
        document.querySelector("div#dataTableContainer span.button.exit").addEventListener("click", (e) => {
            document.querySelector("div#dataTableContainer").style = "display: none;";
            externalDataTable.hide();
            externalDataTable.emptyQuery();
        });
        document.querySelector("div#dataTableContainer span.button.save").addEventListener("click", (e) => {
            this.saveChange();
            document.querySelector("div#dataTableContainer").style = "display: none;";
            externalDataTable.emptyQuery();
            externalDataTable.hide();
        });
        document.querySelector("li#summaryButton").addEventListener("click", (e) => {
            this.load();
            document.querySelector("div#dataTableContainer").style = "display: ;";
        });
    },
};
summaryTable.init();

const externalDataTable = {
    externalData: document.querySelector("table#externalData"),
    externalDatatableToggle: document.querySelector("span.externalDatatableToggle"),
    externalDataApply: document.querySelector("span.apply"),
    externalDataSettings: document.querySelector("div.externalDataSettings"),
    dataLinkTemp: `
        <div class="dataLinks">
            <span class="externalCol colName">Column {colLetter}</span>
            <span class="linkButton"><svg height="12" width="16"><use xlink:href="#icon-link"></svg></span>
            <select class="targetCol colName">
                <option value="">--Ignore--</option>
                <option value="locationId">Location ID</option>
                <option value="projectNo"> Project No</option>
                <option value="projectTitle">Project Title</option>
                <option value="client">Client</option>
                <option value="loggedBy">Logged By</option>
                <option value="reviewedBy">Reviewed By</option>
                <option value="approvedBy">Approved By</option>
                <option value="coordSys">Coord.Sys</option>
                <option value="xCoord">X Coord.</option>
                <option value="yCoord">Y Coord.</option>
                <option value="holeSize">Borehole Dia.</option>
                <option value="initialWaterLevel">Initial GWL</option>
                <option value="drilledBy">Driller Name</option>
                <option value="drillMethod">Drill Method</option>
                <option value="drillDate">Drill Date</option>
                <option value="wellInstalled">Well Installed</option>
                <option value="wellHead">Wellhead Type</option>
                <option value="casingSize">Casing Dia.</option>
                <option value="totalWellDepth">Well Depth</option>
                <option value="bentoniteSealingDepth">Sealing Depth</option>
                <option value="screenIntervalFrom">Screen From</option>
                <option value="screenIntervalTo">Screen To</option>
                <option value="topOfCasingElevation">TOC Elev.</option>
                <option value="groundElevation">Ground Elev.</option>
                <option value="staticWaterLevel">Static GWL</option>
            </select>
        </div>
    `,
    relationship: [],

    init() {
        this.externalDatatableToggle.addEventListener("click", (e) => {
            if (e.currentTarget.classList.contains("show")) {
                externalDataTable.show();
            } else {
                externalDataTable.hide();
            }
        });

        this.externalDataApply.addEventListener("click", () => {
            externalDataTable.mergeData();
        });

        this.externalData.addEventListener("click", (e) => {
            if (e.target.classList.contains("index")) {
                let type = e.target.parentNode.className;
                switch (type) {
                    case "overwrite":
                        e.target.parentNode.className = "append";
                        e.target.parentNode.title = "switch to Ignore";
                        break;
                    case "append":
                        e.target.parentNode.className = "";
                        e.target.parentNode.title = "switch to Overwrite";
                        break;
                    default:
                        e.target.parentNode.className = "overwrite";
                        e.target.parentNode.title = "switch to Append";
                        break;
                }
            }
        });

        this.externalDataSettings.addEventListener("change", (e) => {
            externalDataTable.updateRelationship();
        });
    },

    show() {
        this.externalDatatableToggle.classList.remove("show");
        this.externalDatatableToggle.classList.add("hide");
        this.externalDatatableToggle.querySelector("svg").innerHTML = `
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12.983 8.978c3.955 -.182 7.017 -1.446 7.017 -2.978c0 -1.657 -3.582 -3 -8 -3c-1.661 0 -3.204 .19 -4.483 .515m-2.783 1.228c-.471 .382 -.734 .808 -.734 1.257c0 1.22 1.944 2.271 4.734 2.74" />
            <path d="M4 6v6c0 1.657 3.582 3 8 3c.986 0 1.93 -.067 2.802 -.19m3.187 -.82c1.251 -.53 2.011 -1.228 2.011 -1.99v-6" />
            <path d="M4 12v6c0 1.657 3.582 3 8 3c3.217 0 5.991 -.712 7.261 -1.74m.739 -3.26v-4" />
            <line x1="3" y1="3" x2="21" y2="21" />
            `;
        document.querySelector("div#dataTableContainer div.externalDataContainer").style = "";
        this.updateJoinType();
    },

    hide() {
        this.externalDatatableToggle.classList.remove("hide");
        this.externalDatatableToggle.classList.add("show");
        this.externalDatatableToggle.querySelector("svg").innerHTML = `
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <ellipse cx="12" cy="6" rx="8" ry="3"></ellipse>
            <path d="M4 6v6a8 3 0 0 0 16 0v-6" />
            <path d="M4 12v6a8 3 0 0 0 16 0v-6" />
            `;
        document.querySelector("div#dataTableContainer div.externalDataContainer").style = "display: none;";
    },

    emptyQuery() {
        this.externalData.innerHTML = "";
        this.externalDataSettings.innerHTML = "";
    },

    load(data, dateType) {
        this.externalData.innerHTML = "";
        let thead = document.createElement("thead");
        let tbody = document.createElement("tbody");
        this.externalData.appendChild(thead);
        this.externalData.appendChild(tbody);

        let colCount = 0;
        tbody.innerHTML = "";
        data.forEach((row, rowNo) => {
            let newTr = document.createElement("tr");
            newTr.innerHTML = `<td class="index">${rowNo + 1}</td>`;
            tbody.appendChild(newTr);
            row.forEach((data, index) => {
                let newTd = newTr.insertCell();
                newTd.innerHTML = data.replace(/(^"*)|("$)/g, "");
                newTd.contentEditable = true;
                colCount = index > colCount ? index : colCount;
            });
        });

        theadInnerHTMLStr = "<tr><th></th>";
        this.externalDataSettings.innerHTML = "";

        for (let i = 0; i <= colCount; i++) {
            colLetter = String.fromCharCode(65 + i);
            theadInnerHTMLStr += `<th>${colLetter}</th>`;
            this.externalDataSettings.innerHTML += this.dataLinkTemp.replace("{colLetter}", colLetter);
        }

        thead.innerHTML = theadInnerHTMLStr;

        let selectedIndex;
        let dataLinks = this.externalDataSettings.querySelectorAll(".dataLinks");
        if (dateType == "kml") {
            selectedIndex = [1, 9, 10];

            dataLinks.forEach((link, index) => {
                let selectElement = link.querySelector("select");
                selectElement.options[selectedIndex[index]].selected = true;
            });
        } else if (dateType == "csv") {
            let titleTr = this.externalData.lastChild.firstChild;
            for (let i = 1; i < titleTr.childElementCount; i++) {
                let header = titleTr.children[i].innerHTML;
                let index = summaryTable.titles.indexOf(header.trim());
                if (index != -1) {
                    let selectElement = dataLinks[i - 1].querySelector("select");
                    selectElement.options[index + 1].selected = true;
                }
            }
        }

        this.updateRelationship();
        this.show();
    },

    updateRelationship() {
        let dataLinks = this.externalDataSettings.querySelectorAll(".dataLinks");
        this.relationship = [];
        dataLinks.forEach((link) => {
            let selectElement = link.querySelector("select");
            let selectedIndex = selectElement.selectedIndex;
            let selectedProperty = selectElement.options[selectedIndex].value;
            this.relationship.push(selectedProperty);
        });
        console.log("updateRelationship");
        return this.relationship;
    },

    updateJoinType() {
        let colRelationship = this.updateRelationship();
        let indexOfLocationId = colRelationship.indexOf("locationId");

        if (indexOfLocationId == -1) {
            console.log("primary key not selected");
            return 0;
        }

        let existingLocationId = Object.keys(summaryTable.refreshLocationIdToLogId());
        let dataRows = externalData.querySelectorAll("tbody tr");
        dataRows.forEach((tr) => {
            let externalLocationId = tr.children[indexOfLocationId + 1].innerHTML;
            if (existingLocationId.indexOf(externalLocationId) != -1) {
                tr.className = "overwrite";
            } else {
                tr.className = "append";
            }
        });
    },

    mergeData() {
        let dataRows = externalData.querySelectorAll("tbody tr");
        dataRows.forEach((tr) => {
            switch (tr.className) {
                case "overwrite":
                    let colRelationship = this.updateRelationship();
                    let indexOfLocationId = colRelationship.indexOf("locationId");

                    if (indexOfLocationId != -1) {
                        let locationId = tr.children[indexOfLocationId + 1].innerHTML;

                        let logId = summaryTable.locationIdToLogId[locationId];
                        if (logId) {
                            let targetTr = summaryTable.tableBody.querySelector(`tr.${logId}`);

                            this.relationship.forEach((property, index) => {
                                if (property != "" && property != "locationId") {
                                    let targetTd = targetTr.querySelector(`td[data-property=${property}]`);
                                    targetTd.innerHTML = tr.children[index + 1].innerHTML;
                                    targetTd.classList.add("edited");
                                }
                            });
                        }
                    }

                    break;
                case "append":
                    let tableRow = document.createElement("tr");
                    tableRow.className = "new";
                    tableRow.innerHTML = `
                        <td contenteditable data-property="locationId">NULL</td>
                        <td contenteditable data-property="projectNo">NULL</td>
                        <td contenteditable data-property="projectTitle">NULL</td>
                        <td contenteditable data-property="client">NULL</td>
                        <td contenteditable data-property="loggedBy">NULL</td>
                        <td contenteditable data-property="reviewedBy">NULL</td>
                        <td contenteditable data-property="approvedBy">NULL</td>
                        <td contenteditable data-property="coordSys">NULL</td>
                        <td contenteditable data-property="xCoord">NULL</td>
                        <td contenteditable data-property="yCoord">NULL</td>
                        <td contenteditable data-property="holeSize">NULL</td>
                        <td contenteditable data-property="initialWaterLevel">NULL</td>
                        <td contenteditable data-property="drilledBy">NULL</td>
                        <td contenteditable data-property="drillMethod">NULL</td>
                        <td contenteditable data-property="drillDate">NULL</td> 
                        <td contenteditable data-property="wellInstalled">NULL</td>
                        <td contenteditable data-property="wellHead">NULL</td>
                        <td contenteditable data-property="casingSize">NULL</td>
                        <td contenteditable data-property="totalWellDepth">NULL</td>
                        <td contenteditable data-property="bentoniteSealingDepth">NULL</td>
                        <td contenteditable data-property="screenIntervalFrom">NULL</td>
                        <td contenteditable data-property="screenIntervalTo">NULL</td>
                        <td contenteditable data-property="topOfCasingElevation">NULL</td>
                        <td contenteditable data-property="groundElevation">NULL</td>
                        <td contenteditable data-property="staticWaterLevel">NULL</td>
                    `;
                    summaryTable.tableBody.appendChild(tableRow);

                    this.relationship.forEach((property, index) => {
                        if (property != "") {
                            tableRow.querySelector(`td[data-property=${property}]`).classList.add("edited");
                            tableRow.querySelector(`td[data-property=${property}]`).innerHTML = tr.cells[index + 1].innerHTML;
                        }
                    });

                    break;
                default:
                    break;
            }
        });
    },
};
externalDataTable.init();

const fileProcessor = {
    read(files) {
        let result;

        let reader = new FileReader();

        let fileName = files[0].name;
        let fileType = fileName.substring(fileName.lastIndexOf(".") + 1).toLocaleLowerCase();

        reader.onload = function (e) {
            if (fileType == "kml") {
                result = fileProcessor.extractKmlCoords(e.target.result);
                externalDataTable.load(result, "kml");
            } else if (fileType == "csv") {
                result = fileProcessor.extractCsvData(e.target.result);
                externalDataTable.load(result, "csv");
            }
        };

        reader.readAsText(files[0]);
    },

    downloadCSV(csvStr) {
        let fileName = prompt("File Name", "Borehole Log");
        if (filename == "") {
            return 0;
        }

        let alink = document.createElement("a");
        let _utf = "\uFEFF";
        const csvDataBlob = new Blob([_utf + csvStr], {
            type: "text/csv",
        });
        alink.href = URL.createObjectURL(csvDataBlob);

        document.body.appendChild(alink);
        alink.setAttribute("download", fileName);
        alink.click();
        document.body.removeChild(alink);
    },

    extractKmlCoords(plainText) {
        let parser = new DOMParser();
        let xmlDoc = parser.parseFromString(plainText, "text/xml");
        // let googlePolygons = [];
        let googleMarkers = [];

        console.log(xmlDoc);

        if (xmlDoc.documentElement.nodeName == "kml") {
            for (const item of xmlDoc.getElementsByTagName("Placemark")) {
                let placeMarkName = item.getElementsByTagName("name")[0].childNodes[0].nodeValue.trim();
                // let polygons = item.getElementsByTagName("Polygon");
                let markers = item.getElementsByTagName("Point");

                /** POLYGONS PARSE **/
                // for (const polygon of polygons) {
                //     let coords = polygon.getElementsByTagName("coordinates")[0].childNodes[0].nodeValue.trim();
                //     let points = coords.split(" ");

                //     let googlePolygonsPaths = [];
                //     for (const point of points) {
                //         let coord = point.split(",");
                //         googlePolygonsPaths.push({
                //             lat: +coord[1],
                //             lng: +coord[0],
                //         });
                //     }
                //     googlePolygons.push({
                //         name: placeMarkName,
                //         polygon: googlePolygonsPaths,
                //     });
                // }

                /** MARKER PARSE **/
                for (const marker of markers) {
                    var coords = marker.getElementsByTagName("coordinates")[0].childNodes[0].nodeValue.trim();
                    let coord = coords.split(",");
                    // googleMarkers.push({
                    //     name: placeMarkName,
                    //     lat: +coord[1],
                    //     lng: +coord[0],
                    // });
                    googleMarkers.push([placeMarkName, coord[1], coord[0]]);
                }
            }
        } else {
            throw "error while parsing";
        }

        return googleMarkers;
    },

    extractCsvData(plainText) {
        let result = [];
        let rows = plainText.split("\n");
        rows.forEach((row) => {
            if (row != "") {
                result.push(row.split(","));
            }
        });

        return result;
    },

    GPSconvertToDMS(dd, type) {
        if (isNaN(dd) || (type != "lat" && "lng") || (type == "lat" && (dd <= -90 || dd >= 90)) || (type == "lng" && (dd <= -180 || dd >= 180))) {
            throw "invaild conversion";
        }

        let dir = dd < 0 ? (type == "lng" ? "W" : "S") : type == "lng" ? "E" : "N";

        let absDd = Math.abs(dd);
        let deg = absDd | 0;
        let frac = absDd - deg;
        let min = (frac * 60) | 0;
        let sec = frac * 3600 - min * 60;

        sec = Math.round(sec * 100) / 100;
        return deg + "°" + min + "'" + sec + '"' + dir;
    },
};
