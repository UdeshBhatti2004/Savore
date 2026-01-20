import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`px-4 md:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}