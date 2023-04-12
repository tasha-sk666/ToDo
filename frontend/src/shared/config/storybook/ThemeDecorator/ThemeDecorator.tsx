import { Decorator, Story } from '@storybook/react';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/const/theme';

export const ThemeDecorator: Decorator = (StoryComponent: Story) => (
    <ThemeProvider initialTheme={Theme.LIGHT}>
        <div className={`app ${Theme.LIGHT}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);
