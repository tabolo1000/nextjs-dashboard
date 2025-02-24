import {Provider} from 'react-redux';
import {store} from '@/app/store';
import {StoryFn} from "@storybook/react";
import {NextIntlClientProvider} from "next-intl";

export const withReduxDecorator = (Story: StoryFn) => (
    <NextIntlClientProvider locale="ru" messages={{messages: ""}}>
        <Provider store={store}>
            <div className="flex items-center justify-center h-[20vh]">
                <Story/>
            </div>
        </Provider>
    </NextIntlClientProvider>
);