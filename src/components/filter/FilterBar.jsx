import React from 'react'
import FilterCard from './FilterCard'
import { filterItems } from '@/constants'
import DesktopFilterBar from './desktopFilterBar/DesktopFilterBar'
import MobileFilterBar from './mobileFilterBar/MobileFilterBar'
import { getDeviceType } from '@/utils/device'

export default async function FilterBar() {
  const { isDesktop } = await getDeviceType();
  return isDesktop ? <DesktopFilterBar /> : null;

}
