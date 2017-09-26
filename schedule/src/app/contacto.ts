export class Contact {

    constructor(
        public id: number,
        public name: string,
        public lastName: string,
        public mobile?: string,
        public email?: string,
        public facebook?: string,
        public twitter?: string
    ) { }
}
