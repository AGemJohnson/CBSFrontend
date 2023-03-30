import { createApp, h } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

//import Vue from 'vue'
import { ApolloClient, InMemoryCache } from '@apollo/client/core' 
import { createApolloProvider } from '@vue/apollo-option'
import VueApolloComponents from '@vue/apollo-components'

// Cache implementation
const cache = new InMemoryCache()
  
// Create the apollo client
const apolloClient = new ApolloClient({
    cache,
    uri: 'http://localhost:8000/graphql/'
})

const apolloProvider = createApolloProvider({
    defaultClient: apolloClient,
})

const app = createApp({
    render: () => h(app)
})

app.use(apolloProvider)

app.use(VueApolloComponents)

//Vue.config.productionTip = false

//new Vue({
  //router,
  //store,
  //render: h => h(App)
//}).$mount('#app')


createApp(App).use(store).use(router).mount('#app')
