import fetch from 'isomorphic-fetch';

class XHR {
	constructor() {
		// this.event = mitt();
	}
	convertToQueryString(data) {
		// convert data to querystring
		let qs = [];

		for(let key in data) {
			let arg = [key, data[key]].join("=");
			qs.push(arg); 
		}
		
		qs = qs.join("&");

		// attach querystring only it has arguments
		return qs;
	}
	_request(options = {}) {
		if(!options.url) {
			return Promise.reject(new Error('URL must be specified.'));
		}

		let method = options.method || 'GET';
		let headers = options.headers || {};
		let body = options.body || null;

		let requestHeaders = {};

		for(var key in headers) {
			requestHeaders[key] = headers[key];
		}

		let requestOptions = { 
			method,
			headers: requestHeaders,
			credentials: 'include'
		};

		if(method !== 'GET') {
			requestOptions.body = body;
		}

		return new Promise((resolve, reject) => {
			fetch(options.url, requestOptions)
			.then( (response) => {
				let parseJSONPromise = response.json();
				
				if(response.status >= 200 && response.status < 300) {
					return parseJSONPromise.then((result) => {
						resolve(result);
					});
				}
				else {
					return parseJSONPromise.then(res => {
						reject(res);
					});
				}
			}).catch( (err) => {
				reject(err);
			});
		});
	}
	request(options = {}) {
		options.headers = options.headers || {};
		
		options.headers['Accept'] = 'application/json';
		options.headers['Content-Type'] = 'application/json';
		
		return this._request(options);
	}
	get(url, data = {}, options = {}) {
		if(data) {
			var qs = this.convertToQueryString(data);

			if(qs) {
				url += `?${qs}`;
			}
		}

		const { headers } = options;

		return this.request({
			method: 'GET',
			url,
			headers
		});
	}
	post(url, data = {}, options = {}) {
		const { headers } = options;

		return this.request({
			method: 'POST',
			url,
			body: JSON.stringify(data),
			headers
		});
	}
	put(url, data = {}, options = {}) {
		const { headers } = options;

		return this.request({
			method: 'PUT',
			url,
			body: JSON.stringify(data),
			headers
		});
	}
	delete(url, data = {}, options = {}) {
		const { headers } = options;

		return this.request({
			method: 'DELETE',
			url,
			body: JSON.stringify(data),
			headers
		});
	}
	postFile(url, data = {}, options = {}) {
		const { headers } = options;

		return this._request({
			method: 'POST',
			url,
			body: data,
			headers
		});
	}
	putFile(url, data = {}, options = {}) {
		const { headers } = options;

		return this._request({
			method: 'PUT',
			url,
			body: data,
			headers
		});
	}
}

let xhr = new XHR();

export default xhr;