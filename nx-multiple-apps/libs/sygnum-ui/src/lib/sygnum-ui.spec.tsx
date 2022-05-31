import { render } from '@testing-library/react';

import SygnumUi from './sygnum-ui';

describe('SygnumUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SygnumUi />);
    expect(baseElement).toBeTruthy();
  });
});
