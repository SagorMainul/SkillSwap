
import React from 'react';
import { Outlet } from 'react-router-dom';
import { 
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
  useSidebar
} from "@/components/ui/sidebar";
import { Link, useLocation } from 'react-router-dom';
import { Users, LayoutDashboard, User, Settings } from 'lucide-react';
import DashboardHeader from './DashboardHeader';

const DashboardSidebar = () => {
  const { open } = useSidebar();
  const location = useLocation();
  
  // Helper function to check if the current route is active
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { title: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { title: "Profile", path: "/profile", icon: User },
    { title: "Settings", path: "/dashboard/settings", icon: Settings }
  ];

  return (
    <Sidebar 
      className={open ? "w-64" : "w-14"} 
      collapsible="icon"
      variant="sidebar"
    >
      <SidebarHeader className="flex items-center justify-between p-4">
        <div className={`flex items-center ${!open && "justify-center"}`}>
          <Users className="h-6 w-6 text-primary" />
          {open && <span className="ml-2 text-lg font-bold">SkillSwap</span>}
        </div>
        <SidebarTrigger className="h-7 w-7" />
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.path}>
              <SidebarMenuButton
                tooltip={item.title}
                isActive={isActive(item.path)}
                asChild
              >
                <Link 
                  to={item.path} 
                  state={{ isLoggedIn: true }} 
                  className="flex items-center"
                >
                  <item.icon className="mr-2 h-5 w-5" />
                  {open && <span>{item.title}</span>}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};

const DashboardLayout = () => {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex flex-col min-h-screen w-full">
        <DashboardHeader />
        <div className="flex flex-1 w-full">
          <DashboardSidebar />
          <main className="flex-1 p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
