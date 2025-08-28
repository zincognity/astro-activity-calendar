# Astro Activity Calendar

A reusable **Astro component** to display GitHub-like activity calendars.
Perfect for showing contributions, activity heatmaps, or any date-based data in
your Astro project.

This component uses
[github-contributions-api](https://github.com/grubersjoe/github-contributions-api)
to fetch GitHub activity data.

---

## Installation

Install via npm:

```bash
npm install astro-github-activity
```

# Usage

```astro
---
import ActivityCalendar from "astro-github-activity"

// Example: pass GitHub username to fetch contributions
const username = "your-github-username"
---

<ActivityCalendar username={username} />
```

# Props

| Prop         | Type                          | Default                               | Description                                |
| ------------ | ----------------------------- | ------------------------------------- | ------------------------------------------ |
| username     | string                        | -                                     | GitHub username to fetch contributions for |
| locale       | string                        | 'en'                                  | Locale for formatting dates and activity   |
| theme        | 'light' \| 'dark' \| 'indigo' | 'indigo'                              | Theme for the calendar UI                  |
| hoverMessage | string                        | '{{count}} contributions on {{date}}' | Message to display on hover                |
| totalMessage | string                        | '{{count}} total contributions'       | Message to display for total contributions |
| cache        | boolean                       | true                                  | Enable caching for API requests            |
| themeProps   | object                        | -                                     | Additional props for the calendar theme    |

# Examples

## Dark theme

```astro
---
import ActivityCalendar from "astro-github-activity"
---

<ActivityCalendar username={"zincognity"} theme="dark" />
```

# Development

If you want to contribute or test locally:

```bash
# Clone the repo
git clone https://github.com/zincognity/github-activity.git

# Install dependencies
npm install

# Run a local Astro dev server
npm run dev
```
