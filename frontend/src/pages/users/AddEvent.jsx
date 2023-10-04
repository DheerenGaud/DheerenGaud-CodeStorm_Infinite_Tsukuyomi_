import React, { useState } from 'react';
import Select from 'react-select';
import { addEvent } from '../../api/api';
const EventCreationForm = () => {
  const token=window.localStorage.getItem("token")
  const [formData, setFormData] = useState({
    eventName: '',
    eventBudget: '',
    eventCategory: 'Entertainment',
    eventCustomRequirements: [],
    eventStartDateTime: '',
    eventEndDateTime: '',
    description: '',
    
    eventCapacity: '',
    token:token,
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const customRequirementOptions = [
    { value: 'Food', label: 'Food' },
    { value: 'Hospitality', label: 'Hospitality' },
    { value: 'Decoration', label: 'Decoration' },
    { value: 'Entertainment', label: 'Entertainment' },
    { value: 'Conference', label: 'Conference' },
  ];

  const handleCustomRequirementsChange = (selectedOptions) => {
    setFormData({
      ...formData,
      eventCustomRequirements: selectedOptions.map((req) => req.value),
    });
  };

  const handleSbmit= async()=>{
   
    // const formDataToSend = new FormData();

    // for (const key in formData) {
    //   formDataToSend.append(key, formData[key]);
    // }
 
      console.log(formData);
      const x= await addEvent(formData);
      console.log(x.data)
  }

   

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      eventImage: file, // Set the selected file in formData
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Create Event</h2>

      {/* Event Name */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="eventName">
          Event Name
        </label>
        <input
          className="border rounded py-2 px-3 w-full"
          type="text"
          id="eventName"
          name="eventName"
          value={formData.eventName}
          onChange={handleChange}
        />
      </div>

      {/* Event Budget */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="eventBudget">
          Event Budget
        </label>
        <input
          className="border rounded py-2 px-3 w-full"
          type="text"
          id="eventBudget"
          name="eventBudget"
          value={formData.eventBudget}
          onChange={handleChange}
        />
      </div>

      {/* Event Category */}
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="eventCategory">
          Event Category
        </label>
        <select
          className="border rounded py-2 px-3 w-full"
          id="eventCategory"
          name="eventCategory"
          value={formData.eventCategory}
          onChange={handleChange}
        >
          <option value="Entertainment">Entertainment</option>
          {/* Add more options here */}
        </select>
      </div>


      {/* Event Status */}
    

    {/* Event Custom Requirements */}
    <div>
          <label htmlFor="CustomRequirements" className="block text-sm font-medium text-gray-900">
            Custom Requirements
          </label>
          <Select
            id="CustomRequirements"
            isMulti
            options={customRequirementOptions}
            value={customRequirementOptions.filter((option) =>
              formData.eventCustomRequirements.includes(option.value)
            )}
            onChange={handleCustomRequirementsChange}
            placeholder="Select custom requirements"
          />
        </div>

{/* Event Start Date and Time */}
<div className="mb-4">
  <label className="block text-gray-700 font-bold mb-2" htmlFor="eventStartDateTime">
    Event Start Date and Time
  </label>
  <input
    className="border rounded py-2 px-3 w-full"
    type="datetime-local"
    id="eventStartDateTime"
    name="eventStartDateTime"
    value={formData.eventStartDateTime}
    onChange={handleChange}
  />
</div>

{/* Event End Date and Time */}
<div className="mb-4">
  <label className="block text-gray-700 font-bold mb-2" htmlFor="eventEndDateTime">
    Event End Date and Time
  </label>
  <input
    className="border rounded py-2 px-3 w-full"
    type="datetime-local"
    id="eventEndDateTime"
    name="eventEndDateTime"
    value={formData.eventEndDateTime}
    onChange={handleChange}
  />
</div>

{/* Description */}
<div className="mb-4">
  <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
    Description
  </label>
  <textarea
    className="border rounded py-2 px-3 w-full"
    id="description"
    name="description"
    value={formData.description}
    onChange={handleChange}
    rows="4"
  ></textarea>
</div>

{/* Event Image */}
{/* <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="eventImage">
          Event Image
        </label>
        <input
          className="border rounded py-2 px-3 w-full"
          type="file"
          id="eventImage"
          name="eventImage"
          onChange={handleImageChange} // Handle image change
        />
      </div> */}

{/* Event Capacity */}
<div className="mb-4">
  <label className="block text-gray-700 font-bold mb-2" htmlFor="eventCapacity">
    Event Capacity
  </label>
  <input
    className="border rounded py-2 px-3 w-full"
    type="number"
    id="eventCapacity"
    name="eventCapacity"
    value={formData.eventCapacity}
    onChange={handleChange}
  />
</div>
      
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
       onClick={handleSbmit}
      >
        Create Event
      </button>
    </div>
  );
};

export default EventCreationForm;