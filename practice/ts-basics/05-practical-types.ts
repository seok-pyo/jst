/**
 * 문제 5: 실무에서 자주 쓰는 타입 패턴
 *
 * 면접에서 자주 나오는 실용적인 타입 문제들
 */

// ========== 문제 5-1: API 응답 타입 ==========
// 공통 응답 구조 정의

// 여기에 구현
interface ApiResponse<T> {
  // success, data, error, message 등
}

// 사용 예시
type UserResponse = ApiResponse<{ id: number; name: string }>;
type UsersResponse = ApiResponse<Array<{ id: number; name: string }>>;

// ========== 문제 5-2: Form 상태 타입 ==========
// 폼의 각 필드가 value와 error를 가지는 타입

type FormField<T> = {
  // 여기에 구현
};

type LoginForm = {
  email: FormField<string>;
  password: FormField<string>;
  rememberMe: FormField<boolean>;
};

// ========== 문제 5-3: 액션 타입 (Redux 스타일) ==========
// 여러 액션을 유니온으로 정의

// 여기에 구현
type Action =
  | { type: "SET_USER"; payload: { id: number; name: string } }
  | { type: "LOGOUT" }
  // 더 추가...
  ;

// reducer에서 사용
function reducer(state: unknown, action: Action) {
  switch (action.type) {
    case "SET_USER":
      // action.payload.id 접근 가능해야 함
      break;
    case "LOGOUT":
      // payload 없음
      break;
  }
}

// ========== 문제 5-4: 이벤트 핸들러 타입 ==========

// React 스타일 이벤트 핸들러
type ChangeHandler = (e: { target: { value: string } }) => void;
type ClickHandler = (e: { preventDefault: () => void }) => void;

// 더 정확한 타입으로 재정의하세요
// 힌트: React.ChangeEvent<HTMLInputElement> 같은 형태

// ========== 문제 5-5: 제네릭 컴포넌트 Props ==========

// 리스트 컴포넌트의 Props
interface ListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  keyExtractor: (item: T) => string | number;
  onItemClick?: (item: T) => void;
}

// 사용 예시
type User = { id: number; name: string };
const userListProps: ListProps<User> = {
  items: [{ id: 1, name: "철수" }],
  renderItem: (user) => user.name, // user가 User 타입으로 추론
  keyExtractor: (user) => user.id,
  onItemClick: (user) => console.log(user.id),
};

// ========== 문제 5-6: DeepPartial 구현 ==========
// 중첩 객체도 모두 optional로 만드는 타입

type DeepPartial<T> = {
  // 여기에 구현 (재귀적으로)
};

// 테스트
interface NestedConfig {
  server: {
    host: string;
    port: number;
    ssl: {
      enabled: boolean;
      cert: string;
    };
  };
  logging: {
    level: string;
  };
}

type PartialConfig = DeepPartial<NestedConfig>;
// 모든 중첩 프로퍼티가 optional이어야 함

const config: PartialConfig = {
  server: {
    host: "localhost",
    // port, ssl 생략 가능
  },
  // logging 생략 가능
};

// ========== 문제 5-7: Nullable 처리 ==========

// null과 undefined를 제거하는 타입
type NonNullableDeep<T> = {
  // 여기에 구현
};

// 테스트
interface MaybeUser {
  id: number | null;
  name: string | undefined;
  profile: {
    avatar: string | null;
  } | null;
}

type DefiniteUser = NonNullableDeep<MaybeUser>;
// 모든 null, undefined가 제거되어야 함
