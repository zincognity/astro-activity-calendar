// src/constants/themes.ts
import type { ThemeProps } from "@/types/theme"

/**
 * Color palettes + metadata for contribution levels (0–4).
 * Multiple themes are supported. You can switch depending on UI theme.
 */

export const themes: ThemeProps = {
  dark: {
    colors: {
      0: "#161b22",
      1: "#113357",
      2: "#1e4b8c",
      3: "#2a66c8",
      4: "#539bf5",
    },
    meta: {
      text: "text-neutral-200",
      tooltipBg: "bg-neutral-800",
      tooltipText: "text-neutral-50",
    },
  },
  light: {
    colors: {
      0: "#ebedf0",
      1: "#9be9a8",
      2: "#40c463",
      3: "#30a14e",
      4: "#216e39",
    },
    meta: {
      text: "text-neutral-800",
      tooltipBg: "bg-white shadow-md border border-neutral-200",
      tooltipText: "text-neutral-900",
    },
  },
  indigo: {
    colors: {
      0: "#f5f3ff",
      1: "#ddd6fe",
      2: "#c4b5fd",
      3: "#a78bfa",
      4: "#7c3aed",
    },
    meta: {
      text: "text-neutral-200",
      tooltipBg: "bg-neutral-800",
      tooltipText: "text-neutral-50",
    },
  },
} as const
