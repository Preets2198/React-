import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    pincode: "",
    street: "",
    state: "",
    city: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    pincode: "",
  });

 
  const handleChange = (e) => {
    const { name, value } = e.target;
  if (name === "fullName") {
      const nameRegex = /^[A-Za-z ]*$/; 
      if (!nameRegex.test(value)) {
        return; 
      }
      setErrors({
        ...errors,
        fullName:
          value.trim().length >= 3
            ? ""
            : "Name must be at least 3 characters",
      });
    }


    
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setErrors({
        ...errors,
        email: emailRegex.test(value) ? "" : "Invalid email format",
      });
    }

    if (name === "password") {
      setErrors({
        ...errors,
        password:
          value.length >= 6
            ? ""
            : "Password must be at least 6 characters long",
      });
    }

    if (name === "pincode") {
      const pincodeRegex = /^[0-9]{0,6}$/; 
      if (pincodeRegex.test(value)) {
        setFormData({ ...formData, [name]: value });
        setErrors({
          ...errors,
          pincode:
            value.length === 6 ? "" : "Pincode must be exactly 6 digits",
        });
      }
      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (errors.email || errors.password || errors.pincode) {
      alert("Please fix all errors before submitting.");
      return;
    }

    console.log("Form Data Submitted:", formData);
    alert("Signup successful!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
      <div className="bg-white w-full max-w-lg p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Signup Form</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {}
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />
         

          {}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-lg"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          {}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password (min 6 characters)"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border p-3 rounded-lg"
            />

            {}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-sm text-blue-600"
            >
              {showPassword ? "Hide" : "Show"}
            </button>

            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          {}
          <div>
            <input
              type="text"
              name="pincode"
              placeholder="Pincode (6 digits)"
              value={formData.pincode}
              onChange={handleChange}
              required
              maxLength="6"
              className="w-full border p-3 rounded-lg"
            />
            {errors.pincode && (
              <p className="text-red-500 text-sm">{errors.pincode}</p>
            )}
          </div>

          {}
          <input
            type="text"
            name="street"
            placeholder="Street Address"
            value={formData.street}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

         <div>
  <select
    name="state"
    value={formData.state}
    onChange={handleChange}
    required
    className="w-full border p-3 rounded-lg"
  >
    <option value="">Select State</option>
    <option value="Andhra Pradesh">Andhra Pradesh</option>
    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
    <option value="Assam">Assam</option>
    <option value="Bihar">Bihar</option>
    <option value="Chhattisgarh">Chhattisgarh</option>
    <option value="Goa">Goa</option>
    <option value="Gujarat">Gujarat</option>
    <option value="Haryana">Haryana</option>
    <option value="Himachal Pradesh">Himachal Pradesh</option>
    <option value="Jharkhand">Jharkhand</option>
    <option value="Karnataka">Karnataka</option>
    <option value="Kerala">Kerala</option>
    <option value="Madhya Pradesh">Madhya Pradesh</option>
    <option value="Maharashtra">Maharashtra</option>
    <option value="Manipur">Manipur</option>
    <option value="Meghalaya">Meghalaya</option>
    <option value="Mizoram">Mizoram</option>
    <option value="Nagaland">Nagaland</option>
    <option value="Odisha">Odisha</option>
    <option value="Punjab">Punjab</option>
    <option value="Rajasthan">Rajasthan</option>
    <option value="Sikkim">Sikkim</option>
    <option value="Tamil Nadu">Tamil Nadu</option>
    <option value="Telangana">Telangana</option>
    <option value="Tripura">Tripura</option>
    <option value="Uttar Pradesh">Uttar Pradesh</option>
    <option value="Uttarakhand">Uttarakhand</option>
    <option value="West Bengal">West Bengal</option>
    <option value="Delhi">Delhi (NCT)</option>
  </select>
</div>


          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded-lg"
          />

          {}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
