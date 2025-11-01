
# 🌐 HTML + CSS + Responsive Design Notes

---

## ⚙️ CSS Boilerplate (Base Setup)

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  height: 100%;
  font-family: Arial, sans-serif;
  scroll-behavior: smooth;
}
````

✅ **Why use it:**
Resets default browser styles, gives clean start for consistent spacing and layout.

---

## 🎨 Selectors & Styling Basics

| Selector  | Symbol   | Used For              | Example                   |
| --------- | -------- | --------------------- | ------------------------- |
| **ID**    | `#`      | Unique element        | `#main { color: red; }`   |
| **Class** | `.`      | Reusable styling      | `.box { padding: 10px; }` |
| **Tag**   | tag name | All tags of that type | `p { font-size: 14px; }`  |

---

## 📏 Units & Sizing

| Unit                 | Description                         | Example                        |
| -------------------- | ----------------------------------- | ------------------------------ |
| **px**               | Fixed pixels (exact size)           | `width: 100px;`                |
| **%**                | Relative to parent                  | `width: 50%;`                  |
| **vw/vh**            | Viewport width/height               | `width: 100vw; height: 100vh;` |
| **vmax/vmin**        | Max/min of viewport                 | `font-size: 3vmax;`            |
| **em**               | Relative to parent font size        | `font-size: 2em;`              |
| **rem**              | Relative to root (`html`) font size | `font-size: 1.5rem;`           |
| **ch**               | Width of “0” character              | `width: 40ch;`                 |
| **lh (line-height)** | Space between text lines            | `line-height: 1.5;`            |

---

## 🧱 Box Model

```
┌──────────────────────────────┐
│         Margin (Outside)     │ ← space outside element
│  ┌────────────────────────┐  │
│  │     Border Area        │  │
│  │ ┌────────────────────┐ │  │
│  │ │   Padding (Inside) │ │  │
│  │ │ ┌────────────────┐ │ │  │
│  │ │ │   Content      │ │ │  │
│  │ │ └────────────────┘ │ │  │
│  │ └────────────────────┘ │  │
│  └────────────────────────┘  │
└──────────────────────────────┘
```

* **margin:** space *outside* the box → separates from other elements
  ➤ `margin: 20px 10px; /* top/bottom left/right */`
* **padding:** space *inside* the box → between content & border
  ➤ `padding: 10px 15px;`

---

## 📍 Positioning

| Property     | Meaning                                      | Notes                                            |
| ------------ | -------------------------------------------- | ------------------------------------------------ |
| **static**   | default                                      | no special positioning                           |
| **relative** | moves element *within its space*             | sets boundary for child `absolute` elements      |
| **absolute** | places element *on top layer*                | positioned relative to nearest `relative` parent |
| **fixed**    | sticks to screen                             | stays in same place while scrolling              |
| **sticky**   | switches from static to fixed when scrolling | good for navbars                                 |

🧠 **Tip:**
Use `position: relative;` on parent + `position: absolute;` on child → for “dabbe ke andar dabba” layout.

---

## 🔄 Flexbox (1D Layout)

```css
.container {
  display: flex;
  justify-content: center; /* horizontal */
  align-items: center; /* vertical */
}
```

| Property          | Controls                | Example                               |
| ----------------- | ----------------------- | ------------------------------------- |
| `justify-content` | main axis (left–right)  | `space-between`, `center`, `flex-end` |
| `align-items`     | cross axis (top–bottom) | `center`, `flex-start`                |
| `flex-direction`  | row or column           | `flex-direction: column;`             |

📦 **Use for:** buttons, navbars, cards, side-by-side layout.

---

## 🧩 CSS Grid (2D Layout)

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 10px;
}
```

| Property                | Meaning                                  |
| ----------------------- | ---------------------------------------- |
| `grid-template-columns` | defines columns (e.g., `repeat(3, 1fr)`) |
| `grid-template-rows`    | defines rows                             |
| `grid-auto-flow`        | controls how items fill (row / column)   |

🧠 **Use for:** big layouts → dashboards, galleries, full-page structures.

---

## 📱 Responsive Design

### 📐 Screen Orientation

* **Landscape:** width > height → laptops, TVs
* **Portrait:** height > width → phones

### 💡 Media Queries

```css
@media (max-width: 768px) {
  body {
    background-color: lightblue;
  }
}
```

| Use Case | Example             |
| -------- | ------------------- |
| Mobile   | `max-width: 600px`  |
| Tablet   | `max-width: 768px`  |
| Laptop   | `max-width: 1024px` |
| Desktop  | `min-width: 1200px` |

📱 **Tip:** Always test your layout on multiple screen sizes!

---

## 🧰 Quick Summary Cheatsheet

* `#id` → unique element
* `.class` → reusable style
* `%` → relative to parent
* `px` → fixed size
* `vw/vh` → relative to screen
* `margin` → outside space
* `padding` → inside space
* `position: absolute` → floats above others
* `flex` → side-by-side alignment
* `grid` → structured big layout
* `media query` → responsive design