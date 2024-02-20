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

class PermitStatusDDMenu {
    constructor(tab, rowNumber) {
        this.curOption = "Not Set";
        this.tab = tab;
        this.rowNumber = rowNumber;
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
        `<button type="button" class="permitStatusDDMenuButton" id="permit_status_dd_${this.rowNumber}_button">\\/</button>` + str.outerHTML;

        /*rowElement.addEventListener("mouseover", (event) => {
            console.log("Fired - moused over rowElement - " + this.rowNumber);

            const tempContent = document.getElementById("permit_status_dd_" + this.tab + "_tab_row_" + this.rowNumber + "_content");            

            tempContent.style.display = 'flex';
            tempContent.style.flexDirection = 'column';
            tempContent.style.border = '1px solid black';

            /* Below statement adjusts position of content box to above or below dd menu 
            if (this.rowNumber <= 3) {
                tempContent.style.marginTop = '410px';
            } else {
                /* Will need to fill in when more than 3 work requests 
            }
        
        })*/

        /*rowElement.addEventListener('click', (event) => {
            console.log("Fired - clicked rowElement - " + this.rowNumber);

            if (event.target.innerHTML != "\\/") {
                const tempCurrent = document.getElementById("permit_status_dd_" + this.tab + "_tab_row_" + this.rowNumber + "_current");
                tempCurrent.innerHTML = event.target.innerHTML;
    
                //const tempContent = document.getElementById("permit_status_dd_" + this.rowNumber + "_content");
            }
            
        })*/
        
        /*
        rowElement.addEventListener("mouseout", (event) => {
            console.log("Fired - moused off - " + this.rowNumber);

            /* Current value on page - not in list 
            const tempCurrent = document.getElementById("permit_status_dd_" + this.tab + "_tab_row_" + this.rowNumber + "_current");

            const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
            const curWrIndex = parseInt(((page - 1) * 3) + parseInt(this.rowNumber) - 1); // Will need to change when more rows

            /* Current allWrList 
            const allWrListRaw = document.getElementById("temp_all_wr_list").innerHTML;
            const allWrList = parseWrString(allWrListRaw);

            /* Current Wr 
            const currentWr = allWrList[curWrIndex];

            if (tempCurrent.innerHTML != currentWr.permit.permitStatus) {
                console.log("* Saving page to list *");

                /* Updating Status and List 
                currentWr.permit.permitStatus = tempCurrent.innerHTML;
                allWrList[curWrIndex] = currentWr;

                const tempAllWrList = document.getElementById("temp_all_wr_list");
                tempAllWrList.innerHTML = allWrList;

                console.log("* Internal List Updated *");
            }

            console.log("after if statement");

            /* Hiding DDMenu content 
            const tempContent = document.getElementById("permit_status_dd_" + this.tab + "_tab_row_" + this.rowNumber + "_content");
            tempContent.style.display = 'none';
        })*/
        

        return rowElement;

    }
}

class EasementStatusDDMenu {
    constructor(rowNumber) {
        this.curOption = "Not Set";
        this.rowNumber = rowNumber;
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

        rowElement.addEventListener("mouseover", (event) => {
            console.log("Fired - moused over rowElement - " + this.rowNumber);

            const tempButton = document.getElementById("easement_status_dd_" + this.rowNumber + "_button");
            const tempContent = document.getElementById("easement_status_dd_" + this.rowNumber + "_content");

            tempContent.style.display = 'flex';
            tempContent.style.flexDirection = 'column';
            tempContent.style.border = '1px solid black';

            /* Below statement adjusts position of content box to above or below dd menu */
            if (this.rowNumber <= 3) {
                tempContent.style.marginTop = '410px';
            } else {
                /* Will need to fill in when more than 3 work requests */
            }
        })

        rowElement.addEventListener('click', (event) => {
            console.log("Fired - clicked rowElement - " + this.rowNumber);

            if (event.target.innerHTML != "\\/") {
                const tempCurrent = document.getElementById("easement_status_dd_" + this.rowNumber + "_current");
                tempCurrent.innerHTML = event.target.innerHTML;

                const tempContent = document.getElementById("easement_status_dd_" + this.rowNumber + "_content");
            }
        })

        rowElement.addEventListener("mouseout", (event) => {
            console.log("Fired - moused off - " + this.rowNumber);

            /* Current value on page - not in list */
            const tempCurrent = document.getElementById("easement_status_dd_" + this.rowNumber + "_current");
           
            const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
            const curWrIndex = parseInt(((page - 1) * 3) + parseInt(this.rowNumber) - 1); // Will need to change when more rows

            /* Current allWrList */
            const allWrListRaw = document.getElementById("temp_all_wr_list").innerHTML;
            const allWrList = parseWrString(allWrListRaw);

            /* Current Wr */
            const currentWr = allWrList[curWrIndex];

            if (tempCurrent.innerHTML != currentWr.easementRequestStatus) {
                console.log("* Saving page to list * ");

                /* Updating Status and List */
                currentWr.easementRequestStatus = tempCurrent.innerHTML;
                allWrList[curWrIndex] = currentWr;

                const tempAllWrList = document.getElementById("temp_all_wr_list");
                tempAllWrList.innerHTML = allWrList;

                console.log("* Internal List Updated *");
            }

            console.log("after if statement");

            /* Hiding DDMenu content */
            const tempContent = document.getElementById("easement_status_dd_" + this.rowNumber + "_content");
            tempContent.style.display = 'none';
        })

        return rowElement;
    }

}

class GeneralStatusDDMenu {
    constructor(rowNumber) {
        this.curOption = "Not Set";
        this.rowNumber = rowNumber;
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
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"Check/ ApplyFor Permit"}</div>`);
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"Check/ ApplyFor Easement"}</div>`);
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"Design"}</div>`);
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"Review - Peer"}</div>`);
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"Review - Coordinator"}</div>`);
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"Revisions"}</div>`);
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"Waiting on Cust - Not Approved"}</div>`);
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

        /*rowElement.addEventListener("mouseover", (event) => {
            console.log("Fired - moused over rowElement - " + this.rowNumber);

            const tempButton = document.getElementById("general_status_dd_" + this.rowNumber + "_button");
            const tempContent = document.getElementById("general_status_dd_" + this.rowNumber + "_content");

            tempContent.style.display = 'flex';
            tempContent.style.flexDirection = 'column';
            tempContent.style.border = '1px solid black';

            /* Below statement adjusts position of content box to above or below dd menu 
            if (this.rowNumber <=3) {
                tempContent.style.marginTop = '650px';
            } else {
                /* Will need to fill in when more than 3 work requests 
            }
        })*/

        /*rowElement.addEventListener('click', (event) => {
            console.log("Fired - clicked rowElement - " + this.rowNumber);

            if (event.target.innerHTML != "\\/") {
                const tempCurrent = document.getElementById("general_status_dd_" + this.rowNumber + "_current");
                tempCurrent.innerHTML = event.target.innerHTML;

                const tempContent = document.getElementById("general_status_dd_" + this.rowNumber + "_content");
            }
        })*/

        rowElement.addEventListener("mouseout", (event) => {
            console.log("Fired - moused off - " + this.rowNumber);

            /* Current value on page - not in list */
            const tempCurrent = document.getElementById("general_status_dd_" + this.rowNumber + "_current");

            const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
            const curWrIndex = parseInt(((page - 1) * 3) + parseInt(this.rowNumber) - 1); // Will need to change when more rows

            console.log("Testing Here - curWrIndex =");
            console.log(curWrIndex);

            /* Current allWrList */
            const allWrListRaw = document.getElementById("temp_all_wr_list").innerHTML;
            const allWrList = parseWrString(allWrListRaw);

            /* Current Wr */
            const currentWr = allWrList[curWrIndex];

            if (tempCurrent.innerHTML != currentWr.generalStatus) {
                console.log("* Saving page to list *");

                /* Updating Status and List */
                currentWr.generalStatus = tempCurrent.innerHTML;
                allWrList[curWrIndex] = currentWr;

                const tempAllWrList = document.getElementById("temp_all_wr_list");
                tempAllWrList.innerHTML = allWrList;

                console.log("* Internal List Updated *");
            }

            console.log("after if statement");

            /* Hiding DDMenu Content */
            const tempContent = document.getElementById("general_status_dd_" + this.rowNumber + "_content");
            tempContent.style.display = 'none';
        })

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

        const temp = document.getElementById("add_tab_textfield_container_wr_type");
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
            this.permit = new Permit(workRequestNumber, permitStatus.trim(), "01-01-2024", "01-01-2024", "2", "01-01-2024", "01-01-2024", "01-01-2024", "01-01-2024", creationDate);
            this.easementRequestStatus = easementRequestStatus.trim();
            this.commentsGeneral = commentsGeneral;
            this.customerContacted = customerContacted;
            this.creationDate = creationDate;
        }

    wrAddressType() {
        console.log("Entered - wrAddressType()");

        console.log(this);
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
        console.log("Entered - Paginated - Constructor - List = " + list);
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

function setPermitRowValues(wr, rowNumber) {
    console.log("Entered - setPermitRowValues(" + wr + ", " + rowNumber + ")");
    console.log("wr =");
    console.log(wr);

    let rowNumberText = ""; //convertNumText(rowNumber);

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

    const startDate = document.getElementById("permits_tab_row_" + rowNumberText + "_start_date");
    startDate.value = formatDate(wr.permit.startDate);

    const endDate = document.getElementById("permits_tab_row_" + rowNumberText + "_end_date");
    endDate.value = formatDate(wr.permit.endDate);

    const crd = document.getElementById("permits_tab_row_" + rowNumberText + "_crd_date");
    //crd.value = formatDateNormal(wr.crd);
    crd.value = wr.crd;

    const rcd = document.getElementById("permits_tab_row_" + rowNumberText + "_rcd_date");
    //rcd.value = formatDateNormal(wr.rcd);
    rcd.value = wr.rcd;

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

function injectHTMLAllWrTabDisplay(allWrList, currentPageAllWr) {
    console.log("Entered - injectHTMLAllWrTabDisplay(allWrList, " + currentPageAllWr + ")");
    console.log("currentPageAllWr =");
    console.log(currentPageAllWr);

    const pag = new Paginated(allWrList);
    const pages = pag.getPages();

    hideAllWrRows();

    const tempAllWrList = document.getElementById("temp_all_wr_list");
    tempAllWrList.innerHTML = allWrList;

    for (var i = 0; i < pages[currentPageAllWr].content.length; i++) {
        
        console.log("testing hree");
        console.log("currentPageAllWr =")
        console.log(currentPageAllWr);
        console.log("pages = ");
        console.log(pages);
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

function setAllWrRowValues(wr, rowNumber) {
    console.log("Entered - setAllWrRowValues(" + wr + ", " + rowNumber + ")");
    console.log("wr = ");
    console.log(wr);

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
    
    const address = document.getElementById("all_wr_tab_row_" + rowNumberText + "_address");
    address.innerText = wr.wrAddressType();

    const crd = document.getElementById("all_wr_tab_row_" + rowNumberText + "_crd");
    crd.value = wr.crd;

    const rcd = document.getElementById("all_wr_tab_row_" + rowNumberText + "_rcd");
    rcd.value = wr.rcd;

    const generalStatus = document.getElementById("general_status_dd_" + rowNumber + "_current");
    generalStatus.innerText = wr.generalStatus;

    const toDos = document.getElementById("all_wr_tab_row_" + rowNumberText + "_to_dos");
    // Need to fill in when hooked up

    const permitStatus = document.getElementById("permit_status_dd_allWr_tab_row_" + rowNumber + "_current");
    
    permitStatus.innerText = wr.permit.permitStatus;

    const easementStatus = document.getElementById("easement_status_dd_" + rowNumber + "_current");
    easementStatus.innerText = wr.easementRequestStatus;

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
    console.log("ggg - " + temp);
    await writableStream.write(temp);
    await writableStream.close();

    
}

function readFile() {
    var selected = document.getElementById("allWrListFile").files[0];

    var reader = new FileReader();
    reader.addEventListener("loadend", function() {
        allWrList = parseWrString(reader.result);
        document.getElementById("load_save_buttons_container").insertAdjacentHTML("afterEnd", `<div class="hidden" id="temp_storage">${allWrList}</div>`);
        document.getElementById("footer_button_sync").classList.remove("hidden");
    });
    reader.readAsText(selected);
    
    console.log("testing here");
    console.log(allWrList);
    
}   

/* returns 0 if not found */
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

/* returns 0 if not found */
function getPermit(curPermitWrNum, allPermitsList) {
    console.log("Entered - getPermit(" + curPermitWrNum + ")");

    let permit = [];

    if (allPermitsList.length == 0) {
        console.log("empty list");
        permit[0] = false;
        return permit; /* Prevents error message on empty list */
    }

    for (var i = 0; i < allPermitsList.length; i++) {
        if (allPermitsList[i].workRequestNumber == curPermitWrNum) {
            permit[0] = true;
            permit[1] = allPermitsList[i];
            permit[2] = i;
            return permit;
        }
    }
    console.log("Permit not found");
    permit[0] = false;
    return permit;
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

function injectHTMLAddTabWrComment(comment) {
    console.log("Fired - injectHTMLAddTabWrComment");
    const target = document.querySelector("#add_tab_wr_comments_to_add");

    let temp = document.getElementById("add_tab_wr_comments_to_add");
    const count = temp.childNodes.length;

    if (count == 0) {
        target.classList.remove("hidden");
        target.innerHTML += `<li class="addTabWrCommentsListElement">${comment}</li>`;
    }

    if (count > 0) {
        const check = temp.childNodes[count - 1];
        console.log("from child nodes - last child - " + check.textContent);

        /* For some reason, i'm double clicking, so this prevents adding double comments.
           Duplicate comments can be input, just not back to back.*/
        if (check.textContent != comment) {
            target.innerHTML += `<li class="addTabWrCommentsListElement">${comment}</li>`;
        }
    }
}

function injectHTMLAddTabPermitComment(comment) {
    console.log("Fired - injectHTMLAddTabPermitComment");

    const target = document.querySelector("#add_tab_permit_comments_to_add");

    let temp = document.getElementById("add_tab_permit_comments_to_add");
    const count = temp.childNodes.length;

    if (count == 0) {
        target.classList.remove("hidden");
        target.innerHTML += `<li class=addTabPermitCommentsListElement">${comment}</li>`;
    }

    if (count > 0) {
        const check = temp.childNodes[count - 1];
        console.log("from child nodes - last child - " + check.textContent);

        /* For some reason, i'm double clicking, so this prevents adding double comments.
           Duplicate comments can be input, just not back to back.*/
        if (check.textContent != comment) {
            target.innerHTML += `<li class="addTabPermitCommentsListElement>${comment}</li>`;
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
    const seachByBoxContainer = document.querySelector("#seach_by_box_container");
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


        /* Dropdown Menu Boxes */
    const dropdownMenuBoxAddTabWrType = document.querySelector("#dropdown_menu_box_add_tab_wr_type");
    const dropdownMenuBoxAddTabGeneralStatus = document.querySelector("#dropdown_menu_box_add_tab_general_status");
    const dropdownMenuBoxAddTabPermitStatus = document.querySelector("#dropdown_menu_box_add_tab_permit_status");
    const dropdownMenuBoxAddTabEasementRequestStatus = document.querySelector("#dropdown_menu_box_add_tab_easement_request_status");

        /* Dropdown Menu Options */
            /* Add Tab Wr Type */
    const dropdownMenuOptionAddTabWrTypeDdi = document.querySelector("#dropdown_menu_option_add_tab_wr_type_ddi");
    const dropdownMenuOptionAddTabWrTypeDwfo = document.querySelector("#dropdown_menu_option_add_tab_wr_type_dwfo");
    const dropdownMenuOptionAddTabWrTypeDrio = document.querySelector("#dropdown_menu_option_add_tab_wr_type_drio");
    const dropdownMenuOptionAddTabWrTypeDriu = document.querySelector("#dropdown_menu_option_add_tab_wr_type_driu");
    const dropdownMenuOptionAddTabWrTypeDrnu = document.querySelector("#dropdown_menu_option_add_tab_wr_type_drnu");
    const dropdownMenuOptionAddTabWrTypeDrou = document.querySelector("#dropdown_menu_option_add_tab_wr_type_drou");
    const dropdownMenuOptionAddTabWrTypeDrno = document.querySelector("#dropdown_menu_option_add_tab_wr_type_drno");
    const dropdownMenuOptionAddTabWrTypeBlank =document.querySelector("#dropdown_menu_option_add_tab_wr_type_blank");

            /* Add Tab Wr General Status */
    const dropdownMenuOptionAddTabWrGeneralStatusBlank = document.querySelector("#dropdown_menu_option_add_tab_wr_general_status_blank");
    const dropdownMenuOptionAddTabWrGeneralStatusWaitingLL = document.querySelector("#dropdown_menu_option_add_tab_wr_general_status_waiting_ll");
    const dropdownMenuOptionAddTabWrGeneralStatusVisit = document.querySelector("#dropdown_menu_option_add_tab_wr_general_status_visit");
    const dropdownMenuOptionAddTabWrGeneralStatusServiceCalcs = document.querySelector("#dropdown_menu_option_add_tab_wr_general_status_service_calcs");
    const dropdownMenuOptionAddTabWrGeneralStatusCheckPermit = document.querySelector("#dropdown_menu_option_add_tab_wr_general_status_check_permit");
    const dropdownMenuOptionAddTabWrGeneralStatusCheckEasementRequest = document.querySelector("#dropdown_menu_option_add_tab_wr_general_status_check_easement_request");
    const dropdownMenuOptionAddTabWrGeneralStatusDesign = document.querySelector("#dropdown_menu_option_add_tab_wr_general_status_design");
    const dropdownMenuOptionAddTabWrGeneralStatusReviewPeer = document.querySelector("#dropdown_menu_option_add_tab_wr_general_status_review_peer");
    const dropdownMenuOptionAddTabWrGeneralStatusReviewCoordinator = document.querySelector("#dropdown_menu_option_add_tab_wr_general_status_review_coordinator");
    const dropdownMenuOptionAddTabWrGeneralStatusRevisions = document.querySelector("#dropdown_menu_option_add_tab_wr_general_status_revisions");
    const dropdownMenuOptionAddTabWrGeneralStatusWaitingCustomerNotApproved = document.querySelector("#dropdown_menu_option_add_tab_wr_general_status_waiting_customer_not_approved");
    const dropdownMenuOptionAddTabWrGeneralStatusWaitingCustomerApproved = document.querySelector("#dropdown_menu_option_add_tab_wr_general_status_waiting_customer_approved");
    const dropdownMenuOptionAddTabWrGeneralStatusFlag = document.querySelector("#dropdown_menu_option_add_tab_wr_general_status_flag");
    const dropdownMenuOptionAddTabWrGeneralStatus7010 = document.querySelector("#dropdown_menu_option_add_tab_wr_general_status_7010");
    const dropdownMenuOptionAddTabWrGeneralStatusCancle = document.querySelector("#dropdown_menu_option_add_tab_wr_general_status_cancled");

            /* Add Tab Wr Permit Status */
    const dropdownMenuOptionAddTabWrPermitStatusApplied = document.querySelector("#dropdown_menu_option_add_tab_wr_permit_status_applied");
    const dropdownMenuOptionAddTabWrPermitStatusReceived = document.querySelector("#dropdown_menu_option_add_tab_wr_permit_status_received");
    const dropdownMenuOptionAddTabWrPermitStatusExpiringSoon = document.querySelector("#dropdown_menu_option_add_tab_wr_permit_status_expiring_soon");
    const dropdownMenuOptionAddTabWrPermitStatusExpired = document.querySelector("#dropdown_menu_option_add_tab_wr_permit_status_expired");
    const dropdownMenuOptionAddTabWrPermitStatusExtensionSubmitted = document.querySelector("#dropdown_menu_option_add_tab_wr_permit_status_extension_submitted");
    const dropdownMenuOptionAddTabWrPermitStatusExtensionReceived = document.querySelector("#dropdown_menu_option_add_tab_wr_permit_status_extension_received");
    const dropdownMenuOptionAddTabWrPermitStatusDontNeed = document.querySelector("#dropdown_menu_option_add_tab_wr_permit_status_dont_need");
    const dropdownMenuOptionAddTabWrPermitStatusHaventChecked = document.querySelector("#dropdown_menu_option_add_tab_wr_permit_status_havent_checked");

            /* Add Tab Wr Easement Request Status */
    const dropdownMenuOptionAddTabWrEasementRequestStatusNeedSubmit = document.querySelector("#dropdown_menu_option_add_tab_wr_easement_request_status_need_submit");
    const dropdownMenuOptionAddTabWrEasementRequestStatusPending = document.querySelector("#dropdown_menu_option_add_tab_wr_easement_request_status_pending");
    const dropdownMenuOptionAddTabWrEasementRequestStatusDontNeed = document.querySelector("#dropdown_menu_option_add_tab_wr_easement_request_status_dont_need");
    const dropdownMenuOptionAddTabWrEasementRequestStatusHaveEasement = document.querySelector("#dropdown_menu_option_add_tab_wr_easement_request_status_have_easement");
    const dropdownMenuOptionAddTabWrEasementRequestStatusNeedEasement = document.querySelector("#dropdown_menu_option_add_tab_wr_easement_request_status_need_easement");
    const dropdownMenuOptionAddTabWrEasementRequestStatusWaitingCreation = document.querySelector("#dropdown_menu_option_add_tab_wr_easement_request_status_waiting_creation");
    const dropdownMenuOptionAddTabWrEasementRequestStatusWaitingCustomer = document.querySelector("#dropdown_menu_option_add_tab_wr_easement_request_status_waiting_customer");
    const dropdownMenuOptionAddTabWrEasementRequestStatusHaventChecked = document.querySelector("#dropdown_menu_option_add_tab_wr_easement_request_status_havent_checked");


        /* Dropdown Menu Box Options */
            /* Add Tab Wr Type */
    const dropdownMenuBoxOptionAddTabWrTypeDrnu = document.querySelector("#dropdown_menu_box_option_add_tab_wr_type_drnu");
    const dropdownMenuBoxOptionAddTabWrTypeDrou = document.querySelector("#dropdown_menu_box_option_add_tab_wr_type_drou");
    const dropdownMenuBoxOptionAddTabWrTypeDrno = document.querySelector("#dropdown_menu_box_option_add_tab_wr_type_drno");


            /* Add Tab Wr General Status */
    const dropdownMenuBoxOptionAddTabWrGeneralStatusBlank = document.querySelector("#dropdown_menu_box_option_add_tab_wr_general_status_blank");
    const dropdownMenuBoxOptionAddTabWrGeneralStatusWaitingLL = document.querySelector("#dropdown_menu_box_option_add_tab_wr_general_status_waiting_ll");
    const dropdownMenuBoxOptionAddTabWrGeneralStatusVisit = document.querySelector("#dropdown_menu_box_option_add_tab_wr_general_status_visit");
    const dropdownMenuBoxOptionAddTabWrGeneralStatusServiceCalcs = document.querySelector("#dropdown_menu_box_option_add_tab_wr_general_status_service_calcs");
    const dropdownMenuBoxOptionAddTabWrGeneralStatusCheckPermit = document.querySelector("#dropdown_menu_box_option_add_tab_wr_general_status_check_permit");
    const dropdownMenuBoxOptionAddTabWrGeneralStatusCheckEasementRequest = document.querySelector("#dropdown_menu_box_option_add_tab_wr_general_status_check_easement_request");
    const dropdownMenuBoxOptionAddTabWrGeneralStatusDesign = document.querySelector("#dropdown_menu_box_option_add_tab_wr_general_status_design");
    const dropdownMenuBoxOptionAddTabWrGeneralStatusReviewPeer = document.querySelector("#dropdown_menu_box_option_add_tab_wr_general_status_review_peer");
    const dropdownMenuBoxOptionAddTabWrGeneralStatusReviewCoordinator = document.querySelector("#dropdown_menu_box_option_add_tab_wr_general_status_review_coordinator");
    const dropdownMenuBoxOptionAddTabWrGeneralStatusRevisions = document.querySelector("#dropdown_menu_box_option_add_tab_wr_general_status_revisions");
    const dropdownMenuBoxOptionAddTabWrGeneralStatusWaitingCustomerNotApproved = document.querySelector("#dropdown_menu_box_option_add_tab_wr_general_status_waiting_customer_not_approved");
    const dropdownMenuBoxOptionAddTabWrGeneralStatusWaitingCustomerApproved = document.querySelector("#dropdown_menu_box_option_add_tab_wr_general_status_waiting_customer_approved");
    const dropdownMenuBoxOptionAddTabWrGeneralStatusFlag = document.querySelector("#dropdown_menu_box_option_add_tab_wr_general_status_flag");
    const dropdownMenuBoxOptionAddTabWrGeneralStatus7010 = document.querySelector("#dropdown_menu_box_option_add_tab_wr_general_status_7010");
    const dropdownMenuBoxOptionAddTabWrGeneralStatusCancle = document.querySelector("#dropdown_menu_box_option_add_tab_wr_general_status_cancled");

            /* Add Tab Wr Permit Status */
    const dropdownMenuBoxOptionAddTabWrPermitStatusApplied = document.querySelector("#dropdown_menu_box_option_add_tab_wr_permit_status_applied");
    const dropdownMenuBoxOptionAddTabWrPermitStatusReceived = document.querySelector("#dropdown_menu_box_option_add_tab_wr_permit_status_received");
    const dropdownMenuBoxOptionAddTabWrPermitStatusExpiringSoon = document.querySelector("#dropdown_menu_box_option_add_tab_wr_permit_status_expiring_soon");
    const dropdownMenuBoxOptionAddTabWrPermitStatusExpired = document.querySelector("#dropdown_menu_box_option_add_tab_wr_permit_status_expired");
    const dropdownMenuBoxOptionAddTabWrPermitStatusExtensionSubmitted = document.querySelector("#dropdown_menu_box_option_add_tab_wr_permit_status_extension_submitted");
    const dropdownMenuBoxOptionAddTabWrPermitStatusExtensionReceived = document.querySelector("#dropdown_menu_box_option_add_tab_wr_permit_status_extension_received");
    const dropdownMenuBoxOptionAddTabWrPermitStatusDontNeed = document.querySelector("#dropdown_menu_box_option_add_tab_wr_permit_status_dont_need");
    const dropdownMenuBoxOptionAddTabWrPermitStatusHaventChecked = document.querySelector("#dropdown_menu_box_option_add_tab_wr_permit_status_havent_checked");

            /* Add Tab Add Permit Status */
    const dropdownMenuOptionAddTabAddPermitStatusApplied = document.querySelector("#dropdown_menu_option_add_tab_add_permit_status_applied");
    const dropdownMenuOptionAddTabAddPermitStatusReceived = document.querySelector("#dropdown_menu_option_add_tab_add_permit_status_received");
    const dropdownMenuOptionAddTabAddPermitStatusExpiringSoon = document.querySelector("#dropdown_menu_option_add_tab_add_permit_status_expiring_soon");
    const dropdownMenuOptionAddTabAddPermitStatusExpired = document.querySelector("#dropdown_menu_option_add_tab_add_permit_status_expired");
    const dropdownMenuOptionAddTabAddPermitStatusExtensionSubmitted = document.querySelector("#dropdown_menu_option_add_tab_add_permit_status_extension_submitted");
    const dropdownMenuOptionAddTabAddPermitStatusExtensionReceived = document.querySelector("#dropdown_menu_option_add_tab_add_permit_status_extension_received");
    const dropdownMenuOptionAddTabAddPermitStatusDontNeed = document.querySelector("#dropdown_menu_option_add_tab_add_permit_status_dont_need");
    const dropdownMenuOptionAddTabAddPermitStatusHaventChecked = document.querySelector("#dropdown_menu_option_add_tab_add_permit_status_havent_checked");


            /* Add Tab Wr Easement Request Status */
    const dropdownMenuBoxOptionAddTabWrEasementRequestStatusNeedSubmit = document.querySelector("#dropdown_menu_box_option_add_tab_wr_easement_request_status_need_submit");
    const dropdownMenuBoxOptionAddTabWrEasementRequestStatusPending = document.querySelector("#dropdown_menu_box_option_add_tab_wr_easement_request_status_pending");
    const dropdownMenuBoxOptionAddTabWrEasementRequestStatusDontNeed = document.querySelector("#dropdown_menu_box_option_add_tab_wr_easement_request_status_dont_need");
    const dropdownMenuBoxOptionAddTabWrEasementRequestStatusHaveEasement = document.querySelector("#dropdown_menu_box_option_add_tab_wr_easement_request_status_have_easement");
    const dropdownMenuBoxOptionAddTabWrEasementRequestStatusNeedEasement = document.querySelector("#dropdown_menu_box_option_add_tab_wr_easement_request_status_need_easement");
    const dropdownMenuBoxOptionAddTabWrEasementRequestStatusWaitingCreation = document.querySelector("#dropdown_menu_box_option_add_tab_wr_easement_request_status_waiting_creation");
    const dropdownMenuBoxOptionAddTabWrEasementRequestStatusWaitingCustomer = document.querySelector("#dropdown_menu_box_option_add_tab_wr_easement_request_status_waiting_customer");
    const dropdownMenuBoxOptionAddTabWrEasementRequestStatusHaventChecked = document.querySelector("#dropdown_menu_box_option_add_tab_wr_easement_request_status_havent_checked");


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


    /* Dropdown Menus */
    const dropdownMenuAddTabWrType = document.querySelector("#dropdown_menu_add_tab_wr_type");
    const dropdownMenuAddTabWrGeneralStatus = document.querySelector("#dropdown_menu_add_tab_wr_general_status");
    const dropdownMenuAddTabWrPermitStatus = document.querySelector("#dropdown_menu_add_tab_wr_permit_status");
    const dropdownMenuAddTabWrEasementRequestStatus = document.querySelector("#dropdown_menu_add_tab_wr_easement_request_status");

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



    /* permitsTab Row Element Event Listeners */
        /* Priority Numbers */
    const permitsTabRowOnePriority = document.querySelector("#permits_tab_row_one_priority_textfield");
    const permitsTabRowTwoPriority = document.querySelector("#permits_tab_row_two_priority_textfield");
    const permitsTabRowThreePriority = document.querySelector("#permits_tab_row_three_priority_textfield");

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













    /* Variable */
    let addTabCommentsTextfieldInput = [];
    let addTabPermitCommentsTextfieldInput = [];
    let allWrList = [];
    let allPermitsList = [];
    let tempDate = [];
    let currentPageAllWr = 0;
    let currentPagePermits = 0;
    


    /* Adds all dropdowns */
    window.onload = function() {
        console.log("Entered - Window.onload function");

        /* All Wr Tab DDs */

            /* General Status DDs */
        let dd = new GeneralStatusDDMenu("1");
        let ddRow = dd.makeRowElement();
        allWrTabRowOneGeneralStatusContainer.insertAdjacentElement("beforeend", ddRow);

        dd = new GeneralStatusDDMenu("2");
        ddRow = dd.makeRowElement();
        allWrTabRowTwoGeneralStatusContainer.insertAdjacentElement("beforeend", ddRow);

        dd = new GeneralStatusDDMenu("3");
        ddRow = dd.makeRowElement();
        allWrTabRowThreeGeneralStatusContainer.insertAdjacentElement("beforeend", ddRow);

            /* Permit Status DDs */
        dd = new PermitStatusDDMenu("allWr", "1");
        ddRow = dd.makeRowElement();
        allWrTabRowOnePermitStatusContainer.insertAdjacentElement("beforeend", ddRow);

        dd = new PermitStatusDDMenu("allWr", "2");
        ddRow = dd.makeRowElement();
        allWrTabRowTwoPermitStatusContainer.insertAdjacentElement("beforeend", ddRow);

        dd = new PermitStatusDDMenu("allWr", "3");
        ddRow = dd.makeRowElement();
        allWrTabRowThreePermitStatusContainer.insertAdjacentElement("beforeend", ddRow);

            /* Easement Status DDs */
        dd = new EasementStatusDDMenu("1");
        ddRow = dd.makeRowElement();
        allWrTabRowOneEasementStatusContainer.insertAdjacentElement("beforeend", ddRow);

        dd = new EasementStatusDDMenu("2");
        ddRow = dd.makeRowElement();
        allWrTabRowTwoEasementStatusContainer.insertAdjacentElement("beforeend", ddRow);

        dd = new EasementStatusDDMenu("3");
        ddRow = dd.makeRowElement();
        allWrTabRowThreeEasementStatusContainer.insertAdjacentElement("beforeend", ddRow);

        /* Permit Tab DDs */

        dd = new PermitStatusDDMenu("permits", "1");
        ddRow = dd.makeRowElement();
        permitsTabRowOneStatusContainer.insertAdjacentElement("beforeend", ddRow);

        dd = new PermitStatusDDMenu("permits", "2");
        ddRow = dd.makeRowElement();
        permitsTabRowTwoStatusContainer.insertAdjacentElement("beforeend", ddRow);

        dd = new PermitStatusDDMenu("permits", "3");
        ddRow = dd.makeRowElement();
        permitsTabRowThreeStatusContainer.insertAdjacentElement("beforeend", ddRow);
    };

    filterGoButton.addEventListener("click", (event) => {
        console.log("Fired - clicked filterGoButton");

        let curAllWrList = assessSpecificStatus();

        if (curAllWrList == undefined) {
            /* Make an error to tell user no WR exists for the given filter or something */
        } else {
            let tempList = [];

            if (filterCheckboxPriorityNumber.checked == true) {
                uncolorGenericFilterCheckboxes();
                document.getElementById("filter_container_priority_number").style.backgroundColor = "rgba(87, 245, 43, 0.627)";
                tempList = quickSortPriorityNumber(curAllWrList);
                //allWrList = tempList;
                
            } else if (filterCheckboxCrd.checked == true) {
                uncolorGenericFilterCheckboxes();
                document.getElementById("filter_container_crd").style.backgroundColor = "rgba(87, 245, 43, 0.627)";
                tempList = quickSortCrd(curAllWrList);
                //allWrList = tempList;
            } else if (filterCheckboxRcd.checked == true) {
                uncolorGenericFilterCheckboxes();
                document.getElementById("filter_container_rcd").style.backgroundColor = "rgba(87, 245, 43, 0.627)";
                tempList = quickSortRcd(curAllWrList);
                //allWrList = tempList;
            }
    
            injectHTMLAllWrTabDisplay(tempList, 0);
            injectHTMLPermitsTabDisplay(tempList, 0)
            currentPageAllWr = 0;
            currentPagePermits = 0;
        }
        
        
    })

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
                    if (allWrList[i].generalStatus == "Check/ ApplyFor Permit") {
                        tempList.push(allWrList[i]);
                    }
                }
                return tempList;
            } else if (document.getElementById("filter_container_check_easement").checked == true) {
                uncolorAllWrFilterCheckboxes();
                document.getElementById("filter_container_check_easement").style.backgroundColor = "rgba(87, 245, 43, 0.627)"
                for (let i = 0; i < allWrList.length; i++) {
                    if (allWrList[i].generalStatus == "Check/ ApplyFor Easement") {
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
                    if (allWrList[i].generalStatus == "Waiting on Cust - Not Approved") {
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
                return allWrList;
            }
        } else if (document.getElementById("permits_tab").classList.contains("hidden")) {
            /* Fill in permit filters */
        } else { // nothing checked
                console.log("returning allWrList normal2");
                return allWrList;
        }
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

    /* allWrTab Row Element Event Listeners */
        /* Priority Numbers */
    allWrTabRowOnePriority.addEventListener("change", (event) => {
        console.log("Changed - allWrTabRowOnePriority changed to - " + event);

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * 3) + 2 - 1); // Will need to change when more rows

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
        /* CRDs */
    allWrTabRowOneCrd.addEventListener("change", (event) => {
        console.log("Changed - allWrTabRowOneCrd changed to - " + event);

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * 3) + 1 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        currentWr.crd = event.target.value;
        allWrList[curWrIndex] = currentWr;
    })
    allWrTabRowTwoCrd.addEventListener("change", (event) => {
        console.log("Changed - allWrTabRowTwoCrd changed to - " + event);

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * 3) + 2 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        currentWr.crd = event.target.value;
        allWrList[curWrIndex] = currentWr;
    })
    allWrTabRowThreeCrd.addEventListener("change", (event) => {
        console.log("Changed - allWrTabRowThreeCrd changed to - " + event);

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * 3) + 3 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        currentWr.crd = event.target.value;
        allWrList[curWrIndex] = currentWr;
    })
        /* RCDs */
    allWrTabRowOneRcd.addEventListener("change", (event) => {
        console.log("Changed - allWrTabRowOneRcd changed to - " + event);

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * 3) + 1 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        currentWr.rcd = event.target.value;
        allWrList[curWrIndex] = currentWr;
    })
    allWrTabRowTwoRcd.addEventListener("change", (event) => {
        console.log("Changed - allWrTabRowTwoRcd changed to - " + event);

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * 3) + 2 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        currentWr.rcd = event.target.value;
        allWrList[curWrIndex] = currentWr;
    })
    allWrTabRowThreeRcd.addEventListener("change", (event) => {
        console.log("Changed - allWrTabRowThreeRcd changed to - " + event);

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * 3) + 3 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        currentWr.rcd = event.target.value;
        allWrList[curWrIndex] = currentWr;
    })
        /* General Status DDs */
            /* mouseovers */
    allWrTabRowOneGeneralStatusContainer.addEventListener("mouseover", (event) => {
        console.log("Fired - moused over allWrTabRowOneGeneralStatus");

        const tempContent = document.getElementById("general_status_dd_1_content");

        tempContent.style.display = 'flex';
        tempContent.style.flexDirection = 'column';
        tempContent.style.border = '1px solid black';

        /* Below statement adjusts position of content box to above or below dd menu */
        if (1 <=3) {
            tempContent.style.marginTop = '325px';
        } else {
            /* Will need to fill in when more than 3 work requests */
        }
    })
    allWrTabRowTwoGeneralStatusContainer.addEventListener("mouseover", (event) => {
        console.log("Fired - moused over allWrTabRowTwoGeneralStatus");

        const tempContent = document.getElementById("general_status_dd_2_content");

        tempContent.style.display = 'flex';
        tempContent.style.flexDirection = 'column';
        tempContent.style.border = '1px solid black';

        /* Below statement adjusts position of content box to above or below dd menu */
        if (1 <=3) {
            tempContent.style.marginTop = '325px';
        } else {
            /* Will need to fill in when more than 3 work requests */
        }
    })
    allWrTabRowThreeGeneralStatusContainer.addEventListener("mouseover", (event) => {
        console.log("Fired - moused over allWrTabRowThreeGeneralStatus");

        const tempContent = document.getElementById("general_status_dd_3_content");

        tempContent.style.display = 'flex';
        tempContent.style.flexDirection = 'column';
        tempContent.style.border = '1px solid black';

        /* Below statement adjusts position of content box to above or below dd menu */
        if (1 <=3) {
            tempContent.style.marginTop = '325px';
        } else {
            /* Will need to fill in when more than 3 work requests */
        }
    })
            /* clicks */
    allWrTabRowOneGeneralStatusContainer.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowOneGeneralStatus");

        if (event.target.innerHTML != "\\/") {
            const tempCurrent = document.getElementById("general_status_dd_1_current");
            tempCurrent.innerHTML = event.target.innerHTML;

            const tempContent = document.getElementById("general_status_dd_1_content");
            //tempContent.style.display = 'none';
        }
    })
    allWrTabRowTwoGeneralStatusContainer.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowTwoGeneralStatus");

        if (event.target.innerHTML != "\\/") {
            const tempCurrent = document.getElementById("general_status_dd_2_current");
            tempCurrent.innerHTML = event.target.innerHTML;

            const tempContent = document.getElementById("general_status_dd_2_content");
            //tempContent.style.display = 'none';
        }
    })
    allWrTabRowThreeGeneralStatusContainer.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowThreeGeneralStatus");

        if (event.target.innerHTML != "\\/") {
            const tempCurrent = document.getElementById("general_status_dd_3_current");
            tempCurrent.innerHTML = event.target.innerHTML;

            const tempContent = document.getElementById("general_status_dd_3_content");
            //tempContent.style.display = 'none';
        }
    })
            /* mouseouts */
    allWrTabRowOneGeneralStatusContainer.addEventListener("mouseout", (event) => {
        console.log("Fired - moused off allWrTabRowOneGeneralStatus");

        /* Current value on page - not in list */
        const tempCurrent = document.getElementById("general_status_dd_1_current");

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * 3) + 1 - 1); // Will need to change when more rows

        /* Current Wr */
        let currentWr = allWrList[curWrIndex];

        if (tempCurrent.innerHTML != currentWr.generalStatus) {
            console.log("* Saving page to list *");

            /* Updating Status and List */
            currentWr.generalStatus = tempCurrent.innerHTML;
            allWrList[curWrIndex] = currentWr;

            console.log("* Internal List Updated *");
        }

        /* Hiding DDMenu Content */
        const tempContent = document.getElementById("general_status_dd_1_content");
        tempContent.style.display = 'none';
    })
    allWrTabRowTwoGeneralStatusContainer.addEventListener("mouseout", (event) => {
        console.log("Fired - moused off allWrTabRowTwoGeneralStatus");

        /* Current value on page - not in list */
        const tempCurrent = document.getElementById("general_status_dd_2_current");

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * 3) + 2 - 1); // Will need to change when more rows

        /* Current Wr */
        let currentWr = allWrList[curWrIndex];

        if (tempCurrent.innerHTML != currentWr.generalStatus) {
            console.log("* Saving page to list *");

            /* Updating Status and List */
            currentWr.generalStatus = tempCurrent.innerHTML;
            allWrList[curWrIndex] = currentWr;

            console.log("* Internal List Updated *");
        }

        /* Hiding DDMenu Content */
        const tempContent = document.getElementById("general_status_dd_2_content");
        tempContent.style.display = 'none';
    })
    allWrTabRowThreeGeneralStatusContainer.addEventListener("mouseout", (event) => {
        console.log("Fired - moused off allWrTabRowThreeGeneralStatus");

        /* Current value on page - not in list */
        const tempCurrent = document.getElementById("general_status_dd_3_current");

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * 3) + 3 - 1); // Will need to change when more rows

        /* Current Wr */
        let currentWr = allWrList[curWrIndex];

        if (tempCurrent.innerHTML != currentWr.generalStatus) {
            console.log("* Saving page to list *");

            /* Updating Status and List */
            currentWr.generalStatus = tempCurrent.innerHTML;
            allWrList[curWrIndex] = currentWr;

            console.log("* Internal List Updated *");
        }

        /* Hiding DDMenu Content */
        const tempContent = document.getElementById("general_status_dd_3_content");
        tempContent.style.display = 'none';
    })
        /* Permit Status DDs */
            /* mouseovers */
    allWrTabRowOnePermitStatusContainer.addEventListener("mouseover", (event) => {
        console.log("Fired - moused over allWrTabRowOnePermitStatus");

        const tempContent = document.getElementById("permit_status_dd_allWr_tab_row_1_content");

        tempContent.style.display = 'flex';
        tempContent.style.flexDirection = 'column';
        tempContent.style.border = '1px solid black';

        /* Below statement adjusts position of content box to above or below dd menu */
        if (1 <=3) {
            tempContent.style.marginTop = '400px';
        } else {
            /* Will need to fill in when more than 3 work requests */
        }
    })
    allWrTabRowTwoPermitStatusContainer.addEventListener("mouseover", (event) => {
        console.log("Fired - moused over allWrTabRowTwoPermitStatus");

        const tempContent = document.getElementById("permit_status_dd_allWr_tab_row_2_content");

        tempContent.style.display = 'flex';
        tempContent.style.flexDirection = 'column';
        tempContent.style.border = '1px solid black';

        /* Below statement adjusts position of content box to above or below dd menu */
        if (1 <=3) {
            tempContent.style.marginTop = '400px';
        } else {
            /* Will need to fill in when more than 3 work requests */
        }
    })
    allWrTabRowThreePermitStatusContainer.addEventListener("mouseover", (event) => {
        console.log("Fired - moused over allWrTabRowThreePermitStatus");

        const tempContent = document.getElementById("permit_status_dd_allWr_tab_row_3_content");

        tempContent.style.display = 'flex';
        tempContent.style.flexDirection = 'column';
        tempContent.style.border = '1px solid black';

        /* Below statement adjusts position of content box to above or below dd menu */
        if (1 <=3) {
            tempContent.style.marginTop = '400px';
        } else {
            /* Will need to fill in when more than 3 work requests */
        }
    })
            /* clicks */
    allWrTabRowOnePermitStatusContainer.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowOnePermitStatus");

        if (event.target.innerHTML != "\\/") {
            const tempCurrent = document.getElementById("permit_status_dd_allWr_tab_row_1_current");
            tempCurrent.innerHTML = event.target.innerHTML;

            const tempContent = document.getElementById("permit_status_dd_allWr_tab_row_1_content");
            //tempContent.style.display = 'none';
        }
    })
    allWrTabRowTwoPermitStatusContainer.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowTwoPermitStatus");

        if (event.target.innerHTML != "\\/") {
            const tempCurrent = document.getElementById("permit_status_dd_allWr_tab_row_2_current");
            tempCurrent.innerHTML = event.target.innerHTML;

            const tempContent = document.getElementById("permit_status_dd_allWr_tab_row_2_content");
            //tempContent.style.display = 'none';
        }
    })
    allWrTabRowThreePermitStatusContainer.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowThreePermitStatus");

        if (event.target.innerHTML != "\\/") {
            const tempCurrent = document.getElementById("permit_status_dd_allWr_tab_row_3_current");
            tempCurrent.innerHTML = event.target.innerHTML;

            const tempContent = document.getElementById("permit_status_dd_allWr_tab_row_3_content");
            //tempContent.style.display = 'none';
        }
    })
            /* mouseouts */
    allWrTabRowOnePermitStatusContainer.addEventListener("mouseout", (event) => {
        console.log("Fired - moused off allWrTabRowOnePermitStatus");

        /* Current value on page - not in list */
        const tempCurrent = document.getElementById("permit_status_dd_allWr_tab_row_1_current");

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * 3) + 1 - 1); // Will need to change when more rows

        /* Current Wr */
        let currentWr = allWrList[curWrIndex];

        if (tempCurrent.innerHTML != currentWr.permit.permitStatus) {
            console.log("* Saving page to list *");

            /* Updating Status and List */
            currentWr.permit.permitStatus = tempCurrent.innerHTML;
            allWrList[curWrIndex] = currentWr;

            console.log("* Internal List Updated *");
        }

        /* Hiding DDMenu Content */
        const tempContent = document.getElementById("permit_status_dd_allWr_tab_row_1_content");
        tempContent.style.display = 'none';
    })
    allWrTabRowTwoPermitStatusContainer.addEventListener("mouseout", (event) => {
        console.log("Fired - moused off allWrTabRowTwoPermitStatus");

        /* Current value on page - not in list */
        const tempCurrent = document.getElementById("permit_status_dd_allWr_tab_row_2_current");

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * 3) + 2 - 1); // Will need to change when more rows

        /* Current Wr */
        let currentWr = allWrList[curWrIndex];

        if (tempCurrent.innerHTML != currentWr.permit.permitStatus) {
            console.log("* Saving page to list *");

            /* Updating Status and List */
            currentWr.permit.permitStatus = tempCurrent.innerHTML;
            allWrList[curWrIndex] = currentWr;

            console.log("* Internal List Updated *");
        }

        /* Hiding DDMenu Content */
        const tempContent = document.getElementById("permit_status_dd_allWr_tab_row_2_content");
        tempContent.style.display = 'none';
    })
    allWrTabRowThreePermitStatusContainer.addEventListener("mouseout", (event) => {
        console.log("Fired - moused off allWrTabRowThreePermitStatus");

        /* Current value on page - not in list */
        const tempCurrent = document.getElementById("permit_status_dd_allWr_tab_row_3_current");

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * 3) + 3 - 1); // Will need to change when more rows

        /* Current Wr */
        let currentWr = allWrList[curWrIndex];

        if (tempCurrent.innerHTML != currentWr.permit.permitStatus) {
            console.log("* Saving page to list *");

            /* Updating Status and List */
            currentWr.permit.permitStatus = tempCurrent.innerHTML;
            allWrList[curWrIndex] = currentWr;

            console.log("* Internal List Updated *");
        }

        /* Hiding DDMenu Content */
        const tempContent = document.getElementById("permit_status_dd_allWr_tab_row_3_content");
        tempContent.style.display = 'none';
    })
        /* Easement Status DDs */
            /* mouseovers */
    allWrTabRowOneEasementStatusContainer.addEventListener("mouseover", (event) => {
        console.log("Fired - moused over allWrTabRowOneEasementStatus");

        const tempContent = document.getElementById("easement_status_dd_1_content");

        tempContent.style.display = 'flex';
        tempContent.style.flexDirection = 'column';
        tempContent.style.border = '1px solid black';

        /* Below statement adjusts position of content box to above or below dd menu */
        if (1 <=3) {
            tempContent.style.marginTop = '400px';
        } else {
            /* Will need to fill in when more than 3 work requests */
        }
    })
    allWrTabRowTwoEasementStatusContainer.addEventListener("mouseover", (event) => {
        console.log("Fired - moused over allWrTabRowTwoEasementStatus");

        const tempContent = document.getElementById("easement_status_dd_2_content");

        tempContent.style.display = 'flex';
        tempContent.style.flexDirection = 'column';
        tempContent.style.border = '1px solid black';

        /* Below statement adjusts position of content box to above or below dd menu */
        if (1 <=3) {
            tempContent.style.marginTop = '400px';
        } else {
            /* Will need to fill in when more than 3 work requests */
        }
    })
    allWrTabRowThreeEasementStatusContainer.addEventListener("mouseover", (event) => {
        console.log("Fired - moused over allWrTabRowThreeEasementStatus");

        const tempContent = document.getElementById("easement_status_dd_3_content");

        tempContent.style.display = 'flex';
        tempContent.style.flexDirection = 'column';
        tempContent.style.border = '1px solid black';

        /* Below statement adjusts position of content box to above or below dd menu */
        if (1 <=3) {
            tempContent.style.marginTop = '400px';
        } else {
            /* Will need to fill in when more than 3 work requests */
        }
    })
            /* clicks */
    allWrTabRowOneEasementStatusContainer.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowOneEasementStatus");

        if (event.target.innerHTML != "\\/") {
            const tempCurrent = document.getElementById("easement_status_dd_1_current");
            tempCurrent.innerHTML = event.target.innerHTML;

            const tempContent = document.getElementById("easement_status_dd_1_content");
            //tempContent.style.display = 'none';
        }
    })
    allWrTabRowTwoEasementStatusContainer.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowTwoEasementStatus");

        if (event.target.innerHTML != "\\/") {
            const tempCurrent = document.getElementById("easement_status_dd_2_current");
            tempCurrent.innerHTML = event.target.innerHTML;

            const tempContent = document.getElementById("easement_status_dd_2_content");
            //tempContent.style.display = 'none';
        }
    })
    allWrTabRowThreeEasementStatusContainer.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowThreeEasementStatus");

        if (event.target.innerHTML != "\\/") {
            const tempCurrent = document.getElementById("easement_status_dd_3_current");
            tempCurrent.innerHTML = event.target.innerHTML;

            const tempContent = document.getElementById("easement_status_dd_3_content");
            //tempContent.style.display = 'none';
        }
    })
            /* mouseouts */
    allWrTabRowOneEasementStatusContainer.addEventListener("mouseout", (event) => {
        console.log("Fired - moused off allWrTabRowOneEasementStatus");

        /* Current value on page - not in list */
        const tempCurrent = document.getElementById("easement_status_dd_1_current");

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * 3) + 1 - 1); // Will need to change when more rows

        /* Current Wr */
        let currentWr = allWrList[curWrIndex];

        if (tempCurrent.innerHTML != currentWr.easementRequestStatus) {
            console.log("* Saving page to list *");

            /* Updating Status and List */
            currentWr.easementRequestStatus = tempCurrent.innerHTML;
            allWrList[curWrIndex] = currentWr;

            console.log("* Internal List Updated *");
        }

        /* Hiding DDMenu Content */
        const tempContent = document.getElementById("easement_status_dd_1_content");
        tempContent.style.display = 'none';
    })
    allWrTabRowTwoEasementStatusContainer.addEventListener("mouseout", (event) => {
        console.log("Fired - moused off allWrTabRowTwoEasementStatus");

        /* Current value on page - not in list */
        const tempCurrent = document.getElementById("easement_status_dd_2_current");

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * 3) + 2 - 1); // Will need to change when more rows

        /* Current Wr */
        let currentWr = allWrList[curWrIndex];

        if (tempCurrent.innerHTML != currentWr.easementRequestStatus) {
            console.log("* Saving page to list *");

            /* Updating Status and List */
            currentWr.easementRequestStatus = tempCurrent.innerHTML;
            allWrList[curWrIndex] = currentWr;

            console.log("* Internal List Updated *");
        }

        /* Hiding DDMenu Content */
        const tempContent = document.getElementById("easement_status_dd_2_content");
        tempContent.style.display = 'none';
    })
    allWrTabRowThreeEasementStatusContainer.addEventListener("mouseout", (event) => {
        console.log("Fired - moused off allWrTabRowThreeEasementStatus");

        /* Current value on page - not in list */
        const tempCurrent = document.getElementById("easement_status_dd_3_current");

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * 3) + 3 - 1); // Will need to change when more rows

        /* Current Wr */
        let currentWr = allWrList[curWrIndex];

        if (tempCurrent.innerHTML != currentWr.easementRequestStatus) {
            console.log("* Saving page to list *");

            /* Updating Status and List */
            currentWr.easementRequestStatus = tempCurrent.innerHTML;
            allWrList[curWrIndex] = currentWr;

            console.log("* Internal List Updated *");
        }

        /* Hiding DDMenu Content */
        const tempContent = document.getElementById("easement_status_dd_3_content");
        tempContent.style.display = 'none';
    })

    /* permitsTab Row Element Event Listeners */
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
        /* CRDs */
    permitsTabRowOneCrd.addEventListener("change", (event) => {
        console.log("Changed - permitsTabRowOneCrd changed to - " + event);

        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * 3) + 2 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        currentWr.crd = event.target.value;
        allWrList[curWrIndex] = currentWr;
    })
    permitsTabRowTwoCrd.addEventListener("change", (event) => {
        console.log("Changed - permitsTabRowTwoCrd changed to - " + event);

        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * 3) + 2 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        currentWr.crd = event.target.value;
        allWrList[curWrIndex] = currentWr;
    })
    permitsTabRowThreeCrd.addEventListener("change", (event) => {
        console.log("Changed - permitsTabRowThreeCrd changed to - " + event);

        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * 3) + 3 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        currentWr.crd = event.target.value;
        allWrList[curWrIndex] = currentWr;
    })
        /* RCDs */
    permitsTabRowOneRcd.addEventListener("change", (event) => {
        console.log("Changed - permitsTabRowOneRcd changed to - " + event);

        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * 3) + 1 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        currentWr.rcd = event.target.value;
        allWrList[curWrIndex] = currentWr;
    })
    permitsTabRowTwoRcd.addEventListener("change", (event) => {
        console.log("Changed - permitsTabRowTwoRcd changed to - " + event);

        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * 3) + 2 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        currentWr.rcd = event.target.value;
        allWrList[curWrIndex] = currentWr;
    })
    permitsTabRowThreeRcd.addEventListener("change", (event) => {
        console.log("Changed - permitsTabRowThreeRcd changed to - " + event);

        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * 3) + 3 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        currentWr.rcd = event.target.value;
        allWrList[curWrIndex] = currentWr;
    })
    
        /* Permit Status DDs */
            /* mouseovers */
    permitsTabRowOneStatusContainer.addEventListener("mouseover", (event) => {
        console.log("Fired - moused over permitsTabRowOnePermitStatus");

        const tempContent = document.getElementById("permit_status_dd_permits_tab_row_1_content");

        tempContent.style.display = 'flex';
        tempContent.style.flexDirection = 'column';
        tempContent.style.border = '1px solid black';

        /* Below statement adjusts position of content box to above or below dd menu */
        if (1 <=3) {
            tempContent.style.marginTop = '400px';
        } else {
            /* Will need to fill in when more than 3 work requests */
        }
    })
    permitsTabRowTwoStatusContainer.addEventListener("mouseover", (event) => {
        console.log("Fired - moused over permitsTabRowTwoPermitStatus");

        const tempContent = document.getElementById("permit_status_dd_permits_tab_row_2_content");

        tempContent.style.display = 'flex';
        tempContent.style.flexDirection = 'column';
        tempContent.style.border = '1px solid black';

        /* Below statement adjusts position of content box to above or below dd menu */
        if (1 <=3) {
            tempContent.style.marginTop = '400px';
        } else {
            /* Will need to fill in when more than 3 work requests */
        }
    })
    permitsTabRowThreeStatusContainer.addEventListener("mouseover", (event) => {
        console.log("Fired - moused over permitsTabRowThreePermitStatus");

        const tempContent = document.getElementById("permit_status_dd_permits_tab_row_3_content");

        tempContent.style.display = 'flex';
        tempContent.style.flexDirection = 'column';
        tempContent.style.border = '1px solid black';

        /* Below statement adjusts position of content box to above or below dd menu */
        if (1 <=3) {
            tempContent.style.marginTop = '400px';
        } else {
            /* Will need to fill in when more than 3 work requests */
        }
    })
            /* clicks */
    permitsTabRowOneStatusContainer.addEventListener("click", (event) => {
        console.log("Fired - clicked permitsTabRowOnePermitStatus");
        
        if (event.target.innerHTML != "\\/") {
            const tempCurrent = document.getElementById("permit_status_dd_permits_tab_row_1_current");
            tempCurrent.innerHTML = event.target.innerHTML;
        
            const tempContent = document.getElementById("permit_status_dd_permits_tab_row_1_content");
            //tempContent.style.display = 'none';
        }
    })
    permitsTabRowTwoStatusContainer.addEventListener("click", (event) => {
        console.log("Fired - clicked permitsTabRowTwoPermitStatus");
        
        if (event.target.innerHTML != "\\/") {
            const tempCurrent = document.getElementById("permit_status_dd_permits_tab_row_2_current");
            tempCurrent.innerHTML = event.target.innerHTML;
        
            const tempContent = document.getElementById("permit_status_dd_permits_tab_row_2_content");
            //tempContent.style.display = 'none';
        }
    })
    permitsTabRowThreeStatusContainer.addEventListener("click", (event) => {
        console.log("Fired - clicked permitsTabRowThreePermitStatus");
        
        if (event.target.innerHTML != "\\/") {
            const tempCurrent = document.getElementById("permit_status_dd_permits_tab_row_3_current");
            tempCurrent.innerHTML = event.target.innerHTML;
        
            const tempContent = document.getElementById("permit_status_dd_permits_tab_row_3_content");
            //tempContent.style.display = 'none';
        }
    })
            /* mouseouts */
    permitsTabRowOneStatusContainer.addEventListener("mouseout", (event) => {
        console.log("Fired - moused off permitsTabRowOnePermitStatus");
        
        /* Current value on page - not in list */
        const tempCurrent = document.getElementById("permit_status_dd_permits_tab_row_1_current");
        
        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * 3) + 1 - 1); // Will need to change when more rows
        
        /* Current Wr */
        let currentWr = allWrList[curWrIndex];
        
        if (tempCurrent.innerHTML != currentWr.permit.permitStatus) {
            console.log("* Saving page to list *");
        
            /* Updating Status and List */
            currentWr.permit.permitStatus = tempCurrent.innerHTML;
            allWrList[curWrIndex] = currentWr;
        
            console.log("* Internal List Updated *");
        }
        
        /* Hiding DDMenu Content */
        const tempContent = document.getElementById("permit_status_dd_permits_tab_row_1_content");
        tempContent.style.display = 'none';
    })
    permitsTabRowTwoStatusContainer.addEventListener("mouseout", (event) => {
        console.log("Fired - moused off permitsTabRowTwoPermitStatus");
        
        /* Current value on page - not in list */
        const tempCurrent = document.getElementById("permit_status_dd_permits_tab_row_2_current");
        
        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * 3) + 2 - 1); // Will need to change when more rows
        
        /* Current Wr */
        let currentWr = allWrList[curWrIndex];
        
        if (tempCurrent.innerHTML != currentWr.permit.permitStatus) {
            console.log("* Saving page to list *");
        
            /* Updating Status and List */
            currentWr.permit.permitStatus = tempCurrent.innerHTML;
            allWrList[curWrIndex] = currentWr;
        
            console.log("* Internal List Updated *");
        }
        
        /* Hiding DDMenu Content */
        const tempContent = document.getElementById("permit_status_dd_permits_tab_row_2_content");
        tempContent.style.display = 'none';
    })
    permitsTabRowThreeStatusContainer.addEventListener("mouseout", (event) => {
        console.log("Fired - moused off permitsTabRowThreePermitStatus");
        
        /* Current value on page - not in list */
        const tempCurrent = document.getElementById("permit_status_dd_permits_tab_row_3_current");
        
        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * 3) + 3 - 1); // Will need to change when more rows
        
        /* Current Wr */
        let currentWr = allWrList[curWrIndex];
        
        if (tempCurrent.innerHTML != currentWr.permit.permitStatus) {
            console.log("* Saving page to list *");
        
            /* Updating Status and List */
            currentWr.permit.permitStatus = tempCurrent.innerHTML;
            allWrList[curWrIndex] = currentWr;
        
            console.log("* Internal List Updated *");
        }
        
        /* Hiding DDMenu Content */
        const tempContent = document.getElementById("permit_status_dd_permits_tab_row_3_content");
        tempContent.style.display = 'none';
    })
        /* Start Dates */
    permitsTabRowOneStartDate.addEventListener("change", (event) => {
        console.log("Changed - permitsTabRowOneStartDate changed to - " + event);

        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * 3) + 1 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        currentWr.permit.startDate = event.target.value;
        allWrList[curWrIndex] = currentWr;
    })
    permitsTabRowTwoStartDate.addEventListener("change", (event) => {
        console.log("Changed - permitsTabRowTwoStartDate changed to - " + event);

        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * 3) + 2 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        currentWr.permit.startDate = event.target.value;
        allWrList[curWrIndex] = currentWr;
    })
    permitsTabRowThreeStartDate.addEventListener("change", (event) => {
        console.log("Changed - permitsTabRowThreeStartDate changed to - " + event);

        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * 3) + 3 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        currentWr.permit.startDate = event.target.value;
        allWrList[curWrIndex] = currentWr;
    })
        /* End Dates */
    permitsTabRowOneEndDate.addEventListener("change", (event) => {
        console.log("Changed - permitsTabRowOneEndDate changed to - " + event);

        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * 3) + 1 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        currentWr.permit.endDate = event.target.value;
        allWrList[curWrIndex] = currentWr;
    })
    permitsTabRowTwoEndDate.addEventListener("change", (event) => {
        console.log("Changed - permitsTabRowTwoEndDate changed to - " + event);

        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * 3) + 2 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        currentWr.permit.endDate = event.target.value;
        allWrList[curWrIndex] = currentWr;
    })
    permitsTabRowThreeEndDate.addEventListener("change", (event) => {
        console.log("Changed - permitsTabRowThreeEndDate changed to - " + event);

        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * 3) + 3 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        currentWr.permit.endDate = event.target.value;
        allWrList[curWrIndex] = currentWr;
    })

    
    
    function displayPermitAddUpdate(wr) {
        console.log("Entered - displayPermitAddUpdate");

        addTabNewWorkRequestNumber.value = wr.workRequestNumber;
        dropdownMenuBoxAddTabPermitStatus.innerHTML = `<div class="smallText">${wr.permit.permitStatus}</div>`;
        addTabPermitDateSubmitted.value = formatDate(wr.permit.dateSubmitted);
        addTabPermitDateApplied.value = formatDate(wr.permit.dateApplied);
        addTabPermitPriority.value = wr.priorityNumber;
        addTabPermitCRD.value = formatDate(wr.crd);
        addTabPermitRCD.value = formatDate(wr.rcd);
        console.log("here");
        console.log(wr.permit);
        addTabPermitStart.value = formatDate(wr.permit.startDate);
        addTabPermitExpiration.value = formatDate(wr.permit.endDate);
        //addTabPermitWrCommentsToAdd = will fill in
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
        dropdownMenuBoxAddTabWrType.textContent = wr.wrType;
        addTabWrCRD.value = wr.crd;
        addTabWrRCD.value = wr.rcd;
        dropdownMenuAddTabWrGeneralStatus.textContent = wr.generalStatus;
        dropdownMenuAddTabWrPermitStatus.textContent = wr.permit.permitStatus;
        dropdownMenuAddTabWrEasementRequestStatus.textContent = wr.easementRequestStatus;
        addTabWrCommentsToAdd.textContent = wr.commentsGeneral
    
        if (wr.customerContacted) {
            customerContactedCheckboxYes.checked = true;
            customerContactedCheckboxNo.checked = false;
        } else {
            customerContactedCheckboxYes.checked = false;
            customerContactedCheckboxNo.checked = true;
        }
    
    }

    function displayWR(wr) {
        console.log("Entered - displayWR");
        console.log("workRequestNumber: " + wr.workRequestNumber);
        console.log("houseNumber: " + wr.houseNumber);
        console.log("generalStatus: " + wr.generalStatus);


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

    function clearAddTabDisplays() {
        console.log("Entered - clearAddTabDisplays");


        addTabDisplayAddWr.classList.add("hidden");
        addTabDisplayAddPermit.classList.add("hidden");
    }

    function uncolorGenericFilterCheckboxes() {
        console.log("Entered - uncolorGenericFlterCheckboxes");
        
        document.getElementById("filter_container_priority_number").style.backgroundColor = "white";
        document.getElementById("filter_container_crd").style.backgroundColor = "white";
        document.getElementById("filter_container_rcd").style.backgroundColor = "white";
    }

    function clearGenericFilterCheckboxes() {
        console.log("Entered - clearGenericFilterCheckboxes()");

        filterCheckboxPriorityNumber.checked = false;

        filterCheckboxCrd.checked = false;

        filterCheckboxRcd.checked = false;

        /* Will add more as i go */
    }

    filterCheckboxWaitingLL.addEventListener("change", (event) => {
        console.log("Fired - changed - filterCheckboxWaitingLL");

        if (filterCheckboxWaitingLL.checked == true) {
            filterCheckboxWaitingLL.checked = false;
        } else {
            uncheckAllWrFilterCheckboxes();
            filterCheckboxWaitingLL.checked = true;
        }
        
    })

    filterCheckboxNeedToVisit.addEventListener("change", (event) => {
        console.log("Fired - changed - filterCheckboxNeedToVisit");

        if (filterCheckboxNeedToVisit.checked == true) {
            filterCheckboxNeedToVisit.checked = false;
        } else {
            uncheckAllWrFilterCheckboxes();
            filterCheckboxNeedToVisit.checked = true;
        }
    })

    filterCheckboxSvcCalcs.addEventListener("change", (event) => {
        console.log("Fired - changed - filterCheckboxSvcCalcs");

        if (filterCheckboxSvcCalcs.checked == true) {
            filterCheckboxSvcCalcs.checked = false;
        } else {
            uncheckAllWrFilterCheckboxes();
            filterCheckboxSvcCalcs.checked = true;
        }
        
    })

    filterCheckboxCheckPermit.addEventListener("change", (event) => {
        console.log("Fired - changed - filterCheckboxCheckPermit");

        if (filterCheckboxCheckPermit.checked == true) {
            filterCheckboxCheckPermit.checked = false;
        } else {
            uncheckAllWrFilterCheckboxes();
            filterCheckboxCheckPermit.checked = true;
        }
       
    })

    filterCheckboxCheckEasement.addEventListener("change", (event) => {
        console.log("Fired - changed - filterCheckboxCheckEasement");

        if (filterCheckboxCheckEasement.checked == true) {
            filterCheckboxCheckEasement.checekd = false;
        } else {
            uncheckAllWrFilterCheckboxes();
            filterCheckboxCheckEasement.checked = true;
        }
        
    })

    filterCheckboxDesign.addEventListener("change", (event) => {
        console.log("Fired - changed - filterCheckboxDesign");

        if (filterCheckboxDesign.checked == true) {
            filterCheckboxDesign.checked = false;
        } else {
            uncheckAllWrFilterCheckboxes();
            filterCheckboxDesign.checked = true;
        }
        
    })

    filterCheckboxReviewPeer.addEventListener("change", (event) => {
        console.log("Fired - changed - filterCheckboxReviewPeer");

        if (filterCheckboxReviewPeer.checked == true) {
            filterCheckboxReviewPeer.checked = false;
        } else {
            uncheckAllWrFilterCheckboxes();
            filterCheckboxReviewPeer.checked = true;
        }
        
    })

    filterCheckboxReviewCoordinator.addEventListener("change", (event) => {
        console.log("Fired - changed - filterCheckboxReviewCoordinator");

        if (filterCheckboxReviewCoordinator.checked == true) {
            filterCheckboxReviewCoordinator.checked = false;
        } else {
            uncheckAllWrFilterCheckboxes();
            filterCheckboxReviewCoordinator.checked = true;
        }
    })

    filterCheckboxRevisions.addEventListener("change", (event) => {
        console.log("Fired - changed - filterCheckboxRevisions");

        if (filterCheckboxRevisions.checked == true) {
            filterCheckboxRevisions.checked = false;
        } else {
            uncheckAllWrFilterCheckboxes();
            filterCheckboxRevisions.checked = true;
        }
    })

    filterCheckboxWaitingCustomerNotApproved.addEventListener("change", (event) => {
        console.log("Fired - changed - filterCheckboxWaitingOnCustomerNotApproved");

        if (filterCheckboxWaitingCustomerNotApproved.checked == true) {
            filterCheckboxWaitingCustomerNotApproved.checked = false;
        } else {
            uncheckAllWrFilterCheckboxes();
            filterCheckboxWaitingCustomerNotApproved.checked = true;
        }
    })

    filterCheckboxWaitingCustomerApproved.addEventListener("change", (event) => {
        console.log("Fired - changed - filterCheckboxWaitingOnCustomerApproved");

        if (filterCheckboxWaitingCustomerApproved.checked == true) {
            filterCheckboxWaitingCustomerApproved.checked = false;
        } else {
            uncheckAllWrFilterCheckboxes();
            filterCheckboxWaitingCustomerApproved.checked = true;
        }
    })

    filterCheckboxFlag.addEventListener("change", (event) => {
        console.log("Fired - changed - filterCheckboxFlag");

        if (filterCheckboxFlag.checked == true) {
            filterCheckboxFlag.checked = false;
        } else {
            uncheckAllWrFilterCheckboxes();
            filterCheckboxFlag.checked = true;
        }
    })

    filterCheckbox7010.addEventListener("change", (event) => {
        console.log("Fired - changed - filterCheckbox7010");

        if (filterCheckbox7010.checked == true) {
            filterCheckbox7010.checked = false;
        } else {
            uncheckAllWrFilterCheckboxes();
            filterCheckbox7010.checked = true;
        }
        
    })

    filterCheckboxCancledOther.addEventListener("change", (event) => {
        console.log("Fired - changed - filterCheckboxCancledOther");

        if (filterCheckboxCancledOther.checked == true) {
            filterCheckboxCancledOther.checked = false;
        } else {
            uncheckAllWrFilterCheckboxes();
            filterCheckboxCancledOther.checked = true;
        }
        
    })

    filterCheckboxPriorityNumber.addEventListener("change", (event) => {
        console.log("Fired - changed - filterCheckboxPriorityNumber");

        clearGenericFilterCheckboxes();
        filterCheckboxPriorityNumber.checked = true;
    })

    filterCheckboxCrd.addEventListener("change", (event) => {
        console.log("Fired - changed - filterCheckboxCrd");

        clearGenericFilterCheckboxes();
        filterCheckboxCrd.checked = true;
    })

    filterCheckboxRcd.addEventListener("change", (event) => {
        console.log("Fired - changed - filterCheckboxRcd");

        clearGenericFilterCheckboxes();
        filterCheckboxRcd.checked = true;
    })

    /* Add Tab Checkboxes */

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
        /*deselectAllTabs();
        document.getElementById('all_wr_tab').click();*/
    })

    /* Load and Save Buttons */
    footerButtonSave.addEventListener("click", (event) => {
        console.log("Fired - Clicked footer_save_button");
       
        const allWrListRaw = document.getElementById("temp_all_wr_list").innerHTML;
        const allWrList = parseWrString(allWrListRaw);

        saveFile(allWrList);
    })
    
    /* Add Tab Buttons */

    addTabUpdateButton.addEventListener("click", (event) => {
        console.log("Fired - Clicked add_tab_update_button");

        if (filterCheckboxAddWr.checked == true) {
            const curWr = getWr(addTabNewWorkRequestNumber.value, allWrList);
            if (curWr[0] != false) {/* if wr exists/ has been found */
                const d = new Date();
                const tempDate = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
                const curWrIndex = curWr[2];
                const wr = new workRequest(addTabNewWorkRequestNumber.value, addressLineTextfieldHouseNumber.value, 
                    addressLineTextfieldStreetName.value, addressLineTextfieldCounty.value, addressLineTextfieldZip.value,
                    addTabPriorityBox.value, pocTextboxOwnerName.value, pocTextboxOwnerNumber.value, pocTextboxOwnerEmail.value, 
                    pocTextboxBuilderName.value, pocTextboxBuilderNumber.value, pocTextboxBuilderEmail.value, pocTextboxOtherName.value,
                    pocTextboxOtherNumber.value, pocTextboxOtherEmail.value, dropdownMenuBoxAddTabWrType.textContent, addTabWrCRD.value,
                    addTabWrRCD.value, dropdownMenuAddTabWrGeneralStatus.textContent, dropdownMenuAddTabWrPermitStatus.textContent,
                    dropdownMenuAddTabWrEasementRequestStatus.textContent, addTabWrCommentsToAdd.textContent, customerContactedCheckboxYes.checked,
                    tempDate);
                allWrList[curWrIndex] = wr;
                console.log("Work Request " + wr.workRequestNumber + " Updated");
            }
        } else if (filterCheckboxAddPermit.checked == true) {
            const curWrData = getWr(addTabNewWorkRequestNumber.value, allWrList);
            let curWr = curWrData[1];
            if (curWrData[0] != false) {
                const curWrIndex = curWrData[2];
                let newWr = new workRequest(curWr.workRequestNumber, curWr.addressLineTextfieldHouseNumber, curWr.addressLineTextfieldStreetName,
                    curWr.countyCity, curWr.zipCode, curWr.priorityNumber, curWr.ownerName, curWr.ownerNumber, curWr.ownerEmail, curWr.builderName,
                    curWr.builderNumber, curWr.builderEmail, curWr.otherName, curWr.otherNumber, curWr.otherEmail, curWr.wrType, curWr.crd,
                    curWr.rcd, curWr.generalStatus, curWr.permit.permitStatus, curWr.easementRequestStatus, curWr.commentsGeneral, 
                    curWr.customerContacted, curWr.creationDate);
                const permit = new Permit(addTabNewWorkRequestNumber.value, dropdownMenuBoxAddTabPermitStatus.textContent.trim(), 
                addTabPermitDateSubmitted.value, addTabPermitDateApplied.value, addTabPermitPriority.value, addTabPermitCRD.value, 
                addTabPermitRCD.value, addTabPermitStart.value, addTabPermitExpiration.value, tempDate);
                
                //const allWrListRaw = document.getElementById("temp_all_wr_list").innerHTML;
                //const allWrList = parseWrString(allWrListRaw);

                /* Prevents Double Add */
                if (getWr(curWr.workRequestNumber, allWrList)[0] == 0) {
                    console.log("In HERE");
                    allWrList[curWrIndex] = newWr;
                    console.log("Permit for Work Request " + curWr.workRequestNumber + " Updated");
                }

                //const tempAllWrList = document.getElementById("temp_all_wr_list");
                //tempAllWrList.innerHTML = allWrList;

                //console.log("test r test ");
                //console.log(allWrList);

                //injectHTMLAllWrTabDisplay(allWrList, );
                //console.log("allWrList added to internal list");

            }
        }
        
    })

    addTabGetButton.addEventListener("click", (event) => {
        console.log("Fired - Clicked add_tab_get_button");
        const e = new Error();

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

            /*
            if (wr[0] != false) {
                console.log("wr != 1 = true");
                displayPermitAddUpdate(wr[1]);
            } else {
                e.displayPermitNotFoundAddUpdate(addTabNewWorkRequestNumber.value);
            }
            */
        }
        
    })

    addTabAddButton.addEventListener("click", (event) => {
        console.log("Fired - Clicked add_tab_add_button");
        const e = new Error();

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
            } else if (dropdownMenuBoxAddTabWrType.textContent.length < 1) {
                console.log("No Wr Type Selected");

                e.displayInvalidWrType();
            } else if (filterCheckboxAddWr.checked && getWr(addTabNewWorkRequestNumber.value, allWrList)[0] == false) {
                const d = new Date();
                const tempDate = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();

                const wr = new workRequest(addTabNewWorkRequestNumber.value, addressLineTextfieldHouseNumber.value, 
                addressLineTextfieldStreetName.value, addressLineTextfieldCounty.value, addressLineTextfieldZip.value,
                addTabPriorityBox.value, pocTextboxOwnerName.value, pocTextboxOwnerNumber.value, pocTextboxOwnerEmail.value, 
                pocTextboxBuilderName.value, pocTextboxBuilderNumber.value, pocTextboxBuilderEmail.value, pocTextboxOtherName.value,
                pocTextboxOtherNumber.value, pocTextboxOtherEmail.value, dropdownMenuBoxAddTabWrType.textContent, addTabWrCRD.value,
                addTabWrRCD.value, dropdownMenuAddTabWrGeneralStatus.textContent, dropdownMenuAddTabWrPermitStatus.textContent,
                dropdownMenuAddTabWrEasementRequestStatus.textContent, addTabWrCommentsToAdd.textContent, customerContactedCheckboxYes.checked,
                tempDate);                                                                
                
                if (document.getElementById("temp_all_wr_list") == null) { // no wr's exists
                    let allWrList = [];

                    allWrList[0] = wr;
                    console.log("wr added to empty list");

                    const tempAllWrList = document.createElement("tempAllWrList");
                    tempAllWrList.id = "temp_all_wr_list";
                    tempAllWrList.classList.add("hidden");
                    tempAllWrList.innerHTML = allWrList;

                    const allWrTab = document.getElementById("all_wr_tab");
                    allWrTab.insertAdjacentElement("beforeend", tempAllWrList);

                    console.log("allWrList added to internal list");

                    injectHTMLAllWrTabDisplay(allWrList,0);
                } else { // at least 1 wr exists
                    const allWrListRaw = document.getElementById("temp_all_wr_list").innerHTML; 
                    let allWrList = parseWrString(allWrListRaw);
    
                    /* Prevents Double Add */
                    if (getWr(wr.workRequestNumber, allWrList)[0] == 0) {
                        allWrList[allWrList.length] = wr;
                        console.log("wr added to list");
                    }
                    
                    const tempAllWrList = document.getElementById("temp_all_wr_list");
                    tempAllWrList.innerHTML = allWrList;
                    console.log("allWrList added to internal list");
    
                    console.log("I AM Here");
                    console.log(allWrList);
    
                    //allWrList[allWrList.length] = wr;
                    injectHTMLAllWrTabDisplay(allWrList, 0);
                    console.log("new allWrList =");
                    console.log(allWrList);
                }
                

                const temp = document.getElementById("add_tab_display_top_mid");

                temp.insertAdjacentHTML("afterbegin", `<div class="wrAddedPrompt" id="wr_added_prompt">Work Request ${wr.workRequestNumber} added</li>`);
                setTimeout(() => {
                    const temp = document.getElementById("wr_added_prompt");
                    temp.remove();
                }, 3000);

            }
        } else if (filterCheckboxAddPermit.checked == true) {
            /* need to add safety checks later */

            if (getPermit(addTabNewWorkRequestNumber.value, allPermitsList)[0] == true) {
                console.log("getPermit(" + addTabNewWorkRequestNumber.value + ")" == -1);

                e.displayPermitAlreadyExistsAddUpdate(addTabNewWorkRequestNumber.value);
            } else if (addTabNewWorkRequestNumber.value.length != 8) {
                console.log("wr number != 8");

                e.displayInvalidWr(addTabNewWorkRequestNumber.value);
            } else if(addTabPermitPriority.value.length < 1) {
                console.log("Priority Number length < 1");

                e.displayInvalidPriorityNumberPermit();
            } else if(filterCheckboxAddPermit.checked && getPermit(addTabNewWorkRequestNumber.value, allPermitsList)[0] == false) {
                
                
                /* CANT GET HERE - ADD BUTTON HIDDEN */
                
                const d = new Date();
                const tempDate = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();

                const permit = new Permit(addTabNewWorkRequestNumber.value, dropdownMenuBoxAddTabPermitStatus.textContent.trim(), 
                addTabPermitDateSubmitted.value, addTabPermitDateApplied.value, addTabPermitPriority.value, addTabPermitCRD.value, 
                addTabPermitRCD.value, addTabPermitStart.value, addTabPermitExpiration.value, tempDate);

                permit.linkWR(allWrList);

                allPermitsList[allPermitsList.length] = permit;

                injectHTMLPermitsTabDisplay(allPermitsList, 0);

                const temp = document.getElementById("add_tab_display_top_mid");

               

                temp.insertAdjacentHTML("afterbegin", `<div class="permitAddedPrompt" id="permit_added_prompt">Permit for Work Request ${permit.workRequestNumber} added</li>`);
                setTimeout(() => {
                    const temp = document.getElementById("permit_added_prompt");
                    temp.remove();
                }, 3000);
            }
        }
    })

    addTabNewWorkRequestNumber.addEventListener("change", (event) => {
        console.log("Entered - addTabNewWorkRequestNumberEventListener - listening to add get/add button");
        if (event.target.value.length == 8 && getWr(event.target.value, allWrList)[0] != false) {
            addTabGetButton.disabled = false;
            addTabUpdateButton.disabled = true;
            addTabAddButton.disabled = true;
        } else if (event.target.value.length == 8) {
            addTabAddButton.disabled = false;
            addTabGetButton.disabled = true;
            addTabUpdateButton.disabled = true;
        } else {
            addTabUpdateButton.disabled = true;
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

        /* Dropdowns */
    function clearDropdownMenuBoxAddTabWrType() {
        console.log("Entered - clearDropdownMenuBoxAddTabWrType");

        dropdownMenuBoxAddTabWrType.innerHTML = "";
    }

            /* Easement Request Status Dropdowns */
    function clearDropdownMenuBoxAddTabWrEasementRequest() {
        console.log("Entered - clearDropdownMenuBoxAddTabWrEasementRequest");

        dropdownMenuAddTabWrEasementRequestStatus.innerHTML = "";    
    }

    dropdownMenuOptionAddTabWrEasementRequestStatusWaitingCreation.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_easement_request_status_waiting_creation");
        clearDropdownMenuBoxAddTabWrEasementRequest();

        dropdownMenuAddTabWrEasementRequestStatus.innerHTML = "Waiting - Creation";    
    })

    dropdownMenuOptionAddTabWrEasementRequestStatusWaitingCustomer.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_easement_request_status_waiting_customer");
        clearDropdownMenuBoxAddTabWrEasementRequest();

        dropdownMenuAddTabWrEasementRequestStatus.innerHTML = "Waiting - Customer";    
    })

    dropdownMenuOptionAddTabWrEasementRequestStatusNeedEasement.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_easement_request_status_need_easement");
        clearDropdownMenuBoxAddTabWrEasementRequest();

        dropdownMenuAddTabWrEasementRequestStatus.innerHTML = "Need Easement";    
    })

    dropdownMenuOptionAddTabWrEasementRequestStatusHaveEasement.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_easement_request_status_have_easement");
        clearDropdownMenuBoxAddTabWrEasementRequest();

        dropdownMenuAddTabWrEasementRequestStatus.innerHTML = "Have Easement";    
    })

    dropdownMenuOptionAddTabWrEasementRequestStatusDontNeed.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_easement_request_status_dont_need");
        clearDropdownMenuBoxAddTabWrEasementRequest();

        dropdownMenuAddTabWrEasementRequestStatus.innerHTML = "Don't Need";    
    })

    dropdownMenuOptionAddTabWrEasementRequestStatusPending.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_easement_request_status_pending");
        clearDropdownMenuBoxAddTabWrEasementRequest();

        dropdownMenuAddTabWrEasementRequestStatus.innerHTML = "Pending";    
    })

    dropdownMenuOptionAddTabWrEasementRequestStatusNeedSubmit.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_easement_request_status_need_submit");
        clearDropdownMenuBoxAddTabWrEasementRequest();

        dropdownMenuAddTabWrEasementRequestStatus.innerHTML = "Need to Submit";    
    })

    dropdownMenuOptionAddTabWrEasementRequestStatusHaventChecked.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_easement_request_status_havent_checked");
        clearDropdownMenuBoxAddTabWrEasementRequest();

        dropdownMenuAddTabWrEasementRequestStatus.innerHTML = "Haven't Checked";    
    })

            /* Permit Status Dropdowns */
    function clearDropdownMenuBoxAddTabWrPermitStatus() {
        console.log("Entered - clearDropdownMenuBoxAddTabWrPermitStatus");
        
        dropdownMenuAddTabWrPermitStatus.innerHTML = "";
    }

    function clearDropdownMenuBoxAddTabAddPermitStatus() {
        console.log("Entered - clearDropdownMenuBoxAddTabAddPermitStatus");

        dropdownMenuBoxAddTabPermitStatus.innerHTML = "";
    }

                /* Add WR Tab */
    dropdownMenuOptionAddTabWrPermitStatusHaventChecked.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_permit_status_havent_checked");
        clearDropdownMenuBoxAddTabWrPermitStatus();

        dropdownMenuAddTabWrPermitStatus.innerHTML = "Haven't Checked";
    })

    dropdownMenuOptionAddTabWrPermitStatusDontNeed.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_permit_status_dont_need");
        clearDropdownMenuBoxAddTabWrPermitStatus();

        dropdownMenuAddTabWrPermitStatus.innerHTML = "Don't Need";
    })

    dropdownMenuOptionAddTabWrPermitStatusExtensionReceived.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_permit_status_extension_received");
        clearDropdownMenuBoxAddTabWrPermitStatus();

        dropdownMenuAddTabWrPermitStatus.innerHTML = "Extension Received";
    })

    dropdownMenuOptionAddTabWrPermitStatusExtensionSubmitted.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_permit_status_extension_submitted");
        clearDropdownMenuBoxAddTabWrPermitStatus();

        dropdownMenuAddTabWrPermitStatus.innerHTML = "Extension Submitted";
    })

    dropdownMenuOptionAddTabWrPermitStatusExpired.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_permit_status_expired");
        clearDropdownMenuBoxAddTabWrPermitStatus();

        dropdownMenuAddTabWrPermitStatus.innerHTML = "Expired";
    })

    dropdownMenuOptionAddTabWrPermitStatusExpiringSoon.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_permit_status_expiring_soon");
        clearDropdownMenuBoxAddTabWrPermitStatus();

        dropdownMenuAddTabWrPermitStatus.innerHTML = "Expiring Soon";
    })
   
    dropdownMenuOptionAddTabWrPermitStatusReceived.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_permit_status_received");
        clearDropdownMenuBoxAddTabWrPermitStatus();

        dropdownMenuAddTabWrPermitStatus.innerHTML = "Received";
    })

    dropdownMenuOptionAddTabWrPermitStatusApplied.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_permit_status_applied");
        clearDropdownMenuBoxAddTabWrPermitStatus();

        dropdownMenuAddTabWrPermitStatus.innerHTML = "Applied";
    })

                /* Add Permit Tab */
    dropdownMenuOptionAddTabAddPermitStatusHaventChecked.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_add_permit_status_havent_checked");

        clearDropdownMenuBoxAddTabAddPermitStatus();

        dropdownMenuBoxAddTabPermitStatus.innerHTML = `<div class="smallText">${"Haven't Checked"}</div>`;

    })

    dropdownMenuOptionAddTabAddPermitStatusDontNeed.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_add_permit_status_dont_need");

        clearDropdownMenuBoxAddTabAddPermitStatus();

        dropdownMenuBoxAddTabPermitStatus.innerHTML = `<div class="smallText">${"Don't Need"}</div>`;
    })

    dropdownMenuOptionAddTabAddPermitStatusExtensionReceived.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_add_permit_status_extension_received");

        clearDropdownMenuBoxAddTabAddPermitStatus();

        dropdownMenuBoxAddTabPermitStatus.innerHTML = `<div class="smallText">${"Extension Received"}</div>`;
    })

    dropdownMenuOptionAddTabAddPermitStatusExtensionSubmitted.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_add_permit_status_extension_submitted");

        clearDropdownMenuBoxAddTabAddPermitStatus();

        dropdownMenuBoxAddTabPermitStatus.innerHTML = `<div class="smallText">${"Extension Submitted"}</div>`;
    })

    dropdownMenuOptionAddTabAddPermitStatusExtensionReceived.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_add_permit_status_extension_received");

        clearDropdownMenuBoxAddTabAddPermitStatus();

        dropdownMenuBoxAddTabPermitStatus.innerHTML = `<div class="smallText">${"Extension Received"}</div>`;
    })

    dropdownMenuOptionAddTabAddPermitStatusExpired.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_add_permit_status_expired");

        clearDropdownMenuBoxAddTabAddPermitStatus();

        dropdownMenuBoxAddTabPermitStatus.innerHTML = `<div class="smallText">${"Expired"}</div>`;
    })

    dropdownMenuOptionAddTabAddPermitStatusExpiringSoon.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_add_permit_status_expiring_soon");

        clearDropdownMenuBoxAddTabAddPermitStatus();

        dropdownMenuBoxAddTabPermitStatus.innerHTML = `<div class="smallText">${"Expiring Soon"}</div>`;
    })

    dropdownMenuOptionAddTabAddPermitStatusReceived.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_add_permit_status_received");

        clearDropdownMenuBoxAddTabAddPermitStatus();

        dropdownMenuBoxAddTabPermitStatus.innerHTML = `<div class="smallText">${"Received"}</div>`;
    })

    dropdownMenuOptionAddTabAddPermitStatusApplied.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_add_permit_status_applied");

        clearDropdownMenuBoxAddTabAddPermitStatus();

        dropdownMenuBoxAddTabPermitStatus.innerHTML = `<div class="smallText">${"Applied"}</div>`;
    })


            /* General Status Dropdowns */    
    function clearDropdownMenuBoxAddTabWrGeneralStatus() {
        console.log("Entered - clearDropdownMenuBoxAddTabWrGeneralStatus");

        dropdownMenuAddTabWrGeneralStatus.innerHTML = "";
    }

    dropdownMenuOptionAddTabWrGeneralStatusCancle.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_general_status_cancle");
        clearDropdownMenuBoxAddTabWrGeneralStatus();

        dropdownMenuAddTabWrGeneralStatus.innerHTML = "Cancled / Other";
    })

    dropdownMenuOptionAddTabWrGeneralStatus7010.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_general_status_7010");
        clearDropdownMenuBoxAddTabWrGeneralStatus();

        dropdownMenuAddTabWrGeneralStatus.innerHTML = "7010'd";
    })

    dropdownMenuOptionAddTabWrGeneralStatusFlag.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_general_status_flag");
        clearDropdownMenuBoxAddTabWrGeneralStatus();

        dropdownMenuAddTabWrGeneralStatus.innerHTML = "Need to Flag";
    })

    dropdownMenuOptionAddTabWrGeneralStatusWaitingCustomerApproved.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_general_status_waiting_customer_approved");
        clearDropdownMenuBoxAddTabWrGeneralStatus();

        dropdownMenuAddTabWrGeneralStatus.innerHTML = "Waiting On Customer - Approved";
    })

    dropdownMenuOptionAddTabWrGeneralStatusWaitingCustomerNotApproved.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_general_status_waiting_customer_not_approved");
        clearDropdownMenuBoxAddTabWrGeneralStatus();

        dropdownMenuAddTabWrGeneralStatus.innerHTML = "Waiting On Customer - Not Approved";
    })

    dropdownMenuOptionAddTabWrGeneralStatusRevisions.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_general_status_revisions");
        clearDropdownMenuBoxAddTabWrGeneralStatus();

        dropdownMenuAddTabWrGeneralStatus.innerHTML = "Revisions";
    })

    dropdownMenuOptionAddTabWrGeneralStatusReviewCoordinator.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_general_status_review_coordinator");
        clearDropdownMenuBoxAddTabWrGeneralStatus();

        dropdownMenuAddTabWrGeneralStatus.innerHTML = "Review - Coordinator";
    })

    dropdownMenuOptionAddTabWrGeneralStatusReviewPeer.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_general_status_review_peer");
        clearDropdownMenuBoxAddTabWrGeneralStatus();

        dropdownMenuAddTabWrGeneralStatus.innerHTML = "Review - Peer";
    })

    dropdownMenuOptionAddTabWrGeneralStatusDesign.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_general_status_design");
        clearDropdownMenuBoxAddTabWrGeneralStatus();

        dropdownMenuAddTabWrGeneralStatus.innerHTML = "Design";
    })

    dropdownMenuOptionAddTabWrGeneralStatusCheckEasementRequest.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_general_status_check_easement_request");
        clearDropdownMenuBoxAddTabWrGeneralStatus();

        dropdownMenuAddTabWrGeneralStatus.innerHTML = "Check / Apply - Easement Request";
    })

    dropdownMenuOptionAddTabWrGeneralStatusCheckPermit.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_general_status_check_permit");
        clearDropdownMenuBoxAddTabWrGeneralStatus();

        dropdownMenuAddTabWrGeneralStatus.innerHTML = "Check / Apply - Permit";
    })

    dropdownMenuOptionAddTabWrGeneralStatusServiceCalcs.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_general_status_service_calcs");
        clearDropdownMenuBoxAddTabWrGeneralStatus();

        dropdownMenuAddTabWrGeneralStatus.innerHTML = "Service Calcs + Coding";
    })

    dropdownMenuOptionAddTabWrGeneralStatusVisit.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_general_status_visit");
        clearDropdownMenuBoxAddTabWrGeneralStatus();

        dropdownMenuAddTabWrGeneralStatus.innerHTML = "Need to Visit.";
    })

    dropdownMenuOptionAddTabWrGeneralStatusWaitingLL.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_general_status_waiting_ll");
        clearDropdownMenuBoxAddTabWrGeneralStatus();

        dropdownMenuAddTabWrGeneralStatus.innerHTML = "Waiting - LL/SP/ETC.";
    })

    dropdownMenuOptionAddTabWrGeneralStatusBlank.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_general_status_blank");
        clearDropdownMenuBoxAddTabWrGeneralStatus();
    })

            /* WR Type Dropdowns */
    dropdownMenuOptionAddTabWrTypeBlank.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_type_blank");
        clearDropdownMenuBoxAddTabWrType();
    })

    dropdownMenuOptionAddTabWrTypeDrnu.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_option_add_tab_wr_type_drnu");

        clearDropdownMenuBoxAddTabWrType();

        dropdownMenuBoxAddTabWrType.innerHTML = "DRNU"

    })

    dropdownMenuOptionAddTabWrTypeDrou.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_option_add_tab_wr_type_drou");

        clearDropdownMenuBoxAddTabWrType();

        dropdownMenuBoxAddTabWrType.innerHTML = "DROU"

    })

    dropdownMenuOptionAddTabWrTypeDrno.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_option_add_tab_wr_type_drno");

        clearDropdownMenuBoxAddTabWrType();

        dropdownMenuBoxAddTabWrType.innerHTML = "DRNO"
    })

    dropdownMenuOptionAddTabWrTypeDriu.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_option_add_tab_wr_type_driu");

        clearDropdownMenuBoxAddTabWrType();

        dropdownMenuBoxAddTabWrType.innerHTML = "DRIU"
    })

    dropdownMenuOptionAddTabWrTypeDrio.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_option_add_tab_wr_type_drio");

        clearDropdownMenuBoxAddTabWrType();

        dropdownMenuBoxAddTabWrType.innerHTML = "DRIO"
    })

    dropdownMenuOptionAddTabWrTypeDwfo.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_option_add_tab_wr_type_dwfo");

        clearDropdownMenuBoxAddTabWrType();

        dropdownMenuBoxAddTabWrType.innerHTML = "DWFO"
    })

    dropdownMenuOptionAddTabWrTypeDdi.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_option_add_tab_wr_type_ddi");

        clearDropdownMenuBoxAddTabWrType();

        dropdownMenuBoxAddTabWrType.innerHTML = "DDI"
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

    /* Deslect Header Tab Functions */

    function deselectAllWrTab() {
        console.log("Entered - clearAllWrTab");

        allWrTabActive.classList.add("hidden");
        
        filterByBoxContainer.classList.add("hidden");
        seachByBoxContainer.classList.add("hidden");
        trimContainer.classList.add("hidden");
        trimContainerLabel.classList.add("hidden");
        allWrDisplayContainer.classList.add("hidden");
        filterSectionStatusLabel.classList.add("hidden");
        allWrStatusFiltersContainer.classList.add("hidden");
        curPageAllWr.classList.add("hidden");
       
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
        seachByBoxContainer.classList.add("hidden");
        trimContainer.classList.add("hidden");
        trimContainerLabel.classList.add("hidden");
        permitsDisplayContainer.classList.add("hidden");
        permitStatusFiltersContainer.classList.add("hidden");
        curPagePermits.classList.add("hidden");

        permitsTab.classList.remove("hidden");
    }

    function deselectAllTabs() {
        console.log("Entered - deselectAllTabs");

        deselectAllWrTab();
        deselectAllAddTab();
        deselectAllPermitsTab();
    }

    /* Add Tab New Work Request Number Select When Clicked */
    addTabNewWorkRequestNumber.addEventListener("click", (event) => {
        console.log("Fired - clicked add_tab_new_work_request_number");

        if (event.target.value != null) {
            event.target.select();
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

    /* Tab Event Listeners */
    allWrTab.addEventListener("click", (event) => {
        console.log("Fired - Clicked all_wr_tab");

        //const allWrListRaw = document.getElementById("temp_all_wr_list").innerHTML;
        //const allWrList = parseWrString(allWrListRaw);
       
        /* Deselecting all tabs */
        deselectAllTabs();

        /* Hiding inactive tab */
        allWrTab.classList.add("hidden");

        /* Revealing all_wr_tab features */
        allWrTabActive.classList.remove("hidden");
        filterByBoxContainer.classList.remove("hidden");
        seachByBoxContainer.classList.remove("hidden");
        trimContainer.classList.remove("hidden");
        trimContainerLabel.classList.remove("hidden");
        allWrDisplayContainer.classList.remove("hidden");

        allWrStatusFiltersContainer.classList.remove("hidden");
        filterSectionStatusLabel.classList.remove("hidden");


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

    permitsTab.addEventListener("click", (event) => {
        console.log("Fired - Clicked permits_tab");

        //const allWrListRaw = document.getElementById("temp_all_wr_list").innerHTML;
        //const allWrList = parseWrString(allWrListRaw);

        /* Deselecting all tabs */
        deselectAllTabs();

        /* Hiding inactive tab */
        permitsTab.classList.add("hidden");

        /* Revealing permits_tab features */
        seachByBoxContainer.classList.remove("hidden");
        filterByBoxContainer.classList.remove("hidden");
        /* Fill in as i go */
        trimContainer.classList.remove("hidden");
        trimContainerLabel.classList.remove("hidden");
        permitStatusFiltersContainer.classList.remove("hidden");
        filterSectionStatusLabel.classList.remove("hidden");
        permitsDisplayContainer.classList.remove("hidden");

        permitsTabActive.classList.remove("hidden");
        injectHTMLPermitsTabDisplay(allWrList, currentPagePermits);
    })
    permitsTabActive.addEventListener("click", (event) => {
        console.log("Fired - clicked add_tab_active");

        deselectAllPermitsTab();
    })
}
document.addEventListener("DOMContentLoaded", async () => mainEvent());