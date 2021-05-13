

# API REPORT EJS

---

  

##### Versão 1.0.0


## Descrição

API que recebe um JSON como objeto e retorna uma leitura de EJS ou PDF conforme necessidade.

Principais Tecnologias utilizadas:

- JavaScript
- NodeJS
- Ejs
- Arquitetura MVC
- REST


## Exemplo de body
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

## Retorno Endpoints


> **/pdf** : Resposta [200]<ok> - post.
> 
![image](https://user-images.githubusercontent.com/16025244/118169418-4c1e0400-b3ff-11eb-8f8f-964d0b61780e.png)


