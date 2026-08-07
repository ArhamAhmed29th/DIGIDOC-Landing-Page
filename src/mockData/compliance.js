export const COMPLIANCE_STANDARDS = [
  {
    id: "iso-9001",
    code: "ISO 9001:2015",
    name: "Quality Management System",
    score: 94,
    color: "emerald",
    totalClauses: 10,
    compliantClauses: 9,
    pendingClauses: 1,
    description: "International standard for quality management systems ensuring consistent products and customer satisfaction.",
    upcomingAudit: "2025-10-15",
    assignedLead: "Dr. Sarah Jenkins",
    clauses: [
      { number: "4.0", title: "Context of the Organization", status: "Compliant", progress: 100 },
      { number: "5.0", title: "Leadership & Commitment", status: "Compliant", progress: 100 },
      { number: "6.0", title: "Planning & Risk Management", status: "Compliant", progress: 100 },
      { number: "7.0", title: "Support & Competency", status: "Compliant", progress: 95 },
      { number: "8.0", title: "Operation & Control", status: "Compliant", progress: 92 },
      { number: "9.0", title: "Performance Evaluation", status: "Pending Review", progress: 80 },
      { number: "10.0", title: "Improvement & CAPA", status: "Compliant", progress: 96 }
    ]
  },
  {
    id: "iso-27001",
    code: "ISO 27001:2022",
    name: "Information Security Management System",
    score: 92,
    color: "cyan",
    totalClauses: 93,
    compliantClauses: 86,
    pendingClauses: 7,
    description: "Provides requirements for an information security management system (ISMS) and Annex A controls.",
    upcomingAudit: "2025-11-20",
    assignedLead: "Marcus Vance",
    clauses: [
      { number: "A.5", title: "Organizational Controls", status: "Compliant", progress: 96 },
      { number: "A.6", title: "People Controls", status: "Compliant", progress: 90 },
      { number: "A.7", title: "Physical Controls", status: "Compliant", progress: 95 },
      { number: "A.8", title: "Technological Controls", status: "Pending Review", progress: 87 }
    ]
  },
  {
    id: "iso-14001",
    code: "ISO 14001:2015",
    name: "Environmental Management System",
    score: 98,
    color: "emerald",
    totalClauses: 10,
    compliantClauses: 10,
    pendingClauses: 0,
    description: "Framework for organizations to manage environmental responsibilities and reduce ecological impact.",
    upcomingAudit: "2026-03-01",
    assignedLead: "Elena Rostova",
    clauses: [
      { number: "4.0", title: "Environmental Context", status: "Compliant", progress: 100 },
      { number: "6.0", title: "Aspects & Objectives", status: "Compliant", progress: 100 },
      { number: "8.0", title: "Operational Planning", status: "Compliant", progress: 98 }
    ]
  },
  {
    id: "iso-45001",
    code: "ISO 45001:2018",
    name: "Occupational Health & Safety System",
    score: 88,
    color: "amber",
    totalClauses: 10,
    compliantClauses: 8,
    pendingClauses: 2,
    description: "Sets standards to reduce occupational injuries and illnesses and create safer working environments.",
    upcomingAudit: "2025-09-15",
    assignedLead: "Elena Rostova",
    clauses: [
      { number: "5.0", title: "Worker Consultation", status: "Compliant", progress: 90 },
      { number: "6.0", title: "Hazard Identification (HIRA)", status: "Attention Required", progress: 75 },
      { number: "8.0", title: "Emergency Preparedness", status: "Compliant", progress: 95 }
    ]
  }
];

export const NON_CONFORMITIES = [
  {
    id: "nc-101",
    title: "Expired Hazard Identification Risk Assessment (HIRA)",
    standard: "ISO 45001:2018",
    severity: "Major",
    status: "Open",
    dueDate: "2025-08-30",
    assignee: "Elena Rostova",
    rootCause: "Annual review schedule missed due to facility expansion project.",
    actionPlan: "Conduct site hazard assessment walkthrough and publish updated v2.1 document."
  },
  {
    id: "nc-102",
    title: "CAPA 30-Day Verification SLA Delay",
    standard: "ISO 9001:2015",
    severity: "Minor",
    status: "In Progress",
    dueDate: "2025-09-10",
    assignee: "Alexander Wright",
    rootCause: "Manual tracking resulted in delayed verification sign-offs.",
    actionPlan: "Automate DIGIDOC notification alerts 7 days prior to 30-day review target."
  },
  {
    id: "nc-103",
    title: "Third-Party Cloud Supplier SOC 2 Certificate Gap",
    standard: "ISO 27001:2022",
    severity: "Minor",
    status: "Resolved",
    dueDate: "2025-07-15",
    assignee: "Marcus Vance",
    rootCause: "Vendor updated report on separate portal.",
    actionPlan: "Obtained updated SOC 2 Type II report and attached to Supplier Checklist CHK-SUP-012."
  }
];
