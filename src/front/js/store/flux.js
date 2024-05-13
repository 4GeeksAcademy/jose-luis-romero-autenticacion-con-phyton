const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			isLoggedIn:[],
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			
		/* --------- De aqui en adelante van las funciones de flux  */

		register_User: (name,email, password) =>{
			console.log("probar")
			fetch( 'https://redesigned-guacamole-pqx4jp945p4c6wr-3001.app.github.dev/signup',{
				method:'POST',
				headers:{
					'Content-Type' : 'application/json'
				},
				body : JSON.stringify({
					"name": name,
					"email": email,
					"password": password,
				   }),
		})
			.then(Response => Response.json())
			.then(data => {
				console.log(data); 
				
			})
			.catch(error => console.log('Error parcero', error))

		},
		
		}
	};
};

export default getState;
