import type { ExpenseCategory } from "../../../shared/store/expenses";

export const formatCategory = (category: ExpenseCategory) => {
  switch (category) {
    case "food":
      return "Еда";
    case "transport":
      return "Транспорт";
    case "other":
      return "Другое";
    case "apartment":
      return "Жилье";
    case "education":
      return "Образование";
    case "entertainment":
      return "Развлечения";
  }
}
