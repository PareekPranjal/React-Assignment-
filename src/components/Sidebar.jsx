import React, { useState } from 'react';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { FcCopyleft } from 'react-icons/fc';
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_PROJECTS_LINKS } from '../lib/consts/navigation';

const linkClass = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-[#a299d6] hover:no-underline active:bg-neutral-600 rounded-lg text-base';

export default function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const { pathname } = useLocation();

  const handleLinkClick = () => {
    setMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <div className={`fixed top-0 left-0 right-0 p-3 lg:w-60 lg:flex-shrink-0 ${menuOpen ? 'lg:ml-60' : 'lg:ml-0'} ${menuOpen ? 'z-10 shadow-lg bg-white' : 'lg:relative'}`}>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <FcCopyleft fontSize={28} />
          <span className="text-black font-semibold text-lg">Omoi</span>
        </div>
        <div className="block lg:hidden cursor-pointer" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>
      </div>
      <div className={`lg:flex lg:flex-col ${menuOpen ? 'flex' : 'hidden'}`}>
        <div className={`py-8 flex flex-1 flex-col gap-0.5 ${menuOpen ? 'lg:hidden block' : 'hidden lg:flex'}`}>
          {DASHBOARD_SIDEBAR_LINKS.map((link) => (
            <SidebarLink key={link.key} link={link} pathname={pathname} handleLinkClick={handleLinkClick} />
          ))}
          <h6 className="pl-[8px] text-xs text-gray-500 pt-4">Tools</h6>
          {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((link) => (
            <SidebarLink key={link.key} link={link} pathname={pathname} handleLinkClick={handleLinkClick} />
          ))}
          <h6 className="pl-[8px] text-xs text-gray-500 pt-4">Projects</h6>
          {DASHBOARD_SIDEBAR_PROJECTS_LINKS.map((link) => (
            <SidebarLink key={link.key} link={link} pathname={pathname} handleLinkClick={handleLinkClick} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SidebarLink({ link, pathname, handleLinkClick }) {
  return (
    <Link
      to={link.path}
      className={classNames(pathname === link.path ? 'bg-[#6e62e5] text-white' : 'text-black', linkClass)}
      onClick={handleLinkClick}
    >
      <span className="text-xl">{link.icon}</span>
      {link.label}
    </Link>
  );
}
