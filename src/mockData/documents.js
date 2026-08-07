export const MOCK_DOCUMENTS = [
  {
    id: "doc-1",
    title: "Enterprise Quality Manual & Governance Framework",
    code: "QM-ISO9001-001",
    category: "Manuals",
    isoStandard: "ISO 9001:2015",
    version: "v3.2",
    owner: {
      name: "Dr. Sarah Jenkins",
      email: "s.jenkins@digidoc.com",
      role: "Quality Director",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
    },
    department: "Quality Assurance",
    status: "Approved",
    effectiveDate: "2025-01-15",
    reviewDate: "2026-01-15",
    retentionPeriod: "7 Years",
    fileSize: "4.2 MB",
    fileType: "PDF",
    description: "Defines the core Quality Management System (QMS) scope, organizational context, leadership commitments, risk-based thinking model, and process interactions across all operational units.",
    summary: "Mandatory corporate governance document satisfying Clause 4 through Clause 10 of ISO 9001:2015 requirements.",
    versionHistory: [
      { version: "v3.2", date: "2025-01-15", author: "Dr. Sarah Jenkins", changes: "Annual review & updated Annex B risk assessment matrix", status: "Approved" },
      { version: "v3.1", date: "2024-06-10", author: "Alexander Wright", changes: "Refactored continuous improvement escalation pathways", status: "Superseded" },
      { version: "v3.0", date: "2024-01-12", author: "Dr. Sarah Jenkins", changes: "Major revision aligning with multi-site operations", status: "Superseded" },
      { version: "v2.0", date: "2023-01-20", author: "David Chen", changes: "Initial QMS baseline release for global accreditation", status: "Superseded" }
    ],
    approvalWorkflow: [
      { role: "Quality Manager", name: "Alexander Wright", status: "Approved", date: "2025-01-12" },
      { role: "Compliance Officer", name: "David Chen", status: "Approved", date: "2025-01-14" },
      { role: "VP of Quality & Risk", name: "Dr. Sarah Jenkins", status: "Approved", date: "2025-01-15" }
    ],
    comments: [
      {
        id: "c1",
        author: "David Chen",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
        role: "Lead Auditor",
        text: "Section 7.3 regarding competency tracking has been fully validated against the latest internal audit observations.",
        timestamp: "2025-01-14 14:22"
      },
      {
        id: "c2",
        author: "Alexander Wright",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
        role: "Quality Manager",
        text: "Approved with minor syntax corrections in Clause 8 operational controls diagram.",
        timestamp: "2025-01-12 09:45"
      }
    ],
    auditTrail: [
      { id: "a1", action: "Approved Document", user: "Dr. Sarah Jenkins", timestamp: "2025-01-15 10:00", details: "Final sign-off completed for v3.2 release." },
      { id: "a2", action: "Approval Granted", user: "David Chen", timestamp: "2025-01-14 14:22", details: "Review stage 2 completed with status Approved." },
      { id: "a3", action: "Version Uploaded", user: "Alexander Wright", timestamp: "2025-01-10 16:30", details: "Uploaded v3.2 draft PDF document file." }
    ]
  },
  {
    id: "doc-2",
    title: "Information Security Management System (ISMS) Policy",
    code: "ISP-ISO27001-004",
    category: "Policies",
    isoStandard: "ISO 27001:2022",
    version: "v4.0",
    owner: {
      name: "Marcus Vance",
      email: "m.vance@digidoc.com",
      role: "CISO",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
    },
    department: "IT & Security",
    status: "Approved",
    effectiveDate: "2025-02-01",
    reviewDate: "2026-02-01",
    retentionPeriod: "7 Years",
    fileSize: "2.8 MB",
    fileType: "PDF",
    description: "Establishes information security governance, classification of assets, access control principles, zero-trust framework rules, and compliance protocols for ISO 27001 Annex A controls.",
    summary: "Primary information security policy mandatory for all staff, contractors, and third-party vendors.",
    versionHistory: [
      { version: "v4.0", date: "2025-02-01", author: "Marcus Vance", changes: "Updated to ISO 27001:2022 Annex A 93 control structure", status: "Approved" },
      { version: "v3.0", date: "2023-11-15", author: "Amara Okafor", changes: "Added cloud security and remote access policies", status: "Superseded" }
    ],
    approvalWorkflow: [
      { role: "IT Security Manager", name: "Amara Okafor", status: "Approved", date: "2025-01-28" },
      { role: "CISO", name: "Marcus Vance", status: "Approved", date: "2025-02-01" }
    ],
    comments: [
      {
        id: "c3",
        author: "Amara Okafor",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
        role: "IT Security Engineer",
        text: "Cloud workload identity access management policies aligned with ISO 27001:2022 A.8.5.",
        timestamp: "2025-01-28 11:15"
      }
    ],
    auditTrail: [
      { id: "a4", action: "Approved Document", user: "Marcus Vance", timestamp: "2025-02-01 08:30", details: "Published version v4.0 live." }
    ]
  },
  {
    id: "doc-3",
    title: "Corrective & Preventive Action (CAPA) Standard Operating Procedure",
    code: "SOP-CAPA-009",
    category: "Procedures",
    isoStandard: "ISO 9001:2015",
    version: "v2.1",
    owner: {
      name: "Alexander Wright",
      email: "a.wright@digidoc.com",
      role: "Quality Manager",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
    },
    department: "Quality Assurance",
    status: "Pending Review",
    effectiveDate: "2024-03-10",
    reviewDate: "2025-08-30",
    retentionPeriod: "5 Years",
    fileSize: "1.9 MB",
    fileType: "DOCX",
    description: "Defines the end-to-end process for non-conformity identification, 5-Why root cause analysis, corrective action assignment, verification of effectiveness, and closure.",
    summary: "Core operational procedure for resolving audit findings and customer complaints.",
    versionHistory: [
      { version: "v2.1", date: "2025-08-01", author: "Alexander Wright", changes: "Draft update adding automated root-cause tracking workflow", status: "Pending Review" },
      { version: "v2.0", date: "2024-03-10", author: "Alexander Wright", changes: "Standardized CAPA form template across business units", status: "Approved" }
    ],
    approvalWorkflow: [
      { role: "Quality Lead", name: "Alexander Wright", status: "Approved", date: "2025-08-01" },
      { role: "Lead Auditor", name: "David Chen", status: "Pending", date: null },
      { role: "Quality Director", name: "Dr. Sarah Jenkins", status: "Pending", date: null }
    ],
    comments: [
      {
        id: "c4",
        author: "Alexander Wright",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
        role: "Quality Manager",
        text: "Please review the proposed 30-day effectiveness verification window in section 4.2.",
        timestamp: "2025-08-01 16:05"
      }
    ],
    auditTrail: [
      { id: "a5", action: "Submitted for Review", user: "Alexander Wright", timestamp: "2025-08-01 16:00", details: "Submitted draft v2.1 for managerial review." }
    ]
  },
  {
    id: "doc-4",
    title: "Environmental Aspects & Impact Assessment Plan",
    code: "EMP-ISO14001-002",
    category: "Plans",
    isoStandard: "ISO 14001:2015",
    version: "v1.4",
    owner: {
      name: "Elena Rostova",
      email: "e.rostova@digidoc.com",
      role: "EHS Lead Specialist",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&auto=format&fit=crop&q=80"
    },
    department: "EHS",
    status: "Approved",
    effectiveDate: "2024-09-01",
    reviewDate: "2025-09-01",
    retentionPeriod: "10 Years",
    fileSize: "3.5 MB",
    fileType: "PDF",
    description: "Evaluates environmental aspects of facility operations, energy consumption, waste streams, chemical storage, and greenhouse gas emissions with mitigation protocols.",
    summary: "Complies with ISO 14001:2015 Clause 6.1.2 environmental aspect evaluation standards.",
    versionHistory: [
      { version: "v1.4", date: "2024-09-01", author: "Elena Rostova", changes: "Added solar array waste reduction targets", status: "Approved" }
    ],
    approvalWorkflow: [
      { role: "EHS Lead", name: "Elena Rostova", status: "Approved", date: "2024-08-25" },
      { role: "Operations Director", name: "Sophia Martinez", status: "Approved", date: "2024-08-30" }
    ],
    comments: [],
    auditTrail: [
      { id: "a6", action: "Approved Document", user: "Sophia Martinez", timestamp: "2024-08-30 11:20", details: "Approved for site compliance implementation." }
    ]
  },
  {
    id: "doc-5",
    title: "Occupational Health & Safety Hazard Identification & Risk Assessment (HIRA)",
    code: "OHS-ISO45001-003",
    category: "Risk Assessments",
    isoStandard: "ISO 45001:2018",
    version: "v2.0",
    owner: {
      name: "Elena Rostova",
      email: "e.rostova@digidoc.com",
      role: "EHS Lead Specialist",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&auto=format&fit=crop&q=80"
    },
    department: "EHS",
    status: "Expired",
    effectiveDate: "2023-07-01",
    reviewDate: "2024-07-01",
    retentionPeriod: "10 Years",
    fileSize: "2.1 MB",
    fileType: "PDF",
    description: "Comprehensive risk assessment registry for workplace hazard prevention, ergonomic evaluations, chemical safety data sheets, and emergency evacuation drills.",
    summary: "Requires annual mandatory update under ISO 45001 Clause 6.1.",
    versionHistory: [
      { version: "v2.0", date: "2023-07-01", author: "Elena Rostova", changes: "Revised workplace ergonomic hazards", status: "Expired" }
    ],
    approvalWorkflow: [
      { role: "EHS Lead", name: "Elena Rostova", status: "Approved", date: "2023-06-28" }
    ],
    comments: [
      {
        id: "c5",
        author: "David Chen",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
        role: "Lead Auditor",
        text: "Document review date expired on 2024-07-01. Priority update required before Q4 external audit.",
        timestamp: "2024-07-05 09:12"
      }
    ],
    auditTrail: [
      { id: "a7", action: "Flagged Expired", user: "System Monitor", timestamp: "2024-07-01 00:01", details: "Review date passed. Status changed to Expired." }
    ]
  },
  {
    id: "doc-6",
    title: "Supplier & Vendor Security Assessment Checklist",
    code: "CHK-SUP-012",
    category: "Checklists",
    isoStandard: "ISO 27001:2022",
    version: "v1.2",
    owner: {
      name: "Marcus Vance",
      email: "m.vance@digidoc.com",
      role: "CISO",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
    },
    department: "IT & Security",
    status: "Approved",
    effectiveDate: "2024-11-01",
    reviewDate: "2025-11-01",
    retentionPeriod: "5 Years",
    fileSize: "1.2 MB",
    fileType: "XLSX",
    description: "Audit questionnaire and scoring matrix for third-party vendor risk management, SOC 2 compliance verification, and data processing agreements.",
    summary: "Mandatory vetting tool prior to onboarding software vendors.",
    versionHistory: [
      { version: "v1.2", date: "2024-11-01", author: "Marcus Vance", changes: "Added AI model security risk evaluation questions", status: "Approved" }
    ],
    approvalWorkflow: [
      { role: "CISO", name: "Marcus Vance", status: "Approved", date: "2024-10-29" }
    ],
    comments: [],
    auditTrail: [
      { id: "a8", action: "Approved Document", user: "Marcus Vance", timestamp: "2024-10-29 14:00", details: "Approved version v1.2." }
    ]
  },
  {
    id: "doc-7",
    title: "Internal QMS & ISMS Audit Protocol",
    code: "AUD-PROT-007",
    category: "Procedures",
    isoStandard: "ISO 9001:2015",
    version: "v3.0",
    owner: {
      name: "David Chen",
      email: "d.chen@digidoc.com",
      role: "Lead Auditor",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
    },
    department: "Quality Assurance",
    status: "Approved",
    effectiveDate: "2025-01-05",
    reviewDate: "2026-01-05",
    retentionPeriod: "7 Years",
    fileSize: "2.3 MB",
    fileType: "PDF",
    description: "Defines internal audit scheduling, sampling methodology, auditor independence criteria, report templates, and management review inputs.",
    summary: "Governs internal compliance audit execution across all departments.",
    versionHistory: [
      { version: "v3.0", date: "2025-01-05", author: "David Chen", changes: "Integrated joint QMS/ISMS audit scheduling framework", status: "Approved" }
    ],
    approvalWorkflow: [
      { role: "Lead Auditor", name: "David Chen", status: "Approved", date: "2025-01-03" },
      { role: "Quality Director", name: "Dr. Sarah Jenkins", status: "Approved", date: "2025-01-05" }
    ],
    comments: [],
    auditTrail: [
      { id: "a9", action: "Approved Document", user: "Dr. Sarah Jenkins", timestamp: "2025-01-05 15:30", details: "Approved for annual internal audit execution." }
    ]
  },
  {
    id: "doc-8",
    title: "Business Continuity & Disaster Recovery (BCDR) Plan",
    code: "BCP-ISO27001-008",
    category: "Plans",
    isoStandard: "ISO 27001:2022",
    version: "v2.3",
    owner: {
      name: "Sophia Martinez",
      email: "s.martinez@digidoc.com",
      role: "Operations Lead",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
    },
    department: "Operations",
    status: "Approved",
    effectiveDate: "2024-10-15",
    reviewDate: "2025-10-15",
    retentionPeriod: "7 Years",
    fileSize: "4.8 MB",
    fileType: "PDF",
    description: "Outlines Recovery Time Objectives (RTO) and Recovery Point Objectives (RPO), failover procedures, communication call trees, and crisis response playbooks.",
    summary: "Critical resilience protocol for continuous business operations.",
    versionHistory: [
      { version: "v2.3", date: "2024-10-15", author: "Sophia Martinez", changes: "Updated secondary multi-region cloud failover RTO metrics", status: "Approved" }
    ],
    approvalWorkflow: [
      { role: "Operations Lead", name: "Sophia Martinez", status: "Approved", date: "2024-10-10" },
      { role: "CISO", name: "Marcus Vance", status: "Approved", date: "2024-10-15" }
    ],
    comments: [],
    auditTrail: [
      { id: "a10", action: "Approved Document", user: "Marcus Vance", timestamp: "2024-10-15 16:45", details: "Sign-off completed following table-top test exercise." }
    ]
  },
  {
    id: "doc-9",
    title: "Data Protection & Privacy Policy (GDPR / ISO 27701)",
    code: "POL-PRIV-005",
    category: "Policies",
    isoStandard: "ISO 27001:2022",
    version: "v1.5",
    owner: {
      name: "Marcus Vance",
      email: "m.vance@digidoc.com",
      role: "CISO",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
    },
    department: "IT & Security",
    status: "Pending Review",
    effectiveDate: "2024-04-01",
    reviewDate: "2025-08-25",
    retentionPeriod: "Indefinite",
    fileSize: "2.0 MB",
    fileType: "PDF",
    description: "Defines PII handling, data subject access request (DSAR) response workflows, cross-border data transfer mechanisms, and encryption standards.",
    summary: "Ensures compliance with GDPR, CCPA, and ISO privacy extensions.",
    versionHistory: [
      { version: "v1.5", date: "2025-08-01", author: "Marcus Vance", changes: "Updated DSAR response SLA timeline to 15 days", status: "Pending Review" }
    ],
    approvalWorkflow: [
      { role: "CISO", name: "Marcus Vance", status: "Approved", date: "2025-08-01" },
      { role: "Legal Counsel", name: "David Chen", status: "Pending", date: null }
    ],
    comments: [],
    auditTrail: [
      { id: "a11", action: "Submitted for Review", user: "Marcus Vance", timestamp: "2025-08-01 10:00", details: "Submitted update v1.5 for legal review." }
    ]
  },
  {
    id: "doc-10",
    title: "Change Control & Release Management Procedure",
    code: "SOP-CCM-011",
    category: "Procedures",
    isoStandard: "ISO 9001:2015",
    version: "v2.2",
    owner: {
      name: "Amara Okafor",
      email: "a.okafor@digidoc.com",
      role: "IT Systems Engineer",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80"
    },
    department: "IT & Security",
    status: "Approved",
    effectiveDate: "2024-12-01",
    reviewDate: "2025-12-01",
    retentionPeriod: "5 Years",
    fileSize: "1.7 MB",
    fileType: "DOCX",
    description: "Governs software deployments, infrastructure modifications, CAB review meetings, emergency patches, and rollback strategies.",
    summary: "Standard change management protocol for production systems.",
    versionHistory: [
      { version: "v2.2", date: "2024-12-01", author: "Amara Okafor", changes: "Added automated CI/CD pipeline approval gates", status: "Approved" }
    ],
    approvalWorkflow: [
      { role: "Systems Lead", name: "Amara Okafor", status: "Approved", date: "2024-11-28" }
    ],
    comments: [],
    auditTrail: [
      { id: "a12", action: "Approved Document", user: "Amara Okafor", timestamp: "2024-11-28 17:00", details: "Published v2.2 live." }
    ]
  }
];
