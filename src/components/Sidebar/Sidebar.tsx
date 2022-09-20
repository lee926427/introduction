import { Sidebar } from 'flowbite-react';
import { DocumentIcon, UserIcon, WrenchIcon } from '@heroicons/react/24/solid';

export function SideBar() {
  return (
    <div className="w-fit shadow-md fixed left-0 top-0 h-screen">
      <Sidebar aria-label="Default sidebar">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#aboutMe" icon={UserIcon}>
              About Me
            </Sidebar.Item>
            <Sidebar.Item href="#skills" icon={WrenchIcon}>
              Skills
            </Sidebar.Item>
            <Sidebar.Item href="#portfolios" icon={DocumentIcon}>
              Portfolios
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}
