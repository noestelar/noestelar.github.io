import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  try {
    console.log('Navigating to hello-world post...');
    await page.goto('http://localhost:4321/en/blog/hello-world');

    // Check if the page loaded
    const title = await page.title();
    console.log(`Page title: ${title}`);

    // Check if hero image is present (it should NOT be)
    // The hero image has class "w-full h-auto rounded-xl shadow-lg" and is inside a div with "mb-10"
    // But better to check specifically for the image element in that location.
    // In BlogPost.astro:
    // <div class="mb-10">
    //   {resolvedThumbnail && <Image ... />}
    // </div>

    // We can look for the div.mb-10 and see if it has an img child.
    const heroImage = await page.locator('.mb-10 img').count();
    console.log(`Hero images found: ${heroImage}`);

    if (heroImage === 0) {
        console.log('SUCCESS: No hero image found (correct behavior for no thumbnail/body image).');
    } else {
        console.log('WARNING: Hero image found.');
    }

    await page.screenshot({ path: 'verification_hello_world.png', fullPage: true });

  } catch (e) {
    console.error('Error:', e);
  } finally {
    await browser.close();
  }
})();
