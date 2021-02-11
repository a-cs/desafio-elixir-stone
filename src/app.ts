import emails from '../Files/emails';
import items from '../Files/items';

interface Items {
  Name: string;
  Quantity: number;
  Price: number;
}

try {
  if (emails.length === 0) {
    throw new Error(`The email list is empty! Please fill the email list.\n`);
  }

  if (items.length === 0) {
    throw new Error(`The items list is empty! Please fill the items list.\n`);
  }

  const GetTotalValue = (items: [Items]): number => {
    let sum = 0;
    items.map((item: Items) => {
      if (item.Quantity < 0 || item.Price < 0) {
        throw new Error(
          `The item ${item.Name} has negative values and negative values are not allowed! Please check the item values.\n`,
        );
      }
      if (!item.Price) {
        throw new Error(
          `The Price propertie of the item ${item.Name} is missing.\n`,
        );
      }

      if (!item.Quantity) {
        throw new Error(
          `The Quantity propertie of the item ${item.Name} is missing.\n`,
        );
      }

      if (item.Price !== parseInt(item.Price)) {
        throw new Error(`The item ${item.Name} Price is not an integer.\n`);
      }

      if (item.Quantity !== parseInt(item.Quantity)) {
        throw new Error(`The item ${item.Name} Quantity is not an integer.\n`);
      }

      sum += item.Quantity * item.Price;
      // console.log(
      //   `Quantity = ${item.Quantity} * Price= ${
      //     item.Price
      //   } cents, Sum = ${
      //     item.Quantity * item.Price
      //   } cents, Accumulated Sum = ${sum} cents`,
      // );

      return sum;
    });
    return sum;
  };

  const totalValue = GetTotalValue(items);

  const shuffleArray = (array: string[]) => {
    const array2 = array.slice(0);
    for (let i = array2.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array2[i], array2[j]] = [array2[j], array2[i]];
    }
    return array2;
  };

  const GetPricePerEmail = (emails: [string], totalValue: number) => {
    const duplicatedEmails = emails.filter((value, index, self) => {
      return self.indexOf(value) !== index;
    });

    if (duplicatedEmails.length > 0) {
      throw new Error(
        `The following emails are duplicated:\n${duplicatedEmails}\nPlease delete the duplicate from the email list.\n`,
      );
    }

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
      return answer;
    });

    return answer;
  };

  console.log(GetPricePerEmail(emails, totalValue));
} catch (error) {
  console.log(error);
}
