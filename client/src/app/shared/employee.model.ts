// use command ng g class employee --type=model to create a model class
export class Employee {
    _id!: string;
    name!: string;
    position!: string;
    office!: string;
    salary!: number | null;
    age!: number | null;
}
