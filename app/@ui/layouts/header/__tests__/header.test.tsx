import {render} from "@testing-library/react";
import Header from "@/app/@ui/layouts/header/Header";
import {Language} from "@/app/[locale]/(app)/assets/lang/Layout.ru";
import {ReactNode} from "react";

/**
 * Mock for Redux state type and structure.
 * This defines the shape of the application state used in tests.
 */
type State = Partial<typeof state>;

/**
 * Mock Redux state with preconfigured values.
 * Contains mainSlice with panel and animation states used by the Header component.
 */
const state = {
    mainSlice: {
        panel: {
            isOpenHeaderPanel: false,
        },
        animation: {
            isAnimating: true,
        }
    }
};

/**
 * Mock implementation for Redux hooks.
 * Simulates the useAppSelector hook by directly applying the selector to the mock state.
 */
jest.mock('@/app/store/hooks', () => ({
    useAppSelector: jest.fn((cb: (state: State) => any) => cb(state)),
}));

/**
 * Mock implementation for the AnimatedContainer component.
 * Renders a test-friendly version that exposes input elements to check props,
 * while maintaining the same interface and behavior as the real component.
 */
jest.mock('@/app/@ui/components/animatedContainer/AnimatedContainer', () => ({
        __esModule: true,
        default: ({
                      isVisible,
                      isAnimating,
                      children,
                  }: {
            isVisible: boolean,
            isAnimating: boolean,
            children: ReactNode
        }) => {
            return (
                <div data-testid={"animated-container"}>
                    <input
                        data-testid={"animated-container-isVisible"}
                        type="checkbox"
                        onChange={() => {
                        }}
                        checked={isVisible}
                    />
                    <input
                        data-testid={"animated-container-isAnimating"}
                        type="checkbox"
                        checked={isAnimating}
                        onChange={() => {
                        }}
                    />
                    {children}
                </div>
            )
        },
    })
);

/**
 * Mock implementation for the Logo component.
 * Simplifies the original component to just render a div with a data-testid.
 */
jest.mock('@/app/ui/math/components/Logo', () => ({
    Logo: () => (
        <div data-testid="logo">
            logo
        </div>
    ),
}));

/**
 * Mock implementation for the ControlPanelHeader component.
 * Simplifies the implementation but maintains the core functionality
 * of displaying the language options passed as props.
 */
jest.mock('@/app/@ui/components/controlPanelHeader/ControlPanelHeader', () =>
    function ControlPanelHeader({languages} : {languages: Array<Language>}) {
        return (
            <div data-testid="control-panel-header">
                {languages.map((language, i) => (
                    <div key={i}>
                        <p>{language.locale}</p>
                        <p>{language.content}</p>
                    </div>
                ))}
                <p>Control panel header</p>
            </div>
        )
    }
);


/**
 * Test suite for the Header component.
 * These tests verify that the Header component renders correctly with all its dependencies
 * and functions as expected according to its specifications.
 */
describe('Header', () => {
    const defaultProps: { languages: Array<Language> } = {
        languages: [
            {locale: 'en', content: 'English'},
            {locale: 'ru', content: 'Russian'}
        ]
    }

    /**
     * Tests that all child components and elements render correctly.
     * Verifies the presence of AnimatedContainer, header element, content container,
     * Logo and ControlPanelHeader components.
     */
    test('should render all required subcomponents and elements', () => {
        const {
            getByTestId,
            getByRole
        } = render(<Header {...defaultProps}/>);

        expect(getByTestId("animated-container")).toBeInTheDocument();
        expect(getByRole('banner')).toBeInTheDocument();
        expect(getByRole('container-content')).toBeInTheDocument();
        expect(getByTestId("logo")).toBeInTheDocument();
        expect(getByTestId("control-panel-header")).toBeInTheDocument();
    });

    /**
     * Tests that the AnimatedContainer component receives correct props
     * based on the Redux store state, and that these props affect the
     * component's rendered state.
     */
    test('should pass correct state values to AnimatedContainer', () => {
        const {getByTestId} = render(<Header {...defaultProps} />);

        expect(getByTestId('animated-container-isVisible')).not.toBeChecked()
        expect(getByTestId('animated-container-isAnimating')).toBeChecked()
    });

    /**
     * Tests that the header element has proper CSS classes applied.
     * Verifies that className property exists and contains values.
     */
    test('should apply CSS classes to header element', () => {
        const {getByRole} = render(
            <Header {...defaultProps} />
        );

        expect(getByRole('banner').className).toBeTruthy();
    });

    /**
     * Tests that the content container div has proper CSS classes applied.
     * Verifies that className property exists and contains values.
     */
    test('should apply CSS classes to content container', () => {
        const {getByRole} = render(
            <Header {...defaultProps} />
        );

        expect(getByRole('container-content').className).toBeTruthy();
    });

    /**
     * Tests that the ControlPanelHeader component correctly receives and
     * renders the language data passed through props.
     */
    test('should pass language props to ControlPanelHeader and render them', () => {
        const {
            getByText
        } = render(
            <Header {...defaultProps} />
        );

        expect(getByText('English')).toBeInTheDocument();
        expect(getByText('en')).toBeInTheDocument();
    });
})

