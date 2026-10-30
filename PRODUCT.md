# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Founders and leaders at growing startups who need software built and scaled but don't have the in-house team for it. They come to Hajolong to ship a product, automate operations with AI bots, modernize a system they've outgrown, or get ongoing guidance as a virtual CTO. They're evaluating whether this team can move fast, deliver for real, and leave them owning what was built.

## Product Purpose

Hajolong Solutions is a startup software and AI agency. It turns ideas into working software that solves real problems and real business issues: custom web applications, and agentic AI built on and fine-tuned from the AI products of major providers such as Google and Amazon. The marketing site exists to turn a visiting founder into a consultation request (contact form, direct email, or LinkedIn). It succeeds when visitors understand what Hajolong builds and trust it enough to reach out.

## Positioning

Agentic AI leads the offer. Hajolong does not train foundation models from scratch. It builds agents on top of existing AI products from providers such as Google and Amazon, then fine-tunes and adapts them to each client's data and workflows. The headline form of this is custom AI bots and workflow agents: bots trained on the client's own documents that handle customer support around the clock, qualify leads, connect to the CRM, and run on web, WhatsApp, and Slack. The other services support that lead:

- custom web and platform development
- system redesign and modernization
- software and API integration
- data and analytics dashboards
- strategic consulting and growth planning

These differentiators back the offer:

- **Direct senior engineering.** Clients work with the principal engineers who write the code, with no junior handoffs or account-manager layers.
- **Plain-English collaboration.** No jargon. The client always knows what is being built and why.
- **100% client IP ownership.** All code, data, and assets belong to the client from day one, built on open standards with no lock-in.
- **Milestone delivery.** Work ships in two-week milestones with live demos.

## Operating Context

Visitors arrive through LinkedIn (linkedin.com/company/hajolong-solution) and direct links. Every conversion path ends in email to contact@hajolong.com. The contact form builds a Gmail compose URL, and no backend receives submissions. The site has these routes:

- Home (`/`)
- Solutions (`/solutions`)
- Services (`/services`)
- About (`/about`)
- Contact (`/contact`)

The home page includes an interactive scope estimator and an animated mascot named Genghuli (formerly AXIOM), after the Chakma genghulis, the minstrels who sing the community's old ballads.

## Capabilities and Constraints

- The site runs on Next.js 16 (App Router) with React 19 and Tailwind CSS v4. It deploys on Vercel.
- It has light and dark themes. The choice persists in localStorage (`hajolong-theme`) and falls back to `prefers-color-scheme`.
- The site has no form backend, CMS, or analytics integration. Contact runs entirely through Gmail compose and mailto.
- **Unconfirmed:** whether Hajolong holds any official partner status with Google, Amazon, or other providers. Until that's confirmed, copy may say Hajolong builds on these platforms but must not claim partnership, certification, or use their logos as endorsement.
- **Open decision:** which specific provider products to name publicly (for example Gemini or Vertex AI, Amazon Bedrock).
- **Open decision:** how the scope estimator turns into an actual quote or call booking.

## Brand Commitments

- The company name is HAJOLONG SOLUTIONS (legal footer: "HAJOLONG Solutions Inc."). The founding team is Chakma.
- **Name meaning:** Hajolong (its Chakma name; Kassalong or Kasalong in Bangla) is the name of a river with cultural significance in the Chittagong Hill Tracts (CHT) of Bangladesh. The name is a deliberate tie to the team's home and heritage. Any use of this story or of CHT and Chakma culture must be accurate and respectful, and should be reviewed by the team rather than invented or turned into decoration.
- Brand assets live in `public/images/`:
  - horizontal light and dark logos
  - full logo
  - emblem
  - the Genghuli mascot as layered robot parts
- The voice is confident, plain English, and outcome-focused, aimed at business results rather than technology for its own sake.

## Evidence on Hand

- **Team:** six members with photos in `public/images/` and roles in `src/app/about/page.tsx`:
  - Win Chakma: Founder & Lead Technical Architect
  - Simon Chakma: Founder & Head of Operations
  - Tushar Chakma: Founder & Strategic Investment Partner
  - Bhoumik Chakma: Project Manager & Growth Marketing
  - Durnibar Chakma: Head of UI/UX Systems
  - Jasmin Chakma: Technical Lead & Backend Architecture
- **Commitments the team confirms it stands behind:**
  - 99.99% system availability
  - zero-downtime migrations
  - AI bots resolving up to 80% of routine customer questions
  - plain-English technical assessments within 2 hours
  - 4–8 week delivery on most projects
  - two-week milestones
- **Absent:** client logos, case studies, testimonials, named customers, pricing, and press. Future work must not invent any of these. It should leave slots or ask for real material.

## Product Principles

1. **AI first, full-stack behind it.** Every surface should make the AI-bot offer unmistakable while showing that the same team can build everything around it.
2. **Prove it, don't promise it.** Back claims with the confirmed commitments, concrete mechanisms, and real people. Never add new metrics or social proof.
3. **Founder-to-builder directness.** Visitors should feel they are talking to the engineers themselves, not an agency front desk.
4. **Plain English always.** Explain outcomes in business terms and keep jargon out of headlines.
5. **One clear next step.** Every page leads to a consultation request without friction.
