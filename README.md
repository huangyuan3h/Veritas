# Veritas Learning Platform

An education-first platform designed to support lifelong growth, beginning as early as age three. The project combines guided learning paths, collaborative tools for families and mentors, and a human-centered design ethos.

## Table of Contents

1. [Vision](#vision)
2. [Key Features](#key-features)
3. [Tech Stack](#tech-stack)
4. [Architecture Overview](#architecture-overview)
5. [Project Structure](#project-structure)
6. [Getting Started](#getting-started)
7. [Environment Variables](#environment-variables)
8. [Development Workflow](#development-workflow)
9. [Testing Strategy](#testing-strategy)
10. [Deployment](#deployment)
11. [Roadmap](#roadmap)
12. [Contributing](#contributing)
13. [License](#license)

## Vision

Empower children, families, and lifelong learners through a human-centered educational experience that evolves with each learner’s needs. The platform emphasizes:

- Personalized learning journeys
- Collaborative engagement among parents, guardians, and mentors
- Ethical use of data and responsible AI assistance
- Inclusive experiences across age groups, backgrounds, and abilities

## Key Features

- **Adaptive Learning Paths**: Curated curricula tailored by age, interests, and developmental milestones.
- **Growth Journals**: Track achievements with multimedia portfolios and milestone timelines.
- **Family & Mentor Hub**: Shared workspaces, messaging, and collaborative planning tools.
- **AI Guidance**: Learning recommendations, content summaries, and reflective prompts.
- **Accessible UI**: Tailwind CSS + shadcn/ui for responsive, inclusive design.
- **Observability**: Built-in tracing, logging, and monitoring via AWS native services.

## Tech Stack

| Layer            | Selection                                           |
| ---------------- | --------------------------------------------------- |
| Framework        | [Next.js](https://nextjs.org/) (App Router)         |
| Runtime          | [Bun](https://bun.sh/)                              |
| Infrastructure   | [SST](https://sst.dev/) on AWS                      |
| Styling          | Tailwind CSS + [shadcn/ui](https://ui.shadcn.com/)  |
| Database         | AWS DynamoDB (initial) + S3 for assets (extensible) |
| Authentication   | AWS Cognito or SST Auth helper                      |
| Messaging/Events | AWS EventBridge, SQS (optional)                     |
| Observability    | CloudWatch Logs, X-Ray, structured logging          |
| AI Integrations  | OpenAI / AWS Bedrock (pluggable)                    |
| Testing          | Bun test (unit), Playwright (E2E), ESLint, Prettier |
| CI/CD            | GitHub Actions → SST deploy                         |

## Architecture Overview

```
frontend (Next.js App Router)
│
├─ UI Library (Tailwind + shadcn/ui)
├─ Content Layer (MDX / CMS integration)
├─ Route Handlers (API routes, SST Functions)
│
├─ Authentication (Cognito via SST)
├─ Data Layer (DynamoDB tables + S3 assets)
├─ Event Layer (EventBridge workflows)
└─ Analytics & Observability (CloudWatch, custom dashboards)
```

### Suggested High-Level Modules

- `apps/web`: Next.js app with App Router, shared components, layouts.
- `stacks/`: SST stack definitions:
  - `CoreStack` (VPC, DynamoDB, S3, CloudFront)
  - `AuthStack` (Cognito, user pools, IAM roles)
  - `ApiStack` (AppSync / API Gateway integrations, Lambda functions)
  - `ObservabilityStack` (dashboards, alarms, logging sinks)
- `packages/`: Shared libraries (`ui`, `core`, `analytics`, `ai`).

## Project Structure

```
.
├─ apps/
│  └─ web/                  # Next.js application
│     ├─ app/               # App Router routes
│     ├─ components/
│     ├─ lib/
│     └─ styles/
├─ packages/
│  ├─ ui/                   # shadcn/ui extensions, design tokens
│  ├─ core/                 # domain logic, validation, utilities
│  └─ analytics/            # instrumentation helpers
├─ stacks/
│  ├─ CoreStack.ts
│  ├─ AuthStack.ts
│  ├─ ApiStack.ts
│  └─ ObservabilityStack.ts
├─ scripts/                 # automation via Bun
├─ tests/
│  ├─ unit/
│  └─ e2e/
├─ sst.config.ts
├─ package.json
├─ bunfig.toml
└─ README.md
```

## Getting Started

1. **Install prerequisites**

   - Node.js (LTS) for tooling fallback
   - Bun (`curl -fsSL https://bun.sh/install | bash`)
   - AWS CLI (`aws configure`)
   - SST CLI (`npm install -g sst`)

2. **Install dependencies**

   ```bash
   bun install
   ```

3. **Initialize environment**

   ```bash
   cp .env.example .env
   # Fill in required secrets
   ```

4. **Start development**

   ```bash
   bun run dev
   ```

5. **Run SST dev**
   ```bash
   sst dev
   ```
   - Provides live AWS environment emulation and Lambda hot reloading.

## Environment Variables

| Variable               | Description                          |
| ---------------------- | ------------------------------------ |
| `NEXT_PUBLIC_APP_NAME` | Display name for UI                  |
| `DATABASE_TABLE_NAME`  | DynamoDB table identifier            |
| `ASSETS_BUCKET_NAME`   | S3 bucket for user generated content |
| `COGNITO_USER_POOL_ID` | Authentication pool ID               |
| `COGNITO_CLIENT_ID`    | Web client ID                        |
| `OPENAI_API_KEY`       | Optional AI integration key          |
| `ANALYTICS_WRITE_KEY`  | Telemetry/analytics target           |

Use AWS Parameter Store or Secrets Manager for sensitive values in production.

## Development Workflow

- Branch naming: `feature/*`, `fix/*`, `chore/*`
- Commit messages follow Conventional Commits (`feat:`, `fix:`, etc.)
- Run Bun scripts:
  - `bun run dev`: Next.js dev server
  - `bun run lint`: ESLint with type-aware rules
  - `bun run format`: Prettier formatting
  - `bun run test`: Unit test suite
  - `bun run test:e2e`: Playwright E2E
  - `bun run storybook`: Optional UI preview

## Testing Strategy

- **Unit Tests**: Bun test framework + Vitest compatibility for shared packages.
- **Integration Tests**: Next.js route handlers, DynamoDB interactions (use SST’s LocalStack or DynamoDB Local).
- **E2E Tests**: Playwright with mock auth + seeded data.
- **Performance & Accessibility**:
  - Lighthouse audits
  - axe-core scans

## Deployment

1. **Prerequisites**

   - Configure AWS credentials with deployment role.
   - Set `sst.config.ts` stages (`dev`, `staging`, `prod`).

2. **Commands**

   ```bash
   sst deploy --stage dev
   sst deploy --stage prod
   ```

3. **Infrastructure Notes**

   - CloudFront distribution fronting Next.js
   - DynamoDB autoscaling for read/write
   - EventBridge rules for content moderation and notifications
   - CloudWatch alarms on latency/error thresholds

4. **CI/CD (Suggested)**
   - GitHub Actions workflow:
     - Install Bun
     - `bun install`
     - `bun run lint && bun run test`
     - Deploy using `sst deploy` with OIDC role

## Roadmap

- [ ] Flesh out domain models for learning plans and milestones
- [ ] Integrate adaptive recommendations (AI agent)
- [ ] Launch multilingual content framework
- [ ] Add guardian dashboards and actionable insights
- [ ] Build community collaboration features (shared journals, events)
- [ ] Set up analytics dashboards with user journey tracking
- [ ] Define monetization & subscription tiers (future work)

## Contributing

1. Fork and clone the repository
2. Create a feature branch
3. Ensure lint/tests pass
4. Submit a Pull Request with context, screenshots, and test results

## License

TBD. Choose an appropriate license (e.g., MIT, Apache 2.0) before public release.
