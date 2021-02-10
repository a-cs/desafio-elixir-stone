import emails from '../Files/emails';
import items from '../Files/items';

// console.log(emails.map(email => email));
interface Items {
  itemName: string;
  itemQuantity: number;
  itemPrice: number;
}

const GetTotalValue = (items: Items): number => {
  let sum = 0;
  items.map((item: Items) => {
    sum += item.itemQuantity * item.itemPrice;
    console.log(
      `Quantity = ${item.itemQuantity} * Price= ${item.itemPrice} Sum = ${
        item.itemQuantity * item.itemPrice
      } sumAcc = ${sum}`,
    );
    return sum;
  });
  return sum;
};

const totalValue = GetTotalValue(items);

const GetPricePerEmail = (emails, totalValue) => {
  const emailsQuantity: number = emails.length;
  const y = parseInt(totalValue / emailsQuantity);
  const x = emailsQuantity * (y + 1) - totalValue;

  return console.log(
    `
    EmailQty = ${emailsQuantity},
    TotalValue = ${totalValue},
    Number of people paying ${y} cents:${x} ,
    Number of people paying ${y + 1} cents: ${emailsQuantity - x}, Total = ${
      y * x + (y + 1) * (emailsQuantity - x)
    }`,
  );
};

GetPricePerEmail(emails, totalValue);
