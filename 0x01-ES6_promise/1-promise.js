/* eslint-disable no-unused-vars */
/* eslint-disable */
export default function (boolean) {
	return new Promise((resolve, reject) => {
		const object = {
			status: 200,
			body: 'success',
		};

		if (boolean === true) {
			resolve(object);
		}else{
			reject(Error('The fake API is not working currently'));
		}
	});
}
