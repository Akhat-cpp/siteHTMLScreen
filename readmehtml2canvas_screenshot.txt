html
 <div id="capture" style="padding: 10px; background: #f5da55">
    <h4 style="color: #000; ">Hello world!</h4>
</div>

  js

html2canvas(document.querySelector("#capture")).then(canvas => {
    document.body.appendChild(canvas)
});