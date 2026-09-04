# rupl.org

Website for **Rupl** — a running coach for Apple Watch.

Published through GitHub Pages from `main`, served from the repository root.
The `rupl.org` domain is set by the `CNAME` file; GitHub issues the HTTPS
certificate itself, so the old acme.sh wildcard is no longer needed.

## What lives here

The built site and nothing else: static pages, one stylesheet, a few assets.
No JavaScript, no build dependencies, no Node — not a single script tag on any
page. Multilingual means one page per language, and the switcher is plain links.

```
index.html            English, canonical
ru/index.html         Russian
privacy/, ru/privacy/ privacy policy
support/, ru/support/ support
assets/               icons
styles.css
CNAME                 rupl.org
```

## Source

Templates, translations and the build script live in the private repository
`dredfort42/rupl`, under `site/` and `scripts/site_build.py`. One command builds
this directory from there:

```bash
python3 scripts/site_build.py ../RUPL-SITE
```

The build refuses to run when the key sets of the language files disagree, or
when a rendered page still holds an unresolved substitution, and it reports any
file in this directory that it did not produce. **Do not edit files here by
hand** — the next build overwrites them.

Adding a language is one `site/i18n/<code>.json` file with the same keys.

## Licence

Site text and brand are under **CC BY-SA 4.0** (`LICENSE`).

The mark and the product name are excluded: they are identifiers, not reusable
assets. The GPL-3.0 inherited from the 2024 web application is gone —
it conflicts with App Store distribution.

## History

Until September 2026 this repository held the 2024 web application: React,
accounts, sign-in against a server that no longer exists. It was removed from
the working tree but remains in history — `git checkout df48804 -- <path>`.
