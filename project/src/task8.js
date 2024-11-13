function printOrderInfo(order) {
    console.log("ID заказа:", order.id);
    console.log("Статус заказа:", order.status);
    console.log("Приоритет заказа:", order.priority);
}
const exampleOrder = {
    id: 1,
    status: "shipped",
    priority: 2,
};
printOrderInfo(exampleOrder);
export {};
