import React from 'react';
import githubLogo from '../images/GitHub-Mark-32px.png';
import linkedinLogo from '../images/LI-In-Bug.png';
import gatsbyLogo from '../images/gatsby.png';
import './styles.css';
import BulletRow from '../components/BulletRow';

const IndexPage = () => {
  // TODO: useEffect for time change?
  // const handleGreeting = () => {
  //   const date = new Date();
  // };

  return (
    <>
      <div className="diagonal"></div>
      <div className="box1">
        <div className="box2">
          <div className="content">
            <div className="content__text">
              <title>Peter Cole</title>
              <h1>Hello World!</h1>
              <div className="bullets">
                <div className="bullets__rows">
                  <div className="logo">
                    <div className="logo__img">🥳</div>
                  </div>
                  <div>
                    <span>
                      My name is <strong>Peter Cole</strong> <i>(he/him)</i>
                    </span>
                  </div>
                </div>
              </div>
              <h2>Overview</h2>
              <div className="bullets">
                <BulletRow
                  data={{
                    logo: '💻',
                    spanElem: {
                      msg: 'Software Engineer at Cisco working on a small part of ',
                      linkText: 'Cisco Webex',
                      linkUrl: 'https://www.webex.com/',
                      time: '2020 - Present',
                    },
                  }}
                />
                <BulletRow
                  data={{
                    logo: '🌱',
                    spanElem: {
                      msg: 'Code Fellows alum from the ',
                      linkText: 'Advanced JS 401 track',
                      linkUrl:
                        'https://www.codefellows.org/courses/code-401/advanced-software-development-in-full-stack-javascript/',
                      time: '2019 - 2020',
                    },
                  }}
                />
                <BulletRow
                  data={{
                    logo: '🏫',
                    spanElem: {
                      msg: 'Western Washington University student',
                      time: '2009 - 2012',
                    },
                  }}
                />
                <BulletRow
                  data={{
                    logo: '🏔',
                    spanElem: {
                      msg: 'Trip & Climb Lead volunteer for',
                      linkText: 'OSAT',
                      linkUrl: 'https://osat.org/GCC/',
                      time: '2014 - Present',
                    },
                  }}
                />
              </div>
              <h2>Connect</h2>
              <div className="bullets">
                <div className="bullets__rows">
                  <div className="logo">
                    <img src={githubLogo} alt="github" className="logo__img" />
                  </div>
                  <a href="https://github.com/peter7cole">Github</a>
                </div>
                <div className="bullets__rows">
                  <div className="logo">
                    <img src={linkedinLogo} alt="linkedin" className="logo__img" />
                  </div>
                  <a href="https://linkedin.com/in/peter7cole">LinkedIn</a>
                </div>
              </div>
              <div className="gatsby">
                <div>Made with </div>
                <div className="gatsby__logo">
                  <img src={gatsbyLogo} alt="gatsby" className="logo__img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
