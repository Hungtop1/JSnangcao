const dogs = [
{ weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
{ weight: 8, curFood: 200, owners: ['Matilda'] },
{ weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
{ weight: 32, curFood: 340, owners: ['Michael'] }
];
/*1 .Lặp mảng gồm các object là thông tin của những chú chó, và với 
mỗi chú chó, thêm 1 thuộc tính mới vào object là khẩu phẩn ăn hợp lý 
recommendedFood = weight ** 0.75 * 28.*/
dogs.map(dog => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 *28)));
console.log(dogs);
//2. Tìm ra chú chó của Sarah và in ra console xem chú chó đó ăn quá nhiều hay quá ít.
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(`Chó của Sarah đang ăn ${dogSarah.curFood > dogSarah.recommendedFood ? 'quá nhiều' : 'quá ít'}`);
/*3. Tạo ra mảng chứa tất cả chủ của những chú chó ăn quá nhiều ('ownersEatTooMuch') 
và 1 mảng chứa tất cả chủ của những chú chó ăn quá ít ('ownersEatTooLittle'). */
const ownersEatTooMuch = dogs
    .filter(dog => dog.curFood > dog.recommendedFood)
    .flatMap(dog => dog.owners);
const ownersEatTooLittle = dogs
    .filter(dog => dog.curFood < dog.recommendedFood)
    .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);
/*4. In ra 1 chuỗi tương ứng với mỗi mảng đã tạo ở Yêu cầu 3, Ví dụ: "Matilda and
Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
too little!" */
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);
/*5. In ra xem có chú chó nào có khẩu phần ăn chính xác với khẩu phần ăn khuyến
nghị (output yêu cầu là 'true' hoặc 'false') */
console.log(dogs.some(dog => dog.curFood == dog.recommendedFood));
/*6. In ra xem có chú chó nào có khẩu phần ăn ở mức hợp lý (không >10% hoặc
<10% mức đề nghị)(output yêu cầu là 'true' hoặc 'false') */
const checkEatingOkay = dog => dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1;
console.log(dogs.some(checkEatingOkay));
/*7. In ra tất cả các chú chó có khẩu phần ăn hợp lý (sử dụng lại điều kiện đã tìm
được ở y.c 6 để in ra mảng gồm các phần tử thỏa mãn) */
console.log(dogs.filter(checkEatingOkay));
/*8. Tạo ra 1 mảng chưa các chú chó mới và sắp xếp theo khẩu phần ăn đề nghị
theo thứ tự tăng dần */
const dogsSorted = dogs.slice().sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsSorted);