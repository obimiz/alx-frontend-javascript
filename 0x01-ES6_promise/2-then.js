/* eslint-disable no-unused-vars */
/* eslint-disable */
export default function function handleResponseFromAPI(promise){
	return promise
	.then(() => ({status: 200, body: 'success'}));
	.catch(() => new Error())
	.finally(() => console.log('Got a response from the API'));
}
