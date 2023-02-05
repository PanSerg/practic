// https://the-one-api.dev/
export const obj = {
    user: "name"
}
function searchVCharacters(pageNumber = 1) {
    const URL = `https://the-one-api.dev/v2/character?limit=200page=${pageNumber}`;
    const options = {
      headers: {
        Authorization: 'Bearer IeQdLNfvxZBIIF39AuZd',
      },
    };
    return fetch(URL, options).then((r) => r.json());
}

export default searchVCharacters