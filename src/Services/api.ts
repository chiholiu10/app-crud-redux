export const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      return undefined;
    }
    const currentJSON = await response.json();
    return currentJSON;
  } catch (err) {
    console.log(err);
  }
}