export default function BubbleSort(items) {
    var json = JSON.parse(JSON.stringify(items)) 
    const numbers = json["items"]
    const length = numbers.length
    let noSwaps
  
    for (let i = length; i > 0; i--) {
      // flag for optimization
      noSwaps = true
      // Number of passes
      for (let j = 0; j < (i - 1); j++) {
        // Compare the adjacent positions
        if (numbers[j] > numbers[j + 1]) {
          // Swap the numbers
          [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]]
          noSwaps = false
        }
      }
      if (noSwaps) {
        break
      }
    }
    return (
        <div>
            {numbers}
        </div>
      );
  }