const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);


for (let i = 0; i < employees.length; i++) {
  console.log(employeeBonus(employees[i]));

  function employeeBonus(employee) {
    //define empty object
    let newEmployeeObject = {};
    let bonusPercentage = bonusCalculation(employee);
    let totalBonus = employee.annualSalary * bonusPercentage;
    let totalCompensation = totalBonus + Number(employee.annualSalary);
    //get employee's name
    newEmployeeObject.name = employee.name;
    // get bonus %
    newEmployeeObject.bonusPercentage = bonusPercentage;
    newEmployeeObject.totalBonus = totalBonus;
    newEmployeeObject.totalCompensation = totalCompensation;
    //test
    return newEmployeeObject;
  };

  function bonusCalculation(employee) {
    let bonusPercentage = 0;

    if (employee.reviewRating === 3) {
      bonusPercentage += .04
      //get their income
      // calculate 4% of their 
      //add bonus to variable
    }
    else if (employee.reviewRating === 4) {
      bonusPercentage += .06
      //get their income
      //bonus of 6%
      //r
    }
    else if (employee.reviewRating === 5) {
      bonusPercentage += .10
      //get their income
      //bonus of 10%
      //bonus += what we calculated
    } if (employee.employeeNumber.length === 4) {
      bonusPercentage += .05
    } if (employee.annualSalary > 65000) {
      bonusPercentage -= .01
    } if (bonusPercentage > 0.13) {
      bonusPercentage = .13
    } if (bonusPercentage < 0) {
      bonusPercentage = 0
    }
    return bonusPercentage; {
    }
  }
}
  console.log(bonusCalculation(employees[3]));