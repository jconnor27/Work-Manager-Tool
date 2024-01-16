let allWrList = [];
let currentPage = 0;

class DDMenu {
    constructor(curOption, allOptions){
        this.curOption = curOption;
        this.allOptions = allOptions;

    }

    makeRowElement() {
        console.log("Entered - DDMenu - makeRowElement()");

        let rowElement = [];

        rowElement[0] = `<li class="ddMenuBox">${this.curOption}</li>`;

        rowElement[1] = `<button type="button" class="ddMenuButton">\/</button>`

        let str = `<li class="ddMenuContentBox"></li>` 

        for (let i = 0; i < this.allOptions.length; i++) {
            str += `<li class="ddMenuContentItem">${this.allOptions[i]}</li>`;
        }

        rowElement[2] = `<li class="ddMenuContentBox">${str}</li>`;

        return `<li class="ddMenu">${rowElement[0] + rowElement[1] + rowElement[2]}</li>`;
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
            this.generalStatus = generalStatus;
            this.permitStatus = permitStatus;
            this.easementRequestStatus = easementRequestStatus;
            this.commentsGeneral = commentsGeneral;
            this.customerContacted = customerContacted;
            this.creationDate = creationDate;
            console.log("vvv");
            console.log(creationDate);
        }

    wrAddressType() {
        let str = "";

        str += this.workRequestNumber + "<br>" + this.houseNumber + " " + this.streetName + ",<br>" + this.countyCity + ", " + 
            this.zipCode + "<br>" + this.wrType; 
        return str; 
    }

    makeRowElement() {
        console.log("Entered - workRequest - makeRowElement()");
        console.log("this.wrAddressType = " + this.wrAddressType());


        let rowElement = {
            priorityNumber: `<li class="allWrDisplayPriorityNumberContainer">${this.priorityNumber}</li>`,
                wrAddressType: `<li class="allWrDisplayWrAddressType">${this.wrAddressType()}</li>`,
                crd: `<li class="allWrDisplayWrDate">${this.parseDate(this.crd)}</li>`,

                rcd: `<li class="allWrDisplayWrDate">${this.parseDate(this.rcd)}</li>`,
                generalStatus: `<li class="allWrDisplayWrStatus">${this.generalStatus}</li>`,
                toDos: `<li class="allWrDisplayToDo">${"N/A"}</li>`,
                permitStatus: `<li class="allWrDisplayWrStatus">${this.permitStatus}</li>`,
                easementRequestStatus: `<li class="allWrDisplayWrStatus">${this.easementRequestStatus}</li>`,
                comments: `<li class="allWrDisplayWrComments">${this.commentsGeneral}</li>`,
                pocs: `<li class="allWrDisplayPOCContainer">${
                    `<li class="pocWrapper">${
                        "(Owner) " + this.ownerName + "<br>" + this.ownerNumber + "<br>" + this.ownerEmail
                    }</li>`

                }</li>`
        }
        console.log("testing - comments Gen -");
        console.log(rowElement.comments);
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
                "permitStatus:" + this.permitStatus + "," +
                "easementRequestStatus:" + this.easementRequestStatus + "," +
                "commentsGeneral:" + this.commentsGeneral + "," +
                "customerContacted:" + this.customerContacted + "," +
                "creationDate:" + this.creationDate + ","; /* 24 lines */
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
                console.log("Entered top count==3");

                const tempPage = new Page(curPage);
                localCount = 0;
                curPage = [];
                pages[this.count] = tempPage;
                this.count += 1;
                i--;
            } else /*if (count < 3)*/ {
                console.log("Entered mid count < 3");

                if (typeof this.list[i] != "undefined") {
                    console.log("Entered - typeof(this.list[i] == workRequest");

                    curPage[localCount] = this.list[i];
                    localCount += 1;
                }
            }
            if ((i == this.list.length)) {
                console.log("Entered bottom i == this.list.length");
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

function parseWrString(str) {
    console.log("Entered - parseWrString(str)");

    let wrList = [];
    let curIndex = 0;
    let tempCount = 0;

    while (str.length > 2) { /* Could and should make +1 once formatting is done */
        curIndex = parseSingleWrIndex(str);

        const singleWrStr = str.substring(0, curIndex - 1); 

        const newWr = parseSingleWrString(singleWrStr);
        wrList[wrList.length] = newWr;

        str = str.substring(curIndex + 1);
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
    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf(",");
    const permitStatus = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 1);
    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf(",");
    const easementRequestStatus = str.substring(colonIndex + 1, commaIndex);
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
    const creationDate = str.substring(colonIndex + 1);
    /* Don't need to trim string again */

    

    const wr = new workRequest(workRequestNumber, houseNumber, streetName, countyCity, zipCode, priorityNumber, ownerName, ownerNumber, 
        ownerEmail, builderName, builderNumber, builderEmail, otherName, otherNumber, otherEmail, wrType, crd, rcd, generalStatus,
        permitStatus, easementRequestStatus, commentsGeneral, customerContacted, creationDate);

    return wr;
}

/* Helper for parseWrString - returns index of last comma of first wr in str */
function parseSingleWrIndex(str) {
    console.log("Entered - parseSingleWrIndex(str)");

    let wrIndex = 0;
    let curIndex = 0;
    let count = 0;

    while (count < 24) {
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

async function saveFile() {
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
        //updateWrDisplay(allWrList);
        document.getElementById("load_save_buttons_container").insertAdjacentHTML("afterEnd", `<div class="hidden" id="temp_storage">${allWrList}</div>`);
        document.getElementById("footer_button_sync").classList.remove("hidden");
    });
    reader.readAsText(selected);
    
    console.log("testing here");
    console.log(allWrList);
    
}   

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

function getAllWrList() {
    console.log("Entered - getAllWrList()");

    return allWrList;
}


function injectHTMLAllWrTabDisplay(allWrList, currentPage) {
    console.log("Entered - injectHTMLAllWrDisplay(allWrList, " + currentPage + ")");

    const target = document.querySelector("#all_wr_display_wr_container");
    target.innerHTML = "";    

    const pag = new Paginated(allWrList);
    const pages = pag.getPages();

    console.log("hiya");
    console.log(pages);
    console.log(pages[0].content[0].creationDate);

    
    for(let i = 0; i < pages[currentPage].content.length; i++) { /* Will need to change  */
        console.log(pages[currentPage].content.length);

        if (i < pages[currentPage].length) {
            console.log("i < pages[currentPage].length");
            break;
        }
        let curWr = pages[currentPage].getWr(i);
        let rowElement = curWr.makeRowElement();
        let temp = rowElement.priorityNumber + rowElement.wrAddressType + rowElement.crd + rowElement.rcd + rowElement.generalStatus +
        rowElement.toDos + rowElement.permitStatus + rowElement.easementRequestStatus + rowElement.comments + rowElement.pocs;
        const str = `<li class="allWrDisplayWrRow">${temp}</li>`;

        target.innerHTML += `<li class="allWrDisplayWrRow">${temp}</li>`;
        
    }
    const pageInfo = "Page: " + (currentPage + 1) + " of " + pages.length;
    target.innerHTML += `<div class="pageInfo">${pageInfo}</div>`;
    if (currentPage == 0 && allWrList.length > 3) { // first page
        target.innerHTML += `<button type="button" class="pageNextButton" id="page_next_button">Next</button>`;
        const pageNextButton = document.querySelector("#page_next_button");
        pageNextButton.addEventListener("click", (event) => {
            console.log("Fired - page_next_button clicked");

            //currentPage += 1;
            injectHTMLAllWrTabDisplay(allWrList, currentPage + 1);
        })
    } else if (currentPage == pages.length - 1 && currentPage != 0) { // last page
        console.log("Entered middle - last page");
        target.innerHTML += `<button type="button" class="pagePrevButton" id="page_prev_button">Prev</button>`;
        const pagePrevButton = document.querySelector("#page_prev_button");
        pagePrevButton.addEventListener("click", (event) => {
            console.log("Fired - page_prev_button clicked");

            //currentPage--;
            injectHTMLAllWrTabDisplay(allWrList, currentPage - 1);
        })
        
    } else if (allWrList.length > 3){ // all other pages
        console.log("Entered Bottom");
        target.innerHTML += `<button type="button" class="pagePrevButton" id="page_prev_button">Prev</button>`;
        target.innerHTML += `<button type="button" class="pageNextButton" id="page_next_button">Next</button>`;
        const pageNextButton = document.querySelector("#page_next_button");
        const pagePrevButton = document.querySelector("#page_prev_button");
        pageNextButton.addEventListener("click", (event) => {
            console.log("Fired - page_next_button clicked");

            //currentPage++;
            injectHTMLAllWrTabDisplay(allWrList, currentPage + 1);
        })
        pagePrevButton.addEventListener("click", (event) => {
            console.log("Fired - page_prev_button clicked");

            //currentPage--;
            injectHTMLAllWrTabDisplay(allWrList, currentPage - 1);
        })
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

function updateWrDisplay(allWrList) {
    console.log("Entered - updateWrDisplay");

    const temp = document.getElementById("all_wr_display_wr_container");
    console.log(temp.innerHTML);

    if (allWrList.length > 0) {
        injectHTMLAllWrTabDisplay(allWrList, 0);
        console.log("List updated");
    } else {
        console.log("List not updated.")
        console.log("allWrList.length = " + allWrList.length);
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
    const allWrSpecificFiltersContainer = document.querySelector("#all_wr_specific_filters_container");

    /* Specific Add Tab Display Containers */
    const allWrDisplayContainer = document.querySelector("#all_wr_display_container");
    const addDisplayContainer = document.querySelector("#add_display_container");
    const addTabFilterLabelContainer = document.querySelector("#add_tab_filter_label_container");
    const addTypeContainer = document.querySelector("#add_type_container");

    /* Add Tab - New Work Request Number */
    const addTabNewWorkRequestNumber = document.querySelector("#new_work_request_number_textfield")

    /* Add Tab Textfields */
        /* Adress */
    const addressLineTextfieldHouseNumber = document.querySelector("#address_line_textfield_house_number");
    const addressLineTextfieldStreetName = document.querySelector("#address_line_textfield_street_name");
    const addressLineTextfieldCounty = document.querySelector("#address_line_textfield_county");
    const addressLineTextfieldZip = document.querySelector("#address_line_textfield_zip");

        /* Priority Number */
    const addTabPriorityBox = document.querySelector("#add_tab_priority_box");

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
    const addTabCommentsAddButton = document.querySelector("#add_tab_comments_add_button");
    const addTabCommentsTextfield = document.querySelector("#add_tab_comments_textfield");
    const addTabWrCommentsToAdd = document.querySelector("#add_tab_wr_comments_to_add");

    /* Add Tab Filters */
    const filterCheckboxAddWr = document.querySelector("#filter_checkbox_add_wr");
    const filterCheckboxAddToDoLabel = document.querySelector("#filter_checkbox_add_to_do_label");
    const filterCheckboxAddPermitLabel = document.querySelector("#filter_checkbox_add_permit_label");
    const filterCheckboxAddEasementRequestLabel = document.querySelector("#filter_checkbox_add_easement_request_label");
    const filterCheckboxAddCommentLabel = document.querySelector("#filter_checkbox_add_comment_label");
    const filterCheckboxAddReminderLabel = document.querySelector("#filter_checkbox_add_reminder_label");



    const dropdownMenuAddTabWrType = document.querySelector("#dropdown_menu_add_tab_wr_type");
    const dropdownMenuAddTabWrGeneralStatus = document.querySelector("#dropdown_menu_add_tab_wr_general_status");
    const dropdownMenuAddTabWrPermitStatus = document.querySelector("#dropdown_menu_add_tab_wr_permit_status");
    const dropdownMenuAddTabWrEasementRequestStatus = document.querySelector("#dropdown_menu_add_tab_wr_easement_request_status");

    /* Load and Save Buttons */
    const footerButtonSave = document.querySelector("#footer_button_save");
    const footerButtonLoad = document.querySelector("#footer_button_load");
    const footerButtonSync = document.querySelector("#footer_button_sync");


    /* Variable */
    let addTabCommentsTextfieldInput = [];
    let allWrList = [];
    

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

    footerButtonSync.addEventListener("click", (event) => {
        console.log("Fired - Clicked footerButtonSync");

        const temp = document.getElementById("temp_storage").innerHTML;
        const tempList = parseWrString(temp);

        for (let i = 0; i < tempList.length; i++) {
            allWrList[allWrList.length] = tempList[i];
        }
        footerButtonSync.classList.add("hidden");
        deselectAllTabs();
        document.getElementById('all_wr_tab').click();
        console.log("allWrList =");
        console.log(allWrList);

        /*
        const dd = new DDMenu("curOp", ["test1", "test2", "test3"]);
        const ddRow = dd.makeRowElement();
        console.log("dd = ");
        console.log(ddRow);
        const bod = document.getElementById("all_wr_display_wr_container");
        bod.innerHTML += ddRow;*/
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
       
        saveFile();
    })
    
    /* Add Tab Buttons */

    addTabUpdateButton.addEventListener("click", (event) => {
        console.log("Fired - Clicked add_tab_update_button");

        const curWr = getWr(addTabNewWorkRequestNumber.value, allWrList);
        if (curWr[0] != false) {/* if wr exists/ has been found */
            const d = new Date();
            const tempDate = d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear();
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
    })

    addTabGetButton.addEventListener("click", (event) => {
        console.log("Fired - Clicked add_tab_get_button");
        const e = new Error();

        const curWrNum = addTabNewWorkRequestNumber.value;

        let wr = getWr(curWrNum, allWrList); /* First index is true if wr is found or empty list, second index is wr object */

        if (wr[0] != false) { /* if wr exists / has been found */
            console.log("wr != -1 = true");
            displayWrAddUpdate(wr[1]);
        } else {
            e.displayWrNotFoundAddUpdate(addTabNewWorkRequestNumber.value);
        }
    })

    addTabAddButton.addEventListener("click", (event) => {
        console.log("Fired - Clicked add_tab_add_button");
        const e = new Error();

        console.log("ddd");
        console.log(getWr(addTabNewWorkRequestNumber.value, allWrList)[0]);




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
        }else if (filterCheckboxAddWr.checked && getWr(addTabNewWorkRequestNumber.value, allWrList)[0] == false) {
            const d = new Date();
            const tempDate = d.getDate() + "-" + d.getMonth() + 1 + "-" + d.getFullYear();

            const wr = new workRequest(addTabNewWorkRequestNumber.value, addressLineTextfieldHouseNumber.value, 
            addressLineTextfieldStreetName.value, addressLineTextfieldCounty.value, addressLineTextfieldZip.value,
            addTabPriorityBox.value, pocTextboxOwnerName.value, pocTextboxOwnerNumber.value, pocTextboxOwnerEmail.value, 
            pocTextboxBuilderName.value, pocTextboxBuilderNumber.value, pocTextboxBuilderEmail.value, pocTextboxOtherName.value,
            pocTextboxOtherNumber.value, pocTextboxOtherEmail.value, dropdownMenuBoxAddTabWrType.textContent, addTabWrCRD.value,
            addTabWrRCD.value, dropdownMenuAddTabWrGeneralStatus.textContent, dropdownMenuAddTabWrPermitStatus.textContent,
            dropdownMenuAddTabWrEasementRequestStatus.textContent, addTabWrCommentsToAdd.textContent, customerContactedCheckboxYes.checked,
            tempDate);                                                                // was .textContent

            /*allWrList[allWrList.length] = wr.makeRowElement();*/
            
            allWrList[allWrList.length] = wr;
            injectHTMLAllWrTabDisplay(allWrList, 0);
            console.log("new allWrList =");
            console.log(allWrList);

            const temp = document.getElementById("add_tab_display_top_mid");

            temp.insertAdjacentHTML("afterbegin", `<div class="wrAddedPrompt" id="wr_added_prompt">Work Request ${wr.workRequestNumber} added</li>`);
            setTimeout(() => {
                const temp = document.getElementById("wr_added_prompt");
                temp.remove();
            }, 3000);

        }
    })

    
        /* Comment Event Listeners */
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

       /* if (addTabWrCommentsToAdd.classList.contains("hidden")) {
            addTabWrCommentsToAdd.classList.remove("hidden");
        }*/

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
        addTabPriorityBox.value = "";
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
        
        allWrSpecificFiltersContainer.classList.add("hidden");
        seachByBoxContainer.classList.add("hidden");
        trimContainer.classList.add("hidden");
        trimContainerLabel.classList.add("hidden");
        allWrDisplayContainer.classList.add("hidden");
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

    function deselectAllTabs() {
        console.log("Entered - deselectAllTabs");

        deselectAllWrTab();
        deselectAllAddTab();
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
       
        /* Deselecting all tabs */
        deselectAllTabs();

        /* Hiding inactive tab */
        allWrTab.classList.add("hidden");

        /* Revealing all_wr_tab features */
        allWrTabActive.classList.remove("hidden");
        allWrSpecificFiltersContainer.classList.remove("hidden");
        seachByBoxContainer.classList.remove("hidden");
        trimContainer.classList.remove("hidden");
        trimContainerLabel.classList.remove("hidden");
        allWrDisplayContainer.classList.remove("hidden");


        updateWrDisplay(allWrList);
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
}
document.addEventListener("DOMContentLoaded", async () => mainEvent());