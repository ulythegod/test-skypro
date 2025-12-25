import { formatCategory } from "../../../pages/my-expenses/expenses-table/utils";
import { RiShoppingBasket2Fill } from "react-icons/ri";
import { FaCarRear } from "react-icons/fa6";
import { IoIosHome } from "react-icons/io";
import { MdOutlineVideogameAsset } from "react-icons/md";
import { RiGraduationCapFill } from "react-icons/ri";
import { MdStickyNote2 } from "react-icons/md";

export const categoryItems = [
  {
    code: 'food',
    name: formatCategory('food'),
    icon: <RiShoppingBasket2Fill width={14} />
  },
  {
    code: 'transport',
    name: formatCategory('transport'),
    icon: <FaCarRear width={14} />
  },
  {
    code: 'apartment',
    name: formatCategory('apartment'),
    icon: <IoIosHome width={14} />
  },
  {
    code: 'entertainment',
    name: formatCategory('entertainment'),
    icon: <MdOutlineVideogameAsset width={14} />
  },
  {
    code: 'education',
    name: formatCategory('education'),
    icon: <RiGraduationCapFill width={14} />
  },
  {
    code: 'other',
    name: formatCategory('other'),
    icon: <MdStickyNote2 width={14} />
  },
];

export const ERROR_MESSAGE = "Обязательное поле";

export const DATE_FORMAT = "DD.MM.YYYY";
