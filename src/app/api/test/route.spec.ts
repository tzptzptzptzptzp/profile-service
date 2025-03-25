import { GET } from './route';

describe('/api/test', () => {
  it('ステータス200で正しいJSONペイロードを返す', async () => {
    const response = await GET();
    expect(response.status).toBe(200);
    const data = await response.json();
    expect(data).toEqual({
      name: 'test api',
      description: 'This is a test API.',
    });
  });
});
