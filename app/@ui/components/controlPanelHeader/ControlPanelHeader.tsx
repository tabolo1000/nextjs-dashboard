import LanguageSwitcher from "@/app/@ui/components/languageSwitcher/LanguageSwitcher";
import ThemeToggle from "@/app/ui/math/components/ThemeToggle";
import {Link} from "@/i18n/routing";
import {Person2TwoTone} from "@mui/icons-material";
import React from "react";
import {Language} from "@/app/[locale]/(app)/assets/lang/Layout.ru";

type ControlPanelHeaderProps = {
    /**
     * Array of language options to display in the language switcher
     * Each language contains a locale code and display content
     */
    languages: Array<Language>

    /**
     * Optional custom class name for the container
     */
    className?: string;
}


const ControlPanelHeader = React.memo(function ControlPanelHeader(
        {
            languages,
            className = "flex items-center gap-4",
        }: ControlPanelHeaderProps): React.ReactElement {
        return (
            <div
                className={className}
                role="navigation"
                aria-label="User controls"
            >
                <LanguageSwitcher locales={languages}/>
                <ThemeToggle/>
                <Link
                    href="/login"
                    className="button_to p-2"
                    aria-label="Log in to your account"
                >
                    <Person2TwoTone
                        className="text-primary"
                        aria-hidden="true"
                    />
                </Link>
            </div>
        )
    }
)

export default ControlPanelHeader;