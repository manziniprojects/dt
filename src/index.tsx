import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App'
import { createServer, Model } from 'miragejs'

createServer({
  //BD do mirage
  models: {
    transaction: Model,

  },

  //iniciar o bd com alguma info
  seeds(server){
    server.db.loadData({
      transactions:[ //transactions nome da tabela, no plural
        {
          id: 1,
         title: 'Freelancer',
         type:'deposito',
         category: 'dev',
         amount: '6000',
         createdAt: new Date('2021-02-02 09:00:00')
        },

        {
        id: 2,
         title: 'Casa',
         type:'retirada',
         category: 'dev',
         amount: '4000',
         createdAt: new Date('2021-08-09 09:00:00')
        }
      ] 
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })
    //add rota de post
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
      //mandando dados da transaçao
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


