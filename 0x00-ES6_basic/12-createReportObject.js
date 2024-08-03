/* eslint-disable no-unused-vars */
/* eslint-disable */
export default function createReportObject(employeesList) {
	return{
		allEmployees: employeesList,
		getNumberOfDepartments(employeesList){
			return Object.keys(employeesList).length;
		},
	};
}
