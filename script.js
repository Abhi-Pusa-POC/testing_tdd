//main method that will take the input and return the corresponding output
module.exports = {
    directions:['N','W','S','E'],
    main:function(start_pos,start_dir,path){
        var len = path.length;
        var current_pos = start_pos;
        var current_dir = start_dir;
        for(var i=0;i<len;i++){
            if(path[i] == 'M'){
                current_pos = this.getNextPosition(current_pos,current_dir);
            }else{
                current_dir = this.getNextDirection(current_dir,path[i]);
            }
        }
        return {current_pos,current_dir};
    },
    getNextDirection(cur_dir,turn_dir){
        
        var index = this.directions.indexOf(cur_dir);
        if(turn_dir=="L"){
            index++;
            index = index>=this.directions.length?0:index;
        }else{
            index--;
            index = index<0?this.directions.length:index;
        }
        return this.directions[index];
    },
    getNextPosition(cur_pos,cur_dir){
        var newpos = cur_pos;
        switch(cur_dir){
            case 'N': newpos["y"]++; break;
            case 'S': newpos["y"]--; break;
            case 'E': newpos["x"]++; break;
            case 'W': newpos["x"]--; break;
        }
        return newpos;
    }
}