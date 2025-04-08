import React from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';

function Feed() {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>ホーム</h2>
      </div>
      
      <TweetBox />
      
      <Post
        displayName="田中太郎"
        username="taro_tanaka"
        verified={true}
        text="はじめてのツイートです！"
        avatar="https://randomuser.me/api/portraits/men/41.jpg"
        image=""
      />
      
      <Post
        displayName="佐藤花子"
        username="hanako_sato"
        verified={false}
        text="今日の天気は晴れです☀️ 公園でピクニックするのにぴったりの日！"
        avatar="https://randomuser.me/api/portraits/women/42.jpg"
        image="https://source.unsplash.com/random/500x300/?picnic"
      />
      
      <Post
        displayName="Twitter日本"
        username="TwitterJP"
        verified={true}
        text="新機能をリリースしました！詳細はプロフィールのリンクをチェック👀"
        avatar="https://randomuser.me/api/portraits/lego/1.jpg"
        image=""
      />
    </div>
  );
}

export default Feed;