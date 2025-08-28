import { LAYOUT, STEP } from "../constants/layout"
import type { Cell } from "../types/cell"
import type { Activity } from "../types/github"
import { formatDate } from "./format-date"

export function buildCells(contributions: Activity[]): Cell[] {
  const weeksCount = Math.ceil(contributions.length / 7)
  return Array.from({ length: weeksCount }).flatMap((_, weekIndex) =>
    contributions
      .slice(weekIndex * 7, weekIndex * 7 + 7)
      .map(({ date, level, count }, dayIndex) => ({
        weekIndex,
        dayIndex,
        x: weekIndex * STEP,
        y: LAYOUT.TOP_OFFSET + dayIndex * STEP,
        date,
        level: Number(level),
        count,
      }))
  )
}

export function buildMonthLabels(contributions: Activity[], locale: string) {
  const weeksCount = Math.ceil(contributions.length / 7)
  const labels: { x: number; label: string }[] = []

  for (let weekIndex = 1; weekIndex < weeksCount; weekIndex++) {
    const week = contributions.slice(weekIndex * 7, weekIndex * 7 + 7)
    if (!week.length) continue

    const month = formatDate(locale, week[0]?.date)
    const prevWeek = contributions.slice((weekIndex - 1) * 7, weekIndex * 7)
    const prevMonth = prevWeek.length
      ? formatDate(locale, prevWeek[0]?.date)
      : null

    if (month !== prevMonth) {
      labels.push({
        x: weekIndex * STEP,
        label: month[0]?.toUpperCase() + month.slice(1),
      })
    }
  }
  return labels
}
