/* eslint-disable no-unused-vars */
/* eslint-disable */
export default function createIteratorObject(report) {
	return (function* _() {
		for (const department of Object.values(report.allEmployees)) {
			for (const employee of department) {
				yield employee;
			}
		}
	}());
}
