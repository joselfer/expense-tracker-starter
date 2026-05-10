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

React app split across four components. No routing, no context, no external state library.

**`src/App.jsx`** — root component. Owns `transactions` array (the single source of truth) and passes it down. Handles adding new transactions via `handleAdd` callback.

**`src/Summary.jsx`** — receives `transactions`, computes `totalIncome`, `totalExpenses`, and `balance` internally, renders the three summary cards.

**`src/TransactionForm.jsx`** — owns all form state (`description`, `amount`, `type`, `category`). Calls `onAdd(transaction)` prop on submit and resets its own state.

**`src/TransactionList.jsx`** — receives `transactions`, owns `filterType` and `filterCategory` state, renders the filtered table.

**State:** each transaction has `{ id, description, amount, type, category, date }`. `amount` is a `Number`.

**Styling:** flat CSS in `src/App.css`. Color classes `.income-amount` and `.expense-amount` are reused on both summary cards and table rows.

## Known intentional issues (course starting point)

- Transaction #4 ("Freelance Work") is typed as `"expense"` but categorized as `"salary"` — likely meant to be income.
- UI is intentionally minimal/unstyled as a starting point for the course.
