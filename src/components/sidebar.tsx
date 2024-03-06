/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import type { SidebarProps } from "flowbite-react";
import { Sidebar } from "flowbite-react";
import type { FC } from "react";
import { useEffect, useState } from "react";
import { HiChartPie, HiShoppingBag, HiUsers } from "react-icons/hi";

interface CustomSidebarProps extends SidebarProps {
  open: boolean;
}

const ExampleSidebar: FC<CustomSidebarProps> = function () {
  const [currentPage, setCurrentPage] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [open, setOpen] = useState(true);

  useEffect(() => {
    const newPage = window.location.pathname;
    setCurrentPage(newPage);
  }, []);

  const toggleSidebar = () => {
    setOpen(!open);
    // Implement your toggle logic here
  };

  return (
    <div className="relative">
      {open && (
        <Sidebar aria-label="Sidebar with multi-level dropdown example">
          <div className="sm:none flex h-full flex-col justify-between py-2">
            <div>
              <Sidebar.Items>
                <span
                  className="flex cursor-pointer justify-end md:hidden lg:hidden xl:hidden"
                  onClick={toggleSidebar}
                >
                  X
                </span>
                <Sidebar.ItemGroup>
                  <Sidebar.Item
                    href="/"
                    icon={HiChartPie}
                    className={
                      "/" === currentPage ? "bg-gray-100 dark:bg-gray-700" : ""
                    }
                  >
                    Dashboard
                  </Sidebar.Item>
                  <Sidebar.Item
                    href="/e-commerce/products"
                    icon={HiShoppingBag}
                    className={
                      "/e-commerce/products" === currentPage
                        ? "bg-gray-100 dark:bg-gray-700"
                        : ""
                    }
                  >
                    Products
                  </Sidebar.Item>
                  <Sidebar.Item
                    href="/users/list"
                    icon={HiUsers}
                    className={
                      "/users/list" === currentPage
                        ? "bg-gray-100 dark:bg-gray-700"
                        : ""
                    }
                  >
                    Users list
                  </Sidebar.Item>
                </Sidebar.ItemGroup>
              </Sidebar.Items>
            </div>
          </div>
        </Sidebar>
      )}
      <button
        className="absolute top-0 left-0 ml-2 mt-2 rounded-md bg-gray-200 p-2 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
        onClick={toggleSidebar}
      >
        {open ? "Close" : "Open"}
      </button>
    </div>
  );
};

export default ExampleSidebar;
