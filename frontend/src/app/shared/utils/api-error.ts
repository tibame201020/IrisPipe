import { HttpErrorResponse } from '@angular/common/http';
import { asArray, asRecord, asString } from '../mappers/normalize';

export interface ApiErrorInfo {
  status: number | null;
  title: string;
  message: string;
  details: string[];
}

export function extractApiErrorInfo(error: unknown, fallbackMessage: string): ApiErrorInfo {
  if (error instanceof HttpErrorResponse) {
    const errorBody = asRecord(error.error);
    const details = asArray<string>(errorBody['details']).filter((detail) => typeof detail === 'string');
    const message = asString(errorBody['message'], fallbackMessage);
    const shouldPromoteSingleDetail = message === 'Request validation failed' && details.length === 1;

    return {
      status: Number.isFinite(error.status) ? error.status : null,
      title: asString(errorBody['error'], 'Request Error'),
      message: shouldPromoteSingleDetail ? details[0] : message,
      details: shouldPromoteSingleDetail ? [] : details,
    };
  }

  return {
    status: null,
    title: 'Request Error',
    message: fallbackMessage,
    details: [],
  };
}
