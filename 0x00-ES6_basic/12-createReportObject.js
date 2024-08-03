/* eslint-disable no-unused-vars */
/* eslint-disable */
export default function createReportObject(employeesList) {
	return{
		allEmployees: employeesList,
		getNumberOfDepartments(employeesList){
			return object.keys(employeesList).Length;
		},
	};
}
