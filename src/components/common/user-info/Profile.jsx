import React, { useState, useEffect } from "react";
import Profiles from "./profiles.json";

const Profile = () => {
  const [userProfile, setuserProfile] = useState([]);

  useEffect(() => {
    setuserProfile(Profiles);
  }, []);

  const handleDelete = (targetProfile) => {
    const filItems = userProfile.filter((item) => item.id !== targetProfile.id);
    setuserProfile(filItems);
  };

  const handleEdit = () => {
    console.log("Edited");
  };

  return (
    <section className="user-profile">
      <h3>User Profile</h3>
      <br />
      <br />
      <table>
        <thead>
          <tr>
            <th>S. No</th>
            <th>Company Name</th>
            <th>Experience ( Years )</th>
            <th>Joining Role</th>
            <th>Work Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userProfile.map((profile, index) => {
            const yearsValue = Math.floor(profile.experience / 12);
            const monthsValue = profile.experience - yearsValue * 12;
            return (
              <tr key={profile.id}>
                <td>{index + 1}</td>
                <td>{profile.companyName}</td>
                <td>
                  {yearsValue} year(s) {monthsValue} month(s)
                </td>
                <td>{profile.role}</td>
                <td>{profile.workCity}</td>
                <td>
                  <button onClick={handleEdit}>Edit</button>
                  <button onClick={() => handleDelete(profile)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default Profile;
