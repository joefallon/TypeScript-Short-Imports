// import { ClassA } from '../../deeply/nested/directory/components/ClassA';
import { ClassA } from '@components/ClassA';


export class ClassB {
    private _classA: ClassA;

    public constructor() {
        this._classA = new ClassA();
    }
}