export function formatDate(str: string) {
  const date = new Date(str);

  if (!date) return "";

  const day = date.getDay().toString().padStart(2, "0");
  const month = date.toLocaleDateString("en-US", { month: "short" });
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}
