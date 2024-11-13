import {Link} from "@/i18n/routing";
import Language_switcher from "@/app/ui/math/components/Language_switcher";

interface LayoutProps {
    children: React.ReactNode;
}



const Layout: React.FC<LayoutProps> = ({ children, }) => {

    return (
        <div className="layout">
            {/* Header */}
            <header className="header flex justify-between fixed w-full max-h-20 z-10">
                <h1 className="header-title text-center">Welcome to the World Knowledge!!!</h1>
                <Language_switcher/>
            </header>

            <div className="layout-body flex flex-1 pt-16">
                {/* Sidebar */}

                <aside className="sidebar w-1/5 bg-gray-900 min-h-screen p-4 fixed">
                    <nav className="sidebar-nav">
                        <ul className="space-y-4">
                            <li><Link href="/math" className="sidebar-link">Math</Link></li>
                            <li><Link href="/math/biology/vitamins/vitamin_k/introduction_vitamin_k" className="sidebar-link">Biology</Link></li>
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