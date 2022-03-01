let myMap = new Map();
myMap.set('Иванов', 123);
myMap.set("Петров", 456);
myMap.set("Сидоров", 789);
myMap.set("Агасян", 987);
for (let name of myMap.values()){
  console.log('Значение - ', name);
}
for (let name of myMap.keys()){
  console.log('Ключ - ', name);
}