import { Provider } from 'react-redux';
import { store } from '@/app/store';
import {StoryFn} from "@storybook/react";

export const withReduxDecorator = (Story: StoryFn) => (
    <Provider store={store}>
        <Story />
    </Provider>
);