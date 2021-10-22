import { registerIcons } from '@fluentui/react/lib/Styling';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSortDown, faSortUp, faPlus ,faPen, faEye, faTrash, faTimes, faBars, faSave } from '@fortawesome/free-solid-svg-icons';

registerIcons({
  icons: {
    Home: <FontAwesomeIcon icon={faHome} />,
    ArrowDown : <FontAwesomeIcon icon={faSortDown} />
    ,
    ArrowUp : <FontAwesomeIcon icon={faSortUp} />,
    Plus : <FontAwesomeIcon icon={faPlus} />,
    edit : <FontAwesomeIcon icon={faPen} />,
    show : <FontAwesomeIcon icon={faEye} />,
    delete : <FontAwesomeIcon icon={faTrash} />,
    cancel : <FontAwesomeIcon icon={faTimes} />,
    toggleNav : <FontAwesomeIcon icon={faBars} />,
    save : <FontAwesomeIcon icon={faSave} />
  }
});

import { Icon } from '@fluentui/react/lib/Icon';
export default Icon