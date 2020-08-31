let contador = 0;
let array = document.querySelectorAll('.y3zKF');
array.forEach((v , index) => {
	setTimeout(() => {
	if(!v.classList.contains('._8A5w5')){
		v.click();
		contador++;
		console.log('Alan já seguiu ' + contador + " pessoas");
	}
	else{
		console.log('Você já seguiu essa pessoa');
	}
}, index * 20000)
});
