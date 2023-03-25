// icons import
import CalculateIcon from '@mui/icons-material/Calculate';
import InventoryIcon from '@mui/icons-material/Inventory';
import DescriptionIcon from '@mui/icons-material/Description';
import ReportOffIcon from '@mui/icons-material/ReportOff';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';

// icon size
const iconSize = 80;

const OurServicesDetails = [
  {
    icon: <CalculateIcon sx={{ fontSize: `${iconSize}px` }} />,
    title: "Financial Accounting",
    paratitle:
      "Boost your business's financial efficiency with Busy Accounting Software's powerful tools, providing quick access to accounting transactions, vouchers, and financial statements",
  },
  {
    icon: <InventoryIcon sx={{ fontSize: `${iconSize}px` }} />,
    title: "Web Inventory management",
    paratitle:
      "Simplify your inventory management with our comprehensive software solution, providing detailed information on Batch No., Serial Nos., and Parameters like Colour, Size, Style, and more.",
  },
  {
    icon: <DescriptionIcon sx={{ fontSize: `${iconSize}px` }} />,
    title: "Configurable Invoicing",
    paratitle:
      "Efficiently manage your GST compliance with our powerful GST Accounting Software, providing detailed insights into your financial records and allowing you to generate professional invoices as per business requirements.",
  },
  {
    icon: <ReportOffIcon sx={{ fontSize: `${iconSize}px` }} />,
    title: "Online and Offline Reporting",
    paratitle:
      "Experience flexibility in reporting with our management software that offers offline and online reporting options, allowing you to generate reports on-the-go or when you're back online.",
  },
  {
    icon: <DeveloperBoardIcon sx={{ fontSize: `${iconSize}px` }} />,
    title: "Networking and Hardware",
    paratitle:
      "Whether you're looking for hardware upgrades or network optimization, our expert team of technicians provides end-to-end solutions to meet your hardware and networking needs.",
  },
  {
    icon: <ManageHistoryIcon sx={{ fontSize: `${iconSize}px` }} />,
    title: "Operations Management",
    paratitle:
      "Our operation management solutions provide end-to-end support for managing your business operations efficiently and effectively, ensuring maximum uptime and minimal downtime.",
  },
];

export default OurServicesDetails;
