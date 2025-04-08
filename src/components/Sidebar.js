import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        {/* Font Awesomeアイコンを文字に変更 */}
        <span className="logo-text">Twitter</span>
      </div>
      
      <div className="sidebar__menu">
        <div className="sidebar__menuItem sidebar__menuItem--active">
          {/* アイコンをテキストに変更 */}
          <span className="menu-icon">🏠</span>
          <span>ホーム</span>
        </div>
        <div className="sidebar__menuItem">
          <span className="menu-icon">🔍</span>
          <span>検索</span>
        </div>
        <div className="sidebar__menuItem">
          <span className="menu-icon">🔔</span>
          <span>通知</span>
        </div>
        <div className="sidebar__menuItem">
          <span className="menu-icon">✉️</span>
          <span>メッセージ</span>
        </div>
        <div className="sidebar__menuItem">
          <span className="menu-icon">🔖</span>
          <span>ブックマーク</span>
        </div>
        <div className="sidebar__menuItem">
          <span className="menu-icon">📋</span>
          <span>リスト</span>
        </div>
        <div className="sidebar__menuItem">
          <span className="menu-icon">👤</span>
          <span>プロフィール</span>
        </div>
        <div className="sidebar__menuItem">
          <span className="menu-icon">⋯</span>
          <span>もっと見る</span>
        </div>
      </div>
      
      <button className="sidebar__tweet">ツイートする</button>
    </div>
  );
}

export default Sidebar;