export const assetUrl = "https://dubaievisaservice.com/assets/"
export const genders = [
    {id: 1, name: "Male"},
    {id: 2, name: "Female"},
    {id: 3, name: "Others"}
];

export const groups = [
    {id: 1, name: "Main Person"},
    {id: 2, name: "Son Of Main Person"},
    {id: 3, name: "Daughter Of Main Person"},
    {id: 4, name: "Wife Of Main Person"}
];
export const jobTypes = [
    {id: 1, name: "Full Time"},
    {id: 2, name: "Part Time"}
];

export const maritalStatuses = [
    {id: 1, name: "Single"},
    {id: 2, name: "Married"},
    {id: 3, name: "Divorced"}
];

export const visaProcessingTypes = [
    {id: 1, name: "Normal"},
    {id: 2, name: "Urgent"},
    {id: 3, name: "A2A"},
    {id: 4, name: "Renewal"}
];

export const visaStatuses = [
    {id: 1, name: "Pending"},
    {id: 2, name: "Processing"},
    {id: 3, name: "Approved"},
    {id: 4, name: "Reject"}
];

export const visaTypes = [
    {id: 1, name: "Short Term Visa"},
    {id: 2, name: "Long Term Visa"},
    {id: 3, name: "Multiple 30 Days Visa"},
    {id: 4, name: "14 Days Visa"},
    {id: 5, name: "96 Hours Visa"}
];

export const languageProficiency = [
    {id: 1, name: "Beginner"},
    {id: 2, name: "Intermediate"},
    {id: 3, name: "Advanced"},
    {id: 4, name: "Fluent"},
    {id: 5, name: "Native"}
];
export const permissions = [
    {name: "View Admin", value: "admin.view"},
    {name: "Create Admin", value: "admin.create"},
    {name: "Edit Admin", value: "admin.edit"},
    {name: "Delete Admin", value: "admin.delete"},
    {name: "View Role", value: "role.view"},
    {name: "Create Role", value: "role.create"},
    {name: "Edit Role", value: "role.edit"},
    {name: "Delete Role", value: "role.delete"},
    {name: "View Agency", value: "agency.view"},
    {name: "Create Agency", value: "agency.create"},
    {name: "Edit Agency", value: "agency.edit"},
    {name: "Delete Agency", value: "agency.delete"},
    {name: "View Single Agency", value: "agency.single-view"},
    {name: "Approve Agency", value: "agency.approve"},
    {name: "View Visa", value: "visa.view"},
    {name: "View Single Visa", value: "visa.single-view"},
    {name: "Create Visa", value: "visa.create"},
    {name: "Edit Visa", value: "visa.edit"},
    {name: "Delete Visa", value: "visa.delete"},
    {name: "Add Document to Visa", value: "visa.add.document"},
    {name: "Delete Visa Document", value: "visa.delete.document"},
    {name: "Change Visa Status", value: "visa.status.change"},
    {name: "View Job Post", value: "job-post.view"},
    {name: "View Job Apply", value: "job-post.single-view"},
    {name: "View Single Job Apply", value: "job-apply.single-view"},
    {name: "Create Job Post", value: "job-post.create"},
    {name: "Edit Job Post", value: "job-post.edit"},
    {name: "Delete Job Post", value: "job-post.delete"},
    {name: "View User", value: "user.view"},
    {name: "Create User", value: "user.create"}
];

export const permissionEnums = {
    VIEW_ADMIN: "admin.view",
    CREATE_ADMIN: "admin.create",
    EDIT_ADMIN: "admin.edit",
    DELETE_ADMIN: "admin.delete",
    VIEW_ROLE: "role.view",
    CREATE_ROLE: "role.create",
    EDIT_ROLE: "role.edit",
    DELETE_ROLE: "role.delete",
    VIEW_AGENCY: "agency.view",
    CREATE_AGENCY: "agency.create",
    EDIT_AGENCY: "agency.edit",
    DELETE_AGENCY: "agency.delete",
    VIEW_SINGLE_AGENCY: "agency.single-view",
    APPROVE_AGENCY: "agency.approve",
    VIEW_VISA: "visa.view",
    VIEW_SINGLE_VISA: "visa.single-view",
    CREATE_VISA: "visa.create",
    EDIT_VISA: "visa.edit",
    DELETE_VISA: "visa.delete",
    ADD_DOCUMENT_TO_VISA: "visa.add.document",
    DELETE_DOCUMENT_VISA: "visa.delete.document",
    CHANGE_VISA_STATUS: "visa.status.change",
    VIEW_JOB_POST: "job-post.view",
    VIEW_SINGLE_JOB_POST: "job-post.single-view",
    VIEW_SINGLE_JOB_APPLY: "job-apply.single-view",
    CREATE_JOB_POST: "job-post.create",
    EDIT_JOB_POST: "job-post.edit",
    DELETE_JOB_POST: "job-post.delete",
    VIEW_USER: "user.view",
    CREATE_USER: "user.create"
};


export const documentTypes = {
    passport: {type: "passport", name: "Passport Page 1"},
    photo: {type: "photo", name: "Photo"},
    deposit: {type: "deposit", name: "Deposit Paper"},
    id: {type: "id", name: "ID Card"},
    residence: {type: "residence", name: "Residence Letter"},
    sponsor: {type: "sponsor", name: "Sponsor Letter"},
    health: {type: "health", name: "Health Insurance"},
    return_ticker: {type: "return_ticker", name: "Return Ticket"},
    bank: {type: "bank", name: "Bank Statement"},
    proof: {type: "proof", name: "Proof of Employment"},
    additional1: {type: "additional1", name: "Additional Document 1"},
    additional2: {type: "additional2", name: "Additional Document 2"}
};
export const VisaApplyTableHeading = ['No', 'Name', 'Passport No', 'Status', 'Apply Date', 'Action']

export const jobApplyDocuments = [
    {name: "Passport Copy", type: "passport-copy", file: null},
    {name: "Visa Copy", type: "visa-copy", file: null},
    {name: "Apply Picture", type: "apply-picture", file: null},
    {name: "National ID", type: "national-id", file: null},
    {name: "Emirates ID", type: "emirates-id", file: null},
    {name: "Change Status", type: "change-status", file: null},
    {name: "Pre Medical Test", type: "pre-medical-test", file: null},
    {name: "Vaccine Certificate", type: "vaccine-certificate", file: null},
    {name: "MOL Paper", type: "mol-paper", file: null},
    {name: "Labor Card", type: "labor-card", file: null},
    {name: "eVisa", type: "e-visa", file: null},
    {name: "Attested Visa", type: "attested-visa", file: null},
    {name: "TTC Certificate", type: "ttc-certificate", file: null},
    {name: "BMET Card", type: "bmet-card", file: null},
    {name: "Ticket", type: "ticket", file: null},
    {name: "Medical UAE", type: "medical-uae", file: null},
    {name: "Stamping Visa", type: "stamping-visa", file: null},
    {name: "Eye Test", type: "eye-test", file: null},
    {name: "Company NOC", type: "company-noc", file: null},
    {name: "License NOC", type: "license-noc", file: null},
    {name: "Driving License", type: "driving-license", file: null},
    {name: "Driving License (UAE)", type: "driving-license-uae", file: null},
    {name: "Certificate (Academic)", type: "certificate-academic", file: null},
    {name: "Certificate 2", type: "certificate-2", file: null},
    {name: "Trade License | Others", type: "trade-license-others", file: null},
    {name: "Email | UAE Pass | Info", type: "email-uae-pass-info", file: null}
];

export const joDemand = [
    {id: 1, name: "Yes"},
    {id: 2, name: "No"},
];
