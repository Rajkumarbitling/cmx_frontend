import React from 'react'
import { FileEarmarkPersonFill } from "react-bootstrap-icons";

function SideMenu() {

    const menuItems = [
      {
        name: "My Dashboard",
        link: "#",
      },
      {
        name: "Booking History",
        link: "#",
      },
      {
        name: "Manage saved cards",
        link: "#",
      },
      {
        name: "Rewards",
        link: "#",
      },
      {
        name: "Plan a movie party",
        link: "#",
      },
      {
        name: "Gift cards",
        link: "#",
      },
      {
        name: "Watchlist",
        link: "#",
      },
      {
        name: "Preferences",
        link: "#",
      },
      {
        name: "Logout",
        link: "#",
      },
    ];
  return (
    <>
      <div className="aside px-4 pb-4 text-white text-center">
        <img src="https://i.pravatar.cc/150" alt="User" className="userImage" />
        <p className="text-bold mb-0">John Doe</p>
        <p className="mb-2">John@gmail.com</p>
        <button className="white-btn text-uppercase text-sm px-2 mb-4 rounded-pill">
          <FileEarmarkPersonFill /> Edit profile
        </button>
        <p>
          Your CMX Lifetime points <span className="text-bold">560</span>
        </p>
      </div>
      <div class="vertical-menu p-4">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SideMenu