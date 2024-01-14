import orderByProps from '../app';

test ('Сортировка массива с выборкой свойств', () => {
    const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
    const props = ["name", "level"];
    const resultArray = orderByProps(obj, props);
    const correct = [
        {key: "name", value: "мечник"}, 
        {key: "level", value: 2}, 
        {key: "attack", value: 80}, 
        {key: "defence", value: 40}, 
        {key: "health", value: 10} 
    ];
  
    expect(resultArray).toEqual(correct);
  });