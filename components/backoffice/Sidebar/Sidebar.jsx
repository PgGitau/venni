import React from 'react';
import Link from 'next/link';
import './Sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar-container'>
      <Link href="#">Logo</Link>

      <div className='sidebar-links'>
        <Link href="#">Dashboard</Link>
        <Link href="#">Markets/Stores</Link>
        <Link href="#">Catalogue</Link>
        <Link href="#">Customers</Link>
        <Link href="#">Staff</Link>
        <Link href="#">Sellers</Link>
        <Link href="#">Settings</Link>
      </div>
    </div>
  );
}
