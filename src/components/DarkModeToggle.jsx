import React from 'react'

const DarkModeToggle = ({darkMode, setDarkMode}) => {
  // TODO: Implement dark mode toggle logic

  return (
    <button onClick={() => setDarkMode(!darkMode)}>Toggle {darkMode ? 'Light Mode' : 'Dark Mode'}</button>
  )
}

export default DarkModeToggle
