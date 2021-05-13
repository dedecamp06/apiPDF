

# API REPORT EJS

---

  

### Versão 1.0.0


# Descrição

API que recebe um JSON como objeto dentro do body e trata esses dados dentro de um arquivo de leitura e retorna um arquivo de EJS ou PDF escolha do usuario.

Principais Tecnologias utilizadas:

- JavaScript
- NodeJS
- Ejs
- Arquitetura MVC
- REST


# Exemplo de body
>  { 
    "doc": 
	[
		{ 
        "rua": "Vergueiro", 
        "cidade": "São Paulo",
			  "comissao": 550
    } ,
			{ 
        "rua": "teste", 
        "cidade": "teste",
			  "comissao": 5501
    } 
		]
}

# Retorno Endpoints


> **/pdf** : Resposta [200]<ok> - post.


