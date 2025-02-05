// export const assetUrl = "https://local.evisa.com/assets/"
export const assetUrl = "http://dubaievisaservice.com/"
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
    {name: "Delete Role", value: "role.delete"}
]

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
    { name: "Passport Copy", type: "passport-copy", file: null },
    { name: "Visa Copy", type: "visa-copy", file: null },
    { name: "Apply Picture", type: "apply-picture", file: null },
    { name: "National ID", type: "national-id", file: null },
    { name: "Emirates ID", type: "emirates-id", file: null },
    { name: "Change Status", type: "change-status", file: null },
    { name: "Pre Medical Test", type: "pre-medical-test", file: null },
    { name: "Vaccine Certificate", type: "vaccine-certificate", file: null },
    { name: "MOL Paper", type: "mol-paper", file: null },
    { name: "Labor Card", type: "labor-card", file: null },
    { name: "eVisa", type: "e-visa", file: null },
    { name: "Attested Visa", type: "attested-visa", file: null },
    { name: "TTC Certificate", type: "ttc-certificate", file: null },
    { name: "BMET Card", type: "bmet-card", file: null },
    { name: "Ticket", type: "ticket", file: null },
    { name: "Medical UAE", type: "medical-uae", file: null },
    { name: "Stamping Visa", type: "stamping-visa", file: null },
    { name: "Eye Test", type: "eye-test", file: null },
    { name: "Company NOC", type: "company-noc", file: null },
    { name: "License NOC", type: "license-noc", file: null },
    { name: "Driving License", type: "driving-license", file: null },
    { name: "Driving License (UAE)", type: "driving-license-uae", file: null },
    { name: "Certificate (Academic)", type: "certificate-academic", file: null },
    { name: "Certificate 2", type: "certificate-2", file: null },
    { name: "Trade License | Others", type: "trade-license-others", file: null },
    { name: "Email | UAE Pass | Info", type: "email-uae-pass-info", file: null }
];
