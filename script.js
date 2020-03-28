//Inserting Sort - Сортировка Вставками

let numbers = [3, 4, 1, 6, 9, 2, 8, 5, 7];

function insertionSort(arr){
    for(let i = 1, l = arr.length; i < l; i++){
        let current = arr[i];
        let j = i;

        while(j > 0 && arr[j-1] > current){
            arr[j] = arr[j-1];
            j--;
        }
        arr[j] = current
    }

    return arr;
}