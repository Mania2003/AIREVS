
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';


const defaultUser = {
  avatar: '',
  fullName: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+91 9876543210',
  company: 'RealEstate AI',
  address: '123 Main Street',
  city: 'Bengaluru',
  state: 'Karnataka',
  country: 'India',
  bio: 'Experienced real estate agent specializing in Bengaluru properties.',
  linkedin: '',
  website: '',
};

const ProfileEditPage = () => {
  const [user, setUser] = useState(defaultUser);
  const [avatarPreview, setAvatarPreview] = useState(user.avatar);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
        setUser((prev) => ({ ...prev, avatar: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!user.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!user.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(user.email)) newErrors.email = 'Invalid email';
    if (!user.phone.trim()) newErrors.phone = 'Phone is required';
    if (!user.address.trim()) newErrors.address = 'Address is required';
    if (!user.city.trim()) newErrors.city = 'City is required';
    if (!user.state.trim()) newErrors.state = 'State is required';
    if (!user.country.trim()) newErrors.country = 'Country is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSuccess('Profile updated successfully!');
    setTimeout(() => setSuccess(''), 2000);
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-2xl shadow-2xl mt-10 animate-fade-in border border-blue-100">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-blue-800 tracking-tight flex items-center justify-center gap-2">
        <svg xmlns='http://www.w3.org/2000/svg' className='h-8 w-8 text-blue-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z' /></svg>
        Edit Profile
      </h2>
      <form className="space-y-8" onSubmit={handleSubmit}>
        {/* Avatar Section */}
        <div className="flex flex-col items-center mb-2">
          <div className="relative">
            <img
              src={avatarPreview || 'https://ui-avatars.com/api/?name=' + encodeURIComponent(user.fullName)}
              alt="Avatar"
              className="w-28 h-28 rounded-full object-cover border-4 border-blue-400 shadow-lg"
            />
            <button
              type="button"
              onClick={() => fileInputRef.current.click()}
              className="absolute bottom-0 right-0 bg-blue-600 text-white rounded-full p-2 shadow hover:bg-blue-700 transition"
              title="Change Avatar"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536M9 13h3l8-8a2.828 2.828 0 10-4-4l-8 8v3h3z" />
              </svg>
            </button>
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleAvatarChange}
              className="hidden"
            />
          </div>
        </div>

        {/* Basic Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-1 text-blue-900">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={user.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className={`w-full p-2 border rounded ${errors.fullName ? 'border-red-500' : ''}`}
            />
            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 text-blue-900">Company</label>
            <input
              type="text"
              name="company"
              value={user.company}
              onChange={handleChange}
              placeholder="Company"
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-1 text-blue-900">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Email"
              className={`w-full p-2 border rounded ${errors.email ? 'border-red-500' : ''}`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 text-blue-900">Phone</label>
            <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={handleChange}
              placeholder="Phone"
              className={`w-full p-2 border rounded ${errors.phone ? 'border-red-500' : ''}`}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>
        </div>

        {/* Address Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-1 text-blue-900">Address</label>
            <input
              type="text"
              name="address"
              value={user.address}
              onChange={handleChange}
              placeholder="Address"
              className={`w-full p-2 border rounded ${errors.address ? 'border-red-500' : ''}`}
            />
            {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 text-blue-900">City</label>
            <input
              type="text"
              name="city"
              value={user.city}
              onChange={handleChange}
              placeholder="City"
              className={`w-full p-2 border rounded ${errors.city ? 'border-red-500' : ''}`}
            />
            {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 text-blue-900">State</label>
            <input
              type="text"
              name="state"
              value={user.state}
              onChange={handleChange}
              placeholder="State"
              className={`w-full p-2 border rounded ${errors.state ? 'border-red-500' : ''}`}
            />
            {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 text-blue-900">Country</label>
            <input
              type="text"
              name="country"
              value={user.country}
              onChange={handleChange}
              placeholder="Country"
              className={`w-full p-2 border rounded ${errors.country ? 'border-red-500' : ''}`}
            />
            {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
          </div>
        </div>

        {/* Bio Section */}
        <div>
          <label className="block text-sm font-semibold mb-1 text-blue-900">Bio</label>
          <textarea
            name="bio"
            value={user.bio}
            onChange={handleChange}
            placeholder="Tell us about yourself..."
            className="w-full p-2 border rounded min-h-[80px]"
          />
        </div>

        {/* Social Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold mb-1 text-blue-900">LinkedIn</label>
            <input
              type="url"
              name="linkedin"
              value={user.linkedin}
              onChange={handleChange}
              placeholder="LinkedIn Profile URL"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 text-blue-900">Website</label>
            <input
              type="url"
              name="website"
              value={user.website}
              onChange={handleChange}
              placeholder="Personal/Company Website"
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-8">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="w-1/2 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition font-semibold"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-1/2 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-semibold"
          >
            Save Changes
          </button>
        </div>
        {success && <div className="text-green-600 text-center mt-4 font-semibold">{success}</div>}
      </form>
    </div>
  );
};

export default ProfileEditPage;
