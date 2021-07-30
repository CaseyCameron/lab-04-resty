export const request = async (method, url, body = {}) => {
  let response;
  let data;
  console.log(method, url, body);

  if (method === 'GET') {
    response = await fetch(url);
    data = await response.json();
  }
  //console.log(data);
  return data;
}