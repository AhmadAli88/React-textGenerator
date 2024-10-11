import React from "react";

const DynamicFields = ({ setParas, setHtml }) => {
  const handleParasChange = (e) => {
    setParas(e.target.value); // Update the number of paragraphs dynamically
  };

  const handleHtmlChange = (e) => {
    setHtml(e.target.value); // Update the HTML option dynamically
  };

  return (
    <div>
      <input 
        type="number" 
        placeholder="Number of paragraphs" 
        defaultValue={3} 
        onChange={handleParasChange} 
        min={1} // Set a minimum of 1 paragraph
      />
      <label htmlFor="html">Include HTML?</label>
      <select name="html" id="html" onChange={handleHtmlChange}>
        <option value="No">No</option>
        <option value="Yes">Yes</option>
      </select>
    </div>
  );
};

export default DynamicFields;
