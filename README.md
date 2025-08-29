# 🚀 Astro Activity Calendar

A reusable **Astro component** to display interactive GitHub activity -
contributions calendars. Perfect for showing contributions or activity heatmaps
in your Astro project.

This component uses
[github-contributions-api](https://github.com/grubersjoe/github-contributions-api)
to fetch GitHub activity data.

---

![example](<img/Screenshot 2025-08-28 at 6.20.28 PM.png>)

## Installation

Install via npm:

```bash
npm install astro-github-activity
```

# Usage

```astro
---
import ActivityCalendar from "astro-github-activity"
`
// Example: pass GitHub username to fetch contributions
const username = "your-github-username"
---

<ActivityCalendar user={username} />
```

# Props

| Prop         | Type                          | Default                               | Description                                |
| ------------ | ----------------------------- | ------------------------------------- | ------------------------------------------ |
| username     | string                        | -                                     | GitHub username to fetch contributions for |
| locale       | string                        | 'en'                                  | Locale for formatting dates and activity   |
| theme        | 'light' \| 'dark' \| 'indigo' | 'indigo'                              | Theme for the calendar UI                  |
| hoverMessage | string                        | '{{count}} contributions on {{date}}' | Message to display on hover                |
| totalMessage | string                        | '{{total}} total contributions'       | Message to display for total contributions |
| cache        | boolean                       | true                                  | Enable caching for API requests            |
| themeProps   | object                        | -                                     | Additional props for the calendar theme    |

# Examples

[This is an example of use in my portfolio](https://incognity.dev#activity)

## Dark theme

```astro
---
import ActivityCalendar from "astro-github-activity"
---

<ActivityCalendar user={"zincognity"} theme="dark" />
```

# Development

If you want to contribute or test locally:

```bash
# Clone the repo
git clone https://github.com/zincognity/astro-github-activity.git

# Install dependencies
npm install

# Run a local Astro dev server
npm run dev
```
