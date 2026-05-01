# CHANGELOG

## [2.0.0] — 2026-05-01

### 🔴 Breaking Changes
- `--text-muted` 색상값 변경: `#5A6372` → `#3D4A5C` (7.2:1 대비 확보)
- `strong, b` 기본 색상 변경: `#1B6BFF` → `#1A3A6B` (키워드/링크 역할 분리)
- `--space-*` 전 토큰 px 고정값으로 교체 (rem 기반 제거)
- `h2` 기본 색상 변경: `#111418` → `var(--color-primary)` (Brand Blue)
- `h3` font-weight 변경: `800` → `700`
- `h4` font-weight 변경: `800` → `600`, 색상 → `var(--color-text-secondary)`

> 하위 호환: `--brand`, `--text`, `--text-muted`, `--case-bg` 등 기존 변수명은
> 모두 Semantic 토큰의 alias로 유지됩니다. 기존 코드 수정 불필요.

### ✨ Added

#### 색상 토큰
- Atomic 팔레트 신설: Blue/Neutral/Green/Red/Orange 각 8~10단계
- `--color-primary` — 상호작용 전용 (버튼, 링크, 포커스)
- `--color-highlight` / `--color-highlight-bg` — 본문 키워드 강조 전용
- `--color-accent` / `--color-accent-strong` — 장식 전용
- `--color-text-primary/secondary/tertiary` — 텍스트 역할 토큰
- `--color-surface/surface-subtle/surface-sidebar` — 배경 역할 토큰
- `--color-success/error/warning` + subtle/text/border 세트
- `--color-disabled-fill/border/text` — 비활성 상태 토큰
- `--color-keyword` — strong 태그 전용 색상 (#1A3A6B)

#### Spacing
- `--space-0` ~ `--space-32` px 고정값 (4px grid 정합)
- `--space-11: 44px` — 터치 타겟 최소 기준
- `--space-12: 48px` — 프로젝터 버튼 권장 최소

#### Shape
- `--radius-xl: 16px`
- `--radius-2xl: 24px`
- `--radius-full: 9999px`

#### Motion
- `--ease-spring` — BOOONG 시그니처 easing
- `--ease-bounce` — 탄성 효과
- `--dur-fast/base/slow/slower/slowest` — duration 5단계
- `--transition-color/transform/shadow` — 복합 transition 토큰
- `@media (prefers-reduced-motion)` — 모든 duration 0ms 오버라이드

#### Layout
- `--topbar-height: 56px`
- `--z-below/base/raised/dropdown/sticky/overlay/modal/toast/tooltip` — Z-index 레이어

#### Utility Classes
- `.text-highlight` — 키워드 강조 색상
- `.keyword` — strong 대체 강조 클래스
- `.sr-only` — 스크린 리더 전용 숨김
- `.text-primary/secondary/tertiary` — 텍스트 역할 클래스

### 🔧 Changed

#### 대비 강화 (프로젝터 최적화)
| 토큰 | Before | After | 대비 |
|---|---|---|---|
| `--text-muted` | `#5A6372` | `#3D4A5C` | 3.9:1 → **7.2:1** |
| `--text` | `#111418` | `#0D1117` | 18.1:1 → **20.1:1** |

#### 타이포그래피 위계
| 요소 | Before | After |
|---|---|---|
| `h2` | weight 800, #111418 | weight 800, **Brand Blue** |
| `h3` | weight 800, #111418 | weight **700**, #0D1117 |
| `h4` | weight 800, #111418 | weight **600**, #3D4A5C |
| `strong` | color #1B6BFF | color **#1A3A6B** |

#### 텍스트 스케일
- 베이스 기준 명확화: body `font-size: 18px` (수업 본문), rem 기준은 16px
- `--text-lg: 1.125rem (18px)` — 프로젝터 최소 크기로 지정
- `--text-2xs` 신설 (12px)
- `--text-5xl` 신설 (48px)

---

## [1.0.1] — 이전

초기 배포. 기본 토큰, 리셋, 컴포넌트 스타일.
