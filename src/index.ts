console.log('Hello, Node.js 24 + TypeScript!');

// 这是一个简单的类型示例，确保 TS 正常工作
interface User {
  id: number;
  name: string;
}

const getUser = (id: number): User => {
  return {
    id,
    name: 'Mio',
  };
};

console.log(getUser(1));
