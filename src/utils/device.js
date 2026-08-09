import { headers } from 'next/headers';

export async function getDeviceType() {
  const headersList = await headers();
  const userAgent = headersList.get('user-agent') || '';
  
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Tablet|Kindle|Playbook|Silk|Mobile/i.test(userAgent);
  
  return {
    isMobile,
    isDesktop: !isMobile
  };
}
