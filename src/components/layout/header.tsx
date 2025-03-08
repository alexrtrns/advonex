import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container h-full flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="/" className="text-xl font-bold">Advonex</a>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <a href="/search" className="px-4 py-2">Find Lawyers</a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="/practice-areas" className="px-4 py-2">Practice Areas</a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" asChild>
              <a href="/login">Sign In</a>
            </Button>
            <Button asChild>
              <a href="/register">Register</a>
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle className="mb-4 px-4 py-4">Menu</SheetTitle>
              <nav className="flex flex-col gap-4">
                <a href="/search" className="px-4 py-2">Find Lawyers</a>
                <a href="/practice-areas" className="px-4 py-2">Practice Areas</a>
                <a href="/login" className="px-4 py-2">Sign In</a>
                <a href="/register" className="px-4 py-2">Register</a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}