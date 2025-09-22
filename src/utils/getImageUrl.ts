export function getImageUrl(path?: string | null) {
  if (!path) return '/placeholder.jpg';

  // prepend API storage base
  return `${process.env.NEXT_PUBLIC_API_STORAGE_URL}/${path}`;
}
