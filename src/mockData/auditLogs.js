export const AUDIT_LOGS = [
  {
    id: "log-101",
    action: "Document Approved",
    category: "Approval",
    user: {
      name: "Dr. Sarah Jenkins",
      role: "Quality Director",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
    },
    document: { id: "doc-1", title: "Enterprise Quality Manual & Governance Framework", code: "QM-ISO9001-001" },
    timestamp: "2025-08-07 14:15",
    ipAddress: "192.168.1.140",
    details: "Final sign-off completed for v3.2 release under ISO 9001:2015."
  },
  {
    id: "log-102",
    action: "New Version Uploaded",
    category: "Upload",
    user: {
      name: "Alexander Wright",
      role: "Quality Manager",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
    },
    document: { id: "doc-3", title: "Corrective & Preventive Action (CAPA) Standard Operating Procedure", code: "SOP-CAPA-009" },
    timestamp: "2025-08-07 11:30",
    ipAddress: "192.168.1.112",
    details: "Uploaded draft version v2.1 with updated 5-Why root cause template."
  },
  {
    id: "log-103",
    action: "User Authentication",
    category: "Security",
    user: {
      name: "Marcus Vance",
      role: "CISO",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
    },
    document: null,
    timestamp: "2025-08-07 09:45",
    ipAddress: "10.0.4.22",
    details: "Successful 2FA login via SSO Identity Provider."
  },
  {
    id: "log-104",
    action: "Retention Policy Modified",
    category: "System Settings",
    user: {
      name: "Marcus Vance",
      role: "CISO",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
    },
    document: null,
    timestamp: "2025-08-06 16:20",
    ipAddress: "10.0.4.22",
    details: "Updated default retention for IT Security policies from 5 years to 7 years."
  },
  {
    id: "log-105",
    action: "Document Downloaded",
    category: "Access",
    user: {
      name: "David Chen",
      role: "Lead Auditor",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
    },
    document: { id: "doc-2", title: "Information Security Management System (ISMS) Policy", code: "ISP-ISO27001-004" },
    timestamp: "2025-08-06 13:10",
    ipAddress: "192.168.2.88",
    details: "Exported high-resolution PDF for internal audit sampling."
  },
  {
    id: "log-106",
    action: "Document Flagged Expired",
    category: "Compliance System",
    user: {
      name: "System Monitor Bot",
      role: "Automated Service",
      avatar: null
    },
    document: { id: "doc-5", title: "Occupational Health & Safety Hazard Identification & Risk Assessment (HIRA)", code: "OHS-ISO45001-003" },
    timestamp: "2025-08-05 00:00",
    ipAddress: "127.0.0.1",
    details: "Review date 2024-07-01 elapsed. Document status transitioned to Expired automatically."
  },
  {
    id: "log-107",
    action: "User Role Updated",
    category: "User Management",
    user: {
      name: "Marcus Vance",
      role: "CISO",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
    },
    document: null,
    timestamp: "2025-08-04 10:15",
    ipAddress: "10.0.4.22",
    details: "Elevated Amara Okafor permissions to Employee Administrator for IT department scope."
  }
];

export const MOCK_NOTIFICATIONS = [
  {
    id: "n-1",
    title: "Approval Required",
    message: "CAPA SOP (SOP-CAPA-009 v2.1) is awaiting your final review & approval.",
    time: "10 min ago",
    unread: true,
    type: "warning",
    link: "/app/document/doc-3"
  },
  {
    id: "n-2",
    title: "Document Expired",
    message: "OHS Risk Assessment (OHS-ISO45001-003) has expired and requires annual update.",
    time: "2 hours ago",
    unread: true,
    type: "danger",
    link: "/app/document/doc-5"
  },
  {
    id: "n-3",
    title: "Audit Audit Scheduled",
    message: "ISO 9001:2015 Stage 2 surveillance audit scheduled for Oct 15, 2025.",
    time: "1 day ago",
    unread: false,
    type: "info",
    link: "/app/compliance"
  },
  {
    id: "n-4",
    title: "New Version Published",
    message: "Information Security Policy v4.0 has been approved and published live.",
    time: "2 days ago",
    unread: false,
    type: "success",
    link: "/app/document/doc-2"
  }
];
