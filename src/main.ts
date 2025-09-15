Deno.serve((_req) => {
  const diploiHTML = `
  <!DOCTYPE html>
  <html>
    <head>
      <title>Deno</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <style>
        * {
          font-family: sans-serif;
          font-size: 16px;
        }

        html,
        body {
          margin: 0;
          min-height: 100vh;
          background: #202328;
          color: #fff;
        }

        body {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 32px;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
        }

        h1 {
          font-size: 24px;
        }

        p,
        form,
        hr {
          max-width: min(400px, 100%);
        }

        p {
          text-align: center;
          opacity: 0.8;
          line-height: 1.5;
        }

        button,
        .button {
          padding: 10px 18px;
          align-self: center;
          text-decoration: none;
          background: #6650fa;
          border-radius: 64px;
          border: none;
          color: #fff;
          cursor: pointer;
        }

        a {
          font-size: inherit;
          color: inherit;
        }

        hr {
          display: block;
          margin: 32px 0;
          width: 100%;
          height: 2px;
          background: #31363f;
          border: none;
        }

        a:last-child {
          margin-top: 32px;
        }

        code {
          font-family: monospace;
          font-size: 14px;
          background: #31363f;
          padding: 2px 4px;
          border-radius: 4px;
        }
      </style>
    </head>
    <body>
      <img
        alt="Deno logo"
        src="https://github.com/diploi/component-deno/raw/main/.diploi/icon.svg"
        width="64"
        height="64"
      />

      <h1>Deno</h1>

      <p>
        Your Deno application is up and running! You can start editing the code
        to build your application. In development stage, Deno will
        automatically reload as you make changes.
        <br /><br />
        <b> Install dependencies: </b><br />
        No <code>deno install package_name</code> is required, as new import in TypeScript files will trigger Deno to automatically download and cache those modules as needed.
      </p>

      <hr />

      <a href="https://diploi.com/"
        ><img width="54" height="16" src="https://diploi.com/logo-white.svg"
      /></a>
    </body>
  </html>`;

  return new Response(diploiHTML, {
    headers: { "content-type": "text/html; charset=utf-8" },
  });
});
