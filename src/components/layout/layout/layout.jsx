import { useResponsive } from '../../../hooks/useResponsive'
import DesktopView from '../desktop-view/desktop-view'
import MobileView from '../mobile-view/mobile-view'

const Layout = () => {
  const { isMobile } = useResponsive();

  return (
    <div>
      {isMobile ? <MobileView /> : <DesktopView />}
    </div>
  );
};

export default Layout