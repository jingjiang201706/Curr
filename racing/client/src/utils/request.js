import fetch from 'dva/fetch';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  options.headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' }
  options.credentials='include';
  return fetch(url, options)
    //.then(checkStatus)
    .then(parseJSON)
    .then((data) => {
      if (data.code >= 200 && data.code < 300) {
        return { success: true, result: data };
      }
      return { success: false, error: data.error };

    })
    .catch(err => ({ err }));
}
