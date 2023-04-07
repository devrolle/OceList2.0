import { ReactNode } from 'react';

interface RootLayoutProps {
    children: ReactNode | ReactNode[];
}

export default function RootLayout({ children }: RootLayoutProps) {
    return <main className="px-6 lg:max-w-7xl lg:mx-auto">{children}</main>;
}