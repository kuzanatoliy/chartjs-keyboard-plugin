import { chartjsKeyboardPlugin } from './chartjs-keyboard-plugin';

describe('chartjsKeyboardPlugin', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(chartjsKeyboardPlugin).toBeDefined();
  });
});
