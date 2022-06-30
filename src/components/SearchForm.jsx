import React, { useState } from 'react';


const SearchForm = (props) => {
  const [formData, setFormData] = useState({query:''})

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  return (
    <>
      <div>
        <form action="">
          <input
            name="query"
            type="text"
            autoComplete="off"
            value={formData.query}
            onChange={handleChange}
            />
            <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
}

export default SearchForm;