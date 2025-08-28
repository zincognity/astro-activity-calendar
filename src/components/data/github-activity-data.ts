let cachedData: Contribution
let lastFetch = 0
const HOUR = 1000 * 60 * 60

interface Contribution {
  total: {
    lastYear: number
  }
  contributions: Activity[]
}

interface Activity {
  date: string
  count: number
  level: number
}

export async function getGithubActivityData(user: string) {
  const now = Date.now()
  if (!cachedData || now - lastFetch > HOUR) {
    const response = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${user}?y=last`
    )
    cachedData = await response.json()
    lastFetch = now
  }
  return cachedData!
}

export const githubColorLevel: Record<number, string> = {
  0: "#161b22",
  1: "#113357",
  2: "#1e4b8c",
  3: "#2a66c8",
  4: "#539bf5",
}
