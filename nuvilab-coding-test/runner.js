/**
 * 🧪 누비랩 라이브 코딩 — 테스트 러너
 */

const C = {
  r: "\x1b[0m", b: "\x1b[1m", d: "\x1b[2m",
  red: "\x1b[31m", grn: "\x1b[32m", ylw: "\x1b[33m",
  blu: "\x1b[34m", cyn: "\x1b[36m", mgn: "\x1b[35m",
};

function deepEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return a === b;
  if (typeof a !== typeof b) return false;
  if (typeof a === "number" && typeof b === "number") return Math.abs(a - b) < 0.01;
  if (Array.isArray(a)) {
    if (!Array.isArray(b) || a.length !== b.length) return false;
    return a.every((v, i) => deepEqual(v, b[i]));
  }
  if (typeof a === "object") {
    const ka = Object.keys(a).sort(), kb = Object.keys(b).sort();
    if (!deepEqual(ka, kb)) return false;
    return ka.every(k => deepEqual(a[k], b[k]));
  }
  return false;
}

function printHeader(num, title, diff, domain, time) {
  console.log(`\n${C.cyn}╔${"═".repeat(58)}╗${C.r}`);
  console.log(`${C.cyn}║${C.r}${C.b}  📋 문제 ${num}: ${title}${C.r}`);
  console.log(`${C.cyn}║${C.r}  ${C.d}${diff}  |  ${domain}  |  ⏱  ${time}${C.r}`);
  console.log(`${C.cyn}╚${"═".repeat(58)}╝${C.r}\n`);
}

function runStep(stepNum, label, tests, fn) {
  console.log(`${C.ylw}━━━ STEP ${stepNum}: ${label} ${"━".repeat(40)}${C.r}\n`);
  let pass = 0, fail = 0;

  for (let i = 0; i < tests.length; i++) {
    const t = tests[i];
    try {
      const result = t.async
        ? "⏳ 비동기 테스트 — 별도 검증 필요"
        : fn(...t.input);

      if (t.async) {
        console.log(`  ${C.ylw}⏳ TC${i + 1}: ${t.name} (비동기 — 수동 검증)${C.r}`);
        pass++;
        continue;
      }

      const ok = t.validate ? t.validate(result) : deepEqual(result, t.expected);
      if (ok) {
        pass++;
        console.log(`  ${C.grn}✅ TC${i + 1}: ${t.name}${C.r}`);
      } else {
        fail++;
        console.log(`  ${C.red}❌ TC${i + 1}: ${t.name}${C.r}`);
        console.log(`  ${C.d}   기대: ${JSON.stringify(t.expected)}${C.r}`);
        console.log(`  ${C.d}   결과: ${JSON.stringify(result)}${C.r}`);
      }
    } catch (e) {
      fail++;
      console.log(`  ${C.red}💥 TC${i + 1}: ${t.name} — ${e.message}${C.r}`);
    }
  }

  console.log(`\n  ${C.b}결과: ${C.grn}${pass} passed${C.r} / ${fail > 0 ? C.red + fail + " failed" : C.d + "0 failed"}${C.r}\n`);
  return { pass, fail };
}

function summary(results) {
  const total = results.reduce((a, r) => ({ p: a.p + r.pass, f: a.f + r.fail }), { p: 0, f: 0 });
  console.log(`${C.cyn}${"─".repeat(60)}${C.r}`);
  if (total.f === 0) {
    console.log(`${C.grn}${C.b}  🎉 ALL PASSED! (${total.p}/${total.p + total.f})${C.r}`);
  } else {
    console.log(`${C.ylw}  📊 총 결과: ${C.grn}${total.p} passed${C.r}, ${C.red}${total.f} failed${C.r}`);
  }
  console.log(`${C.cyn}${"─".repeat(60)}${C.r}\n`);
}

module.exports = { deepEqual, printHeader, runStep, summary };
