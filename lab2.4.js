(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    document.querySelector('body').addEventListener('click', function () {
      header.style.color = 'blue';
    });
  })();
/**
 * Giải thích:

IIFE (Immediately Invoked Function Expression): Đây là một hàm tức thì, ngay lập tức khi nó được định nghĩa, hàm này sẽ được gọi. Trong trường hợp này, nó bao gồm một biểu thức hàm không tên được đặt trong cặp dấu ngoặc đơn ().

Lấy thẻ h1: Hàm IIFE này sử dụng document.querySelector('h1') để chọn thẻ h1 đầu tiên trên trang và lưu nó vào biến header.

Thiết lập màu đỏ: Ban đầu, màu của thẻ h1 được thiết lập là đỏ bằng cách sử dụng header.style.color = 'red';.

Thêm sự kiện click: Một sự kiện click được thêm vào thẻ body sử dụng document.querySelector('body').addEventListener. Khi người dùng click vào bất kỳ nơi nào trên trang, callback function sẽ được gọi.

Thay đổi màu xanh dương: Trong callback function của sự kiện click, màu của thẻ h1 được thiết lập là xanh dương bằng cách sử dụng header.style.color = 'blue';.

Mỗi khi bạn click vào bất kỳ nơi nào trên trang, màu của thẻ h1 sẽ chuyển từ đỏ sang xanh dương.

Giải thích về callback và biến sử dụng:

Callback: Callback function là một hàm được truyền vào một hàm khác như một đối số và được gọi sau khi một sự kiện hoặc một tác vụ nào đó hoàn thành. Trong trường hợp này, callback function được gọi mỗi khi sự kiện click xảy ra.

Biến sử dụng: Biến header được sử dụng để lưu thẻ h1 và sau đó được sử dụng trong callback function để thay đổi màu của thẻ. Biến này không thay đổi giá trị và vẫn giữ tham chiếu đến thẻ h1 ngay cả khi callback function được gọi nhiều lần. */  