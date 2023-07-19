import React, { useState, useRef } from "react";

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
  const [userError, setuserError] = useState({
    fullNameError: "",
    emailError: "",
    phoneNumberError: "",
    passwordError: "",
    ageError: " ",
    dobError: "",
    bioError: "",
    photoError: "",
    cityError: " ",
    genderError: "",
    langError: "",
  });
  const { fullName, email, phoneNumber, password, age, dob, bio, city, lang } =
    user;
  const {
    fullNameError,
    emailError,
    phoneNumberError,
    passwordError,
    ageError,
    dobError,
    photoError,
    bioError,
    cityError,
    genderError,
    langError,
  } = userError;

  const fullNameRef = useRef();

  const getValidationErrorFocus = (
    ref,
    errorProp,
    defaultErrorMessage = "This is field is mandatory"
  ) => {
    setuserError({
      ...userError,
      [errorProp]: errorProp || defaultErrorMessage,
    });
    ref.current.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || fullNameError) {
      getValidationErrorFocus(
        fullNameRef,
        fullNameError,
        "Please enter your fullname"
      );
    } else {
      console.log(user);
    }
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

    if (name === "fullName") {
      if (!value) {
        setuserError({
          ...userError,
          fullNameError: "Please enter your fullname",
        });
      } else if (!/^[A-Za-z\s]*$/.test(value)) {
        setuserError({
          ...userError,
          fullNameError: "Name should be having only charecters and space",
        });
      } else if (value.length <= 8 || value.length > 20) {
        setuserError({
          ...userError,
          fullNameError: "Name should in between 8 to 20 bcharecteres only",
        });
      } else {
        setuserError({
          ...userError,
          fullNameError: "",
        });
      }
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
            ref={fullNameRef}
          />
          {fullNameError && <p style={{ color: "red" }}>{fullNameError}</p>}
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
          {emailError && <p style={{ color: "red" }}>{emailError}</p>}
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
          {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
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
          {phoneNumberError && (
            <p style={{ color: "red" }}>{phoneNumberError}</p>
          )}
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
          {ageError && <p style={{ color: "red" }}>{ageError}</p>}
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
          {dobError && <p style={{ color: "red" }}>{dobError}</p>}
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
          {photoError && <p style={{ color: "red" }}>{photoError}</p>}
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
          {cityError && <p style={{ color: "red" }}>{cityError}</p>}
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
          {genderError && <p style={{ color: "red" }}>{genderError}</p>}
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
          {langError && <p style={{ color: "red" }}>{langError}</p>}
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
          {bioError && <p style={{ color: "red" }}>{bioError}</p>}
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
