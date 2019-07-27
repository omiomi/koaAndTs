interface WY {
    str: string
}
class Index2 {
    private data;
    constructor(data: WY) {
        this.data = data.str;
    }
    log() {
        console.log(this.data);
    }

}
const index2 = new Index2({
    str : "🚘 WY"
})
index2.log();