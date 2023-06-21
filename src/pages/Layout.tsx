import Background from '@/components/Background/Background';
import { ReactNode } from 'react';

interface LayoutProps {
  routes: ReactNode;
}

const Layout = ({ routes }: LayoutProps) => {
  return (
    <div className="h-full">
      <Background />
      {routes}
    </div>
  );
};

export default Layout;
