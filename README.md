This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started




Node Version Required- Above 18

To start project Open console and run npm install command


2. Component Architecture Overview
components/

Header.jsx – Sticky header with scroll detection

Footer.jsx – Responsive multi-column footer with background image

VideoBanner.jsx – Full-screen video with overlay content

AboutTabs.jsx –  Section with Product Details

ResponsiveSlider- Sections with Carousel Layout 

GetInTouch.jsx – Contact form with validation

pages/

page.js – Main layout and section composition

styles/

TailwindCSS config and custom styles

lib/ (Tailwind,Swiper for Carousel)

3. Responsive Design Strategy

TailwindCSS utility classes with responsive breakpoints (sm, md, lg, xl) used throughout.

Mobile-first approach: Layouts start simple and scale up.

Flexbox/Grid: Dynamic and consistent layouts.

Conditional rendering for layout shifts (e.g., stacking footer columns on mobile).

4. Performance Optimization Techniques Employed

Using <video> with proper preload="none" 

Minimal usage of large libraries (tree-shaking enabled by default in Next.js)

CSS class-based animations instead of large animation libraries (where possible)

Precise Layout With minimal Lines of Code( <More Improvement can be done> )

5. Accessibility Considerations

Semantic HTML: using <header>, <nav>, <section>, <footer>, etc.

aria-labels for buttons and icons

Keyboard navigation: form inputs and tabs are focusable via keyboard

Color contrast checked for readability

Responsive font sizes and resizable layouts

6. Explanation of Any Third-Party Libraries Used

react-spring – For smooth scroll animations and zoom effects

swiper – For tabbed content where slider experience is desired

tailwindcss – Utility-first CSS framework for rapid UI development

7.  Assumptions Made and Decisions Taken

Sticky header behavior assumes scroll detection based on window events (can be enhanced using Intersection Observer for sections)

Tabs are assumed to contain brief content, otherwise aria-expanded support and collapsibility may be needed

Form submissions are assumed to be handled client-side or via a simple backend/API endpoint

Mobile responsiveness takes priority over large screen design

8. Challenges Faced and Potential Solutions

Challenge	                                    Solution
Swiper not rendering correctly when wrapped-	Used Swiper outside conditional logic or in layout-specific wrappers

Sticky section overlaps content-	Used padding/margin + z-index and layout debugging

ProductDetails data rendering-   Used Proper logic for rendeing tabs that can mimic react spring feature (Also Tried using react spring but its learning curve needed more time)

Figma svg images missing for commercial truck section-  Used the same images from passenger section in order to maintain the layout 

Tried implementing all the features but missed out on a few due to time constraints.



First, run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


