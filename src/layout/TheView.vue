<template>
    <div class="container">
        <h1>BINGO GAME</h1>
        <div class="inner-bingo">
            <BingoBoard />
            <BingoButtons />
            <NumberBoard />
        </div>
    </div>
</template>


<script>
import BingoBoard from '@/views/BingoBoard.vue';
import NumberBoard from '@/views/NumberBoard.vue';
import BingoButtons from '@/views/BingoButtons.vue';
export default {
    components: {
        BingoBoard,
        NumberBoard,
        BingoButtons
    },
    setup() {
        return {};
    },
};
</script>
<style scoped></style>