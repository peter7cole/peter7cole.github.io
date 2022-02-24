import * as React from 'react';
import './styles.css';

// styles

// const docLink = {
//   text: "TypeScript Documentation",
//   url: "https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/",
//   color: "#8954A8",
// }

// markup
const IndexPage = () => {
  return (
    <>
      <div className="diagonal"></div>
      <div className="box1">
        <div className="box2">
          <div className="content">
            <div className="content__text">
              <title>Peter Cole</title>
              <h1>🥳 Hello World</h1>
              <p>
                My name is <strong>Peter Cole</strong> <i>(he/him)</i>
              </p>
              <h2>Overview</h2>
              <ul>
                💻 Software Engineer at Cisco working on a small part of{' '}
                <a href="https://www.webex.com/">Cisco Webex</a>, <i>2020 - Present</i>
              </ul>
              <ul>
                🌱 Code Fellows alum from the{' '}
                <a href="https://www.codefellows.org/courses/code-401/advanced-software-development-in-full-stack-javascript/">
                  Advanced JS 401 track
                </a>{' '}
                <i>2019 - 2020</i>
              </ul>
              <ul>
                🏫 Western Washington University student <i>2009 - 2012</i>
              </ul>
              <ul>
                🏔 Trip & Climb Lead volunteer for <a href="https://osat.org/GCC/">OSAT</a>
              </ul>
              <h2>Connect</h2>
              <ul>
                {/* <StaticImage></StaticImage> https://www.gatsbyjs.com/docs/how-to/images-and-media/using-gatsby-plugin-image */}
                <a href="https://github.com/peter7cole">Github</a>
              </ul>
              <ul>
                <a href="https://linkedin.com/in/peter7cole">LinkedIn</a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
// - [GitHub](https://github.com/peter7cole)
// - [LinkedIn](https://linkedin.com/in/peter7cole)

// <h2>Projects</h2>
// <ul>
//   <a href="https://cli-journal.web.app/"></a>
// </ul>
// <ul>
//   <a href="https://deck-builder-301-final.herokuapp.com"></a>
// </ul>
// <ul>
//   <a href="https://peter7cole.github.io/mailbox-madness"></a>
// </ul>
// <ul>
//   <a href="https://peter7cole.github.io/mosh-video-rental"></a>
// </ul>
// <ul>
//   <a href="https://github.com/makebrainwaves/BrainWaves"></a>
// </ul>
// ## Projects

// | Link                                                            | Description                       |
// | --------------------------------------------------------------- | --------------------------------- |
// | [CLI Journal](https://cli-journal.web.app/)                     | Code Fellows 401 Final Project    |
// | [Deck Builder](https://deck-builder-301-final.herokuapp.com)    | Code Fellows 301 Final Project    |
// | [Mailbox Madness](https://peter7cole.github.io/mailbox-madness) | Bellevue College JS Final Project |
// | [Video Rental](https://peter7cole.github.io/mosh-video-rental)  | React Sandboxing                  |
// | [BrainWaves](https://github.com/makebrainwaves/BrainWaves)      | Open Source Support               |

// ## Connect

// - [GitHub](https://github.com/peter7cole)
// - [LinkedIn](https://linkedin.com/in/peter7cole)

// > Copyright 2022

export default IndexPage;
