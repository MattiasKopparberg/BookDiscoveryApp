export function extractWorkId(key: string): string {
  return key.split("/").pop() ?? "";
}