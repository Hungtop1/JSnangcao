
function convertToCamelCase(inputText) {
    const lines = inputText.split('\n');
  
    for (const line of lines) {
      const words = line.split('_');
      let camelCaseWord = words[0];
  
      for (let i = 1; i < words.length; i++) {
        camelCaseWord += words[i][0].toUpperCase() + words[i].slice(1);
      }
  
      console.log(`${camelCaseWord} ✅`.repeat(words.length - 1));
    }
  }
  
  // Lấy đầu vào từ người dùng sử dụng prompt
  const inputText = prompt("Nhập danh sách biến theo kiểu underscore:");
  
  // Chạy hàm convertToCamelCase với đầu vào từ người dùng
  convertToCamelCase(inputText);
  