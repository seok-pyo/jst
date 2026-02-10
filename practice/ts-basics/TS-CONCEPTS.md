# TypeScript 핵심 개념 정리

## 1. 기본 타입

```typescript
// 원시 타입
let name: string = "철수";
let age: number = 25;
let isActive: boolean = true;

// 배열
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["a", "b"];

// 튜플 (고정 길이, 각 위치에 타입 지정)
let tuple: [string, number] = ["철수", 25];

// 객체
let user: { name: string; age: number } = { name: "철수", age: 25 };
```

---

## 2. interface vs type

```typescript
// interface - 객체 구조 정의, 확장 가능
interface User {
  name: string;
  age: number;
}

interface Admin extends User {
  role: string;
}

// 같은 이름으로 선언하면 자동 병합 (Declaration Merging)
interface User {
  email: string; // User에 email이 추가됨
}

// type - 더 유연함, 유니온/인터섹션 가능
type ID = string | number;
type UserWithRole = User & { role: string };
```

**면접 답변:**

> "interface는 객체 구조 정의에 사용하고 확장(extends)과 선언 병합이 가능합니다. type은 유니온, 인터섹션 등 더 복잡한 타입 조합이 가능합니다. 객체는 interface, 그 외는 type을 주로 씁니다."

---

## 3. 제네릭 (Generic)

```typescript
// 타입을 파라미터처럼 받음
function identity<T>(value: T): T {
  return value;
}

identity<string>("hello"); // T = string
identity<number>(123); // T = number
identity(true); // T = boolean (추론)

// 여러 타입 파라미터
function pair<T, U>(a: T, b: U): [T, U] {
  return [a, b];
}

// 제약 조건 (extends)
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}
```

**면접 답변:**

> "제네릭은 타입을 파라미터화해서 재사용 가능한 컴포넌트를 만들 수 있게 합니다. 함수나 클래스를 다양한 타입에서 동작하게 하면서도 타입 안전성을 유지합니다."

---

## 4. any vs unknown vs never

```typescript
// any - 타입 체크 완전 무시 (사용 지양)
let a: any = "hello";
a.foo(); // 에러 없음 (위험!)

// unknown - any보다 안전, 사용 전 타입 체크 필요
let b: unknown = "hello";
// b.foo(); // 에러!
if (typeof b === "string") {
  b.toUpperCase(); // OK
}

// never - 절대 발생하지 않는 값
function throwError(msg: string): never {
  throw new Error(msg);
}

function infiniteLoop(): never {
  while (true) {}
}
```

**면접 답변:**

> "any는 타입 체크를 완전히 무시해서 위험합니다. unknown은 any처럼 모든 값을 받지만 사용 전에 타입 체크가 필요해서 더 안전합니다. never는 함수가 정상적으로 반환되지 않을 때 사용합니다."

---

## 5. 유니온 & 인터섹션

```typescript
// 유니온 (|) - 둘 중 하나
type Status = "loading" | "success" | "error";
type ID = string | number;

function printId(id: ID) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

// 인터섹션 (&) - 둘 다 합침
type Person = { name: string };
type Employee = { employeeId: number };
type Staff = Person & Employee;

const staff: Staff = { name: "철수", employeeId: 123 };
```

---

## 6. 유틸리티 타입 (자주 쓰는 것)

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// Partial<T> - 모든 속성을 선택적으로
type PartialUser = Partial<User>;
// { id?: number; name?: string; email?: string; age?: number; }

// Required<T> - 모든 속성을 필수로
type RequiredUser = Required<PartialUser>;

// Pick<T, K> - 특정 속성만 선택
type UserBasic = Pick<User, "id" | "name">;
// { id: number; name: string; }

// Omit<T, K> - 특정 속성만 제외
type UserWithoutEmail = Omit<User, "email">;
// { id: number; name: string; age: number; }

// Record<K, V> - 키-값 타입 지정
type UserRoles = Record<string, boolean>;
// { [key: string]: boolean }

// Readonly<T> - 모든 속성을 읽기 전용으로
type ReadonlyUser = Readonly<User>;
```

---

## 7. 타입 가드 (Type Guard)

```typescript
// typeof
function process(value: string | number) {
  if (typeof value === "string") {
    return value.toUpperCase(); // string으로 좁혀짐
  }
  return value * 2; // number로 좁혀짐
}

// in 연산자
interface Dog {
  bark(): void;
}
interface Cat {
  meow(): void;
}

function speak(animal: Dog | Cat) {
  if ("bark" in animal) {
    animal.bark(); // Dog
  } else {
    animal.meow(); // Cat
  }
}

// 커스텀 타입 가드
function isString(value: unknown): value is string {
  return typeof value === "string";
}
```

---

## 8. as const & readonly

```typescript
// as const - 리터럴 타입으로 고정
const colors = ["red", "green", "blue"] as const;
// readonly ["red", "green", "blue"]
// colors[0]의 타입은 "red" (string이 아님)

const config = {
  endpoint: "/api",
  timeout: 3000,
} as const;
// config.endpoint의 타입은 "/api"

// readonly - 수정 불가
function printArray(arr: readonly number[]) {
  // arr.push(1); // 에러!
  console.log(arr);
}
```

---

## 9. 함수 오버로딩

```typescript
// 여러 시그니처 정의
function greet(name: string): string;
function greet(names: string[]): string[];
function greet(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.map((name) => `Hello, ${name}`);
  }
  return `Hello, ${input}`;
}

greet("철수"); // string 반환
greet(["철수", "영희"]); // string[] 반환
```

---

## 10. 면접 빈출 질문 & 답변

### Q: TypeScript를 왜 쓰나요?

> "컴파일 타임에 타입 에러를 잡아서 런타임 버그를 줄이고, IDE 자동완성과 리팩토링이 쉬워집니다. 코드 문서화 효과도 있어서 협업에 유리합니다."

### Q: any를 쓰면 안 되는 이유?

> "타입 체크를 완전히 무시해서 TypeScript를 쓰는 의미가 없어집니다. 불가피할 때는 unknown을 쓰고 타입 가드로 좁히는 게 좋습니다."

### Q: 제네릭은 언제 쓰나요?

> "여러 타입에서 동작해야 하는 함수나 컴포넌트를 만들 때 씁니다. 예를 들어 API 응답을 처리하는 함수에서 응답 데이터 타입을 제네릭으로 받습니다."

¡¡¡¡### Q: interface와 type 중 뭘 쓰나요?

> "객체 구조 정의에는 interface, 유니온이나 복잡한 타입 조합에는 type을 씁니다. 팀 컨벤션에 따라 일관되게 사용하는 게 중요합니다."
