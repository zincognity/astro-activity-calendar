import type { Contribution } from "../../types/github"

/**
 * Cached contribution data from the GitHub contributions API.
 * This is used to avoid unnecessary requests within a 1-hour window.
 */
let cachedData: Contribution

/**
 * Timestamp of the last successful fetch (in ms).
 */
let lastFetch = 0

/**
 * One hour in milliseconds.
 */
const HOUR = 1000 * 60 * 60

/**
 * Fetches GitHub contribution data for a given user.
 * Uses a 1-hour cache to reduce API calls.
 *
 * @param user GitHub username.
 * @returns A {@link Contribution} object containing totals and daily activity.
 */
export async function getGithubActivityData(
  user: string,
  cache: boolean = true
) {
  const now = Date.now()
  if (!cachedData || now - lastFetch > HOUR || !cache) {
    const response = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${user}?y=last`
    )
    cachedData = await response.json()
    lastFetch = now
  }
  return cachedData!
}
