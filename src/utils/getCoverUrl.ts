export function getCoverUrl(coverId?: string | number | null): string | null {
  if (!coverId) return null;

  return `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`;
}