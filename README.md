# Academic Lab Website for GitHub Pages

This repository contains a complete static academic research lab website. It uses only HTML, CSS, SVG, and a small JavaScript file, so it can be hosted directly with GitHub Pages.

## Pages included

- `index.html` - home page
- `research.html` - research areas with internal section links
- `publications.html` - searchable and filterable publication list
- `resources.html` - repositories, datasets, software, and teaching materials
- `personnel.html` - principal investigator, students, alumni, and opportunities
- `cv.html` - simple CV page
- `404.html` - custom error page

## Folder structure

```text
.
├── index.html
├── research.html
├── publications.html
├── resources.html
├── personnel.html
├── cv.html
├── 404.html
├── .nojekyll
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── assets/
    ├── images/
    │   ├── lab-diagram.svg
    │   ├── person-placeholder.svg
    │   ├── pi-placeholder.svg
    │   └── university-mark.svg
    └── files/
        ├── collaboration-template.txt
        ├── dataset-readme.txt
        ├── presentation-placeholder.html
        ├── publication-placeholder.html
        └── software-readme.txt
```

## How to customize

1. Replace `Your Research Laboratory`, `Your University`, names, emails, department names, and office details in each HTML file.
2. Replace the placeholder SVG images in `assets/images/` with your actual lab figures, headshots, and university logo. Use official university branding only if you have permission.
3. Update the publication entries in `publications.html`.
4. Update repository, dataset, and software links in `resources.html`.
5. Change colors in `css/styles.css` by editing the variables at the top of the file.

## How to publish on GitHub Pages

1. Create a new GitHub repository.
2. Upload all files and folders from this website into the repository root.
3. In the repository settings, enable GitHub Pages for the main branch and root folder.
4. Visit the GitHub Pages URL shown by GitHub.

## Notes

- The site has no external dependencies.
- The navigation links are relative, so the site works in a project repository such as `username.github.io/lab-site/`.
- `.nojekyll` is included so GitHub Pages serves the static files exactly as uploaded.
