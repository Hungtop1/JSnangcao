// Bước 1: Tạo mảng sự kiện khác nhau
const matchEvents = [
    [10, 'Ghi bàn'],
    [25, 'Thay người'],
    [42, 'Ghi bàn'],
    [55, 'Nhận thẻ đỏ'],
    [64, 'Thẻ vàng'], // Thẻ vàng không đúng, sẽ được xóa sau này
    [78, 'Ghi bàn'],
    [85, 'Thay người'],
  ];
  
  // Bước 2: Xóa sự kiện thẻ vàng phút 64
  const invalidEventIndex = matchEvents.findIndex(([minute, action]) => minute === 64 && action === 'Thẻ vàng');
  if (invalidEventIndex !== -1) {
    matchEvents.splice(invalidEventIndex, 1);
  }
  
  // Bước 3: In ra console thông tin theo định dạng
  const totalEvents = matchEvents.length;
  const averageEventsPerMinute = totalEvents / 90; // 90 phút mỗi trận đấu
  console.log(`${totalEvents} sự kiện xảy ra, trung bình mỗi ${Math.round(90 / averageEventsPerMinute)} phút.`);
// Bước 4: In ra màn hình với đánh dấu cho từng sự kiện trong hiệp 1 hay hiệp 2
console.log('[FIRST HALF]');
for (const [minute, action] of matchEvents) {
  if (minute <= 45) {
    console.log(`${minute}: ${getEventIcon(action)} ${action}`);
  }
}

console.log('[SECOND HALF]');
for (const [minute, action] of matchEvents) {
  if (minute > 45) {
    console.log(`${minute - 45}: ${getEventIcon(action)} ${action}`);
  }
}

// Hàm để lấy biểu tượng cho sự kiện
function getEventIcon(action) {
  switch (action) {
    case 'Ghi bàn':
      return '⚽';
    case 'Thay người':
      return '🔄';
    case 'Nhận thẻ đỏ':
      return '🟥';
    case 'Thẻ vàng':
      return '🟨';
    default:
      return '';
  }
}
  