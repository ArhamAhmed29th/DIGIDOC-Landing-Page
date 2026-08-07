import React, { useState } from 'react';
import DataTable from '../components/common/DataTable';
import StatusBadge from '../components/common/StatusBadge';
import Modal from '../components/common/Modal';
import { MOCK_USERS } from '../mockData/users';
import {
  UserPlus,
  Shield,
  UserCheck,
  Mail,
  Building,
  MoreVertical,
  CheckCircle2
} from 'lucide-react';

export default function UsersPage() {
  const [users, setUsers] = useState(MOCK_USERS);
  const [inviteModalOpen, setInviteModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    role: 'Quality Manager',
    department: 'Quality Assurance'
  });

  const handleInviteUser = (e) => {
    e.preventDefault();
    const createdUser = {
      id: `usr-${Date.now()}`,
      name: newUser.name || 'New Team Member',
      email: newUser.email || 'user@digidoc.com',
      role: newUser.role,
      systemRole: newUser.role,
      department: newUser.department,
      status: 'Active',
      lastLogin: 'Invitation Sent',
      assignedDocsCount: 0,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80'
    };

    setUsers([createdUser, ...users]);
    setInviteModalOpen(false);
    setNewUser({ name: '', email: '', role: 'Quality Manager', department: 'Quality Assurance' });
  };

  const columns = [
    {
      key: 'name',
      label: 'Team Member',
      render: (val, row) => (
        <div className="flex items-center gap-3">
          <img src={row.avatar} alt={val} className="w-8 h-8 rounded-full object-cover border border-slate-700" />
          <div>
            <span className="font-bold text-white block text-xs">{val}</span>
            <span className="text-[10px] text-slate-400">{row.email}</span>
          </div>
        </div>
      )
    },
    {
      key: 'systemRole',
      label: 'Role',
      render: (val) => (
        <span className="px-2.5 py-1 text-xs font-bold rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          {val}
        </span>
      )
    },
    { key: 'department', label: 'Department' },
    {
      key: 'status',
      label: 'Status',
      render: (val) => <StatusBadge status={val} size="sm" />
    },
    { key: 'lastLogin', label: 'Last Login' },
    { key: 'assignedDocsCount', label: 'Assigned Docs' },
    {
      key: 'actions',
      label: 'Actions',
      sortable: false,
      render: (_, row) => (
        <button
          onClick={() => alert(`Managing permissions for ${row.name}...`)}
          className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 text-xs font-semibold"
        >
          Manage Access
        </button>
      )
    }
  ];

  return (
    <div className="space-y-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">User & Role Management</h1>
          <p className="text-xs text-slate-400">Enterprise Access Control & ISO Role Assignments</p>
        </div>

        <button
          onClick={() => setInviteModalOpen(true)}
          className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-500 to-cyan-500 text-white font-bold text-xs hover:from-brand-600 hover:to-cyan-600 shadow-xl shadow-cyan-500/20 flex items-center justify-center gap-2 transition-all"
        >
          <UserPlus className="w-4 h-4" />
          <span>Invite Team Member</span>
        </button>
      </div>

      {/* Users Table */}
      <DataTable columns={columns} data={users} />

      {/* Invite Modal */}
      <Modal isOpen={inviteModalOpen} onClose={() => setInviteModalOpen(false)} title="Invite New User to DIGIDOC">
        <form onSubmit={handleInviteUser} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Full Name</label>
            <input
              type="text"
              required
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              placeholder="e.g. Rachel Morgan"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Corporate Email</label>
            <input
              type="email"
              required
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              placeholder="r.morgan@digidoc.com"
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">System Role</label>
              <select
                value={newUser.role}
                onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
              >
                <option value="Administrator">Administrator</option>
                <option value="Quality Manager">Quality Manager</option>
                <option value="Department Manager">Department Manager</option>
                <option value="Employee">Employee</option>
                <option value="Auditor">Auditor</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Department</label>
              <select
                value={newUser.department}
                onChange={(e) => setNewUser({ ...newUser, department: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
              >
                <option value="Quality Assurance">Quality Assurance</option>
                <option value="IT & Security">IT & Security</option>
                <option value="Operations">Operations</option>
                <option value="EHS">EHS</option>
                <option value="Compliance & Risk">Compliance & Risk</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <button type="button" onClick={() => setInviteModalOpen(false)} className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white">
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-brand-500 to-cyan-500 rounded-xl"
            >
              Send Invitation Email
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
