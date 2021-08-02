export const request = async (method, url, body = {}) => {
  let response;
  let data;
  console.log(method, url, body);

  if (method === 'GET') {
    response = await fetch(url);
    data = await response.json();
  } else {
    response = await fetch(url, {
      method: method,
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' }
    });
    data = await response.json();
  }
  return data;
}