import { HttpErrorResponse } from '@angular/common/http';
import { extractApiErrorInfo } from './api-error';

describe('extractApiErrorInfo', () => {
  it('promotes a single validation detail into the primary message', () => {
    const error = new HttpErrorResponse({
      status: 400,
      error: {
        error: 'Validation Error',
        message: 'Request validation failed',
        details: ['pipelineName contains unsupported characters'],
      },
    });

    const result = extractApiErrorInfo(error, 'fallback');

    expect(result.status).toBe(400);
    expect(result.title).toBe('Validation Error');
    expect(result.message).toBe('pipelineName contains unsupported characters');
    expect(result.details).toEqual([]);
  });

  it('keeps multiple validation details in the details list', () => {
    const error = new HttpErrorResponse({
      status: 400,
      error: {
        error: 'Validation Error',
        message: 'Request validation failed',
        details: ['first issue', 'second issue'],
      },
    });

    const result = extractApiErrorInfo(error, 'fallback');

    expect(result.message).toBe('Request validation failed');
    expect(result.details).toEqual(['first issue', 'second issue']);
  });
});
