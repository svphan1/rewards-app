const transactions = [
    { customerId: 1, month: 'January', amount: 55 },
    { customerId: 1, month: 'February', amount: 165 },
    { customerId: 1, month: 'March', amount: 85 },
    { customerId: 2, month: 'January', amount: 120 },
    { customerId: 2, month: 'February', amount: 70 },
    { customerId: 2, month: 'March', amount: 230 },
    { customerId: 3, month: 'January', amount: 130 },
    { customerId: 3, month: 'February', amount: 180 },
    { customerId: 3, month: 'March', amount: 190 },
    { customerId: 4, month: 'January', amount: 60 },
    { customerId: 4, month: 'February', amount: 250 },
    { customerId: 4, month: 'March', amount: 110 },
    { customerId: 5, month: 'January', amount: 220 },
    { customerId: 5, month: 'February', amount: 90 },
    { customerId: 5, month: 'March', amount: 75 },
];

export const fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(transactions);
        }, 1000);
    });
};
