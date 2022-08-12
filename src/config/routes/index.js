//react imports
import React from "react";

//importing app layout
import Layout from "../../components/Layout";

//importing components
import Signin from "../../views/signin";
import Dashboard from "../../views/dashboard";
import Calender from "../../views/calender";
import Attendance from "../../views/attendance";
import Tasks from "../../views/tasks";
import Support from "../../views/support";
import Settings from "../../views/settings";
import Payroll from "../../views/payroll";
import Employees from "../../views/employees";
import AddEmployee from "../../views/addEmployee";
import TalentPool from "../../views/talentPool"
import ShortListed from "../../views/shortListed"
import Interviews from "../../views/Interviews"
import Selected from "../../views/selected"
import Teams from "../../views/teams"
import Hierarchy from "../../views/hierarchy"
import Permissions from "../../views/permissions";
import Leaves from "../../views/leaves";
import MyLeaves from "../../views/myLeaves";
import LeaveRequests from "../../views/leaveRequests";
import ApplyForLeave from "../../views/applyForLeave";
import ShiftManagement from "../../views/shiftManagement";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//main function
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" index element={<Signin />} />
        <Route path="/payroll" element={<Layout title="Payroll" activetab="Payroll"><Payroll /></Layout>} />
        <Route path="/tasks" element={<Layout title="Tasks" activetab="Tasks"><Tasks /></Layout>} />
        <Route path="/calender" element={<Layout title="Calender" activetab="Calender"><Calender /></Layout>} />
        <Route path="/support" element={<Layout title="Support" activetab="Support"><Support /></Layout>} />
        <Route path="/settings" element={<Layout title="Settings" activetab="Settings"><Settings /></Layout>} />

        <Route path="/" element={<Layout title="Dashboard" activetab="Dashboard"><Dashboard /></Layout>} />
        <Route path="/dashboard" element={<Layout title="Dashboard" activetab="Dashboard"><Dashboard /></Layout>} />

        <Route path="/employees" element={<Layout title="Employees" activetab="Employees"><Employees /></Layout>} />
        <Route path="/add-employee" element={<Layout p={{base:3, md:30}} title="Add Employee" activetab="Employees"><AddEmployee /></Layout>} />

        <Route path="/onboarding/talent-pool" element={<Layout p={{base:3, md:30}} title="Talent Pool" activetab="TalentPool"><TalentPool /></Layout>} />
        <Route path="/onboarding/short-listed" element={<Layout p={{base:3, md:30}} title="Short Listed" activetab="ShortListed"><ShortListed /></Layout>} />
        <Route path="/onboarding/interviews" element={<Layout p={{base:3, md:30}} title="Interviews" activetab="Interviews"><Interviews /></Layout>} />
        <Route path="/onboarding/selected" element={<Layout p={{base:3, md:30}} title="Selected Candidates" activetab="Selected"><Selected /></Layout>} />

        <Route path="/teams" element={<Layout p={{base:3, md:30}} title="Teams" activetab="Teams"><Teams /></Layout>} />
        <Route path="/teams/hierarchy" element={<Layout p={{base:3, md:30}} title="Teams Hierarchy" activetab="Hierarchy"><Hierarchy /></Layout>} />
        <Route path="/teams/permissions" element={<Layout p={{base:3, md:30}} title="Team Permissions" activetab="Permissions"><Permissions /></Layout>} />
        
        <Route path="/leaves" element={<Layout p={{base:3, md:30}} title="All Leaves" activetab="AllLeaves"><Leaves /></Layout>} />
        <Route path="/leaves/my-leaves" element={<Layout p={{base:3, md:30}} title="My Leaves" activetab="MyLeaves"><MyLeaves /></Layout>} />
        <Route path="/leaves/requests" element={<Layout p={{base:3, md:30}} title="Leave Requests" activetab="LeaveRequests"><LeaveRequests /></Layout>} />
        <Route path="/leaves/apply" element={<Layout p={{base:3, md:30}} title="Leaves" activetab="AllLeaves"><ApplyForLeave /></Layout>} />

        <Route path="/attendance" element={<Layout title="Attendance" activetab="Attendance"><Attendance /></Layout>} />
        <Route path="/attendance/shift-management" element={<Layout p={{base:3, md:30}} title="Shift Management" activetab="ShiftManagement"><ShiftManagement /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter
