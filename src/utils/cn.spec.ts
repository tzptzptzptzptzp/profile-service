import { cn } from './cn.util';

describe('cn', () => {
  it('クラス名が正しく結合される', () => {
    const result = cn('class1', 'class2');
    expect(result).toBe('class1 class2');
  });

  it('条件付きのクラス名が適切に処理される', () => {
    const result = cn('class1', false && 'class2', 'class3');
    expect(result).toBe('class1 class3');
  });

  it('Tailwind クラスの競合が適切に解決される', () => {
    const result = cn('bg-red-500', 'bg-blue-500');
    expect(result).toBe('bg-blue-500');
  });

  it('undefined や null の値が適切に処理される', () => {
    const result = cn('class1', undefined, null, 'class2');
    expect(result).toBe('class1 class2');
  });
});
