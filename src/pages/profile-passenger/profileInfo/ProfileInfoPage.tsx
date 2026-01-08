import { useState } from "react";
import { FormUserInfo } from "../../../components/form-user-info/FormUserInfo";
import "./ProfileInfoPage.css";
import messiImage from "../../../assets/messi.png";

export const ProfileInfoPage = () => {
  const [friends, setFriends] = useState([
    { id: 1, img: messiImage },
    { id: 2, img: messiImage },
    { id: 3, img: messiImage },
  ]);

  const addFriend = () => {
    setFriends([...friends, { id: Date.now(), img: messiImage }]);
  };

  const removeFriend = (id) => {
    setFriends(friends.filter((f) => f.id !== id));
  };

  return (
    <div className="profile-container-items">
      <FormUserInfo />

      <div className="friends-container">
        <div className="friends-header">
          <p className="friends-title">Friends</p>
          <button className="add-button" onClick={addFriend}>+</button>
        </div>
    
        {friends.map(friend => (
          <div key={friend.id} className="friend-item-container">
            <figure className="friend-figure-container">
              <img className="friend-image" src={friend.img} alt="friend" />
            </figure>
            <i
              className="fa-solid fa-trash trash-icon"
              onClick={() => removeFriend(friend.id)}
            ></i>
          </div>
        ))}
      </div>
    </div>
      
  );
};