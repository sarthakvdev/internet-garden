const Footer = () => {
  const links = [
    {
      title: "Twitter",
      href: "https://twitter.com/0xSarthak",
    },
    {
      title: "LinkedIn",
      href: "https://linkedin.com/in/sarthakv",
    },
    {
      title: "Github",
      href: "https://github.com/sarthakvdev",
    },
    {
      title: "Blog",
      href: "https://sarthakv.hashnode.dev",
    },
  ];

  return (
    <div className="flex flex-row">
      {links.map((link, index) => (
        <div key={index} className="mr-1">
          <a href={link.href} target="_blank" rel="noreferrer noopener">
            {link.title}
          </a>
          {index === links.length - 1 ? null : " • "}
        </div>
      ))}
    </div>
  );
};

// theme config
export default {
  github: "https://github.com/sarthakvdev",
  docsRepositoryBase: "https://github.com/sarthakvdev/internet-garden",
  titleSuffix: " - Sarthak",
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">SARTHAK.</span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Sarthak's Internet Garden" />
      <meta
        name="og:description"
        content="Welcome to my Internet Garden. Here, you will find about me, my projects, writings and bookshelf."
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="/banner.png" />
      <meta
        name="twitter:site:domain"
        content="https://sarthakverma.vercel.app"
      />
      <meta name="twitter:url" content="https://sarthakverma.vercel.app" />
      <meta name="twitter:creator" content="0xSarthak" />
      <meta name="og:title" content="Sarthak Verma's Internet Garden" />
      <meta name="og:image" content="/banner.png" />
      <meta name="apple-mobile-web-app-title" content="Sarthak." />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#ffffff" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="512x512"
        href="/android-chrome-512x512.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-chrome-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  darkMode: true,
  footer: true,
  footerText: <Footer />,
  footerEditLink: true,
  unstable_faviconGlyph: "",
};
