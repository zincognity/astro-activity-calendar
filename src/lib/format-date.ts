export const formatDate = (locale: string, date?: string) => {
  return new Intl.DateTimeFormat(locale, {
    month: "short",
  }).format(new Date(date ?? ""))
}
