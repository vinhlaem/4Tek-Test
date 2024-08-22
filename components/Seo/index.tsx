import { NEXT_PUBLIC_URL } from "constants/app";
import Head from "next/head";
import { useRouter } from "next/router";

// !STARTERCONF Change these default meta
const defaultMeta = {
  title: "4Tek",
  siteName: "4Tek",
  description: "",
  url: `${NEXT_PUBLIC_URL}`,

  type: "website",

  image: "/images/apple-touch-icon.png",
};

type SeoProps = {
  date?: string;
  templateTitle?: string;
  description?: string;
  canonical?: string;
  isHome?: boolean;
};

export default function Seo(props: SeoProps) {
  const router = useRouter();
  const meta = {
    ...defaultMeta,
    ...props,
  };

  meta["title"] =
    `${props.templateTitle}${!props.isHome ? ` - Test 4Tek` : ""}` ||
    meta.title;
  meta["description"] = props.description || meta.description;
  meta["canonical"] = `${meta.url}${props.canonical || router.asPath}`;

  // Use siteName if there is templateTitle
  // but show full title if there is none
  // ? Uncomment code below if you want to use default open graph

  return (
    <Head>
      <title>{meta.title}</title>
      {/* <meta name='robots' content={meta.robots} /> */}
      <meta content={meta.description} name="description" />
      <meta property="og:url" content={`${meta.url}${router.asPath}`} />
      <link rel="canonical" href={meta.canonical} />
      <link rel="alternate" hrefLang="en" href={meta.url} />
      {/* <link rel='alternate' hrefLang='vi' href={`${meta.url}/vi`} /> */}

      <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
      <link rel="shortcut icon" href="/images/favicon.ico" />
      {/* Open Graph */}
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta name="image" property="og:image" content={meta.image} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@4Tek" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
      {meta.date && (
        <>
          <meta property="article:published_time" content={meta.date} />
          <meta
            name="publish_date"
            property="og:publish_date"
            content={meta.date}
          />
          <meta
            name="author"
            property="article:author"
            content="Theodorus Clarence"
          />
        </>
      )}

      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/images/favicon.ico" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
}
