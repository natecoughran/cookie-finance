# Cookie Finance — Homepage

Static homepage for cookiefinance.co.

## File structure

```
/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── images/
    ├── cf_logo_dark.png          ← dark (navy text) logo
    ├── cf_logo_reversed.png      ← reversed (white text) logo — for dark backgrounds if needed
    └── council/
        ├── [member-handle].jpg   ← headshots for Creator Council grid
        └── ...
```

## Images to add

1. `images/cf_logo_dark.png` — the dark one-line logo (already in your assets)
2. `images/council/` — add one JPG per council member, named by handle (e.g. `jamiecreates.jpg`). Update the `src` attributes in `index.html` to match.

## Swapping in council members

Each council card in `index.html` looks like:

```html
<div class="council-avatar teal-av">
  <img src="images/council/jamiecreates.jpg" alt="Jamie M." onerror="..." />
  <span class="av-initials">JM</span>
</div>
<div class="council-name">Jamie M.</div>
<div class="council-handle">@jamiecreates</div>
<div class="council-niche">Lifestyle</div>
```

Replace the `src`, `alt`, initials, name, handle, and niche for each real member. If a photo fails to load, the initials avatar shows automatically.

## Updating prices

Prices are plain text in `index.html`. Search for `$325` and `$450` to find the plan cards.

## Calculator

The savings calculator logic lives in `js/main.js`. The `setEntity()` function handles the Sole Prop / S Corp toggle. Adjust the marginal rate brackets or the deduction improvement rate (currently 20%) at the top of the `calculate()` function if needed.

## Deployment (GitHub Pages)

1. Push to your `main` branch.
2. In repo Settings → Pages → set source to `main` / `root`.
3. Site will be live at `https://[username].github.io/[repo]/`.

To use a custom domain, add a `CNAME` file to the repo root containing your domain (e.g. `cookiefinance.co`) and configure DNS accordingly.
