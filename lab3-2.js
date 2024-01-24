/*1. Julia phát hiện ra rằng chủ của hai con chó ĐẦU TIÊN và HAI con chó CUỐI
CÙNG thực sự nuôi mèo chứ không phải chó! Vì vậy, hãy tạo một bản sao nông
của mảng của Julia và xóa tuổi mèo khỏi mảng đã sao chép đó */
/*2. Tạo một mảng có cả dữ liệu của Julia (đã sửa) và Kate */
/*3. Đối với mỗi con chó còn lại, hãy đăng nhập vào bảng điều khiển xem đó là chó
trưởng thành hay chó con */
/*4. Chạy hàm cho cả hai bộ dữ liệu thử nghiệm */
// 1.
const checkDogs = (dogsJulia, dogsKate) => {
    const dogsJuliaCorrected = dogsJulia.slice();
    dogsJuliaCorrected.splice(0, 2);
    dogsJuliaCorrected.splice(-2);
// 2. Dùng spread or concat
    const dogs = [...dogsJuliaCorrected, ...dogsKate];
    console.log(dogs);
// 3.
    dogs.forEach((dog, i) => {
      if (dog >= 3) {
        console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
      } else {
        console.log(`Dog number ${i + 1} is still a puppy 🐶`);
      }
    });
  };
// 4.
  // checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
  checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);