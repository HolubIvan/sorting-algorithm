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




//Bubble Sorting - Сортировка Пузырьком

function bubbleSort(arr){
  for(let i = 0, l = arr.length-1; i < l; i++){
      let wasSwap = false;
    for(let j = 0, k = l-1; j < k; j++){

        if(arr[j] > arr[j+1]){
          let swap = arr[j];

          arr[j] = arr[j+1];
          arr[j+1] = swap
            wasSwap = true;
        }
    }
      if(!wasSwap){
        break;
      }
  }
  return arr;
}