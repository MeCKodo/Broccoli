import {
  render, fireEvent, screen, cleanup,
} from '@testing-library/react';
import { MainContent } from '../MainContent';

describe('MainContent', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
    cleanup();
  });

  it('should submit when click button when all info is correct', async () => {
    const view = render(
      <MainContent />,
    );
    const requestAnInviteButton = screen.getByText('Request an invite');
    fireEvent.click(requestAnInviteButton);
    expect(screen.getByPlaceholderText('Full name')).toBeInTheDocument();
    view.unmount();
  });
});
