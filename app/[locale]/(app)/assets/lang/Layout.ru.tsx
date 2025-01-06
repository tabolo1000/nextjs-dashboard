import {MainBlock} from "@/app/[locale]/(app)/assets/components/MainBlock";
import {Header} from "@/app/[locale]/(app)/assets/components/Header";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
    const language = [
        {
            locale: "en",
            content: "English",
        },
        {
            locale: "ru",
            content: "Русский",
        },
    ];

    return (<div className="relative bg-gray-100 dark:bg-gray-900 base-animation-all min-h-screen">
            <Header language={language}/>
            <div
                className=" flex flex-col content-center w-[1140px] mx-auto">
                {/* Header */}
                <MainBlock content={children}/>
                {/* Footer */}

            </div>
            <footer
                className="absolute bottom-0 p-4 text-center w-full z-10  base-animation-all bg-blue-600 dark:bg-blue-950 text-white ">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
            </footer>

        </div>
    );
};

export default Layout;