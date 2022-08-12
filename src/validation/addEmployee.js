//validation rules for personal information form
export const validatePersonalInformation = (values) => {
  let errors = {};
  if (!values.employeeName) {
    errors.employeeName = "Employee name is required";
  } else if (values.employeeName.length < 3) {
    errors.employeeName = "Employee name must be at least 3 characters";
  }

  if (!values.fatherName) {
    errors.fatherName = "Father name is required";
  } else if (values.fatherName.length < 3) {
    errors.fatherName = "Father name must be at least 3 characters";
  }

  if (!values.maritalStatus) {
    errors.maritalStatus = "Marital status is requierd";
  }

  if (!values.phone) {
    errors.phone = "Phone is required";
  } else if (!values.phone.match(/^[0-9]{11}$/)) {
    errors.phone = "Phone number must be 11 digits";
  }

  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.dateOfBirth) {
    errors.dateOfBirth = "Please select date of birth";
  } else if (new Date(values.dateOfBirth) > new Date("2005-01-01")) {
    errors.dateOfBirth = "Date of birth must be before 2005";
  }

  if (!values.gender) {
    errors.gender = "Gender is required";
  }

  if (!values.bloodGroup) {
    errors.bloodGroup = "Blood group is requried";
  }

  if (!values.cnic) {
    errors.cnic = "CNIC is required";
  } else if (!values.cnic.match(/^[0-9,-]{15}$/)) {
    errors.cnic = "Invalid cnic";
  }

  if (!values.emergencyContact) {
    errors.emergencyContact = "Emergency contact is required";
  } else if (!values.emergencyContact.match(/^[0-9]{11}$/)) {
    errors.emergencyContact = "Emergency contact must be 11 digits";
  }

  if (!values.relation) {
    errors.relation = "Relation is required";
  }

  if (!values.homeContact) {
    errors.homeContact = "Home contact is required";
  } else if (!values.homeContact.match(/^[0-9]{11}$/)) {
    errors.homeContact = "Home contact must be 11 digits";
  }

  return errors;
};

//validation rules for address information form
export const validateAddressInformation = (values) => {
  let errors = {};
  if (!values.permanentAddress) {
    errors.permanentAddress = "Permanent address is required";
  }
  if (!values.currentAddress) {
    errors.currentAddress = "Current address is required";
  }
  if (!values.city) {
    errors.city = "City is required";
  }
  if (!values.state) {
    errors.state = "State is required";
  }
  if (!values.country) {
    errors.country = "Country is required";
  }
  return errors;
};

//validation rules for educational details form
export const validateEducationalDetails = (values) => {
  let errors = {};
  if (!values.secondaryInstitute) {
    errors.secondaryInstitute = "Institute is required";
  }
  if (!values.secondaryProgram) {
    errors.secondaryProgram = "Program is required";
  }
  if (!values.secondaryCompletionDate) {
    errors.secondaryCompletionDate = "Completion date is required";
  }
  if (!values.secondaryGrade) {
    errors.secondaryGrade = "Grade is required";
  }
  if (!values.intermediateInstitute) {
    errors.intermediateInstitute = "Institute is required";
  }
  if (!values.intermediateProgram) {
    errors.intermediateProgram = "Program is required";
  }
  if (!values.intermediateCompletionDate) {
    errors.intermediateCompletionDate = "Completion date is required";
  }
  if (!values.intermediateGrade) {
    errors.intermediateGrade = "Grade is required";
  }
  if (!values.higherInstitute) {
    errors.higherInstitute = "Institute is required";
  }
  if (!values.higherProgram) {
    errors.higherProgram = "Program is required";
  }
  if (!values.higherCompletionDate) {
    errors.higherCompletionDate = "Completion date is required";
  }
  if (!values.higherGrade) {
    errors.higherGrade = "Grade is required";
  }

  // let errors = { educationalDetails: [] };
  // values.educationalDetails.map((item, index) => {
  //   if (!item.institute) {
  //     errors.educationalDetails[index] = {
  //       ...errors.educationalDetails[index],
  //       institute: "Institute is required",
  //     };
  //   }

  //   if (!item.program) {
  //     errors.educationalDetails[index] = {
  //       ...errors.educationalDetails[index],
  //       program: "Program is required",
  //     };
  //   }

  //   if (!item.completionYear) {
  //     errors.educationalDetails[index] = {
  //       ...errors.educationalDetails[index],
  //       completionYear: "Completion date is required",
  //     };
  //   }

  //   if (!item.grade) {
  //     errors.educationalDetails[index] = {
  //       ...errors.educationalDetails[index],
  //       grade: "Grade is required",
  //     };
  //   }
  // });
  
  return errors;
};

//validation rules for work experience form
export const validateWorkExperience = (values) => {
  let errors = { workExperience: [] };
  values.workExperience.map((item, index) => {
    if (!item.designation) {
      errors.workExperience[index] = {
        ...errors.workExperience[index],
        designation: "Designation is required",
      };
    }

    if (!item.company) {
      errors.workExperience[index] = {
        ...errors.workExperience[index],
        company: "Company is required",
      };
    }

    if (!item.startDate) {
      errors.workExperience[index] = {
        ...errors.workExperience[index],
        startDate: "Start date is required",
      };
    }

    if (!item.endDate) {
      errors.workExperience[index] = {
        ...errors.workExperience[index],
        endDate: "End date is required",
      };
    }

    if (!item.roleDescription) {
      errors.workExperience[index] = {
        ...errors.workExperience[index],
        roleDescription: "Role description is required",
      };
    }
  });
  return errors;
};

//validation rules for team information form
export const validateTeamInformation = (values) => {
  let errors = {};
  if (!values.designation) {
    errors.designation = "Designation is required";
  }
  if (!values.team) {
    errors.team = "Team is required";
  }
  return errors;
};
