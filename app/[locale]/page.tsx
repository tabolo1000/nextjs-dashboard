

//import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';


export default function HomePage() {
    //const t = useTranslations('HomePage');
    return (
        <div>
            <h1>dasfasfasfsf</h1>аывав
            <h1>dasfasfasfsf</h1>аывав
            <h1>dasfasfasfsf</h1>аывавdasds
            <h1>dasfasfasfsf</h1>аывав
            <h1>dasfasfasfsf</h1>аывав
            <h1>dasfasfasfsf</h1>аывав
            <h1>dasfasfasfsf</h1>аывав
            <h1>dasfasfasfsf</h1>аывавdddasdasd
            <h1>{"t('title')"}</h1>fsdfdffdsasdsa
            <Link href="/" locale="en">{"t('about')"}</Link>
        </div>
    );
}