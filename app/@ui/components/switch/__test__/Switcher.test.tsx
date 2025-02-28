import React from 'react';
import {fireEvent, render, screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import Switcher from "@/app/@ui/components/switch/Switcher";

// Мок для Material UI иконок
jest.mock('@mui/icons-material/LightMode', () => function FN() {
    return <div data-testid="light-mode-icon"/>
});
jest.mock('@mui/icons-material/NightsStay', () => function FN(){
    return <div data-testid="night-stay-icon"/>
});

describe('Switcher', () => {
    const onChange = jest.fn();
    const defaultProps = {
        currentChecked: false,
        onChange,
        ariaLabel: "Toggle theme",
        checkedIcon: "🌑",
        uncheckedIcon: "☀️",
        id: "theme-switcher",
        disabled: false
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('renders component correctly with default props', () => {
        render(<Switcher {...defaultProps} />);

        // Проверяем, что чекбокс присутствует и имеет правильное состояние
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeInTheDocument();
        expect(checkbox).not.toBeChecked();

        // Проверяем атрибуты доступности
        expect(checkbox).toHaveAttribute('aria-label', 'Toggle theme');
        expect(checkbox).toHaveAttribute('aria-checked', 'false');
        expect(checkbox).toHaveAttribute('id', 'theme-switcher');
    });

    test('renders with custom icons when provided', () => {
        const customProps = {
            ...defaultProps,
            checkedIcon: <div data-testid="custom-checked-icon">Custom Checked</div>,
            uncheckedIcon: <div data-testid="custom-unchecked-icon">Custom Unchecked</div>
        };

        render(<Switcher {...customProps} />);

        expect(screen.getByTestId('custom-unchecked-icon')).toBeInTheDocument();
        expect(screen.queryByTestId('custom-checked-icon')).toBeInTheDocument();
    });

    test('calls onChange when clicked', () => {
        render(<Switcher {...defaultProps} />);

        const checkbox = screen.getByRole('checkbox');
        fireEvent.click(checkbox);

        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(true);
    });

    test('does not call onChange when disabled', () => {
        render(<Switcher {...defaultProps} disabled={true}/>);

        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeDisabled();

        fireEvent.click(checkbox);

        expect(onChange).not.toHaveBeenCalled();
    });

    test('renders in checked state when currentChecked is true', () => {
        render(<Switcher {...defaultProps} currentChecked={true}/>);

        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeChecked();
        expect(checkbox).toHaveAttribute('aria-checked', 'true');
    });

    test('applies disabled styling when disabled prop is true', () => {
        render(<Switcher {...defaultProps} disabled={true}/>);

        const label = screen.getByLabelText('Toggle theme').parentElement;
        expect(label).toHaveClass('opacity-60');
        expect(label).toHaveClass('cursor-not-allowed');
    });

    test('renders with default Material UI icons when no custom icons provided', () => {
        const propsWithoutCustomIcons = {
            currentChecked: false,
            onChange
        };

        render(<Switcher {...propsWithoutCustomIcons} />);

        // Проверяем, что иконки Material UI отрендерены
        expect(screen.getByTestId('light-mode-icon')).toBeInTheDocument();
        expect(screen.getByTestId('night-stay-icon')).toBeInTheDocument();
    });

    test('correctly toggles from unchecked to checked state', () => {
        render(<Switcher {...defaultProps} />);

        // Начальное состояние
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).not.toBeChecked();

        // Клик по чекбоксу
        fireEvent.click(checkbox);

        // Проверяем что был вызван onChange с правильным значением
        expect(onChange).toHaveBeenCalledWith(true);
    });

    test('correctly toggles from checked to unchecked state', () => {
        render(<Switcher {...defaultProps} currentChecked={true}/>);

        // Начальное состояние
        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toBeChecked();

        // Клик по чекбоксу
        fireEvent.click(checkbox);

        // Проверяем что был вызван onChange с правильным значением
        expect(onChange).toHaveBeenCalledWith(false);
    });

    test('applies correct CSS classes when checked', () => {
        render(<Switcher {...defaultProps} currentChecked={true}/>);

        const switchContainer = screen.getByRole('checkbox').nextElementSibling;
        expect(switchContainer).toHaveClass('bg-[#383838]');
        expect(switchContainer).toHaveClass('shadow-gray-700');
        expect(switchContainer).toHaveClass('before:opacity-0');
        expect(switchContainer).toHaveClass('after:opacity-100');
    });

    test('applies correct CSS classes when unchecked', () => {
        render(<Switcher {...defaultProps} currentChecked={false}/>);

        const switchContainer = screen.getByRole('checkbox').nextElementSibling;
        expect(switchContainer).toHaveClass('bg-gray-200');
        expect(switchContainer).toHaveClass('shadow-gray-400');
        expect(switchContainer).not.toHaveClass('before:opacity-0');
        expect(switchContainer).not.toHaveClass('after:opacity-100');
    });

    test('uses custom ID when provided', () => {
        const customId = 'custom-switch-id';
        render(<Switcher {...defaultProps} id={customId}/>);

        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).toHaveAttribute('id', customId);

        // Проверяем, что label связан с этим id
        const label = screen.getByLabelText('Toggle theme').parentElement;
        expect(label).toHaveAttribute('for', customId);
    });

    test('uses custom aria-label when provided', () => {
        const customAriaLabel = 'Custom theme toggle';
        render(<Switcher {...defaultProps} ariaLabel={customAriaLabel}/>);

        const checkbox = screen.getByLabelText(customAriaLabel);
        expect(checkbox).toHaveAttribute('aria-label', customAriaLabel);
    });
});