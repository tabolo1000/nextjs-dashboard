

//import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';


export default function HomePage() {
    //const t = useTranslations('HomePage');
    return (
        <div>
            <h1>{"t('title')"}</h1>
            <Link href="/" locale="en">{"t('about')"}</Link>
        </div>
    );
}