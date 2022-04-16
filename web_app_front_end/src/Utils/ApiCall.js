async function ApiCall(end_point, request_type = "GET", request_body = null) {
  const final_end_point =
    process.env.REACT_APP_API_GATEWAY_ENDPOINT + end_point;
  if (request_type === "POST") {
    return makePostApiCall(final_end_point, request_body);
  } else {
    return makeGetApiCall(final_end_point);
  }
}

async function makePostApiCall(entire_url, request_body) {
  const resp = await fetch(entire_url, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: request_body,
  });
  const json = await resp.json();
  return json;
}

async function makeGetApiCall(entire_url) {
  const resp = await fetch(entire_url, {
    method: "GET",
  });
  const json = await resp.json();
  return json;
}

export default ApiCall;
