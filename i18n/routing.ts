import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
import {Language} from "@/i18n/languages";

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: [Language.En, Language.Ru],

    // Used when no locale matches
    defaultLocale: Language.En
});



// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter} = createNavigation(routing);