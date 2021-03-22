const apiURL = process.env.NEXT_PUBLIC_BASE_API_URL;

export async function client(endpoint) {
  return window.fetch(`${apiURL}/${endpoint}`).then(async (response) => {
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
}
