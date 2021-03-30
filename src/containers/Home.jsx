import React from 'react';
import { Helmet } from 'react-helmet';

import RegisterForm from '../components/RegisterForm';

import '../assets/styles/containers/home.scss';

const Home = () => (
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

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;600&display=swap"
        rel="stylesheet"
      />
    </Helmet>

    <main className="Home__container">
      <section>
        <h1>Hola, llegaste a Champi Store</h1>
        <p>
          Champi Store es la tienda virtual en la que puedes comprar deliciosos
          licores... bueno, por ahora, solo te puedes registrar.
        </p>
      </section>
      <section>
        <RegisterForm />
      </section>
    </main>
  </>
);

export default Home;
