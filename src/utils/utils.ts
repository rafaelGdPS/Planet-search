export async function getApi() {
  const response = await fetch('https://swapi.dev/api/planets');
  const data = await response.json();
  const result = data.results;
  return result;
}
