import Background from '@/components/Background/Background';
import { ReactNode } from 'react';

interface LayoutProps {
  routes: ReactNode;
}

const Layout = ({ routes }: LayoutProps) => {
  return (
    <div className="h-full">
      <Background />
      <div>{routes}</div>
    </div>
  );
};

export default Layout;
