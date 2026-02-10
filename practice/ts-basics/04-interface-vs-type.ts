/**
 * 문제 4: interface vs type 차이점 이해하기
 *
 * 면접에서 자주 물어보는 주제입니다.
 * 각 상황에서 적절한 것을 사용하세요.
 */

// ========== 1. 기본 문법 차이 ==========

// interface - 객체 타입 정의
interface UserInterface {
  id: number;
  name: string;
}

// type - 다양한 타입 정의 가능
type UserType = {
  id: number;
  name: string;
};

// ========== 2. 확장(Extension) 차이 ==========

// interface - extends로 확장
interface AdminInterface extends UserInterface {
  role: string;
}

// type - intersection(&)으로 확장
type AdminType = UserType & {
  role: string;
};

// ========== 3. 선언 병합(Declaration Merging) ==========

// interface는 같은 이름으로 여러 번 선언하면 자동 병합됨
interface Window {
  myCustomProperty: string;
}
// 기존 Window 인터페이스에 myCustomProperty가 추가됨

// type은 같은 이름으로 재선언 불가 (에러)
// type Window = { myCustomProperty: string }; // Error!

// ========== 4. type만 가능한 것들 ==========

// 유니온 타입
type Status = "pending" | "success" | "error";

// 튜플 타입
type Coordinate = [number, number];

// 원시 타입 별칭
type ID = string | number;

// 매핑된 타입
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

// ========== 문제: 각 상황에 맞는 타입 정의하기 ==========

// 문제 1: API 응답 타입 정의
// - 성공/실패 상태를 가지는 유니온 타입 필요
// - type을 사용하세요

// 여기에 구현
type ApiResponse<T> = unknown; // 구현하세요

// 문제 2: 확장 가능한 컴포넌트 Props 정의
// - 다른 곳에서 확장할 수 있어야 함
// - interface를 사용하세요

// 여기에 구현
interface ButtonProps {
  // 구현하세요
}

// 문제 3: 함수 타입 정의
// - 콜백 함수 타입
// - type을 사용하세요

// 여기에 구현
type EventHandler<T> = unknown; // 구현하세요

// ========== 정리 ==========

/*
 * interface를 사용하는 경우:
 * - 객체의 shape를 정의할 때
 * - 클래스가 구현(implements)할 타입
 * - 라이브러리에서 확장 가능하게 만들 때
 *
 * type을 사용하는 경우:
 * - 유니온, 튜플 타입
 * - 원시 타입 별칭
 * - 복잡한 타입 연산 (mapped types, conditional types)
 * - 함수 타입
 *
 * 일반적인 권장:
 * - 객체 타입은 interface
 * - 그 외에는 type
 * - 팀 컨벤션을 따르는 것이 가장 중요!
 */
