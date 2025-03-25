import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * クラス名を結合して最適化されたクラス名文字列を生成します。
 * tailwind-mergeを使用してTailwind CSSクラスの競合を解決します。
 *
 * @param inputs - クラス名を表す値の配列
 * @returns 結合されたクラス名の最適化された文字列
 */
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
