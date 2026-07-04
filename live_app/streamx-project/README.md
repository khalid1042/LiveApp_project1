# StreamX — Live Streaming Platform (Frontend)

A fully responsive frontend UI for an enterprise live-streaming platform, built with plain HTML, CSS and JavaScript (no build step, no framework required). Matches the provided design mockup — dark theme, purple/pink/orange/green accent palette, Poppins/Inter typography.


## Folder Structure

```
streamx-project/
├── index.html          # Main app shell — sidebar, topbar, all screen sections
├── css/
│   └── style.css        # All styling (theme variables, layout, components, responsive breakpoints)
├── js/
│   └── app.js            # Navigation logic + mock data rendering (streams, chat, transactions, etc.)
├── assets/
│   └── images/           # Put local images here if you want to replace the Unsplash/pravatar placeholders
└── README.md
```

## Screens Included

- Home / Discover — categories, live-now grid, recommended grid, PK battle hero
- Live Stream — video player mock, floating gifts, goal bar, live chat panel
- Wallet — balance card, quick actions, recent transactions
- Buy Coins — selectable coin packages + payment methods with live price summary
- Creator Dashboard — stat cards, growth chart, top gifts
- Transactions — full history table
- Followers — follow / follow-back list
- Admin Dashboard — platform stats, reports donut chart, activity feed
- Reports — moderation queue
- Profile — cover, avatar, stats, video grid

## How to Run

No build tools needed — it's static HTML/CSS/JS.

1. Unzip the project.
2. Open `index.html` directly in a browser, **or** serve it locally for best results (some browsers restrict local file requests):

   ```bash
   # Python
   python3 -m http.server 8000

   # Node
   npx serve .
   ```
3. Visit `http://localhost:8000`.

## Responsive Behavior

- **Desktop (>980px):** fixed left sidebar + topbar layout.
- **Tablet (720–980px):** sidebar collapses behind a hamburger menu (slide-in drawer), bottom tab bar appears.
- **Mobile (<720px):** single-column layouts, bottom tab navigation, condensed cards/grids.

## Customizing

- **Colors / fonts:** edit the CSS variables at the top of `css/style.css` (`:root { --purple, --pink, --orange, --green, ... }`).
- **Mock content:** edit the data arrays at the top of `js/app.js` (`streamers`, `chatMessages`, `txData`, `followersData`, `reportsData`, `pkgs`, `methods`, etc.) to change what's displayed.
- **Navigation:** each screen is a `<section class="view" id="view-NAME">` in `index.html`; the sidebar/bottom-nav buttons trigger it via `data-view="NAME"`.

## Next Steps (Not Included Here)

This is UI only. To make it functional you'd need to wire it up to a backend for: authentication, real streaming (WebRTC/RTMP/HLS), wallet/payment processing, live chat over WebSockets, and persistent data storage.
