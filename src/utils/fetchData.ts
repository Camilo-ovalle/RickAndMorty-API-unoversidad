export const fetchData = async (url: string, page: number) => {
  const res = await fetch(`${url}?page=${page}`);
  const data = await res.json();

  return data;
};
