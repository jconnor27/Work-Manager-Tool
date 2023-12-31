
function displayNodeList(nodeList) {
    console.log("Entered - displayNodeList");

    nodeList.forEach((node) => {
        console.log(node);
    })
}

function injectHTMLAddTabWrComment(comment) {
    console.log("Fired - injectHTMLAddTabWrComment");
    const target = document.querySelector("#add_tab_wr_comments_to_add");

    let temp = document.getElementById("add_tab_wr_comments_to_add");
    const count = temp.childNodes.length;

    target.innerHTML += `<li class="addTabWrCommentsListElement">${comment}</li>`;
/*
    if (count != 0) {
        console.log("Testing - entered target.length != 0");

        /*temp = "target";
        target.innerHTML = "";
        temp.forEach((item) => {
            const str = `<li class=addTabWrCommentsListElement">${item}</li>`;
            target.innerHTML += str;
        })*//*
        target.innerHTML += `<li class="addTabWrCommentsListElement">${comment}</li>`;
    } else {
        console.log("Testing - entered else, target.length == 0");
        target.innerHTML = `<li class="addTabWrCommentsListElement">${comment}</li>`;
    }*/
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

        /* Dropdown Menu Boxes */
    const dropdownMenuBoxAddTabWrType = document.querySelector("#dropdown_menu_box_add_tab_wr_type");
    const addTabTextfieldCrd = document.querySelector("#add_tab_textfield_crd");
    const addTabTextfieldRcd = document.querySelector("#add_tab_textfield_rcd");
    const dropdownMenuBoxAddTabGeneralStatus = document.querySelector("#dropdown_menu_box_add_tab_general_status");
    const dropdownMenuBoxAddTabPermitStatus = document.querySelector("#dropdown_menu_box_add_tab_permit_status");
    const dropdownMenuBoxAddTabEasementRequestStatus = document.querySelector("#dropdown_menu_box_add_tab_easement_request_status");

        /* Dropdown Menu Options */
            /* Add Tab Wr Type */
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


    /* Variable */
    let addTabCommentsTextfieldInput = [];


    


    /* Add New Work Request Event Listeners */

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
    })

    customerContactedCheckboxYes.addEventListener("click", (event) => {
        console.log("Fired - Clicked customer_contacted_checkbox_yes");

        if (customerContactedCheckboxNo.checked) {
            customerContactedCheckboxNo.checked = false /* Unchecking "No" box */
        }
    })

        /* Dropdowns */
    function clearDropdownMenuBoxAddTabWrType() {
        console.log("Entered - clearDropdownMenuBoxAddTabWrType");

        dropdownMenuBoxOptionAddTabWrTypeDrnu.classList.add("hidden");
        dropdownMenuBoxOptionAddTabWrTypeDrou.classList.add("hidden");
        dropdownMenuBoxOptionAddTabWrTypeDrno.classList.add("hidden");
    }

            /* Easement Request Status Dropdowns */
    function clearDropdownMenuBoxAddTabWrEasementRequest() {
        console.log("Entered - clearDropdownMenuBoxAddTabWrEasementRequest");

        dropdownMenuBoxOptionAddTabWrEasementRequestStatusHaventChecked.classList.add("hidden");
        dropdownMenuBoxOptionAddTabWrEasementRequestStatusNeedSubmit.classList.add("hidden");
        dropdownMenuBoxOptionAddTabWrEasementRequestStatusPending.classList.add("hidden");
        dropdownMenuBoxOptionAddTabWrEasementRequestStatusDontNeed.classList.add("hidden");
        dropdownMenuBoxOptionAddTabWrEasementRequestStatusHaveEasement.classList.add("hidden");
        dropdownMenuBoxOptionAddTabWrEasementRequestStatusNeedEasement.classList.add("hidden");
        dropdownMenuBoxOptionAddTabWrEasementRequestStatusWaitingCustomer.classList.add("hidden");
        dropdownMenuBoxOptionAddTabWrEasementRequestStatusWaitingCreation.classList.add("hidden");
    }

    dropdownMenuOptionAddTabWrEasementRequestStatusWaitingCreation.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_easement_request_status_waiting_creation");
        clearDropdownMenuBoxAddTabWrEasementRequest();

        dropdownMenuBoxOptionAddTabWrEasementRequestStatusWaitingCreation.classList.remove("hidden");
    })

    dropdownMenuOptionAddTabWrEasementRequestStatusWaitingCustomer.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_easement_request_status_waiting_customer");
        clearDropdownMenuBoxAddTabWrEasementRequest();

        dropdownMenuBoxOptionAddTabWrEasementRequestStatusWaitingCustomer.classList.remove("hidden");
    })

    dropdownMenuOptionAddTabWrEasementRequestStatusNeedEasement.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_easement_request_status_need_easement");
        clearDropdownMenuBoxAddTabWrEasementRequest();

        dropdownMenuBoxOptionAddTabWrEasementRequestStatusNeedEasement.classList.remove("hidden");
    })

    dropdownMenuOptionAddTabWrEasementRequestStatusHaveEasement.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_easement_request_status_have_easement");
        clearDropdownMenuBoxAddTabWrEasementRequest();

        dropdownMenuBoxOptionAddTabWrEasementRequestStatusHaveEasement.classList.remove("hidden");
    })

    dropdownMenuOptionAddTabWrEasementRequestStatusDontNeed.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_easement_request_status_dont_need");
        clearDropdownMenuBoxAddTabWrEasementRequest();

        dropdownMenuBoxOptionAddTabWrEasementRequestStatusDontNeed.classList.remove("hidden");
    })

    dropdownMenuOptionAddTabWrEasementRequestStatusPending.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_easement_request_status_pending");
        clearDropdownMenuBoxAddTabWrEasementRequest();

        dropdownMenuBoxOptionAddTabWrEasementRequestStatusPending.classList.remove("hidden");
    })

    dropdownMenuOptionAddTabWrEasementRequestStatusNeedSubmit.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_easement_request_status_need_submit");
        clearDropdownMenuBoxAddTabWrEasementRequest();

        dropdownMenuBoxOptionAddTabWrEasementRequestStatusNeedSubmit.classList.remove("hidden");
    })

    dropdownMenuOptionAddTabWrEasementRequestStatusHaventChecked.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_easement_request_status_havent_checked");
        clearDropdownMenuBoxAddTabWrEasementRequest();

        dropdownMenuBoxOptionAddTabWrEasementRequestStatusHaventChecked.classList.remove("hidden");
    })

            /* Permit Status Dropdowns */
    function clearDropdownMenuBoxAddTabWrPermitStatus() {
        console.log("Entered - clearDropdownMenuBoxAddTabWrPermitStatus");
        
        dropdownMenuBoxOptionAddTabWrPermitStatusApplied.classList.add("hidden");
        dropdownMenuBoxOptionAddTabWrPermitStatusReceived.classList.add("hidden");
        dropdownMenuBoxOptionAddTabWrPermitStatusExpiringSoon.classList.add("hidden");
        dropdownMenuBoxOptionAddTabWrPermitStatusExpired.classList.add("hidden");
        dropdownMenuBoxOptionAddTabWrPermitStatusExtensionSubmitted.classList.add("hidden");
        dropdownMenuBoxOptionAddTabWrPermitStatusExtensionReceived.classList.add("hidden");
        dropdownMenuBoxOptionAddTabWrPermitStatusDontNeed.classList.add("hidden");
        dropdownMenuBoxOptionAddTabWrPermitStatusHaventChecked.classList.add("hidden");         
    }

    dropdownMenuOptionAddTabWrPermitStatusHaventChecked.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_permit_status_havent_checked");
        clearDropdownMenuBoxAddTabWrPermitStatus();

        dropdownMenuBoxOptionAddTabWrPermitStatusHaventChecked.classList.remove("hidden");
    })

    dropdownMenuOptionAddTabWrPermitStatusDontNeed.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_permit_status_dont_need");
        clearDropdownMenuBoxAddTabWrPermitStatus();

        dropdownMenuBoxOptionAddTabWrPermitStatusDontNeed.classList.remove("hidden");
    })

    dropdownMenuOptionAddTabWrPermitStatusExtensionReceived.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_permit_status_extension_received");
        clearDropdownMenuBoxAddTabWrPermitStatus();

        dropdownMenuBoxOptionAddTabWrPermitStatusExtensionReceived.classList.remove("hidden");
    })

    dropdownMenuOptionAddTabWrPermitStatusExtensionSubmitted.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_permit_status_extension_submitted");
        clearDropdownMenuBoxAddTabWrPermitStatus();

        dropdownMenuBoxOptionAddTabWrPermitStatusExtensionSubmitted.classList.remove("hidden");
    })

    dropdownMenuOptionAddTabWrPermitStatusExpired.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_permit_status_expired");
        clearDropdownMenuBoxAddTabWrPermitStatus();

        dropdownMenuBoxOptionAddTabWrPermitStatusExpired.classList.remove("hidden");
    })

    dropdownMenuOptionAddTabWrPermitStatusExpiringSoon.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_permit_status_expiring_soon");
        clearDropdownMenuBoxAddTabWrPermitStatus();

        dropdownMenuBoxOptionAddTabWrPermitStatusExpiringSoon.classList.remove("hidden");
    })
   
    dropdownMenuOptionAddTabWrPermitStatusReceived.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_permit_status_received");
        clearDropdownMenuBoxAddTabWrPermitStatus();

        dropdownMenuBoxOptionAddTabWrPermitStatusReceived.classList.remove("hidden");
    })

    dropdownMenuOptionAddTabWrPermitStatusApplied.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_permit_status_applied");
        clearDropdownMenuBoxAddTabWrPermitStatus();

        dropdownMenuBoxOptionAddTabWrPermitStatusApplied.classList.remove("hidden");
    })

            /* General Status Dropdowns */    
    function clearDropdownMenuBoxAddTabWrGeneralStatus() {
        console.log("Entered - clearDropdownMenuBoxAddTabWrGeneralStatus");

        dropdownMenuBoxOptionAddTabWrGeneralStatusWaitingLL.classList.add("hidden");
        dropdownMenuBoxOptionAddTabWrGeneralStatusVisit.classList.add("hidden");
        dropdownMenuBoxOptionAddTabWrGeneralStatusServiceCalcs.classList.add("hidden");
        dropdownMenuBoxOptionAddTabWrGeneralStatusCheckPermit.classList.add("hidden");
        dropdownMenuBoxOptionAddTabWrGeneralStatusCheckEasementRequest.classList.add("hidden");
        dropdownMenuBoxOptionAddTabWrGeneralStatusDesign.classList.add("hidden");
        dropdownMenuBoxOptionAddTabWrGeneralStatusReviewPeer.classList.add("hidden");
        dropdownMenuBoxOptionAddTabWrGeneralStatusReviewCoordinator.classList.add("hidden");
        dropdownMenuBoxOptionAddTabWrGeneralStatusRevisions.classList.add("hidden");
        dropdownMenuBoxOptionAddTabWrGeneralStatusWaitingCustomerNotApproved.classList.add("hidden");
        dropdownMenuBoxOptionAddTabWrGeneralStatusWaitingCustomerApproved.classList.add("hidden");
        dropdownMenuBoxOptionAddTabWrGeneralStatusFlag.classList.add("hidden");
        dropdownMenuBoxOptionAddTabWrGeneralStatus7010.classList.add("hidden");
        dropdownMenuBoxOptionAddTabWrGeneralStatusCancle.classList.add("hidden");
    }

    dropdownMenuOptionAddTabWrGeneralStatusCancle.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_general_status_cancle");
        clearDropdownMenuBoxAddTabWrGeneralStatus();

        dropdownMenuBoxOptionAddTabWrGeneralStatusCancle.classList.remove("hidden");
    })

    dropdownMenuOptionAddTabWrGeneralStatus7010.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_general_status_7010");
        clearDropdownMenuBoxAddTabWrGeneralStatus();

        dropdownMenuBoxOptionAddTabWrGeneralStatus7010.classList.remove("hidden");
    })

    dropdownMenuOptionAddTabWrGeneralStatusFlag.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_general_status_flag");
        clearDropdownMenuBoxAddTabWrGeneralStatus();

        dropdownMenuBoxOptionAddTabWrGeneralStatusFlag.classList.remove("hidden");
    })

    dropdownMenuOptionAddTabWrGeneralStatusWaitingCustomerApproved.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_general_status_waiting_customer_approved");
        clearDropdownMenuBoxAddTabWrGeneralStatus();

        dropdownMenuBoxOptionAddTabWrGeneralStatusWaitingCustomerApproved.classList.remove("hidden");
    })

    dropdownMenuOptionAddTabWrGeneralStatusWaitingCustomerNotApproved.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_general_status_waiting_customer_not_approved");
        clearDropdownMenuBoxAddTabWrGeneralStatus();

        dropdownMenuBoxOptionAddTabWrGeneralStatusWaitingCustomerNotApproved.classList.remove("hidden");
    })

    dropdownMenuOptionAddTabWrGeneralStatusRevisions.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_general_status_revisions");
        clearDropdownMenuBoxAddTabWrGeneralStatus();

        dropdownMenuBoxOptionAddTabWrGeneralStatusRevisions.classList.remove("hidden");
    })

    dropdownMenuOptionAddTabWrGeneralStatusReviewCoordinator.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_general_status_review_coordinator");
        clearDropdownMenuBoxAddTabWrGeneralStatus();

        dropdownMenuBoxOptionAddTabWrGeneralStatusReviewCoordinator.classList.remove("hidden");
    })

    dropdownMenuOptionAddTabWrGeneralStatusReviewPeer.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_general_status_review_peer");
        clearDropdownMenuBoxAddTabWrGeneralStatus();

        dropdownMenuBoxOptionAddTabWrGeneralStatusReviewPeer.classList.remove("hidden");
    })

    dropdownMenuOptionAddTabWrGeneralStatusDesign.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_general_status_design");
        clearDropdownMenuBoxAddTabWrGeneralStatus();

        dropdownMenuBoxOptionAddTabWrGeneralStatusDesign.classList.remove("hidden");
    })

    dropdownMenuOptionAddTabWrGeneralStatusCheckEasementRequest.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_general_status_check_easement_request");
        clearDropdownMenuBoxAddTabWrGeneralStatus();

        dropdownMenuBoxOptionAddTabWrGeneralStatusCheckEasementRequest.classList.remove("hidden");
    })

    dropdownMenuOptionAddTabWrGeneralStatusCheckPermit.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_general_status_check_permit");
        clearDropdownMenuBoxAddTabWrGeneralStatus();

        dropdownMenuBoxOptionAddTabWrGeneralStatusCheckPermit.classList.remove("hidden");
    })

    dropdownMenuOptionAddTabWrGeneralStatusServiceCalcs.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_general_status_service_calcs");
        clearDropdownMenuBoxAddTabWrGeneralStatus();

        dropdownMenuBoxOptionAddTabWrGeneralStatusServiceCalcs.classList.remove("hidden");
    })

    dropdownMenuOptionAddTabWrGeneralStatusVisit.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_general_status_visit");
        clearDropdownMenuBoxAddTabWrGeneralStatus();

        dropdownMenuBoxOptionAddTabWrGeneralStatusVisit.classList.remove("hidden");
    })

    dropdownMenuOptionAddTabWrGeneralStatusWaitingLL.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_general_status_waiting_ll");
        clearDropdownMenuBoxAddTabWrGeneralStatus();

        dropdownMenuBoxOptionAddTabWrGeneralStatusWaitingLL.classList.remove("hidden");
    })

    dropdownMenuOptionAddTabWrGeneralStatusBlank.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_general_status_blank");
        clearDropdownMenuBoxAddTabWrGeneralStatus();
    })

            /* Type Dropdowns */
    dropdownMenuOptionAddTabWrTypeBlank.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_options_add_tab_wr_type_blank");
        clearDropdownMenuBoxAddTabWrType();
    })

    dropdownMenuOptionAddTabWrTypeDrnu.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_option_add_tab_wr_type_drnu");

        clearDropdownMenuBoxAddTabWrType();

        dropdownMenuBoxOptionAddTabWrTypeDrnu.classList.remove("hidden");
    })

    dropdownMenuOptionAddTabWrTypeDrou.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_option_add_tab_wr_type_drou");

        clearDropdownMenuBoxAddTabWrType();

        dropdownMenuBoxOptionAddTabWrTypeDrou.classList.remove("hidden");
    })

    dropdownMenuOptionAddTabWrTypeDrno.addEventListener("click", (event) => {
        console.log("Fired - Clicked dropdown_menu_option_add_tab_wr_type_drno");

        clearDropdownMenuBoxAddTabWrType();

        dropdownMenuBoxOptionAddTabWrTypeDrno.classList.remove("hidden");
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