// .storybook/preview.tsx

import type { Preview } from '@storybook/react';
import {withReduxDecorator} from "@/.storybook/decorator";
import '../app/ui/global.css';


const preview: Preview = {
  decorators: [withReduxDecorator], // Декоратор, который оборачивает его компоненту доп функционалом.
  parameters: { // как работать с параметрами
    actions: { argTypesRegex: '^on[A-Z].*' }, // если имеется параметр на ^ on далее идет любая лат. A-Z и любой * кон.
    controls: { // в графу контролеры добавит способ управления
      matchers: {
        color: /(background|color)$/i,  // если что-то начинается с background || color. Поле цветов.
        date: /Date$/,  // контроль даты если заканчивается $ на Date. Поле даты
      },
    },
  },
};

export default preview;
