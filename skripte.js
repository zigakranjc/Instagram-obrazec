//geslo
	const gumb = document.getElementById('sh');
	const user = document.getElementById('user');
	const pass = document.getElementById('pass');
	const loginGumb = document.getElementById('loginGumb');
	loginGumb.disabled = true; //login gumb je onemogočen
	loginGumb.style.cursor = 'not-allowed';

	
	pass.addEventListener('input', function () {
		// Show/hide glede na to, ali je kaj vpisano ali ne
		if (this.value.length > 0) {
			gumb.style.display = 'block';
		} else {
			gumb.style.display = 'none';
		}
		//moč gesla
		const geslo = this.value;
		const velike = /[A-Z]/.test(geslo);
		const posebni = /[!@#$%^&*()_+\-=\~`\[\]{}|\\;:'",.<>\/?]/.test(geslo);
		const stevilke = /[0-9]/.test(geslo);
	
		const uporabnik = user.value.trim();
		const mail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com|si|org)$/.test(uporabnik);
		const telefon = /[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/.test(uporabnik);
		const username = /^[A-Za-z0-9]+$/.test(uporabnik);
		
		if (geslo.length >= 8 && velike && posebni && stevilke && (mail || telefon || username)) {
			loginGumb.disabled = false;
			loginGumb.style.cursor = 'pointer';
			
		} else {
			loginGumb.disabled = true;
		}
		
	});
	
	// menja show/hide
	gumb.addEventListener('click', function () {
	  if (pass.type === 'password') {
		pass.type = 'text';
		gumb.textContent = 'Hide';
	  } else {
		pass.type = 'password';
		gumb.textContent = 'Show';
	  }
	});

	
	loginGumb.addEventListener('click', function (event){
		event.preventDefault(); // brez tega ne pokaže alerta, ker gre kr naprej
		Swal.fire({
			title: 'Logged in!',
			text: 'Welcome to Instagram',
			icon: 'success',
			confirmButtonText: 'OK'
		});
	});