//login
	document.getElementById('login').addEventListener('submit', function (event) {
	  event.preventDefault(); // brez tega ne pokaze alerta, ker gre kr naprej

	  const username = this.user.value.trim();
	  const password = this.pass.value.trim();

	  if (!username || !password) {
		Swal.fire({
		  title: 'Missing fields',
		  text: 'Please fill out both username and password.',
		  icon: 'warning',
		  confirmButtonText: 'OK'
		});
	  } else {
		Swal.fire({
		  title: 'Logged in!',
		  text: `Welcome, ${username}!`,
		  icon: 'success',
		  confirmButtonText: 'OK'
		});
	  }
	});


//geslo

	const gumb = document.getElementById('sh');
	const pass = document.getElementById('pass');
	const loginGumb = document.getElementById('loginGumb');
	
	pass.addEventListener('input', function () {
		// Show/hide glede na to, ali je kaj vpisano ali ne
		if (this.value.length > 0) {
			gumb.style.display = 'block';
		} else {
			gumb.style.display = 'none';
		}
	});
		
	// menja show/hide
	gumb.addEventListener('click', function () {
	  if (pass.type === 'password') {
		pass.type = 'text';
		gumb.textContent = 'Hide';
	  } else {
		password.type = 'password';
		gumb.textContent = 'Show';
	  }
	});

	//moč gesla