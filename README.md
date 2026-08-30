# Company Website Starter

This is a simple multi-page company website starter built for GitHub Pages. It includes:

- Home page
- About page
- Services page
- Contact page
- Editable content through a `site.json` file
- Decap CMS setup under `admin/`

## Editing content

Update the values in `site.json` to change the text for:

- company name
- hero section
- about section
- contact details
- services list

## Uploading background photos

Recommended sizes:

- Hero background: 1920 x 1080 px
- Banner image: 1600 to 2000 px wide
- Service card image: around 800 x 600 px
- Logo: SVG preferred, or 500 x 200 px

Use JPG or WebP for photos. Keep files under about 500 KB when possible for faster loading.

## CMS setup

The `admin/config.yml` file is prepared for Decap CMS. Replace the GitHub repo values before publishing:

- `your-username`
- `your-repo-name`

Then enable the admin page at:

- `https://your-site.github.io/admin/`

See the CMS docs for GitHub auth setup.

## Local preview

Open `index.html` in a browser or use a local static server.

## Deploy to GitHub Pages

1. Push all files to your GitHub repository.
2. In GitHub, open Settings > Pages.
3. Select the main branch and root folder.
4. Save.

Your site will be available at:

- `https://your-username.github.io/your-repo-name/`

## Notes

This starter matches the clean corporate style of the example reference site and is easy to extend later.
