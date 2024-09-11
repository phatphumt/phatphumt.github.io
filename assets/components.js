document.querySelector("navbar").innerHTML = `
<nav>
  <h1><a href="./index.html">เปียโน</a></h1>
  <ul>
    <li><a href="./index.html">หน้าหล้ก</a></li>
    <li><a href="./register.html">สมัครสมาชิก</a></li>
  </ul>
</nav>
`

document.querySelector("page-footer").innerHTML = `

<div id="comments" style="text-align: center; margin-bottom: 2rem">
</div>

<form class="comment">
  <input placeholder="แสดงความคิดเห็น" />
  <button class="send"><i class="material-icons">send</i></button>
</form>


<footer>
  <h3>จัดทำโดย</h3>
  <p><a href="./credits.html#p1">นายพัฒน์ภูมิ ทาสระคู</a></p>
  <p><a href="./credits.html#p2">ด.ช.พศุตม์ เกศวพิทักษ์</a></p>
  <p><a href="./credits.html#p3">นายกิณคาวรัก รานานารา</a></p>
  <a href="./credits.html">ดูเพิ่มเติม</a>
</footer>
`

let val = ""
const input = document.querySelector("input")
const target = document.querySelector("#comments")


document.querySelector('form.comment').addEventListener("submit", (e) => {
  val = input.value
  e.preventDefault()
  input.value = ""
  console.log(val)
  if (val) {
    const p = document.createElement("p")
    const time = new Date()
    p.textContent = `คุณ (${time.toLocaleTimeString()}): ${val}`
    target.appendChild(p)
  }
  console.log(e)
})

function onSubmit(e) {
  e.preventDefault()
}

{/* <div class="card-container">
      <div class="card card1">
        <div class="card-child">
          <h3>ประวัติของเปียโน</h3>
          <p>ศึกษาและเรียนรู้ที่มา ต้นกำเนิด และประวัติของเปียโน</p>
          <button id="history">เรียนรู้เพิ่มเติม</button>
        </div>
      </div>
      <div class="card card1">
        <div class="card-child">
          <h3>ประวัติของเปียโน</h3>
          <p>ศึกษาและเรียนรู้ที่มา ต้นกำเนิด และประวัติของเปียโน</p>
          <button id="history">เรียนรู้เพิ่มเติม</button>
        </div>
      </div>
    </div> */}