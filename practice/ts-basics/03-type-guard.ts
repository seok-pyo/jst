/**
 * 문제 3: 타입 가드 구현하기
 *
 * 요구사항:
 * - 런타임에서 타입을 좁히는 함수 작성
 * - is 키워드로 타입 가드 정의
 */

// ========== 문제 3-1: isString 타입 가드 ==========
function isString(value: unknown): boolean {
  // 여기에 구현 (반환 타입도 수정)
  return typeof value === "string";
}

// 테스트
function processValue(value: string | number) {
  if (isString(value)) {
    console.log(value.toUpperCase()); // string 메서드 사용 가능해야 함
  } else {
    console.log(value.toFixed(2)); // number 메서드 사용 가능해야 함
  }
}

// ========== 문제 3-2: isNotNull 타입 가드 ==========
function isNotNull<T>(value: T | null | undefined): boolean {
  // 여기에 구현
  return value !== null && value !== undefined;
}

// 테스트
function greet(name: string | null) {
  if (isNotNull(name)) {
    console.log(`Hello, ${name.toUpperCase()}`); // null 체크 완료
  }
}

// ========== 문제 3-3: isArray 타입 가드 ==========
function isArray<T>(value: T | T[]): boolean {
  // 여기에 구현
  return Array.isArray(value);
}

// 테스트
function processItems<T>(input: T | T[]) {
  if (isArray(input)) {
    input.forEach((item) => console.log(item)); // 배열 메서드 사용 가능
  } else {
    console.log(input);
  }
}

// ========== 문제 3-4: 객체 타입 가드 ==========
interface Dog {
  type: "dog";
  bark: () => void;
}

interface Cat {
  type: "cat";
  meow: () => void;
}

type Animal = Dog | Cat;

function isDog(animal: Animal): boolean {
  // 여기에 구현
  return animal.type === "dog";
}

function isCat(animal: Animal): boolean {
  // 여기에 구현
  return animal.type === "cat";
}

// 테스트
function handleAnimal(animal: Animal) {
  if (isDog(animal)) {
    animal.bark(); // Dog 메서드 사용 가능해야 함
  } else {
    animal.meow(); // Cat 메서드 사용 가능해야 함
  }
}

// ========== 문제 3-5: hasProperty 타입 가드 ==========
// 객체에 특정 프로퍼티가 있는지 확인
function hasProperty<T extends object, K extends string>(
  obj: T,
  key: K
): boolean {
  // 여기에 구현
  return key in obj;
}

// 테스트
interface Response {
  data?: { id: number };
  error?: string;
}

function handleResponse(res: Response) {
  if (hasProperty(res, "error") && res.error) {
    console.log(`Error: ${res.error}`);
  } else if (hasProperty(res, "data") && res.data) {
    console.log(`ID: ${res.data.id}`);
  }
}

// ========== 문제 3-6: Discriminated Union 활용 ==========
type Result<T> =
  | { success: true; data: T }
  | { success: false; error: string };

function handleResult<T>(result: Result<T>) {
  // success 필드로 타입을 좁혀서 처리하세요
  // 여기에 구현
}

// 테스트
const successResult: Result<number> = { success: true, data: 42 };
const errorResult: Result<number> = { success: false, error: "Not found" };

handleResult(successResult); // data 접근 가능
handleResult(errorResult); // error 접근 가능
