let items = [1, 2, 7, 5, 6, 8, 4];

for (let i = 0; i < items.length; i++) {
    for (let j = 0; j < items.length; j++) {
        if (items[j] % 2 === 0 && items[i] % 2 === 0) {
            if (items[i] < items[j]) {
                items[i] += items[j];
                items[j] = items[i] - items[j];
                items[i] -= items[j];
                break;
            }
        }
        if (items[j] % 2 !== 0 && items[i] % 2 !== 0) {
            if (items[i] > items[j]) {
                items[i] += items[j];
                items[j] = items[i] - items[j];
                items[i] -= items[j];
                break;
            }
        }
    }
}
console.log(items);