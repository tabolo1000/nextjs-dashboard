"use client"
import React from 'react';
import Link from "next/link";
//import {useSelectedLayoutSegment} from "next/navigation";



interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    //let access = useSelectedLayoutSegment()

    return (
        <div className="layout">
            {/* Header */}
            <header className="header fixed w-full max-h-20 z-10">
                <h1 className="header-title text-center">Welcome to the World Knowledge!!!</h1>
            </header>

            <div className="layout-body flex flex-1 pt-16">
                {/* Sidebar */}
                <aside className="sidebar w-1/5 bg-gray-100 min-h-screen p-4 fixed">
                    <nav className="sidebar-nav">
                        <ul className="space-y-4">
                            <li><Link href="/math" className="sidebar-link">Math</Link></li>
                            <li><Link href="#" className="sidebar-link">Biology</Link></li>
                            <li><Link href="#" className="sidebar-link">Settings</Link></li>
                            <li><Link href="#" className="sidebar-link">Logout</Link></li>
                        </ul>
                    </nav>
                </aside>

                {/* Main Content */}
                <div className=" "></div>
                <main className="main-content ml-[18%] mx-5 my-2 ">
                    {children} {/* Отображение дочерних элементов */}
                </main>

            </div>


            {/* Footer */}
            <footer className="footer z-10">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Layout;