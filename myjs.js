let idNewImg = "hhh";
let idDiv = "hh";
let srcImg = "";

function generateScreen(id, idTxt, inpValue)
{
	document.getElementById(idTxt).innerHTML = inpValue;
	html2canvas(document.querySelector(id)).then(canvas =>
	{
		canvas.toBlob(function(blob)
		{
		  	let newImg = document.createElement('img'),
		    url = URL.createObjectURL(blob);

		  	// newImg.onload = function()
		  	// {
		   //  // больше не нужно читать blob, поэтому он отменен
		   //  URL.revokeObjectURL(url);
		  	// };

		  	newImg.src = url;
		  	srcImg = url;
		  	newImg.id = idNewImg;
		 	document.body.appendChild(newImg);
		 	imgVImgHref();
		});
	});
}
function imgVImgHref()
{
	let formImgHrefA = `<a href="` + srcImg + `" download><img src="` + srcImg  + `"></a>`;
	document.getElementById(idDiv).innerHTML = formImgHrefA;
	document.getElementById(idNewImg).remove();
}



//   html2canvas(document.querySelector("#capture")).then(canvas => {
// canvas.toBlob(function(blob) {
//   let newImg = document.createElement('img'),
//       url = URL.createObjectURL(blob);

//   newImg.onload = function() {
//     // больше не нужно читать blob, поэтому он отменен
//     URL.revokeObjectURL(url);
//   };

//   newImg.src = url;
//   // window.document.location(url);my haltura
//   document.body.appendChild(newImg);
// });
// });
// // var aFileParts = ['<a id="a"><b id="b">hey!</b></a>'];
// // var oMyBlob = new Blob(aFileParts, {type : 'text/html'}); // the blob
// // window.open(URL.createObjectURL(oMyBlob));