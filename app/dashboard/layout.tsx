import SideNav from '@/app/ui/dashboard/sidenav';

// <Layout /> 组件接收一个 children 属性。这个子组件可以是一个页面或另一个布局。
// 在你的情况下，位于 /dashboard 中的页面将自动嵌套在 <Layout /> 中
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}