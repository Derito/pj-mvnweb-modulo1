//Class
		Autenticacao = function(){}
			//Metodo 
			Autenticacao.prototype.validarCampos=function(){
				
				elementoUsuario = document.getElementById("txtUsuario");
				textoDigitadoUsuario = elementoUsuario.value;
				
				elementoSenha = document.getElementById("txtSenha");
				textoDigitadoSenha = elementoSenha.value;
				
				if(textoDigitadoUsuario =="" ){
					window.alert('Preencha o campo usuario para continuar');
					return false;
					
				}if(textoDigitadoSenha=="" ){
					
					window.alert('Preencha o campo senha para continuar');
					return false;
					
				}else{
					window.alert('Bem vindo ao sistema!');
					return true;
				}
									
		}
		//Instanciar o objecto
		aut = new Autenticacao();
		
		