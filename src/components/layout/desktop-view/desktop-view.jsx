import styles from './desktop-view.module.scss'
import PhotographySide from '../../sections/photography-side/photography-side'
import DevelopmentSide from '../../sections/development-side/development-side'

const DesktopView = () => (
  <div className={styles.desktop_view}>
    <PhotographySide />
    <DevelopmentSide />
    <div className={styles.reveal_hint}>
      Hover to explore
    </div>
  </div>
);

export default DesktopView