"use client";
import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownTrigger,
} from "@nextui-org/react";
import Image from "next/image";
import { useAppDispatch } from "@/redux/hooks";
import { toast } from "sonner";
import { logOut } from "@/redux/features/auth/authSlice";
import Cookies from "js-cookie";
import { useGetUserByEmailQuery } from "@/redux/features/auth/auth.api";
import { MenuItems } from "@/consts/menuItems";
import { MdVerified } from "react-icons/md";
import { useLocalUser } from "@/context/user.Provider";

export default function MenuBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { user, isLoading } = useLocalUser();
  const dispatch = useAppDispatch();
  const { data: loggedInuser, isSuccess } = useGetUserByEmailQuery(
    `${user?.email}`
  );
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Handle logout
  const handleLogout = () => {
    const toastId = toast.loading("Processing...");
    Cookies.remove("accessToken");
    dispatch(logOut());
    toast.success("Logout successful", { id: toastId });
  };

  if (!isClient && !isSuccess) {
    return null;
  }

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="shadow-lg z-[9999] font-roboto_slab bg-gray-900 text-white"
    >
      <div className="flex justify-between w-full container mx-auto items-center px-3 lg:px-0">
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
          <NavbarBrand>
            <Link href="/">
              <Image
                src="https://i.ibb.co.com/DYvvNZQ/logo-2.png"
                alt="Plantify"
                height={60}
                width={60}
              />
            </Link>
            <h1>Plantify</h1>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4">
          {MenuItems?.map((item, idx: number) => {
            if (item?.url === "profile" && !user) {
              return null;
            }
            return (
              <NavbarItem key={idx} className="font-semibold text-white">
                <Link href={`/${item.url}`}>{item?.name}</Link>
              </NavbarItem>
            );
          })}
        </NavbarContent>

        <NavbarContent justify="end">
          {user ? (
            <Dropdown>
              <DropdownTrigger>
                {!isLoading && (
                  <div className="relative">
                    <Image
                      src={loggedInuser?.data?.profilePhoto}
                      alt={user?.name}
                      width={300}
                      height={300}
                      className="size-12 rounded-full shadow cursor-pointer"
                    />
                    {loggedInuser?.data?.verified && (
                      <span className="absolute -right-2 top-6 size-5 shadow flex items-center justify-center rounded-full bg-gray-700">
                        <MdVerified className="text-blue-500" size={16} />
                      </span>
                    )}
                  </div>
                )}
              </DropdownTrigger>
              <DropdownMenu className="bg-gray-800 text-white">
                <DropdownItem>
                  <div className="space-y-2 mb-2 flex flex-col">
                    <Link
                      href="/profile"
                      className="bg-blue-600 w-full rounded-lg text-white text-md p-2"
                    >
                      Profile
                    </Link>
                    <Link
                      href={`/${user?.role === "ADMIN" ? "admin" : "user"}`}
                      className="bg-blue-600 w-full rounded-lg text-white text-md p-2"
                    >
                      Dashboard
                    </Link>
                  </div>
                  <Button
                    className="bg-red-500 py-2 w-full h-auto text-white"
                    onClick={handleLogout}
                  >
                    Log Out
                  </Button>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <NavbarItem>
              <Button className="bg-blue-600">
                <Link href="/login" className="text-white">
                  Login
                </Link>
              </Button>
            </NavbarItem>
          )}
        </NavbarContent>

        {/* Mobile Menu */}
        <NavbarMenu>
          {MenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full text-white"
                href={`/${item.url}`}
                size="lg"
              >
                {item?.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </div>
    </Navbar>
  );
}
