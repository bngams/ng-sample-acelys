export class Product {

    private _category;

    constructor(
        public id: number,
        public name: string,
        public price: number
    ) { }

    get category(): string {
        return this._category;
    }

    set category(cat: string) {
        // 
        this._category = cat;
    }
}
