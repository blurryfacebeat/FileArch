export class PostModel {
  constructor(
    readonly id: string,
    readonly title: string,
    readonly text: string,
    readonly author: string,
    readonly createdAt: Date,
  ) {}
}
