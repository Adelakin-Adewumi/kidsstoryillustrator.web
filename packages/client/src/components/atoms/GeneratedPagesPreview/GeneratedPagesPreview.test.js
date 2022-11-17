import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import GeneratedPagesPreview from './GeneratedPagesPreview';

test('component is rendered', () => {
    render(<GeneratedPagesPreview />);
});
