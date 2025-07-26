const images = document.querySelectorAll(".image"); /*Tìm tất cả các class image và đưa vào biến images*/
/**
 * document.querySelectorAll(..) chọn nhiều phần tử
 * --> Sẽ tạo ra 1 list gồm các thẻ <img> 
 */

let imgIndex = 0;
// Khai báo 1 biến lưu chỉ số ảnh đang hiển thị

// Hàm renderImage có thể hiểu là hiển thị đúng ảnh theo vị trí của biến currentIndex, còn lại thì ẩn
function showImage() {
  images.forEach(function(img, index) { 
    /**images.forEach(..) lặp những ảnh trong list images 
     * 
     * array.forEach((element, index, array) => {});
     * vidu images.forEach((hinh,thutu)
     * --> hinh.style.display = thutu === currentIndex
     * 
    */
    if (index === imgIndex) {
  img.style.display = "block";
} else {
  img.style.display = "none";
}

// cách 2:
// hinh.display.style = thutu === currentIndex ? "block" : "none";

    /**
     * index === currentIndex hiểu là khi mà chỉ số của ảnh khớp với ảnh đang được chọn (là currentIndex)
     * thì hiển thị (block), ngược lại thì ẩn (none)
     * --> Khi gọi hàm render ra sẽ chỉ có 1 ảnh đang ở vị trí currentIndex được hiện
     */
  });
}

// Hàm chuyển sang ảnh tiếp theo
function nextPage() {
  if (imgIndex < images.length - 1) {
    imgIndex++;
    showImage();
    /**
     * images.length - 1 hiểu là kiểm tra số lượng ảnh không vượt quá số ảnh hiện có 
     * currentIndex++ là tăng chỉ số ảnh lên 1
     * renderImage() gọi lại ảnh nhưng đang theo chỉ số ảnh mới
     */
  }
}

function prevPage() {
  if (imgIndex > 0) {
    imgIndex--;
    showImage();
    /**
     * currentIndex > 0 có nghĩa là nếu chưa ở ảnh đầu tiên thì có thể giảm xuống và gọi lại ảnh
     * currentIndex-- là giảm chỉ số ảnh lên 1
     * renderImage() gọi lại ảnh nhưng đang theo chỉ số ảnh mới
     */
  }
}

// Khởi tạo hiển thị ảnh đầu tiên
showImage();