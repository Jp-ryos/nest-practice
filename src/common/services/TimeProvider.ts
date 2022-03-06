import { Injectable } from '@nestjs/common';

export const _privateId_timeProvider: string = '94c723c4-b08f-40db-b087-b39afd8afad9';
@Injectable()
export class TimeProvider {

  currentDateTime(): string {
    return new Date().toISOString();
  }
}