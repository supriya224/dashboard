/* eslint-disable jsx-a11y/anchor-is-valid */
import type { FC } from "react";
import { DarkThemeToggle, Navbar } from "flowbite-react";

// main header is there
const ExampleNavbar: FC = function () {
  return (
    <>
      <Navbar fluid>
        <div className="w-full p-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">Admin dashboard</div>
            <div className="flex items-center gap-3">
              <DarkThemeToggle />
            </div>
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default ExampleNavbar;
