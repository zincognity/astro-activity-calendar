/**
 * Representation of a contribution response.
 */
export interface Contribution {
  /**
   * Aggregated totals of contributions.
   */
  total: {
    lastYear: number
  }

  /**
   * Daily contribution activity list.
   */
  contributions: Activity[]
}

export interface Activity {
  /** ISO date string of the activity (e.g. "2025-08-28"). */
  date: string

  /** Number of contributions on this day. */
  count: number

  /** Contribution intensity level (0–4). */
  level: number
}
