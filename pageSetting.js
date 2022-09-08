const pageSetting = {
    pageSettingPanel: document.querySelector("div#pageSettingPanel"),
    languageCards: document.querySelectorAll(
        "div#pageSettingPanel div.selectionCard.language"
    ),
    paperSizeCards: document.querySelectorAll(
        "div#pageSettingPanel div.selectionCard.paperSize"
    ),
    marginsCards: document.querySelectorAll(
        "div#pageSettingPanel div.selectionCard.margins"
    ),
    fontsCards: document.querySelectorAll(
        "div#pageSettingPanel div.selectionCard.fonts"
    ),

    defaultSetting: {
        pageHeight_mm: 297, //279.4
        pageWidth_mm: 210, //215.9 210
        marginTop_mm: 15, //mm
        marginBottom_mm: 15, //mm
        marginLeft_mm: 15, //mm
        marginRight_mm: 15, //mm
        language: "EN",
        fontSize: 9.5, //px
        fontFamily: "Arial",
        contentInnerBorderPadding: 14, //px
        rowHeightPct: [0.1, 0.025, 0.09, 0.665, 0.12],
        colWidthPct: [0.06, 0.08, 0.36, 0.06, 0.14, 0.06, 0.06, 0.18],
        headerColOffSet: [0, 0],
        descriptionLineHeight: 14,
        headerLineHeight: 16, //px
        footerColOffSet: [0, 0],
        footerLineHeight: 16, //px
        headSpace: 0.075, //pct of body will be blank
        logoInnerHtml: ermLogo,
    },

    init() {
        this.pageSettingPanel
            .querySelectorAll(".customInput")
            .forEach((card) => {
                card.addEventListener("click", (e) => {
                    let inputElement = e.currentTarget.querySelector("input");
                    inputElement.select();
                });
            });

        this.languageCards.forEach((card) => {
            card.addEventListener("click", (e) => {
                report.pageSetting.language =
                    e.currentTarget.dataset.propertyval;

                this.languageCards.forEach((card) => {
                    card.classList.remove("selected");
                });
                e.currentTarget.classList.add("selected");
            });
        });

        this.paperSizeCards.forEach((card) => {
            card.addEventListener("click", (e) => {
                report.pageSetting.pageHeight_mm =
                    e.currentTarget.dataset.pageheight_mm;

                report.pageSetting.pageWidth_mm =
                    e.currentTarget.dataset.pagewidth_mm;

                document.querySelector("span#paperSize").innerHTML =
                    e.currentTarget.dataset.propertyval;

                this.paperSizeCards.forEach((card) => {
                    card.classList.remove("selected");
                });
                e.currentTarget.classList.add("selected");
            });
        });

        this.marginsCards.forEach((card) => {
            card.addEventListener("click", (e) => {
                report.pageSetting.marginBottom_mm =
                    e.currentTarget.dataset.propertyval;

                report.pageSetting.marginTop_mm =
                    e.currentTarget.dataset.propertyval;

                report.pageSetting.marginLeft_mm =
                    e.currentTarget.dataset.propertyval;

                report.pageSetting.marginRight_mm =
                    e.currentTarget.dataset.propertyval;

                this.marginsCards.forEach((card) => {
                    card.classList.remove("selected");
                });
                e.currentTarget.classList.add("selected");
            });
        });

        this.fontsCards.forEach((card) => {
            card.addEventListener("click", (e) => {
                report.pageSetting.fontFamily =
                    e.currentTarget.dataset.propertyval;

                this.fontsCards.forEach((card) => {
                    card.classList.remove("selected");
                });
                e.currentTarget.classList.add("selected");
            });
        });

        document
            .querySelector("div#pageSettingPanel input.fontSize")
            .addEventListener("change", (e) => {
                report.pageSetting.fontSize = parseFloat(e.target.value);
            });

        document
            .querySelector("div#pageSettingPanel input.headerLineHeight")
            .addEventListener("change", (e) => {
                report.pageSetting.headerLineHeight = parseFloat(
                    e.target.value
                );
            });

        document
            .querySelector("div#pageSettingPanel input.descriptionLineHeight")
            .addEventListener("change", (e) => {
                report.pageSetting.descriptionLineHeight = parseFloat(
                    e.target.value
                );
            });

        document
            .querySelector("div#pageSettingPanel input.footerLineHeight")
            .addEventListener("change", (e) => {
                report.pageSetting.footerLineHeight = parseFloat(
                    e.target.value
                );
            });

        document
            .querySelectorAll("div#pageSettingPanel input.headerColOffSet")
            .forEach((input) => {
                input.addEventListener("change", () => {
                    report.pageSetting.headerColOffSet = [
                        parseFloat(
                            document.querySelector(
                                "div#pageSettingPanel input.headerColOffSet.first"
                            ).value
                        ),
                        parseFloat(
                            document.querySelector(
                                "div#pageSettingPanel input.headerColOffSet.second"
                            ).value
                        ),
                    ];
                });
            });

        document
            .querySelectorAll("div#pageSettingPanel input.footerColOffSet")
            .forEach((input) => {
                input.addEventListener("change", () => {
                    report.pageSetting.footerColOffSet = [
                        parseFloat(
                            document.querySelector(
                                "div#pageSettingPanel input.footerColOffSet.first"
                            ).value
                        ),
                        parseFloat(
                            document.querySelector(
                                "div#pageSettingPanel input.footerColOffSet.second"
                            ).value
                        ),
                    ];
                });
            });

        document
            .querySelectorAll("div#pageSettingPanel input.colWidthPct")
            .forEach((input) => {
                input.addEventListener("change", (e) => {
                    e.target.value = parseFloat(e.target.value).toFixed(1);

                    document.querySelector(
                        "div#pageSettingPanel input.x8"
                    ).value = (
                        100 -
                        parseFloat(
                            document.querySelector(
                                "div#pageSettingPanel input.colWidthPct.x1"
                            ).value
                        ) -
                        parseFloat(
                            document.querySelector(
                                "div#pageSettingPanel input.colWidthPct.x2"
                            ).value
                        ) -
                        parseFloat(
                            document.querySelector(
                                "div#pageSettingPanel input.colWidthPct.x3"
                            ).value
                        ) -
                        parseFloat(
                            document.querySelector(
                                "div#pageSettingPanel input.colWidthPct.x4"
                            ).value
                        ) -
                        parseFloat(
                            document.querySelector(
                                "div#pageSettingPanel input.colWidthPct.x5"
                            ).value
                        ) -
                        parseFloat(
                            document.querySelector(
                                "div#pageSettingPanel input.colWidthPct.x6"
                            ).value
                        ) -
                        parseFloat(
                            document.querySelector(
                                "div#pageSettingPanel input.colWidthPct.x7"
                            ).value
                        )
                    ).toFixed(1);

                    report.pageSetting.colWidthPct = [
                        document.querySelector("div#pageSettingPanel input.x1")
                            .value / 100,
                        document.querySelector("div#pageSettingPanel input.x2")
                            .value / 100,
                        document.querySelector("div#pageSettingPanel input.x3")
                            .value / 100,
                        document.querySelector("div#pageSettingPanel input.x4")
                            .value / 100,
                        document.querySelector("div#pageSettingPanel input.x5")
                            .value / 100,
                        document.querySelector("div#pageSettingPanel input.x6")
                            .value / 100,
                        document.querySelector("div#pageSettingPanel input.x7")
                            .value / 100,
                        document.querySelector("div#pageSettingPanel input.x8")
                            .value / 100,
                    ];
                });
            });

        document
            .querySelectorAll("div#pageSettingPanel input.rowHeightPct")
            .forEach((input) => {
                input.addEventListener("change", (e) => {
                    e.target.value = parseFloat(e.target.value).toFixed(1);

                    document.querySelector(
                        "div#pageSettingPanel input.y5"
                    ).value = (
                        100 -
                        parseFloat(
                            document.querySelector(
                                "div#pageSettingPanel input.y1"
                            ).value
                        ) -
                        parseFloat(
                            document.querySelector(
                                "div#pageSettingPanel input.y2"
                            ).value
                        ) -
                        parseFloat(
                            document.querySelector(
                                "div#pageSettingPanel input.y3"
                            ).value
                        ) -
                        parseFloat(
                            document.querySelector(
                                "div#pageSettingPanel input.y4"
                            ).value
                        )
                    ).toFixed(1);

                    report.pageSetting.rowHeightPct = [
                        document.querySelector("div#pageSettingPanel input.y1")
                            .value / 100,
                        document.querySelector("div#pageSettingPanel input.y2")
                            .value / 100,
                        document.querySelector("div#pageSettingPanel input.y3")
                            .value / 100,
                        document.querySelector("div#pageSettingPanel input.y4")
                            .value / 100,
                        document.querySelector("div#pageSettingPanel input.y5")
                            .value / 100,
                    ];
                });
            });
    },
};
pageSetting.init();
