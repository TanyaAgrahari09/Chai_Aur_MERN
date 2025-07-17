<script>
    
    function computerChoice(){
        let Num = Math.floor(Math.random() * 10);
        if (Num===0){
            return 'rock';
        } else if(Num === 1 ){
            return 'paper';
        } else{
            return 'Scissor';
        }

    }
</script>