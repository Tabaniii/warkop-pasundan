# Warkop Pasundan

Next.js App Router, TypeScript, Tailwind CSS 4, Lucide, and Framer Motion. Static export supported.

## Run

`npm install` then `npm run dev`. Production: `npm run build`; deploy the `out/` directory to any static host.

## Business configuration

Edit `app/config.ts`. Set `NEXT_PUBLIC_WHATSAPP_NUMBER` in `.env.local` to a verified business WhatsApp number (country code included), then rebuild. Until configured, order buttons open an accessible dialog with a copyable message and the official Maps contact route. No invented phone number is used.

User-provided Google Maps link identifies Warkop Pasundan Setiabudi Tengah. The full address is supported by https://www.waze.com/live-map/directions/id/daerah-khusus-ibukota-jakarta/warkop-pasundan-setiabudi-tengah?to=place.ChIJbdSDi7b3aS4R9tdjK-NjLpo. Hours/phones conflict across listings, so they remain unconfirmed. Opening-hours claims and numerical ratings are intentionally omitted until verified. Real reviews are linked through Maps, not fabricated.

Menu descriptions, prices, and flavor badges are illustrative; confirm them before public launch. Facilities follow the creative brief and should be confirmed. Local Unsplash stock images are visibly labeled as illustrations, not actual venue/product photography. Replace them in `public/images` before launch.

## Interaction and accessibility

Responsive menu filtering, keyboard-operable category buttons, reduced-motion handling, native modal with Escape/focus management, sticky mobile action dock with safe-area support, semantic headings, skip link, image sizes, and lazy-loaded map.

Design references: UI/UX Pro Max guidance (spacing, contrast, touch targets) and https://21st.dev composable React/Tailwind card, navigation, and motion patterns. Components are custom implementations, not copied third-party components.
