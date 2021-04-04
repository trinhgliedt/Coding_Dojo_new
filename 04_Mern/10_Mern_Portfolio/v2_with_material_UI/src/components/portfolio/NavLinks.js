import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const NavLinks = [
  { title: `About me`, path: `/`, icon: <PersonOutlineIcon /> },
  { title: `Skills`, path: `/skills`, icon: <SettingsOutlinedIcon /> },
  { title: `My work`, path: `/work`, icon: <VisibilityOutlinedIcon /> },
  { title: `Resume`, path: `/resume`, icon: <DescriptionOutlinedIcon /> },
  { title: `Contact`, path: `/contact`, icon: <MailOutlineIcon /> },
];

export default NavLinks;
