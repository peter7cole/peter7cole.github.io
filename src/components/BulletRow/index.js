import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

const BulletRow = ({ data }) => {
  const { logo, spanElem } = data;
  const { msg, linkText, linkUrl, time } = spanElem;
  return (
    <div className="bullets__rows">
      <div className="logo">
        <div className="logo__img">{logo}</div>
      </div>
      <div>
        <span>
          {msg}
          {linkText ? ' ' : ''}
          <a href={`${linkUrl}`}>{linkText}</a>, <i>{time}</i>
        </span>
      </div>
    </div>
  );
};

export default function NewBulletRow(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data) => <BulletRow data={data} {...props} />}
    />
  );
}

BulletRow.propTypes = {
  data: PropTypes.shape({
    logo: PropTypes.string,
    spanElem: PropTypes.shape({
      msg: PropTypes.string.isRequired,
      linkText: PropTypes.string,
      linkUrl: PropTypes.string,
      title: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
