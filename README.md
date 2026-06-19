# Next.js Fake-SaaS Personal Project

## Key Naming Patterns Summary

| Element Type          | Convention                  | Example                               |
| --------------------- | --------------------------- | ------------------------------------- |
| File & Folder Names   | kebab-case                  | user-profile.tsx, dashboard-settings/ |
| Component Names       | PascalCase                  | function UserProfile() {}             |
| Variables & Props     | camelCase                   | userSettings, handleSubmit            |
| Constants             | UPPER_SNAKE_CASE            | API_BASE_URL, MAX_RETRIES             |
| Custom Hooks          | camelCase with "use" prefix | useAuth, useDataFetcher               |
| TypeScript Interfaces | PascalCase                  | interface UserProfileProps {}         |

## Atomic Design

| Path (src/components/) | Comment                        | Sample                        |
| ---------------------- | ------------------------------ | ----------------------------- |
| atoms/                 | Basic elements                 | (Button, Input, Label)        |
| molecules/             | Combinations of atoms          | (SearchBar, FormField)        |
| organisms/             | Complex sections               | (Header, Footer, ProductList) |
| templates/             | Page layouts with placeholders | (MainLayout)                  |

## Common UI Atoms

### Form Elements

| HTML Tags      | How to use                                                                                                                    |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Inputs         | Text fields, password fields, email inputs, number inputs, checkboxes, radio buttons, toggles/switches, and select dropdowns. |
| Buttons        | Primary buttons, secondary buttons, icon-only buttons, and link-style buttons.                                                |
| Labels         | Field labels and helper text.                                                                                                 |
| Error Messages | Inline validation text.                                                                                                       |

### Typography

| HTML Tags | How to use                          |
| --------- | ----------------------------------- |
| Headings  | `<h1>` through `<h6>` components.   |
| Body Text | Paragraphs, spans, and blockquotes. |
| Links     | Styled anchor tags.                 |
| Lists     | Ordered and unordered list items.   |

### Media & Graphics

| HTML Tags | How to use                                                      |
| --------- | --------------------------------------------------------------- |
| Icons     | SVG components or icon font wrappers.                           |
| Images    | Basic image components with lazy loading or optimization props. |
| Avatars   | User profile image placeholders.                                |
| Logos     | Brand mark components.                                          |

### Feedback & Status

| HTML Tags        | How to use                                            |
| ---------------- | ----------------------------------------------------- |
| Badges           | Small status indicators (e.g., "New", "Hot").         |
| Tooltips         | Hover information bubbles.                            |
| Spinners/Loaders | Simple loading indicators.                            |
| Progress Bars    | Linear or circular progress indicators.               |
| Alerts           | Basic notification banners (success, error, warning). |

### Layout & Structure

| HTML Tags  | How to use                                                                                 |
| ---------- | ------------------------------------------------------------------------------------------ |
| Dividers   | Horizontal rules (`<hr>`) or visual separators.                                            |
| Containers | Basic wrapper divs with padding/margin constraints.                                        |
| Cards      | The most basic card shell (though often a molecule if it contains specific content slots). |

## Pages Plan

```
src/
├── app/
│   ├── (auth)/                      # Route Group: Public Auth Pages (URL: /login, /signup)
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── signup/
│   │   │   └── page.tsx
│   │   ├── layout.tsx               # Auth Layout (Centered, no sidebar)
│   │   └── _components/             # Private: Auth Forms, Inputs
│   │       ├── login-form.tsx
│   │       └── signup-form.tsx
│   │
│   ├── (dashboard)/                 # Route Group: Protected App (URL: /dashboard, /inventory)
│   │   ├── layout.tsx               # Dashboard Layout (Sidebar, Header, Tenant Context)
│   │   ├── page.tsx                 # Main Dashboard Home
│   │   ├── onboarding/
│   │   │   └── page.tsx             # Post-signup wizard
│   │   ├── inventory/
│   │   │   ├── page.tsx             # Product List
│   │   │   ├── new/
│   │   │   │   └── page.tsx         # Add Product
│   │   │   └── [id]/
│   │   │       └── edit/
│   │   │           └── page.tsx     # Edit Product
│   │   ├── settings/
│   │   │   ├── page.tsx             # Org Profile
│   │   │   ├── team/
│   │   │   │   └── page.tsx         # Team Management
│   │   │   └── billing/
│   │   │       └── page.tsx         # Subscription & Plans
│   │   └── _components/             # Private: Dashboard Widgets, Tables, Charts
│   │       ├── sidebar.tsx
│   │       ├── inventory-table.tsx
│   │       └── stats-card.tsx
│   │
│   ├── (admin)/                     # Route Group: Super Admin (URL: /admin)
│   │   ├── layout.tsx               # Admin Layout (Distinct styling)
│   │   ├── page.tsx                 # Global Metrics (MRR, Tenants)
│   │   └── tenants/
│   │       └── page.tsx             # Tenant Management List
│   │
│   ├── api/                         # API Routes
│   │   ├── auth/
│   │   │   └── [...nextauth]/
│   │   │       └── route.ts         # Auth Handler
│   │   ├── stripe/
│   │   │   ├── create-portal/
│   │   │   │   └── route.ts         # Billing Portal
│   │   │   └── webhook/
│   │   │       └── route.ts         # Stripe Webhooks
│   │   └── tenants/
│   │       └── route.ts             # Tenant CRUD
│   │
│   ├── layout.tsx                   # Root Layout (Fonts, Global Providers)
│   ├── page.tsx                     # Landing Page (Public)
│   ├── globals.css
│   └── middleware.ts                # CRITICAL: Auth Guard & Tenant Resolution
│
├── components/                      # Shared UI Components (Buttons, Modals)
│   ├── ui/
│   └── providers/                   # Context Providers (Theme, Toast)
│
├── lib/                             # Core Logic
│   ├── db.ts                        # Database Connection
│   ├── stripe.ts                    # Stripe Initialization
│   ├── auth.ts                      # Auth Configuration
│   └── utils.ts                     # Helper functions
│
├── hooks/                           # Custom React Hooks
│   ├── use-tenant.ts                # Hook to get current tenant context
│   └── use-subscription.ts          # Hook to check plan limits
│
└── types/                           # TypeScript Definitions
    ├── tenant.ts
    └── product.ts
```

## Key Implementation Details

1. Route Groups (auth), (dashboard), (admin):
   - These folders organize your code by intent but do not add to the URL path.
   - Example: `src/app/(dashboard)/inventory/page.tsx` maps to `yourdomain.com/inventory`, not `yourdomain.com/dashboard/inventory`.
   - This allows you to apply specific Layouts (e.g., a sidebar for `(dashboard)` but not for `(auth)`) easily.

2. Private Folders \_components:
   - Prefixing a folder with \_ (e.g., `src/app/(dashboard)/\_components`) tells Next.js not to treat it as a route.
   - Use this to store components that are only used within that specific section (e.g., `sidebar.tsx` inside `(dashboard)`).

3. Middleware (src/app/middleware.ts):
   - This is the engine of your SaaS. It must run before every request to:
     Protect Routes: Redirect unauthenticated users from `(dashboard)` to `/login`.
   - Resolve Tenant: Identify which tenant the user belongs to (via subdomain or session) and inject that ID into the request headers for your API to use.
   - Check Subscription: Block access if the tenant's subscription is `past_due` or `canceled`.

4. API Structure:
   - Keep your API routes modular under `src/app/api`.
   - The `webhook` route is essential for simulating Stripe events (e.g., automatically upgrading a tenant when a payment succeeds).

## @Capacitor Mobile Apps

To build mobile apps

```
npx cap add android
npx cap add ios
```

```
npm run build
npx cap sync
```
```
npx cap open android
npx cap open ios   
```

## Tauri Desktop App

