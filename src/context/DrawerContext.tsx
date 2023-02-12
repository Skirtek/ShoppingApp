import React, { createContext, useState } from "react";
import { DrawerContextType } from "../models/DrawerContextType";
import { CartDrawer } from "../components/drawer/CartDrawer";
import { ProfileDrawer } from "../components/drawer/ProfileDrawer";

const defaultSettings: DrawerContextType = {
  isCartDrawerOpen: false,
  toggleCartDrawer: () => {},
  isProfileDrawerOpen: false,
  toggleProfileDrawer: () => {},
};

export const DrawerContext = createContext<DrawerContextType>(defaultSettings);

export const DrawerContextProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState<boolean>(false);
  const [isProfileDrawerOpen, setIsProfileDrawerOpen] =
    useState<boolean>(false);

  const toggleCartDrawer = () => {
    setIsCartDrawerOpen(!isCartDrawerOpen);
  };

  const toggleProfileDrawer = () => {
    setIsProfileDrawerOpen(!isProfileDrawerOpen);
  };

  return (
    <DrawerContext.Provider
      value={{
        isCartDrawerOpen,
        toggleCartDrawer,
        isProfileDrawerOpen,
        toggleProfileDrawer,
      }}
    >
      {children}
      <CartDrawer
        isCartDrawerOpen={isCartDrawerOpen}
        toggleCartDrawer={toggleCartDrawer}
      />
      <ProfileDrawer
        isProfileDrawerOpen={isProfileDrawerOpen}
        toggleProfileDrawer={toggleProfileDrawer}
      />
    </DrawerContext.Provider>
  );
};

export default DrawerContext;
