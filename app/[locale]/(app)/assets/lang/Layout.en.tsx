import Language_switcher from "@/app/ui/math/components/Language_switcher";
import {Aside_panel} from "@/app/[locale]/(app)/Aside_panel";
import {Logo} from "@/app/ui/math/components/Logo";



export default function Layout({children}:LayoutProps){

    const language = [
        {
            locale: "en",
            content: "English",
        },
        {
            locale: "ru",
            content: "Русский",
        }
    ]

    return (
        <div className="layout">
            {/* Header */}
            <header className="header flex justify-between fixed w-full max-h-20 z-10">
                <Logo/>
                <Language_switcher name="English" locales={language}/>
            </header>

            <div className="layout-body flex flex-1 pt-16">
                {/* Sidebar */}

                <Aside_panel nameLink={{
                    math: "Mathematics",
                    biology: "Biology",
                    physics: "Physics",
                    words: "linguistics",
                    logout: "Logout",
                }}/>

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





//---------------------Types-------------------------------------------------

interface LayoutProps {
    children: React.ReactNode;
}