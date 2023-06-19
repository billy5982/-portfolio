import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-full">
      {children}
      <> 솔라 시스템</>
    </div>
  );
};

export default Layout;
