interface WY {
    str: string
}
class Index {
    private data;
    constructor(data: WY) {
        this.data = data.str;
    }
    log() {
        console.log(this.data);
    }

}
const index = new Index({
    str : "🚘 WY"
})
index.log();