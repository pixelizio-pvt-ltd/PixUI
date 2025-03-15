import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import React from 'react';
import '@testing-library/jest-dom';

import { Button } from '../../src/index';

describe('Button Component', () => {
    it('renders with default props', () => {
        render(<Button>Click me</Button>);
        const button = screen.getByRole('button', { name: /click me/i });
        expect(button).toBeInTheDocument();
    });

    it('renders as a slot when asChild is true', () => {
        render(
            <Button asChild>
                <a href="#">Link Button</a>
            </Button>,
        );
        const link = screen.getByRole('link', { name: /link button/i });
        expect(link).toBeInTheDocument();
    });
});
