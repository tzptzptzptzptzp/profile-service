import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';

import '../styles/globals.scss';

const font = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: 'PROFILE | プロフィル：エンジニア向けプロフィール作成サービス',
  description:
    'このサービスはエンジニア向けのプロフィール作成・公開サービスです。面倒な設定不要で GitHub の情報を元に "イイ感じ" にプロフィールを作成することができます。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={font.className}>{children}</body>
    </html>
  );
}
