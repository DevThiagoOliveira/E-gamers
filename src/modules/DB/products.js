export default class productSearch {
    constructor(idUser, username) {
        this.idUser = idUser;
        this.username = username;
        this.product();
    }

    async product(url = '') {
        try {
            const data = {
                id_user: this.idUser,
                user_name: this.username
            };
            
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            
            if (!response.ok) {
                throw new Error('Erro na solicitação. Código de status: ' + response.status);
            }
            
            const responseData = await response.json();

            return responseData;
            
        } catch (err) {
            console.error(err);
        }
    }
}