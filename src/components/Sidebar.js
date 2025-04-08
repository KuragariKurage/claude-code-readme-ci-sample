import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faSearch,
  faBell,
  faEnvelope,
  faBookmark,
  faList,
  faUser,
  faEllipsisH
} from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        {/* Font Awesomeアイコンを文字に変更 */}
        <span className="logo-text">Twitter</span>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__menuItem sidebar__menuItem--active">
          <FontAwesomeIcon icon={faHome} className="menu-icon" />
          <span>ホーム</span>
        </div>
        <div className="sidebar__menuItem">
          <FontAwesomeIcon icon={faSearch} className="menu-icon" />
          <span>検索</span>
        </div>
        <div className="sidebar__menuItem">
          <FontAwesomeIcon icon={faBell} className="menu-icon" />
          <span>通知</span>
        </div>
        <div className="sidebar__menuItem">
          <FontAwesomeIcon icon={faEnvelope} className="menu-icon" />
          <span>メッセージ</span>
        </div>
        <div className="sidebar__menuItem">
          <FontAwesomeIcon icon={faBookmark} className="menu-icon" />
          <span>ブックマーク</span>
        </div>
        <div className="sidebar__menuItem">
          <FontAwesomeIcon icon={faList} className="menu-icon" />
          <span>リスト</span>
        </div>
        <div className="sidebar__menuItem">
          <FontAwesomeIcon icon={faUser} className="menu-icon" />
          <span>プロフィール</span>
        </div>
        <div className="sidebar__menuItem">
          <FontAwesomeIcon icon={faEllipsisH} className="menu-icon" />
          <span>もっと見る</span>
        </div>
      </div>

      <button className="sidebar__tweet">ツイートする</button>
    </div>
  );
}

export default Sidebar;
