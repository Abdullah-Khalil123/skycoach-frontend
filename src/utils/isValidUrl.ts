const isValidUrl = (url?: string) => {
  try {
    return !!url && new URL(url);
  } catch {
    return false;
  }
};

export { isValidUrl };
