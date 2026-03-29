export function getCoverUrl(coverId?: string | number | null) {
  if (!coverId) return null;

  const id = typeof coverId === "string" ? parseInt(coverId, 10) : coverId;
  if (isNaN(id)) return null;

  return `https://covers.openlibrary.org/b/id/${id}-M.jpg`;
}