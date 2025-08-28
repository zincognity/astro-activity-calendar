export function tf(
  key: string,
  args?: {
    [key: string]: string | number
  }
): string {
  const translation = key
    .split(".")
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .reduce((o: any, i) => o?.[i] ?? key) as string

  return args
    ? translation.replace(/\{\{(\w+)\}\}/g, (_, key) => {
        const value = args[key]

        if (value === undefined) {
          console.warn(
            `Argument "${key}" not found in the provided arguments for translation key "${key}".`
          )

          return `{{${key}}}`
        }

        return value as string
      })
    : translation
}
