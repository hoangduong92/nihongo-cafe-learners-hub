
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, LogOut, User, Settings, BookOpen, Home, BarChart } from "lucide-react";

export const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Home", path: "/", icon: <Home className="h-4 w-4 mr-2" /> },
    { name: "Courses", path: "/courses", icon: <BookOpen className="h-4 w-4 mr-2" /> },
  ];

  const adminNavigationItems = [
    { name: "Dashboard", path: "/admin", icon: <BarChart className="h-4 w-4 mr-2" /> },
    { name: "Settings", path: "/admin/settings", icon: <Settings className="h-4 w-4 mr-2" /> },
  ];

  const userNavigationItems = user?.role === "admin" ? adminNavigationItems : [];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-8 lg:gap-10">
          <Link
            to="/"
            className="flex items-center space-x-2 text-xl font-semibold"
          >
            <span className="text-primary">Nihongo</span>
            <span className="text-nihongo-cherry">Cafe</span>
          </Link>

          <nav className="hidden md:flex md:gap-6">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {user?.role === "admin" && (
              <Link
                to="/admin"
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname.startsWith("/admin")
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                Admin
              </Link>
            )}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user?.profilePicture} alt={user?.name} />
                    <AvatarFallback>{getInitials(user?.name || "")}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 animate-fade-in animate-duration-100">
                <DropdownMenuLabel>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user?.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user?.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/profile" className="cursor-pointer w-full flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                
                {userNavigationItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link to={item.path} className="cursor-pointer w-full flex items-center">
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
                
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="text-destructive focus:bg-destructive/10 cursor-pointer"
                  onClick={logout}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="hidden md:flex md:items-center md:gap-4">
              <Button asChild variant="ghost">
                <Link to="/login">Sign in</Link>
              </Button>
              <Button asChild>
                <Link to="/register">Sign up</Link>
              </Button>
            </div>
          )}

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs">
              <div className="flex flex-col space-y-6 pt-6">
                <Link
                  to="/"
                  className="flex items-center space-x-2 text-xl font-semibold"
                  onClick={closeMobileMenu}
                >
                  <span className="text-primary">Nihongo</span>
                  <span className="text-nihongo-cherry">Cafe</span>
                </Link>
                
                <nav className="flex flex-col space-y-4">
                  {!isAuthenticated && (
                    <div className="flex flex-col space-y-2">
                      <Button asChild variant="ghost" onClick={closeMobileMenu}>
                        <Link to="/login">Sign in</Link>
                      </Button>
                      <Button asChild onClick={closeMobileMenu}>
                        <Link to="/register">Sign up</Link>
                      </Button>
                    </div>
                  )}
                  
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className={`flex items-center text-sm font-medium transition-colors hover:text-primary ${
                        location.pathname === item.path
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                      onClick={closeMobileMenu}
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  ))}
                  
                  {isAuthenticated && (
                    <>
                      <Link
                        to="/profile"
                        className="flex items-center text-sm font-medium transition-colors hover:text-primary"
                        onClick={closeMobileMenu}
                      >
                        <User className="h-4 w-4 mr-2" />
                        Profile
                      </Link>
                      
                      {userNavigationItems.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className="flex items-center text-sm font-medium transition-colors hover:text-primary"
                          onClick={closeMobileMenu}
                        >
                          {item.icon}
                          {item.name}
                        </Link>
                      ))}
                      
                      <Button
                        variant="ghost"
                        className="flex items-center justify-start px-0 text-destructive hover:bg-transparent hover:text-destructive"
                        onClick={() => {
                          logout();
                          closeMobileMenu();
                        }}
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Log out
                      </Button>
                    </>
                  )}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
