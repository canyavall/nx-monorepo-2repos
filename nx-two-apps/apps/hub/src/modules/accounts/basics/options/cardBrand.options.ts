import {CardBrand} from "apps/hub/src/modules/accounts/basics/enums/cardBrand.enums";
import {SelectOption} from "@sygnum-types/src/lib/form.types";

const CardBrandOptions: SelectOption[] = [
  { id: CardBrand.Visa, label: 'VISA' },
  { id: CardBrand.AmericanExpress, label: 'American Express' },
  { id: CardBrand.Mastercard, label: 'Mastercard' },
];

export default CardBrandOptions;
