import React from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Champi Store</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index,follow" />
        <meta
          name="description"
          content="Champi Store: Tienda de licores artesanales"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@samumirandam" />
        <meta name="twitter:creator" content="@samumirandam" />
        <meta name="twitter:title" content="Champi Store" />
        <meta
          name="twitter:description"
          content="Champi Store: Tienda de licores artesanales"
        />
        {/* <meta name="twitter:image" content="" /> */}
        <meta property="og:title" content="Champi Store" />
        <meta
          property="og:description"
          content="Champi Store: Tienda de licores artesanales"
        />
        {/* <meta property="og:image" content="" /> */}
        <meta property="og:url" content="champi.store" />
        <meta property="og:site_name" content="Champi Store" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:type" content="article" />
        {/* <meta property="fb:app_id" content="ID_APP_FACEBOOK" /> */}
      </Helmet>

      <h1>Home Champi Store</h1>
    </>
  );
};

export default Home;
