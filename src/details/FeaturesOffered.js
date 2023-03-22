import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import MrSolution from "../assest/images/MrLogo.ico";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import ModeOfTravelIcon from "@mui/icons-material/ModeOfTravel";
import BikeScooterIcon from "@mui/icons-material/BikeScooter";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import SchoolIcon from "@mui/icons-material/School";
import {
  faHandHoldingDollar,
  faSackDollar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ERP from "../assest/images/process-icon.svg";

export const featuresOffered = ["Softwares"];

export const softwares = [
  {
    icon: <img src={MrSolution} alt="logo of company" width="24" />,
    name: "MrSolution - account & inventory management system ",
  },
  {
    icon: <PointOfSaleIcon />,
    name: "POS - point of sales",
  },
  {
    icon: <RestaurantIcon />,
    name: "RESTRO - hospitality management system ",
  },
  {
    icon: <LocalHospitalIcon />,
    name: "HOSPITAL - hospital management system",
  },
  {
    icon: <RestaurantIcon />,
    name: "HOTEL - hotel & hospitality management system",
  },
  {
    icon: <ModeOfTravelIcon />,
    name: "TRAVEL - travel & tour management system",
  },
  {
    icon: <BikeScooterIcon />,
    name: "VEHICLE -  vehicle management system",
  },
  {
    icon: <LocalHospitalIcon />,
    name: "PHARMA - pharmacy management system",
  },
  {
    icon: <MovieCreationIcon />,
    name: "CINEMA - box office management system",
  },
  {
    icon: <SchoolIcon />,
    name: "SCHOOL-TIME - school management system",
  },
  {
    icon: <FontAwesomeIcon icon={faHandHoldingDollar} />,
    name: "ASSETS - assets management system",
  },
  {
    icon: <ManageAccountsIcon />,
    name: "HR-MGMT - human resources planning",
  },
  {
    icon: <FontAwesomeIcon icon={faSackDollar} />,
    name: "PAYROLL - staff management system",
  },
  {
    icon: <img src={ERP} alt="ERP logo" width="24" color="" />,
    name: "ERP - enterprise resource planning",
  },
];
