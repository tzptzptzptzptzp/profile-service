import { addQueryParams } from './addQueryParams.util';

describe('addQueryParams', () => {
  const baseUrl = 'https://example.com';

  it('クエリパラメータがURLに追加される', () => {
    const queryParams = { search: 'test', page: 1 };
    const result = addQueryParams(baseUrl, queryParams);
    expect(result).toBe('https://example.com?search=test&page=1');
  });

  it('クエリパラメータがDate型の場合にISO文字列でURLに追加される', () => {
    const queryParams = { date: new Date('2023-01-01T00:00:00Z') };
    const result = addQueryParams(baseUrl, queryParams);
    expect(result).toBe(
      'https://example.com?date=2023-01-01T00%3A00%3A00.000Z',
    );
  });

  it('クエリパラメータのundefinedとnullの値は無視される', () => {
    const queryParams = {
      valid: 'value',
      ignoreUndefined: undefined,
      ignoreNull: null,
    };
    const result = addQueryParams(baseUrl, queryParams);
    expect(result).toBe('https://example.com?valid=value');
  });

  it('有効なクエリパラメータが提供されない場合はベースURLを変更せずに返す', () => {
    const queryParams = { ignoreUndefined: undefined, ignoreNull: null };
    const result = addQueryParams(baseUrl, queryParams);
    expect(result).toBe(baseUrl);
  });
});
