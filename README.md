# Mindsafi

Public website for Mindsafi, a mental health initiative focused on Rwanda and refugee communities across Africa. The site introduces the work, the team, and ways to take part.

Live repository: [github.com/iranziprince01/mindsafi](https://github.com/iranziprince01/mindsafi)

## Pages

| Path | What it contains |
| --- | --- |
| `/` | Home: hero, why mental health matters, about, programs, impact, team, get involved, and contact |
| `/blogs` | Stories from Mahama, Remera, and Kigeme |
| `/donate` | Suggested amounts and MTN Mobile Money details |
| `/volunteer` | Volunteer interest form |

The home page follows the header order: Home, About, Programs, Impact, Team, Get Involved, Blogs, Contact. Blogs, Donate, and Volunteer are separate pages. Donate is a button in the header.

## Languages

The interface is available in English, French, Kiswahili, and Kinyarwanda. The language control sits beside Donate. English is the fallback when a translation is missing. Blog posts, the donate page, and the volunteer page are written in English.

## Contact and forms

The site does not send form data to a server.

- **Contact** and **Volunteer** open the visitor’s email app, addressed to `info.mindsafi@gmail.com`, with the form contents in the message.
- **Donate** does not take a payment. After an amount and MTN Mobile Money are chosen, the page shows where to send the transfer and asks the visitor to email the transaction reference.
- **Chat** answers with a short prepared reply. It does not reach a person.

Crisis support listed on the site: [+250 782 485 566](tel:+250782485566).

## Local development

Requires Node.js 18 or newer.

```bash
npm install
npm run dev
```

The dev server runs at [http://localhost:5173](http://localhost:5173).

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local site |
| `npm run build` | Typecheck and build for production |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |

## Project structure

```text
src/
  components/     Shared layout and home sections
  pages/          Blogs, Donate, and Volunteer
  i18n/locales/   en, fr, sw, and rw copy
  assets/         Team portraits and blog photos
```

`Navbar`, `Footer`, and the support chat wrap every page. Home sections live in `src/components`. Page-specific screens live in `src/pages`.

## Stack

- [Vite](https://vitejs.dev/) and React 18
- TypeScript
- Tailwind CSS
- React Router
- i18next
- Lucide icons

Brand colors are navy `#002e6d` and yellow `#ffe600`, set in `src/index.css`.
