import React from 'react'

type SearchBarProps = {
  value: string
  handleChange: React.ChangeEventHandler<HTMLInputElement> | undefined
}

const SearchBar: React.FC<SearchBarProps> = ({ value, handleChange }) => {
  return (
    <div>
      <input
        value={value}
        onChange={handleChange}
        type="text"
        placeholder="Search rooms..."
        className="px-4 py-2 border border-gray-300 rounded w-full"
      />
    </div>
  )
}

export default SearchBar
