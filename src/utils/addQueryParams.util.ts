/**
 * 指定されたURLにクエリパラメータを追加したURLを生成します。
 *
 * @param baseUrl - クエリパラメータを追加する基になるURL
 * @param queryParams - 追加するクエリパラメータのオブジェクト
 * @returns クエリパラメータが追加されたURL
 */
export const addQueryParams = (
  baseUrl: string,
  queryParams: QueryParamsType,
): string => {
  const queryStrings = Object.entries(queryParams)
    .filter(([, value]) => value !== undefined && value !== null)
    .map(([key, value]) => {
      if (value instanceof Date) {
        // Date型の場合はISO文字列に変換
        return `${encodeURIComponent(key)}=${encodeURIComponent(value.toISOString())}`;
      }
      return `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`;
    })
    .join('&');

  return queryStrings ? `${baseUrl}?${queryStrings}` : baseUrl;
};
