import React from 'react';

function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <hr />
      <div>
        <h3>Telegram Bot Stickers</h3>
        <p>Web application for adding stickers to telegram. Resizes images automatically and can create new packs.</p>
        <hr />
        <a href="https://stickers.deryck.dev/" rel="noopener noreferrer">Live site</a>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <a href="https://github.com/DeryckJackson/telegram-bot-stickers"
          rel="noopener noreferrer">Frontend repo</a>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <a href="https://github.com/DeryckJackson/telegram-bot-stickers-backend" rel="noopener noreferrer">Backend repo</a>
      </div>
      <div>
        <h3>Climbing Gear Catalog</h3>
        <p>Web application for organizing climbing gear. Uses React for a frontend and .Net 5 for the backend.</p>
        <hr />
        <a href="https://github.com/DeryckJackson/climbing-gear-catalog-react" rel="noopener noreferrer">Frontend repo</a>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <a href="https://github.com/DeryckJackson/climbing-gear-catalog-backend"
          rel="noopener noreferrer">Backend repo</a>
      </div>
      <div>
        <h3>Devpage</h3>
        <p>The source code for this webpage.</p>
        <hr />
        <a href="https://github.com/DeryckJackson/devpage" rel="noopener noreferrer">Repository</a>
      </div>
    </div>
  );
}

export default Projects;
