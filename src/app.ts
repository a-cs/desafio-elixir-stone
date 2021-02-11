import emails from '../Files/emails';
import items from '../Files/items';

interface Items {
  itemName: string;
  itemQuantity: number;
  itemPrice: number;
}

let isEmptyEmails = false;
let isEmptyItems = false;

if (emails.length > 0) {
  isEmptyEmails = false;
} else {
  isEmptyEmails = true;
  console.log('Warning: Empty Email list!');
}

if (items.length > 0) {
  isEmptyItems = false;
} else {
  isEmptyItems = true;
  console.log('Warning: Empty Item list!');
}

if (!isEmptyEmails && !isEmptyItems) {
  const GetTotalValue = (items: Items): number => {
    let sum = 0;
    items.map((item: Items) => {
      sum += item.itemQuantity * item.itemPrice;
      console.log(
        `Quantity = ${item.itemQuantity} * Price= ${
          item.itemPrice
        } cents, Sum = ${
          item.itemQuantity * item.itemPrice
        } cents, Accumulated Sum = ${sum} cents`,
      );
      return sum;
    });
    return sum;
  };

  const totalValue = GetTotalValue(items);

  function shuffleArray(array) {
    const array2 = array.slice(0);
    for (let i = array2.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array2[i], array2[j]] = [array2[j], array2[i]];
    }
    return array2;
  }

  const GetPricePerEmail = (emails, totalValue) => {
    const emailsQuantity: number = emails.length;
    const y = parseInt(totalValue / emailsQuantity);
    const x = emailsQuantity * (y + 1) - totalValue;

    console.log(
      `\nEmailQuantity = ${emailsQuantity}, \nTotalValue = ${totalValue} cents, \nNumber of people paying ${y} cents: ${x}, \nNumber of people paying ${
        y + 1
      } cents: ${emailsQuantity - x}, \nTotal = ${
        y * x + (y + 1) * (emailsQuantity - x)
      } cents.\n`,
    );

    const shuffledEmails = shuffleArray(emails);

    const answer = new Map();

    shuffledEmails.map((email, index) => {
      const price = index < x ? y : y + 1;
      answer.set(email, price);
      // console.log(email, index, price);
    });

    return answer;
  };

  console.log(GetPricePerEmail(emails, totalValue));
}
