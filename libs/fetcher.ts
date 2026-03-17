const fetcher = async (url: string) => {
  let res = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Cannot Fetch API: " + url);
  }

  return res.json();
};

export default fetcher;
