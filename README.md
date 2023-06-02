# Feedback hub

A small project to help write reports for pre/primary school children from a collection of preset sentences. It is aimed at saving time and avoiding typos in the reports.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

* Collection of preset sentences
* Filters on quickly find relevant sentences and reduce scrolling
* Placeholders for student name, possessive and personal pronouns
* Buttons to copy, clear and replace the placeholders in the report
* Allows manual text entry

### Replace placeholders and Copy text behaviour

* Replace placeholders - will replace pre-set placeholders (in <>) in the text area directly

* Copy text - will keep the contents of the text area the same, but will perform substitution for the placeholder values and add its contents to the users clipboard. This however might not always be allowed on some machines which can lockdown this behaviour. Replace placeholders button exists for this reason.
