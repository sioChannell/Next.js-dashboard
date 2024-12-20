import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //这被称为根布局，是必需的。你添加到根布局的任何 UI 
  // 将在应用程序中的所有页面之间共享。你可以使用根布局来修改 <html> 和 <body> 标签，添加元数据
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
