# CAI (Cunning AI) website

Marketing site for CAI, an AI consultancy founded by Max Cunningham. Next.js 14 (app router), React 18, Tailwind 3, Framer Motion. Single page: `app/page.tsx` (Hero, About, Contact) plus a custom cursor in `components/Cursor.tsx`.

Run locally with `npm install && npm run dev`.

## Design context

Read this before any design or UI work. Items marked *(assumed)* were inferred from the current site and still need Max's confirmation.

### Who it's for
- Founders, operators and leadership teams at businesses that want to adopt AI quickly and sensibly, not AI researchers or developers. *(assumed)*
- The visitor's job: decide in under a minute whether CAI is credible and worth emailing. The single conversion is the mailto link.

### Brand personality
- Three words: **quiet, confident, editorial.**
- Tagline: "The quiet advantage." Copy promises "fast, considered, and without the noise".
- The site should feel like a private studio or a design-led VC firm, not a SaaS landing page. Restraint signals competence.

### Aesthetic direction
- Dark, high-contrast, cinematic. Near-black background `#080808`, warm off-white text `#f5f2ee`, hierarchy built with opacity on that one off-white (0.3 / 0.55 / 0.65) rather than extra colours.
- Typography: Bebas Neue for display (big, condensed, slight positive tracking), Space Mono for everything else (small, uppercase, wide 0.2 to 0.35em tracking for labels).
- Full-bleed photography or painting in the hero under a 40% black overlay (`public/image.jpg`, `public/painting.jpg`).
- Motion: slow, eased reveals (1.1s, `cubic-bezier(0.22, 1, 0.36, 1)`, 0.2s stagger), plus a lagging custom cursor on pointer devices. Nothing bouncy.
- Generous whitespace: sections use ~10rem vertical padding and 1px `#161616` dividers.

### Anti-references (avoid)
- Purple/blue gradients, glowing orbs, neural-net graphics, robot imagery and other generic "AI startup" clichés.
- Card grids with icons, feature checklists, stock illustration, emoji.
- Loud CTAs and multiple accent colours. The `green` (`#00ff7f`) token in `tailwind.config.ts` is defined but unused; only introduce an accent deliberately. *(assumed)*

### Principles
1. Say less. Every element must earn its place.
2. Type does the work: scale and spacing create hierarchy, not boxes or colour.
3. Calm motion that supports reading, and respects `prefers-reduced-motion`.
4. Mobile is first-class: the custom cursor is disabled on touch, and grids stack under 680px.
5. Accessible contrast: dimmed text at 0.3 opacity is decorative only; body copy stays at 0.6 or above.

### Known design debt
- Styles are mostly inline objects in `app/page.tsx` while Tailwind tokens sit unused; colours are hard-coded in several places. Consolidate into tokens before large changes.
- Bebas Neue only ships weight 400, but headings set `fontWeight: 700`, so browsers synthesise a faux bold.
- No `prefers-reduced-motion` handling yet for the reveals or the cursor.
- Brand name appears as both "CAI" (metadata) and "C-AI" (hero, copy). Pick one.
