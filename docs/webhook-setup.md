# Sanity Webhook Setup for Static Rendering

Because we implemented **Playwright Build-Time Static Snapshotting** (Phase 1), the website is now served as static HTML for instant load times and perfect SEO crawlability.

However, since the HTML is generated _at build time_, clicking "Publish" in the Sanity Studio will **not** automatically update the live site. To fix this, you must set up a **Sanity Webhook** to trigger your hosting provider (like Netlify or Vercel) to rebuild the site whenever content changes.

Here is the exact step-by-step process.

---

## Step 1: Create a Build Hook in your Hosting Provider

### If using Netlify (Current Host):

1. Log in to your [Netlify Dashboard](https://app.netlify.com/).
2. Select your site (`hs-clinic`).
3. Go to **Site Configuration > Build & deploy > Continuous Deployment**.
4. Scroll down to **Build hooks** and click **Add build hook**.
5. Name it something like `Sanity Content Update`.
6. Select the `main` branch to build.
7. Click **Save**.
8. **Copy the generated URL** (it will look like `https://api.netlify.com/build_hooks/xxxxxxxxx`).

### If using Vercel:

1. Log in to [Vercel](https://vercel.com/).
2. Select your project.
3. Go to **Settings > Git > Deploy Hooks**.
4. Create a new hook named `Sanity Content Update` pointing to the `main` branch.
5. **Copy the generated URL**.

---

## Step 2: Add the Webhook in Sanity

1. Go to your [Sanity Manage Dashboard](https://manage.sanity.io/).
2. Select your project: **HS Clinic**.
3. Go to the **API** tab.
4. Scroll down to **Webhooks** and click **Create webhook**.
5. Fill out the form with the following details:
   - **Name**: `Netlify Rebuild on Publish`
   - **Description**: `Triggers a static HTML rebuild when content changes.`
   - **URL**: _Paste the Build Hook URL you copied from Step 1._
   - **Trigger on**: `Create`, `Update`, and `Delete` (Check all three).
   - **Filter**: Leave blank to trigger on _any_ document change, OR use `_type in ["post", "service", "tourismSettings", "team", "siteSettings"]` to only trigger when specific important content changes.
   - **Projection**: Leave default (`{...}`).
   - **HTTP Method**: `POST`
6. Click **Save**.

---

## Step 3: Test the Pipeline

1. Open your Sanity Studio.
2. Edit a piece of text (e.g., change a word on the Homepage or publish a new Blog Post).
3. Click **Publish**.
4. Go to your Netlify/Vercel dashboard. You should immediately see a new build triggered automatically labeled with your hook name.
5. Wait ~2 minutes for the build and the Playwright prerender script to finish.
6. Refresh your live site — the new content will be visible to both users and Search Engines!
