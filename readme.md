0) intro Vue incluso trammite CDN.
Reattività = significa che il framework tiene automaticamente traccia dei cambiamenti nei dati e aggiorna la vista (HTML) in tempo reale.
Vue 3 può essere utilizzato in due modi in base all'API che si sceglie di utilizzare:
- Options API (usero questa)
- Composition API
A differenza di js dove noi potevamo creare e popolare HTML con Vue andiamo a creare l' HTML per poi popolarlo.
La parte di manipolazione del DOM viene fatta da Vue per noi, grazie a delle istruzioni Vue scritte nel HTML
Per popolare si usa interpolazione {{ }}, all' interno è possibile scrivere codice js anche se non è una buona prassi.

 Direttive Vue
 Nell' HTML possiamo usare degli attributi speciali chiamati direttive per interagire con il DOM. Alcune
 delle direttive più usate sono: https://vuejs.org/api/built-in-directives.html#built-in-directives
- v-model (input modifica il dato che modifica la rappresentazione)
- v-bind (permette di scrivere codice JS tra le "")
- v-for
- v-show (aggiunge display none)
- v-if / elseif / else
- v-on
//alternativa {{}} allert!
- v-text (inner.text)
- v-html (inner.html)

methods = proprietà il cui valore è un oggetto in cui potremo inserire tutte le funzioni 

1) Istruzioni Condizionali e Cicli
v-if e il v-else devono essere elementi html consecutivi per funzionare corretamente.
v-if e v-for non si usano insieme, v-if sostituito da v-show
v-for = singolare in nomeArray = {{}}