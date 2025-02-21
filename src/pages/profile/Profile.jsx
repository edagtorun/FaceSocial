import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src="assets/post/3.jpeg" />
              <img className="profileUserImg" src="assets/person/7.jpeg" />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Eda Gizem Torun</h4>
              <h4 className="profileInfoDesc">Hello my Friends!</h4>
            </div>
          </div>
          <div className="profileRightBottom">
            {" "}
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
