/**
 * 문제 2: 유틸리티 타입 직접 구현하기
 *
 * 요구사항:
 * - TypeScript 내장 유틸리티 타입을 직접 구현
 * - Mapped Types, Conditional Types 활용
 */

// 기본 타입
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  isAdmin: boolean;
}

// ========== 문제 2-1: MyPartial 구현 ==========
// 모든 프로퍼티를 optional로 만듦
type MyPartial<T> = {
  // 여기에 구현
};

// 테스트
type PartialUser = MyPartial<User>;
// { id?: number; name?: string; email?: string; age?: number; isAdmin?: boolean; }

// ========== 문제 2-2: MyRequired 구현 ==========
// 모든 프로퍼티를 required로 만듦
type MyRequired<T> = {
  // 여기에 구현
};

// ========== 문제 2-3: MyPick 구현 ==========
// 특정 프로퍼티만 선택
type MyPick<T, K extends keyof T> = {
  // 여기에 구현
};

// 테스트
type UserNameEmail = MyPick<User, "name" | "email">;
// { name: string; email: string; }

// ========== 문제 2-4: MyOmit 구현 ==========
// 특정 프로퍼티만 제외
type MyOmit<T, K extends keyof T> = {
  // 여기에 구현 (힌트: Pick과 Exclude 조합)
};

// 테스트
type UserWithoutId = MyOmit<User, "id">;
// { name: string; email: string; age: number; isAdmin: boolean; }

// ========== 문제 2-5: MyReadonly 구현 ==========
// 모든 프로퍼티를 readonly로 만듦
type MyReadonly<T> = {
  // 여기에 구현
};

// ========== 문제 2-6: MyRecord 구현 ==========
// 키와 값 타입으로 객체 타입 생성
type MyRecord<K extends keyof any, V> = {
  // 여기에 구현
};

// 테스트
type StringNumberMap = MyRecord<string, number>;
const scores: StringNumberMap = { math: 90, english: 85 };

// ========== 문제 2-7: MyReturnType 구현 ==========
// 함수의 반환 타입 추출
type MyReturnType<T extends (...args: any) => any> =
  // 여기에 구현 (힌트: infer 사용)
  ;

// 테스트
function getUser() {
  return { id: 1, name: "철수" };
}
type UserReturn = MyReturnType<typeof getUser>;
// { id: number; name: string; }

// ========== 문제 2-8: MyParameters 구현 ==========
// 함수의 매개변수 타입을 튜플로 추출
type MyParameters<T extends (...args: any) => any> =
  // 여기에 구현
  ;

// 테스트
function add(a: number, b: string) {
  return a + b;
}
type AddParams = MyParameters<typeof add>;
// [number, string]
