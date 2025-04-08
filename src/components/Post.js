import React from 'react';
import './Post.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faComment,
  faRetweet,
  faHeart,
  faShare
} from '@fortawesome/free-solid-svg-icons';

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <img src={avatar} alt="Profile" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              {displayName}{" "}
              <span className="post__headerSpecial">
                {verified && <span className="post__badge">✓</span>}
                @{username}
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>{text}</p>
          </div>
        </div>
        {image && (
          <img src={image} alt="Post content" className="post__image" />
        )}
        <div className="post__footer">
          <FontAwesomeIcon icon={faComment} className="post__footerIcon" />
          <FontAwesomeIcon icon={faRetweet} className="post__footerIcon" />
          <FontAwesomeIcon icon={faHeart} className="post__footerIcon" />
          <FontAwesomeIcon icon={faShare} className="post__footerIcon" />
        </div>
      </div>
    </div>
  );
}

export default Post;
