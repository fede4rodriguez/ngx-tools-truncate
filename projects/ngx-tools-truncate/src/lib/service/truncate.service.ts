import { ITruncateParams } from './../interface/truncate-params.interface';
import { Injectable } from '@angular/core';


/**
 * A simple angular service with methods to truncate strings
 * @metod truncate  Truncate a string
 */
@Injectable()
export class TruncateService {
  constructor() {}

  /**
   * A simple method to truncate string.
   * The total number of character returned by this filter is value.length + end.length.
   * @param {string} value Input string passed to the filter.
   * @param {ITruncateParams} params Filter configuration parameter
   * @returns {string} Truncated string
   */
  public truncate(value: string, params?: ITruncateParams): string {

    // set dafault params;
    params = params || {};
    params.mode = params.mode || 'chars';
    params.limit = params.limit || 10;
    params.end = params.end || '...';

    if (params.mode === 'chars') {

      if (value.length <= params.limit) {
        return value;
      }

      return value.substring(0, params.limit) + params.end;

    } else if (params.mode === 'words') {

      let words = value.split(' ');

      if (words.length <= params.limit) {
        return value;
      }

      return words.slice(0, params.limit).join(' ') + params.end;

    }

    return value;

  }

}
