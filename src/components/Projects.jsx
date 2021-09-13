import React from 'react';

function Projects() {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <hr />
      <div>
        <p>Telegram Bot Stickers</p>
        <a href="https://stickers.deryck.dev/" rel="noopener noreferrer">Live site</a>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <a href="https://github.com/DeryckJackson/telegram-bot-stickers"
          rel="noopener noreferrer">Frontend repo</a>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <a href="https://github.com/DeryckJackson/telegram-bot-stickers-backend" rel="noopener noreferrer">Backend repo</a>
      </div>
      <div>
        <p>Climbing Gear Catalog</p>
        <a href="https://github.com/DeryckJackson/climbing-gear-catalog-react" rel="noopener noreferrer">Frontend repo</a>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <a href="https://github.com/DeryckJackson/climbing-gear-catalog-backend"
          rel="noopener noreferrer">Backend repo</a>
      </div>
    </div>
  );
}

export default Projects;
