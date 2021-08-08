// 인자로 전달되는 함수
const ul = (child: string): string => {
  return `<ul>${child}</ul>`;
};

const ol = (child: string): string => {
  return `<ol>${child}</ol>`;
};

const makeLI = (container: (child: string) => string, contents: string[]): string => {
  const liList = [];
  for (const content of contents) {
    liList.push(`<li>${content}</li>`);
  }

  return container(liList.join(''));
};

const htmlUL = makeLI(ul, ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']);
const htmlOL = makeLI(ol, ['Spring', 'Summer', 'Fall', 'Winter']);

// 반환 값으로 전달되는 함수
const salePrice = (discountRate, price) => {
  return price - price * (discountRate * 0.01);
};

console.log('여름 세일 - ' + salePrice(30, 567000));
console.log('겨울 세일 - ' + salePrice(10, 567000));

const discountPrice = (discountRate) => {
  return (price) => {
    return price - price * (discountRate * 0.01);
  };
};

console.log('여름 세일 - ' + discountPrice(30)(567000));
console.log('겨울 세일 - ' + discountPrice(10)(567000));

let summerPrice = discountPrice(30);
let winterPrice = discountPrice(10);

console.log('여름 세일 - ' + summerPrice(567000));
console.log('겨울 세일 - ' + winterPrice(567000));

// 표현력의 차이
console.log(salePrice(30, 567000));
console.log(salePrice(10, 567000));
console.log(discountPrice(30)(567000));
console.log(discountPrice(10)(567000));
console.log(summerPrice(567000));
console.log(winterPrice(567000));
