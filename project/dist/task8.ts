


type literal = "pending"| "shipped"| "delivered"| "cancelled"
type numbers = 1| 2| 3
interface Order {
    id : numbers, 
    status : literal, 
    priority: numbers
 }
 function printOrderInfo(order: Order): void {
  console.log("ID заказа:", order.id);
  console.log("Статус заказа:", order.status);
  console.log("Приоритет заказа:", order.priority);
}

const exampleOrder: Order = {
  id: 1,
  status: "shipped",
  priority: 2,
};

printOrderInfo(exampleOrder);