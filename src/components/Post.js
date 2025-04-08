import React from 'react';
import './Post.css';

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
          <span className="post__footerIcon">💬</span>
          <span className="post__footerIcon">🔁</span>
          <span className="post__footerIcon">❤️</span>
          <span className="post__footerIcon">🔗</span>
        </div>
      </div>
    </div>
  );
}

export default Post;