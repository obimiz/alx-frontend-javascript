/* eslint-disable no-unused-vars */
/* eslint-disable */
export default function function handleResponseFromAPI(promise){
	return Promise
	.then(() => ({status: 200,
		body: 'success'
	}));
	.catch(() => new Error())
	.final(() => console.log('Got a response from the API'));
}
