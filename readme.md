0) intro Vue incluso trammite CDN.
Vue 3 può essere utilizzato in due modi in base all'API che si sceglie di utilizzare:
- Options API (usero questa)
- Composition API
A differenza di js dove noi potevamo creare e popolare HTML con Vue andiamo a creare l' HTML per poi popolarlo.
La parte di manipolazione del DOM viene fatta da Vue per noi, grazie a delle istruzioni Vue scritte nel HTML
Per popolare si usa {{ }}, all' interno è possibile scrivere codice js anche se non è una buona prassi.

 Direttive Vue
 Nell' HTML possiamo usare degli attributi speciali chiamati direttive per interagire con il DOM. Alcune
 delle direttive più usate sono: https://vuejs.org/api/built-in-directives.html#built-in-directives
- v-model (input modifica il dato che modifica la rappresentazione)
- v-bind (permette di scrivere codice JS tra le "")
- v-for
- v-show
- v-if / elseif / else
- v-on

methods = proprietà il cui valore è un oggetto in cui potremo inserire tutte le funzioni 