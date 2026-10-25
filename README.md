# cohn.email · Golden Gate

<!-- artemis-publisher:start -->
<img src="brand/artemis/artemis-wordmark.svg" alt="Artemis Softworks LLC" width="340">

**A product of Artemis Softworks LLC.** Founded by **Demetria Althea Cohn**.

Companion software for macOS, thoughtfully available for Windows and Linux. See the [Artemis identity and design system](brand/artemis/BRAND.md). Platform availability varies by product and release.
<!-- artemis-publisher:end -->


A warm, Mac-inspired desktop for the Cohn family. Original Golden Gate wallpaper, glass windows, illustrated application icons, a dock, searchable Apple apps, favorites, and a family space for sharing shortcuts. Designed for desktop, tablet, and phone.

## Run locally

Node.js 22 or later. No dependencies, installation, build step, API keys, or account credentials are needed.

```sh
npm start
# http://localhost:4318
npm test
npm run check
```

Or run `node server.mjs` directly. `PORT` overrides the default port.

## What works

- Twelve direct Apple/iCloud app links: Mail, Calendar, Photos, iCloud Drive, Notes, Reminders, Contacts, Find Devices, Pages, Numbers, Keynote, and iCloud.
- Illustrated icons and desktop dock. Close, minimize, expand, and restore the launcher window.
- Search with Command-K / Ctrl-K; arrow keys to explore and Enter to open.
- Starred favorites, personal welcome message, Golden Hour / Coastal Dusk appearances, and a device-local note.
- Family space with device-local HTTPS shortcuts to shared iCloud albums, calendars, notes, folders, and other family destinations. Add/remove with confirmation.
- Touch layout with a three-column app grid, bottom navigation, safe-area padding, readable form controls, and reduced-motion support.
- Add to Home Screen metadata and original bridge icon.

## Accounts, family access, and privacy

This is an independent family launcher. It opens Apple's actual web applications; Apple handles sign-in and all iCloud data. It does not embed, impersonate, proxy, or collect Apple credentials. Existing Apple sharing permissions determine access to shared links. This page is public if deployed publicly; it does not implement a private family login.

Notes, name, preferences, favorites, and family shortcuts live in this browser's localStorage on this device. They are **not synced between people or devices**, and clearing browser data removes them. There are no analytics, external fonts, tracking pixels, APIs, cookies, database, or hidden network requests. Do not publish private invitation links or personal family content in the repository.

The family cards open each person's iCloud app; they don't claim to retrieve a shared family calendar or album. Add an actual invitation link to open a specific shared resource. Find Devices on the web locates devices; people/location sharing uses Apple's Find My app. Family Sharing is managed on an Apple device. The shell and Apple links require a network connection.

## Deployment handoff

**No Railway project, service, domain, DNS, or email settings have been changed by this implementation.** A Dockerfile is included for whoever manages deployment. It runs as an unprivileged user, respects `PORT`, and exposes `/healthz` for readiness. The website can also be hosted as static files from `public/`; configure the equivalent headers if bypassing the Node server.

For Railway later: use this repository, the Dockerfile, and `/healthz`; attach `cohn.email` only when the deployment owner is ready. Domain registration, iCloud+ Custom Email Domain setup, DNS records, mailbox addresses, and domain verification are separate from the website. Keep iCloud MX/TXT records when adding web A/CNAME records. Nothing here provisions mail or assumes the domain has been purchased.

## Assets and credits

Original wallpaper: `public/assets/golden-gate.webp`, generated with the built-in image generation tool, then optimized to WebP. Prompt recorded in `ASSET-PROMPTS.md`. Icons are original SVG illustrations in `public/icons.mjs`; bridge mark is `public/assets/bridge.svg`.

Created for the Cohn family by **Artemis Softworks LLC**. Independent of Apple; product names identify their respective services. Source license: GPL-3.0, retained from the original repository.
