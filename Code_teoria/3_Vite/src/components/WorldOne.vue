<script>
export default {
    name: 'WorldOne',
    //richiamarle nel figlio
    props: ['name', 'desc']
};
</script>

<template>
    <li>
        <div>Nome: <em>{{ name }}</em></div>
        <p>Descrizione: <em>{{ desc }}.</em></p>
    </li>
</template>

<style lang="scss"></style>
