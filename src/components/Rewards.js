import { useState, useEffect } from 'react';
import { fetchData } from '../api/api';
import { calculatePoints } from '../utils/utils';

const Rewards = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData().then((transactions) => {
            const pointsData = transactions.map((transaction) => ({
                ...transaction,
                points: calculatePoints(transaction.amount),
            }));

            const totalPointsPerCustomer = {};
            pointsData.forEach((transaction) => {
                totalPointsPerCustomer[transaction.customerId] =
                    (totalPointsPerCustomer[transaction.customerId] || 0) +
                    transaction.points;
            });

            pointsData.forEach((transaction) => {
                transaction.totalPoints =
                    totalPointsPerCustomer[transaction.customerId];
            });

            setData(pointsData);
            setLoading(false);
        });
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            {data.map((transaction, index) => (
                <div key={`${transaction.customerId}-${transaction.month}`}>
                    Customer {transaction.customerId} in {transaction.month} has
                    earned {transaction.points} points.
                    {index % 3 === 2 && (
                        <div>
                            Total points for Customer {transaction.customerId}{' '}
                            over 3 months: {transaction.totalPoints}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Rewards;
