export class Todo {
  constructor(private _text: string, private _id?: number) {}

  get text(): string {
    return this._text;
  }

  set text(text) {
    this._text = text;
  }

  get id(): number {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }
}
