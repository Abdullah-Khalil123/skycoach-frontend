import React from 'react';
import NavBar from './NavBar';
import { getNavigation } from '@/actions/navigation';
import { getHotServices } from '@/actions/services';

const NavBarComp = async () => {
  const [navigation, services] = await Promise.all([
    getNavigation(),
    getHotServices(),
  ]);
  return (
    <div>
      <NavBar
        navigation={navigation?.data?.[0] || []}
        services={services.data.all_services || []}
      />
    </div>
  );
};

export default NavBarComp;
