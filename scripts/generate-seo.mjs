import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const publicDir = resolve("public");
const routes = ["/"];

function readEnvFiles() {
  const values = {};
  const files = [".env", ".env.production", ".env.local", ".env.production.local"];

  for (const file of files) {
    const filePath = resolve(file);
    if (!existsSync(filePath)) {
      continue;
    }

    const lines = readFileSync(filePath, "utf8").split(/\r?\n/);
    for (const line of lines) {
      const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)\s*$/);
      if (!match) {
        continue;
      }

      const [, key, rawValue] = match;
      values[key] = rawValue.replace(/^['"]|['"]$/g, "");
    }
  }

  return values;
}

function normalizeSiteUrl(value) {
  if (!value) {
    return "";
  }

  const trimmed = value.trim().replace(/\/+$/, "");
  if (!trimmed) {
    return "";
  }

  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

const envFiles = readEnvFiles();
const siteUrl = normalizeSiteUrl(
  process.env.SITE_URL ||
    process.env.VITE_SITE_URL ||
    process.env.PUBLIC_SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL ||
    envFiles.SITE_URL ||
    envFiles.VITE_SITE_URL ||
    envFiles.PUBLIC_SITE_URL,
);

if (!existsSync(publicDir)) {
  mkdirSync(publicDir, { recursive: true });
}

const robotsLines = ["User-agent: *", "Allow: /"];

if (siteUrl) {
  robotsLines.push("", `Sitemap: ${siteUrl}/sitemap.xml`);

  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = routes
    .map(
      (route) => `  <url>
    <loc>${siteUrl}${route}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === "/" ? "1.0" : "0.8"}</priority>
  </url>`,
    )
    .join("\n");

  writeFileSync(
    resolve(publicDir, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`,
  );
} else if (existsSync(resolve(publicDir, "sitemap.xml"))) {
  rmSync(resolve(publicDir, "sitemap.xml"));
}

writeFileSync(resolve(publicDir, "robots.txt"), `${robotsLines.join("\n")}\n`);

if (!siteUrl) {
  console.warn(
    "SEO: SITE_URL is not set; sitemap.xml was skipped. Set SITE_URL=https://your-domain.com for production builds.",
  );
}
