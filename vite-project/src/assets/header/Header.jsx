import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
const Header = () => {
  return (
    <>
        <nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand">Navbar</a>
    <form className="d-flex border-rounded input-group w-auto">
      <input
        type="search"
        className="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
      />
      <span className="input-group-text border-0" id="search-addon">
        <SearchIcon/>
      </span>
    </form>
  </div>
</nav>
    </>
  )
}

export default Header