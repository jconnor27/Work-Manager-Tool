let allWrList = [];

/* Container class to concatenate info before blobing */
class WorkRequestSaveData {
    constructor(date, allWrList) {
        this.date = date;
        this.allWrList = allWrList;
    }

    toString() {
        console.log("Entered - WorkRequestSaveData - toString()");

        return "Data from: " + this.date + " " + allWrList;
    }
}

class CommentTypeDDMenu {
    constructor() {
        this.curOption = "Not Set";
        this.height = null;
        this.width = null;
    }

    setHeight(height) {
        console.log("Entered - CommentTypeDDMenu - setHeight(" + height + ")");

        this.height = height;
    }

    setWidth(width) {
        console.log("Entered - CommentTypeDDMenu - setWidth(" + width + ")");

        this.width = width;
    }

    makeRowElement() {
        console.log("Entered - CommentTypeDDMenu - makeRowElement");

        let rowElement = document.createElement("CommentTypeDDMenu");
        rowElement.classList.add("commentTypeRowElement");

        let str = document.createElement("commentTypeDDMenuContentBox");

        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"General"}</div>`);
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"Permit"}</div>`);

        str.style.display = 'none';
        str.style.position = 'absolute';
        str.style.marginTop = '45px';
        str.style.backgroundColor = "white";
        str.style.zIndex = 1;
        str.id = "comment_type_dd_content";

        rowElement.innerHTML = `<div class="commentTypeDDMenuBox" id="comment_type_dd_menu_current">${this.curOption}</div>` + 
        `<button type="button" class="commentTypeDDMenuButton" id="comment_type_dd_menu_current_button">\\/</button>` + str.outerHTML;

        if (this.width != undefined) {
            rowElement.style.width = this.width;
        }
        if (this.height != undefined) {
            rowElement.height = this.height;
        }

        return rowElement;
    }
}

class CommentItem {
    constructor(comment, date, type) {
        this.comment = comment;
        this.date = date;
        this.type = type;
    }

    toString() {
        console.log("Entered - CommentItem - toString()");

        return "(" + this.type + ")" + this.comment + " (" + this.date + ")";
    }
}

class NoteItem {
    constructor(note) {
        this.note = note;
    }

    toString() {
        console.log("Entered - NoteItem - toString()");

        return this.note;
    }
}

class Comments {
    constructor(commentsToAdd) {
        console.log("Entered - Comments - Constructor(" + commentsToAdd + ")");
        
        this.comments = [];
        this.addComments(commentsToAdd);
    }

    addComments(commentsToAdd) {
        console.log("Entered - Comments - addComments(" + commentsToAdd + ")");

        if (commentsToAdd != undefined) {
            for (var i = 0; i < commentsToAdd.length; i++) {
                this.comments.push(commentsToAdd[i]);
            }
        }
        
    }

    compare(comments) {
        console.log("Entered - Comments - compare(" + comments + ")");

        if (this.comments.length == comments.length) {
            for (var i = 0; i < this.comments.length; i++) {
                if (this.comments[i] != comments[i]) {
                    return 0;
                }
            }
            return 1;
        } else {
            return 0;
        }
    }

    toString() {
        console.log("Entered - Comments - toString()");

        let str = "";

        for (var i = 0; i < this.comments.length; i++) {
            str += this.comments[i] + "*ENDCOMMENT*";
        }

        return str;
    }
}

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
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"Haven't Checked"}</div>`);

        str.style.display = 'none';
        str.style.position = 'absolute';
        str.style.marginTop = '-10px'
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
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"Check/ Apply NJUNS"}</div>`);
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
        str.style.marginTop = '25px';
        str.style.backgroundColor = "white";
        str.style.height = '290px';
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

class ToDoTypeDDMenu {
    constructor(rowNumber) {
        this.curOption = "Not Set";
        this.rowNumber = rowNumber;
        this.height = null;
        this.width = null;
    }

    setHeight(height) {
        console.log("Entered - ToDoTypeDDMenu - setHeight(" + height + ")");

        this.height = height;
    }

    setWidth(width) {
        console.log("Entered - ToDoTypeDDMenu - setWidth(" + width + ")");
    }

    makeRowElement() {
        console.log("Entered - ToDoTypeDDMenu - makeRowElement()");

        let rowElement = document.createElement("toDoTypeDDMenu");
        rowElement.id = "to_do_type_dd_row_" + this.rowNumber;

        rowElement.classList.add("toDoTypeRowElement");

        let str = document.createElement("toDoTypeDDMenuContentBox");

        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"Contact Customer"}</div>`);
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"Service Calc + Coding"}</div>`);
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"Check/ Apply - NJUNS"}</div>`);
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"Check/ Apply - Permit"}</div>`);
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"Check/ Apply - Easement"}</div>`);
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"Site Visit"}</div>`);
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"Design"}</div>`);
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"Revisions"}</div>`);
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"General"}</div>`);

        str.style.display = 'none';
        str.style.position = 'absolute';
        str.style.marginTop = '200px';
        str.style.backgroundColor = "white";
        str.style.height = '240px';
        str.style.width = '350px';
        str.style.flexWrap = 'wrap';
        str.style.zIndex = '1';
        str.id = "to_do_type_dd_" + this.rowNumber + "_content";

        rowElement.innerHTML = `<div class="toDoTypeDDMenuBox" id="to_do_type_dd_${this.rowNumber}_current">${this.curOption}</div>` +
        `<button type"button" class="toDoTypeDDMenuButton" id="to_do_type_dd_${this.rowNumber}_button">\\/</button>` + str.outerHTML;

        if (this.width != undefined) {
            rowElement.style.width = this.width;
        }
        if (this.height != undefined) {
            rowElement.style.height = this.height;
        }

        return rowElement;
    }
}

class ToDoTabDDMenu {
    constructor(rowNumber) {
        this.curOption = "Not Set";
        this.rowNumber = rowNumber;
        this.height = null;
        this.width = null;
    }

    setHeight(height) {
        console.log("Entered - ToDoTabDDMenu - setHeight(" + height + ")");

        this.height = height;
    }

    setWidth(width) {
        console.log("Entered - ToDoTabDDMenu - setWidth(" + width + ")");
    }

    makeRowElement() {
        console.log("Entered - ToDoTabDDMenu - makeRowElement()");

        let rowElement = document.createElement("toDoTabDDMenu");
        rowElement.id = "to_do_tab_dd_row_" + this.rowNumber;

        rowElement.classList.add("toDoTabRowElement");

        let str = document.createElement("toDoTabDDMenuContentBox");

        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"General"}</div>`);
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"Mentor"}</div>`);
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"Coordinator"}</div>`);
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"Waiting"}</div>`);
        str.insertAdjacentHTML("beforeend", `<div class="ddMenuSpecificContentItem">${"On Return To Office"}</div>`);

        str.style.display = 'none';
        str.style.position = 'absolute';
        str.style.marginTop = '45px';
        str.style.backgroundColor = "white";
        /*str.style.height = '270px';
        str.style.width = '350px';
        str.style.flexWrap = 'wrap';*/
        str.style.zIndex = '1';
        str.id = "to_do_tab_dd_" + this.rowNumber + "_content";

        rowElement.innerHTML = `<div class="toDoTabDDMenuBox" id="to_do_tab_dd_${this.rowNumber}_current">${this.curOption}</div>` +
        `<button type"button" class="toDoTabDDMenuButton" id="to_do_tab_dd_${this.rowNumber}_button">\\/</button>` + str.outerHTML;

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
    constructor(workRequestNumber, permitStatus, dateUpdated, dateApplied, priorityNumber, crd, rcd, startDate, endDate, creationDate) {
        this.workRequestNumber = workRequestNumber;
        this.permitStatus = permitStatus;
        this.dateUpdated = dateUpdated;
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

        const permitSTR = "permitStatus:" + this.permitStatus + "*ENDCHAR*" + "dateUpdated:" + this.dateUpdated + "*ENDCHAR*" +
                        "dateApplied:" + this.dateApplied + "*ENDCHAR*" + "startDate:" + this.startDate + "*ENDCHAR*" + 
                        "endDate:" + this.endDate;

        return permitSTR;
    }
}
/* Haptix Class used to insert added/updated/no change prompts */
class Haptix {
    constructor(promptDuration) {
        this.promptDuration = 1000 * promptDuration;
    }
    displayWrAdded(wrNum) {
        console.log("Entered - displayWrAdded(" + wrNum + ")");

        const temp = document.getElementById("new_work_request_number_textfield");

        temp.insertAdjacentHTML("afterend", `<div class="wrAddedPrompt" id="wr_added_prompt">Work Request ${wrNum} Added</li>`);
        setTimeout(() => {
            const temp = document.getElementById("wr_added_prompt");
            temp.remove();
        }, this.promptDuration);
    }

    displayWrUpdated(wrNum) {
        console.log("Entered - displayWrUpdated(" + wrNum + ")");

        const temp = document.getElementById("new_work_request_number_textfield");

        temp.insertAdjacentHTML("afterend", `<div class="wrAddedPrompt" id="wr_added_prompt">Work Request ${wrNum} Updated</li>`);
        setTimeout(() => {
            const temp = document.getElementById("wr_added_prompt");
            temp.remove();
        }, this.promptDuration);
    }

    displayPermitUpdated(wrNum) {
        console.log("Entered - displayPermitUpdated(" + wrNum + ")");

        const temp = document.getElementById("new_work_request_number_textfield");

        temp.insertAdjacentHTML("afterend", `<div class="permitUpdatedPrompt" id="permit_updated_prompt">Permit For Work Request ${wrNum} Updated</li>`);
        setTimeout(() => {
            const temp = document.getElementById("permit_updated_prompt");
            temp.remove();
        }, this.promptDuration);
    }

    displayCommentsUpdated(wrNum) {
        console.log("Entered - displayCommentsUpdated(" + wrNum + ")");
        
        const temp = document.getElementById("new_work_request_number_textfield");

        temp.insertAdjacentHTML("afterend", `<div class="commentUpdatedPrompt" id="comment_updated_prompt">Comments For Work Request ${wrNum} Updated</li>`);
        setTimeout(() => {
            const temp = document.getElementById("comment_updated_prompt");
            temp.remove();
        }, this.promptDuration);
    }

    displayNoChanges(wrNum) {
        console.log("Entered - displayNoChanges(" + wrNum + ")");

        const temp = document.getElementById("new_work_request_number_textfield");

        temp.insertAdjacentHTML("afterend", `<div class="noChangesPrompt" id="no_changes_prompt">No Changes To Save For ${wrNum} </li>`);
        setTimeout(() => {
            const temp = document.getElementById("no_changes_prompt");
            temp.remove();
        }, this.promptDuration);
    }

    displayToDoAdded(toDoId) {
        console.log("Entered - displayToDoAdded(" + toDoId + ")");

        const temp = document.getElementById("add_tab_display_to_do_row_zero_numfield");
        temp.insertAdjacentHTML("afterend", `<div class="toDoAddedPrompt" id="to_do_added_prompt">To-Do (Id#: ${toDoId} ) Added</div>`);
        setTimeout(() => {
            const temp = document.getElementById("to_do_added_prompt");
            temp.remove();
        }, this.promptDuration);
    }

    displayToDoUpdated(toDoId) {
        console.log("Entered - displayToDoUpdated(" + toDoId + ")");

        const temp = document.getElementById("add_tab_display_to_do_row_zero_numfield");
        temp.insertAdjacentHTML("afterend", `<div class="toDoUpdatedPrompt" id="to_do_updated_prompt">To-Do (Id#: ${toDoId} ) Updated</div>`);
        setTimeout(() => {
            const temp = document.getElementById("to_do_updated_prompt");
            temp.remove();
        }, this.promptDuration);
    }

    displayNoChangesToDo(toDoId) {
        console.log("Entered - displayNoChangesToDo(" + toDoId + ")");

        const temp = document.getElementById("add_tab_display_to_do_row_zero_numfield");
        temp.insertAdjacentHTML("afterend", `<div class="noChangesToDoPrompt" id="no_changes_to_do_prompt">No Changes For To-Do (Id#:${toDoId})</div>`);
        setTimeout(() => {
            const temp = document.getElementById("no_changes_to_do_prompt");
            temp.remove();
        }, this.promptDuration);
    }

    displayToDoRemoved(toDoId) {
        console.log("Entered - displayToDoRemoved(" + toDoId + ")");

        const temp = document.getElementById("add_tab_display_to_do_row_zero_numfield");
        temp.insertAdjacentHTML("afterend", `<div class="toDoRemovedPrompt" id="to_do_removed_prompt">To-Do: Id#:${toDoId} Removed</div>`);
        setTimeout(() => {
            const temp = document.getElementById("to_do_removed_prompt");
            temp.remove();
        }, this.promptDuration);
    }

    displayNoIncompleteToDosToMove() {
        console.log("Entered - displayNoIncompleteToDosToMove()");

        const temp = document.getElementById("hide_to_do_tabs");
        temp.insertAdjacentHTML("afterend", `<div class="noIncompleteToDosToMovePrompt" id="no_incomplete_to_dos_to_move_prompt">No Incomplete To-Do's To Move</div>`);
        setTimeout(() => {
            const temp = document.getElementById("no_incomplete_to_dos_to_move_prompt");
            temp.remove();
        }, this.promptDuration);
    }

    displayToDoAddedFromPopUp(type, wrNum) {
        console.log("Entered - displayToDoAddedFromPopUp(type= " + type + " wrNum= " + wrNum + ")");
        
        const temp = document.getElementById("left_side_container");
        temp.insertAdjacentHTML("beforeend", `<div class="toDoAddedFromPopUpPrompt" id="to_do_added_from_pop_up_prompt">"${type}" To-Do Added For Work Request # ${wrNum}</div>`);
        setTimeout(() => {
            const temp = document.getElementById("to_do_added_from_pop_up_prompt");
            temp.remove();
        }, this.promptDuration);
    }

    displayToDoUpdatedFromPopUp(type, wrNum) {
        console.log("Entered - displayToDoUpdatedFromPopUp(type= " + type + " wrNum= " + wrNum + ")");
        
        const temp = document.getElementById("left_side_container");
        temp.insertAdjacentHTML("beforeend", `<div class="toDoUpdatedFromPopUpPrompt" id="to_do_updated_from_pop_up_prompt">"${type}" To-Do Updated For Work Request # ${wrNum}</div>`);
        setTimeout(() => {
            const temp = document.getElementById("to_do_updated_from_pop_up_prompt");
            temp.remove();
        }, this.promptDuration);
    }

    displayWrRemoved(wrNum) {
        console.log("Entered - displayWrRemoved(" + wrNum + ")");

        const temp = document.getElementById("new_work_request_number_textfield");

        temp.insertAdjacentHTML("afterend", `<div class="wrRemovedPrompt" id="wr_removed_prompt">Work Request ${wrNum} Removed</li>`);
        setTimeout(() => {
            const temp = document.getElementById("wr_removed_prompt");
            temp.remove();
        }, this.promptDuration);
    }

    displayCommentAdded(wrNum, type) {
        console.log("Entered - displayCommentAdded(workRequestNumber =" + wrNum + ", type = " + type + ")");

        const temp = document.getElementById("left_side_container");
        temp.insertAdjacentHTML("beforeend", `<div class="commentAddedFromPopUp" id="comment_added_from_pop_up">"${type}" Comment for Work Request # ${wrNum} Added</div>`);
        setTimeout(() => {
            const temp = document.getElementById("comment_added_from_pop_up");
            temp.remove();
        }, this.promptDuration);
    }
}
/* Error Class used to insert error prompts */
class Error {
    constructor(promptDuration) {
        this.promptDuration = 1000 * promptDuration;
    }
    displayWrAlreadyExistsAddUpdate(wrNum) {
        console.log("Entered - disaplayWrAlreadyExistsAddUpdate(" + wrNum + ")");

        const temp = document.getElementById("new_work_request_number_textfield");

        temp.insertAdjacentHTML("afterend", `<div class="errorMessageWorkRequestNumberAlreadyExists" id="error_wr_already_exists">Work Request Number Already Exists</li>`);
        setTimeout(() => {
            const temp = document.getElementById("error_wr_already_exists");
            temp.remove();
        }, this.promptDuration);
    }

    displayPermitAlreadyExistsAddUpdate(wrNum) {
        console.log("Entered - disaplayPermitAlreadyExistsAddUpdate(" + wrNum + ")");

        const temp = document.getElementById("add_tab_display_top_mid");

        temp.insertAdjacentHTML("afterbegin", `<div class="errorMessage" id="error_permit_already_exists">Permit for Work Request Number Already Exists</li>`);
        setTimeout(() => {
            const temp = document.getElementById("error_permit_already_exists");
            temp.remove();
        }, this.promptDuration);
    }

    displayWrNotFoundAddUpdate(wrNum) {
        console.log("Entered - displayWrNotFoundAddUpdate(" + wrNum + ")");

        const temp = document.getElementById("add_tab_display_top_mid");
        temp.insertAdjacentHTML("afterbegin", `<div class="errorMessage" id="error_wr_not_found">Work Request Number Not Found</li>`);
        setTimeout(() => {
            const temp = document.getElementById("error_wr_not_found");
            temp.remove();
        }, this.promptDuration);
    }

    displayPermitNotFoundAddUpdate(wrNum) {
        console.log("Entered - displayPermitNotFoundAddUpdate(" + wrNum + ")");

        const temp = document.getElementById("add_tab_display_top_mid");
        temp.insertAdjacentHTML("afterbegin", `<div class="errorMessage" id="error_wr_not_found">Permit for Work Request Number Not Found</li>`);
        setTimeout(() => {
            const temp = document.getElementById("error_wr_not_found");
            temp.remove();
        }, this.promptDuration);
    }

    displayInvalidWr(wrNum) {
        console.log("Entered - displayInvalidWr(" + wrNum + ")");

        const temp = document.getElementById("add_tab_display_top_mid");
        temp.insertAdjacentHTML("afterbegin", `<div class="errorMessage" id="error_invalid_wr">Invalid Work Request Number</li>`);
        setTimeout(() => {
            const temp = document.getElementById("error_invalid_wr");
            temp.remove();
        }, this.promptDuration);        
    }

    displayInvalidPriorityNumber() {
        console.log("Entered - displayInvalidPriorityNumber()");

        const temp = document.getElementById("customer_contacted_priority_container");
        temp.insertAdjacentHTML("beforeend", `<div class="errorMessage" id="error_invalid_priority_number">Invalid Priority Number</li>`);
        document.getElementById("error_invalid_priority_number").style.marginTop = '10px';
        temp.style.marginBottom = '-30px';
        setTimeout(() => {
            const temp = document.getElementById("error_invalid_priority_number");
            temp.remove();
            temp.style.marginBottom = '0px';
        }, this.promptDuration);
    }

    displayInvalidPriorityNumberPermit() {
        console.log("Entered - displayInvalidPriorityNumberPermit()");

        const temp = document.getElementById("add_tab_container_permit_priority");
        temp.insertAdjacentHTML("beforeend", `<div class="errorMessagePriorityPermit" id="error_invalid_priority_number">Invalid Priority Number</li>`);
        setTimeout(() => {
            const temp = document.getElementById("error_invalid_priority_number");
            temp.remove();
        }, this.promptDuration);
    }

    displayInvalidWrType() {
        console.log("Entered - displayInvalidWrType()");

        const temp = document.getElementById("add_tab_wr_type_container");
        temp.insertAdjacentHTML("beforeend", `<div class="errorMessageInvalidWrType" id="error_invalid_wr_type">Select Wr<br> Type</li>`);
        setTimeout(() => {
            const temp = document.getElementById("error_invalid_wr_type");
            temp.remove();
        }, this.promptDuration);
    }

    displayInvalidCommentType() {
        console.log("Entered - displayInvalidCommentType()");

        const temp = document.getElementById("add_tab_comment_type_dd_container");
        temp.insertAdjacentHTML("beforeend", `<div class="errorMessageInvalidCommentType" id="error_invalid_comment_type">Select Comment Type</li>`);
        setTimeout(() => {
            const temp = document.getElementById("error_invalid_comment_type");
            temp.remove();
        }, this.promptDuration)
    }

    displayInvalidToDoId() {
        console.log("Entered - displayInvalidToDoId()");

        const temp = document.getElementById("add_tab_display_to_do_row_zero_numfield");
        temp.insertAdjacentHTML("afterend", `<div class="errorMessageInvalidToDoId" id="error_invalid_to_do_id">Invalid To-Do ID</div>`);
        setTimeout(() => {
            const temp = document.getElementById("error_invalid_to_do_id");
            temp.remove();
        }, this.promptDuration)
    }

    displaySelectToDoType() {
        console.log("Entered - displaySelectToDoType()");

        const temp = document.getElementById("add_tab_display_to_do_dd_menu_type_container");
        temp.insertAdjacentHTML("beforeend", `<div class="errorMessageInvalidToDoType" id="error_invalid_to_do_type"> Select To-Do<br> Type</div>`);
        setTimeout(() => {
            const temp = document.getElementById("error_invalid_to_do_type");
            temp.remove();
        }, this.promptDuration)
    } 

    displayMustAddNoteForGeneralTypeToDo() {
        console.log("Entered - displayMustAddNoteForGeneralTypeToDo()");

        const temp = document.getElementById("add_tab_display_to_do_row_three_box_top_buttons_container");
        temp.insertAdjacentHTML("beforebegin", `<div class="errorMessageMustAddNoteForGeneralTypeComment" id="error_message">Must Add At Least One Note For \"General\" Type To-Do</div>`);
        setTimeout(() => {
            const temp = document.getElementById("error_message");
            temp.remove();
        }, this.promptDuration)
    }

    displayToDoNoNoteEntered() {
        console.log("Entered - displayToDoNoNoteEntered()");

        const temp = document.getElementById("add_tab_display_to_do_row_three_box_top_buttons_container");
        temp.insertAdjacentHTML("beforebegin", `<div class="errorMessageNoNoteEntered" id="error_message">No Note Entered</div>`);
        setTimeout(() => {
            const temp = document.getElementById("error_message");
            temp.remove();
        }, this.promptDuration)
    }

    displayMustAddWorkRequestNumberUnlessGeneral() {
        console.log("Entered - displayMustAddWorkRequestNumberUnlessGeneral()");

        const temp = document.getElementById("new_work_request_number_textfield");

        temp.insertAdjacentHTML("afterend", `<div class="errorMustAddWorkRequestNumber" id="error_wr_already_exists">Must Enter Work Request Number Unless To-Do is of Type "General"</li>`);
        setTimeout(() => {
            const temp = document.getElementById("error_wr_already_exists");
            temp.remove();
        }, this.promptDuration);  
    }

    displayCommentTypedNotAdded() {
        console.log("Entered - displayCommentTypedNotAdded()");

        const temp = document.getElementById("new_work_request_number_textfield");
        temp.insertAdjacentHTML("afterend", `<div class="errorMessageCommentTypedNotEntered" id="error_comment_typed_not_entered">Comment Typed But Not Added</li>`);
        setTimeout(() => {
            const temp = document.getElementById("error_comment_typed_not_entered");
            temp.remove();
        }, this.promptDuration);  
    
    }

    displayNoteTypedNotAdded() {
        console.log("Entered - displayNoteTypedNotAdded()");

        const temp = document.getElementById("new_work_request_number_textfield");
        temp.insertAdjacentHTML("afterend", `<div class="errorMessageCommentTypedNotEntered" id="error_comment_typed_not_entered">Note Typed But Not Added</li>`);
        setTimeout(() => {
            const temp = document.getElementById("error_comment_typed_not_entered");
            temp.remove();
        }, this.promptDuration);  
    
    }

    displaySelectCommentType() {
        console.log("Entered - displaySelectCommentType()");

        const temp = document.getElementById("add_tab_comment_type_dd_container");
        temp.insertAdjacentHTML("afterend", `<div class="errorMessageSelectCommentType" id="error_select_comment_type">Must Select Comment Type</li>`);
        setTimeout(() => {
            const temp = document.getElementById("error_select_comment_type");
            temp.remove();
        }, this.promptDuration);  
    }

    displayEnterHouseNumber() {
        console.log("Entered - displayEnterHouseNumber()");

        const temp = document.getElementById("address_element_container_house_number");
        temp.insertAdjacentHTML("afterend", `<div class="errorMessageEnterHouseNumber" id="error_enter_house_number">Enter House Number</li>`);
        setTimeout(() => {
            const temp = document.getElementById("error_enter_house_number");
            temp.remove();
        }, this.promptDuration);  
    }

    displayEnterStreetName() {
        console.log("Entered - displayEnterStreetName()");

        const temp = document.getElementById("address_element_container_street_name");
        temp.insertAdjacentHTML("afterend", `<div class="errorMessageEnterStreetName" id="error_enter_stree_name">Enter Street Name</li>`);
        setTimeout(() => {
            const temp = document.getElementById("error_enter_stree_name");
            temp.remove();
        }, this.promptDuration);  
    }

    displayEnterCountyCity() {
        console.log("Entered - displayEnterCountyCity()");

        const temp = document.getElementById("address_element_container_county");
        temp.insertAdjacentHTML("afterend", `<div class="errorMessageEnterCountyCity" id="error_enter_county_city">Enter County/City Name</li>`);
        setTimeout(() => {
            const temp = document.getElementById("error_enter_county_city");
            temp.remove();
        }, this.promptDuration);  
    }
    
    displayEnterZip() {
        console.log("Entered - displayEnterZip()");

        const temp = document.getElementById("address_element_container_zip");
        temp.insertAdjacentHTML("beforebegin", `<div class="errorMessageEnterZip" id="error_enter_zip">Enter Zip Code</li>`);
        setTimeout(() => {
            const temp = document.getElementById("error_enter_zip");
            temp.remove();
        }, this.promptDuration);  
    }

    displayInvalidMoveToDate() {
        console.log("Entered - displayInvalidMoveToDate()");

        const temp = document.getElementById("move_to_display_day_of_week_date");
        temp.insertAdjacentHTML("beforebegin", `<div class="errorMessageInvalidMoveToDate" id="error_invalid_move_to_date">Invalid Date</li>`);
        setTimeout(() => {
            const temp = document.getElementById("error_invalid_move_to_date");
            temp.remove();
        }, this.promptDuration); 
    }

    displayInvalidDateToDoDisplay() {
        console.log("Entered - displayInvalidDateToDoDisplay()");

        const temp = document.getElementById("to_do_display_day_of_week_date");
        temp.insertAdjacentHTML("beforebegin", `<div class="errorMessageInvalidDateToDoDisplay" id="error_invalid_date_move_to_display">Invalid Date</li>`);
        setTimeout(() => {
            const temp = document.getElementById("error_invalid_date_move_to_display");
            temp.remove();
        }, this.promptDuration); 
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
            this.commentsGeneral = new Comments(commentsGeneral);
            this.customerContacted = customerContacted;
            this.creationDate = creationDate;
        }

    wrAddressType() {
        console.log("Entered - wrAddressType()");

        const str = document.createElement('wrAddressTypeContainer');

        str.innerHTML = `<li class="wrAddressTypeWrNumber">WR#: ${this.workRequestNumber}</li>` + 
                    `<li class="wrAddressTypeStreetInfo">${this.houseNumber} ${this.streetName}</li>` +
                    `<li class="wrAddressTypeCountyInfo">${this.countyCity}, VA ${this.zipCode}</li>` +
                    `<li class="wrAddressTypeWrType">${this.wrType}</li>`;
        
        str.classList.add("wrAddressTypeContainer");

        return str; 
    }

    makeRowElement() {
        console.log("Entered - workRequest - makeRowElement()");

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
        //rowElement.insertAdjacentHTML("beforeend", `<li class="allWrDisplayPOCContainer">${
            //`<li class="pocWrapper">${"(Owner) " + this.ownerName + "<br>" + this.ownerNumber + "<br>" + this.ownerEmail}</li>`
        //}</li>`);

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

    compare(wr) {
        console.log("Entered - workRequest - compare(" + wr + ")");

        if (this.houseNumber == wr.houseNumber && this.streetName == wr.streetName && this.countyCity == wr.countyCity && 
            this.zipCode == wr.zipCode && this.priorityNumber == wr.priorityNumber && this.ownerName == wr.ownerName &&
            this.ownerNumber == wr.ownerNumber && this.ownerEmail == wr.ownerEmail && this.builderName == wr.builderName &&
            this.builderNumber == wr.builderNumber && this.builderEmail == wr.builderEmail && this.otherName == wr.otherName &&
            this.otherNumber == wr.otherNumber && this.otherEmail == wr.otherEmail && this.wrType == wr.wrType && this.crd == wr.crd && 
            this.rcd == wr.rcd && this.generalStatus == wr.generalStatus && this.permit.permitStatus == wr.permit.permitStatus &&
            this.easementRequestStatus == wr.easementRequestStatus) {
                return 1;
            } else {
                return 0;
            }
    }


    toString() {
        console.log("Entered - toString()");

        const wrSTR = "workRequestNumber:" + this.workRequestNumber + "*ENDCHAR*" +
                "houseNumber:" + this.houseNumber + "*ENDCHAR*" +
                "streetName:" + this.streetName + "*ENDCHAR*" +
                "countyCity:" + this.countyCity + "*ENDCHAR*" +
                "zipCode:" + this.zipCode + "*ENDCHAR*" +
                "priorityNumber:" + this.priorityNumber + "*ENDCHAR*" +
                "ownerName:" + this.ownerName + "*ENDCHAR*" +
                "ownerNumber:" + this.ownerNumber + "*ENDCHAR*" +
                "ownerEmail:" + this.ownerEmail + "*ENDCHAR*" +
                "builderName:" + this.builderName + "*ENDCHAR*" +
                "builderNumber:" + this.builderNumber + "*ENDCHAR*" +
                "builderEmail:" + this.builderEmail + "*ENDCHAR*" +
                "otherName:" + this.otherName + "*ENDCHAR*" +
                "otherNumber:" + this.otherNumber + "*ENDCHAR*" +
                "otherEmail:" + this.otherEmail + "*ENDCHAR*" +
                "wrType:" + this.wrType + "*ENDCHAR*" +
                "crd:" + this.crd + "*ENDCHAR*" +
                "rcd:" + this.rcd + "*ENDCHAR*" +
                "generalStatus:" + this.generalStatus + "*ENDCHAR*" +
                "permit:" + this.permit.toString() + "*ENDCHAR*" + // 9 lines
                "easementRequestStatus:" + this.easementRequestStatus + "*ENDCHAR*" +
                "commentsGeneral:" + this.commentsGeneral + "*ENDCHAR*" +
                "customerContacted:" + this.customerContacted + "*ENDCHAR*" +
                "creationDate:" + this.creationDate + "*ENDCHAR*"; /* 23 + 9 lines */
        return wrSTR;
    }

}
/* For Paginated */
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
/* To paginate allWrList */
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
            if (localCount == 8) { //*change*
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
        for (let i = 0; i < tempLength % 8; i++) { //*change*
            curPage[i] = pages[pages.length - 1].content[i];
        }
        
        const tempPage = new Page(curPage);
        pages[pages.length - 1] = tempPage;
        return pages;
    }


}
class PaginatedComments {
    constructor(pageSize, tab) {
        this.pageSize = pageSize;
        this.pages = [[]];
        this.tab = tab;
        this.list = [];
    }

    addToDoNote(note, completed) {
        console.log("Entered - PaginatedComments - addToDoNote(note =" + note + " completed = " + completed + ")");
        this.list.push([note, completed]);

        let temp = [];
        let count = 0;

        for (var i = this.list.length - 1; i >= 0; i--) {
            if (count < this.pageSize) {
                temp.push(this.list[i]);
                count++;
            }
        }

        updateComments(temp, "addToDo");

        if (this.list.length > this.pageSize) {
            document.getElementById("add_tab_display_to_do_row_three_prev_next_container").classList.remove("hidden");
            document.getElementById("add_tab_display_to_do_row_three_prev_next_container").style.marginLeft = '410px';
            document.getElementById("add_tab_display_to_do_row_three_box_top_buttons_container").style.marginLeft = '35px';
            document.getElementById("add_tab_display_to_do_next_button").disabled = false;
        }

        

    }

    add(comment) {
        console.log("Entered - PaginatedComments - add()");
        this.list.push(comment);

        let temp = [];
        let count = 0;

        for (var i = this.list.length - 1; i >= 0; i--) {
           
            if (count < this.pageSize) {
                temp.push(this.list[i]);
                count++;
            }
            
        }

        if (this.tab == "addWr") {
            updateComments(temp, "addWr");
        } else if (this.tab == "addPermit") {
            updateComments(temp, "addPermit");
        } else if (this.tab == "addComment") {
            updateComments(temp, "addComment");
        } else if (this.tab == "addToDo") {
            updateComments(temp, "addToDo");
        }

        if (this.list.length > this.pageSize) {
            /* Revealing Prev Next Buttons */
            if (this.tab == "addWr") {
                document.getElementById("add_tab_wr_comments_prev_next_container").classList.remove("hidden");
                document.getElementById("add_tab_comments_remove_button").style.marginLeft = '100px';
                document.getElementById("add_tab_wr_page_next_button").disabled = false;
            } else if (this.tab == "addPermit") {
                document.getElementById("add_tab_permit_comments_prev_next_container").classList.remove("hidden");
                document.getElementById("add_tab_permit_comments_remove_button").style.marginLeft = '100px';
                document.getElementById("add_tab_permit_page_next_button").disabled = false;
            } else if (this.tab == "addComment") {
                document.getElementById("add_comment_tab_next_prev_container").classList.remove("hidden");
                document.getElementById("add_comment_tab_next_button").disabled = false;   
            } else if (this.tab == "addToDo") {
                document.getElementById("add_tab_display_to_do_row_three_prev_next_container").classList.remove("hidden");
                document.getElementById("add_tab_display_to_do_row_three_prev_next_container").style.marginLeft = '410px';
                document.getElementById("add_tab_display_to_do_row_three_box_top_buttons_container").style.marginLeft = '35px';
                document.getElementById("add_tab_display_to_do_next_button").disabled = false;
            }
                 
        }
    }
}
/* Class sets default color values for some date and dropdown elements. Can load in saved file of 
   user color preferences separately from allWr list */
class ColorPreferences {
    /* Sets all color defaults */
    constructor() {

            /* CRD */
        this.crdNotSet = 'rgba(219, 234, 6, 0.792)'; //'#dbea06ca'; // yellowish
        this.crdPastToday = 'rgba(237, 57, 57, 0.765)' //'#ed3939c3'; // Red
        this.crdUnder14 = 'rgba(255, 49, 145, 0.804)' //'#ff3191cd'; // Magenta
        this.crdUnder31 = 'rgba(234, 143, 6, 0.792)'; //'#ea8f06ca'; // orangish
        this.crdOver31 = "white"; // white

            /* CRD */
        this.rcdNotSet = 'rgba(219, 234, 6, 0.792)'; //'#dbea06ca'; // yellowish
        this.rcdPastToday = 'rgba(237, 57, 57, 0.765)' //'#ed3939c3'; // Red
        this.rcdUnder14 = 'rgba(255, 49, 145, 0.804)' //'#ff3191cd'; // Magenta
        this.rcdUnder31 = 'rgba(234, 143, 6, 0.792)'; //'#ea8f06ca'; // orangish
        this.rcdOver31 = "white"; // white

            /* Permit Status */
        this.permitStatusNotSet = 'rgba(219, 234, 6, 0.792)'; //'#dbea06ca'; // yellowish
        this.permitStatusApplied = 'rgba(39, 252, 203, 0.83)'; // tealish
        this.permitStatusReceived = 'rgba(87, 245, 43, 0.627)'; // green
        this.permitStatusDontNeed = 'rgba(87, 245, 43, 0.627)'; // green
        this.permitStatusExpiringSoon = 'rgba(234, 143, 6, 0.792)'; //'#ea8f06ca'; // orangish
        this.permitStatusExtensionSubmitted = 'rgba(234, 143, 6, 0.792)'; //'#ea8f06ca'; // orangish
        this.permitStatusExpired = 'rgba(255, 49, 145, 0.804)' //'#ff3191cd'; // Magenta
        this.permitStatusHaventChecked = 'rgba(219, 234, 6, 0.792)'; //'#dbea06ca'; // yellowish

            /* Permit Start Date */
        this.permitStartNotSet = 'rgba(219, 234, 6, 0.792)'; //'#dbea06ca'; // yellowish
        this.permitStartExpired = 'rgba(255, 49, 145, 0.804)' //'#ff3191cd'; // Magenta
        this.permitStartStarted = 'rgba(87, 245, 43, 0.627)'; // greenish
        this.permitStartSet = 'rgba(39, 252, 203, 0.83)'; // tealish

            /* Permit End Date */
        this.permitEndNotSet = 'rgba(219, 234, 6, 0.792)'; //'#dbea06ca'; // yellowish
        this.permitEndPastToday = 'rgba(237, 57, 57, 0.765)' //'#ed3939c3'; // Red
        this.permitEndUnder14 = 'rgba(255, 49, 145, 0.804)' //'#ff3191cd'; // Magenta
        this.permitEndUnder31 = 'rgba(234, 143, 6, 0.792)'; //'#ea8f06ca'; // orangish
        this.permitEndOver31 = "white"; // white

            /* Easement Status */
        this.easementStatusNotSet = 'rgba(219, 234, 6, 0.792)'; //'#dbea06ca'; // yellowish
        this.easementStatusNeedEasement = 'rgba(255, 49, 145, 0.804)' //'#ff3191cd'; // Magenta
        this.easementStatusPending = 'rgba(219, 234, 6, 0.792)'; //'#dbea06ca'; // yellowish
        this.easementStatusDontNeed = 'rgba(87, 245, 43, 0.627)'; // green
        this.easementStatusHaveEasement = 'rgba(87, 245, 43, 0.627)'; // green
        this.easementStatusWaiting = 'rgba(39, 252, 203, 0.83)'; // tealish
        this.easementStatusHaventChecked = 'rgba(219, 234, 6, 0.792)'; //'#dbea06ca'; // yellowish
    }

    change(setting, value) {
        console.log("Entered - ColorPreferences - change(setting: " + setting + ", value: " + value + ")");

        if (setting == "crdNotSet") {
            this.crdNotSet = value;
        } else if (setting == "crdPastToday") {
            this.crdPastToday = value;
        } else if (setting == "crdUnder14") {
            this.crdUnder14 = value;
        } else if (setting == "crdUnder31") {
            this.crdUnder31 = value;
        } else if (setting == "crdOver31") {
            this.crdOver31 = value;
        } else if (setting == "rcdNotSet") {
            this.rcdNotSet = value;
        } else if (setting == "rcdPastToday") {
            this.rcdPastToday = value;
        } else if (setting == "rcdUnder14") {
            this.rcdUnder14 = value;
        } else if (setting == "rcdUnder31") {
            this.rcdUnder31 = value;
        } else if (setting == "rcdOver31") {
            this.rcdOver31 = value;
        } else if (setting == "permitStatusNotSet") {
            this.permitStatusNotSet = value;
        } else if (setting == "permitStatusApplied") {
            this.permitStatusApplied = value;
        } else if (setting == "permitStatusReceived") {
            this.permitStatusReceived = value;
        } else if (setting == "permitStatusDontNeed") {
            this.permitStatusDontNeed = value;
        } else if (setting == "permitStatusExpiringSoon") {
            this.permitStatusExpiringSoon = value;
        } else if (setting == "permitStatusExtensionSubmitted") {
            this.permitStatusExtensionSubmitted = value;
        } else if (setting == "permitStatusExpired") {
            this.permitStatusExpired = value;
        } else if (setting == "permitStatusHaventChecked") {
            this.permitStatusHaventChecked = value;
        } else if (setting == "permitStartNotSet") {
            this.permitStartNotSet = value;
        } else if (setting == "permitStartExpired") {
            this.permitStartExpired = value;
        } else if (setting == "permitStartStarted") {
            this.permitStartStarted = value;
        } else if (setting == "permitStartSet") {
            this.permitStartSet = value;
        } else if (setting == "permitEndNotSet") {
            this.permitEndNotSet = value;
        } else if (setting == "permitEndPastToday") {
            this.permitEndPastToday = value;
        } else if (setting == "permitEndUnder14") {
            this.permitEndUnder14 = value;
        } else if (setting == "permitEndUnder31") {
            this.permitEndUnder31 = value;
        } else if (setting == "permitEndOver31") {
            this.permitEndOver31 = value;
        } else if (setting == "easementStatusNotSet") {
            this.easementStatusNotSet = value;
        } else if (setting == "easementStatusNeedEasement") {
            this.easementStatusNeedEasement = value;
        } else if (setting == "easementStatusPending") {
            this.easementStatusPending = value;
        } else if (setting == "easementStatusDontNeed") {
            this.easementStatusDontNeed = value;
        } else if (setting == "easementStatusHaveEasement") {
            this.easementStatusHaveEasement = value;
        } else if (setting == "easementStatusWaiting") {
            this.easementStatusWaiting = value;
        } else if (setting == "easementStatusHaventChecked") {
            this.easementStatusHaventChecked = value;
        }
    }

    // Takes raw color value and returns text value
    getName(color) {
        console.log("Entered - ColorPreferences - getName(" + color + ")");

        if (color == "white") {
            return "White";
        } else if (color == '#dbea06ca' || color == 'rgba(219, 234, 6, 0.792)') {
            return "Yellow";
        } else if (color == '#ea8f06ca' || color == 'rgba(234, 143, 6, 0.792)') {
            return "Orange";
        } else if (color == '#ff3191cd' || color == 'rgba(255, 49, 145, 0.804)') {
            return "Magenta";
        } else if (color == '#ed3939c3' || color == 'rgba(237, 57, 57, 0.765)') {
            return "Red";
        } else if (color == 'rgba(87, 245, 43, 0.627)') {
            return "Green";
        } else if (color == 'rgba(39, 252, 203, 0.83)') {
            return "Teal";
        } else if (color == '#1913d9c3' || color == 'rgba(25, 19, 217, 0.765)') {
            return "Blue";
        } else if (color == '#ed39cfc3' || color == 'rgba(237, 57, 207, 0.765)') {
            return "Pink";
        } else if (color == '#9722dfc3' || color == 'rgba(151, 34, 223, 0.765)') {
            return "Purple";
        }
    }

    getValue(setting) {
        console.log("Entered - ColorPreference - getValue(setting)");

            if (setting == "crdNotSet") {
                return this.crdNotSet;
            } else if (setting == "crdPastToday") {
                return this.crdPastToday;
            } else if (setting == "crdUnder14") {
                return this.crdUnder14;
            } else if (setting == "crdUnder31") {
                return this.crdUnder31;
            } else if (setting == "crdOver31") {
                return this.crdOver31;
            } else if (setting == "rcdNotSet") {
                return this.rcdNotSet;
            } else if (setting == "rcdPastToday") {
                return this.rcdPastToday;
            } else if (setting == "rcdUnder14") {
                return this.rcdUnder14;
            } else if (setting == "rcdUnder31") {
                return this.rcdUnder31;
            } else if (setting == "rcdOver31") {
                return this.rcdOver31;
            } else if (setting == "permitStatusNotSet") {
                return this.permitStatusNotSet;
            } else if (setting == "permitStatusApplied") {
                return this.permitStatusApplied;
            } else if (setting == "permitStatusReceived") {
                return this.permitStatusReceived;
            } else if (setting == "permitStatusDontNeed") {
                return this.permitStatusDontNeed;
            } else if (setting == "permitStatusExpiringSoon") {
                return this.permitStatusExpiringSoon;
            } else if (setting == "permitStatusExtensionSubmitted") {
                return this.permitStatusExtensionSubmitted;
            } else if (setting == "permitStatusExpired") {
                return this.permitStatusExpired;
            } else if (setting == "permitStatusHaventChecked") {
                return this.permitStatusHaventChecked;
            } else if (setting == "permitStartNotSet") {
                return this.permitStartNotSet;
            } else if (setting == "permitStartExpired") {
                return this.permitStartExpired;
            } else if (setting == "permitStartStarted") {
                return this.permitStartStarted;
            } else if (setting == "permitStartSet") {
                return this.permitStartSet;
            } else if (setting == "permitEndNotSet") {
                return this.permitEndNotSet;
            } else if (setting == "permitEndPastToday") {
                return this.permitEndPastToday;
            } else if (setting == "permitEndUnder14") {
                return this.permitEndUnder14;
            } else if (setting == "permitEndUnder31") {
                return this.permitEndUnder31;
            } else if (setting == "permitEndOver31") {
                return this.permitEndOver31;
            } else if (setting == "easementStatusNotSet") {
                return this.easementStatusNotSet;
            } else if (setting == "easementStatusNeedEasement") {
                return this.easementStatusNeedEasement;
            } else if (setting == "easementStatusPending") {
                return this.easementStatusPending;
            } else if (setting == "easementStatusDontNeed") {
                return this.easementStatusDontNeed;
            } else if (setting == "easementStatusHaveEasement") {
                return this.easementStatusHaveEasement;
            } else if (setting == "easementStatusWaiting") {
                return this.easementStatusWaiting;
            } else if (setting == "easementStatusHaventChecked") {
                return this.easementStatusHaventChecked;
            }
        
    }

    /* Takes in a string containing values to all ColorPreference variables */
    load(str) {
        console.log("Entered - ColorPreferences - load(str)");

        let data = [];

        while (str.length > 1) {
            const index = str.indexOf('*');
            const temp = str.substring(0, index);
            data.push(temp);
            str = str.substring(index + 1);
        }

        /* CRD */
        this.crdNotSet = data[0];
        this.crdPastToday = data[1];
        this.crdUnder14 = data[2];
        this.crdUnder31 = data[3];
        this.crdOver31 = data[4];

            /* CRD */
        this.rcdNotSet = data[5];
        this.rcdPastToday = data[6];
        this.rcdUnder14 = data[7];
        this.rcdUnder31 = data[8];
        this.rcdOver31 = data[9];

            /* Permit Status */
        this.permitStatusNotSet = data[10];
        this.permitStatusApplied = data[11];
        this.permitStatusReceived = data[12];
        this.permitStatusDontNeed = data[13];
        this.permitStatusExpiringSoon = data[14];
        this.permitStatusExtensionSubmitted = data[15];
        this.permitStatusExpired = data[16];
        this.permitStatusHaventChecked = data[17];

            /* Permit Start Date */
        this.permitStartNotSet = data[18];
        this.permitStartExpired = data[19];
        this.permitStartStarted = data[20];
        this.permitStartSet = data[21];
            /* Permit End Date */
        this.permitEndNotSet = data[22];
        this.permitEndPastToday = data[23];
        this.permitEndUnder14 = data[24];
        this.permitEndUnder31 = data[25];
        this.permitEndOver31 = data[26];

            /* Easement Status */
        this.easementStatusNotSet = data[27];
        this.easementStatusNeedEasement = data[28];
        this.easementStatusPending = data[29];
        this.easementStatusDontNeed = data[30];
        this.easementStatusHaveEasement = data[31];
        this.easementStatusWaiting = data[32];
        this.easementStatusHaventChecked = data[33];
    }

    toString() {
        console.log("Entered - ColorPreferences - toString()");

        const str = this.crdNotSet + "*" + this.crdPastToday + "*" + this.crdUnder14 + "*" + this.crdUnder31 + "*" + this.crdOver31 + "*" + 
            this.rcdNotSet + "*" + this.rcdPastToday + "*" + this.rcdUnder14 + "*" + this.rcdUnder31 + "*" + this.rcdOver31 + "*" + 
            this.permitStatusNotSet + "*" + this.permitStatusApplied + "*" + this.permitStatusReceived + "*" + this.permitStatusDontNeed + "*" + 
            this.permitStatusExpiringSoon + "*" + this.permitStatusExtensionSubmitted + "*" + this.permitStatusExpired + "*" + 
            this.permitStatusHaventChecked + "*" + this.permitStartNotSet + "*" + this.permitStartExpired + "*" + this.permitStartStarted + "*" + 
            this.permitStartSet + "*" + this.permitEndNotSet + "*" + this.permitEndPastToday + "*" + this.permitEndUnder14 + "*" + 
            this.permitEndUnder31 + "*" + this.permitEndOver31 + "*" + this.easementStatusNotSet + "*" + this.easementStatusNeedEasement + "*" + 
            this.easementStatusPending + "*" + this.easementStatusDontNeed + "*" + this.easementStatusHaveEasement + "*" +
            this.easementStatusWaiting + "*" + this.easementStatusHaventChecked + "*";  //34 *'s

        return str;
    }
}
class SystemPreferences {
    constructor() {
        this.rowsOnPage = 8;
        this.permitCommentCount = 6;
        this.tempCommentsCount = 7;
        this.tempAllCommentCount = 14;
        this.tempNotesCount = 3;
        this.linesPerPageToDo = 19;
        this.promptDuration = 3;
    }

    load(str) {
        console.log("Entered - SystemPreferences - load(str)");

        console.log(str);

        let data = [];
        let count = 0;

        while (count < 7) {
            const index = str.indexOf('@');
            const temp = str.substring(0, index);
            data.push(temp);
            str = str.substring(index + 1);
            count++;
        }

        this.rowsOnPage = data[0];
        this.permitCommentCount = data[1];
        this.tempCommentsCount = data[2];
        this.tempAllCommentCount = data[3];
        this.tempNotesCount = data[4];
        this.linesPerPageToDo = data[5];
        this.promptDuration = data[6];

        console.log("linesPerPageToDo value = ");
        console.log(this.linesPerPageToDo);
    }

    toString() {
        console.log("Entered - SystemPreferences - toString()");

        let str = "";

        str += this.rowsOnPage + "@" + this.permitCommentCount + "@" + this.tempCommentsCount + "@" + this.tempAllCommentCount + "@" +
        this.tempNotesCount + "@" + this.linesPerPageToDo + "@" + this.promptDuration + "@";

        console.log("Returning str =");
        console.log(str);

        return str;
    }
}

class DayOfWeekPageObject {
    constructor(tab, fromDate, toDate) {
        this.tab = tab;
        this.fromDate = fromDate;
        this.toDate = toDate;

        // Setting default current as today
        const d = new Date();
        this.cur = d.getDay();
    }

    makeRowElement() {
        console.log("Entered - DayOfWeekPageObject - makeRowElement()");

        let rowElement = document.createElement("dayOfWeekPageObject");
        rowElement.id  = "day_of_week_page_object_" + this.tab + "_to_do"; // need to fix or change add to add_to_do
        rowElement.classList.add("dayOfWeekPageObject");        

        /* Upper Section - Dates */
        let dayOfWeekDateContainer = document.createElement("dayOfWeekDateContainer");
        dayOfWeekDateContainer.id = "day_of_week_date_container_" + this.tab;
        dayOfWeekDateContainer.classList.add("dayOfWeekDateContainer");

        dayOfWeekDateContainer.insertAdjacentHTML("beforeend", `<div class="dayOfWeekDate" id="${this.tab}_tab_day_of_week_from_date">From: ${formatDateNormal(this.fromDate)}</div>`);
        dayOfWeekDateContainer.insertAdjacentHTML("beforeend", `<div class="dayOfWeekDateResetButton">&#8634</div>`);
        dayOfWeekDateContainer.insertAdjacentHTML("beforeend", `<div class="dayOfWeekDate" id="${this.tab}_tab_day_of_week_to_date">To: ${formatDateNormal(this.toDate)}</div>`);

        rowElement.insertAdjacentElement("beforeend", dayOfWeekDateContainer);


        /* Lower Section - Boxes */
        let dayOfWeekBoxContainer = document.createElement("dayOfWeekBoxContainer");
        dayOfWeekBoxContainer.id = "day_of_week_box_container_" + this.tab;
        dayOfWeekBoxContainer.classList.add("dayOfWeekBoxContainer");

        dayOfWeekBoxContainer.insertAdjacentHTML("beforeend", `<button type="button" class="dayOfWeekDateButton">&#8592</button>`);
        dayOfWeekBoxContainer.insertAdjacentHTML("beforeend", `<div class="dayOfWeekBox" id="${this.tab}_tab_day_of_week_box_sunday">Su</div>`);
        dayOfWeekBoxContainer.insertAdjacentHTML("beforeend", `<div class="dayOfWeekBox hidden activeTab" id="${this.tab}_tab_day_of_week_box_sunday_active">Su</div>`);
        dayOfWeekBoxContainer.insertAdjacentHTML("beforeend", `<div class="dayOfWeekBox" id="${this.tab}_tab_day_of_week_box_monday">M</div>`);
        dayOfWeekBoxContainer.insertAdjacentHTML("beforeend", `<div class="dayOfWeekBox hidden activeTab" id="${this.tab}_tab_day_of_week_box_monday_active">M</div>`);
        dayOfWeekBoxContainer.insertAdjacentHTML("beforeend", `<div class="dayOfWeekBox" id="${this.tab}_tab_day_of_week_box_tuesday">Tu</div>`);
        dayOfWeekBoxContainer.insertAdjacentHTML("beforeend", `<div class="dayOfWeekBox hidden activeTab" id="${this.tab}_tab_day_of_week_box_tuesday_active">Tu</div>`);
        dayOfWeekBoxContainer.insertAdjacentHTML("beforeend", `<div class="dayOfWeekBox" id="${this.tab}_tab_day_of_week_box_wednesday">W</div>`);
        dayOfWeekBoxContainer.insertAdjacentHTML("beforeend", `<div class="dayOfWeekBox hidden activeTab" id="${this.tab}_tab_day_of_week_box_wednesday_active">W</div>`);
        dayOfWeekBoxContainer.insertAdjacentHTML("beforeend", `<div class="dayOfWeekBox" id="${this.tab}_tab_day_of_week_box_thursday">Th</div>`);
        dayOfWeekBoxContainer.insertAdjacentHTML("beforeend", `<div class="dayOfWeekBox hidden activeTab" id="${this.tab}_tab_day_of_week_box_thursday_active">Th</div>`);
        dayOfWeekBoxContainer.insertAdjacentHTML("beforeend", `<div class="dayOfWeekBox" id="${this.tab}_tab_day_of_week_box_friday">F</div>`);
        dayOfWeekBoxContainer.insertAdjacentHTML("beforeend", `<div class="dayOfWeekBox hidden activeTab" id="${this.tab}_tab_day_of_week_box_friday_active">F</div>`);
        dayOfWeekBoxContainer.insertAdjacentHTML("beforeend", `<div class="dayOfWeekBox" id="${this.tab}_tab_day_of_week_box_saturday">Sa</div>`);
        dayOfWeekBoxContainer.insertAdjacentHTML("beforeend", `<div class="dayOfWeekBox hidden activeTab" id="${this.tab}_tab_day_of_week_box_saturday_active">Sa</div>`);
        dayOfWeekBoxContainer.insertAdjacentHTML("beforeend", `<button type="button" class="dayOfWeekDateButton">&#8594</button>`);

        rowElement.insertAdjacentElement("beforeend", dayOfWeekBoxContainer);

        return rowElement;
    }

}

class PaginatedToDoPageElement {
    constructor(linesPerPage, toDoMasterList) {
        this.pages = [];
        this.curPage = [];
        this.linesPerPage = linesPerPage;
        this.toDoMasterList = toDoMasterList;
    }

    /* Takes in an array of html lines and either adds them to current 
    page or makes a new page and splits up the input - keeping header 
    of type for next page */
    add(listElem) {
        console.log("Entered - PaginatedToDoPageElement - add(listElem");

        if (listElem.length == 0) {
            return;
        }

        /* If last page added wasn't full, populates curPage to add to it */
        if (this.pages.length != 0 && this.pages[this.pages.length - 1].length < this.linesPerPage - 1 && this.curPage.length != 0) {
            console.log("curPage.length < this.linesPerPage - 1 - poping last elem of pages");
            
            this.curPage = this.pages.pop();
            const cur = this.curPage.pop();
            const temp = cur.substring(24); // removes last elem from class
            let str = "<div class=\"";
            str += temp;

            this.curPage.push(str);
        }
        
        if (listElem.length + this.curPage.length <= this.linesPerPage) { // can add to same page
            console.log("adding to same page (curPage)");
            for (var i = 0; i < listElem.length; i++) {
                this.curPage.push(listElem[i]);
            }

            // Adding updated page back into list
            if (this.curPage.length == this.linesPerPage) { // page is full 
                console.log("page is full - formatting last elem, pushing to pages, reseting curPage");
                this.curPage[this.curPage.length - 1] = this.formatLastElem(this.curPage[this.curPage.length - 1]);
                this.pages.push(this.curPage);
                this.curPage = [];
            } else if (this.curPage.length >= (this.linesPerPage - 1)) { // page is almost full - wouldn't add header
                console.log("page is almost full - formatting last elem, pushing to pages, reseting curPage")
                
                
                this.curPage[this.curPage.length - 1] = this.formatLastElem(this.curPage[this.curPage.length - 1]);
                this.pages.push(this.curPage);
                this.curPage = [];
            } else { // page is not full
                console.log("page is not full - formatting last elem and pushing to pages");
                this.curPage[this.curPage.length - 1] = this.formatLastElem(this.curPage[this.curPage.length - 1]);
                this.pages.push(this.curPage);
                // might have issues here - was this.pages.length - 1
            }
        } else { // Have to split and make new page
            console.log("have to split and make new page");
            let lastIndex = this.linesPerPage - this.curPage.length ; // Maximum number of lines I can add to the current page

            while (lastIndex > 0) { // when last index = 0, we are at type header
               
                    // listElem[lastIndex] = the latest I can cut
                if (listElem[lastIndex].includes("toDoObjectContainer") && !listElem[lastIndex - 1].includes("toDoListTypeBorder")) {  // found To-Do Object and can cut
                   
                    const toAdd = listElem.slice(0, lastIndex);
                    const rest = listElem.slice(lastIndex);
                    let restFormatted = [];
                    restFormatted.push(listElem[0]);
                    
                    // Adding "Continued" to front of type header
                    let rightIndex = listElem[0].lastIndexOf(":</b>");
                    let newElem = listElem[0].substring(0, rightIndex);
                    newElem += " Continued";
                    newElem += listElem[0].substring(rightIndex);
    
                    restFormatted.push(newElem);
                    
                    // keeps type header on to-do for next page
                    for (var i = 0; i < rest.length; i++) {
                        restFormatted.push(rest[i]);
                    }

                    // adding cut list to current page
                    for (var i = 0; i < toAdd.length; i++) {
                        this.curPage.push(toAdd[i]);
                    }

                    // adding (now full) current page to pages
                    this.curPage[this.curPage.length - 1] = this.formatLastElem(this.curPage[this.curPage.length - 1]);
                    this.pages.push(this.curPage);
                    // clearing current page
                    this.curPage = [];
                  
                    restFormatted = restFormatted.slice(1);

                    // adding rest of list with type header at front
                    this.add(restFormatted);
                    return; // have to return to avoid entering code block below

                } else if (listElem[lastIndex].includes("toDoNoteContainer")) { // found note object and need to move backwards and check again
                    console.log("found note object - need to move backwards - minusing lastIndex");
                    lastIndex--;
                    console.log("lastIndex =");
                    console.log(lastIndex);
                } else {
                    lastIndex--;
                    console.log("SHOULD NOT SEE THIS!!!");                
                }
            }

            // If I get down here, I can't cut the toDo so I'm pushing the current page and adding the input to a new page by itself
                /* In theory, one to-do with a list of notes longer than the line limit could break this but when I go to i'm guessing 15+ 
                lines per page, one to-do with 15 notes should be unrealistic - would have to patch later */
            console.log("Couldn't cut - formatting and pushing cur page");
            console.log(this.curPage);

            if (this.curPage != undefined && this.curPage.length > 0) {
                console.log("curPage not empty - pushed")
                this.curPage[this.curPage.length - 1] = this.formatLastElem(this.curPage[this.curPage.length - 1]);
           
                this.pages.push(this.curPage);
            } else {
                console.log("curPage undefined or empty - not pushed");
            }
            
           
            this.curPage = [];
            if (listElem.length > this.linesPerPage) {
                console.log("Why are you trying to break shit? Probably to many notes per one to-do - can't trim to-do's notes and can't add");
            } else if (this.curPage != listElem) {
                console.log("in last conditional - adding listElem");
               
                this.add(listElem);
            }
        }
    }

    /* Adds bottom border to last elem of page */
    formatLastElem(elem) {
        console.log("Entered - PaginatedToDoPageElement - formatLastElem(" + elem + ")");

        const firstIndex = elem.indexOf("<div class=\"");

        const tempElem = elem.slice((firstIndex + 12));
        let newElem = "<div class=\"lastToDoElem " + tempElem;

        /*const tempWrNum = elem.slice((firstIndex + 12));

        let str = "";
        console.log(this.toDoMasterList);
        for (var i = 0; i < this.toDoMasterList.list.length; i++) {
            const curDay = this.toDoMasterList.list[i].flatten();

            for (var j = 0; j < curDay.length; j++) {
                console.log("tempWrNum = ");
                console.log(tempWrNum);
                if (curDay[j].workRequestNumber == tempWrNum) {
                    str = curDay[j].addressStr;
                    break;
                }
            }
        }

        let newElem = "<div class=\"lastToDoElem " + str;*/

        return newElem;
    }

    display(page) {
        console.log("Entered - PaginatedToDoPageElement - display(" + page + ")");

        console.log(this.pages);

        const index = page - 1;
        const toDoRowElementContainer = document.getElementById("to_do_display_row_element_container");

        //document.getElementById("to_do_tab_prev_next_container").classList.remove("hidden");
            
        toDoRowElementContainer.innerHTML = "";

        /* Adding lines to page */
        for (var i = 0; i < this.pages[index].length; i++) {
            toDoRowElementContainer.insertAdjacentHTML("beforeend", this.pages[index][i]);
        }

        
        if (this.pages.length <= 1) { // only one page - no buttons needed 
            console.log("disabling next button - one page");
            document.getElementById("to_do_tab_page_next_button").disabled = true;

        } 

        if (this.pages.length == page) { // last page
            console.log("disabling next button - last page");
            document.getElementById("to_do_tab_page_next_button").disabled = true;
        }
        if (page == 1) {
            console.log("disabling prev button");
            document.getElementById("to_do_tab_page_prev_button").disabled = true;
        }
        if (page > 1) {
            console.log("enabling prev button");
            document.getElementById("to_do_tab_page_prev_button").disabled = false;
        }

        // Checking to see if prev/next buttons are needed 
        if (this.pages.length > page) {
            console.log("enabling next button");
            document.getElementById("to_do_tab_page_next_button").disabled = false;
        }

        if (document.getElementById("to_do_tab").classList.contains("hidden")) {
            document.getElementById("to_do_tab_prev_next_container").classList.remove("hidden");
        } else {
            document.getElementById("to_do_tab_prev_next_container").classList.add("hidden");
        }
        

    }
    
    toString() {
        console.log("Entered - PaginatedToDoPageElement - toString()");

        let str = "";
        if (this.curPage.length > 0) {
            for (var i = 0; i < this.curPage.length; i++) {
                str += this.curPage[i];
            }
        }

        for (var i = 0; i < this.pages.length; i++) {
            for (var j = 0; j < this.pages[i].length; j++) {
                str += this.pages[i][j];
            }
        }

        return str;
    }
}

// Master list of all ToDoDayObjects
class ToDoMasterList {
    constructor(linesPerPage) {
        this.list = []; // list of all ToDoDay objects
        this.linesPerPage = linesPerPage;
    }

    /* Checks some of the to-do types to maintain a unique list - 
        EX. would not need multiple svc calc to-do's for same wr - 
        first used / created for initial permit end date prompt -
        don't want to prompt user to add to-do if one already exists */
        // Checking - Site Visit, Svc Calc, Check Njuns, Check Permit, Check Easement, Design, and Revision Lists */
    toDoTypeExistsForWorkRequest(type, wrNum) {
        console.log("Entered - ToDoMasterList - toDoTypeExistsForWorkRequest(" + type + ", " + wrNum + ")");

        /* Go through every day - for each day, check to-do list of type based on param 
        if a to-do has a wrNum and it is equal to wrNum param, return true 
        returns false at end once all to-do's have been checked. */
        for (var i = 0; i < this.list.length; i++) {
            if (type == "site_visit") { /* Checking Check/ Apply Permit List */
                for (var j = 0; j < this.list[i].siteVisitList.length; j++) {
                    if (this.list[i].siteVisitList[j].workRequestNumber != undefined && this.list[i].siteVisitList[j].workRequestNumber == wrNum) {
                        return this.list[i].siteVisitList[j].toDoId;
                    }
                }
            } else if (type == "svc_calc") { /* Checking Svc Calc List */
                for (var j = 0; j < this.list[i].svcCalcList.length; j++) {
                    if (this.list[i].svcCalcList[j].workRequestNumber != undefined && this.list[i].svcCalcList[j].workRequestNumber == wrNum) {
                        return this.list[i].svcCalcList[j].toDoId;
                    }
                }
            
            } else if (type == "check_njuns") { /* Checking Check/ Apply NJUNS List */
                for (var j = 0; j < this.list[i].checkNJUNSList.length; j++) {
                    if (this.list[i].checkNJUNSList[j].workRequestNumber != undefined && this.list[i].checkNJUNSList[j].workRequestNumber == wrNum) {
                        return this.list[i].checkNJUNSList[j].toDoId;
                    }
                }
            } else if (type == "check_permit") { /* Checking Check/ Apply Permit List */
                for (var j = 0; j < this.list[i].checkPermitList.length; j++) {
                    if (this.list[i].checkPermitList[j].workRequestNumber != undefined && this.list[i].checkPermitList[j].workRequestNumber == wrNum) {
                        return this.list[i].checkPermitList[j].toDoId;
                    }
                }
            } else if (type == "check_easement") { /* Checking Check/ Apply Easement List */
                for (var j = 0; j < this.list[i].checkEasementList.length; j++) {
                    if (this.list[i].checkEasementList[j].workRequestNumber != undefined && this.list[i].checkEasementList[j].workRequestNumber == wrNum) {
                        return this.list[i].checkEasementList[j].toDoId;
                    }
                }
            } else if (type == "design") { /* Checking Design List */
                for (var j = 0; j < this.list[i].designList.length; j++) {
                    if (this.list[i].designList[j].workRequestNumber != undefined && this.list[i].designList[j].workRequestNumber == wrNum) {
                        return this.list[i].designList[j].toDoId;
                    }
                }
            } else if (type == "revisions") { /* Checking Revisions List */
                for (var j = 0; j < this.list[i].revisionsList.length; j++) {
                    if (this.list[i].revisionsList[j].workRequestNumber != undefined && this.list[i].revisionsList[j].workRequestNumber == wrNum) {
                        return this.list[i].revisionsList[j].toDoId;
                    }
                }
        } 
        }
        console.log("Returning False");
        return false;
    }

    /* Completes a To-Do based off of its type and index within the entire list - used when completing from all-to-do's view */
    completeByMasterIndex(type, masterIndex, tempToDoPageElement, tempFilteredToDoList, order) {
        console.log("Entered - ToDoMasterList - completeByMasterIndex(type = " + type + ", masterIndex = " + masterIndex + ",  tempToDoPageElement, order = " + order + ")");

        let count = masterIndex;

        let typeConverted = ""
        if (type == "contact_customer") {
            typeConverted = "Contact Customer";
        } else if (type == "site_visit") {
            typeConverted = "Site Visit";
        } else if (type == "svc_calc") {
            typeConverted = "Service Calc + Coding";
        } else if (type == "check_njuns") {
            typeConverted = "Check/ Apply - NJUNS";
        } else if (type == "check_permit") {
            typeConverted = "Check/ Apply - Permit";
        } else if (type == "check_easement") {
            typeConverted = "Check/ Apply - Easement";
        } else if (type == "design") {
            typeConverted = "Design";
        } else if (type == "revisions") {
            typeConverted = "Revisions";
        } else if (type == "general") {
            typeConverted = "General";
        } 

        /* Creating temporary ToDoDayObject to update display with */
        const tempToDoDayObject = new ToDoDayObject("0001-01-01", this.linesPerPage, this);

        for (var i = 0; i < tempFilteredToDoList.length; i++) {
            tempToDoDayObject.add(tempFilteredToDoList[i]);
        }

        if (order == "new_old") {
            for (var i = 0; i < this.list.length; i++) {
                let dayIndex = 0;
                let curDay = this.list[i].flatten();
    
                for (var j = 0; j < curDay.length; j++) {
                    console.log(curDay[j].type);
                    if (curDay[j].type == typeConverted) {
                        console.log("type == type");
                        if (count == 0) {
                            console.log("count == 0");
                            const curToDo = curDay[j];
    
                            this.removeById(curToDo.toDoId);
                            if (curToDo.completed == "0") {
                                curToDo.completed = "1";
                            } else {
                                curToDo.completed = "0";
                            }
                            this.add(curToDo);                           
                            tempToDoPageElement = injectHTMLToDoTabDisplay(tempToDoDayObject);
                            const curPage = new Number(document.getElementById("to_do_tab_current_page_box").innerHTML.trim());
                            tempToDoPageElement.display(curPage);
                            return;
                        } else {
                            count--;
                            dayIndex++;
                        }
                    }
                }
            }
        } else if (order == "old_new") {
            for (var i = this.list.length - 1; i >= 0; i--) {
                let curDay = this.list[i].flatten();

                /* Going through and counting to-do's of convertedType to have last index */
                let dayIndex = -1; // finding 1 to-do means index 0
                for (var j = 0; j < curDay.length; j++) {
                    if (curDay[j].type == typeConverted) {
                        dayIndex++;
                    }
                }

                for (var j = curDay.length - 1; j >= 0; j--) {
                    if (curDay[j].type == typeConverted) {
                        console.log("type == type");
                        if (count == 0) {
                            console.log("count == 0");
                            const curToDo = curDay[j];

                            this.removeById(curToDo.toDoId);
                            if (curToDo.completed == "0") {
                                curToDo.completed = "1";
                            } else {
                                curToDo.completed = "0";
                            }
                            this.add(curToDo);

                            tempToDoPageElement = injectHTMLToDoTabDisplay(tempToDoDayObject);
                            const curPage = new Number(document.getElementById("to_do_tab_current_page_box").innerHTML.trim());
                            tempToDoPageElement.display(curPage);
                            return;
                        } else {
                            count--;
                            dayIndex--;
                        }
                    }
                }
            }
        }
        
        console.log("Did Not Complete");

    }
    completeNoteByMasterIndex(type, masterIndex, noteIndex, tempToDoPageElement, tempFilteredToDoList, order) {
        console.log("Entered - ToDoMasterList - completeNoteByMasterIndex(type = " + type + ", masterIndex = " + masterIndex + ", noteIndex = " + noteIndex + ",  tempToDoPageElement, order = " + order + ")");

        let count = masterIndex;
        let noteCount = noteIndex;

        let typeConverted = ""
        if (type == "contact_customer") {
            typeConverted = "Contact Customer";
        } else if (type == "site_visit") {
            typeConverted = "Site Visit";
        } else if (type == "svc_calc") {
            typeConverted = "Service Calc + Coding";
        } else if (type == "check_njuns") {
            typeConverted = "Check/ Apply - NJUNS";
        } else if (type == "check_permit") {
            typeConverted = "Check/ Apply - Permit";
        } else if (type == "check_easement") {
            typeConverted = "Check/ Apply - Easement";
        } else if (type == "design") {
            typeConverted = "Design";
        } else if (type == "revisions") {
            typeConverted = "Revisions";
        } else if (type == "general") {
            typeConverted = "General";
        } 

        /* Creating temporary ToDoDayObject to update display with */
        const tempToDoDayObject = new ToDoDayObject("0001-01-01", this.linesPerPage, this);

        for (var i = 0; i < tempFilteredToDoList.length; i++) {
            tempToDoDayObject.add(tempFilteredToDoList[i]);
        }

        if (order == "new_old") {
            for (var i = 0; i < this.list.length; i++) {
                let dayIndex = 0;
                let curDay = this.list[i].flatten();

                for (var j = 0; j < curDay.length; j++) {
                    console.log(curDay[j].type);
                    if (curDay[j].type == typeConverted) {
                        console.log("type == type");
                        if (count == 0) {
                            console.log("count == 0");
                            const curToDo = curDay[j];
    
                            this.removeById(curToDo.toDoId);
                            console.log("curToDo =");
                            console.log(curToDo);
                            if (curToDo.notes[noteIndex][1] == "0") {
                                curToDo.notes[noteIndex][1] = "1";
                            } else {
                                curToDo.notes[noteIndex][1] = "0";
                            }
                            this.add(curToDo);                           
                            tempToDoPageElement = injectHTMLToDoTabDisplay(tempToDoDayObject);
                            const curPage = new Number(document.getElementById("to_do_tab_current_page_box").innerHTML.trim());
                            tempToDoPageElement.display(curPage);
                            return;
                        } else {
                            count--;
                            dayIndex++;
                        }
                    }
                }
            }
        } else if (order == "old_new") {
            for (var i = this.list.length - 1; i >= 0; i--) {
                let curDay = this.list[i].flatten();

                console.log("curday == ");
                console.log(curDay);

                /* Going through and counting to-do's of convertedType to have last index */
                let dayIndex = -1; // finding 1 to-do means index 0
                for (var j = 0; j < curDay.length; j++) {
                    if (curDay[j].type == typeConverted) {
                        dayIndex++;
                    }
                }

                for (var j = curDay.length - 1; j >= 0; j--) {
                    if (curDay[j].type == typeConverted) {
                        console.log("type == type");
                        if (count == 0) {
                            console.log("count == 0 - old_new");
                            const curToDo = curDay[j];

                            console.log("curToDo = ");
                            console.log(curToDo);

                            this.removeById(curToDo.toDoId);
                            if (curToDo.notes[noteIndex][1] == "0") {
                                curToDo.notes[noteIndex][1] = "1";
                            } else {
                                curToDo.notes[noteIndex][1] = "0";
                            }
                            this.add(curToDo);

                            tempToDoPageElement = injectHTMLToDoTabDisplay(tempToDoDayObject);
                            const curPage = new Number(document.getElementById("to_do_tab_current_page_box").innerHTML.trim());
                            tempToDoPageElement.display(curPage);
                            return;
                        } else {
                            count--;
                            dayIndex--;
                        }
                    }
                }
            }
        }

        console.log("Did Not Complete");

    }

    /* Completes and uncompletes toDoObject and associated notes */
    complete(date, type, index, tempToDoPageElement) {
        console.log("Entered - ToDoMasterList - complete(date = " + date + " type= " + type + " index= " + index + ")");
        
        /* Finding index of ToDoDayObject via date */
        let tempIndex = -1; // should throw error if not set below

        for (var i = 0; i < this.list.length; i++) {
            if (this.list[i].date == date) {
                tempIndex = i;
            }
        }

        if (type == "contact_customer") {
            if (this.list[tempIndex].contactCustomerList[index].completed != 1) {
                this.list[tempIndex].contactCustomerList[index].completed = 1;
            } else {
                this.list[tempIndex].contactCustomerList[index].completed = 0;
            }
        } else if (type == "site_visit") {
            if (this.list[tempIndex].siteVisitList[index].completed != 1) {
                this.list[tempIndex].siteVisitList[index].completed = 1;
            } else {
                this.list[tempIndex].siteVisitList[index].completed = 0;
            }
        } else if (type == "svc_calc") {
            if (this.list[tempIndex].svcCalcList[index].completed != 1) {
                this.list[tempIndex].svcCalcList[index].completed = 1;
            } else {
                this.list[tempIndex].svcCalcList[index].completed = 0;
            }
        } else if (type == "check_njuns") {
            if (this.list[tempIndex].checkNJUNSList[index].completed != 1) {
                this.list[tempIndex].checkNJUNSList[index].completed = 1;
            } else {
                this.list[tempIndex].checkNJUNSList[index].completed = 0;
            }
        } else if (type == "check_permit") {
            if (this.list[tempIndex].checkPermitList[index].completed != 1) {
                this.list[tempIndex].checkPermitList[index].completed = 1;
            } else {
                this.list[tempIndex].checkPermitList[index].completed = 0;
            }
        } else if (type == "check_easement") {
            if (this.list[tempIndex].checkEasementList[index].completed != 1) {
                this.list[tempIndex].checkEasementList[index].completed = 1;
            } else {
                this.list[tempIndex].checkEasementList[index].completed = 0;
            }
        } else if (type == "design") {
            if (this.list[tempIndex].designList[index].completed != 1) {
                this.list[tempIndex].designList[index].completed = 1;
            } else {
                this.list[tempIndex].designList[index].completed = 0;
            }
        } else if (type == "revisions") {
            if (this.list[tempIndex].revisionsList[index].completed != 1) {
                this.list[tempIndex].revisionsList[index].completed = 1;
            } else {
                this.list[tempIndex].revisionsList[index].completed = 0;
            }
        } else if (type == "general") {
            if (this.list[tempIndex].generalList[index].completed != 1) {
                this.list[tempIndex].generalList[index].completed = 1;
            } else {
                this.list[tempIndex].generalList[index].completed = 0;
            }
        } 
        tempToDoPageElement = injectHTMLToDoTabDisplay(this.list[tempIndex]);
        const curPage = new Number(document.getElementById("to_do_tab_current_page_box").innerHTML.trim());
        tempToDoPageElement.display(curPage);
        
    }
    /* Completes and uncompletes note */
    completeNote(date, type, toDoIndex, noteIndex, tempToDoPageElement) {
        console.log("Entered - ToDoMasterList - completeNote(date= " + date + " type= " + type + " toDoIndex= " + toDoIndex + " noteIndex= " + noteIndex + ")");

        /* Finding index of ToDoDayObject via date */
        let tempIndex = -1; // should throw error if not set below

        for (var i = 0; i < this.list.length; i++) {
            if (this.list[i].date == date) {
                tempIndex = i;
            }
        }

        if (type == "contact_customer") {
            if (this.list[tempIndex].contactCustomerList[toDoIndex].notes[noteIndex][1] == false) { // notes[index][1] = value of completed
                this.list[tempIndex].contactCustomerList[toDoIndex].notes[noteIndex][1] = true;
            } else {
                this.list[tempIndex].contactCustomerList[toDoIndex].notes[noteIndex][1] = false;
            }
        } else if (type == "site_visit") {
            if (this.list[tempIndex].siteVisitList[toDoIndex].notes[noteIndex][1] == false) { // notes[index][1] = value of completed
                this.list[tempIndex].siteVisitList[toDoIndex].notes[noteIndex][1] = true;
            } else {
                this.list[tempIndex].siteVisitList[toDoIndex].notes[noteIndex][1] = false;
            }
        } else if (type == "svc_calc") {
            if (this.list[tempIndex].svcCalcList[toDoIndex].notes[noteIndex][1] == false) { // notes[index][1] = value of completed
                this.list[tempIndex].svcCalcList[toDoIndex].notes[noteIndex][1] = true;
            } else {
                this.list[tempIndex].svcCalcList[toDoIndex].notes[noteIndex][1] = false;
            }
        } else if (type == "check_njuns") {
            if (this.list[tempIndex].checkNJUNSList[toDoIndex].notes[noteIndex][1] == false) { // notes[index][1] = value of completed
                this.list[tempIndex].checkNJUNSList[toDoIndex].notes[noteIndex][1] = true;
            } else {
                this.list[tempIndex].checkNJUNSList[toDoIndex].notes[noteIndex][1] = false;
            }
        } else if (type == "check_permit") {
            if (this.list[tempIndex].checkPermitList[toDoIndex].notes[noteIndex][1] == false) { // notes[index][1] = value of completed
                this.list[tempIndex].checkPermitList[toDoIndex].notes[noteIndex][1] = true;
            } else {
                this.list[tempIndex].checkPermitList[toDoIndex].notes[noteIndex][1] = false;
            }
        } else if (type == "check_easement") {
            if (this.list[tempIndex].checkEasementList[toDoIndex].notes[noteIndex][1] == false) { // notes[index][1] = value of completed
                this.list[tempIndex].checkEasementList[toDoIndex].notes[noteIndex][1] = true;
            } else {
                this.list[tempIndex].checkEasementList[toDoIndex].notes[noteIndex][1] = false;
            }
        } else if (type == "design") {
            if (this.list[tempIndex].designList[toDoIndex].notes[noteIndex][1] == false) { // notes[index][1] = value of completed
                this.list[tempIndex].designList[toDoIndex].notes[noteIndex][1] = true;
            } else {
                this.list[tempIndex].designList[toDoIndex].notes[noteIndex][1] = false;
            }
        } else if (type == "revisions") {
            if (this.list[tempIndex].revisionsList[toDoIndex].notes[noteIndex][1] == false) { // notes[index][1] = value of completed
                this.list[tempIndex].revisionsList[toDoIndex].notes[noteIndex][1] = true;
            } else {
                this.list[tempIndex].revisionsList[toDoIndex].notes[noteIndex][1] = false;
            }
        } else if (type == "general") {
            if (this.list[tempIndex].generalList[toDoIndex].notes[noteIndex][1] == false) { // notes[index][1] = value of completed
                this.list[tempIndex].generalList[toDoIndex].notes[noteIndex][1] = true;
            } else {
                this.list[tempIndex].generalList[toDoIndex].notes[noteIndex][1] = false;
            }
        }
        tempToDoPageElement = injectHTMLToDoTabDisplay(this.list[tempIndex]);
        const curPage = new Number(document.getElementById("to_do_tab_current_page_box").innerHTML.trim());
        tempToDoPageElement.display(curPage);
        
 
    }

    clearCompleted() {
        console.log("Entered - ToDoMasterList - clearCompleted()");

        for (var i = 0; i < this.list.length; i++) {
            this.list[i].clearCompleted();
        }
    }

    add(toDo) {
        console.log("Entered - ToDoMasterList - add(toDo)");

        /* Below if statement makes it so each toDo is unique + fixes double add bug on moving toDo's backwards to an existing list */
        if (this.getToDo(toDo.toDoId) == 0) { 
            for (var i = 0; i < this.list.length; i++) {
                if (this.list[i].date == toDo.dueDate) { // ToDoDayObject exists for the toDo's date
                    this.list[i].add(toDo);
                    return; // Should prevent me from getting below and adding twice
                }
            }
            // If I get here, I did not add the toDo yet
            const temp = new ToDoDayObject(toDo.dueDate, this.linesPerPage, this);
            temp.add(toDo);
            this.list.push(temp);
        }
        
    }
    /* Unsafe add that could make list not unique - used to temporarily add toDoObjects in moveTo save */
    tempAdd(toDo) {
        console.log("Entered - ToDoMasterList - tempAdd(toDo)");

        for (var i = 0; i < this.list.length; i++) {
            if (this.list[i].date == toDo.dueDate) { // ToDoDayObject exists for the toDo's date
                this.list[i].add(toDo);
                return; // Should prevent me from getting below and adding twice
            }
        }
        // If I get here, I did not add the toDo yet
        const temp = new ToDoDayObject(toDo.dueDate, this.linesPerPage, this);
        temp.add(toDo);
        this.list.push(temp);
    }
    /* Returns 0 if not found else - returns toDo object */
    getToDo(toDoId) {
        console.log("Entered - ToDoMasterList - getToDo(" + toDoId + ")");
        console.log(this.list);

        for (var i = 0; i < this.list.length; i++) {
            for (var j = 0; j < this.list[i].contactCustomerList.length; j++) {
                if (this.list[i].contactCustomerList[j].toDoId == toDoId) {
                    return [1, this.list[i].contactCustomerList[j], i, j, "Contact Customer"];
                }
            }
            for (var j = 0; j < this.list[i].siteVisitList.length; j++) {
                if (this.list[i].siteVisitList[j].toDoId == toDoId) {
                    return [1, this.list[i].siteVisitList[j], i, j, "Site Visit"];
                }
            }
            for (var j = 0; j < this.list[i].svcCalcList.length; j++) {
                if (this.list[i].svcCalcList[j].toDoId == toDoId) {
                    return [1, this.list[i].svcCalcList[j], i, j, "Svc Calc"];
                }
            }
            for (var j = 0; j < this.list[i].checkNJUNSList.length; j++) {
                if (this.list[i].checkNJUNSList[j].toDoId == toDoId) {
                    return [1, this.list[i].checkNJUNSList[j], i, j, "Check NJUNS"];
                }
            }
            for (var j = 0; j < this.list[i].checkPermitList.length; j++) {
                if (this.list[i].checkPermitList[j].toDoId == toDoId) {
                    return [1, this.list[i].checkPermitList[j], i, j, "Check Permit"];
                }
            }
            for (var j = 0; j < this.list[i].checkEasementList.length; j++) {
                if (this.list[i].checkEasementList[j].toDoId == toDoId) {
                    return [1, this.list[i].checkEasementList[j], i, j, "Check Easement"];
                }
            }
            for (var j = 0; j < this.list[i].designList.length; j++) {
                if (this.list[i].designList[j].toDoId == toDoId) {
                    return [1, this.list[i].designList[j], i, j, "Design"];
                }
            }
            for (var j = 0; j < this.list[i].revisionsList.length; j++) {
                if (this.list[i].revisionsList[j].toDoId == toDoId) {
                    return [1, this.list[i].revisionsList[j], i, j, "Revisions"];
                }
            }
            for (var j = 0; j < this.list[i].generalList.length; j++) {
                if (this.list[i].generalList[j].toDoId == toDoId) {
                    return [1, this.list[i].generalList[j], i, j, "General"];
                }
            }
        }
        return 0; // returns 0 if toDoId not found
    }

    /* Used in toDoDisplayRowElementContainer - returns the toDoObject associated with the date, curList, and index parameters */
    getToDoDisplay(date, curList, index) {
        console.log("Entered - ToDoMasterList - getToDoDisplay(date= " + date + " curList= " + curList + " index= " + index + ")");


        /* Finding index of ToDoDayObject via date */
        let tempIndex = -1; // should throw error if not set below

        for (var i = 0; i < this.list.length; i++) {            
            if (this.list[i].date == date) {
                tempIndex = i;
            }
        }

        if (curList == "contact_customer") {
            return this.list[tempIndex].contactCustomerList[index];
        } else if (curList == "site_visit") {
            return this.list[tempIndex].siteVisitList[index];
        } else if (curList == "svc_calc") {
            return this.list[tempIndex].svcCalcList[index];
        } else if (curList == "check_njuns") {
            return this.list[tempIndex].checkNJUNSList[index];
        } else if (curList == "check_permit") {
            return this.list[tempIndex].checkPermitList[index];
        } else if (curList == "check_easement") {
            return this.list[tempIndex].checkEasementList[index];
        } else if (curList == "design") {
            return this.list[tempIndex].designList[index];
        } else if (curList == "revisions") {
            return this.list[tempIndex].revisionsList[index];
        } else if (curList == "general") {
            return this.list[tempIndex].generalList[index];
        } 
    }

    // Used to get unique IDs
    getCount() {
        console.log("Entered - ToDoMasterList - getCount");

        let count = 1;

        for (var i = 0; i < this.list.length; i++) {
            /*for (var j = 0; j < this.list[i].list.length; j++) {
                count += 1;
            }*/
            count += this.list[i].contactCustomerList.length + this.list[i].siteVisitList.length + this.list[i].svcCalcList.length +
                this.list[i].checkNJUNSList.length + this.list[i].checkPermitList.length + this.list[i].checkEasementList.length +
                this.list[i].designList.length + this.list[i].revisionsList.length + this.list[i].generalList.length;
        }

        return count;
    }

    getCountToDosByWorkRequestNumber(wrNum) {
        console.log("Entered - ToDoMasterList - getCountToDosByWorkRequestNumber(" + wrNum + ")");

        let count = 0;

        for (var i = 0; i < this.list.length; i ++) {
            const curDayFlat = this.list[i].flatten();

            for (var j = 0; j < curDayFlat.length; j++) {
                if (curDayFlat[j].workRequestNumber != undefined && curDayFlat[j].workRequestNumber == wrNum) { // can add complete check to make it more useful
                    count++;
                }
            }
        }

        return count;
    }

    getAllToDosByWorkRequestNumber(wrNum) {
        console.log("Entered - getAllToDosByWorkRequestNumber(" + wrNum + ")");

        let allToDos = [];

        for (var i = 0; i < this.list.length; i++) {
            let curDay = this.list[i].flatten();

            for (var j = 0; j < curDay.length; j++) {
                if (curDay[j].workRequestNumber == wrNum) {
                    allToDos.push(curDay[j]);
                }
            }
        }
        return allToDos;
    }

    load(str) {
        console.log("Entered - ToDoMasterList - load(str)");

        while (str.length > 1) {
            let dayIndex = str.indexOf("$!#");

            let dayStr = str.substring(0, dayIndex); // cuts to str representing one ToDoDayObject

            this.parseToDoDayObject(dayStr);
            
            str = str.substring(dayIndex + 3);

        }
        const temp = document.getElementById("to_do_display_day_of_week_date").value;

    }

    parseToDoDayObject(dayStr) {
        console.log("Entered - ToDoMasterList - parseToDoDayObject");

        while (dayStr.length > 1) {
            let listIndex = dayStr.indexOf("%#"); 

            let listStr = dayStr.substring(0, listIndex); // cuts to str representing one list of ToDoObjects (siteVisitList, svcCalcList, ...)

            this.parseToDoDayObjectList(listStr);

            dayStr = dayStr.substring(listIndex + 2);
        }
    }

    parseToDoDayObjectList(listStr) {
        console.log("Entered - ToDoMasterList - parseToDoDayObjectList");

        while (listStr.length > 1) {
            let toDoIndex = listStr.indexOf("@ET@");

            let toDoStr = listStr.substring(0, toDoIndex); // cuts to str representing one ToDoObject

            let  data = []; // empty array to push trimming data to

            let tempIndex = toDoStr.indexOf("*");
            data.push(toDoStr.substring(0, tempIndex));
            toDoStr = toDoStr.substring(tempIndex + 1);

            tempIndex = toDoStr.indexOf("*");
            data.push(toDoStr.substring(0, tempIndex));
            toDoStr = toDoStr.substring(tempIndex + 1);

            tempIndex = toDoStr.indexOf("*");
            data.push(toDoStr.substring(0, tempIndex));
            toDoStr = toDoStr.substring(tempIndex + 1);

            tempIndex = toDoStr.indexOf("*");
            data.push(toDoStr.substring(0, tempIndex));
            toDoStr = toDoStr.substring(tempIndex + 1);

            tempIndex = toDoStr.indexOf("*");
            data.push(toDoStr.substring(0, tempIndex));
            toDoStr = toDoStr.substring(tempIndex + 1);

            tempIndex = toDoStr.indexOf("*");
            data.push(toDoStr.substring(0, tempIndex));
            toDoStr = toDoStr.substring(tempIndex + 1);

            tempIndex = toDoStr.indexOf("^EN^");
            let tempNotesStr = toDoStr.substring(0, tempIndex); // trim notes

            let tempNotes = this.parseToDoDayObjectListNotes(tempNotesStr);

            data.push(tempNotes);
            toDoStr = toDoStr.substring(tempIndex + 4);

            console.log("FFF TEST - after notes");
            console.log(toDoStr); 

            tempIndex = toDoStr.indexOf("*");
            data.push(toDoStr.substring(0, tempIndex)); 
            toDoStr = toDoStr.substring(tempIndex + 1);

            console.log("FFF TEST");
            console.log(toDoStr); 
            data.push(toDoStr); // should just be addressStr from trimming

            /* Adding parsed ToDoObject to masterList */
            const toDo = new ToDoObject(data[0], data[1], data[2], data[3], data[4], data[5], data[6], data[7], data[8]);
           
            this.add(toDo);

            listStr = listStr.substring(toDoIndex + 4);
        }
    }

    parseToDoDayObjectListNotes(notesStr) {
        console.log("Entered - ToDoMasterList - parseToDoDayObjectListNotes");

        let notes = [];

        while (notesStr.length > 1) {
            let noteIndex = notesStr.indexOf("*");

            let curNote = notesStr.substring(0, noteIndex); // trim to just one note

            let commaIndex = curNote.lastIndexOf(","); // gets last comma in case note has commas

            notes.push([curNote.substring(0, commaIndex), curNote.substring(commaIndex + 1)]);

            notesStr = notesStr.substring(noteIndex + 1);
            
        }

        return notes;
    }

    removeById(toDoId) {
        console.log("Entered - ToDoMasterList - removeByID(" + toDoId + ")");

        for (var i = 0; i < this.list.length; i++) {
            if (this.list[i].removeById(toDoId)) {
                return;
            }
        }
    }

    toString() {
        console.log("Entered - ToDoMasterList - toString()");

        let str = "";

        for (var i = 0; i < this.list.length; i++) {
            str += (this.list[i].toString());
            str += "$!#";
        }

        str += "^^EL^^"; // Used to cut from initial raw data

        return str;
    }

}

// List of all To-Do's for a specific day
class ToDoDayObject {
    constructor(date, linesPerPage, toDoMasterList) {
        this.date = date;
        this.contactCustomerList = [];
        this.siteVisitList = [];
        this.svcCalcList = [];
        this.checkNJUNSList = [];
        this.checkPermitList = [];
        this.checkEasementList = [];
        this.designList = [];
        this.revisionsList = [];
        this.generalList = [];
        this.linesPerPage = linesPerPage;
        this.toDoMasterList = toDoMasterList;
        //this.list = []; // List of To-Do's for the day
    }

    clearCompleted() {
        console.log("Entered - ToDoDayObject - clearCompleted()");

        let temp = [];

        for (var i = 0; i < this.contactCustomerList.length; i++) {
            if (this.contactCustomerList[i].completed != 1) {
                temp.push(this.contactCustomerList[i]);
            }
        }
        this.contactCustomerList = temp;
        temp = [];
        for (var i = 0; i < this.siteVisitList.length; i++) {
            if (this.siteVisitList[i].completed != 1) {
                temp.push(this.siteVisitList[i]);
            }
        }
        this.siteVisitList = temp;
        temp = [];
        for (var i = 0; i < this.svcCalcList.length; i++) {
            if (this.svcCalcList[i].completed != 1) {
                temp.push(this.svcCalcList[i]);
            }
        }
        this.svcCalcList = temp;
        temp = [];
        for (var i = 0; i < this.checkNJUNSList.length; i++) {
            if (this.checkNJUNSList[i].completed != 1) {
                temp.push(this.checkNJUNSList[i]);
            }
        }
        this.checkNJUNSList = temp;
        temp = [];
        for (var i = 0; i < this.checkPermitList.length; i++) {
            if (this.checkPermitList[i].completed != 1) {
                temp.push(this.checkPermitList[i]);
            }
        }
        this.checkPermitList = temp;
        temp = [];
        for (var i = 0; i < this.checkEasementList.length; i++) {
            if (this.checkEasementList[i].completed != 1) {
                temp.push(this.checkEasementList[i]);
            }
        }
        this.checkEasementList = temp;
        temp = [];
        for (var i = 0; i < this.designList.length; i++) {
            if (this.designList[i].completed != 1) {
                temp.push(this.designList[i]);
            }
        }
        this.designList = temp;
        temp = [];
        for (var i = 0; i < this.revisionsList.length; i++) {
            if (this.revisionsList[i].completed != 1) {
                temp.push(this.revisionsList[i]);
            }
        }
        this.revisionsList = temp;
        temp = [];
        for (var i = 0; i < this.generalList.length; i++) {
            if (this.generalList[i].completed != 1) {
                temp.push(this.generalList[i]);
            }
        }
        this.generalList = temp;
        temp = [];
    }

    flatten() {
        console.log("Entered - ToDoDayObject - flatten()");

        let temp = [];

        for (var i = 0; i < this.contactCustomerList.length; i++) {
            temp.push(this.contactCustomerList[i]);
        }
        for (var i = 0; i < this.siteVisitList.length; i++) {
            temp.push(this.siteVisitList[i]);
        } 
        for (var i = 0; i < this.svcCalcList.length; i++) {
            temp.push(this.svcCalcList[i]);
        } 
        for (var i = 0; i < this.checkNJUNSList.length; i++) {
            temp.push(this.checkNJUNSList[i]);
        } 
        for (var i = 0; i < this.checkPermitList.length; i++) {
            temp.push(this.checkPermitList[i]);
        } 
        for (var i = 0; i < this.checkEasementList.length; i++) {
            temp.push(this.checkEasementList[i]);
        } 
        for (var i = 0; i < this.designList.length; i++) {
            temp.push(this.designList[i]);
        } 
        for (var i = 0; i < this.revisionsList.length; i++) {
            temp.push(this.revisionsList[i]);
        } 
        for (var i = 0; i < this.generalList.length; i++) {
            temp.push(this.generalList[i]);
        } 

        console.log("flattened =");
        console.log(temp);
       
        return temp;
    }

    filterToDosByTab(tab) {
        console.log("Entered - ToDoDayObject - filterToDosByTab(" + tab + ")");

        const filteredList = new ToDoDayObject(this.date, this.linesPerPage, this.toDoMasterList);

        let curList = [];
        /* Contact Customer List */
        for (var i = 0; i < this.contactCustomerList.length; i++) {
            if (this.contactCustomerList[i].tab == tab) {
                curList.push(this.contactCustomerList[i]);
            }
        }
        filteredList.contactCustomerList = curList;
        curList = [];
        /* Site Visit List */
        for (var i = 0; i < this.siteVisitList.length; i++) {
            if (this.siteVisitList[i].tab == tab) {
                curList.push(this.siteVisitList[i]);
            }
        }
        filteredList.siteVisitList = curList;
        curList = [];
        /* Svc Calc List */
        for (var i = 0; i < this.svcCalcList.length; i++) {
            if (this.svcCalcList[i].tab == tab) {
                curList.push(this.svcCalcList[i]);
            }
        }
        filteredList.svcCalcList = curList;
        curList = [];
        /* Check NJUNS List */
        for (var i = 0; i < this.checkNJUNSList.length; i++) {
            if (this.checkNJUNSList[i].tab == tab) {
                curList.push(this.checkNJUNSList[i]);
            }
        }
        filteredList.checkNJUNSList = curList;
        curList = [];
        /* Check Permit List */
        for (var i = 0; i < this.checkPermitList.length; i++) {
            if (this.checkPermitList[i].tab == tab) {
                curList.push(this.checkPermitList[i]);
            }
        }
        filteredList.checkPermitList = curList;
        curList = [];
        /* Check Easement List */
        for (var i = 0; i < this.checkEasementList.length; i++) {
            if (this.checkEasementList[i].tab == tab) {
                curList.push(this.checkEasementList[i]);
            }
        }
        filteredList.checkEasementList = curList;
        curList = [];
        /* Design List */
        for (var i = 0; i < this.designList.length; i++) {
            if (this.designList[i].tab == tab) {
                curList.push(this.designList[i]);
            }
        }
        filteredList.designList = curList;
        curList = [];
        /* Revisions List */
        for (var i = 0; i < this.revisionsList.length; i++) {
            if (this.revisionsList[i].tab == tab) {
                curList.push(this.revisionsList[i]);
            }
        }
        filteredList.revisionsList = curList;
        curList = [];
        /* General List */
        for (var i = 0; i < this.generalList.length; i++) {
            if (this.generalList[i].tab == tab) {
                curList.push(this.generalList[i]);
            }
        }
        filteredList.generalList = curList;
        curList = [];

        return filteredList;
    }

    clearStrikesAfterNoteUpdate() {
        console.log("Entered - ToDoDayObject - clearStrikesAfterNoteUpdate()");
  
        for (var i = 0; i < this.contactCustomerList.length; i++) {
            for (var j = 0; j < this.contactCustomerList[i].notes.length; j++) {
                const rightIndex = this.contactCustomerList[i].notes[j][0].indexOf("</strike>");
                if (rightIndex != -1) {
                    this.contactCustomerList[i].notes[j][0] = this.contactCustomerList[i].notes[j][0].substring(8, rightIndex);
                }
            }
        }
        for (var i = 0; i < this.siteVisitList.length; i++) {
            for (var j = 0; j < this.siteVisitList[i].notes.length; j++) {
                const rightIndex = this.siteVisitList[i].notes[j][0].indexOf("</strike>");
                if (rightIndex != -1) {
                    this.siteVisitList[i].notes[j][0] = this.siteVisitList[i].notes[j][0].substring(8, rightIndex);
                }
            }
        }
        for (var i = 0; i < this.svcCalcList.length; i++) {
            for (var j = 0; j < this.svcCalcList[i].notes.length; j++) {
                const rightIndex = this.svcCalcList[i].notes[j][0].indexOf("</strike>");
                if (rightIndex != -1) {
                    this.svcCalcList[i].notes[j][0] = this.svcCalcList[i].notes[j][0].substring(8, rightIndex);
                }
            }
        }
        for (var i = 0; i < this.checkNJUNSList.length; i++) {
            for (var j = 0; j < this.checkNJUNSList[i].notes.length; j++) {
                const rightIndex = this.checkNJUNSList[i].notes[j][0].indexOf("</strike>");
                if (rightIndex != -1) {
                    this.checkNJUNSList[i].notes[j][0] = this.checkNJUNSList[i].notes[j][0].substring(8, rightIndex);
                }
            }
        }
        for (var i = 0; i < this.checkPermitList.length; i++) {
            for (var j = 0; j < this.checkPermitList[i].notes.length; j++) {
                const rightIndex = this.checkPermitList[i].notes[j][0].indexOf("</strike>");
                if (rightIndex != -1) {
                    this.checkPermitList[i].notes[j][0] = this.checkPermitList[i].notes[j][0].substring(8, rightIndex);
                }
            }
        }
        for (var i = 0; i < this.checkEasementList.length; i++) {
            for (var j = 0; j < this.checkEasementList[i].notes.length; j++) {
                const rightIndex = this.checkEasementList[i].notes[j][0].indexOf("</strike>");
                if (rightIndex != -1) {
                    this.checkEasementList[i].notes[j][0] = this.checkEasementList[i].notes[j][0].substring(8, rightIndex);
                }
            }
        }
        for (var i = 0; i < this.designList.length; i++) {
            for (var j = 0; j < this.designList[i].notes.length; j++) {
                const rightIndex = this.designList[i].notes[j][0].indexOf("</strike>");
                if (rightIndex != -1) {
                    this.designList[i].notes[j][0] = this.designList[i].notes[j][0].substring(8, rightIndex);
                }
            }
        }
        for (var i = 0; i < this.revisionsList.length; i++) {
            for (var j = 0; j < this.revisionsList[i].notes.length; j++) {
                const rightIndex = this.revisionsList[i].notes[j][0].indexOf("</strike>");
                if (rightIndex != -1) {
                    this.revisionsList[i].notes[j][0] = this.revisionsList[i].notes[j][0].substring(8, rightIndex);
                }
            }
        }
        for (var i = 0; i < this.generalList.length; i++) {
            for (var j = 0; j < this.generalList[i].notes.length; j++) {
                const rightIndex = this.generalList[i].notes[j][0].indexOf("</strike>");
                if (rightIndex != -1) {
                    this.generalList[i].notes[j][0] = this.generalList[i].notes[j][0].substring(8, rightIndex);
                }
            }
        }
    }

    makePageElement() {
        console.log("Entered - ToDoDayObject - makePageElement()");

        let pageElement2 = new PaginatedToDoPageElement(this.linesPerPage, this.toDoMasterList);

        let tempPageElem = [];
        let curPage = new Number(document.getElementById("to_do_tab_current_page_box").innerHTML.trim());

        /* Contact Customer List */
        if (this.contactCustomerList.length > 0) {
            const contactCustomerListElem = document.createElement("contactCustomerList");
            contactCustomerListElem.id = "contact_customer_list_" + this.date;
            contactCustomerListElem.classList.add("toDoListTypeBorder");

            contactCustomerListElem.innerHTML = `<div class="toDoListNoBump"><b>${"Contact Customer:"}</b></div>`;
            // Making Type Label Plural if list is > 1
            if (this.contactCustomerList.length > 1) {
                contactCustomerListElem.innerHTML = `<div class="toDoListNoBump"><b>${"Contact Customers:"}</b></div>`;
            }

            tempPageElem.push(contactCustomerListElem.outerHTML);

            for (var i = 0; i < this.contactCustomerList.length; i++) { // for each contact customer to-do ...
                const toDoObjectWrInfo = document.createElement("toDoObjectWrInfo");
                toDoObjectWrInfo.id = "contact_customer_list_" + this.date + "_item_" + i;
                
                /* Checking to see if To-Do has been completed */

                if (this.contactCustomerList[i].completed != 1) { // Normal display for To-Do
                    toDoObjectWrInfo.innerHTML = 
                    `<div class="toDoObjectContainer">
                        ${`<div class="toDoListBumpOnce" id="contact_customer_to_do_list_data_${i}">${this.contactCustomerList[i].addressStr}</div>`}
                        ${`<div class="toDoListLabelButtonContainer">
                            ${`<div class="toDoListLabelID">${this.contactCustomerList[i].toDoId}</div>`}
                            ${`<div class="toDoListLabel">${formatDateNormal(this.contactCustomerList[i].creationDate)}</div>`}
                            ${`<div class="toDoListButton">${`<b id="contact_customer_to_do_list_move_${i}">${"Move"}</b>`}</div>`}
                            ${`<div class="toDoListButton">${`<b id="contact_customer_to_do_list_complete_${i}">${"Complete"}</b>`}</div>`}
                        </div`}
                    </div>`;
                    tempPageElem.push(toDoObjectWrInfo.innerHTML);
                    for (var j = 0; j < this.contactCustomerList[i].notes.length; j++) { // add the associated notes
                        if (this.contactCustomerList[i].notes[j][1] != 1) { // Normal display for Note
                            const temp = 
                            `<div class="toDoNoteContainer">
                                ${`<div class="toDoListBumpTwice" id="contact_customer_to_do_list_item_${i}_note_${j}">${this.contactCustomerList[i].notes[j][0]}</div>`}
                                ${`<div class="toDoCompleteNoteCheckbox" id="contact_customer_to_do_list_item_${i}_complete_note_${j}_checkbox"></div>`}
                            </div>`;
        
                            toDoObjectWrInfo.insertAdjacentHTML("beforeend", temp);
                            tempPageElem.push(temp);
                        } else { // Need to add strike through to note
                            const temp = 
                            `<div class="toDoNoteContainer">
                                ${`<strike>${`<div class="toDoListBumpTwice" id="contact_customer_to_do_list_item_${i}_note_${j}">${this.contactCustomerList[i].notes[j][0]}</div>`}</strike>`}
                                ${`<div class="toDoCompleteNoteCheckbox" id="contact_customer_to_do_list_item_${i}_complete_note_${j}_checkbox">X</div>`}
                            </div>`;
    
                            toDoObjectWrInfo.insertAdjacentHTML("beforeend", temp);
                            tempPageElem.push(temp);

                        }
                    }                    
                } else { // Need to add strike through all
                    toDoObjectWrInfo.innerHTML = 
                    `<div class="toDoObjectContainer">
                        ${`<strike>${`<div class="toDoListBumpOnce" id="contact_customer_to_do_list_data_${i}">${this.contactCustomerList[i].addressStr}</div>`}</strike>`}
                        ${`<div class="toDoListLabelButtonContainer">
                            ${`<div class="toDoListLabelID">${this.contactCustomerList[i].toDoId}</div>`}
                            ${`<div class="toDoListLabel">${formatDateNormal(this.contactCustomerList[i].creationDate)}</div>`}
                            ${`<div class="toDoListButton">${`<b id="contact_customer_to_do_list_move_${i}">${"Move"}</b>`}</div>`}
                            ${`<div class="toDoListButton">${`<b id="contact_customer_to_do_list_complete_${i}">${"Complete"}</b>`}</div>`}
                        </div`}
                    </div>`;
                    tempPageElem.push(toDoObjectWrInfo.innerHTML);

                    for (var j = 0; j < this.contactCustomerList[i].notes.length; j++) { // add the associated notes
                        const temp = 
                        `<div class="toDoNoteContainer">
                            ${`<strike>${`<div class="toDoListBumpTwice" id="contact_customer_to_do_list_item_${i}_note_${j}">${this.contactCustomerList[i].notes[j][0]}</div>`}</strike>`}
                            ${`<div class="toDoCompleteNoteCheckbox" id="contact_customer_to_do_list_item_${i}_complete_note_${j}_checkbox">X</div>`}
                        </div>`;
    
                        toDoObjectWrInfo.insertAdjacentHTML("beforeend", temp);
                        tempPageElem.push(temp);
                    }
                }

                contactCustomerListElem.insertAdjacentElement("beforeend", toDoObjectWrInfo); // add the to-do w/ notes to the contact customer list
            }
            

            pageElement2.add(tempPageElem);

        }
        /* Site Visit List */
        if (this.siteVisitList.length > 0) {
            tempPageElem = [];

            const siteVisitListElem = document.createElement("siteVisitList");
            siteVisitListElem.id = "site_visit_list_" + this.date;
            siteVisitListElem.classList.add("toDoListTypeBorder");

            siteVisitListElem.innerHTML = `<div class="toDoListNoBump"><b>${"Site Visit:"}</b></div>`;

            // Making Type Label Plural if list is > 1
            if (this.siteVisitList.length > 1) {
                siteVisitListElem.innerHTML = `<div class="toDoListNoBump"><b>${"Site Visits:"}</b></div>`;
            }
            tempPageElem.push(siteVisitListElem.outerHTML);

            for (var i = 0; i < this.siteVisitList.length; i++) { // for each site visit to-do ...
                const toDoObjectWrInfo = document.createElement("toDoObjectWrInfo");
                toDoObjectWrInfo.id = "site_visit_list_" + this.date + "_item_" + i;

                /* Checking to see if To-Do has been completed */
                if (this.siteVisitList[i].completed != 1) { // Normal display for To-Do
                    toDoObjectWrInfo.innerHTML = 
                    `<div class="toDoObjectContainer">
                        ${`<div class="toDoListBumpOnce" id="site_visit_to_do_list_data_${i}">${this.siteVisitList[i].addressStr}</div>`}
                        ${`<div class="toDoListLabelButtonContainer">
                            ${`<div class="toDoListLabelID">${this.siteVisitList[i].toDoId}</div>`}
                            ${`<div class="toDoListLabel">${formatDateNormal(this.siteVisitList[i].creationDate)}</div>`}
                            ${`<div class="toDoListButton">${`<b id="site_visit_to_do_list_move_${i}">${"Move"}</b>`}</div>`}
                            ${`<div class="toDoListButton">${`<b id="site_visit_to_do_list_complete_${i}">${"Complete"}</b>`}</div>`}
                        </div`}
                    </div>`;
                    tempPageElem.push(toDoObjectWrInfo.innerHTML);

                    for (var j = 0; j < this.siteVisitList[i].notes.length; j++) { // add the associated notes

                        if (this.siteVisitList[i].notes[j][1] != 1) { // Normal display for Note
                            const temp = 
                            `<div class="toDoNoteContainer">
                                ${`<div class="toDoListBumpTwice" id="site_visit_to_do_list_item_${i}_note_${j}">${this.siteVisitList[i].notes[j][0]}</div>`}
                                ${`<div class="toDoCompleteNoteCheckbox" id="site_visit_to_do_list_item_${i}_complete_note_${j}_checkbox"></div>`}
                            </div>`;
        
                            toDoObjectWrInfo.insertAdjacentHTML("beforeend", temp);  
                            tempPageElem.push(temp);
                        } else { // Need to add strike through to note
                            const temp = 
                            `<div class="toDoNoteContainer">
                                ${`<strike>${`<div class="toDoListBumpTwice" id="site_visit_to_do_list_item_${i}_note_${j}">${this.siteVisitList[i].notes[j][0]}</div>`}</strike>`}
                                ${`<div class="toDoCompleteNoteCheckbox" id="site_visit_to_do_list_item_${i}_complete_note_${j}_checkbox">X</div>`}
                            </div>`;
    
                        toDoObjectWrInfo.insertAdjacentHTML("beforeend", temp);
                        tempPageElem.push(temp);  
                        }      
                    }
                } else { // Need to add strike through all
                    toDoObjectWrInfo.innerHTML = 
                    `<div class="toDoObjectContainer">
                        ${`<strike>${`<div class="toDoListBumpOnce" id="site_visit_to_do_list_data_${i}">${this.siteVisitList[i].addressStr}</div>`}</strike>`}
                        ${`<div class="toDoListLabelButtonContainer">
                            ${`<div class="toDoListLabelID">${this.siteVisitList[i].toDoId}</div>`}
                            ${`<div class="toDoListLabel">${formatDateNormal(this.siteVisitList[i].creationDate)}</div>`}
                            ${`<div class="toDoListButton">${`<b id="site_visit_to_do_list_move_${i}">${"Move"}</b>`}</div>`}
                            ${`<div class="toDoListButton">${`<b id="site_visit_to_do_list_complete_${i}">${"Complete"}</b>`}</div>`}
                        </div`}
                    </div>`;
                    tempPageElem.push(toDoObjectWrInfo.innerHTML);

                    for (var j = 0; j < this.siteVisitList[i].notes.length; j++) { // add the associated notes
                        const temp = 
                        `<div class="toDoNoteContainer">
                            ${`<strike>${`<div class="toDoListBumpTwice" id="site_visit_to_do_list_item_${i}_note_${j}">${this.siteVisitList[i].notes[j][0]}</div>`}</strike>`}
                            ${`<div class="toDoCompleteNoteCheckbox" id="site_visit_to_do_list_item_${i}_complete_note_${j}_checkbox">X</div>`}
                        </div>`;
    
                        toDoObjectWrInfo.insertAdjacentHTML("beforeend", temp);  
                        tempPageElem.push(temp);          
                    }
                }
                
                siteVisitListElem.insertAdjacentElement("beforeend", toDoObjectWrInfo); // add the to-do w/ notes to the site visit list
            }
            
            pageElement2.add(tempPageElem);

            //console.log("pageElement2 after siteVisit");
            //console.log(pageElement2);

            //pageElement2.display(curPage);

            //return pageElement2;

            //pageElement.insertAdjacentElement("beforeend", siteVisitListElem); // add the site visit list to the page elem
        }

        /* Svc Calc List */
        if (this.svcCalcList.length > 0) {
            tempPageElem = []
            const svcCalcListElem = document.createElement("svcCalcListElem");
            svcCalcListElem.id = "svc_calc_list_" + this.date;
            svcCalcListElem.classList.add("toDoListTypeBorder");

            svcCalcListElem.innerHTML = `<div class="toDoListNoBump"><b>${"Svc Calc + Coding:"}</b></div>`;

            // Making Type Label Plural if list is > 1
            if (this.svcCalcList.length > 1) {
                svcCalcListElem.innerHTML = `<div class="toDoListNoBump"><b>${"Svc Calcs + Coding:"}</b></div>`;
            }

            tempPageElem.push(svcCalcListElem.outerHTML);

            for (var i = 0; i < this.svcCalcList.length; i++) { // for each svc calc to-do ...
                const toDoObjectWrInfo = document.createElement("toDoObjectWrInfo");
                toDoObjectWrInfo.id = "svc_calc_list_" + this.date + "_item_" + i;

                if (this.svcCalcList[i].completed != 1) { // Normal display for To-Do
                    toDoObjectWrInfo.innerHTML = 
                    `<div class="toDoObjectContainer">
                        ${`<div class="toDoListBumpOnce" id="svc_calc_to_do_list_data_${i}">${this.svcCalcList[i].addressStr}</div>`}
                        ${`<div class="toDoListLabelButtonContainer">
                            ${`<div class="toDoListLabelID">${this.svcCalcList[i].toDoId}</div>`}
                            ${`<div class="toDoListLabel">${formatDateNormal(this.svcCalcList[i].creationDate)}</div>`}
                            ${`<div class="toDoListButton">${`<b id="svc_calc_to_do_list_move_${i}">${"Move"}</b>`}</div>`}
                            ${`<div class="toDoListButton">${`<b id="svc_calc_to_do_list_complete_${i}">${"Complete"}</b>`}</div>`}
                        </div`}
                    </div>`;
                    tempPageElem.push(toDoObjectWrInfo.innerHTML);

                    for (var j = 0; j < this.svcCalcList[i].notes.length; j++) { // add the associated notes
                        if (this.svcCalcList[i].notes[j][1] != 1) { // Normal display for Note
                            const temp = 
                            `<div class="toDoNoteContainer">
                                ${`<div class="toDoListBumpTwice" id="svc_calc_to_do_list_item_${i}_note_${j}">${this.svcCalcList[i].notes[j][0]}</div>`}
                                ${`<div class="toDoCompleteNoteCheckbox" id="svc_calc_to_do_list_item_${i}_complete_note_${j}_checkbox"></div>`}
                            </div>`;
        
                            toDoObjectWrInfo.insertAdjacentHTML("beforeend", temp);
                            tempPageElem.push(temp);    
                        } else { // Need to add strike through note
                            const temp = 
                            `<div class="toDoNoteContainer">
                                ${`<strike>${`<div class="toDoListBumpTwice" id="svc_calc_to_do_list_item_${i}_note_${j}">${this.svcCalcList[i].notes[j][0]}</div>`}</strike>`}
                                ${`<div class="toDoCompleteNoteCheckbox" id="svc_calc_to_do_list_item_${i}_complete_note_${j}_checkbox">X</div>`}
                            </div>`;
        
                            toDoObjectWrInfo.insertAdjacentHTML("beforeend", temp);    
                            tempPageElem.push(temp);    
                        }             
                    }

                } else { // Need to add strike through all
                    toDoObjectWrInfo.innerHTML = 
                    `<div class="toDoObjectContainer">
                        ${`<strike>${`<div class="toDoListBumpOnce" id="svc_calc_to_do_list_data_${i}">${this.svcCalcList[i].addressStr}</div>`}</strike>`}
                        ${`<div class="toDoListLabelButtonContainer">
                            ${`<div class="toDoListLabelID">${this.svcCalcList[i].toDoId}</div>`}
                            ${`<div class="toDoListLabel">${formatDateNormal(this.svcCalcList[i].creationDate)}</div>`}
                            ${`<div class="toDoListButton">${`<b id="svc_calc_to_do_list_move_${i}">${"Move"}</b>`}</div>`}
                            ${`<div class="toDoListButton">${`<b id="svc_calc_to_do_list_complete_${i}">${"Complete"}</b>`}</div>`}
                        </div`}
                    </div>`;
                    tempPageElem.push(toDoObjectWrInfo.innerHTML);

                    for (var j = 0; j < this.svcCalcList[i].notes.length; j++) { // add the associated notes
                        const temp = 
                        `<div class="toDoNoteContainer">
                            ${`<strike>${`<div class="toDoListBumpTwice" id="svc_calc_to_do_list_item_${i}_note_${j}">${this.svcCalcList[i].notes[j][0]}</div>`}</strike>`}
                            ${`<div class="toDoCompleteNoteCheckbox" id="svc_calc_to_do_list_item_${i}_complete_note_${j}_checkbox">X</div>`}
                        </div>`;
        
                        toDoObjectWrInfo.insertAdjacentHTML("beforeend", temp);    
                        tempPageElem.push(temp);    
                    }
                }
                
                svcCalcListElem.insertAdjacentElement("beforeend", toDoObjectWrInfo); // add the to-do w/ notes to the svc calc list
            }
            pageElement2.add(tempPageElem);

            //pageElement.insertAdjacentElement("beforeend", svcCalcListElem); // add the svc list to the page elem
        }

        /* Check NJUNS List */
        if (this.checkNJUNSList.length > 0) {
            tempPageElem = [];
            const checkNJUNSListElem = document.createElement("checkNJUNSListElem");
            checkNJUNSListElem.id = "check_njuns_list_" + this.date;
            checkNJUNSListElem.classList.add("toDoListTypeBorder");

            checkNJUNSListElem.innerHTML = `<div class="toDoListNoBump"><b>${"Check/ Apply for NJUNS:"}</b></div>`;
            tempPageElem.push(checkNJUNSListElem.outerHTML);

            for (var i = 0; i < this.checkNJUNSList.length; i++) { // for each njuns to-do ...
                const toDoObjectWrInfo = document.createElement("toDoObjectWrInfo");
                toDoObjectWrInfo.id = "check_njuns_list_" + this.date + "_item_" + i;

                if (this.checkNJUNSList[i].completed != 1) { // Normal display for To-Do
                    toDoObjectWrInfo.innerHTML = 
                    `<div class="toDoObjectContainer">
                        ${`<div class="toDoListBumpOnce" id="check_njuns_to_do_list_data_${i}">${this.checkNJUNSList[i].addressStr}</div>`}
                        ${`<div class="toDoListLabelButtonContainer">
                            ${`<div class="toDoListLabelID">${this.checkNJUNSList[i].toDoId}</div>`}
                            ${`<div class="toDoListLabel">${formatDateNormal(this.checkNJUNSList[i].creationDate)}</div>`}
                            ${`<div class="toDoListButton">${`<b id="check_njuns_to_do_list_move_${i}">${"Move"}</b>`}</div>`}
                            ${`<div class="toDoListButton">${`<b id="check_njuns_to_do_list_complete_${i}">${"Complete"}</b>`}</div>`}
                        </div`}
                    </div>`;
                    tempPageElem.push(toDoObjectWrInfo.innerHTML);

                    for (var j = 0; j < this.checkNJUNSList[i].notes.length; j++) { // add the associated notes
                        if (this.checkNJUNSList[i].notes[j][1] != 1) { // Normal display for Note
                            const temp = 
                            `<div class="toDoNoteContainer">
                                ${`<div class="toDoListBumpTwice" id="check_njuns_to_do_list_item_${i}_note_${j}">${this.checkNJUNSList[i].notes[j][0]}</div>`}
                                ${`<div class="toDoCompleteNoteCheckbox" id="check_njuns_to_do_list_item_${i}_complete_note_${j}_checkbox"></div>`}
                            </div>`;

                            toDoObjectWrInfo.insertAdjacentHTML("beforeend", temp);     
                            tempPageElem.push(temp);           
                        } else { // Need to add strike through note
                            const temp = 
                            `<div class="toDoNoteContainer">
                                ${`<strike>${`<div class="toDoListBumpTwice" id="check_njuns_to_do_list_item_${i}_note_${j}">${this.checkNJUNSList[i].notes[j][0]}</div>`}</strike>`}
                                ${`<div class="toDoCompleteNoteCheckbox" id="check_njuns_to_do_list_item_${i}_complete_note_${j}_checkbox">X</div>`}
                            </div>`;

                            toDoObjectWrInfo.insertAdjacentHTML("beforeend", temp);     
                            tempPageElem.push(temp);           
           
                        }
                    }

                } else { // Need to add strike through all
                    toDoObjectWrInfo.innerHTML = 
                    `<div class="toDoObjectContainer">
                        ${`<strike>${`<div class="toDoListBumpOnce" id="check_njuns_to_do_list_data_${i}">${this.checkNJUNSList[i].addressStr}</div>`}</strike>`}
                        ${`<div class="toDoListLabelButtonContainer">
                            ${`<div class="toDoListLabelID">${this.checkNJUNSList[i].toDoId}</div>`}
                            ${`<div class="toDoListLabel">${formatDateNormal(this.checkNJUNSList[i].creationDate)}</div>`}
                            ${`<div class="toDoListButton">${`<b id="check_njuns_to_do_list_move_${i}">${"Move"}</b>`}</div>`}
                            ${`<div class="toDoListButton">${`<b id="check_njuns_to_do_list_complete_${i}">${"Complete"}</b>`}</div>`}
                        </div`}
                    </div>`;
                    tempPageElem.push(toDoObjectWrInfo.innerHTML);

                    for (var j = 0; j < this.checkNJUNSList[i].notes.length; j++) { // add the associated notes
                        const temp = 
                        `<div class="toDoNoteContainer">
                            ${`<strike>${`<div class="toDoListBumpTwice" id="check_njuns_to_do_list_item_${i}_note_${j}">${this.checkNJUNSList[i].notes[j][0]}</div>`}</strike>`}
                            ${`<div class="toDoCompleteNoteCheckbox" id="check_njuns_to_do_list_item_${i}_complete_note_${j}_checkbox">X</div>`}
                        </div>`;

                        toDoObjectWrInfo.insertAdjacentHTML("beforeend", temp);         
                        tempPageElem.push(temp);                  
                        
                    }
                }
                
                checkNJUNSListElem.insertAdjacentElement("beforeend", toDoObjectWrInfo); // add the to-do w/ notes to the check njuns list
            }
            pageElement2.add(tempPageElem);

            //pageElement.insertAdjacentElement("beforeend", checkNJUNSListElem); // add the check njuns list to the page elem
        }

        /* Check Permit List */
        if (this.checkPermitList.length > 0) {
            tempPageElem = [];
            const checkPermitListElem = document.createElement("checkPermitListElem");
            checkPermitListElem.id = "check_permit_list_" + this.date;
            checkPermitListElem.classList.add("toDoListTypeBorder");

            checkPermitListElem.innerHTML = `<div class="toDoListNoBump"><b>${"Check/ Apply for Permit:"}</b></div>`;

            // Making Type Label Plural if list is > 1
            if (this.checkPermitList.length > 1) {
                checkPermitListElem.innerHTML = `<div class="toDoListNoBump"><b>${"Check/ Apply for Permits:"}</b></div>`;
            }

            tempPageElem.push(checkPermitListElem.outerHTML);

            for (var i = 0; i < this.checkPermitList.length; i++) { // for each permit to-do ...
                const toDoObjectWrInfo = document.createElement("toDoObjectWrInfo");
                toDoObjectWrInfo.id = "check_permit_list_" + this.date + "_item_" + i;

                if (this.checkPermitList[i].completed != 1) { // Normal display for To-Do
                    toDoObjectWrInfo.innerHTML = 
                    `<div class="toDoObjectContainer">
                        ${`<div class="toDoListBumpOnce" id="check_permit_to_do_list_data_${i}">${this.checkPermitList[i].addressStr}</div>`}
                        ${`<div class="toDoListLabelButtonContainer">
                            ${`<div class="toDoListLabelID">${this.checkPermitList[i].toDoId}</div>`}
                            ${`<div class="toDoListLabel">${formatDateNormal(this.checkPermitList[i].creationDate)}</div>`}
                            ${`<div class="toDoListButton">${`<b id="check_permit_to_do_list_move_${i}">${"Move"}</b>`}</div>`}
                            ${`<div class="toDoListButton">${`<b id="check_permit_to_do_list_complete_${i}">${"Complete"}</b>`}</div>`}
                        </div`}
                    </div>`;
                    tempPageElem.push(toDoObjectWrInfo.innerHTML);

                    for (var j = 0; j < this.checkPermitList[i].notes.length; j++) { // add the associated notes
                        if (this.checkPermitList[i].notes[j][1] != 1) { // Normal display for Note
                            const temp = 
                            `<div class="toDoNoteContainer">
                                ${`<div class="toDoListBumpTwice" id="check_permit_to_do_list_item_${i}_note_${j}">${this.checkPermitList[i].notes[j][0]}</div>`}
                                ${`<div class="toDoCompleteNoteCheckbox" id="check_permit_to_do_list_item_${i}_complete_note_${j}_checkbox"></div>`}
                            </div>`;

                            toDoObjectWrInfo.insertAdjacentHTML("beforeend", temp);     
                            tempPageElem.push(temp);                      
                        } else {
                            const temp = 
                            `<div class="toDoNoteContainer">
                                ${`<strike>${`<div class="toDoListBumpTwice" id="check_permit_to_do_list_item_${i}_note_${j}">${this.checkPermitList[i].notes[j][0]}</div>`}</strike>`}
                                ${`<div class="toDoCompleteNoteCheckbox" id="check_permit_to_do_list_item_${i}_complete_note_${j}_checkbox">X</div>`}
                            </div>`;

                            toDoObjectWrInfo.insertAdjacentHTML("beforeend", temp);         
                            tempPageElem.push(temp);             
                        }
                    }

                } else { // Need to add strike through all
                    toDoObjectWrInfo.innerHTML = 
                    `<div class="toDoObjectContainer">
                        ${`<strike>${`<div class="toDoListBumpOnce" id="check_permit_to_do_list_data_${i}">${this.checkPermitList[i].addressStr}</div>`}</strike>`}
                        ${`<div class="toDoListLabelButtonContainer">
                            ${`<div class="toDoListLabelID">${this.checkPermitList[i].toDoId}</div>`}
                            ${`<div class="toDoListLabel">${formatDateNormal(this.checkPermitList[i].creationDate)}</div>`}
                            ${`<div class="toDoListButton">${`<b id="check_permit_to_do_list_move_${i}">${"Move"}</b>`}</div>`}
                            ${`<div class="toDoListButton">${`<b id="check_permit_to_do_list_complete_${i}">${"Complete"}</b>`}</div>`}
                        </div`}
                    </div>`;
                    tempPageElem.push(toDoObjectWrInfo.innerHTML);

                    for (var j = 0; j < this.checkPermitList[i].notes.length; j++) { // add the associated notes
                        const temp = 
                        `<div class="toDoNoteContainer">
                            ${`<strike>${`<div class="toDoListBumpTwice" id="check_permit_to_do_list_item_${i}_note_${j}">${this.checkPermitList[i].notes[j][0]}</div>`}</strike>`}
                            ${`<div class="toDoCompleteNoteCheckbox" id="check_permit_to_do_list_item_${i}_complete_note_${j}_checkbox">X</div>`}
                        </div>`;

                        toDoObjectWrInfo.insertAdjacentHTML("beforeend", temp);  
                        tempPageElem.push(temp);                         
                        
                    }
                }
                
                checkPermitListElem.insertAdjacentElement("beforeend", toDoObjectWrInfo); // add the to-do w/ notes to the check permit list
            }
            pageElement2.add(tempPageElem);

            //pageElement.insertAdjacentElement("beforeend", checkPermitListElem); // add the check permit list to the page elem
        }

        /* Check Easement List */
        if (this.checkEasementList.length > 0) {
            tempPageElem = [];
            const checkEasementListElem = document.createElement("checkEasementListElem");
            checkEasementListElem.id = "check_easement_list_" + this.date;
            checkEasementListElem.classList.add("toDoListTypeBorder");

            checkEasementListElem.innerHTML = `<div class="toDoListNoBump"><b>${"Check/ Apply for Easement:"}</b></div>`;

            // Making Type Label Plural if list is > 1
            if (this.checkEasementList.length > 1) {
                checkEasementListElem.innerHTML = `<div class="toDoListNoBump"><b>${"Check/ Apply for Easements:"}</b></div>`;
            }

            tempPageElem.push(checkEasementListElem.outerHTML);

            for (var i = 0; i < this.checkEasementList.length; i++) {
                const toDoObjectWrInfo = document.createElement("toDoObjectWrInfo");
                toDoObjectWrInfo.id = "check_easement_list_" + this.date + "_item_" + i;

                if (this.checkEasementList[i].completed != 1) { // Normal display for To-Do
                    toDoObjectWrInfo.innerHTML = 
                    `<div class="toDoObjectContainer">
                        ${`<div class="toDoListBumpOnce" id="check_easement_to_do_list_data_${i}">${this.checkEasementList[i].addressStr}</div>`}
                        ${`<div class="toDoListLabelButtonContainer">
                            ${`<div class="toDoListLabelID">${this.checkEasementList[i].toDoId}</div>`}
                            ${`<div class="toDoListLabel">${formatDateNormal(this.checkEasementList[i].creationDate)}</div>`}
                            ${`<div class="toDoListButton">${`<b id="check_easement_to_do_list_move_${i}">${"Move"}</b>`}</div>`}
                            ${`<div class="toDoListButton">${`<b id="check_easement_to_do_list_complete_${i}">${"Complete"}</b>`}</div>`}
                        </div>`}
                    </div>`;
                    tempPageElem.push(toDoObjectWrInfo.innerHTML);

                    for (var j = 0; j < this.checkEasementList[i].notes.length; j++) { // add the associated notes
                        if (this.checkEasementList[i].notes[j][1] != 1) { // Normal display for Note
                            const temp = 
                            `<div class="toDoNoteContainer">
                                ${`<div class="toDoListBumpTwice" id="check_easement_to_do_list_item_${i}_note_${j}">${this.checkEasementList[i].notes[j][0]}</div>`}
                                ${`<div class="toDoCompleteNoteCheckbox" id="check_easement_to_do_list_item_${i}_complete_note_${j}_checkbox"></div>`}
                            </div>`;
        
                            toDoObjectWrInfo.insertAdjacentHTML("beforeend", temp);
                            tempPageElem.push(temp);           
                        } else { // Need to add strike through note
                            const temp = 
                        `<div class="toDoNoteContainer">
                            ${`<strike>${`<div class="toDoListBumpTwice" id="check_easement_to_do_list_item_${i}_note_${j}">${this.checkEasementList[i].notes[j][0]}</div>`}</strike>`}
                            ${`<div class="toDoCompleteNoteCheckbox" id="check_easement_to_do_list_item_${i}_complete_note_${j}_checkbox">X</div>`}
                        </div>`;
    
                        toDoObjectWrInfo.insertAdjacentHTML("beforeend", temp);
                        tempPageElem.push(temp);           
                        }         
                    }
                } else { // Need to add strike through all
                    toDoObjectWrInfo.innerHTML = 
                    `<div class="toDoObjectContainer">
                        ${`<strike>${`<div class="toDoListBumpOnce" id="check_easement_to_do_list_data_${i}">${this.checkEasementList[i].addressStr}</div>`}</strike>`}
                        ${`<div class="toDoListLabelButtonContainer">
                            ${`<div class="toDoListLabelID">${this.checkEasementList[i].toDoId}</div>`}
                            ${`<div class="toDoListLabel">${formatDateNormal(this.checkEasementList[i].creationDate)}</div>`}
                            ${`<div class="toDoListButton">${`<b id="check_easement_to_do_list_move_${i}">${"Move"}</b>`}</div>`}
                            ${`<div class="toDoListButton">${`<b id="check_easement_to_do_list_complete_${i}">${"Complete"}</b>`}</div>`}
                        </div>`}
                    </div>`;
                    tempPageElem.push(toDoObjectWrInfo.innerHTML);

                    for (var j = 0; j < this.checkEasementList[i].notes.length; j++) { // add the associated notes
                        const temp = 
                        `<div class="toDoNoteContainer">
                            ${`<strike>${`<div class="toDoListBumpTwice" id="check_easement_to_do_list_item_${i}_note_${j}">${this.checkEasementList[i].notes[j][0]}</div>`}</strike>`}
                            ${`<div class="toDoCompleteNoteCheckbox" id="check_easement_to_do_list_item_${i}_complete_note_${j}_checkbox">X</div>`}
                        </div>`;
        
                        toDoObjectWrInfo.insertAdjacentHTML("beforeend", temp); 
                        tempPageElem.push(temp);           

                    }
                }
                
                checkEasementListElem.insertAdjacentElement("beforeend", toDoObjectWrInfo); // add the to-do w/ notes to the check permit list
            }
            pageElement2.add(tempPageElem);

           // pageElement.insertAdjacentElement("beforeend", checkEasementListElem); // add the check easement list to the page elem
        }

        /* Design List */
        if (this.designList.length > 0) {
            tempPageElem = [];
            const designListElem = document.createElement("designListElem");
            designListElem.id = "design_list_" + this.date;
            designListElem.classList.add("toDoListTypeBorder");

            designListElem.innerHTML = `<div class="toDoListNoBump"><b>${"Design:"}</b></div>`;
            tempPageElem.push(designListElem.outerHTML);

            for (var i = 0; i < this.designList.length; i++) {
                const toDoObjectWrInfo = document.createElement("toDoObjectWrInfo");
                toDoObjectWrInfo.id = "design_list_" + this.date + "_item_" + i;

                if (this.designList[i].completed != 1) { // Normal display for To-Do
                    toDoObjectWrInfo.innerHTML = 
                    `<div class="toDoObjectContainer">
                        ${`<div class="toDoListBumpOnce" id="design_to_do_list_data_${i}">${this.designList[i].addressStr}</div>`}
                        ${`<div class="toDoListLabelButtonContainer">
                            ${`<div class="toDoListLabelID">${this.designList[i].toDoId}</div>`}
                            ${`<div class="toDoListLabel">${formatDateNormal(this.designList[i].creationDate)}</div>`}
                            ${`<div class="toDoListButton">${`<b id="design_to_do_list_move_${i}">${"Move"}</b>`}</div>`}
                            ${`<div class="toDoListButton">${`<b id="design_to_do_list_complete_${i}">${"Complete"}</b>`}</div>`}
                        </div`}
                    </div>`;
                    tempPageElem.push(toDoObjectWrInfo.innerHTML);

                    for (var j = 0; j < this.designList[i].notes.length; j++) { // add the associated notes
                        if (this.designList[i].notes[j][1] != 1) { // Normal display for Note
                            const temp = 
                            `<div class="toDoNoteContainer">
                                ${`<div class="toDoListBumpTwice" id="design_to_do_list_item_${i}_note_${j}">${this.designList[i].notes[j][0]}</div>`}
                                ${`<div class="toDoCompleteNoteCheckbox" id="design_to_do_list_item_${i}_complete_note_${j}_checkbox"></div>`}
                            </div>`;
        
                            toDoObjectWrInfo.insertAdjacentHTML("beforeend", temp);
                            tempPageElem.push(temp);           
                        } else { // Need to add strike through note
                            const temp = 
                            `<div class="toDoNoteContainer">
                                ${`<strike>${`<div class="toDoListBumpTwice" id="design_to_do_list_item_${i}_note_${j}">${this.designList[i].notes[j][0]}</div>`}</strike>`}
                                ${`<div class="toDoCompleteNoteCheckbox" id="design_to_do_list_item_${i}_complete_note_${j}_checkbox">X</div>`}
                            </div>`;
        
                            toDoObjectWrInfo.insertAdjacentHTML("beforeend", temp);
                            tempPageElem.push(temp);           
                        }
                                          
                    }
                } else { // Need to add strike through all
                    toDoObjectWrInfo.innerHTML = 
                    `<div class="toDoObjectContainer">
                        ${`<strike>${`<div class="toDoListBumpOnce" id="design_to_do_list_data_${i}">${this.designList[i].addressStr}</div>`}</strike>`}
                        ${`<div class="toDoListLabelButtonContainer">
                            ${`<div class="toDoListLabelID">${this.designList[i].toDoId}</div>`}
                            ${`<div class="toDoListLabel">${formatDateNormal(this.designList[i].creationDate)}</div>`}
                            ${`<div class="toDoListButton">${`<b id="design_to_do_list_move_${i}">${"Move"}</b>`}</div>`}
                            ${`<div class="toDoListButton">${`<b id="design_to_do_list_complete_${i}">${"Complete"}</b>`}</div>`}
                        </div`}
                    </div>`;
                    tempPageElem.push(toDoObjectWrInfo.innerHTML);

                    for (var j = 0; j < this.designList[i].notes.length; j++) { // add the associated notes
                        const temp = 
                        `<div class="toDoNoteContainer">
                            ${`<strike>${`<div class="toDoListBumpTwice" id="design_to_do_list_item_${i}_note_${j}">${this.designList[i].notes[j][0]}</div>`}</strike>`}
                            ${`<div class="toDoCompleteNoteCheckbox" id="design_to_do_list_item_${i}_complete_note_${j}_checkbox">X</div>`}
                        </div>`;
        
                        toDoObjectWrInfo.insertAdjacentHTML("beforeend", temp);
                        tempPageElem.push(temp);           
                    }
                }

                designListElem.insertAdjacentElement("beforeend", toDoObjectWrInfo); // add the to-do w/ notes to the design list
            }
            pageElement2.add(tempPageElem);

            //pageElement.insertAdjacentElement("beforeend", designListElem); // add the design list to the page elem            
        }

        /* Revisions List */
        if (this.revisionsList.length > 0) {
            tempPageElem = [];
            const revisionsListElem = document.createElement("revisionsListElem");
            revisionsListElem.id = "revisions_list_" + this.date;
            revisionsListElem.classList.add("toDoListTypeBorder");

            revisionsListElem.innerHTML = `<div class="toDoListNoBump"><b>${"Revisions:"}</b></div>`;
            tempPageElem.push(revisionsListElem.outerHTML);

            for (var i = 0; i < this.revisionsList.length; i++) {
                const toDoObjectWrInfo = document.createElement("toDoObjectWrInfo");
                toDoObjectWrInfo.id = "revisions_list_" + this.date + "_item_" + i;

                if (this.revisionsList[i].completed != 1) { // Normal display for To-Do
                    toDoObjectWrInfo.innerHTML = 
                    `<div class="toDoObjectContainer">
                        ${`<div class="toDoListBumpOnce" id="revisions_to_do_list_data_${i}">${this.revisionsList[i].addressStr}</div>`}
                        ${`<div class="toDoListLabelButtonContainer">
                            ${`<div class="toDoListLabelID">${this.revisionsList[i].toDoId}</div>`}
                            ${`<div class="toDoListLabel">${formatDateNormal(this.revisionsList[i].creationDate)}</div>`}
                            ${`<div class="toDoListButton">${`<b id="revisions_to_do_list_move_${i}">${"Move"}</b>`}</div>`}
                            ${`<div class="toDoListButton">${`<b id="revisions_to_do_list_complete_${i}">${"Complete"}</b>`}</div>`}
                        </div`}
                    </div>`;
                    tempPageElem.push(toDoObjectWrInfo.innerHTML);

                    for (var j = 0; j < this.revisionsList[i].notes.length; j++) { // add the associated notes
                        if (this.revisionsList[i].notes[j][1] != 1) { // Normal display for Note
                            const temp = 
                            `<div class="toDoNoteContainer">
                                ${`<div class="toDoListBumpTwice" id="revisions_to_do_list_item_${i}_note_${j}">${this.revisionsList[i].notes[j][0]}</div>`}
                                ${`<div class="toDoCompleteNoteCheckbox" id="revisions_to_do_list_item_${i}_complete_note_${j}_checkbox"></div>`}
                            </div>`;

                            toDoObjectWrInfo.insertAdjacentHTML("beforeend", temp);      
                            tempPageElem.push(temp);                        
                        } else { // Need to add strike through note
                            const temp = 
                            `<div class="toDoNoteContainer">
                                ${`<strike>${`<div class="toDoListBumpTwice" id="revisions_to_do_list_item_${i}_note_${j}">${this.revisionsList[i].notes[j][0]}</div>`}</strike>`}
                                ${`<div class="toDoCompleteNoteCheckbox" id="revisions_to_do_list_item_${i}_complete_note_${j}_checkbox">X</div>`}
                            </div>`;

                            toDoObjectWrInfo.insertAdjacentHTML("beforeend", temp);      
                            tempPageElem.push(temp);           
                        }
                    }

                } else { // Need to add strike through all
                    toDoObjectWrInfo.innerHTML = 
                    `<div class="toDoObjectContainer">
                        ${`<strike>${`<div class="toDoListBumpOnce" id="revisions_to_do_list_data_${i}">${this.revisionsList[i].addressStr}</div>`}</strike>`}
                        ${`<div class="toDoListLabelButtonContainer">
                            ${`<div class="toDoListLabelID">${this.revisionsList[i].toDoId}</div>`}
                            ${`<div class="toDoListLabel">${formatDateNormal(this.revisionsList[i].creationDate)}</div>`}
                            ${`<div class="toDoListButton">${`<b id="revisions_to_do_list_move_${i}">${"Move"}</b>`}</div>`}
                            ${`<div class="toDoListButton">${`<b id="revisions_to_do_list_complete_${i}">${"Complete"}</b>`}</div>`}
                        </div`}
                    </div>`;
                    tempPageElem.push(toDoObjectWrInfo.innerHTML);

                    for (var j = 0; j < this.revisionsList[i].notes.length; j++) { // add the associated notes
                        const temp = 
                        `<div class="toDoNoteContainer">
                            ${`<strike>${`<div class="toDoListBumpTwice" id="revisions_to_do_list_item_${i}_note_${j}">${this.revisionsList[i].notes[j][0]}</div>`}</strike>`}
                            ${`<div class="toDoCompleteNoteCheckbox" id="revisions_to_do_list_item_${i}_complete_note_${j}_checkbox">X</div>`}
                        </div>`;

                        toDoObjectWrInfo.insertAdjacentHTML("beforeend", temp);   
                        tempPageElem.push(temp);                              
                    }
                }
                
                revisionsListElem.insertAdjacentElement("beforeend", toDoObjectWrInfo); // add the to-do w/ notes to the revisions list
            }
            pageElement2.add(tempPageElem);

            //pageElement.insertAdjacentElement("beforeend", revisionsListElem); // add the revisions list to the page elem   
        }

        /* General List */
        if (this.generalList.length > 0) {
            tempPageElem = [];
            const generalListElem = document.createElement("generalListElem");
            generalListElem.id = "general_list_" + this.date;
            generalListElem.classList.add("toDoListTypeBorder");

            generalListElem.innerHTML = `<div class="toDoListNoBump"><b>${"General:"}</b></div>`;
            tempPageElem.push(generalListElem.outerHTML);

            for (var i = 0; i < this.generalList.length; i++) {
                const toDoObjectWrInfo = document.createElement("toDoObjectWrInfo");
                toDoObjectWrInfo.id = "general_list_" + this.date + "_item_" + i;

                if (this.generalList[i].workRequestNumber != undefined && this.generalList[i].workRequestNumber != "") { // User provided optional work request number
                    if (this.generalList[i].completed != 1) { // Normal display for To-Do
                        toDoObjectWrInfo.innerHTML = 
                        `<div class="toDoObjectContainer">
                            ${`<div class="toDoListBumpOnce" id="general_to_do_list_data_${i}">${this.generalList[i].addressStr}</div>`}
                            ${`<div class="toDoListLabelButtonContainer">
                                ${`<div class="toDoListLabelID">${this.generalList[i].toDoId}</div>`}
                                ${`<div class="toDoListLabel">${formatDateNormal(this.generalList[i].creationDate)}</div>`}
                                ${`<div class="toDoListButton">${`<b id="general_to_do_list_move_${i}">${"Move"}</b>`}</div>`}
                                ${`<div class="toDoListButton">${`<b id="general_to_do_list_complete_${i}">${"Complete"}</b>`}</div>`}
                            </div`}
                        </div>`;
                        tempPageElem.push(toDoObjectWrInfo.innerHTML);

                        for (var j = 0; j < this.generalList[i].notes.length; j++) { // add the associated notes
                            if (this.generalList[i].notes[j][1] != 1) { // Normal display for Note
                                const temp = 
                                `<div class="toDoNoteContainer">
                                    ${`<div class="toDoListBumpTwice" id="general_to_do_list_item_${i}_note_${j}">${this.generalList[i].notes[j][0]}</div>`}
                                    ${`<div class="toDoCompleteNoteCheckbox" id="general_to_do_list_item_${i}_complete_note_${j}_checkbox"></div>`}
                                </div>`;

                                toDoObjectWrInfo.insertAdjacentHTML("beforeend", temp);  
                                tempPageElem.push(temp);           
                            } else { // Need to add strike through note
                                const temp = 
                                `<div class="toDoNoteContainer">
                                    ${`<strike>${`<div class="toDoListBumpTwice" id="general_to_do_list_item_${i}_note_${j}">${this.generalList[i].notes[j][0]}</div>`}</strike>`}
                                    ${`<div class="toDoCompleteNoteCheckbox" id="general_to_do_list_item_${i}_complete_note_${j}_checkbox">X</div>`}
                                </div>`;
            
                                toDoObjectWrInfo.insertAdjacentHTML("beforeend", temp);  
                                tempPageElem.push(temp);           
                            }
                                            
                        }
                    } else { // Need to add strike through all
                        toDoObjectWrInfo.innerHTML = 
                        `<div class="toDoObjectContainer">
                            ${`<strike>${`<div class="toDoListBumpOnce" id="general_to_do_list_data_${i}">${this.generalList[i].addressStr}</div>`}</strike>`}
                            ${`<div class="toDoListLabelButtonContainer">
                                ${`<div class="toDoListLabelID">${this.generalList[i].toDoId}</div>`}
                                ${`<div class="toDoListLabel">${formatDateNormal(this.generalList[i].creationDate)}</div>`}
                                ${`<div class="toDoListButton">${`<b id="general_to_do_list_move_${i}">${"Move"}</b>`}</div>`}
                                ${`<div class="toDoListButton">${`<b id="general_to_do_list_complete_${i}">${"Complete"}</b>`}</div>`}
                            </div`}
                        </div>`;
                        tempPageElem.push(toDoObjectWrInfo.innerHTML);

                        for (var j = 0; j < this.generalList[i].notes.length; j++) { // add the associated notes
                            const temp = 
                            `<div class="toDoNoteContainer">
                                ${`<strike>${`<div class="toDoListBumpTwice" id="general_to_do_list_item_${i}_note_${j}">${this.generalList[i].notes[j][0]}</div>`}</strike>`}
                                ${`<div class="toDoCompleteNoteCheckbox" id="general_to_do_list_item_${i}_complete_note_${j}_checkbox">X</div>`}
                            </div>`;
            
                            toDoObjectWrInfo.insertAdjacentHTML("beforeend", temp);  
                            tempPageElem.push(temp);                          
                        }
                    }

                } else { // no work request number was entered
                    toDoObjectWrInfo.innerHTML = 
                    `<div class="toDoObjectContainer">
                        
                    </div>`;

                    for (var j = 0; j < this.generalList[i].notes.length; j++) { // add the associated notes
                        if (this.generalList[i].notes[j][1] != 1) { // Normal display for note
                            const temp = 
                            `<div class="toDoNoteContainer">
                                ${`<div class="toDoListBumpOnce" id="general_to_do_list_data_${i}">${this.generalList[i].notes[j][0]}</div>`}
                                ${`<div class="toDoListLabelButtonContainer">
                                    ${`<div class="toDoListLabelID">${this.generalList[i].toDoId}</div>`}
                                    ${`<div class="toDoListLabel">${formatDateNormal(this.generalList[i].creationDate)}</div>`}
                                    ${`<div class="toDoListButton">${`<b id="general_to_do_list_move_${i}">${"Move"}</b>`}</div>`}
                                    ${`<div class="toDoListButton">${`<b id="general_to_do_list_item_${i}_complete_note_${j}_cb">${"Complete"}</b>`}</div>`}
                                </div`}
                            </div>`;
                            tempPageElem.push(temp);           
    
                            toDoObjectWrInfo.insertAdjacentHTML("beforeend", temp);   
                        } else { // Need to add strike through note
                            const temp = 
                            `<div class="toDoNoteContainer">
                                ${`<strike>${`<div class="toDoListBumpOnce" id="general_to_do_list_data_${i}">${this.generalList[i].notes[j][0]}</div>`}</strike>`}
                                ${`<div class="toDoListLabelButtonContainer">
                                    ${`<div class="toDoListLabelID">${this.generalList[i].toDoId}</div>`}
                                    ${`<div class="toDoListLabel">${formatDateNormal(this.generalList[i].creationDate)}</div>`}
                                    ${`<div class="toDoListButton">${`<b id="general_to_do_list_move_${i}">${"Move"}</b>`}</div>`}
                                    ${`<div class="toDoListButton">${`<b id="general_to_do_list_item_${i}_complete_note_${j}_cb">${"Complete"}</b>`}</div>`}
                                </div`}
                            </div>`;
                            tempPageElem.push(temp);           

                            toDoObjectWrInfo.insertAdjacentHTML("beforeend", temp);   
                        }
                                       
                    }
                    
                }
                
                generalListElem.insertAdjacentElement("beforeend", toDoObjectWrInfo); // add the to-do w/ notes to the general list
            }
            pageElement2.add(tempPageElem);

            //pageElement.insertAdjacentElement("beforeend", generalListElem); // add the general list to the page elem  
        }

        //return pageElement2.curPage;
        //pageElement2.add(tempPageElem);
        pageElement2.display(curPage);
        return pageElement2;

    }

    add(toDo) {
        console.log("Entered - ToDoDayObject - add(toDo)");

        if (toDo.type == "Contact Customer") {
            /*if (this.contactCustomerList.length == 0) {
                this.contactCustomerList.push(toDo);
            } else {
                for (var i = 0; i < this.contactCustomerList.length; i++) {
                    if (this.contactCustomerList[i].workRequestNumber == toDo.workRequestNumber) {
                        for (var j = 0; j < toDo.notes.length; j++) {
                            this.contactCustomerList[i].notes.push(toDo.notes[j]);
                            console.log("note added");
                            return;
                        }

                    } 
                }
                this.contactCustomerList.push(toDo);
            }*/
            this.contactCustomerList.push(toDo);

        } else if (toDo.type == "Site Visit") {
            this.siteVisitList.push(toDo);
        } else if (toDo.type == "Service Calc + Coding") {
            this.svcCalcList.push(toDo);
        } else if (toDo.type == "SVC Calcs + Coding") { // Compatability issue with DD - correcting here
            toDo.type = "Service Calc + Coding";
            this.svcCalcList.push(toDo);
        } else if (toDo.type == "Check/ Apply - NJUNS") {
            this.checkNJUNSList.push(toDo);
        } else if (toDo.type == "Check/ Apply - Permit") {
            this.checkPermitList.push(toDo);
        } else if (toDo.type == "Check/ Apply - Easement") {
            this.checkEasementList.push(toDo);
        } else if (toDo.type == "Design") {
            this.designList.push(toDo);
        } else if (toDo.type == "Revisions") {
            this.revisionsList.push(toDo);
        } else if (toDo.type == "General") {
            this.generalList.push(toDo);
        } 
        console.log("RRR");
        console.log(this);
    }

    /* Takes in a list and returns a list without the index param - used in addTabUpdateButton */
    remove(list, index) {
        console.log("Entered - ToDoDayObject - remove(list= " + list + " index= " + index + ")");

        let temp = [];

        for (var i = 0; i < list.length; i++) {
            if (i != index) {
                temp.push(list[i]);
            }
        }

        return temp;
    }
    /* Iterates through lists and removes toDo with toDoId passed in */
    removeById(toDoId) {
        console.log("Entered - ToDoDayObject - removeById(" + toDoId + ")");

        for (var i = 0; i < this.contactCustomerList.length; i++) {
            if (this.contactCustomerList[i].toDoId == toDoId) {
                this.contactCustomerList = this.remove(this.contactCustomerList, i);
                return true; // returning true breaks parents loop - called in ToDoMasterList
            }
        }
        for (var i = 0; i < this.siteVisitList.length; i++) {
            if (this.siteVisitList[i].toDoId == toDoId) {
                this.siteVisitList = this.remove(this.siteVisitList, i);
                return true; // returning true breaks parents loop - called in ToDoMasterList
            }
        }
        for (var i = 0; i < this.svcCalcList.length; i++) {
            if (this.svcCalcList[i].toDoId == toDoId) {
                this.svcCalcList = this.remove(this.svcCalcList, i);
                return true; // returning true breaks parents loop - called in ToDoMasterList
            }
        }
        for (var i = 0; i < this.checkNJUNSList.length; i++) {
            if (this.checkNJUNSList[i].toDoId == toDoId) {
                this.checkNJUNSList = this.remove(this.checkNJUNSList, i);
                return true; // returning true breaks parents loop - called in ToDoMasterList
            }
        }
        for (var i = 0; i < this.checkPermitList.length; i++) {
            if (this.checkPermitList[i].toDoId == toDoId) {
                this.checkPermitList = this.remove(this.checkPermitList, i);
                return true; // returning true breaks parents loop - called in ToDoMasterList
            }
        }
        for (var i = 0; i < this.checkEasementList.length; i++) {
            if (this.checkEasementList[i].toDoId == toDoId) {
                this.checkEasementList = this.remove(this.checkEasementList, i);
                return true; // returning true breaks parents loop - called in ToDoMasterList
            }
        }
        for (var i = 0; i < this.designList.length; i++) {
            if (this.designList[i].toDoId == toDoId) {
                this.designList = this.remove(this.designList, i);
                return true; // returning true breaks parents loop - called in ToDoMasterList
            }
        }
        for (var i = 0; i < this.revisionsList.length; i++) {
            if (this.revisionsList[i].toDoId == toDoId) {
                this.revisionsList = this.remove(this.revisionsList, i);
                return true; // returning true breaks parents loop - called in ToDoMasterList
            }
        }
        for (var i = 0; i < this.generalList.length; i++) {
            if (this.generalList[i].toDoId == toDoId) {
                this.generalList = this.remove(this.generalList, i);
                return true; // returning true breaks parents loop - called in ToDoMasterList
            }
        }

        return false;
    }

    isEmpty() {
        console.log("Entered - ToDoDayObject - isEmpty()");

        if (this.contactCustomerList.length == 0 && this.siteVisitList.length == 0 && this.svcCalcList.length == 0 && 
            this.checkNJUNSList.length == 0 && this.checkPermitList.length == 0 && this.checkEasementList.length == 0 &&
            this.designList.length == 0 && this.revisionsList.length == 0 && this.generalList.length == 0) {
                return true;
        } else {
            return false;
        }
    }

    toString() {
        console.log("Entered - ToDoDayObject - toString()");

        let str = "";

        for (var i = 0; i < this.contactCustomerList.length; i++) {
            str += this.contactCustomerList[i].toString();
        }
        str += "%#";
        for (var i = 0; i < this.siteVisitList.length; i++) {
            str += this.siteVisitList[i].toString();
        }
        str += "%#";
        for (var i = 0; i < this.svcCalcList.length; i++) {
            str += this.svcCalcList[i].toString();
        }
        str += "%#";
        for (var i = 0; i < this.checkNJUNSList.length; i++) {
            str += this.checkNJUNSList[i].toString();
        }
        str += "%#";
        for (var i = 0; i < this.checkPermitList.length; i++) {
            str += this.checkPermitList[i].toString();
        }
        str += "%#";
        for (var i = 0; i < this.checkEasementList.length; i++) {
            str += this.checkEasementList[i].toString();
        }
        str += "%#";
        for (var i = 0; i < this.designList.length; i++) {
            str += this.designList[i].toString();
        }
        str += "%#";
        for (var i = 0; i < this.revisionsList.length; i++) {
            str += this.revisionsList[i].toString();
        }
        str += "%#";
        for (var i = 0; i < this.generalList.length; i++) {
            str += this.generalList[i].toString();
        }
        str += "%#";
        //str += this.linesPerPage; // shouldn't need this - can get from parent and is messing up parse
        //str+= "%#";
        
        return str;

    }
}

class ToDoObject {
    constructor(toDoId, tab, dueDate, type, creationDate, completed, notes, workRequestNumber, addressStr) {
        this.toDoId = toDoId;
        this.tab = tab;
        this.dueDate = dueDate;
        this.type = type;
        this.creationDate = creationDate;
        this.completed = completed;
        this.notes = notes; // will be an array strs
        this.workRequestNumber = workRequestNumber; // may be undefined at times
        this.addressStr = addressStr;
    }

    compare(toDo) {
        console.log("Entered - ToDoObject - compare(" + toDo + ")");

        // Below statement is if both toDo's have WR#s and they are equivelant 
        if (this.workRequestNumber != undefined && toDo.workRequestNumber != undefined && this.workRequestNumber == toDo.workRequestNumber ||
            this.workRequestNumber == undefined && toDo.workRequestNumber == undefined) { // Both toDo's do not have a WR#
            if (this.toDoId == toDo.toDoId && this.tab == toDo.tab && this.dueDate == toDo.dueDate && this.type == toDo.type &&
                this.creationDate == toDo.creationDate && this.completed == toDo.completed && this.notes.length == toDo.notes.length) {
                    
                    /* Checking Notes now */
                    for (var i = 0; i < this.notes.length; i++) {
                        if (this.notes[i] != toDo.notes[i]) {
                            return 0;
                        }
                    }
                    /* Will only get here if every note for "this" is the same as for "toDo" (index sensitive)*/
                    return 1;
            } else {
                return 0;
            }
        } else {
            return 0;
        }
        
    }

    toString() {
        console.log("Entered - ToDoObject - toString()");

        let temp = this.workRequestNumber;
        if (temp == undefined) {
            temp = "No Wr#";
        }
        let tempAddressStr = this.addressStr;
        if (tempAddressStr == undefined) {
            tempAddressStr = "No Adr - No Wr#";
        }

        let str = "";

        str += this.toDoId + "*" + this.tab + "*" + this.dueDate + "*" + this.type + "*" + this.creationDate + "*" + this.completed + "*";

        for (var i = 0; i < this.notes.length; i++) {
            str += this.notes[i] + "*";
        }

        str += "^EN^" + temp + "*" + tempAddressStr + "@ET@";


        return str;
    }
}

/* Takes an array of commentItem objects and injects them to the specified tab
    Used in PaginatedComments but could also be used elsewhere */
function updateComments(comments, tab) {
    console.log("Entered - updateComments(" + comments + ", " + tab + ")");

    if (tab == "addWr") {
        document.getElementById("add_tab_wr_comments_to_add").innerHTML = "";
    } else if (tab == "addPermit") {
        document.getElementById("add_tab_permit_comments_to_add").innerHTML = "";
    } else if (tab == "addComment") {
        document.getElementById("add_comment_tab_existing_comments").innerHTML = "";
    } else if (tab == "addToDo") {
        document.getElementById("add_tab_display_to_do_row_three_notes_to_add").innerHTML = "";
    }

    for (var i = 0; i < comments.length; i++) {
        if (tab == "addWr") {
            injectHTMLAddTabWrComment(comments[i], i);
        } else if (tab == "addPermit") {
            injectHTMLAddTabPermitComment(comments[i], i);
        } else if (tab == "addComment") {
            injectHTMLAddCommentTabComment(comments[i], i);
        } else if (tab == "addToDo") {
            injectHTMLAddToDoNote(comments[i], i);
        }
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

    return month + "-" + day + "-" + year;
}

function formatDatePermitApplied(date) {
    console.log("Entered - formatDatePermitApplied(" + date + ")");

    if (date == "0001-01-01") {
        return date;
    } else if (date.length == 9) { // this code shouldn't run bc i formatted date prior 
        const year = date.substring(5);
        console.log(year);
        const month = date.substring(3, 4);
        console.log(month);
        const day = date.substring(0, 2);
        console.log("formatDatePermitApplie ERROR ***");
        return year + "-0" + month + "-" + day;

    } else {
        const year = date.substring(6);
        console.log(year);
        const month = date.substring(3, 5);
        console.log(month);
        const day = date.substring(0, 2);
        return year + "-" + month + "-" + day;

    }
    
    //console.log(day);

}

/* Makes month 2 digits - for date format */
function formatMonth(month) {
    console.log("Entered - formatMonth(" + month +")");

    if (month.length == 2) {
        return month;
    } else {
        let str = "0";
        str += month;
        return str;    }
}

function convertNumText(row) {
    console.log("Entered - convertNumText(row)");

    let rowNumberText = "";

    if (row == 1) {
        rowNumberText = "one";
    } else if (row == 2) {
        rowNumberText = "two";
    } else if (row == 3) {
        rowNumberText = "three";
    } else if (row == 4) {
        rowNumberText = "four";
    } else if (row == 5) {
        rowNumberText = "five";
    } else if (row == 6) {
        rowNumberText = "six";
    } else if (row == 7) {
        rowNumberText = "seven";
    } else if (row == 8) {
        rowNumberText = "eight";
    }

    return rowNumberText;
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

    return [...quickSortAgeOld(leftArr), pivot, ...quickSortAgeOld(rightArr)];
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
async function saveFile(allWrList, userColors, systemPreferences, toDoMasterList) {
    console.log("Entered - saveFile()");
    console.log(systemPreferences);

    const d = new Date();
    let day = d.getDate();
    if (day < 10) {
        day = "0" + day;
    }
    let hours = d.getHours();
    if (hours < 10) {
        hours = "0" + hours;
    }
    let minutes = d.getMinutes();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    const now = d.getFullYear() + "-" + formatMonth((d.getMonth() + 1) + "-" + day + "-" + hours + "-" + minutes);

    const data = [toDoMasterList, systemPreferences, userColors, now, allWrList]; 
    const dataBlob = new Blob(data);

    const dataStr = toDoMasterList.toString() + systemPreferences.toString() + userColors.toString() + now + allWrList.toString();
    console.log("data =");
    console.log(dataStr);

    window.localStorage.setItem("data", dataStr);

    const newHandle = await window.showSaveFilePicker().then(results => {
        console.log("settings results.name =");
        console.log(results.name);
        window.localStorage.setItem("fileName", results.name);
        
    })
    if (newHandle.name.substring(newHandle.name.length - 1 - 4, newHandle.name.length -1) == ".txt") {
        console.log("Good File Name");
        document.getElementById("bad_file_name_pop_up_container").classList.add("hidden");
        //window.localStorage.setItem("goodSave", true);
    } else {
        console.log("Bad File Name");
        document.getElementById("bad_file_name_pop_up_container").classList.remove("hidden");
        setTimeout(() => {
            document.getElementById("bad_file_name_pop_up_container").classList.add("hidden");
        }, 5000);
        document.getElementById("bad_file_name_container").innerText = newHandle.name;
        saveFile(allWrList, userColors, systemPreferences, toDoMasterList);
        //window.localStorage.setItem("goodSave", false);
    }
    
    
    const writableStream = await newHandle.createWritable();
    
    await writableStream.write(dataBlob);
    await writableStream.close();
    
}
function readFile() {
    console.log("Entered - readFile()");

    var selected = document.getElementById("allWrListFile").files[0];

    var reader = new FileReader();
    reader.addEventListener("loadend", function() {
        let toDoMasterListData = splitToDoMasterList(reader.result);
        let systemPreferencesData = splitSystemPreferences(toDoMasterListData[1]);
        let colorPreferencesData = splitColorPreferences(systemPreferencesData[1]);
        let toDoMasterListStr = toDoMasterListData[0];
        let systemPreferencesStr = systemPreferencesData[0];
        let colorPreferencesStr = colorPreferencesData[0];
        let allWrList = parseWrString(colorPreferencesData[1]);
        document.getElementById("load_save_buttons_container").insertAdjacentHTML("afterend", `<div class="hidden" id="temp_system_storage">${systemPreferencesStr}</div>`);
        document.getElementById("load_save_buttons_container").insertAdjacentHTML("afterEnd", `<div class="hidden" id="temp_color_storage">${colorPreferencesStr}</div>`);
        document.getElementById("load_save_buttons_container").insertAdjacentHTML("afterEnd", `<div class="hidden" id="temp_storage">${allWrList}</div>`);
        document.getElementById("load_save_buttons_container").insertAdjacentHTML("afterEnd", `<div class="hidden" id="temp_to_do_storage">${toDoMasterListStr}</div>`);
        document.getElementById("footer_button_sync").classList.remove("hidden");
    });
    reader.readAsText(selected);
}

    /* InjectHTML Functions */
function injectHTMLAllWrTabDisplay(allWrList, currentPageAllWr, userColors, toDoMasterList) {
    console.log("Entered - injectHTMLAllWrTabDisplay(allWrList, " + currentPageAllWr + ", userColors, toDoMasterList)");
    
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
        
        setAllWrRowValues(pages[currentPageAllWr].content[i], i + 1, userColors, toDoMasterList);
        revealWrRow(i + 1);
    }

    document.getElementById("all_wr_tab_prev_next_container").classList.remove("hidden");
    
    if (document.getElementById("all_wr_tab").classList.contains("hidden")) { // allWrTab is active
        document.getElementById("permits_tab_prev_next_container").classList.add("hidden");
    } else if (document.getElementById("permits_tab").classList.contains("hidden")) {
        document.getElementById("all_wr_tab_prev_next_container").classList.add("hidden");
    }


    const prev = document.getElementById("all_wr_tab_page_prev_button");
    const next = document.getElementById("all_wr_tab_page_next_button");
    const cur = document.getElementById("all_wr_tab_current_page_box");

    cur.classList.remove("hidden");

    /* Adding next and prev buttons */
    if ((currentPageAllWr + 1)  < pages.length && pages[currentPageAllWr + 1].content.length != 0) { // reveal next button
        next.classList.remove("hidden");
        prev.classList.remove("hidden");
        next.disabled = false;
    } else {
        //next.classList.add("hidden");
        next.disabled = true;
    }

    if (currentPageAllWr + 1 > 1) { // reveal prev button
        next.classList.remove("hidden");
        prev.classList.remove("hidden");
        prev.disabled = false;
    } else {
        //prev.classList.add("hidden");
        prev.disabled = true;
    }
}
function injectHTMLToDoTabDisplay(toDoDayObject) {
    console.log("Entered - injectHTMLToDoTabDisplay()");
    console.log(toDoDayObject);


    if (toDoDayObject.flatten().length == 0) {
       return document.getElementById("to_do_display_row_element_container").innerHTML = `<div class="noToDosForToday" id="no_to_dos_for_today_prompt">No To-Do's for Today</div>`;

    } else {
    //tempToDoPageElement = new PaginatedToDoPageElement(5);

    const toDoRowElementContainer = document.getElementById("to_do_display_row_element_container");

    toDoRowElementContainer.innerHTML = "";

    const temp = toDoDayObject.makePageElement();

    return temp;
    
    //toDoRowElementContainer.insertAdjacentElement("beforeend", temp);
    }
    
    
}
function injectHTMLPermitsTabDisplay(allWrList, currentPagePermits, userColors) {
    console.log("Entered - injectHTMLPermitsTabDisplay(allWrList, " + currentPagePermits + ")");

    const pag = new Paginated(allWrList);
    const pages = pag.getPages();

    hideAllPermitRows();

    const tempAllWrList = document.getElementById("temp_all_wr_list");
    tempAllWrList.innerHTML = allWrList;

    for (var i = 0; i < pages[currentPagePermits].content.length; i++) {
        setPermitRowValues(pages[currentPagePermits].content[i], i + 1, userColors);
        revealPermitRow(i + 1);
    }

    document.getElementById("permits_tab_prev_next_container").classList.remove("hidden");
    
    if (document.getElementById("all_wr_tab").classList.contains("hidden")) { // allWrTab is active
        document.getElementById("permits_tab_prev_next_container").classList.add("hidden");
    } else if (document.getElementById("permits_tab").classList.contains("hidden")) {
        document.getElementById("all_wr_tab_prev_next_container").classList.add("hidden");
    }

    /* Adding next and prev buttons */
    const prev = document.getElementById("permits_tab_page_prev_button");
    const next = document.getElementById("permits_tab_page_next_button");
    const cur = document.getElementById("permits_tab_current_page_box");

    cur.classList.remove("hidden");

    if ((currentPagePermits + 1)  < pages.length && pages[currentPagePermits + 1].content.length != 0) { // reveal next button
        next.classList.remove("hidden");  
        prev.classList.remove("hidden");
        next.disabled = false;
    } else {
        //next.classList.add("hidden");
        next.disabled = true;
    }

    if (currentPagePermits + 1 > 1) {  // reveal prev button
        next.classList.remove("hidden");  
        prev.classList.remove("hidden");
        prev.disabled = false;
    } else {
        //prev.classList.add("hidden");
        prev.disabled = true;
    }
}
function injectHTMLAddTabWrComment(comment, index) {
    console.log("Entered - injectHTMLAddTabWrComment(" + comment + ", " + index + ")");

    const commentsToAdd = document.getElementById("add_tab_wr_comments_to_add");
    const elem = document.createElement("commentToAddItem");
    elem.id = "comment_to_add_item_" + index;

    elem.innerHTML = `<li class="addTabWrCommentToAdd">${comment}</li>`;

    /* Formatting date for display */
    elem.innerText = elem.innerText.substring(9, elem.innerText.length);
    const date = elem.innerText.substring(elem.innerText.length - 12, elem.innerText.length );
    elem.innerText = date + " " + elem.innerText.substring(0, elem.innerText.length - 12);
    
    commentsToAdd.classList.remove("hidden");
    commentsToAdd.insertAdjacentElement("beforeend", elem);
}
function injectHTMLAddTabPermitComment(comment, index) {
    console.log("Entered - injectHTMLAddTabPermitComment(" + comment + ", " + index + ")");

    const commentsToAdd = document.getElementById("add_tab_permit_comments_to_add");
    const elem = document.createElement("commentToAddItem");
    elem.id = "permit_comment_to_add_item_" + index;

    elem.innerHTML = `<li class="addTabPermitCommentToAdd">${comment}</li>`;

    /* Formatting date for display */
    elem.innerText = elem.innerText.substring(8, elem.innerText.length);
    const date = elem.innerText.substring(elem.innerText.length - 12, elem.innerText.length);
    elem.innerText = date + " " + elem.innerText.substring(0, elem.innerText.length - 12);

    commentsToAdd.classList.remove("hidden");
    commentsToAdd.insertAdjacentElement("beforeend", elem);
}
function injectHTMLAddCommentTabComment(comment, index) {
    console.log("Entered - injectHTMLAddCommentTabComment(" + comment +", " + index + ")");

    const existingComments = document.getElementById("add_comment_tab_existing_comments");
    const elem = document.createElement("commentItemExisting");
    elem.id = "existing_comment_item_" + index;

    elem.innerHTML = `<li class="addCommentTabExistingCommentItem">${comment}</li>`;

    /* Formatting date for display */
    if (elem.innerText.charAt(1) == 'G') { // comment is of type "General"
        elem.innerText = elem.innerText.substring(9, elem.innerText.length);
    } else if (elem.innerText.charAt(1) == 'P') { // comment is of type "Permit"
        elem.innerText = elem.innerText.substring(8, elem.innerText.length);
    }
    const date = elem.innerText.substring(elem.innerText.length - 12, elem.innerText.length);
    elem.innerText = date + " " + elem.innerText.substring(0, elem.innerText.length - 12);

    existingComments.insertAdjacentElement("beforeend", elem);
}
function injectHTMLAddToDoNote(note, index) {
    console.log("Entered - injectHTMLAddToDoNote(" + note + ", " + index + ")");
    console.log("note =");
    console.log(note);

    const notesToAdd = document.getElementById("add_tab_display_to_do_row_three_notes_to_add");
    const elem = document.createElement("noteItem");
    elem.id = "add_tab_display_to_do_note_item_" + index;

    if (note[1] == 1) {
        console.log("note[1] == 1");
        elem.innerHTML = `<strike>${`<li class="addTabDisplayToDoNoteItem">${note[0]}</li>`}</strike>`;
        elem.innerText = '\u2022' + " " + note[0];
        elem.style.textDecoration = 'line-through'; // used in one conditional elsewhere


    } else {
        elem.innerHTML = `<li class="addTabDisplayToDoNoteItem">${note[0]}</li>`;
        elem.innerText = '\u2022' + " " + note[0];
    }

    notesToAdd.insertAdjacentElement("beforeend", elem);
}

        /* Set/Reveal Rows */
    /* Permits Tab */
function setPermitRowValues(wr, rowNumber, userColors) {
    console.log("Entered - setPermitRowValues( + wr + ,  + rowNumber )");

    let rowNumberText = convertNumText(rowNumber); 

    let tempDate = [];

    const priority = document.getElementById("permits_tab_row_" + rowNumberText + "_priority_textfield");
    priority.value = wr.priorityNumber;

    const address = document.getElementById("permits_tab_row_" + rowNumberText + "_address");
    address.innerHTML = wr.wrAddressType().outerHTML;

    const applied = document.getElementById("permits_tab_row_" + rowNumberText + "_applied");

    console.log("dddd");
    console.log(wr.permit);
    applied.innerText = formatDateNormal(formatDatePermitApplied(wr.permit.dateApplied));

    const status = document.getElementById("permit_status_dd_permits_tab_row_" + rowNumber + "_current");
    status.innerText = wr.permit.permitStatus;
    status.style.backgroundColor = assessPermitStatus(wr.permit.permitStatus, userColors);
    /* Setting Button Height */
    if (wr.permit.permitStatus.includes("Expiring") || wr.permit.permitStatus.includes("Extension") || 
    wr.permit.permitStatus.includes("Don't") || wr.permit.permitStatus.includes("Haven't")) {
        document.getElementById("permit_status_dd_permits_tab_row_" + rowNumber + "_button").style.height = '50px';
    } else {
        document.getElementById("permit_status_dd_permits_tab_row_" + rowNumber + "_button").style.height = '30px';
    }

    const startDate = document.getElementById("permits_tab_row_" + rowNumberText + "_start_date");
    startDate.value = formatDate(wr.permit.startDate);
    startDate.zIndex = 2;
    startDate.style.backgroundColor = assessPermitStartDate(wr.permit.startDate, wr.permit.endDate, userColors);

    const endDate = document.getElementById("permits_tab_row_" + rowNumberText + "_end_date");
    endDate.value = formatDate(wr.permit.endDate);
    let date = new Date(wr.permit.endDate);
    endDate.style.backgroundColor = assessDatePermitEnd(date, userColors);

    const crd = document.getElementById("permits_tab_row_" + rowNumberText + "_crd_date");
    if (wr.crd == "0002-01-01") {
        wr.crd = "0001-01-01"; // resetting date from assessGeneralStatusChange
    }
    crd.value = wr.crd;
    date = new Date(wr.crd);
    crd.style.backgroundColor = assessDateCRD(date, userColors);

    const rcd = document.getElementById("permits_tab_row_" + rowNumberText + "_rcd_date");
    if (wr.rcd == "0002-01-01") {
        wr.rcd = "0001-01-01"; // resetting date from assessGeneralStatusChange
    }
    rcd.value = wr.rcd;
    date = new Date(wr.rcd);
    rcd.style.backgroundColor = assessDateRCD(date, userColors);

    const comments = document.getElementById("permits_tab_row_" + rowNumberText + "_comments");
    const tempLength = wr.commentsGeneral.comments.length;
    if (tempLength == 0) {
        console.log("No Comments to add");
        comments.innerText = "No Comments";
        comments.style.fontSize = '16px';
    } else {
        comments.innerText = wr.commentsGeneral.comments[tempLength - 1].comment +
        " (" + wr.commentsGeneral.comments[tempLength - 1].date + ")";
        comments.style.fontSize = '10px';


    }
}
function hideAllPermitRows() {
    console.log("Entered - hideAllPermitRows()");

    let temp = [];
    let rowNumberText = "";

    for (var i = 0; i < 8; i++) { //*change* - value = numRowsOnPage
        rowNumberText = convertNumText(i + 1);
        
        temp = document.getElementById("permits_tab_row_" + rowNumberText);
        temp.classList.add("hidden");
    }

    /* Hidding Next and Prev Buttons */
    const prev = document.getElementById("permits_tab_page_prev_button");
    const next = document.getElementById("permits_tab_page_next_button");
    const cur = document.getElementById("permits_tab_current_page_box");

    prev.classList.add("hidden");
    next.classList.add("hidden");
    cur.classList.add("hidden");

}
function revealPermitRow(row) {
    console.log("Entered - revealPermitRow(" + row + ")");
    
    let rowNumberText = convertNumText(row); 

    const temp = document.getElementById("permits_tab_row_" + rowNumberText);
    temp.classList.remove("hidden");
}

    /* AllWr Tab */
function setAllWrRowValues(wr, rowNumber, userColors, toDoMasterList) {
    console.log("Entered - setAllWrRowValues( + wr + ,  + rowNumber = " + rowNumber + ")");

    let rowNumberText = convertNumText(rowNumber);

    const priority = document.getElementById("all_wr_tab_row_" + rowNumberText + "_priority_textfield");
    priority.value = wr.priorityNumber;
    
    const address = document.getElementById("all_wr_tab_row_" + rowNumberText + "_address");
    address.innerHTML = wr.wrAddressType().outerHTML;

    const crd = document.getElementById("all_wr_tab_row_" + rowNumberText + "_crd");
    if (wr.crd == "0002-01-01") {
        wr.crd = "0001-01-01"; // resetting date from assessGeneralStatusChange
    }
    crd.value = wr.crd;
    let date = new Date(wr.crd);
    crd.style.backgroundColor = assessDateCRD(date, userColors);

    const rcd = document.getElementById("all_wr_tab_row_" + rowNumberText + "_rcd");
    if (wr.rcd == "0002-01-01") {
        wr.rcd = "0001-01-01"; // resetting date from assessGeneralStatusChange
    }
    rcd.value = wr.rcd;
    date = new Date(wr.rcd);
    rcd.style.backgroundColor = assessDateRCD(date, userColors);

    const generalStatus = document.getElementById("general_status_dd_" + rowNumber + "_current");
    generalStatus.innerText = wr.generalStatus;
    /* Setting Button Height */
    if (wr.generalStatus.includes("Waiting on Cust") == true) {
        generalStatus.style.fontSize = 'smaller';
        document.getElementById("general_status_dd_" + rowNumber + "_button").style.height = '60px';
    } else if (wr.generalStatus.includes("Check/ Apply") || wr.generalStatus.includes("Cancled")) {
        generalStatus.style.fontSize = 'smaller'
        document.getElementById("general_status_dd_" + rowNumber + "_button").style.height = '60px';
    } else if (wr.generalStatus.includes("Design") || wr.generalStatus.includes("Revisions") ||
    wr.generalStatus.includes("7010'd")) {
        generalStatus.style.fontSize = 'smaller'
        document.getElementById("general_status_dd_" + rowNumber + "_button").style.height = '30px';

    } else if (wr.generalStatus.includes("Coordinator")) {
        generalStatus.style.fontSize = 'smaller'
        document.getElementById("general_status_dd_" + rowNumber + "_button").style.height = '45px';
    } else if (wr.generalStatus.includes("Not Set")) {
        document.getElementById("general_status_dd_" + rowNumber + "_button").style.height = '30px';
    } else {
        generalStatus.style.fontSize = 'smaller'
        document.getElementById("general_status_dd_" + rowNumber + "_button").style.height = '45px';
    }

    const toDos = document.getElementById("all_wr_tab_row_" + rowNumberText + "_to_do_count_box");
    toDos.innerHTML = toDoMasterList.getCountToDosByWorkRequestNumber(wr.workRequestNumber);

    const permitStatus = document.getElementById("permit_status_dd_allWr_tab_row_" + rowNumber + "_current");
    permitStatus.innerText = wr.permit.permitStatus;
    permitStatus.style.backgroundColor = assessPermitStatus(wr.permit.permitStatus, userColors);
    /* Setting Button Height */
    if (wr.permit.permitStatus.includes("Expiring") || wr.permit.permitStatus.includes("Extension") || 
    wr.permit.permitStatus.includes("Don't") || wr.permit.permitStatus.includes("Haven't")) {
        document.getElementById("permit_status_dd_allWr_tab_row_" + rowNumber + "_button").style.height = '50px';
    } else {
        document.getElementById("permit_status_dd_allWr_tab_row_" + rowNumber + "_button").style.height = '30px';
    }

    const easementStatus = document.getElementById("easement_status_dd_" + rowNumber + "_current");
    easementStatus.innerText = wr.easementRequestStatus;
    easementStatus.style.backgroundColor = assessEasementStatus(wr.easementRequestStatus, userColors);
    /* Setting Button Height */
    if (wr.easementRequestStatus.includes("Pending") || wr.easementRequestStatus.includes("Not Set")) {
        document.getElementById("easement_status_dd_" + rowNumber + "_button").style.height = '30px';
    } else {
        document.getElementById("easement_status_dd_" + rowNumber + "_button").style.height = '50px';
    }

    const comments = document.getElementById("all_wr_tab_row_" + rowNumberText + "_comments");
    const tempLength = wr.commentsGeneral.comments.length;
    if (tempLength == 0) {
        console.log("no comments to add");
        comments.innerText = "No Comments";
        comments.style.fontSize = '16px';

    } else {
        //comments.innerText = wr.commentsGeneral.comments[0].comment + " (" + wr.commentsGeneral.comments[0].date + ")";
                                                      // length - 1 display newest comment - list is ascending
        comments.innerText = wr.commentsGeneral.comments[tempLength - 1].comment + 
                            " (" + wr.commentsGeneral.comments[tempLength - 1].date + ")";
        comments.style.fontSize = '10px';
    }
    
    //const pocs = document.getElementById("all_wr_tab_row_" + rowNumberText + "_pocs");
    //pocs.innerText = wr.ownerName + " - " + wr.ownerNumber + "\n" + wr.ownerEmail;

}
function hideAllWrRows() {
    console.log("Entered - hideAllWrRows()");

    let temp = [];
    let rowNumberText = "";

    for (var i = 0; i < 8; i++) { //*change* - value = allRowsOnPage
        rowNumberText = convertNumText(i + 1);
        
        temp = document.getElementById("all_wr_tab_row_" + rowNumberText);
        temp.classList.add("hidden");
    }

    document.getElementById("all_wr_tab_prev_next_container").classList.add("hidden");
    
    /* Hidding Next and Prev Buttons 
    const prev = document.getElementById("all_wr_tab_page_prev_button");
    const next = document.getElementById("all_wr_tab_page_next_button");
    const cur = document.getElementById("all_wr_tab_current_page_box");

    prev.classList.add("hidden");
    next.classList.add("hidden");
    cur.classList.add("hidden");*/

}
function revealWrRow(row) {
    console.log("Entered - revealWrRow(" + row + ")");

    let rowNumberText = convertNumText(row);
    
    const temp = document.getElementById("all_wr_tab_row_" + rowNumberText);
    temp.classList.remove("hidden");
}

    /* Set footer Date and Time */
function setFooterDate(dateTime) {
    console.log("Entered - setFooterDate(" + dateTime + ")");

    const dataFromDate = document.getElementById("data_from_value_date");
    const dataFromTime = document.getElementById("data_from_value_time");
    const date = dateTime.substring(0, 10);
    const time = dateTime.substring(11, 13) + ":" + dateTime.substring(14);

    dataFromDate.value = date;
    dataFromTime.value = time;
}

    /* Parse Functions */
/* Removes saved color preferences from the front of the saved string */
function splitColorPreferences(str) {
    console.log("Entered - splitColorPreferences(str)");

    let count = 0;
    let temp = str;
    let index = 0;

    while (count < 34) { // num of *'s in ColorPreferences toString()
        const tempIndex = temp.indexOf('*');
        index += tempIndex + 1;
        temp = temp.substring(tempIndex + 1);
        count++;
    }

    const colorPreferencesStr = str.substring(0, index);
    const allWrListRaw = str.substring(index);

    return [colorPreferencesStr, allWrListRaw];
}

/* Second split function - cuts users saved system preferences off of str and passes rest on */
function splitSystemPreferences(str) {
    console.log("Entered - splitSystemPreferences(str)");

    let count = 0;
    let temp = str;
    let index = 0;

    while (count < 7) {
        const tempIndex = temp.indexOf('@');
        index += tempIndex + 1;
        temp = temp.substring(tempIndex + 1);
        count++;
    }
    const systemPreferencesStr = str.substring(0, index);
    const allWrListRaw = str.substring(index);

    return [systemPreferencesStr, allWrListRaw];
}
/* First split function - cuts toDoMasterList off of str and passes rest on */
function splitToDoMasterList(str) {
    console.log("Entered - splitToDoMasterList(str)");

    let index = str.indexOf("^^EL^^");

    const toDoMasterListStr = str.substring(0, index);
    const rest = str.substring(index + 6);

    return [toDoMasterListStr, rest];
}

function parseWrString(str) {
    console.log("Entered - parseWrString(str)");

    let wrList = [];
    let curIndex = 0;
    let tempCount = 0;
    let tempStr = str;
    let date = null;

    while (str.length > 2) {

        // Removing Date and Time
        if (str[0] != "w") {
            date = str.substring(0, 16);
            const tempStr = str.substring(16); // removing date/time
            str = tempStr;

            setFooterDate(date);
        } else {
            console.log("Nothing to trim"); // for testing - could remove
        }

        curIndex = parseSingleWrIndex(str);
        tempStr = str.substring(0, curIndex);

        const data = parseSingleWrString(tempStr);
        
        const newWr = data[0];
        newWr.permit = data[1];

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
    commaIndex = str.indexOf("*ENDCHAR*");
    const workRequestNumber = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 9);
    
    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf("*ENDCHAR*");
    const houseNumber = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 9);
    
    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf("*ENDCHAR*");
    const streetName = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 9);
    
    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf("*ENDCHAR*");
    const countyCity = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 9);
    
    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf("*ENDCHAR*");
    const zipCode = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 9);
    
    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf("*ENDCHAR*");
    const priorityNumber = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 9);
    
    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf("*ENDCHAR*");
    const ownerName = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 9);
    
    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf("*ENDCHAR*");
    const ownerNumber = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 9);
    
    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf("*ENDCHAR*");
    const ownerEmail = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 9);
    
    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf("*ENDCHAR*");
    const builderName = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 9);
    
    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf("*ENDCHAR*");
    const builderNumber = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 9);
    
    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf("*ENDCHAR*");
    const builderEmail = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 9);
    
    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf("*ENDCHAR*");
    const otherName = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 9);
    
    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf("*ENDCHAR*");
    const otherNumber = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 9);
    
    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf("*ENDCHAR*");
    const otherEmail = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 9);
    
    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf("*ENDCHAR*");
    const wrType = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 9);
    
    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf("*ENDCHAR*");
    const crd = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 9);
    
    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf("*ENDCHAR*");
    const rcd = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 9);
    
    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf("*ENDCHAR*");
    const generalStatus = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 9);

    str = str.substring(7);  // removing "permit:"

    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf("*ENDCHAR*");
    const permitStatus = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 9);

    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf("*ENDCHAR*");
    const dateUpdated = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 9);

    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf("*ENDCHAR*");
    const dateApplied = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 9);

    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf("*ENDCHAR*");
    const permitStartDate = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 9);

    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf("*ENDCHAR*");
    const permitEndDate = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 9);
   
    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf("*ENDCHAR*");
    let easementRequestStatus = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 9);

    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf("*ENDCHAR*");
    const commentsGeneral = str.substring(colonIndex + 1, commaIndex);
    const commentsGeneralElem = parseComments(commentsGeneral);

    str = str.substring(commaIndex + 9);

    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf("*ENDCHAR*");
    const customerContacted = str.substring(colonIndex + 1, commaIndex);
    str = str.substring(commaIndex + 9);

    colonIndex = str.indexOf(":");
    commaIndex = str.indexOf("*ENDCHAR*");
    const creationDate = str.substring(colonIndex + 1, commaIndex);
    
    const wr = new workRequest(workRequestNumber, houseNumber, streetName, countyCity, zipCode, priorityNumber, ownerName, ownerNumber, 
        ownerEmail, builderName, builderNumber, builderEmail, otherName, otherNumber, otherEmail, wrType, crd, rcd, generalStatus,
        permitStatus, easementRequestStatus, commentsGeneralElem, customerContacted, creationDate);

    const permit = new Permit(workRequestNumber, permitStatus, dateUpdated, dateApplied, priorityNumber, crd,
            rcd, permitStartDate, permitEndDate, creationDate);

    let data = [wr, permit];

    return data;
}
/* Helper for parseWrString - returns index of last comma of first wr in str */
function parseSingleWrIndex(str) {
    console.log("Entered - parseSingleWrIndex(str)");

    let wrIndex = 0;
    let curIndex = 0;
    let count = 0;

    while (count < 28) { // will need to change for new format
        curIndex = str.indexOf("*ENDCHAR*") + 9;
        str = str.substring(curIndex);
        wrIndex += curIndex;
        count += 1;
    }
    return wrIndex;
}

/* Takes string of  */
function parseComments(comments) {
    console.log("Entered - parseComments()");

    let data = []
    let str = "";
    let commentContent = "";
    let type = "";

    while (comments.length > 1) {
        endIndex = comments.indexOf("*ENDCOMMENT*");
        const commentRaw = comments.substring(0, endIndex);
        const commentDate = commentRaw.substring(commentRaw.length - 11, commentRaw.length - 1);
        if (commentRaw.charAt(1) == 'P') { // comment is of type "Permit"
            commentContent = commentRaw.substring(8, commentRaw.length - 13);
            type = "Permit"
        } else if (commentRaw.charAt(1) == 'G') { // comment is of type "General"
            commentContent = commentRaw.substring(9, commentRaw.length - 13);
            type = "General"
        }
        
        const comment = new CommentItem(commentContent, commentDate, type);

        console.log(comment);
        data.push(comment);
        
        str = comments.substring(commentRaw.length + 12);
        comments = str;
    }

    return data;
}

        /* Check Functions */
    /* CRD/RCD Check/Error Functions */
function crdRcdCheck(crd, rcd, tab, row) {
    console.log("Entered - crdRcdCheck(" + tab + " tab - row " + row + ")");

    const crdDate = new Date(crd);
    const rcdDate = new Date(rcd);
    const difference = calculateCrdRcdDifference(rcdDate - crdDate);

    if (crd != "0001-01-01" && rcd != "0001-01-01") {
        if (difference <= 35) {
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
    //rcdError.style.fontSize = "smaller";
    rcdError.id = tab + "_tab_row_" + row + "_rcd_error";

    let temp = [];

    if (tab == "permits") {
        temp = document.getElementById(tab + "_tab_row_" + row + "_rcd_date");
        rcdError.classList.add("permitsTabRcdError");
    } else if (tab == "add" && row == "two") {
        console.log("Adding error to permits tab");
        temp = document.getElementById("add_tab_container_permit_rcd");
        rcdError.classList.add("addTabPermitRcdError");
        document.getElementById("add_tab_display_add_permit_top").classList.add("removeSideMargins");
        document.getElementById("date_add_tab_permit_rcd").style.backgroundColor = 'rgba(237, 57, 57, 0.765)'; 
    } else if (tab == "add" && row == "one") {
        temp = document.getElementById("add_tab_wr_textfield_container_rcd");
        rcdError.classList.add("addTabWrRCDError");
        document.getElementById("date_add_tab_wr_rcd").style.backgroundColor = 'rgba(237, 57, 57, 0.765)'; 
        //document.getElementById("add_tab_display_bottom").classList.add("removeSideMargins");
    } else {
        temp = document.getElementById(tab + "_tab_row_" + row + "_rcd");
        rcdError.classList.add("allWrTabRcdError");
    }
    
    const str = new String(temp.innerHTML);
    if (str.includes("rcdError") == false) {
        temp.insertAdjacentElement("afterend", rcdError);

    }
}
function removeRcdError(tab, row) {
    console.log("Entered - removeRcdError(" + tab + " tab - row " + row + ")");

    const temp = document.getElementById(tab + "_tab_row_" + row + "_rcd_error");
    if (temp != null) {
        console.log("removing RCD error");
    temp.remove();
    }

    if (tab == "add" && row == "two" && document.getElementById("add_tab_display_add_permit_top") != null) {
        document.getElementById("add_tab_display_add_permit_top").classList.remove("removeMargins");
        document.getElementById("date_add_tab_permit_rcd").style.backgroundColor = 'white'; 

    }
    if (tab == "add" && row == "one" && document.getElementById("add_tab_display_bottom") != null) {
        document.getElementById("date_add_tab_wr_rcd").style.backgroundColor = 'white'; 
        
    }
}

    /* General/Basic */
/* returns 0 at index 0 if not found - found wr element at index 1 - index at index 2*/
function getWr(curWrNum, allWrList) {
    console.log("Entered - getWr(" + curWrNum + ")");

    console.log("*** Testing Here ***");
    console.log(allWrList);

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
function assessPermitStartDate(startDate, endDate, userColors) {
    console.log("Entered - assessPermitStartDate(startDate = " + startDate + " - endDate = " + endDate + ")");

    const start = new Date(startDate);
    const end = new Date(endDate);
    const cur = new Date();
    const rawData = new Date(start - cur);
    const data = convertDate(rawData);
    
    if (data == -9999) { // date not set - set as 01/01/0001 by me by default
        return userColors.permitStartNotSet; // Yellow by default
    } else if (cur >= end) { // Permit has expired 
        return userColors.permitStartExpired; // Magenta by default
    } else if (start >= cur) {// Permit has started 
        return  userColors.permitStartStarted;// Green by default
    } else { // Permit date has been set but Permit has not started
        return userColors.permitStartSet // Tealish by default
    }
}
function assessPermitStatus(status, userColors) {
    console.log("Entered - assessPermitStatus(" + status +")");

    if (status == "Applied") {
        return userColors.permitStatusApplied; // Tealish by default
    } else if (status == "Received" || status == "Extension Received") {
        return userColors.permitStatusReceived; // Green by default
    } else if (status == "Don't Need") {
        return userColors.permitStatusDontNeed; // Green by default
    } else if (status == "Expiring Soon") {
        return userColors.permitStatusExpiringSoon; // Orange by default
    } else if (status == "Extension Submitted") {
        return userColors.permitStatusExtensionSubmitted; // Orange by default
    } else if (status == "Expired") {
        return userColors.permitStatusExpired; // Magenta by default
    } else if (status == "Haven't Checked") {
        return userColors.permitStatusHaventChecked; // Yellow by default
    } else {
        // status must = "Not Set"
        return userColors.permitStartNotSet; // Yellow by default
    }
}
function assessEasementStatus(status, userColors) {
    console.log("Entered - assessEasementStatus(" + status + ")");

    if (status == "Need to Submit" || status == "Need Easement") {
        return userColors.easementStatusNeedEasement; // Magenta by default
    } else if (status == "Pending") {
        return userColors.easementStatusPending; // Yellow by default
    } else if (status == "Don't Need") {
        return userColors.easementStatusDontNeed; // Green by default
    } else if (status == "Have Easement") {
        return userColors.easementStatusHaveEasement; // Green by default
    } else if (status == "Waiting - Creation" || status == "Waiting - Customer") {
        return userColors.easementStatusWaiting;// Tealish
    } else if (status == "Haven't Checked") {
        return userColors.easementStatusHaventChecked; // Yellow by default
    } else {
        // status must = "Not Set"
        return userColors.easementStatusNotSet; // Yellow by default
    }
}
/* Compares the date param to the current date in real life and
   Returns a color to style the containers background */
   function assessDateCRD(date, userColors) {
    console.log("Entered - assessDateCRD(date)");

    const curDate = new Date();
    const temp = date - curDate;
    const dateDifference = new Date(temp);
    const data = convertDate(dateDifference);

    /* NOTES: Have to cascade this conditional to assign colors properly */

    if (data == -9999) {  // date not set - set as 01/01/0001 by me by default
        return userColors.crdNotSet;// Yellow by default
    } else if (date < curDate) {
        return userColors.crdPastToday; // Red by default
    } else if (data <= 14) {
        return userColors.crdUnder14; // Magenta by default
    } else if (data <= 31) {
        return userColors.crdUnder31; // Orange by default
    } else {
        // Over 31 days
        return userColors.crdOver31; // White by default
    }
}
function assessDateRCD(date, userColors) {
    console.log("Entered - assessDateRCD(date)");

    const curDate = new Date();
    const temp = date - curDate;
    const dateDifference = new Date(temp);
    const data = convertDate(dateDifference);

    /* NOTES: Have to cascade this conditional to assign colors properly */

    if (data == -9999) {  // date not set - set as 01/01/0001 by me by default
        return userColors.rcdNotSet;// Yellow by default
    } else if (date < curDate) {
        return userColors.rcdPastToday; // Red by default
    } else if (data <= 14) {
        return userColors.rcdUnder14; // Magenta by default
    } else if (data <= 31) {
        return userColors.rcdUnder31; // Orange by default
    } else {
        // Over 31 days
        return userColors.rcdOver31; // White by default
    }
}
function assessDatePermitEnd(date, userColors) {
    console.log("Entered - assessDatePermitEnd(date)");

    const curDate = new Date();
    const temp = date - curDate;
    const dateDifference = new Date(temp);
    const data = convertDate(dateDifference);

    /* NOTES: Have to cascade this conditional to assign colors properly */

    if (data == -9999) {  // date not set - set as 01/01/0001 by me by default
        return userColors.permitEndNotSet;// Yellow by default
    } else if (date < curDate) {
        return userColors.permitEndPastToday; // Red by default
    } else if (data <= 14) {
        return userColors.permitEndUnder14; // Magenta by default
    } else if (data <= 31) {
        return userColors.permitEndUnder31; // Orange by default
    } else {
        // Over 31 days
        return userColors.permitEndOver31; // White by default
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
        /* Header */
    const allWrTab = document.querySelector("#all_wr_tab");
    const allWrTabActive = document.querySelector("#all_wr_tab_active");

    const toDoTab = document.querySelector("#to_do_tab");
    const toDoTabActive = document.querySelector("#to_do_tab_active");

    const permitsTab = document.querySelector("#permits_tab");
    const permitsTabActive = document.querySelector("#permits_tab_active");

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

            /* Add Comment Tab */
    const addCommentFilterTabAll = document.querySelector("#add_comment_filter_tab_all");
    const addCommentFilterTabAllActive = document.querySelector("#add_comment_filter_tab_all_active");

    const addCommentFilterTabGeneral = document.querySelector("#add_comment_filter_tab_general");
    const addCommentFilterTabGeneralActive = document.querySelector("#add_comment_filter_tab_general_active");

    const addCommentFilterTabPermit = document.querySelector("#add_comment_filter_tab_permit");
    const addCommentFilterTabPermitActive = document.querySelector("#add_comment_filter_tab_permit_active");


    /* Add Tab Get/Update/Add Buttons */
    const addTabAddButton = document.querySelector("#add_tab_add_button");
    const addTabGetButton = document.querySelector("#add_tab_get_button");
    const addTabUpdateButton = document.querySelector("#add_tab_update_button");
    const addTabClearButton = document.querySelector("#add_tab_clear_button");
    const addTabRemoveButton = document.querySelector("#add_tab_remove_button");

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
    const addressLineTextfieldCoverHouseNumber = document.querySelector("#address_line_textfield_cover_house_number");
    const addressLineTextfieldStreetName = document.querySelector("#address_line_textfield_street_name");
    const addressLineTextfieldCounty = document.querySelector("#address_line_textfield_county");
    const addressLineTextfieldZip = document.querySelector("#address_line_textfield_zip");
    const addressLineTextfieldCoverZip = document.querySelector("#address_line_textfield_cover_zip");

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

        /* CRD + RCD + Creation */
    const addTabWrCRD = document.querySelector("#date_add_tab_wr_crd");
    const addTabWrRCD = document.querySelector("#date_add_tab_wr_rcd");
    const addTabWrCreationDate = document.querySelector("#add_tab_wr_creation_date");

        /* Comments */
            /* Add Tab Wr */
    const addTabCommentsAddButton = document.querySelector("#add_tab_comments_add_button");
    const addTabCommentsRemoveButton = document.querySelector("#add_tab_comments_remove_button");
    const addTabCommentsTextfield = document.querySelector("#add_tab_comments_textfield");
    const addTabWrCommentsToAdd = document.querySelector("#add_tab_wr_comments_to_add");
    const addTabWrCommentsNextButton = document.querySelector("#add_tab_wr_page_next_button");
    const addTabWrCommentsPrevButton = document.querySelector("#add_tab_wr_page_prev_button");


            /* Add Tab Permit */
    const addTabPermitCommentsAddButton = document.querySelector("#add_tab_permit_comments_add_button");
    const addTabPermitCommentsRemoveButton = document.querySelector("#add_tab_permit_comments_remove_button");
    const addTabPermitCommentsTextfield = document.querySelector("#add_tab_permit_comments_textfield");
    const addTabPermitCommentsToAdd = document.querySelector("#add_tab_permit_comments_to_add");
    const addTabPermitDateUpdated = document.querySelector("#date_add_tab_permit_updated");
    const addTabPermitDateApplied = document.querySelector("#date_add_tab_permit_applied")
    const addTabPermitCRD = document.querySelector("#date_add_tab_permit_crd");
    const addTabPermitRCD = document.querySelector("#date_add_tab_permit_rcd");
    const addTabPermitStart = document.querySelector("#date_add_tab_permit_start");
    const addTabPermitExpiration = document.querySelector("#date_add_tab_permit_expire")
    const addTabPermitCommentNextButton = document.querySelector("#add_tab_permit_page_next_button");
    const addTabPermitCommentPrevButton = document.querySelector("#add_tab_permit_page_prev_button");

            /* Add Tab Comment */
    const addCommentTabTextfield = document.querySelector("#add_comment_tab_textfield");
    const addCommentsTabCommentsRemoveButton = document.querySelector("#add_comments_tab_comments_remove_button");
    const addCommentsTabCommentsAddButton = document.querySelector("#add_comments_tab_comments_add_button");
    const addCommentTabExistingComments = document.querySelector("#add_comment_tab_existing_comments");
    const addCommentTabExistingCommentsNextButton = document.querySelector("#add_comment_tab_next_button");
    const addCommentTabExistingCommentsPrevButton = document.querySelector("#add_comment_tab_prev_button");


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
    const addTabDisplayAddComment = document.querySelector("#add_tab_display_add_comment");
    const addTabDisplayAddToDo = document.querySelector("#add_tab_display_to_do");

    /* Load and Save Buttons */
    const footerButtonSave = document.querySelector("#footer_button_save");
    const footerButtonLoad = document.querySelector("#footer_button_load");
    const footerButtonSync = document.querySelector("#footer_button_sync");

    /* Permits Tab Display Dropdowns */
    const permitsTabRowOneStatusContainer = document.querySelector("#permits_tab_row_one_status");
    const permitsTabRowTwoStatusContainer = document.querySelector("#permits_tab_row_two_status");
    const permitsTabRowThreeStatusContainer = document.querySelector("#permits_tab_row_three_status");
    const permitsTabRowFourStatusContainer = document.querySelector("#permits_tab_row_four_status");
    const permitsTabRowFiveStatusContainer = document.querySelector("#permits_tab_row_five_status");
    const permitsTabRowSixStatusContainer = document.querySelector("#permits_tab_row_six_status");
    const permitsTabRowSevenStatusContainer = document.querySelector("#permits_tab_row_seven_status");
    const permitsTabRowEightStatusContainer = document.querySelector("#permits_tab_row_eight_status");


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
        /* Row Four */
    const allWrTabRowFourGeneralStatusContainer = document.querySelector("#all_wr_tab_row_four_general_status");
    const allWrTabRowFourPermitStatusContainer = document.querySelector("#all_wr_tab_row_four_permit_status");
    const allWrTabRowFourEasementStatusContainer = document.querySelector("#all_wr_tab_row_four_easement_status");
        /* Row Five */
    const allWrTabRowFiveGeneralStatusContainer = document.querySelector("#all_wr_tab_row_five_general_status");
    const allWrTabRowFivePermitStatusContainer = document.querySelector("#all_wr_tab_row_five_permit_status");
    const allWrTabRowFiveEasementStatusContainer = document.querySelector("#all_wr_tab_row_five_easement_status");
        /* Row Six */
    const allWrTabRowSixGeneralStatusContainer = document.querySelector("#all_wr_tab_row_six_general_status");
    const allWrTabRowSixPermitStatusContainer = document.querySelector("#all_wr_tab_row_six_permit_status");
    const allWrTabRowSixEasementStatusContainer = document.querySelector("#all_wr_tab_row_six_easement_status");
        /* Row Seven */
    const allWrTabRowSevenGeneralStatusContainer = document.querySelector("#all_wr_tab_row_seven_general_status");
    const allWrTabRowSevenPermitStatusContainer = document.querySelector("#all_wr_tab_row_seven_permit_status");
    const allWrTabRowSevenEasementStatusContainer = document.querySelector("#all_wr_tab_row_seven_easement_status");
        /* Row Eight */
    const allWrTabRowEightGeneralStatusContainer = document.querySelector("#all_wr_tab_row_eight_general_status");
    const allWrTabRowEightPermitStatusContainer = document.querySelector("#all_wr_tab_row_eight_permit_status");
    const allWrTabRowEightEasementStatusContainer = document.querySelector("#all_wr_tab_row_eight_easement_status");

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
    const allWrTabRowFourPriority = document.querySelector("#all_wr_tab_row_four_priority_textfield");
    const allWrTabRowFivePriority = document.querySelector("#all_wr_tab_row_five_priority_textfield");
    const allWrTabRowSixPriority = document.querySelector("#all_wr_tab_row_six_priority_textfield");
    const allWrTabRowSevenPriority = document.querySelector("#all_wr_tab_row_seven_priority_textfield");
    const allWrTabRowEightPriority = document.querySelector("#all_wr_tab_row_eight_priority_textfield");

        /* CRDs */
    const allWrTabRowOneCrd = document.querySelector("#all_wr_tab_row_one_crd");
    const allWrTabRowTwoCrd = document.querySelector("#all_wr_tab_row_two_crd");
    const allWrTabRowThreeCrd = document.querySelector("#all_wr_tab_row_three_crd");
    const allWrTabRowFourCrd = document.querySelector("#all_wr_tab_row_four_crd");
    const allWrTabRowFiveCrd = document.querySelector("#all_wr_tab_row_five_crd");
    const allWrTabRowSixCrd = document.querySelector("#all_wr_tab_row_six_crd");
    const allWrTabRowSevenCrd = document.querySelector("#all_wr_tab_row_seven_crd");
    const allWrTabRowEightCrd = document.querySelector("#all_wr_tab_row_eight_crd");

        /* RCDs */
    const allWrTabRowOneRcd = document.querySelector("#all_wr_tab_row_one_rcd");
    const allWrTabRowTwoRcd = document.querySelector("#all_wr_tab_row_two_rcd");
    const allWrTabRowThreeRcd = document.querySelector("#all_wr_tab_row_three_rcd");
    const allWrTabRowFourRcd = document.querySelector("#all_wr_tab_row_four_rcd");
    const allWrTabRowFiveRcd = document.querySelector("#all_wr_tab_row_five_rcd");
    const allWrTabRowSixRcd = document.querySelector("#all_wr_tab_row_six_rcd");
    const allWrTabRowSevenRcd = document.querySelector("#all_wr_tab_row_seven_rcd");
    const allWrTabRowEightRcd = document.querySelector("#all_wr_tab_row_eight_rcd");

        /* Addresses */
    const allWrTabRowOneAddress = document.querySelector("#all_wr_tab_row_one_address");
    const allWrTabRowTwoAddress = document.querySelector("#all_wr_tab_row_two_address");
    const allWrTabRowThreeAddress = document.querySelector("#all_wr_tab_row_three_address");
    const allWrTabRowFourAddress = document.querySelector("#all_wr_tab_row_four_address");
    const allWrTabRowFiveAddress = document.querySelector("#all_wr_tab_row_five_address");
    const allWrTabRowSixAddress = document.querySelector("#all_wr_tab_row_six_address");
    const allWrTabRowSevenAddress = document.querySelector("#all_wr_tab_row_seven_address");
    const allWrTabRowEightAddress = document.querySelector("#all_wr_tab_row_eight_address");

        /* To-Do Counts */
    const allWrTabRowOneToDoCountBox = document.querySelector("#all_wr_tab_row_one_to_do_count_box");
    const allWrTabRowTwoToDoCountBox = document.querySelector("#all_wr_tab_row_two_to_do_count_box");
    const allWrTabRowThreeToDoCountBox = document.querySelector("#all_wr_tab_row_three_to_do_count_box");
    const allWrTabRowFourToDoCountBox = document.querySelector("#all_wr_tab_row_four_to_do_count_box");
    const allWrTabRowFiveToDoCountBox = document.querySelector("#all_wr_tab_row_five_to_do_count_box");
    const allWrTabRowSixToDoCountBox = document.querySelector("#all_wr_tab_row_six_to_do_count_box");
    const allWrTabRowSevenToDoCountBox = document.querySelector("#all_wr_tab_row_seven_to_do_count_box");
    const allWrTabRowEightToDoCountBox = document.querySelector("#all_wr_tab_row_eight_to_do_count_box");

        /* Comments */
    const allWrTabRowOneComments = document.querySelector("#all_wr_tab_row_one_comments");
    const allWrTabRowTwoComments = document.querySelector("#all_wr_tab_row_two_comments");
    const allWrTabRowThreeComments = document.querySelector("#all_wr_tab_row_three_comments");
    const allWrTabRowFourComments = document.querySelector("#all_wr_tab_row_four_comments");
    const allWrTabRowFiveComments = document.querySelector("#all_wr_tab_row_five_comments");
    const allWrTabRowSixComments = document.querySelector("#all_wr_tab_row_six_comments");
    const allWrTabRowSevenComments = document.querySelector("#all_wr_tab_row_seven_comments");
    const allWrTabRowEightComments = document.querySelector("#all_wr_tab_row_eight_comments");


            /* permitsTab Row Element Event Listeners */
        /* Priority Numbers */
    const permitsTabRowOnePriority = document.querySelector("#permits_tab_row_one_priority_textfield");
    const permitsTabRowTwoPriority = document.querySelector("#permits_tab_row_two_priority_textfield");
    const permitsTabRowThreePriority = document.querySelector("#permits_tab_row_three_priority_textfield");
    const permitsTabRowFourPriority = document.querySelector("#permits_tab_row_four_priority_textfield");
    const permitsTabRowFivePriority = document.querySelector("#permits_tab_row_five_priority_textfield");
    const permitsTabRowSixPriority = document.querySelector("#permits_tab_row_six_priority_textfield");
    const permitsTabRowSevenPriority = document.querySelector("#permits_tab_row_seven_priority_textfield");
    const permitsTabRowEightPriority = document.querySelector("#permits_tab_row_eight_priority_textfield");

        /* Addresses */
    const permitsTabRowOneAddress = document.querySelector("#permits_tab_row_one_address");
    const permitsTabRowTwoAddress = document.querySelector("#permits_tab_row_two_address");
    const permitsTabRowThreeAddress = document.querySelector("#permits_tab_row_three_address");
    const permitsTabRowFourAddress = document.querySelector("#permits_tab_row_four_address");
    const permitsTabRowFiveAddress = document.querySelector("#permits_tab_row_five_address");
    const permitsTabRowSixAddress = document.querySelector("#permits_tab_row_six_address");
    const permitsTabRowSevenAddress = document.querySelector("#permits_tab_row_seven_address");
    const permitsTabRowEightAddress = document.querySelector("#permits_tab_row_eight_address");


        /* CRDs */
    const permitsTabRowOneCrd = document.querySelector("#permits_tab_row_one_crd_date");
    const permitsTabRowTwoCrd = document.querySelector("#permits_tab_row_two_crd_date");
    const permitsTabRowThreeCrd = document.querySelector("#permits_tab_row_three_crd_date");
    const permitsTabRowFourCrd = document.querySelector("#permits_tab_row_four_crd_date");
    const permitsTabRowFiveCrd = document.querySelector("#permits_tab_row_five_crd_date");
    const permitsTabRowSixCrd = document.querySelector("#permits_tab_row_six_crd_date");
    const permitsTabRowSevenCrd = document.querySelector("#permits_tab_row_seven_crd_date");
    const permitsTabRowEightCrd = document.querySelector("#permits_tab_row_eight_crd_date");

        /* RCDs */
    const permitsTabRowOneRcd = document.querySelector("#permits_tab_row_one_rcd_date");
    const permitsTabRowTwoRcd = document.querySelector("#permits_tab_row_two_rcd_date");
    const permitsTabRowThreeRcd = document.querySelector("#permits_tab_row_three_rcd_date");
    const permitsTabRowFourRcd = document.querySelector("#permits_tab_row_four_rcd_date");
    const permitsTabRowFiveRcd = document.querySelector("#permits_tab_row_five_rcd_date");
    const permitsTabRowSixRcd = document.querySelector("#permits_tab_row_six_rcd_date");
    const permitsTabRowSevenRcd = document.querySelector("#permits_tab_row_seven_rcd_date");
    const permitsTabRowEightRcd = document.querySelector("#permits_tab_row_eight_rcd_date");

        /* Start Dates */
    const permitsTabRowOneStartDate = document.querySelector("#permits_tab_row_one_start_date");
    const permitsTabRowTwoStartDate = document.querySelector("#permits_tab_row_two_start_date");
    const permitsTabRowThreeStartDate = document.querySelector("#permits_tab_row_three_start_date");
    const permitsTabRowFourStartDate = document.querySelector("#permits_tab_row_four_start_date");
    const permitsTabRowFiveStartDate = document.querySelector("#permits_tab_row_five_start_date");
    const permitsTabRowSixStartDate = document.querySelector("#permits_tab_row_six_start_date");
    const permitsTabRowSevenStartDate = document.querySelector("#permits_tab_row_seven_start_date");
    const permitsTabRowEightStartDate = document.querySelector("#permits_tab_row_eight_start_date");

        /* End Dates */
    const permitsTabRowOneEndDate = document.querySelector("#permits_tab_row_one_end_date");
    const permitsTabRowTwoEndDate = document.querySelector("#permits_tab_row_two_end_date");
    const permitsTabRowThreeEndDate = document.querySelector("#permits_tab_row_three_end_date");
    const permitsTabRowFourEndDate = document.querySelector("#permits_tab_row_four_end_date");
    const permitsTabRowFiveEndDate = document.querySelector("#permits_tab_row_five_end_date");
    const permitsTabRowSixEndDate = document.querySelector("#permits_tab_row_six_end_date");
    const permitsTabRowSevenEndDate = document.querySelector("#permits_tab_row_seven_end_date");
    const permitsTabRowEightEndDate = document.querySelector("#permits_tab_row_eight_end_date");

        /* Comments */
    const permitsTabRowOneComments = document.querySelector("#permits_tab_row_one_comments");
    const permitsTabRowTwoComments = document.querySelector("#permits_tab_row_two_comments");
    const permitsTabRowThreeComments = document.querySelector("#permits_tab_row_three_comments");
    const permitsTabRowFourComments = document.querySelector("#permits_tab_row_four_comments");
    const permitsTabRowFiveComments = document.querySelector("#permits_tab_row_five_comments");
    const permitsTabRowSixComments = document.querySelector("#permits_tab_row_six_comments");
    const permitsTabRowSevenComments = document.querySelector("#permits_tab_row_seven_comments");
    const permitsTabRowEightComments = document.querySelector("#permits_tab_row_eight_comments");

    
        /* Filter Go Button */
    const filterGoButton = document.querySelector("#filter_go_button");
    const searchGoButton = document.querySelector("#search_textfield_go_button");

            /* Filter Checkboxes */
        /* Generic */
    const filterCheckboxPriorityNumber = document.querySelector("#filter_checkbox_priority_number");
    const filterCheckboxCrd = document.querySelector("#filter_checkbox_crd");
    const filterCheckboxRcd = document.querySelector("#filter_checkbox_rcd");

        /* AllWr Tab */
    const filterCheckboxWaitingLL = document.querySelector("#filter_checkbox_waiting_ll");
    const filterCheckboxNeedToVisit = document.querySelector("#filter_checkbox_need_to_visit");
    const filterCheckboxSvcCalcs = document.querySelector("#filter_checkbox_svc_calcs");
    const filterCheckboxCheckNJUNS = document.querySelector("#filter_checkbox_check_njuns");
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
    const filterCheckboxAgeNewAll = document.querySelector("#filter_checkbox_age_new_old_all");
    const filterCheckboxAgeOldAll = document.querySelector("#filter_checkbox_age_old_new_all");

        /* To-Do Tab */
    const filterCheckboxGeneral = document.querySelector("#filter_checkbox_general");
    const filterCheckboxContactCustomer = document.querySelector("#filter_checkbox_contact_customer");
    const filterCheckboxWaitingOther = document.querySelector("#filter_checkbox_waiting_other");



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
    const trimByNotComplete = document.querySelector("#footer_filter_checkbox_not_complete");
    const trimByAllToDo = document.querySelector("#footer_filter_checkbox_all_to_do");
    const trimByComplete = document.querySelector("#footer_filter_checkbox_complete");


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
    const addTabCommentTypeContainer = document.querySelector("#add_tab_comment_type_dd_container")
    
        /* Update Permit */
    const addTabAddPermitStatusContainer = document.querySelector("#add_tab_add_permit_status_container");
    
        /* Add/Update To-Do */
    const addTabDisplayToDoDDMenuTabContainer = document.querySelector("#add_tab_display_to_do_dd_menu_tab_container");
    const addTabDisplayToDoDDMenuTypeContainer = document.querySelector("#add_tab_display_to_do_dd_menu_type_container");
    const addTabDisplayDayOfWeekContainer = document.querySelector("#add_tab_display_day_of_week_container");
    const addTabDisplayDayOfWeekDate = document.querySelector("#add_tab_display_day_of_week_date");
    const addTabDisplayToDoCreationDate = document.querySelector("#add_tab_display_to_do_creation_date");
    const addTabDisplayToDoRowThreeAddButton = document.querySelector("#add_tab_display_to_do_row_three_add_button");
    const addTabDisplayToDoRowThreeRemoveButton = document.querySelector("#add_tab_display_to_do_row_three_remove_button");
    const addTabDisplayToDoRowThreeTextfield = document.querySelector("#add_tab_display_to_do_row_three_textfield");
    const addTabDisplayToDoRowThreeNotesToAdd = document.querySelector("#add_tab_display_to_do_row_three_notes_to_add");
    const addTabDisplayToDoRowZeroNumfield = document.querySelector("#add_tab_display_to_do_row_zero_numfield");
    const addTabDisplayToDoPrevButton = document.querySelector("#add_tab_display_to_do_prev_button");
    const addTabDisplayToDoNextButton = document.querySelector("#add_tab_display_to_do_next_button");
    const addTabDisplayToDoRemoveButton = document.querySelector("#add_tab_display_to_do_remove_button");

    /* To-Do's Tab */
    const toDoDisplayContainer = document.querySelector("#to_do_display_container");
    const toDoDisplayRowElementContainer = document.querySelector("#to_do_display_row_element_container");
    const toDoDisplayDayOfWeekDate = document.querySelector("#to_do_display_day_of_week_date");
    const toDoDisplayDayOfWeekDateContainer = document.querySelector("#to_do_display_day_of_week_container");
    const toDoDisplayDatePrevButton = document.querySelector("#to_do_display_date_prev_button");
    const toDoDisplayDateNextButton = document.querySelector("#to_do_display_date_next_button");
    const toDoDisplayMoveIncompleteButton = document.querySelector("#to_do_move_incomplete_button");

        /* To-Do's Tab - Tabs */
    const toDoGeneralTab = document.querySelector("#to_do_general_tab");
    const toDoGeneralTabActive = document.querySelector("#to_do_general_tab_active");
    const toDoWaitingTab = document.querySelector("#to_do_waiting_tab");
    const toDoWaitingTabActive = document.querySelector("#to_do_waiting_tab_active");
    const toDoOnReturnToOfficeTab = document.querySelector("#to_do_return_to_office_tab");
    const toDoOnReturnToOfficeTabActive = document.querySelector("#to_do_return_to_office_tab_active");
    const toDoMentorTab = document.querySelector("#to_do_mentor_tab");
    const toDoMentorTabActive = document.querySelector("#to_do_mentor_tab_active");
    const toDoCoordinatorTab = document.querySelector("#to_do_coordinator_tab");
    const toDoCoordinatorTabActive = document.querySelector("#to_do_coordinator_tab_active");

        /* Prev Next Buttons */
    const toDoTabPagePrevButton = document.querySelector("#to_do_tab_page_prev_button");
    const toDoTabPageNextButton = document.querySelector("#to_do_tab_page_next_button");


    /* Move To Dispaly */
    const moveToDayOfWeekContainer = document.querySelector("#move_to_day_of_week_container");
    const moveToDayOfWeekDate = document.querySelector("#move_to_display_day_of_week_date");
    const toDoDisplayMoveToContainer = document.querySelector("#to_do_display_move_to_container");
    const toDoDisplayMoveToRemoveButton = document.querySelector("#to_do_display_move_to_remove_button");

        /* Confirm Remove Buttons */
    const confirmRemovePopupYes = document.querySelector("#confirm_remove_popup_yes");
    const confirmRemovePopupNo = document.querySelector("#confirm_remove_popup_no");
    const confirmRemovePopupXButton = document.querySelector("#confirm_remove_popup_x_button");

    const settingsBackButton = document.querySelector("#settings_back_button");
    const dropdownCover = document.querySelector("#drop_down_cover");


        /* Settings Page Event Listeners */
    const settingsButton = document.querySelector("#settings_button");
    const settingsXButton = document.querySelector("#settings_x_button");
    const settingsDisplayContainer = document.querySelector("#settings_display_container");
    const settingsDisplayTabColors = document.querySelector("#settings_display_tab_colors");
    const settingsDisplayTabColorsActive = document.querySelector("#settings_display_tab_colors_active");
    const settingsDisplayTabPreferences = document.querySelector("#settings_display_tab_preferences");
    const settingsDisplayTabPreferencesActive = document.querySelector("#settings_display_tab_preferences_active");
    const settingsDisplayTabColorsCrd = document.querySelector("#settings_display_tab_colors_crd");
    const settingsDisplayTabColorsCrdActive = document.querySelector("#settings_display_tab_colors_crd_active");
    const settingsDisplayTabColorsRcd = document.querySelector("#settings_display_tab_colors_rcd");
    const settingsDisplayTabColorsRcdActive = document.querySelector("#settings_display_tab_colors_rcd_active");
    const settingsDisplayTabColorsPermitStatus = document.querySelector("#settings_display_tab_colors_permit_status");
    const settingsDisplayTabColorsPermitStatusActive = document.querySelector("#settings_display_tab_colors_permit_status_active");
    const settingsDisplayTabColorsPermitStart = document.querySelector("#settings_display_tab_colors_permit_start");
    const settingsDisplayTabColorsPermitStartActive = document.querySelector("#settings_display_tab_colors_permit_start_active");
    const settingsDisplayTabColorsPermitEnd = document.querySelector("#settings_display_tab_colors_permit_end");
    const settingsDisplayTabColorsPermitEndActive = document.querySelector("#settings_display_tab_colors_permit_end_active");
    const settingsDisplayTabColorsEasementStatus = document.querySelector("#settings_display_tab_colors_easement_status");
    const settingsDisplayTabColorsEasementStatusActive = document.querySelector("#settings_display_tab_colors_easement_status_active");
    const settingsDisplayLowerDisplayContainerColorsLeft = document.querySelector("#settings_display_lower_display_container_colors_left");
    const settingsDisplayLowerDisplayContainerColorsRight = document.querySelector("#settings_display_lower_display_container_colors_right");
    const settingsDisplayContainerLabel = document.querySelector("#settings_display_container_label");
    const settingsDisplayInnerColorsLabel = document.querySelector("#settings_display_inner_colors_label");
    const settingsDisplayColorOptionsContainer = document.querySelector("#settings_display_color_options_container");
    const settingsDisplayInnerColorsBottom = document.querySelector("#settings_display_inner_colors_bottom")
    const currentColorAssignedBox = document.querySelector("#current_color_assigned_box");
    const settingsDisplayInnerColorsTop= document.querySelector("#settings_display_inner_colors_top");
    const colorLocalSaveButton = document.querySelector("#color_local_save_button");
    const settingsDisplayLowerDisplayContainerPreferences = document.querySelector("#settings_display_lower_display_container_preferences");
    const settingsPreferencesTextfieldRowsPerPage = document.querySelector("#settings_preferences_textfield_rows_per_page");
    const settingsPreferencesTextfieldCommentsWr = document.querySelector("#settings_preferences_textfield_comments_wr");
    const settingsPreferencesTextfieldCommentsPermit = document.querySelector("#settings_preferences_textfield_comments_permit");
    const settingsPreferencesTextfieldCommentsComment = document.querySelector("#settings_preferences_textfield_comments_comment");
    const settingsPreferencesTextfieldNotesToDo = document.querySelector("#settings_preferences_textfield_notes_to_do");
    const settingsPreferencesTextfieldLinesPerPageToDo = document.querySelector("#settings_preferences_textfield_line_per_page_to_do");
    const settingsPreferencesClear7010Button = document.querySelector("#settings_preferences_clear_7010_button");
    const settingsPreferencesClearCompleteToDosButton = document.querySelector("#settings_preferences_clear_complete_to_dos_button");
    const settingsPreferencesClearLocalStorageButton = document.querySelector("#settings_preferences_clear_local_storage_button");
    const settingsPreferencesSaveButton = document.querySelector("#settings_preferences_save_button");
    const settingsPreferencesPromptDuration = document.querySelector("#settings_preferences_textfield_prompt_duration");
    const clear7010PopUpButtonNo = document.querySelector("#clear_7010_pop_up_button_no");
    const clear7010PopUpButtonYes = document.querySelector("#clear_7010_pop_up_button_yes");
    const clear7010PopUpXButton = document.querySelector("#clear_7010_pop_up_x_button");
    const clear7010PopUpContainer = document.querySelector("#clear_7010_pop_up_container");
    const clearCompleteToDosPopUpButtonNo = document.querySelector("#clear_complete_to_dos_pop_up_button_no");
    const clearCompleteToDosPopUpButtonYes = document.querySelector("#clear_complete_to_dos_pop_up_button_yes");
    const clearCompleteToDosPopUpXButton = document.querySelector("#clear_complete_to_dos_pop_up_x_button");
    const clearLocalStoragePopUpButtonNo = document.querySelector("#clear_local_storage_pop_up_button_no");
    const clearLocalStoragePopUpButtonYes = document.querySelector("#clear_local_storage_pop_up_button_yes");
    const clearLocalStoragePopUpXButton = document.querySelector("#clear_local_storage_pop_up_x_button");
        
    /* Missing Info Pop Up */
    const missingInfoHeader = document.querySelector("#missing_info_header");
    const missingInfoType = document.querySelector("#missing_info_type");
    const missingInfoContainer = document.querySelector("#missing_info_container");
    const missingInfoDayOfWeekDate = document.querySelector("#missing_info_day_of_week_date");
    const missingInfoXButton = document.querySelector("#missing_info_x_button");
    const missingInfoSkipButton = document.querySelector("#missing_info_button_skip");
    const missingInfoSaveButton = document.querySelector("#missing_info_button_save");

    /* Add To-Do Pop Up */
    const addToDoPopUpHeader = document.querySelector("#add_to_do_pop_up_header");
    const addToDoPopUpTab = document.querySelector("#add_to_do_pop_up_tab");
    const addToDoPopUpContainer = document.querySelector("#add_to_do_pop_up_container");
    const addToDoPopUpDayOfWeekDate = document.querySelector("#add_to_do_pop_up_day_of_week_date");
    const addToDoPopUpXButton = document.querySelector("#add_to_do_pop_up_x_button");
    const addToDoPopUpButtonNo = document.querySelector("#add_to_do_pop_up_button_no");
    const addToDoPopUpButtonYes = document.querySelector("#add_to_do_pop_up_button_yes");
    const addToDoPopUpTextfield = document.querySelector("#add_to_do_pop_up_textfield");
    const addToDoPopUpButtonNeither = document.querySelector("#add_to_do_pop_up_button_neither");
    const addToDoPopUpButtonMove = document.querySelector("#add_to_do_pop_up_button_move");
    const addToDoPopUpButtonNew = document.querySelector("#add_to_do_pop_up_button_new");

    /* Permit Status Warning Pop Up */
    const permitStatusWarningPopUpDayOfWeekDate = document.querySelector("#permit_status_warning_pop_up_day_of_week_date");
    const permitStatusWarningPopUpContainer = document.querySelector("#permit_status_warning_pop_up_container");
    const permitStatusWarningPopUpXButton = document.querySelector("#permit_status_warning_pop_up_x_button");
    const permitStatusWarningPopUpButtonNo = document.querySelector("#permit_status_warning_pop_up_button_no");
    const permitStatusWarningPopUpButtonYes = document.querySelector("#permit_status_warning_pop_up_button_yes");
    const permitStatusWarningPopUpHeader = document.querySelector("#permit_status_warning_pop_up_header");
    const permitStatusWarningPopUpType = document.querySelector("#permit_status_warning_pop_up_type");
    const permitStatusWarningPopUpTextfield = document.querySelector("#permit_status_warning_pop_up_textfield");


    /* Easement Status Warning Pop Up */
    const easementStatusWarningPopUpDayOfWeekDate = document.querySelector("#easement_status_warning_pop_up_day_of_week_date");
    const easementStatusWarningPopUpContainer = document.querySelector("#easement_status_warning_pop_up_container");
    const easementStatusWarningPopUpXButton = document.querySelector("#easement_status_warning_pop_up_x_button");
    const easementStatusWarningPopUpButtonNo = document.querySelector("#easement_status_warning_pop_up_button_no");
    const easementStatusWarningPopUpButtonYes = document.querySelector("#easement_status_warning_pop_up_button_yes");
    const easementStatusWarningPopUpHeader = document.querySelector("#easement_status_warning_pop_up_header");
    const easementStatusWarningPopUpType = document.querySelector("#easement_status_warning_pop_up_type");
    const easementStatusWarningPopUpTextfield = document.querySelector("#easement_status_warning_pop_up_textfield");

    /* Add Comment Pop Up */
    const addCommentPopUpContainer = document.querySelector("#add_comment_pop_up_container");
    const addCommentPopUpHeader = document.querySelector("#add_comment_pop_up_header");
    const addCommentPopUpXButton = document.querySelector("#add_comment_pop_up_x_button");
    const addCommentPopUpButtonNo = document.querySelector("#add_comment_pop_up_button_no");
    const addCommentPopUpButtonYes = document.querySelector("#add_comment_pop_up_button_yes");



        /* Variable */
    let addTabCommentsTextfieldInput = [];
    let addTabPermitCommentsTextfieldInput = [];
    let addCommentTabTextfieldInput = [];
    let addTabDisplayToDoRowThreeTextfieldInput = [];
    let allWrList = [];
    let filteredList = [];
    let currentPageAllWr = 0;
    let currentPagePermits = 0;
    let permitDateChangeValues = [];
    let tempCurWrNumber = "";
    let tempCurToDo = [];
    let tempToRemove = []; // used to store array of indexs of to-do's to move (for move incomplete button)
    let tempFilteredToDoList = []; // used to store the filtered list of to-do's (for move incomplete button)
    let clickedMoveIncompleteButton = 0; // used by moveToDisplaySave to differentiate between save type 

    let systemPreferences = new SystemPreferences();
    let toDoMasterList = new ToDoMasterList(19);//systemPreferences.linesPerPageToDo);
    
    let rowsOnPage = systemPreferences.rowsOnPage;
    let linesPerPageToDo = systemPreferences.linesPerPageToDo;
    let promptDuration = systemPreferences.promptDuration;

    let permitCommentCount = systemPreferences.permitCommentCount;
    let tempCommentsCount = systemPreferences.tempCommentsCount;
    let tempAllCommentCount = systemPreferences.tempAllCommentCount;
    let tempNotesCount = systemPreferences.tempNotesCount;

    let userColors = new ColorPreferences(); 
    let tempToDoPageElement = new PaginatedToDoPageElement(systemPreferences.linesPerPageToDo, toDoMasterList);

    let tempComments = new PaginatedComments(tempCommentsCount, "addWr");
    let tempPermitComments = new PaginatedComments(permitCommentCount, "addPermit");
    let tempAllComments = new PaginatedComments(tempAllCommentCount, "addComment");
    let tempNotes = new PaginatedComments(tempNotesCount, "addToDo");
    let tempToDoMasterList = new ToDoMasterList(linesPerPageToDo);
    
    /* Variable used to turn on and off user warnings - speeds up testing by making inputing shorter */
    const inTestMode = false;
    // green background highlight "rgba(87, 245, 43, 0.627)"

    function testFunction() {
        console.log("** TEST FUNCTION **");

        //addTab.click();

        //Testing To-Do's tab
        //toDoTab.click();

        //Testing add To-Do's
        /*addTab.click();
        filterCheckboxAddToDo.click();
        addTabAddButton.disabled = false;*/
    }

    function initializeAllWrTab() {
        console.log("Entered - initializeAllWrTab()");

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
    
            dd = new GeneralStatusDDMenu("4");
            ddRow = dd.makeRowElement();
            allWrTabRowFourGeneralStatusContainer.innerHTML = "";
            allWrTabRowFourGeneralStatusContainer.insertAdjacentElement("beforeend", ddRow);
    
            dd = new GeneralStatusDDMenu("5");
            ddRow = dd.makeRowElement();
            allWrTabRowFiveGeneralStatusContainer.innerHTML = "";
            allWrTabRowFiveGeneralStatusContainer.insertAdjacentElement("beforeend", ddRow);
    
            dd = new GeneralStatusDDMenu("6");
            ddRow = dd.makeRowElement();
            allWrTabRowSixGeneralStatusContainer.innerHTML = "";
            allWrTabRowSixGeneralStatusContainer.insertAdjacentElement("beforeend", ddRow);
    
            dd = new GeneralStatusDDMenu("7");
            ddRow = dd.makeRowElement();
            allWrTabRowSevenGeneralStatusContainer.innerHTML = "";
            allWrTabRowSevenGeneralStatusContainer.insertAdjacentElement("beforeend", ddRow);
    
            dd = new GeneralStatusDDMenu("8");
            ddRow = dd.makeRowElement();
            allWrTabRowEightGeneralStatusContainer.innerHTML = "";
            allWrTabRowEightGeneralStatusContainer.insertAdjacentElement("beforeend", ddRow);
    
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
    
            dd = new PermitStatusDDMenu("allWr", "4");
            ddRow = dd.makeRowElement();
            allWrTabRowFourPermitStatusContainer.innerHTML = "";
            allWrTabRowFourPermitStatusContainer.insertAdjacentElement("beforeend", ddRow);
    
            dd = new PermitStatusDDMenu("allWr", "5");
            ddRow = dd.makeRowElement();
            allWrTabRowFivePermitStatusContainer.innerHTML = "";
            allWrTabRowFivePermitStatusContainer.insertAdjacentElement("beforeend", ddRow);
    
            dd = new PermitStatusDDMenu("allWr", "6");
            ddRow = dd.makeRowElement();
            allWrTabRowSixPermitStatusContainer.innerHTML = "";
            allWrTabRowSixPermitStatusContainer.insertAdjacentElement("beforeend", ddRow);
    
            dd = new PermitStatusDDMenu("allWr", "7");
            ddRow = dd.makeRowElement();
            allWrTabRowSevenPermitStatusContainer.innerHTML = "";
            allWrTabRowSevenPermitStatusContainer.insertAdjacentElement("beforeend", ddRow);
    
            dd = new PermitStatusDDMenu("allWr", "8");
            ddRow = dd.makeRowElement();
            allWrTabRowEightPermitStatusContainer.innerHTML = "";
            allWrTabRowEightPermitStatusContainer.insertAdjacentElement("beforeend", ddRow);
    
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
    
            dd = new EasementStatusDDMenu("4");
            ddRow = dd.makeRowElement();
            allWrTabRowFourEasementStatusContainer.innerHTML = "";
            allWrTabRowFourEasementStatusContainer.insertAdjacentElement("beforeend", ddRow);
            
            dd = new EasementStatusDDMenu("5");
            ddRow = dd.makeRowElement();
            allWrTabRowFiveEasementStatusContainer.innerHTML = "";
            allWrTabRowFiveEasementStatusContainer.insertAdjacentElement("beforeend", ddRow);
    
            dd = new EasementStatusDDMenu("6");
            ddRow = dd.makeRowElement();
            allWrTabRowSixEasementStatusContainer.innerHTML = "";
            allWrTabRowSixEasementStatusContainer.insertAdjacentElement("beforeend", ddRow);
    
            dd = new EasementStatusDDMenu("7");
            ddRow = dd.makeRowElement();
            allWrTabRowSevenEasementStatusContainer.innerHTML = "";
            allWrTabRowSevenEasementStatusContainer.insertAdjacentElement("beforeend", ddRow);
    
            dd = new EasementStatusDDMenu("8");
            ddRow = dd.makeRowElement();
            allWrTabRowEightEasementStatusContainer.innerHTML = "";
            allWrTabRowEightEasementStatusContainer.insertAdjacentElement("beforeend", ddRow);
    }
    function initializePermitsTab() {
        console.log("Entered - initializePermitsTab()");

        let dd = new PermitStatusDDMenu("permits", "1");
        let ddRow = dd.makeRowElement();
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

        dd = new PermitStatusDDMenu("permits", "4");
        ddRow = dd.makeRowElement();
        permitsTabRowFourStatusContainer.innerHTML = "";
        permitsTabRowFourStatusContainer.insertAdjacentElement("beforeend", ddRow);

        dd = new PermitStatusDDMenu("permits", "5");
        ddRow = dd.makeRowElement();
        permitsTabRowFiveStatusContainer.innerHTML = "";
        permitsTabRowFiveStatusContainer.insertAdjacentElement("beforeend", ddRow);

        dd = new PermitStatusDDMenu("permits", "6");
        ddRow = dd.makeRowElement();
        permitsTabRowSixStatusContainer.innerHTML = "";
        permitsTabRowSixStatusContainer.insertAdjacentElement("beforeend", ddRow);

        dd = new PermitStatusDDMenu("permits", "7");
        ddRow = dd.makeRowElement();
        permitsTabRowSevenStatusContainer.innerHTML = "";
        permitsTabRowSevenStatusContainer.insertAdjacentElement("beforeend", ddRow);

        dd = new PermitStatusDDMenu("permits", "8");
        ddRow = dd.makeRowElement();
        permitsTabRowEightStatusContainer.innerHTML = "";
        permitsTabRowEightStatusContainer.insertAdjacentElement("beforeend", ddRow);
    }
    function initializeAddTab() {
        console.log("Entered - initializeAddTab()");

        /* Add WR */
        let dd = new WrTypeDDMenu();
        dd.setHeight("50px");
        dd.setWidth("200px");
        let ddRow = dd.makeRowElement();
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
        tempButtonGeneral.innerHTML ="/\\";

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

        /* Setting Default Creation Date */
        let today = new Date();
        let year = today.getFullYear();
        let month = today.getMonth() + 1;
        if (month < 10) {
            month = "0" + month;
        }
        let day = today.getDate();
        if (day < 10) {
            day = "0" + day;
        }

        addTabWrCreationDate.value = (year + "-" + month + "-" + day);

        /* Permits Tab DD */
        dd = new PermitStatusDDMenu("add", "2");
        dd.setHeight("50px");
        dd.setWidth("200px");
        ddRow = dd.makeRowElement();

        addTabAddPermitStatusContainer.innerHTML = "";
        addTabAddPermitStatusContainer.insertAdjacentHTML("beforeend", `<label for="dropdown_menu_add_tab_add_permit_status" class="addTabTextfieldLabelPermit" 
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

        /* Add Comment Tab DD */
        dd = new CommentTypeDDMenu();
        dd.setHeight("50px");
        dd.setWidth("115px");
        ddRow = dd.makeRowElement();
        addTabCommentTypeContainer.innerHTML = "";
        addTabCommentTypeContainer.insertAdjacentHTML("beforeend", `<label class="addTabCommentTextfieldLabel" 
            id="add_tab_comment_type_dd_label">Comment Type:</label>`);
        addTabCommentTypeContainer.insertAdjacentElement("beforeend", ddRow);
              
            /* To Do Tab DD Menus */
        /* Tab */
        dd = new ToDoTabDDMenu("0");
        dd.setHeight("50px");
        dd.setWidth("200px");
        ddRow = dd.makeRowElement();

        addTabDisplayToDoDDMenuTabContainer.innerHTML = "";
        addTabDisplayToDoDDMenuTabContainer.insertAdjacentHTML("beforeend", `<label for="add_tab_display_to_do_dd_menu_tab_container" class="addTabDisplayToDoTabDDLabel">Tab: </label>`);
        addTabDisplayToDoDDMenuTabContainer.insertAdjacentElement("beforeend", ddRow);
        /* Type */
        dd = new ToDoTypeDDMenu("0");
        dd.setHeight("50px");
        dd.setWidth("200px");
        ddRow = dd.makeRowElement();

        addTabDisplayToDoDDMenuTypeContainer.innerHTML = "";
        addTabDisplayToDoDDMenuTypeContainer.insertAdjacentHTML("beforeend", `<label for="add_tab_display_to_do_dd_menu_type_container" class="addTabDisplayToDoTypeDDLabel">Type: </label>`);
        addTabDisplayToDoDDMenuTypeContainer.insertAdjacentElement("beforeend", ddRow);

            /* Add Tab To-Do DayOfWeekPageObject */
        today = new Date();
        year = today.getFullYear();
        month = today.getMonth() + 1;
        if (month < 10) {
            month = "0" + month;
        }
        day = today.getDate();
        if (day < 10) {
            day = "0" + day;
        }
        let tempFromDate = subtractDays(year, month, day, today.getDay());
        let tempToDate = addDays(year, month, day, (7 - today.getDay() - 1));
        let pageObject = new DayOfWeekPageObject("add", tempFromDate, tempToDate);
        let pageObjectRow = pageObject.makeRowElement();
        addTabDisplayDayOfWeekContainer.innerHTML = "";    // was insertAdjacentHTML but I think it was a type
        addTabDisplayDayOfWeekContainer.insertAdjacentElement("beforeend", pageObjectRow);
        
        
        resetDisplayToDoAddUpdate(); // Initializing display values for today
    }
    function initializeToDoTab() {
        console.log("Entered - initializeToDoTab()");

        /* To-Do Display DayOfWeekPageObject */
        let today = new Date();
        let year = today.getFullYear();
        let month = today.getMonth() + 1;
        if (month < 10) {
            month = "0" + month;
        }
        day = today.getDate();
        if (day < 10) {
            day = "0" + day;
        }
        let tempFromDate = subtractDays(year, month, day, today.getDay());
        let tempToDate = addDays(year, month, day, (7 - today.getDay() - 1));
        let pageObject = new DayOfWeekPageObject("to_do_display", tempFromDate, tempToDate);
        let pageObjectRow = pageObject.makeRowElement();
        toDoDisplayDayOfWeekDateContainer.innerHTML = "";
        toDoDisplayDayOfWeekDateContainer.insertAdjacentElement("beforeend", pageObjectRow);

        /* Setting Default Creation Date */
        toDoDisplayDayOfWeekDate.value = year + "-" + month + "-" + day;
        setDay("to_do_display", today.getDay());

            /* Move to DayOfWeekPageObject */
        today = new Date();
        year = today.getFullYear();
        month = today.getMonth() + 1;
        if (month < 10) {
            month = "0" + month;
        }
        day = today.getDate();
        if (day < 10) {
            day = "0" + day;
        }
        tempFromDate = subtractDays(year, month, day, today.getDay());
        tempToDate = addDays(year, month, day, (7 - today.getDay() - 1));
        pageObject = new DayOfWeekPageObject("move_to", tempFromDate, tempToDate);
        pageObjectRow = pageObject.makeRowElement();
        moveToDayOfWeekContainer.innerHTML = "";
        moveToDayOfWeekContainer.insertAdjacentElement("beforeend", pageObjectRow);

        moveToDayOfWeekDate.value = toDoDisplayDayOfWeekDate.value;
    }
    function initializeLocalStorage() {
        console.log("Entered - initializeLocalStorage()");

        const data = window.localStorage.getItem("data");
        console.log(data);

        if (data != undefined) {
            console.log("Getting Data From Local Storage");

            /* Checking File Name to make sure user enter valid file */
            const curFileName = window.localStorage.getItem("fileName");

            if (curFileName.substring(curFileName.length - 4, curFileName.length) != ".txt") {
                console.log("Bad File Name! Displaying Prompt");
                document.getElementById("bad_file_name_pop_up_container").classList.remove("hidden");
                footerButtonSave.style.zIndex = '2';
                document.getElementById("bad_file_name_container").innerHTML = curFileName;
            } else {
                console.log("Good File Name. Removing Prompt");
                document.getElementById("bad_file_name_pop_up_container").classList.add("hidden");

            }

            let toDoMasterListData = splitToDoMasterList(data);
            let systemPreferencesData = splitSystemPreferences(toDoMasterListData[1]);
            let colorPreferencesData = splitColorPreferences(systemPreferencesData[1]);
            
            let toDoMasterListStr = toDoMasterListData[0];
            let systemPreferencesStr = systemPreferencesData[0];
            let colorPreferencesStr = colorPreferencesData[0];

            const tempList = parseWrString(colorPreferencesData[1]);
            userColors.load(colorPreferencesStr);
            systemPreferences.load(systemPreferencesStr);
            toDoMasterList.load(toDoMasterListStr);

            allWrList = [];

            for (var i = 0; i < tempList.length; i++) {
                allWrList[allWrList.length] = tempList[i];
            }
            filteredList = allWrList;
            deselectAllTabs();
            trimByAll.checked = true;
            allWrTab.click();
            allWrTabActive.click();
            allWrTab.click();
            document.getElementById("all_wr_tab").click();
            document.getElementById("all_wr_tab_active").click();
            document.getElementById("all_wr_tab").click();
            footerButtonLoad.classList.add("hidden");


        }
    }
    function initializePopups() {
        console.log("Entered - initializePopups()");

        /* Initializing missingInfo Popup */
        let today = new Date();
        let year = today.getFullYear();
        let month = today.getMonth() + 1;
        if (month < 10) {
            month = "0" + month;
        }
        day = today.getDate();
        if (day < 10) {
            day = "0" + day;
        }
        let tempFromDate = subtractDays(year, month, day, today.getDay());
        let tempToDate = addDays(year, month, day, (7 - today.getDay() - 1));
        let pageObject = new DayOfWeekPageObject("missing_info", tempFromDate, tempToDate);
        let pageObjectRow = pageObject.makeRowElement();
        document.getElementById("missing_info_date_object_container").innerHTML = "";
        document.getElementById("missing_info_date_object_container").insertAdjacentElement("beforeend", pageObjectRow);

        document.getElementById("missing_info_day_of_week_date").value = year + "-" + month + "-" + day;
        setDay("missing_info", today.getDay());

        /* Initializing Add To-Do Popup */
        today = new Date();
        year = today.getFullYear();
        month = today.getMonth() + 1;
        if (month < 10) {
            month = "0" + month;
        }
        day = today.getDate();
        if (day < 10) {
            day = "0" + day;
        }
        tempFromDate = subtractDays(year, month, day, today.getDay());
        tempToDate = addDays(year, month, day, (7 - today.getDay() - 1));
        pageObject = new DayOfWeekPageObject("add_to_do_pop_up", tempFromDate, tempToDate);
        pageObjectRow = pageObject.makeRowElement();
        document.getElementById("add_to_do_pop_up_date_object_container").innerHTML = "";
        document.getElementById("add_to_do_pop_up_date_object_container").insertAdjacentElement("beforeend", pageObjectRow);

        document.getElementById("add_to_do_pop_up_day_of_week_date").value = year + "-" + month + "-" + day;
        setDay("add_to_do_pop_up", today.getDay());

        /* Initializing Status Warning Pop Up - Permit */
        today = new Date();
        year = today.getFullYear();
        month = today.getMonth() + 1;
        if (month < 10) {
            month = "0" + month;
        }
        day = today.getDate();
        if (day < 10) {
            day = "0" + day;
        }
        tempFromDate = subtractDays(year, month, day, today.getDay());
        tempToDate = addDays(year, month, day, (7 - today.getDay() - 1));
        pageObject = new DayOfWeekPageObject("permit_status_warning_pop_up", tempFromDate, tempToDate);
        pageObjectRow = pageObject.makeRowElement();

        document.getElementById("permit_status_warning_pop_up_date_object_container").innerHTML = "";
        document.getElementById("permit_status_warning_pop_up_date_object_container").insertAdjacentElement("beforeend", pageObjectRow);

        document.getElementById("permit_status_warning_pop_up_day_of_week_date").value = year + "-" + month + "-" + day;
        setDay("permit_status_warning_pop_up", today.getDay());

        /* Initializing Status Warning Pop Up - Easement */
        today = new Date();
        year = today.getFullYear();
        month = today.getMonth() + 1;
        if (month < 10) {
            month = "0" + month;
        }
        day = today.getDate();
        if (day < 10) {
            day = "0" + day;
        }
        tempFromDate = subtractDays(year, month, day, today.getDay());
        tempToDate = addDays(year, month, day, (7 - today.getDay() - 1));
        pageObject = new DayOfWeekPageObject("easement_status_warning_pop_up", tempFromDate, tempToDate);
        pageObjectRow = pageObject.makeRowElement();

        document.getElementById("easement_status_warning_pop_up_date_object_container").innerHTML = "";
        document.getElementById("easement_status_warning_pop_up_date_object_container").insertAdjacentElement("beforeend", pageObjectRow);

        document.getElementById("easement_status_warning_pop_up_day_of_week_date").value = year + "-" + month + "-" + day;
        setDay("easement_status_warning_pop_up", today.getDay());

    }

    /* Adds all dropdowns */
    window.onload = function() {
        console.log("Entered - Window.onload function");
        
        /* All Wr Tab DDs */
        initializeAllWrTab();

        /* Permit Tab DDs */
        initializePermitsTab();

        /* Add Tab DDs */
        initializeAddTab();
            
        /* To-Do Tab Page Objects */
        initializeToDoTab();

        /* Commented out when Testing */
        initializeLocalStorage();

        /* Settings System Preference Values */
        settingsPreferencesTextfieldRowsPerPage.value = rowsOnPage;
        settingsPreferencesTextfieldCommentsWr.value = tempCommentsCount;
        settingsPreferencesTextfieldCommentsPermit.value = permitCommentCount;
        settingsPreferencesTextfieldCommentsComment.value = tempAllCommentCount;
        settingsPreferencesTextfieldNotesToDo.value = tempNotesCount;
        settingsPreferencesTextfieldLinesPerPageToDo.value = linesPerPageToDo;
        settingsPreferencesPromptDuration.value = promptDuration;

        /* Missing Info and Add To-Do Pop Ups */
        initializePopups();

        /* Checks all work requests to see if permits are expiring soon -
            if so, updates status and prompts user to add/update to-do */
        initialCheckPermitDates();

        

        // Running test function
        testFunction();
    }

    
    /* Checks all work requests to see if permit dates are within specified range - 
        if there are, changes status to expiring soon and prompts to add/update to-do */
    function initialCheckPermitDates() {
        console.log("Entered - initialCheckPermitDates()");

        if (allWrList.length == undefined) {
            return; // if list doesn't exist, nothing to check
        }

        const d = new Date();
        let day = d.getDate();
        let dayNum = new Number(day);

        let curDataDate = document.getElementById("data_from_value_date").value;
        const curDataDayStr = curDataDate.substring(8, 10);
        const curDataDayNum = new Number(curDataDayStr);

        /* CHANGE != to == (below) when testing - allows to test same day on load */
        if (dayNum.valueOf() != curDataDayNum.valueOf()) { 
            console.log("permit dates not checked yet");

            for (var i = 0; i < allWrList.length; i++) {
                if (allWrList[i].permit.endDate != "0001-01-01") {
                    const today = new Date();
                    const curWrPermitEnd = new Date(allWrList[i].permit.endDate);
                    const dif = calculateCrdRcdDifference(curWrPermitEnd - today);
                    
                    if (dif < 35) { // will change/add in system preferences

                        /* Changing Permit Status */
                        allWrList[i].permit.permitStatus = "Expiring Soon";

                        console.log("Code calling click below");
                        allWrTab.click();

                        if (toDoMasterList.toDoTypeExistsForWorkRequest("check_permit", allWrList[i].workRequestNumber) == false) { // Function that checks to do's for wr to see if to-do already exists
                            /* Revealing Popup */   // Need to change text "35" below when system preferences is updated
                            document.getElementById("add_to_do_pop_up_container").classList.remove("hidden");
                            addToDoPopUpHeader.innerHTML = `<div class="addToDoPopUpText">Permit for Work Request # ${allWrList[i].workRequestNumber} " is expiring in 35 days. Do you want <br> to add a \"Check/ Apply - Permit\" To-Do for Work Request # ${allWrList[i].workRequestNumber}?</div>`;
                    
                        } else { // wr has to-do for that type - note to self: move the to-do to today if it isn't already 
                            document.getElementById("add_to_do_pop_up_container").classList.remove("hidden");
                            addToDoPopUpHeader.innerHTML = `<div class="addToDoPopUpText" style="margin-top: -15px;">Permit for Work Request # ${allWrList[i].workRequestNumber} " is expiring in 35 days.<br> Do you want to update the date/tab for existing \"Check/ <br>Apply - Permit\" To-Do for Work Request # ${allWrList[i].workRequestNumber}?</div>`;
                    
                        }
                    } 
                }
                
            }
            
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
        document.getElementById("all_wr_tab_prev_next_container").classList.add("hidden");

        uncheckAllWrFilterCheckboxes();
        uncolorAllWrFilterCheckboxes();

        if (document.getElementById("no_wr_found_all_wr_tab") != undefined) {
            document.getElementById("no_wr_found_all_wr_tab").remove();
        }
        
       
        allWrTab.classList.remove("hidden");
    }
    function deselectAllToDoTab() {
        console.log("Entered - deselectAllToDoTab()");

    /* Revealing inactive button */
    toDoTab.classList.remove("hidden");

    /* Hiding features */
    toDoTabActive.classList.add("hidden");
    filterByBoxContainer.classList.add("hidden");
    searchByBoxContainer.classList.add("hidden"); // May remove this
    trimContainer.classList.add("hidden");
    trimContainerLabel.classList.add("hidden");
    switchSearchByBoxes(""); // Anything but "toDo" as input switches to wr/permit boxes
    switchGenericBoxes("");
    switchTrimBoxes(""); // Anything but "toDo" as input switches to wr/permit boxes
    switchTypeCheckboxes(""); // Anything but "toDo" as input switches to wr/permit boxes
    toDoDisplayContainer.classList.add("hidden");

    allWrStatusFiltersContainer.classList.add("hidden");
    filterSectionStatusLabel.classList.add("hidden");    
    filterSectionStatusLabel.innerHTML = "Status:";

    
    document.getElementById("to_do_tab_prev_next_container").classList.add("hidden");


    /* Removing Filter By Priority Number */
    document.getElementById("filter_container_priority_number").classList.remove("hidden");
    document.getElementById("filter_container_age_new_old").classList.remove("hidden");
    document.getElementById("filter_container_crd").classList.remove("hidden");
    document.getElementById("filter_container_age_old_new").classList.remove("hidden");
    document.getElementById("filter_container_rcd").classList.remove("hidden");
    document.getElementById("filter_container_waiting_other").classList.remove("hidden");

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
        document.getElementById("permits_tab_prev_next_container").classList.add("hidden");

        uncheckPermitsTabSpecificCheckboxes();
        uncolorPermitsTabSpecificCheckboxes();

        if (document.getElementById("no_wr_found_permit_tab") != undefined) {
            document.getElementById("no_wr_found_permit_tab").remove();
        }

        permitsTab.classList.remove("hidden");
    }
    function deselectAllTabs() {
        console.log("Entered - deselectAllTabs");

        deselectAllWrTab();
        deselectAllToDoTab();
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
        document.getElementById("footer_filter_container_not_complete").style.backgroundColor = "white";
        document.getElementById("footer_filter_container_all_to_do").style.backgroundColor = "white";
        document.getElementById("footer_filter_container_complete").style.backgroundColor = "white";

    }
    function uncolorAllWrFilterCheckboxes() {
        console.log("Entered - uncolorAllWrFilterCheckboxes");
    
        document.getElementById("filter_container_waiting_ll").style.backgroundColor = "white";
        document.getElementById("filter_container_need_to_visit").style.backgroundColor = "white";
        document.getElementById("filter_container_svc_calcs").style.backgroundColor = "white";
        document.getElementById("filter_container_check_njuns").style.backgroundColor = "white";
        document.getElementById("filter_container_check_permit").style.backgroundColor = "white";
        document.getElementById("filter_container_check_easement").style.backgroundColor = "white";
        document.getElementById("filter_container_design").style.backgroundColor = "white";
        document.getElementById("filter_container_review_peer").style.backgroundColor = "white";
        document.getElementById("filter_container_review_coordinator").style.backgroundColor = "white";
        document.getElementById("filter_container_revisions").style.backgroundColor = "white";
        document.getElementById("filter_container_waiting_customer_not_approved").style.backgroundColor = "white";
        document.getElementById("filter_container_waiting_customer_approved").style.backgroundColor = "white";
        document.getElementById("filter_container_flag").style.backgroundColor = "white";
        document.getElementById("filter_container_7010").style.backgroundColor = "white";
        document.getElementById("filter_container_cancled_other").style.backgroundColor = "white";
    
    }
    function uncolorToDoFilterCheckboxes() {
        console.log("Entered - uncolorToDoFilterCheckboxes()");

        document.getElementById("filter_container_general").style.backgroundColor = "white";
        document.getElementById("filter_container_contact_customer").style.backgroundColor = "white";
        document.getElementById("filter_container_need_to_visit").style.backgroundColor = "white";
        document.getElementById("filter_container_svc_calcs").style.backgroundColor = "white";
        document.getElementById("filter_container_check_njuns").style.backgroundColor = "white";
        document.getElementById("filter_container_check_permit").style.backgroundColor = "white";
        document.getElementById("filter_container_check_easement").style.backgroundColor = "white";
        document.getElementById("filter_container_design").style.backgroundColor = "white";
        document.getElementById("filter_container_revisions").style.backgroundColor = "white";
    }
    function uncolorGenericFilterCheckboxes() {
        console.log("Entered - uncolorGenericFlterCheckboxes");
        
        document.getElementById("filter_container_priority_number").style.backgroundColor = "white";
        document.getElementById("filter_container_crd").style.backgroundColor = "white";
        document.getElementById("filter_container_rcd").style.backgroundColor = "white";
        document.getElementById("filter_container_age_new_old").style.backgroundColor = "white";
        document.getElementById("filter_container_age_old_new").style.backgroundColor = "white";
        document.getElementById("filter_container_age_new_old_all").style.backgroundColor = "white";
        document.getElementById("filter_container_age_old_new_all").style.backgroundColor = "white";
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
        document.getElementById("footer_filter_checkbox_complete").checked = false;
        document.getElementById("footer_filter_checkbox_not_complete").checked = false;
        document.getElementById("footer_filter_checkbox_all_to_do").checked = false;
    }
    function uncheckAllWrFilterCheckboxes() {
        console.log("Entered - uncheckAllWrFilterCheckboxes");
    
        

        if (toDoTab.classList.contains("hidden")) {
            document.getElementById("filter_checkbox_general").checked = false;
            document.getElementById("filter_checkbox_contact_customer").checked = false;

            document.getElementById("filter_checkbox_need_to_visit").checked = false;
            document.getElementById("filter_checkbox_svc_calcs").checked = false;
            document.getElementById("filter_checkbox_check_njuns").checked = false;
            document.getElementById("filter_checkbox_check_permit").checked = false;
            document.getElementById("filter_checkbox_check_easement").checked = false;
            document.getElementById("filter_checkbox_design").checked = false;
            document.getElementById("filter_checkbox_revisions").checked = false;
            document.getElementById("filter_checkbox_waiting_other").checked = false;
        } else {
            document.getElementById("filter_checkbox_waiting_ll").checked = false;
            document.getElementById("filter_checkbox_need_to_visit").checked = false;
            document.getElementById("filter_checkbox_svc_calcs").checked = false;
            document.getElementById("filter_checkbox_check_njuns").checked = false;
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
    
    }
    function uncheckToDoFilterCheckboxes() {
        console.log("Entered - uncheckToDoFilterCheckboxes()");

        document.getElementById("filter_checkbox_general").checked = false;
        document.getElementById("filter_checkbox_contact_customer").checked = false;
        document.getElementById("filter_checkbox_need_to_visit").checked = false;
        document.getElementById("filter_checkbox_svc_calcs").checked = false;
        document.getElementById("filter_checkbox_check_njuns").checked = false;
        document.getElementById("filter_checkbox_check_permit").checked = false;
        document.getElementById("filter_checkbox_check_easement").checked = false;
        document.getElementById("filter_checkbox_design").checked = false;
        document.getElementById("filter_checkbox_revisions").checked = false;
    }
    function clearAddTabCheckboxes() {
        console.log("Entered - clearAddTabCheckboxes");

        filterCheckboxAddWr.checked = false;
        filterCheckboxAddToDo.checked = false;
        filterCheckboxAddPermit.checked = false;
        //filterCheckboxAddEasementRequest.checked = false;
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
        filterCheckboxAgeNewAll.checked = false;
        filterCheckboxAgeOldAll.checked = false;
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
        filterCheckboxCheckNJUNS.disabled = false;
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

         /* To-Do Tab (only) Filter Checkboxes */
         filterCheckboxGeneral.disabled = false;
         filterCheckboxContactCustomer.disabled = false;
         filterCheckboxWaitingOther.disabled = false;
        
        uncolorSearchByCheckboxes();
        uncheckSearchByCheckboxes();
    }
    function enableAddCommentTabs() {
        console.log("Entered - enableAddCommentTabs");
        addCommentFilterTabAll.classList.remove("filterSectionInactive");
        addCommentFilterTabGeneral.classList.remove("filterSectionInactive");
        addCommentFilterTabPermit.classList.remove("filterSectionInactive");

        addCommentFilterTabAll.classList.add("hidden");
        addCommentFilterTabAllActive.classList.remove("hidden");

    }
    function clearAddCommentTabs() {
        console.log("Entered - clearAddCommentTabs()");

        addCommentFilterTabPermit.classList.remove("hidden")
        addCommentFilterTabPermitActive.classList.add("hidden");
        addCommentFilterTabGeneral.classList.remove("hidden");
        addCommentFilterTabGeneralActive.classList.add("hidden");
        addCommentFilterTabAll.classList.remove("hidden");
        addCommentFilterTabAllActive.classList.add("hidden");

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
        filterCheckboxCheckNJUNS.disabled = true;
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

        /* To-Do Tab (only) Filter Checkboxes */
        filterCheckboxGeneral.disabled = true;
        filterCheckboxContactCustomer.disabled = true;
        filterCheckboxWaitingOther.disabled = true;
    }
    function disableAddCommentTabs() {
        console.log("Entered - disableAddCommentTabs");
        addCommentFilterTabAll.classList.add("filterSectionInactive");
        addCommentFilterTabGeneral.classList.add("filterSectionInactive");
        addCommentFilterTabPermit.classList.add("filterSectionInactive");

        hideActiveAddCommentTypeFilters();
        
        addCommentFilterTabAll.classList.remove("hidden");
        addCommentFilterTabGeneral.classList.remove("hidden");
        addCommentFilterTabPermit.classList.remove("hidden");
    }

        /* Display/Reset To-Do Tab */
    function displayToDosByWorkRequestNumber(wrNum) {
        console.log("Entered - displayToDosByWorkRequestNumber(" + wrNum + ")");

        console.log("~ Code clicking")
        toDoTab.click();
        console.log("~ Code clicking")
        searchBySelectionCheckbox.click();
        console.log("~ Settings searchBySelectionTextfield.value");
        searchBySelectionTextfield.value = wrNum;
        console.log("~ Code clicking")
        searchTextfieldGoButton.click();
    }

        /* Display/Reset Add Tab */
            /* Wr */
    function displayWrAddUpdate(wr) {
        console.log("Entered - displayWrAddUpdate(" + wr + ")");

        deselectAllTabs();
        //document.getElementById("add_tab").click();
        addTab.classList.add("hidden");
        addTabActive.classList.remove("hidden");
        addDisplayContainer.classList.remove("hidden");
        addTabFilterLabelContainer.classList.remove("hidden");
        addTypeContainer.classList.remove("hidden");

        //document.getElementById("filter_checkbox_add_wr").click();
        clearAddTabCheckboxes();
        addTabUpdateButton.disabled = false;

        if (document.getElementById("add_tab_display_header_left").innerHTML == "Update") {
            document.getElementById("add_tab_display_header_left").innerHTML = "Add / Update";
        }
        clearAddTabDisplays();
        addTabDisplayAddWr.classList.remove("hidden");
        addTabDisplayHeaderLabel.innerHTML = "\"Work Request\"";
        addTabDisplayWorkRequestNumberLabel.classList.remove("newWorkRequestNumberTextfieldLabelBig");
        
        addTabNewWorkRequestNumber.value = wr.workRequestNumber;
        addressLineTextfieldCoverHouseNumber.classList.add("hidden");
        addressLineTextfieldHouseNumber.value = wr.houseNumber;
        addressLineTextfieldStreetName.value = wr.streetName;
        addressLineTextfieldCounty.value = wr.countyCity;
        addressLineTextfieldZip.value = wr.zipCode;
        addressLineTextfieldCoverZip.classList.add("hidden");
        addTabPriorityBox.value = wr.priorityNumber;
        addTabWrCreationDate.value = wr.creationDate;
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
        //addTabWrCommentsToAdd.textContent = wr.commentsGeneral
            // Not adding comments as part of layout
        if (wr.customerContacted) {
            customerContactedCheckboxYes.checked = true;
            customerContactedCheckboxNo.checked = false;
        } else {
            customerContactedCheckboxYes.checked = false;
            customerContactedCheckboxNo.checked = true;
        }

        addTabAddButton.disabled = true;
        tempComments = new PaginatedComments(tempCommentsCount, "addWr"); // emptying tempComments in case user add comments before getting wr

        addTabRemoveButton.classList.remove("hidden");
        addTabRemoveButton.disabled = false;
    
    }
    function resetDisplayWrAddUpdate() {
        console.log("Entered - resetDisplayWrAddUpdate()");

        const d = new Date();
        
        let day = d.getDate();
        if (day < 10) {
            day = "0" + day;
        }
        const str = d.getFullYear() + "-" + formatMonth((d.getMonth() + 1)) + "-" + day;

        addTabNewWorkRequestNumber.value = "Enter Wr Number";
        addressLineTextfieldHouseNumber.value = "";
        addressLineTextfieldCoverHouseNumber.classList.remove("hidden");
        addressLineTextfieldStreetName.value = "Enter Street Name";
        addressLineTextfieldCounty.value = "Enter County/City Name";
        addressLineTextfieldZip.value = "";
        addressLineTextfieldCoverZip.classList.remove("hidden");
        addTabPriorityBox.value = 1;
        addTabWrCreationDate.value = str; // new field
        pocTextboxOwnerName.value = "N/A";
        pocTextboxOwnerNumber.value = "N/A";
        pocTextboxOwnerEmail.value = "N/A";
        pocTextboxBuilderName.value = "N/A";
        pocTextboxBuilderNumber.value = "N/A";
        pocTextboxBuilderEmail.value = "N/A";
        pocTextboxOtherName.value = "N/A";
        pocTextboxOtherNumber.value = "N/A";
        pocTextboxOtherEmail.value = "N/A";
        document.getElementById("wr_type_dd_menu_current").innerHTML = "Not Set";
        addTabWrCRD.value = "0001-01-01";
        addTabWrRCD.value = "0001-01-01";
        document.getElementById("general_status_dd_add_tab_current").innerHTML = "Not Set";
        document.getElementById("permit_status_dd_add_tab_row_1_current").innerHTML = "Not Set";
        document.getElementById("easement_status_dd_add_tab_current").innerHTML = "Not Set";
        addTabCommentsTextfield.textContent = "Enter Comment Here";
        customerContactedCheckboxYes.checked = false;
        customerContactedCheckboxNo.checked = true;
        addTabWrCommentsToAdd.innerHTML = "";
        addTabWrCommentsToAdd.classList.add("hidden");
        addTabUpdateButton.disabled = true;
        addTabAddButton.disabled = true;
        /* Resetting Comments Page Num */
        document.getElementById("add_wr_tab_current_page_box").innerHTML = "1";

        /* Clearing Comments To Add */
        /*for (var i = 0; i < tempComments.length; i++) {
            console.log("*** Test");
            console.log("comment_to_add_item_" + i);
            document.getElementById("comment_to_add_item_" + i).remove(); 
        }*/
        tempComments = new PaginatedComments(tempCommentsCount, "addWr"); // Emptying tempComments
        addTabRemoveButton.classList.add("hidden");
        addTabRemoveButton.disabled = true;
    }

            /* To-Do */
    function displayToDoAddUpdate(toDo) {
        console.log("Entered - displayToDoAddUpdate(toDo)");

        addTabAddButton.disabled = true;
        addTabDisplayToDoRemoveButton.disabled = false;
        addTabDisplayToDoRemoveButton.classList.add("activeRemoveButton");

        const d = new Date();

        if (toDo.workRequestNumber != undefined) {
            addTabNewWorkRequestNumber.value = toDo.workRequestNumber;
        }

        addTabDisplayToDoRowZeroNumfield.value = toDo.toDoId; // must set id before settings comments or logic breaks
        document.getElementById("to_do_tab_dd_0_current").innerHTML = toDo.tab;
        /* Setting Button Height */
        if (toDo.tab.includes("Office")) {
            document.getElementById("to_do_tab_dd_0_button").style.height = '45px'
        } else {
            document.getElementById("to_do_tab_dd_0_button").style.height = '30px'
        }
        addTabDisplayDayOfWeekDate.value = toDo.dueDate;
        setDay("add", makeDate(toDo.dueDate).getDay());
        document.getElementById("to_do_type_dd_0_current").innerHTML = toDo.type;
        addTabDisplayToDoCreationDate.value = toDo.creationDate;
        if (toDo.completed == 1) {
            document.getElementById("add_tab_display_to_do_completed").checked = true;
        } else {
            document.getElementById("add_tab_display_to_do_completed").checked = false;
        }

        for (var i = 0; i < toDo.notes.length; i++) {
            const temp = toDo.notes[i][0].substring(2);
            if (toDo.notes[i][1] == 0) {
                addTabDisplayToDoRowThreeNotesToAdd.insertAdjacentHTML("afterbegin", `<li class="addTabDisplayToDoNoteItem" id="add_tab_display_to_do_note_item_${i}">${temp}</li>`);
            } else {
                console.log("should see this %^%^$");
                addTabDisplayToDoRowThreeNotesToAdd.insertAdjacentHTML("afterbegin", `<strike>${`<li class="addTabDisplayToDoNoteItem" id="add_tab_display_to_do_note_item_${i}">${temp}</li>`}</strike>`);

            }
        }

        document.getElementById("add_tab_display_to_do_row_zero_numfield_label").innerHTML = "Current \"To-Do\" ID#: ";
        document.getElementById("add_tab_display_to_do_row_zero_numfield_label").style.marginLeft = '198px';

        tempNotes = new PaginatedComments(tempNotesCount, "addToDo");

        for (var i = toDo.notes.length - 1; i >= 0; i--) {

            tempNotes.addToDoNote(toDo.notes[i][0].substring(2), toDo.notes[i][1]);
        }
   
        if (toDo.notes.length == 0) {
            addTabDisplayToDoRowThreeNotesToAdd.innerHTML = "No Notes";
        }
    }
    function resetDisplayToDoAddUpdate() {
        console.log("Entered - resetDisplayToDoAddUpdate()");

        addTabDisplayToDoRemoveButton.disabled = true;
        addTabDisplayToDoRemoveButton.classList.remove("activeRemoveButton");

        const d = new Date();
        const year = d.getFullYear();
        let month = d.getMonth() + 1;
        if (month < 10) {
            month = "0" + month;
        }
        let day = d.getDate();
        if (day < 10) {
            day = "0" + day;
        }

        addTabNewWorkRequestNumber.value = "";
        addTabDisplayToDoRowZeroNumfield.value = toDoMasterList.getCount();
        document.getElementById("to_do_tab_dd_0_current").innerHTML = "General";
        document.getElementById("to_do_tab_dd_0_button").style.height = '30px'
        document.getElementById("to_do_type_dd_0_current").innerHTML = "Not Set";
        document.getElementById("to_do_type_dd_0_button").style.height = '30px'
        addTabDisplayDayOfWeekDate.value = (year + "-" + month + "-" + day);
        setDay("add", d.getDay());
        addTabDisplayToDoCreationDate.value = (year + "-" + month + "-" + day);
        document.getElementById("add_tab_display_to_do_completed").checked = false;
        addTabDisplayToDoRowThreeTextfield.value = "Enter Note Here";
        document.getElementById("add_tab_display_to_do_row_three_textfield_label").innerHTML = "To-Do: Notes";
        addTabDisplayToDoRowThreeNotesToAdd.innerHTML = "";
        addTabDisplayToDoRowThreeTextfield.value = "";
        /* Resetting Comments Page Num */
        document.getElementById("add_tab_display_to_do_current_page_box").innerHTML = "1";
        
        document.getElementById("add_tab_display_to_do_row_zero_numfield_label").innerHTML = "New \"To-Do\" ID#: ";
        document.getElementById("add_tab_display_to_do_row_zero_numfield_label").style.marginLeft = '220px';

        tempNotes = new PaginatedComments(tempNotesCount, "addToDo");
    }
    function resetToDoMoveToDisplay() {
        console.log("Entered - resetToDoMoveToDisplay()");

        document.getElementById("move_to_tab_coordinator").classList.remove("hidden");
        document.getElementById("move_to_tab_coordinator_active").classList.add("hidden");
        document.getElementById("move_to_tab_waiting").classList.remove("hidden");
        document.getElementById("move_to_tab_waiting_active").classList.add("hidden");
        document.getElementById("move_to_tab_on_return_to_office").classList.remove("hidden");
        document.getElementById("move_to_tab_on_return_to_office_active").classList.add("hidden");
        document.getElementById("move_to_tab_general").classList.remove("hidden");
        document.getElementById("move_to_tab_general_active").classList.add("hidden");
        document.getElementById("move_to_tab_mentor").classList.remove("hidden");
        document.getElementById("move_to_tab_mentor_active").classList.add("hidden");

    }
            /* Permit */
    function displayPermitAddUpdate(wr) {
        console.log("Entered - displayPermitAddUpdate");

        deselectAllTabs();
        document.getElementById("add_tab").click();
        document.getElementById("filter_checkbox_add_permit").click();

        tempPermitComments = new PaginatedComments(permitCommentCount, "addPermit"); // emptying tempPermitComments in case user add comments before getting wr

        addTabNewWorkRequestNumber.value = wr.workRequestNumber;
        document.getElementById("permit_status_dd_add_tab_row_2_current").innerHTML = wr.permit.permitStatus;
        
        let temp = wr.permit.dateUpdated;
        if (temp.length < 10) {
            let index = temp.indexOf("-");
            const year = temp.substring(0, index);
            temp = temp.substring(index + 1);
            
            index = temp.indexOf("-");
            let month = temp.substring(0, index);
            if (month.length == 1) {
                month = "0" + month;
            }
            
            temp = temp.substring(index + 1);
            
            let day = temp;
            if (day.length == 1) {
                day = "0" + day;
            }
            temp = year + "-" + month + "-" + day;
        }
        addTabPermitDateUpdated.value = temp;
        addTabPermitDateApplied.value =  formatDatePermitApplied(wr.permit.dateApplied); //formatDate(wr.permit.dateApplied);
        addTabPermitPriority.value = wr.priorityNumber;
        addTabPermitCRD.value = formatDate(wr.crd);
        addTabPermitRCD.value = formatDate(wr.rcd);
        addTabPermitStart.value = formatDate(wr.permit.startDate);
        addTabPermitExpiration.value = formatDate(wr.permit.endDate);
        //addTabPermitWrCommentsToAdd = will fill in
            // Not adding comments as part of layout

        addTabAddButton.disabled = true;

    }
    function resetDisplayPermitAddUpdate() {
        console.log("Entered - resetDisplayPermitAddUpdate()");

        addTabNewWorkRequestNumber.value = "Enter Wr Number";
        document.getElementById("permit_status_dd_add_tab_row_2_current").innerHTML = "Not Set";
        addTabPermitDateUpdated.value = "0001-01-01";
        addTabPermitDateApplied.value =  "0001-01-01";
        addTabPermitPriority.value = 1;
        addTabPermitCRD.value = "0001-01-01";
        addTabPermitRCD.value = "0001-01-01";
        addTabPermitStart.value = "0001-01-01";
        addTabPermitExpiration.value = "0001-01-01";
        addTabPermitCommentsToAdd.innerHTML = "";
        addTabPermitCommentsToAdd.classList.add("hidden");
        addTabUpdateButton.disabled = true;
        addTabAddButton.disabled = true;
        /* Resetting Permit Comments Page */
        document.getElementById("add_permit_tab_current_page_box").innerHTML = "1";
        tempPermitComments = new PaginatedComments(permitCommentCount, "addPermit") // Emptying tempPermitContents
        
    }
            /* Comment */
    function displayCommentsAddUpdate(wr) {
        console.log("Entered - displayCommentsAddUpdate()");

        deselectAllTabs();
        document.getElementById("add_tab").click();
        document.getElementById("filter_checkbox_add_comment").click();

        addTabNewWorkRequestNumber.value = wr.workRequestNumber;

        tempAllComments = new PaginatedComments(tempAllCommentCount, "addComment"); // emptying tempAllComments in case user add comments before getting wr

        if (wr.commentsGeneral.comments.length > 0) {
            addCommentsTabCommentsRemoveButton.disabled = false;
        }
        for (var i = 0; i < wr.commentsGeneral.comments.length; i++) {
            tempAllComments.add(wr.commentsGeneral.comments[i]);
        }
        if (wr.commentsGeneral.comments.length == 0) {
            addCommentTabExistingComments.innerHTML = "No Comments";
        }
       
    }
    function resetDisplayCommentsAddUpdate() {
        console.log("Entered - resetDisplayCommentAddUpdate()");

        addTabNewWorkRequestNumber.value = "Enter Wr Number";
        addCommentTabTextfield.value = "Type Comment Here";
        addCommentTabExistingComments.innerHTML = "";
        document.getElementById("add_comment_tab_current_page_box").innerHTML = "1";
        disableAddCommentTabs();
    }
    
        /* Hide Add Tab Display */
    function clearAddTabDisplays() {
        console.log("Entered - clearAddTabDisplays");


        addTabDisplayAddWr.classList.add("hidden");
        addTabDisplayAddPermit.classList.add("hidden");
        addTabDisplayAddComment.classList.add("hidden");
        addTabDisplayAddToDo.classList.add("hidden");

        /* Hiding Top Left Remove Button */
        addTabRemoveButton.classList.add("hidden");
    }

    function resetAddToDoPopUpDate() {
        console.log("Entered - resetAddToDoPopUpDate()");

        /* Setting Date to Today */
        const d = new Date();
        const year = d.getFullYear();
        let month = d.getMonth() + 1;
        if (month < 10) {
            month = "0" + month;
        }
        let day = d.getDate();
        if (day < 10) {
            day = "0" + day;
        }
        addToDoPopUpDayOfWeekDate.value = year + "-" + month + "-" + day;

        setFromToDates("add_to_do_pop_up", addToDoPopUpDayOfWeekDate.value);

        const curDay = d.getDay();
        setDay("add_to_do_pop_up", curDay);

        document.getElementById("add_to_do_pop_up_tab_general").click(); // DD box sizing was messing up on click but this reset the page - fixing it

        addToDoPopUpTextfield.value = "Enter Note (Optional)"

    }

        /* Takes in str in format of yyyy-mm-dd and returns date version */
    function makeDate(str) {
        console.log("Entered - makeDate(" + str + ")");

        const year = str.substring(0,4);
        let month = str.substring(5, 7);
        if (month < 10) {
            month = "0" + (month - 1);
        }
        let day = str.substring(8);
        if (day < 10) {
            day = "0" + day;
        }
        let d = new Date();
        d.setFullYear(year);
        d.setMonth(month);
        d.setDate(day);

        return d;
    }

    /* Not Implemented Yet */
    settingsBackButton.addEventListener("click", (event) => {
        console.log("Fired - Clicked settingsBackButton");

        //window.history.back();        
    })

    /* "Invisible page cover that opens on DD open - when clicked, closes all dropdowns" */
    dropdownCover.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdownCover");

        let maxRows = 0;

        /* Figuring out how many rows there are to hide all DDs without throwing error */
        for (var i = 1; i <= 8; i++) {
            const cur = convertNumText(i);
            if (document.getElementById("all_wr_tab_row_" + cur).classList.contains("hidden")) {
                break;
            } else {
                maxRows++;
            }
        }

        if (addTab.classList.contains("hidden")) {
            console.log("addTab has hidden");
            if (filterCheckboxAddWr.checked) {
                /* Add/Update Wr */
                document.getElementById("general_status_dd_add_tab_content").style.display = 'none';
                document.getElementById("easement_status_dd_add_tab_content").style.display = 'none';
                document.getElementById("permit_status_dd_add_tab_row_1_content").style.display = 'none';
                document.getElementById("wr_type_dd_content").style.display = 'none';
            }
            
            if (filterCheckboxAddToDo.checked) {
                /* Add/Update To-Do */
                document.getElementById("to_do_tab_dd_0_content").style.display = 'none';
                document.getElementById("to_do_type_dd_0_content").style.display = 'none';

            }

            if (filterCheckboxAddPermit.checked) {
                /* Update Permit */
                document.getElementById("permit_status_dd_add_tab_row_2_content").style.display = 'none';
            }
            
            if (filterCheckboxAddComment.checked) {
                /* Add/Update Comment */
                document.getElementById("comment_type_dd_content").style.display = 'none';
            }
            
        }

            /* DropDowns */
        for (var i = 1; i <= maxRows; i++) {
                /* AllWr Tab */
            if (allWrTab.classList.contains("hidden") && document.getElementById("general_status_dd_" + i + "_content").style.display != 'none'){
                const curPage = document.getElementById("all_wr_tab_current_page_box").innerHTML.trim();
                const curIndex = (curPage - 1) * rowsOnPage + i - 1
                const curWr = allWrList[curIndex];
 
                if (curWr.generalStatus != document.getElementById("general_status_dd_" + i + "_current").innerHTML) {
                    allWrTabGeneralStatusContainerMouseoutFunction(i);
                } else {
                    document.getElementById("general_status_dd_" + i + "_content").style.display = 'none';
                }
                
            }

            if (allWrTab.classList.contains("hidden") && document.getElementById("permit_status_dd_allWr_tab_row_" + i + "_content").style.display != 'none'){
                const curPage = document.getElementById("all_wr_tab_current_page_box").innerHTML.trim();
                const curIndex = (curPage - 1) * rowsOnPage + i - 1
                const curWr = allWrList[curIndex];

                if (curWr.permit.permitStatus != document.getElementById("permit_status_dd_allWr_tab_row_" + i + "_current").innerHTML) {
                    allWrTabPermitStatusContainerMouseoutFunction(i);
                } else {
                    document.getElementById("permit_status_dd_allWr_tab_row_" + i + "_content").style.display = 'none';
                }
            }
            if (allWrTab.classList.contains("hidden") && document.getElementById("easement_status_dd_" + i + "_content").style.display != 'none'){
                const curPage = document.getElementById("all_wr_tab_current_page_box").innerHTML.trim();
                const curIndex = (curPage - 1) * rowsOnPage + i - 1
                const curWr = allWrList[curIndex];

                if (curWr.easementRequestStatus != document.getElementById("easement_status_dd_" + i + "_current").innerHTML) {
                    allWrTabEasementStatusContainerMouseoutFunction(i);
                } else {
                    document.getElementById("easement_status_dd_" + i + "_content").style.display = 'none';
                }
            }

            /* Permits Tab */
            if (permitsTab.classList.contains("hidden") ) {
                const curPage = document.getElementById("permits_tab_current_page_box").innerHTML.trim();
                const curIndex = (curPage - 1) * rowsOnPage + i - 1
                const curWr = allWrList[curIndex];

                if (curWr.permit.permitStatus != document.getElementById("permit_status_dd_permits_tab_row_" + i + "_current").innerHTML) {
                    permitsTabPermitStatusContainerMouseoutFunction(i);

                } else {
                    document.getElementById("permit_status_dd_permits_tab_row_" + i + "_content").style.display = 'none';
                }
            }
            
        }

        /* Checking Address Box Covers/Inputs */
        if (addressLineTextfieldCoverHouseNumber.classList.contains("hidden") && addressLineTextfieldHouseNumber.value == undefined || 
        addressLineTextfieldCoverHouseNumber.classList.contains("hidden") && addressLineTextfieldHouseNumber.value.length == 0) {
            addressLineTextfieldCoverHouseNumber.classList.remove("hidden");
        }
        if (addressLineTextfieldCoverZip.classList.contains("hidden") && addressLineTextfieldZip.value == undefined || 
        addressLineTextfieldCoverZip.classList.contains("hidden") && addressLineTextfieldZip.value.length == 0) {
            addressLineTextfieldCoverZip.classList.remove("hidden");
        }
        

        dropdownCover.classList.add("hidden");
    })

    /* Add Comment Pop Up */
    addCommentPopUpXButton.addEventListener("click", (event) => {
        console.log("Fired - Clicked addCommentPopUpXButton");

        console.log("Code calling click");
        allWrTab.click();
        addCommentPopUpContainer.classList.add("hidden");
    })
    addCommentPopUpButtonNo.addEventListener("click", (event) => {
        console.log("Fired - Clicked addCommentPopUpButtonNo");

        console.log("Code calling click");
        allWrTab.click();
        addCommentPopUpContainer.classList.add("hidden");
    })
    addCommentPopUpButtonYes.addEventListener("click", (event) => {
        console.log("Fired - Clicked addCommentPopUpButtonYes");
        const h = new Haptix(promptDuration);

        /* Getting Comment */
        let tempIndex = addCommentPopUpHeader.innerText.indexOf("\""); // gets index of left paren
        let tempNextIndex = addCommentPopUpHeader.innerText.substring(tempIndex + 1).indexOf("\""); // getins index of right paren
        let comment = addCommentPopUpHeader.innerText.substring(tempIndex + 1, tempIndex + 1 + tempNextIndex);

        /* Getting Comment Type */
        let commentType = "General";
        if (addCommentPopUpHeader.innerText.includes("Permit")) {
            commentType = "Permit";
        }
        
        /* Getting Current Work Request Number */
        tempIndex = addCommentPopUpHeader.innerHTML.indexOf("#");
        let curWrNum = addCommentPopUpHeader.innerHTML.substring(tempIndex + 2, tempIndex + 10);

        /* Getting Current Work Request Index */
        let index = undefined;
        for (var i = 0; i < allWrList.length; i++) {
            if (allWrList[i].workRequestNumber == curWrNum) {
                index = i;
                break;
            }
        }

        const currentWr = allWrList[index];

        const d = new Date();
        const year = d.getFullYear();
        let month = d.getMonth() + 1;
        if (month < 10) {
            month = "0" + month;
        }
        let day = d.getDate();
        if (day < 10) {
            day = "0" + day;
        }
        const today = year + "-" + month + "-" + day;

        let temp = new Comments(currentWr.commentsGeneral.comments);
        const tempCommentItem = new CommentItem(comment, today, commentType);
        temp.addComments([tempCommentItem]);

        const newWr = new workRequest(currentWr.workRequestNumber, currentWr.houseNumber, currentWr.streetName, currentWr.countyCity,
            currentWr.zipCode, currentWr.priorityNumber, currentWr.ownerName, currentWr.ownerNumber, currentWr.ownerEmail, 
            currentWr.builderName, currentWr.builderNumber, currentWr.builderEmail, currentWr.otherName, currentWr.otherNumber, 
            currentWr.otherEmail, currentWr.wrType, currentWr.crd, currentWr.rcd, currentWr.generalStatus, currentWr.permit.permitStatus, 
            currentWr.easementRequestStatus, temp.comments, currentWr.customerContacted, 
            currentWr.creationDate);
        
        const curPermit = currentWr.permit;

        newWr.permit = curPermit;

        allWrList[index] = newWr;

        console.log("Code calling click");
        allWrTab.click();
        addCommentPopUpContainer.classList.add("hidden");

        h.displayCommentAdded(currentWr.workRequestNumber, commentType);
    })

    /* Missing Info Pop Up */
    missingInfoDayOfWeekDate.addEventListener("mouseout", (event) => {
        console.log("Fired - mouseout missingInfoDayOfWeekDate");

        const temp = missingInfoDayOfWeekDate.value;
        const year = temp.substring(0, 4);
        const month = temp.substring(5, 7);
        const day = temp.substring(8, 10);
        const d = new Date();

        d.setFullYear(year);
        d.setMonth(month - 1);
        d.setDate(day);

        const curDay = d.getDay();
        setDay("missing_info", curDay);
        
        const tempStr = year + "-" + month + "-" + day;
        setFromToDates("missing_info", tempStr);
    })
    missingInfoContainer.addEventListener("click", (event) => {
        console.log("Fired - Clicked missingInfoContainer");

        const tempLeftArrow = document.createElement("tempLeftArrow");
        tempLeftArrow.innerHTML = "&#8592";
        const tempRightArrow = document.createElement("tempRightArrow");
        tempRightArrow.innerHTML = "&#8594";
        const tempResetArrow = document.createElement("tempResetArrow");
        tempResetArrow.innerHTML = "&#8634";

        if (event.target.innerHTML == "Su" && !event.target.classList.contains("activeTab")) {
            clearDays("missing_info");

            document.getElementById("missing_info_tab_day_of_week_box_sunday").classList.add("hidden");
            document.getElementById("missing_info_tab_day_of_week_box_sunday_active").classList.remove("hidden");
            assessDayOfWeekChange("missing_info", 0);
        } else if (event.target.innerHTML == "M" && !event.target.classList.contains("activeTab")) {
            clearDays("missing_info");

            document.getElementById("missing_info_tab_day_of_week_box_monday").classList.add("hidden");
            document.getElementById("missing_info_tab_day_of_week_box_monday_active").classList.remove("hidden");
            assessDayOfWeekChange("missing_info", 1);
        } else if (event.target.innerHTML == "Tu" && !event.target.classList.contains("activeTab")) {
            clearDays("missing_info");

            document.getElementById("missing_info_tab_day_of_week_box_tuesday").classList.add("hidden");
            document.getElementById("missing_info_tab_day_of_week_box_tuesday_active").classList.remove("hidden");
            assessDayOfWeekChange("missing_info", 2);
        } else if (event.target.innerHTML == "W" && !event.target.classList.contains("activeTab")) {
            clearDays("missing_info");

            document.getElementById("missing_info_tab_day_of_week_box_wednesday").classList.add("hidden");
            document.getElementById("missing_info_tab_day_of_week_box_wednesday_active").classList.remove("hidden");
            assessDayOfWeekChange("missing_info", 3);
        } else if (event.target.innerHTML == "Th" && !event.target.classList.contains("activeTab")) {
            clearDays("missing_info");

            document.getElementById("missing_info_tab_day_of_week_box_thursday").classList.add("hidden");
            document.getElementById("missing_info_tab_day_of_week_box_thursday_active").classList.remove("hidden");
            assessDayOfWeekChange("missing_info", 4);
        } else if (event.target.innerHTML == "F" && !event.target.classList.contains("activeTab")) {
            clearDays("missing_info");

            document.getElementById("missing_info_tab_day_of_week_box_friday").classList.add("hidden");
            document.getElementById("missing_info_tab_day_of_week_box_friday_active").classList.remove("hidden");
            assessDayOfWeekChange("missing_info", 5);
        } else if (event.target.innerHTML == "Sa" && !event.target.classList.contains("activeTab")) {
            clearDays("missing_info");

            document.getElementById("missing_info_tab_day_of_week_box_saturday").classList.add("hidden");
            document.getElementById("missing_info_tab_day_of_week_box_saturday_active").classList.remove("hidden");
            assessDayOfWeekChange("missing_info", 6);
        } else if (event.target.innerHTML == tempLeftArrow.innerHTML) { // left arrow
            let curDate = toDoDisplayDayOfWeekDate.value;
            const year = curDate.substring(0, 4);
            const month = curDate.substring(5, 7);
            const day = curDate.substring(8, 10);
            missingInfoDayOfWeekDate.value = subtractDays(year, month, day, 7);
            
            const temp = missingInfoDayOfWeekDate.value;
            const year2 = temp.substring(0, 4);
            const month2 = temp.substring(5, 7);
            const day2 = temp.substring(8, 10);
            const d = new Date(temp);
        
            d.setFullYear(year2);
            d.setMonth(month2 - 1);
            d.setDate(day2);
        
            const curDay = d.getDay();
            setDay("missing_info", curDay);
                
            const tempStr = year + "-" + month + "-" + day;
            setFromToDates("missing_info", tempStr);
            
        } else if (event.target.innerHTML == tempRightArrow.innerHTML) { // right arrow
            let curDate = missingInfoDayOfWeekDate.value;
            const year = curDate.substring(0, 4);
            const month = curDate.substring(5, 7);
            const day = curDate.substring(8, 10);
            missingInfoDayOfWeekDate.value = addDays(year, month, day, 7);


            const temp = missingInfoDayOfWeekDate.value;
            const year2 = temp.substring(0, 4);
            const month2 = temp.substring(5, 7);
            const day2 = temp.substring(8, 10);
            const d = new Date(temp);
        
            d.setFullYear(year2);
            d.setMonth(month2 - 1);
            d.setDate(day2);
        
            const curDay = d.getDay();
            setDay("missing_info", curDay);
                
            const tempStr = year + "-" + month + "-" + day;
            setFromToDates("missing_info", tempStr);        
        } else if (event.target.innerHTML == tempResetArrow.innerHTML) { // reset arrow
            const d = new Date();
            const year = d.getFullYear();
            let month = d.getMonth() + 1;
            if (month < 10) {
                month = "0" + month;
            }
            let day = d.getDate();
            if (day < 10) {
                day = "0" + day;
            }
            missingInfoDayOfWeekDate.value = year + "-" + month + "-" + day;

            setDay("missing_info", d.getDay());
            setFromToDates("missing_info", (year + "-" + month + "-" + day));
        }
    })
    missingInfoXButton.addEventListener("click", (event) => {
        console.log("Fired - Clicked missingInfoXButton");

        let temp = document.getElementById("missing_info_header").innerHTML;
        let tempIndex = temp.indexOf("#");
        let curWrNum = temp.substring(tempIndex + 1, tempIndex + 9)
       
        for (var i = 0; i < allWrList.length; i++) {
            
            if (allWrList[i].workRequestNumber == curWrNum) {
                if (temp.includes("CRD")) {
                    console.log("skipped - setting crd year to 0002 to avoid checking again");
                    allWrList[i].crd = "0002-01-01";
                } else if (temp.includes("RCD")) {
                    console.log("skipped - setting rcd year to 0002 to avoid checking again");
                    allWrList[i].rcd = "0002-01-01";
                }
                
            }
        }

        missingInfoContainer.classList.add("hidden");
        assessGeneralStatusChange(i% rowsOnPage);    
    })
    missingInfoSkipButton.addEventListener("click", (event) => {
        console.log("Fired - Clicked missingInfoSkipButton");

        let temp = document.getElementById("missing_info_header").innerHTML;
        let tempIndex = temp.indexOf("#");
        let curWrNum = temp.substring(tempIndex + 1, tempIndex + 9)

        const d = new Date();
        const year = d.getFullYear();
        let month = d.getMonth() + 1;
        if (month < 10) {
            month = "0" + month;
        }
        let day = d.getDate();
        if (day < 10) {
            day = "0" + day;
        }
        const today = year + "-" + month + "-" + day;

       
        for (var i = 0; i < allWrList.length; i++) {
            
            if (allWrList[i].workRequestNumber == curWrNum) {

                let addressStr = "";
                if (allWrList[i] != []) {
                    addressStr = allWrList[i].houseNumber + " " + allWrList[i].streetName + ", " + allWrList[i].countyCity + 
                    " " + allWrList[i].zipCode + " - " + allWrList[i].workRequestNumber;
                } else {
                    addressStr = undefined;
                }

                if (temp.includes("CRD")) {
                    console.log("skipped - setting crd year to 0002 to avoid checking again");
                    const newNoteItem = new NoteItem("Request CRD");
                   
                    let list = [[`<li>${newNoteItem}</li>`, 0]];
                    
                    const newToDo = new ToDoObject(toDoMasterList.getCount(), "General", today, "Contact Customer", today, 0, 
                        list, curWrNum, addressStr);

                    toDoMasterList.add(newToDo);

                    allWrList[i].crd = "0002-01-01";
                } else if (temp.includes("RCD")) {
                    console.log("skipped - setting rcd year to 0002 to avoid checking again");
                    const newNoteItem = new NoteItem("Request RCD");

                    let list = [[`<li>${newNoteItem}</li>`, 0]];
                    
                    const allToDos = toDoMasterList.getAllToDosByWorkRequestNumber(curWrNum);

                    let tempToDoId = undefined;

                    /* Getting toDoId of added "Request CRD" To-Do */
                    for (var j = 0; j < allToDos.length; j++) {
                        if (allToDos[j].type == "Contact Customer" && allToDos[j].notes[0][0] == "<li>Request CRD</li>") {
                            tempToDoId = allToDos[j].toDoId;
                            break;
                        }
                    }

                    if (tempToDoId == undefined) { // "Request CRD" To-Do not added/doesn't exist (user can click X button to not add To-Do)                    
                        const newToDo = new ToDoObject(toDoMasterList.getCount(), "General", today, "Contact Customer", today, 0, 
                            list, curWrNum, addressStr);

                        toDoMasterList.add(newToDo);

                    } else { // Combining Notes and removing to have only 1 To-Do
                        
                        /* Grabbing To-Do */
                        let tempToDo = toDoMasterList.getToDo(tempToDoId)[1];
                        console.log(tempToDo);

                        /* Updating Notes */

                        let tempList = [];

                        for (var j = 0; j < tempToDo.notes.length; j++) {
                            tempList.push(tempToDo.notes[j]);
                        }
                        tempList.push([`<li>${newNoteItem}</li>`, 0]);
                        
                        /* Removing Old To-Do */
                        toDoMasterList.removeById(tempToDoId);

                        /* Adding new To-Do */
                        const newToDo = new ToDoObject(toDoMasterList.getCount(), "General", today, "Contact Customer", today, 0, 
                            tempList, curWrNum, addressStr);

                        toDoMasterList.add(newToDo);
                    }

                    allWrList[i].rcd = "0002-01-01";
                }
                
            }
        }

        missingInfoContainer.classList.add("hidden");
        assessGeneralStatusChange(i% rowsOnPage);
    })
    missingInfoSaveButton.addEventListener("click", (event) => {
        console.log("Fired - Clicked missingInfoSaveButton");

        let temp = document.getElementById("missing_info_header").innerHTML;
        let tempIndex = temp.indexOf("#");
        let curWrNum = temp.substring(tempIndex + 1, tempIndex + 9)
       
        for (var i = 0; i < allWrList.length; i++) {
            
            if (allWrList[i].workRequestNumber == curWrNum) {
                if (temp.includes("CRD")) {
                    console.log("setting new crd");
                    allWrList[i].crd = missingInfoDayOfWeekDate.value;
                } else if (temp.includes("RCD")) {
                    console.log("setting new rcd");
                    allWrList[i].rcd = missingInfoDayOfWeekDate.value;
                }
                
            }
        }
        injectHTMLAllWrTabDisplay(allWrList, 0, userColors, toDoMasterList);
        missingInfoContainer.classList.add("hidden");
        assessGeneralStatusChange(i% rowsOnPage);
    })

    /* Add To-Do Pop Up */
    function clearAddToDoPopUpTabs() {
        console.log("Entered - clearAddToDoPopUpTabs()");

        document.getElementById("add_to_do_pop_up_tab_coordinator_active").classList.add("hidden");
        document.getElementById("add_to_do_pop_up_tab_waiting_active").classList.add("hidden");
        document.getElementById("add_to_do_pop_up_tab_on_return_to_office_active").classList.add("hidden");
        document.getElementById("add_to_do_pop_up_tab_general_active").classList.add("hidden");
        document.getElementById("add_to_do_pop_up_tab_mentor_active").classList.add("hidden");

        document.getElementById("add_to_do_pop_up_tab_coordinator").classList.remove("hidden");
        document.getElementById("add_to_do_pop_up_tab_waiting").classList.remove("hidden");
        document.getElementById("add_to_do_pop_up_tab_on_return_to_office").classList.remove("hidden");
        document.getElementById("add_to_do_pop_up_tab_general").classList.remove("hidden");
        document.getElementById("add_to_do_pop_up_tab_mentor").classList.remove("hidden");

    }
        /* Date + Container*/
    addToDoPopUpDayOfWeekDate.addEventListener("mouseout", (event) => {
        console.log("Fired - mouseout addToDoPopUpDayOfWeekDate");

        const temp = addToDoPopUpDayOfWeekDate.value;
        const year = temp.substring(0, 4);
        const month = temp.substring(5, 7);
        const day = temp.substring(8, 10);
        const d = new Date();

        d.setFullYear(year);
        d.setMonth(month - 1);
        d.setDate(day);

        const curDay = d.getDay();
        setDay("add_to_do_pop_up", curDay);
        
        const tempStr = year + "-" + month + "-" + day;
        setFromToDates("add_to_do_pop_up", tempStr);
    })
    addToDoPopUpContainer.addEventListener("click" , (event) => {
        console.log("Fired - Clicked addToDoPopUpContainer");

        const tempLeftArrow = document.createElement("tempLeftArrow");
        tempLeftArrow.innerHTML = "&#8592";
        const tempRightArrow = document.createElement("tempRightArrow");
        tempRightArrow.innerHTML = "&#8594";
        const tempResetArrow = document.createElement("tempResetArrow");
        tempResetArrow.innerHTML = "&#8634";

        if (event.target.innerHTML == "Su" && !event.target.classList.contains("activeTab")) {
            clearDays("add_to_do_pop_up");

            document.getElementById("add_to_do_pop_up_tab_day_of_week_box_sunday").classList.add("hidden");
            document.getElementById("add_to_do_pop_up_tab_day_of_week_box_sunday_active").classList.remove("hidden");
            assessDayOfWeekChange("add_to_do_pop_up", 0);
        } else if (event.target.innerHTML == "M" && !event.target.classList.contains("activeTab")) {
            clearDays("add_to_do_pop_up");

            document.getElementById("add_to_do_pop_up_tab_day_of_week_box_monday").classList.add("hidden");
            document.getElementById("add_to_do_pop_up_tab_day_of_week_box_monday_active").classList.remove("hidden");
            assessDayOfWeekChange("add_to_do_pop_up", 1);
        } else if (event.target.innerHTML == "Tu" && !event.target.classList.contains("activeTab")) {
            clearDays("add_to_do_pop_up");

            document.getElementById("add_to_do_pop_up_tab_day_of_week_box_tuesday").classList.add("hidden");
            document.getElementById("add_to_do_pop_up_tab_day_of_week_box_tuesday_active").classList.remove("hidden");
            assessDayOfWeekChange("add_to_do_pop_up", 2);
        } else if (event.target.innerHTML == "W" && !event.target.classList.contains("activeTab")) {
            clearDays("add_to_do_pop_up");

            document.getElementById("add_to_do_pop_up_tab_day_of_week_box_wednesday").classList.add("hidden");
            document.getElementById("add_to_do_pop_up_tab_day_of_week_box_wednesday_active").classList.remove("hidden");
            assessDayOfWeekChange("add_to_do_pop_up", 3);
        } else if (event.target.innerHTML == "Th" && !event.target.classList.contains("activeTab")) {
            clearDays("add_to_do_pop_up");

            document.getElementById("add_to_do_pop_up_tab_day_of_week_box_thursday").classList.add("hidden");
            document.getElementById("add_to_do_pop_up_tab_day_of_week_box_thursday_active").classList.remove("hidden");
            assessDayOfWeekChange("add_to_do_pop_up", 4);
        } else if (event.target.innerHTML == "F" && !event.target.classList.contains("activeTab")) {
            clearDays("add_to_do_pop_up");

            document.getElementById("add_to_do_pop_up_tab_day_of_week_box_friday").classList.add("hidden");
            document.getElementById("add_to_do_pop_up_tab_day_of_week_box_friday_active").classList.remove("hidden");
            assessDayOfWeekChange("add_to_do_pop_up", 5);
        } else if (event.target.innerHTML == "Sa" && !event.target.classList.contains("activeTab")) {
            clearDays("add_to_do_pop_up");

            document.getElementById("add_to_do_pop_up_tab_day_of_week_box_saturday").classList.add("hidden");
            document.getElementById("add_to_do_pop_up_tab_day_of_week_box_saturday_active").classList.remove("hidden");
            assessDayOfWeekChange("add_to_do_pop_up", 6);
        } else if (event.target.innerHTML == tempLeftArrow.innerHTML) { // left arrow
            let curDate = addToDoPopUpDayOfWeekDate.value;
            const year = curDate.substring(0, 4);
            const month = curDate.substring(5, 7);
            const day = curDate.substring(8, 10);
            addToDoPopUpDayOfWeekDate.value = subtractDays(year, month, day, 7);
            
            const temp = addToDoPopUpDayOfWeekDate.value;
            const year2 = temp.substring(0, 4);
            const month2 = temp.substring(5, 7);
            const day2 = temp.substring(8, 10);
            const d = new Date(temp);
        
            d.setFullYear(year2);
            d.setMonth(month2 - 1);
            d.setDate(day2);
        
            const curDay = d.getDay();
            setDay("add_to_do_pop_up", curDay);
                
            const tempStr = year + "-" + month + "-" + day;
            setFromToDates("add_to_do_pop_up", tempStr);
            
        } else if (event.target.innerHTML == tempRightArrow.innerHTML) { // right arrow
            let curDate = addToDoPopUpDayOfWeekDate.value;
            const year = curDate.substring(0, 4);
            const month = curDate.substring(5, 7);
            const day = curDate.substring(8, 10);
            addToDoPopUpDayOfWeekDate.value = addDays(year, month, day, 7);


            const temp = addToDoPopUpDayOfWeekDate.value;
            const year2 = temp.substring(0, 4);
            const month2 = temp.substring(5, 7);
            const day2 = temp.substring(8, 10);
            const d = new Date(temp);
        
            d.setFullYear(year2);
            d.setMonth(month2 - 1);
            d.setDate(day2);
        
            const curDay = d.getDay();
            setDay("add_to_do_pop_up", curDay);
                
            const tempStr = year + "-" + month + "-" + day;
            setFromToDates("add_to_do_pop_up", tempStr);        
        } else if (event.target.innerHTML == tempResetArrow.innerHTML) { // reset arrow
            const d = new Date();
            const year = d.getFullYear();
            let month = d.getMonth() + 1;
            if (month < 10) {
                month = "0" + month;
            }
            let day = d.getDate();
            if (day < 10) {
                day = "0" + day;
            }
            addToDoPopUpDayOfWeekDate.value = year + "-" + month + "-" + day;

            setDay("add_to_do_pop_up", d.getDay());
            setFromToDates("add_to_do_pop_up", (year + "-" + month + "-" + day));
        } if (event.target.innerHTML == "Coordinator") {
            clearAddToDoPopUpTabs();

            document.getElementById("add_to_do_pop_up_tab_coordinator").classList.add("hidden");
            document.getElementById("add_to_do_pop_up_tab_coordinator_active").classList.remove("hidden");
        } else if (event.target.innerHTML == "Waiting") {
            clearAddToDoPopUpTabs();

            document.getElementById("add_to_do_pop_up_tab_waiting").classList.add("hidden");
            document.getElementById("add_to_do_pop_up_tab_waiting_active").classList.remove("hidden");
        } else if (event.target.innerHTML == "On Return" || event.target.innerHTML == "To Office") {
            clearAddToDoPopUpTabs();

            document.getElementById("add_to_do_pop_up_tab_on_return_to_office").classList.add("hidden");
            document.getElementById("add_to_do_pop_up_tab_on_return_to_office_active").classList.remove("hidden");
        } else if (event.target.innerHTML == "General") {
            clearAddToDoPopUpTabs();

            document.getElementById("add_to_do_pop_up_tab_general").classList.add("hidden");
            document.getElementById("add_to_do_pop_up_tab_general_active").classList.remove("hidden");
        } else if (event.target.innerHTML == "Mentor") {
            clearAddToDoPopUpTabs();

            document.getElementById("add_to_do_pop_up_tab_mentor").classList.add("hidden");
            document.getElementById("add_to_do_pop_up_tab_mentor_active").classList.remove("hidden");
        } 
    })
        /* Buttons */
    addToDoPopUpXButton.addEventListener("click", (event) => {
        console.log("Fired - Clicked addtoDoPopUpXButton");

        console.log("Code calling click");
        allWrTab.click();
        switchAddToDoPopUpButtons("");
        addToDoPopUpTextfield.value = "Enter Note (Optional)"
        addToDoPopUpContainer.classList.add("hidden");
    })
    addToDoPopUpButtonNo.addEventListener("click", (event) => {
        console.log("Fired - Clicked addToDoPopUpButtonNo");

        console.log("Code calling click");
        allWrTab.click();
        switchAddToDoPopUpButtons("");
        addToDoPopUpTextfield.value = "Enter Note (Optional)"
        addToDoPopUpContainer.classList.add("hidden");
    })
    addToDoPopUpButtonYes.addEventListener("click", (event) => {
        console.log("Fired - Clicked addToDoPopUpButtonYes");
        const h = new Haptix(promptDuration);

        const d = new Date();
        let year = d.getFullYear();
        let month = d.getMonth() + 1;
        if (month < 10) {
            month = "0" + month;
        }
        let day = d.getDate();
        if (day < 10) {
            day = "0" + day;
        }
        const today = year + "-" + month + "-" + day;

        let tempIndex = addToDoPopUpHeader.innerHTML.indexOf("#");
        let str = addToDoPopUpHeader.innerHTML.substring(tempIndex + 2, tempIndex + 10);

        let tempWr = [];
        for (var i = 0; i < allWrList.length; i++) {
            if (allWrList[i].workRequestNumber == str) {
                tempWr = allWrList[i];
            }
        }

        let addressStr = ""
        if (tempWr != []) {
            addressStr = tempWr.houseNumber + " " + tempWr.streetName + ", " + tempWr.countyCity + " " + tempWr.zipCode;
            if (str != undefined) {
                addressStr += " - " + str;
            }
        } else {
            addressStr = undefined;
        }

        let tab = "";

        if (document.getElementById("add_to_do_pop_up_tab_coordinator").classList.contains("hidden")) {
            tab = "Coordinator";
        } else if (document.getElementById("add_to_do_pop_up_tab_waiting").classList.contains("hidden")) {
            tab = "Waiting";
        } else if (document.getElementById("add_to_do_pop_up_tab_on_return_to_office").classList.contains("hidden")) {
            tab = "On Return To Office";
        } else if (document.getElementById("add_to_do_pop_up_tab_general").classList.contains("hidden")) {
            tab = "General";
        } else if (document.getElementById("add_to_do_pop_up_tab_mentor").classList.contains("hidden")) {
            tab = "Mentor";
        }

        let notes = []
        if (addToDoPopUpTextfield.value != "Enter Note (Optional)") {
            notes.push(`<li>${addToDoPopUpTextfield.value}</li>`);
        }
        let temp = [notes];
        
        if (notes.length == 0) {
            temp = [];
        }

        if (addToDoPopUpHeader.innerHTML.includes("Site Visit")) {
            const newToDo = new ToDoObject(toDoMasterList.getCount(), tab, addToDoPopUpDayOfWeekDate.value, "Site Visit", today, 0, temp, str, addressStr);
            toDoMasterList.add(newToDo);
            h.displayToDoAddedFromPopUp("Site Visit", str);
        } else if (addToDoPopUpHeader.innerHTML.includes("SVC Calcs + Coding")) {
            const newToDo = new ToDoObject(toDoMasterList.getCount(), tab, addToDoPopUpDayOfWeekDate.value, "Service Calc + Coding", today, 0, temp, str, addressStr);
            toDoMasterList.add(newToDo);
            h.displayToDoAddedFromPopUp("Svc Calcs + Coding", str);
        } else if (addToDoPopUpHeader.innerHTML.includes("NJUNS")) {
            const newToDo = new ToDoObject(toDoMasterList.getCount(), tab, addToDoPopUpDayOfWeekDate.value, "Check/ Apply - NJUNS", today, 0, temp, str, addressStr);
            toDoMasterList.add(newToDo);
            h.displayToDoAddedFromPopUp("Check/ Apply - NJUNS", str);
        } else if (addToDoPopUpHeader.innerHTML.includes("Permit")) {
            const newToDo = new ToDoObject(toDoMasterList.getCount(), tab, addToDoPopUpDayOfWeekDate.value, "Check/ Apply - Permit", today, 0, temp, str, addressStr);
            toDoMasterList.add(newToDo);
            h.displayToDoAddedFromPopUp("Check/ Apply - Permit", str);
        } else if (addToDoPopUpHeader.innerHTML.includes("Permit") && addToDoPopUpHeader.innerHTML.includes("update")) {
            const newToDo = new ToDoObject(toDoMasterList.getCount(), tab, addToDoPopUpDayOfWeekDate.value, "Check/ Apply - Permit", today, 0, temp, str, addressStr);
            toDoMasterList.add(newToDo);
            h.displayToDoUpdatedFromPopUp("Check/ Apply - Permit", str);
        } else if (addToDoPopUpHeader.innerHTML.includes("Easement")) {
            const newToDo = new ToDoObject(toDoMasterList.getCount(), tab, addToDoPopUpDayOfWeekDate.value, "Check/ Apply - Easement", today, 0, temp, str, addressStr);
            toDoMasterList.add(newToDo);
            h.displayToDoAddedFromPopUp("Check/ Apply - Easement", str);
        } else if (addToDoPopUpHeader.innerHTML.includes("Design")) {
            const newToDo = new ToDoObject(toDoMasterList.getCount(), tab, addToDoPopUpDayOfWeekDate.value, "Design", today, 0, temp, str, addressStr);
            toDoMasterList.add(newToDo);
            h.displayToDoAddedFromPopUp("Design", str);
        } else if (addToDoPopUpHeader.innerHTML.includes("Revisions")) {
            const newToDo = new ToDoObject(toDoMasterList.getCount(), tab, addToDoPopUpDayOfWeekDate.value, "Revisions", today, 0, temp, str, addressStr);
            toDoMasterList.add(newToDo);
            h.displayToDoAddedFromPopUp("Revisions", str);
        } else if (addToDoPopUpTab.innerHTML.includes("Waiting - LL/SP/Etc.")) { // Waiting LL/Sp
            const newToDo = new ToDoObject(toDoMasterList.getCount(), tab, addToDoPopUpDayOfWeekDate.value, "General", today, 0, temp, str, addressStr);
            toDoMasterList.add(newToDo);
            h.displayToDoAddedFromPopUp("General (Waiting Tab)", str);
        } else if (addToDoPopUpTab.innerHTML.includes("Waiting")) {
            const newToDo = new ToDoObject(toDoMasterList.getCount(), tab, addToDoPopUpDayOfWeekDate.value, "General", today, 0, temp, str, addressStr);
            toDoMasterList.add(newToDo);
            h.displayToDoAddedFromPopUp("General (Waiting Tab)", str);
        } 

        resetAddToDoPopUpDate();
        console.log("Calling Click with Code");
        allWrTab.click();
        addToDoPopUpContainer.classList.add("hidden");
    })
    addToDoPopUpButtonNeither.addEventListener("click", (event) => {
        console.log("Fired - Clicked addToDoPopUpButtonNeither");

        switchAddToDoPopUpButtons("");
        addToDoPopUpTextfield.value = "Enter Note (Optional)"
        addToDoPopUpContainer.classList.add("hidden");
    })
    addToDoPopUpButtonNew.addEventListener("click", (event) => {
        console.log("Fired - Clicked addToDoPopUpButtonNew");

        console.log("Clicking from code");
        addToDoPopUpButtonYes.click();
    })
    addToDoPopUpButtonMove.addEventListener("click", (event) => {
        console.log("Fired - Clicked addToDoPopUpButtonMove");
        const h = new Haptix(promptDuration);

        /* Getting Work Request Number of current To-Do */
        let tempIndex = addToDoPopUpHeader.innerHTML.indexOf("#");
        let curWrNum = addToDoPopUpHeader.innerHTML.substring(tempIndex + 2, tempIndex + 10);

        /* Getting Type of current To-Do */
        tempIndex = addToDoPopUpHeader.innerText.indexOf("\""); // gets index of left paren
       
        let tempNextIndex = addToDoPopUpHeader.innerText.substring(tempIndex + 1).indexOf("\""); // gets index of right paren

        const curType = addToDoPopUpHeader.innerText.substring(tempIndex + 1, tempIndex + tempNextIndex + 1);
        
        /* Getting Tab */
        let tab = "";

        if (document.getElementById("add_to_do_pop_up_tab_coordinator").classList.contains("hidden")) {
            tab = "Coordinator";
        } else if (document.getElementById("add_to_do_pop_up_tab_waiting").classList.contains("hidden")) {
            tab = "Waiting";
        } else if (document.getElementById("add_to_do_pop_up_tab_on_return_to_office").classList.contains("hidden")) {
            tab = "On Return To Office";
        } else if (document.getElementById("add_to_do_pop_up_tab_general").classList.contains("hidden")) {
            tab = "General";
        } else if (document.getElementById("add_to_do_pop_up_tab_mentor").classList.contains("hidden")) {
            tab = "Mentor";
        }

        /* Getting toDoId */
        tempIndex = addToDoPopUpTab.innerText.indexOf(":"); // gets left side of toDoId
        tempNextIndex = addToDoPopUpTab.innerText.substring(tempIndex).indexOf(")"); //gets right side of toDoId
        const curToDoId = addToDoPopUpTab.innerText.substring(tempIndex + 1, tempIndex + tempNextIndex);

        const curToDo = toDoMasterList.getToDo(curToDoId);

        /* Removing Existing To-Do */
        toDoMasterList.removeById(curToDoId);

        /* Creating New To-Do with same ID and info except for changes made by user */
        const newToDo = new ToDoObject(curToDoId, tab, addToDoPopUpDayOfWeekDate.value, curType, curToDo[1].creationDate, curToDo[1].completed,
            curToDo[1].notes, curToDo[1].workRequestNumber, curToDo[1].addressStr);

        toDoMasterList.add(newToDo);

        h.displayToDoUpdatedFromPopUp(curType, newToDo.workRequestNumber);
        
        /* Reseting Display */
        resetAddToDoPopUpDate();
        console.log("Clicking with Code");
        allWrTab.click();
        switchAddToDoPopUpButtons("");
        addToDoPopUpContainer.classList.add("hidden");
    })
        /* Textfield */
    addToDoPopUpTextfield.addEventListener("click", (event) => {
        console.log("Fired - Clicked addToDoPopUpTextfield");

        if (event.target.value != null) {
            event.target.select();
        } 
    })
    addToDoPopUpTextfield.addEventListener("mouseout", (event) => {
        console.log("Fired - mouseout addToDoPopUpTextfield");

        
        if (event.target.value.length == 0) {

            if (addToDoPopUpTab.innerText.includes("Customer")) {
                event.target.value = "Waiting on Customer";
            } else if (addToDoPopUpTab.innerText.includes("LL/SP/Etc.")) {
                event.target.value = "Waiting on Load Letter/ Site Plan/ Etc.";
            } else {
                event.target.value = "Enter Note (Optional)";
            }

        } 
    })
    addToDoPopUpTextfield.addEventListener("input", (event) => {
        console.log("Fired - Input addToDoPopUpTextfield");

        if (event.target.value.length == 1) {
            event.target.value = event.target.value.toUpperCase();
        } 
    })

    /* Permit Status Warning Pop Up */
    function clearPermitStatusWarningPopUpTabs() {
        console.log("Entered - clearPermitStatusWarningPopUpTabs()");

        document.getElementById("permit_status_warning_pop_up_tab_coordinator_active").classList.add("hidden");
        document.getElementById("permit_status_warning_pop_up_tab_waiting_active").classList.add("hidden");
        document.getElementById("permit_status_warning_pop_up_tab_on_return_to_office_active").classList.add("hidden");
        document.getElementById("permit_status_warning_pop_up_tab_general_active").classList.add("hidden");
        document.getElementById("permit_status_warning_pop_up_tab_mentor_active").classList.add("hidden");

        document.getElementById("permit_status_warning_pop_up_tab_coordinator").classList.remove("hidden");
        document.getElementById("permit_status_warning_pop_up_tab_waiting").classList.remove("hidden");
        document.getElementById("permit_status_warning_pop_up_tab_on_return_to_office").classList.remove("hidden");
        document.getElementById("permit_status_warning_pop_up_tab_general").classList.remove("hidden");
        document.getElementById("permit_status_warning_pop_up_tab_mentor").classList.remove("hidden");
    }
        /* Date + Container */
    permitStatusWarningPopUpDayOfWeekDate.addEventListener("mouseout", (event) => {
        console.log("Fired - mouseout permitStatusWarningPopUpDayOfWeekDate");

        const temp = permitStatusWarningPopUpDayOfWeekDate.value;
        const year = temp.substring(0, 4);
        const month = temp.substring(5, 7);
        const day = temp.substring(8, 10);
        const d = new Date();

        d.setFullYear(year);
        d.setMonth(month - 1);
        d.setDate(day);

        const curDay = d.getDay();
        setDay("permit_status_warning_pop_up", curDay);
        
        const tempStr = year + "-" + month + "-" + day;
        setFromToDates("permit_status_warning_pop_up", tempStr);
    })
    permitStatusWarningPopUpContainer.addEventListener("click", (event) => {
        console.log("Fired - Clicked permitStatusWarningPopUpContainer");

        const tempLeftArrow = document.createElement("tempLeftArrow");
        tempLeftArrow.innerHTML = "&#8592";
        const tempRightArrow = document.createElement("tempRightArrow");
        tempRightArrow.innerHTML = "&#8594";
        const tempResetArrow = document.createElement("tempResetArrow");
        tempResetArrow.innerHTML = "&#8634";

        if (event.target.innerHTML == "Su" && !event.target.classList.contains("activeTab")) {
            clearDays("permit_status_warning_pop_up");

            document.getElementById("permit_status_warning_pop_up_tab_day_of_week_box_sunday").classList.add("hidden");
            document.getElementById("permit_status_warning_pop_up_tab_day_of_week_box_sunday_active").classList.remove("hidden");
            assessDayOfWeekChange("permit_status_warning_pop_up", 0);
        } else if (event.target.innerHTML == "M" && !event.target.classList.contains("activeTab")) {
            clearDays("permit_status_warning_pop_up");

            document.getElementById("permit_status_warning_pop_up_tab_day_of_week_box_monday").classList.add("hidden");
            document.getElementById("permit_status_warning_pop_up_tab_day_of_week_box_monday_active").classList.remove("hidden");
            assessDayOfWeekChange("permit_status_warning_pop_up", 1);
        } else if (event.target.innerHTML == "Tu" && !event.target.classList.contains("activeTab")) {
            clearDays("permit_status_warning_pop_up");

            document.getElementById("permit_status_warning_pop_up_tab_day_of_week_box_tuesday").classList.add("hidden");
            document.getElementById("permit_status_warning_pop_up_tab_day_of_week_box_tuesday_active").classList.remove("hidden");
            assessDayOfWeekChange("permit_status_warning_pop_up", 2);
        } else if (event.target.innerHTML == "W" && !event.target.classList.contains("activeTab")) {
            clearDays("permit_status_warning_pop_up");

            document.getElementById("permit_status_warning_pop_up_tab_day_of_week_box_wednesday").classList.add("hidden");
            document.getElementById("permit_status_warning_pop_up_tab_day_of_week_box_wednesday_active").classList.remove("hidden");
            assessDayOfWeekChange("permit_status_warning_pop_up", 3);
        } else if (event.target.innerHTML == "Th" && !event.target.classList.contains("activeTab")) {
            clearDays("permit_status_warning_pop_up");

            document.getElementById("permit_status_warning_pop_up_tab_day_of_week_box_thursday").classList.add("hidden");
            document.getElementById("permit_status_warning_pop_up_tab_day_of_week_box_thursday_active").classList.remove("hidden");
            assessDayOfWeekChange("permit_status_warning_pop_up", 4);
        } else if (event.target.innerHTML == "F" && !event.target.classList.contains("activeTab")) {
            clearDays("permit_status_warning_pop_up");

            document.getElementById("permit_status_warning_pop_up_tab_day_of_week_box_friday").classList.add("hidden");
            document.getElementById("permit_status_warning_pop_up_tab_day_of_week_box_friday_active").classList.remove("hidden");
            assessDayOfWeekChange("permit_status_warning_pop_up", 5);
        } else if (event.target.innerHTML == "Sa" && !event.target.classList.contains("activeTab")) {
            clearDays("permit_status_warning_pop_up");

            document.getElementById("permit_status_warning_pop_up_tab_day_of_week_box_saturday").classList.add("hidden");
            document.getElementById("permit_status_warning_pop_up_tab_day_of_week_box_saturday_active").classList.remove("hidden");
            assessDayOfWeekChange("permit_status_warning_pop_up", 6);
        } else if (event.target.innerHTML == tempLeftArrow.innerHTML) { // left arrow
            let curDate = permitStatusWarningPopUpDayOfWeekDate.value;
            const year = curDate.substring(0, 4);
            const month = curDate.substring(5, 7);
            const day = curDate.substring(8, 10);
            permitStatusWarningPopUpDayOfWeekDate.value = subtractDays(year, month, day, 7);
            
            const temp = permitStatusWarningPopUpDayOfWeekDate.value;
            const year2 = temp.substring(0, 4);
            const month2 = temp.substring(5, 7);
            const day2 = temp.substring(8, 10);
            const d = new Date(temp);
        
            d.setFullYear(year2);
            d.setMonth(month2 - 1);
            d.setDate(day2);
        
            const curDay = d.getDay();
            setDay("permit_status_warning_pop_up", curDay);
                
            const tempStr = year + "-" + month + "-" + day;
            setFromToDates("permit_status_warning_pop_up", tempStr);
            
        } else if (event.target.innerHTML == tempRightArrow.innerHTML) { // right arrow
            let curDate = permitStatusWarningPopUpDayOfWeekDate.value;
            const year = curDate.substring(0, 4);
            const month = curDate.substring(5, 7);
            const day = curDate.substring(8, 10);
            permitStatusWarningPopUpDayOfWeekDate.value = addDays(year, month, day, 7);


            const temp = permitStatusWarningPopUpDayOfWeekDate.value;
            const year2 = temp.substring(0, 4);
            const month2 = temp.substring(5, 7);
            const day2 = temp.substring(8, 10);
            const d = new Date(temp);
        
            d.setFullYear(year2);
            d.setMonth(month2 - 1);
            d.setDate(day2);
        
            const curDay = d.getDay();
            setDay("permit_status_warning_pop_up", curDay);
                
            const tempStr = year + "-" + month + "-" + day;
            setFromToDates("permit_status_warning_pop_up", tempStr);        
        } else if (event.target.innerHTML == tempResetArrow.innerHTML) { // reset arrow
            const d = new Date();
            const year = d.getFullYear();
            let month = d.getMonth() + 1;
            if (month < 10) {
                month = "0" + month;
            }
            let day = d.getDate();
            if (day < 10) {
                day = "0" + day;
            }
            permitStatusWarningPopUpDayOfWeekDate.value = year + "-" + month + "-" + day;

            setDay("permit_status_warning_pop_up", d.getDay());
            setFromToDates("permit_status_warning_pop_up", (year + "-" + month + "-" + day));
        } 
        
        if (event.target.innerHTML == "Coordinator") {
            clearPermitStatusWarningPopUpTabs();

            document.getElementById("permit_status_warning_pop_up_tab_coordinator").classList.add("hidden");
            document.getElementById("permit_status_warning_pop_up_tab_coordinator_active").classList.remove("hidden");
        } else if (event.target.innerHTML == "Waiting") {
            clearPermitStatusWarningPopUpTabs();

            document.getElementById("permit_status_warning_pop_up_tab_waiting").classList.add("hidden");
            document.getElementById("permit_status_warning_pop_up_tab_waiting_active").classList.remove("hidden");
        } else if (event.target.innerHTML == "On Return" || event.target.innerHTML == "To Office") {
            clearPermitStatusWarningPopUpTabs();

            document.getElementById("permit_status_warning_pop_up_tab_on_return_to_office").classList.add("hidden");
            document.getElementById("permit_status_warning_pop_up_tab_on_return_to_office_active").classList.remove("hidden");
        } else if (event.target.innerHTML == "General") {
            clearPermitStatusWarningPopUpTabs();

            document.getElementById("permit_status_warning_pop_up_tab_general").classList.add("hidden");
            document.getElementById("permit_status_warning_pop_up_tab_general_active").classList.remove("hidden");
        } else if (event.target.innerHTML == "Mentor") {
            clearPermitStatusWarningPopUpTabs();

            document.getElementById("permit_status_warning_pop_up_tab_mentor").classList.add("hidden");
            document.getElementById("permit_status_warning_pop_up_tab_mentor_active").classList.remove("hidden");
        } 
    })

        /* Buttons */
    permitStatusWarningPopUpXButton.addEventListener("click", (event) => {
        console.log("Fired - Clicked permitStatusWarningPopUpXButton");

        permitStatusWarningPopUpTextfield.value = "Enter Note (Optional)"
        permitStatusWarningPopUpContainer.classList.add("hidden");
    })
    permitStatusWarningPopUpButtonNo.addEventListener("click", (event) => {
        console.log("Fired - Clicked permitStatusWarningPopUpButtonNo");

        permitStatusWarningPopUpTextfield.value = "Enter Note (Optional)"
        permitStatusWarningPopUpContainer.classList.add("hidden");
    })
    permitStatusWarningPopUpButtonYes.addEventListener("click", (event) => {
        console.log("Fired - Clicked permitStatusWarningPopUpButtonYes");
        const h = new Haptix(promptDuration);

        const d = new Date();
        let year = d.getFullYear();
        let month = d.getMonth() + 1;
        if (month < 10) {
            month = "0" + month;
        }
        let day = d.getDate();
        if (day < 10) {
            day = "0" + day;
        }
        const today = year + "-" + month + "-" + day;

        let tempIndex = permitStatusWarningPopUpHeader.innerHTML.indexOf("#");
        let str = permitStatusWarningPopUpHeader.innerHTML.substring(tempIndex + 2, tempIndex + 10);

        let tempWr = [];
        for (var i = 0; i < allWrList.length; i++) {
            if (allWrList[i].workRequestNumber == str) {
                tempWr = allWrList[i];
            }
        }

        let addressStr = ""
        if (tempWr != []) {
            addressStr = tempWr.houseNumber + " " + tempWr.streetName + ", " + tempWr.countyCity + " " + tempWr.zipCode;
            if (str != undefined) {
                addressStr += " - " + str;
            }
        } else {
            addressStr = undefined;
        }

        let tab = "";

        if (document.getElementById("permit_status_warning_pop_up_tab_coordinator").classList.contains("hidden")) {
            tab = "Coordinator";
        } else if (document.getElementById("permit_status_warning_pop_up_tab_waiting").classList.contains("hidden")) {
            tab = "Waiting";
        } else if (document.getElementById("permit_status_warning_pop_up_tab_on_return_to_office").classList.contains("hidden")) {
            tab = "On Return To Office";
        } else if (document.getElementById("permit_status_warning_pop_up_tab_general").classList.contains("hidden")) {
            tab = "General";
        } else if (document.getElementById("permit_status_warning_pop_up_tab_mentor").classList.contains("hidden")) {
            tab = "Mentor";
        }

        let notes = []
        if (permitStatusWarningPopUpTextfield.value != "Enter Note (Optional)") {
            notes.push(`<li>${permitStatusWarningPopUpTextfield.value}</li>`);
        }
     
        const newToDo = new ToDoObject(toDoMasterList.getCount(), tab, permitStatusWarningPopUpDayOfWeekDate.value, "Check/ Apply - Permit", today, 0, [notes], str, addressStr);
        toDoMasterList.add(newToDo);
        h.displayToDoAddedFromPopUp("Check/ Apply - Permit", str);

        permitStatusWarningPopUpTextfield.value = "Enter Note (Optional)"
        permitStatusWarningPopUpContainer.classList.add("hidden");
    })

    /* Textfield */
    permitStatusWarningPopUpTextfield.addEventListener("click", (event) => {
        console.log("Fired - Clicked permitStatusWarningPopUpTextfield");

        if (event.target.value != null) {
            event.target.select();
        } 
    })
    permitStatusWarningPopUpTextfield.addEventListener("mouseout", (event) => {
        console.log("Fired - mouseout permitStatusWarningPopUpTextfield");

        if (event.target.value.length == 0) {
            event.target.value = "Enter Note (Optional)";
        } 
    })
    permitStatusWarningPopUpTextfield.addEventListener("input", (event) => {
        console.log("Fired - input permitStatusWarningPopUpTextfield");

        if (event.target.value.length == 1) {
            event.target.value = event.target.value.toUpperCase();
        } 
    })

    /* Easement Status Warning Pop Up */
    function clearEasementStatusWarningPopUpTabs() {
        console.log("Entered - clearEasementStatusWarningPopUpTabs()");

        document.getElementById("easement_status_warning_pop_up_tab_coordinator_active").classList.add("hidden");
        document.getElementById("easement_status_warning_pop_up_tab_waiting_active").classList.add("hidden");
        document.getElementById("easement_status_warning_pop_up_tab_on_return_to_office_active").classList.add("hidden");
        document.getElementById("easement_status_warning_pop_up_tab_general_active").classList.add("hidden");
        document.getElementById("easement_status_warning_pop_up_tab_mentor_active").classList.add("hidden");

        document.getElementById("easement_status_warning_pop_up_tab_coordinator").classList.remove("hidden");
        document.getElementById("easement_status_warning_pop_up_tab_waiting").classList.remove("hidden");
        document.getElementById("easement_status_warning_pop_up_tab_on_return_to_office").classList.remove("hidden");
        document.getElementById("easement_status_warning_pop_up_tab_general").classList.remove("hidden");
        document.getElementById("easement_status_warning_pop_up_tab_mentor").classList.remove("hidden");
    } 
        /* Date + Container */
    easementStatusWarningPopUpDayOfWeekDate.addEventListener("mouseout", (event) => {
        console.log("Fired - mouseout easementStatusWarningPopUpDayOfWeekDate");

        const temp = easementStatusWarningPopUpDayOfWeekDate.value;
        const year = temp.substring(0, 4);
        const month = temp.substring(5, 7);
        const day = temp.substring(8, 10);
        const d = new Date();

        d.setFullYear(year);
        d.setMonth(month - 1);
        d.setDate(day);

        const curDay = d.getDay();
        setDay("easement_status_warning_pop_up", curDay);
        
        const tempStr = year + "-" + month + "-" + day;
        setFromToDates("easement_status_warning_pop_up", tempStr);
    })
    easementStatusWarningPopUpContainer.addEventListener("click", (event) => {
        console.log("Fired - Clicked easementStatusWarningPopUpContainer");

        const tempLeftArrow = document.createElement("tempLeftArrow");
        tempLeftArrow.innerHTML = "&#8592";
        const tempRightArrow = document.createElement("tempRightArrow");
        tempRightArrow.innerHTML = "&#8594";
        const tempResetArrow = document.createElement("tempResetArrow");
        tempResetArrow.innerHTML = "&#8634";

        if (event.target.innerHTML == "Su" && !event.target.classList.contains("activeTab")) {
            clearDays("easement_status_warning_pop_up");

            document.getElementById("easement_status_warning_pop_up_tab_day_of_week_box_sunday").classList.add("hidden");
            document.getElementById("easement_status_warning_pop_up_tab_day_of_week_box_sunday_active").classList.remove("hidden");
            assessDayOfWeekChange("easement_status_warning_pop_up", 0);
        } else if (event.target.innerHTML == "M" && !event.target.classList.contains("activeTab")) {
            clearDays("easement_status_warning_pop_up");

            document.getElementById("easement_status_warning_pop_up_tab_day_of_week_box_monday").classList.add("hidden");
            document.getElementById("easement_status_warning_pop_up_tab_day_of_week_box_monday_active").classList.remove("hidden");
            assessDayOfWeekChange("easement_status_warning_pop_up", 1);
        } else if (event.target.innerHTML == "Tu" && !event.target.classList.contains("activeTab")) {
            clearDays("easement_status_warning_pop_up");

            document.getElementById("easement_status_warning_pop_up_tab_day_of_week_box_tuesday").classList.add("hidden");
            document.getElementById("easement_status_warning_pop_up_tab_day_of_week_box_tuesday_active").classList.remove("hidden");
            assessDayOfWeekChange("easement_status_warning_pop_up", 2);
        } else if (event.target.innerHTML == "W" && !event.target.classList.contains("activeTab")) {
            clearDays("easement_status_warning_pop_up");

            document.getElementById("easement_status_warning_pop_up_tab_day_of_week_box_wednesday").classList.add("hidden");
            document.getElementById("easement_status_warning_pop_up_tab_day_of_week_box_wednesday_active").classList.remove("hidden");
            assessDayOfWeekChange("easement_status_warning_pop_up", 3);
        } else if (event.target.innerHTML == "Th" && !event.target.classList.contains("activeTab")) {
            clearDays("easement_status_warning_pop_up");

            document.getElementById("easement_status_warning_pop_up_tab_day_of_week_box_thursday").classList.add("hidden");
            document.getElementById("easement_status_warning_pop_up_tab_day_of_week_box_thursday_active").classList.remove("hidden");
            assessDayOfWeekChange("easement_status_warning_pop_up", 4);
        } else if (event.target.innerHTML == "F" && !event.target.classList.contains("activeTab")) {
            clearDays("easement_status_warning_pop_up");

            document.getElementById("easement_status_warning_pop_up_tab_day_of_week_box_friday").classList.add("hidden");
            document.getElementById("easement_status_warning_pop_up_tab_day_of_week_box_friday_active").classList.remove("hidden");
            assessDayOfWeekChange("easement_status_warning_pop_up", 5);
        } else if (event.target.innerHTML == "Sa" && !event.target.classList.contains("activeTab")) {
            clearDays("easement_status_warning_pop_up");

            document.getElementById("easement_status_warning_pop_up_tab_day_of_week_box_saturday").classList.add("hidden");
            document.getElementById("easement_status_warning_pop_up_tab_day_of_week_box_saturday_active").classList.remove("hidden");
            assessDayOfWeekChange("easement_status_warning_pop_up", 6);
        } else if (event.target.innerHTML == tempLeftArrow.innerHTML) { // left arrow
            let curDate = easementStatusWarningPopUpDayOfWeekDate.value;
            const year = curDate.substring(0, 4);
            const month = curDate.substring(5, 7);
            const day = curDate.substring(8, 10);
            easementStatusWarningPopUpDayOfWeekDate.value = subtractDays(year, month, day, 7);
            
            const temp = easementStatusWarningPopUpDayOfWeekDate.value;
            const year2 = temp.substring(0, 4);
            const month2 = temp.substring(5, 7);
            const day2 = temp.substring(8, 10);
            const d = new Date(temp);
        
            d.setFullYear(year2);
            d.setMonth(month2 - 1);
            d.setDate(day2);
        
            const curDay = d.getDay();
            setDay("easement_status_warning_pop_up", curDay);
                
            const tempStr = year + "-" + month + "-" + day;
            setFromToDates("easement_status_warning_pop_up", tempStr);
            
        } else if (event.target.innerHTML == tempRightArrow.innerHTML) { // right arrow
            let curDate = easementStatusWarningPopUpDayOfWeekDate.value;
            const year = curDate.substring(0, 4);
            const month = curDate.substring(5, 7);
            const day = curDate.substring(8, 10);
            easementStatusWarningPopUpDayOfWeekDate.value = addDays(year, month, day, 7);


            const temp = easementStatusWarningPopUpDayOfWeekDate.value;
            const year2 = temp.substring(0, 4);
            const month2 = temp.substring(5, 7);
            const day2 = temp.substring(8, 10);
            const d = new Date(temp);
        
            d.setFullYear(year2);
            d.setMonth(month2 - 1);
            d.setDate(day2);
        
            const curDay = d.getDay();
            setDay("easement_status_warning_pop_up", curDay);
                
            const tempStr = year + "-" + month + "-" + day;
            setFromToDates("easement_status_warning_pop_up", tempStr);        
        } else if (event.target.innerHTML == tempResetArrow.innerHTML) { // reset arrow
            const d = new Date();
            const year = d.getFullYear();
            let month = d.getMonth() + 1;
            if (month < 10) {
                month = "0" + month;
            }
            let day = d.getDate();
            if (day < 10) {
                day = "0" + day;
            }
            easementStatusWarningPopUpDayOfWeekDate.value = year + "-" + month + "-" + day;

            setDay("easement_status_warning_pop_up", d.getDay());
            setFromToDates("easement_status_warning_pop_up", (year + "-" + month + "-" + day));
        } 
        
        if (event.target.innerHTML == "Coordinator") {
            clearEasementStatusWarningPopUpTabs();

            document.getElementById("easement_status_warning_pop_up_tab_coordinator").classList.add("hidden");
            document.getElementById("easement_status_warning_pop_up_tab_coordinator_active").classList.remove("hidden");
        } else if (event.target.innerHTML == "Waiting") {
            clearEasementStatusWarningPopUpTabs();

            document.getElementById("easement_status_warning_pop_up_tab_waiting").classList.add("hidden");
            document.getElementById("easement_status_warning_pop_up_tab_waiting_active").classList.remove("hidden");
        } else if (event.target.innerHTML == "On Return" || event.target.innerHTML == "To Office") {
            clearEasementStatusWarningPopUpTabs();

            document.getElementById("easement_status_warning_pop_up_tab_on_return_to_office").classList.add("hidden");
            document.getElementById("easement_status_warning_pop_up_tab_on_return_to_office_active").classList.remove("hidden");
        } else if (event.target.innerHTML == "General") {
            clearEasementStatusWarningPopUpTabs();

            document.getElementById("easement_status_warning_pop_up_tab_general").classList.add("hidden");
            document.getElementById("easement_status_warning_pop_up_tab_general_active").classList.remove("hidden");
        } else if (event.target.innerHTML == "Mentor") {
            clearEasementStatusWarningPopUpTabs();

            document.getElementById("easement_status_warning_pop_up_tab_mentor").classList.add("hidden");
            document.getElementById("easement_status_warning_pop_up_tab_mentor_active").classList.remove("hidden");
        } 
    })

        /* Buttons */
    easementStatusWarningPopUpXButton.addEventListener("click", (event) => {
        console.log("Fired - Clicked easementStatusWarningPopUpXButton");

        easementStatusWarningPopUpTextfield.value = "Enter Note (Optional)"
        easementStatusWarningPopUpContainer.classList.add("hidden");
    })
    easementStatusWarningPopUpButtonNo.addEventListener("click", (event) => {
        console.log("Fired - Clicked easementStatusWarningPopUpButtonNo");

        easementStatusWarningPopUpTextfield.value = "Enter Note (Optional)"
        easementStatusWarningPopUpContainer.classList.add("hidden");
    })
    easementStatusWarningPopUpButtonYes.addEventListener("click", (event) => {
        console.log("Fired - Clicked easementStatusWarningPopUpButtonYes");
        const h = new Haptix(promptDuration);

        const d = new Date();
        let year = d.getFullYear();
        let month = d.getMonth() + 1;
        if (month < 10) {
            month = "0" + month;
        }
        let day = d.getDate();
        if (day < 10) {
            day = "0" + day;
        }
        const today = year + "-" + month + "-" + day;

        let tempIndex = easementStatusWarningPopUpHeader.innerHTML.indexOf("#");
        let str = easementStatusWarningPopUpHeader.innerHTML.substring(tempIndex + 2, tempIndex + 10);

        let tempWr = [];
        for (var i = 0; i < allWrList.length; i++) {
            if (allWrList[i].workRequestNumber == str) {
                tempWr = allWrList[i];
            }
        }

        let addressStr = ""
        if (tempWr != []) {
            addressStr = tempWr.houseNumber + " " + tempWr.streetName + ", " + tempWr.countyCity + " " + tempWr.zipCode;
            if (str != undefined) {
                addressStr += " - " + str;
            }
        } else {
            addressStr = undefined;
        }

        let tab = "";

        if (document.getElementById("easement_status_warning_pop_up_tab_coordinator").classList.contains("hidden")) {
            tab = "Coordinator";
        } else if (document.getElementById("easement_status_warning_pop_up_tab_waiting").classList.contains("hidden")) {
            tab = "Waiting";
        } else if (document.getElementById("easement_status_warning_pop_up_tab_on_return_to_office").classList.contains("hidden")) {
            tab = "On Return To Office";
        } else if (document.getElementById("easement_status_warning_pop_up_tab_general").classList.contains("hidden")) {
            tab = "General";
        } else if (document.getElementById("easement_status_warning_pop_up_tab_mentor").classList.contains("hidden")) {
            tab = "Mentor";
        }

        let notes = []
        if (easementStatusWarningPopUpTextfield.value != "Enter Note (Optional)") {
            notes.push(`<li>${easementStatusWarningPopUpTextfield.value}</li>`);
        }
     
        const newToDo = new ToDoObject(toDoMasterList.getCount(), tab, easementStatusWarningPopUpDayOfWeekDate.value, "Check/ Apply - Easement", today, 0, [notes], str, addressStr);
        toDoMasterList.add(newToDo);
        h.displayToDoAddedFromPopUp("Check/ Apply - Easement", str);

        easementStatusWarningPopUpTextfield.value = "Enter Note (Optional)"
        easementStatusWarningPopUpContainer.classList.add("hidden");
    })

        /* Textfield */
    easementStatusWarningPopUpTextfield.addEventListener("click", (event) => {
        console.log("Fired - Clicked easementStatusWarningPopUpTextfield");

        if (event.target.value != null) {
            event.target.select();
        } 
    })
    easementStatusWarningPopUpTextfield.addEventListener("mouseout", (event) => {
        console.log("Fired - mouseout easementStatusWarningPopUpTextfield");

        if (event.target.value.length == 0) {
            event.target.value = "Enter Note (Optional)";
        } 
    })
    easementStatusWarningPopUpTextfield.addEventListener("input", (event) => {
        console.log("Fired - input easementStatusWarningPopUpTextfield");

        if (event.target.value.length == 1) {
            event.target.value = event.target.value.toUpperCase();
        } 
    })

    
        /* AllWr Tab */     /* AllWr Tab */     /* AllWr Tab */     /* AllWr Tab */     /* AllWr Tab */     /* AllWr Tab */     /* AllWr Tab */
        
        /* Priority Numbers */
    allWrTabRowOnePriority.addEventListener("change", (event) => {
        console.log("Changed - allWrTabRowOnePriority changed to - " + event);

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + 1 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];
        

        currentWr.priorityNumber = event.target.value;
        allWrList[curWrIndex] = currentWr;        
    })
    allWrTabRowTwoPriority.addEventListener("change", (event) => {
        console.log("Changed - allWrTabRowTwoPriority changed to - " + event);

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + 2 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];
        

        currentWr.priorityNumber = event.target.value;
        allWrList[curWrIndex] = currentWr;        
    })
    allWrTabRowThreePriority.addEventListener("change", (event) => {
        console.log("Changed - allWrTabRowThreePriority changed to - " + event);

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + 3 - 1); // Will need to change when more rows     - not sure if + 3 needs to be + 4

        let currentWr = allWrList[curWrIndex];
        

        currentWr.priorityNumber = event.target.value;
        allWrList[curWrIndex] = currentWr;        
    })
    allWrTabRowFourPriority.addEventListener("change", (event) => {
        console.log("Changed - allWrTabRowFourPriority changed to - " + event);

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + 4 - 1); // Will need to change when more rows     - not sure if + 3 needs to be + 4

        let currentWr = allWrList[curWrIndex];
        

        currentWr.priorityNumber = event.target.value;
        allWrList[curWrIndex] = currentWr;        
    })
    allWrTabRowFivePriority.addEventListener("change", (event) => {
        console.log("Changed - allWrTabRowFivePriority changed to - " + event);

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + 5 - 1); // Will need to change when more rows     - not sure if + 3 needs to be + 4

        let currentWr = allWrList[curWrIndex];
        

        currentWr.priorityNumber = event.target.value;
        allWrList[curWrIndex] = currentWr;        
    })
    allWrTabRowSixPriority.addEventListener("change", (event) => {
        console.log("Changed - allWrTabRowSixPriority changed to - " + event);

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + 6 - 1); // Will need to change when more rows     - not sure if + 3 needs to be + 4

        let currentWr = allWrList[curWrIndex];
        

        currentWr.priorityNumber = event.target.value;
        allWrList[curWrIndex] = currentWr;        
    })
    allWrTabRowSevenPriority.addEventListener("change", (event) => {
        console.log("Changed - allWrTabRowSevenPriority changed to - " + event);

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + 7 - 1); // Will need to change when more rows     - not sure if + 3 needs to be + 4

        let currentWr = allWrList[curWrIndex];
        

        currentWr.priorityNumber = event.target.value;
        allWrList[curWrIndex] = currentWr;        
    })
    allWrTabRowEightPriority.addEventListener("change", (event) => {
        console.log("Changed - allWrTabRowEightPriority changed to - " + event);

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + 8 - 1); // Will need to change when more rows     - not sure if + 3 needs to be + 4

        let currentWr = allWrList[curWrIndex];
        

        currentWr.priorityNumber = event.target.value;
        allWrList[curWrIndex] = currentWr;        
    })

        /* Addresses */
    allWrTabRowOneAddress.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowOneAddress");

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + 1 - 1); // Will need to change when more rows
        let currentWr = allWrList[curWrIndex];

        displayWrAddUpdate(currentWr);
        addTabDisplayWorkRequestNumberLabel.innerHTML = "Work Request Number";
        addTabDisplayWorkRequestNumberLabel.classList.remove("newWorkRequestNumberTextfieldLabelBig");
        //document.getElementById("add_tab").click();
        addDisplayContainer.classList.remove("hidden");
        addTabFilterLabelContainer.classList.remove("hidden");
        addTypeContainer.classList.remove("hidden");
        addTabDisplayAddWr.classList.remove("hidden");
        filterCheckboxAddWr.checked = true;
        document.getElementById("add_tab_update_button").disabled = false;
    })
    allWrTabRowTwoAddress.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowTwoAddress");

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + 2 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        displayWrAddUpdate(currentWr);
        addTabDisplayWorkRequestNumberLabel.innerHTML = "Work Request Number";
        addTabDisplayWorkRequestNumberLabel.classList.remove("newWorkRequestNumberTextfieldLabelBig");
        //document.getElementById("add_tab").click();
        addDisplayContainer.classList.remove("hidden");
        addTabFilterLabelContainer.classList.remove("hidden");
        addTypeContainer.classList.remove("hidden");
        addTabDisplayAddWr.classList.remove("hidden");
        filterCheckboxAddWr.checked = true;
        document.getElementById("add_tab_update_button").disabled = false;
    })
    allWrTabRowThreeAddress.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowThreeAddress");

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + 3 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        displayWrAddUpdate(currentWr);
        addTabDisplayWorkRequestNumberLabel.innerHTML = "Work Request Number";
        addTabDisplayWorkRequestNumberLabel.classList.remove("newWorkRequestNumberTextfieldLabelBig");
        addDisplayContainer.classList.remove("hidden");
        addTabFilterLabelContainer.classList.remove("hidden");
        addTypeContainer.classList.remove("hidden");
        addTabDisplayAddWr.classList.remove("hidden");
        filterCheckboxAddWr.checked = true;
        document.getElementById("add_tab_update_button").disabled = false;
    })
    allWrTabRowFourAddress.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowFourAddress");

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + 4 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        displayWrAddUpdate(currentWr);
        addTabDisplayWorkRequestNumberLabel.innerHTML = "Work Request Number";
        addTabDisplayWorkRequestNumberLabel.classList.remove("newWorkRequestNumberTextfieldLabelBig");
        addDisplayContainer.classList.remove("hidden");
        addTabFilterLabelContainer.classList.remove("hidden");
        addTypeContainer.classList.remove("hidden");
        addTabDisplayAddWr.classList.remove("hidden");
        filterCheckboxAddWr.checked = true;
        document.getElementById("add_tab_update_button").disabled = false;
    })
    allWrTabRowFiveAddress.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowFiveAddress");

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + 5 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        displayWrAddUpdate(currentWr);
        addTabDisplayWorkRequestNumberLabel.innerHTML = "Work Request Number";
        addTabDisplayWorkRequestNumberLabel.classList.remove("newWorkRequestNumberTextfieldLabelBig");
        addDisplayContainer.classList.remove("hidden");
        addTabFilterLabelContainer.classList.remove("hidden");
        addTypeContainer.classList.remove("hidden");
        addTabDisplayAddWr.classList.remove("hidden");
        filterCheckboxAddWr.checked = true;
        document.getElementById("add_tab_update_button").disabled = false;
    })
    allWrTabRowSixAddress.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowSixAddress");

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + 6 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        displayWrAddUpdate(currentWr);
        addTabDisplayWorkRequestNumberLabel.innerHTML = "Work Request Number";
        addTabDisplayWorkRequestNumberLabel.classList.remove("newWorkRequestNumberTextfieldLabelBig");
        addDisplayContainer.classList.remove("hidden");
        addTabFilterLabelContainer.classList.remove("hidden");
        addTypeContainer.classList.remove("hidden");
        addTabDisplayAddWr.classList.remove("hidden");
        filterCheckboxAddWr.checked = true;
        document.getElementById("add_tab_update_button").disabled = false;
    })
    allWrTabRowSevenAddress.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowSevenAddress");

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + 7 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        displayWrAddUpdate(currentWr);
        addTabDisplayWorkRequestNumberLabel.innerHTML = "Work Request Number";
        addTabDisplayWorkRequestNumberLabel.classList.remove("newWorkRequestNumberTextfieldLabelBig");
        addDisplayContainer.classList.remove("hidden");
        addTabFilterLabelContainer.classList.remove("hidden");
        addTypeContainer.classList.remove("hidden");
        addTabDisplayAddWr.classList.remove("hidden");
        filterCheckboxAddWr.checked = true;
        document.getElementById("add_tab_update_button").disabled = false;
    })
    allWrTabRowEightAddress.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowEightAddress");

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + 8 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        displayWrAddUpdate(currentWr);
        addTabDisplayWorkRequestNumberLabel.innerHTML = "Work Request Number";
        addTabDisplayWorkRequestNumberLabel.classList.remove("newWorkRequestNumberTextfieldLabelBig");
        addDisplayContainer.classList.remove("hidden");
        addTabFilterLabelContainer.classList.remove("hidden");
        addTypeContainer.classList.remove("hidden");
        addTabDisplayAddWr.classList.remove("hidden");
        filterCheckboxAddWr.checked = true;
        document.getElementById("add_tab_update_button").disabled = false;
    })

        /* Comments */
    allWrTabRowOneComments.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowOneComments");

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + 1 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        displayCommentsAddUpdate(currentWr);
        document.getElementById("add_tab_update_button").disabled = false;
        enableAddCommentTabs();
        clearAddCommentTabs();
        addCommentFilterTabAll.click();
        document.getElementById("comment_type_dd_menu_current").innerHTML = "General";
    })
    allWrTabRowTwoComments.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowTwoComments");

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + 2 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        displayCommentsAddUpdate(currentWr);
        document.getElementById("add_tab_update_button").disabled = false;
        enableAddCommentTabs();
        clearAddCommentTabs();
        addCommentFilterTabAll.click();
        document.getElementById("comment_type_dd_menu_current").innerHTML = "General";
    })
    allWrTabRowThreeComments.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowThreeComments");

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + 3 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        displayCommentsAddUpdate(currentWr);
        document.getElementById("add_tab_update_button").disabled = false;
        enableAddCommentTabs();
        clearAddCommentTabs();
        addCommentFilterTabAll.click();
        document.getElementById("comment_type_dd_menu_current").innerHTML = "General";
    })
    allWrTabRowFourComments.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowFourComments");

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + 4 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        displayCommentsAddUpdate(currentWr);
        document.getElementById("add_tab_update_button").disabled = false;
        enableAddCommentTabs();
        clearAddCommentTabs();
        addCommentFilterTabAll.click();
        document.getElementById("comment_type_dd_menu_current").innerHTML = "General";
    })
    allWrTabRowFiveComments.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowFiveComments");

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + 5 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        displayCommentsAddUpdate(currentWr);
        document.getElementById("add_tab_update_button").disabled = false;
        enableAddCommentTabs();
        clearAddCommentTabs();
        addCommentFilterTabAll.click();
        document.getElementById("comment_type_dd_menu_current").innerHTML = "General";
    })
    allWrTabRowSixComments.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowSixComments");

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + 6 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        displayCommentsAddUpdate(currentWr);
        document.getElementById("add_tab_update_button").disabled = false;
        enableAddCommentTabs();
        clearAddCommentTabs();
        addCommentFilterTabAll.click();
        document.getElementById("comment_type_dd_menu_current").innerHTML = "General";
    })
    allWrTabRowSevenComments.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowSevenComments");

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + 7 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        displayCommentsAddUpdate(currentWr);
        document.getElementById("add_tab_update_button").disabled = false;
        enableAddCommentTabs();
        clearAddCommentTabs();
        addCommentFilterTabAll.click();
        document.getElementById("comment_type_dd_menu_current").innerHTML = "General";
    })
    allWrTabRowEightComments.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowEightComments");

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + 8 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        displayCommentsAddUpdate(currentWr);
        document.getElementById("add_tab_update_button").disabled = false;
        enableAddCommentTabs();
        clearAddCommentTabs();
        addCommentFilterTabAll.click();
        document.getElementById("comment_type_dd_menu_current").innerHTML = "General";
    })

        /* CRDs */
    function allWrTabCrdFunction(row, event) {
        console.log("Entered - allWrTabCrdFunction(" + row + ")");

        let rowNumberText = convertNumText(row); 

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + row - 1); // Will need to change when more rows
        let currentWr = allWrList[curWrIndex];

        if (event.target.value != currentWr.crd) {
            currentWr.crd = event.target.value;
            let d = new Date(currentWr.crd);
            document.getElementById("all_wr_tab_row_" + rowNumberText + "_crd").style.backgroundColor = assessDateCRD(d, userColors);
            
            d = new Date(document.getElementById("all_wr_tab_row_" + rowNumberText + "_rcd").value);
            document.getElementById("all_wr_tab_row_" + rowNumberText + "_rcd").style.backgroundColor = assessDateRCD(d, userColors);

            
            allWrList[curWrIndex] = currentWr;
            crdRcdCheck(currentWr.crd, currentWr.rcd, "all_wr", rowNumberText);
            
        }

    }
    allWrTabRowOneCrd.addEventListener("mouseout", (event) => {
        console.log("mousedout - allWrTabRowOneCrd changed to - " + event);

        allWrTabCrdFunction("1", event);
    })
    allWrTabRowOneCrd.addEventListener("click", (event) => {
        console.log("Fired - Clicked allWrTabRowOneCrd");
        dropdownCover.classList.remove("hidden");
    })
    allWrTabRowTwoCrd.addEventListener("mouseout", (event) => {
        console.log("mousedout - allWrTabRowTwoCrd changed to - " + event);

        allWrTabCrdFunction("2", event);
    })
    allWrTabRowTwoCrd.addEventListener("click", (event) => {
        console.log("Fired - Clicked allWrTabRowTwoCrd");
        dropdownCover.classList.remove("hidden");
    })
    allWrTabRowThreeCrd.addEventListener("mouseout", (event) => {
        console.log("mousedout - allWrTabRowThreeCrd changed to - " + event);

        allWrTabCrdFunction("3", event);
    })  
    allWrTabRowThreeCrd.addEventListener("click", (event) => {
        console.log("Fired - Clicked allWrTabRowThreeCrd");
        dropdownCover.classList.remove("hidden");
    })
    allWrTabRowFourCrd.addEventListener("mouseout", (event) => {
        console.log("mousedout - allWrTabRowFourCrd changed to - " + event);

        allWrTabCrdFunction("4", event);
    })
    allWrTabRowFourCrd.addEventListener("click", (event) => {
        console.log("Fired - Clicked allWrTabRowFourCrd");
        dropdownCover.classList.remove("hidden");
    })
    allWrTabRowFiveCrd.addEventListener("mouseout", (event) => {
        console.log("mousedout - allWrTabRowFiveCrd changed to - " + event);

        allWrTabCrdFunction("5", event);
    })
    allWrTabRowFiveCrd.addEventListener("click", (event) => {
        console.log("Fired - Clicked allWrTabRowFiveCrd");
        dropdownCover.classList.remove("hidden");
    })
    allWrTabRowSixCrd.addEventListener("mouseout", (event) => {
        console.log("mousedout - allWrTabRowSixCrd changed to - " + event);

        allWrTabCrdFunction("6", event);
    })
    allWrTabRowSixCrd.addEventListener("click", (event) => {
        console.log("Fired - Clicked allWrTabRowSixCrd");
        dropdownCover.classList.remove("hidden");
    })
    allWrTabRowSevenCrd.addEventListener("mouseout", (event) => {
        console.log("mousedout - allWrTabRowSevenCrd changed to - " + event);

        allWrTabCrdFunction("7", event);
    })
    allWrTabRowSevenCrd.addEventListener("click", (event) => {
        console.log("Fired - Clicked allWrTabRowSevenCrd");
        dropdownCover.classList.remove("hidden");
    })
    allWrTabRowEightCrd.addEventListener("mouseout", (event) => {
        console.log("mousedout - allWrTabRowEightCrd changed to - " + event);

        allWrTabCrdFunction("8", event);
    })
    allWrTabRowEightCrd.addEventListener("click", (event) => {
        console.log("Fired - Clicked allWrTabRowEightCrd");
        dropdownCover.classList.remove("hidden");
    })

        /* RCDs */
    function allWrTabRcdFunction(row, event) {
        console.log("Entered - allWrTabRcdFunction(" + row + ")");

        let rowNumberText = convertNumText(row); 

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + row - 1); // Will need to change when more rows
        let currentWr = allWrList[curWrIndex];

        if (event.target.value != currentWr.rcd) {
            currentWr.rcd = event.target.value;
            let d = new Date(currentWr.crd);
            document.getElementById("all_wr_tab_row_" + rowNumberText + "_crd").style.backgroundColor = assessDateCRD(d, userColors);
            
            d = new Date(document.getElementById("all_wr_tab_row_" + rowNumberText + "_rcd").value);
            document.getElementById("all_wr_tab_row_" + rowNumberText + "_rcd").style.backgroundColor = assessDateRCD(d, userColors);
            
            allWrList[curWrIndex] = currentWr;
            crdRcdCheck(currentWr.crd, currentWr.rcd, "all_wr", rowNumberText);
            
        }

    }
    allWrTabRowOneRcd.addEventListener("mouseout", (event) => {
        console.log("mousedout - allWrTabRowOneRcd changed to - " + event);

        allWrTabRcdFunction("1", event);
    })
    allWrTabRowOneRcd.addEventListener("click", (event) => {
        console.log("Fired - Clicked allWrTabRowOneRcd");

        dropdownCover.classList.remove("hidden");
    })
    allWrTabRowTwoRcd.addEventListener("mouseout", (event) => {
        console.log("mousedout - allWrTabRowTwoRcd changed to - " + event);

        allWrTabRcdFunction("2", event);
    })
    allWrTabRowTwoRcd.addEventListener("click", (event) => {
        console.log("Fired - Clicked allWrTabRowTwoRcd");

        dropdownCover.classList.remove("hidden");
    })
    allWrTabRowThreeRcd.addEventListener("mouseout", (event) => {
        console.log("mousedout - allWrTabRowThreeRcd changed to - " + event);

        allWrTabRcdFunction("3", event);
    })
    allWrTabRowThreeRcd.addEventListener("click", (event) => {
        console.log("Fired - Clicked allWrTabRowThreeRcd");

        dropdownCover.classList.remove("hidden");
    })
    allWrTabRowFourRcd.addEventListener("mouseout", (event) => {
        console.log("mousedout - allWrTabRowFourRcd changed to - " + event);

        allWrTabRcdFunction("4", event);
    })
    allWrTabRowFourRcd.addEventListener("click", (event) => {
        console.log("Fired - Clicked allWrTabRowFourRcd");

        dropdownCover.classList.remove("hidden");
    })
    allWrTabRowFiveRcd.addEventListener("mouseout", (event) => {
        console.log("mousedout - allWrTabRowFiveRcd changed to - " + event);

        allWrTabRcdFunction("5", event);
    })
    allWrTabRowFiveRcd.addEventListener("click", (event) => {
        console.log("Fired - Clicked allWrTabRowFiveRcd");

        dropdownCover.classList.remove("hidden");
    })
    allWrTabRowSixRcd.addEventListener("mouseout", (event) => {
        console.log("mousedout - allWrTabRowSixRcd changed to - " + event);

        allWrTabRcdFunction("6", event);
    })
    allWrTabRowSixRcd.addEventListener("click", (event) => {
        console.log("Fired - Clicked allWrTabRowSixRcd");

        dropdownCover.classList.remove("hidden");
    })
    allWrTabRowSevenRcd.addEventListener("mouseout", (event) => {
        console.log("mousedout - allWrTabRowSevenRcd changed to - " + event);

        allWrTabRcdFunction("7", event);
    })
    allWrTabRowSevenRcd.addEventListener("click", (event) => {
        console.log("Fired - Clicked allWrTabRowSevenRcd");

        dropdownCover.classList.remove("hidden");
    })
    allWrTabRowEightRcd.addEventListener("mouseout", (event) => {
        console.log("mousedout - allWrTabRowEightRcd changed to - " + event);

        allWrTabRcdFunction("8", event);
    })
    allWrTabRowEightRcd.addEventListener("click", (event) => {
        console.log("Fired - Clicked allWrTabRowEightRcd");

        dropdownCover.classList.remove("hidden");
    })

            /* General Status DDs */
        /* Functions */
    /* hides addToDoPopUp Buttons based on input - anything other than "Existing" resets to normal */
    function switchAddToDoPopUpButtons(tab) {
        console.log("Entered - switchAddToDoPopUpButtons(" + tab + ")");

        if (tab == "Existing") {
            addToDoPopUpButtonNo.classList.add("hidden");
            addToDoPopUpButtonYes.classList.add("hidden");

            addToDoPopUpButtonNeither.classList.remove("hidden");
            addToDoPopUpButtonMove.classList.remove("hidden");
            addToDoPopUpButtonNew.classList.remove("hidden");
        } else {
            addToDoPopUpButtonNo.classList.remove("hidden");
            addToDoPopUpButtonYes.classList.remove("hidden");

            addToDoPopUpButtonNeither.classList.add("hidden");
            addToDoPopUpButtonMove.classList.add("hidden");
            addToDoPopUpButtonNew.classList.add("hidden");
        }
    }
    /* Checks the status of a wr's permit and easement when it's general status is changed to design */
    function runAtDesignStatusCheck(curWr) {
        console.log("Entered - runAtDesignStatusCheck(curWr)");

        /* Have to check in reverse to get popups to display in order of row element */

        /* Checking Easement Status */
        if (curWr.easementRequestStatus == "Not Set") {
            document.getElementById("easement_status_warning_pop_up_container").classList.remove("hidden");
            easementStatusWarningPopUpHeader.innerHTML = `<div class="statusWarningPopUpText">Easement Status for Work Request # ${curWr.workRequestNumber} " is \"Not Set\". Do you want <br> to add a \"Check/ Apply - Easement\" To-Do for Work Request # ${curWr.workRequestNumber}?</div>`;
        } else if(curWr.easementRequestStatus == "Haven't Checked") {
            document.getElementById("easement_status_warning_pop_up_container").classList.remove("hidden");
            easementStatusWarningPopUpHeader.innerHTML = `<div class="statusWarningPopUpText">Easement Status for Work Request # ${curWr.workRequestNumber} " is \"Haven't Checked\". Do you want <br> to add a \"Check/ Apply - Easement\" To-Do for Work Request # ${curWr.workRequestNumber}?</div>`;
        }

        /* Checking Permit Status */
        if (curWr.permit.permitStatus == "Not Set") {
            document.getElementById("permit_status_warning_pop_up_container").classList.remove("hidden");
            permitStatusWarningPopUpHeader.innerHTML = `<div class="statusWarningPopUpText">Permit Status for Work Request # ${curWr.workRequestNumber} " is \"Not Set\". Do you want <br> to add a \"Check/ Apply - Permit\" To-Do for Work Request # ${curWr.workRequestNumber}?</div>`;
        } else if(curWr.permit.permitStatus == "Haven't Checked") {
            document.getElementById("permit_status_warning_pop_up_container").classList.remove("hidden");
            permitStatusWarningPopUpHeader.innerHTML = `<div class="statusWarningPopUpText">Permit Status for Work Request # ${curWr.workRequestNumber} " is \"Haven't Checked\". Do you want <br> to add a \"Check/ Apply - Permit\" To-Do for Work Request # ${curWr.workRequestNumber}?</div>`;
        }

    }
    function assessGeneralStatusChange(rowNum) {
        console.log("Entered - assessGeneralStatusChange(" + rowNum + ")");

        /* Current value on page - not in list */
        const tempCurrent = document.getElementById("general_status_dd_" + rowNum + "_current");

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + parseInt(rowNum) - 1); // Will need to change when more rows

        /* Current Wr */
        let currentWr = allWrList[curWrIndex];

        if (tempCurrent.innerHTML == "Need to Visit") {
            if (currentWr.crd == "0001-01-01") {
                document.getElementById("missing_info_container").classList.remove("hidden");
                missingInfoHeader.innerHTML = `<div class="missingInfoText">${"CRD for WR#" + currentWr.workRequestNumber + " Not Set"}</div>`;
                missingInfoType.innerHTML = `<div class="missingInfoText">${"Set CRD?"}</div>`;
            } else if (currentWr.rcd == "0001-01-01") {
                document.getElementById("missing_info_container").classList.remove("hidden");
                missingInfoHeader.innerHTML = `<div class="missingInfoText">${"RCD for WR#" + currentWr.workRequestNumber + " Not Set"}</div>`;
                missingInfoType.innerHTML = `<div class="missingInfoText">${"Set RCD?"}</div>`;
            } else { // Asking User if they want to add to-do
                
                let temp = toDoMasterList.toDoTypeExistsForWorkRequest("site_visit", currentWr.workRequestNumber)

                if (temp != false) {
                    document.getElementById("add_to_do_pop_up_container").classList.remove("hidden");
                    addToDoPopUpHeader.innerHTML = `<div class="addToDoPopUpText">Existing \"Site Visit\" To-Do Found for Work Request # ${currentWr.workRequestNumber}.</div>`;
                    addToDoPopUpHeader.style.marginTop = '-10px';
                    addToDoPopUpTab.innerHTML = `<div class="addToDoPopUpText">Do you want to move the existing To-Do (ID:${temp}) or add another</div>` + `<div class="addToDoPopUpText">\"Site Visit\" To-Do for Work Request # ${currentWr.workRequestNumber}?</div>`;
                    addToDoPopUpTab.style.display = 'flex';
                    addToDoPopUpTab.style.flexDirection = 'column';
                    addToDoPopUpTab.style.alignItems = 'center';
                    switchAddToDoPopUpButtons("Existing")
                } else {
                    document.getElementById("add_to_do_pop_up_container").classList.remove("hidden");
                    addToDoPopUpHeader.innerHTML = `<div class="addToDoPopUpText">${"Do you want to add a \"Site Visit\" To-Do for Work Request # " + currentWr.workRequestNumber + "?"}</div>`;
                }

                /* Add Comment Prompt */
                addCommentPopUpContainer.classList.remove("hidden");
                addCommentPopUpHeader.innerHTML = `<div class="addToDoPopUpText">Do you want to add a \"Received Required Documents\" Comment</div><div class="addToDoPopUpText">for Work Request # ${currentWr.workRequestNumber}?</div>`;
                addCommentPopUpHeader.style.display = 'flex';
                addCommentPopUpHeader.style.flexDirection = 'column';
                addCommentPopUpHeader.style.alignItems = 'center';
            }
        } else if (tempCurrent.innerHTML == "Need to Flag") {
                let temp = toDoMasterList.toDoTypeExistsForWorkRequest("site_visit", currentWr.workRequestNumber)

                if (temp != false) {
                    document.getElementById("add_to_do_pop_up_container").classList.remove("hidden");
                    addToDoPopUpHeader.innerHTML = `<div class="addToDoPopUpText">Existing \"Site Visit\" To-Do Found for Work Request # ${currentWr.workRequestNumber}.</div>`;
                    addToDoPopUpTab.innerHTML = `<div class="addToDoPopUpText">Do you want to move the existing To-Do (ID:${temp}) or add another</div>` + `<div class="addToDoPopUpText">\"Site Visit\" To-Do for Work Request # ${currentWr.workRequestNumber}?</div>`;
                    addToDoPopUpTab.style.display = 'flex';
                    addToDoPopUpTab.style.flexDirection = 'column';
                    addToDoPopUpTab.style.alignItems = 'center';
                    addToDoPopUpHeader.style.marginTop = '-10px';
                    switchAddToDoPopUpButtons("Existing")
                } else {
                    document.getElementById("add_to_do_pop_up_container").classList.remove("hidden");
                    addToDoPopUpHeader.innerHTML = `<div class="addToDoPopUpText">${"Do you want to add a \"Site Visit\" To-Do for Work Request # " + currentWr.workRequestNumber + "?"}</div>`;
                }

                /* Add Comment Prompt */
                addCommentPopUpContainer.classList.remove("hidden");
                addCommentPopUpHeader.innerHTML = `<div class="addToDoPopUpText">Do you want to add a \"Received Electrical Inspection</div><div class="addToDoPopUpText">and/or Customer Site Ready pics\" Comment</div><div class="addToDoPopUpText">for Work Request # ${currentWr.workRequestNumber}?</div>`;
                addCommentPopUpHeader.style.display = 'flex';
                addCommentPopUpHeader.style.flexDirection = 'column';
                addCommentPopUpHeader.style.alignItems = 'center';
                addCommentPopUpHeader.style.marginTop = '-10px';
        } else if (tempCurrent.innerHTML == "SVC Calcs + Coding") {
                let temp = toDoMasterList.toDoTypeExistsForWorkRequest("svc_calc", currentWr.workRequestNumber)

                /* Add To Do Prompt */
                if (temp != false) {
                    document.getElementById("add_to_do_pop_up_container").classList.remove("hidden");
                    addToDoPopUpHeader.innerHTML = `<div class="addToDoPopUpText">Existing \"SVC Calcs + Coding\" To-Do Found for Work Request # ${currentWr.workRequestNumber}.</div>`;
                    addToDoPopUpHeader.style.marginTop = '-10px';
                    addToDoPopUpTab.innerHTML = `<div class="addToDoPopUpText">Do you want to move the existing To-Do (ID:${temp}) or add another</div>` + `<div class="addToDoPopUpText">\"SVC Calcs + Coding\" To-Do for Work Request # ${currentWr.workRequestNumber}?</div>`;
                    addToDoPopUpTab.style.display = 'flex';
                    addToDoPopUpTab.style.flexDirection = 'column';
                    addToDoPopUpTab.style.alignItems = 'center';
                    switchAddToDoPopUpButtons("Existing")
                } else {
                    document.getElementById("add_to_do_pop_up_container").classList.remove("hidden");
                    addToDoPopUpHeader.innerHTML = `<div class="addToDoPopUpText">${"Do you want to add a \"SVC Calcs + Coding\" To-Do for Work Request # " + currentWr.workRequestNumber + "?"}</div>`;
                }

                /* Add Comment Prompt */
                addCommentPopUpContainer.classList.remove("hidden");
                addCommentPopUpHeader.innerHTML = `<div class="addToDoPopUpText">Do you want to add a \"Conducted Site Visit\" Comment</div><div class="addToDoPopUpText">for Work Request # ${currentWr.workRequestNumber}?</div>`;
                addCommentPopUpHeader.style.display = 'flex';
                addCommentPopUpHeader.style.flexDirection = 'column';
                addCommentPopUpHeader.style.alignItems = 'center';
            } else if (tempCurrent.innerHTML == "Check/ Apply NJUNS") {
            let temp = toDoMasterList.toDoTypeExistsForWorkRequest("check_njuns", currentWr.workRequestNumber)

            if (temp != false) {
                document.getElementById("add_to_do_pop_up_container").classList.remove("hidden");
                addToDoPopUpHeader.innerHTML = `<div class="addToDoPopUpText">Existing \"Check/ Apply - NJUNS\" To-Do Found for Work Request # ${currentWr.workRequestNumber}.</div>`;
                addToDoPopUpHeader.style.marginTop = '-10px';
                addToDoPopUpTab.innerHTML = `<div class="addToDoPopUpText">Do you want to move the existing To-Do (ID:${temp}) or add another</div>` + `<div class="addToDoPopUpText">\"Check/ Apply - NJUNS\" To-Do for Work Request # ${currentWr.workRequestNumber}?</div>`;
                addToDoPopUpTab.style.display = 'flex';
                addToDoPopUpTab.style.flexDirection = 'column';
                addToDoPopUpTab.style.alignItems = 'center';
                switchAddToDoPopUpButtons("Existing")
            } else {
                document.getElementById("add_to_do_pop_up_container").classList.remove("hidden");
                addToDoPopUpHeader.innerHTML = `<div class="addToDoPopUpText">${"Do you want to add a \"Check/ Apply - NJUNS\" To-Do for Work Request # " + currentWr.workRequestNumber + "?"}</div>`;
            }
        } else if (tempCurrent.innerHTML == "Check/ Apply For Permit") {
            let temp = toDoMasterList.toDoTypeExistsForWorkRequest("check_permit", currentWr.workRequestNumber)

            if (temp != false) {
                document.getElementById("add_to_do_pop_up_container").classList.remove("hidden");
                addToDoPopUpHeader.innerHTML = `<div class="addToDoPopUpText">Existing \"Check/ Apply - Permit\" To-Do Found for Work Request # ${currentWr.workRequestNumber}.</div>`;
                addToDoPopUpHeader.style.marginTop = '-10px';
                addToDoPopUpTab.innerHTML = `<div class="addToDoPopUpText">Do you want to move the existing To-Do (ID:${temp}) or add another</div>` + `<div class="addToDoPopUpText">\"Check/ Apply - Permit\" To-Do for Work Request # ${currentWr.workRequestNumber}?</div>`;
                addToDoPopUpTab.style.display = 'flex';
                addToDoPopUpTab.style.flexDirection = 'column';
                addToDoPopUpTab.style.alignItems = 'center';
                switchAddToDoPopUpButtons("Existing")
            } else {
                document.getElementById("add_to_do_pop_up_container").classList.remove("hidden");
                addToDoPopUpHeader.innerHTML = `<div class="addToDoPopUpText">${"Do you want to add a \"Check/ Apply - Permit\" To-Do for Work Request # " + currentWr.workRequestNumber + "?"}</div>`;
            }
        } else if (tempCurrent.innerHTML == "Check/ Apply For Easement") {
            let temp = toDoMasterList.toDoTypeExistsForWorkRequest("check_easement", currentWr.workRequestNumber)

            if (temp != false) {
                document.getElementById("add_to_do_pop_up_container").classList.remove("hidden");
                addToDoPopUpHeader.innerHTML = `<div class="addToDoPopUpText">Existing \"Check/ Apply - Easement\" To-Do Found for Work Request # ${currentWr.workRequestNumber}.</div>`;
                addToDoPopUpHeader.style.marginTop = '-10px';
                addToDoPopUpTab.innerHTML = `<div class="addToDoPopUpText">Do you want to move the existing To-Do (ID:${temp}) or add another</div>` + `<div class="addToDoPopUpText">\"Check/ Apply - Easement\" To-Do for Work Request # ${currentWr.workRequestNumber}?</div>`;
                addToDoPopUpTab.style.display = 'flex';
                addToDoPopUpTab.style.flexDirection = 'column';
                addToDoPopUpTab.style.alignItems = 'center';
                switchAddToDoPopUpButtons("Existing")
            } else {
                document.getElementById("add_to_do_pop_up_container").classList.remove("hidden");
                addToDoPopUpHeader.innerHTML = `<div class="addToDoPopUpText">${"Do you want to add a \"Check/ Apply - Easement\" To-Do for Work Request # " + currentWr.workRequestNumber + "?"}</div>`;
            }
        } else if (tempCurrent.innerHTML == "Design") {
            runAtDesignStatusCheck(currentWr);

            let temp = toDoMasterList.toDoTypeExistsForWorkRequest("design", currentWr.workRequestNumber)

            if (temp != false) {
                document.getElementById("add_to_do_pop_up_container").classList.remove("hidden");
                addToDoPopUpHeader.innerHTML = `<div class="addToDoPopUpText">Existing \"Design\" To-Do Found for Work Request # ${currentWr.workRequestNumber}.</div>`;
                addToDoPopUpHeader.style.marginTop = '-10px';
                addToDoPopUpTab.innerHTML = `<div class="addToDoPopUpText">Do you want to move the existing To-Do (ID:${temp}) or add another</div>` + `<div class="addToDoPopUpText">\"Design\" To-Do for Work Request # ${currentWr.workRequestNumber}?</div>`;
                addToDoPopUpTab.style.display = 'flex';
                addToDoPopUpTab.style.flexDirection = 'column';
                addToDoPopUpTab.style.alignItems = 'center';
                switchAddToDoPopUpButtons("Existing")
            } else {
                document.getElementById("add_to_do_pop_up_container").classList.remove("hidden");
                addToDoPopUpHeader.innerHTML = `<div class="addToDoPopUpText">${"Do you want to add a \"Design\" To-Do for Work Request # " + currentWr.workRequestNumber + "?"}</div>`;
            }
        } else if (tempCurrent.innerHTML == "Revisions") {
            let temp = toDoMasterList.toDoTypeExistsForWorkRequest("revisions", currentWr.workRequestNumber)

            if (temp != false) {
                document.getElementById("add_to_do_pop_up_container").classList.remove("hidden");
                addToDoPopUpHeader.innerHTML = `<div class="addToDoPopUpText">Existing \"Revisions\" To-Do Found for Work Request # ${currentWr.workRequestNumber}.</div>`;
                addToDoPopUpHeader.style.marginTop = '-10px';
                addToDoPopUpTab.innerHTML = `<div class="addToDoPopUpText">Do you want to move the existing To-Do (ID:${temp}) or add another</div>` + `<div class="addToDoPopUpText">\"Revisions\" To-Do for Work Request # ${currentWr.workRequestNumber}?</div>`;
                addToDoPopUpTab.style.display = 'flex';
                addToDoPopUpTab.style.flexDirection = 'column';
                addToDoPopUpTab.style.alignItems = 'center';
                switchAddToDoPopUpButtons("Existing")
            } else {
                document.getElementById("add_to_do_pop_up_container").classList.remove("hidden");
                addToDoPopUpHeader.innerHTML = `<div class="addToDoPopUpText">${"Do you want to add a \"Revisions\" To-Do for Work Request # " + currentWr.workRequestNumber + "?"}</div>`;
            }
        } else if (tempCurrent.innerHTML.includes("Waiting - LL")) { // Waiting on LL/SP/Etc.
            document.getElementById("add_to_do_pop_up_container").classList.remove("hidden");
            addToDoPopUpHeader.innerHTML = `<div class="addToDoPopUpText">"Do you want to add a \"General\" To-Do for Work Request # ${currentWr.workRequestNumber}?</div>`;
            addToDoPopUpTab.style.display = 'flex';
            addToDoPopUpTab.innerHTML = `<div class="addToDoPopUpTextSub">(On "Waiting" Tab + Note: LL/SP/Etc. by Default)</div>`;
            addToDoPopUpTextfield.value = "Waiting on Load Letter/ Site Plan/ Etc.";
            document.getElementById("add_to_do_pop_up_row_two").style.alignSelf = 'center';
            clearAddToDoPopUpTabs();
            document.getElementById("add_to_do_pop_up_tab_waiting").classList.add("hidden");
            document.getElementById("add_to_do_pop_up_tab_waiting_active").classList.remove("hidden");

             /* Add Comment Prompt */
             addCommentPopUpContainer.classList.remove("hidden");
             addCommentPopUpHeader.innerHTML = `<div class="addToDoPopUpText">Do you want to add a \"Customer contacted.\"</div><div class="addToDoPopUpText">Comment for Work Request # ${currentWr.workRequestNumber}?</div>`;
             addCommentPopUpHeader.style.display = 'flex';
             addCommentPopUpHeader.style.flexDirection = 'column';
             addCommentPopUpHeader.style.alignItems = 'center';
             addCommentPopUpHeader.style.marginTop = '-10px';
        } else if (tempCurrent.innerHTML.includes("Waiting") && tempCurrent.innerHTML.includes("Not")) { // Waiting on Cust Not Approve 
            document.getElementById("add_to_do_pop_up_container").classList.remove("hidden");
            addToDoPopUpHeader.innerHTML = `<div class="addToDoPopUpText">${"Do you want to add a \"General\" To-Do for Work Request # " + currentWr.workRequestNumber + "?"}</div>`;
            addToDoPopUpTab.innerHTML = `<div class="addToDoPopUpTextSub">(On "Waiting" Tab + Note: Customer by Default)</div>`;
            addToDoPopUpTab.style.display = 'flex';
            addToDoPopUpTab.style.width = 'fit-content';
            addToDoPopUpTab.style.alignSelf = 'center';
            addToDoPopUpTextfield.value = "Waiting on Customer";
            clearAddToDoPopUpTabs();
            document.getElementById("add_to_do_pop_up_tab_waiting").classList.add("hidden");
            document.getElementById("add_to_do_pop_up_tab_waiting_active").classList.remove("hidden");

        } else if (tempCurrent.innerHTML.includes("Waiting")) { // Waiting on Cust Approved by default
            document.getElementById("add_to_do_pop_up_container").classList.remove("hidden");
            addToDoPopUpHeader.innerHTML = `<div class="addToDoPopUpText">${"Do you want to add a \"General\" To-Do for Work Request # " + currentWr.workRequestNumber + "?"}</div>`;
            addToDoPopUpTab.innerHTML = `<div class="addToDoPopUpTextSub">(On "Waiting" Tab + Note: Customer by Default)</div>`;
            addToDoPopUpTab.style.display = 'flex';
            addToDoPopUpTab.style.width = 'fit-content';
            addToDoPopUpTab.style.alignSelf = 'center';
            addToDoPopUpTextfield.value = "Waiting on Customer";
            clearAddToDoPopUpTabs();
            document.getElementById("add_to_do_pop_up_tab_waiting").classList.add("hidden");
            document.getElementById("add_to_do_pop_up_tab_waiting_active").classList.remove("hidden");

            /* Add Comment Prompt */
            addCommentPopUpContainer.classList.remove("hidden");
            addCommentPopUpHeader.innerHTML = `<div class="addToDoPopUpText">Do you want to add a \"4010'd\" comment for Work Request # ${currentWr.workRequestNumber}?</div>`;
            addCommentPopUpHeader.style.display = 'flex';
            addCommentPopUpHeader.style.flexDirection = 'column';
            addCommentPopUpHeader.style.alignItems = 'center';
            addCommentPopUpHeader.style.marginTop = '-10px';
        } else if (tempCurrent.innerHTML.includes("7010'd")) {
            /* Add Comment Prompt */
            addCommentPopUpContainer.classList.remove("hidden");
            addCommentPopUpHeader.innerHTML = `<div class="addToDoPopUpText">Do you want to add a \"Released To Construction\" Comment</div><div class="addToDoPopUpText">for Work Request # ${currentWr.workRequestNumber}?</div>`;
            addCommentPopUpHeader.style.display = 'flex';
            addCommentPopUpHeader.style.flexDirection = 'column';
            addCommentPopUpHeader.style.alignItems = 'center';
        }
    }
    function allWrTabGeneralStatusContainerMouseoverFunction(rowNum) {
        console.log("Entered - allWrTabGeneralStatusContainerMouseoverFunction(" + rowNum + ")");

        const tempContent = document.getElementById("general_status_dd_" + rowNum + "_content");
        console.log("tempContent = ");
        console.log(tempContent);

        tempContent.style.display = 'flex';
        tempContent.style.flexDirection = 'column';
        tempContent.style.border = '1px solid black';
        tempContent.style.zIndex = '2';

        dropdownCover.classList.remove("hidden");

        /* Below statement adjusts position of content box to above or below dd menu */
        if (rowNum <= 4) {
            tempContent.style.marginTop = '325px';
        } else {
            tempContent.style.marginBottom = '360px';
        }
    }
    function allWrTabGeneralStatusContainerClickFunction(rowNum, event) {
        console.log("Entered - allWrTabGeneralStatusContainerClickFunction(" + rowNum + ")");

        if (allWrTabActive.classList.contains("hidden")) {
            return;
        }

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
                    document.getElementById("general_status_dd_" + rowNum + "_button").style.height = '60px';
                } else if (tempCurrent.innerHTML.includes("Check/ Apply") || tempCurrent.innerHTML.includes("Cancled")) {
                    tempCurrent.style.fontSize = 'small'
                    document.getElementById("general_status_dd_" + rowNum + "_button").style.height = '60px';
                } else if (tempCurrent.innerHTML.includes("Design") || tempCurrent.innerHTML.includes("Revisions") ||
                tempCurrent.innerHTML.includes("7010'd")) {
                    tempCurrent.style.fontSize = 'small'
                    document.getElementById("general_status_dd_" + rowNum + "_button").style.height = '30px';

                } else {
                    tempCurrent.style.fontSize = 'small'
                    document.getElementById("general_status_dd_" + rowNum + "_button").style.height = '45px';
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
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + parseInt(rowNum) - 1); // Will need to change when more rows

        /* Current Wr */
        let currentWr = allWrList[curWrIndex];

        if (tempCurrent.innerHTML != currentWr.generalStatus) {
            console.log("* Saving page to list *");

            /* Updating Status and List */
            currentWr.generalStatus = tempCurrent.innerHTML;
            allWrList[curWrIndex] = currentWr;

            injectHTMLAllWrTabDisplay(allWrList, currentPageAllWr, userColors, toDoMasterList);
            injectHTMLPermitsTabDisplay(allWrList, currentPagePermits, userColors);

            console.log("* Internal List Updated *");
        }

        assessGeneralStatusChange(rowNum);

        /* Hiding DDMenu Content */
        const tempContent = document.getElementById("general_status_dd_" + rowNum + "_content");
        tempContent.style.display = 'none';
        dropdownCover.classList.add("hidden");
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
    allWrTabRowFourGeneralStatusContainer.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowFourGeneralStatus");

        allWrTabGeneralStatusContainerClickFunction("4", event);
    })
    allWrTabRowFiveGeneralStatusContainer.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowFiveGeneralStatus");

        allWrTabGeneralStatusContainerClickFunction("5", event);
    })
    allWrTabRowSixGeneralStatusContainer.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowSixGeneralStatus");

        allWrTabGeneralStatusContainerClickFunction("6", event);
    })
    allWrTabRowSevenGeneralStatusContainer.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowSevenGeneralStatus");

        allWrTabGeneralStatusContainerClickFunction("7", event);
    })
    allWrTabRowEightGeneralStatusContainer.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowEightGeneralStatus");

        allWrTabGeneralStatusContainerClickFunction("8", event);
    })

    /* To-Do Counts */
    function toDoCountBoxFunction(rowNum) {
        console.log("Entered - toDoCountBoxFunction(" + rowNum + ")");

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + rowNum - 1);

        let currentWr = allWrList[curWrIndex];

        displayToDosByWorkRequestNumber(currentWr.workRequestNumber);

    }
    allWrTabRowOneToDoCountBox.addEventListener("click", (event) => {
        console.log("Fired - Clicked allWrTabRowOneToDoCountBox");

        if (allWrTabRowOneToDoCountBox.innerHTML != "0") {
            toDoCountBoxFunction(1);
        }
    })
    allWrTabRowTwoToDoCountBox.addEventListener("click", (event) => {
        console.log("Fired - Clicked allWrTabRowTwoToDoCountBox");

        if (allWrTabRowTwoToDoCountBox.innerHTML != "0") {
            toDoCountBoxFunction(2);
        }
    })
    allWrTabRowThreeToDoCountBox.addEventListener("click", (event) => {
        console.log("Fired - Clicked allWrTabRowThreeToDoCountBox");

        if (allWrTabRowThreeToDoCountBox.innerHTML != "0") {
            toDoCountBoxFunction(3);
        }
    })
    allWrTabRowFourToDoCountBox.addEventListener("click", (event) => {
        console.log("Fired - Clicked allWrTabRowFourToDoCountBox");

        if (allWrTabRowFourToDoCountBox.innerHTML != "0") {
            toDoCountBoxFunction(4);
        }
    })
    allWrTabRowFiveToDoCountBox.addEventListener("click", (event) => {
        console.log("Fired - Clicked allWrTabRowFiveToDoCountBox");

        if (allWrTabRowFiveToDoCountBox.innerHTML != "0") {
            toDoCountBoxFunction(5);
        }
    })
    allWrTabRowSixToDoCountBox.addEventListener("click", (event) => {
        console.log("Fired - Clicked allWrTabRowSixToDoCountBox");

        if (allWrTabRowSixToDoCountBox.innerHTML != "0") {
            toDoCountBoxFunction(6);
        }
    })
    allWrTabRowSevenToDoCountBox.addEventListener("click", (event) => {
        console.log("Fired - Clicked allWrTabRowSevenToDoCountBox");

        if (allWrTabRowSevenToDoCountBox.innerHTML != "0") {
            toDoCountBoxFunction(7);
        }
    })
    allWrTabRowEightToDoCountBox.addEventListener("click", (event) => {
        console.log("Fired - Clicked allWrTabRowEightToDoCountBox");

        if (allWrTabRowEightToDoCountBox.innerHTML != "0") {
            toDoCountBoxFunction(8);
        }
    })

            /* Permit Status DDs */   
        /* Functions */ 
    function allWrTabPermitStatusContainerMouseoverFunction(rowNum) {
        console.log("Fired - moused over allWrTabPermitStatusMouseoverFunction(" + rowNum + ")");

        const tempContent = document.getElementById("permit_status_dd_allWr_tab_row_" + rowNum + "_content");

        tempContent.style.display = 'flex';
        tempContent.style.flexDirection = 'column';
        tempContent.style.border = '1px solid black';
        tempContent.style.zIndex = 2;

        dropdownCover.classList.remove("hidden");


        /* Below statement adjusts position of content box to above or below dd menu */
        if (rowNum <= 4) {
            tempContent.style.marginTop = '400px';
            tempContent.style.width = '90px';
        } else {
            tempContent.style.marginBottom = '455px';
            tempContent.style.width = '90px';
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

                if (tempCurrent.innerHTML.includes("Expiring") || tempCurrent.innerHTML.includes("Extension") || 
                tempCurrent.innerHTML.includes("Don't") || tempCurrent.innerHTML.includes("Haven't")) {
                    document.getElementById("permit_status_dd_allWr_tab_row_" + rowNum + "_button").style.height = '50px';
                } else {
                    document.getElementById("permit_status_dd_allWr_tab_row_" + rowNum + "_button").style.height = '30px';
                }

                allWrTabPermitStatusContainerMouseoutFunction(rowNum);
            }
        }
    }
    function allWrTabPermitStatusContainerMouseoutFunction(rowNum) {
        console.log("Entered - allWrTabPermitStatusMouseoutClickFunction(" + rowNum + ")");

        /* Current value on page - not in list */
        const tempCurrent = document.getElementById("permit_status_dd_allWr_tab_row_" + rowNum + "_current");

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + parseInt(rowNum) - 1); // Will need to change when more rows

        /* Current Wr */
        let currentWr = allWrList[curWrIndex];

        if (tempCurrent.innerHTML != currentWr.permit.permitStatus) {
            console.log("* Saving page to list *");

            /* Updating Status and List */
            currentWr.permit.permitStatus = tempCurrent.innerHTML;

            /* Checking Status to set date applied */
            if (currentWr.permit.permitStatus == "Applied") {
                console.log("Setting Permit Applied Date to Today");
                
                const d = new Date();
                const year = d.getFullYear();
                let month = d.getMonth() + 1;
                if (month < 10) {
                    month = "0" + month;
                }
                let day = d.getDate();
                if (day < 10) {
                    day = "0" + day;
                }
                const tempDate = month + "-" + day + "-" + year;

                currentWr.permit.dateApplied = tempDate;

                /* Add Comment Prompt */
                addCommentPopUpContainer.classList.remove("hidden");
                addCommentPopUpHeader.innerHTML = `<div class="addToDoPopUpText">Do you want to add an \"Applied for Permit\" Comment</div><div class="addToDoPopUpText">for Work Request # ${currentWr.workRequestNumber}?</div>`;
                addCommentPopUpHeader.style.display = 'flex';
                addCommentPopUpHeader.style.flexDirection = 'column';
                addCommentPopUpHeader.style.alignItems = 'center';
            } else if (currentWr.permit.permitStatus == "Extension Submitted") {
                console.log("Setting Permit Applied Date to Today - Extension");

                const d = new Date();
                const year = d.getFullYear();
                let month = d.getMonth() + 1;
                if (month < 10) {
                    month = "0" + month;
                }
                let day = d.getDate();
                if (day < 10) {
                    day = "0" + day;
                }
                const tempDate = month + "-" + day + "-" + year;

                currentWr.permit.dateApplied = tempDate;
                /* Add Comment Prompt */
                addCommentPopUpContainer.classList.remove("hidden");
                addCommentPopUpHeader.innerHTML = `<div class="addToDoPopUpText">Do you want to add an \"Extension Submitted for Permit\" Comment</div><div class="addToDoPopUpText">for Work Request # ${currentWr.workRequestNumber}?</div>`;
                addCommentPopUpHeader.style.display = 'flex';
                addCommentPopUpHeader.style.flexDirection = 'column';
                addCommentPopUpHeader.style.alignItems = 'center';
            } else if (currentWr.permit.permitStatus == "Received") {
                /* Add Comment Prompt */
                addCommentPopUpContainer.classList.remove("hidden");
                addCommentPopUpHeader.innerHTML = `<div class="addToDoPopUpText">Do you want to add a \"Received Permit\" Comment</div><div class="addToDoPopUpText">for Work Request # ${currentWr.workRequestNumber}?</div>`;
                addCommentPopUpHeader.style.display = 'flex';
                addCommentPopUpHeader.style.flexDirection = 'column';
                addCommentPopUpHeader.style.alignItems = 'center';
            } else if (currentWr.permit.permitStatus == "Extension Received") {
                /* Add Comment Prompt */
                addCommentPopUpContainer.classList.remove("hidden");
                addCommentPopUpHeader.innerHTML = `<div class="addToDoPopUpText">Do you want to add an \"Extension Received Permit\" Comment</div><div class="addToDoPopUpText">for Work Request # ${currentWr.workRequestNumber}?</div>`;
                addCommentPopUpHeader.style.display = 'flex';
                addCommentPopUpHeader.style.flexDirection = 'column';
                addCommentPopUpHeader.style.alignItems = 'center';
            } 

            allWrList[curWrIndex] = currentWr;

            injectHTMLAllWrTabDisplay(allWrList, currentPageAllWr, userColors, toDoMasterList);
            injectHTMLPermitsTabDisplay(allWrList, currentPagePermits, userColors);

            console.log("* Internal List Updated *");
        }
        /* Revealing Pop Up */
        if (document.getElementById("permit_status_dd_permits_tab_row_" + rowNum + "_current").innerHTML == "Expiring Soon") {
            document.getElementById("add_to_do_pop_up_container").classList.remove("hidden");

            addToDoPopUpHeader.innerHTML = `<div class="addToDoPopUpText">${"Do you want to add a \"Check/ Apply - Permit\" To-Do for Work Request # " + currentWr.workRequestNumber + "?"}</div>`
        }

        /* Hiding DDMenu Content */
        const tempContent = document.getElementById("permit_status_dd_allWr_tab_row_" + rowNum + "_content");
        tempContent.style.display = 'none';
        dropdownCover.classList.add("hidden");
    }
        /* clicks */
    allWrTabRowOnePermitStatusContainer.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowOnePermitStatus");

        allWrTabPermitStatusContainerClickFunction("1", event);
    })
    allWrTabRowTwoPermitStatusContainer.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowTwoPermitStatus");

        allWrTabPermitStatusContainerClickFunction("2", event);
    })
    allWrTabRowThreePermitStatusContainer.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowThreePermitStatus");

        allWrTabPermitStatusContainerClickFunction("3", event);
    })
    allWrTabRowFourPermitStatusContainer.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowFourPermitStatus");

        allWrTabPermitStatusContainerClickFunction("4", event);
    })
    allWrTabRowFivePermitStatusContainer.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowFivePermitStatus");

        allWrTabPermitStatusContainerClickFunction("5", event);
    })
    allWrTabRowSixPermitStatusContainer.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowSixPermitStatus");

        allWrTabPermitStatusContainerClickFunction("6", event);
    })
    allWrTabRowSevenPermitStatusContainer.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowSevenPermitStatus");

        allWrTabPermitStatusContainerClickFunction("7", event);
    })
    allWrTabRowEightPermitStatusContainer.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowEightPermitStatus");

        allWrTabPermitStatusContainerClickFunction("8", event);
    })

            /* Easement Status DDs */
        /* Functions */
    function allWrTabEasementStatusContainerMouseoverFunction(rowNum) {
        console.log("Entered - allWrTabEasementStatusContainerMouseoverFunction(" + rowNum + ")");

        const tempContent = document.getElementById("easement_status_dd_" + rowNum + "_content");

        tempContent.style.display = 'flex';
        tempContent.style.flexDirection = 'column';
        tempContent.style.border = '1px solid black';
        tempContent.style.zIndex = 2;

        dropdownCover.classList.remove("hidden");

        /* Below statement adjusts position of content box to above or below dd menu */
        if (rowNum <= 4) {
            tempContent.style.marginTop = '435px';
            tempContent.style.width = '90px';
        } else {
            tempContent.style.marginBottom = '440px';
            tempContent.style.width = '90px';
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

                if (tempCurrent.innerHTML.includes("Pending") || tempCurrent.innerHTML.includes("Not Set")) {
                    document.getElementById("easement_status_dd_" + rowNum + "_button").style.height = '30px';

                } else {
                    document.getElementById("easement_status_dd_" + rowNum + "_button").style.height = '50px';

                }
        
                allWrTabEasementStatusContainerMouseoutFunction(rowNum);
            }
        }

    }
    function allWrTabEasementStatusContainerMouseoutFunction(rowNum) {
        console.log("Entered - allWrTabEasementStatusMouseoutClickFunction(" + rowNum + ")");

        /* Current value on page - not in list */
        const tempCurrent = document.getElementById("easement_status_dd_" + rowNum + "_current");

        const page = document.getElementById("all_wr_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + parseInt(rowNum) - 1); // Will need to change when more rows

        /* Current Wr */
        let currentWr = allWrList[curWrIndex];

        if (tempCurrent.innerHTML != currentWr.easementRequestStatus) {
            console.log("* Saving page to list *");

            /* Updating Status and List */
            currentWr.easementRequestStatus = tempCurrent.innerHTML;
            allWrList[curWrIndex] = currentWr;

            injectHTMLAllWrTabDisplay(allWrList, currentPageAllWr, userColors, toDoMasterList);
            injectHTMLPermitsTabDisplay(allWrList, currentPagePermits, userColors);

            console.log("* Internal List Updated *");
        }

        /* Hiding DDMenu Content */
        const tempContent = document.getElementById("easement_status_dd_" + rowNum + "_content");
        tempContent.style.display = 'none';
        dropdownCover.classList.add("hidden");
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
    allWrTabRowFourEasementStatusContainer.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowFoutEasementStatus");

        allWrTabEasementStatusContainerClickFunction("4", event);
    })
    allWrTabRowFiveEasementStatusContainer.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowFiveEasementStatus");

        allWrTabEasementStatusContainerClickFunction("5", event);
    })
    allWrTabRowSixEasementStatusContainer.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowSixEasementStatus");

        allWrTabEasementStatusContainerClickFunction("6", event);
    })
    allWrTabRowSevenEasementStatusContainer.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowSevenEasementStatus");

        allWrTabEasementStatusContainerClickFunction("7", event);
    })
    allWrTabRowEightEasementStatusContainer.addEventListener("click", (event) => {
        console.log("Fired - clicked allWrTabRowEightEasementStatus");

        allWrTabEasementStatusContainerClickFunction("8", event);
    })

        /* AllWr Next and Prev Button */
    nextAllWr.addEventListener("click", (event) => {
        console.log("Fired - Clicked all_wr_tab_next_button");

        console.log("currentPageAllWr = ");
        console.log(curPageAllWr);

        curPageAllWr.innerHTML = currentPageAllWr + 1 + 1; // second + 1 for display
        injectHTMLAllWrTabDisplay(filteredList, currentPageAllWr + 1, userColors, toDoMasterList);
        currentPageAllWr += 1;

        return;
    })
    prevAllWr.addEventListener("click", (event) => {
        console.log("Fired - Clicked all_wr_tab_prev_button");

        curPageAllWr.innerHTML = currentPageAllWr - 1 + 1;  // second + 1 for display
        injectHTMLAllWrTabDisplay(filteredList, currentPageAllWr - 1, userColors, toDoMasterList);
        currentPageAllWr -= 1;

        return; // Can remove?
    })

    /* To-Do Tab */         /* To-Do Tab */         /* To-Do Tab */         /* To-Do Tab */         /* To-Do Tab */         /* To-Do Tab */ 
    function clearMoveToTabs() {
        console.log("Entered - clearMoveToTabs()");

        document.getElementById("move_to_tab_coordinator_active").classList.add("hidden");
        document.getElementById("move_to_tab_waiting_active").classList.add("hidden");
        document.getElementById("move_to_tab_on_return_to_office_active").classList.add("hidden");
        document.getElementById("move_to_tab_general_active").classList.add("hidden");
        document.getElementById("move_to_tab_mentor_active").classList.add("hidden");

        document.getElementById("move_to_tab_coordinator").classList.remove("hidden");
        document.getElementById("move_to_tab_waiting").classList.remove("hidden");
        document.getElementById("move_to_tab_on_return_to_office").classList.remove("hidden");
        document.getElementById("move_to_tab_general").classList.remove("hidden");
        document.getElementById("move_to_tab_mentor").classList.remove("hidden");

    }
    function displayToDoMoveToDisplay(toDo) {
        console.log("Entered - displayToDoMoveToDisplay(toDo)");

        resetToDoMoveToDisplay();
        
        toDoDisplayMoveToContainer.classList.remove("hidden");
        moveToDayOfWeekDate.value = toDo.dueDate;

        const d = new Date(toDo.dueDate);
        const year = d.getFullYear();
        let month = d.getMonth() + 1;
        if (month < 10) {
            month = "0" + month;
        }
        let day = d.getDate();
        if (day < 10) {
            day = "0" + day;
        }
        const temp = new Date(addDays(year, month, day, 2));
        setDay("move_to", temp.getDay());

        if (toDo.tab == "Coordinator") {
            document.getElementById("move_to_tab_coordinator").classList.add("hidden");
            document.getElementById("move_to_tab_coordinator_active").classList.remove("hidden");
        } else if (toDo.tab == "Waiting") {
            document.getElementById("move_to_tab_waiting").classList.add("hidden");
            document.getElementById("move_to_tab_waiting_active").classList.remove("hidden");
        } else if (toDo.tab == "On Return To Office") {
            document.getElementById("move_to_tab_on_return_to_office").classList.add("hidden");
            document.getElementById("move_to_tab_on_return_to_office_active").classList.remove("hidden");
        } else if (toDo.tab == "General") {
            document.getElementById("move_to_tab_general").classList.add("hidden");
            document.getElementById("move_to_tab_general_active").classList.remove("hidden");
        } else if (toDo.tab == "Mentor") {
            document.getElementById("move_to_tab_mentor").classList.add("hidden");
            document.getElementById("move_to_tab_mentor_active").classList.remove("hidden");
        } 
    }
    function toDoDisplayDayOfWeekDateMouseoutFunction() {
        console.log("Entered - toDoDisplayDayOfWeekDateMouseoutFunction()");

        const temp = toDoDisplayDayOfWeekDate.value;
        const year = temp.substring(0, 4);
        const month = temp.substring(5, 7);
        const day = temp.substring(8, 10);
        const d = new Date(temp);
    
        d.setFullYear(year);
        d.setMonth(month - 1);
        d.setDate(day);
    
        const curDay = d.getDay();
        setDay("to_do_display", curDay);
            
        const tempStr = year + "-" + month + "-" + day;
        setFromToDates("to_do_display", tempStr);
            
        for (var i = 0; i < toDoMasterList.list.length; i++) {
            if (toDoMasterList.list[i].date == toDoDisplayDayOfWeekDate.value) {
                console.log("injecting display");
                if (document.getElementById("no_to_dos_for_today_prompt") != undefined) {
                    console.log("removing prompt");
                    document.getElementById("no_to_dos_for_today_prompt").remove();
                }
                tempToDoPageElement = injectHTMLToDoTabDisplay(toDoMasterList.list[i]);
                break;
                    
            } else if((i + 1) == toDoMasterList.list.length) { // last index and not found
                toDoDisplayRowElementContainer.innerHTML = `<div class="noToDosForToday" id="no_to_dos_for_today_prompt">No To-Do's for Today</div>`;
            }
        }    
        /* Checking to see what tab is selected so I can filter list */
        if (toDoGeneralTab.classList.contains("hidden")) {
            toDoGeneralTab.click();
        } else if (toDoMentorTab.classList.contains("hidden")) {
            toDoMentorTab.click();
        } else if (toDoCoordinatorTab.classList.contains("hidden")) {
            console.log("clicking coordinatortab");
            toDoCoordinatorTab.click();
        } else if (toDoWaitingTab.classList.contains("hidden")) {
            toDoWaitingTab.click();
        } else if (toDoOnReturnToOfficeTab.classList.contains("hidden")) {
            toDoOnReturnToOfficeTab.click();
        }     
    }
    /* Takes in list of indexes corresponding to toDoDayObject lists */
    function moveIncompleteFunction(tab, tempToRemove, oldDate, newDate) {
        console.log("Entered - moveIncompleteFunction(tab, tempToRemove, oldDate, newDate)");

        let index = undefined;

        for (var i = 0; i < toDoMasterList.list.length; i++) {
            if (toDoMasterList.list[i].date == oldDate) {
                index = i;
            }
        }

        /* Adds Updated To-Do's to Master List */
        if (index != undefined) {

            /* Contact Customer List */
            for (var i = 0; i < tempToRemove[0].length; i++) {
                let temp = toDoMasterList.list[index].contactCustomerList[tempToRemove[0][i]];
                temp.dueDate = newDate;
                temp.tab = tab;
                toDoMasterList.tempAdd(temp);
            }
            /* Site Visit List */
            for (var i = 0; i < tempToRemove[1].length; i++) {
                let temp = toDoMasterList.list[index].siteVisitList[tempToRemove[1][i]];
                temp.dueDate = newDate;
                temp.tab = tab;
                toDoMasterList.tempAdd(temp);
            }
            /* Svc Calc List */
            for (var i = 0; i < tempToRemove[2].length; i++) {
                let temp = toDoMasterList.list[index].svcCalcList[tempToRemove[2][i]];
                temp.dueDate = newDate;
                temp.tab = tab;
                toDoMasterList.tempAdd(temp);
            }
            /* Check NJUNS List */
            for (var i = 0; i < tempToRemove[3].length; i++) {
                let temp = toDoMasterList.list[index].checkNJUNSList[tempToRemove[3][i]];
                temp.dueDate = newDate;
                temp.tab = tab;
                toDoMasterList.tempAdd(temp);
            }
            /* Check Permit List */
            for (var i = 0; i < tempToRemove[4].length; i++) {
                let temp = toDoMasterList.list[index].checkPermitList[tempToRemove[4][i]];
                temp.dueDate = newDate;
                temp.tab = tab;
                toDoMasterList.tempAdd(temp);
            }
            /* Check Easement List */
            for (var i = 0; i < tempToRemove[5].length; i++) {
                let temp = toDoMasterList.list[index].checkEasementList[tempToRemove[5][i]];
                temp.dueDate = newDate;
                temp.tab = tab;
                toDoMasterList.tempAdd(temp);
            }
            /* Design List */
            for (var i = 0; i < tempToRemove[6].length; i++) {
                let temp = toDoMasterList.list[index].designList[tempToRemove[6][i]];
                temp.dueDate = newDate;
                temp.tab = tab;
                toDoMasterList.tempAdd(temp);
            }
            /* Revisions List */
            for (var i = 0; i < tempToRemove[7].length; i++) {
                let temp = toDoMasterList.list[index].revisionsList[tempToRemove[7][i]];
                temp.dueDate = newDate;
                temp.tab = tab;
                toDoMasterList.tempAdd(temp);
            }
            /* General List */
            for (var i = 0; i < tempToRemove[8].length; i++) {
                let temp = toDoMasterList.list[index].generalList[tempToRemove[8][i]];
                temp.dueDate = newDate;
                temp.tab = tab;
                toDoMasterList.tempAdd(temp);
            }
        }

        /* Removes old To-Do's from master list */
        if (index != undefined) {

            /* Contact Customer List */
            for (var i = tempToRemove[0].length - 1; i >= 0; i--) {
                toDoMasterList.list[index].contactCustomerList = toDoMasterList.list[index].remove(toDoMasterList.list[index].contactCustomerList, tempToRemove[0][i]);
            }
            /* Site Visit List */
            for (var i = tempToRemove[1].length - 1; i >= 0; i--) {
                toDoMasterList.list[index].siteVisitList = toDoMasterList.list[index].remove(toDoMasterList.list[index].siteVisitList, tempToRemove[1][i]);
            }
            /* Svc Calc List */
            for (var i = tempToRemove[2].length - 1; i >= 0; i--) {
                toDoMasterList.list[index].svcCalcList = toDoMasterList.list[index].remove(toDoMasterList.list[index].svcCalcList, tempToRemove[2][i]);
            }
            /* Check NJUNS List */
            for (var i = tempToRemove[3].length - 1; i >= 0; i--) {
                toDoMasterList.list[index].checkNJUNSList = toDoMasterList.list[index].remove(toDoMasterList.list[index].checkNJUNSList, tempToRemove[3][i]);
            }
            /* Check Permit List */
            for (var i = tempToRemove[4].length - 1; i >= 0; i--) {
                toDoMasterList.list[index].checkPermitList = toDoMasterList.list[index].remove(toDoMasterList.list[index].checkPermitList, tempToRemove[4][i]);
            }
            /* Check Easement List */
            for (var i = tempToRemove[5].length - 1; i >= 0; i--) {
                toDoMasterList.list[index].checkEasementList = toDoMasterList.list[index].remove(toDoMasterList.list[index].checkEasementList, tempToRemove[5][i]);
            }
            /* Design List */
            for (var i = tempToRemove[6].length - 1; i >= 0; i--) {
                toDoMasterList.list[index].designList = toDoMasterList.list[index].remove(toDoMasterList.list[index].designList, tempToRemove[6][i]);
            }
            /* Revisions List */
            for (var i = tempToRemove[7].length - 1; i >= 0; i--) {
                toDoMasterList.list[index].revisionsList = toDoMasterList.list[index].remove(toDoMasterList.list[index].revisionsList, tempToRemove[7][i]);
            }
            /* General List */
            for (var i = tempToRemove[8].length - 1; i >= 0; i--) {
                toDoMasterList.list[index].generalList = toDoMasterList.list[index].remove(toDoMasterList.list[index].generalList, tempToRemove[8][i]);
            }
        }

        /* Updating Display */
        toDoDisplayMoveToContainer.classList.add("hidden");
        toDoDisplayDayOfWeekDate.value = moveToDayOfWeekDate.value;
        toDoDisplayDayOfWeekDateMouseoutFunction();
        
    }
    /* Takes a list of ToDoObjects, removes them from the list, and adds them back with the new date on the new tab */
    function moveIncompleteFilteredFunction(tab, list, newDate) {
        console.log("Entered - moveIncompleteFilteredFunction(tab = " + tab + ", list, newDate = " + newDate + ")");

        /* Setting Active Tab so toDoDisplayDayOfWeekDateMouseoutFunction (called at end) filters properly */
        

        /* Removing all list items from toDoMasterList */
        for (var i = 0; i < list.length; i++) {
            toDoMasterList.removeById(list[i].toDoId);
        }

        for (var i = 0; i < list.length; i++) {
            const newToDo = new ToDoObject(list[i].toDoId, tab, newDate, list[i].type, list[i].creationDate, list[i].completed, 
                list[i].notes, list[i].workRequestNumber, list[i].addressStr);
            toDoMasterList.add(newToDo);
        }

        

         /* Updating Display */
         toDoDisplayMoveToContainer.classList.add("hidden");
         toDoDisplayDayOfWeekDate.value = moveToDayOfWeekDate.value;
         document.getElementById("hide_date_page_object").classList.add("hidden");
         document.getElementById("hide_to_do_tabs").classList.add("hidden");
         uncheckToDoFilterCheckboxes();
         uncheckGenericFilterCheckboxes();
         uncolorGenericFilterCheckboxes();
         uncolorToDoFilterCheckboxes();

        toDoDisplayDayOfWeekDateMouseoutFunction();

        if (tab == "General") {
            toDoGeneralTab.click();
        } else if (tab == "Mentor") {
            toDoMentorTab.click();
        } else if (tab == "Coordinator") {
            toDoCoordinatorTab.click();
        } else if (tab == "Waiting") {
            toDoWaitingTab.click();
        } else if (tab == "On Return To Office") {
            toDoOnReturnToOfficeTab.click();
        } 
    }
    function toDoDisplayDeselectTabs() {
        console.log("Entered - toDoDisplayDeselectTabs()");

        /* Revealing Normal Tabs */
        toDoGeneralTab.classList.remove("hidden");
        toDoMentorTab.classList.remove("hidden");
        toDoOnReturnToOfficeTab.classList.remove("hidden");
        toDoWaitingTab.classList.remove("hidden");
        toDoCoordinatorTab.classList.remove("hidden");

        /* Hiding Active Tabs */
        toDoGeneralTabActive.classList.add("hidden");
        toDoMentorTabActive.classList.add("hidden");
        toDoOnReturnToOfficeTabActive.classList.add("hidden");
        toDoWaitingTabActive.classList.add("hidden");
        toDoCoordinatorTabActive.classList.add("hidden");

    }

        /* Move To Container */
    toDoDisplayMoveIncompleteButton.addEventListener("click", (event) => {
        console.log("Fired - Clicked toDoDisplayMoveIncompleteButton");
        const h = new Haptix(promptDuration);

        let toRemove = [];
        let index = undefined;

        document.getElementById("to_do_display_move_to_remove_button").classList.add("hidden");        

        for (var i = 0; i < toDoMasterList.list.length; i++) {
            if (toDoMasterList.list[i].date == toDoDisplayDayOfWeekDate.value) {
                console.log("Entered if statement ^^^");

                /* Contact Customer List */
                if (toDoMasterList.list[i].contactCustomerList.length > 0) {
                    tempCurToDo = [toDoMasterList.list[i].contactCustomerList[0], moveToDayOfWeekDate.value, "Contact Customer", 0];
                    console.log("set tempCurToDo w/ first contact cust");
                    break;
                /* Site Visit List */
                } else if (toDoMasterList.list[i].siteVisitList.length > 0) {
                    tempCurToDo = [toDoMasterList.list[i].siteVisitList[0], moveToDayOfWeekDate.value, "Site Visit", 0];
                    break;
                /* Svc Calc List */
                } else if (toDoMasterList.list[i].svcCalcList.length > 0) {
                    tempCurToDo = [toDoMasterList.list[i].svcCalcList[0], moveToDayOfWeekDate.value, "Svc Calc", 0];
                    break;
                /* Check NJUNS List */
                } else if (toDoMasterList.list[i].checkNJUNSList.length > 0) {
                    tempCurToDo = [toDoMasterList.list[i].checkNJUNSList[0], moveToDayOfWeekDate.value, "Check NJUNS", 0];
                    break;
                /* Check Permit List */
                } else if (toDoMasterList.list[i].checkPermitList.length > 0) {
                    tempCurToDo = [toDoMasterList.list[i].checkPermitList[0], moveToDayOfWeekDate.value, "Check Permit", 0];
                    break;
                /* Check Easement List */
                } else if (toDoMasterList.list[i].checkEasementList.length > 0) {
                    tempCurToDo = [toDoMasterList.list[i].checkEasementList[0], moveToDayOfWeekDate.value, "Check Easement", 0];
                    break;
                /* Design List */
                } else if (toDoMasterList.list[i].designList.length > 0) {
                    tempCurToDo = [toDoMasterList.list[i].designList[0], moveToDayOfWeekDate.value, "Design", 0];
                    break;
                /* Revisions List */
                } else if (toDoMasterList.list[i].revisionsList.length > 0) {
                    tempCurToDo = [toDoMasterList.list[i].revisionsList[0], moveToDayOfWeekDate.value, "Revisions", 0];
                    break;
                /* General List */
                } else if (toDoMasterList.list[i].generalList.length > 0) {
                    tempCurToDo = [toDoMasterList.list[i].generalList[0], moveToDayOfWeekDate.value, "General", 0];
                    break;
                } 

            }
        }

        for (var i = 0; i < toDoMasterList.list.length; i++) {

            if (toDoMasterList.list[i].date == toDoDisplayDayOfWeekDate.value) {
                index = i;
            }
        }

        /* Compiles a 2D array corresponding to incomplete todos and their respective lists (toRemove)*/
        if (index != undefined) {
            let curList = [];
                
            for (var i = 0; i < toDoMasterList.list[index].contactCustomerList.length; i++) {
                if (toDoMasterList.list[index].contactCustomerList[i].completed == 0) { // has not been completed - needs to move
                    curList.push(i);
                }
            }
            toRemove.push(curList);
            curList = [];

            for (var i = 0; i < toDoMasterList.list[index].siteVisitList.length; i++) {
                if (toDoMasterList.list[index].siteVisitList[i].completed == 0) { // has not been completed - needs to move
                    curList.push(i);
                }
            }
            toRemove.push(curList);
            curList = [];
            
            for (var i = 0; i < toDoMasterList.list[index].svcCalcList.length; i++) {
                console.log("in svc calc loop");
                if (toDoMasterList.list[index].svcCalcList[i].completed == 0) { // has not been completed - needs to move
                    curList.push(i);
                }
            }
            toRemove.push(curList);
            curList = [];
            
            for (var i = 0; i < toDoMasterList.list[index].checkNJUNSList.length; i++) {
                if (toDoMasterList.list[index].checkNJUNSList[i].completed == 0) { // has not been completed - needs to move
                    curList.push(i);
                }
            }
            toRemove.push(curList);
            curList = [];

            for (var i = 0; i < toDoMasterList.list[index].checkPermitList.length; i++) {
                if (toDoMasterList.list[index].checkPermitList[i].completed == 0) { // has not been completed - needs to move
                    curList.push(i);
                }
            }
            toRemove.push(curList);
            curList = [];
            
            for (var i = 0; i < toDoMasterList.list[index].checkEasementList.length; i++) {
                if (toDoMasterList.list[index].checkEasementList[i].completed == 0) { // has not been completed - needs to move
                    curList.push(i);
                }
            }
            toRemove.push(curList);
            curList = [];
            
            for (var i = 0; i < toDoMasterList.list[index].designList.length; i++) {
                if (toDoMasterList.list[index].designList[i].completed == 0) { // has not been completed - needs to move
                    curList.push(i);
                }
            }
            toRemove.push(curList);
            curList = [];
            
            for (var i = 0; i < toDoMasterList.list[index].revisionsList.length; i++) {
                if (toDoMasterList.list[index].revisionsList[i].completed == 0) { // has not been completed - needs to move
                    curList.push(i);
                }
            }
            toRemove.push(curList);
            curList = [];
            
            for (var i = 0; i < toDoMasterList.list[index].generalList.length; i++) {
                if (toDoMasterList.list[index].generalList[i].completed == 0) { // has not been completed - needs to move
                    curList.push(i);
                }
            }
            toRemove.push(curList);
            curList = [];        
            
        }

        if (toRemove.length == 0 || toRemove[0].length == 0 && toRemove[1].length == 0 && toRemove[2].length == 0 && toRemove[3].length == 0 && 
            toRemove[4].length == 0 && toRemove[5].length == 0 && toRemove[6].length == 0 && toRemove[7].length == 0 && 
            toRemove[8].length == 0) {

                console.log("No incomplete to-do's to move");
                h.displayNoIncompleteToDosToMove();

            return;
        } else {

            tempToRemove = toRemove;
            clickedMoveIncompleteButton = 1;

            let tempToDo = [];

            /* Finding any toDo that exists to pass into display function */
            for (var j = 0; j < 9; j++) {
                if (toRemove[j][0] != undefined) {

                    if (j == 0) {
                        tempToDo = toDoMasterList.list[index].contactCustomerList[0];
                    } else if (j == 1) {
                        tempToDo = toDoMasterList.list[index].siteVisitList[0];
                    } else if (j == 2) {
                        tempToDo = toDoMasterList.list[index].svcCalcList[0];
                    } else if (j == 3) {
                        tempToDo = toDoMasterList.list[index].checkNJUNSList[0];
                    } else if (j == 4) {
                        tempToDo = toDoMasterList.list[index].checkPermitList[0];
                    } else if (j == 5) {
                        tempToDo = toDoMasterList.list[index].checkEasementList[0];
                    } else if (j == 6) {
                        tempToDo = toDoMasterList.list[index].designList[0];
                    } else if (j == 7) {
                        tempToDo = toDoMasterList.list[index].revisionsList[0];
                    } else if (j == 8) {
                        tempToDo = toDoMasterList.list[index].generalList[0];
                    } 

                    break;
                }
            }

            displayToDoMoveToDisplay(tempToDo);
        }


        /* Adds incomplete items to  */
        if (toRemove.length != 0) { // this is true if the above conditional was entered (index != undefined)

        }

    }) 
    toDoDisplayDayOfWeekDateContainer.addEventListener("click", (event) => {
        console.log("Fired - Clicked toDoDisplayDayOfWeekContainer");
        const e = new Error(promptDuration);

        const tempLeftArrow = document.createElement("tempLeftArrow");
        tempLeftArrow.innerHTML = "&#8592";
        const tempRightArrow = document.createElement("tempRightArrow");
        tempRightArrow.innerHTML = "&#8594";
        const tempResetArrow = document.createElement("tempResetArrow");
        tempResetArrow.innerHTML = "&#8634";

        if (event.target.innerHTML == "Su" && !event.target.classList.contains("activeTab")) {
            clearDays("to_do_display");

            document.getElementById("to_do_display_tab_day_of_week_box_sunday").classList.add("hidden");
            document.getElementById("to_do_display_tab_day_of_week_box_sunday_active").classList.remove("hidden");
            assessDayOfWeekChange("to_do_display", 0);
        } else if (event.target.innerHTML == "M" && !event.target.classList.contains("activeTab")) {
            clearDays("to_do_display");

            document.getElementById("to_do_display_tab_day_of_week_box_monday").classList.add("hidden");
            document.getElementById("to_do_display_tab_day_of_week_box_monday_active").classList.remove("hidden");
            assessDayOfWeekChange("to_do_display", 1);
        } else if (event.target.innerHTML == "Tu" && !event.target.classList.contains("activeTab")) {
            clearDays("to_do_display");

            document.getElementById("to_do_display_tab_day_of_week_box_tuesday").classList.add("hidden");
            document.getElementById("to_do_display_tab_day_of_week_box_tuesday_active").classList.remove("hidden");
            assessDayOfWeekChange("to_do_display", 2);
        } else if (event.target.innerHTML == "W" && !event.target.classList.contains("activeTab")) {
            clearDays("to_do_display");

            document.getElementById("to_do_display_tab_day_of_week_box_wednesday").classList.add("hidden");
            document.getElementById("to_do_display_tab_day_of_week_box_wednesday_active").classList.remove("hidden");
            assessDayOfWeekChange("to_do_display", 3);
        } else if (event.target.innerHTML == "Th" && !event.target.classList.contains("activeTab")) {
            clearDays("to_do_display");

            document.getElementById("to_do_display_tab_day_of_week_box_thursday").classList.add("hidden");
            document.getElementById("to_do_display_tab_day_of_week_box_thursday_active").classList.remove("hidden");
            assessDayOfWeekChange("to_do_display", 4);
        } else if (event.target.innerHTML == "F" && !event.target.classList.contains("activeTab")) {
            clearDays("to_do_display");

            document.getElementById("to_do_display_tab_day_of_week_box_friday").classList.add("hidden");
            document.getElementById("to_do_display_tab_day_of_week_box_friday_active").classList.remove("hidden");
            assessDayOfWeekChange("to_do_display", 5);
        } else if (event.target.innerHTML == "Sa" && !event.target.classList.contains("activeTab")) {
            clearDays("to_do_display");

            document.getElementById("to_do_display_tab_day_of_week_box_saturday").classList.add("hidden");
            document.getElementById("to_do_display_tab_day_of_week_box_saturday_active").classList.remove("hidden");
            assessDayOfWeekChange("to_do_display", 6);
        } else if (event.target.innerHTML == tempLeftArrow.innerHTML) { // left arrow
            if (toDoDisplayDayOfWeekDate.value == "0001-01-01" || toDoDisplayDayOfWeekDate.value == "0001-01-02" || 
            toDoDisplayDayOfWeekDate.value == "0001-01-03" || toDoDisplayDayOfWeekDate.value == "0001-01-04" ||
            toDoDisplayDayOfWeekDate.value == "0001-01-05" || toDoDisplayDayOfWeekDate.value == "0001-01-06" ||
            toDoDisplayDayOfWeekDate.value == "0001-01-07") {
                e.displayInvalidDateToDoDisplay();
            } else {
                let curDate = toDoDisplayDayOfWeekDate.value;
                const year = curDate.substring(0, 4);
                const month = curDate.substring(5, 7);
                const day = curDate.substring(8, 10);
                toDoDisplayDayOfWeekDate.value = subtractDays(year, month, day, 7);
                toDoDisplayDayOfWeekDateMouseoutFunction();
            }
            
        } else if (event.target.innerHTML == tempRightArrow.innerHTML) { // right arrow
            let curDate = toDoDisplayDayOfWeekDate.value;
            const year = curDate.substring(0, 4);
            const month = curDate.substring(5, 7);
            const day = curDate.substring(8, 10);
            toDoDisplayDayOfWeekDate.value = addDays(year, month, day, 7);
            toDoDisplayDayOfWeekDateMouseoutFunction();
        } else if (event.target.innerHTML == tempResetArrow.innerHTML) { // reset arrow
            const d = new Date();
            const year = d.getFullYear();
            let month = d.getMonth() + 1;
            if (month < 10) {
                month = "0" + month;
            }
            let day = d.getDate();
            if (day < 10) {
                day = "0" + day;
            }
            toDoDisplayDayOfWeekDate.value = year + "-" + month + "-" + day;
            toDoDisplayDayOfWeekDateMouseoutFunction();
           
        }
        /* Checking to what tab is selected so I can filter list */
        if (toDoGeneralTab.classList.contains("hidden")) {
            toDoGeneralTab.click();
        } else if (toDoMentorTab.classList.contains("hidden")) {
            toDoMentorTab.click();
        } else if (toDoCoordinatorTab.classList.contains("hidden")) {
            toDoCoordinatorTab.click();
        } else if (toDoWaitingTab.classList.contains("hidden")) {
            toDoWaitingTab.click();
        } else if (toDoOnReturnToOfficeTab.classList.contains("hidden")) {
            toDoOnReturnToOfficeTab.click();
        } 
    })
    toDoDisplayDayOfWeekDate.addEventListener("mouseout", (event) => {
        console.log("Fired - Mousedout toDoDisplayDayOfWeekDate");

        toDoDisplayDayOfWeekDateMouseoutFunction();
    })

        /* Main Page Object */
    toDoDisplayRowElementContainer.addEventListener("click", (event) => {
        console.log("Fired - Clicked toDoDisplayRowElementContainer");

        let temp = event.target.outerHTML;
        let leftIndex = temp.indexOf("\"");
        let rightIndex = temp.indexOf("_to_do_list");
        let curType = temp.substring(leftIndex + 1, rightIndex);

        rightIndex = event.target.outerHTML.lastIndexOf("\"");
        leftIndex = event.target.outerHTML.indexOf("complete") + 8 + 1; 
        let curIndex = event.target.outerHTML.substring(leftIndex, rightIndex);

        console.log(tempFilteredToDoList);

        // completeByMasterIndex(type, index, oldNew/newOld) - go through all todos with index as count. If to_do is of type and count = 0 , complete and return, else, keep going with --count
                                        // needed to know if tempFiltered list is sorted in reverse or normal

        if (event.target.outerHTML.substring(0,33) != "<div class=\"toDoObjectContainer\">" && event.target.outerHTML.substring(0, 31) != "<div class=\"toDoNoteContainer\">") { // Clicked something actionable
            let index = event.target.outerHTML.indexOf("id"); // find id part 
            let tempCur = event.target.outerHTML.substring(index); // trim to id part

            index = tempCur.indexOf("\""); // find first (left) paren
            tempCur = tempCur.substring(index + 1); // trim to first (left) paren - removes left paren

            index = tempCur.indexOf("\""); // find second (right) paren
            const tempID = tempCur.substring(0, index); // get just id

            /* Setting current list value for complete and completeNote function */
            let curList = "";

            if (tempID.includes("contact_customer")) {
                curList = "contact_customer";
            } else if (tempID.includes("site_visit")) {
                curList = "site_visit";
            } else if (tempID.includes("svc_calc")) {
                curList = "svc_calc";
            } else if (tempID.includes("check_njuns")) {
                curList = "check_njuns";
            } else if (tempID.includes("check_permit")) {
                curList = "check_permit";
            } else if (tempID.includes("check_easement")) {
                curList = "check_easement";
            } else if (tempID.includes("design")) {
                curList = "design";
            } else if (tempID.includes("revisions")) {
                curList = "revisions";
            } else if (tempID.includes("general")) {
                curList = "general";
            } 

            let tempIndex = tempID.lastIndexOf("_");
            const lastNum = tempID.substring(tempIndex + 1); // gets last number on id (except for checkbox)

            if (tempID.includes("checkbox") && !tempID.includes("general")) {
                console.log("clicked note checkbox")

                /* Pulls listItemIndex (index of toDoObject within contact customer list) */
                let tempListItemIndex = tempID.indexOf("item_");
                let listItemIndexStr = tempID.substring(tempListItemIndex + 5);
                let endListItemIndex = listItemIndexStr.indexOf("_");
                const listItemIndex = listItemIndexStr.substring(0, endListItemIndex);

                /* Pulls noteIndex (index of note within toDoObject notes) */
                let tempNoteIndexStr = tempID.substring(0, tempIndex);
                let endNoteIndex = tempNoteIndexStr.lastIndexOf("_");
                const noteIndex = tempNoteIndexStr.substring(endNoteIndex + 1);

                //let leftIndex = event.target.outerHTML.indexOf("id")

                if (document.getElementById("hide_date_page_object").classList.contains("hidden")) { // Displaying To-Do's by day
                    toDoMasterList.completeNote(toDoDisplayDayOfWeekDate.value, curList, listItemIndex, noteIndex, tempToDoPageElement);

                } else {// Displaying All To-Do's
                    let order = "";
                    if (filterCheckboxAgeNewAll.checked) {
                        order = "new_old";
                    } else if (filterCheckboxAgeOldAll.checked) {
                        order = "old_new";
                    }
                    toDoMasterList.completeNoteByMasterIndex(curList, listItemIndex, noteIndex, tempToDoPageElement, tempFilteredToDoList, order);

                }

            } else if (tempID.includes("checkbox")) {
                console.log("clicked note checkbox - general");

                if (document.getElementById("hide_date_page_object").classList.contains("hidden")) { // Viewing To-Do's by day
                    /* Pulls listItemIndex (index of toDoObject within contact customer list) */
                    let tempListItemIndex = tempID.indexOf("item_");
                    let listItemIndexStr = tempID.substring(tempListItemIndex + 5);
                    let endListItemIndex = listItemIndexStr.indexOf("_");
                    const listItemIndex = listItemIndexStr.substring(0, endListItemIndex);

                    /* Pulls noteIndex (index of note within toDoObject notes) */
                    let tempNoteIndexStr = tempID.substring(0, tempIndex);
                    let endNoteIndex = tempNoteIndexStr.lastIndexOf("_");
                    const noteIndex = tempNoteIndexStr.substring(endNoteIndex + 1);

                    toDoMasterList.completeNote(toDoDisplayDayOfWeekDate.value, curList, listItemIndex, noteIndex, tempToDoPageElement);


                } else { // Viewing all To-Do's
                    /* Pulls listItemIndex (index of toDoObject within contact customer list) */
                    let tempListItemIndex = tempID.indexOf("item_");
                    let listItemIndexStr = tempID.substring(tempListItemIndex + 5);
                    let endListItemIndex = listItemIndexStr.indexOf("_");
                    const listItemIndex = listItemIndexStr.substring(0, endListItemIndex);

                    /* Pulls noteIndex (index of note within toDoObject notes) */
                    let rightIndex = tempID.lastIndexOf("_");
                    let tempStr = tempID.substring(0, rightIndex); // takes off first _
                    rightIndex = tempStr.lastIndexOf("_");
                    const noteItemIndex = tempStr.substring(rightIndex + 1);

                    let curToDo = [];

                    let count = new Number(listItemIndex);

                    for (var i = 0; i < tempFilteredToDoList.length; i++) {
                        if (tempFilteredToDoList[i].type == "General") {
                            if (count == 0) { // found curToDo
                                curToDo = tempFilteredToDoList[i];
                                break;
                            } else {
                                count--;
                            }

                        }
                    }
                    let noteIndexNum = new Number(noteItemIndex)

                    if (curToDo.notes[noteIndexNum][1] == "0") {
                        curToDo.notes[noteIndexNum][1] = "1";
                    } else {
                        curToDo.notes[noteIndexNum][1] = "0";
                    }
                    /* Updating Display */
                    const tempDay = new ToDoDayObject("0001-01-01", linesPerPageToDo, toDoMasterList);
                    for (var i = 0; i < tempFilteredToDoList.length; i++) {
                        tempDay.add(tempFilteredToDoList[i]);
                    }
                    injectHTMLToDoTabDisplay(tempDay);
                }

                /* Changing display to addTab add To-Do 
                addTab.click();
                filterCheckboxAddToDo.click();
                addTabUpdateButton.disabled = false;

                displayToDoAddUpdate(curToDo);*/
            } else if (tempID.substring(tempIndex - 4, tempIndex) == "data") {
                console.log("clicked data");

                let curToDo = [];

                if (document.getElementById("hide_date_page_object").classList.contains("hidden")) { // Viewing To-Do's by day
                    curToDo = toDoMasterList.getToDoDisplay(toDoDisplayDayOfWeekDate.value, curList, lastNum);
                } else { // Viewing all To-Do's

                    let rightIndex = tempID.indexOf("to_do_list");
                    const curList = tempID.substring(0, rightIndex - 1);

                    let typeConverted = ""
                    if (curList == "contact_customer") {
                        typeConverted = "Contact Customer";
                    } else if (curList == "site_visit") {
                        typeConverted = "Site Visit";
                    } else if (curList == "svc_calc") {
                        typeConverted = "Service Calc + Coding";
                    } else if (curList == "check_njuns") {
                        typeConverted = "Check/ Apply - NJUNS";
                    } else if (curList == "check_permit") {
                        typeConverted = "Check/ Apply - Permit";
                    } else if (curList == "check_easement") {
                        typeConverted = "Check/ Apply - Easement";
                    } else if (curList == "design") {
                        typeConverted = "Design";
                    } else if (curList == "revisions") {
                        typeConverted = "Revisions";
                    } else if (curList == "general") {
                        typeConverted = "General";
                    } 

                    let leftIndex = tempID.lastIndexOf("_");
                    const curIndex = tempID.substring(leftIndex + 1);

                    let count = new Number(curIndex);

                    for (var i = 0; i < tempFilteredToDoList.length; i++) {
                        if (tempFilteredToDoList[i].type == typeConverted) {
                            if (count == 0) {
                                curToDo = tempFilteredToDoList[i];
                                break;
                            } else {
                                count--;
                            }
                        }
                    }
                }

                /* Changing display to addTab add To-Do */
                console.log("** Clicking addTab and addTabUpdateButton with code. **");
                addTab.click();
                filterCheckboxAddToDo.click();
                addTabUpdateButton.disabled = false;

                displayToDoAddUpdate(curToDo);

            } else if (tempID.substring(tempIndex - 4, tempIndex) == "move") {
                console.log("Fired - Clicked move");

                document.getElementById("to_do_display_move_to_remove_button").classList.remove("hidden");

                const curDate = toDoDisplayDayOfWeekDate.value;
                
                let curToDo= [];
                if (document.getElementById("hide_date_page_object").classList.contains("hidden")) { // Viewing To-Do's by day
                    curToDo = toDoMasterList.getToDoDisplay(curDate, curList, lastNum);
                } else { // Viewing all To-Do's
                    let rightIndex = tempID.indexOf("to_do_list");
                    const curList = tempID.substring(0, rightIndex - 1);

                    let typeConverted = ""
                    if (curList == "contact_customer") {
                        typeConverted = "Contact Customer";
                    } else if (curList == "site_visit") {
                        typeConverted = "Site Visit";
                    } else if (curList == "svc_calc") {
                        typeConverted = "Service Calc + Coding";
                    } else if (curList == "check_njuns") {
                        typeConverted = "Check/ Apply - NJUNS";
                    } else if (curList == "check_permit") {
                        typeConverted = "Check/ Apply - Permit";
                    } else if (curList == "check_easement") {
                        typeConverted = "Check/ Apply - Easement";
                    } else if (curList == "design") {
                        typeConverted = "Design";
                    } else if (curList == "revisions") {
                        typeConverted = "Revisions";
                    } else if (curList == "general") {
                        typeConverted = "General";
                    } 

                    let leftIndex = tempID.lastIndexOf("_");
                    const curIndex = tempID.substring(leftIndex + 1);

                    let count = new Number(curIndex);

                    for (var i = 0; i < tempFilteredToDoList.length; i++) {
                        if (tempFilteredToDoList[i].type == typeConverted) {
                            if (count == 0) {
                                curToDo = tempFilteredToDoList[i];
                                break;
                            } else {
                                count--;
                            }
                        }
                    }
                }

                
                displayToDoMoveToDisplay(curToDo);
                tempCurToDo = [curToDo, moveToDayOfWeekDate.value, curList, lastNum];
                
            } else if (tempID.substring(tempIndex - 8, tempIndex) == "complete" && curList != "general") { // complete for all except general to-do's
                console.log("clicked complete - not general");

                if (document.getElementById("hide_date_page_object").classList.contains("hidden")) { // Displaying To-Do's by day
                    toDoMasterList.complete(toDoDisplayDayOfWeekDate.value, curList, lastNum, tempToDoPageElement);
                } else { // Displaying All To-Do's
                    let order = "";
                    if (filterCheckboxAgeNewAll.checked) {
                        order = "new_old";
                    } else if (filterCheckboxAgeOldAll.checked) {
                        order = "old_new";
                    }
                    //toDoMasterList.completeByMasterIndex(curType, curIndex, tempToDoPageElement, tempFilteredToDoList, order);
                    let rightIndex = tempID.indexOf("to_do_list");
                    const curList = tempID.substring(0, rightIndex - 1);

                    let typeConverted = ""
                    if (curList == "contact_customer") {
                        typeConverted = "Contact Customer";
                    } else if (curList == "site_visit") {
                        typeConverted = "Site Visit";
                    } else if (curList == "svc_calc") {
                        typeConverted = "Service Calc + Coding";
                    } else if (curList == "check_njuns") {
                        typeConverted = "Check/ Apply - NJUNS";
                    } else if (curList == "check_permit") {
                        typeConverted = "Check/ Apply - Permit";
                    } else if (curList == "check_easement") {
                        typeConverted = "Check/ Apply - Easement";
                    } else if (curList == "design") {
                        typeConverted = "Design";
                    } else if (curList == "revisions") {
                        typeConverted = "Revisions";
                    } else if (curList == "general") {
                        typeConverted = "General";
                    } 

                    let leftIndex = tempID.lastIndexOf("_");
                    const curIndex = tempID.substring(leftIndex + 1);

                    let count = new Number(curIndex);

                    for (var i = 0; i < tempFilteredToDoList.length; i++) {
                        if (tempFilteredToDoList[i].type == typeConverted) {
                            if (count == 0) {
                                curToDo = tempFilteredToDoList[i];
                                break;
                            } else {
                                count--;
                            }
                        }
                    }
                    
                    if (curToDo.completed == "0") {
                        curToDo.completed = "1";
                    } else {
                        curToDo.completed = "0";
                    }
                    const tempDay = new ToDoDayObject("0001-01-01", linesPerPageToDo, toDoMasterList);
                    for (var i = 0; i < tempFilteredToDoList.length; i++) {
                        tempDay.add(tempFilteredToDoList[i]);
                    }
                    injectHTMLToDoTabDisplay(tempDay);
                }
                
            } else if (tempID.substring(tempIndex - 8, tempIndex) == "complete") { // complete for general to-do's with work request numbers
                console.log("clicked complete - general - with work request number");

                if (document.getElementById("hide_date_page_object").classList.contains("hidden")) { // Viewing To-Do's by day
                    toDoMasterList.complete(toDoDisplayDayOfWeekDate.value, curList, lastNum, tempToDoPageElement);
                } else { // Viewing all To-Do's
                    let order = "";
                    if (filterCheckboxAgeNewAll.checked) {
                        order = "new_old";
                    } else if (filterCheckboxAgeOldAll.checked) {
                        order = "old_new";
                    }
                    //toDoMasterList.completeByMasterIndex(curType, curIndex, tempToDoPageElement, tempFilteredToDoList, order);
                    let rightIndex = tempID.indexOf("to_do_list");
                    const curList = tempID.substring(0, rightIndex - 1);

                    let typeConverted = ""
                    if (curList == "contact_customer") {
                        typeConverted = "Contact Customer";
                    } else if (curList == "site_visit") {
                        typeConverted = "Site Visit";
                    } else if (curList == "svc_calc") {
                        typeConverted = "Service Calc + Coding";
                    } else if (curList == "check_njuns") {
                        typeConverted = "Check/ Apply - NJUNS";
                    } else if (curList == "check_permit") {
                        typeConverted = "Check/ Apply - Permit";
                    } else if (curList == "check_easement") {
                        typeConverted = "Check/ Apply - Easement";
                    } else if (curList == "design") {
                        typeConverted = "Design";
                    } else if (curList == "revisions") {
                        typeConverted = "Revisions";
                    } else if (curList == "general") {
                        typeConverted = "General";
                    } 

                    let leftIndex = tempID.lastIndexOf("_");
                    const curIndex = tempID.substring(leftIndex + 1);

                    let count = new Number(curIndex);

                    for (var i = 0; i < tempFilteredToDoList.length; i++) {
                        if (tempFilteredToDoList[i].type == typeConverted) {
                            if (count == 0) {
                                curToDo = tempFilteredToDoList[i];
                                break;
                            } else {
                                count--;
                            }
                        }
                    }
                    
                    if (curToDo.completed == "0") {
                        curToDo.completed = "1";
                    } else {
                        curToDo.completed = "0";
                    }
                    const tempDay = new ToDoDayObject("0001-01-01", linesPerPageToDo, toDoMasterList);
                    for (var i = 0; i < tempFilteredToDoList.length; i++) {
                        tempDay.add(tempFilteredToDoList[i]);
                    }
                    injectHTMLToDoTabDisplay(tempDay);
                }
                
            } else if (tempID.substring(tempIndex + 1) == "cb") { // complete for general to-do's without work request numbers
                console.log("clicked complete (note checkbox) - general - without work request number");



                /* Pulls listItemIndex (index of toDoObject within contact customer list) */
                    let tempListItemIndex = tempID.indexOf("item_");
                    let listItemIndexStr = tempID.substring(tempListItemIndex + 5);
                    let endListItemIndex = listItemIndexStr.indexOf("_");
                    const listItemIndex = listItemIndexStr.substring(0, endListItemIndex);

                    /* Pulls noteIndex (index of note within toDoObject notes) */
                    let tempNoteIndexStr = tempID.substring(0, tempIndex);
                    let endNoteIndex = tempNoteIndexStr.lastIndexOf("_");
                    const noteIndex = tempNoteIndexStr.substring(endNoteIndex + 1);

                if (document.getElementById("hide_date_page_object").classList.contains("hidden")) { // Viewing To-Do's by day
                    toDoMasterList.completeNote(toDoDisplayDayOfWeekDate.value, curList, listItemIndex, noteIndex, tempToDoPageElement);
                } else { // Viewing all To-Do's
                    let count = new Number(listItemIndex);

                    let curToDo = [];
                    for (var i = 0; i < tempFilteredToDoList.length; i++) {
                        if (tempFilteredToDoList[i].type == "General") {
                            if (count == 0) { // found curToDo
                                curToDo = tempFilteredToDoList[i];
                                break;
                            } else {
                                count--;
                            }
                            
                            
                        }
                    }
                    let noteIndexNum = new Number(noteIndex);
                    
                    if (curToDo.notes[noteIndexNum][1] == "0") {
                        curToDo.notes[noteIndexNum][1] = "1";
                    } else {
                        curToDo.notes[noteIndexNum][1] = "0";
                    }

                    /* Updating Display */
                    const tempDay = new ToDoDayObject("0001-01-01", linesPerPageToDo, toDoMasterList);
                    for (var i = 0; i < tempFilteredToDoList.length; i++) {
                        tempDay.add(tempFilteredToDoList[i]);
                    }
                    injectHTMLToDoTabDisplay(tempDay);
                }
                

            } else if (tempID.substring(tempIndex - 4, tempIndex) == "note") {
                console.log("clicked note checkbox - general");

                const curToDo = toDoMasterList.getToDoDisplay(toDoDisplayDayOfWeekDate.value, curList, lastNum);

                /* Changing display to addTab add To-Do */
                addTab.click();
                filterCheckboxAddToDo.click();
                addTabUpdateButton.disabled = false;

                displayToDoAddUpdate(curToDo);
            }

           
        } else { // Didn't click on anything actionable 
            console.log("Didn't click anything/ clicked container");
        }

    })
    toDoDisplayMoveToContainer.addEventListener("click", (event) => {
        console.log("Fired - Clicked toDoDisplayMoveToContainer");
        const e = new Error(promptDuration);

        const tempLeftArrow = document.createElement("tempLeftArrow");
        tempLeftArrow.innerHTML = "&#8592";
        const tempRightArrow = document.createElement("tempRightArrow");
        tempRightArrow.innerHTML = "&#8594";
        const tempResetArrow = document.createElement("tempResetArrow");
        tempResetArrow.innerHTML = "&#8634";

        if (event.target.innerHTML == "X") {
            console.log("Fired - Clicked toDoDisplayMoveToContainer X Button");
            toDoDisplayMoveToContainer.classList.add("hidden");
            tempCurToDo[0].dueDate = toDoDisplayDayOfWeekDate.value;
            tempCurToDo[1] = toDoDisplayDayOfWeekDate.value;
            clickedMoveIncompleteButton = 0;
        } else if (event.target.innerHTML == "Save") { 
            if (moveToDayOfWeekDate.value == undefined || moveToDayOfWeekDate.value == "") {
                e.displayInvalidMoveToDate();
            } else if (clickedMoveIncompleteButton == 1) { // moving multiple to-do's
                console.log("Fired - Clicked toDoDisplayMoveToContainer Save button - clickedMoveIncompleteButton == 1");
                
                let tab = "";
                if (document.getElementById("move_to_tab_coordinator").classList.contains("hidden")) {
                    tab = "Coordinator";
                } else if (document.getElementById("move_to_tab_waiting").classList.contains("hidden")) {
                    tab = "Waiting";                     
                } else if (document.getElementById("move_to_tab_on_return_to_office").classList.contains("hidden")) {
                    tab = "On Return To Office";                      
                } else if (document.getElementById("move_to_tab_general").classList.contains("hidden")) {           
                    tab = "General";                            
                } else if (document.getElementById("move_to_tab_mentor").classList.contains("hidden")) {
                    tab = "Mentor";                        
                } 
                console.log("tempToRemove =");
                console.log(tempToRemove);

                console.log("tempFilteredToDoList =");
                console.log(tempFilteredToDoList);
                
                if (document.getElementById("hide_date_page_object").classList.contains("hidden")) { // moving incomplete from "single day" view
                    moveIncompleteFunction(tab, tempToRemove, toDoDisplayDayOfWeekDate.value, moveToDayOfWeekDate.value);
                } else { // moving incomplete from a filtered view - using tempFilteredToDoList
                    console.log("should see this");
                    moveIncompleteFilteredFunction(tab, tempFilteredToDoList, moveToDayOfWeekDate.value);
                }
                
                clickedMoveIncompleteButton = 0;

            } else { // Moving single to-do
                console.log("Fired - Clicked Save button - clickedMoveIncompleteButton == 0");
                tempCurToDo[0].dueDate = moveToDayOfWeekDate.value;
                document.getElementById("to_do_tab_current_page_box").innerHTML = 1;
            
                if (document.getElementById("move_to_tab_coordinator").classList.contains("hidden")) {
                    tempCurToDo[0].tab = "Coordinator";
                } else if (document.getElementById("move_to_tab_waiting").classList.contains("hidden")) {
                    tempCurToDo[0].tab = "Waiting";
                } else if (document.getElementById("move_to_tab_on_return_to_office").classList.contains("hidden")) {
                    tempCurToDo[0].tab = "On Return To Office";
                } else if (document.getElementById("move_to_tab_general").classList.contains("hidden")) {
                    tempCurToDo[0].tab = "General";
                } else if (document.getElementById("move_to_tab_mentor").classList.contains("hidden")) {
                    tempCurToDo[0].tab = "Mentor";
                } 
    
                let temp = [];

                temp = toDoMasterList.getToDo(tempCurToDo[0].toDoId);

                if (document.getElementById("hide_date_page_object").classList.contains("hidden") != true) { // Viewing all To-Do's
                    toDoMasterList.removeById(temp[1].toDoId);
                    toDoMasterList.add(temp[1]);
                    
                    allWrTab.click();
                    toDoTab.click();
                    for (var i = 0; i < toDoMasterList.list.length; i++) {
                        if (toDoMasterList.list[i].dueDate == moveToDayOfWeekDate.value) {
                            injectHTMLToDoTabDisplay(toDoMasterList.list[i]);
                        }
                    }
                    toDoDisplayDayOfWeekDate.value = moveToDayOfWeekDate.value;
                    toDoDisplayMoveToContainer.classList.add("hidden");
                    return;
                }
                let tempDate = temp[1].dueDate;
                
                /* Checks all lists for incomplete to-do's and adds them to tempData */
                for (var i = 0; i < toDoMasterList.list.length; i++) {
                    if (toDoMasterList.list[i].date == toDoDisplayDayOfWeekDate.value) {
                        if (temp[4] == "Contact Customer") {
                            let tempData = [];
                            let tempList = toDoMasterList.list[i].contactCustomerList;
                            
                            for (var j = 0; j < tempList.length; j++) {
                                if (j != tempCurToDo[3]) {
                                    tempData.push(tempList[j]);
                                }
                            }
                            toDoMasterList.list[i].contactCustomerList = tempData; 
                        } else if (temp[4] == "Site Visit") {
                            let tempData = [];
                            let tempList = toDoMasterList.list[i].siteVisitList;
                            
                            for (var j = 0; j < tempList.length; j++) {
                                if (j != tempCurToDo[3]) {
                                    tempData.push(tempList[j]);
                                }
                            }
                            toDoMasterList.list[i].siteVisitList = tempData; 
                        } else if (temp[4] == "Svc Calc") {
                            let tempData = [];
                            let tempList = toDoMasterList.list[i].svcCalcList;
                            
                            for (var j = 0; j < tempList.length; j++) {
                                if (j != tempCurToDo[3]) {
                                    tempData.push(tempList[j]);
                                }
                            }
                            toDoMasterList.list[i].svcCalcList = tempData; 
                        } else if (temp[4] == "Check NJUNS") {
                            let tempData = [];
                            let tempList = toDoMasterList.list[i].checkNJUNSList;
                            
                            for (var j = 0; j < tempList.length; j++) {
                                if (j != tempCurToDo[3]) {
                                    tempData.push(tempList[j]);
                                }
                            }
                            toDoMasterList.list[i].checkNJUNSList = tempData; 
                        } else if (temp[4] == "Check Permit") {
                            let tempData = [];
                            let tempList = toDoMasterList.list[i].checkPermitList;
                            
                            for (var j = 0; j < tempList.length; j++) {
                                if (j != tempCurToDo[3]) {
                                    tempData.push(tempList[j]);
                                }
                            }
                            toDoMasterList.list[i].checkPermitList = tempData; 
                        } else if (temp[4] == "Check Easement") {
                            let tempData = [];
                            let tempList = toDoMasterList.list[i].checkEasementList;
                            
                            for (var j = 0; j < tempList.length; j++) {
                                if (j != tempCurToDo[3]) {
                                    tempData.push(tempList[j]);
                                }
                            }
                            toDoMasterList.list[i].checkEasementList = tempData; 
                        } else if (temp[4] == "Design") {
                            let tempData = [];
                            let tempList = toDoMasterList.list[i].designList;
                            
                            for (var j = 0; j < tempList.length; j++) {
                                if (j != tempCurToDo[3]) {
                                    tempData.push(tempList[j]);
                                }
                            }
                            toDoMasterList.list[i].designList = tempData; 
                        } else if (temp[4] == "Revisions") {
                            let tempData = [];
                            let tempList = toDoMasterList.list[i].revisionsList;
                            
                            for (var j = 0; j < tempList.length; j++) {
                                if (j != tempCurToDo[3]) {
                                    tempData.push(tempList[j]);
                                }
                            }
                            toDoMasterList.list[i].revisionsList = tempData; 
                        } else if (temp[4] == "General") {
                            let tempData = [];
                            let tempList = toDoMasterList.list[i].generalList;
                            
                            for (var j = 0; j < tempList.length; j++) {
                                if (j != tempCurToDo[3]) {
                                    tempData.push(tempList[j]);
                                }
                            }
                            toDoMasterList.list[i].generalList = tempData; 
                        } 
                    }
                }
                /* Adding tempCurToDo to main list */
                toDoMasterList.add(tempCurToDo[0]);

                /* Updating Display and Page Data */
                for (var i = 0; i < toDoMasterList.list.length; i++) {
                    if (toDoMasterList.list[i].date == moveToDayOfWeekDate.value) {
                        toDoDisplayDayOfWeekDate.value = moveToDayOfWeekDate.value;
                        tempToDoPageElement = injectHTMLToDoTabDisplay(toDoMasterList.list[i]);

                        /* Checking Tab */
                        if (document.getElementById("move_to_tab_general").classList.contains("hidden")) {
                            console.log("move to general entered");
                            toDoGeneralTab.click();
                        } else if (document.getElementById("move_to_tab_mentor").classList.contains("hidden")) {
                            console.log("move to mentor entered");
                            toDoMentorTab.click();
                        } else if (document.getElementById("move_to_tab_coordinator").classList.contains("hidden")) {
                            console.log("move to coordinator entered");
                            toDoCoordinatorTab.click();
                        } else if (document.getElementById("move_to_tab_waiting").classList.contains("hidden")) {
                            console.log("move to waiting entered");
                            toDoWaitingTab.click();
                        } else if (document.getElementById("move_to_tab_on_return_to_office").classList.contains("hidden")) {
                            console.log("move to on return to office entered");
                            toDoOnReturnToOfficeTab.click();
                        } 

                        setFromToDates("to_do_display", toDoDisplayDayOfWeekDate.value);
    
                        let d = new Date(toDoDisplayDayOfWeekDate.value);
                        let year = d.getFullYear();
                        let month = d.getMonth() + 1;
                        if (month < 10) {
                            month = "0" + month;
                        }
                        let day = d.getDate();
                        if (day < 10) {
                            day = "0" + day;
                        }
    
                        let temp = new Date(addDays(year, month, day, 2));
    
                        setDay("to_do_display", temp.getDay());
    
                    }
                }
                console.log("above add hidden");
                toDoDisplayMoveToContainer.classList.add("hidden");
            }

            

        } else if (event.target.innerHTML == "Su" && !event.target.classList.contains("activeTab")) {
            clearDays("move_to");

            document.getElementById("move_to_tab_day_of_week_box_sunday").classList.add("hidden");
            document.getElementById("move_to_tab_day_of_week_box_sunday_active").classList.remove("hidden");
            assessDayOfWeekChange("move_to", 0);
            tempCurToDo[1] = moveToDayOfWeekDate.value;
            tempCurToDo[0].dueDate = moveToDayOfWeekDate.value;
        } else if (event.target.innerHTML == "M" && !event.target.classList.contains("activeTab")) {
            clearDays("move_to");

            document.getElementById("move_to_tab_day_of_week_box_monday").classList.add("hidden");
            document.getElementById("move_to_tab_day_of_week_box_monday_active").classList.remove("hidden");
            assessDayOfWeekChange("move_to", 1);
            tempCurToDo[1] = moveToDayOfWeekDate.value;
            tempCurToDo[0].dueDate = moveToDayOfWeekDate.value;
        } else if (event.target.innerHTML == "Tu" && !event.target.classList.contains("activeTab")) {
            clearDays("move_to");

            document.getElementById("move_to_tab_day_of_week_box_tuesday").classList.add("hidden");
            document.getElementById("move_to_tab_day_of_week_box_tuesday_active").classList.remove("hidden");
            assessDayOfWeekChange("move_to", 2);
            tempCurToDo[1] = moveToDayOfWeekDate.value;
            tempCurToDo[0].dueDate = moveToDayOfWeekDate.value;
        } else if (event.target.innerHTML == "W" && !event.target.classList.contains("activeTab")) {
            clearDays("move_to");

            document.getElementById("move_to_tab_day_of_week_box_wednesday").classList.add("hidden");
            document.getElementById("move_to_tab_day_of_week_box_wednesday_active").classList.remove("hidden");
            assessDayOfWeekChange("move_to", 3);
            tempCurToDo[1] = moveToDayOfWeekDate.value;
            tempCurToDo[0].dueDate = moveToDayOfWeekDate.value;
        } else if (event.target.innerHTML == "Th" && !event.target.classList.contains("activeTab")) {
            clearDays("move_to");

            document.getElementById("move_to_tab_day_of_week_box_thursday").classList.add("hidden");
            document.getElementById("move_to_tab_day_of_week_box_thursday_active").classList.remove("hidden");
            assessDayOfWeekChange("move_to", 4);
            tempCurToDo[1] = moveToDayOfWeekDate.value;
            tempCurToDo[0].dueDate = moveToDayOfWeekDate.value;
        } else if (event.target.innerHTML == "F" && !event.target.classList.contains("activeTab")) {
            clearDays("move_to");

            document.getElementById("move_to_tab_day_of_week_box_friday").classList.add("hidden");
            document.getElementById("move_to_tab_day_of_week_box_friday_active").classList.remove("hidden");
            assessDayOfWeekChange("move_to", 5);
            tempCurToDo[1] = moveToDayOfWeekDate.value;
            tempCurToDo[0].dueDate = moveToDayOfWeekDate.value;
        } else if (event.target.innerHTML == "Sa" && !event.target.classList.contains("activeTab")) {
            clearDays("move_to");

            document.getElementById("move_to_tab_day_of_week_box_saturday").classList.add("hidden");
            document.getElementById("move_to_tab_day_of_week_box_saturday_active").classList.remove("hidden");
            assessDayOfWeekChange("move_to", 6);
            tempCurToDo[1] = moveToDayOfWeekDate.value;
            tempCurToDo[0].dueDate = moveToDayOfWeekDate.value;
            console.log("changed tempCurToDo[1] to");
            console.log(moveToDayOfWeekDate.value);
        } else if (event.target.innerHTML == tempLeftArrow.innerHTML) { // left arrow
            if (moveToDayOfWeekDate.value == "0001-01-01" || moveToDayOfWeekDate.value == "0001-01-02" || 
            moveToDayOfWeekDate.value == "0001-01-03" || moveToDayOfWeekDate.value == "0001-01-04" ||
            moveToDayOfWeekDate.value == "0001-01-05" || moveToDayOfWeekDate.value == "0001-01-06" ||
            moveToDayOfWeekDate.value == "0001-01-07") {
                e.displayInvalidMoveToDate();
            } else {
                let curDate = moveToDayOfWeekDate.value;
                const year = curDate.substring(0, 4);
                const month = curDate.substring(5, 7);
                const day = curDate.substring(8, 10);
                moveToDayOfWeekDate.value = subtractDays(year, month, day, 7);
                setFromToDates("move_to", moveToDayOfWeekDate.value);
                tempCurToDo[1] = moveToDayOfWeekDate.value;
                tempCurToDo[0].dueDate = moveToDayOfWeekDate.value;
            }
            
        } else if (event.target.innerHTML == tempRightArrow.innerHTML) { // right arrow
            let curDate = moveToDayOfWeekDate.value;
            const year = curDate.substring(0, 4);
            const month = curDate.substring(5, 7);
            const day = curDate.substring(8, 10);
            moveToDayOfWeekDate.value = addDays(year, month, day, 7);
            setFromToDates("move_to", moveToDayOfWeekDate.value);
            tempCurToDo[1] = moveToDayOfWeekDate.value;
            tempCurToDo[0].dueDate = moveToDayOfWeekDate.value;

        } else if (event.target.innerHTML == "Coordinator") {
            clearMoveToTabs();

            document.getElementById("move_to_tab_coordinator").classList.add("hidden");
            document.getElementById("move_to_tab_coordinator_active").classList.remove("hidden");
        } else if (event.target.innerHTML == "Waiting") {
            clearMoveToTabs();

            document.getElementById("move_to_tab_waiting").classList.add("hidden");
            document.getElementById("move_to_tab_waiting_active").classList.remove("hidden");
        } else if (event.target.innerHTML == "On Return" || event.target.innerHTML == "To Office") {
            clearMoveToTabs();

            document.getElementById("move_to_tab_on_return_to_office").classList.add("hidden");
            document.getElementById("move_to_tab_on_return_to_office_active").classList.remove("hidden");
        } else if (event.target.innerHTML == "General") {
            clearMoveToTabs();

            document.getElementById("move_to_tab_general").classList.add("hidden");
            document.getElementById("move_to_tab_general_active").classList.remove("hidden");
        } else if (event.target.innerHTML == "Mentor") {
            clearMoveToTabs();

            document.getElementById("move_to_tab_mentor").classList.add("hidden");
            document.getElementById("move_to_tab_mentor_active").classList.remove("hidden");
        } else if (event.target.innerHTML == tempResetArrow.innerHTML) { // reset arrow
            console.log("clicked reset arrow");
            const d = new Date();
            const year = d.getFullYear();
            let month = d.getMonth() + 1;
            if (month < 10) {
                month = "0" + month;
            }
            let day = d.getDate();
            if (day < 10) {
                day = "0" + day;
            }
            moveToDayOfWeekDate.value = year + "-" + month + "-" + day;
            setFromToDates("move_to", moveToDayOfWeekDate.value);
            setDay("move_to", d.getDay());
            tempCurToDo[1] = moveToDayOfWeekDate.value;
            tempCurToDo[0].dueDate = moveToDayOfWeekDate.value;
        }
    })
    toDoDisplayDatePrevButton.addEventListener("click", (event) => {
        console.log("Fired - Clicked toDoDisplayDatePrevButton");

        const e = new Error(promptDuration);

        if (toDoDisplayDayOfWeekDate.value == "0001-01-01") {
            e.displayInvalidDateToDoDisplay();
        } else {
            let curDate = toDoDisplayDayOfWeekDate.value;
            const year = curDate.substring(0, 4);
            const month = curDate.substring(5, 7);
            const day = curDate.substring(8, 10);
            toDoDisplayDayOfWeekDate.value = subtractDays(year, month, day, 1);
            toDoDisplayDayOfWeekDateMouseoutFunction();
        }
        
    })
    toDoDisplayDateNextButton.addEventListener("click", (event) => {
        console.log("Fired - Clicked toDoDisplayDateNextButton");

        let curDate = toDoDisplayDayOfWeekDate.value;
        const year = curDate.substring(0, 4);
        const month = curDate.substring(5, 7);
        const day = curDate.substring(8, 10);
        toDoDisplayDayOfWeekDate.value = addDays(year, month, day, 1);
        toDoDisplayDayOfWeekDateMouseoutFunction();
    })

        /* Page Prev/Next Buttons */
    toDoTabPageNextButton.addEventListener("click", (event) => {
        console.log("Fired - Clicked toDoTabPageNextButton");

        if (document.getElementById("hide_date_page_object").classList.contains("hidden")) { // normal toDoDisplay by day
            const curPage = new Number (document.getElementById("to_do_tab_current_page_box").innerHTML.trim());

            tempToDoPageElement.display(curPage + 1);
    
            document.getElementById("to_do_tab_current_page_box").innerHTML = (curPage + 1);
            toDoTabPagePrevButton.disabled = false;
    
            if ((curPage + 1) == tempToDoPageElement.pages.length) {
                toDoTabPageNextButton.disabled = true;
            }
        } else { // using tempToDoMasterlist
            const curPage = new Number (document.getElementById("to_do_tab_current_page_box").innerHTML.trim());

            //tempToDoMasterList.list[0].display(curPage + 1);
            document.getElementById("to_do_tab_current_page_box").innerHTML = (curPage + 1);
            tempToDoMasterList.list[0].makePageElement();
            toDoTabPagePrevButton.disabled = false;

            const totalPages = tempToDoMasterList.list[0].length / linesPerPageToDo;

            if ((curPage + 1) == totalPages) {
                toDoTabPageNextButton.disabled = true;
            }
    
            /*if ((curPage + 1) == tempToDoMasterList.list[0].length) {
                toDoTabPageNextButton.disabled = true;
            }*/
        }

        

    })
    toDoTabPagePrevButton.addEventListener("click", (event) => {
        console.log("Fired - Clicked toDoTabPagePrevButton");
        
        if (document.getElementById("hide_date_page_object").classList.contains("hidden")) { // normal toDoDisplay by day
            const curPage = new Number (document.getElementById("to_do_tab_current_page_box").innerHTML.trim());

            tempToDoPageElement.display(curPage - 1);
    
            document.getElementById("to_do_tab_current_page_box").innerHTML = (curPage - 1);
            toDoTabPageNextButton.disabled = false;
    
            if ((curPage - 1) == 1) {
                toDoTabPagePrevButton.disabled = true;
            }
        } else { // using tempToDoMasterlist
            const curPage = new Number (document.getElementById("to_do_tab_current_page_box").innerHTML.trim());
            
            document.getElementById("to_do_tab_current_page_box").innerHTML = (curPage - 1);

            tempToDoMasterList.list[0].makePageElement();
            toDoTabPageNextButton.disabled = false;

            if ((curPage - 1) == 1) {
                toDoTabPagePrevButton.disabled = true;
            }
        }


        

    })

        /* Tabs */
    toDoGeneralTab.addEventListener("click", (event) => {
        console.log("Fired - Clicked toDoGeneralTab");

        document.getElementById("to_do_display_row_one_label").innerHTML = "General To-Do's:"
        document.getElementById("to_do_display_row_one_label").style.marginLeft = '50px';
        document.getElementById("to_do_display_row_one_label").style.marginRight = '0px';
        document.getElementById("to_do_display_row_one_label").style.fontSize = 'x-large';


        toDoDisplayDeselectTabs();
        toDoGeneralTab.classList.add("hidden");
        toDoGeneralTabActive.classList.remove("hidden");

        document.getElementById("to_do_tab_current_page_box").innerHTML = "1";

        let index = undefined;

        for (var i = 0; i < toDoMasterList.list.length; i++) {
            if (toDoMasterList.list[i].date == toDoDisplayDayOfWeekDate.value) {
                index = i;
                break;
            }
        }

        if (index != undefined) {
            let filteredList = toDoMasterList.list[index].filterToDosByTab("General");

            if (filteredList.flatten().length == 0) {
                toDoDisplayRowElementContainer.innerHTML = `<div class="noToDosForToday" id="no_to_dos_for_today_prompt">No To-Do's for Today</div>`;
            } else {
                tempToDoPageElement = injectHTMLToDoTabDisplay(filteredList);
            }
        } else {
            toDoDisplayRowElementContainer.innerHTML = `<div class="noToDosForToday" id="no_to_dos_for_today_prompt">No To-Do's for Today</div>`;
        }
    })
    toDoGeneralTabActive.addEventListener("click", (event) => {
        console.log("Fired - Clicked toDoGeneralTabActive");

        // May leave this blank as default
    })
    toDoMentorTab.addEventListener("click", (event) => {
        console.log("Fired - Clicked toDoMentorTab");

        document.getElementById("to_do_display_row_one_label").innerHTML = "To-Do's For Mentor:"
        document.getElementById("to_do_display_row_one_label").style.marginLeft = '30px';
        document.getElementById("to_do_display_row_one_label").style.marginRight = '-17px';
        document.getElementById("to_do_display_row_one_label").style.fontSize = 'x-large';

        toDoDisplayDeselectTabs();
        toDoMentorTab.classList.add("hidden");
        toDoMentorTabActive.classList.remove("hidden");

        document.getElementById("to_do_tab_current_page_box").innerHTML = "1";

        let index = undefined;

        for (var i = 0; i < toDoMasterList.list.length; i++) {
            if (toDoMasterList.list[i].date == toDoDisplayDayOfWeekDate.value) {
                index = i;
                break;
            }
        }

        if (index != undefined) {
            let filteredList = toDoMasterList.list[index].filterToDosByTab("Mentor");

            if (filteredList.flatten().length == 0) {
                toDoDisplayRowElementContainer.innerHTML = `<div class="noToDosForToday" id="no_to_dos_for_today_prompt">No To-Do's for Today</div>`;
            } else {
                tempToDoPageElement = (filteredList);
            }
        } else {
            toDoDisplayRowElementContainer.innerHTML = `<div class="noToDosForToday" id="no_to_dos_for_today_prompt">No To-Do's for Today</div>`;
        }
        
    })
    toDoMentorTabActive.addEventListener("click", (event) => {
        console.log("Fired - Clicked toDoMentorTabActive");

        toDoGeneralTab.click(); // settings general as default
    })
    toDoCoordinatorTab.addEventListener("click", (event) => {
        console.log("Fired - Clicked toDoCoordinatorTab");

        document.getElementById("to_do_display_row_one_label").innerHTML = "To-Do's For Coordinator:"
        document.getElementById("to_do_display_row_one_label").style.marginLeft = '10px';
        document.getElementById("to_do_display_row_one_label").style.marginRight = '-43px';
        document.getElementById("to_do_display_row_one_label").style.fontSize = 'x-large';

        toDoDisplayDeselectTabs();
        toDoCoordinatorTab.classList.add("hidden");
        toDoCoordinatorTabActive.classList.remove("hidden");

        document.getElementById("to_do_tab_current_page_box").innerHTML = "1";

        let index = undefined;

        for (var i = 0; i < toDoMasterList.list.length; i++) {
            if (toDoMasterList.list[i].date == toDoDisplayDayOfWeekDate.value) {
                index = i;
                break;
            }
        }

        if (index != undefined) {
            let filteredList = toDoMasterList.list[index].filterToDosByTab("Coordinator");

            if (filteredList.flatten().length == 0) {
                toDoDisplayRowElementContainer.innerHTML = `<div class="noToDosForToday" id="no_to_dos_for_today_prompt">No To-Do's for Today</div>`;
            } else {
                tempToDoPageElement = injectHTMLToDoTabDisplay(filteredList);
            }
        } else {
            toDoDisplayRowElementContainer.innerHTML = `<div class="noToDosForToday" id="no_to_dos_for_today_prompt">No To-Do's for Today</div>`;
        }
    })
    toDoCoordinatorTabActive.addEventListener("click", (event) => {
        console.log("Fired - Clicked toDoCoordinatorTabActive");

        toDoGeneralTab.click(); // settings general as default
    })
    toDoWaitingTab.addEventListener("click", (event) => {
        console.log("Fired - Clicked toDoWaitingTab");

        document.getElementById("to_do_display_row_one_label").innerHTML = "Waiting On To-Do's:"
        document.getElementById("to_do_display_row_one_label").style.marginLeft = '30px';
        document.getElementById("to_do_display_row_one_label").style.marginRight = '-14px';
        document.getElementById("to_do_display_row_one_label").style.fontSize = 'x-large';

        toDoDisplayDeselectTabs();
        toDoWaitingTab.classList.add("hidden");
        toDoWaitingTabActive.classList.remove("hidden");

        document.getElementById("to_do_tab_current_page_box").innerHTML = "1";

        let index = undefined;

        for (var i = 0; i < toDoMasterList.list.length; i++) {
            if (toDoMasterList.list[i].date == toDoDisplayDayOfWeekDate.value) {
                index = i;
                break;
            }
        }

        if (index != undefined) {
            let filteredList = toDoMasterList.list[index].filterToDosByTab("Waiting");

            if (filteredList.flatten().length == 0) {
                toDoDisplayRowElementContainer.innerHTML = `<div class="noToDosForToday" id="no_to_dos_for_today_prompt">No To-Do's for Today</div>`;
            } else {
                tempToDoPageElement = injectHTMLToDoTabDisplay(filteredList);
            }
        } else {
            toDoDisplayRowElementContainer.innerHTML = `<div class="noToDosForToday" id="no_to_dos_for_today_prompt">No To-Do's for Today</div>`;
        }
    })
    toDoWaitingTabActive.addEventListener("click", (event) => {
        console.log("Fired - Clicked toDoWaitingTabActive");

        toDoGeneralTab.click(); // settings general as default
    })
    toDoOnReturnToOfficeTab.addEventListener("click", (event) => {
        console.log("Fired - Clicked toDoOnReturnToOfficeTab");

        document.getElementById("to_do_display_row_one_label").innerHTML = "To-Do's On Return To Office:"
        document.getElementById("to_do_display_row_one_label").style.fontSize = 'large';
        document.getElementById("to_do_display_row_one_label").style.marginLeft = '10px';
        document.getElementById("to_do_display_row_one_label").style.marginRight = '-10px';
        document.getElementById("to_do_display_day_of_week_container").style.marginLeft = '-20px';
        document.getElementById("to_do_display_day_of_week_date").style.marginRight = '-20px';

        toDoDisplayDeselectTabs();
        toDoOnReturnToOfficeTab.classList.add("hidden");
        toDoOnReturnToOfficeTabActive.classList.remove("hidden");

        document.getElementById("to_do_tab_current_page_box").innerHTML = "1";

        let index = undefined;

        for (var i = 0; i < toDoMasterList.list.length; i++) {
            if (toDoMasterList.list[i].date == toDoDisplayDayOfWeekDate.value) {
                index = i;
                break;
            }
        }

        if (index != undefined) {
            let filteredList = toDoMasterList.list[index].filterToDosByTab("On Return To Office");

            if (filteredList.flatten().length == 0) {
                toDoDisplayRowElementContainer.innerHTML = `<div class="noToDosForToday" id="no_to_dos_for_today_prompt">No To-Do's for Today</div>`;
            } else {
                tempToDoPageElement = injectHTMLToDoTabDisplay(filteredList);
            }
        } else {
            toDoDisplayRowElementContainer.innerHTML = `<div class="noToDosForToday" id="no_to_dos_for_today_prompt">No To-Do's for Today</div>`;
        }
    })
    toDoOnReturnToOfficeTabActive.addEventListener("click", (event) => {
        console.log("Fired - Clicked toDoOnReturnToOfficeTabActive");

        toDoGeneralTab.click(); // settings general as default
    })
    
    /* Permits Tab */       /* Permits Tab */       /* Permits Tab */       /* Permits Tab */       /* Permits Tab */       /* Permits Tab */


        /* Priority Numbers */
    permitsTabRowOnePriority.addEventListener("change", (event) => {
        console.log("Changed - permitsTabRowOnePriority changed to - " + event);

        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + 1 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];
        

        currentWr.priorityNumber = event.target.value;
        currentWr.permit.dateUpdated = 
        allWrList[curWrIndex] = currentWr;        
    })
    permitsTabRowTwoPriority.addEventListener("change", (event) => {
        console.log("Changed - permitsTabRowTwoPriority changed to - " + event);

        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + 2 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];
        

        currentWr.priorityNumber = event.target.value;
        allWrList[curWrIndex] = currentWr;        
    })
    permitsTabRowThreePriority.addEventListener("change", (event) => {
        console.log("Changed - permitsTabRowThreePriority changed to - " + event);

        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + 3 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];
        

        currentWr.priorityNumber = event.target.value;
        allWrList[curWrIndex] = currentWr;        
    })
    permitsTabRowFourPriority.addEventListener("change", (event) => {
        console.log("Changed - permitsTabRowFourPriority changed to - " + event);

        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + 4 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];
        

        currentWr.priorityNumber = event.target.value;
        allWrList[curWrIndex] = currentWr;        
    })
    permitsTabRowFivePriority.addEventListener("change", (event) => {
        console.log("Changed - permitsTabRowFivePriority changed to - " + event);

        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + 5 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];
        

        currentWr.priorityNumber = event.target.value;
        allWrList[curWrIndex] = currentWr;        
    })
    permitsTabRowSixPriority.addEventListener("change", (event) => {
        console.log("Changed - permitsTabRowSixPriority changed to - " + event);

        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + 6 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];
        

        currentWr.priorityNumber = event.target.value;
        allWrList[curWrIndex] = currentWr;        
    })
    permitsTabRowSevenPriority.addEventListener("change", (event) => {
        console.log("Changed - permitsTabRowSevenPriority changed to - " + event);

        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + 7 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];
        

        currentWr.priorityNumber = event.target.value;
        allWrList[curWrIndex] = currentWr;        
    })
    permitsTabRowEightPriority.addEventListener("change", (event) => {
        console.log("Changed - permitsTabRowEightPriority changed to - " + event);

        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + 8 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];
        

        currentWr.priorityNumber = event.target.value;
        allWrList[curWrIndex] = currentWr;        
    })

        /* Addresses */
    permitsTabRowOneAddress.addEventListener("click", (event) => {
        console.log("Fired - clicked permitsTabRowOneAddress");

        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + 1 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        displayPermitAddUpdate(currentWr);
        //document.getElementById("add_tab").click();
        //document.getElementById("filter_checkbox_add_permit").click();
        clearAddTabCheckboxes();
        filterCheckboxAddPermit.checked = true;
        document.getElementById("add_tab_display_header_left").innerHTML = "Update";
        document.getElementById("add_tab_display_header_left").style.marginRight = "20px";
        clearAddTabDisplays();
        addTabDisplayHeaderLabel.innerHTML = "\"Permit\"";
        addTabDisplayWorkRequestNumberLabel.innerHTML = "Permit for Work Request Number";
        addTabDisplayWorkRequestNumberLabel.classList.add("newWorkRequestNumberTextfieldLabelBig");
        addTabDisplayAddPermit.classList.remove("hidden");

        addTabAddButton.classList.add("hidden");

        document.getElementById("add_tab_update_button").disabled = false;
    })
    permitsTabRowTwoAddress.addEventListener("click", (event) => {
        console.log("Fired - clicked permitsTabRowTwoAddress");

        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + 2 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        displayPermitAddUpdate(currentWr);
        document.getElementById("add_tab").click();
        document.getElementById("filter_checkbox_add_permit").click();
        document.getElementById("add_tab_update_button").disabled = false;
    })
    permitsTabRowThreeAddress.addEventListener("click", (event) => {
        console.log("Fired - clicked permitsTabRowThreeAddress");

        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + 3 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        displayPermitAddUpdate(currentWr);
        document.getElementById("add_tab").click();
        document.getElementById("filter_checkbox_add_permit").click();
        document.getElementById("add_tab_update_button").disabled = false;
    })
    permitsTabRowFourAddress.addEventListener("click", (event) => {
        console.log("Fired - clicked permitsTabRowFourAddress");

        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + 4 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        displayPermitAddUpdate(currentWr);
        document.getElementById("add_tab").click();
        document.getElementById("filter_checkbox_add_permit").click();
        document.getElementById("add_tab_update_button").disabled = false;
    })
    permitsTabRowFiveAddress.addEventListener("click", (event) => {
        console.log("Fired - clicked permitsTabRowFiveAddress");

        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + 5 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        displayPermitAddUpdate(currentWr);
        document.getElementById("add_tab").click();
        document.getElementById("filter_checkbox_add_permit").click();
        document.getElementById("add_tab_update_button").disabled = false;
    })
    permitsTabRowSixAddress.addEventListener("click", (event) => {
        console.log("Fired - clicked permitsTabRowSixAddress");

        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + 6 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        displayPermitAddUpdate(currentWr);
        document.getElementById("add_tab").click();
        document.getElementById("filter_checkbox_add_permit").click();
        document.getElementById("add_tab_update_button").disabled = false;
    })
    permitsTabRowSevenAddress.addEventListener("click", (event) => {
        console.log("Fired - clicked permitsTabRowSevenAddress");

        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + 7 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        displayPermitAddUpdate(currentWr);
        document.getElementById("add_tab").click();
        document.getElementById("filter_checkbox_add_permit").click();
        document.getElementById("add_tab_update_button").disabled = false;
    })
    permitsTabRowEightAddress.addEventListener("click", (event) => {
        console.log("Fired - clicked permitsTabRowEightAddress");

        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + 8 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        displayPermitAddUpdate(currentWr);
        document.getElementById("add_tab").click();
        document.getElementById("filter_checkbox_add_permit").click();
        document.getElementById("add_tab_update_button").disabled = false;
    })

        /* CRDs */
    function permitsTabCrdFunction(row, event) {
        console.log("Entered - permitsTabCrdFunction(" + row + ")");

        let rowNumberText = convertNumText(row); 

        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + row - 1); // Will need to change when more rows
        let currentWr = allWrList[curWrIndex];

        if (event.target.value != currentWr.crd) {
            currentWr.crd = event.target.value;
            let d = new Date(currentWr.crd);
            document.getElementById("permits_tab_row_" + rowNumberText + "_crd_date").style.backgroundColor = assessDateCRD(d, userColors);
            
            d = new Date(document.getElementById("permits_tab_row_" + rowNumberText + "_rcd_date").value);
            document.getElementById("permits_tab_row_" + rowNumberText + "_rcd_date").style.backgroundColor = assessDateRCD(d, userColors);

            allWrList[curWrIndex] = currentWr;
            crdRcdCheck(currentWr.crd, currentWr.rcd, "permits", rowNumberText);
            
        }

    }
    permitsTabRowOneCrd.addEventListener("mouseout", (event) => {
        console.log("mousedout - permitsTabRowOneCrd changed to - " + event);

        permitsTabCrdFunction("1", event);
    })
    permitsTabRowOneCrd.addEventListener("click", (event) => {
        console.log("Fired - Clicked permitsTabRowOneCrd");

        dropdownCover.classList.remove("hidden");
    })
    permitsTabRowTwoCrd.addEventListener("mouseout", (event) => {
        console.log("mousedout - permitsTabRowTwoCrd changed to - " + event);

        permitsTabCrdFunction("2", event);
    })
    permitsTabRowTwoCrd.addEventListener("click", (event) => {
        console.log("Fired - Clicked permitsTabRowTwoCrd");

        dropdownCover.classList.remove("hidden");
    })
    permitsTabRowThreeCrd.addEventListener("mouseout", (event) => {
        console.log("mousedout - permitsTabRowThreeCrd changed to - " + event);

        permitsTabCrdFunction("3", event);
    })
    permitsTabRowThreeCrd.addEventListener("click", (event) => {
        console.log("Fired - Clicked permitsTabRowThreeCrd");

        dropdownCover.classList.remove("hidden");
    })
    permitsTabRowFourCrd.addEventListener("mouseout", (event) => {
        console.log("mousedout - permitsTabRowFourCrd changed to - " + event);

        permitsTabCrdFunction("4", event);
    })
    permitsTabRowFourCrd.addEventListener("click", (event) => {
        console.log("Fired - Clicked permitsTabRowFourCrd");

        dropdownCover.classList.remove("hidden");
    })
    permitsTabRowFiveCrd.addEventListener("mouseout", (event) => {
        console.log("mousedout - permitsTabRowFiveCrd changed to - " + event);

        permitsTabCrdFunction("5", event);
    })
    permitsTabRowFiveCrd.addEventListener("click", (event) => {
        console.log("Fired - Clicked permitsTabRowFiveCrd");

        dropdownCover.classList.remove("hidden");
    })
    permitsTabRowSixCrd.addEventListener("mouseout", (event) => {
        console.log("mousedout - permitsTabRowSixCrd changed to - " + event);

        permitsTabCrdFunction("6", event);
    })
    permitsTabRowSixCrd.addEventListener("click", (event) => {
        console.log("Fired - Clicked permitsTabRowSixCrd");

        dropdownCover.classList.remove("hidden");
    })
    permitsTabRowSevenCrd.addEventListener("mouseout", (event) => {
        console.log("mousedout - permitsTabRowSevenCrd changed to - " + event);

        permitsTabCrdFunction("7", event);
    })
    permitsTabRowSevenCrd.addEventListener("click", (event) => {
        console.log("Fired - Clicked permitsTabRowSevenCrd");

        dropdownCover.classList.remove("hidden");
    })
    permitsTabRowEightCrd.addEventListener("mouseout", (event) => {
        console.log("mousedout - permitsTabRowEightCrd changed to - " + event);

        permitsTabCrdFunction("8", event);
    })
    permitsTabRowEightCrd.addEventListener("click", (event) => {
        console.log("Fired - Clicked permitsTabRowEightCrd");

        dropdownCover.classList.remove("hidden");
    })

        /* RCDs */
    function permitsTabRcdFunction(row, event) {
        console.log("Entered - permitsTabRcdFunction(" + row + ")");

        let rowNumberText = convertNumText(row); 


        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + row - 1); // Will need to change when more rows
        let currentWr = allWrList[curWrIndex];

        if (event.target.value != currentWr.rcd) {
            currentWr.rcd = event.target.value;
            let d = new Date(currentWr.rcd);
            document.getElementById("permits_tab_row_" + rowNumberText + "_rcd_date").style.backgroundColor = assessDateRCD(d, userColors);
            
            d = new Date(document.getElementById("permits_tab_row_" + rowNumberText + "_crd_date").value);
            document.getElementById("permits_tab_row_" + rowNumberText + "_crd_date").style.backgroundColor = assessDateCRD(d, userColors);

            allWrList[curWrIndex] = currentWr;
            crdRcdCheck(currentWr.crd, currentWr.rcd, "permits", rowNumberText);
        }
    }    
    permitsTabRowOneRcd.addEventListener("mouseout", (event) => {
        console.log("mousedout - permitsTabRowOneRcd changed to - " + event);

        permitsTabRcdFunction("1", event);
    })
    permitsTabRowOneRcd.addEventListener("click", (event) => {
        console.log("Fired - Clicked permitsTabRowOneRcd");

        dropdownCover.classList.remove("hidden");
    })
    permitsTabRowTwoRcd.addEventListener("mouseout", (event) => {
        console.log("mousedout - permitsTabRowTwoRcd changed to - " + event);

        permitsTabRcdFunction("2", event);
    })
    permitsTabRowTwoRcd.addEventListener("click", (event) => {
        console.log("Fired - Clicked permitsTabRowTwoRcd");

        dropdownCover.classList.remove("hidden");
    })
    permitsTabRowThreeRcd.addEventListener("mouseout", (event) => {
        console.log("mousedout - permitsTabRowThreeRcd changed to - " + event);

        permitsTabRcdFunction("3", event);
    })
    permitsTabRowThreeRcd.addEventListener("click", (event) => {
        console.log("Fired - Clicked permitsTabRowThreeRcd");

        dropdownCover.classList.remove("hidden");
    })
    permitsTabRowFourRcd.addEventListener("mouseout", (event) => {
        console.log("mousedout - permitsTabRowFourRcd changed to - " + event);

        permitsTabRcdFunction("4", event);
    })
    permitsTabRowFourRcd.addEventListener("click", (event) => {
        console.log("Fired - Clicked permitsTabRowFourRcd");

        dropdownCover.classList.remove("hidden");
    })
    permitsTabRowFiveRcd.addEventListener("mouseout", (event) => {
        console.log("mousedout - permitsTabRowFiveRcd changed to - " + event);

        permitsTabRcdFunction("5", event);
    })
    permitsTabRowFiveRcd.addEventListener("click", (event) => {
        console.log("Fired - Clicked permitsTabRowFiveRcd");

        dropdownCover.classList.remove("hidden");
    })
    permitsTabRowSixRcd.addEventListener("mouseout", (event) => {
        console.log("mousedout - permitsTabRowSixRcd changed to - " + event);

        permitsTabRcdFunction("6", event);
    })
    permitsTabRowSixRcd.addEventListener("click", (event) => {
        console.log("Fired - Clicked permitsTabRowSixRcd");

        dropdownCover.classList.remove("hidden");
    })
    permitsTabRowSevenRcd.addEventListener("mouseout", (event) => {
        console.log("mousedout - permitsTabRowSevenRcd changed to - " + event);

        permitsTabRcdFunction("7", event);
    })
    permitsTabRowSevenRcd.addEventListener("click", (event) => {
        console.log("Fired - Clicked permitsTabRowSevenRcd");

        dropdownCover.classList.remove("hidden");
    })
    permitsTabRowEightRcd.addEventListener("mouseout", (event) => {
        console.log("mousedout - permitsTabRowEightRcd changed to - " + event);

        permitsTabRcdFunction("8", event);
    })
    permitsTabRowEightRcd.addEventListener("click", (event) => {
        console.log("Fired - Clicked permitsTabRowEightRcd");

        dropdownCover.classList.remove("hidden");
    })
    
            /* Permit Status DDs */    
        /* Functions */
    function permitsTabPermitStatusContainerMouseoverFunction(rowNum) {
        console.log("Fired - moused over permitsTabPermitStatusMouseoverFunction(" + rowNum + ")");

        const tempContent = document.getElementById("permit_status_dd_permits_tab_row_" + rowNum + "_content");

        tempContent.style.display = 'flex';
        tempContent.style.flexDirection = 'column';
        tempContent.style.border = '1px solid black';
        tempContent.style.zIndex = 2;

        dropdownCover.classList.remove("hidden");

        /* Below statement adjusts position of content box to above or below dd menu */
        if (rowNum <= 4) {
            tempContent.style.marginTop = '400px';
            tempContent.style.width = '90px';
        } else {
            tempContent.style.marginBottom = '445px';
            tempContent.style.width = '90px';
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

                if (tempCurrent.innerHTML.includes("Expiring") || tempCurrent.innerHTML.includes("Extension") || 
                tempCurrent.innerHTML.includes("Don't") || tempCurrent.innerHTML.includes("Haven't")) {
                    document.getElementById("permit_status_dd_permits_tab_row_" + rowNum + "_button").style.height = '50px';
                } else {
                    document.getElementById("permit_status_dd_permits_tab_row_" + rowNum + "_button").style.height = '30px';
                }

                permitsTabPermitStatusContainerMouseoutFunction(rowNum);

            }
        }
    }
    function permitsTabPermitStatusContainerMouseoutFunction(rowNum) {
        console.log("Entered - permitsTabPermitStatusMouseoutClickFunction(" + rowNum + ")");

        /* Current value on page - not in list */
        const tempCurrent = document.getElementById("permit_status_dd_permits_tab_row_" + rowNum + "_current");

        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + parseInt(rowNum) - 1); // Will need to change when more rows

        /* Current Wr */
        let currentWr = allWrList[curWrIndex];

        if (tempCurrent.innerHTML != currentWr.permit.permitStatus) {
            console.log("* Saving page to list *");

            /* Updating Status */
            currentWr.permit.permitStatus = tempCurrent.innerHTML;


            /* Checking Status to set date applied */
            if (currentWr.permit.permitStatus == "Applied") {
                console.log("Setting Permit Applied Date to Today");

                const d = new Date();
                const year = d.getFullYear();
                let month = d.getMonth() + 1;
                if (month < 10) {
                    month = "0" + month;
                }
                let day = d.getDate();
                if (day < 10) {
                    day = "0" + day;
                }
                //let tempDate = year + "-" + month + "-" + day;
                const tempDate = month + "-" + day + "-" + d.getFullYear();

                currentWr.permit.dateApplied = tempDate;
                
            } else if (currentWr.permit.permitStatus == "Extension Submitted") {
                console.log("Setting Permit Applied Date to Today - Extension");

                const d = new Date();
                const year = d.getFullYear();
                let month = d.getMonth() + 1;
                if (month < 10) {
                    month = "0" + month;
                }
                let day = d.getDate();
                if (day < 10) {
                    day = "0" + day;
                }
                //let tempDate = year + "-" + month + "-" + day;
                const tempDate = month + "-" + day + "-" + d.getFullYear();

                currentWr.permit.dateApplied = tempDate;
            }

            /* Updating List */
            const d = new Date();
            const tempDate = d.getFullYear() + "-" + formatMonth((d.getMonth() + 1)) + "-" + d.getDate();
            currentWr.permit.dateUpdated = tempDate;
            allWrList[curWrIndex] = currentWr;

            /* Updating Page (Display) */
            injectHTMLAllWrTabDisplay(allWrList, currentPageAllWr, userColors, toDoMasterList);
            injectHTMLPermitsTabDisplay(allWrList, currentPagePermits, userColors);

            console.log("* Internal List Updated *");
        }
        /* Revealing Pop Up */
        if (document.getElementById("permit_status_dd_permits_tab_row_" + rowNum + "_current").innerHTML == "Expiring Soon") {
            document.getElementById("add_to_do_pop_up_container").classList.remove("hidden");

            addToDoPopUpHeader.innerHTML = `<div class="addToDoPopUpText">${"Do you want to add a \"Check/ Apply - Permit\" To-Do for Work Request # " + currentWr.workRequestNumber + "?"}</div>`
        }
        /* Hiding DDMenu Content */
        const tempContent = document.getElementById("permit_status_dd_permits_tab_row_" + rowNum + "_content");
        tempContent.style.display = 'none';
        dropdownCover.classList.add("hidden");
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
    permitsTabRowFourStatusContainer.addEventListener("click", (event) => {
        console.log("Fired - clicked permitsTabRowFourPermitStatus");

        permitsTabPermitStatusContainerClickFunction("4", event);
    })
    permitsTabRowFiveStatusContainer.addEventListener("click", (event) => {
        console.log("Fired - clicked permitsTabRowFivePermitStatus");

        permitsTabPermitStatusContainerClickFunction("5", event);
    })
    permitsTabRowSixStatusContainer.addEventListener("click", (event) => {
        console.log("Fired - clicked permitsTabRowSixPermitStatus");

        permitsTabPermitStatusContainerClickFunction("6", event);
    })
    permitsTabRowSevenStatusContainer.addEventListener("click", (event) => {
        console.log("Fired - clicked permitsTabRowSevenPermitStatus");

        permitsTabPermitStatusContainerClickFunction("7", event);
    })
    permitsTabRowEightStatusContainer.addEventListener("click", (event) => {
        console.log("Fired - clicked permitsTabRowEightPermitStatus");

        permitsTabPermitStatusContainerClickFunction("8", event);
    })
        
        /* Start Dates */
    function permitsTabStartDateFunction(row, event) {
        console.log("Entered - permitsTabStartDateFunction(" + row + ")");

        let rowNumberText = convertNumText(row); 

        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + row - 1); // Will need to change when more rows
        let currentWr = allWrList[curWrIndex];

        if (event.target.value != currentWr.permit.startDate) {
            currentWr.permit.startDate = event.target.value;
            const d = new Date(currentWr.permit.startDate);
            const d2 = new Date(currentWr.permit.endDate);
            document.getElementById("permits_tab_row_" + rowNumberText + "_start_date").style.backgroundColor = assessPermitStartDate(d, d2, userColors);
            
            const d3 = new Date();
            const tempDate = d3.getFullYear() + "-" + formatMonth((d3.getMonth() + 1)) + "-" + d3.getDate();
            currentWr.permit.dateUpdated = tempDate;
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
    permitsTabRowFourStartDate.addEventListener("mouseout", (event) => {
        console.log("mouseout - permitsTabRowFourStartDate changed to - " + event);

        permitsTabStartDateFunction("4", event);

    })
    permitsTabRowFiveStartDate.addEventListener("mouseout", (event) => {
        console.log("mouseout - permitsTabRowFiveStartDate changed to - " + event);

        permitsTabStartDateFunction("5", event);

    })
    permitsTabRowSixStartDate.addEventListener("mouseout", (event) => {
        console.log("mouseout - permitsTabRowSixStartDate changed to - " + event);

        permitsTabStartDateFunction("6", event);

    })
    permitsTabRowSevenStartDate.addEventListener("mouseout", (event) => {
        console.log("mouseout - permitsTabRowSevenStartDate changed to - " + event);

        permitsTabStartDateFunction("7", event);

    })
    permitsTabRowEightStartDate.addEventListener("mouseout", (event) => {
        console.log("mouseout - permitsTabRowEightStartDate changed to - " + event);

        permitsTabStartDateFunction("8", event);

    })

        /* End Dates */
    function permitsTabEndDateFunction(row, event) {
        console.log("Entered - permitsTabEndDateFunction(" + row + ")");

        let rowNumberText = convertNumText(row); 

        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + row - 1); // Will need to change when more rows
        let currentWr = allWrList[curWrIndex];

        if (event.target.value != currentWr.permit.endDate) {
            currentWr.permit.endDate = event.target.value;
            const d = new Date(currentWr.permit.endDate);
            document.getElementById("permits_tab_row_" + rowNumberText + "_end_date").style.backgroundColor = assessDatePermitEnd(d, userColors);
            const d2 = new Date();
            const tempDate = d2.getFullYear() + "-" + formatMonth((d2.getMonth() + 1)) + "-" + d2.getDate();
            currentWr.permit.dateUpdated = tempDate;
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
    permitsTabRowFourEndDate.addEventListener("mouseout", (event) => {
        console.log("mouseout - permitsTabRowFourEndDate changed to - " + event);

        permitsTabEndDateFunction("4", event);
    })
    permitsTabRowFiveEndDate.addEventListener("mouseout", (event) => {
        console.log("mouseout - permitsTabRowFiveEndDate changed to - " + event);

        permitsTabEndDateFunction("5", event);
    })
    permitsTabRowSixEndDate.addEventListener("mouseout", (event) => {
        console.log("mouseout - permitsTabRowSixEndDate changed to - " + event);

        permitsTabEndDateFunction("6", event);
    })
    permitsTabRowSevenEndDate.addEventListener("mouseout", (event) => {
        console.log("mouseout - permitsTabRowSevenEndDate changed to - " + event);

        permitsTabEndDateFunction("7", event);
    })
    permitsTabRowEightEndDate.addEventListener("mouseout", (event) => {
        console.log("mouseout - permitsTabRowEightEndDate changed to - " + event);

        permitsTabEndDateFunction("8", event);
    })

        /* Comments */
    permitsTabRowOneComments.addEventListener("click", (event) => {
        console.log("Fired - Clicked permitsTabRowOneComments");

        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + 1 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        displayCommentsAddUpdate(currentWr);
        document.getElementById("filter_checkbox_add_comment").click();
        document.getElementById("add_tab_update_button").disabled = false;
        enableAddCommentTabs();
        clearAddCommentTabs();
        addCommentFilterTabPermit.click();
        document.getElementById("comment_type_dd_menu_current").innerHTML = "Permit";
    })
    permitsTabRowTwoComments.addEventListener("click", (event) => {
        console.log("Fired - Clicked permitsTabRowTwoComments");

        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + 2 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        displayCommentsAddUpdate(currentWr);
        document.getElementById("add_tab_update_button").disabled = false;
        enableAddCommentTabs();
        clearAddCommentTabs();
        addCommentFilterTabPermit.click();
        document.getElementById("comment_type_dd_menu_current").innerHTML = "Permit";
    })
    permitsTabRowThreeComments.addEventListener("click", (event) => {
        console.log("Fired - Clicked permitsTabRowThreeComments");

        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + 3 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        displayCommentsAddUpdate(currentWr);
        document.getElementById("filter_checkbox_add_comment").click();
        document.getElementById("add_tab_update_button").disabled = false;
        enableAddCommentTabs();
        clearAddCommentTabs();
        addCommentFilterTabPermit.click();
        document.getElementById("comment_type_dd_menu_current").innerHTML = "Permit";
    })
    permitsTabRowFourComments.addEventListener("click", (event) => {
        console.log("Fired - Clicked permitsTabRowFourComments");

        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + 4 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        displayCommentsAddUpdate(currentWr);
        document.getElementById("filter_checkbox_add_comment").click();
        document.getElementById("add_tab_update_button").disabled = false;
        enableAddCommentTabs();
        clearAddCommentTabs();
        addCommentFilterTabPermit.click();
        document.getElementById("comment_type_dd_menu_current").innerHTML = "Permit";
    })
    permitsTabRowFiveComments.addEventListener("click", (event) => {
        console.log("Fired - Clicked permitsTabRowFiveComments");

        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + 5 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        displayCommentsAddUpdate(currentWr);
        document.getElementById("filter_checkbox_add_comment").click();
        document.getElementById("add_tab_update_button").disabled = false;
        enableAddCommentTabs();
        clearAddCommentTabs();
        addCommentFilterTabPermit.click();
        document.getElementById("comment_type_dd_menu_current").innerHTML = "Permit";
    })
    permitsTabRowSixComments.addEventListener("click", (event) => {
        console.log("Fired - Clicked permitsTabRowSixComments");

        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + 6 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        displayCommentsAddUpdate(currentWr);
        document.getElementById("filter_checkbox_add_comment").click();
        document.getElementById("add_tab_update_button").disabled = false;
        enableAddCommentTabs();
        clearAddCommentTabs();
        addCommentFilterTabPermit.click();
        document.getElementById("comment_type_dd_menu_current").innerHTML = "Permit";
    })
    permitsTabRowSevenComments.addEventListener("click", (event) => {
        console.log("Fired - Clicked permitsTabRowSevenComments");

        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + 7 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        displayCommentsAddUpdate(currentWr);
        document.getElementById("filter_checkbox_add_comment").click();
        document.getElementById("add_tab_update_button").disabled = false;
        enableAddCommentTabs();
        clearAddCommentTabs();
        addCommentFilterTabPermit.click();
        document.getElementById("comment_type_dd_menu_current").innerHTML = "Permit";
    })
    permitsTabRowEightComments.addEventListener("click", (event) => {
        console.log("Fired - Clicked permitsTabRowEightComments");

        const page = document.getElementById("permits_tab_current_page_box").innerHTML;
        const curWrIndex = parseInt(((page - 1) * rowsOnPage) + 8 - 1); // Will need to change when more rows

        let currentWr = allWrList[curWrIndex];

        displayCommentsAddUpdate(currentWr);
        document.getElementById("filter_checkbox_add_comment").click();
        document.getElementById("add_tab_update_button").disabled = false;
        enableAddCommentTabs();
        clearAddCommentTabs();
        addCommentFilterTabPermit.click();
        document.getElementById("comment_type_dd_menu_current").innerHTML = "Permit";
    })

        /* Permits Next and Prev Button */
    nextPermits.addEventListener("click", (event) => {
        console.log("Fired - Clicked permits_tab_next_button");

        curPagePermits.innerHTML = currentPagePermits + 1 + 1; // second + 1 for display
        injectHTMLPermitsTabDisplay(filteredList, currentPagePermits + 1, userColors);
        currentPagePermits += 1;

            return;
    })
    prevPermits.addEventListener("click", (event) => {
        console.log("Fired - Clicked permits_tab_prev_button");

        curPagePermits.innerHTML = currentPagePermits - 1 + 1; // second + 1 for display
        injectHTMLPermitsTabDisplay(filteredList, currentPagePermits - 1, userColors);
        currentPagePermits -= 1;
            
        return;
    })
    
    /* Add/Update Tab */        /* Add/Update Tab */        /* Add/Update Tab */        /* Add/Update Tab */        /* Add/Update Tab */
    
        /* Buttons */
    addTabUpdateButton.addEventListener("click", (event) => {
        console.log("Fired - Clicked add_tab_update_button");
        const h = new Haptix(promptDuration);
        const e = new Error(promptDuration);
        const wrTypeDDMenuCurrent = document.getElementById("wr_type_dd_menu_current").innerHTML;
        const generalStatusDDMenuCurrent = document.getElementById("general_status_dd_add_tab_current").innerHTML;
        const permitStatusDDMenuCurrent = document.getElementById("permit_status_dd_add_tab_row_1_current").innerHTML;
        const easementStatusDDMenuCurrent = document.getElementById("easement_status_dd_add_tab_current").innerHTML;
        const permitsTabPermitStatusDDMenuCurrent = document.getElementById("permit_status_dd_add_tab_row_2_current").innerHTML;


        
        if (filterCheckboxAddWr.checked == true) {
            const curWrData = getWr(addTabNewWorkRequestNumber.value, allWrList); 

            let curComments = curWrData[1].commentsGeneral.comments;
            const curWrIndex = curWrData[2];
            
            if (addTabNewWorkRequestNumber.value.length != 8 && inTestMode == false) {
                console.log("wr length != 8");

                e.displayInvalidWr(addTabNewWorkRequestNumber.value);
            } else if (inTestMode == false && !addressLineTextfieldCoverHouseNumber.classList.contains("hidden")) {
                e.displayEnterHouseNumber();
            } else if (inTestMode == false && addressLineTextfieldStreetName.value == "Enter Street Name") {
                e.displayEnterStreetName();
            } else if (inTestMode == false && addressLineTextfieldCounty.value == "Enter County/City Name") {
                e.displayEnterCountyCity();
            } else if (inTestMode == false && !addressLineTextfieldCoverZip.classList.contains("hidden")) {
                e.displayEnterZip();
            } else if (addTabPriorityBox.value.length < 1) {
                console.log("Priority Number length < 1");

                e.displayInvalidPriorityNumber();
            } else if (wrTypeDDMenuCurrent == "Not Set" && inTestMode == false) {
                console.log("No Wr Type Selected");

                e.displayInvalidWrType();
            } else if (addTabCommentsTextfield.value != undefined && addTabCommentsTextfield.value != "Enter Comment Here" &&
            addTabCommentsTextfield.value.length > 0) {
                console.log("Comment typed but not entered");

                e.displayCommentTypedNotAdded();
            } else {
                for (var i = 0; i < tempComments.list.length; i++) {
                    curComments.push(tempComments.list[i]);
                }
                const newWr = new workRequest(addTabNewWorkRequestNumber.value, addressLineTextfieldHouseNumber.value, 
                    addressLineTextfieldStreetName.value, addressLineTextfieldCounty.value, addressLineTextfieldZip.value,
                    addTabPriorityBox.value, pocTextboxOwnerName.value, pocTextboxOwnerNumber.value, pocTextboxOwnerEmail.value, 
                    pocTextboxBuilderName.value, pocTextboxBuilderNumber.value, pocTextboxBuilderEmail.value, pocTextboxOtherName.value,
                    pocTextboxOtherNumber.value, pocTextboxOtherEmail.value, wrTypeDDMenuCurrent, addTabWrCRD.value, addTabWrRCD.value, 
                    generalStatusDDMenuCurrent, permitStatusDDMenuCurrent, easementStatusDDMenuCurrent, curComments, 
                    customerContactedCheckboxYes.checked, addTabWrCreationDate.value);
                
                    if (document.getElementById("temp_all_wr_list") == null) { // no wr's exists
                        if (allWrList[curWrIndex].compare(newWr) == 1 && tempComments.list.length == 0) {
                            h.displayNoChanges(addTabNewWorkRequestNumber.value);
                        } else {
                            allWrList[0] = newWr;
                            console.log("wr added to empty list");
    
                            const tempAllWrList = document.createElement("tempAllWrList");
                            tempAllWrList.id = "temp_all_wr_list";
                            tempAllWrList.classList.add("hidden");
                            tempAllWrList.innerHTML = allWrList;
    
                            const allWrTab = document.getElementById("all_wr_tab");
                            allWrTab.insertAdjacentElement("beforeend", tempAllWrList);
    
                            console.log("allWrList added to internal list");
    
                            injectHTMLAllWrTabDisplay(allWrList, 0, userColors, toDoMasterList);
                            injectHTMLPermitsTabDisplay(allWrList, 0, userColors);
                            document.getElementById("all_wr_tab_prev_next_container").classList.add("hidden");
                            document.getElementById("permits_tab_prev_next_container").classList.add("hidden");
    
                            h.displayWrUpdated(newWr.workRequestNumber);
                            resetDisplayWrAddUpdate();
                            resetDisplayPermitAddUpdate(); // in case user pulls twice and adds comments - comments added on both wont be in sync
                            resetDisplayCommentsAddUpdate();
                        }
                    } else { // at least 1 wr exists
                        if (allWrList[curWrIndex].compare(newWr) == 1 && tempComments.list.length == 0) {
                            h.displayNoChanges(addTabNewWorkRequestNumber.value);
                        } else {
                            allWrList[curWrIndex] = newWr;
                            const tempAllWrList = document.getElementById("temp_all_wr_list");
                            tempAllWrList.innerHTML = allWrList;
                            console.log("allWrList added to internal list");
        
                            injectHTMLPermitsTabDisplay(allWrList, 0, userColors);
                            injectHTMLAllWrTabDisplay(allWrList, 0, userColors, toDoMasterList);
                            document.getElementById("all_wr_tab_prev_next_container").classList.add("hidden");
                            document.getElementById("permits_tab_prev_next_container").classList.add("hidden");
                            
                            h.displayWrUpdated(newWr.workRequestNumber);
                            resetDisplayWrAddUpdate();
                            resetDisplayPermitAddUpdate(); // in case user pulls twice and adds comments - comments added on both wont be in sync
                            resetDisplayCommentsAddUpdate();
                        }
                    }
            }
                

            
        } else if (filterCheckboxAddPermit.checked == true) {
            const curWrData = getWr(addTabNewWorkRequestNumber.value, allWrList); 

            let curComments = curWrData[1].commentsGeneral.comments;
            const curWrIndex = curWrData[2];
            
            if (addTabNewWorkRequestNumber.value.length != 8 && inTestMode == false) {
                console.log("wr length != 8");

                e.displayInvalidWr(addTabNewWorkRequestNumber.value);
            } else if (addTabPermitPriority.value.length < 1) {
                console.log("Priority Number length < 1");

                e.displayInvalidPriorityNumberPermit();
            } else if (addTabPermitCommentsTextfield.value != undefined && addTabPermitCommentsTextfield.value != "Enter Comment Here" &&
            addTabPermitCommentsTextfield.value.length > 0) { 
                console.log("Comment typed but not entered");
                e.displayCommentTypedNotAdded();
            } else {
                let newComments = [];
            
                for (var i = 0; i < curComments.length; i++) {
                    newComments.push(curComments[i]);
                }
                for (var i = 0; i < tempPermitComments.list.length; i++) {
                    newComments.push(tempPermitComments.list[i]);
                }
    
                const curWrData = getWr(addTabNewWorkRequestNumber.value, allWrList); 
                let curWr = curWrData[1];
                if (curWrData[0] != false) {
                    const d = new Date();
                    const year = d.getFullYear();
                    let month = d.getMonth() + 1;
                    if (month < 10) {
                        month = "0" + month;
                    }
                    let day = d.getDate();
                    if (day < 10) {
                        day = "0" + day;
                    }
                    const today = year + "-" + month + "-" + day;
                    const tempDate = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
                    const curWrIndex = curWrData[2];
                    let newWr = new workRequest(curWr.workRequestNumber, curWr.houseNumber, curWr.streetName,
                        curWr.countyCity, curWr.zipCode, addTabPermitPriority.value, curWr.ownerName, curWr.ownerNumber, curWr.ownerEmail, curWr.builderName,
                        curWr.builderNumber, curWr.builderEmail, curWr.otherName, curWr.otherNumber, curWr.otherEmail, curWr.wrType, addTabPermitCRD.value,
                        addTabPermitRCD.value, curWr.generalStatus, curWr.permit.permitStatus, curWr.easementRequestStatus, newComments, 
                        curWr.customerContacted, curWr.creationDate);
                    const permit = new Permit(addTabNewWorkRequestNumber.value, permitsTabPermitStatusDDMenuCurrent, 
                    today, addTabPermitDateApplied.value, addTabPermitPriority.value, addTabPermitCRD.value, 
                    addTabPermitRCD.value, addTabPermitStart.value, addTabPermitExpiration.value, tempDate);
                    
                    newWr.permit = permit;
    
                    if (allWrList[curWrIndex].compare(newWr) == 1 && tempPermitComments.list.length ==0) {
                        h.displayNoChanges(addTabNewWorkRequestNumber.value);
                    } else {
                        allWrList[curWrIndex] = newWr;
    
                        const tempAllWrList = document.getElementById("temp_all_wr_list");
                        tempAllWrList.innerHTML = allWrList;
                        console.log("allWrList added to internal list");
        
                        injectHTMLPermitsTabDisplay(allWrList, 0, userColors);
                        injectHTMLAllWrTabDisplay(allWrList, 0, userColors, toDoMasterList);
                        document.getElementById("all_wr_tab_prev_next_container").classList.add("hidden");
                        document.getElementById("permits_tab_prev_next_container").classList.add("hidden");
        
                        h.displayPermitUpdated(newWr.workRequestNumber);
                        resetDisplayPermitAddUpdate();
                        resetDisplayWrAddUpdate(); // in case user pulls twice and adds comments - comments added on both wont be in sync
                        resetDisplayCommentsAddUpdate();
                    }
                }
    
            }
            
        } else if (filterCheckboxAddComment.checked == true) {
            const curWrData = getWr(addTabNewWorkRequestNumber.value, allWrList); 

            let curComments = curWrData[1].commentsGeneral.comments;
            const curWrIndex = curWrData[2];
            let newComments = [];
            
            for (var i = 0; i < curComments.length; i++) {
                newComments.push(curComments[i]);
            }
            for (var i = 0; i < tempAllComments.list.length; i++) {
                newComments.push(tempAllComments.list[i]);
            }
            let curWr = curWrData[1];
            
            if (curWrData[0] != false) {
                const d = new Date();
                const tempDate = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
                const curWrIndex = curWrData[2];
                let newWr = new workRequest(curWr.workRequestNumber, curWr.houseNumber, curWr.streetName,
                    curWr.countyCity, curWr.zipCode, curWr.priorityNumber, curWr.ownerName, curWr.ownerNumber, curWr.ownerEmail, curWr.builderName,
                    curWr.builderNumber, curWr.builderEmail, curWr.otherName, curWr.otherNumber, curWr.otherEmail, curWr.wrType, curWr.crd,
                    curWr.rcd, curWr.generalStatus, curWr.permit.permitStatus, curWr.easementRequestStatus, tempAllComments.list, 
                    curWr.customerContacted, curWr.creationDate);
                newWr.permit = curWr.permit;
                
                
                if (addCommentTabTextfield.value != undefined && addCommentTabTextfield.value != "Enter Comment Here" &&
                addCommentTabTextfield.value.length > 0) {
                    console.log("Comment typed but not entered");
    
                    e.displayNoteTypedNotAdded();
                } else if (document.getElementById("comment_type_dd_menu_current").innerHTML == "Not Set") {
                    e.displaySelectCommentType();
                } else if (allWrList[curWrIndex].commentsGeneral.compare(tempAllComments.list) == 1) {
                    h.displayNoChanges(addTabNewWorkRequestNumber.value);
                } else {
                    allWrList[curWrIndex] = newWr;

                    const tempAllWrList = document.getElementById("temp_all_wr_list");
                    tempAllWrList.innerHTML = allWrList;
                    console.log("allWrList added to internal list");   
                    injectHTMLPermitsTabDisplay(allWrList, 0, userColors);
                    injectHTMLAllWrTabDisplay(allWrList, 0, userColors, toDoMasterList);
                    document.getElementById("all_wr_tab_prev_next_container").classList.add("hidden");
                    document.getElementById("permits_tab_prev_next_container").classList.add("hidden");
    
                    h.displayCommentsUpdated(newWr.workRequestNumber);
                    resetDisplayCommentsAddUpdate();
                    resetDisplayPermitAddUpdate();
                    resetDisplayWrAddUpdate();   
                }
                      
            }
            
        } else if (filterCheckboxAddToDo.checked == true) {
            
            if (addTabDisplayToDoRowZeroNumfield.value == undefined || addTabDisplayToDoRowZeroNumfield.value > toDoMasterList.getCount()) {
                e.displayInvalidToDoId(); // can't get here - buttons hides
            } else if (document.getElementById("to_do_type_dd_0_current").innerHTML == "Not Set") {
                e.displaySelectToDoType();
            } else if (document.getElementById("to_do_type_dd_0_current").innerHTML == "General" && addTabDisplayToDoRowThreeNotesToAdd.innerHTML == "") {
                e.displayMustAddNoteForGeneralTypeToDo();
            } else if (addTabDisplayToDoRowThreeTextfield.value != undefined && addTabDisplayToDoRowThreeTextfield.value != "Enter Note Here" &&
            addTabDisplayToDoRowThreeTextfield.value.length > 0) {
                console.log("Comment typed but not entered");

                e.displayNoteTypedNotAdded();
            } else {
                let notes = [];

                var i = 0;

                while (document.getElementById("add_tab_display_to_do_note_item_" + i) != undefined) {
                    console.log("In while loop **");
                    console.log(document.getElementById("add_tab_display_to_do_note_item_" + i).innerHTML);
                    if (document.getElementById("add_tab_display_to_do_note_item_" + i).innerHTML.includes("<strike>") || 
                    document.getElementById("add_tab_display_to_do_note_item_" + i).style.textDecoration == 'line-through') {
                        notes.push([document.getElementById("add_tab_display_to_do_note_item_" + i).innerHTML, 1]);
                    } else {
                        notes.push([document.getElementById("add_tab_display_to_do_note_item_" + i).innerHTML, 0]);
                    }
                i++;
                }

                let tempChecked = 0;
                if (document.getElementById("add_tab_display_to_do_completed").checked) {
                    tempChecked = 1;
                }

                let tempWr = [];
                if (addTabNewWorkRequestNumber.value != undefined) {
                    for (var i = 0; i < allWrList.length; i++) {
                        if (allWrList[i].workRequestNumber == addTabNewWorkRequestNumber.value) {
                            tempWr = allWrList[i];
                        }
                    }
                }
                let addressStr = "";
                if (tempWr != []) {
                    addressStr = tempWr.houseNumber + " " + tempWr.streetName + ", " + tempWr.countyCity + " " + tempWr.zipCode + " - " + tempWr.workRequestNumber;
                } else {
                    addressStr = undefined;
                }

                const toDo = new ToDoObject(addTabDisplayToDoRowZeroNumfield.value, document.getElementById("to_do_tab_dd_0_current").innerHTML,
                addTabDisplayDayOfWeekDate.value, document.getElementById("to_do_type_dd_0_current").innerHTML, addTabDisplayToDoCreationDate.value,
                tempChecked, notes, addTabNewWorkRequestNumber.value, addressStr);
                
                const temp = toDoMasterList.getToDo(toDo.toDoId);

                //toDoMasterList.list[temp[2]].list[temp[3]] = toDo;
                let old = [];
                if (temp[4] == "Contact Customer") {
                    old = toDoMasterList.list[temp[2]].contactCustomerList[temp[3]];
                } else if (temp[4] == "Site Visit") {
                    old = toDoMasterList.list[temp[2]].siteVisitList[temp[3]];
                } else if (temp[4] == "Svc Calc") {
                    old = toDoMasterList.list[temp[2]].svcCalcList[temp[3]];
                } else if (temp[4] == "Check NJUNS") {
                    old = toDoMasterList.list[temp[2]].checkNJUNSList[temp[3]];
                } else if (temp[4] == "Check Permit") {
                    old = toDoMasterList.list[temp[2]].checkPermitList[temp[3]];
                } else if (temp[4] == "Check Easement") {
                    old = toDoMasterList.list[temp[2]].checkEasementList[temp[3]];
                } else if (temp[4] == "Design") {
                    old = toDoMasterList.list[temp[2]].designList[temp[3]];
                } else if (temp[4] == "Revisions") {
                    old = toDoMasterList.list[temp[2]].revisionsList[temp[3]];
                } else if (temp[4] == "General") {
                    old = toDoMasterList.list[temp[2]].generalList[temp[3]];
                } 


                
                if (old.compare(toDo) == 0) { // they are not equal
                    const curToDo = toDoMasterList.list[temp[2]];
                    if (temp[4] == "Contact Customer") {
                        curToDo.contactCustomerList = curToDo.remove(curToDo.contactCustomerList, temp[3]);
                    } else if (temp[4] == "Site Visit") {
                        curToDo.siteVisitList = curToDo.remove(curToDo.siteVisitList, temp[3]);
                    } else if (temp[4] == "Svc Calc") {
                        curToDo.svcCalcList = curToDo.remove(curToDo.svcCalcList, temp[3]);
                    } else if (temp[4] == "Check NJUNS") {
                        curToDo.checkNJUNSList = curToDo.remove(curToDo.checkNJUNSList, temp[3]);
                    } else if (temp[4] == "Check Permit") {
                        curToDo.checkPermitList = curToDo.remove(curToDo.checkPermitList, temp[3]);
                    } else if (temp[4] == "Check Easement") {
                        curToDo.checkEasementList = curToDo.remove(curToDo.checkEasementList, temp[3]);
                    } else if (temp[4] == "Design") {
                        curToDo.designList = curToDo.remove(curToDo.designList, temp[3]);
                    } else if (temp[4] == "Revisions") {
                        curToDo.revisionsList = curToDo.remove(curToDo.revisionsList, temp[3]);
                    } else if (temp[4] == "General") {
                        curToDo.generalList = curToDo.remove(curToDo.generalList, temp[3]);
                    }
                    toDoMasterList.add(toDo); 
                    h.displayToDoUpdated(toDo.toDoId);
                    resetDisplayToDoAddUpdate();

                    toDoMasterList.list[temp[2]].clearStrikesAfterNoteUpdate();
                    tempToDoPageElement = injectHTMLToDoTabDisplay(toDoMasterList.list[temp[2]]);
                } else {
                    h.displayNoChangesToDo(toDo.toDoId);
                }
            }
        }
        
    })
    addTabGetButton.addEventListener("click", (event) => {
        console.log("Fired - Clicked add_tab_get_button");
        const e = new Error(promptDuration);
        const h = new Haptix(promptDuration);  

        if (filterCheckboxAddWr.checked == true) {
            const curWrNum = addTabNewWorkRequestNumber.value;

            let wr = getWr(curWrNum, allWrList); /* First index is true if wr is found or empty list, second index is wr object */
    
            if (wr[0] != false) { /* if wr exists / has been found */
                resetDisplayWrAddUpdate();
                displayWrAddUpdate(wr[1]);
                addTabUpdateButton.disabled = false;
            } else {
                e.displayWrNotFoundAddUpdate(addTabNewWorkRequestNumber.value);
            }
            filterCheckboxAddWr.checked = true;
        } else if (filterCheckboxAddPermit.checked == true) {
            console.log("** I Am Here **");
            const curWrNum = addTabNewWorkRequestNumber.value;

            let wr = getWr(curWrNum, allWrList);

            if (permitExists(curWrNum, allWrList) == true) {
                resetDisplayPermitAddUpdate();
                displayPermitAddUpdate(wr[1]);
                addTabUpdateButton.disabled = false;
            } else {
                e.displayPermitNotFoundAddUpdate(addTabNewWorkRequestNumber.value);

            }

        } else if (filterCheckboxAddComment.checked == true) {
            const curWrNum = addTabNewWorkRequestNumber.value;

            let wr = getWr(curWrNum, allWrList);

            if (wr[0] != false) {
                resetDisplayCommentsAddUpdate();
                displayCommentsAddUpdate(wr[1]);
                addTabUpdateButton.disabled = false;
                enableAddCommentTabs();
            } else { 
                e.displayWrNotFoundAddUpdate(addTabNewWorkRequestNumber.value);
            }
            
        } else if (filterCheckboxAddToDo.checked == true) {

            if (toDoMasterList.getToDo(addTabDisplayToDoRowZeroNumfield.value).length == undefined) {
                e.displayInvalidToDoId();
            } else if (addTabDisplayToDoRowZeroNumfield.value == undefined || addTabDisplayToDoRowZeroNumfield.value >= toDoMasterList.getCount() - 1) {
                e.displayInvalidToDoId();
            } else {
                const curToDoId = addTabDisplayToDoRowZeroNumfield.value;
                const curToDoData = toDoMasterList.getToDo(curToDoId);

                console.log(curToDoData);
    
                if (curToDoData[0] != 0) { // to-do was found
                    resetDisplayToDoAddUpdate();
                    displayToDoAddUpdate(curToDoData[1]);
                    addTabUpdateButton.disabled = false;
                    addTabAddButton.disabled = true;
                } else {
                    e.displayInvalidToDoId(); // lockdown of button logic should prevent me from getting here
                }
            }
            
        }
        
    })
    addTabAddButton.addEventListener("click", (event) => {
        console.log("Fired - Clicked add_tab_add_button");
        const e = new Error(promptDuration);
        const h = new Haptix(promptDuration);
        const wrTypeDDMenuCurrent = document.getElementById("wr_type_dd_menu_current").innerHTML;
        const generalStatusDDMenuCurrent = document.getElementById("general_status_dd_add_tab_current").innerHTML;
        const permitStatusDDMenuCurrent = document.getElementById("permit_status_dd_add_tab_row_1_current").innerHTML;
        const easementStatusDDMenuCurrent = document.getElementById("easement_status_dd_add_tab_current").innerHTML;

        if (filterCheckboxAddWr.checked == true) {
            if (getWr(addTabNewWorkRequestNumber.value, allWrList)[0] == true) { /* if wr exists */
                console.log("getWr(" + addTabNewWorkRequestNumber.value + ") == -1");

                e.displayWrAlreadyExistsAddUpdate(addTabNewWorkRequestNumber.value);
            } else if (addTabNewWorkRequestNumber.value.length != 8 && inTestMode == false) {
                console.log("wr length != 8");

                e.displayInvalidWr(addTabNewWorkRequestNumber.value);
            } else if (inTestMode == false && !addressLineTextfieldCoverHouseNumber.classList.contains("hidden")) {
                e.displayEnterHouseNumber();
            } else if (inTestMode == false && addressLineTextfieldStreetName.value == "Enter Street Name") {
                e.displayEnterStreetName();
            } else if (inTestMode == false && addressLineTextfieldCounty.value == "Enter County/City Name") {
                e.displayEnterCountyCity();
            } else if (inTestMode == false && !addressLineTextfieldCoverZip.classList.contains("hidden")) {
                e.displayEnterZip();
            } else if (addTabPriorityBox.value.length < 1) {
                console.log("Priority Number length < 1");

                e.displayInvalidPriorityNumber();
            } else if (wrTypeDDMenuCurrent == "Not Set" && inTestMode == false) {
                console.log("No Wr Type Selected");

                e.displayInvalidWrType();
            } else if (addTabCommentsTextfield.value != undefined && addTabCommentsTextfield.value != "Enter Comment Here" &&
            addTabCommentsTextfield.value.length > 0) {
                console.log("Comment typed but not entered");

                e.displayCommentTypedNotAdded();
            } else if (filterCheckboxAddWr.checked && getWr(addTabNewWorkRequestNumber.value, allWrList)[0] == false) {
                const wr = new workRequest(addTabNewWorkRequestNumber.value, addressLineTextfieldHouseNumber.value, 
                addressLineTextfieldStreetName.value, addressLineTextfieldCounty.value, addressLineTextfieldZip.value,
                addTabPriorityBox.value, pocTextboxOwnerName.value, pocTextboxOwnerNumber.value, pocTextboxOwnerEmail.value, 
                pocTextboxBuilderName.value, pocTextboxBuilderNumber.value, pocTextboxBuilderEmail.value, pocTextboxOtherName.value,
                pocTextboxOtherNumber.value, pocTextboxOtherEmail.value, wrTypeDDMenuCurrent, addTabWrCRD.value, addTabWrRCD.value, 
                generalStatusDDMenuCurrent, permitStatusDDMenuCurrent, easementStatusDDMenuCurrent, tempComments.list, // tempComments is an array of
                customerContactedCheckboxYes.checked, addTabWrCreationDate.value);                                // CommentItem Objects
                
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

                    injectHTMLAllWrTabDisplay(allWrList, 0, userColors, toDoMasterList);
                    injectHTMLPermitsTabDisplay(allWrList, 0, userColors);
                    document.getElementById("all_wr_tab_prev_next_container").classList.add("hidden");
                    document.getElementById("permits_tab_prev_next_container").classList.add("hidden");
                } else { // at least 1 wr exists
                    allWrList[allWrList.length] = wr;

                    const tempAllWrList = document.getElementById("temp_all_wr_list");
                    tempAllWrList.innerHTML = allWrList;
                    console.log("allWrList added to internal list");

                    injectHTMLPermitsTabDisplay(allWrList, 0, userColors);
                    injectHTMLAllWrTabDisplay(allWrList, 0, userColors, toDoMasterList);
                    document.getElementById("all_wr_tab_prev_next_container").classList.add("hidden");
                    document.getElementById("permits_tab_prev_next_container").classList.add("hidden");
                }
                h.displayWrAdded(wr.workRequestNumber);
                resetDisplayWrAddUpdate();
            }
        } else if (filterCheckboxAddToDo.checked == true) {

            let notes = [];

            var i = 0;

            while (document.getElementById("add_tab_display_to_do_note_item_" + i) != undefined) {
                notes.push([document.getElementById("add_tab_display_to_do_note_item_" + i).innerHTML, 0]);
                i++;
            }
            if (addTabDisplayToDoRowZeroNumfield.value == undefined || addTabDisplayToDoRowZeroNumfield.value != toDoMasterList.getCount()) {
                e.displayInvalidToDoId(); // can't get here - buttons hides
            } else if (document.getElementById("to_do_type_dd_0_current").innerHTML == "Not Set") {
                e.displaySelectToDoType();
            } else if (document.getElementById("to_do_type_dd_0_current").innerHTML == "General" && addTabDisplayToDoRowThreeNotesToAdd.innerHTML == "") {
                e.displayMustAddNoteForGeneralTypeToDo();
            } else if (document.getElementById("to_do_type_dd_0_current").innerHTML != "General" && addTabNewWorkRequestNumber.value != undefined &&
            addTabNewWorkRequestNumber.value.length == 0) {
                
                e.displayMustAddWorkRequestNumberUnlessGeneral();
            } else if (addTabDisplayToDoRowThreeTextfield.value != undefined && addTabDisplayToDoRowThreeTextfield.value != "Enter Note Here" &&
            addTabDisplayToDoRowThreeTextfield.value.length > 0) {
                console.log("Comment typed but not entered");

                e.displayNoteTypedNotAdded();
            } else {

                let tempWr = [];
                if (addTabNewWorkRequestNumber.value != undefined) {
                    for (var i = 0; i < allWrList.length; i++) {
                        if (allWrList[i].workRequestNumber == addTabNewWorkRequestNumber.value) {
                            tempWr = allWrList[i];
                        }
                    }
                }
                let addressStr = "";
                if (tempWr != []) {
                    addressStr = tempWr.houseNumber + " " + tempWr.streetName + ", " + tempWr.countyCity + " " + tempWr.zipCode + " - " + tempWr.workRequestNumber;
                } else {
                    addressStr = undefined;
                }

                let tempChecked = 0;
                
                if (document.getElementById("add_tab_display_to_do_completed").checked) {
                    console.log("tempChecked being set to 1");
                    tempChecked = 1;
                }
                const toDo = new ToDoObject(addTabDisplayToDoRowZeroNumfield.value, document.getElementById("to_do_tab_dd_0_current").innerHTML,
                addTabDisplayDayOfWeekDate.value, document.getElementById("to_do_type_dd_0_current").innerHTML, addTabDisplayToDoCreationDate.value,
                tempChecked, notes, addTabNewWorkRequestNumber.value, addressStr);
                
                toDoMasterList.add(toDo);
                h.displayToDoAdded(toDo.toDoId);

                resetDisplayToDoAddUpdate();
                const temp = toDoMasterList.getToDo(toDo.toDoId);

                tempToDoPageElement = injectHTMLToDoTabDisplay(toDoMasterList.list[temp[2]]);
            }
            
        }
    })
    addTabClearButton.addEventListener("click", (event) => {
        console.log("Fired - Clicked addTabClearButton");

        if (filterCheckboxAddWr.checked == true) {
            resetDisplayWrAddUpdate();
        } else if (filterCheckboxAddPermit.checked == true) {
            resetDisplayPermitAddUpdate();
        } else if (filterCheckboxAddComment.checked == true) {
            resetDisplayCommentsAddUpdate();
        } else if (filterCheckboxAddToDo.checked == true) {
            resetDisplayToDoAddUpdate();
        }
    })
    addTabClearButton.addEventListener('keydown', (event) => {
        console.log("Fired - keydown addTbaClearButton");

        if (event.keyCode == 9) {
            dropdownCover.classList.remove("hidden");
            addressLineTextfieldCoverHouseNumber.classList.add("hidden");
        }
    })
    addTabRemoveButton.addEventListener("click", (event) => {
        console.log("Fired - Clicked addTabRemoveButton");

        displayConfirmRemove(addTabNewWorkRequestNumber.value);
    })

        /* List - Remove Buttons + Yes and No*/
    function displayConfirmRemove(toDoId) {
        console.log("Entered - displayConfirmRemove(" + toDoId + ")");

        document.getElementById("confirm_remove_popup_container").classList.remove("hidden");
        document.getElementById("confirm_remove_popup_text_container").insertAdjacentHTML("beforeend", toDoId);
        
        if (toDoTab.classList.contains("hidden") || addTab.classList.contains("hidden") && filterCheckboxAddToDo.checked) {
            document.getElementById("confirm_remove_popup_type").innerHTML = `<b>To Remove To-Do:</b>`
        } else if (addTab.classList.contains("hidden") && filterCheckboxAddWr.checked) {
            console.log("setting confirm_remove_popup_type to wr");
            document.getElementById("confirm_remove_popup_type").innerHTML = `<b>To Remove WR#:</b>`
        }
    }
    addTabDisplayToDoRemoveButton.addEventListener("click", (event) => {
        console.log("Clicked - addTabDisplayToDoRemoveButton");
        
        displayConfirmRemove(document.getElementById("add_tab_display_to_do_row_zero_numfield").value);
    })
    toDoDisplayMoveToRemoveButton.addEventListener("click", (event) => {
        console.log("Fired - Clicked toDoDisplayMoveToRemoveButton");

        displayConfirmRemove(tempCurToDo[0].toDoId);
    })
    confirmRemovePopupXButton.addEventListener("click", (event) => {
        console.log("Fired - Clicked confirmRemovePopupXButton");

        document.getElementById("confirm_remove_popup_container").classList.add("hidden");
    })
    confirmRemovePopupNo.addEventListener("click", (event) => {
        console.log("Fired - Clicked confirmRemovePopupNo");

        document.getElementById("confirm_remove_popup_container").classList.add("hidden");
    })
    confirmRemovePopupYes.addEventListener("click", (event) => {
        console.log("Fired - Clicked confirmRemovePopupYes");
        const h = new Haptix(promptDuration);

        if (toDoTab.classList.contains("hidden")) { // remove to-do from to-do tab using move to
            toDoMasterList.removeById(tempCurToDo[0].toDoId);
            document.getElementById("confirm_remove_popup_container").classList.add("hidden");
            toDoDisplayMoveToContainer.classList.add("hidden");
            

            for (var i = 0; i < toDoMasterList.list.length; i++) {
                if (toDoMasterList.list[i].date == toDoDisplayDayOfWeekDate.value) {
                    tempToDoPageElement = injectHTMLToDoTabDisplay(toDoMasterList.list[i]);
                    return;
                }
            }
        } else if (addTab.classList.contains("hidden") && filterCheckboxAddToDo.checked) { // remove to-do from add tab
            toDoMasterList.removeById(document.getElementById("add_tab_display_to_do_row_zero_numfield").value);
            document.getElementById("confirm_remove_popup_container").classList.add("hidden");
            addTabDisplayToDoRemoveButton.classList.remove("activeRemoveButton");
            resetDisplayToDoAddUpdate();
            h.displayToDoRemoved(document.getElementById("add_tab_display_to_do_row_zero_numfield").value);
        } else if (addTab.classList.contains("hidden") && filterCheckboxAddWr.checked) { // remove wr from add tab
            let temp = [];

            for (var i = 0; i < allWrList.length; i++) {
                if (allWrList[i].workRequestNumber != addTabNewWorkRequestNumber.value) {
                    temp.push(allWrList[i]);
                }
            }
            allWrList = temp;
            h.displayWrRemoved(addTabNewWorkRequestNumber.value);
            document.getElementById("confirm_remove_popup_container").classList.add("hidden");
            resetDisplayWrAddUpdate();
            document.getElementById("all_wr_tab_current_page_box").innerHTML = "1";
        }
    })

        /* Permit - Last Updated Checks */
    addTabPermitDateApplied.addEventListener("mouseout", (event) => {
        console.log("Moused Out - addTabPermitDateApplied");

        if (permitDateChangeValues[0] != addTabPermitDateApplied.value) { // date applied changed
            // Setting DD Menu Current to "Applied"
            document.getElementById("permit_status_dd_add_tab_row_2_current").innerHTML = "Applied";
                    
            // Setting Last Updated
            const d2 = new Date();
            const tempDate = d2.getFullYear() + "-" + formatMonth((d2.getMonth() + 1)) + "-" + d2.getDate();
            addTabPermitDateUpdated.value = tempDate;
        }
    })
    addTabPermitStart.addEventListener("mouseout", (event) => {
        console.log("Moused Out - addTabPermitStart");

        if (permitDateChangeValues[1] != addTabPermitStart.value) { // permit start date changed 
            // Setting Last Updated
            const d2 = new Date();
            let month = d2.getMonth() + 1;
            if (month < 10) {
                month= "0" + month;
            }
            let day = d2.getDate();
            if (day < 10) {
                day = "0" + day;
            }
            const tempDate = d2.getFullYear() + "-" + month + "-" + day;
            addTabPermitDateUpdated.value = tempDate;
        }
    })
    addTabPermitExpiration.addEventListener("mouseout", (event) => {
        console.log("Moused Out - addTabPermitExpiration");

        if (permitDateChangeValues[2] != addTabPermitExpiration.value) { // permit expiration changed 
            // Setting Last Updated
            const d2 = new Date();
            let month = d2.getMonth() + 1;
            if (month < 10) {
                month= "0" + month;
            }
            let day = d2.getDate();
            if (day < 10) {
                day = "0" + day;
            }
            const tempDate = d2.getFullYear() + "-" + month + "-" + day;
            addTabPermitDateUpdated.value = tempDate;
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

            tempContent.style.marginBottom = '350px';
            tempContent.style.zIndex = 2;

            dropdownCover.classList.remove("hidden");
        } else if (tempContent.style.display = 'flex' && event.target.innerHTML == "/\\") {
            tempContent.style.display = 'none';
        } else {
            if (event.target.innerHTML != "/\\" && tempContent.innerHTML.includes(event.target.innerHTML)) {
                const tempCurrent = document.getElementById("general_status_dd_add_tab_current");
                tempCurrent.innerHTML = event.target.innerHTML;

                if (tempCurrent.innerHTML == "Need to Visit" && addTabNewWorkRequestNumber.value != "" && getWr(addTabNewWorkRequestNumber.value, allWrList)) {
                    if (currentWr.crd == "0001-01-01") {
                        document.getElementById("missing_info_container").classList.remove("hidden");
                        missingInfoHeader.innerHTML = `<div class="missingInfoText">${"CRD for WR#" + currentWr.workRequestNumber + " Not Set"}</div>`;
                        missingInfoType.innerHTML = `<div class="missingInfoText">${"Set CRD?"}</div>`;
                    } else if (currentWr.rcd == "0001-01-01") {
                        document.getElementById("missing_info_container").classList.remove("hidden");
                        missingInfoHeader.innerHTML = `<div class="missingInfoText">${"RCD for WR#" + currentWr.workRequestNumber + " Not Set"}</div>`;
                        missingInfoType.innerHTML = `<div class="missingInfoText">${"Set RCD?"}</div>`;
                    } else { // Asking User if they want to add to-do
                        document.getElementById("add_to_do_pop_up_container").classList.remove("hidden");
                        addToDoPopUpHeader.innerHTML = `<div class="addToDoPopUpText">${"Do you want to add a \"Site Visit\" To-Do for Work Request # " + currentWr.workRequestNumber + "?"}</div>`;
                    }
                } else if (tempCurrent.innerHTML == "Need to Flag" && addTabNewWorkRequestNumber.value != "" && getWr(addTabNewWorkRequestNumber.value, allWrList)) {
                    document.getElementById("add_to_do_pop_up_container").classList.remove("hidden");
                    addToDoPopUpHeader.innerHTML = `<div class="addToDoPopUpText">${"Do you want to add a \"Site Visit\" To-Do for Work Request # " + currentWr.workRequestNumber + "?"}</div>`;
                } else if (tempCurrent.innerHTML == "SVC Calcs + Coding" && addTabNewWorkRequestNumber.value != "" && getWr(addTabNewWorkRequestNumber.value, allWrList)) {
                    document.getElementById("add_to_do_pop_up_container").classList.remove("hidden");
                    addToDoPopUpHeader.innerHTML = `<div class="addToDoPopUpText">${"Do you want to add a \"Svc Calc + Coding\" To-Do for Work Request # " + currentWr.workRequestNumber + "?"}</div>`;
                } else if (tempCurrent.innerHTML == "Check/ Apply NJUNS" && addTabNewWorkRequestNumber.value != "" && getWr(addTabNewWorkRequestNumber.value, allWrList)) {
                    document.getElementById("add_to_do_pop_up_container").classList.remove("hidden");
                    addToDoPopUpHeader.innerHTML = `<div class="addToDoPopUpText">${"Do you want to add a \"Check/ Apply - NJUNS\" To-Do for Work Request # " + currentWr.workRequestNumber + "?"}</div>`;
                } else if (tempCurrent.innerHTML == "Check/ Apply For Permit" && addTabNewWorkRequestNumber.value != "" && getWr(addTabNewWorkRequestNumber.value, allWrList)) {
                    document.getElementById("add_to_do_pop_up_container").classList.remove("hidden");
                    addToDoPopUpHeader.innerHTML = `<div class="addToDoPopUpText">${"Do you want to add a \"Check/ Apply - Permit\" To-Do for Work Request # " + currentWr.workRequestNumber + "?"}</div>`;
                } else if (tempCurrent.innerHTML == "Check/ Apply For Easement" && addTabNewWorkRequestNumber.value != "" && getWr(addTabNewWorkRequestNumber.value, allWrList)) {
                    document.getElementById("add_to_do_pop_up_container").classList.remove("hidden");
                    addToDoPopUpHeader.innerHTML = `<div class="addToDoPopUpText">${"Do you want to add a \"Check/ Apply - Easement\" To-Do for Work Request # " + currentWr.workRequestNumber + "?"}</div>`;
                } else if (tempCurrent.innerHTML == "Design" && addTabNewWorkRequestNumber.value != "" && getWr(addTabNewWorkRequestNumber.value, allWrList)) {
                    runAtDesignStatusCheck(currentWr);
                    document.getElementById("add_to_do_pop_up_container").classList.remove("hidden");
                    addToDoPopUpHeader.innerHTML = `<div class="addToDoPopUpText">${"Do you want to add a \"Design\" To-Do for Work Request # " + currentWr.workRequestNumber + "?"}</div>`;
                } else if (tempCurrent.innerHTML == "Revisions" && addTabNewWorkRequestNumber.value != "" && getWr(addTabNewWorkRequestNumber.value, allWrList)) {
                    document.getElementById("add_to_do_pop_up_container").classList.remove("hidden");
                    addToDoPopUpHeader.innerHTML = `<div class="addToDoPopUpText">${"Do you want to add a \"Revisions\" To-Do for Work Request # " + currentWr.workRequestNumber + "?"}</div>`;
                } else if (tempCurrent.innerHTML.includes("Waiting") && addTabNewWorkRequestNumber.value != "" && getWr(addTabNewWorkRequestNumber.value, allWrList)) {
                    document.getElementById("add_to_do_pop_up_container").classList.remove("hidden");
                    addToDoPopUpHeader.innerHTML = `<div class="addToDoPopUpText">${"Do you want to add a \"General\" To-Do for Work Request # " + currentWr.workRequestNumber + "?"}</div>`;
                    addToDoPopUpTab.innerHTML = `<div class="addToDoPopUpTextSubAddTab">(On "Waiting" Tab by Default)</div>`;
                    clearAddToDoPopUpTabs();
                    document.getElementById("add_to_do_pop_up_tab_waiting").classList.add("hidden");
                    document.getElementById("add_to_do_pop_up_tab_waiting_active").classList.remove("hidden");
                } 
                

                    /* Hiding DDMenu Content */
                tempContent.style.display = 'none';
                dropdownCover.classList.add("hidden");
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

            tempContent.style.zIndex = 2;

            dropdownCover.classList.remove("hidden");

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
                    dropdownCover.classList.add("hidden");
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

            tempContent.style.zIndex = 2;

            dropdownCover.classList.remove("hidden");

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
                dropdownCover.classList.add("hidden");
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

            tempContent.style.zIndex = 2;

            dropdownCover.classList.remove("hidden");

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
                dropdownCover.classList.add("hidden");
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

            tempContent.style.marginTop = '395px';
            tempContent.style.width = '90px';
            tempContent.style.zIndex = 2;

            dropdownCover.classList.remove("hidden");    

        } else if (tempContent.style.display == 'flex' && event.target.innerHTML == "\\/") {
            tempContent.style.display = 'none';
        } else {
            if (event.target.innerHTML != "\\/" && tempContent.innerHTML.includes(event.target.innerHTML)) {
                const tempCurrent = document.getElementById("permit_status_dd_add_tab_row_2_current");
                tempCurrent.innerHTML = event.target.innerHTML;

                if (event.target.innerHTML == "Applied" || event.target.innerHTML == "Extension Submitted") {
                    const d = new Date();
                    const tempDate = d.getFullYear() + "-" + formatMonth((d.getMonth() + 1)) + "-" + d.getDate();
                    addTabPermitDateApplied.value = tempDate;
                }

                // Setting Last Updated
                const d = new Date();
                const tempDate = d.getFullYear() + "-" + formatMonth((d.getMonth() + 1)) + "-" + d.getDate();
                addTabPermitDateUpdated.value = tempDate;

                /* Hiding DDMenu Content */
                tempContent.style.display = 'none';
                dropdownCover.classList.add("hidden");
            }
        }
    })

        /* Add Comment Tab */
    addTabCommentTypeContainer.addEventListener("click", (event) => {
        console.log("Fired - Clicked addTabCommentTypeContainer");

        const tempContent = document.getElementById("comment_type_dd_content");

        if (tempContent.style.display == 'none') {
            tempContent.style.display = 'flex';
            tempContent.style.flexDirection = 'column';
            tempContent.style.border = '1px solid black';

            tempContent.style.marginTop = '95px';
            tempContent.style.width = '90px';
            tempContent.style.paddingLeft = '20px';
            tempContent.style.zIndex = 2;

            dropdownCover.classList.remove("hidden");
        } else if (tempContent.style.display == 'flex' && event.target.innerHTML == "\\/") {
            tempContent.style.display = 'none';
        } else {
            if (event.target.innerHTML != "\\/" && tempContent.innerHTML.includes(event.target.innerHTML)) {
                const tempCurrent = document.getElementById("comment_type_dd_menu_current");

                tempCurrent.innerHTML = event.target.innerHTML;

                /* Hiding DDMenu Content */
                tempContent.style.display = 'none';
                dropdownCover.classList.add("hidden");
            }
        }
    })

        /* Add/Update To-Do */
    addTabDisplayToDoDDMenuTabContainer.addEventListener("click", (event) => {
        console.log("Fired - Clicked addTabDisplayToDoDDMenuTabContainer");

        const tempContent = document.getElementById("to_do_tab_dd_0_content");

        if (tempContent.style.display == 'none') {
            tempContent.style.display = 'flex';
            tempContent.style.flexDirection = 'column';
            tempContent.style.border = '1px solid black';

            tempContent.style.marginTop = '230px';
            tempContent.style.width = '90px';
            tempContent.style.paddingLeft = '20px';
            tempContent.style.zIndex = 2;

            dropdownCover.classList.remove("hidden");
        } else if (tempContent.style.display == 'flex' && event.target.innerHTML == "\\/") {
            tempContent.style.display = 'none';
        } else {
            if (event.target.innerHTML != "\\/" && tempContent.innerHTML.includes(event.target.innerHTML)) {
                const tempCurrent = document.getElementById("to_do_tab_dd_0_current");

                tempCurrent.innerHTML = event.target.innerHTML;

                if (tempCurrent.innerHTML.includes("Return")) {
                    document.getElementById("to_do_tab_dd_0_button").style.height = '50px';
                } else {
                    document.getElementById("to_do_tab_dd_0_button").style.height = '30px';
                }

                /* Hiding DDMenu Content */
                tempContent.style.display = 'none';
                dropdownCover.classList.add("hidden");
            }
        }
    })
    addTabDisplayToDoDDMenuTypeContainer.addEventListener("click", (event) => {
        console.log("Fired - Clicked addTabDisplayToDoDDMenuTypeContainer");

        const tempContent = document.getElementById("to_do_type_dd_0_content");

        if (tempContent.style.display == 'none') {
            tempContent.style.display = 'flex';
            tempContent.style.flexDirection = 'column';
            tempContent.style.border = '1px solid black';

            tempContent.style.marginTop = '240px';
            tempContent.style.width = '230px';
            tempContent.style.height = '200px';
            tempContent.style.paddingLeft = '20px';
            tempContent.style.zIndex = 2;

            dropdownCover.classList.remove("hidden");
        } else if (tempContent.style.display == 'flex' && event.target.innerHTML == "\\/") {
            tempContent.style.display = 'none';
        } else {
            if (event.target.innerHTML != "\\/" && tempContent.innerHTML.includes(event.target.innerHTML)) {
                const tempCurrent = document.getElementById("to_do_type_dd_0_current");

                tempCurrent.innerHTML = event.target.innerHTML;

                if (tempCurrent.innerHTML == "General") {
                    document.getElementById("add_tab_display_to_do_row_three_textfield_label").innerHTML = "To-Do: Notes (REQUIRED)";
                    document.getElementById("to_do_type_dd_0_button").style.height = '30px';
                } else if (tempCurrent.innerHTML.includes("Site") || tempCurrent.innerHTML.includes("Design") || 
                tempCurrent.innerHTML.includes("Revisions")) {
                    document.getElementById("add_tab_display_to_do_row_three_textfield_label").innerHTML = "To-Do: Notes";
                    document.getElementById("to_do_type_dd_0_button").style.height = '30px';
                } else {
                    document.getElementById("add_tab_display_to_do_row_three_textfield_label").innerHTML = "To-Do: Notes";
                    document.getElementById("to_do_type_dd_0_button").style.height = '50px';
                }

                /* Hiding DDMenu Content */
                tempContent.style.display = 'none';
                dropdownCover.classList.add("hidden");
            }
        }
    })

        /* Customer Contacted Check Box Event Listeners */
    customerContactedCheckboxNo.addEventListener("click", (event) => {
        console.log("Fired - Clicked customer_contacted_checkbox_no");

        if (customerContactedCheckboxYes.checked) {
            customerContactedCheckboxYes.checked = false; /* Unchecking "yes" box */
            addTabPriorityBox.value = "1";
        }
        if (!customerContactedCheckboxNo.checked) {
            customerContactedCheckboxYes.checked = true; /* Checking yes if unchecking no*/
            addTabPriorityBox.value = "5";
        }
    })
    customerContactedCheckboxYes.addEventListener("click", (event) => {
        console.log("Fired - Clicked customer_contacted_checkbox_yes");

        if (customerContactedCheckboxNo.checked) {
            customerContactedCheckboxNo.checked = false /* Unchecking "No" box */
            addTabPriorityBox.value = "5";
        }
        if (!customerContactedCheckboxYes.checked) {
            customerContactedCheckboxNo.checked = true; /* Checking no if unchecking yes */
            addTabPriorityBox.value = "1";
        }
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

        if (filterCheckboxAddToDo.checked == false) { // For all tabs except addToDo
            if (event.target.value.length == 8 && getWr(event.target.value, allWrList)[0] != false) { // The entered Wr exists
                addTabGetButton.disabled = false;
                addTabUpdateButton.disabled = true;
                //ddButton.disabled = true;
            } else if (event.target.value.length == 8) { // wr is not right length
                addTabAddButton.disabled = false;
                addTabGetButton.disabled = true;
                addTabUpdateButton.disabled = true;
            } else {
                addTabUpdateButton.disabled = true;
            } 
        } else { // to-do tab
            if (event.target.value.length == 8 && getWr(event.target.value, allWrList)[0] != false) { // The entered Wr exists
                addTabGetButton.disabled = false;
                //addTabUpdateButton.disabled = false;
                //addTabAddButton.disabled = true;
            } else if (event.target.value.length == 0 && addTabDisplayToDoRowZeroNumfield.value == toDoMasterList.getCount()) {
                addTabAddButton.disabled = false;
            } else {
                addTabAddButton.disabled = true;
                //addTabUpdateButton.disabled = true;
            } 
            
        }
       
    })

        /* Address Textfield  Inputs */
    addressLineTextfieldHouseNumber.addEventListener("mouseout", (event) => {
        console.log("Fired - mousedout address_line_textfield_house_number");

        if (addressLineTextfieldCoverHouseNumber.classList.contains("hidden") && addressLineTextfieldHouseNumber.value == undefined || 
        addressLineTextfieldCoverHouseNumber.classList.contains("hidden") && addressLineTextfieldHouseNumber.value.length == 0) {
            addressLineTextfieldCoverHouseNumber.classList.remove("hidden");
        }
    })
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
    addressLineTextfieldStreetName.addEventListener("change", (event) => {
        console.log("Changed - addressLineTextfieldStreetName");

        let temp = addressLineTextfieldStreetName.value.charAt(0).toUpperCase();
        temp += addressLineTextfieldStreetName.value.substring(1);

        addressLineTextfieldStreetName.value = temp;
    })
    addressLineTextfieldStreetName.addEventListener("mouseout", (event) => {
        console.log("Fired - mouseout addressLineTextfieldStreetName");

        if (addressLineTextfieldStreetName.value == undefined || addressLineTextfieldStreetName.value.length == 0) {
            addressLineTextfieldStreetName.value = "Enter Street Name";
        }
    })
    addressLineTextfieldCounty.addEventListener("click", (event) => {
        console.log("Fired - Clicked address_line_textfield_county");
        
        if (event.target.value != null) {
            event.target.select();
        } 
    })
    addressLineTextfieldCounty.addEventListener("change", (event) => {
        console.log("Changed - addressLineTextfieldCounty");

        let temp = addressLineTextfieldCounty.value.charAt(0).toUpperCase();
        temp += addressLineTextfieldCounty.value.substring(1);

        addressLineTextfieldCounty.value = temp;        
    })
    addressLineTextfieldCounty.addEventListener("mouseout", (event) => {
        console.log("Fired - mouseout addressLineTextfieldCounty");

        if (addressLineTextfieldCounty.value == undefined || addressLineTextfieldCounty.value.length == 0) {
            addressLineTextfieldCounty.value = "Enter County/City Name";
        }
    })
    addressLineTextfieldCounty.addEventListener('keydown', (event) => {
        console.log("Fired - keydown addressLineTextfieldCounty");

        if (event.keyCode == 9) {
            dropdownCover.classList.remove("hidden");
            addressLineTextfieldCoverZip.classList.add("hidden");
        }
    })
    addressLineTextfieldZip.addEventListener("mouseout", (event) => {
        console.log("Fired - mousedout addressLineTextfieldZip");

        if (addressLineTextfieldCoverZip.classList.contains("hidden") && addressLineTextfieldZip.value == undefined || 
        addressLineTextfieldCoverZip.classList.contains("hidden") && addressLineTextfieldZip.value.length == 0) {
            addressLineTextfieldCoverZip.classList.remove("hidden");
        }
    })
    addressLineTextfieldZip.addEventListener("click", (event) => {
        console.log("Fired - Clicked address_line_textfield_zip");
        
        if (event.target.value != null) {
            event.target.select();
        } 
    })

        /* Address Textfield Covers */
    addressLineTextfieldCoverHouseNumber.addEventListener("click", (event) => {
        console.log("Fired - Clicked addressLineTextfieldCoverHouseNumber");

        addressLineTextfieldCoverHouseNumber.classList.add("hidden");
        addressLineTextfieldHouseNumber.click();

        dropdownCover.classList.remove("hidden");
    })
    addressLineTextfieldCoverZip.addEventListener("click", (event) => {
        console.log("Fired - Clicked addressLineTextfieldCoverZip");

        addressLineTextfieldCoverZip.classList.add("hidden");
        addressLineTextfieldZip.click();

        dropdownCover.classList.remove("hidden");
    })

            /* Comment Event Listeners */
        /* Add Tab Wr */
    function removeSelectedComments() {
        console.log("Entered - removeSelectedComments()");

        for (var i = 0; i < tempCommentsCount; i++) {
            const cur = document.getElementById("comment_to_add_item_" + i);
            const curPageNum = document.getElementById("add_wr_tab_current_page_box").innerHTML;
            
            if (cur != null && cur.classList.contains("selectedComment")) {
                document.getElementById("comment_to_add_item_" + i).remove();
                const secondHalf = tempComments.list.slice(tempComments.list.length - 1 - i + 1);
                const firstHalf = tempComments.list.slice(0, tempComments.list.length - 1 - i);
                tempComments.list = firstHalf.concat(secondHalf);

                let newPage = [];

                for (var j = tempComments.list.length - 1 - ((curPageNum - 1) * tempCommentsCount); j > tempComments.list.length - 1 - ((curPageNum - 1) * tempCommentsCount) - tempCommentsCount; j--) {
                    if (tempComments.list[j] != undefined) {
                        newPage.push(tempComments.list[j]);
                    }
                }
                console.log("newPage = ");
                console.log(newPage);
                updateComments(newPage, "addWr");
            }
        }
    }
    function clearTempCommentsSelections() {
        console.log("Entered - clearTempCommentsSelections()");

        for (var i = 0; i < tempCommentsCount; i++) {
            if (document.getElementById("comment_to_add_item_" + i) != undefined) {
                document.getElementById("comment_to_add_item_" + i).classList.remove("selectedComment");
            }
        }
    }
    addTabCommentsTextfield.addEventListener("input", (event) => {
            console.log("Input - add_tab_comments_textfield - " + event.target.value);
    
            addTabCommentsTextfieldInput = event.target.value;
            
            if (event.target.value != "Enter Comment Here" && event.target.value.length > 0) {
                addTabCommentsAddButton.disabled = false;
            } else {
                addTabCommentsAddButton.disabled = true;
            }
    })
    addTabCommentsTextfield.addEventListener("click", (event) => {
        console.log("Fired - Clicked add_tab_comments_textfield");
    
        if (event.target.value != null) {
            event.target.select();
        } 
    })
    addTabCommentsAddButton.addEventListener("click", (event) => {
            console.log("Fired - Clicked add_tab_comments_add_button");

            const d = new Date();
            let day = d.getDate();
            if (day < 10) {
                day = "0" + day;
            }
            let today = formatMonth((d.getMonth() + 1)) + "-" + day + "-" + d.getFullYear();
    
            const comment = new CommentItem(addTabCommentsTextfieldInput, today, "General");
            addTabCommentsRemoveButton.disabled = false;
            tempComments.add(comment);
            addTabCommentsTextfield.value = "Type Comment Here"; // reseting entery textfield
            
    
    })
    addTabCommentsRemoveButton.addEventListener("click", (event) => {
        console.log("Fired - Clicked addTabCommentsRemoveButton");

        removeSelectedComments(); 

        console.log("tempComments =");
        console.log(tempComments);

        if (tempComments.list.length == 0) {
            document.getElementById("add_tab_wr_comments_to_add").classList.add("hidden");
            addTabCommentsRemoveButton.disabled = true;
        }
        if (tempComments.list.length < tempCommentsCount + 1) {
            document.getElementById("add_tab_wr_comments_prev_next_container").classList.add("hidden");
            document.getElementById("add_tab_comments_remove_button").style.marginLeft = '340px';
        }
        console.log(addTabWrCommentsToAdd.innerHTML == "");
        console.log(document.getElementById("add_wr_tab_current_page_box").innerHTML.trim());
        if (addTabWrCommentsToAdd.innerHTML == "" && document.getElementById("add_wr_tab_current_page_box").innerHTML.trim() != "1") {
            addTabWrCommentsPrevButton.click();
        }

    })
    addTabWrCommentsToAdd.addEventListener("click", (event) => {
        console.log("Fired - Clicked addTabWrCommentsToAdd");

        if (event.target.id.includes("comment_to_add_item") && event.target.classList.contains("selectedComment") != true) {
            clearTempCommentsSelections();
            event.target.classList.add("selectedComment");
        } else {
            event.target.classList.remove("selectedComment");
        }
    })
    addTabWrCommentsNextButton.addEventListener("click", (event) => {
        console.log("Fired - Clicked addTabWrCommentsNextButton");

        const index = document.getElementById("add_wr_tab_current_page_box").innerHTML - 1;
        let temp = [];
        let count = 0;

        for (var i = tempComments.list.length - 1 - (tempCommentsCount * (index + 1)); i >= 0; i--) {
            if (count < tempCommentsCount) {
                temp.push(tempComments.list[i]);
                count++;
            }
        }
        updateComments(temp, "addWr");
        document.getElementById("add_wr_tab_current_page_box").innerHTML = index + 2;
        addTabWrCommentsPrevButton.disabled = false;

        if (((index + 2) * tempCommentsCount) >= tempComments.list.length) {
            addTabWrCommentsNextButton.disabled = true;
        }

        addTabCommentsRemoveButton.disabled = true; // bug when trying to remove from past page 1

    })
    addTabWrCommentsPrevButton.addEventListener("click", (event) => {
        console.log("Fired - Clicked addTabWrCommentsPrevButton");

        const index = document.getElementById("add_wr_tab_current_page_box").innerHTML - 1;
        let temp = [];
        let count = 0;

        for (var i = tempComments.list.length - 1 - (tempCommentsCount * (index - 1)); i >= 0; i--) {
            if (count < tempCommentsCount) {
                temp.push(tempComments.list[i]);
                count++;
            }
        }
        updateComments(temp, "addWr");
        document.getElementById("add_wr_tab_current_page_box").innerHTML = index;
        addTabWrCommentsNextButton.disabled = false;

        if ((index - 1) == 0) {
            addTabWrCommentsPrevButton.disabled = true;
        }

        if (document.getElementById("add_wr_tab_current_page_box").innerHTML == "1") {
            addTabCommentsRemoveButton.disabled = false;
        }
    })

            /* Add Tab To-Do */
    function clearDays(tab) {
        console.log("Entered - clearDays()");
        document.getElementById(tab + "_tab_day_of_week_box_sunday_active").classList.add("hidden");
        document.getElementById(tab + "_tab_day_of_week_box_sunday").classList.remove("hidden");
        document.getElementById(tab + "_tab_day_of_week_box_monday_active").classList.add("hidden");
        document.getElementById(tab + "_tab_day_of_week_box_monday").classList.remove("hidden");
        document.getElementById(tab + "_tab_day_of_week_box_tuesday_active").classList.add("hidden");
        document.getElementById(tab + "_tab_day_of_week_box_tuesday").classList.remove("hidden");
        document.getElementById(tab + "_tab_day_of_week_box_wednesday_active").classList.add("hidden");
        document.getElementById(tab + "_tab_day_of_week_box_wednesday").classList.remove("hidden");
        document.getElementById(tab + "_tab_day_of_week_box_thursday_active").classList.add("hidden");
        document.getElementById(tab + "_tab_day_of_week_box_thursday").classList.remove("hidden");
        document.getElementById(tab + "_tab_day_of_week_box_friday_active").classList.add("hidden");
        document.getElementById(tab + "_tab_day_of_week_box_friday").classList.remove("hidden");
        document.getElementById(tab + "_tab_day_of_week_box_saturday_active").classList.add("hidden");
        document.getElementById(tab + "_tab_day_of_week_box_saturday").classList.remove("hidden");

        document.getElementById("to_do_tab_current_page_box").innerHTML = "1";

    }
    function setDay(tab, day) {
        console.log("Entered - setDay(tab = " + tab + " day= " + day + ")");

        clearDays(tab);

        if (day == 0) {
            document.getElementById(tab + "_tab_day_of_week_box_sunday_active").classList.remove("hidden");
            document.getElementById(tab + "_tab_day_of_week_box_sunday").classList.add("hidden");
            //document.getElementById("day_of_week_box_sunday").click();
        } else if (day == 1) {
            document.getElementById(tab + "_tab_day_of_week_box_monday_active").classList.remove("hidden");
            document.getElementById(tab + "_tab_day_of_week_box_monday").classList.add("hidden");
            //document.getElementById("day_of_week_box_monday").click();
        } else if (day == 2) {
            document.getElementById(tab + "_tab_day_of_week_box_tuesday_active").classList.remove("hidden");
            document.getElementById(tab + "_tab_day_of_week_box_tuesday").classList.add("hidden");
            //document.getElementById("day_of_week_box_tuesday").click();
        } else if (day == 3) {
            document.getElementById(tab + "_tab_day_of_week_box_wednesday_active").classList.remove("hidden");
            document.getElementById(tab + "_tab_day_of_week_box_wednesday").classList.add("hidden");
            //document.getElementById("day_of_week_box_wednesday").click();
        } else if (day == 4) {
            document.getElementById(tab + "_tab_day_of_week_box_thursday_active").classList.remove("hidden");
            document.getElementById(tab + "_tab_day_of_week_box_thursday").classList.add("hidden");
            //document.getElementById("day_of_week_box_thursday").click();
        } else if (day == 5) {
            document.getElementById(tab + "_tab_day_of_week_box_friday_active").classList.remove("hidden");
            document.getElementById(tab + "_tab_day_of_week_box_friday").classList.add("hidden");
            //document.getElementById("day_of_week_box_friday").click();
        } else if (day == 6) {
            document.getElementById(tab + "_tab_day_of_week_box_saturday_active").classList.remove("hidden");
            document.getElementById(tab + "_tab_day_of_week_box_saturday").classList.add("hidden");
            //document.getElementById("day_of_week_box_saturday").click();
        } 
    }
    /* Takes in a dateStr param (YYYY-MM-DD) and adjusts 
    fromDate and toDate accordingly based on tab param */
    function setFromToDates(tab, dateStr) {
        console.log("Entered - setFromToDates(tab= " + tab + " dateStr= " + dateStr + ")");

        const date = new Date(dateStr);
        date.setDate(date.getDate() + 1);
        
        const year = date.getFullYear();
        let month = date.getMonth() + 1;
        if (month < 10) {
            month = "0" + month;
        }
        let day = date.getDate();
        if (day < 10) {
            day = "0" + day;
        }

        let tempFromDate = formatDateNormal(subtractDays(year, month, day, date.getDay()));
        let tempToDate = formatDateNormal(addDays(year, month, day, (7 - date.getDay() - 1)));
       
        if (tab == "add") {
            document.getElementById("add_tab_day_of_week_from_date").innerHTML = "From: " + tempFromDate;
            document.getElementById("add_tab_day_of_week_to_date").innerHTML = "To: " + tempToDate;
        } else if (tab == "to_do_display") {
            document.getElementById("to_do_display_tab_day_of_week_from_date").innerHTML = "From: " + tempFromDate;
            document.getElementById("to_do_display_tab_day_of_week_to_date").innerHTML = "To: " + tempToDate;
        } else if (tab == "move_to") {
            document.getElementById("move_to_tab_day_of_week_from_date").innerHTML = "From: " + tempFromDate;
            document.getElementById("move_to_tab_day_of_week_to_date").innerHTML = "To: " + tempToDate;
        } else if (tab == "missing_info") {
            document.getElementById("missing_info_tab_day_of_week_from_date").innerHTML = "From: " + tempFromDate;
            document.getElementById("missing_info_tab_day_of_week_to_date").innerHTML = "To: " + tempToDate;
        } else if (tab == "add_to_do_pop_up") {
            document.getElementById("add_to_do_pop_up_tab_day_of_week_from_date").innerHTML = "From: " + tempFromDate;
            document.getElementById("add_to_do_pop_up_tab_day_of_week_to_date").innerHTML = "To: " + tempToDate;
        } else if (tab == "permit_status_warning") {
            document.getElementById("permit_status_warning_pop_up_tab_day_of_week_from_date").innerHTML = "From: " + tempFromDate;
            document.getElementById("permit_status_warning_pop_up_tab_day_of_week_to_date").innerHTML = "To: " + tempToDate;
        } else if (tab == "easement_status_warning") {
            document.getElementById("easement_status_warning_pop_up_tab_day_of_week_from_date").innerHTML = "From: " + tempFromDate;
            document.getElementById("easement_status_warning_pop_up_tab_day_of_week_to_date").innerHTML = "To: " + tempToDate;
        }
    }
    function addDays(curYear, curMonth, curDay, daysToAdd) {
        console.log("Entered - addDays(curYear = " + curYear + " curMonth = " + curMonth + " curDay = " + curDay + " daysToAdd = " + daysToAdd + ")");  

        if (curMonth == 12) { // Decemeber - may have to change year
            const curDayNum = new Number(curDay);
            let tempDay = curDayNum + daysToAdd;
            if (tempDay < 10) {
                tempDay = "0" + tempDay;
            }
            const tempYear = new Number(curYear);
            if (tempDay > 31) {
                let newDay = new Number(tempDay) - 31
                if (newDay < 10) {
                    newDay = "0" + newDay;
                }
                return ((tempYear + 1) + "-01-" + newDay);
            } else {
                return (tempYear + "-12-" + tempDay);
            }
        } else if (curMonth == 2) { // February
            const curDayNum = new Number(curDay);
            const tempDay = curDayNum + daysToAdd;
           
            if (tempDay > 28) {
                const newDay = tempDay - 28;
                return (curYear + "-03-" + newDay);
            } else {
                return (curYear + "-02-" + tempDay);
            }
        } else if (curMonth == 4 || curMonth == 6 || curMonth == 9 || curMonth == 11) { // Months with 30 Days
            const curDayNum = new Number(curDay);
            const tempDay = curDayNum + daysToAdd;
            if (tempDay > 30) {
                const newDay = tempDay - 30;
                const newMonth = new Number(curMonth) + 1;
                if (newMonth < 10 && newDay < 10) {
                    return (curYear + "-0" + newMonth + "-0" + newDay);
                } else if (newMonth < 10) {
                    return (curYear + "-0" + newMonth + "-" + newDay);
                } else if (newDay < 10) {
                    return (curYear + "-" + newMonth + "-0" + newDay);
                } else {
                    return (curYear + "-" + newMonth + "-" + newDay);
                }
            } else {
                if (tempDay < 10) {
                    return (curYear + "-" + curMonth + "-0" + tempDay);
                } else {
                    return (curYear + "-" + curMonth + "-" + tempDay);
                }
            }
        } else { // Months with 31 Days 
            let tempDay = new Number(curDay) + daysToAdd;
            if (tempDay > 31) {
                let newDay = tempDay - 31;

                if (newDay < 10) {
                    newDay = "0" + newDay;
                }

                const newMonth = new Number(curMonth) + 1;
                if ((newMonth) < 10 && newDay < 10) {
                    return (curYear + "-0" + newMonth + "-0" + newDay);
                } else if ((newMonth) < 10) {
                    return (curYear + "-0" + newMonth + "-" + newDay);
                } else if (newDay < 10) {
                    return (curYear + "-" + newMonth + "-0" + newDay);
                } else {
                    return (curYear + "-" + newMonth + "-" + newDay);
                }
            } else {
                const tempMonth = new Number(curMonth);

                if (tempDay < 10) {
                    tempDay = "0" + tempDay;
                }

                if (tempMonth < 10) {
                    return (curYear + "-0" + tempMonth + "-" + tempDay);
                } else {
                    return (curYear + "-" + tempMonth + "-" + tempDay);
                }
            }
        }
    }
    function subtractDays(curYear, curMonth, curDay, daysToSubtract) {
        console.log("Entered - subtractDays(curYear = " + curYear + " curMonth = " + curMonth + " curDay = " + curDay + " daysToSubtract = " + daysToSubtract + ")");

        if (daysToSubtract >= curDay) { // Have to change month
            const tempDay = daysToSubtract - curDay; // to be subtracted from last number of prev month

            if (curMonth == 1) { // January - Have to change year
                let temp = 31 - tempDay;
                if (temp < 10) {
                    temp = "0" + temp;
                }
                return ((curYear - 1) + "-12-" + temp);
            } else if (curMonth == 3) { // Going back to February

                let temp = 28 - tempDay;

                if (curYear % 4 == 0) {
                    console.log("It's a leap year - Feb has 29 days");
                    temp = 29 - tempDay;
                } else {

                }
                if (temp < 10) {
                    temp = "0" + temp;
                }
                return (curYear + "-02-" + temp);
            } else if (curMonth == 5 || curMonth == 7 || curMonth == 10 || curMonth == 12) { // Going back into months with 30 days
                let temp = 30 - tempDay;
                if (temp < 10) {
                    temp = "0" + temp;
                }
                let tempMonth = curMonth - 1;
                if (tempMonth < 10) {
                    tempMonth = "0" + tempMonth;
                }
                return (curYear + "-" + tempMonth + "-" + temp);
            } else { // Going back into months with 31 days
                console.log("Entered else part of statement");
                let temp = 31 - tempDay;
                if (temp < 10) {
                    temp = "0" + temp;
                }
                let tempMonth = curMonth - 1;
                if (tempMonth < 10) {
                    tempMonth = "0" + tempMonth;
                }
                return (curYear + "-" + tempMonth + "-" + temp);
            }

        } else { // month stays the same
            let temp = curDay - daysToSubtract;
            if (temp < 10) {
                temp = "0" + temp;
            }
            return (curYear + "-" + curMonth + "-" + temp);

        }

    }
    function assessDayOfWeekChange(tab, newDay) {
        console.log("Entered - assessDayOfWeekChange(tab= " + tab + " newDay= " + newDay + ")");

        let d = [];
        
        if (tab == "add") {
            let temp = addTabDisplayDayOfWeekDate.value;
            let tempDay = temp.substring(8);
            let tempNewDay = new Number(tempDay) + 1;
            if (tempNewDay < 10) {
                tempNewDay = "0" + tempNewDay;
            }
            const year = temp.substring(0,4);
            const month = temp.substring(5, 7);
            d = new Date(year + "-" + month + "-" + tempNewDay);
        } else if (tab == "to_do_display") {
            let temp = toDoDisplayDayOfWeekDate.value;
            let tempDay = temp.substring(8);
            let tempNewDay = new Number(tempDay) + 1;
            if (tempNewDay < 10) {
                tempNewDay = "0" + tempNewDay;
            }
            const year = temp.substring(0,4);
            const month = temp.substring(5, 7);
            d = new Date(year + "-" + month + "-" + tempNewDay);
        } else if  (tab == "move_to") {
            let temp = moveToDayOfWeekDate.value;
            let tempDay = temp.substring(8);
            let tempNewDay = new Number(tempDay) + 1;
            if (tempNewDay < 10) {
                tempNewDay = "0" + tempNewDay;
            }
            const year = temp.substring(0,4);
            const month = temp.substring(5, 7);
            d = new Date(year + "-" + month + "-" + tempNewDay);
        } else if (tab == "missing_info") {
            let temp = missingInfoDayOfWeekDate.value;
            let tempDay = temp.substring(8);
            let tempNewDay = new Number(tempDay) + 1;
            if (tempNewDay < 10) {
                tempNewDay = "0" + tempNewDay;
            }
            const year = temp.substring(0,4);
            const month = temp.substring(5, 7);
            d = new Date(year + "-" + month + "-" + tempNewDay);
        } else if (tab == "add_to_do_pop_up") {
            let temp = addToDoPopUpDayOfWeekDate.value;
            let tempDay = temp.substring(8);
            let tempNewDay = new Number(tempDay) + 1;
            if (tempNewDay < 10) {
                tempNewDay = "0" + tempNewDay;
            }
            const year = temp.substring(0,4);
            const month = temp.substring(5, 7);
            d = new Date(year + "-" + month + "-" + tempNewDay);
        } else if (tab == "permit_status_warning_pop_up") {
            let temp = permitStatusWarningPopUpDayOfWeekDate.value;
            let tempDay = temp.substring(8);
            let tempNewDay = new Number(tempDay) + 1;
            if (tempNewDay < 10) {
                tempNewDay = "0" + tempNewDay;
            }
            const year = temp.substring(0,4);
            const month = temp.substring(5, 7);
            d = new Date(year + "-" + month + "-" + tempNewDay);
        } else if (tab == "easement_status_warning_pop_up") {
            let temp = easementStatusWarningPopUpDayOfWeekDate.value;
            let tempDay = temp.substring(8);
            let tempNewDay = new Number(tempDay) + 1;
            if (tempNewDay < 10) {
                tempNewDay = "0" + tempNewDay;
            }
            const year = temp.substring(0,4);
            const month = temp.substring(5, 7);
            d = new Date(year + "-" + month + "-" + tempNewDay);
        } 

        const year = d.getFullYear();
        let month = d.getMonth() + 1;
        if (month < 10) {
            month = "0" + month;
        }
        let day = d.getDate();
        if (day < 10) {
            day = "0" + day;
        }
        const cur = (year + "-" + month + "-" + day);

        const curDay = d.getDay();

        if (newDay < curDay) { // Going backwards
            //addTabDisplayDayOfWeekDate.value = (year + "-" + month + "-" + (day - (curDay - newDay)));
            const difference = curDay - newDay;

            const temp = subtractDays(year, month, day, difference);

            if (tab == "to_do_display") {
                toDoDisplayDayOfWeekDate.value = (temp);
                setFromToDates("to_do_display", temp);
            } else if (tab == "add") {
                addTabDisplayDayOfWeekDate.value = (temp);
                setFromToDates("add", temp);
            } else if (tab == "move_to") {
                moveToDayOfWeekDate.value = (temp);
                setFromToDates("move_to", temp);
            } else if (tab == "missing_info") {
                missingInfoDayOfWeekDate.value = (temp);
                setFromToDates("missing_info", temp);
            } else if (tab == "add_to_do_pop_up") {
                addToDoPopUpDayOfWeekDate.value = (temp);
                setFromToDates("add_to_do_pop_up", temp);
            } else if (tab == "permit_status_warning_pop_up") {
                permitStatusWarningPopUpDayOfWeekDate.value = (temp);
                setFromToDates("permit_status_warning_pop_up");
            } else if (tab == "easement_status_warning_pop_up") {
                easementStatusWarningPopUpDayOfWeekDate.value = (temp);
                setFromToDates("easement_status_warning_pop_up");
            }

        } else if (newDay > curDay) { // Going forwards
            const difference = newDay - curDay;

            const temp = addDays(year, month, day, difference);

            if (tab == "to_do_display") {
                toDoDisplayDayOfWeekDate.value = (temp);
                setFromToDates("to_do_display", temp);
            } else if (tab == "add") {
                addTabDisplayDayOfWeekDate.value = (temp);
                setFromToDates("add", temp);
            } else if (tab == "move_to") {
                moveToDayOfWeekDate.value = (temp);
                setFromToDates("move_to", temp);
            } else if (tab == "missing_info") {
                missingInfoDayOfWeekDate.value = (temp);
                setFromToDates("missing_info", temp);
            } else if (tab == "add_to_do_pop_up") {
                addToDoPopUpDayOfWeekDate.value = (temp);
                setFromToDates("add_to_do_pop_up", temp);
            } else if (tab == "permit_status_warning_pop_up") {
                permitStatusWarningPopUpDayOfWeekDate.value = (temp);
                setFromToDates("permit_status_warning_pop_up");
            } else if (tab == "easement_status_warning_pop_up") {
                easementStatusWarningPopUpDayOfWeekDate.value = (temp);
                setFromToDates("easement_status_warning_pop_up");
            }

        } else { // Going to today

            let temp = [];

            if (day < 10) {
                temp = (year + "-" + month + "-0" + day);
            } else {
                temp = (year + "-" + month + "-" + day);
            }

            if (tab == "to_do_display") {
                toDoDisplayDayOfWeekDate.value = (temp);
                setFromToDates("to_do_display", temp);
            } else if (tab == "add") {
                addTabDisplayDayOfWeekDate.value = (temp);
                setFromToDates("add", temp);

            } else if (tab == "move_to") {
                moveToDayOfWeekDate.value = (temp);
                setFromToDates("move_to", temp);
            } else if (tab == "missing_info") {
                missingInfoDayOfWeekDate.value = (temp);
                setFromToDates("missing_info", temp);
            } else if (tab == "add_to_do_pop_up") {
                addToDoPopUpDayOfWeekDate.value = (temp);
                setFromToDates("add_to_do_pop_up", temp);
            } else if (tab == "permit_status_warning_pop_up") {
                permitStatusWarningPopUpDayOfWeekDate.value = (temp);
                setFromToDates("permit_status_warning_pop_up");
            } else if (tab == "easement_status_warning_pop_up") {
                easementStatusWarningPopUpDayOfWeekDate.value = (temp);
                setFromToDates("easement_status_warning_pop_up");
            }
        }

        if (tab != "move_to") {
            /* Updating display */
        for (var i = 0; i < toDoMasterList.list.length; i++) {
            if (toDoMasterList.list[i].date == toDoDisplayDayOfWeekDate.value) {
                console.log("injecting display");
                if (document.getElementById("no_to_dos_for_today_prompt") != undefined) {
                    console.log("removing prompt");
                    document.getElementById("no_to_dos_for_today_prompt").remove();
                }
                //let temp = new ToDoDayObject(toDoDisplayDayOfWeekDate.value);

                if (toDoMasterList.list[i].isEmpty()) {
                    console.log("adding error");
                    toDoDisplayRowElementContainer.innerHTML = `<div class="noToDosForToday" id="no_to_dos_for_today_prompt">No To-Do's for Today</div>`;
                } else {
                    tempToDoPageElement = injectHTMLToDoTabDisplay(toDoMasterList.list[i]);
                    
                    /* Checking to what tab is selected so I can filter list */
                    if (toDoGeneralTab.classList.contains("hidden")) {
                        toDoGeneralTab.click();
                    } else if (toDoMentorTab.classList.contains("hidden")) {
                        toDoMentorTab.click();
                    } else if (toDoCoordinatorTab.classList.contains("hidden")) {
                        toDoCoordinatorTab.click();
                    } else if (toDoWaitingTab.classList.contains("hidden")) {
                        toDoWaitingTab.click();
                    } else if (toDoOnReturnToOfficeTab.classList.contains("hidden")) {
                        toDoOnReturnToOfficeTab.click();
                    } 
                }
                return;
            } else if ((i + 1) == toDoMasterList.list.length) { // last index and not found
                toDoDisplayRowElementContainer.innerHTML = `<div class="noToDosForToday" id="no_to_dos_for_today_prompt">No To-Do's for Today</div>`;
            }
        }
        }
        
    }
    function clearTempNotesSelections() {
        console.log("Entered - clearTempNotesSelections");

        for (var i = 0; i < tempNotesCount; i++) {
            if (document.getElementById("add_tab_display_to_do_note_item_" + i) != undefined) {
                document.getElementById("add_tab_display_to_do_note_item_" + i).classList.remove("selectedComment");
            }
        }
    }
    function removeSelectedNotes() {
        console.log("Entered - removeSelectedNotes()");

        for (var i = 0; i < tempNotesCount; i++) {
            const cur = document.getElementById("add_tab_display_to_do_note_item_" + i);
            const curPageNum = document.getElementById("add_tab_display_to_do_current_page_box").innerHTML;

            if (cur != null && cur.classList.contains("selectedComment")) {
                document.getElementById("add_tab_display_to_do_note_item_" + i).remove();
                const secondHalf = tempNotes.list.slice(tempNotes.list.length - 1 - i + 1);
                const firstHalf = tempNotes.list.slice(0, tempNotes.list.length - 1 - i);
                tempNotes.list = firstHalf.concat(secondHalf);

                let newPage = [];

                for (var j = tempNotes.list.length - 1 - ((curPageNum - 1) * tempNotesCount); j > tempNotes.list.length - 1 - ((curPageNum - 1) * tempNotesCount) - tempNotesCount; j--) {
                    if (tempNotes.list[j] != undefined) {
                        newPage.push(tempNotes.list[j]);
                    }
                }
                updateComments(newPage, "addToDo");
            }
        }
    }

        /* Notes to add */
    addTabDisplayToDoRowThreeNotesToAdd.addEventListener("click", (event) => {
        console.log("Fired - Clicked addTabDisplayToDoRowThreeNotesToAdd");

        console.log(event.target);

        if (event.target.id.includes("add_tab_display_to_do_note_item") && event.target.classList.contains("selectedComment") != true) {
            clearTempNotesSelections();
            event.target.classList.add("selectedComment");
        } else {
            event.target.classList.remove("selectedComment");
        }
    })
    addTabDisplayToDoRowThreeAddButton.addEventListener("click", (event) => {
        console.log("Fired - Clicked addTabDisplayToDoRowThreeAddButton");

        const e = new Error(promptDuration);

        if (addTabDisplayToDoRowThreeTextfield.value != null && addTabDisplayToDoRowThreeTextfield.value.length > 0) {
            const d = new Date();
            let month = d.getMonth() + 1;
            if (month < 10) {
                month = "0" + month;
            }
            let day = d.getDate();
            if (day < 10) {
                day = "0" + day;
            }
            const note = new NoteItem(addTabDisplayToDoRowThreeTextfieldInput);
            addTabDisplayToDoRowThreeRemoveButton.disabled = false;
            tempNotes.addToDoNote(note, 0);

            addTabDisplayToDoRowThreeTextfield.value = "Enter Note Here";
            
        } else {
            e.displayToDoNoNoteEntered();
        }
    })
    addTabDisplayToDoRowThreeRemoveButton.addEventListener("click", (event) => {
        console.log("Fired - Clicked addTabDisplayToDoRowThreeRemoveButton");

        removeSelectedNotes();

        if (tempNotes.list.length == 0) {
            addTabDisplayToDoRowThreeRemoveButton.disabled = true;
        }
        if (tempNotes.list.length < tempNotesCount + 1) {
            document.getElementById("add_tab_display_to_do_row_three_prev_next_container").classList.add("hidden");
            document.getElementById("add_tab_display_to_do_row_three_box_top_buttons_container").style.marginLeft = '700px'


        }
        if (addTabDisplayToDoRowThreeNotesToAdd.innerHTML == "" && document.getElementById("add_tab_display_to_do_current_page_box").innerHTML.trim() != "1") {
            addTabDisplayToDoPrevButton.click();
        }
    })
    addTabDisplayToDoRowThreeTextfield.addEventListener("click", (event) => {
        console.log("Fired - Clicked addTabDisplayToDoRowThreeTextfield");

        if (addTabDisplayToDoRowThreeTextfield.value != null && addTabDisplayToDoRowThreeTextfield.value.length > 0) {
            addTabDisplayToDoRowThreeTextfield.select();
        }
    })
    addTabDisplayToDoRowThreeTextfield.addEventListener("input", (event) => {
        console.log("Input - addTabDisplayToDoRowThree - " + event.target.value);

        addTabDisplayToDoRowThreeTextfieldInput = event.target.value;
        
        if (event.target.value != "Enter Note Here" && event.target.value.length > 0) {
            addTabCommentsAddButton.disabled = false;
        } else {
            addTabCommentsAddButton.disabled = true;
        }
})
    addTabDisplayToDoRowZeroNumfield.addEventListener("click", (event) => {
        console.log("Fired - Clicked addTabDisplayToDoRowZeroNumfield");

        if (addTabDisplayToDoRowZeroNumfield.value != undefined && addTabDisplayToDoRowZeroNumfield.value.length > 0) {
            addTabDisplayToDoRowZeroNumfield.select();
        }
    })
    addTabDisplayToDoRowZeroNumfield.addEventListener("change", (event) => {
        console.log("Fired - Changed addTabDisplayToDoRowZeroNumfield");

        if (addTabDisplayToDoRowZeroNumfield.value != undefined && addTabDisplayToDoRowZeroNumfield.value.length > 0) {
            addTabAddButton.disabled = false;
        } else {
            addTabAddButton.disabled = true;
        }

        /* Enabling "Get" button if toDoId exists */
        if (toDoMasterList.getToDo(addTabDisplayToDoRowZeroNumfield.value)[0] != 0) {
            addTabGetButton.disabled = false;
        }
    })
    addTabDisplayToDoNextButton.addEventListener("click", (event) => {
        console.log("Fired - Clicked addTabDisplayToDoNextButton");

        const index = document.getElementById("add_tab_display_to_do_current_page_box").innerHTML - 1;
        let temp = [];
        let count = 0;

        for (var i = tempNotes.list.length - 1 - (tempNotesCount * (index + 1)); i >= 0; i--) {
            if (count < tempNotesCount) {
                temp.push(tempNotes.list[i]);
                count++;
            }
        }
        updateComments(temp, "addToDo");
        document.getElementById("add_tab_display_to_do_current_page_box").innerHTML = index + 2;
        addTabDisplayToDoPrevButton.disabled = false;

        if (((index + 2) * tempNotesCount) >= tempNotes.list.length) {
            addTabDisplayToDoNextButton.disabled = true;
        }

        addTabDisplayToDoRowThreeRemoveButton.disabled = true; // bug when trying to remove from past page 1

    })
    addTabDisplayToDoPrevButton.addEventListener("click", (event) => {
        console.log("Fired - Clicked addTabDisplayToDoPrevButton");

        const index = document.getElementById("add_tab_display_to_do_current_page_box").innerHTML - 1;
        let temp = [];
        let count = 0;

        for (var i = tempNotes.list.length - 1 - (tempNotesCount * (index - 1)); i >=0; i--) {
            if (count < tempNotesCount) {
                temp.push(tempNotes.list[i]);
                count++;
            }
        }
        updateComments(temp, "addToDo");
        document.getElementById("add_tab_display_to_do_current_page_box").innerHTML = index;
        addTabDisplayToDoNextButton.disabled = false;

        if ((index - 1) == 0) {
            addTabDisplayToDoPrevButton.disabled = true;
        }
        if (document.getElementById("add_tab_display_to_do_current_page_box").innerHTML == "1") {
            addTabDisplayToDoRowThreeRemoveButton.disabled = false;
        }

    })

        /* Add Tab Day of week page object */
    addTabDisplayDayOfWeekContainer.addEventListener("click", (event) => {
        console.log("Fired - Clicked addTabDisplayDayOfWeekContainer");

        const tempLeftArrow = document.createElement("tempLeftArrow");
        tempLeftArrow.innerHTML = "&#8592";
        const tempRightArrow = document.createElement("tempRightArrow");
        tempRightArrow.innerHTML = "&#8594";
        const tempResetArrow = document.createElement("tempResetArrow");
        tempResetArrow.innerHTML = "&#8634";
        
        if (event.target.innerHTML == "Su" && !event.target.classList.contains("activeTab")) {
            clearDays("add");

            document.getElementById("add_tab_day_of_week_box_sunday").classList.add("hidden");
            document.getElementById("add_tab_day_of_week_box_sunday_active").classList.remove("hidden");
            assessDayOfWeekChange("add", 0);
        } else if (event.target.innerHTML == "M" && !event.target.classList.contains("activeTab")) {
            clearDays("add");

            document.getElementById("add_tab_day_of_week_box_monday").classList.add("hidden");
            document.getElementById("add_tab_day_of_week_box_monday_active").classList.remove("hidden");
            assessDayOfWeekChange("add", 1);
        } else if (event.target.innerHTML == "Tu" && !event.target.classList.contains("activeTab")) {
            clearDays("add");

            document.getElementById("add_tab_day_of_week_box_tuesday").classList.add("hidden");
            document.getElementById("add_tab_day_of_week_box_tuesday_active").classList.remove("hidden");
            assessDayOfWeekChange("add", 2);
        } else if (event.target.innerHTML == "W" && !event.target.classList.contains("activeTab")) {
            clearDays("add");

            document.getElementById("add_tab_day_of_week_box_wednesday").classList.add("hidden");
            document.getElementById("add_tab_day_of_week_box_wednesday_active").classList.remove("hidden");
            assessDayOfWeekChange("add", 3);
        } else if (event.target.innerHTML == "Th" && !event.target.classList.contains("activeTab")) {
            clearDays("add");

            document.getElementById("add_tab_day_of_week_box_thursday").classList.add("hidden");
            document.getElementById("add_tab_day_of_week_box_thursday_active").classList.remove("hidden");
            assessDayOfWeekChange("add", 4);
        } else if (event.target.innerHTML == "F" && !event.target.classList.contains("activeTab")) {
            clearDays("add");

            document.getElementById("add_tab_day_of_week_box_friday").classList.add("hidden");
            document.getElementById("add_tab_day_of_week_box_friday_active").classList.remove("hidden");
            assessDayOfWeekChange("add", 5);
        } else if (event.target.innerHTML == "Sa") {
            clearDays("add");

            document.getElementById("add_tab_day_of_week_box_saturday").classList.add("hidden");
            document.getElementById("add_tab_day_of_week_box_saturday_active").classList.remove("hidden");
            assessDayOfWeekChange("add", 6);
        } else if (event.target.innerHTML == tempLeftArrow.innerHTML) { // left arrow
            let curDate = addTabDisplayDayOfWeekDate.value;
            const year = curDate.substring(0, 4);
            const month = curDate.substring(5, 7);
            const day = curDate.substring(8, 10);
            addTabDisplayDayOfWeekDate.value = subtractDays(year, month, day, 7);
            setFromToDates("add", addTabDisplayDayOfWeekDate.value);
        } else if (event.target.innerHTML == tempRightArrow.innerHTML) { // right arrow
            let curDate = addTabDisplayDayOfWeekDate.value;
            const year = curDate.substring(0, 4);
            const month = curDate.substring(5, 7);
            const day = curDate.substring(8, 10);
            addTabDisplayDayOfWeekDate.value = addDays(year, month, day, 7);
            setFromToDates("add", addTabDisplayDayOfWeekDate.value);
        } else if (event.target.innerHTML == tempResetArrow.innerHTML) { // reset arrow
            console.log("clicked reset arrow");
            const d = new Date();
            const year = d.getFullYear();
            let month = d.getMonth() + 1;
            if (month < 10) {
                month = "0" + month;
            }
            let day = d.getDate();
            if (day < 10) {
                day = "0" + day;
            }
            addTabDisplayDayOfWeekDate.value = year + "-" + month + "-" + day;
            setFromToDates("move_to", addTabDisplayDayOfWeekDate.value);
            setDay("move_to", d.getDay());
            
        }
    })
    addTabDisplayDayOfWeekDate.addEventListener("mouseout", (event) => {
        console.log("Mousedout - addTabDisplayDayOfWeekDate");

        const temp = addTabDisplayDayOfWeekDate.value;
        const year = temp.substring(0, 4);
        const month = temp.substring(5, 7);
        const day = temp.substring(8, 10);
        const d = new Date();

        d.setFullYear(year);
        d.setMonth(month - 1);
        d.setDate(day);

        const curDay = d.getDay();
        setDay("add", curDay);
        
        const tempStr = year + "-" + month + "-" + day;
        setFromToDates("add", tempStr);
    })
    
        /* Add Tab Permit */
    function removeSelectedPermitComments () {
        console.log("Entered - removeSelectedPermitComments()");

        for (var i = 0; i < permitCommentCount; i++) {
            const cur = document.getElementById("permit_comment_to_add_item_" + i);
            const curPageNum = document.getElementById("add_permit_tab_current_page_box").innerHTML;

            if (cur != null && cur.classList.contains("selectedComment")) {
                document.getElementById("permit_comment_to_add_item_" + i).remove();
                const secondHalf = tempPermitComments.list.slice(tempPermitComments.list.length - 1 - i + 1);
                const firstHalf = tempPermitComments.list.slice(0, tempPermitComments.list.length - 1 -i);
                tempPermitComments.list = firstHalf.concat(secondHalf);

                let newPage = [];

                for (var j = tempPermitComments.list.length - 1 - ((curPageNum - 1) * permitCommentCount); j > tempPermitComments.list.length - 1 - ((curPageNum - 1) * permitCommentCount) - permitCommentCount; j--) {
                    if (tempPermitComments.list[j] != undefined) {
                        newPage.push(tempPermitComments.list[j]);
                    }
                }
                updateComments(newPage, "addPermit");
            }
        }
    }
    function clearTempPermitCommentsSelections() {
        console.log("Entered - clearTempPermitCommentsSelections()");

        for (var i = 0; i < permitCommentCount; i++) {
            if (document.getElementById("permit_comment_to_add_item_" + i) != undefined) {
                document.getElementById("permit_comment_to_add_item_" + i).classList.remove("selectedComment");
            }
        }
    }
    addTabPermitCommentsTextfield.addEventListener("input", (event) => {
            console.log("Input - add_tab_permit_comments_textfield - " + event.target.value);
    
            addTabPermitCommentsTextfieldInput = event.target.value;

            if (event.target.value != "Enter Comment Here" && event.target.value.length > 0) {
                addTabPermitCommentsAddButton.disabled = false;
            } else {
                addTabPermitCommentsAddButton.disabled = true;
            }
    })
    addTabPermitCommentsTextfield.addEventListener("click", (event) => {
            if (event.target.value != null) {
                event.target.select();
            }
    })
    addTabPermitCommentsAddButton.addEventListener("click", (event) => {
            console.log("Fired - Clicked add_tab_permit_comments_add_button");

            const d = new Date();
            let day = d.getDate();
            if (day < 10) {
                day = "0" + day;
            }
            let today = formatMonth((d.getMonth() + 1)) + "-" + day + "-" + d.getFullYear();
    
            const comment = new CommentItem(addTabPermitCommentsTextfieldInput, today, "Permit");
            //tempPermitComments.push(comment); // updating internal list
            //injectHTMLAddTabPermitComment(comment, tempPermitComments.length - 1);
            addTabPermitCommentsRemoveButton.disabled = false;
            tempPermitComments.add(comment);
            addTabPermitCommentsTextfield.value = "Type Comment Here";
            
            // Setting Last Updated
            const d2 = new Date();
            let day2 = d2.getDate();
            if (day2 < 10) {
                day2 = "0" + day;
            }
            const tempDate = d2.getFullYear() + "-" + formatMonth((d2.getMonth() + 1)) + "-" + day2;
            addTabPermitDateUpdated.value = tempDate;
    
    })
    addTabPermitCommentsRemoveButton.addEventListener("click", (event) => {
        console.log("Fired - Clicked addTabPermitCommentsRemoveButton");

        removeSelectedPermitComments();

        if (tempPermitComments.list.length == 0) {
            document.getElementById("add_tab_permit_comments_to_add").classList.add("hidden");
            addTabPermitCommentsRemoveButton.disabled = true;
        }
        if (tempPermitComments.list.length < permitCommentCount + 1) {
            document.getElementById("add_tab_permit_comments_prev_next_container").classList.add("hidden");
            document.getElementById("add_tab_permit_comments_remove_button").style.marginLeft = '350px';
        }
        if (addTabPermitCommentsToAdd.innerHTML == "" && document.getElementById("add_permit_tab_current_page_box").innerHTML != "1") {
            addTabPermitCommentPrevButton.click();
        }
    })
    addTabPermitCommentsToAdd.addEventListener("click", (event) => {
        console.log("Fired - Clicked addTabPermitCommentsToAdd");

        if (event.target.id.includes("comment_to_add_item") && event.target.classList.contains("selectedComment") != true) {
            clearTempPermitCommentsSelections();
            event.target.classList.add("selectedComment");
        } else {
            event.target.classList.remove("selectedComment");
        }
    })
    addTabPermitCommentNextButton.addEventListener("click", (event) => {
        console.log("Fired - Clicked addTabPermitCommentNextButton");

        const index = document.getElementById("add_permit_tab_current_page_box").innerHTML - 1;
        let temp = [];
        let count = 0;

        for (var i = tempPermitComments.list.length - 1 - (permitCommentCount * (index + 1)); i >= 0; i--) {
            if (count < permitCommentCount) {
                temp.push(tempPermitComments.list[i]);
                count++;
            }
        }
        updateComments(temp, "addPermit");
        document.getElementById("add_permit_tab_current_page_box").innerHTML = index + 2;
        addTabPermitCommentPrevButton.disabled = false;

        if (((index + 2) * permitCommentCount) >= tempPermitComments.list.length) {
            addTabPermitCommentNextButton.disabled = true;
        }

        addTabPermitCommentsRemoveButton.disabled = true; // bug when trying to remove from past page 1

    })
    addTabPermitCommentPrevButton.addEventListener("click", (event) => {
        console.log("Fired - Clicked addTabPermitCommentPrevButton");

        const index = document.getElementById("add_permit_tab_current_page_box").innerHTML - 1;
        let temp = [];
        let count = 0;

        for (var i = tempPermitComments.list.length - 1 - (permitCommentCount * (index - 1)); i >= 0; i--) {
            if (count < permitCommentCount) {
                temp.push(tempPermitComments.list[i]);
                count++
            }
        }
        updateComments(temp, "addPermit");
        document.getElementById("add_permit_tab_current_page_box").innerHTML = index;
        addTabPermitCommentNextButton.disabled = false;

        if ((index - 1) == 0) {
            addTabPermitCommentPrevButton.disabled = true;
        }

        if (document.getElementById("add_permit_tab_current_page_box").innerHTML == "1") {
            addTabPermitCommentsRemoveButton.disabled = false;
        }
    })

        /* Add Comment Tab */
    function removeSelectedAllComments() {
        console.log("Entered - removeSelectedAllComments()");

        for (var i = 0; i < tempAllCommentCount; i++) {
            if (document.getElementById("existing_comment_item_" + i) != null && document.getElementById("existing_comment_item_" + i).classList.contains("selectedComment")) {
                document.getElementById("existing_comment_item_" + i).remove();
                const secondHalf = tempAllComments.list.slice(tempAllComments.list.length - 1 - i + 1);
                const firstHalf = tempAllComments.list.slice(0, tempAllComments.list.length - 1 - i);
                tempAllComments.list = firstHalf.concat(secondHalf);

                let newPage = [];

                for (var j = tempAllComments.list.length - 1 - (((document.getElementById("add_comment_tab_current_page_box").innerHTML - 1) * tempAllCommentCount)); j > tempAllComments.list.length - 1 - (((document.getElementById("add_comment_tab_current_page_box").innerHTML - 1) * tempAllCommentCount)) - tempAllCommentCount; j--) {
                    if (tempAllComments.list[j] != undefined) {
                        newPage.push(tempAllComments.list[j]);
                    }
                }
                updateComments(newPage, "addComment");
            }
        }
    }
    function clearTempAllCommentsSelections() {
        console.log("Entered - clearTempAllCommentsSelections()");

        for (var i = 0; i < tempAllCommentCount + 1; i++) {
            if (document.getElementById("existing_comment_item_" + i) != undefined) {
                document.getElementById("existing_comment_item_" + i).classList.remove("selectedComment");
            }
        }
    }
    addCommentTabTextfield.addEventListener("input", (event) => {
        console.log("Input - add_comment_tab_textfield - " + event.target.value);

        addCommentTabTextfieldInput = event.target.value;

        if (event.target.value != "Enter Comment Here" && event.target.value.length > 0) {
            addCommentsTabCommentsAddButton.disabled = false;
        } else {
            addCommentsTabCommentsAddButton.disabled = true;
        }
    })
    addCommentTabTextfield.addEventListener("click", (event) => {
        console.log("Fired - Clicked addCommentTabTextfield");
    
        if (event.target.value != null) {
            event.target.select();
        }
    })
    addCommentsTabCommentsAddButton.addEventListener("click", (event) => {
        console.log("Fired - Clicked - add_comments_tab_comments_add_button");
        const e = new Error(promptDuration);

        if (document.getElementById("comment_type_dd_menu_current").innerHTML == "Not Set") {
            e.displayInvalidCommentType();
        } else {
            const d = new Date();
            let day = d.getDate();
            if (day < 10) {
                day = "0" + day;
            }
            let today = formatMonth((d.getMonth() + 1)) + "-" + day + "-" + d.getFullYear();

            const type = document.getElementById("comment_type_dd_menu_current").innerHTML;
    
            const comment = new CommentItem(addCommentTabTextfieldInput, today, type);
            addCommentsTabCommentsRemoveButton.disabled = false;
            
            tempAllComments.add(comment);

            hideActiveAddCommentTypeFilters();
            addCommentFilterTabAll.classList.add("hidden");
            addCommentFilterTabAllActive.classList.remove("hidden");
        
            addCommentTabExistingComments.innerHTML = "";
            for (var i = tempAllComments.list.length - 1; i >= 0; i--) {
                injectHTMLAddCommentTabComment(tempAllComments.list[i], i);
            }
            if (tempAllComments.list.length == 0) {
                addCommentTabExistingComments.innerHTML = "No Comments";
            }

            addCommentTabTextfield.value = "Type Comment Here";
        }
    })
    addCommentsTabCommentsRemoveButton.addEventListener("click", (event) => {
        console.log("Fired - Clicked addCommentsTabCommentsRemoveButton");

        removeSelectedAllComments();

        if (tempAllComments.list.length == 0) {
            addCommentsTabCommentsRemoveButton.disabled = true;
        }
        if (tempAllComments.list.length < tempAllCommentCount + 1) {
            document.getElementById("add_comment_tab_next_prev_container").classList.add("hidden");
        }
        if (addCommentTabExistingComments.innerHTML == "" && document.getElementById("add_comment_tab_current_page_box").innerHTML != "1") {
            addCommentTabExistingCommentsPrevButton.click();
        }
    })
    addCommentTabExistingComments.addEventListener("click", (event) => {
        console.log("Fired - Clicked addCommentTabExistingComments");

        if (event.target.id.includes("existing_comment_item") && event.target.classList.contains("selectedComment") != true) {
            clearTempAllCommentsSelections();
            event.target.classList.add("selectedComment");
        } else {
            event.target.classList.remove("selectedComment");
        }
    })
    addCommentTabExistingCommentsNextButton.addEventListener("click", (event) => {
        console.log("Fired - Clicked addCommentTabExistingCommentsNextButton");

        const index = document.getElementById("add_comment_tab_current_page_box").innerHTML - 1;
        let temp = [];
        let count = 0;
        
        for (var i = tempAllComments.list.length - 1 - (tempAllCommentCount * (index + 1)); i >= 0; i--) {
            if (count < tempAllCommentCount) {
                temp.push(tempAllComments.list[i]);
                count++;
            }
        }
        updateComments(temp, "addComment");
        document.getElementById("add_comment_tab_current_page_box").innerHTML = index + 2;
        addCommentTabExistingCommentsPrevButton.disabled = false;

        if (((index + 2) * tempAllCommentCount) >= tempAllComments.list.length) {
            addCommentTabExistingCommentsNextButton.disabled = true;
        }

        addCommentsTabCommentsRemoveButton.disabled = true; // bug when trying to remove from past page 1
    })
    addCommentTabExistingCommentsPrevButton.addEventListener("click", (event) => {
        console.log("Fired - Clicked addCommentTabExistingCommentPrevButton");

        const index = document.getElementById("add_comment_tab_current_page_box").innerHTML - 1;
        let temp = [];
        let count = 0;

        for (var i = tempAllComments.list.length - 1 - (tempAllCommentCount * (index - 1)); i >= 0; i--) {
            if (count < tempAllCommentCount) {
                temp.push(tempAllComments.list[i]);
                count++;
            }
        }
        updateComments(temp, "addComment");
        document.getElementById("add_comment_tab_current_page_box").innerHTML = index;
        addCommentTabExistingCommentsNextButton.disabled = false;
        
        if ((index - 1) == 0) {
            addCommentTabExistingCommentsPrevButton.disabled = true;
        }

        if (document.getElementById("add_comment_tab_current_page_box").innerHTML == "1") {
            addCommentsTabCommentsRemoveButton.disabled = false;
        }
    })

    /* FILTER COMPONENTS */     /* FILTER COMPONENTS */     /* FILTER COMPONENTS */     /* FILTER COMPONENTS */     /* FILTER COMPONENTS */
    
    function assessSpecificStatus() {
        console.log("Entered - assessSpecificStatus(allWrList)");
        let tempList = [];

        console.log("GRGRG");
    
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
            } else if (document.getElementById("filter_checkbox_check_njuns").checked == true) {
                uncolorAllWrFilterCheckboxes();
                document.getElementById("filter_container_check_njuns").style.backgroundColor = "rgba(87, 245, 43, 0.627)"
                for (let i = 0; i < allWrList.length; i++) {
                    if (allWrList[i].generalStatus == "Check/ Apply NJUNS") {
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
    function assessTrimByStatus(list) {
        console.log("Entered - assessTrimByStatus(list)");

        let temp = [];

        if (trimByNot7010.checked == true) {
            uncolorTrimByCheckboxes();
            document.getElementById("footer_filter_container_not_7010").style.backgroundColor = "rgba(87, 245, 43, 0.627)"
            for (var i = 0; i < list.length; i++) {
                if (list[i].generalStatus != "7010'd") {
                    temp.push(list[i]);
                }
            }
        } else if (trimBy7010.checked == true) {
            uncolorTrimByCheckboxes();
            document.getElementById("footer_filter_container_7010").style.backgroundColor = "rgba(87, 245, 43, 0.627)"
            for (var i = 0; i < list.length; i++) {
                if (list[i].generalStatus == "7010'd") {
                    temp.push(list[i]);
                }
            }
        } else if (trimByAll.checked == true) {
            uncolorTrimByCheckboxes();
            document.getElementById("footer_filter_container_all").style.backgroundColor = "rgba(87, 245, 43, 0.627)"
            console.log("trimByAll must be checked - returning list normal");
            return list;
        } else if (trimByNotComplete.checked == true) {
            uncolorTrimByCheckboxes();
            for (var i = 0; i < list.length; i++) {
                if (list[i].generalStatus != "Not Complete") {
                    temp.push(list[i]);
                }
            }
        } else if (trimByComplete.checked == true) {
            uncolorTrimByCheckboxes();
            for (var i = 0; i < list.length; i++) {
                if (list[i].generalStatus != "Complete") {
                    temp.push(list[i]);
                }
            }
        }

        return temp;
    }
    function assessFilterBy(list) {
        console.log("Entered - assessFilterBy(list)");

        if (filterCheckboxPriorityNumber.checked == true) {
            uncolorGenericFilterCheckboxes();
            document.getElementById("filter_container_priority_number").style.backgroundColor = "rgba(87, 245, 43, 0.627)"
            return quickSortPriorityNumber(list);
        } else if (filterCheckboxCrd.checked == true) {
            uncolorGenericFilterCheckboxes();
            document.getElementById("filter_container_crd").style.backgroundColor = "rgba(87, 245, 43, 0.627)"
            return quickSortCrd(list);
        } else if (filterCheckboxRcd.checked == true) {
            uncolorGenericFilterCheckboxes();
            document.getElementById("filter_container_rcd").style.backgroundColor = "rgba(87, 245, 43, 0.627)"
            return quickSortRcd(list);
        } else if (filterCheckboxAgeNew.checked == true) {
            uncolorGenericFilterCheckboxes();
            document.getElementById("filter_container_age_new_old").style.backgroundColor = "rgba(87, 245, 43, 0.627)"
            return quickSortAgeNew(list);
        } else if (filterCheckboxAgeOld.checked == true) {
            uncolorGenericFilterCheckboxes();
            document.getElementById("filter_container_age_old_new").style.backgroundColor = "rgba(87, 245, 43, 0.627)"
            return quickSortAgeOld(list);
        } else {
            uncolorGenericFilterCheckboxes();
            console.log("No Filter (sort) checkboxes checked - returning list");
            return list;
        }
    }
    function assessSearchBy(list) {
        console.log("Entered - assessSearchBy");

        const userValue = document.getElementById("search_by_selection_textfield").value;
        let temp = [];

        if (searchByAddressCheckbox.checked == true) {
            uncolorSearchByCheckboxes();
            document.getElementById("search_by_selection_lower_container_checkbox_and_label_container_address").style.backgroundColor = "rgba(87, 245, 43, 0.627)";
            for (var i = 0; i < list.length; i++) {
                if (list[i].wrAddressType().innerHTML.includes(userValue)) {
                    temp.push(list[i]);
                }
            }
            return temp;
        } else if (searchByWrCheckbox.checked == true) {
            uncolorSearchByCheckboxes();
            document.getElementById("search_by_selection_lower_container_checkbox_and_label_container_wr").style.backgroundColor = "rgba(87, 245, 43, 0.627)";
            for (var i = 0; i < list.length; i++) {
                if (list[i].workRequestNumber.includes(userValue)) {
                    temp.push(list[i]);
                }
            }
            return temp;
        } else { 
            return list;
        }
    }
    function filterToDosByType(type) {
        console.log("Entered - filterToDosByType(" + type + ")");

        let temp = [];

        /* Going through all to-do's */
        for (var i = 0; i < toDoMasterList.list.length; i++) {
            
            for (var j = 0; j < toDoMasterList.list[i].contactCustomerList.length; j++) {
                if (toDoMasterList.list[i].contactCustomerList[j].type == type) {
                    temp.push(toDoMasterList.list[i].contactCustomerList[j]);
                }
            }
            for (var j = 0; j < toDoMasterList.list[i].siteVisitList.length; j++) {
                if (toDoMasterList.list[i].siteVisitList[j].type == type) {
                    temp.push(toDoMasterList.list[i].siteVisitList[j]);
                }
            }
            for (var j = 0; j < toDoMasterList.list[i].svcCalcList.length; j++) {
                if (toDoMasterList.list[i].svcCalcList[j].type == type) {
                    temp.push(toDoMasterList.list[i].svcCalcList[j]);
                }
            }
            for (var j = 0; j < toDoMasterList.list[i].checkNJUNSList.length; j++) {
                if (toDoMasterList.list[i].checkNJUNSList[j].type == type) {
                    temp.push(toDoMasterList.list[i].checkNJUNSList[j]);
                }
            }
            for (var j = 0; j < toDoMasterList.list[i].checkPermitList.length; j++) {
                if (toDoMasterList.list[i].checkPermitList[j].type == type) {
                    temp.push(toDoMasterList.list[i].checkPermitList[j]);
                }
            }
            for (var j = 0; j < toDoMasterList.list[i].checkEasementList.length; j++) {
                if (toDoMasterList.list[i].checkEasementList[j].type == type) {
                    temp.push(toDoMasterList.list[i].checkEasementList[j]);
                }
            }
            for (var j = 0; j < toDoMasterList.list[i].designList.length; j++) {
                if (toDoMasterList.list[i].designList[j].type == type) {
                    temp.push(toDoMasterList.list[i].designList[j]);
                }
            }
            for (var j = 0; j < toDoMasterList.list[i].revisionsList.length; j++) {
                if (toDoMasterList.list[i].revisionsList[j].type == type) {
                    temp.push(toDoMasterList.list[i].revisionsList[j]);
                }
            }
            for (var j = 0; j < toDoMasterList.list[i].generalList.length; j++) {
                if (toDoMasterList.list[i].generalList[j].type == type) {
                    temp.push(toDoMasterList.list[i].generalList[j]);
                }
            }
        }
    
        return temp;
    }
    function assessToDoFilterBy() {
        console.log("Entered - assessToDoFilterByStatus(");

        let index = undefined;

        for (var i = 0; i < toDoMasterList.list.length; i++) {
            if (toDoMasterList.list[i].date == toDoDisplayDayOfWeekDate.value) {
                index = i;
                break;
            }
        }

        let sortedList = [];
        let filteredList = [];
        let trimmedList = [];

        /* Assessing Type */
        if (document.getElementById("filter_checkbox_general").checked) {
            document.getElementById("hide_date_page_object").classList.remove("hidden");
            document.getElementById("hide_to_do_tabs").classList.remove("hidden");

            uncolorToDoFilterCheckboxes();
            document.getElementById("filter_container_general").style.backgroundColor = "rgba(87, 245, 43, 0.627)";

            sortedList = filterToDosByType("General");
            
        } else if (document.getElementById("filter_checkbox_contact_customer").checked) {
            document.getElementById("hide_date_page_object").classList.remove("hidden");
            document.getElementById("hide_to_do_tabs").classList.remove("hidden");

            uncolorToDoFilterCheckboxes();
            document.getElementById("filter_container_contact_customer").style.backgroundColor = "rgba(87, 245, 43, 0.627)";

            sortedList = filterToDosByType("Contact Customer");
            
        } else if (document.getElementById("filter_checkbox_need_to_visit").checked) {
            document.getElementById("hide_date_page_object").classList.remove("hidden");
            document.getElementById("hide_to_do_tabs").classList.remove("hidden");

            uncolorToDoFilterCheckboxes();
            document.getElementById("filter_container_need_to_visit").style.backgroundColor = "rgba(87, 245, 43, 0.627)";

            sortedList = filterToDosByType("Site Visit");
            
        } else if (document.getElementById("filter_checkbox_svc_calcs").checked) {
            document.getElementById("hide_date_page_object").classList.remove("hidden");
            document.getElementById("hide_to_do_tabs").classList.remove("hidden");

            uncolorToDoFilterCheckboxes();
            document.getElementById("filter_container_svc_calcs").style.backgroundColor = "rgba(87, 245, 43, 0.627)";

            sortedList = filterToDosByType("Service Calc + Coding");
            
        } else if (document.getElementById("filter_checkbox_check_njuns").checked) {
            document.getElementById("hide_date_page_object").classList.remove("hidden");
            document.getElementById("hide_to_do_tabs").classList.remove("hidden");

            uncolorToDoFilterCheckboxes();
            document.getElementById("filter_container_check_njuns").style.backgroundColor = "rgba(87, 245, 43, 0.627)";

            sortedList = filterToDosByType("Check/ Apply - NJUNS");
            
        } else if (document.getElementById("filter_checkbox_check_permit").checked) {
            document.getElementById("hide_date_page_object").classList.remove("hidden");
            document.getElementById("hide_to_do_tabs").classList.remove("hidden");

            uncolorToDoFilterCheckboxes();
            document.getElementById("filter_container_check_permit").style.backgroundColor = "rgba(87, 245, 43, 0.627)";

            sortedList = filterToDosByType("Check/ Apply - Permit");
            
        } else if (document.getElementById("filter_checkbox_check_easement").checked) {
            document.getElementById("hide_date_page_object").classList.remove("hidden");
            document.getElementById("hide_to_do_tabs").classList.remove("hidden");

            uncolorToDoFilterCheckboxes();
            document.getElementById("filter_container_check_easement").style.backgroundColor = "rgba(87, 245, 43, 0.627)";

            sortedList = filterToDosByType("Check/ Apply - Easement");
            
        } else if (document.getElementById("filter_checkbox_design").checked) {
            document.getElementById("hide_date_page_object").classList.remove("hidden");
            document.getElementById("hide_to_do_tabs").classList.remove("hidden");
            
            uncolorToDoFilterCheckboxes();
            document.getElementById("filter_container_design").style.backgroundColor = "rgba(87, 245, 43, 0.627)";

            sortedList = filterToDosByType("Design");
            
        } else if (document.getElementById("filter_checkbox_revisions").checked) {
            document.getElementById("hide_date_page_object").classList.remove("hidden");
            document.getElementById("hide_to_do_tabs").classList.remove("hidden");

            uncolorToDoFilterCheckboxes();
            document.getElementById("filter_container_revisions").style.backgroundColor = "rgba(87, 245, 43, 0.627)";

            sortedList = filterToDosByType("Revisions");
            
        } else { // returning to normal display by cur date
            document.getElementById("hide_date_page_object").classList.add("hidden");
            document.getElementById("hide_to_do_tabs").classList.add("hidden");
            
            uncolorToDoFilterCheckboxes();

            if (toDoMasterList.list[i] != undefined) {
                sortedList = toDoMasterList.list[index].flatten();
            } else {
                sortedList = [];
            }
        }

        /* Assessing Trim - Completed */
        if (document.getElementById("footer_filter_checkbox_not_complete").checked) {
            uncolorTrimByCheckboxes();
            document.getElementById("footer_filter_container_not_complete").style.backgroundColor = "rgba(87, 245, 43, 0.627)";

            for (var i = 0; i < sortedList.length; i++) {
                if (sortedList[i].completed != 1) {
                    trimmedList.push(sortedList[i]);
                }
            }            
        } else if (document.getElementById("footer_filter_checkbox_complete").checked) {
            uncolorTrimByCheckboxes();
            document.getElementById("footer_filter_container_complete").style.backgroundColor = "rgba(87, 245, 43, 0.627)";

            for (var i = 0; i < sortedList.length; i++) {
                if (sortedList[i].completed == 1) {
                    trimmedList.push(sortedList[i]);
                }
            }         
        } else { // footer_filter_checkbox_all_to_do.checked == true
            uncolorTrimByCheckboxes();
            document.getElementById("footer_filter_container_all_to_do").style.backgroundColor = "rgba(87, 245, 43, 0.627)";

            trimmedList = sortedList;

        }

        /* Assessing Top Filter */ // If nothing but filter boxes are cheched, toDo's for current displayed date are passed in
        if (document.getElementById("filter_checkbox_age_new_old").checked) {
            
            uncolorGenericFilterCheckboxes();
            document.getElementById("filter_container_age_new_old").style.backgroundColor = "rgba(87, 245, 43, 0.627)";

            filteredList = quickSortAgeNew(trimmedList);
            
        } else if (document.getElementById("filter_checkbox_age_old_new").checked) {
            uncolorGenericFilterCheckboxes();
            document.getElementById("filter_container_age_old_new").style.backgroundColor = "rgba(87, 245, 43, 0.627)";

            filteredList = quickSortAgeOld(trimmedList);
            
        } else if (document.getElementById("filter_checkbox_age_old_new_all").checked) {
            document.getElementById("hide_date_page_object").classList.remove("hidden");
            document.getElementById("hide_to_do_tabs").classList.remove("hidden");
            uncolorGenericFilterCheckboxes();
            document.getElementById("filter_container_age_old_new_all").style.backgroundColor = "rgba(87, 245, 43, 0.627)";

            let tempAllToDos = [];

            for (var i = 0; i < toDoMasterList.list.length; i++) {
                const curDayToDos = toDoMasterList.list[i].flatten();

                for (var j = 0; j < curDayToDos.length; j++) {
                    if (trimByNotComplete.checked && curDayToDos[j].completed == 0) {
                        tempAllToDos.push(curDayToDos[j]);
                    } else if (trimByComplete.checked && curDayToDos.completed == 1) {
                        tempAllToDos.push(curDayToDos[j]);
                    } else {
                        tempAllToDos.push(curDayToDos[j]);

                    }
                }
            }

            filteredList = quickSortAgeOld(tempAllToDos);
            console.log("filteredList =");
            console.log(filteredList);


        } else if (document.getElementById("filter_checkbox_age_new_old_all").checked) {
            document.getElementById("hide_date_page_object").classList.remove("hidden");
            document.getElementById("hide_to_do_tabs").classList.remove("hidden");
            uncolorGenericFilterCheckboxes();
            document.getElementById("filter_container_age_new_old_all").style.backgroundColor = "rgba(87, 245, 43, 0.627)";

            let tempAllToDos = [];

            for (var i = 0; i < toDoMasterList.list.length; i++) {
                const curDayToDos = toDoMasterList.list[i].flatten();

                for (var j = 0; j < curDayToDos.length; j++) {
                    tempAllToDos.push(curDayToDos[j]);
                }
            }

            filteredList = quickSortAgeNew(tempAllToDos);
            

        } else {
            uncolorGenericFilterCheckboxes();

            filteredList = trimmedList;
        }

        /* Updating Display */
        if (filteredList.length == 0) {
            console.log("filteredList.length ==0");
            toDoDisplayRowElementContainer.innerHTML = "";
            toDoDisplayRowElementContainer.innerHTML = `<div class="noToDosForToday" id="no_to_dos_for_today_prompt">No To-Do's for Today</div>`;
            tempFilteredToDoList = [];
        } else {
            buildPaginatedFromFlat(filteredList);
            tempFilteredToDoList = filteredList;
        }
        

    }
    function assessToDoSearchBy() {
        console.log("Entered - assessToDoSearchBy()");

        const userValue = document.getElementById("search_by_selection_textfield").value;

        let data = [];

        if (searchByWrCheckbox.checked) {
            uncolorSearchByCheckboxes();
            document.getElementById("search_by_selection_lower_container_checkbox_and_label_container_wr").style.backgroundColor = "rgba(87, 245, 43, 0.627)";
            document.getElementById("hide_date_page_object").classList.remove("hidden");
            document.getElementById("hide_to_do_tabs").classList.remove("hidden");

            for (var i = 0; i < toDoMasterList.list.length; i++) { // for all days
                curDayFlat = toDoMasterList.list[i].flatten(); // make flat list of to-do's
    
                for (var j = 0; j < curDayFlat.length; j++) { // for all to-do's
                    if (curDayFlat[j].workRequestNumber != undefined && curDayFlat[j].workRequestNumber.includes(userValue) && curDayFlat[j].type != "General") {
                        data.push(curDayFlat[j]);
                    }
                }
            }
    
            if (data.length == 0) {
                toDoDisplayRowElementContainer.innerHTML = `<div class="noToDosForToday" id="no_to_dos_for_today_prompt">No To-Do's for Today</div>`;
            } else {
                let trimmedList = [];

                /* Assessing Trim - Completed */
                if (document.getElementById("footer_filter_checkbox_not_complete").checked) {
                    uncolorTrimByCheckboxes();
                    document.getElementById("footer_filter_container_not_complete").style.backgroundColor = "rgba(87, 245, 43, 0.627)";

                    for (var i = 0; i < data.length; i++) {
                        if (data[i].completed != 1) {
                            trimmedList.push(data[i]);
                        }
                    }            
                } else if (document.getElementById("footer_filter_checkbox_complete").checked) {
                    uncolorTrimByCheckboxes();
                    document.getElementById("footer_filter_container_complete").style.backgroundColor = "rgba(87, 245, 43, 0.627)";

                    for (var i = 0; i < data.length; i++) {
                        if (data[i].completed == 1) {
                            trimmedList.push(data[i]);
                        }
                    }         
                } else { // footer_filter_checkbox_all_to_do.checked == true
                    uncolorTrimByCheckboxes();
                    document.getElementById("footer_filter_container_all_to_do").style.backgroundColor = "rgba(87, 245, 43, 0.627)";

                    trimmedList = data;

                }
                buildPaginatedFromFlat(trimmedList);
    
            }
        } else { // resetting
            uncolorSearchByCheckboxes();
            document.getElementById("hide_date_page_object").classList.add("hidden");
            document.getElementById("hide_to_do_tabs").classList.add("hidden");

            for (var i = 0; i < toDoMasterList.list.length; i++) {
                if (toDoMasterList.list[i].date == toDoDisplayDayOfWeekDate.value) {
                    tempToDoPageElement = injectHTMLToDoTabDisplay(toDoMasterList.list[i]);
                    tempFilteredToDoList = toDoMasterList.list[i].flatten();
                    break;
                }
            }
        }

        
        
    }
    /* Takes in a flat list of toDoObjects and returns a paginated 
       list using tempToDoMasterlist w/ duedate 0001-01-01 */
    function buildPaginatedFromFlat(list) {
        console.log("Entered - buildPaginatedFromFlat(list)");
        console.log("list =");
        console.log(list);

        tempToDoMasterList = new ToDoMasterList(linesPerPageToDo);

        if (searchBySelectionCheckbox.checked) {
            for (var i = 0; i < list.length; i++) {
                if (list[i].workRequestNumber == searchBySelectionTextfield.value) {
                    const tempToDo = new ToDoObject(list[i].toDoId, list[i].tab, "0001-01-01", list[i].type, list[i].creationDate, 
                        list[i].completed, list[i].notes, list[i].workRequestNumber, list[i].addressStr);
                    tempToDoMasterList.add(tempToDo);
                    
                }
            }
        } else if (filterBySelectionCheckbox.checked) {
            for (var i = 0; i < list.length; i++) {
                const tempToDo = new ToDoObject(list[i].toDoId, list[i].tab, "0001-01-01", list[i].type, list[i].creationDate, 
                    list[i].completed, list[i].notes, list[i].workRequestNumber, list[i].addressStr);
                tempToDoMasterList.add(tempToDo);

            }
        }
        tempToDoMasterList.list[0].makePageElement();
        console.log("777");
        console.log(tempToDoMasterList);
    }
    

        /* searchBy Textfield */
    searchBySelectionTextfield.addEventListener("click", (event) => {
        console.log("Fired - clicked searchBySelectionTextfield");

        if (event.target.value != null) {
            searchBySelectionTextfield.select();
        }
    }) 
    

        /* Go Buttons */
    searchGoButton.addEventListener("click", (event) => {
        console.log("Clicked - searchGoButton");

        if (allWrTab.classList.contains("hidden")) {
            const allWrListTrimmed = assessTrimByStatus(allWrList);
            const allWrListAssessed = assessSearchBy(allWrListTrimmed);
    
            filteredList = allWrListAssessed;
    
            // Display no wr prompt if no wr match input
            if (allWrListAssessed.length == 0) {
                if (allWrTab.classList.contains("hidden") && document.getElementById("no_wr_found_all_wr_tab") == undefined) { // allWrTab is active
                    document.getElementById("all_wr_display_label_container").insertAdjacentHTML("afterend", `<div class="noWrFound" id="no_wr_found_all_wr_tab">
                    ${"No Work Requests Match User Input"}</div>`);
                } else if (permitsTab.classList.contains("hidden") && document.getElementById("no_wr_found_permit_tab") == undefined) {
                    document.getElementById("permits_tab_display_header_container").insertAdjacentHTML("afterend", `<div class="noWrFound" id="no_wr_found_permit_tab">
                    ${"No Work Requests Match User Input"}</div>`);
                }
                
            } else {
                if (document.getElementById("no_wr_found_all_wr_tab") != undefined) {
                    document.getElementById("no_wr_found_all_wr_tab").remove();
                }
                if (document.getElementById("no_wr_found_permit_tab") != undefined) {
                    document.getElementById("no_wr_found_permit_tab").remove();
                }
            }
    
            // Still inject empty list to hide rows
            injectHTMLAllWrTabDisplay(allWrListAssessed, 0, userColors, toDoMasterList);
            injectHTMLPermitsTabDisplay(allWrListAssessed, 0, userColors);
                
            // Below hides whichever prev/next container shouldn't be visible
            if (allWrTab.classList.contains("hidden")) { // allWrTab is active
                document.getElementById("permits_tab_prev_next_container").classList.add("hidden");
            } else if (permitsTab.classList.contains("hidden")) {
                document.getElementById("all_wr_tab_prev_next_container").classList.add("hidden");
            }
        } else if (toDoTab.classList.contains("hidden")) {
            console.log("Clicked SearchBy GoButton - To-Do's");

            document.getElementById("to_do_tab_current_page_box").innerHTML = "1";

            assessToDoSearchBy();
        }

    })
    filterGoButton.addEventListener("click", (event) => {
        console.log("Clicked - filterGoButton");

        if (allWrTab.classList.contains("hidden") || permitsTab.classList.contains("hidden")) {
            const allWrListStatus = assessSpecificStatus(allWrList);
            const allWrListTrimmed = assessTrimByStatus(allWrListStatus);
            const allWrListFiltered = assessFilterBy(allWrListTrimmed);

            filteredList = allWrListFiltered;

            // Display no wr prompt if no wr match input
            if (allWrListFiltered.length == 0) {
                if (allWrTab.classList.contains("hidden") && document.getElementById("no_wr_found_all_wr_tab") == undefined) { // allWrTab is active
                    document.getElementById("all_wr_display_label_container").insertAdjacentHTML("afterend", `<div class="noWrFound" id="no_wr_found_all_wr_tab">
                    ${"No Work Requests Match User Input"}</div>`);
                } else if (permitsTab.classList.contains("hidden") && document.getElementById("no_wr_found_permit_tab") == undefined) {
                    document.getElementById("permits_tab_display_header_container").insertAdjacentHTML("afterend", `<div class="noWrFound" id="no_wr_found_permit_tab">
                    ${"No Work Requests Match User Input"}</div>`);
                }
            
            } else {
                if (document.getElementById("no_wr_found_all_wr_tab") != undefined) {
                    document.getElementById("no_wr_found_all_wr_tab").remove();
                }
                if (document.getElementById("no_wr_found_permit_tab") != undefined) {
                    document.getElementById("no_wr_found_permit_tab").remove();
                }
            }

            // Still inject empty list to hide rows
            injectHTMLAllWrTabDisplay(allWrListFiltered, 0, userColors, toDoMasterList);
            injectHTMLPermitsTabDisplay(allWrListFiltered, 0, userColors);

            // Below hides whichever prev/next container shouldn't be visible
            if (allWrTab.classList.contains("hidden")) { // allWrTab is active
                document.getElementById("permits_tab_prev_next_container").classList.add("hidden");
            } else if (permitsTab.classList.contains("hidden")) {
                document.getElementById("all_wr_tab_prev_next_container").classList.add("hidden");
            }
        } else if (toDoTab.classList.contains("hidden")) {
            document.getElementById("to_do_tab_current_page_box").innerHTML = "1";

            assessToDoFilterBy();
        } 

        if (!filterCheckboxGeneral.checked && !filterCheckboxContactCustomer.checked && !filterCheckboxNeedToVisit.checked &&
            !filterCheckboxSvcCalcs.checked && !filterCheckboxCheckNJUNS.checked && !filterCheckboxCheckPermit.checked && 
            !filterCheckboxCheckEasement.checked && !filterCheckboxDesign.checked && !filterCheckboxRevisions.checked &&
            !filterCheckboxAgeOldAll.checked && !filterCheckboxAgeNewAll.checked) {
                if (document.getElementById("to_do_general_tab").classList.contains("hidden")) {
                    document.getElementById("to_do_general_tab").click();
                } else if (document.getElementById("to_do_mentor_tab").classList.contains("hidden")) {
                    document.getElementById("to_do_mentor_tab").click();
                } else if (document.getElementById("to_do_coordinator_tab").classList.contains("hidden")) {
                    document.getElementById("to_do_coordinator_tab").click();
                } else if (document.getElementById("to_do_waiting_tab").classList.contains("hidden")) {
                    document.getElementById("to_do_waiting_tab").click();
                } else if (document.getElementById("to_do_return_to_office_tab").classList.contains("hidden")) {
                    document.getElementById("to_do_return_to_office_tab").click();
                } 
            }
        

         

    })

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

            if (filterCheckbox7010.checked == true) {
                filterCheckbox7010.checked = false;
            }
        }
    })
    trimByNotComplete.addEventListener("change", (event) => {
        console.log("Changed - trimByNotComplete");

        if (trimByNotComplete.checked == false) {
            trimByNotComplete.checked = false;
            trimByAllToDo.checked = true;
        } else {
            uncheckTrimByCheckboxes();
            trimByNotComplete.checked = true;
        }

    })
    trimByComplete.addEventListener("change", (event) => {
        console.log("Changed- trimByComplete");

        if (trimByComplete.checked == false) {
            uncheckTrimByCheckboxes();

            trimByComplete.checked = false;
            trimByAllToDo.checked = true;
        } else {
            uncheckTrimByCheckboxes();
            trimByComplete.checked = true;
        }
    })
    trimByAllToDo.addEventListener("change", (event) => {
        console.log("Changed - trimByAllToDo");

        if (trimByAllToDo.checked == false) {
            uncheckTrimByCheckboxes();

            trimByAllToDo.checked = false;
            trimByNotComplete.checked = true;
        } else {
            uncheckTrimByCheckboxes();
            trimByAllToDo.checked = true;
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
            //searchByWrCheckbox.checked = true;
        } else {
            uncheckSearchByCheckboxes();
            searchByAddressCheckbox.checked = true;
        }
    })
    searchByWrCheckbox.addEventListener("change", (event) => {
        console.log("Changed - searchByWrCheckbox");

        if (searchByWrCheckbox.checked == false) {
            searchByWrCheckbox.checked = false;
            //searchByAddressCheckbox.checked = true;
        } else {
            uncheckSearchByCheckboxes();
            searchByWrCheckbox.checked = true;
        }
    })

        /* Filter By - Generic */
    filterCheckboxPriorityNumber.addEventListener("change", (event) => {
        console.log("Fired - changed - filterCheckboxPriorityNumber");

        if (filterCheckboxPriorityNumber.checked) {
            uncheckGenericFilterCheckboxes();
            filterCheckboxPriorityNumber.checked = true;
        } else {
            uncheckGenericFilterCheckboxes();
        }
        
    })
    filterCheckboxCrd.addEventListener("change", (event) => {
        console.log("Fired - changed - filterCheckboxCrd");

        if (filterCheckboxCrd.checked) {
            uncheckGenericFilterCheckboxes();
            filterCheckboxCrd.checked = true;
        } else {
            uncheckGenericFilterCheckboxes();
        }
    })
    filterCheckboxRcd.addEventListener("change", (event) => {
        console.log("Fired - changed - filterCheckboxRcd");

        if (filterCheckboxRcd.checked) {
            uncheckGenericFilterCheckboxes();
            filterCheckboxRcd.checked = true;
        } else {
            uncheckGenericFilterCheckboxes();
        }
    })
    filterCheckboxAgeNew.addEventListener("change", (event) => {
        console.log("Fired - changed - filterCheckboxAgeNew");

        if (filterCheckboxAgeNew.checked) {
            uncheckGenericFilterCheckboxes();
            filterCheckboxAgeNew.checked = true;
        } else {
            uncheckGenericFilterCheckboxes();
        }

        if (toDoTab.classList.contains("hidden")) {
            uncheckToDoFilterCheckboxes();
            uncolorToDoFilterCheckboxes();
        }
        
    })
    filterCheckboxAgeOld.addEventListener("change", (event) => {
        console.log("Fired - changed - filterCheckboxAgeOld");

        if (filterCheckboxAgeOld.checked) {
            uncheckGenericFilterCheckboxes();
            filterCheckboxAgeOld.checked = true;
        } else {
            uncheckGenericFilterCheckboxes();
        }
        if (toDoTab.classList.contains("hidden")) {
            uncheckToDoFilterCheckboxes();
            uncolorToDoFilterCheckboxes();
        }
    })
    filterCheckboxAgeNewAll.addEventListener("change", (event) => {
        console.log("Fired - changed - filterCheckboxAgeNewAll");

        if (filterCheckboxAgeNewAll.checked) {
            uncheckGenericFilterCheckboxes();
            filterCheckboxAgeNewAll.checked = true;
        } else {
            uncheckGenericFilterCheckboxes();
        }
        
    })
    filterCheckboxAgeOldAll.addEventListener("change", (event) => {
        console.log("Fired - Changed filterCheckboxAgeOldAll");

        if (filterCheckboxAgeOldAll.checked) {
            uncheckGenericFilterCheckboxes();
            filterCheckboxAgeOldAll.checked = true;
        } else {
            uncheckGenericFilterCheckboxes();
        }
    })
        /* Add Tab */
    
    filterCheckboxAddWr.addEventListener("change", (event) => {
            console.log("Fired - Clicked filterCheckboxAddWr");

            if (tempCurWrNumber != "") {
                addTabNewWorkRequestNumber.value = tempCurWrNumber;
                tempCurWrNumber = "";
            }
            addTabUpdateButton.disabled = true; // making user "get" wr when they switch add tabs
    
            clearAddTabCheckboxes();
            filterCheckboxAddWr.checked = true;

            if (document.getElementById("add_tab_display_header_left").innerHTML == "Update") {
                document.getElementById("add_tab_display_header_left").innerHTML = "Add / Update";
            }

            clearAddTabDisplays();
            addTabDisplayHeaderLabel.innerHTML = "\"Work Request\"";
            addTabDisplayWorkRequestNumberLabel.innerHTML = "New Work Request Number";
            addTabDisplayWorkRequestNumberLabel.classList.remove("newWorkRequestNumberTextfieldLabelBig");
    
            /* Revealing add button */
            addTabAddButton.classList.remove("hidden");
            addTabDisplayAddWr.classList.remove("hidden");

            if (addTabNewWorkRequestNumber.value != undefined && getWr(addTabNewWorkRequestNumber.value, allWrList)[0] != false) {
                addTabGetButton.disabled = false;
                addTabAddButton.disabled = true;

            } else {
            }
    })
    filterCheckboxAddToDo.addEventListener("click", (event) => {
        console.log("Fired - Clicked filterCheckboxAddToDo");

        addTabUpdateButton.disabled = true; // making user "get" wr when they switch add tabs
        tempCurWrNumber = addTabNewWorkRequestNumber.value;
        addTabNewWorkRequestNumber.value = "";

        clearAddTabCheckboxes();
        filterCheckboxAddToDo.checked = true;

        //addTabDisplayToDoRowZeroNumfield.value = toDoMasterList.getCount();

        if (document.getElementById("add_tab_display_header_left").innerHTML == "Update") {
            document.getElementById("add_tab_display_header_left").innerHTML = "Add / Update";
        }

        clearAddTabDisplays();
        addTabDisplayHeaderLabel.innerHTML = "\"To-Do\"";
        addTabDisplayWorkRequestNumberLabel.innerHTML = "New To-Do Work Request Number";
        addTabDisplayWorkRequestNumberLabel.classList.add("newWorkRequestNumberTextfieldLabelBig");

        /* Revealing add button */
        addTabAddButton.classList.remove("hidden");
        addTabDisplayAddToDo.classList.remove("hidden");

        /* Setting To-Do ID field to next unique number in Masterlist */
        addTabDisplayToDoRowZeroNumfield.value = toDoMasterList.getCount();
        addTabAddButton.disabled = false;

        

        if (addTabNewWorkRequestNumber.value != undefined && getWr(addTabNewWorkRequestNumber.value, allWrList)[0] != false) {
            addTabGetButton.disabled = false;
        }
    })
    filterCheckboxAddPermit.addEventListener("change", (event) => {
            console.log("Fired - Clicked filterContainerAddPermit");
    
            if (tempCurWrNumber != "") {
                addTabNewWorkRequestNumber.value = tempCurWrNumber;
                tempCurWrNumber = "";
            }
            addTabUpdateButton.disabled = true; // making user "get" wr when they switch add tabs

            clearAddTabCheckboxes();
            filterCheckboxAddPermit.checked = true;
            document.getElementById("add_tab_display_header_left").innerHTML = "Update";
            document.getElementById("add_tab_display_header_left").style.marginRight = '20px';

            
            clearAddTabDisplays();
            addTabDisplayHeaderLabel.innerHTML = "\"Permit\"";
            addTabDisplayWorkRequestNumberLabel.innerHTML = "Permit for Work Request Number";
            addTabDisplayWorkRequestNumberLabel.classList.add("newWorkRequestNumberTextfieldLabelBig");
           
            addTabDisplayAddPermit.classList.remove("hidden");
    
            /* Hiding add button */
            addTabAddButton.classList.add("hidden");

            if (addTabNewWorkRequestNumber.value != undefined && getWr(addTabNewWorkRequestNumber.value, allWrList)[0] != false) {
                addTabGetButton.disabled = false;
            }
    })
    filterCheckboxAddComment.addEventListener("change", (event) => {
        console.log("Fired - Clicked filterCheckboxAddComment");

        if (tempCurWrNumber != "") {
            addTabNewWorkRequestNumber.value = tempCurWrNumber;
            tempCurWrNumber = "";
        }
        addTabUpdateButton.disabled = true; // making user "get" wr when they switch add tabs

        clearAddTabCheckboxes();
        filterCheckboxAddComment.checked = true;

        if (document.getElementById("add_tab_display_header_left").innerHTML == "Update") {
            document.getElementById("add_tab_display_header_left").innerHTML = "Add / Update";
        }

        clearAddTabDisplays();
        addTabDisplayHeaderLabel.innerHTML = "\"Comment\"";
        addTabDisplayWorkRequestNumberLabel.innerHTML = "Comments for Work Request Number";
        addTabDisplayWorkRequestNumberLabel.classList.add("newWorkRequestNumberTextfieldLabelBig");

        addTabDisplayAddComment.classList.remove("hidden");

        /* Hiding add button */
        addTabAddButton.classList.add("hidden");

        if (addTabNewWorkRequestNumber.value != undefined && getWr(addTabNewWorkRequestNumber.value, allWrList)[0] != false) {
            addTabGetButton.disabled = false;
        }
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
    filterCheckboxCheckNJUNS.addEventListener("change", (event) => {
        console.log("Fired - changed - filtercheckboxCheckNJUNS");

        if (filterCheckboxCheckNJUNS.checked == false) {
            filterCheckboxCheckNJUNS.checked - false;
        } else {
            uncheckAllWrFilterCheckboxes();
            filterCheckboxCheckNJUNS.checked = true;
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

        /* To-Do Tab */
    filterCheckboxGeneral.addEventListener("change", (event) => {
        console.log("Changed - filterCheckboxGeneral");

        if (filterCheckboxGeneral.checked == false) {
            filterCheckboxGeneral.checked = false;
        } else {
            uncheckAllWrFilterCheckboxes();
            filterCheckboxGeneral.checked = true;

            if (toDoTab.classList.contains("hidden")) {
                if (filterCheckboxAgeOld.checked) {
                    uncheckGenericFilterCheckboxes();
                    uncolorGenericFilterCheckboxes();
                    filterCheckboxAgeOldAll.checked = true;
                } else if (filterCheckboxAgeNew.checked) {
                    uncheckGenericFilterCheckboxes();
                    uncolorGenericFilterCheckboxes();
                    filterCheckboxAgeNewAll.checked = true;
                }
            }
        }
    })
    filterCheckboxContactCustomer.addEventListener("change", (event) => {
        console.log("Changed - filterCheckboxContactCustomer");

        if (filterCheckboxContactCustomer.checked == false) {
            filterCheckboxContactCustomer.checked = false;
        } else {
            uncheckAllWrFilterCheckboxes();
            filterCheckboxContactCustomer.checked = true;
        }
    })
    filterCheckboxWaitingOther.addEventListener("change", (event) => {
        console.log("Changed - filterCheckboxWaitingOther");

        if (filterCheckboxWaitingOther.checked == false) {
            filterCheckboxWaitingOther.checked = false;
        } else {
            uncheckAllWrFilterCheckboxes();
            filterCheckboxWaitingOther.checked = true;
        }
    })

        /* Permits Tab */
    filterCheckboxPermitApplied.addEventListener("change", (event) => {
        console.log("Changed - filterCheckboxPermitApplied");

        if (filterCheckboxPermitApplied.checked == false) {
            filterCheckboxPermitApplied.checked = false;
        } else {
            uncheckPermitsTabSpecificCheckboxes();
            filterCheckboxPermitApplied.checked = true;
        }
    })
    filterCheckboxPermitReceived.addEventListener("change", (event) => {
        console.log("Changed - filterCheckboxPermitReceived");

        if (filterCheckboxPermitReceived.checked == false) {
            filterCheckboxPermitReceived.checked = false;
        } else {
            uncheckPermitsTabSpecificCheckboxes();
            filterCheckboxPermitReceived.checked = true;
        }
    })
    filterCheckboxPermitExpiringSoon.addEventListener("change", (event) => {
        console.log("Changed - filterCheckboxPermitExpiringSoon");

        if (filterCheckboxPermitExpiringSoon.checked == false) {
            filterCheckboxPermitExpiringSoon.checked = false;
        } else {
            uncheckPermitsTabSpecificCheckboxes();
            filterCheckboxPermitExpiringSoon.checked = true;
        }
    })
    filterCheckboxPermitExpired.addEventListener("change", (event) => {
        console.log("Changed - filterCheckboxPermitExpired");

        if (filterCheckboxPermitExpired.checked == false) {
            filterCheckboxPermitExpired.checked = false;
        } else {
            uncheckPermitsTabSpecificCheckboxes();
            filterCheckboxPermitExpired.checked = true;
        }
    })
    filterCheckboxPermitExtensionSubmitted.addEventListener("change", (event) => {
        console.log("Changed - filterCheckboxPermitExtensionSubmitted");

        if (filterCheckboxPermitExtensionSubmitted.checked == false) {
            filterCheckboxPermitExtensionSubmitted.checked = false;
        } else {
            uncheckPermitsTabSpecificCheckboxes();
            filterCheckboxPermitExtensionSubmitted.checked = true;
        }
            
    })
    filterCheckboxPermitExtensionReceived.addEventListener("change", (event) => {
        console.log("Changed - filterCheckboxPermitExtensionReceived");

        if (filterCheckboxPermitExtensionReceived.checked == false) {
            filterCheckboxPermitExtensionReceived.checked = false;
        } else {
            uncheckPermitsTabSpecificCheckboxes();
            filterCheckboxPermitExtensionReceived.checked = true;
        }
    })
    filterCheckboxPermitDontNeed.addEventListener("change", (event) => {
        console.log("Changed - filterCheckboxPermitDontNeed");

        if (filterCheckboxPermitDontNeed.checked == false) {
            filterCheckboxPermitDontNeed.checked = false;
        } else {
            uncheckPermitsTabSpecificCheckboxes();
            filterCheckboxPermitDontNeed.checked = true;
        } 
    })
    filterCheckboxPermitHaventChecked.addEventListener("change", (event) => {
        console.log("Changed - filterCheckboxPermitHaventChecked");

        if (filterCheckboxPermitHaventChecked.checked == false) {
            filterCheckboxPermitHaventChecked.checked = false;
        } else {
            uncheckPermitsTabSpecificCheckboxes();
            filterCheckboxPermitHaventChecked.checked = true;
        } 
    })

    /* SETTINGS */      /* SETTINGS */      /* SETTINGS */      /* SETTINGS */      /* SETTINGS */      /* SETTINGS */      /* SETTINGS */






    
    function hideSettingsColorsDisplay() {
        console.log("Entered - hideSettingsColorsDisplay()");

        settingsDisplayLowerDisplayContainerColorsLeft.classList.add("hidden");
        settingsDisplayLowerDisplayContainerColorsRight.classList.add("hidden");
    }
    function revealSettingsColorsDisplay() {
        console.log("Entered - revealSettingsColorsDisplay()");

        settingsDisplayLowerDisplayContainerColorsLeft.classList.remove("hidden");
        settingsDisplayLowerDisplayContainerColorsRight.classList.remove("hidden");
    }

    function revealEasementStatusOptions() {
        console.log("Entered - revealEasementStatusOptions()");

        document.getElementById("option_element_not_set").classList.remove("hidden");
        document.getElementById("option_element_need_easement").classList.remove("hidden");
        document.getElementById("option_element_pending").classList.remove("hidden");
        document.getElementById("option_element_have_easement").classList.remove("hidden");
        document.getElementById("option_element_waiting").classList.remove("hidden");
        document.getElementById("option_element_havent_checked").classList.remove("hidden");
        document.getElementById("option_element_dont_need").classList.remove("hidden");
    }
    /* Used for CRD + RCD + Permit End Date */
    function revealAssessdateOptions() {
        console.log("Entered - revealPermitEndOptions()");

        document.getElementById("option_element_not_set").classList.remove("hidden");
        document.getElementById("option_element_past_today").classList.remove("hidden");
        document.getElementById("option_element_under_14").classList.remove("hidden");
        document.getElementById("option_element_under_31").classList.remove("hidden");
        document.getElementById("option_element_over_31").classList.remove("hidden");
    }
    function revealPermitStartOptions() {
        console.log("Entered - revealPermitStartOptions()");

        document.getElementById("option_element_not_set").classList.remove("hidden");
        document.getElementById("option_element_expired").classList.remove("hidden");
        document.getElementById("option_element_started").classList.remove("hidden");
        //document.getElementById("option_element_received").classList.remove("hidden");
        document.getElementById("option_element_set").classList.remove("hidden");

    }
    function revealPermitStatusOptions() {
        console.log("Entered - revealPermitStatusOptions()");

        document.getElementById("option_element_not_set").classList.remove("hidden");
        document.getElementById("option_element_applied").classList.remove("hidden");
        document.getElementById("option_element_received").classList.remove("hidden");
        document.getElementById("option_element_dont_need").classList.remove("hidden");
        document.getElementById("option_element_expiring_soon").classList.remove("hidden");
        document.getElementById("option_element_extension_submitted").classList.remove("hidden");
        document.getElementById("option_element_expired").classList.remove("hidden");
        document.getElementById("option_element_havent_checked").classList.remove("hidden");
    }
    function hideAllStatusOptions() {
        console.log("Entered - hideAllStatusOptions()");

        document.getElementById("option_element_not_set").classList.add("hidden");
        document.getElementById("option_element_need_easement").classList.add("hidden");
        document.getElementById("option_element_pending").classList.add("hidden");
        document.getElementById("option_element_have_easement").classList.add("hidden");
        document.getElementById("option_element_waiting").classList.add("hidden");
        document.getElementById("option_element_havent_checked").classList.add("hidden");
        document.getElementById("option_element_past_today").classList.add("hidden");
        document.getElementById("option_element_under_14").classList.add("hidden");
        document.getElementById("option_element_under_31").classList.add("hidden");
        document.getElementById("option_element_over_31").classList.add("hidden");
        document.getElementById("option_element_expired").classList.add("hidden");
        document.getElementById("option_element_started").classList.add("hidden");
        document.getElementById("option_element_received").classList.add("hidden");
        document.getElementById("option_element_applied").classList.add("hidden");
        document.getElementById("option_element_dont_need").classList.add("hidden");
        document.getElementById("option_element_expiring_soon").classList.add("hidden");
        document.getElementById("option_element_extension_submitted").classList.add("hidden");
        document.getElementById("option_element_set").classList.add("hidden");
    }
    function deselectAllColorsTabs() {
        console.log("deselectAllColorsTab()");

        settingsDisplayTabColorsCrd.classList.remove("hidden");
        settingsDisplayTabColorsCrdActive.classList.add("hidden");
        settingsDisplayTabColorsRcd.classList.remove("hidden");
        settingsDisplayTabColorsRcdActive.classList.add("hidden");
        settingsDisplayTabColorsPermitStatus.classList.remove("hidden");
        settingsDisplayTabColorsPermitStatusActive.classList.add("hidden");
        settingsDisplayTabColorsPermitStart.classList.remove("hidden");
        settingsDisplayTabColorsPermitStartActive.classList.add("hidden");
        settingsDisplayTabColorsPermitEnd.classList.remove("hidden");
        settingsDisplayTabColorsPermitEndActive.classList.add("hidden");
        settingsDisplayTabColorsEasementStatus.classList.remove("hidden");
        settingsDisplayTabColorsEasementStatusActive.classList.add("hidden");
    }
    function deselectAllColorsOptions() {
        console.log("Entered - deselectAllColorsOptions()");

        document.getElementById("option_element_not_set").classList.remove("activeTab");
        document.getElementById("option_element_need_easement").classList.remove("activeTab");
        document.getElementById("option_element_pending").classList.remove("activeTab");
        document.getElementById("option_element_have_easement").classList.remove("activeTab");
        document.getElementById("option_element_waiting").classList.remove("activeTab");
        document.getElementById("option_element_havent_checked").classList.remove("activeTab");
        document.getElementById("option_element_past_today").classList.remove("activeTab");
        document.getElementById("option_element_under_14").classList.remove("activeTab");
        document.getElementById("option_element_under_31").classList.remove("activeTab");
        document.getElementById("option_element_over_31").classList.remove("activeTab");
        document.getElementById("option_element_expired").classList.remove("activeTab");
        document.getElementById("option_element_started").classList.remove("activeTab");
        document.getElementById("option_element_received").classList.remove("activeTab");
        document.getElementById("option_element_applied").classList.remove("activeTab");
        document.getElementById("option_element_dont_need").classList.remove("activeTab");
        document.getElementById("option_element_expiring_soon").classList.remove("activeTab");
        document.getElementById("option_element_extension_submitted").classList.remove("activeTab");
        document.getElementById("option_element_set").classList.remove("activeTab");

    }
    
    /* Displays the current saved data for the user selected option */
    function displayColorsOptionData(option) {
        console.log("Entered - displayColorsOptionData(" + option + ")");

        settingsDisplayInnerColorsBottom.classList.remove("hidden");

        if (settingsDisplayTabColorsCrd.classList.contains("hidden")) { // CRD tab is active
            if (option == "Not Set") {
                currentColorAssignedBox.innerHTML = userColors.getName(userColors.crdNotSet);
                currentColorAssignedBox.style.backgroundColor = userColors.crdNotSet; 
            } else if (option == "Past Today") {
                currentColorAssignedBox.innerHTML = userColors.getName(userColors.crdPastToday);
                currentColorAssignedBox.style.backgroundColor = userColors.crdPastToday; 
            } else if (option == "Under 14 Days") {
                currentColorAssignedBox.innerHTML = userColors.getName(userColors.crdUnder14);
                currentColorAssignedBox.style.backgroundColor = userColors.crdUnder14; 
            } else if (option == "Under 31 Days") {
                currentColorAssignedBox.innerHTML = userColors.getName(userColors.crdUnder31);
                currentColorAssignedBox.style.backgroundColor = userColors.crdUnder31;
            } else if (option == "Over 31 Days") {
                currentColorAssignedBox.innerHTML = userColors.getName(userColors.crdOver31);
                currentColorAssignedBox.style.backgroundColor = userColors.crdOver31;
            }
        } else if (settingsDisplayTabColorsRcd.classList.contains("hidden")) { // RCD tab is active
            if (option == "Not Set") {
                currentColorAssignedBox.innerHTML = userColors.getName(userColors.rcdNotSet);
                currentColorAssignedBox.style.backgroundColor = userColors.rcdNotSet; 
            } else if (option == "Past Today") {
                currentColorAssignedBox.innerHTML = userColors.getName(userColors.rcdPastToday);
                currentColorAssignedBox.style.backgroundColor = userColors.rcdPastToday; 
            } else if (option == "Under 14 Days") {
                currentColorAssignedBox.innerHTML = userColors.getName(userColors.rcdUnder14);
                currentColorAssignedBox.style.backgroundColor = userColors.rcdUnder14; 
            } else if (option == "Under 31 Days") {
                currentColorAssignedBox.innerHTML = userColors.getName(userColors.rcdUnder31);
                currentColorAssignedBox.style.backgroundColor = userColors.rcdUnder31;
            } else if (option == "Over 31 Days") {
                currentColorAssignedBox.innerHTML = userColors.getName(userColors.rcdOver31);
                currentColorAssignedBox.style.backgroundColor = userColors.rcdOver31;
            } 
        } else if (settingsDisplayTabColorsPermitStatus.classList.contains("hidden")) {
            if (option == "Not Set") {
                currentColorAssignedBox.innerHTML = userColors.getName(userColors.permitStatusNotSet);
                currentColorAssignedBox.style.backgroundColor = userColors.permitStatusNotSet; 
            } else if (option == "Don't Need") {
                currentColorAssignedBox.innerHTML = userColors.getName(userColors.permitStatusDontNeed);
                currentColorAssignedBox.style.backgroundColor = userColors.permitStatusDontNeed; 
            } else if (option == "Applied") {
                currentColorAssignedBox.innerHTML = userColors.getName(userColors.permitStatusApplied);
                currentColorAssignedBox.style.backgroundColor = userColors.permitStatusApplied; 
            } else if (option == "Received") {
                currentColorAssignedBox.innerHTML = userColors.getName(userColors.permitStatusReceived);
                currentColorAssignedBox.style.backgroundColor = userColors.permitStatusReceived; 
            } else if (option == "Expiring Soon") {
                currentColorAssignedBox.innerHTML = userColors.getName(userColors.permitStatusExpiringSoon);
                currentColorAssignedBox.style.backgroundColor = userColors.permitStatusExpiringSoon; 
            } else if (option == "Ext. Submitted") {
                currentColorAssignedBox.innerHTML = userColors.getName(userColors.permitStatusExtensionSubmitted);
                currentColorAssignedBox.style.backgroundColor = userColors.permitStatusExtensionSubmitted; 
            } else if (option == "Expired") {
                currentColorAssignedBox.innerHTML = userColors.getName(userColors.permitStatusExpired);
                currentColorAssignedBox.style.backgroundColor = userColors.permitStatusExpired; 
            } else if (option == "Haven't Checked") {
                currentColorAssignedBox.innerHTML = userColors.getName(userColors.permitStatusHaventChecked);
                currentColorAssignedBox.style.backgroundColor = userColors.permitStatusHaventChecked; 
            }
        } else if (settingsDisplayTabColorsPermitStart.classList.contains("hidden")) {
            if (option == "Not Set") {
                currentColorAssignedBox.innerHTML = userColors.getName(userColors.permitStartNotSet);
                currentColorAssignedBox.style.backgroundColor = userColors.permitStartNotSet; 
            } else if (option == "Started") {
                currentColorAssignedBox.innerHTML = userColors.getName(userColors.permitStartStarted);
                currentColorAssignedBox.style.backgroundColor = userColors.permitStartStarted; 
            } else if (option == "Expired") {
                currentColorAssignedBox.innerHTML = userColors.getName(userColors.permitStartExpired);
                currentColorAssignedBox.style.backgroundColor = userColors.permitStartExpired; 
            } else if (option == "Set - Not Started") {
                currentColorAssignedBox.innerHTML = userColors.getName(userColors.permitStartSet);
                currentColorAssignedBox.style.backgroundColor = userColors.permitStartSet; 
            } 
        } else if (settingsDisplayTabColorsPermitEnd.classList.contains("hidden")) { // Permit End tab is active
            if (option == "Not Set") {
                currentColorAssignedBox.innerHTML = userColors.getName(userColors.permitEndNotSet);
                currentColorAssignedBox.style.backgroundColor = userColors.permitEndNotSet; 
            } else if (option == "Past Today") {
                currentColorAssignedBox.innerHTML = userColors.getName(userColors.permitEndPastToday);
                currentColorAssignedBox.style.backgroundColor = userColors.permitEndPastToday; 
            } else if (option == "Under 14 Days") {
                currentColorAssignedBox.innerHTML = userColors.getName(userColors.permitEndUnder14);
                currentColorAssignedBox.style.backgroundColor = userColors.permitEndUnder14; 
            } else if (option == "Under 31 Days") {
                currentColorAssignedBox.innerHTML = userColors.getName(userColors.permitEndUnder31);
                currentColorAssignedBox.style.backgroundColor = userColors.permitEndUnder31;
            } else if (option == "Over 31 Days") {
                currentColorAssignedBox.innerHTML = userColors.getName(userColors.permitEndOver31);
                currentColorAssignedBox.style.backgroundColor = userColors.permitEndOver31;
            } 
        } else if (settingsDisplayTabColorsEasementStatus.classList.contains("hidden")) { // Easement Status tab is active
            if (option == "Not Set") {
                currentColorAssignedBox.innerHTML = userColors.getName(userColors.easementStatusNotSet);
                currentColorAssignedBox.style.backgroundColor = userColors.easementStatusNotSet; 
            } else if (option == "Don't Need") {
                currentColorAssignedBox.innerHTML = userColors.getName(userColors.easementStatusDontNeed);
                currentColorAssignedBox.style.backgroundColor = userColors.easementStatusDontNeed; 
            } else if (option == "Need Easement") {
                currentColorAssignedBox.innerHTML = userColors.getName(userColors.easementStatusNeedEasement);
                currentColorAssignedBox.style.backgroundColor = userColors.easementStatusNeedEasement; 
            } else if (option == "Pending") {
                currentColorAssignedBox.innerHTML = userColors.getName(userColors.easementStatusPending);
                currentColorAssignedBox.style.backgroundColor = userColors.easementStatusPending; 
            } else if (option == "Have Easement") {
                currentColorAssignedBox.innerHTML = userColors.getName(userColors.easementStatusHaveEasement);
                currentColorAssignedBox.style.backgroundColor = userColors.easementStatusHaveEasement; 
            } else if (option == "Waiting") {
                currentColorAssignedBox.innerHTML = userColors.getName(userColors.easementStatusWaiting);
                currentColorAssignedBox.style.backgroundColor = userColors.easementStatusWaiting; 
            } else if (option == "Haven't Checked") {
                currentColorAssignedBox.innerHTML = userColors.getName(userColors.easementStatusHaventChecked);
                currentColorAssignedBox.style.backgroundColor = userColors.easementStatusHaventChecked; 
            } 
        }
    }
    /* Return ID version of active color tab for colorLocalSaveButton */
    function getActiveColorTabId() {
        console.log("Entered - getActiveColorTabId()");

        if (settingsDisplayTabColorsCrd.classList.contains("hidden")) { // crd tab is active
            return "crd";
        } else if (settingsDisplayTabColorsRcd.classList.contains("hidden")) { // rcd tab is active
            return "rcd";
        } else if (settingsDisplayTabColorsPermitStatus.classList.contains("hidden")) { // permit status tab is active
            return ("permitStatus");
        } else if (settingsDisplayTabColorsPermitStart.classList.contains("hidden")) { // permit start date tab is active
            return "permitStart";
        } else if (settingsDisplayTabColorsPermitEnd.classList.contains("hidden")) { // permit end date tab is active
            return "permitEnd";
        } else if (settingsDisplayTabColorsEasementStatus.classList.contains("hidden")) { // easement status tab is active
            return "easementStatus";
        }
    }
    /* Return ID version of active option for colorLocalSaveButton */
    function getActiveColorOptionId() {
        console.log("Entered - getActiveColorOptionID()");

        if (document.getElementById("option_element_not_set").classList.contains("activeTab")) {
            return "NotSet";
        } else if (document.getElementById("option_element_need_easement").classList.contains("activeTab")) {
            return "NeedEasement";
        } else if (document.getElementById("option_element_pending").classList.contains("activeTab")) {
            return "Pending";
        } else if (document.getElementById("option_element_have_easement").classList.contains("activeTab")) {
            return "HaveEasement";
        } else if (document.getElementById("option_element_waiting").classList.contains("activeTab")) {
            return "Waiting";
        } else if (document.getElementById("option_element_havent_checked").classList.contains("activeTab")) {
            return "HaventChecked";
        } else if (document.getElementById("option_element_past_today").classList.contains("activeTab")) {
            return "PastToday";
        } else if (document.getElementById("option_element_under_14").classList.contains("activeTab")) {
            return "Under14";
        } else if (document.getElementById("option_element_under_31").classList.contains("activeTab")) {
            return "Under31";
        } else if (document.getElementById("option_element_over_31").classList.contains("activeTab")) {
            return "Over31";
        } else if (document.getElementById("option_element_expired").classList.contains("activeTab")) {
            return "Expired";
        } else if (document.getElementById("option_element_started").classList.contains("activeTab")) {
            return "Started";
        } else if (document.getElementById("option_element_received").classList.contains("activeTab")) {
            return "Received";
        } else if (document.getElementById("option_element_applied").classList.contains("activeTab")) {
            return "Applied";
        } else if (document.getElementById("option_element_dont_need").classList.contains("activeTab")) {
            return "DontNeed";
        } else if (document.getElementById("option_element_expiring_soon").classList.contains("activeTab")) {
            return "ExpiringSoon";
        } else if (document.getElementById("option_element_extension_submitted").classList.contains("activeTab")) {
            return "ExtensionSubmitted";
        } else if (document.getElementById("option_element_set").classList.contains("activeTab")) {
            return "Set";
        }
    }
    /* Return true if the data in Settings - Preferences doesn't match what is saved */
    function systemPreferencesChanged() {
        console.log("Entered - systemPreferencesChanged()");

        if (settingsPreferencesTextfieldRowsPerPage.value == systemPreferences.rowsOnPage && 
            settingsPreferencesTextfieldCommentsWr.value == systemPreferences.tempCommentsCount &&
            settingsPreferencesTextfieldCommentsPermit.value == systemPreferences.permitCommentCount &&
            settingsPreferencesTextfieldCommentsComment.value == systemPreferences.tempAllCommentCount &&
            settingsPreferencesTextfieldNotesToDo.value == systemPreferences.tempNotesCount &&
            settingsPreferencesTextfieldLinesPerPageToDo.value == systemPreferences.linesPerPageToDo &&
            settingsPreferencesPromptDuration.value == systemPreferences.promptDuration) {
                return false;
        } else {
            return true;
        }
    }
    function remove7010Jobs() {
        console.log("Entered - remove7010Jobs()");

        let temp = [];

        for (var i = 0; i < allWrList.length; i++) {
            if (allWrList[i].generalStatus != "7010'd") {
                temp.push(allWrList[i]);
            }
        }
        allWrList = temp;
        filteredList = temp;

        injectHTMLAllWrTabDisplay(allWrList, 0, userColors, toDoMasterList);
        injectHTMLPermitsTabDisplay(allWrList, 0, userColors);
            
        // Below hides whichever prev/next container shouldn't be visible
        if (allWrTab.classList.contains("hidden")) { // allWrTab is active
            document.getElementById("permits_tab_prev_next_container").classList.add("hidden");
        } else if (permitsTab.classList.contains("hidden")) {
            document.getElementById("all_wr_tab_prev_next_container").classList.add("hidden");
        } else if (addTab.classList.contains("hidden")) {
            document.getElementById("permits_tab_prev_next_container").classList.add("hidden");
            document.getElementById("all_wr_tab_prev_next_container").classList.add("hidden");
        }
    }

            /* Popup Buttons */
        /* Clear 7010 */
    clear7010PopUpButtonYes.addEventListener("click", (event) => {
        console.log("Fired - Clicked clear7010PopUpButtonYes");

        remove7010Jobs();
        clear7010PopUpContainer.classList.add("hidden");

    })
    clear7010PopUpButtonNo.addEventListener("click", (event) => {
        console.log("Fired - Clicked clear7010PopUpButtonNo");

        clear7010PopUpContainer.classList.add("hidden");
    })
    clear7010PopUpXButton.addEventListener("click", (event) => {
        console.log("Fired - Clicked clear7010PopUpXButton");

        clear7010PopUpContainer.classList.add("hidden");        
    })
        /* Clear Complete To-Do's */
    clearCompleteToDosPopUpButtonYes.addEventListener("click", (event) => {
        console.log("Fired - Clicked clearCompleteToDosPopUpButtonYes");

        toDoMasterList.clearCompleted();

        if (toDoTab.classList.contains("hidden")) {
            for (var i = 0; i < toDoMasterList.list.length; i++) {
                if (toDoMasterList.list[i].date == toDoDisplayDayOfWeekDate.value) {
                    tempToDoPageElement = injectHTMLToDoTabDisplay(toDoMasterList.list[i]);
                    document.getElementById("clear_complete_to_dos_container").classList.add("hidden");

                    return;
                }
            }
        } else if (addTab.classList.contains("hidden") && filterCheckboxAddToDo.checked) {
            resetDisplayToDoAddUpdate();
            document.getElementById("clear_complete_to_dos_container").classList.add("hidden");

        }



    })
    clearCompleteToDosPopUpButtonNo.addEventListener("click", (event) => {
        console.log("Fired - Clicked clearCompleteToDosPopUpButtonNo");

        document.getElementById("clear_complete_to_dos_container").classList.add("hidden");
    })
    clearCompleteToDosPopUpXButton.addEventListener("click", (event) => {
        console.log("Fired - Clicked clearCompleteToDosPopUpXButton");

        document.getElementById("clear_complete_to_dos_container").classList.add("hidden");
    })
        /* Clear Local Storage */
    clearLocalStoragePopUpButtonYes.addEventListener("click", (event) => {
        console.log("Fired - Clicked clearLocalStoragePopUpButtonYes");

        localStorage.clear();
        location.reload();
    })
    clearLocalStoragePopUpButtonNo.addEventListener("click", (event) => {
        console.log("Fired - Clicked clearLocalStoragePopUpButtonNo");

        document.getElementById("clear_local_storage_container").classList.add("hidden");
    })
    clearLocalStoragePopUpXButton.addEventListener("click", (event) => {
        console.log("Fired - Clicked clearLocalStoragePopUpXButton");

        document.getElementById("clear_local_storage_container").classList.add("hidden");
    })

    settingsPreferencesClear7010Button.addEventListener("click", (event) => {
        console.log("Fired - Clicked settingsPreferencesClear7010Button");

        clear7010PopUpContainer.classList.remove("hidden");
    })
    settingsPreferencesClearCompleteToDosButton.addEventListener("click", (event) => {
        console.log("Fired - Clicked settingsPreferencesClearCompleteToDosButton");

        document.getElementById("clear_complete_to_dos_container").classList.remove("hidden");
    })
    settingsPreferencesClearLocalStorageButton.addEventListener("click", (event) => {
        console.log("Fired - Clicked settingsPreferencesClearLocalStorageButton");

        document.getElementById("clear_local_storage_container").classList.remove("hidden");

    })

        /* System Preferences */
    settingsPreferencesTextfieldRowsPerPage.addEventListener("change", (event) => {
        console.log("Fired - Changed settingsPreferencesTextfieldRowsPerPage");

        if (event.target.value != null && event.target.value == 0) {
            event.target.value = 1; // prevents user from "hiding" list
        }

        // Hides save button if user changes back to original setting
        if (!systemPreferencesChanged()) {
            settingsPreferencesSaveButton.classList.add("hidden");
            document.getElementById("settings_display_row_one_preferences").style.marginTop = '45px';
        } else {
            document.getElementById("settings_display_row_one_preferences").style.marginTop = '45px';
            settingsPreferencesSaveButton.classList.remove("hidden");
        }
    })
    settingsPreferencesTextfieldRowsPerPage.addEventListener("click", (event) => {
        console.log("Fired - Clicked settingsPreferencesTextfieldRowsPerPage");

        if (event.target.value != null && event.target.value.length > 0) {
            event.target.select();
        }
    })
    settingsPreferencesTextfieldCommentsWr.addEventListener("change", (event) => {
        console.log("Fired - Changed settingsPreferencesTextfieldCommentsWr");

        if (event.target.value != null && event.target.value == 0) {
            event.target.value = 1; // prevents user from "hiding" list
        }

        // Hides save button if user changes back to original setting
        if (!systemPreferencesChanged()) {
            settingsPreferencesSaveButton.classList.add("hidden");
            document.getElementById("settings_display_row_one_preferences").style.marginTop = '45px';
        } else {
            document.getElementById("settings_display_row_one_preferences").style.marginTop = '45px';
            settingsPreferencesSaveButton.classList.remove("hidden");
        }
    })
    settingsPreferencesTextfieldCommentsWr.addEventListener("click", (event) => {
        console.log("Fired - Clicked settingsPreferencesTextfieldCommentsWr");

        if (event.target.value != null && event.target.value.length > 0) {
            event.target.select();
        }
    })
    settingsPreferencesTextfieldCommentsPermit.addEventListener("change", (event) => {
        console.log("Fired - Changed settingsPreferencesTextfieldCommentsPermit");

        if (event.target.value != null && event.target.value == 0) {
            event.target.value = 1; // prevents user from "hiding" list
        }

        // Hides save button if user changes back to original setting
        if (!systemPreferencesChanged()) {
            settingsPreferencesSaveButton.classList.add("hidden");
            document.getElementById("settings_display_row_one_preferences").style.marginTop = '45px';
        } else {
            document.getElementById("settings_display_row_one_preferences").style.marginTop = '45px';
            settingsPreferencesSaveButton.classList.remove("hidden");
        }
    })
    settingsPreferencesTextfieldCommentsPermit.addEventListener("click", (event) => {
        console.log("Fired - Clicked settingsPreferencesTextfieldCommentsPermit");

        if (event.target.value != null && event.target.value.length > 0) {
            event.target.select();
        }
    })
    settingsPreferencesTextfieldCommentsComment.addEventListener("change", (event) => {
        console.log("Fired - Changed settingsPreferencesTextfieldCommentsComment");

        if (event.target.value != null && event.target.value == 0) {
            event.target.value = 1; // prevents user from "hiding" list
        }

        // Hides save button if user changes back to original setting
        if (!systemPreferencesChanged()) {
            settingsPreferencesSaveButton.classList.add("hidden");
            document.getElementById("settings_display_row_one_preferences").style.marginTop = '45px';
        } else {
            document.getElementById("settings_display_row_one_preferences").style.marginTop = '45px';
            settingsPreferencesSaveButton.classList.remove("hidden");
        }
    })
    settingsPreferencesTextfieldCommentsComment.addEventListener("click", (event) => {
        console.log("Fired - Clicked settingsPreferencesTextfieldCommentsComment");

        if (event.target.value != null && event.target.value.length > 0) {
            event.target.select();
        }
    })
    settingsPreferencesTextfieldNotesToDo.addEventListener("change", (event) => {
        console.log("Fired - Changed settingsPreferencesTextfieldNotesToDo");

        if (event.target.value != null && event.target.value == 0) {
            event.target.value = 1; // prevents user from "hiding" list
        }

        // Hides save button if user changes back to original setting
        if (!systemPreferencesChanged()) {
            settingsPreferencesSaveButton.classList.add("hidden");
            document.getElementById("settings_display_row_one_preferences").style.marginTop = '45px';
        } else {
            document.getElementById("settings_display_row_one_preferences").style.marginTop = '45px';
            settingsPreferencesSaveButton.classList.remove("hidden");
        }
    })
    settingsPreferencesTextfieldNotesToDo.addEventListener("click", (event) => {
        console.log("Fired - Clicked settingsPreferencesTextfieldNotesToDo");

        if (event.target.value != null && event.target.value.length > 0) {
            event.target.select();
        }
    })
    settingsPreferencesTextfieldLinesPerPageToDo.addEventListener("change", (event) => {
        console.log("Fired - Clicked settingsPreferencesTextfieldLinesPerPageToDo");

        if (event.target.value != null && event.target.value == 0) {
            event.target.value = 1; // prevents user from "hiding" list
        }

        // Hides save button if user changes back to original setting
        if (!systemPreferencesChanged()) {
            settingsPreferencesSaveButton.classList.add("hidden");
            document.getElementById("settings_display_row_one_preferences").style.marginTop = '45px';
        } else {
            document.getElementById("settings_display_row_one_preferences").style.marginTop = '45px';
            settingsPreferencesSaveButton.classList.remove("hidden");
        }
    })
    settingsPreferencesTextfieldLinesPerPageToDo.addEventListener("click", (event) => {
        console.log("Fired - Clicked settingsPReferencesTextfieldLiensPerPageToDo");

        if (event.target.value != null && event.target.value.length > 0) {
            event.target.select();
        }
    })
    settingsPreferencesPromptDuration.addEventListener("change", (event) => {
        console.log("Fired - Changed settingsPreferencesPromptDuration");

        if (event.target.value != null && event.target.value == 0) {
            event.target.value = 1; // prevents user from "hiding" list
        }

        // Hides save button if user changes back to original setting
        if (!systemPreferencesChanged()) {
            settingsPreferencesSaveButton.classList.add("hidden");
            document.getElementById("settings_display_row_one_preferences").style.marginTop = '45px';
        } else {
            document.getElementById("settings_display_row_one_preferences").style.marginTop = '45px';
            settingsPreferencesSaveButton.classList.remove("hidden");
        }
    })
    settingsPreferencesPromptDuration.addEventListener("click", (event) => {
        console.log("Clicked - settingsPreferencesPromptDuration");

        if (event.target.value != null && event.target.value.length > 0) {
            event.target.select();
        }
    })
    

        /* Save Buttons */
    settingsPreferencesSaveButton.addEventListener("click", (event) => {
        console.log("Fired - Clicked settingsPreferencesSaveButton");

        let str = "";

        str += settingsPreferencesTextfieldRowsPerPage.value + "@" + settingsPreferencesTextfieldCommentsWr.value + "@" + 
               settingsPreferencesTextfieldCommentsPermit.value + "@" + settingsPreferencesTextfieldCommentsComment.value + "@" +
               settingsPreferencesTextfieldNotesToDo.value + "@" + settingsPreferencesTextfieldLinesPerPageToDo.value + "@" + 
               settingsPreferencesPromptDuration.value + "@";

        /* Setting New System Preference Values */
        systemPreferences.load(str);

        /* Creating New List */
        let oldList = toDoMasterList;
        toDoMasterList = new ToDoMasterList(systemPreferences.linesPerPageToDo);

        for (var i = 0; i < oldList.list.length; i++) {
            let flatList = oldList.list[i].flatten();

            for (var j = 0; j < flatList.length; j++) {
                toDoMasterList.add(flatList[j]);
            }
        }

        /* Setting New Sizes/Values */
        rowsOnPage = systemPreferences.rowsOnPage;
        linesPerPageToDo = systemPreferences.linesPerPageToDo;
        permitCommentCount = systemPreferences.permitCommentCount;
        tempCommentsCount = systemPreferences.tempCommentsCount;
        tempAllCommentCount = systemPreferences.tempAllCommentCount;
        tempNotesCount = systemPreferences.tempNotesCount;

        /* Creating New Temp containers With Updated Sizes */
        tempToDoPageElement = new PaginatedToDoPageElement(linesPerPageToDo, toDoMasterList);
        tempComments = new PaginatedComments(tempCommentsCount, "addWr");
        tempPermitComments = new PaginatedComments(permitCommentCount, "addPermit");
        tempAllComments = new PaginatedComments(tempAllCommentCount, "addComment");
        tempNotes = new PaginatedComments(tempNotesCount, "addToDo");
        tempToDoMasterList = new ToDoMasterList(linesPerPageToDo);

        /* Setting All Display Pages To 0 */
        document.getElementById("all_wr_tab_current_page_box").innerHTML = "1";
        document.getElementById("permits_tab_current_page_box").innerHTML = "1";
        document.getElementById("to_do_tab_current_page_box").innerHTML = "1";

        /* Updating Displays - could check to see where user is and load - may do when I write logic for back button */ 
        /* Doing this for diplay but also because I'm not updating temp lists - User will see that everything has been "Reset" */
        allWrTab.click();

        settingsPreferencesSaveButton.classList.add("hidden");
        document.getElementById("settings_display_row_one_preferences").style.marginTop = '45px';

    })
    colorLocalSaveButton.addEventListener("click", (event) => {
        console.log("Fired - Clicked colorLocalSaveButton");

        const curColorTab = getActiveColorTabId();
        const curColorOption = getActiveColorOptionId();

        let str = "";
        str += curColorTab + curColorOption;

        userColors.change(str, currentColorAssignedBox.style.backgroundColor);
        settingsDisplayInnerColorsLabel.innerHTML = "Current Color Assigned:"
        colorLocalSaveButton.classList.add("hidden");
        document.getElementById("current_color_assigned_box").style.marginRight = '380px';

        /* Updating Display - could do this better/cleaner */
        allWrTab.click();
    })

        /* Options */
    settingsDisplayColorOptionsContainer.addEventListener("click", (event) => {
        console.log("Fired - Clicked settingsDisplayColorOptionsContainer");

        console.log(event.target);
        if (event.target.innerHTML == "Not Set" || event.target.innerHTML == "Need Easement" || event.target.innerHTML == "Pending" ||
            event.target.innerHTML == "Have Easement" || event.target.innerHTML == "Waiting" || event.target.innerHTML == "Haven't Checked" ||
            event.target.innerHTML == "Past Today" || event.target.innerHTML == "Under 14 Days" || event.target.innerHTML == "Under 31 Days" ||
            event.target.innerHTML == "Over 31 Days" || event.target.innerHTML == "Expired" || event.target.innerHTML == "Started" || 
            event.target.innerHTML == "Received" || event.target.innerHTML == "Applied" || event.target.innerHTML == "Don't Need" || 
            event.target.innerHTML == "Expiring Soon" || event.target.innerHTML == "Ext. Submitted" || event.target.innerHTML == "Set - Not Started") {
                deselectAllColorsOptions();
                event.target.classList.add("activeTab");
                displayColorsOptionData(event.target.innerHTML);
            }
    })

        /* Colors */
    settingsDisplayInnerColorsBottom.addEventListener("click", (event) => {
        console.log("Fired - Clicked settingsDisplayInnerColorsBottom");

        if (event.target.innerHTML == "Yellow" || event.target.innerHTML == "Orange" || event.target.innerHTML == "Magenta" ||
            event.target.innerHTML == "Green" || event.target.innerHTML == "Teal" || event.target.innerHTML == "Pink" ||
            event.target.innerHTML == "Blue" || event.target.innerHTML == "White" || event.target.innerHTML == "Red" ||
            event.target.innerHTML == "Purple") {
                const curColorTab = getActiveColorTabId();
                const curColorOption = getActiveColorOptionId();
                let str = "";
                str += curColorTab + curColorOption;

                if (event.target.innerHTML != userColors.getName(userColors.getValue(str))) {
                    
                    settingsDisplayInnerColorsLabel.innerHTML = "New Color Assigned:"
                    
                    document.getElementById("current_color_assigned_box").style.marginRight = '0px';
                    colorLocalSaveButton.classList.remove("hidden");
                } else {
                    settingsDisplayInnerColorsLabel.innerHTML = "Current Color Assigned:"
                    colorLocalSaveButton.classList.add("hidden");
                    document.getElementById("current_color_assigned_box").style.marginRight = '380px';
                }
                currentColorAssignedBox.innerHTML = event.target.innerHTML;
                currentColorAssignedBox.style.backgroundColor = event.target.style.backgroundColor;
            }
    })

        /* Tabs */

    /* General (Top) */
    settingsDisplayTabColors.addEventListener("click", (event) => {
        console.log("Clicked - settingsDisplayTabColors");

        if (settingsDisplayTabPreferences.classList.contains("hidden")) {
            settingsDisplayTabPreferencesActive.click();
        }

        // Display
        revealSettingsColorsDisplay();

        // Tabs
        settingsDisplayTabColors.classList.add("hidden");
        settingsDisplayTabColorsActive.classList.remove("hidden");

        // Updating Header
        settingsDisplayContainerLabel.innerHTML = `<b>Settings - Colors</b>`;

    })
    settingsDisplayTabColorsActive.addEventListener("click", (event) => {
        console.log("Clicked - settingsDisplayTabColorsActive");

        // Display
        hideSettingsColorsDisplay();

        // Tabs
        settingsDisplayTabColors.classList.remove("hidden");
        settingsDisplayTabColorsActive.classList.add("hidden");

        // Updating Header
        settingsDisplayContainerLabel.innerHTML = `<b>Settings</b>`;
    })
    settingsDisplayTabPreferences.addEventListener("click", (event) => {
        console.log("Fired - Clicked settingsDisplayTabPreferences");

        if (settingsDisplayTabColors.classList.contains("hidden")) { // colors tab is active
            settingsDisplayTabColorsActive.click();
        }

        // Display
        settingsDisplayLowerDisplayContainerPreferences.classList.remove("hidden");

        // Tabs
        settingsDisplayTabPreferences.classList.add("hidden");
        settingsDisplayTabPreferencesActive.classList.remove("hidden");

        // Updating Header
        settingsDisplayContainerLabel.innerHTML = `<b>Settings - Preferences</b>`;
    })
    settingsDisplayTabPreferencesActive.addEventListener("click", (event) => {
        console.log("Fired - Clicked settingsDisplayTabPreferencesActive");

        // Display
        settingsDisplayLowerDisplayContainerPreferences.classList.add("hidden");

        // Tabs
        settingsDisplayTabPreferences.classList.remove("hidden");
        settingsDisplayTabPreferencesActive.classList.add("hidden");

        // Updating Header
        settingsDisplayContainerLabel.innerHTML = `<b>Settings</b>`;
    })

    /* Colors */
    settingsDisplayTabColorsCrd.addEventListener("click", (event) => {
        console.log("Fired - Clicked settingsDisplayTabColorsCrd");
        
        deselectAllColorsTabs();
        hideAllStatusOptions();
        revealAssessdateOptions();

        settingsDisplayInnerColorsTop.classList.remove("hidden");

        settingsDisplayTabColorsCrd.classList.add("hidden");
        settingsDisplayTabColorsCrdActive.classList.remove("hidden");        
    })
    settingsDisplayTabColorsCrdActive.addEventListener("click", (event) => {
        console.log("Fired - Clicked settingsDisplayTabColorsCrdActive");

        hideAllStatusOptions();

        settingsDisplayInnerColorsTop.classList.add("hidden");
        settingsDisplayInnerColorsBottom.classList.add("hidden");
        deselectAllColorsOptions();
        currentColorAssignedBox.innerHTML = "Not Set"
        currentColorAssignedBox.style.backgroundColor = 'white';


        settingsDisplayTabColorsCrd.classList.remove("hidden");
        settingsDisplayTabColorsCrdActive.classList.add("hidden");        
    })
    settingsDisplayTabColorsRcd.addEventListener("click", (event) => {
        console.log("Clicked - settingsDisplayTabColorsRcd");

        deselectAllColorsTabs();
        hideAllStatusOptions();
        revealAssessdateOptions();

        settingsDisplayInnerColorsTop.classList.remove("hidden");

        settingsDisplayTabColorsRcd.classList.add("hidden");
        settingsDisplayTabColorsRcdActive.classList.remove("hidden");
    })
    settingsDisplayTabColorsRcdActive.addEventListener("click", (event) => {
        console.log("Clicked - settingsDisplayTabColorsRcdActive");

        hideAllStatusOptions();

        settingsDisplayInnerColorsTop.classList.add("hidden");
        settingsDisplayInnerColorsBottom.classList.add("hidden");
        deselectAllColorsOptions();
        currentColorAssignedBox.innerHTML = "Not Set"
        currentColorAssignedBox.style.backgroundColor = 'white';

        settingsDisplayTabColorsRcd.classList.remove("hidden");
        settingsDisplayTabColorsRcdActive.classList.add("hidden");
    })
    settingsDisplayTabColorsPermitStatus.addEventListener("click", (event) => {
        console.log("Fired - Clicked settingsDisplayTabColorsPermitStatus");

        deselectAllColorsTabs();
        hideAllStatusOptions();
        revealPermitStatusOptions();
        
        settingsDisplayInnerColorsTop.classList.remove("hidden");
        
        settingsDisplayTabColorsPermitStatus.classList.add("hidden");
        settingsDisplayTabColorsPermitStatusActive.classList.remove("hidden");

    })
    settingsDisplayTabColorsPermitStatusActive.addEventListener("click", (event) => {
        console.log("Fired - Clicked settingsDisplayTabColorsPermitStatusActive");

        hideAllStatusOptions();

        settingsDisplayInnerColorsTop.classList.add("hidden");
        settingsDisplayInnerColorsBottom.classList.add("hidden");
        deselectAllColorsOptions();
        currentColorAssignedBox.innerHTML = "Not Set"
        currentColorAssignedBox.style.backgroundColor = 'white';

        settingsDisplayTabColorsPermitStatus.classList.remove("hidden");
        settingsDisplayTabColorsPermitStatusActive.classList.add("hidden");

    })
    settingsDisplayTabColorsPermitStart.addEventListener("click", (event) => {
        console.log("Fired - Clicked settingsDisplayTabColorsPermitStart");

        deselectAllColorsTabs();
        hideAllStatusOptions();
        revealPermitStartOptions();

        settingsDisplayInnerColorsTop.classList.remove("hidden");

        settingsDisplayTabColorsPermitStart.classList.add("hidden");
        settingsDisplayTabColorsPermitStartActive.classList.remove("hidden");

    })
    settingsDisplayTabColorsPermitStartActive.addEventListener("click", (event) => {
        console.log("Fired - Clicked settingsDisplayTabColorsPermitStartActive");

        hideAllStatusOptions();

        settingsDisplayInnerColorsTop.classList.add("hidden");
        settingsDisplayInnerColorsBottom.classList.add("hidden");
        deselectAllColorsOptions();
        currentColorAssignedBox.innerHTML = "Not Set"
        currentColorAssignedBox.style.backgroundColor = 'white';

        settingsDisplayTabColorsPermitStart.classList.remove("hidden");
        settingsDisplayTabColorsPermitStartActive.classList.add("hidden");

    })
    settingsDisplayTabColorsPermitEnd.addEventListener("click", (event) => {
        console.log("Fired - Clicked settingsDisplayTabColorsPermitEnd");
        
        deselectAllColorsTabs();
        hideAllStatusOptions();
        revealAssessdateOptions();

        settingsDisplayInnerColorsTop.classList.remove("hidden");

        settingsDisplayTabColorsPermitEnd.classList.add("hidden");
        settingsDisplayTabColorsPermitEndActive.classList.remove("hidden");
    })
    settingsDisplayTabColorsPermitEndActive.addEventListener("click", (event) => {
        console.log("Fired - Clicked settingsDisplayTabColorsPermitEndActive");

        hideAllStatusOptions();

        settingsDisplayInnerColorsTop.classList.add("hidden");
        settingsDisplayInnerColorsBottom.classList.add("hidden");
        deselectAllColorsOptions();
        currentColorAssignedBox.innerHTML = "Not Set"
        currentColorAssignedBox.style.backgroundColor = 'white';

        settingsDisplayTabColorsPermitEnd.classList.remove("hidden");
        settingsDisplayTabColorsPermitEndActive.classList.add("hidden");
    })
    settingsDisplayTabColorsEasementStatus.addEventListener("click", (event) => {
        console.log("Fired - Clicked settingDisplayTabColorsEasementStatus");

        deselectAllColorsTabs();
        hideAllStatusOptions();
        revealEasementStatusOptions();

        settingsDisplayInnerColorsTop.classList.remove("hidden");

        settingsDisplayTabColorsEasementStatus.classList.add("hidden");
        settingsDisplayTabColorsEasementStatusActive.classList.remove("hidden");

    })
    settingsDisplayTabColorsEasementStatusActive.addEventListener("click", (event) => {
        console.log("Fired - Clicked settingDisplayTabColorsEasementStatusActive");

        hideAllStatusOptions();

        settingsDisplayInnerColorsTop.classList.add("hidden");
        settingsDisplayInnerColorsBottom.classList.add("hidden");
        deselectAllColorsOptions();
        currentColorAssignedBox.innerHTML = "Not Set"
        currentColorAssignedBox.style.backgroundColor = 'white';

        settingsDisplayTabColorsEasementStatus.classList.remove("hidden");
        settingsDisplayTabColorsEasementStatusActive.classList.add("hidden");

    })


    // Add clear 7010 button or option

    /* Settings "Open" and X buttons */
    settingsButton.addEventListener("click", (event) => {
        console.log("Fired - Clicked settingsButton");

        settingsDisplayContainer.classList.remove("hidden");
    })
    settingsXButton.addEventListener("click", (event) => {
        console.log("Fired - Clicked settingsXButton");

        settingsDisplayContainer.classList.add("hidden");

        if (settingsDisplayTabColors.classList.contains("hidden")) { // settingsDisplayTabColors is active
            settingsDisplayTabColorsActive.click();
            deselectAllColorsOptions();
            deselectAllColorsTabs();
            settingsDisplayInnerColorsTop.classList.add("hidden");
            settingsDisplayInnerColorsBottom.classList.add("hidden");
            currentColorAssignedBox.innerHTML = "Not Set";
            currentColorAssignedBox.style.backgroundColor = "white";
        } else if (settingsDisplayTabPreferences.classList.contains("hidden")) {
            settingsDisplayTabPreferencesActive.click();
        }
    })


    /* GLOBAL */        /* GLOBAL */        /* GLOBAL */        /* GLOBAL */        /* GLOBAL */        /* GLOBAL */        /* GLOBAL */

    /* Footer Buttons */
    footerButtonSync.addEventListener("click", (event) => {
        console.log("Fired - Clicked footerButtonSync");

        const tempStorage = document.getElementById("temp_storage").innerHTML;
        const tempList = parseWrString(tempStorage);

        const tempColorPreferences = document.getElementById("temp_color_storage").innerHTML;
        userColors.load(tempColorPreferences);

        const tempSystemPreferences = document.getElementById("temp_system_storage").innerHTML;
        systemPreferences.load(tempSystemPreferences);

        const tempToDoMasterList = document.getElementById("temp_to_do_storage").innerHTML;
        toDoMasterList.load(tempToDoMasterList);

        for (let i = 0; i < tempList.length; i++) {
            allWrList[allWrList.length] = tempList[i];
        }
        filteredList = allWrList;
        footerButtonSync.classList.add("hidden");
        deselectAllTabs();
        trimByAll.checked = true;
        document.getElementById('all_wr_tab').click();

        const tempAllWrList = document.createElement("tempAllWrList");

        tempAllWrList.classList.add("hidden");
        tempAllWrList.id = "temp_all_wr_list";
        tempAllWrList.innerHTML = allWrList;

        if (document.getElementById("temp_all_wr_list") == undefined) {
            document.getElementById('all_wr_tab').insertAdjacentElement("beforeend", tempAllWrList);
        }

        footerButtonLoad.classList.add("hidden");

    })
    footerButtonLoad.addEventListener("click", (event) => {
        console.log("Fired - Clicked footerButtonLoad");
                
        document.getElementById('allWrListFile').click();
    })
    footerButtonSave.addEventListener("click", (event) => {
        console.log("Fired - Clicked footer_save_button");
        console.log(systemPreferences);

        saveFile(allWrList, userColors, systemPreferences, toDoMasterList);
    })

            /* Tab Event Listeners */
                /* Headers */
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
        if (searchBySelectionCheckbox.checked == true) {
            searchByWrCheckbox.checked = true;
        } else {
            filterCheckboxPriorityNumber.checked = true;
            trimByAll.checked = true;
        }
        


        if (allWrList.length > 0) {
            injectHTMLAllWrTabDisplay(allWrList, currentPageAllWr, userColors, toDoMasterList);
            console.log("List updated");
        } else {
            console.log("List not updated.");
            console.log("allWrList.length = " + allWrList.length);
        }
    })
    allWrTabActive.addEventListener("click", (event) => {
        console.log("Fired - Clicked all_wr_tab_active");

        deselectAllWrTab();
    })

    function switchGenericBoxes(tab) {
        console.log("Entered - switchGenericBoxes(" + tab + ")");

        if (tab == "toDo") {
            document.getElementById("filter_container_age_new_old_all").classList.remove("hidden");
            document.getElementById("filter_container_age_old_new_all").classList.remove("hidden");
            document.getElementById("filter_checkbox_age_new_old_label_all").classList.remove("hidden");
            document.getElementById("filter_checkbox_age_old_new_label_all").classList.remove("hidden");


            document.getElementById("filter_checkbox_age_new_old_label_addition").classList.remove("hidden");
            document.getElementById("filter_checkbox_age_new_old_label_addition").style.width = '70px';
            document.getElementById("filter_checkbox_age_new_old_label_addition").style.marginLeft = '70px';
            
            document.getElementById("filter_checkbox_age_new_old_label_all_addition").classList.remove("hidden");
            document.getElementById("filter_checkbox_age_new_old_label_all_addition").style.width = '70px';
            document.getElementById("filter_checkbox_age_new_old_label_all_addition").style.marginLeft = '75px';

            document.getElementById("filter_checkbox_age_old_new_label_addition").classList.remove("hidden");
            document.getElementById("filter_checkbox_age_old_new_label_addition").style.width = '70px';
            document.getElementById("filter_checkbox_age_old_new_label_addition").style.marginLeft = '70px';

            document.getElementById("filter_checkbox_age_old_new_label_all_addition").classList.remove("hidden");
            document.getElementById("filter_checkbox_age_old_new_label_all_addition").style.width = '70px';
            document.getElementById("filter_checkbox_age_old_new_label_all_addition").style.marginLeft = '75px';


        } else {
            document.getElementById("filter_container_age_new_old_all").classList.add("hidden");
            document.getElementById("filter_container_age_old_new_all").classList.add("hidden");
            document.getElementById("filter_checkbox_age_new_old_label_all").classList.add("hidden");
            document.getElementById("filter_checkbox_age_old_new_label_all").classList.add("hidden");


            document.getElementById("filter_checkbox_age_new_old_label_addition").classList.add("hidden");
            document.getElementById("filter_checkbox_age_new_old_label_all_addition").classList.add("hidden");
            document.getElementById("filter_checkbox_age_old_new_label_addition").classList.add("hidden");
            document.getElementById("filter_checkbox_age_old_new_label_all_addition").classList.add("hidden");

        }
    }
    function switchSearchByBoxes(tab) {
        console.log("Entered - switchSearchByBoxes(" + tab + ")");

        if (tab == "toDo") {
            document.getElementById("search_by_selection_lower_container_checkbox_and_label_container_address").classList.add("hidden");
            document.getElementById("search_by_selection_lower_container_checkbox_and_label_container_wr").style.marginLeft = '122px';

        } else {
            document.getElementById("search_by_selection_lower_container_checkbox_and_label_container_address").classList.remove("hidden");
            document.getElementById("search_by_selection_lower_container_checkbox_and_label_container_wr").style.marginLeft = '0px';
            
        }
    }
    function switchTrimBoxes(tab) {
        console.log("Entered - switchTrimBoxes(" + tab + ")");

        if (tab == "toDo") {
            document.getElementById("footer_filter_container_not_complete").classList.remove("hidden");
            document.getElementById("footer_filter_container_all_to_do").classList.remove("hidden");
            document.getElementById("footer_filter_container_complete").classList.remove("hidden");

            document.getElementById("footer_filter_container_not_7010").classList.add("hidden");
            document.getElementById("footer_filter_container_all").classList.add("hidden");
            document.getElementById("footer_filter_container_7010").classList.add("hidden");

            document.getElementById("footer_filter_checkbox_all_to_do").checked = true;

        } else {
            document.getElementById("footer_filter_container_not_complete").classList.add("hidden");
            document.getElementById("footer_filter_container_all_to_do").classList.add("hidden");
            document.getElementById("footer_filter_container_complete").classList.add("hidden");

            document.getElementById("footer_filter_container_not_7010").classList.remove("hidden");
            document.getElementById("footer_filter_container_all").classList.remove("hidden");
            document.getElementById("footer_filter_container_7010").classList.remove("hidden");

            document.getElementById("footer_filter_checkbox_all").checked = true;

        }
    }
    function switchTypeCheckboxes(tab) {
        console.log("Entered - switchTypeCheckboxes(" + tab + ")");

        if (tab == "toDo") {
            /* Hiding WR only checkboxes */
            document.getElementById("filter_container_waiting_ll").classList.add("hidden");
            document.getElementById("filter_container_waiting_customer_not_approved").classList.add("hidden");
            document.getElementById("filter_container_waiting_customer_approved").classList.add("hidden");
            document.getElementById("filter_container_review_peer").classList.add("hidden");
            document.getElementById("filter_container_review_coordinator").classList.add("hidden");
            document.getElementById("filter_container_flag").classList.add("hidden");
            document.getElementById("filter_container_7010").classList.add("hidden");
            document.getElementById("filter_container_cancled_other").classList.add("hidden");

            /* Revealing To-Do only checkboxes */
            document.getElementById("filter_container_general").classList.remove("hidden");
            document.getElementById("filter_container_contact_customer").classList.remove("hidden");
            document.getElementById("filter_container_waiting_other").classList.remove("hidden");

        } else {
            /* Revealing WR only checkboxes */
            document.getElementById("filter_container_waiting_ll").classList.remove("hidden");
            document.getElementById("filter_container_waiting_customer_not_approved").classList.remove("hidden");
            document.getElementById("filter_container_waiting_customer_approved").classList.remove("hidden");
            document.getElementById("filter_container_review_peer").classList.remove("hidden");
            document.getElementById("filter_container_review_coordinator").classList.remove("hidden");
            document.getElementById("filter_container_flag").classList.remove("hidden");
            document.getElementById("filter_container_7010").classList.remove("hidden");
            document.getElementById("filter_container_cancled_other").classList.remove("hidden");

            /* Hiding To-Do only checkboxes */
            document.getElementById("filter_container_general").classList.add("hidden");
            document.getElementById("filter_container_contact_customer").classList.add("hidden");
            document.getElementById("filter_container_waiting_other").classList.add("hidden");

        }
    }
    toDoTab.addEventListener("click", (event) => {
        console.log("Fired - Clicked toDoTab");

        /* Deselecting all tabs */
        deselectAllTabs();

        /* Hiding inactive button */
        toDoTab.classList.add("hidden");

        /* Revealing features */
        toDoTabActive.classList.remove("hidden");
        filterByBoxContainer.classList.remove("hidden");
        searchByBoxContainer.classList.remove("hidden"); // May remove this
        trimContainer.classList.remove("hidden");
        trimContainerLabel.classList.remove("hidden");
        switchSearchByBoxes("toDo");
        switchGenericBoxes("toDo");
        switchTrimBoxes("toDo");
        switchTypeCheckboxes("toDo");
        toDoDisplayContainer.classList.remove("hidden");

        /* Most of the checkboxes match up with WR status' - will add and remove as needed */
        allWrStatusFiltersContainer.classList.remove("hidden"); 
        filterSectionStatusLabel.classList.remove("hidden");
        filterSectionStatusLabel.innerHTML = "Type:";

        /* Removing Filter By Priority Number */
        document.getElementById("filter_container_priority_number").classList.add("hidden");
        //document.getElementById("filter_container_age_new_old").classList.add("hidden");
        document.getElementById("filter_container_crd").classList.add("hidden");
        //document.getElementById("filter_container_age_old_new").classList.add("hidden");
        document.getElementById("filter_container_rcd").classList.add("hidden");
        document.getElementById("filter_container_waiting_other").classList.add("hidden");

        /* Removing Hide Page-Object Objects */
        document.getElementById("hide_date_page_object").classList.add("hidden");
        document.getElementById("hide_to_do_tabs").classList.add("hidden");


        /* Setting Page Defaults */
        if (searchBySelectionCheckbox.checked == true) {
            searchByWrCheckbox.checked = true;
        } else {
            //filterCheckboxGeneral.checked = true;
            trimByAllToDo.checked = true;
        }
        
        if (toDoMasterList.list.length != undefined && toDoMasterList.list.length > 0) {
            for (var i = 0; i < toDoMasterList.list.length; i++) {
                if (toDoMasterList.list[i].date == toDoDisplayDayOfWeekDate.value) {
                    tempToDoPageElement = injectHTMLToDoTabDisplay(toDoMasterList.list[i]);
                }
            }
            
        }
        toDoGeneralTab.click();
    })
    toDoTabActive.addEventListener("click", (event) => {
        console.log("Fired - Clicked toDoTabActive");

        deselectAllToDoTab();
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

        /* call to resetDisplayToDoAddUpdate clears wr num from add tab - saving temporarily and resetting if exists */
        let tempNum = addTabNewWorkRequestNumber.value;
        /* Reseting (Actually used for initializing) add To-Do display */
        resetDisplayToDoAddUpdate();

        if (tempNum != undefined) {
            addTabNewWorkRequestNumber.value = tempNum;
        }

        filterCheckboxAddWr.click();

        permitDateChangeValues = [addTabPermitDateApplied.value, addTabPermitStart.value, addTabPermitExpiration.value];


        if (addTabNewWorkRequestNumber.value != undefined && getWr(addTabNewWorkRequestNumber.value, allWrList)[0] != false) {
            addTabGetButton.disabled = false;
        }
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
        if (searchBySelectionCheckbox.checked == true) {
            searchByWrCheckbox.checked = true;
        } else {
            filterCheckboxPriorityNumber.checked = true;
            trimByAll.checked = true;
        }
        if (allWrList.length > 0) {
            injectHTMLPermitsTabDisplay(allWrList, currentPagePermits, userColors);
            console.log("List updated");
        } else {
            console.log("List not updated.");
            console.log("allWrList.length = " + allWrList.length);
        }
    })
    permitsTabActive.addEventListener("click", (event) => {
        console.log("Fired - clicked add_tab_active");

        deselectAllPermitsTab();
    })

                /* Add Comment Tab */
    function hideActiveAddCommentTypeFilters() {
        console.log("Entered - hideAddCommentTypeFilters()");

        addCommentFilterTabAllActive.classList.add("hidden");
        addCommentFilterTabGeneralActive.classList.add("hidden");
        addCommentFilterTabPermitActive.classList.add("hidden");

        addCommentFilterTabAll.classList.remove("hidden");
        addCommentFilterTabGeneral.classList.remove("hidden");
        addCommentFilterTabPermit.classList.remove("hidden");

    }
    function getGeneralComments() {
        console.log("Entered - getGeneralComments");

        let generalComments = [];

        for (var i = 0; i < tempAllComments.list.length; i++) {
            if (tempAllComments.list[i].type == "General") {
                generalComments.push(tempAllComments.list[i]);
            }
        }
        return generalComments;
    }
    function getPermitComments() {
        console.log("Entered - getPermitComments");

        let permitComments = [];

        for (var i = 0; i < tempAllComments.list.length; i++) {
            if (tempAllComments.list[i].type == "Permit") {
                permitComments.push(tempAllComments.list[i]);
            }
        }
        return permitComments;
    }
                    /* All Comments */
    addCommentFilterTabAll.addEventListener("click", (event) => {
        console.log("Fired - Clicked addCommentFilterTabAll");

        hideActiveAddCommentTypeFilters();
        addCommentFilterTabAll.classList.add("hidden");
        addCommentFilterTabAllActive.classList.remove("hidden");
        
        addCommentTabExistingComments.innerHTML = "";
        for (var i = tempAllComments.list.length - 1; i >= 0; i--) {
            injectHTMLAddCommentTabComment(tempAllComments.list[i], i);
        }
        if (tempAllComments.list.length == 0) {
            addCommentTabExistingComments.innerHTML = "No Comments";
        }
    })
    addCommentFilterTabAllActive.addEventListener("click", (event) => {
        console.log("Fired - Clicked addCommentFilterTabAllActive");

        /* Not letting user deselect from "All" */
    })
                    /* General Comments */
    addCommentFilterTabGeneral.addEventListener("click", (event) => {
        console.log("Fired - Clicked addCommentFilterTabGeneral");
                
        hideActiveAddCommentTypeFilters();
        addCommentFilterTabGeneral.classList.add("hidden");
        addCommentFilterTabGeneralActive.classList.remove("hidden");

        const filteredList = getGeneralComments();
        
        addCommentTabExistingComments.innerHTML = "";
        for (var i = filteredList.length - 1; i >= 0; i--) {
            injectHTMLAddCommentTabComment(filteredList[i], i);
        }
        if (filteredList.length == 0) {
            addCommentTabExistingComments.innerHTML = "No \"General\" Comments";
        }
    })
    addCommentFilterTabGeneralActive.addEventListener("click", (event) => {
        console.log("Fired - Clicked addCommentFilterTabGeneralActive");
        
        addCommentFilterTabAll.click(); // basically setting default value to "All"
    })
                    /* Permit Comments */
    addCommentFilterTabPermit.addEventListener("click", (event) => {
        console.log("Fired - Clicked addCommentFilterTabPermit");
                                
        hideActiveAddCommentTypeFilters();
        addCommentFilterTabPermit.classList.add("hidden");
        addCommentFilterTabPermitActive.classList.remove("hidden");

        const filteredList = getPermitComments();
        
        addCommentTabExistingComments.innerHTML = "";
        for (var i = filteredList.length - 1; i >= 0; i--) {
            injectHTMLAddCommentTabComment(filteredList[i], i);
        }
        if (filteredList.length == 0) {
            addCommentTabExistingComments.innerHTML = "No \"Permit\" Comments";
        }
    })
    addCommentFilterTabPermitActive.addEventListener("click", (event) => {
        console.log("Fired - Clicked addCommentFilterTabPermitActive");
                        
        addCommentFilterTabAll.click(); // basically setting default value to "All"
    })
    
}
document.addEventListener("DOMContentLoaded", async () => mainEvent());