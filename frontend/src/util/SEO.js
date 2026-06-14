import { Helmet } from "react-helmet";

const BASE_URL = "https://community.anote.ai";
const DEFAULT_IMAGE = `${BASE_URL}/logo.png`;

export default function SEO({ title, description, image, path, jsonLd }) {
  const fullTitle = title ? `${title} | Anote Community` : "Anote Community";
  const metaImage = image || DEFAULT_IMAGE;
  const canonical = path ? `${BASE_URL}${path}` : BASE_URL;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Anote Community" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={metaImage} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}