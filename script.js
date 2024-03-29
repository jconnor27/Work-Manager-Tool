let allWrList = [];


class PermitDate {
    constructor(curDate, type) {
        this.curDate = curDate;
        this.type = type;
    }

    makeRowElement() {
        console.log("Entered - PermitDate - makeRowElement()");

        let rowElement = document.createElement("permitDate" + type);

        rowElement.classList.add("permitDate"); // Need to make this class in css   
    }
}

class WrTypeDDMenu {
    constructor() {
        this.curOption = "Not Set";
        this.height = null;
        this.width = null;
    }

    setHeight(height) {
        console.log("Enterd - wrTypeStatusDDMenu - setHeight(" + height + ")");

        this.height = height;
    }

    setWidth(width) {
        console.log("Enterd - wrTypeStatusDDMenu - setWidth(" + width + ")");

        this.width = width;
    }

    makeRowElement() {
        console.log("Entered - WrTypeDDMenu - makeRowElement()");

        let rowElement = document.createElement("wrTypeDDMenu");

        rowElement.classList.add("wrTypeRowElement");

        let str = document.createElement("wrTypeDDMenuContentBox");

        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItemBlank">${""}</div>`);
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"DRNU"}</div>`);
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"DRNO"}</div>`);
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"DROU"}</div>`);
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"DRIU"}</div>`);
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"DRIO"}</div>`);
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"DWFO"}</div>`);
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"DDI"}</div>`);

        str.style.display = 'none';
        str.style.position = 'absolute';
        str.style.marginTop = '45px';
        str.style.backgroundColor = "white"
        str.style.zIndex = 1;
        str.id = "wr_type_dd_content";

        rowElement.innerHTML = `<div class="wrTypeDDMenuBox" id="wr_type_dd_menu_current">${this.curOption}</div>` +
        `<button type="button" class="wrTypeDDMenuButton" id="wr_type_dd_menu_current_button">\\/</button>` + str.outerHTML;

        if (this.width != undefined) {
            rowElement.style.width = this.width;
        }
        if (this.height != undefined) {
            rowElement.style.height = this.height;
        }

        return rowElement;
    }
}

class PermitStatusDDMenu {
    constructor(tab, rowNumber) {
        this.curOption = "Not Set";
        this.tab = tab;
        this.rowNumber = rowNumber;
        this.height = null;
        this.width = null;
    }

    setHeight(height) {
        console.log("Enterd - PermitStatusDDMenu - setHeight(" + height + ")");

        this.height = height;
    }

    setWidth(width) {
        console.log("Enterd - PermitStatusDDMenu - setWidth(" + width + ")");

        this.width = width;
    }

    makeRowElement() {
        console.log("Entered - PermitStatusDDMenu - makeRowElement()");

        let rowElement = document.createElement("permitStatusDDMenu" + this.tab + "Tab" + "Row" + this.rowNumber);

        rowElement.classList.add("permitStatusRowElement");

        let str = document.createElement("permitStatusDDMenuContentBox");

        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"Applied"}</div>`);
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"Received"}</div>`);
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"Expiring Soon"}</div>`);
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"Expired"}</div>`);
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"Extension Submitted"}</div>`);
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"Extension Received"}</div>`);
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"Don't Need"}</div>`);
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"Haven't Checked"}</div>`);

        str.style.display = 'none';
        str.style.position = 'absolute';
        str.style.marginTop = '45px';
        str.style.backgroundColor = "white"
        str.style.zIndex = 1;
        str.id = "permit_status_dd_" + this.tab + "_tab_row_" + this.rowNumber + "_content";

        rowElement.innerHTML = `<div class="permitStatusDDMenuBox" id="permit_status_dd_${this.tab}_tab_row_${this.rowNumber}_current">${this.curOption}</div>` +
        `<button type="button" class="permitStatusDDMenuButton" id="permit_status_dd_${this.tab}_tab_row_${this.rowNumber}_button">\\/</button>` + str.outerHTML;

        if (this.width != undefined) {
            rowElement.style.width = this.width;
        }
        if (this.height != undefined) {
            rowElement.style.height = this.height;
        }

        return rowElement;

    }
}

class EasementStatusDDMenu {
    constructor(rowNumber) {
        this.curOption = "Not Set";
        this.rowNumber = rowNumber;
        this.height = null;
        this.width = null;
    }

    setHeight(height) {
        console.log("Enterd - EasementStatusDDMenu - setHeight(" + height + ")");

        this.height = height;
    }

    setWidth(width) {
        console.log("Enterd - EasementStatusDDMenu - setWidth(" + width + ")");

        this.width = width;
    }

    makeRowElement() {
        console.log("Entered - EasementStatusDDMenu - makeRowElement()");

        let rowElement = document.createElement("easementStatusDDMenu");

        rowElement.classList.add("easementStatusRowElement");

        let str = document.createElement("easementStatusDDMenuContentBox");

        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"Need to Submit"}</div>`);
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"Pending"}</div>`);
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"Don't Need"}</div>`);
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"Have Easement"}</div>`);
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"Need Easement"}</div>`);
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"Waiting - Creation"}</div>`);
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"Waiting - Customer"}</div>`);

        str.style.display = 'none';
        str.style.position = 'absolute';
        str.style.marginTop = '45px'
        str.style.backgroundColor = "white";
        str.style.zIndex = 1;
        str.id = "easement_status_dd_" + this.rowNumber + "_content";

        
        rowElement.innerHTML = `<div class="easementStatusDDMenuBox" id="easement_status_dd_${this.rowNumber}_current">${this.curOption}</div>` +
        `<button type="button" class="easementStatusDDMenuButton" id="easement_status_dd_${this.rowNumber}_button">\\/</button>` + str.outerHTML;
        
        if (this.width != undefined) {
            rowElement.style.width = this.width;
        }
        if (this.height != undefined) {
            rowElement.style.height = this.height;
        }

        return rowElement;
    }

}

class GeneralStatusDDMenu {
    constructor(rowNumber) {
        this.curOption = "Not Set";
        this.rowNumber = rowNumber;
        this.height = null;
        this.width = null;
    }

    setHeight(height) {
        console.log("Enterd - GeneralStatusDDMenu - setHeight(" + height + ")");

        this.height = height;
    }

    setWidth(width) {
        console.log("Enterd - GeneralStatusDDMenu - setWidth(" + width + ")");

        this.width = width;
    }

    makeRowElement() {
        console.log("Entered - GeneralStatusDDMenu - makeRowElement()");

        let rowElement = document.createElement("generalStatusDDMenu");
        rowElement.id = "general_status_dd_row_" + this.rowNumber;
        
        rowElement.classList.add("generalStatusRowElement");
        

        let str = document.createElement("generalStatusDDMenuContentBox");

        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"Waiting - LL/SP/ Etc."}</div>`);
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"Need to Visit"}</div>`);
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"SVC Calcs + Coding"}</div>`);
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"Check/ Apply For Permit"}</div>`);
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"Check/ Apply For Easement"}</div>`);
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"Design"}</div>`);
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"Review - Peer"}</div>`);
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"Review - Coordinator"}</div>`);
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"Revisions"}</div>`);
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"Waiting on Cust - Not Aprvd"}</div>`);
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"Waiting on Cust - Approved"}</div>`);
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"Need to Flag"}</div>`);
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"7010'd"}</div>`);
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"Cancled/ Reassigned/ Other"}</div>`);

        str.style.display = 'none';
        str.style.position = 'absolute';
        str.style.marginTop = '45px';
        str.style.backgroundColor = "white";
        str.style.height = '270px';
        str.style.width = '350px';
        str.style.flexWrap = 'wrap';
        str.style.zIndex = 1;
        str.id = "general_status_dd_" + this.rowNumber + "_content";

        rowElement.innerHTML = `<div class="generalStatusDDMenuBox" id="general_status_dd_${this.rowNumber}_current">${this.curOption}</div>` +
        `<button type="button" class="generalStatusDDMenuButton" id="general_status_dd_${this.rowNumber}_button">\\/</button>` + str.outerHTML;

        if (this.width != undefined) {
            rowElement.style.width = this.width;
        }
        if (this.height != undefined) {
            rowElement.style.height = this.height;
        }
        
        return rowElement;
    }
}

class Permit {
    constructor(workRequestNumber, permitStatus, dateSubmitted, dateApplied, priorityNumber, crd, rcd, startDate, endDate, creationDate) {
        this.workRequestNumber = workRequestNumber;
        this.permitStatus = permitStatus;
        this.dateSubmitted = dateSubmitted;
        this.dateApplied = dateApplied;
        this.priorityNumber = priorityNumber;
        this.crd = crd;
        this.rcd = rcd;
        this.startDate = startDate;
        this.endDate = endDate;
        this.creationDate = creationDate;
    }

    toString() {
        console.log("Entered - Permit - toString()");

        const permitSTR = "permitStatus:" + this.permitStatus + "," + "dateSubmitted:" + this.dateSubmitted + "," +
                        "dateApplied:" + this.dateApplied + "," + "priorityNumber:" + this.priorityNumber + "," + 
                        "crd:" + this.crd + "," + "rcd:" + this.rcd + "," + "startDate:" + this.startDate + "," + 
                        "endDate:" + this.endDate + "," + "creationDate:" + this.creationDate;

        return permitSTR;
    }
}

class Haptix {
    constructor() {

    }
    displayWrAdded(wrNum) {
        console.log("Entered - displayWrAdded(" + wrNum + ")");

        const temp = document.getElementById("add_tab_display_top_mid");

        temp.insertAdjacentHTML("afterbegin", `<div class="wrAddedPrompt" id="wr_added_prompt">Work Request ${wrNum} added</li>`);
        setTimeout(() => {
            const temp = document.getElementById("wr_added_prompt");
            temp.remove();
        }, 3000);
    }

    displayWrUpdated(wrNum) {
        console.log("Entered - displayWrUpdated(" + wrNum + ")");

        const temp = document.getElementById("add_tab_display_top_mid");

        temp.insertAdjacentHTML("afterbegin", `<div class="wrAddedPrompt" id="wr_added_prompt">Work Request ${wrNum} Updated</li>`);
        setTimeout(() => {
            const temp = document.getElementById("wr_added_prompt");
            temp.remove();
        }, 3000);
    }

    displayPermitUpdated(wrNum) {
        console.log("Entered - displayPermitUpdated(" + wrNum + ")");

        const temp = document.getElementById("add_tab_display_top_mid");

        temp.insertAdjacentHTML("afterbegin", `<div class="wrAddedPrompt" id="wr_added_prompt">Permit For Work Request ${wrNum} Updated</li>`);
        setTimeout(() => {
            const temp = document.getElementById("wr_added_prompt");
            temp.remove();
        }, 3000);
    }
}

class Error {
    constructor() {

    }
    displayWrAlreadyExistsAddUpdate(wrNum) {
        console.log("Entered - disaplayWrAlreadyExistsAddUpdate(" + wrNum + ")");

        const temp = document.getElementById("add_tab_display_top_mid");

        temp.insertAdjacentHTML("afterbegin", `<div class="errorMessage" id="error_wr_already_exists">Work Request Number Already Exists</li>`);
        setTimeout(() => {
            const temp = document.getElementById("error_wr_already_exists");
            temp.remove();
        }, 3000);
    }

    displayPermitAlreadyExistsAddUpdate(wrNum) {
        console.log("Entered - disaplayPermitAlreadyExistsAddUpdate(" + wrNum + ")");

        const temp = document.getElementById("add_tab_display_top_mid");

        temp.insertAdjacentHTML("afterbegin", `<div class="errorMessage" id="error_permit_already_exists">Permit for Work Request Number Already Exists</li>`);
        setTimeout(() => {
            const temp = document.getElementById("error_permit_already_exists");
            temp.remove();
        }, 3000);
    }

    displayWrNotFoundAddUpdate(wrNum) {
        console.log("Entered - displayWrNotFoundAddUpdate(" + wrNum + ")");

        const temp = document.getElementById("add_tab_display_top_mid");
        temp.insertAdjacentHTML("afterbegin", `<div class="errorMessage" id="error_wr_not_found">Work Request Number Not Found</li>`);
        setTimeout(() => {
            const temp = document.getElementById("error_wr_not_found");
            temp.remove();
        }, 3000);
    }

    displayPermitNotFoundAddUpdate(wrNum) {
        console.log("Entered - displayPermitNotFoundAddUpdate(" + wrNum + ")");

        const temp = document.getElementById("add_tab_display_top_mid");
        temp.insertAdjacentHTML("afterbegin", `<div class="errorMessage" id="error_wr_not_found">Permit for Work Request Number Not Found</li>`);
        setTimeout(() => {
            const temp = document.getElementById("error_wr_not_found");
            temp.remove();
        }, 3000);
    }

    displayInvalidWr(wrNum) {
        console.log("Entered - displayInvalidWr(" + wrNum + ")");

        const temp = document.getElementById("add_tab_display_top_mid");
        temp.insertAdjacentHTML("afterbegin", `<div class="errorMessage" id="error_invalid_wr">Invalid Work Request Number</li>`);
        setTimeout(() => {
            const temp = document.getElementById("error_invalid_wr");
            temp.remove();
        }, 3000);        
    }

    displayInvalidPriorityNumber() {
        console.log("Entered - displayInvalidPriorityNumber()");

        const temp = document.getElementById("customer_contacted_priority_container");
        temp.insertAdjacentHTML("beforeend", `<div class="errorMessage" id="error_invalid_priority_number">Invalid Priority Number</li>`);
        setTimeout(() => {
            const temp = document.getElementById("error_invalid_priority_number");
            temp.remove();
        }, 3000);
    }

    displayInvalidPriorityNumberPermit() {
        console.log("Entered - displayInvalidPriorityNumberPermit()");

        const temp = document.getElementById("add_tab_display_add_permit_left");
        temp.insertAdjacentHTML("beforeend", `<div class="errorMessage" id="error_invalid_priority_number">Invalid Priority Number</li>`);
        setTimeout(() => {
            const temp = document.getElementById("error_invalid_priority_number");
            temp.remove();
        }, 3000);
    }

    displayInvalidWrType() {
        console.log("Entered - displayInvalidWrType()");

        const temp = document.getElementById("add_tab_wr_type_container");
        temp.insertAdjacentHTML("beforeend", `<div class="errorMessage" id="error_invalid_wr_type">Select Wr Type</li>`);
        setTimeout(() => {
            const temp = document.getElementById("error_invalid_wr_type");
            temp.remove();
        }, 3000);
    }
}

class workRequest {
    constructor(workRequestNumber, houseNumber, streetName, countyCity, zipCode, priorityNumber, ownerName, ownerNumber, ownerEmail, 
        builderName, builderNumber, builderEmail, otherName, otherNumber, otherEmail, wrType, crd, rcd, generalStatus, permitStatus,
        easementRequestStatus, commentsGeneral, customerContacted, creationDate) {
            this.workRequestNumber = workRequestNumber;
            this.houseNumber = houseNumber;
            this.streetName = streetName;
            this.countyCity = countyCity;
            this.zipCode = zipCode;
            this.priorityNumber = priorityNumber;
            this.ownerName = ownerName;
            this.ownerNumber = ownerNumber;
            this.ownerEmail = ownerEmail;
            this.builderName = builderName;
            this.builderNumber = builderNumber;
            this.builderEmail = builderEmail;
            this.otherName = otherName;
            this.otherNumber = otherNumber;
            this.otherEmail = otherEmail;
            this.wrType = wrType;
            this.crd = crd;
            this.rcd = rcd;
            this.generalStatus = generalStatus.trim();
            this.permit = new Permit(workRequestNumber, permitStatus.trim(), "0001-01-01", "0001-01-01", "2", "0001-01-01", "0001-01-01", "0001-01-01", "0001-01-01", creationDate);
            this.easementRequestStatus = easementRequestStatus.trim();
            this.commentsGeneral = commentsGeneral;
            this.customerContacted = customerContacted;
            this.creationDate = creationDate;
        }

    wrAddressType() {
        console.log("Entered - wrAddressType()");

        let str = "";

        str += "WR#: " + this.workRequestNumber + "\n" + this.houseNumber + " " + this.streetName + ",\n" + this.countyCity + ", " + 
            this.zipCode + "\n" + this.wrType; 
        return str; 
    }

    makeRowElement() {
        console.log("Entered - workRequest - makeRowElement()");
        console.log("this.wrAddressType = " + this.wrAddressType());

        let rowElement = document.createElement("rowElement");
        rowElement.classList.add("allWrDisplayWrRow");
        rowElement.insertAdjacentHTML("beforeend", `<li class="allWrDisplayPriorityNumberContainer">${this.priorityNumber}</li>`);
        rowElement.insertAdjacentHTML("beforeend", `<li class="allWrDisplayWrAddressType">${this.wrAddressType()}</li>`);
        rowElement.insertAdjacentHTML("beforeend", `<li class="allWrDisplayWrDate">${this.parseDate(this.crd)}</li>`);
        rowElement.insertAdjacentHTML("beforeend", `<li class="allWrDisplayWrDate">${this.parseDate(this.rcd)}</li>`);
        rowElement.insertAdjacentElement("beforeend", `<li class="allWrDisplayWrStatus">${"Temp"}</li>`/*generalStatusDDMenuSpecific.makeRowElement()*/);
        rowElement.insertAdjacentHTML("beforeend", `<li class="allWrDisplayToDo">${"N/A"}</li>`);
        rowElement.insertAdjacentHTML("beforeend", `<li class="allWrDisplayWrStatus">${this.permitStatus}</li>`);
        rowElement.insertAdjacentHTML("beforeend", `<li class="allWrDisplayWrStatus">${this.easementRequestStatus}</li>`);
        rowElement.insertAdjacentHTML("beforeend", `<li class="allWrDisplayWrComments">${this.commentsGeneral}</li>`);
        rowElement.insertAdjacentHTML("beforeend", `<li class="allWrDisplayPOCContainer">${
            `<li class="pocWrapper">${"(Owner) " + this.ownerName + "<br>" + this.ownerNumber + "<br>" + this.ownerEmail}</li>`
        }</li>`);

        return rowElement;
    }

    parseDate(date) {
        console.log("Entered - parseDate(" + date + ")");

        const day = date.substring(8);
        const month = date.substring(5, 7);
        const year = date.substring(0, 4);

        const str = month + "-" + day + "-" + year;

        if (str == "01-01-0001") {
            return "Not Set";
        } else {
            return str;
        }
    }


    toString() {
        console.log("Entered - toString()");

        const wrSTR = "workRequestNumber:" + this.workRequestNumber + "," +
                "houseNumber:" + this.houseNumber + "," +
                "streetName:" + this.streetName + "," +
                "countyCity:" + this.countyCity + "," +
                "zipCode:" + this.zipCode + "," +
                "priorityNumber:" + this.priorityNumber + "," +
                "ownerName:" + this.ownerName + "," +
                "ownerNumber:" + this.ownerNumber + "," +
                "ownerEmail:" + this.ownerEmail + "," +
                "builderName:" + this.builderName + "," +
                "builderNumber:" + this.builderNumber + "," +
                "builderEmail:" + this.builderEmail + "," +
                "otherName:" + this.otherName + "," +
                "otherNumber:" + this.otherNumber + "," +
                "otherEmail:" + this.otherEmail + "," +
                "wrType:" + this.wrType + "," +
                "crd:" + this.crd + "," +
                "rcd:" + this.rcd + "," +
                "generalStatus:" + this.generalStatus + "," +
                "permit:" + this.permit.toString() + "," + // 9 lines
                "easementRequestStatus:" + this.easementRequestStatus + "," +
                "commentsGeneral:" + this.commentsGeneral + "," +
                "customerContacted:" + this.customerContacted + "," +
                "creationDate:" + this.creationDate + ","; /* 23 + 9 lines */
        return wrSTR;
    }

}

class Page {
    constructor(content) {
        this.content = content;
    }

    makePage() {
        console.log("Entered - Page - makePage()");

        let page = [];
        for (let i = 0; i < this.content.length; i++) {
            page[i] = this.content[i];
        }
        return page;
    }

    getWr(index) {
        console.log("Entered - Page - getWr(" + index + ")");

        const temp = this.makePage();
        return temp[index];
    }
}

class Paginated {
    constructor(list){
        console.log("Entered - Paginated - Constructor - List = ");
        this.list = list;
        this.count = 0;
    }

    getPages() {
        console.log("Entered Paginated - getPages()");

        let pages = [];
        let curPage = [];
        let localCount = 0;

        for (let i=0; i < this.list.length + 1; i++) {
            if (localCount == 3) {
                const tempPage = new Page(curPage);
                localCount = 0;
                curPage = [];
                pages[this.count] = tempPage;
                this.count += 1;
                i--;
            } else /*if (count < 3)*/ {
                if (typeof this.list[i] != "undefined") {
                    curPage[localCount] = this.list[i];
                    localCount += 1;
                }
            }
            if ((i == this.list.length)) {
                const tempPage = new Page(curPage);
                localCount = 0;
                curPage = [];
                pages[this.count] = tempPage;
                this.count += 1;
            }
            
        }
        const tempLength = this.list.length;

        curPage = [];
        for (let i = 0; i < tempLength % 3; i++) {
            curPage[i] = pages[pages.length - 1].content[i];
        }
        const tempPage = new Page(curPage);
        pages[pages.length - 1] = tempPage;
        return pages;
    }


}

    /* Formatting Functions */
/* Takes in a date (as a string) in the format of "MM-DD-YYYY"
   And returns a date (as a string) in the format of "YYYY-MM-DD" */
function formatDate(date) {
    console.log("Entered - formatDate(" + date + ")");

    if (date.indexOf("-") == 4) {
        return date;
    } else {
        const year = date.substring(6);
    const month = date.substring(0,2);
    const day = date.substring(3,5);

    return year + "-" + month + "-" + day;
    }
    
}
/* Takes in a date (as a string) in any the format of "YYYY-MM-DD"
   And returns a date (as a string) in the format of (MM-DD-YYYY) */
function formatDateNormal(date) {
    console.log("Entered - formatDateNormal(" + date + ")");

    const year = date.substring(0, 4);
    const month = date.substring(5,7);
    const day = date.substring(8);

    return month + "-" + day + "-" + "-" + year;
}

    /* Sorting (Filter) Functions */
/* Compares creation dates - returns in order from oldest to newest */
function quickSortAgeOld(arr) {
    console.log("Entered - quickSortAgeOld");

    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[0];
    let leftArr = [];
    let rightArr = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].creationDate > pivot.creationDate) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }

    return [...quickSortAgeNew(leftArr), pivot, ...quickSortAgeNew(rightArr)];
}
/* Compares creation dates - returns in order from newest to oldest */
function quickSortAgeNew(arr) {
    console.log("Entered - quickSortAgeNew");

    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[0];
    let leftArr = [];
    let rightArr = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].creationDate < pivot.creationDate) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }

    return [...quickSortAgeNew(leftArr), pivot, ...quickSortAgeNew(rightArr)];
}
function quickSortRcd(arr) {
    console.log("Entered - quickSortRcd");

    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[0];
    let leftArr = [];
    let rightArr = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].rcd < pivot.rcd) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }

    return [...quickSortRcd(leftArr), pivot, ...quickSortRcd(rightArr)];
}
function quickSortCrd(arr) {
    console.log("Entered - quickSortCrd");

    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[0];
    let leftArr = [];
    let rightArr = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].crd < pivot.crd) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }

    return [...quickSortCrd(leftArr), pivot, ...quickSortCrd(rightArr)];
}
function quickSortPriorityNumber(arr) {
    console.log("Entered - quickSortPriorityNumber");

    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[0];
    let leftArr = [];
    let rightArr = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].priorityNumber < pivot.priorityNumber) {
            leftArr.push(arr[i]);
        } else {
            rightArr.push(arr[i]);
        }
    }

    return [...quickSortPriorityNumber(leftArr), pivot, ...quickSortPriorityNumber(rightArr)];
}

    /* Load and Save Functions */
async function getFile() {
    console.log("Entered - getFile()");

    const [fileHandle] = await window.showOpenFilePicker();
    const file = await fileHandle.getFile();
    return file;
}
async function writeFile(contents) {
    console.log("Entered - writeFile(contents)");

    const [fileHandle] = await window.showSaveFilePicker();
    const writable = await fileHandle.createWritable();
    await writable.write(contents);
    await writable.close();
}
async function saveFile(allWrList) {
    console.log("Entered - saveFile()");
    
    const newHandle = await window.showSaveFilePicker();
    const writableStream = await newHandle.createWritable();
    const temp = new Blob(allWrList);
    await writableStream.write(temp);
    await writableStream.close();

    
}
function readFile() {
    var selected = document.getElementById("allWrListFile").files[0];

    var reader = new FileReader();
    reader.addEventListener("loadend", function() {
        let allWrList = parseWrString(reader.result);
        document.getElementById("load_save_buttons_container").insertAdjacentHTML("afterEnd", `<div class="hidden" id="temp_storage">${allWrList}</div>`);
        document.getElementById("footer_button_sync").classList.remove("hidden");
    });
    reader.readAsText(selected);
}

    /* InjectHTML Functions */
function injectHTMLAllWrTabDisplay(allWrList, currentPageAllWr) {
    console.log("Entered - injectHTMLAllWrTabDisplay(allWrList, " + currentPageAllWr + ")");
    
    const pag = new Paginated(allWrList);
    const pages = pag.getPages();

    hideAllWrRows();

    if (document.getElementById("temp_all_wr_list") == null) {
        const tempAllWrList = document.createElement("temp_all_wr_list");
        tempAllWrList.id = "temp_all_wr_list";
        tempAllWrList.classList.add("hidden");
        tempAllWrList.innerHTML = allWrList;

        const allWrTab = document.getElementById("all_wr_tab");
        allWrTab.insertAdjacentElement("beforeend", tempAllWrList);

    } else {
        const tempAllWrList = document.getElementById("temp_all_wr_list");
        tempAllWrList.innerHTML = allWrList;
    }

    for (var i = 0; i < pages[currentPageAllWr].content.length; i++) {
        
        setAllWrRowValues(pages[currentPageAllWr].content[i], i + 1);
        revealWrRow(i + 1);
    }

    const prev = document.getElementById("all_wr_tab_page_prev_button");
    const next = document.getElementById("all_wr_tab_page_next_button");
    const cur = document.getElementById("all_wr_tab_current_page_box");

    cur.classList.remove("hidden");

    /* Adding next and prev buttons */
    if ((currentPageAllWr + 1)  < pages.length && pages[currentPageAllWr + 1].content.length != 0) { // reveal next button
        next.classList.remove("hidden");
    } else {
        next.classList.add("hidden");
    }

    if (currentPageAllWr + 1 > 1) { // reveal prev button
        prev.classList.remove("hidden");
    } else {
        prev.classList.add("hidden");
    }
}
function injectHTMLPermitsTabDisplay(allWrList, currentPagePermits) {
    console.log("Entered - injectHTMLPermitsTabDisplay(allWrList, " + currentPagePermits + ")");

    const pag = new Paginated(allWrList);
    const pages = pag.getPages();

    hideAllPermitRows();

    const tempAllWrList = document.getElementById("temp_all_wr_list");
    tempAllWrList.innerHTML = allWrList;

    for (var i = 0; i < pages[currentPagePermits].content.length; i++) {
        setPermitRowValues(pages[currentPagePermits].content[i], i + 1);
        revealPermitRow(i + 1);
    }


    /* Adding next and prev buttons */
    const prev = document.getElementById("permits_tab_page_prev_button");
    const next = document.getElementById("permits_tab_page_next_button");
    const cur = document.getElementById("permits_tab_current_page_box");

    cur.classList.remove("hidden");

    if ((currentPagePermits + 1)  < pages.length && pages[currentPagePermits + 1].content.length != 0) { // reveal next button
        next.classList.remove("hidden");    
    } else {
        next.classList.add("hidden");
    }

    if (currentPagePermits + 1 > 1) {  // reveal prev button
        prev.classList.remove("hidden");
    } else {
        prev.classList.add("hidden");
    }
}

        /* Set/Reveal Rows */
    /* Permits Tab */
function setPermitRowValues(wr, rowNumber) {
    console.log("Entered - setPermitRowValues( + wr + ,  + rowNumber )");

    let rowNumberText = ""; 

    if (rowNumber == 1) {
        rowNumberText = "one";
    } else if (rowNumber == 2) {
        rowNumberText = "two";
    } else if (rowNumber == 3) {
        rowNumberText = "three";
    }

    let tempDate = [];

    const priority = document.getElementById("permits_tab_row_" + rowNumberText + "_priority_textfield");
    priority.value = wr.priorityNumber;

    const address = document.getElementById("permits_tab_row_" + rowNumberText + "_address");
    address.innerText = wr.wrAddressType();

    const submitted = document.getElementById("permits_tab_row_" + rowNumberText + "_submit");
    submitted.innerText = wr.permit.dateSubmitted;

    const status = document.getElementById("permit_status_dd_permits_tab_row_" + rowNumber + "_current");
    status.innerText = wr.permit.permitStatus;
    status.style.backgroundColor = assessPermitStatus(wr.permit.permitStatus);

    const startDate = document.getElementById("permits_tab_row_" + rowNumberText + "_start_date");
    startDate.value = formatDate(wr.permit.startDate);
    //let date = new Date(wr.permit.startDate);
    startDate.zIndex = 2;
    startDate.style.backgroundColor = assessPermitStartDate(wr.permit.startDate, wr.permit.endDate);

    const endDate = document.getElementById("permits_tab_row_" + rowNumberText + "_end_date");
    endDate.value = formatDate(wr.permit.endDate);
    let date = new Date(wr.permit.endDate);
    endDate.style.backgroundColor = assessDate(date);

    const crd = document.getElementById("permits_tab_row_" + rowNumberText + "_crd_date");
    crd.value = wr.crd;
    date = new Date(wr.crd);
    crd.style.backgroundColor = assessDate(date);

    const rcd = document.getElementById("permits_tab_row_" + rowNumberText + "_rcd_date");
    rcd.value = wr.rcd;
    date = new Date(wr.rcd);
    rcd.style.backgroundColor = assessDate(date);

    const comments = document.getElementById("permits_tab_row_" + rowNumberText + "_comments");
    // Will need to fill in when hooked up

}
function hideAllPermitRows() {
    console.log("Entered - hideAllPermitRows()");

    let temp = [];
    let rowNumberText = "";

    for (var i = 0; i < 3; i++) {
        //rowNumberText = ""; //convertNumText(i);
        if (i + 1 == 1) {
            rowNumberText = "one";
        } else if (i + 1 == 2) {
            rowNumberText = "two";
        } else if (i + 1 == 3) {
            rowNumberText = "three";
        }
        
        temp = document.getElementById("permits_tab_row_" + rowNumberText);
        temp.classList.add("hidden");
    }
}
function revealPermitRow(row) {
    console.log("Entered - revealPermitRow(" + row + ")");
    
    let rowNumberText = ""; //convertNumText(row);

    if (row == 1) {
        rowNumberText = "one";
    } else if (row == 2) {
        rowNumberText = "two";
    } else if (row == 3) {
        rowNumberText = "three";
    }

    const temp = document.getElementById("permits_tab_row_" + rowNumberText);
    temp.classList.remove("hidden");
}

    /* AllWr Tab */
function setAllWrRowValues(wr, rowNumber) {
    console.log("Entered - setAllWrRowValues( + wr + ,  + rowNumber = " + rowNumber + ")");

    let rowNumberText = ""; //convertNumText(rowNumber);
    if (rowNumber == 1) {
        rowNumberText = "one";
    } else if (rowNumber == 2) {
        rowNumberText = "two";
    } else if (rowNumber == 3) {
        rowNumberText = "three";
    }

    const priority = document.getElementById("all_wr_tab_row_" + rowNumberText + "_priority_textfield");
    priority.value = wr.priorityNumber;

    console.log("testing test");
    console.log(wr);
    
    const address = document.getElementById("all_wr_tab_row_" + rowNumberText + "_address");
    address.innerText = wr.wrAddressType();

    const crd = document.getElementById("all_wr_tab_row_" + rowNumberText + "_crd");
    crd.value = wr.crd;
    let date = new Date(wr.crd);
    crd.style.backgroundColor = assessDate(date);

    const rcd = document.getElementById("all_wr_tab_row_" + rowNumberText + "_rcd");
    rcd.value = wr.rcd;
    date = new Date(wr.rcd);
    rcd.style.backgroundColor = assessDate(date);

    const generalStatus = document.getElementById("general_status_dd_" + rowNumber + "_current");
    generalStatus.innerText = wr.generalStatus;
    if (wr.generalStatus.includes("Waiting on Cust") == true || wr.generalStatus.includes("Cancled") == true || 
    wr.generalStatus.includes("Coordinator") == true || wr.generalStatus.includes("Check/ Apply") == true ||
    wr.generalStatus.includes("LL/SP") == true || wr.generalStatus.includes("SVC") == true) {
        generalStatus.style.fontSize = 'smaller';
    }

    const toDos = document.getElementById("all_wr_tab_row_" + rowNumberText + "_to_dos");
    // Need to fill in when hooked up

    const permitStatus = document.getElementById("permit_status_dd_allWr_tab_row_" + rowNumber + "_current");
    permitStatus.innerText = wr.permit.permitStatus;
    permitStatus.style.backgroundColor = assessPermitStatus(wr.permit.permitStatus);

    const easementStatus = document.getElementById("easement_status_dd_" + rowNumber + "_current");
    easementStatus.innerText = wr.easementRequestStatus;
    easementStatus.style.backgroundColor = assessEasementStatus(wr.easementRequestStatus);

    const comments = document.getElementById("all_wr_tab_row_" + rowNumberText + "_comments");
    // Need to fill in when hooked up

    const pocs = document.getElementById("all_wr_tab_row_" + rowNumberText + "_pocs");
    pocs.innerText = wr.ownerName + " - " + wr.ownerNumber + "\n" + wr.ownerEmail;

}
function hideAllWrRows() {
    console.log("Entered - hideAllWrRows()");

    let temp = [];
    let rowNumberText = "";

    for (var i = 0; i < 3; i++) {
        rowNumberText = ""; //convertNumText(i);
        if (i + 1 == 1) {
            rowNumberText = "one";
        } else if (i + 1 == 2) {
            rowNumberText = "two";
        } else if (i + 1 == 3) {
            rowNumberText = "three";
        }
        
        temp = document.getElementById("all_wr_tab_row_" + rowNumberText);
        temp.classList.add("hidden");
    }    
}
function revealWrRow(row) {
    console.log("Entered - revealWrRow(" + row + ")");

    let rowNumberText = ""; //convertNumText(row);

    if (row == 1) {
        rowNumberText = "one";
    } else if (row == 2) {
        rowNumberText = "two";
    } else if (row == 3) {
        rowNumberText = "three";
    }
    
    const temp = document.getElementById("all_wr_tab_row_" + rowNumberText);
    temp.classList.remove("hidden");
}

    /* Parse Functions */
function parseWrString(str) {
    console.log("Entered - parseWrString(str)");

    let wrList = [];
    let curIndex = 0;
    let tempCount = 0;
    let tempStr = str;

    /*let test = parseSingleWrString(str);
    console.log(test);*/

    while (str.length > 2) {
        curIndex = parseSingleWrIndex(str);
        tempStr = str.substring(0, curIndex);

        const data = parseSingleWrString(tempStr);
        
        const newWr = data[0];

        wrList[wrList.length] = newWr;

        str = str.slice(curIndex + 1);
        
        if (tempStr == str) {
            console.log("tempStr == str");
            return wrList;
        }
    }
    
    return wrList;
}
/* Helper for parseWrString - returns a new wr object from str */
function parseSingleWrString(str) {
    console.log("Entered - parseSingleWrString(str)");

    let colonIndex = 0;
    let commaIndex = 0;

    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf(",");
    const workRequestNumber = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 1);
    
    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf(",");
    const houseNumber = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 1);
    
    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf(",");
    const streetName = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 1);
    
    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf(",");
    const countyCity = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 1);
    
    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf(",");
    const zipCode = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 1);
    
    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf(",");
    const priorityNumber = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 1);
    
    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf(",");
    const ownerName = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 1);
    
    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf(",");
    const ownerNumber = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 1);
    
    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf(",");
    const ownerEmail = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 1);
    
    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf(",");
    const builderName = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 1);
    
    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf(",");
    const builderNumber = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 1);
    
    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf(",");
    const builderEmail = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 1);
    
    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf(",");
    const otherName = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 1);
    
    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf(",");
    const otherNumber = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 1);
    
    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf(",");
    const otherEmail = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 1);
    
    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf(",");
    const wrType = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 1);
    
    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf(",");
    const crd = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 1);
    
    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf(",");
    const rcd = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 1);
    
    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf(",");
    const generalStatus = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 1);

    str = str.substring(7);  // removing "permit:"

    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf(",");
    const permitStatus = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 1);

    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf(",");
    const dateSubmitted = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 1);

    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf(",");
    const dateApplied = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 1);

    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf(",");
    const priorityNumber2 = str.substring(colonIndex + 1, commaIndex); // don't need to record priority number twice
    str = str.substring(commaIndex + 1);

    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf(",");
    const crd2 = str.substring(colonIndex + 1, commaIndex); // don't need twice
    str = str.substring(commaIndex + 1);

    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf(",");
    const rcd2 = str.substring(colonIndex + 1, commaIndex);  // don't need twice
    str = str.substring(commaIndex + 1);

    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf(",");
    const permitStartDate = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 1);

    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf(",");
    const permitEndDate = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 1);

    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf(",");
    const creationDate2 = str.substring(colonIndex + 1, commaIndex);  // don't need twice
    str = str.substring(commaIndex + 1);
   
    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf(",");
    let easementRequestStatus = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 1);

    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf(",");
    const commentsGeneral = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 1);

    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf(",");
    const customerContacted = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 1);

    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf(",");
    const creationDate = str.substring(colonIndex + 1, commaIndex);
    
    const wr = new workRequest(workRequestNumber, houseNumber, streetName, countyCity, zipCode, priorityNumber, ownerName, ownerNumber, 
        ownerEmail, builderName, builderNumber, builderEmail, otherName, otherNumber, otherEmail, wrType, crd, rcd, generalStatus,
        permitStatus, easementRequestStatus, commentsGeneral, customerContacted, creationDate2);

        /*console.log("New Wr = ");
        console.log(wr)*/

    const permit = new Permit(workRequestNumber, permitStatus, dateSubmitted, dateApplied, priorityNumber, crd,
            rcd, permitStartDate, permitEndDate, creationDate);

        /*console.log("New Permit = ");
        console.log(permit);*/

    let data = [wr, permit];

    return data;
}
/* Helper for parseWrString - returns index of last comma of first wr in str */
function parseSingleWrIndex(str) {
    console.log("Entered - parseSingleWrIndex(str)");

    let wrIndex = 0;
    let curIndex = 0;
    let count = 0;

    while (count < 32) { // will need to change for new format
        curIndex = str.indexOf(",") + 1;
        str = str.substring(curIndex);
        wrIndex += curIndex;
        count += 1;
    }
    return wrIndex;
}

        /* Check Functions */
    /* CRD/RCD Check/Error Functions */
function crdRcdCheck(crd, rcd, tab, row) {
    console.log("Entered - crdRcdCheck(" + tab + " tab - row " + row + ")");

    const crdDate = new Date(crd);
    const rcdDate = new Date(rcd);
    const difference = calculateCrdRcdDifference(rcdDate - crdDate);

    if (crd != "0001-01-01" && rcd != "0001-01-01") {
        if (difference < 35) {
            insertRcdError(tab, row); 
        } else {
            removeRcdError(tab, row); 
        }
    }
    
}
function calculateCrdRcdDifference(dateDifference) {
    console.log("Entered - calculateCrdRcdDifference(" + dateDifference + ")");

    const data = new Date(dateDifference);
    const month = data.getMonth();
    let days = data.getDate() + 1;

    if (data.getFullYear() - 1970 > 1) { // 1970 is the default value from data Object
        console.log("leaving calculateCrdRcdDifferenct - more than 1 year apart");
        return 365;
    }
    if (data.getFullYear() < 0) { // I assigned 01/01/0001 as default and the data value is negative when it is passed in
        return -9999;
    } else {

        /* This is for leap year - which it is this year */
        const leapYear = new Date();
        if (leapYear.getFullYear() % 4 == 0) {
            console.log("Congrats, its a leap year");
            days += 1;
        }

        if (month == 0) {
            return days
        } else if (month == 1) {
            return 31 + days;
        } else if (month == 2) {
            return 59 + days;
        } else if (month == 3) {
            return 90 + days;
        } else if (month == 4) {
            return 120 + days;
        } else if (month == 5) {
            return 151 + days;
        } else if (month == 6) {
            return 181 + days;
        } else if (month == 7) {
            return 212 + days;
        } else if (month == 8) {
            return 243 + days;
        } else if (month == 9) {
            return 273 + days;
        } else if (month == 10) {
            return 304 + days;
        } else if (month == 11) {
            return 334 + days;
        }
    }
}
function insertRcdError(tab, row) {
    console.log("Entered - insertRcdError(" + tab +" tab - row " + row + ")");

    const rcdError = document.createElement("rcdError");
    rcdError.innerText = "* RCD is < 5 Weeks *";
    rcdError.style.color = "red";
    rcdError.style.fontSize = "smaller";
    rcdError.id = tab + "_tab_row_" + row + "_rcd_error";

    let temp = [];

    if (tab == "permits") {
        temp = document.getElementById(tab + "_tab_row_" + row + "_rcd_date");
    } else if (tab == "add" && row == "two") {
        temp = document.getElementById("add_tab_display_add_permit_left");
        rcdError.classList.add("addTabPermitRcdError");
        document.getElementById("add_tab_display_add_permit_top").classList.add("removeSideMargins");
    } else if (tab == "add" && row == "one") {
        temp = document.getElementById("add_tab_display_bottom_left_container");
        rcdError.classList.add("addTabWrRCDError");
        document.getElementById("add_tab_display_bottom").classList.add("removeSideMargins");
    } else {
        temp = document.getElementById(tab + "_tab_row_" + row + "_rcd");
        rcdError.classList.add("addTabWrRcdError");
    }
    
    const str = new String(temp.innerHTML);
    if (str.includes("rcdError") == false) {
        temp.insertAdjacentElement("afterend", rcdError);

    }
}
function removeRcdError(tab, row) {
    console.log("Entered - removeRcdError(" + tab + " tab - row " + row + ")");

    const temp = document.getElementById(tab + "_tab_row_" + row + "_rcd_error");
    temp.remove();

    if (tab == "add" && row == "two") {
        document.getElementById("add_tab_display_add_permit_top").classList.remove("removeMargins");
    }
    if (tab == "add" && row == "one") {
        document.getElementById("add_tab_display_bottom").classList.remove("removeSideMargins");

    }
}

    /* General/Basic */
/* returns 0 at index 0 if not found - found wr element at index 1 - index at index 2*/
function getWr(curWrNum, allWrList) {
    console.log("Entered - getWr(" + curWrNum + ")");

    let wr = [];

    if (allWrList.length == 0) {
        console.log("empty list");
        wr[0] = false;
        return wr; /* Prevents error message on empty list */
    }

    for (var i = 0; i < allWrList.length; i++) {
        if (allWrList[i].workRequestNumber == curWrNum) {
            wr[0] = true;
            wr[1] = allWrList[i];
            wr[2] = i; /* returning index in list for update function */
            return wr;
        } 
    }
    console.log("Wr not found");
    wr[0] = false;
    return wr;
}
function permitExists(wrNum, allWrList) {
    console.log("Entered - permitExists");

    for (var i = 0; i < allWrList.length; i++) {
        if (wrNum == allWrList[i].workRequestNumber) {
            return true;
        } else {
            return false;
        }
    }
}

    /* Coloring Functions */
function assessPermitStartDate(startDate, endDate) {
    console.log("Entered - assessPermitStartDate(startDate = " + startDate + " - endDate = " + endDate + ")");

    const start = new Date(startDate);
    const end = new Date(endDate);
    const cur = new Date();
    const rawData = new Date(start - cur);
    const data = convertDate(rawData);
    
    if (data == -9999) { // date not set - set as 01/01/0001 by me by default
        return '#dbea06ca'; // yellowish
    } else if (start >= end) { // Permit has expired
        return '#ff3191cd'; // redish
    } else if (start <= cur) {// Permit has started 
        return 'rgba(87, 245, 43, 0.627)';
    } else { // Permit date has been set but Permit has not started
        return 'rgba(39, 252, 203, 0.83)'; // tealish
    }
}
function assessPermitStatus(status) {
    console.log("Entered - assessPermitStatus(" + status +")");

    if (status == "Applied") {
        return 'rgba(39, 252, 203, 0.83)'; // tealish
    } else if (status == "Received" || status == "Extension Received" || status == "Don't Need") {
        return 'rgba(87, 245, 43, 0.627)'; // green
    } else if (status == "Expiring Soon" || status == "Extension Submitted") {
        return '#ea8f06ca'; // orangish
    } else if (status == "Expired") {
        return '#ff3191cd'; // redish
    } else {
        // status must = "Haven't Checked"
        return '#dbea06ca'; // yellowish
    }
}
function assessEasementStatus(status) {
    console.log("Entered - assessEasementStatus(" + status + ")");

    if (status == "Need to Submit" || status == "Need Easement") {
        return '#ff3191cd'; // redish
    } else if (status == "Pending") {
        return '#dbea06ca'; // yellowish
    } else if (status == "Don't Need" || status == "Have Easement") {
        return 'rgba(87, 245, 43, 0.627)'; // green
    } else if (status == "Waiting - Creation" || status == "Waiting - Customer") {
        return 'rgba(39, 252, 203, 0.83)'; // tealish
    }
}
/* Compares the date param to the current date in real life and
   Returns a color to style the containers background */
   function assessDate(date) {
    console.log("Entered - assessDate(date)");

    console.log(date);

    const curDate = new Date();
    const temp = date - curDate;
    const dateDifference = new Date(temp);
    const data = convertDate(dateDifference);

    /* NOTES: Have to cascade this conditional to assign colors properly */

    if (data == -9999) {  // date not set - set as 01/01/0001 by me by default
        return '#dbea06ca';
    } else if (date < curDate) {
        return '#ed3939c3';
    } else if (data <= 14) {
        return '#ff3191cd';
    } else if (data <= 31) {
        return '#ea8f06ca'; // orangish
    } else {
        console.log("Data = ");
        console.log(data);
        return "white";
    }
    
    

}
/* Helper for assessDate - takes in data as Date object and
   Returns the data - as the number of days */
   function convertDate(dateDifference) {
    console.log("Entered - convertDate(dateDifference)");

    const month = dateDifference.getMonth();
    let days = dateDifference.getDate() + 1;

    if (dateDifference.getFullYear() - 1970 > 1) { // 1970 is the default value from data Object
        console.log("leaving convertDate - more than 1 year away");
        return 365;
    } if (dateDifference.getFullYear() < 0) { // I assigned 01/01/0001 as default and the data value  is negative when it is passed in
        return -9999;
    } else {

        /* This is for leap year - which it is this year */
        const leapYear = new Date();
        if (leapYear.getFullYear() % 4 == 0) {
            console.log("Congrats, its a leap year");
            days += 1;
        }

        if (month == 0) {
            return days
        } else if (month == 1) {
            return 31 + days;
        } else if (month == 2) {
            return 59 + days;
        } else if (month == 3) {
            return 90 + days;
        } else if (month == 4) {
            return 120 + days;
        } else if (month == 5) {
            return 151 + days;
        } else if (month == 6) {
            return 181 + days;
        } else if (month == 7) {
            return 212 + days;
        } else if (month == 8) {
            return 243 + days;
        } else if (month == 9) {
            return 273 + days;
        } else if (month == 10) {
            return 304 + days;
        } else if (month == 11) {
            return 334 + days;
        }
    }
    
}


async function mainEvent() {
    /* Tabs */
    const allWrTab = document.querySelector("#all_wr_tab");
    const allWrTabActive = document.querySelector("#all_wr_tab_active");

    const toDoTab = document.querySelector("#to_do_tab");
    const toDoTabActive = document.querySelector("#to_do_tab_active");

    const permitsTab = document.querySelector("#permits_tab");
    const permitsTabActive = document.querySelector("#permits_tab_active");

    const easementRequestsTab = document.querySelector("#easement_requests_tab");
    const easementRequestsTabActive = document.querySelector("#easement_requests_tab_active");

    const waitingTab = document.querySelector("#waiting_tab");
    const waitingTabActive = document.querySelector("#waiting_tab_active");

    const toolsTab = document.querySelector("#tools_tab");
    const toolsTabActive = document.querySelector("#tools_tab_active");

    const addTab = document.querySelector("#add_tab");
    const addTabActive = document.querySelector("#add_tab_active");

    const upcomingTab = document.querySelector("#upcoming_tab");
    const upcomingTabActive = document.querySelector("#upcoming_tab_active");

    const remindersTab = document.querySelector("#reminders_tab");
    const remindersTabActive = document.querySelector("#reminders_tab_active");

    /* Add Tab Get/Update/Add Buttons */
    const addTabAddButton = document.querySelector("#add_tab_add_button");
    const addTabGetButton = document.querySelector("#add_tab_get_button");
    const addTabUpdateButton = document.querySelector("#add_tab_update_button");

    /* Generic Tab Filter Containers */
    const searchByBoxContainer = document.querySelector("#search_by_box_container");
    const trimContainer = document.querySelector("#trim_container");
    const trimContainerLabel = document.querySelector("#trim_container_label");

    /* Specific Tab Filter Containers */
    const filterByBoxContainer = document.querySelector("#filter_by_box_container");

        /* All Wr Specific */
        const allWrStatusFiltersContainer = document.querySelector("#all_wr_status_filters_container");
        const filterSectionStatusLabel = document.querySelector("#filter_section_status_label");

        /* Permit Specifics */
        const permitStatusFiltersContainer = document.querySelector("#permit_status_filters_container");

    /* Specific Add Tab Display Containers */
    const allWrDisplayContainer = document.querySelector("#all_wr_display_container");
    const permitsDisplayContainer = document.querySelector("#permits_display_container");
    const addDisplayContainer = document.querySelector("#add_display_container");
    const addTabFilterLabelContainer = document.querySelector("#add_tab_filter_label_container");
    const addTypeContainer = document.querySelector("#add_type_container");

    /* Add Tab - Work Request Number */
    const addTabNewWorkRequestNumber = document.querySelector("#new_work_request_number_textfield")
    const addTabDisplayHeaderLabel = document.querySelector("#add_tab_display_header_label");
    const addTabDisplayWorkRequestNumberLabel = document.querySelector("#add_tab_display_work_request_number_label");

    /* Add Tab Textfields */
        /* Adress */
    const addressLineTextfieldHouseNumber = document.querySelector("#address_line_textfield_house_number");
    const addressLineTextfieldStreetName = document.querySelector("#address_line_textfield_street_name");
    const addressLineTextfieldCounty = document.querySelector("#address_line_textfield_county");
    const addressLineTextfieldZip = document.querySelector("#address_line_textfield_zip");

        /* Priority Number */
    const addTabPriorityBox = document.querySelector("#add_tab_priority_box");
    const addTabPermitPriority = document.querySelector("#add_tab_permit_priority");

        /* Customer Contacted Checkboxes */
    const customerContactedCheckboxYes = document.querySelector("#customer_contacted_checkbox_yes")
    const customerContactedCheckboxNo = document.querySelector("#customer_contacted_checkbox_no")

        /* POCs */
    const pocTextboxOwnerName = document.querySelector("#poc_textbox_owner_name");
    const pocTextboxOwnerNumber = document.querySelector("#poc_textbox_owner_number");
    const pocTextboxOwnerEmail = document.querySelector("#poc_textbox_owner_email");
    const pocTextboxBuilderName = document.querySelector("#poc_textbox_builder_name");
    const pocTextboxBuilderNumber = document.querySelector("#poc_textbox_builder_number");
    const pocTextboxBuilderEmail = document.querySelector("#poc_textbox_builder_email");
    const pocTextboxOtherName = document.querySelector("#poc_textbox_other_name");
    const pocTextboxOtherNumber = document.querySelector("#poc_textbox_other_number");
    const pocTextboxOtherEmail = document.querySelector("#poc_textbox_other_email");

        /* CRD and RCD */
    const addTabWrCRD = document.querySelector("#date_add_tab_wr_crd");
    const addTabWrRCD = document.querySelector("#date_add_tab_wr_rcd");

        /* Comments */
            /* Add Tab Wr */
    const addTabCommentsAddButton = document.querySelector("#add_tab_comments_add_button");
    const addTabCommentsTextfield = document.querySelector("#add_tab_comments_textfield");
    const addTabWrCommentsToAdd = document.querySelector("#add_tab_wr_comments_to_add");

            /* Add Tab Permit */
    const addTabPermitCommentsAddButton = document.querySelector("#add_tab_permit_comments_add_button");
    const addTabPermitCommentsTextfield = document.querySelector("#add_tab_permit_comments_textfield");
    const addTabPermitWrCommentsToAdd = document.querySelector("#add_tab_permit_comments_to_add");
    const addTabPermitDateSubmitted = document.querySelector("#date_add_tab_permit_submitted");
    const addTabPermitDateApplied = document.querySelector("#date_add_tab_permit_applied")
    const addTabPermitCRD = document.querySelector("#date_add_tab_permit_crd");
    const addTabPermitRCD = document.querySelector("#date_add_tab_permit_rcd");
    const addTabPermitStart = document.querySelector("#date_add_tab_permit_start");
    const addTabPermitExpiration = document.querySelector("#date_add_tab_permit_expire")

    /* Add Tab Filters */
    const filterCheckboxAddWr = document.querySelector("#filter_checkbox_add_wr");
    const filterCheckboxAddToDo = document.querySelector("#filter_checkbox_add_to_do");
    const filterCheckboxAddPermit = document.querySelector("#filter_checkbox_add_permit");
    const filterCheckboxAddEasementRequest = document.querySelector("#filter_checkbox_add_easement_request");
    const filterCheckboxAddComment = document.querySelector("#filter_checkbox_add_comment");
    const filterCheckboxAddReminder = document.querySelector("#filter_checkbox_add_reminder");

    /* Add Tab Displays */
    const addTabDisplayAddWr = document.querySelector("#add_tab_display_add_wr");
    const addTabDisplayAddPermit = document.querySelector("#add_tab_display_add_permit");

    /* Load and Save Buttons */
    const footerButtonSave = document.querySelector("#footer_button_save");
    const footerButtonLoad = document.querySelector("#footer_button_load");
    const footerButtonSync = document.querySelector("#footer_button_sync");

    /* Permits Tab Display Dropdowns */
    const permitsTabRowOneStatusContainer = document.querySelector("#permits_tab_row_one_status");
    const permitsTabRowTwoStatusContainer = document.querySelector("#permits_tab_row_two_status");
    const permitsTabRowThreeStatusContainer = document.querySelector("#permits_tab_row_three_status");

    /* All Wr Tab Display DropdownContainers */
        /* Row One */
    const allWrTabRowOneGeneralStatusContainer = document.querySelector("#all_wr_tab_row_one_general_status");
    const allWrTabRowOnePermitStatusContainer = document.querySelector("#all_wr_tab_row_one_permit_status");
    const allWrTabRowOneEasementStatusContainer = document.querySelector("#all_wr_tab_row_one_easement_status");
        /* Row Two */
    const allWrTabRowTwoGeneralStatusContainer = document.querySelector("#all_wr_tab_row_two_general_status");
    const allWrTabRowTwoPermitStatusContainer = document.querySelector("#all_wr_tab_row_two_permit_status");
    const allWrTabRowTwoEasementStatusContainer = document.querySelector("#all_wr_tab_row_two_easement_status");
        /* Row Three */
    const allWrTabRowThreeGeneralStatusContainer = document.querySelector("#all_wr_tab_row_three_general_status");
    const allWrTabRowThreePermitStatusContainer = document.querySelector("#all_wr_tab_row_three_permit_status");
    const allWrTabRowThreeEasementStatusContainer = document.querySelector("#all_wr_tab_row_three_easement_status");

    /* Next, Prev, Page Numbers */
    const prevAllWr = document.getElementById("all_wr_tab_page_prev_button");
    const nextAllWr = document.getElementById("all_wr_tab_page_next_button");
    const prevPermits = document.getElementById("permits_tab_page_prev_button");
    const nextPermits = document.getElementById("permits_tab_page_next_button");
    const curPageAllWr = document.getElementById("all_wr_tab_current_page_box");
    const curPagePermits = document.getElementById("permits_tab_current_page_box");


    /* allWrTab Row Element Event Listeners */
        /* Priority Numbers */
    const allWrTabRowOnePriority = document.querySelector("#all_wr_tab_row_one_priority_textfield");
    const allWrTabRowTwoPriority = document.querySelector("#all_wr_tab_row_two_priority_textfield");
    const allWrTabRowThreePriority = document.querySelector("#all_wr_tab_row_three_priority_textfield");

        /* CRDs */
    const allWrTabRowOneCrd = document.querySelector("#all_wr_tab_row_one_crd");
    const allWrTabRowTwoCrd = document.querySelector("#all_wr_tab_row_two_crd");
    const allWrTabRowThreeCrd = document.querySelector("#all_wr_tab_row_three_crd");

        /* RCDs */
    const allWrTabRowOneRcd = document.querySelector("#all_wr_tab_row_one_rcd");
    const allWrTabRowTwoRcd = document.querySelector("#all_wr_tab_row_two_rcd");
    const allWrTabRowThreeRcd = document.querySelector("#all_wr_tab_row_three_rcd");

        /* Addresses */
    const allWrTabRowOneAddress = document.querySelector("#all_wr_tab_row_one_address");
    const allWrTabRowTwoAddress = document.querySelector("#all_wr_tab_row_two_address");
    const allWrTabRowThreeAddress = document.querySelector("#all_wr_tab_row_three_address");



            /* permitsTab Row Element Event Listeners */
        /* Priority Numbers */
    const permitsTabRowOnePriority = document.querySelector("#permits_tab_row_one_priority_textfield");
    const permitsTabRowTwoPriority = document.querySelector("#permits_tab_row_two_priority_textfield");
    const permitsTabRowThreePriority = document.querySelector("#permits_tab_row_three_priority_textfield");

        /* Addresses */
    const permitsTabRowOneAddress = document.querySelector("#permits_tab_row_one_address");
    const permitsTabRowTwoAddress = document.querySelector("#permits_tab_row_two_address");
    const permitsTabRowThreeAddress = document.querySelector("#permits_tab_row_three_address");

        /* CRDs */
    const permitsTabRowOneCrd = document.querySelector("#permits_tab_row_one_crd_date");
    const permitsTabRowTwoCrd = document.querySelector("#permits_tab_row_two_crd_date");
    const permitsTabRowThreeCrd = document.querySelector("#permits_tab_row_three_crd_date");

        /* RCDs */
    const permitsTabRowOneRcd = document.querySelector("#permits_tab_row_one_rcd_date");
    const permitsTabRowTwoRcd = document.querySelector("#permits_tab_row_two_rcd_date");
    const permitsTabRowThreeRcd = document.querySelector("#permits_tab_row_three_rcd_date");

        /* Start Dates */
    const permitsTabRowOneStartDate = document.querySelector("#permits_tab_row_one_start_date");
    const permitsTabRowTwoStartDate = document.querySelector("#permits_tab_row_two_start_date");
    const permitsTabRowThreeStartDate = document.querySelector("#permits_tab_row_three_start_date");

        /* End Dates */
    const permitsTabRowOneEndDate = document.querySelector("#permits_tab_row_one_end_date");
    const permitsTabRowTwoEndDate = document.querySelector("#permits_tab_row_two_end_date");
    const permitsTabRowThreeEndDate = document.querySelector("#permits_tab_row_three_end_date");

    
        /* Filter Go Button */
    const filterGoButton = document.querySelector("#filter_go_button");

            /* Filter Checkboxes */
        /* Generic */
    const filterCheckboxPriorityNumber = document.querySelector("#filter_checkbox_priority_number");
    const filterCheckboxCrd = document.querySelector("#filter_checkbox_crd");
    const filterCheckboxRcd = document.querySelector("#filter_checkbox_rcd");

        /* AllWr Tab */
    const filterCheckboxWaitingLL = document.querySelector("#filter_checkbox_waiting_ll");
    const filterCheckboxNeedToVisit = document.querySelector("#filter_checkbox_need_to_visit");
    const filterCheckboxSvcCalcs = document.querySelector("#filter_checkbox_svc_calcs");
    const filterCheckboxCheckPermit = document.querySelector("#filter_checkbox_check_permit");
    const filterCheckboxCheckEasement = document.querySelector("#filter_checkbox_check_easement");
    const filterCheckboxDesign = document.querySelector("#filter_checkbox_design");
    const filterCheckboxReviewPeer = document.querySelector("#filter_checkbox_review_peer");
    const filterCheckboxReviewCoordinator = document.querySelector("#filter_checkbox_review_coordinator");
    const filterCheckboxRevisions = document.querySelector("#filter_checkbox_revisions");
    const filterCheckboxWaitingCustomerNotApproved = document.querySelector("#filter_checkbox_waiting_customer_not_approved");
    const filterCheckboxWaitingCustomerApproved = document.querySelector("#filter_checkbox_waiting_customer_approved");
    const filterCheckboxFlag = document.querySelector("#filter_checkbox_flag");
    const filterCheckbox7010 = document.querySelector("#filter_checkbox_7010");
    const filterCheckboxCancledOther = document.querySelector("#filter_checkbox_cancled_other");
    const filterCheckboxAgeNew = document.querySelector("#filter_checkbox_age_new_old");
    const filterCheckboxAgeOld = document.querySelector("#filter_checkbox_age_old_new");

        /* Permits Tab */
            /* Checkboxes */
    const filterCheckboxPermitApplied = document.querySelector("#filter_checkbox_permit_applied");
    const filterCheckboxPermitReceived = document.querySelector("#filter_checkbox_permit_received");
    const filterCheckboxPermitExpiringSoon = document.querySelector("#filter_checkbox_permit_expiring_soon");
    const filterCheckboxPermitExpired = document.querySelector("#filter_checkbox_permit_expired");
    const filterCheckboxPermitExtensionSubmitted = document.querySelector("#filter_checkbox_permit_extension_submitted");
    const filterCheckboxPermitExtensionReceived = document.querySelector("#filter_checkbox_permit_extension_received");
    const filterCheckboxPermitDontNeed = document.querySelector("#filter_checkbox_permit_dont_need");
    const filterCheckboxPermitHaventChecked = document.querySelector("#filter_checkbox_permit_havent_checked");
            /* Containers */
    const filterContainerPermitApplied = document.querySelector("#filter_container_permit_applied");
    const filterContainerPermitReceived = document.querySelector("#filter_container_permit_received");
    const filterContainerPermitExpiringSoon = document.querySelector("#filter_container_permit_expiring_soon");
    const filterContainerPermitExpired = document.querySelector("#filter_container_permit_expired");
    const filterContainerPermitExtensionSubmitted = document.querySelector("#filter_container_permit_extension_submitted");
    const filterContainerPermitExtensionReceived = document.querySelector("#filter_container_permit_extension_received");
    const filterContainerPermitDontNeed = document.querySelector("#filter_container_permit_dont_need");
    const filterContainerPermitHaventChecked = document.querySelector("#filter_container_permit_havent_checked");

    /* Footer Filter Checkboxes */
    const trimByNot7010 = document.querySelector("#footer_filter_checkbox_not_7010");
    const trimByAll = document.querySelector("#footer_filter_checkbox_all");
    const trimBy7010 = document.querySelector("#footer_filter_checkbox_7010");

    /* Search By Checkboxes + Textfield + Button*/
    const searchBySelectionCheckbox = document.querySelector("#search_by_selection_checkbox");
    const searchBySelectionTextfield = document.querySelector("#search_by_selection_textfield");
    const searchByAddressCheckbox = document.querySelector("#search_by_selection_lower_container_checkbox_address");
    const searchByAddressContainer = document.querySelector("#search_by_selection_lower_container_checkbox_and_label_container_address");
    const searchByWrCheckbox = document.querySelector("#search_by_selection_lower_container_checkbox_wr");
    const searchByWrContainer = document.querySelector("#search_by_selection_lower_container_checkbox_and_label_container_wr");
    const searchTextfieldGoButton = document.querySelector("#search_textfield_go_button");

    /* Filter By Event Listeners */
    const filterBySelectionCheckbox = document.querySelector("#filter_by_selection_checkbox");

    /* Add Tab DD Menu Containers */
        /* Add Wr */
    const addTabWrTypeContainer= document.querySelector("#add_tab_wr_type_container");
    const addTabGeneralStatusContainer = document.querySelector("#add_tab_general_status_container");
    const addTabPermitStatusContainer = document.querySelector("#add_tab_permit_status_container");
    const addTabEasementStatusContainer = document.querySelector("#add_tab_easement_status_container");
        /* Update Permit */
    const addTabAddPermitStatusContainer = document.querySelector("#add_tab_add_permit_status_container");


        /* Variable */
    let addTabCommentsTextfieldInput = [];
    let addTabPermitCommentsTextfieldInput = [];
    let allWrList = [];
    let currentPageAllWr = 0;
    let currentPagePermits = 0;
    
    // green background highlight "rgba(87, 245, 43, 0.627)"


    /* Adds all dropdowns */
    window.onload = function() {
        console.log("Entered - Window.onload function");

        /* All Wr Tab DDs */

            /* General Status DDs */
        let dd = new GeneralStatusDDMenu("1");
        let ddRow = dd.makeRowElement();
        allWrTabRowOneGeneralStatusContainer.innerHTML = "";
        allWrTabRowOneGeneralStatusContainer.insertAdjacentElement("beforeend", ddRow);

        dd = new GeneralStatusDDMenu("2");
        ddRow = dd.makeRowElement();
        allWrTabRowTwoGeneralStatusContainer.innerHTML = "";
        allWrTabRowTwoGeneralStatusContainer.insertAdjacentElement("beforeend", ddRow);

        dd = new GeneralStatusDDMenu("3");
        ddRow = dd.makeRowElement();
        allWrTabRowThreeGeneralStatusContainer.innerHTML = "";
        allWrTabRowThreeGeneralStatusContainer.insertAdjacentElement("beforeend", ddRow);

            /* Permit Status DDs */
        dd = new PermitStatusDDMenu("allWr", "1");
        ddRow = dd.makeRowElement();
        allWrTabRowOnePermitStatusContainer.innerHTML = "";
        allWrTabRowOnePermitStatusContainer.insertAdjacentElement("beforeend", ddRow);

        dd = new PermitStatusDDMenu("allWr", "2");
        ddRow = dd.makeRowElement();
        allWrTabRowTwoPermitStatusContainer.innerHTML = "";
        allWrTabRowTwoPermitStatusContainer.insertAdjacentElement("beforeend", ddRow);

        dd = new PermitStatusDDMenu("allWr", "3");
        ddRow = dd.makeRowElement();
        allWrTabRowThreePermitStatusContainer.innerHTML = "";
        allWrTabRowThreePermitStatusContainer.insertAdjacentElement("beforeend", ddRow);

            /* Easement Status DDs */
        dd = new EasementStatusDDMenu("1");
        ddRow = dd.makeRowElement();
        allWrTabRowOneEasementStatusContainer.innerHTML = "";
        allWrTabRowOneEasementStatusContainer.insertAdjacentElement("beforeend", ddRow);

        dd = new EasementStatusDDMenu("2");
        ddRow = dd.makeRowElement();
        allWrTabRowTwoEasementStatusContainer.innerHTML = "";
        allWrTabRowTwoEasementStatusContainer.insertAdjacentElement("beforeend", ddRow);

        dd = new EasementStatusDDMenu("3");
        ddRow = dd.makeRowElement();
        allWrTabRowThreeEasementStatusContainer.innerHTML = "";
        allWrTabRowThreeEasementStatusContainer.insertAdjacentElement("beforeend", ddRow);

        /* Permit Tab DDs */

        dd = new PermitStatusDDMenu("permits", "1");
        ddRow = dd.makeRowElement();
        permitsTabRowOneStatusContainer.innerHTML = "";
        permitsTabRowOneStatusContainer.insertAdjacentElement("beforeend", ddRow);

        dd = new PermitStatusDDMenu("permits", "2");
        ddRow = dd.makeRowElement();
        permitsTabRowTwoStatusContainer.innerHTML = "";
        permitsTabRowTwoStatusContainer.insertAdjacentElement("beforeend", ddRow);

        dd = new PermitStatusDDMenu("permits", "3");
        ddRow = dd.makeRowElement();
        permitsTabRowThreeStatusContainer.innerHTML = "";
        permitsTabRowThreeStatusContainer.insertAdjacentElement("beforeend", ddRow);

        /* Add Tab DDs */

            /* Add WR */
        dd = new WrTypeDDMenu();
        dd.setHeight("50px");
        dd.setWidth("200px");
        ddRow = dd.makeRowElement();
        addTabWrTypeContainer.innerHTML = "";
        addTabWrTypeContainer.insertAdjacentHTML("beforeend", `<label for="dropdown_menu_add_tab_wr_type" class="addTabTextfieldLabel" 
        id="dropdown_menu_add_tab_wr_type_label">Work Request Type:</label>`);
        addTabWrTypeContainer.insertAdjacentElement("beforeend", ddRow);

        dd = new GeneralStatusDDMenu("add_tab");
        dd.setHeight("50px");
        dd.setWidth("200px");
        ddRow = dd.makeRowElement();
        addTabGeneralStatusContainer.innerHTML = "";
        addTabGeneralStatusContainer.insertAdjacentHTML("beforeend", `<label for="dropdown_menu_add_tab_general_status" class="addTabTextfieldLabel" 
        id="dropdown_menu_add_tab_general_status_label">General Status:</label>`);
        addTabGeneralStatusContainer.insertAdjacentElement("beforeend", ddRow);
        // adjusting size for add tab
        const tempCurrentGeneral = document.getElementById("general_status_dd_add_tab_current");
        tempCurrentGeneral.style.width = '120px';
        tempCurrentGeneral.style.paddingLeft = '25px';
        tempCurrentGeneral.style.paddingRight = '25px';
        const tempButtonGeneral = document.getElementById("general_status_dd_add_tab_button");
        tempButtonGeneral.style.width = '30px';
        tempButtonGeneral.style.height = '30px';

        dd = new PermitStatusDDMenu("add", "1");
        dd.setHeight("50px");
        dd.setWidth("200px");
        ddRow = dd.makeRowElement();
        addTabPermitStatusContainer.innerHTML = "";
        addTabPermitStatusContainer.insertAdjacentHTML("beforeend", `<label for="dropdown_menu_add_tab_permit_status" class="addTabTextfieldLabel" 
        id="dropdown_menu_add_tab_permit_status_label">Permit Status::</label>`);
        addTabPermitStatusContainer.insertAdjacentElement("beforeend", ddRow);
        // adjusting size for add tab
        const tempCurrentPermit = document.getElementById("permit_status_dd_add_tab_row_1_current");
        tempCurrentPermit.style.width = '120px';
        tempCurrentPermit.style.paddingLeft = '25px';
        tempCurrentPermit.style.paddingRight = '25px';
        const tempButtonPermit = document.getElementById("permit_status_dd_add_tab_row_1_button");
        tempButtonPermit.style.width = '30px';
        tempButtonPermit.style.height = '30px';
        tempButtonPermit.innerHTML = "/\\";

        dd = new EasementStatusDDMenu("add_tab");
        dd.setHeight("50px");
        dd.setWidth("200px");
        ddRow = dd.makeRowElement();
        addTabEasementStatusContainer.innerHTML = "";
        addTabEasementStatusContainer.insertAdjacentHTML("beforeend", `<label for="dropdown_menu_add_tab_easement_status" class="addTabTextfieldLabel" 
        id="dropdown_menu_add_tab_easement_status_label">Easement Status:</label>`);
        addTabEasementStatusContainer.insertAdjacentElement("beforeend", ddRow);
        // adjusting size for add tab
        const tempCurrentEasement = document.getElementById("easement_status_dd_add_tab_current");
        tempCurrentEasement.style.width = '120px';
        tempCurrentEasement.style.paddingLeft = '25px';
        tempCurrentEasement.style.paddingRight = '25px';
        const tempButtonEasement = document.getElementById("easement_status_dd_add_tab_button");
        tempButtonEasement.style.width = '30px';
        tempButtonEasement.style.height = '30px';
        tempButtonEasement.innerHTML = "/\\";

        /* Permits Tab DD */
        dd = new PermitStatusDDMenu("add", "2");
        dd.setHeight("50px");
        dd.setWidth("200px");
        ddRow = dd.makeRowElement();

        addTabAddPermitStatusContainer.innerHTML = "";
        addTabAddPermitStatusContainer.insertAdjacentHTML("beforeend", `<label for="dropdown_menu_add_tab_add_permit_status" class="addTabTextfieldLabel" 
        id="dropdown_menu_add_tab_add_permit_status_label">Permit Status:</label>`);
        addTabAddPermitStatusContainer.insertAdjacentElement("beforeend", ddRow);
        // adjusting size for add tab
        const tempCurrentAddPermit = document.getElementById("permit_status_dd_add_tab_row_2_current");
        tempCurrentAddPermit.style.width = '120px';
        tempCurrentAddPermit.style.paddingLeft = '25px';
        tempCurrentAddPermit.style.paddingRight = '25px';
        const tempButtonAddPermit = document.getElementById("permit_status_dd_add_tab_row_2_button");
        tempButtonAddPermit.style.width = '30px';
        tempButtonAddPermit.style.height = '30px';
    };

    function assessSpecificStatus() {
        console.log("Entered - assessSpecficiStatus(allWrList)");
        let tempList = [];
    
        if (document.getElementById("all_wr_tab").classList.contains("hidden")) {
            if (document.getElementById("filter_checkbox_waiting_ll").checked == true) {
                uncolorAllWrFilterCheckboxes();
                document.getElementById("filter_container_waiting_ll").style.backgroundColor = "rgba(87, 245, 43, 0.627)"
                for (let i = 0; i < allWrList.length; i++) {
                    if (allWrList[i].generalStatus == "Waiting - LL/SP/ Etc.") {
                        tempList.push(allWrList[i]);
                    }
                }
                return tempList;
            } else if (document.getElementById("filter_checkbox_need_to_visit").checked == true) {
                uncolorAllWrFilterCheckboxes();
                document.getElementById("filter_container_need_to_visit").style.backgroundColor = "rgba(87, 245, 43, 0.627)"
                for (let i = 0; i < allWrList.length; i++) {
                    if (allWrList[i].generalStatus == "Need to Visit") {
                        tempList.push(allWrList[i]);
                    }
                }
                return tempList;
            } else if (document.getElementById("filter_checkbox_svc_calcs").checked == true) {
                uncolorAllWrFilterCheckboxes();
                document.getElementById("filter_container_svc_calcs").style.backgroundColor = "rgba(87, 245, 43, 0.627)"
                for (let i = 0; i < allWrList.length; i++) {
                    if (allWrList[i].generalStatus == "SVC Calcs + Coding") {
                        tempList.push(allWrList[i]);
                    }
                }
                return tempList;
            } else if (document.getElementById("filter_checkbox_check_permit").checked == true) {
                uncolorAllWrFilterCheckboxes();
                document.getElementById("filter_container_check_permit").style.backgroundColor = "rgba(87, 245, 43, 0.627)"
                for (let i = 0; i < allWrList.length; i++) {
                    if (allWrList[i].generalStatus == "Check/ Apply For Permit") {
                        tempList.push(allWrList[i]);
                    }
                }
                return tempList;
            } else if (document.getElementById("filter_container_check_easement").checked == true) {
                uncolorAllWrFilterCheckboxes();
                document.getElementById("filter_container_check_easement").style.backgroundColor = "rgba(87, 245, 43, 0.627)"
                for (let i = 0; i < allWrList.length; i++) {
                    if (allWrList[i].generalStatus == "Check/ Apply For Easement") {
                        tempList.push(allWrList[i]);
                    }
                }
                return tempList;
            } else if (document.getElementById("filter_checkbox_design").checked == true) {
                uncolorAllWrFilterCheckboxes();
                document.getElementById("filter_container_design").style.backgroundColor = "rgba(87, 245, 43, 0.627)"
                for (let i = 0; i < allWrList.length; i++) {
                    if (allWrList[i].generalStatus == "Design") {
                        tempList.push(allWrList[i]);
                    }
                }
                return tempList;
            } else if (document.getElementById("filter_checkbox_review_peer").checked == true) {
                uncolorAllWrFilterCheckboxes();
                document.getElementById("filter_container_review_peer").style.backgroundColor = "rgba(87, 245, 43, 0.627)"
                for (let i = 0; i < allWrList.length; i++) {
                    if (allWrList[i].generalStatus == "Review - Peer") {
                        tempList.push(allWrList[i]);
                    }
                }
                return tempList;
            } else if (document.getElementById("filter_checkbox_review_coordinator").checked == true) {
                uncolorAllWrFilterCheckboxes();
                document.getElementById("filter_checkbox_container_coordinator").style.backgroundColor = "rgba(87, 245, 43, 0.627)"
                for (let i = 0; i < allWrList.length; i++) {
                    if (allWrList[i].generalStatus == "Review - Coordinator") {
                        tempList.push(allWrList[i]);
                    }
                }
                return tempList;
            } else if (document.getElementById("filter_checkbox_revisions").checked == true) {
                uncolorAllWrFilterCheckboxes();
                document.getElementById("filter_container_revisions").style.backgroundColor = "rgba(87, 245, 43, 0.627)"
                for (let i = 0; i < allWrList.length; i++) {
                    if (allWrList[i].generalStatus == "Revisions") {
                        tempList.push(allWrList[i]);
                    }
                }
                return tempList;
            } else if (document.getElementById("filter_checkbox_waiting_customer_not_approved").checked == true) {
                uncolorAllWrFilterCheckboxes();
                document.getElementById("filter_container_waiting_customer_not_approved").style.backgroundColor = "rgba(87, 245, 43, 0.627)"
                for (let i = 0; i < allWrList.length; i++) {
                    if (allWrList[i].generalStatus == "Waiting on Cust - Not Aprvd") {
                        tempList.push(allWrList[i]);
                    }
                }
                return tempList;
            } else if (document.getElementById("filter_checkbox_waiting_customer_approved").checked == true) {
                uncolorAllWrFilterCheckboxes();
                document.getElementById("filter_container_waiting_customer_approved").style.backgroundColor = "rgba(87, 245, 43, 0.627)"
                for (let i = 0; i < allWrList.length; i++) {
                    if (allWrList[i].generalStatus == "Waiting on Cust - Approved") {
                        tempList.push(allWrList[i]);
                    }
                }
                return tempList;
            } else if (document.getElementById("filter_checkbox_flag").checked == true) {
                uncolorAllWrFilterCheckboxes();
                document.getElementById("filter_container_flag").style.backgroundColor = "rgba(87, 245, 43, 0.627)"
                for (let i = 0; i < allWrList.length; i++) {
                    if (allWrList[i].generalStatus == "Need to Flag") {
                        tempList.push(allWrList[i]);
                    }
                }
                return tempList;
            } else if (document.getElementById("filter_checkbox_7010").checked == true) {
                uncolorAllWrFilterCheckboxes();
                document.getElementById("filter_container_7010").style.backgroundColor = "rgba(87, 245, 43, 0.627)"
                for (let i = 0; i < allWrList.length; i++) {
                    if (allWrList[i].generalStatus == "7010'd") {
                        tempList.push(allWrList[i]);
                    }
                }
                return tempList;
            } else if (document.getElementById("filter_checkbox_cancled_other").checked == true) {
                uncolorAllWrFilterCheckboxes();
                document.getElementById("filter_container_cancled_other").style.backgroundColor = "rgba(87, 245, 43, 0.627)"
                for (let i = 0; i < allWrList.length; i++) {
                    if (allWrList[i].generalStatus == "Cancled/ Reassigned/ Other") {
                        tempList.push(allWrList[i]);
                    }
                }
                return tempList;
            } else {
                console.log("returning allWrList normal");
                /* clearing highlights */
                uncolorAllWrFilterCheckboxes();
                return allWrList;
            }
        } else if (document.getElementById("permits_tab").classList.contains("hidden")) {
            if (filterCheckboxPermitApplied.checked == true) {
                uncolorPermitsTabSpecificCheckboxes();
                filterContainerPermitApplied.style.backgroundColor = "rgba(87, 245, 43, 0.627)"
                for (let i = 0; i < allWrList.length; i++) {
                    if (allWrList[i].permit.permitStatus == "Applied") {
                        tempList.push(allWrList[i]);
                    }
                }
                return tempList;
            } else if (filterCheckboxPermitReceived.checked == true) {
                uncolorPermitsTabSpecificCheckboxes();
                filterContainerPermitReceived.style.backgroundColor = "rgba(87, 245, 43, 0.627)"
                for (let i = 0; i < allWrList.length; i++) {
                    if (allWrList[i].permit.permitStatus == "Received") {
                        tempList.push(allWrList[i]);
                    }
                }
                return tempList;
            } else if (filterCheckboxPermitExpiringSoon.checked == true) {
                uncolorPermitsTabSpecificCheckboxes();
                filterContainerPermitExpiringSoon.style.backgroundColor = "rgba(87, 245, 43, 0.627)"
                for (let i = 0; i < allWrList.length; i++) {
                    if (allWrList[i].permit.permitStatus == "Expiring Soon") {
                        tempList.push(allWrList[i]);
                    }
                }
                return tempList;
            } else if (filterCheckboxPermitExpired.checked == true) {
                uncolorPermitsTabSpecificCheckboxes();
                filterContainerPermitExpired.style.backgroundColor = "rgba(87, 245, 43, 0.627)"
                for (let i = 0; i < allWrList.length; i++) {
                    if (allWrList[i].permit.permitStatus == "Expired") {
                        tempList.push(allWrList[i]);
                    }
                }
                return tempList;
            } else if (filterCheckboxPermitExtensionSubmitted.checked == true) {
                uncolorPermitsTabSpecificCheckboxes();
                filterContainerPermitExtensionSubmitted.style.backgroundColor = "rgba(87, 245, 43, 0.627)"
                for (let i = 0; i < allWrList.length; i++) {
                    if (allWrList[i].permit.permitStatus == "Extension Submitted") {
                        tempList.push(allWrList[i]);
                    }
                }
                return tempList;
            } else if (filterCheckboxPermitExtensionReceived.checked == true) {
                uncolorPermitsTabSpecificCheckboxes();
                filterContainerPermitExtensionReceived.style.backgroundColor = "rgba(87, 245, 43, 0.627)"
                for (let i = 0; i < allWrList.length; i++) {
                    if (allWrList[i].permit.permitStatus == "Extension Received") {
                        tempList.push(allWrList[i]);
                    }
                }
                return tempList;
            } else if (filterCheckboxPermitDontNeed.checked == true) {
                uncolorPermitsTabSpecificCheckboxes();
                filterContainerPermitDontNeed.style.backgroundColor = "rgba(87, 245, 43, 0.627)"
                for (let i = 0; i < allWrList.length; i++) {
                    if (allWrList[i].permit.permitStatus == "Don't Need") {
                        tempList.push(allWrList[i]);
                    }
                }
                return tempList;
            } else if (filterCheckboxPermitHaventChecked.checked == true) {
                uncolorPermitsTabSpecificCheckboxes();
                filterContainerPermitHaventChecked.style.backgroundColor = "rgba(87, 245, 43, 0.627)"
                for (let i = 0; i < allWrList.length; i++) {
                    if (allWrList[i].permit.permitStatus == "Haven't Checked") {
                        tempList.push(allWrList[i]);
                    }
                }
                return tempList;
            } else {
                console.log("returning allWrList normal");
                /* Clearing Highlights */
                uncolorPermitsTabSpecificCheckboxes();
                return allWrList;
            }
        } else { // nothing checked
                console.log("returning allWrList normal2");
                return allWrList;
        }
    }

        /* Deslect Header Tab Functions */
    function deselectAllWrTab() {
        console.log("Entered - clearAllWrTab");

        allWrTabActive.classList.add("hidden");
        
        filterByBoxContainer.classList.add("hidden");
        searchByBoxContainer.classList.add("hidden");
        trimContainer.classList.add("hidden");
        trimContainerLabel.classList.add("hidden");
        allWrDisplayContainer.classList.add("hidden");
        filterSectionStatusLabel.classList.add("hidden");
        allWrStatusFiltersContainer.classList.add("hidden");
        curPageAllWr.classList.add("hidden");

        uncheckAllWrFilterCheckboxes();
        uncolorAllWrFilterCheckboxes();
        
       
        allWrTab.classList.remove("hidden");
    }
    function deselectAllAddTab() {
        console.log("Entered - deselectAllAddTab");

        addTabActive.classList.add("hidden");
        addDisplayContainer.classList.add("hidden");
        addTabFilterLabelContainer.classList.add("hidden");
        addTypeContainer.classList.add("hidden");

        addTab.classList.remove("hidden");
    }
    function deselectAllPermitsTab() {
        console.log("Entered - deselectAllPermitsTab");

        permitsTabActive.classList.add("hidden");
        /* Fill in more as I go */
        filterByBoxContainer.classList.add("hidden");
        searchByBoxContainer.classList.add("hidden");
        trimContainer.classList.add("hidden");
        trimContainerLabel.classList.add("hidden");
        permitsDisplayContainer.classList.add("hidden");
        filterSectionStatusLabel.classList.add("hidden");
        permitStatusFiltersContainer.classList.add("hidden");
        curPagePermits.classList.add("hidden");

        uncheckPermitsTabSpecificCheckboxes();
        uncolorPermitsTabSpecificCheckboxes();

        permitsTab.classList.remove("hidden");
    }
    function deselectAllTabs() {
        console.log("Entered - deselectAllTabs");

        deselectAllWrTab();
        deselectAllAddTab();
        deselectAllPermitsTab();

        uncolorGenericFilterCheckboxes();
        uncheckGenericFilterCheckboxes();
        uncheckSearchByCheckboxes();
        uncolorSearchByCheckboxes();
        uncheckTrimByCheckboxes();
        uncolorTrimByCheckboxes();
    }

        /* Uncolor (Remove Highlight) Functions */
    function uncolorTrimByCheckboxes() {
        console.log("Entered - uncolorTrimByCheckboxes()");

        document.getElementById("footer_filter_container_not_7010").style.backgroundColor = "white";
        document.getElementById("footer_filter_container_all").style.backgroundColor = "white";
        document.getElementById("footer_filter_container_7010").style.backgroundColor = "white";
    }
    function uncolorAllWrFilterCheckboxes() {
        console.log("Entered - uncolorAllWrFilterCheckboxes");
    
        document.getElementById("filter_container_waiting_ll").style.backgroundColor = "white"
        document.getElementById("filter_container_need_to_visit").style.backgroundColor = "white"
        document.getElementById("filter_container_svc_calcs").style.backgroundColor = "white"
        document.getElementById("filter_container_check_permit").style.backgroundColor = "white"
        document.getElementById("filter_container_check_easement").style.backgroundColor = "white"
        document.getElementById("filter_container_design").style.backgroundColor = "white"
        document.getElementById("filter_container_review_peer").style.backgroundColor = "white"
        document.getElementById("filter_container_review_coordinator").style.backgroundColor = "white"
        document.getElementById("filter_container_revisions").style.backgroundColor = "white"
        document.getElementById("filter_container_waiting_customer_not_approved").style.backgroundColor = "white"
        document.getElementById("filter_container_waiting_customer_approved").style.backgroundColor = "white"
        document.getElementById("filter_container_flag").style.backgroundColor = "white"
        document.getElementById("filter_container_7010").style.backgroundColor = "white"
        document.getElementById("filter_container_cancled_other").style.backgroundColor = "white"
    
    }
    function uncolorGenericFilterCheckboxes() {
        console.log("Entered - uncolorGenericFlterCheckboxes");
        
        document.getElementById("filter_container_priority_number").style.backgroundColor = "white";
        document.getElementById("filter_container_crd").style.backgroundColor = "white";
        document.getElementById("filter_container_rcd").style.backgroundColor = "white";
    }
    function uncolorSearchByCheckboxes() {
        console.log("Entered - uncolorSearchByCheckboxes");

        searchByAddressContainer.style.backgroundColor = "white";
        searchByWrContainer.style.backgroundColor = "white";
    }
    function uncolorPermitsTabSpecificCheckboxes() {
        console.log("Entered - uncolorPermitsTabSpecificCheckboxes()");

        filterContainerPermitApplied.style.backgroundColor = "white";
        filterContainerPermitReceived.style.backgroundColor = "white";
        filterContainerPermitExpiringSoon.style.backgroundColor = "white";
        filterContainerPermitExpired.style.backgroundColor = "white";
        filterContainerPermitExtensionSubmitted.style.backgroundColor = "white";
        filterContainerPermitExtensionReceived.style.backgroundColor = "white";
        filterContainerPermitDontNeed.style.backgroundColor = "white";
        filterContainerPermitHaventChecked.style.backgroundColor = "white"; 
    }

        /* Uncheck/Clear Functions */
    function uncheckTrimByCheckboxes() {
        console.log("Entered - uncheckTrimByCheckboxes()");

        document.getElementById("footer_filter_checkbox_not_7010").checked = false;
        document.getElementById("footer_filter_checkbox_all").checked = false;
        document.getElementById("footer_filter_checkbox_7010").checked = false;
    }
    function uncheckAllWrFilterCheckboxes() {
        console.log("Entered - uncheckAllWrFilterCheckboxes");
    
        document.getElementById("filter_checkbox_waiting_ll").checked = false;
        document.getElementById("filter_checkbox_need_to_visit").checked = false;
        document.getElementById("filter_checkbox_svc_calcs").checked = false;
        document.getElementById("filter_checkbox_check_permit").checked = false;
        document.getElementById("filter_checkbox_check_easement").checked = false;
        document.getElementById("filter_checkbox_design").checked = false;
        document.getElementById("filter_checkbox_review_peer").checked = false;
        document.getElementById("filter_checkbox_review_coordinator").checked = false;
        document.getElementById("filter_checkbox_revisions").checked = false;
        document.getElementById("filter_checkbox_waiting_customer_not_approved").checked = false;
        document.getElementById("filter_checkbox_waiting_customer_approved").checked = false;
        document.getElementById("filter_checkbox_flag").checked = false;
        document.getElementById("filter_checkbox_7010").checked = false;
        document.getElementById("filter_checkbox_cancled_other").checked = false;
    
    }
    function clearAddTabCheckboxes() {
        console.log("Entered - clearAddTabCheckboxes");

        filterCheckboxAddWr.checked = false;
        filterCheckboxAddToDo.checked = false;
        filterCheckboxAddPermit.checked = false;
        filterCheckboxAddEasementRequest.checked = false;
        filterCheckboxAddComment.checked = false;
        filterCheckboxAddReminder.checked = false;
    }
    function uncheckGenericFilterCheckboxes() {
        console.log("Entered - uncheckGenericFilterCheckboxes()");

        filterCheckboxPriorityNumber.checked = false;
        filterCheckboxCrd.checked = false;
        filterCheckboxRcd.checked = false;
        filterCheckboxAgeNew.checked = false;
        filterCheckboxAgeOld.checked = false;
    }
    function uncheckSearchByCheckboxes() {
        console.log("Entered - uncheckSearchByCheckboxes");

        searchByAddressCheckbox.checked = false;
        searchByWrCheckbox.checked = false;
    }
    function uncheckPermitsTabSpecificCheckboxes() {
        console.log("Entered - uncheckPermitsTabSpecificCheckboxes()");

        filterCheckboxPermitApplied.checked = false;
        filterCheckboxPermitReceived.checked = false;
        filterCheckboxPermitExpiringSoon.checked = false;
        filterCheckboxPermitExpired.checked = false;
        filterCheckboxPermitExtensionSubmitted.checked = false;
        filterCheckboxPermitExtensionReceived.checked = false;
        filterCheckboxPermitDontNeed.checked = false;
        filterCheckboxPermitHaventChecked.checked = false;

    }

            /* Enable/Disable Filter Sections */
        /* Enable */
    function enableSearchBy() {
        console.log("Entered - enableSearchBy()");

        searchBySelectionCheckbox.checked = true;
        searchByWrCheckbox.checked = true;

        searchByBoxContainer.classList.remove("filterSectionInactive");
        searchBySelectionTextfield.disabled = false;
        searchByAddressCheckbox.disabled = false;
        searchByWrCheckbox.disabled = false;
        searchTextfieldGoButton.disabled = false;

        filterBySelectionCheckbox.checked = false;
        uncheckGenericFilterCheckboxes();
        uncolorGenericFilterCheckboxes();
        uncolorAllWrFilterCheckboxes();
        uncheckAllWrFilterCheckboxes();
    }
    function enableFilterBy() {
        console.log("Entered - enableFilterBy()");

        filterBySelectionCheckbox.checked = true;
        filterCheckboxPriorityNumber.checked = true;

        /* Generic */
        filterByBoxContainer.classList.remove("filterSectionInactive");
        filterGoButton.disabled = false;
        filterCheckboxPriorityNumber.disabled = false;
        filterCheckboxCrd.disabled = false;
        filterCheckboxRcd.disabled = false;
        filterCheckboxAgeNew.disabled = false;
        filterCheckboxAgeOld.disabled = false;

        /* Specific */
            /* AllWr Tab Filter Checkboxes */
        filterCheckboxWaitingLL.disabled = false;
        filterCheckboxNeedToVisit.disabled = false;
        filterCheckboxSvcCalcs.disabled = false;
        filterCheckboxCheckPermit.disabled = false;
        filterCheckboxCheckEasement.disabled = false;
        filterCheckboxDesign.disabled = false;
        filterCheckboxReviewPeer.disabled = false;
        filterCheckboxReviewCoordinator.disabled = false;
        filterCheckboxRevisions.disabled = false;
        filterCheckboxWaitingCustomerNotApproved.disabled = false;
        filterCheckboxWaitingCustomerApproved.disabled = false;
        filterCheckboxFlag.disabled = false;
        filterCheckbox7010.disabled = false;
        filterCheckboxCancledOther.disabled = false;

            /* Permits Tab Filter Checkboxes */
        filterCheckboxPermitApplied.disabled = false;
        filterCheckboxPermitReceived.disabled = false;
        filterCheckboxPermitExpiringSoon.disabled = false;
        filterCheckboxPermitExpired.disabled = false;
        filterCheckboxPermitExtensionSubmitted.disabled = false;
        filterCheckboxPermitExtensionReceived.disabled = false;
        filterCheckboxPermitDontNeed.disabled = false;
        filterCheckboxPermitHaventChecked.disabled = false;
        
        uncolorSearchByCheckboxes();
        uncheckSearchByCheckboxes();
    }

        /* Disable */
    function disableSearchBy() {
        console.log("Entered - disableSearchBy()");

        searchBySelectionCheckbox.checked = false;

        searchByBoxContainer.classList.add("filterSectionInactive");
        searchBySelectionTextfield.disabled = true;
        searchByAddressCheckbox.disabled = true;
        searchByWrCheckbox.disabled = true;
        searchTextfieldGoButton.disabled = true;

        
        uncheckSearchByCheckboxes();
        uncolorSearchByCheckboxes();
    }
    function disableFilterBy() {
        console.log("Entered - disableFilterBy()");

        filterBySelectionCheckbox.checked = false;

        /* Generic */
        filterByBoxContainer.classList.add("filterSectionInactive");
        filterGoButton.disabled = true;
        filterCheckboxPriorityNumber.disabled = true;
        filterCheckboxCrd.disabled = true;
        filterCheckboxRcd.disabled = true;
        filterCheckboxAgeNew.disabled = true;
        filterCheckboxAgeOld.disabled = true;

        /* Specific */
            /* AllWr Tab Filter Checkboxes */
        filterCheckboxWaitingLL.disabled = true;
        filterCheckboxNeedToVisit.disabled = true;
        filterCheckboxSvcCalcs.disabled = true;
        filterCheckboxCheckPermit.disabled = true;
        filterCheckboxCheckEasement.disabled = true;
        filterCheckboxDesign.disabled = true;
        filterCheckboxReviewPeer.disabled = true;
        filterCheckboxReviewCoordinator.disabled = true;
        filterCheckboxRevisions.disabled = true;
        filterCheckboxWaitingCustomerNotApproved.disabled = true;
        filterCheckboxWaitingCustomerApproved.disabled = true;
        filterCheckboxFlag.disabled = true;
        filterCheckbox7010.disabled = true;
        filterCheckboxCancledOther.disabled = true;
            /* Permits Tab Filter Checkboxes */
        filterCheckboxPermitApplied.disabled = true;
        filterCheckboxPermitReceived.disabled = true;
        filterCheckboxPermitExpiringSoon.disabled = true;
        filterCheckboxPermitExpired.disabled = true;
        filterCheckboxPermitExtensionSubmitted.disabled = true;
        filterCheckboxPermitExtensionReceived.disabled = true;
        filterCheckboxPermitDontNeed.disabled = true;
        filterCheckboxPermitHaventChecked.disabled = true;


    }

        /* Display Wr */
    function displayPermitAddUpdate(wr) {
        console.log("Entered - displayPermitAddUpdate");

        addTabNewWorkRequestNumber.value = wr.workRequestNumber;
        document.getElementById("permit_status_dd_add_tab_row_2_current").innerHTML = wr.permit.permitStatus;
        addTabPermitDateSubmitted.value = formatDate(wr.permit.dateSubmitted);
        addTabPermitDateApplied.value = formatDate(wr.permit.dateApplied);
        addTabPermitPriority.value = wr.priorityNumber;
        addTabPermitCRD.value = formatDate(wr.crd);
        addTabPermitRCD.value = formatDate(wr.rcd);
        addTabPermitStart.value = formatDate(wr.permit.startDate);
        addTabPermitExpiration.value = formatDate(wr.permit.endDate);
        //addTabPermitWrCommentsToAdd = will fill in

        addTabAddButton.disabled = true;

    }
    function displayWrAddUpdate(wr) {
        console.log("Entered - displayWrAddUpdate(" + wr + ")");
        
        addTabNewWorkRequestNumber.value = wr.workRequestNumber;
        addressLineTextfieldHouseNumber.value = wr.houseNumber;
        addressLineTextfieldStreetName.value = wr.streetName;
        addressLineTextfieldCounty.value = wr.countyCity;
        addressLineTextfieldZip.value = wr.zipCode;
        addTabPriorityBox.value = wr.priorityNumber;
        pocTextboxOwnerName.value = wr.ownerName;
        pocTextboxOwnerNumber.value = wr.ownerNumber;
        pocTextboxOwnerEmail.value = wr.ownerEmail;
        pocTextboxBuilderName.value = wr.builderName
        pocTextboxBuilderNumber.value = wr.builderNumber;
        pocTextboxBuilderEmail.value = wr.builderEmail;
        pocTextboxOtherName.value = wr.otherName;
        pocTextboxOtherNumber.value = wr.otherNumber;
        pocTextboxOtherEmail.value = wr.otherEmail;
        document.getElementById("wr_type_dd_menu_current").innerHTML = wr.wrType;
        addTabWrCRD.value = wr.crd;
        addTabWrRCD.value = wr.rcd;
        document.getElementById("general_status_dd_add_tab_current").innerHTML = wr.generalStatus;
        document.getElementById("permit_status_dd_add_tab_row_1_current").innerHTML = wr.permit.permitStatus;
        document.getElementById("easement_status_dd_add_tab_current").innerHTML = wr.easementRequestStatus;
        addTabWrCommentsToAdd.textContent = wr.commentsGeneral
    
        if (wr.customerContacted) {
            customerContactedCheckboxYes.checked = true;
            customerContactedCheckboxNo.checked = false;
        } else {
            customerContactedCheckboxYes.checked = false;
            customerContactedCheckboxNo.checked = true;
        }

        addTabAddButton.disabled = true;
    
    }
    
        /* Hide Add Tab Display */
    function clearAddTabDisplays() {
        console.log("Entered - clearAddTabDisplays");


        addTabDisplayAddWr.classList.add("hidden");
        addTabDisplayAddPermit.classList.add("hidden");
    }

    
        /* AllWr Tab */     /* AllWr Tab */     /* AllWr Tab */     /* AllWr Tab */     /* AllWr Tab */     /* AllWr Tab */     /* AllWr Tab */
        
        /* Priority Numbers */
    allWrTabRowOnePriority.addEventListener("change", (event) => {
        console.log("Changed - allWrTabRowOnePriority changed to - " + event);

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * 3) + 1 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];
        

        currentWr.priorityNumber = event.target.value;
        allWrList[curWrIndex] = currentWr;        
    })
    allWrTabRowTwoPriority.addEventListener("change", (event) => {
        console.log("Changed - allWrTabRowTwoPriority changed to - " + event);

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * 3) + 2 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];
        

        currentWr.priorityNumber = event.target.value;
        allWrList[curWrIndex] = currentWr;        
    })
    allWrTabRowThreePriority.addEventListener("change", (event) => {
        console.log("Changed - allWrTabRowThreePriority changed to - " + event);

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * 3) + 3 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];
        

        currentWr.priorityNumber = event.target.value;
        allWrList[curWrIndex] = currentWr;        
    })

        /* Addresses */
    allWrTabRowOneAddress.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowOneAddress");

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * 3) + 1 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        displayWrAddUpdate(currentWr);
        document.getElementById("add_tab").click();
        document.getElementById("add_tab_update_button").disabled = false;
    })
    allWrTabRowTwoAddress.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowTwoAddress");

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * 3) + 2 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        displayWrAddUpdate(currentWr);
        document.getElementById("add_tab").click();
        document.getElementById("add_tab_update_button").disabled = false;
    })
    allWrTabRowThreeAddress.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowThreeAddress");

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * 3) + 3 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        displayWrAddUpdate(currentWr);
        document.getElementById("add_tab").click();
        document.getElementById("add_tab_update_button").disabled = false;
    })

        /* CRDs */
    function allWrTabCrdFunction(row, event) {
        console.log("Entered - allWrTabCrdFunction(" + row + ")");

        let rowNumberText = ""; 

        if (row == "1") {
            rowNumberText = "one";
        } else if (row == "2") {
            rowNumberText = "two";
        } else if (row == "3") {
            rowNumberText = "three";
        }

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * 3) + row - 1); // Will need to change when more rows
        let currentWr = allWrList[curWrIndex];

        if (event.target.value != currentWr.crd) {
            currentWr.crd = event.target.value;
            const d = new Date(currentWr.crd);
            document.getElementById("all_wr_tab_row_" + rowNumberText + "_crd").style.backgroundColor = assessDate(d);
            allWrList[curWrIndex] = currentWr;
            crdRcdCheck(currentWr.crd, currentWr.rcd, "all_wr", rowNumberText);
            
        }

    }
    allWrTabRowOneCrd.addEventListener("mouseout", (event) => {
        console.log("mousedout - allWrTabRowOneCrd changed to - " + event);

        allWrTabCrdFunction("1", event);
    })
    allWrTabRowTwoCrd.addEventListener("mouseout", (event) => {
        console.log("mousedout - allWrTabRowTwoCrd changed to - " + event);

        allWrTabCrdFunction("2", event);
    })
    allWrTabRowThreeCrd.addEventListener("mouseout", (event) => {
        console.log("mousedout - allWrTabRowThreeCrd changed to - " + event);

        allWrTabCrdFunction("3", event);
    })  

        /* RCDs */
    function allWrTabRcdFunction(row, event) {
        console.log("Entered - allWrTabRcdFunction(" + row + ")");

        let rowNumberText = ""; 

        if (row == "1") {
            rowNumberText = "one";
        } else if (row == "2") {
            rowNumberText = "two";
        } else if (row == "3") {
            rowNumberText = "three";
        }

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * 3) + row - 1); // Will need to change when more rows
        let currentWr = allWrList[curWrIndex];

        if (event.target.value != currentWr.rcd) {
            currentWr.rcd = event.target.value;
            const d = new Date(currentWr.rcd);
            document.getElementById("all_wr_tab_row_" + rowNumberText + "_rcd").style.backgroundColor = assessDate(d);
            allWrList[curWrIndex] = currentWr;
            crdRcdCheck(currentWr.crd, currentWr.rcd, "all_wr", rowNumberText);
            
        }

    }
    allWrTabRowOneRcd.addEventListener("mouseout", (event) => {
        console.log("mousedout - allWrTabRowOneRcd changed to - " + event);

        allWrTabRcdFunction("1", event);
    })
    allWrTabRowTwoRcd.addEventListener("mouseout", (event) => {
        console.log("mousedout - allWrTabRowTwoRcd changed to - " + event);

        allWrTabRcdFunction("2", event);
    })
    allWrTabRowThreeRcd.addEventListener("mouseout", (event) => {
        console.log("mousedout - allWrTabRowThreeRcd changed to - " + event);

        allWrTabRcdFunction("3", event);
    })

            /* General Status DDs */
        /* Functions */
    function allWrTabGeneralStatusContainerMouseoverFunction(rowNum) {
        console.log("Entered - allWrTabGeneralStatusContainerMouseoverFunction(" + rowNum + ")");

        const tempContent = document.getElementById("general_status_dd_" + rowNum + "_content");
        console.log("tempContent = ");
        console.log(tempContent);

        tempContent.style.display = 'flex';
        tempContent.style.flexDirection = 'column';
        tempContent.style.border = '1px solid black';

        /* Below statement adjusts position of content box to above or below dd menu */
        if (1 <=3) {
            tempContent.style.marginTop = '325px';
        } else {
            /* Will need to fill in when more than 3 work requests */
        }
    }
    function allWrTabGeneralStatusContainerClickFunction(rowNum, event) {
        console.log("Entered - allWrTabGeneralStatusContainerClickFunction(" + rowNum + ")");

        const tempContent = document.getElementById("general_status_dd_" + rowNum + "_content");

        console.log("tempContent =");
        console.log(tempContent);

        if (tempContent.style.display == 'none') {
            allWrTabGeneralStatusContainerMouseoverFunction(rowNum);
        } else if (tempContent.style.display == 'flex' && event.target.innerHTML == "\\/") {
            tempContent.style.display = 'none';
        } else {
            /* The below code block creates a temporary DDmenu to initialize a list to compare against
                - Used to make sure the click doesn't add the ddMenu html element, only the items */
            const tempElem = document.createElement("tempElem");
            tempElem.id = "temp_elem";
            tempElem.classList.add("hidden");
            const tempDD = new GeneralStatusDDMenu("test", "test");
            const tempRowElement = tempDD.makeRowElement();
            tempElem.insertAdjacentElement("beforeend", tempRowElement);
            const tempStorage = document.getElementById("all_wr_tab_active");
            tempStorage.insertAdjacentElement("beforeend", tempElem);
            const tempContent = document.getElementById("general_status_dd_test_content");
            tempElem.remove();
        
                
            if (event.target.innerHTML != "\\/" && tempContent.innerHTML.includes(event.target.innerHTML)) {
                const tempCurrent = document.getElementById("general_status_dd_" + rowNum + "_current");
                tempCurrent.innerHTML = event.target.innerHTML;
        
                if (tempCurrent.innerHTML.includes("Waiting on Cust") == true) {
                    tempCurrent.style.fontSize = 'smaller';
                    console.log("test test test");
                } else {
                    tempCurrent.style.fontSize = 'small'
                }
        
                allWrTabGeneralStatusContainerMouseoutFunction(rowNum);
            }
        }

        
    }
    function allWrTabGeneralStatusContainerMouseoutFunction(rowNum) {
        console.log("Entered - allWrTabGeneralStatusMouseoutClickFunction(" + rowNum + ")");

        /* Current value on page - not in list */
        const tempCurrent = document.getElementById("general_status_dd_" + rowNum + "_current");

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * 3) + parseInt(rowNum) - 1); // Will need to change when more rows

        /* Current Wr */
        let currentWr = allWrList[curWrIndex];

        if (tempCurrent.innerHTML != currentWr.generalStatus) {
            console.log("* Saving page to list *");

            /* Updating Status and List */
            currentWr.generalStatus = tempCurrent.innerHTML;
            allWrList[curWrIndex] = currentWr;

            injectHTMLAllWrTabDisplay(allWrList, currentPageAllWr);
            injectHTMLPermitsTabDisplay(allWrList, currentPagePermits);

            console.log("* Internal List Updated *");
        }

        /* Hiding DDMenu Content */
        const tempContent = document.getElementById("general_status_dd_" + rowNum + "_content");
        tempContent.style.display = 'none';
    }
        /* clicks */
    allWrTabRowOneGeneralStatusContainer.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowOneGeneralStatus");

        allWrTabGeneralStatusContainerClickFunction("1", event);
    })
    allWrTabRowTwoGeneralStatusContainer.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowTwoGeneralStatus");

        allWrTabGeneralStatusContainerClickFunction("2", event);
    })
    allWrTabRowThreeGeneralStatusContainer.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowThreeGeneralStatus");

        allWrTabGeneralStatusContainerClickFunction("3", event);
    })

            /* Permit Status DDs */   
        /* Functions */ 
    function allWrTabPermitStatusContainerMouseoverFunction(rowNum) {
        console.log("Fired - moused over allWrTabPermitStatusMouseoverFunction(" + rowNum + ")");

        const tempContent = document.getElementById("permit_status_dd_allWr_tab_row_" + rowNum + "_content");

        tempContent.style.display = 'flex';
        tempContent.style.flexDirection = 'column';
        tempContent.style.border = '1px solid black';

        /* Below statement adjusts position of content box to above or below dd menu */
        if (1 <=3) {
            tempContent.style.marginTop = '400px';
            tempContent.style.width = '90px';
        } else {
            /* Will need to fill in when more than 3 work requests */
        }
    }
    function allWrTabPermitStatusContainerClickFunction(rowNum, event) {
        console.log("Entered - allWrTabPermitStatusContainerClickFunction(" + rowNum + ")");

        const tempContent = document.getElementById("permit_status_dd_allWr_tab_row_" + rowNum + "_content");

        if (tempContent.style.display == 'none') {
            allWrTabPermitStatusContainerMouseoverFunction(rowNum);
        } else if (tempContent.style.display == 'flex' && event.target.innerHTML == "\\/") {
            tempContent.style.display = 'none';
        } else {
            /* The below code block creates a temporary DDmenu to initialize a list to compare against
                - Used to make sure the click doesn't add the ddMenu html element, only the items */
            const tempElem = document.createElement("tempElem");
            tempElem.id = "temp_elem";
            tempElem.classList.add("hidden");
            const tempDD = new PermitStatusDDMenu("test", "test");
            const tempRowElement = tempDD.makeRowElement();
            tempElem.insertAdjacentElement("beforeend", tempRowElement);
            const tempStorage = document.getElementById("all_wr_tab_active");
            tempStorage.insertAdjacentElement("beforeend", tempElem);
            const tempContent = document.getElementById("permit_status_dd_test_tab_row_test_content");
            tempElem.remove();

            if (event.target.innerHTML != "\\/" && tempContent.innerHTML.includes(event.target.innerHTML)) {
                const tempCurrent = document.getElementById("permit_status_dd_allWr_tab_row_" + rowNum + "_current");
                tempCurrent.innerHTML = event.target.innerHTML;

                allWrTabPermitStatusContainerMouseoutFunction(rowNum);
            }
        }
    }
    function allWrTabPermitStatusContainerMouseoutFunction(rowNum) {
        console.log("Entered - allWrTabPermitStatusMouseoutClickFunction(" + rowNum + ")");

        /* Current value on page - not in list */
        const tempCurrent = document.getElementById("permit_status_dd_allWr_tab_row_" + rowNum + "_current");

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * 3) + parseInt(rowNum) - 1); // Will need to change when more rows

        /* Current Wr */
        let currentWr = allWrList[curWrIndex];

        if (tempCurrent.innerHTML != currentWr.permit.permitStatus) {
            console.log("* Saving page to list *");

            /* Updating Status and List */
            currentWr.permit.permitStatus = tempCurrent.innerHTML;
            allWrList[curWrIndex] = currentWr;

            injectHTMLAllWrTabDisplay(allWrList, currentPageAllWr);
            injectHTMLPermitsTabDisplay(allWrList, currentPagePermits);

            console.log("* Internal List Updated *");
        }

        /* Hiding DDMenu Content */
        const tempContent = document.getElementById("permit_status_dd_allWr_tab_row_" + rowNum + "_content");
        tempContent.style.display = 'none';
    }
        /* clicks */
    allWrTabRowOnePermitStatusContainer.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowOnePermitStatus");

        allWrTabPermitStatusContainerClickFunction("1", event);
        /*const tempElem = document.createElement("tempElem");
        tempElem.id = "temp_elem";
        tempElem.classList.add("hidden");
    
        const tempDD = new PermitStatusDDMenu("test", "test");
        const tempRowElement = tempDD.makeRowElement();
        tempElem.insertAdjacentElement("beforeend", tempRowElement);

        const tempStorage = document.getElementById("all_wr_tab_active");
        tempStorage.insertAdjacentElement("beforeend", tempElem);

        const tempContent = document.getElementById("permit_status_dd_test_tab_row_test_content");
        tempElem.remove();

        if (event.target.innerHTML != "\\/" && tempContent.innerHTML.includes(event.target.innerHTML)) {
            const tempCurrent = document.getElementById("permit_status_dd_allWr_tab_row_1_current");
            tempCurrent.innerHTML = event.target.innerHTML;

            const tempContent = document.getElementById("permit_status_dd_allWr_tab_row_1_content");
            //tempContent.style.display = 'none';
        }*/
    })
    allWrTabRowTwoPermitStatusContainer.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowTwoPermitStatus");

        allWrTabPermitStatusContainerClickFunction("2", event);
        /*const tempElem = document.createElement("tempElem");
        tempElem.id = "temp_elem";
        tempElem.classList.add("hidden");
    
        const tempDD = new PermitStatusDDMenu("test", "test");
        const tempRowElement = tempDD.makeRowElement();
        tempElem.insertAdjacentElement("beforeend", tempRowElement);

        const tempStorage = document.getElementById("all_wr_tab_active");
        tempStorage.insertAdjacentElement("beforeend", tempElem);

        const tempContent = document.getElementById("permit_status_dd_test_tab_row_test_content");
        tempElem.remove();

        if (event.target.innerHTML != "\\/" && tempContent.innerHTML.includes(event.target.innerHTML)) {
            const tempCurrent = document.getElementById("permit_status_dd_allWr_tab_row_2_current");
            tempCurrent.innerHTML = event.target.innerHTML;

            const tempContent = document.getElementById("permit_status_dd_allWr_tab_row_2_content");
            //tempContent.style.display = 'none';
        }*/
    })
    allWrTabRowThreePermitStatusContainer.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowThreePermitStatus");

        allWrTabPermitStatusContainerClickFunction("3", event);
        /*const tempElem = document.createElement("tempElem");
        tempElem.id = "temp_elem";
        tempElem.classList.add("hidden");
    
        const tempDD = new PermitStatusDDMenu("test", "test");
        const tempRowElement = tempDD.makeRowElement();
        tempElem.insertAdjacentElement("beforeend", tempRowElement);

        const tempStorage = document.getElementById("all_wr_tab_active");
        tempStorage.insertAdjacentElement("beforeend", tempElem);

        const tempContent = document.getElementById("permit_status_dd_test_tab_row_test_content");
        tempElem.remove();

        if (event.target.innerHTML != "\\/" && tempContent.innerHTML.includes(event.target.innerHTML)) {
            const tempCurrent = document.getElementById("permit_status_dd_allWr_tab_row_3_current");
            tempCurrent.innerHTML = event.target.innerHTML;

            const tempContent = document.getElementById("permit_status_dd_allWr_tab_row_3_content");
            //tempContent.style.display = 'none';
        }*/
    })

            /* Easement Status DDs */
        /* Functions */
    function allWrTabEasementStatusContainerMouseoverFunction(rowNum) {
        console.log("Entered - allWrTabEasementStatusContainerMouseoverFunction(" + rowNum + ")");

        const tempContent = document.getElementById("easement_status_dd_" + rowNum + "_content");

        tempContent.style.display = 'flex';
        tempContent.style.flexDirection = 'column';
        tempContent.style.border = '1px solid black';

        /* Below statement adjusts position of content box to above or below dd menu */
        if (1 <=3) {
            tempContent.style.marginTop = '400px';
            tempContent.style.width = '90px';
        } else {
            /* Will need to fill in when more than 3 work requests */
        }
    }
    function allWrTabEasementStatusContainerClickFunction(rowNum, event) {
        console.log("Entered - allWrTabEasementStatusContainerClickFunction(" + rowNum + ")");

        const tempContent = document.getElementById("easement_status_dd_" + rowNum + "_content");

        if (tempContent.style.display == 'none') {
            allWrTabEasementStatusContainerMouseoverFunction(rowNum);
        } else if (tempContent.style.display == 'flex' && event.target.innerHTML == "\\/") {
            tempContent.style.display = 'none';
        } else {
            /* The below code block creates a temporary DDmenu to initialize a list to compare against
                - Used to make sure the click doesn't add the ddMenu html element, only the items */
            const tempElem = document.createElement("tempElem");
            tempElem.id = "temp_elem";
            tempElem.classList.add("hidden");
            const tempDD = new EasementStatusDDMenu("test");
            const tempRowElement = tempDD.makeRowElement();
            tempElem.insertAdjacentElement("beforeend", tempRowElement);
            const tempStorage = document.getElementById("all_wr_tab_active");
            tempStorage.insertAdjacentElement("beforeend", tempElem);
            const tempContent = document.getElementById("easement_status_dd_test_content");
            tempElem.remove();
        
            
            if (event.target.innerHTML != "\\/" && tempContent.innerHTML.includes(event.target.innerHTML)) {
                const tempCurrent = document.getElementById("easement_status_dd_" + rowNum + "_current");
                tempCurrent.innerHTML = event.target.innerHTML;
        
                allWrTabEasementStatusContainerMouseoutFunction(rowNum);
            }
        }

    }
    function allWrTabEasementStatusContainerMouseoutFunction(rowNum) {
        console.log("Entered - allWrTabEasementStatusMouseoutClickFunction(" + rowNum + ")");

        /* Current value on page - not in list */
        const tempCurrent = document.getElementById("easement_status_dd_" + rowNum + "_current");

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * 3) + parseInt(rowNum) - 1); // Will need to change when more rows

        /* Current Wr */
        let currentWr = allWrList[curWrIndex];

        if (tempCurrent.innerHTML != currentWr.easementRequestStatus) {
            console.log("* Saving page to list *");

            /* Updating Status and List */
            currentWr.easementRequestStatus = tempCurrent.innerHTML;
            allWrList[curWrIndex] = currentWr;

            injectHTMLAllWrTabDisplay(allWrList, currentPageAllWr);
            injectHTMLPermitsTabDisplay(allWrList, currentPagePermits);

            console.log("* Internal List Updated *");
        }

        /* Hiding DDMenu Content */
        const tempContent = document.getElementById("easement_status_dd_" + rowNum + "_content");
        tempContent.style.display = 'none';
    }
        /* clicks */
    allWrTabRowOneEasementStatusContainer.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowOneEasementStatus");

        allWrTabEasementStatusContainerClickFunction("1", event);
    })
    allWrTabRowTwoEasementStatusContainer.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowTwoEasementStatus");

        allWrTabEasementStatusContainerClickFunction("2", event);
    })
    allWrTabRowThreeEasementStatusContainer.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowThreeEasementStatus");

        allWrTabEasementStatusContainerClickFunction("3", event);
    })

        /* AllWr Next and Prev Button */
    nextAllWr.addEventListener("click", (event) => {
        console.log("Fired - Clicked all_wr_tab_next_button");

        console.log("currentPageAllWr = ");
        console.log(curPageAllWr);

        curPageAllWr.innerHTML = currentPageAllWr + 1 + 1; // second + 1 for display
        injectHTMLAllWrTabDisplay(allWrList, currentPageAllWr + 1);
        currentPageAllWr += 1;

        return;
    })
    prevAllWr.addEventListener("click", (event) => {
        console.log("Fired - Clicked all_wr_tab_prev_button");

        curPageAllWr.innerHTML = currentPageAllWr - 1 + 1;  // second + 1 for display
        injectHTMLAllWrTabDisplay(allWrList, currentPageAllWr - 1);
        currentPageAllWr -= 1;

        return; // Can remove?
    })
    
    /* Permits Tab */       /* Permits Tab */       /* Permits Tab */       /* Permits Tab */       /* Permits Tab */       /* Permits Tab */


        /* Priority Numbers */
    permitsTabRowOnePriority.addEventListener("change", (event) => {
        console.log("Changed - permitsTabRowOnePriority changed to - " + event);

        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * 3) + 1 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];
        

        currentWr.priorityNumber = event.target.value;
        allWrList[curWrIndex] = currentWr;        
    })
    permitsTabRowTwoPriority.addEventListener("change", (event) => {
        console.log("Changed - permitsTabRowTwoPriority changed to - " + event);

        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * 3) + 2 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];
        

        currentWr.priorityNumber = event.target.value;
        allWrList[curWrIndex] = currentWr;        
    })
    permitsTabRowThreePriority.addEventListener("change", (event) => {
        console.log("Changed - permitsTabRowThreePriority changed to - " + event);

        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * 3) + 3 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];
        

        currentWr.priorityNumber = event.target.value;
        allWrList[curWrIndex] = currentWr;        
    })

        /* Addresses */
    permitsTabRowOneAddress.addEventListener("click", (event) => {
        console.log("Fired - clicked permitsTabRowOneAddress");

        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * 3) + 1 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        displayPermitAddUpdate(currentWr);
        document.getElementById("add_tab").click();
        document.getElementById("filter_checkbox_add_permit").click();
        document.getElementById("add_tab_update_button").disabled = false;
    })
    permitsTabRowTwoAddress.addEventListener("click", (event) => {
        console.log("Fired - clicked permitsTabRowTwoAddress");

        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * 3) + 2 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        displayPermitAddUpdate(currentWr);
        document.getElementById("add_tab").click();
        document.getElementById("filter_checkbox_add_permit").click();
        document.getElementById("add_tab_update_button").disabled = false;
    })
    permitsTabRowThreeAddress.addEventListener("click", (event) => {
        console.log("Fired - clicked permitsTabRowThreeAddress");

        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * 3) + 3 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        displayPermitAddUpdate(currentWr);
        document.getElementById("add_tab").click();
        document.getElementById("filter_checkbox_add_permit").click();
        document.getElementById("add_tab_update_button").disabled = false;
    })

        /* CRDs */
    function permitsTabCrdFunction(row, event) {
        console.log("Entered - permitsTabCrdFunction(" + row + ")");

        let rowNumberText = ""; 

        if (row == "1") {
            rowNumberText = "one";
        } else if (row == "2") {
            rowNumberText = "two";
        } else if (row == "3") {
            rowNumberText = "three";
        }

        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * 3) + row - 1); // Will need to change when more rows
        let currentWr = allWrList[curWrIndex];

        if (event.target.value != currentWr.crd) {
            currentWr.crd = event.target.value;
            const d = new Date(currentWr.crd);
            document.getElementById("permits_tab_row_" + rowNumberText + "_crd_date").style.backgroundColor = assessDate(d);
            allWrList[curWrIndex] = currentWr;
            crdRcdCheck(currentWr.crd, currentWr.rcd, "permits", rowNumberText);
            
        }

    }
    permitsTabRowOneCrd.addEventListener("mouseout", (event) => {
        console.log("mousedout - permitsTabRowOneCrd changed to - " + event);

        permitsTabCrdFunction("1", event);
    })
    permitsTabRowTwoCrd.addEventListener("mouseout", (event) => {
        console.log("mousedout - permitsTabRowTwoCrd changed to - " + event);

        permitsTabCrdFunction("2", event);
    })
    permitsTabRowThreeCrd.addEventListener("mouseout", (event) => {
        console.log("mousedout - permitsTabRowThreeCrd changed to - " + event);

        permitsTabCrdFunction("3", event);
    })

        /* RCDs */
    function permitsTabRcdFunction(row, event) {
        console.log("Entered - permitsTabRcdFunction(" + row + ")");

        let rowNumberText = ""; 

        if (row == "1") {
            rowNumberText = "one";
        } else if (row == "2") {
            rowNumberText = "two";
        } else if (row == "3") {
            rowNumberText = "three";
        }

        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * 3) + row - 1); // Will need to change when more rows
        let currentWr = allWrList[curWrIndex];

        if (event.target.value != currentWr.rcd) {
            currentWr.rcd = event.target.value;
            const d = new Date(currentWr.rcd);
            document.getElementById("permits_tab_row_" + rowNumberText + "_rcd_date").style.backgroundColor = assessDate(d);
            allWrList[curWrIndex] = currentWr;
            crdRcdCheck(currentWr.crd, currentWr.rcd, "permits", rowNumberText);
        }
    }    
    permitsTabRowOneRcd.addEventListener("mouseout", (event) => {
        console.log("mousedout - permitsTabRowOneRcd changed to - " + event);

        permitsTabRcdFunction("1", event);
    })
    permitsTabRowTwoRcd.addEventListener("mouseout", (event) => {
        console.log("mousedout - permitsTabRowTwoRcd changed to - " + event);

        permitsTabRcdFunction("2", event);
    })
    permitsTabRowThreeRcd.addEventListener("mouseout", (event) => {
        console.log("mousedout - permitsTabRowThreeRcd changed to - " + event);

        permitsTabRcdFunction("3", event);
    })
    
            /* Permit Status DDs */    
        /* Functions */
    function permitsTabPermitStatusContainerMouseoverFunction(rowNum) {
        console.log("Fired - moused over permitsTabPermitStatusMouseoverFunction(" + rowNum + ")");

        const tempContent = document.getElementById("permit_status_dd_permits_tab_row_" + rowNum + "_content");

        tempContent.style.display = 'flex';
        tempContent.style.flexDirection = 'column';
        tempContent.style.border = '1px solid black';

        /* Below statement adjusts position of content box to above or below dd menu */
        if (1 <=3) {
            tempContent.style.marginTop = '400px';
            tempContent.style.width = '90px';
        } else {
            /* Will need to fill in when more than 3 work requests */
        }
    }
    function permitsTabPermitStatusContainerClickFunction(rowNum, event) {
        console.log("Entered - permitsTabPermitStatusContainerClickFunction(" + rowNum + ")");

        const tempContent = document.getElementById("permit_status_dd_permits_tab_row_" + rowNum + "_content");

        if (tempContent.style.display == 'none') {
            permitsTabPermitStatusContainerMouseoverFunction(rowNum);
        } else if (tempContent.style.display == 'flex' && event.target.innerHTML == "\\/") {
            tempContent.style.display = 'none';
        } else {
            /* The below code block creates a temporary DDmenu to initialize a list to compare against
                - Used to make sure the click doesn't add the ddMenu html element, only the items */
            const tempElem = document.createElement("tempElem");
            tempElem.id = "temp_elem";
            tempElem.classList.add("hidden");
            const tempDD = new PermitStatusDDMenu("test", "test");
            const tempRowElement = tempDD.makeRowElement();
            tempElem.insertAdjacentElement("beforeend", tempRowElement);
            const tempStorage = document.getElementById("all_wr_tab_active");
            tempStorage.insertAdjacentElement("beforeend", tempElem);
            const tempContent = document.getElementById("permit_status_dd_test_tab_row_test_content");
            tempElem.remove();

            if (event.target.innerHTML != "\\/" && tempContent.innerHTML.includes(event.target.innerHTML)) {
                const tempCurrent = document.getElementById("permit_status_dd_permits_tab_row_" + rowNum + "_current");
                tempCurrent.innerHTML = event.target.innerHTML;

                permitsTabPermitStatusContainerMouseoutFunction(rowNum);
            }
        }
    }
    function permitsTabPermitStatusContainerMouseoutFunction(rowNum) {
        console.log("Entered - permitsTabPermitStatusMouseoutClickFunction(" + rowNum + ")");

        /* Current value on page - not in list */
        const tempCurrent = document.getElementById("permit_status_dd_permits_tab_row_" + rowNum + "_current");

        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * 3) + parseInt(rowNum) - 1); // Will need to change when more rows

        /* Current Wr */
        let currentWr = allWrList[curWrIndex];

        if (tempCurrent.innerHTML != currentWr.permit.permitStatus) {
            console.log("* Saving page to list *");

            /* Updating Status and List */
            currentWr.permit.permitStatus = tempCurrent.innerHTML;
            allWrList[curWrIndex] = currentWr;

            injectHTMLAllWrTabDisplay(allWrList, currentPageAllWr);
            injectHTMLPermitsTabDisplay(allWrList, currentPagePermits);

            console.log("* Internal List Updated *");
        }

        /* Hiding DDMenu Content */
        const tempContent = document.getElementById("permit_status_dd_permits_tab_row_" + rowNum + "_content");
        tempContent.style.display = 'none';
    }
        /* clicks */
    permitsTabRowOneStatusContainer.addEventListener("click", (event) => {
        console.log("Fired - clicked permitsTabRowOnePermitStatus");

        permitsTabPermitStatusContainerClickFunction("1", event);
    })
    permitsTabRowTwoStatusContainer.addEventListener("click", (event) => {
        console.log("Fired - clicked permitsTabRowTwoPermitStatus");

        permitsTabPermitStatusContainerClickFunction("2", event);
    })
    permitsTabRowThreeStatusContainer.addEventListener("click", (event) => {
        console.log("Fired - clicked permitsTabRowThreePermitStatus");

        permitsTabPermitStatusContainerClickFunction("3", event);
    })
        
        /* Start Dates */
    function permitsTabStartDateFunction(row, event) {
        console.log("Entered - permitsTabStartDateFunction(" + row + ")");

        let rowNumberText = ""; 

        if (row == "1") {
            rowNumberText = "one";
        } else if (row == "2") {
            rowNumberText = "two";
        } else if (row == "3") {
            rowNumberText = "three";
        }

        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * 3) + row - 1); // Will need to change when more rows
        let currentWr = allWrList[curWrIndex];

        if (event.target.value != currentWr.permit.startDate) {
            currentWr.permit.startDate = event.target.value;
            const d = new Date(currentWr.permit.startDate);
            document.getElementById("permits_tab_row_" + rowNumberText + "_start_date").style.backgroundColor = assessPermitStartDate(d);
            allWrList[curWrIndex] = currentWr;            
        }

    }
    permitsTabRowOneStartDate.addEventListener("mouseout", (event) => {
        console.log("mouseout - permitsTabRowOneStartDate changed to - " + event);

        permitsTabStartDateFunction("1", event);
    })
    permitsTabRowTwoStartDate.addEventListener("mouseout", (event) => {
        console.log("mouseout - permitsTabRowTwoStartDate changed to - " + event);

        permitsTabStartDateFunction("2", event);

    })
    permitsTabRowThreeStartDate.addEventListener("mouseout", (event) => {
        console.log("mouseout - permitsTabRowThreeStartDate changed to - " + event);

        permitsTabStartDateFunction("3", event);

    })

        /* End Dates */
    function permitsTabEndDateFunction(row, event) {
        console.log("Entered - permitsTabEndDateFunction(" + row + ")");

        let rowNumberText = ""; 

        if (row == "1") {
            rowNumberText = "one";
        } else if (row == "2") {
            rowNumberText = "two";
        } else if (row == "3") {
            rowNumberText = "three";
        }

        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * 3) + row - 1); // Will need to change when more rows
        let currentWr = allWrList[curWrIndex];

        if (event.target.value != currentWr.permit.endDate) {
            currentWr.permit.endDate = event.target.value;
            const d = new Date(currentWr.permit.endDate);
            document.getElementById("permits_tab_row_" + rowNumberText + "_end_date").style.backgroundColor = assessDate(d);
            allWrList[curWrIndex] = currentWr;            
        }

    }
    permitsTabRowOneEndDate.addEventListener("mouseout", (event) => {
        console.log("mouseout - permitsTabRowOneEndDate changed to - " + event);

        permitsTabEndDateFunction("1", event);
    })
    permitsTabRowTwoEndDate.addEventListener("mouseout", (event) => {
        console.log("mouseout - permitsTabRowTwoEndDate changed to - " + event);

        permitsTabEndDateFunction("2", event);
    })
    permitsTabRowThreeEndDate.addEventListener("mouseout", (event) => {
        console.log("mouseout - permitsTabRowThreeEndDate changed to - " + event);

        permitsTabEndDateFunction("3", event);
    })

        /* Permits Next and Prev Button */
    nextPermits.addEventListener("click", (event) => {
        console.log("Fired - Clicked permits_tab_next_button");

        curPagePermits.innerHTML = currentPagePermits + 1 + 1; // second + 1 for display
        injectHTMLPermitsTabDisplay(allWrList, currentPagePermits + 1);
        currentPagePermits += 1;

            return;
    })
    prevPermits.addEventListener("click", (event) => {
        console.log("Fired - Clicked permits_tab_prev_button");

        curPagePermits.innerHTML = currentPagePermits - 1 + 1; // second + 1 for display
        injectHTMLPermitsTabDisplay(allWrList, currentPagePermits - 1);
        currentPagePermits -= 1;
            
        return;
    })
    
    /* Add/Update Tab */        /* Add/Update Tab */        /* Add/Update Tab */        /* Add/Update Tab */        /* Add/Update Tab */
    
        /* Buttons */
    addTabUpdateButton.addEventListener("click", (event) => {
        console.log("Fired - Clicked add_tab_update_button");
        const h = new Haptix();
        const wrTypeDDMenuCurrent = document.getElementById("wr_type_dd_menu_current").innerHTML;
        const generalStatusDDMenuCurrent = document.getElementById("general_status_dd_add_tab_current").innerHTML;
        const permitStatusDDMenuCurrent = document.getElementById("permit_status_dd_add_tab_row_1_current").innerHTML;
        const easementStatusDDMenuCurrent = document.getElementById("easement_status_dd_add_tab_current").innerHTML;

        const permitsTabPermitStatusDDMenuCurrent = document.getElementById("permit_status_dd_add_tab_row_2_current").innerHTML;

        const curWrData = getWr(addTabNewWorkRequestNumber.value, allWrList); 
        const curWrIndex = curWrData[2];
        if (filterCheckboxAddWr.checked == true) {
            const d = new Date();
            const tempDate = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();

            const newWr = new workRequest(addTabNewWorkRequestNumber.value, addressLineTextfieldHouseNumber.value, 
                addressLineTextfieldStreetName.value, addressLineTextfieldCounty.value, addressLineTextfieldZip.value,
                addTabPriorityBox.value, pocTextboxOwnerName.value, pocTextboxOwnerNumber.value, pocTextboxOwnerEmail.value, 
                pocTextboxBuilderName.value, pocTextboxBuilderNumber.value, pocTextboxBuilderEmail.value, pocTextboxOtherName.value,
                pocTextboxOtherNumber.value, pocTextboxOtherEmail.value, wrTypeDDMenuCurrent, addTabWrCRD.value, addTabWrRCD.value, 
                generalStatusDDMenuCurrent, permitStatusDDMenuCurrent, easementStatusDDMenuCurrent, addTabWrCommentsToAdd.textContent, 
                customerContactedCheckboxYes.checked, tempDate);

            console.log("inner test ");
            console.log(newWr);
            
                if (document.getElementById("temp_all_wr_list") == null) { // no wr's exists
                    allWrList[0] = newWr;
                    console.log("wr added to empty list");

                    const tempAllWrList = document.createElement("tempAllWrList");
                    tempAllWrList.id = "temp_all_wr_list";
                    tempAllWrList.classList.add("hidden");
                    tempAllWrList.innerHTML = allWrList;

                    const allWrTab = document.getElementById("all_wr_tab");
                    allWrTab.insertAdjacentElement("beforeend", tempAllWrList);

                    console.log("allWrList added to internal list");

                    injectHTMLAllWrTabDisplay(allWrList, 0);
                    injectHTMLPermitsTabDisplay(allWrList, 0);
                } else { // at least 1 wr exists
                    allWrList[curWrIndex] = newWr;
                    const tempAllWrList = document.getElementById("temp_all_wr_list");
                    tempAllWrList.innerHTML = allWrList;
                    console.log("allWrList added to internal list");

                    console.log("other test");
                    console.log(allWrList);

                    injectHTMLPermitsTabDisplay(allWrList, 0);
                    injectHTMLAllWrTabDisplay(allWrList, 0);
                }
                h.displayWrUpdated(newWr.workRequestNumber);

            
        } else if (filterCheckboxAddPermit.checked == true) {
            const curWrData = getWr(addTabNewWorkRequestNumber.value, allWrList);
            let curWr = curWrData[1];
            if (curWrData[0] != false) {
                const d = new Date();
                const tempDate = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
                const curWrIndex = curWrData[2];
                let newWr = new workRequest(curWr.workRequestNumber, curWr.addressLineTextfieldHouseNumber, curWr.addressLineTextfieldStreetName,
                    curWr.countyCity, curWr.zipCode, curWr.priorityNumber, curWr.ownerName, curWr.ownerNumber, curWr.ownerEmail, curWr.builderName,
                    curWr.builderNumber, curWr.builderEmail, curWr.otherName, curWr.otherNumber, curWr.otherEmail, curWr.wrType, addTabPermitCRD.value,
                    addTabPermitRCD.value, curWr.generalStatus, curWr.permit.permitStatus, curWr.easementRequestStatus, curWr.commentsGeneral, 
                    curWr.customerContacted, curWr.creationDate);
                const permit = new Permit(addTabNewWorkRequestNumber.value, permitsTabPermitStatusDDMenuCurrent, 
                addTabPermitDateSubmitted.value, addTabPermitDateApplied.value, addTabPermitPriority.value, addTabPermitCRD.value, 
                addTabPermitRCD.value, addTabPermitStart.value, addTabPermitExpiration.value, tempDate);
                
                newWr.permit = permit;
                console.log("test test test");
                console.log(newWr);
                allWrList[curWrIndex] = newWr;

                const tempAllWrList = document.getElementById("temp_all_wr_list");
                tempAllWrList.innerHTML = allWrList;
                console.log("allWrList added to internal list");

                injectHTMLPermitsTabDisplay(allWrList, 0);
                injectHTMLAllWrTabDisplay(allWrList, 0);

                h.displayPermitUpdated(newWr.workRequestNumber);
            }
        }
        
    })
    addTabGetButton.addEventListener("click", (event) => {
        console.log("Fired - Clicked add_tab_get_button");
        const e = new Error();
        const h = new Haptix();  

        if (filterCheckboxAddWr.checked == true) {
            const curWrNum = addTabNewWorkRequestNumber.value;

            let wr = getWr(curWrNum, allWrList); /* First index is true if wr is found or empty list, second index is wr object */
    
            if (wr[0] != false) { /* if wr exists / has been found */
                console.log("wr != -1 = true");
                displayWrAddUpdate(wr[1]);
                addTabUpdateButton.disabled = false;
            } else {
                e.displayWrNotFoundAddUpdate(addTabNewWorkRequestNumber.value);
            }
        } else if (filterCheckboxAddPermit.checked == true) {
            const curWrNum = addTabNewWorkRequestNumber.value;

            let wr = getWr(curWrNum, allWrList);

            if (permitExists(curWrNum, allWrList) == true) {
                displayPermitAddUpdate(wr[1]);
            } else {
                e.displayPermitNotFoundAddUpdate(addTabNewWorkRequestNumber.value);

            }

        }
        
    })
    addTabAddButton.addEventListener("click", (event) => {
        console.log("Fired - Clicked add_tab_add_button");
        const e = new Error();
        const h = new Haptix();
        const wrTypeDDMenuCurrent = document.getElementById("wr_type_dd_menu_current").innerHTML;
        const generalStatusDDMenuCurrent = document.getElementById("general_status_dd_add_tab_current").innerHTML;
        const permitStatusDDMenuCurrent = document.getElementById("permit_status_dd_add_tab_row_1_current").innerHTML;
        const easementStatusDDMenuCurrent = document.getElementById("easement_status_dd_add_tab_current").innerHTML;

        console.log("testing here");
        console.log(document.getElementById("wr_type_dd_menu_current").innerHTML);

        if (filterCheckboxAddWr.checked == true) {
            if (getWr(addTabNewWorkRequestNumber.value, allWrList)[0] == true) { /* if wr exists */
                console.log("getWr(" + addTabNewWorkRequestNumber.value + ") == -1");

                e.displayWrAlreadyExistsAddUpdate(addTabNewWorkRequestNumber.value);
            } else if (addTabNewWorkRequestNumber.value.length != 8) {
                console.log("wr length != 8");

                e.displayInvalidWr(addTabNewWorkRequestNumber.value);
            } else if (addTabPriorityBox.value.length < 1) {
                console.log("Priority Number length < 1");

                e.displayInvalidPriorityNumber();
            } else if (wrTypeDDMenuCurrent == "Not Set") {
                console.log("No Wr Type Selected");

                e.displayInvalidWrType();
            } else if (filterCheckboxAddWr.checked && getWr(addTabNewWorkRequestNumber.value, allWrList)[0] == false) {
                const d = new Date();
                const tempDate = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();

                const wr = new workRequest(addTabNewWorkRequestNumber.value, addressLineTextfieldHouseNumber.value, 
                addressLineTextfieldStreetName.value, addressLineTextfieldCounty.value, addressLineTextfieldZip.value,
                addTabPriorityBox.value, pocTextboxOwnerName.value, pocTextboxOwnerNumber.value, pocTextboxOwnerEmail.value, 
                pocTextboxBuilderName.value, pocTextboxBuilderNumber.value, pocTextboxBuilderEmail.value, pocTextboxOtherName.value,
                pocTextboxOtherNumber.value, pocTextboxOtherEmail.value, wrTypeDDMenuCurrent, addTabWrCRD.value, addTabWrRCD.value, 
                generalStatusDDMenuCurrent, permitStatusDDMenuCurrent, easementStatusDDMenuCurrent, addTabWrCommentsToAdd.textContent, 
                customerContactedCheckboxYes.checked, tempDate);                                                                
                
                if (document.getElementById("temp_all_wr_list") == null) { // no wr's exists
                    allWrList[0] = wr;
                    console.log("wr added to empty list");

                    const tempAllWrList = document.createElement("tempAllWrList");
                    tempAllWrList.id = "temp_all_wr_list";
                    tempAllWrList.classList.add("hidden");
                    tempAllWrList.innerHTML = allWrList;

                    const allWrTab = document.getElementById("all_wr_tab");
                    allWrTab.insertAdjacentElement("beforeend", tempAllWrList);

                    console.log("allWrList added to internal list");

                    injectHTMLAllWrTabDisplay(allWrList, 0);
                    injectHTMLPermitsTabDisplay(allWrList, 0);
                } else { // at least 1 wr exists
                    allWrList[allWrList.length] = wr;

                    const tempAllWrList = document.getElementById("temp_all_wr_list");
                    tempAllWrList.innerHTML = allWrList;
                    console.log("allWrList added to internal list");

                    injectHTMLPermitsTabDisplay(allWrList, 0);
                    injectHTMLAllWrTabDisplay(allWrList, 0);
                }
                h.displayWrAdded(wr.workRequestNumber);
            }
        } else if (filterCheckboxAddPermit.checked == true) {
            /* need to add safety checks later */

            /* Can't get here, button is hidden */
        }
    })

            /* CRD RCD Checks */
        /* Add/Update Wr */
    addTabWrCRD.addEventListener("mouseout", (event) => {
        console.log("Changed - addTabWrCRD");

        const tempRcd = document.getElementById("date_add_tab_wr_rcd").value;
        const tempCrd = document.getElementById("date_add_tab_wr_crd").value;
        crdRcdCheck(tempCrd, tempRcd, "add", "one");
    }) 
    addTabWrRCD.addEventListener("mouseout", (event) => {
        console.log("Changed - addTabWrRCD");

        const tempRcd = document.getElementById("date_add_tab_wr_rcd").value;
        const tempCrd = document.getElementById("date_add_tab_wr_crd").value;
        crdRcdCheck(tempCrd, tempRcd, "add", "one");
    })
        /* Update Permit */
    addTabPermitCRD.addEventListener("mouseout", (event) => {
        console.log("Changed - addTabPermitCRD");

        const tempRcd = document.getElementById("date_add_tab_permit_rcd").value;
        const tempCrd = document.getElementById("date_add_tab_permit_crd").value;
        crdRcdCheck(tempCrd, tempRcd, "add", "two");
    }) 
    addTabPermitRCD.addEventListener("mouseout", (event) => {
        console.log("Changed - addTabPermitRCD");

        const tempRcd = document.getElementById("date_add_tab_permit_rcd").value;
        const tempCrd = document.getElementById("date_add_tab_permit_crd").value;
        crdRcdCheck(tempCrd, tempRcd, "add", "two");
    })

            /* Dropdown Containers */
        /* Add/Update Wr */
    addTabGeneralStatusContainer.addEventListener("click", (event) => {
        console.log("Fired - clicked addTabGeneralStatusContainer");

        const tempContent = document.getElementById("general_status_dd_add_tab_content");

        if (tempContent.style.display == 'none') {        
            tempContent.style.display = 'flex';
            tempContent.style.flexDirection = 'column';
            tempContent.style.border = '1px solid black';
            tempContent.style.marginTop = '310px';
        } else if (tempContent.style.display = 'flex' && event.target.innerHTML == "\\/") {
            tempContent.style.display = 'none';
        } else {
            if (event.target.innerHTML != "\\/" && tempContent.innerHTML.includes(event.target.innerHTML)) {
                const tempCurrent = document.getElementById("general_status_dd_add_tab_current");
                tempCurrent.innerHTML = event.target.innerHTML;

                    /* Hiding DDMenu Content */
                tempContent.style.display = 'none';
            }
        }
    })
    addTabWrTypeContainer.addEventListener("click", (event) => {
        console.log("Clicked - addTabWrTypeContainer");

        const tempContent = document.getElementById("wr_type_dd_content");

        if (tempContent.style.display == 'none') {
            tempContent.style.display = 'flex';
            tempContent.style.flexDirection = 'column';
            tempContent.style.border = '1px solid black';

            /* Below statement adjusts position of content box to above or below dd menu */
            if (1 <=3) {
                tempContent.style.marginTop = '280px';
                tempContent.style.width = '90px';
            } else {
                /* Will need to fill in when more than 3 work requests */
            }
        } else if (tempContent.style.display == 'flex' && event.target.innerHTML == "\\/") {
            tempContent.style.display = 'none';
        } else {
                if (event.target.innerHTML != "\\/" && tempContent.innerHTML.includes(event.target.innerHTML)) {
                    const tempCurrent = document.getElementById("wr_type_dd_menu_current");
                    tempCurrent.innerHTML = event.target.innerHTML;
            
                        /* Hiding DDMenu Content */
                    tempContent.style.display = 'none';
                }
        }
    })
    addTabPermitStatusContainer.addEventListener("click", (event) => {
        console.log("Clicked - addTabPermitStatusContainer");

        const tempContent = document.getElementById("permit_status_dd_add_tab_row_1_content");

        if (tempContent.style.display == 'none') {
            tempContent.style.display = 'flex';
            tempContent.style.flexDirection = 'column';
            tempContent.style.border = '1px solid black';

            /* Below statement adjusts position of content box to above or below dd menu */
            if (1 <=3) {
                tempContent.style.marginBottom = '440px';
                tempContent.style.width = '90px';
            } else {
                /* Will need to fill in when more than 3 work requests */
            }

        } else if (tempContent.style.display == 'flex' && event.target.innerHTML == "/\\") {
            tempContent.style.display = 'none';
        } else {
            if (event.target.innerHTML != "/\\" && tempContent.innerHTML.includes(event.target.innerHTML)) {
                const tempCurrent = document.getElementById("permit_status_dd_add_tab_row_1_current");
                tempCurrent.innerHTML = event.target.innerHTML;

                    /* Hiding DDMenu Content */
                tempContent.style.display = 'none';
            }
        }
    })
    addTabEasementStatusContainer.addEventListener("click", (event) => {
        console.log("Clicked - addTabEasementStatusContainer");

        const tempContent = document.getElementById("easement_status_dd_add_tab_content");

        if (tempContent.style.display == 'none') {
            tempContent.style.display = 'flex';
            tempContent.style.flexDirection = 'column';
            tempContent.style.border = '1px solid black';

            /* Below statement adjusts position of content box to above or below dd menu */
            if (1 <=3) {
                tempContent.style.marginBottom = '425px';
                tempContent.style.width = '90px';
            } else {
                /* Will need to fill in when more than 3 work requests */
            }

        } else if (tempContent.style.display == 'flex' && event.target.innerHTML == "/\\") {
            tempContent.style.display = 'none';
        } else {
            if (event.target.innerHTML != "/\\" && tempContent.innerHTML.includes(event.target.innerHTML)) {
                const tempCurrent = document.getElementById("easement_status_dd_add_tab_current");
                tempCurrent.innerHTML = event.target.innerHTML;

                    /* Hiding DDMenu Content */
                tempContent.style.display = 'none';
            }
        }
    })

        /* Update Permit */
    addTabAddPermitStatusContainer.addEventListener("click", (event) => {
        console.log("Clicked - addTabAddPermitStatusContainer");

        const tempContent = document.getElementById("permit_status_dd_add_tab_row_2_content");

        if (tempContent.style.display == 'none') { 
            tempContent.style.display = 'flex';
            tempContent.style.flexDirection = 'column';
            tempContent.style.border = '1px solid black';

                /* Below statement adjusts position of content box to above or below dd menu */
            if (1 <=3) {
                tempContent.style.marginTop = '395px';
                tempContent.style.width = '90px';
            } else {
                /* Will need to fill in when more than 3 work requests */
            }

        } else if (tempContent.style.display == 'flex' && event.target.innerHTML == "\\/") {
            tempContent.style.display = 'none';
        } else {
            if (event.target.innerHTML != "\\/" && tempContent.innerHTML.includes(event.target.innerHTML)) {
                const tempCurrent = document.getElementById("permit_status_dd_add_tab_row_2_current");
                tempCurrent.innerHTML = event.target.innerHTML;

                /* Hiding DDMenu Content */
                tempContent.style.display = 'none';
            }
        }
    })

        /* Customer Contacted Check Box Event Listeners */
    customerContactedCheckboxNo.addEventListener("click", (event) => {
        console.log("Fired - Clicked customer_contacted_checkbox_no");

        if (customerContactedCheckboxYes.checked) {
            customerContactedCheckboxYes.checked = false /* Unchecking "No" box */
        }
        addTabPriorityBox.value = "1";
    })
    customerContactedCheckboxYes.addEventListener("click", (event) => {
        console.log("Fired - Clicked customer_contacted_checkbox_yes");

        if (customerContactedCheckboxNo.checked) {
            customerContactedCheckboxNo.checked = false /* Unchecking "No" box */
        }
        addTabPriorityBox.value = "5";
    })
    
        /* Add Tab New Work Request Number Select When Clicked */
    addTabNewWorkRequestNumber.addEventListener("click", (event) => {
        console.log("Fired - clicked add_tab_new_work_request_number");

        if (event.target.value != null) {
            event.target.select();
        }
    })
    addTabNewWorkRequestNumber.addEventListener("change", (event) => {
        console.log("Entered - addTabNewWorkRequestNumberEventListener - listening to add get/add button");
        if (event.target.value.length == 8 && getWr(event.target.value, allWrList)[0] != false) { // The entered Wr exists
            addTabGetButton.disabled = false;
            addTabUpdateButton.disabled = true;
            addTabAddButton.disabled = true;
        } else if (event.target.value.length == 8) { // wr is not right length
            addTabAddButton.disabled = false;
            addTabGetButton.disabled = true;
            addTabUpdateButton.disabled = true;
        } else {
            addTabUpdateButton.disabled = true;
        }
    })

        /* Address Textfield  Inputs */
    addressLineTextfieldHouseNumber.addEventListener("click", (event) => {
        console.log("Fired - Clicked address_line_textfield_house_number");

        if (event.target.value != null) {
            event.target.select();
        } 
    })
    addressLineTextfieldStreetName.addEventListener("click", (event) => {
        console.log("Fired - Clicked address_line_textfield_stree_name");
        
        if (event.target.value != null) {
            event.target.select();
        } 
    })
    addressLineTextfieldCounty.addEventListener("click", (event) => {
        console.log("Fired - Clicked address_line_textfield_county");
        
        if (event.target.value != null) {
            event.target.select();
        } 
    })
    addressLineTextfieldZip.addEventListener("click", (event) => {
        console.log("Fired - Clicked address_line_textfield_zip");
        
        if (event.target.value != null) {
            event.target.select();
        } 
    })

            /* Comment Event Listeners */
        /* Add Tab Wr */
    addTabCommentsTextfield.addEventListener("input", (event) => {
            console.log("Input - add_tab_comments_textfield - " + event.target.value);
    
            addTabCommentsTextfieldInput = event.target.value;
    })
    addTabCommentsTextfield.addEventListener("click", (event) => {
            console.log("Fired - Clicked add_tab_comments_textfield");
    
            if (event.target.value != null) {
                event.target.select();
            } 
    })
    addTabCommentsAddButton.addEventListener("click", (event) => {
            console.log("Fired - Clicked add_tab_comments_add_button");
    
            injectHTMLAddTabWrComment(addTabCommentsTextfieldInput);
            addTabCommentsTextfield.value = "Type Comment Here";
           /* if (addTabWrCommentsToAdd.classList.contains("hidden")) {
                addTabWrCommentsToAdd.classList.remove("hidden");
            }*/
    
    })
    
        /* Add Tab Permit */
    addTabPermitCommentsTextfield.addEventListener("input", (event) => {
            console.log("Input - add_tab_permit_comments_textfield - " + event.target.value);
    
            addTabPermitCommentsTextfieldInput = event.target.value;
    })
    addTabPermitCommentsTextfield.addEventListener("click", (event) => {
            if (event.target.value != null) {
                event.target.select();
            }
    })
    addTabPermitCommentsAddButton.addEventListener("click", (event) => {
            console.log("Fired - Clicked add_tab_permit_comments_add_button");
    
            injectHTMLAddTabPermitComment(addTabPermitCommentsTextfieldInput);
            console.log("Testing gg");
            addTabPermitCommentsTextfield.value = "Type Comment Here";
    
    })

    /* FILTER COMPONENTS */     /* FILTER COMPONENTS */     /* FILTER COMPONENTS */     /* FILTER COMPONENTS */     /* FILTER COMPONENTS */
    

        /* Trim By Event Listeners */
    trimByNot7010.addEventListener("change", (event) => {
        console.log("Changed - trimByNot7010");

        if (trimByNot7010.checked == false) {
            trimByNot7010.checked = false;
            trimByAll.checked = true;
        } else {
            uncheckTrimByCheckboxes();
            trimByNot7010.checked = true;
        }

        if (filterCheckbox7010.checked == true) {
            filterCheckbox7010.checked = false;
            document.getElementById("filter_container_7010").style.backgroundColor = "white";
        }
    }) 
    trimBy7010.addEventListener("change", (event) => {
        console.log("Changed - trimBy7010");

        if (trimBy7010.checked == false) {
            trimBy7010.checked = false;
            filterCheckbox7010.checked = false;
            trimByAll.checked = true;
        } else {
            uncheckTrimByCheckboxes();
            trimBy7010.checked = true;
            filterCheckbox7010.checked = true;
        }
    })
    trimByAll.addEventListener("change", (event) => {
        console.log("Changed - trimByAll");

        if (trimByAll.checked == false) {
            trimByAll.checked = false;
            trimByNot7010.checked = true;
        } else {
            uncheckTrimByCheckboxes();
            trimByAll.checked = true;
        }
    })

            /* Checkboxes */
        /* Search By */
    searchBySelectionCheckbox.addEventListener("change", (event) => {
        console.log("Changed - searchBySelectionCheckbox");

        if (searchBySelectionCheckbox.checked == false) { 
            disableSearchBy();
            enableFilterBy();
            filterCheckboxPriorityNumber.checked = true;
        } else {
            enableSearchBy();
            disableFilterBy();
            searchByWrCheckbox.checked = true;
        }
    })
    searchByAddressCheckbox.addEventListener("change", (event) => {
        console.log("Changed - searchByAddressCheckbox");

        if (searchByAddressCheckbox.checked == false) {
            searchByAddressCheckbox.checked = false;
            searchByWrCheckbox.checked = true;
        } else {
            uncheckSearchByCheckboxes();
            searchByAddressCheckbox.checked = true;
        }
    })
    searchByWrCheckbox.addEventListener("change", (event) => {
        console.log("Changed - searchByWrCheckbox");

        if (searchByWrCheckbox.checked == false) {
            searchByWrCheckbox.checked = false;
            searchByAddressCheckbox.checked = true;
        } else {
            uncheckSearchByCheckboxes();
            searchByWrCheckbox.checked = true;
        }
    })

        /* Add Tab */
    filterCheckboxAddWr.addEventListener("change", (event) => {
            console.log("Fired - Clicked filterContainerAddWr");
    
            clearAddTabCheckboxes();
            filterCheckboxAddWr.checked = true;
            clearAddTabDisplays();
            addTabDisplayHeaderLabel.innerHTML = "\"Work Request\"";
            addTabDisplayWorkRequestNumberLabel.innerHTML = "New Work Request Number";
    
            /* Revealing add button */
            addTabAddButton.classList.remove("hidden");
            addTabDisplayAddWr.classList.remove("hidden");
    })
    filterCheckboxAddPermit.addEventListener("change", (event) => {
            console.log("Fired - Clicked filterContainerAddPermit");
    
            clearAddTabCheckboxes();
            filterCheckboxAddPermit.checked = true;
            
            clearAddTabDisplays();
            addTabDisplayHeaderLabel.innerHTML = "\"Permit\"";
            addTabDisplayWorkRequestNumberLabel.innerHTML = "Permit for Work Request Number";
           
            addTabDisplayAddPermit.classList.remove("hidden");
    
            /* Hiding add button */
            addTabAddButton.classList.add("hidden");
    })

        /* AllWr Tab*/
    filterBySelectionCheckbox.addEventListener("change", (event) => {
        console.log("Changed - filterBySelectionCheckbox");

        if (filterBySelectionCheckbox.checked == false) {
            enableSearchBy();
            disableFilterBy();
        } else {
            disableSearchBy();
            enableFilterBy();
        }
    })
    filterCheckboxWaitingLL.addEventListener("change", (event) => {
        console.log("Fired - changed - filterCheckboxWaitingLL - " );

        if (filterCheckboxWaitingLL.checked == false) {
            filterCheckboxWaitingLL.checked = false;
        } else {
            uncheckAllWrFilterCheckboxes();
            console.log("uncheckedAll");
            filterCheckboxWaitingLL.checked = true;
            console.log("checkedFilterCheckboxWaitingLL");
        }
        
    })
    filterCheckboxNeedToVisit.addEventListener("change", (event) => {
        console.log("Fired - changed - filterCheckboxNeedToVisit");

        if (filterCheckboxNeedToVisit.checked == false) {
            filterCheckboxNeedToVisit.checked = false;
        } else {
            uncheckAllWrFilterCheckboxes();
            filterCheckboxNeedToVisit.checked = true;
        }
    })
    filterCheckboxSvcCalcs.addEventListener("change", (event) => {
        console.log("Fired - changed - filterCheckboxSvcCalcs");

        if (filterCheckboxSvcCalcs.checked == false) {
            filterCheckboxSvcCalcs.checked = false;
        } else {
            uncheckAllWrFilterCheckboxes();
            filterCheckboxSvcCalcs.checked = true;
        }
        
    })
    filterCheckboxCheckPermit.addEventListener("change", (event) => {
        console.log("Fired - changed - filterCheckboxCheckPermit");

        if (filterCheckboxCheckPermit.checked == false) {
            filterCheckboxCheckPermit.checked = false;
        } else {
            uncheckAllWrFilterCheckboxes();
            filterCheckboxCheckPermit.checked = true;
        }
       
    })
    filterCheckboxCheckEasement.addEventListener("change", (event) => {
        console.log("Fired - changed - filterCheckboxCheckEasement");

        if (filterCheckboxCheckEasement.checked == false) {
            filterCheckboxCheckEasement.checekd = false;
        } else {
            uncheckAllWrFilterCheckboxes();
            filterCheckboxCheckEasement.checked = true;
        }
        
    })
    filterCheckboxDesign.addEventListener("change", (event) => {
        console.log("Fired - changed - filterCheckboxDesign");

        if (filterCheckboxDesign.checked == false) {
            filterCheckboxDesign.checked = false;
        } else {
            uncheckAllWrFilterCheckboxes();
            filterCheckboxDesign.checked = true;
        }
        
    })
    filterCheckboxReviewPeer.addEventListener("change", (event) => {
        console.log("Fired - changed - filterCheckboxReviewPeer");

        if (filterCheckboxReviewPeer.checked == false) {
            filterCheckboxReviewPeer.checked = false;
        } else {
            uncheckAllWrFilterCheckboxes();
            filterCheckboxReviewPeer.checked = true;
        }
        
    })
    filterCheckboxReviewCoordinator.addEventListener("change", (event) => {
        console.log("Fired - changed - filterCheckboxReviewCoordinator");

        if (filterCheckboxReviewCoordinator.checked == false) {
            filterCheckboxReviewCoordinator.checked = false;
        } else {
            uncheckAllWrFilterCheckboxes();
            filterCheckboxReviewCoordinator.checked = true;
        }
    })
    filterCheckboxRevisions.addEventListener("change", (event) => {
        console.log("Fired - changed - filterCheckboxRevisions");

        if (filterCheckboxRevisions.checked == false) {
            filterCheckboxRevisions.checked = false;
        } else {
            uncheckAllWrFilterCheckboxes();
            filterCheckboxRevisions.checked = true;
        }
    })
    filterCheckboxWaitingCustomerNotApproved.addEventListener("change", (event) => {
        console.log("Fired - changed - filterCheckboxWaitingOnCustomerNotApproved");

        if (filterCheckboxWaitingCustomerNotApproved.checked == false) {
            filterCheckboxWaitingCustomerNotApproved.checked = false;
        } else {
            uncheckAllWrFilterCheckboxes();
            filterCheckboxWaitingCustomerNotApproved.checked = true;
        }
    })
    filterCheckboxWaitingCustomerApproved.addEventListener("change", (event) => {
        console.log("Fired - changed - filterCheckboxWaitingOnCustomerApproved");

        if (filterCheckboxWaitingCustomerApproved.checked == false) {
            filterCheckboxWaitingCustomerApproved.checked = false;
        } else {
            uncheckAllWrFilterCheckboxes();
            filterCheckboxWaitingCustomerApproved.checked = true;
        }
    })
    filterCheckboxFlag.addEventListener("change", (event) => {
        console.log("Fired - changed - filterCheckboxFlag");

        if (filterCheckboxFlag.checked == false) {
            filterCheckboxFlag.checked = false;
        } else {
            uncheckAllWrFilterCheckboxes();
            filterCheckboxFlag.checked = true;
        }
    })
    filterCheckbox7010.addEventListener("change", (event) => {
        console.log("Fired - changed - filterCheckbox7010");

        if (filterCheckbox7010.checked == false) {
            filterCheckbox7010.checked = false;
            trimBy7010.checked = false;
            trimByAll.checked = true;
        } else {
            uncheckAllWrFilterCheckboxes();
            filterCheckbox7010.checked = true;
            uncheckTrimByCheckboxes();
            trimBy7010.checked = true;

            if (trimByNot7010.checked == true) {
                document.getElementById("footer_filter_checkbox_not_7010").style.backgroundColor = "white";
                document.getElementById("footer_filter_checkbox_not_7010").checked = false;
            }
        }
        
    })
    filterCheckboxCancledOther.addEventListener("change", (event) => {
        console.log("Fired - changed - filterCheckboxCancledOther");

        if (filterCheckboxCancledOther.checked == false) {
            filterCheckboxCancledOther.checked = false;
        } else {
            uncheckAllWrFilterCheckboxes();
            filterCheckboxCancledOther.checked = true;
        }
        
    })
    filterCheckboxPriorityNumber.addEventListener("change", (event) => {
        console.log("Fired - changed - filterCheckboxPriorityNumber");

        uncheckGenericFilterCheckboxes();
        filterCheckboxPriorityNumber.checked = true;
    })
    filterCheckboxCrd.addEventListener("change", (event) => {
        console.log("Fired - changed - filterCheckboxCrd");

        uncheckGenericFilterCheckboxes();
        filterCheckboxCrd.checked = true;
    })
    filterCheckboxRcd.addEventListener("change", (event) => {
        console.log("Fired - changed - filterCheckboxRcd");

        uncheckGenericFilterCheckboxes();
        filterCheckboxRcd.checked = true;
    })

        /* Permits Tab */
    filterCheckboxPermitApplied.addEventListener("change", (event) => {
        console.log("Changed - filterCheckboxPermitApplied");

        if (filterCheckboxPermitApplied.checked == true) {
            filterCheckboxPermitApplied.checked = false;
        } else {
            uncheckPermitsTabSpecificCheckboxes();
            filterCheckboxPermitApplied.checked = true;
        }
    })
    filterCheckboxPermitReceived.addEventListener("change", (event) => {
        console.log("Changed - filterCheckboxPermitReceived");

        if (filterCheckboxPermitReceived.checked == true) {
            filterCheckboxPermitReceived.checked = false;
        } else {
            uncheckPermitsTabSpecificCheckboxes();
            filterCheckboxPermitReceived.checked = true;
        }
    })
    filterCheckboxPermitExpiringSoon.addEventListener("change", (event) => {
        console.log("Changed - filterCheckboxPermitExpiringSoon");

        if (filterCheckboxPermitExpiringSoon.checked == true) {
            filterCheckboxPermitExpiringSoon.checked = false;
        } else {
            uncheckPermitsTabSpecificCheckboxes();
            filterCheckboxPermitExpiringSoon.checked = true;
        }
    })
    filterCheckboxPermitExpired.addEventListener("change", (event) => {
        console.log("Changed - filterCheckboxPermitExpired");

        if (filterCheckboxPermitExpired.checked == true) {
            filterCheckboxPermitExpired.checked = false;
        } else {
            uncheckPermitsTabSpecificCheckboxes();
            filterCheckboxPermitExpired.checked = true;
        }
    })
    filterCheckboxPermitExtensionSubmitted.addEventListener("change", (event) => {
        console.log("Changed - filterCheckboxPermitExtensionSubmitted");

        if (filterCheckboxPermitExtensionSubmitted.checked == true) {
            filterCheckboxPermitExtensionSubmitted.checked = false;
        } else {
            uncheckPermitsTabSpecificCheckboxes();
            filterCheckboxPermitExtensionSubmitted.checked = true;
        }
            
    })
    filterCheckboxPermitExtensionReceived.addEventListener("change", (event) => {
        console.log("Changed - filterCheckboxPermitExtensionReceived");

        if (filterCheckboxPermitExtensionReceived.checked == true) {
            filterCheckboxPermitExtensionReceived.checked = false;
        } else {
            uncheckPermitsTabSpecificCheckboxes();
            filterCheckboxPermitExtensionReceived.checked = true;
        }
    })
    filterCheckboxPermitDontNeed.addEventListener("change", (event) => {
        console.log("Changed - filterCheckboxPermitDontNeed");

        if (filterCheckboxPermitDontNeed.checked == true) {
            filterCheckboxPermitDontNeed.checked = false;
        } else {
            uncheckPermitsTabSpecificCheckboxes();
            filterCheckboxPermitDontNeed.checked = true;
        } 
    })
    filterCheckboxPermitHaventChecked.addEventListener("change", (event) => {
        console.log("Changed - filterCheckboxPermitHaventChecked");

        if (filterCheckboxPermitHaventChecked.checked == true) {
            filterCheckboxPermitHaventChecked.checked = false;
        } else {
            uncheckPermitsTabSpecificCheckboxes();
            filterCheckboxPermitHaventChecked.checked = true;
        } 
    })


    /* GLOBAL */        /* GLOBAL */        /* GLOBAL */        /* GLOBAL */        /* GLOBAL */        /* GLOBAL */        /* GLOBAL */

    /* Footer Buttons */
    footerButtonSync.addEventListener("click", (event) => {
        console.log("Fired - Clicked footerButtonSync");

        const tempStorage = document.getElementById("temp_storage").innerHTML;
        const tempList = parseWrString(tempStorage);

        for (let i = 0; i < tempList.length; i++) {
            allWrList[allWrList.length] = tempList[i];
        }
        footerButtonSync.classList.add("hidden");
        deselectAllTabs();
        document.getElementById('all_wr_tab').click();

        const tempAllWrList = document.createElement("tempAllWrList");


        tempAllWrList.classList.add("hidden");
        tempAllWrList.id = "temp_all_wr_list";
        tempAllWrList.innerHTML = allWrList;

        if (document.getElementById("temp_all_wr_list") == undefined) {
            document.getElementById('all_wr_tab').insertAdjacentElement("beforeend", tempAllWrList);
        }

    })
    footerButtonLoad.addEventListener("click", (event) => {
        console.log("Fired - Clicked footerButtonLoad");
                
        document.getElementById('allWrListFile').click();
    })
    footerButtonSave.addEventListener("click", (event) => {
        console.log("Fired - Clicked footer_save_button");
       
        const allWrListRaw = document.getElementById("temp_all_wr_list").innerHTML;
        const allWrList = parseWrString(allWrListRaw);

        saveFile(allWrList);
    })

            /* Tab Event Listeners */
        /* allWr Tab */
    allWrTab.addEventListener("click", (event) => {
        console.log("Fired - Clicked all_wr_tab");
       
        /* Deselecting all tabs */
        deselectAllTabs();

        /* Hiding inactive tab */
        allWrTab.classList.add("hidden");

        /* Revealing all_wr_tab features */
        allWrTabActive.classList.remove("hidden");
        filterByBoxContainer.classList.remove("hidden");
        searchByBoxContainer.classList.remove("hidden");
        trimContainer.classList.remove("hidden");
        trimContainerLabel.classList.remove("hidden");
        allWrDisplayContainer.classList.remove("hidden");

        allWrStatusFiltersContainer.classList.remove("hidden");
        filterSectionStatusLabel.classList.remove("hidden");

        /* Setting Page Defaults */
        filterCheckboxPriorityNumber.checked = true;
        trimByAll.checked = true;


        if (allWrList.length > 0) {
            injectHTMLAllWrTabDisplay(allWrList, currentPageAllWr);
            console.log("List updated");
        } else {
            console.log("List not updated.")
            console.log("allWrList.length = " + allWrList.length);
        }
    })
    allWrTabActive.addEventListener("click", (event) => {
        console.log("Fired - Clicked all_wr_tab_active");

        deselectAllWrTab();
    })

        /* add Tab */
    addTab.addEventListener("click", (event) => {
        console.log("Fired - Clicked add_tab");

        /* Deselecting all tabs */
        deselectAllTabs();

        /* Hiding inactive tab */
        addTab.classList.add("hidden");

        /* Revealing add_tab features */
        addTabActive.classList.remove("hidden");
        addDisplayContainer.classList.remove("hidden");
        addTabFilterLabelContainer.classList.remove("hidden");
        addTypeContainer.classList.remove("hidden");
    })
    addTabActive.addEventListener("click", (event) => {
        console.log("Fired - Clicked add_tab_active");

        deselectAllAddTab();
    })

    /* permits Tab */
    permitsTab.addEventListener("click", (event) => {
        console.log("Fired - Clicked permits_tab");

        /* Deselecting all tabs */
        deselectAllTabs();

        /* Hiding inactive tab */
        permitsTab.classList.add("hidden");

        /* Revealing permits_tab features */
        permitsTabActive.classList.remove("hidden");
        filterByBoxContainer.classList.remove("hidden");
        searchByBoxContainer.classList.remove("hidden");
        trimContainer.classList.remove("hidden");
        trimContainerLabel.classList.remove("hidden");
        permitStatusFiltersContainer.classList.remove("hidden");
        filterSectionStatusLabel.classList.remove("hidden");
        permitsDisplayContainer.classList.remove("hidden");

        /* Setting Page Defaults */
        filterCheckboxPriorityNumber.checked = true;
        trimByAll.checked = true;

        if (allWrList.length > 0) {
            injectHTMLPermitsTabDisplay(allWrList, currentPagePermits);
            console.log("List updated");
        } else {
            console.log("List not updated.")
            console.log("allWrList.length = " + allWrList.length);
        }
    })
    permitsTabActive.addEventListener("click", (event) => {
        console.log("Fired - clicked add_tab_active");

        deselectAllPermitsTab();
    })
}
document.addEventListener("DOMContentLoaded", async () => mainEvent());