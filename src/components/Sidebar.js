import React, { useContext } from 'react'
import logo from '../logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from '../data';
import { Provider } from '../context';

const Sidebar = () => {
  const { sidebar, setSidebar } = useContext(Provider);
  const dontShowSideBar = "side-bar"
  const showSideBar = "side-bar-active"
  return (
    <section className={sidebar ? showSideBar : dontShowSideBar}>
      <h2>sidebar</h2>
      <button onClick={() => setSidebar(false)}>close</button>
    </section>
  )

}

export default Sidebar
