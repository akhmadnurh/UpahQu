import { registerIcons } from '@fluentui/react/lib/Styling';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChevronDown, faChevronUp, faPlus ,faPen, faEye, faTrash, faTimes, faBars, faSave, faBell , faChevronRight, faCheckCircle, faTachometerAlt, faUsers, faMoneyBill, faChalkboardTeacher, faSignOutAlt, faChartBar, faSyncAlt, faChevronLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';

registerIcons({
  icons: {
    Home: <FontAwesomeIcon icon={faHome} />,
    ArrowDown : <FontAwesomeIcon icon={faChevronDown} />
    ,
    ArrowUp : <FontAwesomeIcon icon={faChevronUp} />,
    Plus : <FontAwesomeIcon icon={faPlus} />,
    edit : <FontAwesomeIcon icon={faPen} />,
    show : <FontAwesomeIcon icon={faEye} />,
    delete : <FontAwesomeIcon icon={faTrash} />,
    cancel : <FontAwesomeIcon icon={faTimes} />,
    toggleNav : <FontAwesomeIcon icon={faBars} />,
    save : <FontAwesomeIcon icon={faSave} />,
    notifikasi : <FontAwesomeIcon icon={faBell} />,
    arrowRight : <FontAwesomeIcon icon={faAngleRight} />,
    arrowLeft : <FontAwesomeIcon icon={faChevronLeft} />,
    success : <FontAwesomeIcon icon={faCheckCircle} />,
    dashboard : <FontAwesomeIcon icon={faTachometerAlt} />,
    karyawan : <FontAwesomeIcon icon={faUsers} />,
    gaji : <FontAwesomeIcon icon={faMoneyBill} />,
    presensi : <FontAwesomeIcon icon={faChalkboardTeacher} />,
    logout : <FontAwesomeIcon icon={faSignOutAlt} />,
    grafik : <FontAwesomeIcon icon={faChartBar} />,
    refresh : <FontAwesomeIcon icon={faSyncAlt} />
  }
});

import { Icon } from '@fluentui/react/lib/Icon';
export default Icon