import React, { useState } from "react";

/*
const field1 = "userName";
const field2 = "userCity";
const value1 = "Test User";
const value2 = "Hyderabad";

const obj = {
  [field1]: value1,
  [field2]: value2,
  ["my-age"]: 30,
};

console.log(obj);
*/

const Signup = () => {
  const [user, setuser] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    age: " ",
    dob: "",
    bio: "",
    photo: "",
    city: " ",
    gender: "",
    lang: [],
  });
  const { fullName, email, phoneNumber, password, age, dob, bio, city, lang } =
    user;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  const handleCancel = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      let langArr = [...lang];
      if (lang.includes(value)) {
        const filLangArray = lang.filter((item) => item !== value);
        langArr = [...filLangArray];
      } else {
        langArr.push(value);
      }
      setuser({
        ...user,
        [name]: langArr,
      });
    } else {
      setuser({
        ...user,
        [name]: value,
      });
    }
  };

  return (
    <section className="signup-page">
      <h3>Please create youre signup form</h3>
      <form className="signup-form my-form">
        <div className="form-item">
          <label htmlFor="fullName" className="form-item-label">
            Full Name
          </label>
          <input
            className="form-item-element"
            type="text"
            placeholder="Fullname here..."
            id="fullName"
            name="fullName"
            value={fullName}
            onChange={handleChange}
          />
        </div>
        <div className="form-item">
          <label htmlFor="email" className="form-item-label">
            Email
          </label>
          <input
            className="form-item-element"
            type="email"
            placeholder="Email here..."
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="form-item">
          <label htmlFor="password" className="form-item-label">
            Password
          </label>
          <input
            className="form-item-element"
            type="password"
            placeholder="Password here..."
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <div className="form-item">
          <label htmlFor="phoneNumber" className="form-item-label">
            Phone Number
          </label>
          <input
            className="form-item-element"
            type="text"
            placeholder="Phone number here..."
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div className="form-item">
          <label htmlFor="age" className="form-item-label">
            Age
          </label>
          <input
            className="form-item-element"
            type="number"
            placeholder="age here..."
            id="age"
            name="age"
            value={age}
            onChange={handleChange}
          />
        </div>
        <div className="form-item">
          <label htmlFor="dob" className="form-item-label">
            Date of Birth
          </label>
          <input
            className="form-item-element"
            type="date"
            placeholder="DOB here..."
            id="dob"
            name="dob"
            value={dob}
            onChange={handleChange}
          />
        </div>
        <div className="form-item">
          <label htmlFor="photo" className="form-item-label">
            Photo
          </label>
          <input
            className="form-item-element"
            type="file"
            id="photo"
            name="photo"
            onChange={handleChange}
          />
        </div>
        <div className="form-item">
          <label htmlFor="city" className="form-item-label">
            City
          </label>
          <select
            className="form-item-element"
            id="city"
            name="city"
            value={city}
            onChange={handleChange}
          >
            <option value="">Select City</option>
            <option value="hyd">Hyderabad</option>
            <option value="bng">Banglore</option>
            <option value="goa">Goa</option>
          </select>
        </div>
        <div className="form-item radio">
          <label htmlFor="female" className="form-item-label">
            Select Gender
          </label>
          <div>
            <label htmlFor="">
              Male
              <input
                type="radio"
                value="male"
                id="male"
                name="gender"
                onChange={handleChange}
              />
            </label>
            <label htmlFor="">
              Female
              <input
                type="radio"
                value="female"
                id="female"
                name="gender"
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
        <div className="form-item radio">
          <label htmlFor="telugu" className="form-item-label">
            Languages Known
          </label>
          <div>
            <label htmlFor="">
              English
              <input
                type="checkbox"
                value="english"
                id="english"
                name="lang"
                onChange={handleChange}
              />
            </label>
            <label htmlFor="">
              Telugu
              <input
                type="checkbox"
                value="telugu"
                id="telugu"
                name="lang"
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
        <div className="form-item">
          <label htmlFor="bio" className="form-item-label">
            Bio
          </label>
          <textarea
            className="form-item-element"
            placeholder="Bio here..."
            id="bio"
            name="bio"
            value={bio}
            onChange={handleChange}
          />
        </div>
        <div className="form-item btn-group">
          <button className="btn alert" onClick={handleCancel}>
            Cancel
          </button>
          <button className="btn" onClick={handleSubmit}>
            Singup
          </button>
        </div>
      </form>
    </section>
  );
};

export default Signup;
