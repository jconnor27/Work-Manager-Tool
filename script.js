let allWrList = [];
let currentPageAllWr = 0;
let currentPagePermits = 0;

class PermitStatusDDMenu {
    constructor(rowNumber) {
        this.curOption = "Not Set";
        this.rowNumber = rowNumber;
    }

    makeRowElement() {
        console.log("Entered - PermitStatusDDMenu - makeRowElement()");

        let rowElement = document.createElement("permitStatusDDMenu");

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
        str.style.backgroundColor = 'white'
        str.style.zIndex = 1;
        str.id = "permit_status_dd_" + this.rowNumber + "_content";

        rowElement.innerHTML = `<div class="permitStatusDDMenuBox" id="permit_status_dd_${this.rowNumber}_current">${this.curOption}</div>` +
        `<button type="button" class="permitStatusDDMenuButton" id="permit_status_dd_${this.rowNumber}_button">\\/</button>` + str.outerHTML;

        rowElement.addEventListener("mouseover", (event) => {
            console.log("Fired - moused over rowElement - " + this.rowNumber);

            const tempButton = document.getElementById("permit_status_dd_" + this.rowNumber + "_button"); //not used?
            const tempContent = document.getElementById("permit_status_dd_" + this.rowNumber + "_content");            

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
                const tempCurrent = document.getElementById("permit_status_dd_" + this.rowNumber + "_current");
                tempCurrent.innerHTML = event.target.innerHTML;
    
                const tempContent = document.getElementById("permit_status_dd_" + this.rowNumber + "_content");
            }
            
        })
        
        rowElement.addEventListener("mouseout", (event) => {
            console.log("Fired - moused off - " + this.rowNumber);

            /* Current value on page - not in list */
            const tempCurrent = document.getElementById("permit_status_dd_" + this.rowNumber + "_current");

            const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
            const curWrIndex = parseInt(((page - 1) * 3) + parseInt(this.rowNumber) - 1); // Will need to change when more rows

            /* Current allWrList */
            const allWrListRaw = document.getElementById("temp_all_wr_list").innerHTML;
            const allWrList = parseWrString(allWrListRaw);

            /* Current Wr */
            const currentWr = allWrList[curWrIndex];

            if (tempCurrent.innerHTML != currentWr.permit.permitStatus) {
                console.log("* Saving page to list *");

                /* Updating Status and List */
                currentWr.permit.permitStatus = tempCurrent.innerHTML;
                allWrList[curWrIndex] = currentWr;

                const tempAllWrList = document.getElementById("temp_all_wr_list");
                tempAllWrList.innerHTML = allWrList;

                console.log("* Internal List Updated *");
            }

            console.log("after if statement");

            /* Hiding DDMenu content */
            const tempContent = document.getElementById("permit_status_dd_" + this.rowNumber + "_content");
            tempContent.style.display = 'none';
        })
        

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
        str.style.backgroundColor = 'white';
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
        
        rowElement.classList.add("generalStatusRowElement");

        let str = document.createElement("generalStatusDDMenuContentBox");

        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"Waiting - LL, SP, Etc."}</div>`);
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
        str.style.backgroundColor = 'white';
        str.style.zIndex = 1;
        str.id = "general_status_dd_" + this.rowNumber + "_content";

        rowElement.innerHTML = `<div class="generalStatusDDMenuBox" id="general_status_dd_${this.rowNumber}_current">${this.curOption}</div>` +
        `<button type="button" class="generalStatusDDMenuButton" id="general_status_dd_${this.rowNumber}_button">\\/</button>` + str.outerHTML;

        rowElement.addEventListener("mouseover", (event) => {
            console.log("Fired - moused over rowElement - " + this.rowNumber);

            const tempButton = document.getElementById("general_status_dd_" + this.rowNumber + "_button");
            const tempContent = document.getElementById("general_status_dd_" + this.rowNumber + "_content");

            tempContent.style.display = 'flex';
            tempContent.style.flexDirection = 'column';
            tempContent.style.border = '1px solid black';

            /* Below statement adjusts position of content box to above or below dd menu */
            if (this.rowNumber <=3) {
                tempContent.style.marginTop = '650px';
            } else {
                /* Will need to fill in when more than 3 work requests */
            }
        })

        rowElement.addEventListener('click', (event) => {
            console.log("Fired - clicked rowElement - " + this.rowNumber);

            if (event.target.innerHTML != "\\/") {
                const tempCurrent = document.getElementById("general_status_dd_" + this.rowNumber + "_current");
                tempCurrent.innerHTML = event.target.innerHTML;

                const tempContent = document.getElementById("general_status_dd_" + this.rowNumber + "_content");
            }
        })

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

class DDMenuSpecific {
    constructor(curOption, allOptions, workRequestNumber, type){
        this.curOption = curOption;
        this.allOptions = allOptions;
        this.workRequestNumber = workRequestNumber;
        this.type = type;
    }

    makeRowElement() {
        console.log("Entered - DDMenuSpecific - makeRowElement()");

        let rowElement = document.createElement("ddMenuSpecific");

        rowElement.style.display = 'flex';
        rowElement.style.flexDirection = 'row';
        rowElement.style.position = 'relative';
        rowElement.style.alignItems = 'center';
        rowElement.style.justifyContent = 'center';
        rowElement.style.width = '150px';
        rowElement.style.height = '96px';

        let str = document.createElement("ddMenuSpecificContentBox");
        

        for (let i = 0; i < this.allOptions.length; i++) {
            str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${this.allOptions[i]}</div>`); 
        }

        console.log("str is inner");
        console.log(str.innerHTML);

        str.style.display = 'none';
        str.style.position = 'absolute';
        str.style.marginTop = '45px';
        str.id = this.workRequestNumber + "_" + this.type + "_dd_content";


        rowElement.innerHTML = `<div class="ddMenuSpecificBox" id="${this.workRequestNumber + "_" + this.type}_dd_current">${this.curOption}</div>` + 
        `<button type="button" class="ddMenuSpecificButton" id="${this.workRequestNumber + "_" + this.type}_dd_button">\\/</button>` + str.outerHTML;
    
        rowElement.addEventListener("mouseover", (event) => {
            console.log("Fired - moused over rowElement");

            const tempButton = document.getElementById(this.workRequestNumber + "_" + this.type + "_dd_button");
            const tempContent = document.getElementById(this.workRequestNumber + "_" + this.type + "_dd_content");
           

            if (tempContent.style.display == 'flex') {
                //tempContent.style.display = 'none';
            } else {
                tempContent.style.display = 'flex';
                tempContent.style.flexDirection = 'column';
                tempContent.style.border = '1px solid black';
            
                console.log("here");

            }
            
           // rowElement.innerHTML.
            //str.style.display = 'flex'; doesnt do anything
        })    
        
        rowElement.addEventListener('click', (event) => {
            if(event.target.innerHTML != "\\/") {
                console.log("Fired - clicked rowElement");

                console.log(event.target.innerHTML);
                const tempCurrent = document.getElementById(this.workRequestNumber + "_" + this.type + "_dd_current");
                tempCurrent.innerHTML = event.target.innerHTML;

                const tempContent = document.getElementById(this.workRequestNumber + "_" + this.type + "_dd_content");
                tempContent.style.display = 'none';
                console.log("tempLoadingStorage = ");
                console.log(document.getElementById('tempLoadingStorage').innerHTML);
            }
            
        })

        /*
        rowElement.addEventListener("mouseout", (event) => {
            console.log("Fired - moused off");

            const tempContent = document.getElementById(this.workRequestNumber + "_" + this.type + "_dd_content");
            tempContent.style.display = 'none';

        })
        */
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

        let generalStatusDDMenuSpecific = "Wil remove"/*new DDMenuSpecific(this.generalStatus,["Waiting - LL/SP/ETC.", "Need to Visit", "Service Calcs + Coding",
            "Check / Apply for Permit", "Check / Apply for Easement Request", "Design", "Review - Peer", "Review - Coordinator",
            "Revisions", "Waiting On Customer - Not Approved", "Waiting On Customer - Approved", "Need to Flag", "7010'd", 
            "Cancled / Other"], this.workRequestNumber, "generalStatus");*/
        //console.log("ggg");
        //console.log(generalStatusDDMenuSpecific.makeRowElement());


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

    const priority = document.getElementById("permits_tab_row_" + rowNumberText + "_priority_textfield");
    priority.value = wr.priorityNumber;

    const address = document.getElementById("permits_tab_row_" + rowNumberText + "_address");
    address.innerText = wr.wrAddressType();

    const submitted = document.getElementById("permits_tab_row_" + rowNumberText + "_submit");
    submitted.innerText = wr.permit.dateSubmitted;

    const status = document.getElementById("permit_status_dd_" + rowNumber + "_current");
    status.innerText = wr.permit.permitStatus;

    const startDate = document.getElementById("permits_tab_row_" + rowNumberText + "_start_date");
    startDate.value = wr.permit.startDate;

    const endDate = document.getElementById("permits_tab_row_" + rowNumberText + "_end_date");
    endDate.value = wr.permit.endDate;

    const crd = document.getElementById("permits_tab_row_" + rowNumberText + "_crd_date");
    crd.value = wr.crd;

    const rcd = document.getElementById("permits_tab_row_" + rowNumberText + "_rcd_date");
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
    console.log("allWrList =");
    console.log(allWrList);

    const pag = new Paginated(allWrList);
    const pages = pag.getPages();

    hideAllPermitRows();

    for (var i = 0; i < pages[currentPagePermits].content.length; i++) {
        setPermitRowValues(pages[currentPagePermits].content[i], i + 1);
        revealPermitRow(i + 1);
    }


    /* Adding next and prev buttons */
    const prev = document.getElementById("permits_tab_page_prev_button");
    const next = document.getElementById("permits_tab_page_next_button");
    const cur = document.getElementById("permits_tab_current_page_box");

    if ((currentPagePermits + 1)  < pages.length && pages[currentPagePermits + 1].content.length != 0) { // add next button
        next.classList.remove("hidden");
        next.addEventListener("click", (event) => {
            console.log("Fired - Clicked permits_tab_next_button");

            const allWrListRaw = document.getElementById("temp_all_wr_list").innerHTML;
            const allWrList = parseWrString(allWrListRaw);

            injectHTMLPermitsTabDisplay(allWrList, currentPagePermits + 1);
        })
    } else {
        next.classList.add("hidden");
    }

    if (currentPagePermits + 1 > 1) {  // add prev button
        prev.classList.remove("hidden");

        prev.addEventListener("click", (event) => {
            console.log("Fired - Clicked permits_tab_prev_button");

            const allWrListRaw = document.getElementById("temp_all_wr_list").innerHTML;
            const allWrList = parseWrString(allWrListRaw);

            injectHTMLPermitsTabDisplay(allWrList, currentPagePermits - 1);
        })
    } else {
        prev.classList.add("hidden");
    }

    cur.innerHTML = currentPagePermits + 1;
}

function injectHTMLAllWrTabDisplay(allWrList, currentPageAllWr) {
    console.log("Entered - injectHTMLAllWrTabDisplay(allWrList, " + currentPageAllWr + ")");

    const pag = new Paginated(allWrList);
    const pages = pag.getPages();

    hideAllWrRows();

    for (var i = 0; i < pages[currentPageAllWr].content.length; i++) {
        setAllWrRowValues(pages[currentPageAllWr].content[i], i + 1);
        revealWrRow(i + 1);
    }

    const prev = document.getElementById("all_wr_tab_page_prev_button");
    const next = document.getElementById("all_wr_tab_page_next_button");
    const cur = document.getElementById("all_wr_tab_current_page_box");

    /* Adding next and prev buttons */
    if ((currentPageAllWr + 1)  < pages.length && pages[currentPageAllWr + 1].content.length != 0) { // add next button
        next.classList.remove("hidden");
        next.addEventListener("click", (event) => {
            console.log("Fired - Clicked all_wr_tab_next_button");

            const allWrListRaw = document.getElementById("temp_all_wr_list").innerHTML;
            const allWrList = parseWrString(allWrListRaw);

            injectHTMLAllWrTabDisplay(allWrList, currentPageAllWr + 1);
            return;
        })
    } else {
        next.classList.add("hidden");
    }

    if (currentPageAllWr + 1 > 1) {
        prev.classList.remove("hidden");
        prev.addEventListener("click", (event) => {
            console.log("Fired - Clicked all_wr_tab_prev_button");

            const allWrListRaw = document.getElementById("temp_all_wr_list").innerHTML;
            const allWrList = parseWrString(allWrListRaw);

            injectHTMLAllWrTabDisplay(allWrList, currentPageAllWr - 1);
            return;
        })
    } else {
        prev.classList.add("hidden");
    }

    cur.innerHTML = currentPageAllWr + 1;

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

    const permitStatus = document.getElementById("permit_status_dd_" + rowNumber + "_current");
    
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
    const permitsTabRowOneStatus = document.querySelector("#permits_tab_row_one_status");
    const permitsTabRowTwoStatus = document.querySelector("#permits_tab_row_two_status");
    const permitsTabRowThreeStatus = document.querySelector("#permits_tab_row_three_status");

    /* All Wr Tab Display Dropdowns */
        /* Row One */
    const allWrTabRowOneGeneralStatus = document.querySelector("#all_wr_tab_row_one_general_status");
    const allWrTabRowOnePermitStatus = document.querySelector("#all_wr_tab_row_one_permit_status");
    const allWrTabRowOneEasementStatus = document.querySelector("#all_wr_tab_row_one_easement_status");
        /* Row Two */
    const allWrTabRowTwoGeneralStatus = document.querySelector("#all_wr_tab_row_two_general_status");
    const allWrTabRowTwoPermitStatus = document.querySelector("#all_wr_tab_row_two_permit_status");
    const allWrTabRowTwoEasementStatus = document.querySelector("#all_wr_tab_row_two_easement_status");
        /* Row Three */
    const allWrTabRowThreeGeneralStatus = document.querySelector("#all_wr_tab_row_three_general_status");
    const allWrTabRowThreePermitStatus = document.querySelector("#all_wr_tab_row_three_permit_status");
    const allWrTabRowThreeEasementStatus = document.querySelector("#all_wr_tab_row_three_easement_status");



    /* Variable */
    let addTabCommentsTextfieldInput = [];
    let addTabPermitCommentsTextfieldInput = [];
    let allWrList = [];
    let allPermitsList = [];
    


    /* Adds all dropdowns - scoping issue resolved */
    window.onload = function() {
        console.log("Entered - Window.onload function");

        /* All Wr Tab DDs */

            /* General Status DDs */
        let dd = new GeneralStatusDDMenu("1");
        let ddRow = dd.makeRowElement();
        allWrTabRowOneGeneralStatus.insertAdjacentElement("beforeend", ddRow);

        dd = new GeneralStatusDDMenu("2");
        ddRow = dd.makeRowElement();
        allWrTabRowTwoGeneralStatus.insertAdjacentElement("beforeend", ddRow);

        dd = new GeneralStatusDDMenu("3");
        ddRow = dd.makeRowElement();
        allWrTabRowThreeGeneralStatus.insertAdjacentElement("beforeend", ddRow);

            /* Permit Status DDs */
        dd = new PermitStatusDDMenu("1");
        ddRow = dd.makeRowElement();
        allWrTabRowOnePermitStatus.insertAdjacentElement("beforeend", ddRow);

        dd = new PermitStatusDDMenu("2");
        ddRow = dd.makeRowElement();
        allWrTabRowTwoPermitStatus.insertAdjacentElement("beforeend", ddRow);

        dd = new PermitStatusDDMenu("3");
        ddRow = dd.makeRowElement();
        allWrTabRowThreePermitStatus.insertAdjacentElement("beforeend", ddRow);

            /* Easement Status DDs */
        dd = new EasementStatusDDMenu("1");
        ddRow = dd.makeRowElement();
        allWrTabRowOneEasementStatus.insertAdjacentElement("beforeend", ddRow);

        dd = new EasementStatusDDMenu("2");
        ddRow = dd.makeRowElement();
        allWrTabRowTwoEasementStatus.insertAdjacentElement("beforeend", ddRow);

        dd = new EasementStatusDDMenu("3");
        ddRow = dd.makeRowElement();
        allWrTabRowThreeEasementStatus.insertAdjacentElement("beforeend", ddRow);

        /* Permit Tab DDs */

        dd = new PermitStatusDDMenu("1");
        ddRow = dd.makeRowElement();
        permitsTabRowOneStatus.insertAdjacentElement("beforeend", ddRow);

        dd = new PermitStatusDDMenu("2");
        ddRow = dd.makeRowElement();
        permitsTabRowTwoStatus.insertAdjacentElement("beforeend", ddRow);

        dd = new PermitStatusDDMenu("3");
        ddRow = dd.makeRowElement();
        permitsTabRowThreeStatus.insertAdjacentElement("beforeend", ddRow);

        /*
        const dd = new DDMenuSpecific("curOp", ["test1", "test2", "test3"], "12345678", "testType");
        const ddRow = dd.makeRowElement();
        permitsTabRowOneStatus.insertAdjacentElement("beforeend", ddRow);
        */
    };

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
        dropdownMenuAddTabWrPermitStatus.textContent = wr.permitStatus;
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
        addTabDisplayWorkRequestNumberLabel.innerHTML = "New Permit Work Request Number";
       
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

        console.log("Testing Here");
        console.log(allWrList);

        tempAllWrList.classList.add("hidden");
        tempAllWrList.id = "temp_all_wr_list";
        tempAllWrList.innerHTML = allWrList;
        //tempAllWrList.insertAdjacentHTML("beforeend", `<div>${allWrList}</div>`);

        console.log(tempAllWrList);

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
            /* Working on logic here */
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
            } else {
                e.displayWrNotFoundAddUpdate(addTabNewWorkRequestNumber.value);
            }
        } else if (filterCheckboxAddPermit.checked == true) {
            /* Need to add */
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

        const allWrListRaw = document.getElementById("temp_all_wr_list").innerHTML;
        const allWrList = parseWrString(allWrListRaw);
       
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
            injectHTMLAllWrTabDisplay(allWrList, 0);
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

        const allWrListRaw = document.getElementById("temp_all_wr_list").innerHTML;
        const allWrList = parseWrString(allWrListRaw);

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
        injectHTMLPermitsTabDisplay(allWrList, 0);
    })
    permitsTabActive.addEventListener("click", (event) => {
        console.log("Fired - clicked add_tab_active");

        deselectAllPermitsTab();
    })
}
document.addEventListener("DOMContentLoaded", async () => mainEvent());