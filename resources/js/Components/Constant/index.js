// export const assetUrl = "https://dubaievisaservice.com/assets/"
// export const assetUrl = "http://127.0.0.1:8000/assets/"
export const assetUrl = "http://127.0.0.1:8001/assets/"
export const genders = [
    {id: 1, name: "Male"},
    {id: 2, name: "Female"},
    {id: 3, name: "Others"}
];

export const bloodGroups = [
    {id: "A+", name: "A+"},
    {id: "A-", name: "A-"},
    {id: "B+", name: "B+"},
    {id: "B-", name: "B-"},
    {id: "AB+", name: "AB+"},
    {id: "AB-", name: "AB-"},
    {id: "O+", name: "O+"},
    {id: "O-", name: "O-"}
];
;
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
    {id: 1, name: "VISIT VISA"},
    {id: 2, name: "EMPLOYMENT VISA"},
    {id: 3, name: "INVESTOR / PARTNER VISA"},
    {id: 4, name: "DOMESTIC WORKER"},
    {id: 5, name: "FREE ZONE / FREELANCER"},
    {id: 6, name: "FAMILY VISA"},
    {id: 7, name: "STUDENT VISA"}
];

export const jobDirectory = [
    {id: 1, name: "READY JOB"},
    {id: 2, name: "NEW JOB"},
];

export const languageProficiency = [
    {id: 1, name: 'Good'},
    {id: 2, name: 'Fair'},
    {id: 3, name: 'Poor'}
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
    {name: "View Job Demand", value: "job-post.view"},
    {name: "View Job Apply", value: "job-post.single-view"},
    {name: "View Single Job Apply", value: "job-apply.single-view"},
    {name: "Create Job Demand", value: "job-post.create"},
    {name: "Edit Job Demand", value: "job-post.edit"},
    {name: "Delete Job Demand", value: "job-post.delete"},
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

export const regions = [
    {id: 1, name: "Inside UAE"},
    {id: 2, name: "Outside UAE"},
];

export const shirtSizes = [
    {id: 'S', name: 'S'},
    {id: 'M', name: 'M'},
    {id: 'L', name: 'L'},
    {id: 'XL', name: 'XL'},
    {id: 'XXL', name: 'XXL'}
];

export const postForApply = [
    {id: 1, value: "drivers", name: "Drivers"},
    {id: 2, value: "bike_rider", name: "Bike Rider"},
    {id: 3, value: "cleaner", name: "Cleaner"},
    {id: 4, value: "painter", name: "Painter"},
    {id: 5, value: "design_painter", name: "Design Painter"},
    {id: 6, value: "mason", name: "Mason"},
    {id: 7, value: "mason_helper", name: "Mason Helper"},
    {id: 8, value: "plumber", name: "Plumber"},
    {id: 9, value: "steel_fixer", name: "Steel Fixer"},
    {id: 10, value: "carpenter", name: "Carpenter"},
    {id: 11, value: "finishing_carpenter", name: "Finishing Carpenter"},
    {id: 12, value: "gypsum_worker", name: "Gypsum Worker"},
    {id: 13, value: "gypsum_designer", name: "Gypsum Designer"},
    {id: 14, value: "construction_helper", name: "Construction Helper"},
    {id: 15, value: "general_helper", name: "General Helper"},
    {id: 16, value: "welder", name: "Welder"},
    {id: 17, value: "aluminum_worker", name: "Aluminum Worker"},
    {id: 18, value: "glass_aluminum", name: "Glass & Aluminum"},
    {id: 19, value: "steel_fabrication", name: "Steel Fabrication"},
    {id: 20, value: "general_labour", name: "General Labour"},
    {id: 21, value: "ordinary_labour", name: "Ordinary Labour"},
    {id: 22, value: "loading_unloading", name: "Loading & Unloading"},
    {id: 23, value: "warehouse_worker", name: "Warehouse Worker"},
    {id: 24, value: "delivery_helper", name: "Delivery Helper"},
    {id: 25, value: "garments", name: "Garments"},
    {id: 26, value: "tailor", name: "Tailor"},
    {id: 27, value: "abaya_tailor", name: "Abaya Tailor"},
    {id: 28, value: "curtain_tailor", name: "Curtain Tailor"},
    {id: 29, value: "car_seat_tailor", name: "Car Seat Tailor"},
    {id: 30, value: "restaurant", name: "Restaurant"},
    {id: 31, value: "cafeteria", name: "Cafeteria"},
    {id: 32, value: "laundry", name: "Laundry"},
    {id: 33, value: "car_wash", name: "Car Wash"},
    {id: 34, value: "sign_maker", name: "Sign Maker"},
    {id: 35, value: "sticker_pester", name: "Sticker Pester"},
    {id: 36, value: "wall_matt_pester", name: "Wall Matt Pester"},
    {id: 37, value: "garage", name: "Garage"},
    {id: 38, value: "car_painter", name: "Car Painter"},
    {id: 39, value: "powder_coating", name: "Powder Coating"},
    {id: 40, value: "engineering", name: "Engineering"},
    {id: 41, value: "workshop", name: "Workshop"},
    {id: 42, value: "turning_workshop", name: "Turning Workshop"},
    {id: 43, value: "natur_watchman", name: "Natur (Watchman)"},
    {id: 44, value: "security", name: "Security"},
    {id: 45, value: "beauty_saloon", name: "Beauty Saloon"},
    {id: 46, value: "ladies_barber", name: "Ladies Barber (Hairdresser)"},
    {id: 47, value: "messenger", name: "Messenger"},
    {id: 48, value: "maid", name: "Maid"},
    {id: 49, value: "baby_sitter", name: "Baby Sitter"},
    {id: 50, value: "khaddama", name: "Khaddama"},
    {id: 51, value: "tabbak", name: "Tabbak"},
    {id: 52, value: "juarf", name: "Juarf"},
    {id: 53, value: "agriculture", name: "Agriculture"},
    {id: 54, value: "free_launcher", name: "Free Launcher"},
    {id: 55, value: "investor_visa", name: "Investor Visa"},
    {id: 56, value: "only_visa", name: "Only Visa"},
    {id: 57, value: "management_staff", name: "Management Staff"},
    {id: 58, value: "hr_officer", name: "HR Officer"},
    {id: 59, value: "finance_manager", name: "Finance Manager"},
    {id: 60, value: "sales_manager", name: "Sales Manager"},
    {id: 61, value: "sales_staff", name: "Sales Staff"},
    {id: 62, value: "sales_executive", name: "Sales Executive"},
    {id: 63, value: "sales_supervisor", name: "Sales Supervisor"},
    {id: 64, value: "sales_representative", name: "Sales Representative"},
    {id: 65, value: "site_supervisor", name: "Site Supervisor"},
    {id: 66, value: "marketing_specialist", name: "Marketing Specialist"},
    {id: 67, value: "executive_secretary", name: "Executive Secretary"},
    {id: 68, value: "accountants", name: "Accountants"},
    {id: 69, value: "accounts_clerk", name: "Accounts Clerk"},
    {id: 70, value: "administration_officer", name: "Administration Officer"},
    {id: 71, value: "reservation_officer", name: "Reservation Officer"},
    {id: 72, value: "public_relation_officer", name: "Public Relation Officer"},
    {id: 73, value: "customer_service_representative", name: "Customer Service Representative"},
    {id: 74, value: "call_center_agents", name: "Call Center Agents"},
    {id: 75, value: "administration_clerk", name: "Administration Clerk"},
    {id: 76, value: "customs_clearing_clerk", name: "Customs Clearing Clerk"},
    {id: 77, value: "customs_clearing_agent", name: "Customs Clearing Agent"},
    {id: 78, value: "customs_representative", name: "Customs Representative"},
    {id: 79, value: "cash_desk_clerk", name: "Cash Desk Clerk"},
    {id: 80, value: "clerk_assistant", name: "Clerk Assistant"},
    {id: 81, value: "archive_clerk", name: "Archive Clerk"},
    {id: 82, value: "quantity_surveyor", name: "Quantity Surveyor"},
    {id: 83, value: "computer_operator", name: "Computer Operator"},
];


export const drivingLicenses = [
    {id: 1, name: "Light motor vehicle (Manual)"},
    {id: 2, name: "Light motor vehicle (Auto)"},
    {id: 3, name: "Motorcycle"},
    {id: 4, name: "Heavy truck"},
    {id: 5, name: "Mini bus"},
    {id: 6, name: "Heavy bus"},
    {id: 7, name: "Fork lift"},
    {id: 8, name: "Shovel"},
];

export const religions = [
    {id: 1, name: "Sunni Muslim"},
    {id: 2, name: "Shiite Muslim"},
    {id: 3, name: "Christian"},
    {id: 4, name: "Hindu"},
    {id: 5, name: "Sikh"},
    {id: 6, name: "Buddhist"}
];
