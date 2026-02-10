async function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: 1, name: "Alice" }), 300);
  });
}

async function fetchPosts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["posts1", "posts2"]), 300);
  });
}

async function loadData() {
  const [users, posts] = await Promise.all([fetchUser(), fetchPosts()]);

  return { users, posts };
}

// const result = loadData(); // loadData 함수는 Promise를 반환.
// console.log(result);

loadData().then((r) => console.log("this is r", r));

async function loadData2() {
  try {
    // promise.all은 인자로 함수의 배열을 받는다.
    // 리턴값은 각각의 결과를 받는다.
    const [users, posts] = await Promise.all([fetchUser(), fetchPosts()]);
    return { users, posts };
  } catch (error) {
    console.log(error.message);
    return null;
  }
}
