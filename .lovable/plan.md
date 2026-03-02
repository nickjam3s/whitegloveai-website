

## Plan: Finish remaining Academy page tasks

### 1. Add missing 5th stat to the stats bar
In `src/pages/training/Academy.tsx`, add `{ value: "1 of 4", label: "Approved Vendors" }` to the `stats` array.

### 2. Delete the HB3512 Chatbot component
Remove `src/components/training/HB3512Chatbot.tsx` entirely. It is not imported anywhere else in the codebase, so no other files need updating.

