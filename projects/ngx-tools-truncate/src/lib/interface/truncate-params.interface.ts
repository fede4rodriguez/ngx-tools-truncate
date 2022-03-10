
/**
* Interface for truncate params configuration.
* @param {string} mode  to count the limit. `chars` to count by characters, or `words` to count by words.
* @param {string} [limit=10] The number of characters or words saved.
* @param {string} [end='...'] Decorative end of the truncated string.
* @default { mode: 'chars', limit: 10, end: '...' }
*/
export interface ITruncateParams {

  mode?: string;
  limit?: number;
  end?: string;

}
