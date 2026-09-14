export type Status =
  | "Draft"
  | "Submitted"
  | "Under Validation"
  | "Document Verification"
  | "Institution Verification"
  | "Scrutiny"
  | "Selection"
  | "Approval"
  | "Awarded"
  | "Action Required"
  | "Rejected";

export const STAGES = [
  "Submitted",
  "Validation",
  "Documents",
  "Institution Verification",
  "Scrutiny",
  "Selection",
  "Approval",
  "Awarded",
] as const;

export const schemes = [
  {
    id: "nfst",
    code: "NFST",
    name: "National Fellowship for Scheduled Tribe Students",
    type: "Fellowship",
    level: "M.Phil / Ph.D",
    summary:
      "Financial assistance to ST research scholars pursuing M.Phil and Ph.D in Indian universities and recognised institutions.",
    slots: "750 fellowships per year",
    amount: "₹37,000 – ₹42,000 per month + contingency",
    deadline: "31 October 2026",
    open: true,
    eligibility: [
      "Candidate must belong to a Scheduled Tribe with a valid caste certificate",
      "Admitted to a regular, full-time M.Phil or Ph.D programme",
      "Enrolled in a UGC-recognised university or research institution",
      "Not availing any other central fellowship for the same course",
    ],
    documents: [
      "Caste / Tribe certificate",
      "Ph.D or M.Phil admission letter",
      "Aadhaar or alternate identity proof",
      "Institution registration certificate",
      "Bank passbook first page",
      "Latest degree marksheet",
    ],
  },
  {
    id: "nos",
    code: "NOS",
    name: "National Overseas Scholarship for ST Students",
    type: "Scholarship",
    level: "Master's / Ph.D abroad",
    summary:
      "Support for ST students selected for postgraduate or doctoral study at recognised foreign universities.",
    slots: "20 awards per year",
    amount: "Tuition, annual maintenance, airfare and contingency",
    deadline: "15 December 2026",
    open: true,
    eligibility: [
      "Scheduled Tribe candidate with valid certificate",
      "Unconditional or conditional admission offer from a recognised foreign university",
      "Total family income within the prescribed ceiling",
      "Age not exceeding 35 years as on date of application",
    ],
    documents: [
      "Caste / Tribe certificate",
      "Admission offer letter from foreign university",
      "Income certificate",
      "Passport copy",
      "Qualifying degree certificate",
      "Bank passbook first page",
    ],
  },
  {
    id: "top-class",
    code: "TCE",
    name: "Top Class Education for ST Students",
    type: "Scholarship",
    level: "Premier institution UG / PG",
    summary:
      "Full-cost support for ST students admitted to notified premier institutions across engineering, medicine, law and management.",
    slots: "2,500 awards per year",
    amount: "Full tuition, living expense and book allowance",
    deadline: "30 September 2026",
    open: true,
    eligibility: [
      "Admission secured in a notified institution",
      "Family income up to the prescribed annual ceiling",
      "Regular, full-time course of study",
    ],
    documents: [
      "Caste / Tribe certificate",
      "Institution admission proof",
      "Income certificate",
      "Fee structure issued by institution",
      "Bank passbook first page",
    ],
  },
  {
    id: "prematric",
    code: "PMS-ST",
    name: "Pre-Matric Scholarship for ST Students",
    type: "Scholarship",
    level: "Class IX – X",
    summary:
      "Maintenance and academic support for ST students in classes IX and X to reduce dropout at the secondary stage.",
    slots: "State-wise allocation",
    amount: "₹3,500 – ₹8,000 per year",
    deadline: "Applications open through State nodal officers",
    open: false,
    eligibility: [
      "Studying in class IX or X in a government or recognised school",
      "Parent / guardian income within the prescribed limit",
    ],
    documents: ["Caste / Tribe certificate", "School bonafide certificate", "Income certificate"],
  },
  {
    id: "postmatric",
    code: "PMS",
    name: "Post-Matric Scholarship for ST Students",
    type: "Scholarship",
    level: "Class XI and above",
    summary:
      "Support covering course fees and maintenance for ST students in post-matriculation courses.",
    slots: "State-wise allocation",
    amount: "Course fee + monthly maintenance",
    deadline: "As notified by State / UT",
    open: true,
    eligibility: [
      "Passed matriculation or higher secondary examination",
      "Enrolled in a recognised post-matric course",
    ],
    documents: ["Caste / Tribe certificate", "Previous marksheet", "Fee receipt", "Bank passbook"],
  },
  {
    id: "eklavya",
    code: "EMRS",
    name: "Eklavya Model Residential School Support",
    type: "Scholarship",
    level: "Class VI – XII",
    summary:
      "Residential schooling support for tribal students in Eklavya Model Residential Schools.",
    slots: "School-wise intake",
    amount: "Residential and academic cost borne by the scheme",
    deadline: "Notified by school administration",
    open: false,
    eligibility: ["ST student in the notified age group", "Selected through EMRS entrance process"],
    documents: ["Caste / Tribe certificate", "Age proof", "Previous school record"],
  },
];

export const notices = [
  {
    id: "n1",
    date: "10 September 2026",
    tag: "Deadline",
    title: "NFST 2026-27 application window extended to 31 October 2026",
    body: "Research scholars who have submitted incomplete applications may complete their submission within the extended window.",
  },
  {
    id: "n2",
    date: "02 September 2026",
    tag: "Guideline",
    title: "Revised document checklist for National Overseas Scholarship",
    body: "Applicants must now upload the university offer letter and passport in a single verified set before scrutiny.",
  },
  {
    id: "n3",
    date: "28 August 2026",
    tag: "Verification",
    title: "Institutions advised to clear pending verification queues",
    body: "Nodal officers must complete institution verification within seven working days of assignment.",
  },
  {
    id: "n4",
    date: "19 August 2026",
    tag: "Result",
    title: "Top Class Education provisional selection list published",
    body: "Provisional list for premier institution awards is available in the applicant portal under Applications.",
  },
];

export const faqs = [
  {
    q: "Who can apply for scholarships and fellowships on this portal?",
    a: "Students and research scholars belonging to a Scheduled Tribe, holding a valid caste certificate issued by a competent authority, and enrolled in or admitted to a recognised course of study.",
  },
  {
    q: "Can I apply for more than one scheme in the same academic year?",
    a: "You may submit applications to multiple schemes, but you cannot draw benefits from two central schemes for the same course and year.",
  },
  {
    q: "What happens after I submit my application?",
    a: "Your application moves through validation, document verification, institution verification, scrutiny, selection and approval. You can follow each stage on the tracking timeline in your portal.",
  },
  {
    q: "What is a deficiency and how do I resolve it?",
    a: "A deficiency is raised when a document or detail needs correction. It appears as an Action Required card in your portal with the exact issue, the action needed and a response deadline.",
  },
  {
    q: "How do I know my documents were accepted?",
    a: "Each document card shows a verification status — pending, processing, verified or rejected — along with version history if you replaced a file.",
  },
  {
    q: "Whom do I contact if my application is delayed?",
    a: "Raise a grievance from the Grievances section of your portal. Every grievance receives a ticket number and is tracked against a response timeline.",
  },
];

export const applications = [
  {
    id: "APP-2026-004182",
    scheme: "National Fellowship for Scheduled Tribe Students",
    schemeId: "nfst",
    status: "Action Required" as Status,
    stage: 3,
    submitted: "12 August 2026",
    updated: "2 days ago",
    progress: 62,
    nextAction: "Replace caste certificate — scanned copy is unreadable",
    deadline: "22 September 2026",
  },
  {
    id: "APP-2026-004990",
    scheme: "Top Class Education for ST Students",
    schemeId: "top-class",
    status: "Scrutiny" as Status,
    stage: 5,
    submitted: "29 July 2026",
    updated: "6 days ago",
    progress: 74,
    nextAction: "No action needed. Scrutiny in progress at Ministry level.",
    deadline: "—",
  },
  {
    id: "APP-2026-005311",
    scheme: "National Overseas Scholarship for ST Students",
    schemeId: "nos",
    status: "Draft" as Status,
    stage: 0,
    submitted: "—",
    updated: "Today",
    progress: 35,
    nextAction: "Complete the Academic Details section and upload the offer letter",
    deadline: "15 December 2026",
  },
];

export const documents = [
  {
    name: "Caste / Tribe Certificate",
    required: true,
    file: "caste-certificate.pdf",
    size: "412 KB",
    status: "Rejected" as const,
    note: "Issuing authority seal not legible",
    versions: 2,
  },
  {
    name: "Ph.D Admission Letter",
    required: true,
    file: "admission-letter.pdf",
    size: "890 KB",
    status: "Verified" as const,
    versions: 1,
  },
  {
    name: "Institution Registration Certificate",
    required: true,
    file: "institution-reg.pdf",
    size: "1.2 MB",
    status: "Processing" as const,
    versions: 1,
  },
  { name: "Bank Passbook (first page)", required: true, status: "Pending" as const, versions: 0 },
  {
    name: "Latest Degree Marksheet",
    required: true,
    file: "msc-marksheet.pdf",
    size: "640 KB",
    status: "Verified" as const,
    versions: 1,
  },
  { name: "Disability Certificate", required: false, status: "Pending" as const, versions: 0 },
];

export const deficiencies = [
  {
    id: "DEF-8841",
    application: "APP-2026-004182",
    issue: "Caste / Tribe certificate is not readable",
    action: "Upload a clear colour scan of the full certificate including the issuing seal",
    raisedBy: "Scrutiny Officer, MoTA",
    raised: "10 September 2026",
    deadline: "22 September 2026",
    severity: "High" as const,
  },
  {
    id: "DEF-8902",
    application: "APP-2026-004182",
    issue: "Bank account name does not match applicant name",
    action: "Upload passbook page showing the account holder name as per your application",
    raisedBy: "Validation Desk",
    raised: "11 September 2026",
    deadline: "25 September 2026",
    severity: "Medium" as const,
  },
];

export const notifications = [
  {
    title: "Deficiency raised on APP-2026-004182",
    body: "Caste certificate needs to be replaced before 22 September 2026.",
    time: "2 days ago",
    unread: true,
  },
  {
    title: "Institution verification completed",
    body: "Your institution confirmed enrolment details for APP-2026-004990.",
    time: "6 days ago",
    unread: true,
  },
  {
    title: "Application received",
    body: "APP-2026-004990 was submitted successfully and is queued for validation.",
    time: "29 July 2026",
    unread: false,
  },
];

export const grievances = [
  {
    id: "GRV-2026-1188",
    subject: "Delay in institution verification",
    scheme: "NFST",
    raised: "05 September 2026",
    status: "Under Review",
    response: "Assigned to the State nodal officer for follow-up.",
  },
  {
    id: "GRV-2026-0974",
    subject: "Bank details correction request",
    scheme: "Top Class Education",
    raised: "18 August 2026",
    status: "Resolved",
    response: "Corrected bank details recorded on 24 August 2026.",
  },
];

export const officerQueue = Array.from({ length: 12 }).map((_, i) => ({
  id: `APP-2026-00${4100 + i * 37}`,
  applicant: [
    "Meena Kujur",
    "Sanjay Bhagat",
    "Lalrinpuii Hmar",
    "Devendra Uikey",
    "Anjali Munda",
    "Ramesh Gond",
    "Kavita Bhil",
    "Tapan Sardar",
    "Nirmala Oraon",
    "Jitendra Korku",
    "Shalini Toppo",
    "Bhaskar Naik",
  ][i],
  scheme: ["NFST", "NOS", "TCE", "PMS"][i % 4],
  state: ["Jharkhand", "Odisha", "Mizoram", "Madhya Pradesh"][i % 4],
  stage: ["Validation", "Documents", "Scrutiny", "Selection"][i % 4],
  sla: [2, 5, -1, 8, 1, 4, -3, 6, 3, 7, 0, 9][i],
  priority: (["High", "Medium", "Low"] as const)[i % 3],
  score: 68 + ((i * 5) % 30),
}));

export const auditLog = [
  {
    time: "14 Sep 2026, 11:42",
    actor: "scrutiny.officer@mota.gov.in",
    action: "Deficiency raised",
    entity: "APP-2026-004182",
    detail: "Caste certificate marked unreadable",
    ip: "10.24.8.11",
  },
  {
    time: "13 Sep 2026, 16:05",
    actor: "nodal.jnu@institution.ac.in",
    action: "Institution verification submitted",
    entity: "APP-2026-004990",
    detail: "Enrolment confirmed for 2026-27",
    ip: "10.61.2.90",
  },
  {
    time: "12 Sep 2026, 09:18",
    actor: "admin@mota.gov.in",
    action: "Scheme version published",
    entity: "NFST v4.2",
    detail: "Document checklist updated",
    ip: "10.24.1.4",
  },
  {
    time: "11 Sep 2026, 18:55",
    actor: "committee.member2@mota.gov.in",
    action: "Recommendation recorded",
    entity: "APP-2026-004633",
    detail: "Recommended with score 82",
    ip: "10.24.9.7",
  },
];

export const monthly = [
  { m: "Apr", received: 1820, processed: 1420, awarded: 610 },
  { m: "May", received: 2410, processed: 1980, awarded: 880 },
  { m: "Jun", received: 3120, processed: 2540, awarded: 1140 },
  { m: "Jul", received: 4380, processed: 3610, awarded: 1720 },
  { m: "Aug", received: 5210, processed: 4380, awarded: 2110 },
  { m: "Sep", received: 4760, processed: 4020, awarded: 1980 },
];

export const stageSplit = [
  { name: "Validation", value: 2140 },
  { name: "Documents", value: 3620 },
  { name: "Institution", value: 1880 },
  { name: "Scrutiny", value: 1240 },
  { name: "Selection", value: 640 },
];
