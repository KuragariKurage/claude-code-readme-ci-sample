import React from 'react';
import './Widgets.css';

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__search">
        <span className="widgets__searchIcon">🔍</span>
        <input placeholder="キーワード検索" type="text" />
      </div>

      <div className="widgets__container">
        <h2>いまどうしてる？</h2>
        
        <div className="widgets__trend">
          <div className="widgets__trendHeader">
            <span className="widgets__trendCategory">トレンド・日本</span>
            <span>⋯</span>
          </div>
          <div className="widgets__trendName">#プログラミング</div>
          <span className="widgets__trendTweets">12.5K tweets</span>
        </div>
        
        <div className="widgets__trend">
          <div className="widgets__trendHeader">
            <span className="widgets__trendCategory">トレンド・日本</span>
            <span>⋯</span>
          </div>
          <div className="widgets__trendName">#React</div>
          <span className="widgets__trendTweets">5.2K tweets</span>
        </div>
        
        <div className="widgets__trend">
          <div className="widgets__trendHeader">
            <span className="widgets__trendCategory">テクノロジー・トレンド</span>
            <span>⋯</span>
          </div>
          <div className="widgets__trendName">#JavaScript</div>
          <span className="widgets__trendTweets">32.1K tweets</span>
        </div>
        
        <div className="widgets__showMore">もっと見る</div>
      </div>
      
      <div className="widgets__container">
        <h2>おすすめユーザー</h2>
        
        <div className="widgets__follow">
          <img src="https://randomuser.me/api/portraits/women/22.jpg" alt="User" />
          <div className="widgets__followInfo">
            <div className="widgets__followName">山田優子</div>
            <div className="widgets__followUsername">@yuko_yamada</div>
          </div>
          <button className="widgets__followButton">フォロー</button>
        </div>
        
        <div className="widgets__follow">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" />
          <div className="widgets__followInfo">
            <div className="widgets__followName">鈴木健太</div>
            <div className="widgets__followUsername">@kenta_suzuki</div>
          </div>
          <button className="widgets__followButton">フォロー</button>
        </div>
        
        <div className="widgets__showMore">もっと見る</div>
      </div>
    </div>
  );
}

export default Widgets;