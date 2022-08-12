export const validateApplyLeave = (values) => {
  const errors = {};
  if (!values.leaveType) {
    errors.leaveType = "Leave type is required";
  }
  if (!values.dayType) {
    errors.dayType = "Day type is required";
  }
  if (!values.fromDate) {
    errors.fromDate = "Please select from date";
  }
  if (!values.toDate) {
    errors.toDate = "Please select to date";
  }
  if (values.iWantToInform.length < 1) {
    errors.iWantToInform = "Please select at least on team member";
  }
  if (!values.reason) {
    errors.reason = "Please specify reason for leave";
  }
  return errors;
};
