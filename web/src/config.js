const baseUrl = "http://localhost:5252";

export const globalfetch = async (path, method, body = {}) => {
  try {
    const fetchOptions = {
      method: method,
    };

    if (method === "POST" || method === "PUT") {
      fetchOptions.body = JSON.stringify(body);
    }

    const response = await fetch(`${baseUrl}${path}`, fetchOptions);
    return await response.json();
  } catch (error) {
    return error;
  }
};
