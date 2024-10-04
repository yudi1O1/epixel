import React, { useState } from "react";

function Home() {
  // Using individual useState for form data
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  // Error state for handling validation errors
  const [errors, setErrors] = useState({});

  // Validation logic
  const validate = () => {
    let validationErrors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      validationErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      validationErrors.email = "Email is invalid";
    }

    // Phone Number validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phone) {
      validationErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(phone)) {
      validationErrors.phone = "Phone number is invalid";
    }

    // Password validation
    if (!password) {
      validationErrors.password = "Password is required";
    } else if (password.length < 8) {
      validationErrors.password = "Password must be at least 8 characters";
    }

    return validationErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Form submission logic
      setErrors({}); // Clear errors after successful form submission
      console.log("Form submitted:", { fname, lname, email, phone, password });
      // Reset form
      setFname("");
      setLname("");
      setEmail("");
      setPhone("");
      setPassword("");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <>
      {/* Navbar */}
      <div className="home-container">
        <section className="navbar">
          <a href="#" className="logo">
            Logo
          </a>
          <div className="navlinks">
            <div className="nav-link">
              <a href="">Features</a>
              <a href="">Price</a>
              <a href="" className="com">
                Community
              </a>
              <a href="">Support</a>
            </div>
            <div className="btns">
              <button className="btn log">Login</button>
              <button className="btn reg">Register</button>
            </div>
          </div>
          <div class="ham active">
            <i class="fa-solid fa-bars"></i>
          </div>
        </section>

        {/* Banner */}
        <section className="banner">
          <p>The large community of photo enthusiasts</p>
          <button>Join today</button>
        </section>

        {/* Content 1 */}
        <section className="content-1">
          <div className="container">
            <h1 className="content-head">
              Snap photo and share like <br />
              never before
            </h1>
            <div className="content-container">
              {/* Content Boxes */}
              {Array(4)
                .fill("")
                .map((_, index) => (
                  <div key={index} className="content-box">
                    <h2>Set ut perudont</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Corporis necessitatibus tempora aut quaerat a provident
                      consequuntur, consequatur atque quasi cumque incidunt
                      porro, magnam quo omnis iusto fugiat assumenda voluptatum
                      sed.
                    </p>
                    <button className="learn-btn">Learn more</button>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* Content 2 */}
        <section className="content-2">
          <div className="container">
            <div className="heading">
              <h1 className="head2">Have you ever posted on social media?</h1>
              <p className="para2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque expedita sapiente placeat minus ex mollitia
                perferendis saepe.
              </p>
            </div>
            <div className="content-img">
              <div className="contentSec">
                {Array(3)
                  .fill("")
                  .map((_, index) => (
                    <div key={index} className="contSec">
                      <h3>Lorem, ipsum dolor.</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Delectus voluptates, non architecto ad accusamus dicta a
                        in dolor praesentium iste?
                      </p>
                    </div>
                  ))}
              </div>
              <img src="/image.png" alt="example" />
            </div>
          </div>
        </section>

        {/* Service Section*/}
        <section className="stilish-photo">
          <div className="stilish-header">
            <h1>Make your photo more stylish</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              consequatur sed fugiat. Dicta cum itaque tempora sed autem, facere
              perferendis?
            </p>
          </div>

          <div className="service-box">
            <div className="s-box">
              <img src="/img/img1.png" alt="" />
              <div className="text">
                <h3>Lorem, ipsum dolor.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                  ullam.
                </p>
              </div>
            </div>
            <div className="s-box">
              <img src="/img/img2.png" alt="" />
              <div className="text">
                <h3>Lorem, ipsum dolor.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                  ullam.
                </p>
              </div>
            </div>
            <div className="s-box">
              <img src="/img/img3.png" alt="" />
              <div className="text">
                <h3>Lorem, ipsum dolor.</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                  ullam.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="form">
          <div className="form-header">
            <h1>Ready to take a free trial?</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              aspernatur porro maxime? Voluptas facere veritatis hic non.
            </p>
          </div>
          <div className="formCnt">
            <div className="form-container">
              <h2>Sign up for a free account</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="First name"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                    required
                  />
                  {errors.fname && <p className="error">{errors.fname}</p>}

                  <input
                    type="text"
                    placeholder="Last name"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                    required
                  />
                  {errors.lname && <p className="error">{errors.lname}</p>}
                </div>

                <div className="form-group">
                  <div className="msg input">
                    <input
                      type="email"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                  </div>
                  <div className="msg telephone">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                    {errors.phone && <p className="error">{errors.phone}</p>}
                  </div>
                </div>

                <div className="msg password">
                  <input
                    type="password"
                    placeholder="Create password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  {errors.password && (
                    <p className="errorp">{errors.password}</p>
                  )}
                </div>

                <button type="submit" className="btn">
                  Register
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <section className="footer">
          <div className="footer-top">
            <a href="#">logo</a>
            <div className="foot-half">
              <div className="foot-cont">
                <div className="foot mobile-app">
                  <h4>mobile-app</h4>
                  <div className="fetures">
                    <p>Features</p>
                    <p>Live share</p>
                    <p>Video recorder</p>
                  </div>
                </div>

                <div className="foot community">
                  <h4>community</h4>
                  <div className="fetures">
                    <p>Featured artist</p>
                    <p>The Portal</p>
                    <p>Live events</p>
                  </div>
                </div>

                <div className="foot company">
                  <h4>company</h4>
                  <div className="fetures">
                    <p>About us</p>
                    <p>Contact us</p>
                    <p>history</p>
                  </div>
                </div>

                <div className="foot-btn">
                  <button className="btn regg">Register</button>
                  <button className="btn logg">Log in</button>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; Photo, Inc. 2019. We love our users!</p>
            <div className="social-icons">
              <p>Follow us:</p>
              <div className="icon">
                <i className="ico fa-brands fa-facebook-f"></i>
                <i className="ico fa-brands fa-twitter"></i>
                <i className="ico fa-brands fa-linkedin-in"></i>
                <i className="ico fa-brands fa-instagram"></i>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
