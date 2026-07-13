# CareConnect – Mini Healthcare Support Portal

CareConnect is a concept-level React web app for the Jarurat Care Foundation NGO. It showcases a simple patient support experience with a modern landing page, a responsive support form, an AI-style summary screen, and a success confirmation state.

## Project Overview

This frontend-only project demonstrates how a healthcare NGO could collect patient support requests, create a preliminary volunteer-facing case summary, and guide users through a calm and accessible support experience.

## Tech Stack

- React
- Vite
- React Router
- Plain CSS

## AI Concept

The AI summary feature is simulated with lightweight JavaScript rule matching instead of an external AI API. It recognizes common symptom keywords and suggests:

- detected symptoms
- estimated priority
- recommended department
- volunteer response time
- a short summary paragraph

## NGO Use Case

Jarurat Care Foundation can use this portal to receive support requests quickly, route them to the most relevant volunteer team, and provide a more organized first-response experience.

## Run Locally

```bash
npm install
npm run dev
```

The app will be available in the browser at the local Vite address shown in the terminal.

## Deployment

The project is ready to be deployed directly to Vercel using the standard Vite React build flow.
