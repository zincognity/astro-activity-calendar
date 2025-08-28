export type Theme = "dark" | "light" | "indigo"

export type ThemeProps = Record<
  Theme,
  {
    colors: Record<number, string>
    meta: {
      text: string
      tooltipBg: string
      tooltipText: string
    }
  }
>
