import { BadRequestException, Injectable } from '@nestjs/common';

export const _privateId_ErrorHandler: string = '6d7d6c40-efbe-4e28-b70a-041e589068f6';

@Injectable()
export class ErrorHandler {

  raiseBadRequestException(errorCode: string, errorMessage: string, time: string): BadRequestException {
    return new BadRequestException({
      statusCode: 400,
      status: 'Bad Request',
      errorInfo: {
        errorcode: errorCode,
        errorMessage: errorMessage,
      },
      time: time,
    }, '');
  }
}