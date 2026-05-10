# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

On Windows, `node` and `npm` are not in the default shell PATH. Use the full path or prepend it:

```powershell
$env:PATH = "C:\Program Files\nodejs;$env:PATH"
npm install
npm run dev      # dev server at http://localhost:5173
npm run build    # production build
npm run lint     # ESLint
npm run preview  # preview production build
```

## Architecture

Single-file React app (`src/App.jsx`) — all state, logic, and UI live there. No routing, no context, no external state library.

**State:** `transactions` array is the source of truth. Each transaction has `{ id, description, amount, type, category, date }`. `amount` is stored as a string (this is an intentional bug in the starter — fix by parsing to `Number` before arithmetic).

**Derived values:** `totalIncome`, `totalExpenses`, and `balance` are computed inline from `transactions` on every render. `filteredTransactions` applies `filterType` and `filterCategory` on top.

**Styling:** flat CSS in `src/App.css`. Color classes `.income-amount` and `.expense-amount` are reused on both summary cards and table rows.

## Known intentional issues (course starting point)

- `amount` stored as a string causes broken arithmetic in totals (string concatenation instead of addition).
- Transaction #4 ("Freelance Work") is typed as `"expense"` but categorized as `"salary"` — likely meant to be income.
- UI is intentionally minimal/unstyled as a starting point for the course.
