interface WY{
    str:string
}
class Index{
    private data;
    constructor(data:WY){
        this.data = data;
    }
    log(){
        console.log(this.data);
    }

}