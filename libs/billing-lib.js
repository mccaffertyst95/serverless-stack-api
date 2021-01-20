
//Calculate storage rate
//if 10 or less $4 a note, if 100 or less $2 a note, Else $1 a note
export function calculateCost(storage) {
    const rate = storage <= 10
      ? 4
      : storage <= 100
        ? 2
        : 1;
    //Stripe expects an int value representing the number of cents so we multiple by 100
    return rate * storage * 100;
  }