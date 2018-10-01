const getRootSegment = url => {
  const sansParams = url.split("?")[0];

  if (sansParams === "/") return sansParams;

  return `/${sansParams.split("/")[1]}`;
};

export { getRootSegment };
