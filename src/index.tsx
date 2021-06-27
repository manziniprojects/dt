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
  seeds(server) {
    server.db.loadData({
      transactions: [ //transactions nome da tabela, no plural
        {

          title: 'Revisão',
          amount: Number('900'),
          type: 'retirada',
          category: 'carro',
          createdAt: new Date()
        
        },
        {

          title: 'Salário',
          amount: Number('4200'),
          type: 'deposit',
          category: 'Job',
          createdAt: new Date()
        
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


