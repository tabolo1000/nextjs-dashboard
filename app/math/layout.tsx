import React from 'react';


interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="layout">
            {/* Header */}
            <header className="header">
                <h1 className="header-title">Header</h1>
            </header>

            <div className="layout-body " >
                {/* Sidebar */}
                <aside className="sidebar w-1/5">
                    <nav className="sidebar-nav">
                        <ul>
                            <li><a href="#" className="sidebar-link">Math</a></li>
                            <li><a href="#" className="sidebar-link">Biology</a></li>
                            <li><a href="#" className="sidebar-link">Settings</a></li>
                            <li><a href="#" className="sidebar-link">Logout</a></li>
                        </ul>
                    </nav>
                </aside>

                {/* Main Content */}
                <div className="w-4/5">
                    <main className="main-content">
                        {children} {/* Отображение дочерних элементов */}
                    </main>


                </div>

            </div>


            {/* Footer */}
            <footer className="footer">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Layout;