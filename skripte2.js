
	const gumb = document.getElementById('sh');
	const user = document.getElementById('user');
	const pass = document.getElementById('pass');
	const name = document.getElementById('name');
	const kontakt = document.getElementById('kontakt');
	const signupGumb = document.getElementById('signupGumb');
	signupGumb.disabled = true; //login gumb je onemogočen
	signupGumb.style.cursor = 'not-allowed';

	
	function preveriSignup () {
		//mail in telefon
		const kon = kontakt.value.trim();
		const mail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com|si|org)$/.test(kon);
		const telefon = /[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/.test(kon);
		
		//moč gesla
		const geslo = pass.value.trim();
		const velike = /[A-Z]/.test(geslo);
		const male = /[a-z]/.test(geslo);
		const posebni = /[!@#$%^&*()_+\-=\~`\[\]{}|\\;:'",.<>\/?]/.test(geslo);
		const stevilke = /[0-9]/.test(geslo);
		// Show/hide glede na to, ali je kaj vpisano ali ne
		if (this.value.length > 0) {
			gumb.style.display = 'block';
		} else {
			gumb.style.display = 'none';
		}
		
		//username
		const uporabnik = user.value.trim();
		const username = /^[A-Za-z0-9]+$/.test(uporabnik);
		
		if (geslo.length >= 8 && velike && male && posebni && stevilke && (mail || telefon) && username) {
			signupGumb.disabled = false;
			signupGumb.style.cursor = 'pointer';
			
		} else {
			signupGumb.disabled = true;
		}
		
	}
	
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

	pass.addEventListener('input', preveriSignup);
	user.addEventListener('input', preveriSignup);
	kontakt.addEventListener('input', preveriSignup);
	
	signupGumb.addEventListener('click', function (event){
		event.preventDefault(); // brez tega ne pokaže alerta, ker gre kr naprej
		Swal.fire({
			title: 'Signed up!',
			text: 'Welcome to Instagram',
			icon: 'success',
			confirmButtonText: 'OK'
		});
	});