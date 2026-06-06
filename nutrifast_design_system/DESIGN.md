---
name: NutriFast Design System
colors:
  surface: '#f9f9ff'
  surface-dim: '#d3daea'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eefe'
  surface-container-high: '#e2e8f8'
  surface-container-highest: '#dce2f3'
  on-surface: '#151c27'
  on-surface-variant: '#3d4a3d'
  inverse-surface: '#2a313d'
  inverse-on-surface: '#ebf1ff'
  outline: '#6d7b6c'
  outline-variant: '#bccbb9'
  surface-tint: '#006e2f'
  primary: '#006e2f'
  on-primary: '#ffffff'
  primary-container: '#22c55e'
  on-primary-container: '#004b1e'
  inverse-primary: '#4ae176'
  secondary: '#855300'
  on-secondary: '#ffffff'
  secondary-container: '#fea619'
  on-secondary-container: '#684000'
  tertiary: '#b91a24'
  on-tertiary: '#ffffff'
  tertiary-container: '#ff8a83'
  on-tertiary-container: '#860011'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#6bff8f'
  primary-fixed-dim: '#4ae176'
  on-primary-fixed: '#002109'
  on-primary-fixed-variant: '#005321'
  secondary-fixed: '#ffddb8'
  secondary-fixed-dim: '#ffb95f'
  on-secondary-fixed: '#2a1700'
  on-secondary-fixed-variant: '#653e00'
  tertiary-fixed: '#ffdad7'
  tertiary-fixed-dim: '#ffb3ad'
  on-tertiary-fixed: '#410004'
  on-tertiary-fixed-variant: '#930013'
  background: '#f9f9ff'
  on-background: '#151c27'
  surface-variant: '#dce2f3'
typography:
  display-data:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  touch-target: 44px
  container-padding: 16px
---

## Brand & Style
The design system is rooted in **Clinical Minimalism**—a blend of high-utility functionalism and soft, encouraging aesthetics. It aims to reduce the cognitive load of health tracking by prioritizing whitespace, clarity, and "success-state" visuals. 

The personality is that of an efficient digital coach: professional but not cold, encouraging but not overbearing. The interface uses a **Corporate Modern** style with subtle **Glassmorphic** influences for data overlays to maintain a light, airy feel even when displaying dense nutritional information. It is built to feel native on mobile devices, echoing the fluidity of modern OS design.

## Colors
The palette is functional and semantic, designed to provide immediate visual feedback on health goals.

- **Primary (Vibrant Green):** Used for "On-Track" statuses, completion of goals, and primary action buttons.
- **Secondary (Amber):** Represents "Warning" or "Low" states (e.g., low protein intake or pending logs).
- **Tertiary (Muted Red):** Reserved for "Limit Exceeded" states (e.g., calorie overages) and destructive actions.
- **Neutrals:** A range of cool grays used for secondary text and structural borders to keep the focus on colored data points.
- **Surface Strategy:** The background is pure white to maximize contrast, while secondary sections use a very light gray to create subtle grouping without heavy lines.

## Typography
The typography uses **Inter** to ensure maximum legibility across different screen densities. 

- **Data Emphasis:** For numerical values like calorie counts, use `display-data` with tight letter spacing to create a sense of importance.
- **Hierarchy:** Headings should be bold and prominent to allow users to scan their daily stats quickly.
- **Accessibility:** Ensure that body text never falls below 16px for meal descriptions and instructions to accommodate users in various lighting conditions (e.g., in the kitchen or gym).

## Layout & Spacing
This design system employs a **Fluid Grid** model optimized for mobile-first PWA delivery.

- **Rhythm:** An 8px linear scale governs all spacing.
- **Safe Zones:** Content is contained within a 16px lateral margin on mobile devices.
- **Touch Targets:** Every interactive element (buttons, list items, toggles) must adhere to a minimum 44x44px tap area to ensure ease of use during active movement.
- **Vertical Flow:** Use `xl` (32px) spacing between major card sections (e.g., Breakfast vs. Lunch) and `md` (16px) for internal card elements.

## Elevation & Depth
Depth is used sparingly to maintain the minimal aesthetic. 

- **Level 0 (Background):** Pure white or `#F9FAFB` for the lowest layer.
- **Level 1 (Cards):** Use a very soft, diffused shadow (`y: 4, blur: 12, opacity: 0.05`) with a neutral tint to lift meal cards and progress containers.
- **Level 2 (Active/Floating):** Use for the bottom navigation bar and floating action buttons (FAB). These should have a slightly more pronounced shadow and a backdrop-blur (10px) if they overlap content.
- **No Borders:** Avoid harsh borders; use tonal changes and shadows to define boundaries.

## Shapes
The shape language is "Extra-Rounded" to evoke a friendly, modern, and organic feel appropriate for a health app.

- **Standard Elements:** Buttons and small input fields use a base roundedness of 0.5rem (8px).
- **Cards & Sections:** Use `rounded-xl` (1.5rem/24px) or `rounded-2xl` (2rem/32px) for primary meal cards and dashboard containers to create a soft, approachable container for data.
- **Progress Elements:** Progress bars and rings must have fully rounded (pill-shaped) caps to maintain the organic visual flow.

## Components
- **Primary Buttons:** High-contrast green (#22C55E) with white text, 48px height, and `rounded-lg` corners.
- **Meal Cards:** Large 24px-32px rounded corners, subtle shadow, and generous 20px internal padding. Title in `headline-md` and macros in `label-md`.
- **Progress Rings:** Use a stroke width of 8px-12px. The "Track" should be a 10% opacity version of the progress color.
- **Bottom Navigation:** A fixed-position bar with 15px backdrop-blur, 1px top border of `#F3F4F6`, and clear active-state icons in the primary green.
- **Input Fields:** Large, 44px+ height targets with `#F9FAFB` background and no border until focused.
- **Macro Chips:** Small, pill-shaped tags (e.g., "High Protein", "Vegan") using low-saturation background tints and high-saturation text for readability.
- **Search/Food Logs:** For food items like "Roti" or "Dal," include a "Quick Add" button directly in the list view to minimize taps.