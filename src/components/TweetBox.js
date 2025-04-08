import React from 'react';
import './TweetBox.css';

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <img
            src="https://randomuser.me/api/portraits/men/20.jpg"
            alt="Profile"
          />
          <input type="text" placeholder="今何してる？" />
        </div>
        <div className="tweetBox__imageInput">
          <input type="text" placeholder="画像のURLを入力（オプション）" />
        </div>
        <button className="tweetBox__button">ツイートする</button>
      </form>
    </div>
  );
}

export default TweetBox;