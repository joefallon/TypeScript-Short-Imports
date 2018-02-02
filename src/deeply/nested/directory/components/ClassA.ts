// import { ClassB } from '../../../../other/domain/ClassB';
import { ClassB } from '@domain/ClassB';


export class ClassA {
    private _classB: ClassB;

    public constructor() {
        this._classB = new ClassB();
    }
}