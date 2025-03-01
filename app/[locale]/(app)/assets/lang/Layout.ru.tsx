import {MainBlock} from "@/app/[locale]/(app)/assets/components/MainBlock";
import {Header} from "@/app/[locale]/(app)/assets/components/Header";

import OperatingPanel from "@/app/[locale]/(app)/assets/components/OperatingPanel";
import Chat from "@/app/[locale]/(app)/assets/components/Chat";
import {Footer} from "@/app/[locale]/(app)/@layout/footer/Footer";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}: LayoutProps) => {
    const language: Array<Language> = [
        {
            locale: "en",
            content: "English",
        },
        {
            locale: "ru",
            content: "Русский",
        },
    ];

    return (<div className="relative bg-gray-100 min-h-screen dark:bg-gray-900 base-animation-all overflow-clip">
            <OperatingPanel/>
            <Header language={language}/>
            <MainBlock content={children}/>
            <Chat/>
            <Footer />
        </div>
    );
};

export default Layout;


//---------------------------------types-----------------------

export type Language = Record<"locale" | "content", string>;