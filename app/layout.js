import '../styles/globals.css';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="author" content="Brandon Ban Kai Xian" />
      <meta property="og:site_name" content="Brandon Ban" />
      <meta property="og:title" content="BranCoin" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="%PUBLIC_URL%/bcstamp.png" />
      <meta property="og:image:width" content="125" />
      <meta property="og:image:height" content="125" />
      <meta property="og:description" 
    content=' "Hi there! Just wanted to let you know that this portfolio website was created by an undergraduate student who is still learning the ropes when it comes to programming. Feel free to take a look around and check out his work!" ' />
      <meta property="og:url" content="https://brancoin-crypto.vercel.app" />
      <meta property="og:determiner" content="the" />
      <meta property="og:locale" content="ms_MY" />
      <meta property="og:locale:alternate" content="en_US" />
      <meta property="og:locale:alternate" content="zh_SG" />
      <meta property="og:locale:alternate" content="en_GB" />
      <meta property="og:locale:alternate" content="fr_FR" />
      <meta property="og:locale:alternate" content="es_ES" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;
